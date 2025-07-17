(ns app.components.pokertable
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cards :refer [card-img]]
            [app.components.felt :refer [Felt]]
            [app.utils.tablelogic :refer [stack-chips]]
            ["react-dom/client" :as rdom]))


(defnc PokerSeat [{:keys [active title fold]}]
  (d/svg {:width "100%", :viewBox (str "0 0 " 100 " " 100), :fill "none" :opacity (if fold 0.3 1)}
         (d/circle {:cx 50 :cy 50 :fill (if active  "rgb(239 68 68)" "rgb(14 165 233)")  :r 44 :stroke (if active "rgb(60 60 60)" "white") :stroke-width 6})
         (d/text {:x 50 :y 50 :fill (if active "white" "white") :text-anchor "middle" :dominant-baseline "middle" :font-size "1.6em" :font-weight "bold"} title)
         ))

(defnc DealerButton [{:keys [active title color]}]
  (d/svg {:width "100%", :viewBox (str "0 0 " 100 " " 100), :fill "none"}
         (d/circle {:cx 50 :cy 50 :fill color :r 50})
         (d/text {:x 50 :y 50 :fill "black" :text-anchor "middle" :dominant-baseline "middle" :font-size "1.5em" :font-weight "bold"} title)
  ))

(defnc Bet [{:keys [amount]}]
  (if amount (d/div {:class-name (css :text-white :h-fit :w-fit :p-1 {:font-size "0.9em"}
                                      :rounded :text-center :align-middle {:background "rgb(111, 176, 128)"})} amount)))

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

(defnc PokerTable [{:keys [cards active-seat bets pot]}]
  (d/div {:class-name (css :relative {:width "100%"} :flex :border :border-black :rounded-xl)}
         ($ Felt {:fill "rgb(34 197 94)"  :border "rgb(60 60 60)" :border-width "10" :width "700" :height "300" :padding "10px"})
         (d/div {:class-name (css {:width "39%"} :flex :absolute {:top "33%"} {:left "30%"})}
                (map #(d/div {:class-name (css {:width "20%"})} (card-img %)) cards)
                )
         (d/div {:class-name (css {:width "4%"} {:top "24%"} {:left "32%"} {:height "8%"} :absolute)} ($ DealerButton {:color "white" :title "DEALER"}))
         (d/div {:class-name (css :absolute {:width "3%"} {:top "22%"} {:left "38%"})} ($ ChipStack {:amount 257}))
         (d/div {:class-name (css {:width "8%"} {:top "-5%"} {:left "30%"} {:height "16%"} :absolute)} ($ PokerSeat {:title "BTN" :active (= active-seat "BTN")}))
         (d/div {:class-name (css {:width "8%"} {:top "20%"} {:left "0%"} {:height "16%"} :absolute)}($ PokerSeat {:title "CO" :active (= active-seat "CO")}))
         (d/div {:class-name (css {:width "8%"} {:top "65%"} {:left "0%"} {:height "16%"} :absolute)}($ PokerSeat {:title "HJ" :active (= active-seat "HJ")}))
         (d/div {:class-name (css {:width "8%"} {:top "89%"} {:left "21%"} {:height "16%"} :absolute)}($ PokerSeat {:title "LJ" :active (= active-seat "LJ")}))
         (d/div {:class-name (css {:width "8%"} {:top "89%"} {:left "46%"} {:height "16%"} :absolute)}($ PokerSeat {:title "UTG2" :active (= active-seat "UTG2")}))
         (d/div {:class-name (css {:width "8%"} {:top "89%"} {:left "71%"} {:height "16%"} :absolute)}($ PokerSeat {:title "UTG1" :active (= active-seat "UTG1")}))
         (d/div {:class-name (css {:width "8%"} {:top "65%"} {:left "92%"} {:height "16%"} :absolute)}($ PokerSeat {:title "UTG" :active (= active-seat "UTG")}))
         (d/div {:class-name (css {:width "8%"} {:top "20%"} {:left "92%"} {:height "16%"} :absolute)}($ PokerSeat {:title "BB" :active (= active-seat "BB")}))
         (d/div {:class-name (css {:width "8%"} {:top "-5%"} {:left "62%"} {:height "16%"} :absolute)}($ PokerSeat {:title "SB" :active (= active-seat "SB")}))
         (d/div {:class-name (css {:top "44%"} {:left "44%"} :text-white :h-fit :w-fit :absolute :p-1 :rounded :text-center :align-middle {:background "rgb(111, 176, 128)"})} pot)
         (d/div {:class-name (css {:top "12%"} {:left "30.5%"} :absolute)} ($ Bet {:amount (:BTN bets)}))
         (d/div {:class-name (css {:top "12%"} {:left "62.5%"} :absolute)} ($ Bet {:amount (:SB bets)}))
         (d/div {:class-name (css {:top "27%"} {:left "84%"} :absolute)} ($ Bet {:amount (:BB bets)}))
         (d/div {:class-name (css {:top "27%"} {:left "9%"} :absolute)} ($ Bet {:amount (:CO bets)}))
         (d/div {:class-name (css {:top "64%"} {:left "9%"} :absolute)} ($ Bet {:amount (:HJ bets)}))
         (d/div {:class-name (css {:top "64%"} {:left "84%"} :absolute)} ($ Bet {:amount (:UTG bets)}))
         (d/div {:class-name (css {:top "79%"} {:left "70%"} :absolute)} ($ Bet {:amount (:UTG1 bets)}))
         (d/div {:class-name (css {:top "79%"} {:left "23%"} :absolute)} ($ Bet {:amount (:LJ bets)}))
         (d/div {:class-name (css {:top "79.5%"} {:left "46%"} :absolute)} ($ Bet {:amount (:UTG2 bets)}))
         )
  )


;;Action URL: F-F-F-F-F-F-F-R3.5-R12.5

