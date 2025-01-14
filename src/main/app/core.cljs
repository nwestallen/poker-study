(ns app.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]
            [app.components.contents :refer [TableOfContents]]
            [app.components.table :refer [Table]]
            [app.components.cards :refer [hand-text]]
            [clojure.walk :as walk]
            ["react-katex" :refer [InlineMath BlockMath]]
            )
  (:require-macros [app.utils.macros :refer [defpage]]))

(defn extract-headers [form]
  (let [headers (atom [])]
    (walk/postwalk
     (fn [node]
       (when (and (sequential? node)
                  (contains? #{"d/h2" "d/h3" "d/h4"} (str (first node))))
         (swap! headers conj node))
       node)
     form)
    @headers))

(def outline-style
  {:h2 "font-bold indent-2 text-2xl text-slate-600 my-2"
   :h3 "font-semibold indent-4 text-xl text-slate-500 my-1"})

(defpage PageContent
    (d/div
           (d/h1 {:class-name "text-4xl font-bold py-5"} "♠" (d/span {:class "text-red-600"} "♥︎ ") "Understanding Poker Theory " (d/span {:class "text-sky-600"} "♦︎") (d/span {:class "text-green-600"}"♣︎"))
      (d/h2 {:id "hand-rankings" :class-name (:h2 outline-style)} "Hand Rankings")
           (d/h3 {:id "suba" :class-name (:h3 outline-style)} "Subsection A")
           (d/p {:class-name "indent-6"}"I'm gonna put some more text here, maybe talk about " (hand-text "Ah" "Kd"))
      (d/h3 {:id "subB" :class-name (:h3 outline-style)} "Subsection B")
           (d/p {:class-name "indent-6"}"more text here")
           (d/h2 {:id "bottom" :class-name (:h2 outline-style)} "Section 2")
      ($ BlockMath {:math "\\int_0^\\infty x^2 dx"})
      ($ Table {:headers ["Rank" "Hand Name" "Form"]
                :rows [
                       [1 "Royal Flush" (hand-text "Ts" "Js" "Ks" "Qs" "As")]
                       [2 "Straight Flush" (hand-text "6h" "7h" "8h" "9h" "Th")]
                       ]})
      ))

($ InlineMath {:math "\\int_0^\\infty x^2 dx"})

(defnc app []
  {:helix/features {:fast-refresh true}}
  (d/div {:class-name "flex flex-row h-screen"}
         ($ TableOfContents {:headers (extract-headers PageContent-structure)})
         ($ PageContent)
    ))

;; start your app with your favorite React renderer
(defn ^:export init []
  (let [root (rdom/createRoot (js/document.getElementById "root"))]
    (.render root ($ app))))
