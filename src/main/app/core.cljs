(ns app.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]
            [app.components.paintchart :refer [Paintchart]]
            [app.components.selectchart :refer [Selectchart]]
            [app.utils.strategy :refer [all-fold keyed-strat six-strat strat-ranges]]
            ))

(defnc app []
  {:helix/features {:fast-refresh true}}
  (d/div {:class-name (css :flex :flex-row :min-h-screen)}
         ($ Paintchart {:answer (strat-ranges (get-in six-strat [:RFI :EP :OPEN]))})
    ))

(defn ^:export init []
  (let [root (rdom/createRoot (js/document.getElementById "root"))]
    (.render root ($ app))))
