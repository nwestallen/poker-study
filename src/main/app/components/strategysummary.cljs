(ns app.components.strategysummary
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.actionpie :refer [ActionPie]]))

(defnc StrategySummary [{:keys [strat-text]}]
  (d/div {:class-name (css :shadow-md :text-shadow-sm :p-4 :mt-10 :rounded-lg :flex :flex-col :border :border-black :h-fit :w-full)}
    (map-indexed 
      (fn [idx line] 
        (d/div {:key idx :class-name (css :flex :flex-row :items-center :mb-4)}
          (d/div {:class-name (css :mr-1)} ($ ActionPie {:action-string line :size 18}))
          (d/p {:class-name (css :ml-2)} line)))
      strat-text)))
