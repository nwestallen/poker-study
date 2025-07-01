(ns app.components.selectchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [PureChart]]
            [app.utils.strategy :refer [six-strat strat-ranges]]
            ["react-dom/client" :as rdom]))

(defnc Selectchart []
  (let [[state set-state] (hooks/use-state {:scenario :RFI :position :EP :act :OPEN})
        [strategy set-strategy] (hooks/use-state (strat-ranges (get-in six-strat [(:scenario state) (:position state) (:act state)])))]
    (hooks/use-effect [state] (set-strategy (strat-ranges (get-in six-strat [(:scenario state) (:position state) (:act state)]))))
    (d/div
     (d/div {:class-name (css :flex :flex-row :my-5)}
     (d/select {:class-name (css :px-3 :py-1 :mr-2 {:background-color "rgb(64, 64, 64)"} :text-white :mb-7)
               :value (name (:scenario state)):on-change #(set-state assoc :scenario (keyword (.. % -target -value)))}
               (for [sit (keys six-strat)] (d/option {:value (name sit)} (name sit))))
     (d/select {:class-name (css :px-3 :py-1 :mr-2 {:background-color "rgb(64, 64, 64)"} :text-white :mb-7)
                :value (name (:position state)):on-change #(set-state assoc :position (keyword (.. % -target -value)) :act (first (keys (get-in six-strat [(:scenario state) (keyword (.. % -target -value))]))))}
               (for [pos (keys ((:scenario state) six-strat))] (d/option {:value (name pos)} (name pos))))
     (d/select {:class-name (css :px-3 :py-1 :mr-2 {:background-color "rgb(64, 64, 64)"} :text-white :mb-7)
                :value (name (:act state)):on-change #(set-state assoc :act (keyword (.. % -target -value)))}
               (for [act (keys (get-in six-strat [(:scenario state) (:position state)]))] (d/option {:value (name act)} (name act))))
     (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-red-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)}"Raise")
     (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-green-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)}"Call")
     (d/div {:class-name (css :w-5 :h-5 :rounded-full :bg-sky-500 :mx-1 :mt-0.5)}) (d/p {:class-name (css :font-semibold :mr-2)}"Fold")
     )
     ($ PureChart {:strategy strategy :set-strategy set-strategy :update-strat "{:raise 50 :call 50}"})
     )))
