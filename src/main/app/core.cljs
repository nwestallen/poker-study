(ns app.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]
            ["react-router-dom" :as router]
            [app.components.creator :refer [Creator]]
            [app.components.rangetest :refer [RangeTest]]
            [app.components.navbar :refer [Navbar]]
            [app.utils.strategy :refer [all-fold keyed-strat six-strat strat-ranges]]
            ))

(defnc app []
  {:helix/features {:fast-refresh true}}
  ($ router/BrowserRouter
    (<>
      ($ Navbar)
      ($ router/Routes
        ($ router/Route {:path "/" :element ($ Creator {:answer (strat-ranges (get-in six-strat [:RFI :EP :OPEN]))})})
        ($ router/Route {:path "/test" :element ($ RangeTest {:answer (strat-ranges (get-in six-strat [:RFI :EP :OPEN]))})})
        ))))

(defn ^:export init []
  (let [root (rdom/createRoot (js/document.getElementById "root"))]
    (.render root ($ app))))
