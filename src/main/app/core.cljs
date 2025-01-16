(ns app.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]
            [app.components.contents :refer [TableOfContents]]
            [app.components.table :refer [Table]]
            [app.components.cards :refer [hand-text hand-img]]
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
  {:h2 (css :font-bold :pl-2 :text-2xl :text-slate-600 :my-2)
   :h3 (css :font-semibold :pl-4 :text-xl :text-slate-500 :my-1)})

(defpage PageContent
    (d/div
     (d/h1 {:class-name (css :text-4xl :px-2 :py-5)}"♠" (d/span {:class-name (css :text-red-600)} "♥︎ ") "Understanding Poker Theory "(d/span {:class-name (css :text-sky-600)} "♦︎") (d/span {:class-name (css :text-green-600)}"♣︎"))
      (d/h2 {:id "hand-rankings" :class-name (:h2 outline-style)} "Hand Rankings")
      ($ Table {:headers ["Rank" "Hand Name" "Form" "5 Card Combos" "7 Card Combos"]
                :rows [
                       [1 "Royal Flush" (hand-text "As" "Ks" "Qs" "Js" "Ts") ($ BlockMath {:math "\\binom{4}{1} = 4"}) ($ BlockMath {:math "\\binom{4}{1}\\binom{47}{2} = 4\\,324"})]
                       [2 "Straight Flush" (hand-text "9h" "8h" "7h" "6h" "5h") ($ BlockMath {:math "\\binom{9}{1}\\binom{4}{1} = 36"}) ($ BlockMath {:math "\\binom{9}{1}\\binom{4}{1}\\binom{47}{2} = 37\\,260"})]
                       [3 "Four of a Kind" (hand-text "Qs" "Qh" "Qc" "Qd" "Kc") ($ BlockMath {:math "\\binom{13}{1}\\binom{4}{1}\\binom{12}{1}\\binom{4}{1} = 156"}) ($ BlockMath {:math "\\binom{13}{1}\\binom{48}{3} = 224\\,848"})]
                       [3 "Four of a Kind" (hand-text "Qs" "Qh" "Qc" "Qd" "Kc") ($ BlockMath {:math "\\binom{13}{1}\\binom{4}{1}\\binom{12}{1}\\binom{4}{1} = 156"}) ($ BlockMath {:math "\\binom{13}{1}\\binom{48}{3} = 224\\,848"})]
                       ]})
           (d/h3 {:id "suba" :class-name (:h3 outline-style)} "Subsection A")
           (d/p {:class-name (css :pl-6)}"I'm gonna put some more text here, maybe talk about " (hand-text "Ah" "Kd"))
      (d/h3 {:id "subB" :class-name (:h3 outline-style)} "Subsection B")
           (d/p {:class-name (css :pl-6)}"more text here")
           (d/h2 {:id "bottom" :class-name (:h2 outline-style)} "Section 2")
      (hand-img "Qs" "Qh" "Qc" "Qd" "Ts")
      (d/p "Just a little test")
      ))

(defnc app []
  {:helix/features {:fast-refresh true}}
  (d/div {:class-name (css :flex :flex-row :min-h-screen)}
         ($ TableOfContents {:headers (extract-headers PageContent-structure)})
         ($ PageContent)
    ))

;; start your app with your favorite React renderer
(defn ^:export init []
  (let [root (rdom/createRoot (js/document.getElementById "root"))]
    (.render root ($ app))))
