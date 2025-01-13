(ns app.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]
            [app.components.toc :refer [toc]]
            [clojure.walk :as walk])
  (:require-macros [app.utils.macros :refer [defpage]]))

(defnc greeting
  "A component which greets a user."
  [{:keys [name]}]
  ;; use helix.dom to create DOM elements
  (d/div {:class-name "px-5"} "Hello, " (d/strong name) "!"))

(defn extract-headers-simple [form]
  (let [headers (atom [])]
    (walk/postwalk
     (fn [node]
       (when (and (sequential? node)
                  (= (str (first node)) "d/h2"))
         (swap! headers conj node))
       node)
     form)
    @headers))

(defpage PageContent
  (let [[state set-state] (hooks/use-state {:name "Helix User"})]
    (d/div
           (d/h1 {:class-name "text-4xl font-bold py-5"} "♠" (d/span {:class "text-red-600"} "♥︎ ") "Understanding Poker Theory " (d/span {:class "text-red-600"} "♦︎") "♣︎")
           (d/a {:href "#bottom"} "jump to bottom of page")
           ($ greeting {:name (:name state)})
           (d/input {:class-name "mx-5 my-1 border border-black"
                     :value (:name state)
                     :on-change #(set-state assoc :name (.. % -target -value))})
      (d/h2 {:class-name "font-bold"}"Section 1")
           (d/h3 "Subsection A")
           (d/p "I'm gonna put some more text here")
      (d/h3 "Subsection B")
           (d/p "more text here")
           (d/h2 {:id "bottom" :class-name "font-bold"} "Section 2"))))

(defnc app []
  {:helix/features {:fast-refresh true}}
  (d/div {:class-name "flex flex-row h-screen"}
         ($ toc)
         ($ PageContent)))

PageContent-structure

(walk/postwalk #(do (println "Visiting:" %) %) PageContent-structure)

(extract-headers-simple PageContent-structure)

;; start your app with your favorite React renderer
(defn ^:export init []
  (let [root (rdom/createRoot (js/document.getElementById "root"))]
    (.render root ($ app))))
