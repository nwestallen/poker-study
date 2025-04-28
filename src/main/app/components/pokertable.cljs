(ns app.components.pokertable
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cards :refer [card-img]]
            [app.components.felt :refer [Felt]]
            ["react-dom/client" :as rdom]))

(defnc PokerTable [{:keys [cards]}]
  (d/div {:class-name (css :relative {:width "100%"})}
         ($ Felt {:fill "skyblue" :border "navy" :border-width "10" :width "700" :height "300"})
         (d/div {:class-name (css {:width "39%"} :flex :absolute {:top "33%"} {:left "28%"})}
                (map #(d/div {:class-name (css {:width "20%"})} (card-img %)) cards)
                )
         )
  )
