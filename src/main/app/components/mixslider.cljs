(ns app.components.mixslider
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]))

(defn pct [n d]
  (* 100 (/ n d)))

(defnc MixSlider [{:keys [mix set-mix]}]
  (defn raise-update [val]
    (set-mix {:raise val :call (max (- 100 (:fold mix) val) 0) :fold (if (>= (+ (:fold mix) val) 100) (- 100 val) (:fold mix))})
    )
  (defn fold-update [val]
    (set-mix {:raise (if (>= (+ (:raise mix) val) 100) (- 100 val) (:raise mix)) :call (max (- 100 (:raise mix) val) 0) :fold val}))
  (<>
         (d/svg {:xlmns "http://www.w3.org/2000/svg" :viewBox "0 0 100 10" :class-name (css :absolute :border-2 :border-black) :width "200" :height "20"}
                (d/rect {:width (:raise mix) :height 100 :fill "rgb(239 68 68)"})
          (d/rect {:width (:call mix) :height "100" :fill "rgb(34 197 94)" :x (:raise mix)})
          (d/rect {:width (:fold mix) :height "100" :fill "rgb(14 165 233)" :x (+ (:raise mix) (:call mix))})
          )
  (d/input {:type "range" :min 0 :max 100 :class-name (css {:margin-top "10px"} {:-webkit-appearance "none"} {:appearance "none"} {:width "200px"} :absolute {:height "0px"} {:pointer-events "none"} ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "pink"} {:width "20px"} {:height "20px"} {:cursor "pointer"} {:pointer-events "all"}]) :value (:raise mix) :on-change (fn [e] (raise-update (js/parseInt e.target.value)))}
           )
  (d/input {:type "range" :min 0 :max 100 :class-name (css {:margin-top "10px"} {:-webkit-appearance "none"} {:appearance "none"} {:width "200px"} {:direction "rtl"} :absolute {:height "0px"} {:pointer-events "none"} ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "orange"} {:width "20px"} {:height "20px"} {:cursor "pointer"} {:pointer-events "all"}]) :value (:fold mix) :on-change (fn [e] (fold-update (js/parseInt e.target.value)))}
           )
  )
  )

