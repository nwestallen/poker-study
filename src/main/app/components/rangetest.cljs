(ns app.components.rangetest
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
            [app.utils.strategy :refer [action-summary all-fold convert-ranges strat-accuracy simplify-strat abbrv-strat]]
            ["react-dom/client" :as rdom]))

(defnc RangeTest [{:keys []}]
  (let [[strategy set-strategy!] (hooks/use-state all-fold)
        [answer set-answer!] (hooks/use-state all-fold)
        [show-an set-show-an!] (hooks/use-state false)
        [actions set-actions!] (hooks/use-state "")
        strat-text (hooks/use-memo [strategy] (abbrv-strat strategy))
        ]
    (<>
    (d/div {:class-name (css :m-2 :flex :flex-row :my-10)}
           (d/div {:class-name (css :flex :flex-col :mr-10)}
                  ($ Paintchart {:strategy strategy :set-strategy! set-strategy!})
                  ($ RangeForm {:on-submit #(set-strategy! (convert-ranges %))})
                  (d/div {:class-name (css :flex :flex-col)}
                  (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(set-answer! strategy)} "Set Answer")
                  (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(set-show-an! (not show-an))} "Check Answer")
                  (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(set-strategy! (simplify-strat strategy))} "Simplify Strat")
                  (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(set-strategy! all-fold)} "Clear Strategy")
                  )
                  )
           (d/div {:class-name (css :mt-12 :flex :flex-col {:width "40%"})}
                  ($ TableContainer {:stack-size 150 :seats [:UTG :UTG1 :UTG2 :LJ :HJ :CO :BTN :SB :BB] :actions actions :set-actions! set-actions!})
           (d/div {:class-name (css :p-4 :mt-10 :rounded-lg :flex :flex-col :border :border-black :h-fit)}
                         (map #(d/p {:class-name (css :mb-4)} %) strat-text)
                         )
           ($ ScenarioManager {:current-scenario {:title ""
                                                  :table "F-F-F"
                                                  :strategy strategy}
                               :on-scenario-change (fn [scenario]
                                                     (do (set-strategy! (:strategy scenario)) (set-actions! (:table scenario))))})
           )
           )
                  (if show-an
                    (d/div {:class-name (css :absolute :w-screen :flex :flex-row :justify-center)}
                    (d/div {:class-name (css :absolute :w-screen {:height "150vh"} :bg-slate-700 {:opacity 0.7})})
                    ($ AccReport {:guess strategy :answer answer :on-close #(set-show-an! (not show-an))})
                    ))
    )))
