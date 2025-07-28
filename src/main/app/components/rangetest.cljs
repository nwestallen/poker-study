(ns app.components.rangetest
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.paintchart :refer [Paintchart]]
            [app.components.rangeform :refer [RangeForm]]
            [app.components.accreport :refer [AccReport]]
            [app.components.freqchart :refer [FreqChart]]
            [app.components.pokertable :refer [TableContainer]]
            [app.components.scenariomanager :refer [ScenarioLoader]]
            [app.components.strategysummary :refer [StrategySummary]]
            [app.components.mixslider :refer [SliderSquare]]
            [app.utils.strategy :refer [action-summary all-fold convert-ranges strat-accuracy simplify-strat abbrv-strat]]
            [app.utils.scenarios :as scenarios]
            ["react-dom/client" :as rdom]
            ["react-router-dom" :as router]))

(defnc RangeTest [{:keys []}]
  (let [[search-params set-search-params!] (router/useSearchParams)
        [strategy set-strategy!] (hooks/use-state all-fold)
        [answer set-answer!] (hooks/use-state all-fold)
        [show-an set-show-an!] (hooks/use-state false)
        [actions set-actions!] (hooks/use-state "")
        [title set-title!] (hooks/use-state "Load A Scenario")
        [mix set-mix!] (hooks/use-state {:raise 35, :call 35, :fold 30})
        [height set-height!] (hooks/use-state 100)
        update (hooks/use-memo [mix height] (update-vals mix #(js/parseFloat (.toFixed (* (/ height 100) %) 2))))
        strat-text (hooks/use-memo [strategy] (abbrv-strat strategy))

        handle-scenario-load (fn [scenario]
                               (set-answer! (:strategy scenario))
                               (set-actions! (:table scenario))
                               (set-title! (:title scenario))
                               (set-search-params! #js {"scenario" (:title scenario)}))

        load-scenario-from-url (fn []
                                 (when-let [scenario-title (.get search-params "scenario")]
                                   (when-let [scenario (scenarios/load-scenario-from-local-storage scenario-title)]
                                     (set-answer! (:strategy scenario))
                                     (set-actions! (:table scenario))
                                     (set-title! (:title scenario)))))]

    (hooks/use-effect
     [search-params]
     (load-scenario-from-url)
     js/undefined)
    (<>
     (d/div {:class-name (css :m-2 :flex :flex-row :justify-evenly)}

            (d/div {:class-name (css :mt-3 :flex :flex-col {:width "40%"})}
                   (d/h2 {:class-name (css :font-bold :text-2xl :mb-4 :ml-2 :text-shadow-md)} title)
                   ($ TableContainer {:stack-size 150 :seats [:UTG :UTG1 :UTG2 :LJ :HJ :CO :BTN :SB :BB] :actions actions :set-actions! set-actions!})
                   ($ StrategySummary {:strat-text strat-text}))

            (d/div {:class-name (css :flex :flex-col {:width "15.5%"} :mx-1.5 :mt-15)}
                   (d/div {:class-name (css :border :border-black :rounded-md :mb-4)} ($ ScenarioLoader {:current-scenario {:title ""
                                                                                                                      :table ""
                                                                                                                      :strategy strategy}
                                                                                                   :on-load handle-scenario-load}))
                   ($ SliderSquare {:mix mix :set-mix set-mix! :height height :set-height set-height! :update update})
                   (d/button {:class-name (css :text-white :text-shadow-sm :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :mt-2 :rounded-md :shadow-md [:hover :bg-sky-400]) :on-click #(set-show-an! (not show-an))} "Check Answer")
                   (d/button {:class-name (css :text-white :text-shadow-sm :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :mt-2 :rounded-md :shadow-md [:hover :bg-sky-400]) :on-click #(set-strategy! all-fold)} "Clear Strategy"))

            (d/div {:class-name (css :flex :flex-col {:width "40%"} :mt-7)}
                   ($ Paintchart {:strategy strategy :set-strategy! set-strategy! :height height :mix mix :update update})))

     (if show-an
       (d/div {:class-name (css :fixed :top-0 :left-0 :w-screen :flex :flex-row :justify-center)}
              (d/div {:class-name (css :absolute :w-screen {:height "150vh"} :bg-slate-700 {:opacity 0.7})})
              ($ AccReport {:guess strategy :answer answer :on-close #(set-show-an! (not show-an)) :set-strategy! set-strategy!}))))))

