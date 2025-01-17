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
                       [1 "Royal Flush" (hand-text "As" "Ks" "Qs" "Js" "Ts") ($ BlockMath {:math "\\binom{4}{1} = 4"}) ($ BlockMath {:math "4\\,324"})]
                       [2 "Straight Flush" (hand-text "9h" "8h" "7h" "6h" "5h") ($ BlockMath {:math "\\binom{9}{1}\\binom{4}{1} = 36"}) ($ BlockMath {:math "37\\,260"})]
                       [3 "Four of a Kind" (hand-text "Qs" "Qh" "Qc" "Qd" "Kc") ($ BlockMath {:math "\\binom{13}{1}\\binom{4}{1}\\binom{12}{1}\\binom{4}{1} = 624"}) ($ BlockMath {:math "224\\,848"})]
                       [4 "Full House" (hand-text "Ks" "Kh" "Kd" "9s" "9h") ($ BlockMath {:math "\\binom{13}{1}\\binom{4}{3}\\binom{12}{1}\\binom{4}{2} = 3\\,744"}) ($ BlockMath {:math "3\\,473\\,184"})]
                       [5 "Flush" (hand-text "Kc" "Jc" "9c" "8c" "4c") ($ BlockMath {:math "\\binom{13}{5}\\binom{4}{1}-\\binom{10}{1}\\binom{4}{1} = 5\\,108"}) ($ BlockMath {:math "4\\,047\\,644"})]
                       [6 "Straight" (hand-text "6c" "5h" "4s" "3h" "2d") ($ BlockMath {:math "\\binom{10}{1}\\binom{4}{1}^5-\\binom{10}{1}\\binom{4}{1} = 10\\,200"}) ($ BlockMath {:math "6\\,180\\,020"})]
                       [7 "Three of a Kind" (hand-text "7d" "7c" "7h" "As" "Qh") ($ BlockMath {:math "\\binom{13}{1}\\binom{4}{3}\\binom{12}{2}\\binom{4}{1}^2 = 54\\,912"}) ($ BlockMath {:math "6\\,461\\,120"})]
                       [8 "Two Pair" (hand-text "As" "Ac" "8s" "8d" "Js") ($ BlockMath {:math "\\binom{13}{2}\\binom{4}{1}^2\\binom{11}{1}\\binom{4}{1} = 123\\,552"}) ($ BlockMath {:math "31\\,433\\,400"})]
                       [9 "One Pair" (hand-text "Th" "Td" "Kc" "Qc" "4h") ($ BlockMath {:math "\\binom{13}{1}\\binom{4}{2}\\binom{12}{3}\\binom{4}{1}^3 = 1\\,098\\,240"}) ($ BlockMath {:math "58\\,627\\,800"})]
                       [10 "High Card" (hand-text "Kd" "Jh" "9d" "7c" "6c") ($ BlockMath {:math "\\left[\\binom{13}{5}-\\binom{10}{1}\\right]\\left[\\binom{4}{1}^5 - \\binom{4}{1}\\right] = 1\\,302\\,540"}) ($ BlockMath {:math "23\\,294\\,460"})]
                       ]})
           (d/h3 {:id "suba" :class-name (:h3 outline-style)} "Subsection A")
           (d/p {:class-name (css :pl-6)}"I'm gonna put some more text here, maybe talk about " (hand-text "Ah" "Kd"))
      (d/h3 {:id "subB" :class-name (:h3 outline-style)} "Subsection B")
           (d/p {:class-name (css :pl-6)}"more text here")
           (d/h2 {:id "bottom" :class-name (:h2 outline-style)} "Section 2")
      (hand-img "Qs" "Qh" "Qc" "Qd" "Ts")
      (d/p "Just a little test")
      (d/div {:class-name (css :grid {:grid-template-columns "repeat(13, 50px)"} {:grid-template-rows "repeate(13, 50px)"} :gap-4 :bg-red-300 {:width "fit-content"})}
             (for [i (range 13)] (for [j (range 13)] (d/div {:class-name (css :flex :flex-row {:width "50px" :height "50px"} :bg-blue-400)} (str i "-" j)))))
      ))

;; Single square component that can accept total fill, eventually partial fill or saturation based on percentage props. Naturally hand letter props
;; Syntax/dsl for grid props dictating quickly how each square is to be colored
;; Should be able to programmatically generate props e.g. from solvers in order to integrate theory
;; User should be able to manually paint squares or easily type percentages to make their own charts (similar to GTO range tool)

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
