(ns app.components.freqchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.rechart :refer [EChart]]
            ["react-dom/client" :as rdom]))


(defnc FreqChart [{:keys [summary]}]
             ($ EChart
              {:option {:title {:text ""}
                        :tooltip {}
                        :yAxis   {:data ["Fold" "Call" "Raise"] :axisLabel {:color "white"}}
                        :xAxis   {:axisLabel {:color "white"}}
                        :series  [{:name "Sales" :type "bar"
                                   :data [{:value (:fold summary) :itemStyle {:color "rgb(14 165 233)"}}
                                          {:value (:call summary) :itemStyle {:color "rgb(34 197 94)"}}
                                          {:value (:raise summary) :itemStyle {:color "rgb(239 68 68)"}}]
                                   :barWidth "200px"}]
                        :animationDuration 0}
               :style {:width "300px" :height "170px"}}))

(defn p-form [n]
  (str (.toFixed n 1) "%"))

(defnc FreqBar [{:keys [left right]}]
  (d/svg {:viewBox "0 0 100 100" :width "100%" :height "200%" :xlmns "http://www.w3.org/2000/svg"}
         (d/defs
           (d/clipPath {:id "rounded8"} (d/rect {:x "0" :y "8" :width "100" :height "6" :rx "4" :ry "4" :clipPathUnits "objectBoundingBox"}))
           (d/clipPath {:id "rounded24"} (d/rect {:x "0" :y "24" :width "100" :height "6" :rx "4" :ry "4" :clipPathUnits "objectBoundingBox"}))
           (d/clipPath {:id "rounded40"} (d/rect {:x "0" :y "40" :width "100" :height "6" :rx "4" :ry "4" :clipPathUnits "objectBoundingBox"}))
           )
       (d/rect {:width 100 :height "6" :x "0" :y "8" :rx "4" :ry "4" :fill "rgb(64 64 64)"})
       (d/g {:clipPath "Url(#rounded8)"}
        (d/rect {:width (/ (:raise right) 2) :height "6" :x "50%" :y "8" :rx "0" :ry "0" :fill "rgb(239 68 68)"}) ;;raise 1
        (d/rect {:width  (/ (:raise left) 2) :height "6" :x (- 50 (/ (:raise left) 2)) :y "8" :rx "0" :ry "0" :fill "rgb(239 68 68)"}))
       (d/rect {:width 100 :height "6" :x "0" :y "24" :rx "4" :ry "4" :fill "rgb(64 64 64)"})
       (d/g {:clipPath "url(#rounded24)"}
        (d/rect {:width (/ (:call right) 2) :height "6" :x "50%" :y "24" :rx "0" :ry "0" :fill "rgb(34 197 94)"}) ;;call 1
        (d/rect {:width (/ (:call left) 2) :height "6" :x (- 50 (/ (:call left) 2)) :y "24" :rx "0" :ry "0" :fill "rgb(34 197 94)"}))
       (d/rect {:width 100 :height "6" :x "0" :y "40" :rx "4" :ry "4" :fill "rgb(64 64 64)"})
       (d/g {:clipPath "url(#rounded40)" }
        (d/rect {:width (/ (:fold right) 2) :height "6" :x "50%" :y "40" :rx "0" :ry "0" :fill "rgb(14 165 233)"}) ;;fold 1
        (d/rect {:width (/ (:fold left) 2) :height "6" :x (- 50 (/ (:fold left) 2)) :y 40 :fill "rgb(14 165 233)"})) ;;fold 2
       (d/rect {:width 1 :height "6" :x "49.5%" :y "8" :rx "0" :ry "0" :fill "white"})
       (d/rect {:width 1 :height "6" :x "49.5%" :y "24" :rx "0" :ry "0" :fill "white"})
       (d/rect {:width 1 :height "6" :x "49.5%" :y "40" :rx "0" :ry "0" :fill "white"})
       (d/text {:x 10 :y 3 :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize 6} (p-form (:raise left)))
       (d/text {:x "50" :y "3" :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize "6" :class-name (css :select-none)} "Raise")
       (d/text {:x 90 :y 3 :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize 6} (p-form (:raise right)))
       (d/text {:x 10 :y 20 :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize 6} (p-form (:call left)))
       (d/text {:x "50" :y "20" :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize "6" :class-name (css :select-none)} "Call")
       (d/text {:x 90 :y 20 :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize 6} (p-form (:call right)))
       (d/text {:x 10 :y 36 :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize 6} (p-form (:fold left)))
       (d/text {:x "50" :y "36" :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize "6" :class-name (css :select-none)} "Fold")
       (d/text {:x 90 :y 36 :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize 6} (p-form (:fold right)))
         ))

