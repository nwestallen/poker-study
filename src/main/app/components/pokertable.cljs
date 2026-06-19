(ns app.components.pokertable
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [shadow.css :refer [css]]
            [clojure.string :as str]
            [app.components.cards :refer [card-img]]
            [app.components.felt :refer [Felt]]
            [app.components.actionform :refer [ActionForm]]
            [app.utils.tablelogic :refer [stack-chips zip-play parse-actions]]
            ["react-dom/client" :as rdom]))


(defnc PokerSeat [{:keys [active title fold :stack]}]
  (d/svg {:width "100%", :viewBox (str "0 0 " 100 " " 100), :fill "none" :opacity (if fold 0.3 1)}
         (d/circle {:cx 50 :cy 50 :fill (if active  "rgb(239 68 68)" "rgb(14 165 233)")  :r 44 :stroke (if active "rgb(60 60 60)" "white") :stroke-width 6 :style {:filter "drop-shadow(2px 2px 2px rgba(0,0,0,0.2))"}})
         (d/text {:x 50 :y 45 :fill "white" :text-anchor "middle" :dominant-baseline "middle" :font-size "1.5em" :font-weight "bold"} title)
         (d/text {:x 50 :y 70 :fill "white" :text-anchor "middle" :dominant-baseline "middle" :font-size "1.2em"} (str stack "BB"))
         ))

(defnc DealerButton [{:keys [active title color]}]
  (d/svg {:width "100%", :viewBox (str "0 0 " 100 " " 100), :fill "none"}
         (d/circle {:cx 50 :cy 50 :fill color :r 50})
         (d/text {:x 50 :y 50 :fill "black" :text-anchor "middle" :dominant-baseline "middle" :font-size "1.5em" :font-weight "bold"} title)
  ))

(def chip-pos
  [
   (css :absolute {:bottom "0%"})
   (css :absolute {:bottom "7%"})
   (css :absolute {:bottom "14%"})
   (css :absolute {:bottom "21%"})
   (css :absolute {:bottom "28%"})
   (css :absolute {:bottom "35%"})
   (css :absolute {:bottom "42%"})
   (css :absolute {:bottom "49%"})
   (css :absolute {:bottom "56%"})
   (css :absolute {:bottom "63%"})
   (css :absolute {:bottom "70%"})
   (css :absolute {:bottom "77%"})
   (css :absolute {:bottom "84%"})
   (css :absolute {:bottom "91%"})
   (css :absolute {:bottom "98%"})
   (css :absolute {:bottom "105%"})
   ])

(def chip-img
  {
   :Black "./BlackChip.svg"
   :Green "./GreenChip.svg"
   :Red "./RedChip.svg"
   :Blue "./BlueChip.svg"
   })

(def ^:private felt-w 700)
(def ^:private felt-h 300)
(def ^:private ring-cx (/ felt-w 2))
(def ^:private ring-cy (/ felt-h 2))
(def ^:private ring-a 348)
(def ^:private ring-b 152)
(def ^:private ring-exp 0.83)
(def ^:private bottom-y 289)
(def ^:private bottom-cos -0.45)
(def ^:private bet-k 0.62)
(def ^:private tau (* 2 js/Math.PI))

(defn- ->pct
  "Felt-unit point [x y] -> container {:left :top} as percent strings."
  [[x y]]
  {:left (str (* 100 (/ x felt-w)) "%")
   :top  (str (* 100 (/ y felt-h)) "%")})

(defn- spow
  "Signed power: keeps the sign of `t` while raising its magnitude to `e`."
  [t e]
  (* (js/Math.sign t) (js/Math.pow (js/Math.abs t) e)))

(defn- seat-point
  "Felt-unit [x y] for seat at vector index `i` of `n` total seats, computed in
   the felt's 700x300 frame (aspect-correct), ready for `->pct`.

   Seats sit at even angular steps clockwise from top-center. The top and sides
   follow a superellipse that hugs the felt (a rounded rectangle wider at the
   arches than an ellipse): `ring-a`/`ring-b` are its half-extents and `ring-exp`
   its shape, where 1.0 is an ellipse and < 1 bulges the arches outward. Seats
   whose cos θ is below `bottom-cos` snap onto a flat bottom rail at `bottom-y`
   so the bottom row is level. The phase keeps the top-center clear (board area)
   with the blinds straddling it: slot 0 sits just clockwise of top-center, so
   the passed action-ordered seats land in the same orientation as the original
   hand-placed 9-max layout."
  [i n]
  (let [slot (mod (+ i 2) n)
        theta (* (/ (+ slot 0.5) n) tau)
        c (js/Math.cos theta)
        y (if (< c bottom-cos)
            bottom-y
            (- ring-cy (* ring-b (spow c ring-exp))))]
    [(+ ring-cx (* ring-a (spow (js/Math.sin theta) ring-exp))) y]))

