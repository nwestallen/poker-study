(ns app.core
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]
            [app.components.contents :refer [TableOfContents]]
            [app.components.table :refer [Table]]
            [app.components.cards :refer [hand-text hand-img card-img]]
            [app.components.selectchart :refer [Selectchart]]
            [app.components.felt :refer [Felt]]
            [app.utils.strategy :refer [all-fold]]
            [clojure.walk :as walk]
            [goog.string :as gstring]
            [goog.string.format]
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
  {:h2 (css :font-bold :ml-2 :text-2xl :text-slate-600 :my-6)
   :h3 (css :font-semibold :ml-4 :text-xl :text-slate-500 :my-3)
   :p2 (css :ml-6 :my-2)
   :p3 (css :ml-10 :my-2)})
;;Test

(defn outs-prob [outs]
  (let [turn (gstring/format "%.2f %%" (* 100.0 (/ outs (- 52 5))))
        river (gstring/format "%.2f %%" (* 100.0 (/ outs (- 52 6))))
        both (gstring/format "%.2f %%" (* 100.0 (- 1.0 (* (/ (- 52 5 outs) (- 52 5)) (/ (- 52 6 outs) (- 52 6))))))]
    [outs turn river both]))

(defpage PageContent
    (d/div
     (d/h1 {:class-name (css :text-4xl :px-2 :py-5)}"♠" (d/span {:class-name (css :text-red-600)} "♥︎ ") "Understanding Poker Theory "(d/span {:class-name (css :text-sky-600)} "♦︎") (d/span {:class-name (css :text-green-600)}"♣︎"))
     ;;TODO: Put a choice for 5 & 7 card hands and update table based on seleection
      (d/h2 {:id "hand-rankings" :class-name (:h2 outline-style)} "Hand Rankings")
      ($ Table {:headers ["Rank" "Hand Name" "Form" "5 Card Combos" "7 Card Combos"]
                :rows [
                       [1 "Royal Flush" (hand-text "As" "Ks" "Qs" "Js" "Ts") ($ BlockMath {:math "\\binom{4}{1} = 4"}) ($ BlockMath {:math "4{,}324"})]
                       [2 "Straight Flush" (hand-text "9h" "8h" "7h" "6h" "5h") ($ BlockMath {:math "\\binom{9}{1}\\binom{4}{1} = 36"}) ($ BlockMath {:math "37{,}260"})]
                       [3 "Four of a Kind" (hand-text "Qs" "Qh" "Qc" "Qd" "Kc") ($ BlockMath {:math "\\binom{13}{1}\\binom{4}{1}\\binom{12}{1}\\binom{4}{1} = 624"}) ($ BlockMath {:math "224{,}848"})]
                       [4 "Full House" (hand-text "Ks" "Kh" "Kd" "9s" "9h") ($ BlockMath {:math "\\binom{13}{1}\\binom{4}{3}\\binom{12}{1}\\binom{4}{2} = 3{,}744"}) ($ BlockMath {:math "3{,}473{,}184"})]
                       [5 "Flush" (hand-text "Kc" "Jc" "9c" "8c" "4c") ($ BlockMath {:math "\\binom{13}{5}\\binom{4}{1}-\\binom{10}{1}\\binom{4}{1} = 5{,}108"}) ($ BlockMath {:math "4{,}047{,}644"})]
                       [6 "Straight" (hand-text "6c" "5h" "4s" "3h" "2d") ($ BlockMath {:math "\\binom{10}{1}\\binom{4}{1}^5-\\binom{10}{1}\\binom{4}{1} = 10{,}200"}) ($ BlockMath {:math "6{,}180{,}020"})]
                       [7 "Three of a Kind" (hand-text "7d" "7c" "7h" "As" "Qh") ($ BlockMath {:math "\\binom{13}{1}\\binom{4}{3}\\binom{12}{2}\\binom{4}{1}^2 = 54{,}912"}) ($ BlockMath {:math "6{,}461{,}120"})]
                       [8 "Two Pair" (hand-text "As" "Ac" "8s" "8d" "Js") ($ BlockMath {:math "\\binom{13}{2}\\binom{4}{1}^2\\binom{11}{1}\\binom{4}{1} = 123{,}552"}) ($ BlockMath {:math "31{,}433{,}400"})]
                       [9 "One Pair" (hand-text "Th" "Td" "Kc" "Qc" "4h") ($ BlockMath {:math "\\binom{13}{1}\\binom{4}{2}\\binom{12}{3}\\binom{4}{1}^3 = 1{,}098{,}240"}) ($ BlockMath {:math "58{,}627{,}800"})]
                       [10 "High Card" (hand-text "Kd" "Jh" "9d" "7c" "6c") ($ BlockMath {:math "\\left[\\binom{13}{5}-\\binom{10}{1}\\right]\\left[\\binom{4}{1}^5 - \\binom{4}{1}\\right] = 1{,}302{,}540"}) ($ BlockMath {:math "23{,}294{,}460"})]
                       ]})
      ;;TODO: Section on identifying your own hand, minigame
      ;;TODO: Section on identifying the nuts on any given board, minigame
      ;;TODO: Section on Expected Value, EV vs EQ, Equity Realization (dominaton, hiddenness)
      ;;TODO: Frequencies and Counting Combos of hands within range
      ;;TODO: Grouping board textures
      (d/h2 {:id "equity" :class-name (:h2 outline-style)} "Equity")
      (d/p {:class-name (:p2 outline-style)} "Equity is the measure of a hand's expected likelihood of winning at showdown given the current state of the game and all possible game states that may unfold by the time the last card is dealt.")
      (d/p {:class-name (:p2 outline-style)} "If all cards are face up, like when two players are all-in heads up in Texas Hold'em for example, all possible ways the remaining cards could be dealt can in principle be enumerated and the times each player's hand wins counted to determine the winning percentage of each hand, accounting for ties. These are the percentage values shown on TV when players are all-in.")
      (d/h2 {:id "pot-odds" :class-name (:h2 outline-style)} "Pot Odds")
      (d/p {:class-name (:p2 outline-style)} "When face another player's bet, you stand to gain the entire pot if you stay in the hand, including the aggressor's bet, but must risk the bet in order for a chacne to win. This implies a risk-to-reward ratio known as pot odds.")
      (d/h3 {:id "immediate-pot-odds" :class-name (:h3 outline-style)} "Immediate Pot Odds")
      (d/p {:class-name (:p3 outline-style)} "Immediate pot odds are the most straight-forward application of pot odds. They represent the odds you're getting on making your hand on the next immediate street, for example, when facing a bet on the turn, you have one more card to see and one more round of betting after finding out whether you made your hand.
")
      (d/h3 {:id "effective-pot-odds" :class-name (:h3 outline-style)} "Effective Pot Odds")
      (d/p {:class-name (:p3 outline-style)} "Effective pot odds deviate from immediate pot odds when there are multiple streets remaining with additional rounds of betting. The additional rounds of betting mean that we likely have to put more money into the pot and therefore, immediate pot odds will be a poor representation of the true odds we are facing for the remainder of the hand.
")
      (d/p {:class-name (:p3 outline-style)} "Note that if one player goes all-in while heads-up on the flop, then imeediate pot odds are still appropriate despite there being two cards to come because there is no further betting action, so we only need to consider the odds of making our hand with the next two cards to come when determining whether to call or fold.")
      (d/p {:class-name (:p3 outline-style)} "Considering effective pot odds will be most applicable in limit games where bet-sizes are predetermined and limited, and the pot can only grow so much relative to iteslf.")
      (d/h3 {:id "implied-pot-odds" :class-name (:h3 outline-style)} "Implied Pot Odds")
      (d/p {:class-name (:p3 outline-style)} "In pot-limit and no-limit games, implied odds can dominate effective odds. Implied odds factor in potential future winnings beyond what's in the pot, up to the smallest remaianing stack-size in the hand.")
      (d/h3 {:id "reverse-pot-odds" :class-name (:h3 outline-style)} "Reverse Pot Odds")
      (d/p {:class-name (:p3 outline-style)} "The combination of implied pot odds and reverse implied pot odds account for much of the theoretical importance of stack sizes.
")
      (d/h2 {:id "counting-outs" :class-name (:h2 outline-style)} "Counting Outs")
      (d/div {:class-name (css :flex :flex-column)}
      ($ Table {:headers ["Outs" "Flop to Turn" "Turn to River" "Flop to River"]
                :rows (mapv outs-prob (range 1 22))})
      (d/p {:class-name (css {:width "33%" } :ml-20 :text-2xl :mt-20)} (d/h3 {:id "four-and-two" :class-name (css :font-bold)} "The Rule of 4 & 2 ") "To estimate the percentage probability of making your draws (and the required immediate pot odds to make a call profitable) with 2 and 1 card(s) to come,
simply multiply your number of outs by 4 and 2, respectively."))
      ;;TODO: Minigame for counting your outs, and comparing to immediate pot odds (and maybe even implied?)
      (d/h2 {:id "hand-ranges" :class-name (:h2 outline-style)} "Hand Ranges")
      (d/span "There are ") (d/span ($ InlineMath "\\binom{52}{2} = 1{,}326 ")) (d/span " possible starting hands in Texas Hold'em. These can be sorted into pairs and combinations of suited and unsuited mixed ranks represented by a 13x13 grid: ")
      ($ Selectchart)
      (d/br)
      (d/div {:class-name (css :w-10)}
      (hand-img "2s" "3h" "4d" "5c" "6s" "7h" "8d" "9c"))
      (d/br)
      (d/div {:class-name (css {:width "40%"})}
      ($ Felt {:fill "skyblue" :border "navy" :border-width "10" :width "750" :height "300"})
      )
      (d/br)
      (d/div {:class-name (css :w-20)}
      (card-img "Ts")
      )
      (d/br)
      ))

(defnc app []
  {:helix/features {:fast-refresh true}}
  (d/div {:class-name (css :flex :flex-row :min-h-screen)}
         ($ TableOfContents {:headers (extract-headers PageContent-structure)})
         ($ PageContent)
    ))

(defn ^:export init []
  (let [root (rdom/createRoot (js/document.getElementById "root"))]
    (.render root ($ app))))
