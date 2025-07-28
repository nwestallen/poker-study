(ns app.components.creator
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [clojure.string :as str]
            [app.components.paintchart :refer [Paintchart]]
            [app.components.rangeform :refer [RangeForm]]
            [app.components.accreport :refer [AccReport]]
            [app.components.freqchart :refer [FreqChart]]
            [app.components.pokertable :refer [TableContainer]]
            [app.components.actionform :refer [ActionForm]]
            [app.components.strategysummary :refer [StrategySummary]]
            [app.components.mixslider :refer [SliderSquare]]
            [app.utils.strategy :refer [action-summary all-fold convert-ranges strat-accuracy simplify-strat abbrv-strat encode-strategy decode-strategy]]
            ["react-dom/client" :as rdom]
            ["react-router-dom" :as router]))

(defnc Creator [{:keys []}]
  (let [[search-params set-search-params!] (router/useSearchParams)
        [strategy set-strategy!] (hooks/use-state all-fold)
        [form-actions set-form-actions!] (hooks/use-state "")
        [table-actions set-table-actions!] (hooks/use-state "")
        [title set-title!] (hooks/use-state "")
        [mix set-mix!] (hooks/use-state {:raise 35, :call 35, :fold 30})
        [height set-height!] (hooks/use-state 100)
        update (hooks/use-memo [mix height] (update-vals mix #(js/parseFloat (.toFixed (* (/ height 100) %) 2))))
        strat-text (hooks/use-memo [strategy] (abbrv-strat strategy))

        update-url-from-state (fn []
                                (let [encoded-strategy (encode-strategy strategy)]
                                  (if (= strategy all-fold)
                                    (set-search-params! #js {})
                                    (let [params #js {"strategy" encoded-strategy}]
                                      (when (not (str/blank? table-actions))
                                        (js/Object.assign params #js {"actions" table-actions}))
                                      (when (not (str/blank? title))
                                        (js/Object.assign params #js {"title" title}))
                                      (set-search-params! params)))))

        copy-url (fn []
                   (let [encoded-strategy (encode-strategy strategy)
                         url (str js/window.location.origin "/test"
                                  "?strategy=" (js/encodeURIComponent encoded-strategy)
                                  "&actions=" (js/encodeURIComponent table-actions)
                                  (when (not (str/blank? title))
                                    (str "&title=" (js/encodeURIComponent title))))]
                     (js/navigator.clipboard.writeText url)
                     (js/alert "Test URL copied to clipboard!")))

        load-from-url (fn []
                        (when-let [encoded-strategy (.get search-params "strategy")]
                          (set-strategy! (decode-strategy encoded-strategy)))
                        (when-let [actions (.get search-params "actions")]
                          (set-table-actions! actions))
                        (when-let [url-title (.get search-params "title")]
                          (set-title! url-title)))]

    (hooks/use-effect
     [search-params]
     (load-from-url)
     js/undefined)

    (hooks/use-effect
     [strategy]
     (update-url-from-state)
     js/undefined)

    (hooks/use-effect
     [table-actions]
     (when (not= strategy all-fold)
       (update-url-from-state))
     js/undefined)

    (hooks/use-effect
     [title]
     (when (not= strategy all-fold)
       (update-url-from-state))
     js/undefined)

    (d/div {:class-name (css :m-2 :flex :flex-row :mt-6)}
           (d/div {:class-name (css :flex :flex-col {:width "39%"})}
                  (d/div {:class-name (css :mb-4)}
                         (d/input {:type "text" 
                                   :placeholder "Scenario title..." 
                                   :value title
                                   :class-name (css :w-full :p-2 :text-2xl :font-bold :border :border-gray-300 :rounded-md :text-shadow-md [:focus :border-sky-500 :outline-none])
                                   :on-change #(set-title! (.. % -target -value))}))
                  ($ Paintchart {:strategy strategy :set-strategy! set-strategy! :height height :mix mix :update update}))
           (d/div {:class-name (css :flex :flex-col {:width "15%"} :m-4)}
                  (d/div {:class-name (css :flex :flex-col)}
                         (d/div {:class-name (css {:width "100%"} :mt-4 :flex :flex-col :justify-start)} ($ SliderSquare {:mix mix :set-mix set-mix! :height height :set-height set-height! :update update}))
                         ($ ActionForm {:actions form-actions :set-actions! set-form-actions! :on-submit #(set-table-actions! form-actions)})
                         ($ RangeForm {:on-submit #(set-strategy! (convert-ranges %))})
                         (d/button {:class-name (css :shadow-md :text-shadow-sm :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :my-1 :rounded-md [:hover :bg-sky-400]) :on-click #(set-strategy! (simplify-strat strategy))} "Simplify Strat")
                         (d/button {:class-name (css :shadow-md :text-shadow-sm :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :my-1 :rounded-md [:hover :bg-sky-400]) :on-click #(set-strategy! all-fold)} "Clear Strategy")
                         (d/button {:class-name (css :shadow-md :text-shadow-sm :text-white :font-bold :bg-green-500 :h-fit :w-fit :px-2 :py-1 :my-1 :rounded-md [:hover :bg-green-400]) :on-click copy-url} "Copy Test URL")))

           (d/div {:class-name (css :flex :flex-col {:width "44%"} :mt-8)}
                  ($ TableContainer {:stack-size 150 :seats [:UTG :UTG1 :UTG2 :LJ :HJ :CO :BTN :SB :BB] :actions table-actions})
                  ($ StrategySummary {:strat-text strat-text})))))

