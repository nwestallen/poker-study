(ns app.components.paintchart
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [PureChart]]
            [app.components.actionbar :refer [ActionBar]]
            [app.utils.strategy :refer [percent-summary]]
            ["react-dom/client" :as rdom]))

(defnc Paintchart [{:keys [strategy set-strategy! update keep-height?]}]
  (let [summary (hooks/use-memo [strategy] (percent-summary strategy))]
    (d/div {:class-name (css :flex :flex-col :w-full :p-0.5)}
           (d/div {:class-name (css :flex :flex-row :mb-2 :text-shadow-sm)}
                  (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-red-500 :mx-1 :mt-0.5 :shadow-md)}) (d/p {:class-name (css :font-semibold :mr-2)} "Raise")
                  (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-green-500 :mx-1 :mt-0.5 :shadow-md)}) (d/p {:class-name (css :font-semibold :mr-2)} "Call")
                  (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-sky-500 :mx-1 :mt-0.5 :shadow-md)}) (d/p {:class-name (css :font-semibold :mr-2)} "Fold"))
                  ($ PureChart {:strategy strategy :set-strategy set-strategy! :update-strat update :keep-height? keep-height?})
                  (d/div {:class-name (css :my-1 :shadow-md)} ($ ActionBar {:summary summary})))))

