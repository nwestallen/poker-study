(ns app.components.pokertable
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cards :refer [card-img]]
            [app.components.felt :refer [Felt]]
            ["react-dom/client" :as rdom]))

(defnc PokerTable [{:keys [cards]}]
  (d/div {:class-name (css :relative {:width "100%"})}
         ($ Felt {:fill "skyblue" :border "navy" :border-width "10" :width "700" :height "300" :padding "10px"})
         (d/div {:class-name (css {:width "39%"} :flex :absolute {:top "33%"} {:left "30%"})}
                (map #(d/div {:class-name (css {:width "20%"})} (card-img %)) cards)
                )
         (d/div {:class-name (css {:width "8%"} {:top "-5%"} {:left "30%"} {:height "16%"} :bg-green-400 :absolute :rounded-full)})
         (d/div {:class-name (css {:width "8%"} {:top "20%"} {:left "0%"} {:height "16%"} :bg-green-400 :absolute :rounded-full)})
         (d/div {:class-name (css {:width "8%"} {:top "65%"} {:left "0%"} {:height "16%"} :bg-green-400 :absolute :rounded-full)})
         (d/div {:class-name (css {:width "8%"} {:top "89%"} {:left "21%"} {:height "16%"} :bg-green-400 :absolute :rounded-full)})
         (d/div {:class-name (css {:width "8%"} {:top "89%"} {:left "46%"} {:height "16%"} :bg-green-400 :absolute :rounded-full)})
         (d/div {:class-name (css {:width "8%"} {:top "89%"} {:left "71%"} {:height "16%"} :bg-green-400 :absolute :rounded-full)})
         (d/div {:class-name (css {:width "8%"} {:top "65%"} {:left "92%"} {:height "16%"} :bg-green-400 :absolute :rounded-full)})
         (d/div {:class-name (css {:width "8%"} {:top "20%"} {:left "92%"} {:height "16%"} :bg-green-400 :absolute :rounded-full)})
         (d/div {:class-name (css {:width "8%"} {:top "-5%"} {:left "62%"} {:height "16%"} :bg-green-400 :absolute :rounded-full)})
         )
  )
