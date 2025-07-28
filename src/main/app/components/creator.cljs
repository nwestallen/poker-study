(ns app.components.creator
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.paintchart :refer [Paintchart]]
            [app.components.rangeform :refer [RangeForm]]
            [app.components.accreport :refer [AccReport]]
            [app.components.freqchart :refer [FreqChart]]
            [app.components.pokertable :refer [TableContainer]]
            [app.components.scenariomanager :refer [ScenarioManager]]
            [app.components.actionform :refer [ActionForm]]
            [app.components.strategysummary :refer [StrategySummary]]
            [app.components.mixslider :refer [SliderSquare]]
            [app.utils.strategy :refer [action-summary all-fold convert-ranges strat-accuracy simplify-strat abbrv-strat]]
            [app.utils.scenarios :as scenarios]
            ["react-dom/client" :as rdom]
            ["react-router-dom" :as router]))

(defnc Creator [{:keys []}]
  (let [[search-params set-search-params!] (router/useSearchParams)
        [strategy set-strategy!] (hooks/use-state all-fold)
        [form-actions set-form-actions!] (hooks/use-state "")
        [table-actions set-table-actions!] (hooks/use-state "")
        [mix set-mix!] (hooks/use-state {:raise 35, :call 35, :fold 30})
        [height set-height!] (hooks/use-state 100)
        update (hooks/use-memo [mix height] (update-vals mix #(js/parseFloat (.toFixed (* (/ height 100) %) 2))))
        strat-text (hooks/use-memo [strategy] (abbrv-strat strategy))

        handle-scenario-change (fn [scenario]
                                 (set-strategy! (:strategy scenario))
                                 (set-table-actions! (:table scenario))
                                 (set-search-params! #js {"scenario" (:title scenario)}))

        load-scenario-from-url (fn []
                                 (when-let [scenario-title (.get search-params "scenario")]
                                   (when-let [scenario (scenarios/load-scenario-from-local-storage scenario-title)]
                                     (set-strategy! (:strategy scenario))
                                     (set-table-actions! (:table scenario)))))]

    (hooks/use-effect
     [search-params]
     (load-scenario-from-url)
     js/undefined)
    (d/div {:class-name (css :m-2 :flex :flex-row :mt-6)}
           (d/div {:class-name (css :flex :flex-col {:width "39%"})}
                  ($ Paintchart {:strategy strategy :set-strategy! set-strategy! :height height :mix mix :update update})
                  ($ ScenarioManager {:current-scenario {:title ""
                                                         :table table-actions
                                                         :strategy strategy}
                                      :on-scenario-change handle-scenario-change}))
           (d/div {:class-name (css :flex :flex-col {:width "15%"} :m-4)}
                  (d/div {:class-name (css :flex :flex-col)}
                         (d/div {:class-name (css {:width "100%"} :mt-4 :flex :flex-col :justify-start)} ($ SliderSquare {:mix mix :set-mix set-mix! :height height :set-height set-height! :update update}))
                         ($ ActionForm {:actions form-actions :set-actions! set-form-actions! :on-submit #(set-table-actions! form-actions)})
                         ($ RangeForm {:on-submit #(set-strategy! (convert-ranges %))})
                         (d/button {:class-name (css :shadow-md :text-shadow-sm :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :my-1 :rounded-md [:hover :bg-sky-400]) :on-click #(set-strategy! (simplify-strat strategy))} "Simplify Strat")
                         (d/button {:class-name (css :shadow-md :text-shadow-sm :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :my-1 :rounded-md [:hover :bg-sky-400]) :on-click #(set-strategy! all-fold)} "Clear Strategy")))

           (d/div {:class-name (css :flex :flex-col {:width "44%"} :mt-8)}
                  ($ TableContainer {:stack-size 150 :seats [:UTG :UTG1 :UTG2 :LJ :HJ :CO :BTN :SB :BB] :actions table-actions})
                  ($ StrategySummary {:strat-text strat-text})))))

