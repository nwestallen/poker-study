(ns app.components.paintchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [PureChart]]
            [app.components.rangeform :refer [RangeForm]]
            [app.components.accreport :refer [AccReport]]
            [app.components.freqchart :refer [FreqChart]]
            [app.components.pokertable :refer [TableContainer]]
            [app.components.scenariomanager :refer [ScenarioManager]]
            [app.components.actionbar :refer [ActionBar]]
            [app.components.mixslider :refer [SliderSquare]]
            [app.utils.strategy :refer [action-summary all-fold convert-ranges strat-accuracy simplify-strat abbrv-strat percent-summary]]
            ["react-dom/client" :as rdom]))

(defnc Paintchart [{:keys [strategy set-strategy! mix height update]}]
  (let [summary (hooks/use-memo [strategy] (percent-summary strategy))]
    (d/div {:class-name (css :flex :flex-col :w-full :aspect-square)}
           (d/div {:class-name (css :flex :flex-row :mb-2 :text-shadow-sm)}
                  (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-red-500 :mx-1 :mt-0.5 :shadow-md)}) (d/p {:class-name (css :font-semibold :mr-2)} "Raise")
                  (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-green-500 :mx-1 :mt-0.5 :shadow-md)}) (d/p {:class-name (css :font-semibold :mr-2)} "Call")
                  (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-sky-500 :mx-1 :mt-0.5 :shadow-md)}) (d/p {:class-name (css :font-semibold :mr-2)} "Fold"))
                  ($ PureChart {:strategy strategy :set-strategy set-strategy! :update-strat update})
                  (d/div {:class-name (css :my-1 :w-full :shadow-md)} ($ ActionBar {:summary summary})))))

