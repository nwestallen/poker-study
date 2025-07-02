(ns app.components.paintchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [PureChart MixSquare]]
            [app.components.rechart :refer [EChart]]
            [app.components.mixslider :refer [SliderSquare]]
            [app.components.rangeform :refer [RangeForm]]
            [app.components.paintcontrol :refer [ActionInputs HeightInput ControlPanel]]
            [app.utils.strategy :refer [all-fold strat-ranges action-summary convert-ranges diff-summary]]
            ["react-dom/client" :as rdom]))

(defnc Paintchart [{:keys [answer]}]
  (let [[strategy set-strategy] (hooks/use-state all-fold)
        [summary set-summary] (hooks/use-state (action-summary all-fold))
        [height set-height] (hooks/use-state 100)
        [mix set-mix] (hooks/use-state {:raise 35, :call 35, :fold 30})
        [show-an set-show-an] (hooks/use-state false)
        [result set-result] (hooks/use-state {})
        update (hooks/use-memo [mix height] (update-vals mix #(js/parseFloat (.toFixed (* (/ height 100) %) 2))))
        summary (hooks/use-memo [strategy] (action-summary strategy))
        ]
    (d/div {:class-name (css :m-2 :flex :flex-row :my-10)}
           (d/div {:class-name (css :flex :flex-col :mr-10)}
                  (d/h3 {:class-name (css :font-bold :mb-2 :text-lg)} "Strategy")
                  ($ PureChart {:strategy strategy :set-strategy set-strategy :update-strat update})
                  (d/div {:class-name (css :flex :flex-row)}
                  ($ ControlPanel {:mix mix :set-mix set-mix :height height :set-height set-height :update update})
                  ($ RangeForm {:on-submit #(set-strategy (convert-ranges %))})
                  (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(do (set-show-an (not show-an)) (set-result "Result"))}"Check Answer")
                  )
                  )
           (d/div {:class-name (css :flex :flex-col)}
                  (if show-an (d/div (d/p (prn-str (diff-summary answer strategy)))
                                    ($ PureChart {:strategy answer})))
           (comment
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
               :style {:width "600px" :height "400px"}}))
           )
           )))
