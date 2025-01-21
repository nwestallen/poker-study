(ns app.components.cardchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.utils.strategy :refer [strat-ranges]]
            ["react-dom/client" :as rdom]))

(def ranks '("A" "K" "Q" "J" "T" "9" "8" "7" "6" "5" "4" "3" "2"))

(def squarestyle
  {
   :header (css :flex :bg-neutral-700 :justify-center :items-center :text-white :font-bold :rounded-md)
   :fold (css :flex :bg-sky-500 :justify-center :items-center :text-white :rounded-md)
   :raise (css :flex :bg-red-500 :justify-center :items-center :text-white :rounded-md)
   :call (css :flex :bg-green-500 :justify-center :items-center :text-white :rounded-md)
   })

(defnc Cardchart [{:keys [strategy]}]
  (d/div {:class-name (css :grid {:grid-template-columns "repeat(14, 50px)"}  {:gap "3px"} :bg-white {:width "fit-content" :height "739px"})}
             (for [i (conj ranks 0)] (d/div {:class-name (:header squarestyle)} (if (= i 0) nil i)))
             (for [p (partition 13 (strat-ranges strategy))] (<> (d/div {:class-name (:header squarestyle)} (second (:hand (first p)))) (for [i p] (d/div {:class-name ((:act i) squarestyle)} (:hand i)))))
             ))

(defnc Cardsquare [{:keys [actions]}]
  (d/svg {:viewBox "0 0 200 200" :width "200" :height "200" :xlmns "http://www.w3.org/2000/svg"}
         (d/rect {:width "200" :height "200" :x "0" :y "0" :rx "20" :ry "20" :fill "none"})
         (d/defs (d/clipPath {:id "rounded-corners"} (d/rect {:x "0" :y "0" :width "200" :height "200" :rx "20" :ry "20"})))
         (d/g {:clipPath "url(#rounded-corners)"}
              (d/rect {:width "50" :height"200" :x "0" :y "0" :fill "rgb(239 68 68)"})
              (d/rect {:width "50" :height"200" :x "50" :y "0" :fill "rgb(34 197 94)"})
              (d/rect {:width "150" :height"200" :x "100" :y "0" :fill "rgb(14 165 233)"})
         )
         (d/text {:x "100" :y "100" :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize "48"} "AA")
         ))
