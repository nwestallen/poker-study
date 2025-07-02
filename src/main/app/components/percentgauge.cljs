(ns app.components.percentgauge
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.rechart :refer [EChart]]
            ["react-dom/client" :as rdom]))

(defnc PercentGauge [{:keys [percentage]}]
  ($ EChart
   {:option {
            :series [
                     {:type "gauge"
                      :startAngle 90
                      :endAngle -270
                      :color (if (< percentage 51) "rgb(239 68 68)" (if (< percentage 76) "gold" "rgb(34 197 94)"))
                      :pointer {:show false}
                      :progress {:show true :overlap false :roundCap true :clip false}
                      :axisLine {:lineStyle {:width 20}}
                      :splitLine {:show false :distance 0 :length 10}
                      :axisTick {:show false}
                      :axisLabel {:show false :distance 50}
                      :data [{
                              :value percentage
                              :name ""
                              :title {:offsetCenter ["0%" "-15%"]}
                              :detail {:offsetCenter ["0%" "0%"]}
                              }]
                      :title {:fontSize 14}
                      :detail {:color "inherit" :formatter "{value}%" :fontSize 48}}
                     ]
            }
   }
  ))
