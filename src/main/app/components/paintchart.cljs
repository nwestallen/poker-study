(ns app.components.paintchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [clojure.edn :as edn]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [Cardchart MixSquare]]
            [app.components.rechart :refer [EChart]]
            [app.components.mixslider :refer [MixSlider HeightSlider PercentSlider]]
            [app.utils.strategy :refer [all-fold strat-ranges action-summary]]
            ["react-dom/client" :as rdom]))

(defnc Paintchart []
  (let [[update set-update] (hooks/use-state {:raise 20, :call 60, :fold 20})
        [strategy set-strategy] (hooks/use-state all-fold)
        [summary set-summary] (hooks/use-state (action-summary all-fold))]
    (hooks/use-effect [strategy] #(set-summary (action-summary strategy)))
    (d/div {:class-name (css :flex :flex-row :my-10)}
           (d/div {:class-name (css :flex :flex-col :mr-10)}
                  (d/h3 {:class-name (css :font-bold :mb-2 :text-lg)} "Strategy")
                  ($ Cardchart {:strategy strategy :set-strategy set-strategy :update-strat update})
                  (d/div {:class-name (css :flex :flex-row :my-2)}
                         (d/p {:class-name (css :mr-2)} "Raise:")
                         (d/input {:type "text" :class-name (css :border-2 :border-black {:width "50px"}) :value (:raise update) :on-change (fn [e] (set-update (assoc update :raise (js/parseInt e.target.value))))})
                         (d/p {:class-name (css :mx-2)} "Call:")
                         (d/input {:type "text" :class-name (css :border-2 :border-black {:width "50px"}) :value (:call update) :on-change (fn [e] (set-update (assoc update :call (js/parseInt e.target.value))))})
                         (d/p {:class-name (css :mx-2)} "Fold:")
                         (d/input {:type "text" :class-name (css :border-2 :border-black {:width "50px"}) :value (:fold update) :on-change (fn [e] (set-update (assoc update :fold (js/parseInt e.target.value))))})
                         )
                  (d/div
                  (d/div {:class-name (css :flex :flex-row {:width "200px"})}
                  (d/div {:class-name (css {:width "150px"} {:height "150px"})}
                         ($ MixSquare {:hand "AA" :strategy strategy :act update})
                         )
                  (d/div {:class-name (css :ml-2)}
                  ($ HeightSlider {:mix update :set-mix set-update}))
                  )
                  (d/div {:class-name (css :mt-2)}
                  ($ PercentSlider {:mix update :set-mix set-update}))
                  )
                  )
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
               :style {:width "600px" :height "400px"}})
           )))
