(ns app.components.paintchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [PureChart]]
            [app.components.rangeform :refer [RangeForm]]
            [app.components.accreport :refer [AccReport]]
            [app.components.paintcontrol :refer [ControlPanel]]
            [app.components.freqchart :refer [FreqChart]]
            [app.components.pokertable :refer [PokerTable ChipStack]]
            [app.utils.strategy :refer [action-summary all-fold convert-ranges strat-accuracy simplify-strat abbrv-strat]]
            ["react-dom/client" :as rdom]))

(defnc Paintchart [{:keys [answer]}]
  (let [[strategy set-strategy] (hooks/use-state all-fold)
        [height set-height] (hooks/use-state 100)
        [mix set-mix] (hooks/use-state {:raise 35, :call 35, :fold 30})
        [show-an set-show-an] (hooks/use-state false)
        update (hooks/use-memo [mix height] (update-vals mix #(js/parseFloat (.toFixed (* (/ height 100) %) 2))))
        strat-text (hooks/use-memo [strategy] (abbrv-strat strategy))
        ]
    (<>
                  (if show-an
                    (d/div
                    (d/div {:class-name (css :absolute :w-screen {:height "150vh"} :bg-slate-700 {:opacity 0.7})})
                    ($ AccReport {:guess strategy :answer answer :on-close #(set-show-an (not show-an))})
                    ))
    (d/div {:class-name (css :m-2 :flex :flex-row :my-10)}
           (d/div {:class-name (css :flex :flex-col :mr-10)}
                  (d/div {:class-name (css :flex :flex-row :mb-2)}
                         (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-red-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)}"Raise")
                         (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-green-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)}"Call")
                         (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-sky-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)}"Fold")
                   )
                  (d/div {:class-name (css {:width "700px"} {:height "700px"})}
                  ($ PureChart {:strategy strategy :set-strategy set-strategy :update-strat update}))
                  (d/div {:class-name (css :flex :flex-row)}
                  ($ ControlPanel {:mix mix :set-mix set-mix :height height :set-height set-height :update update})
                  ($ RangeForm {:on-submit #(set-strategy (convert-ranges %))})
                  (d/div {:class-name (css :flex :flex-col)}
                  (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(set-show-an (not show-an))}"Check Answer")
                  (d/button {:class-name (css :text-white :font-bold :bg-slate-500 :h-fit :w-fit :px-2 :py-1 :m-2 :rounded-md) :on-click #(set-strategy (simplify-strat strategy))}"Simplify Strat")
                  )
                  )
                  )
           (d/div {:class-name (css :mt-12 :flex :flex-col {:width "40%"})}
                  ($ PokerTable {:active-seat "UTG" :pot 1.5 :bets {:SB 0.5 :BB 1} :stacks {:SB 149.5 :BB 149 :UTG 150 :UTG1 150 :UTG2 150 :LJ 150 :HJ 150 :CO 150 :BTN 150}})
           (d/div {:class-name (css :p-4 :mt-10 :rounded-lg :flex :flex-col :border :border-black :h-fit)}
                         (map #(d/p {:class-name (css :mb-4)} %) strat-text)
                         )
           )
           ))))
