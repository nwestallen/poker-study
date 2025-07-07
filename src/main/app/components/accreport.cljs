(ns app.components.accreport
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.percentgauge :refer [PercentGauge]]
            [app.components.cardchart :refer [PureChart]]
            [app.components.freqchart :refer [FreqBar]]
            [app.utils.strategy :refer [strat-accuracy percent-summary]]
            ["react-dom/client" :as rdom]))

(defnc AccReport [{:keys [guess answer on-close]}]
  (d/div {:class-name (css :absolute :m-5 :p-5 {:background "rgb(120 120 120)"} {:width "80%"} {:opacity 1} {:left "10%"} :rounded-xl :shadow-xl)}
         (d/button {:on-click on-close :class-name (css {:background "rgb(64 64 64)"} :text-white :py-1 :px-2 :rounded-md)} "Close")
         (d/div {:class-name (css :flex :flex-row)}
                (d/div {:class-name (css {:width "50%"} :m-2)} ($ PureChart {:strategy guess}))
                (d/div {:class-name (css :w-fit :flex :flex-col)}
                       (d/div {:class-name (css :m-5 {:width "200px"} {:height "200px"})} ($ PercentGauge {:percentage (strat-accuracy guess answer)}))
                       ;;(d/p (prn-str (percent-summary answer)))
                       (d/div {:class-name (css {:width "90%"} {:margin-left "5%"})} ($ FreqBar {:left (percent-summary guess) :right (percent-summary answer)}))
                )
                (d/div {:class-name (css {:width "50%"} :m-2)} ($ PureChart {:strategy answer}))
                           )
                           )
  )
