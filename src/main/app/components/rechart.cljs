(ns app.components.rechart
  (:require
    ["echarts" :as echarts]
    ["react-dom/client" :as rdom]
    [helix.core :refer [$ defnc]]
    [helix.dom :as d]
    [helix.hooks :as hooks]
    [cljs-bean.core :refer [->js]]))

(defnc EChart
  [{:keys [option theme style] :as _props}]
  (let [container-ref (hooks/use-ref nil)]
    (hooks/use-effect
      [option theme]
      (when-let [el (.-current container-ref)]
        (let [chart (echarts/init el theme)]
          (.setOption chart (->js option))
          (fn [] (.dispose chart))))
      )
    (d/div
      {:ref   container-ref
       :style (or style #js {:width "100%" :height "100%"})})))

(def bar-option
   {:title {:text "ECharts Bar Example"}
       :tooltip {}
       :xAxis   {:data ["Mon" "Tue" "Wed" "Thu" "Fri" "Sat" "Sun"]}
       :yAxis   {}
       :series  [{:name "Sales" :type "bar"
                          :data [120 200 150 80 70 110 130]}]
       :color ["teal"]})

(defnc Barchart []
  ($ EChart
     {:option bar-option
      :style  {:width "600px" :height "400px"}}))

