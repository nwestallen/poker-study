(ns app.components.pokertable
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cards :refer [card-img]]
            [app.components.felt :refer [Felt]]
            ["react-dom/client" :as rdom]))


(defnc PokerSeat [{:keys [active title color fold]}]
  (d/svg {:width "100%", :viewBox (str "0 0 " 100 " " 100), :fill "none" :opacity (if fold 0.3 1)}
         (d/circle {:cx 50 :cy 50 :fill (if active  "rgb(239 68 68)" "rgb(14 165 233)")  :r 44 :stroke (if active "rgb(60 60 60)" "white") :stroke-width 6})
         (d/text {:x 50 :y 50 :fill (if active "white" "white") :text-anchor "middle" :dominant-baseline "middle" :font-size "1.6em" :font-weight "bold"} title)
         ))

(defnc DealerButton [{:keys [active title color]}]
  (d/svg {:width "100%", :viewBox (str "0 0 " 100 " " 100), :fill "none"}
         (d/circle {:cx 50 :cy 50 :fill color :r 50})
         (d/text {:x 50 :y 50 :fill "black" :text-anchor "middle" :dominant-baseline "middle" :font-size "1.5em" :font-weight "bold"} title)

  ))
(defnc PokerTable [{:keys [cards active-seat]}]
  (d/div {:class-name (css :relative {:width "100%"} :flex :border :border-black :rounded-xl)}
         ($ Felt {:fill "rgb(34 197 94)"  :border "rgb(60 60 60)" :border-width "10" :width "700" :height "300" :padding "10px"})
         (d/div {:class-name (css {:width "39%"} :flex :absolute {:top "33%"} {:left "30%"})}
                (map #(d/div {:class-name (css {:width "20%"})} (card-img %)) cards)
                )
         (d/div {:class-name (css {:width "3.1%"} {:top "20%"} {:left "32%"} {:height "6%"} :absolute)} ($ DealerButton {:color "white" :title "DEALER"}))
         (d/div {:class-name (css {:width "8%"} {:top "-5%"} {:left "30%"} {:height "16%"} :absolute)} ($ PokerSeat {:color "lightgreen" :title "BTN"}))
         (d/div {:class-name (css {:width "8%"} {:top "20%"} {:left "0%"} {:height "16%"} :absolute)}($ PokerSeat {:color "lightgreen" :title "CO"}))
         (d/div {:class-name (css {:width "8%"} {:top "65%"} {:left "0%"} {:height "16%"} :absolute)}($ PokerSeat {:color "lightgreen" :title "HJ"}))
         (d/div {:class-name (css {:width "8%"} {:top "89%"} {:left "21%"} {:height "16%"} :absolute)}($ PokerSeat {:color "lightgreen":title "LJ"}))
         (d/div {:class-name (css {:width "8%"} {:top "89%"} {:left "46%"} {:height "16%"} :absolute)}($ PokerSeat {:color "lightgreen" :title "UTG2"}))
         (d/div {:class-name (css {:width "8%"} {:top "89%"} {:left "71%"} {:height "16%"} :absolute)}($ PokerSeat {:color "lightgreen" :title "UTG1" :active (= active-seat "UTG1")}))
         (d/div {:class-name (css {:width "8%"} {:top "65%"} {:left "92%"} {:height "16%"} :absolute)}($ PokerSeat {:color "lightgreen" :title "UTG" :fold true}))
         (d/div {:class-name (css {:width "8%"} {:top "20%"} {:left "92%"} {:height "16%"} :absolute)}($ PokerSeat {:color "lightgreen" :title "BB"}))
         (d/div {:class-name (css {:width "8%"} {:top "-5%"} {:left "62%"} {:height "16%"} :absolute)}($ PokerSeat {:color "lightgreen" :title "SB"}))
         )
  )

