(ns app.components.creator
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.paintchart :refer [Paintchart]]
            [app.components.rangeform :refer [RangeForm]]
            [app.components.accreport :refer [AccReport]]
            [app.components.paintcontrol :refer [ControlPanel]]
            [app.components.freqchart :refer [FreqChart]]
            [app.components.pokertable :refer [TableContainer]]
            [app.components.scenariomanager :refer [ScenarioManager]]
            [app.components.actionform :refer [ActionForm]]
            [app.utils.strategy :refer [action-summary all-fold convert-ranges strat-accuracy simplify-strat abbrv-strat]]
            ["react-dom/client" :as rdom]))

(defnc Creator [{:keys []}]
  (let [[strategy set-strategy!] (hooks/use-state all-fold)
        [form-actions set-form-actions!] (hooks/use-state "")
        [table-actions set-table-actions!] (hooks/use-state "")
        strat-text (hooks/use-memo [strategy] (abbrv-strat strategy))]
    (d/div {:class-name (css :m-2 :flex :flex-row :my-10)}
           (d/div {:class-name (css :flex :flex-col)}
                  ($ Paintchart {:strategy strategy :set-strategy! set-strategy!})
                  (d/div {:class-name (css :flex :flex-row {:width "695px"})}
                         ($ ScenarioManager {:current-scenario {:title ""
                                                                :table "F-F-F"
                                                                :strategy strategy}
                                             :on-scenario-change (fn [scenario]
                                                                   (do (set-strategy! (:strategy scenario)) (set-table-actions! (:table scenario))))}))
                  (d/div {:class-name (css :flex :flex-col :absolute {:top "400px"} {:left "707px"})}
                         (d/div {:class-name (css :flex :flex-col)}
                                ($ ActionForm {:actions form-actions :set-actions! set-form-actions! :on-submit #(set-table-actions! form-actions)})
                                ($ RangeForm {:on-submit #(set-strategy! (convert-ranges %))})
                                (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(set-strategy! (simplify-strat strategy))} "Simplify Strat")
                                (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(set-strategy! all-fold)} "Clear Strategy"))))

           (d/div {:class-name (css :flex :flex-col {:width "40%"} :mt-9)}
                  ($ TableContainer {:stack-size 150 :seats [:UTG :UTG1 :UTG2 :LJ :HJ :CO :BTN :SB :BB] :actions table-actions})
                  (d/div {:class-name (css :p-4 :mt-10 :rounded-lg :flex :flex-col :border :border-black :h-fit :w-full)}
                         (map #(d/p {:class-name (css :mb-4)} %) strat-text))))))
