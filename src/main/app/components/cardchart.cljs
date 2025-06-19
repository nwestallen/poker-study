(ns app.components.cardchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [clojure.edn :as edn]
            [shadow.css :refer [css]]
            [app.utils.strategy :refer [strat-ranges strat-pipe]]
            ["react-dom/client" :as rdom]))

(def ranks '("A" "K" "Q" "J" "T" "9" "8" "7" "6" "5" "4" "3" "2"))

(defn pct [n d]
  (* 100 (/ n d)))

(defnc Cardsquare [{:keys [hand strategy set-strategy update-strat paint] {:keys [raise call fold]} :act}]
  (let [
        [state set-state] (hooks/use-state {:r raise :c call :f fold :rc (+ raise call) :h (+ raise call fold)})
        paint-square (fn [] (set-strategy ((strat-pipe strategy) {(edn/read-string update-strat) (list hand)})))
        ]
    (hooks/use-effect [strategy] (set-state {:r (str raise) :c (str call) :f (str fold) :rc (str (+ raise call)) :h (+ raise call fold)}))
    (d/svg {:viewBox "0 0 100 100" :width "100%" :height "100%" :xlmns "http://www.w3.org/2000/svg" :on-mouse-down #(paint-square) :on-mouse-enter #(if paint (paint-square))}
           (d/rect {:width "100%" :height "100%" :x "0" :y "0" :rx "10" :ry "10" :fill "rgb(64 64 64)"})
           (d/defs (d/clipPath {:id "rounded-corners"} (d/rect {:x "0" :y "0" :width "100" :height "100" :rx "10" :ry "10"})))
           (d/g {:clipPath "url(#rounded-corners)"}
                (d/rect {:width (pct (:r state) (:h state)) :height (:h state) :x "0" :y (- 100 (:h state)) :fill "rgb(239 68 68)"})
                (d/rect {:width (pct (:c state) (:h state)) :height (:h state) :x (pct (:r state) (:h state)) :y (- 100 (:h state)) :fill "rgb(34 197 94)"})
                (d/rect {:width (pct (:f state) (:h state)) :height (:h state) :x (pct (:rc state)(:h state)) :y (- 100 (:h state)) :fill "rgb(14 165 233)"})
         )
         (d/text {:x "50" :y "50" :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize "36" :fontWeight "500" :class-name (css :select-none)} hand)
         )))

(defnc Cardchart [{:keys [strategy set-strategy update-strat]}]
  (let [[paint set-paint] (hooks/use-state false)]
  (d/div {:class-name (css :grid {:grid-template-columns "repeat(14, 51.2px)"} {:gap "1px"} :bg-white {:width "fit-content" :height "714px"}) :on-mouse-down #(set-paint true) :on-mouse-up #(set-paint false)}
             (for [i (conj ranks 0)] ($ Cardsquare {:hand (if (= i 0) nil i)}))
             (for [p (partition 13 strategy)] (<> ($ Cardsquare {:hand (second (:hand (first p))) :strategy strategy :set-strategy set-strategy :update-strat update-strat :paint paint}) (for [i p] ($ Cardsquare {:act (:act i) :hand (:hand i) :strategy strategy :set-strategy set-strategy :update-strat update-strat :paint paint})))))
             ))

