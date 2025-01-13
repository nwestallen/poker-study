(ns app.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]
            [app.components.toc :refer [toc]]))

;; define components using the `defnc` macro
(defnc greeting
  "A component which greets a user."
  [{:keys [name]}]
  ;; use helix.dom to create DOM elements
  (d/div {:class-name "px-5"}"Hello, " (d/strong name) "!"))

(defnc app []
  {:helix/features {:fast-refresh true}}
  (let [[state set-state] (hooks/use-state {:name "Helix User"})]
    (d/div {:class-name "flex flex-column h-screen"}
      ($ toc)
      (d/div

        (d/h1 {:class-name "text-4xl font-bold py-5"} "♠" (d/span {:class "text-red-600"}"♥︎ ") "Understanding Poker Theory " (d/span {:class "text-red-600"}"♦︎")"♣︎")

      (d/a {:href "#bottom"} "jump to bottom of page")
     ;; create elements out of components
     ($ greeting {:name (:name state)})
     (d/input {:class-name "mx-5 my-1 border border-black"
               :value (:name state)
               :on-change #(set-state assoc :name (.. % -target -value))})

      (d/h3 "The Middle of the page")

      (d/p "I'm gonna put some more text here" )
      (d/p "more text here")

      (d/h2 {:id "bottom"} "Bottom Heading"))
      )
    ))

;; start your app with your favorite React renderer
(defn ^:export init []
(let [root (rdom/createRoot (js/document.getElementById "root"))]
(.render root ($ app))))
