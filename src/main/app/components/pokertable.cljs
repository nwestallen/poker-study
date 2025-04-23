(ns app.components.pokertable
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cards :refer [card-img]]
            [app.components.felt :refer [Felt]]
            ["react-dom/client" :as rdom]))

(defnc PokerTable []
  (d/div {:class-name (css :relative {:width "100%"})}
         ($ Felt {:fill "skyblue" :border "navy" :border-width "10" :width "700" :height "300"})
         (d/div {:class-name (css {:width "7.8%"} :absolute {:top "33%"} {:left "28%"})} (card-img "As"))
         (d/div {:class-name (css {:width "7.8%"} :absolute {:top "33%"} {:left "36%"})} (card-img "Kd"))
         (d/div {:class-name (css {:width "7.8%"} :absolute {:top "33%"} {:left "44%"})} (card-img "7c"))
         (d/div {:class-name (css {:width "7.8%"} :absolute {:top "33%"} {:left "52%"})} (card-img "8d"))
         (d/div {:class-name (css {:width "7.8%"} :absolute {:top "33%"} {:left "60%"})} (card-img "8h"))
         )
  )
