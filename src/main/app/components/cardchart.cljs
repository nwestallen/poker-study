(ns app.components.cardchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.utils.strategy :refer [strat-pipe]]
            ["react-dom/client" :as rdom]))

(def ranks '("A" "K" "Q" "J" "T" "9" "8" "7" "6" "5" "4" "3" "2"))

(defn pct [n d]
  (* 100 (/ n d)))

(defn squarestyle [{:keys [height hand hide]}]
  (if (>= 1 (count hand)) (css {:opacity 0})
      (if (or (= height 0) hide) (css :fill "rgb(300 300 300)" {:opacity 0.5})
          (css :fill "rgb(64 64 65)" {:opacity 0} [:hover {:opacity 0.1} :cursor-pointer]))))

(defnc Cardsquare [{:keys [hand strategy set-strategy update-strat paint hide keep-height?] {:keys [raise call fold]} :act}]
  (let [
        state (hooks/use-memo [strategy] {:r raise :c call :f fold :rc (+ raise call) :h (+ raise call fold)})
        change (if keep-height? (update-vals update-strat #(js/parseFloat (.toFixed (* % (/ (:h state) 100)) 2))) update-strat)
        paint-square (fn [] (set-strategy ((strat-pipe strategy) {change (list hand)})))
        ]
    (d/svg {:viewBox "0 0 100 100" :width "100%" :height "100%" :xlmns "http://www.w3.org/2000/svg" :on-mouse-down #(if (not hide) (paint-square)) :on-mouse-enter #(if paint (paint-square)) :class-name (css :shadow-md :text-shadow-sm)}
           (d/rect {:width "100%" :height "100%" :x "0" :y "0" :rx "10" :ry "10" :fill "rgb(64 64 64)"})
           (d/defs (d/clipPath {:id "rounded-corners"} (d/rect {:x "0" :y "0" :width "100" :height "100" :rx "10" :ry "10"})))
           (d/g {:clipPath "url(#rounded-corners)"}
                (d/rect {:width (pct (:r state) (:h state)) :height (:h state) :x "0" :y (- 100 (:h state)) :fill "rgb(239 68 68)"})
                (d/rect {:width (pct (:c state) (:h state)) :height (:h state) :x (pct (:r state) (:h state)) :y (- 100 (:h state)) :fill "rgb(34 197 94)"})
                (d/rect {:width (pct (:f state) (:h state)) :height (:h state) :x (pct (:rc state)(:h state)) :y (- 100 (:h state)) :fill "rgb(14 165 233)"})
                )
           (d/text {:x "50" :y "50" :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize "36" :fontWeight "500" :class-name (css :select-none)} hand)
           (d/rect {:width "100%" :height "100%" :x "0" :y "0" :class-name (squarestyle {:height (:h state) :hand hand :hide hide})})
         )))

(defnc MixSquare [{:keys [hand] {:keys [raise call fold]} :act}]
  (let [state (hooks/use-memo [raise call fold] {:r (str raise) :c (str call) :f (str fold) :rc (str (+ raise call)) :h (+ raise call fold)})]
    (d/svg {:viewBox "0 0 100 100" :width "100%" :height "100%" :xlmns "http://www.w3.org/2000/svg"}
           (d/rect {:width "100%" :height "100%" :x "0" :y "0" :rx "10" :ry "10" :fill "rgb(64 64 64)"})
           (d/defs (d/clipPath {:id "rounded-corners"} (d/rect {:x "0" :y "0" :width "100" :height "100" :rx "10" :ry "10"})))
           (d/g {:clipPath "url(#rounded-corners)"}
                (d/rect {:width (pct (:r state) (:h state)) :height (:h state) :x "0" :y (- 100 (:h state)) :fill "rgb(239 68 68)"})
                (d/rect {:width (pct (:c state) (:h state)) :height (:h state) :x (pct (:r state) (:h state)) :y (- 100 (:h state)) :fill "rgb(34 197 94)"})
                (d/rect {:width (pct (:f state) (:h state)) :height (:h state) :x (pct (:rc state)(:h state)) :y (- 100 (:h state)) :fill "rgb(14 165 233)"})
         )
         (d/text {:x "50" :y "50" :textAnchor "middle" :dominantBaseline "middle" :fill "white" :fontSize "36" :fontWeight "500" :class-name (css :select-none :text-shadow-md)} hand)
         )))

(defnc PureChart [{:keys [strategy set-strategy update-strat hidelist keep-height?]}]
  (let [[paint set-paint] (hooks/use-state false)]
    (d/div {:class-name (css :grid {:grid-template-columns "repeat(14, 7%)"} {:gap "1px"} {:width "fit-content" :height "100%"}) :on-mouse-down #(set-paint true) :on-mouse-up #(set-paint false)}
           (for [i (conj ranks 0)] ($ Cardsquare {:hand (if (= i 0) nil i)}))
           (for [p (partition 13 strategy)] (<> ($ Cardsquare {:hand (second (name (key (first p)))) :strategy strategy :set-strategy set-strategy :update-strat update-strat :paint paint :keep-height? keep-height?}) (for [i p] ($ Cardsquare {:act (val i) :hand (name (key i)) :strategy strategy :set-strategy set-strategy :update-strat update-strat :paint paint :hide (contains? hidelist (key i)) :keep-height? keep-height?})))))
    ))
