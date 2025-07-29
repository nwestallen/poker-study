(ns app.components.rangetest
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [clojure.string :as str]
            [app.components.paintchart :refer [Paintchart]]
            [app.components.rangeform :refer [RangeForm]]
            [app.components.accreport :refer [AccReport]]
            [app.components.pokertable :refer [TableContainer]]
            [app.components.strategysummary :refer [StrategySummary]]
            [app.components.mixslider :refer [SliderSquare]]
            [app.utils.strategy :refer [action-summary all-fold convert-ranges strat-accuracy simplify-strat abbrv-strat encode-strategy decode-strategy]]
            ["react-dom/client" :as rdom]
            ["react-router-dom" :as router]))

(defnc RangeTest [{:keys []}]
  (let [[search-params set-search-params!] (router/useSearchParams)
        [strategy set-strategy!] (hooks/use-state all-fold)
        [answer set-answer!] (hooks/use-state all-fold)
        [show-an set-show-an!] (hooks/use-state false)
        [actions set-actions!] (hooks/use-state "")
        [title set-title!] (hooks/use-state "Range Test")
        [mix set-mix!] (hooks/use-state {:raise 35, :call 35, :fold 30})
        [height set-height!] (hooks/use-state 100)
        update (hooks/use-memo [mix height] (update-vals mix #(js/parseFloat (.toFixed (* (/ height 100) %) 2))))
        strat-text (hooks/use-memo [strategy] (abbrv-strat strategy))

        update-url-from-state (fn []
                                (let [encoded-strategy (encode-strategy answer)]
                                  (when (and (not= answer all-fold) (not (str/blank? actions)) (not= title "Range Test"))
                                    (set-search-params! #js {"strategy" encoded-strategy 
                                                             "actions" actions
                                                             "title" title}))))

        load-from-url (fn []
                        (when-let [encoded-strategy (.get search-params "strategy")]
                          (set-answer! (decode-strategy encoded-strategy)))
                        (when-let [url-actions (.get search-params "actions")]
                          (set-actions! url-actions))
                        (when-let [url-title (.get search-params "title")]
                          (set-title! url-title)))]

    (hooks/use-effect
     [search-params]
     (load-from-url)
     js/undefined)

    (hooks/use-effect
     [answer actions title]
     (update-url-from-state)
     js/undefined)

    (<>
     (d/div {:class-name (css :m-2 :flex :flex-row :justify-evenly)}

            (d/div {:class-name (css :mt-3 :flex :flex-col {:width "40%"})}
                   (d/h2 {:class-name (css :font-bold :text-2xl :mb-4 :ml-2 :text-shadow-md)} title)
                   ($ TableContainer {:stack-size 150 :seats [:UTG :UTG1 :UTG2 :LJ :HJ :CO :BTN :SB :BB] :actions actions :set-actions! set-actions!})
                   ($ StrategySummary {:strat-text strat-text}))

            (d/div {:class-name (css :flex :flex-col {:width "15.5%"} :mx-1.5 :mt-15)}
                   ($ SliderSquare {:mix mix :set-mix set-mix! :height height :set-height set-height! :update update})
                   (d/div {:class-name (css :flex :flex-row :flex-wrap)}
                   (d/button {:class-name (css :text-white :text-shadow-sm :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :mt-2 :mr-2 :rounded-md :shadow-md [:hover :bg-sky-400] :text-md) :on-click #(set-show-an! (not show-an))} "Submit")
                   (d/button {:class-name (css :text-white :text-shadow-sm :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :mt-2 :rounded-md :shadow-md [:hover :bg-sky-400] :text-md) :on-click #(set-strategy! all-fold)} "Clear")))

            (d/div {:class-name (css :flex :flex-col {:width "40%"} :mt-7)}
                   ($ Paintchart {:strategy strategy :set-strategy! set-strategy! :height height :mix mix :update update})))

     (if show-an
       (d/div {:class-name (css :fixed :top-0 :left-0 :w-screen :flex :flex-row :justify-center)}
              (d/div {:class-name (css :absolute :w-screen {:height "150vh"} :bg-slate-700 {:opacity 0.7})})
              ($ AccReport {:guess strategy :answer answer :on-close #(set-show-an! (not show-an)) :set-strategy! set-strategy!}))))))