(defn- lerp-to-center [[x y] k]
  [(+ ring-cx (* k (- x ring-cx)))
   (+ ring-cy (* k (- y ring-cy)))])

(defnc ChipStack [{:keys [amount]}]
  (d/div {:class-name (css {:padding-bottom "100%"} :relative)}
         (map #(d/img {:src ((first %) chip-img) :class-name (get chip-pos (second %))}) (stack-chips amount))
         ))

(defnc Bet [{:keys [amount]}]
  (if (pos? amount) (d/div {:class-name (css :text-white {:width "100%"} :p-1 {:font-size "1.5cqw"} :flex :flex-row
                                      :rounded :text-center :items-center)}
                    (d/div {:class-name (css {:width "5.7cqw"} :p-1 :m-1)} ($ ChipStack {:amount (* 2 amount)}))
                    (d/p {:class-name (css {:background "rgb(120 120 120)"} {:width "70%"} :p-0.5 :h-fit :rounded-md :shadow-md)}(str amount "BB")))))

(defnc PokerTable [{:keys [seats cards active-seat bets stacks folds]}]
  (let [n (count seats)
        centered (fn [{:keys [left top]}]
                   {:left left :top top :transform "translate(-50%,-50%)"})]
    (d/div {:class-name (css :relative {:width "100%"} :border :border-black :rounded-xl :shadow-md :p-7)}
     (d/div {:class-name (css :relative {:width "100%"} {:container-type "inline-size"} :flex :text-shadow-sm)}
         ($ Felt {:fill "rgb(34 197 94)"  :border "rgb(60 60 60)" :border-width "10" :width felt-w :height felt-h :padding "10px"})
         (d/div {:class-name (css {:width "39%"} :flex :absolute {:top "33%"} {:left "30%"})}
                (map #(d/div {:class-name (css {:width "20%"})} (card-img %)) cards)
                )
         (d/div {:class-name (css {:width "4%"} {:top "24%"} {:left "32%"} {:height "8%"} :absolute)} ($ DealerButton {:color "white" :title "DEALER"}))
         (map-indexed
           (fn [i s]
             (d/div {:key (str "seat-" s)
                     :class-name (css {:width "9%"} {:height "16%"} :absolute)
                     :style (centered (->pct (seat-point i n)))}
                    ($ PokerSeat {:title (name s) :active (= active-seat s)
                                  :stack (get stacks s) :fold (contains? folds s)})))
           seats)
         (d/div {:class-name (css {:top "44%"} {:left "44%"} :absolute)} ($ Bet {:amount (apply + (vals bets))}))
         (map-indexed
           (fn [i s]
             (d/div {:key (str "bet-" s)
                     :class-name (css :absolute)
                     :style (centered (->pct (lerp-to-center (seat-point i n) bet-k)))}
                    ($ Bet {:amount (get bets s)})))
           seats)
         )))
  )

(defnc TableContainer [{:keys [seats stack-size active-seat actions]}]
  (let [
        [stacks set-stacks!] (hooks/use-state (zipmap seats (repeat stack-size)))
        [bets set-bets!] (hooks/use-state (zipmap seats (repeat 0)))
        [active-seat set-active-seat!] (hooks/use-state :SB)
        [folds set-folds!] (hooks/use-state #{})
        set-table! (fn [state]
                     (let [acts (str/replace state #"AI" (str stack-size))]
                     (do
                     (doseq [[f s] (zip-play seats (parse-actions acts))]
                       (if (= s :fold) (set-folds! #(conj % f))
                           (do (set-bets! #(assoc % f s))
                               (set-stacks! #(assoc % f (- stack-size s))))))
                     (set-active-seat! (first (last (zip-play seats (parse-actions (str acts "-X"))))))
                     )))]
    (hooks/use-effect [actions]
      (set-folds! #{})
      (set-bets! #(assoc % :SB 0.5 :BB 1))
      (set-stacks! #(update % :SB - 0.5))
      (set-stacks! #(update % :BB - 1))
      (set-table! actions)
      )
    (hooks/use-effect :once
                      (set-active-seat! (first seats)))
      ($ PokerTable {:seats seats :active-seat active-seat :bets bets :stacks stacks :folds folds})
    ))

