(ns app.components.paintchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [Cardchart MixSquare]]
            [app.components.rechart :refer [EChart]]
            [app.components.mixslider :refer [SliderSquare]]
            [app.components.rangeform :refer [RangeForm]]
            [app.utils.strategy :refer [all-fold strat-ranges action-summary convert-ranges]]
            ["react-dom/client" :as rdom]))

(defnc Paintchart []
  (let [[strategy set-strategy] (hooks/use-state all-fold)
        [summary set-summary] (hooks/use-state (action-summary all-fold))
        [height set-height] (hooks/use-state 100)
        [mix set-mix] (hooks/use-state {:raise 20, :call 60, :fold 20})
        update (hooks/use-memo [mix height] (update-vals mix #(js/parseFloat (.toFixed (* (/ height 100) %) 2))))
        summary (hooks/use-memo [strategy] (action-summary strategy))
        ]
    (d/div {:class-name (css :flex :flex-row :my-10)}
           (d/div {:class-name (css :flex :flex-col :mr-10)}
                  (d/h3 {:class-name (css :font-bold :mb-2 :text-lg)} "Strategy")
                  ($ Cardchart {:strategy strategy :set-strategy set-strategy :update-strat update})
                  (d/div {:class-name (css :flex :flex-row :my-2)}
                         (d/p {:class-name (css :mr-2)} "Raise:")
                         (d/input {:type "text" :class-name (css :border-2 :border-black {:width "50px"}) :value (:raise mix) :on-change (fn [e] (set-mix (assoc mix :raise (js/parseInt e.target.value))))})
                         (d/p {:class-name (css :mx-2)} "Call:")
                         (d/input {:type "text" :class-name (css :border-2 :border-black {:width "50px"}) :value (:call mix) :on-change (fn [e] (set-mix (assoc mix :call (js/parseInt e.target.value))))})
                         (d/p {:class-name (css :mx-2)} "Fold:")
                         (d/input {:type "text" :class-name (css :border-2 :border-black {:width "50px"}) :value (:fold mix) :on-change (fn [e] (set-mix (assoc mix :fold (js/parseInt e.target.value))))})
                         )
                  ($ SliderSquare {:mix mix :set-mix set-mix :height height :set-height set-height :update update})
                  (d/div {:class-name (css :flex :flex-row :mt-6)}
                         (d/p {:class-name (css :mr-2)} "In-Range:")
                         (d/input {:type "text" :class-name (css :border-2 :border-black {:width "50px"}) :value height :on-change (fn [e] (set-height (js/parseInt e.target.value)))})
                         )
                  (d/div {:class-name (css :flex :flex-row :mt-2)}
                         (d/p (str "Update: " update))
                         )
                  )
           (d/div {:class-name (css :flex :flex-col)}
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
           ($ RangeForm {:on-submit #(set-strategy (convert-ranges %))})
           (d/p (prn-str strategy)))
           )))
