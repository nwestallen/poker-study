(ns app.components.pokertable
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [shadow.css :refer [css]]
            [clojure.string :as str]
            [app.components.cards :refer [card-img]]
            [app.components.felt :refer [Felt]]
            [app.utils.tablelogic :refer [stack-chips zip-play parse-actions]]
            ["react-dom/client" :as rdom]))


(defnc PokerSeat [{:keys [active title fold :stack]}]
  (d/svg {:width "100%", :viewBox (str "0 0 " 100 " " 100), :fill "none" :opacity (if fold 0.3 1)}
         (d/circle {:cx 50 :cy 50 :fill (if active  "rgb(239 68 68)" "rgb(14 165 233)")  :r 44 :stroke (if active "rgb(60 60 60)" "white") :stroke-width 6})
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
   :Black "../BlackChip.svg"
   :Green "../GreenChip.svg"
   :Red "../RedChip.svg"
   :Blue "../BlueChip.svg"
   })

(defnc ChipStack [{:keys [amount]}]
  (d/div {:class-name (css {:padding-bottom "100%"} :relative)}
         (map #(d/img {:src ((first %) chip-img) :class-name (get chip-pos (second %))}) (stack-chips amount))
         ))

(defnc Bet [{:keys [amount]}]
  (if (pos? amount) (d/div {:class-name (css :text-white {:width "100%"} :p-1 {:font-size "0.65em"} :flex :flex-row
                                      :rounded :text-center :items-center)}
                    (d/div {:class-name (css {:width "24px"} :p-1 :m-1)} ($ ChipStack {:amount (* 2 amount)}))
                    (d/p {:class-name (css {:background "rgb(120 120 120)"} :p-0.5 :h-fit :rounded-md)}(str amount "BB")))))

(defnc PokerTable [{:keys [cards active-seat bets stacks folds]}]
  (d/div {:class-name (css :relative {:width "100%"} :flex :border :border-black :rounded-xl)}
         ($ Felt {:fill "rgb(34 197 94)"  :border "rgb(60 60 60)" :border-width "10" :width "700" :height "300" :padding "10px"})
         (d/div {:class-name (css {:width "39%"} :flex :absolute {:top "33%"} {:left "30%"})}
                (map #(d/div {:class-name (css {:width "20%"})} (card-img %)) cards)
                )
         (d/div {:class-name (css {:width "4%"} {:top "24%"} {:left "32%"} {:height "8%"} :absolute)} ($ DealerButton {:color "white" :title "DEALER"}))
         (d/div {:class-name (css {:width "9%"} {:top "-5%"} {:left "30%"} {:height "16%"} :absolute)} ($ PokerSeat {:title "BTN" :active (= active-seat :BTN) :stack (:BTN stacks) :fold (contains? folds :BTN)}))
         (d/div {:class-name (css {:width "9%"} {:top "20%"} {:left "0%"} {:height "16%"} :absolute)}($ PokerSeat {:title "CO" :active (= active-seat :CO) :stack (:CO stacks) :fold (contains? folds :CO)}))
         (d/div {:class-name (css {:width "9%"} {:top "65%"} {:left "0%"} {:height "16%"} :absolute)}($ PokerSeat {:title "HJ" :active (= active-seat :HJ) :stack (:HJ stacks) :fold (contains? folds :HJ)}))
         (d/div {:class-name (css {:width "9%"} {:top "89%"} {:left "21%"} {:height "16%"} :absolute)}($ PokerSeat {:title "LJ" :active (= active-seat :LJ) :stack (:LJ stacks) :fold (contains? folds :LJ)}))
         (d/div {:class-name (css {:width "9%"} {:top "89%"} {:left "46%"} {:height "16%"} :absolute)}($ PokerSeat {:title "UTG2" :active (= active-seat :UTG2) :stack (:UTG2 stacks) :fold (contains? folds :UTG2)}))
         (d/div {:class-name (css {:width "9%"} {:top "89%"} {:left "71%"} {:height "16%"} :absolute)}($ PokerSeat {:title "UTG1" :active (= active-seat :UTG1) :stack (:UTG1 stacks) :fold (contains? folds :UTG1)}))
         (d/div {:class-name (css {:width "9%"} {:top "65%"} {:left "92%"} {:height "16%"} :absolute)}($ PokerSeat {:title "UTG" :active (= active-seat :UTG) :stack (:UTG stacks) :fold (contains? folds :UTG)}))
         (d/div {:class-name (css {:width "9%"} {:top "20%"} {:left "92%"} {:height "16%"} :absolute)}($ PokerSeat {:title "BB" :active (= active-seat :BB) :stack (:BB stacks) :fold (contains? folds :BB)}))
         (d/div {:class-name (css {:width "9%"} {:top "-5%"} {:left "62%"} {:height "16%"} :absolute)}($ PokerSeat {:title "SB" :active (= active-seat :SB) :stack (:SB stacks) :fold (contains? folds :SB)}))
         (d/div {:class-name (css {:top "44%"} {:left "44%"} :absolute)} ($ Bet {:amount (apply + (vals bets))}))
         (d/div {:class-name (css {:top "14%"} {:left "30.5%"} :absolute)} ($ Bet {:amount (:BTN bets)}))
         (d/div {:class-name (css {:top "14%"} {:left "62.5%"} :absolute)} ($ Bet {:amount (:SB bets)}))
         (d/div {:class-name (css {:top "27%"} {:left "79%"} :absolute)} ($ Bet {:amount (:BB bets)}))
         (d/div {:class-name (css {:top "27%"} {:left "10%"} :absolute)} ($ Bet {:amount (:CO bets)}))
         (d/div {:class-name (css {:top "60%"} {:left "10%"} :absolute)} ($ Bet {:amount (:HJ bets)}))
         (d/div {:class-name (css {:top "60%"} {:left "79%"} :absolute)} ($ Bet {:amount (:UTG bets)}))
         (d/div {:class-name (css {:top "73%"} {:left "70%"} :absolute)} ($ Bet {:amount (:UTG1 bets)}))
         (d/div {:class-name (css {:top "73%"} {:left "23%"} :absolute)} ($ Bet {:amount (:LJ bets)}))
         (d/div {:class-name (css {:top "73%"} {:left "46%"} :absolute)} ($ Bet {:amount (:UTG2 bets)}))
         )
  )


(defnc ActionForm [{:keys [on-submit]}]
  (let [[state set-state] (hooks/use-state "")]
  (d/form {:class-name (css :h-fit {:width "50%"} :m-3 :rounded-lg :p-2 {:background-color "rgb(175 175 175)"}) :on-submit #(do (.preventDefault %) (.log js/console (prn-str state)) (on-submit state))}
          (d/h3 {:class-name (css :font-bold)} "Action Sequence Input")
          (d/div (d/input {:type "text" :class-name (css :border :border-black :w-full) :value state :on-change (fn [e] (set-state e.target.value))}))
   (d/input {:type "submit" :value "Submit" :class-name (css :rounded-md :font-bold :bg-sky-500 :text-white :py-1 :px-2 :mt-2 [:hover :bg-sky-400 :cursor-pointer])})))
  )

(defnc TableContainer [{:keys [seats stack-size active-seat]}]
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
    (hooks/use-effect :once
      (set-bets! #(assoc % :SB 0.5 :BB 1))
      (set-stacks! #(update % :SB - 0.5))
      (set-stacks! #(update % :BB - 1))
      (set-active-seat! :UTG)
      )
    (<>
      ($ ActionForm {:on-submit (fn [state] (set-table! state))})
      ($ PokerTable {:active-seat active-seat :bets bets :stacks stacks :folds folds})
      )
    ))

