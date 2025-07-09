(ns app.components.paintchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [PureChart]]
            [app.components.rangeform :refer [RangeForm]]
            [app.components.accreport :refer [AccReport]]
            [app.components.paintcontrol :refer [ControlPanel]]
            [app.utils.strategy :refer [all-fold convert-ranges strat-accuracy simplify-strat]]
            ["react-dom/client" :as rdom]))

(defnc Paintchart [{:keys [answer]}]
  (let [[strategy set-strategy] (hooks/use-state all-fold)
        [height set-height] (hooks/use-state 100)
        [mix set-mix] (hooks/use-state {:raise 35, :call 35, :fold 30})
        [show-an set-show-an] (hooks/use-state false)
        update (hooks/use-memo [mix height] (update-vals mix #(js/parseFloat (.toFixed (* (/ height 100) %) 2))))
        ]
    (<>
                  (if show-an
                    (d/div
                    (d/div {:class-name (css :absolute :w-screen {:height "150vh"} :bg-slate-700 {:opacity 0.7})})
                    ($ AccReport {:guess strategy :answer answer :on-close #(set-show-an (not show-an))})
                    ))
    (d/div {:class-name (css :m-2 :flex :flex-row :my-10)}
           (d/div {:class-name (css :flex :flex-col :mr-10)}
                  (d/h3 {:class-name (css :font-bold :mb-2 :text-lg)} "Strategy")
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
           (d/div {:class-name (css :flex :flex-col)}
           )
           ))))
