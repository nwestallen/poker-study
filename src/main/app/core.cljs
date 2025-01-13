(ns app.core
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]))

;; define components using the `defnc` macro
(defnc greeting
  "A component which greets a user."
  [{:keys [name]}]
  ;; use helix.dom to create DOM elements
  (d/div {:class-name "px-5"}"Hello, " (d/strong name) "!"))

(defnc app []
  {:helix/features {:fast-refresh true}}
  (let [[state set-state] (hooks/use-state {:name "Helix User"})]
    (d/div
     (d/h1 {:class-name "text-4xl font-bold p-5"} "Welcome!")
     ;; create elements out of components
     ($ greeting {:name (:name state)})
     (d/input {:class-name "mx-5 my-1 border border-black"
               :value (:name state)
               :on-change #(set-state assoc :name (.. % -target -value))}))))

;; start your app with your favorite React renderer
(defn ^:export init []
(let [root (rdom/createRoot (js/document.getElementById "root"))]
(.render root ($ app))))
