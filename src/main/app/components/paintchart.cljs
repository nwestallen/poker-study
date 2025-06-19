(ns app.components.paintchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [Cardchart]]
            [app.components.rechart :refer [EChart]]
            [app.utils.strategy :refer [all-fold strat-ranges action-summary]]
            ["react-dom/client" :as rdom]))

(defnc Paintchart []
  (let [[update set-update] (hooks/use-state "{:raise 100}")
        [strategy set-strategy] (hooks/use-state all-fold)
        [summary set-summary] (hooks/use-state (action-summary all-fold))]
    (hooks/use-effect [strategy] #(set-summary (action-summary strategy)))
    (d/div {:class-name (css :flex :flex-row :my-10)}
           (d/div {:class-name (css :flex :flex-col :mr-10)}
                  (d/h3 {:class-name (css :font-bold :mb-2 :text-lg)} "Strategy")
                  ($ Cardchart {:strategy strategy :set-strategy set-strategy :update-strat update})
                  (d/div {:class-name (css :flex :flex-row :my-2)}
                         (d/p {:class-name (css :mr-2)} "Paintbrush:")
                         (d/input {:type "text" :class-name (css :border-2 :border-black {:width "200px"}) :value update :on-change (fn [e] (set-update e.target.value))})))
           ($ EChart
              {:option {:title {:text "Action Summary (Card Combo Count)"}
                        :tooltip {}
                        :yAxis   {:data ["Fold" "Call" "Raise"]}
                        :xAxis   {}
                        :series  [{:name "Sales" :type "bar"
                                   :data [{:value (:fold summary) :itemStyle {:color "rgb(14 165 233)"}}
                                          {:value (:call summary) :itemStyle {:color "rgb(34 197 94)"}}
                                          {:value (:raise summary) :itemStyle {:color "rgb(239 68 68)"}}]}]
                        :animationDuration 0}
               :style {:width "600px" :height "400px"}}))))
