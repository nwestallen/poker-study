(ns app.components.paintchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [PureChart]]
            [app.components.rangeform :refer [RangeForm]]
            [app.components.accreport :refer [AccReport]]
            [app.components.paintcontrol :refer [ControlPanel]]
            [app.components.freqchart :refer [FreqChart]]
            [app.components.pokertable :refer [TableContainer]]
            [app.components.scenariomanager :refer [ScenarioManager]]
            [app.utils.strategy :refer [action-summary all-fold convert-ranges strat-accuracy simplify-strat abbrv-strat]]
            ["react-dom/client" :as rdom]))

(defnc Paintchart [{:keys [strategy set-strategy!]}]
  (let [[height set-height!] (hooks/use-state 100)
        [mix set-mix!] (hooks/use-state {:raise 35, :call 35, :fold 30})
        update (hooks/use-memo [mix height] (update-vals mix #(js/parseFloat (.toFixed (* (/ height 100) %) 2))))]
    (d/div {:class-name (css :flex :flex-col)}
           (d/div {:class-name (css :flex :flex-row :mb-2)}
                  (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-red-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)} "Raise")
                  (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-green-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)} "Call")
                  (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-sky-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)} "Fold"))
           (d/div {:class-name (css :flex :flex-row)}
                  (d/div {:class-name (css {:width "700px"} {:height "700px"})}
                         ($ PureChart {:strategy strategy :set-strategy set-strategy! :update-strat update}))
                  ($ ControlPanel {:mix mix :set-mix set-mix! :height height :set-height set-height! :update update})))))
