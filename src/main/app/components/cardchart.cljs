(ns app.components.cardchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.utils.strategy :refer [strat-ranges]]
            ["react-dom/client" :as rdom]))

(def ranks '("A" "K" "Q" "J" "T" "9" "8" "7" "6" "5" "4" "3" "2"))

(defnc Cardsquare [{:keys [hand] {:keys [raise call fold]} :act}]
  (let [r (str raise) c (str call) f (str fold) rc (str (+ raise call))]
    (d/svg {:viewBox "0 0 100 100" :width "100%" :height "100%" :xlmns "http://www.w3.org/2000/svg"}
           (d/rect {:width "100%" :height "100%" :x "0" :y "0" :rx "10" :ry "10" :fill "rgb(64 64 64)"})
           (d/defs (d/clipPath {:id "rounded-corners"} (d/rect {:x "0" :y "0" :width "100" :height "100" :rx "10" :ry "10"})))
           (d/g {:clipPath "url(#rounded-corners)"}
                (d/rect {:width r :height"100" :x "0" :y "0" :fill "rgb(239 68 68)"})
                (d/rect {:width c :height"100" :x r :y "0" :fill "rgb(34 197 94)"})
                (d/rect {:width f :height"100" :x rc :y "0" :fill "rgb(14 165 233)"})
         )
         (d/text {:x "50" :y "50" :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize "36" :fontWeight "500"} hand)
         )))

(defnc Cardchart [{:keys [strategy]}]
  (d/div {:class-name (css :grid {:grid-template-columns "repeat(14, 50px)"} {:gap "1px"} :bg-white {:width "fit-content" :height "713px"})}
             (for [i (conj ranks 0)] ($ Cardsquare {:hand (if (= i 0) nil i)}))
             (for [p (partition 13 (strat-ranges strategy))] (<> ($ Cardsquare {:hand (second (:hand (first p)))}) (for [i p] ($ Cardsquare {:act (:act i) :hand (:hand i)}))))
             ))

