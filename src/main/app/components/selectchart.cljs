(ns app.components.selectchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [Cardchart]]
            [app.utils.strategy :refer [all-fold six-strat]]
            ["react-dom/client" :as rdom]))

(defnc Selectchart []
  (let [[state set-state] (hooks/use-state {:strategy (get-in six-strat [:RFI :LJ])})]
    (d/div
     (d/div {:class-name (css :flex :flex-row)}
     (d/select {:class-name (css :px-3 :py-1 :mr-2 {:background-color "rgb(64, 64, 64)"} :text-white :mb-7)
                :on-change #(set-state assoc :strategy (get-in six-strat [:RFI (keyword (.. % -target -value))]))}
               (d/option {:value "LJ"} "LO-JACK")
               (d/option {:value "HJ"} "HI-JACK")
               (d/option {:value "CO"} "CUTOFF")
               (d/option {:value "BTN"} "BUTTON")
               (d/option {:value "SB"} "SMALL BLIND")
               )
     (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-red-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)}"Raise")
     (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-green-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)}"Call")
     (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-sky-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)}"Fold")
     )
     ($ Cardchart {:strategy (:strategy state)})
     )))
