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
            [app.components.scenariomanager :refer [ScenarioLoader]]
            [app.components.strategysummary :refer [StrategySummary]]
            [app.utils.strategy :refer [action-summary all-fold convert-ranges strat-accuracy simplify-strat abbrv-strat]]
            ["react-dom/client" :as rdom]))

(defnc RangeTest [{:keys []}]
  (let [[strategy set-strategy!] (hooks/use-state all-fold)
        [answer set-answer!] (hooks/use-state all-fold)
        [show-an set-show-an!] (hooks/use-state false)
        [actions set-actions!] (hooks/use-state "")
        [title set-title!] (hooks/use-state "")
        strat-text (hooks/use-memo [strategy] (abbrv-strat strategy))]
    (<>
     (d/div {:class-name (css :m-2 :flex :flex-row)}
            (d/div {:class-name (css :flex :flex-col)}
                   (d/div {:class-name (css {:width "900px"})} ($ Paintchart {:strategy strategy :set-strategy! set-strategy!}))
                   (d/div {:class-name (css {:width "261px"} :m-1.5 :absolute {:top "375px"} {:left "630px"})}
                          (d/div {:class-name (css :border :border-black :rounded-md)} ($ ScenarioLoader {:current-scenario {:title ""
                                                                                                                             :table "F-F-F"
                                                                                                                             :strategy strategy}
                                                                                                          :on-load (fn [scenario]
                                                                                                                     (do (set-answer! (:strategy scenario)) (set-actions! (:table scenario)) (set-title! (:title scenario))))}))
                          (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(set-show-an! (not show-an))} "Check Answer")
                          (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(set-strategy! all-fold)} "Clear Strategy")))

            (d/div {:class-name (css :mt-12 :flex :flex-col {:width "40%"})}
                   (d/h2 {:class-name (css :font-bold :text-4xl)} title)
                   ($ TableContainer {:stack-size 150 :seats [:UTG :UTG1 :UTG2 :LJ :HJ :CO :BTN :SB :BB] :actions actions :set-actions! set-actions!})
                   ($ StrategySummary {:strat-text strat-text})))

     (if show-an
       (d/div {:class-name (css :fixed :top-0 :left-0 :w-screen :flex :flex-row :justify-center)}
              (d/div {:class-name (css :absolute :w-screen {:height "150vh"} :bg-slate-700 {:opacity 0.7})})
              ($ AccReport {:guess strategy :answer answer :on-close #(set-show-an! (not show-an)) :set-strategy! set-strategy!}))))))

