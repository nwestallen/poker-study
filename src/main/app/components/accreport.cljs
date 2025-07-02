(ns app.components.accreport
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.percentgauge :refer [PercentGauge]]
            [app.components.cardchart :refer [PureChart]]
            [app.utils.strategy :refer [strat-accuracy]]
            ["react-dom/client" :as rdom]))

(defnc AccReport [{:keys [guess answer on-close]}]
(d/div {:class-name (css :absolute :m-5 :p-5 {:background "rgb(150 150 150)"} {:width "50%"} {:opacity 1} {:left "25%"} :rounded-xl :shadow-xl)}
                           (d/button {:on-click on-close :class-name (css {:background "rgb(64 64 64)"} :text-white :py-1 :px-2 :rounded-md)} "Close")
                           (d/div {:class-name (css :flex :flex-row)}
                           (d/div {:class-name (css {:width "50%"} :m-2)} ($ PureChart {:strategy answer}))
                           (d/div {:class-name (css :m-5 {:width "40%"})} ($ PercentGauge {:percentage (strat-accuracy guess answer)}))
                           )
                           )
  )
