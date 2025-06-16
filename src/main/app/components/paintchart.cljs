(ns app.components.paintchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [Cardchart]]
            [app.utils.strategy :refer [all-fold strat-ranges]]
            ["react-dom/client" :as rdom]))

(defnc Paintchart []
  (let [
        [update set-update] (hooks/use-state "{:raise 100}")
        [strategy set-strategy] (hooks/use-state all-fold)
        ]
    (<>
    ($ Cardchart {:strategy strategy :set-strategy set-strategy :update-strat update})
    (d/input {:type "text" :class-name "border-2 border-slate-950 mx-2" :value update :on-change (fn [e] (set-update e.target.value))})
    )
    )
  )
