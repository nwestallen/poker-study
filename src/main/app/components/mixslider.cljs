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
         (d/svg {:xlmns "http://www.w3.org/2000/svg" :viewBox "0 0 100 10" :class-name (css :absolute) :width "200" :height "20"}
                (d/rect {:width (:raise mix) :height 100 :fill "rgb(239 68 68)"})
          (d/rect {:width (:call mix) :height "100" :fill "rgb(34 197 94)" :x (:raise mix)})
          (d/rect {:width (:fold mix) :height "100" :fill "rgb(14 165 233)" :x (+ (:raise mix) (:call mix))})
          )
  (d/input {:type "range" :min 0 :max 100 :class-name (css {:margin-top "10px"} {:-webkit-appearance "none"} {:appearance "none"} {:width "200px"} :absolute {:height "0px"} {:pointer-events "none"} ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "20px"} {:height "20px"} {:cursor "pointer"} {:pointer-events "all"}]) :value (:raise mix) :on-change (fn [e] (raise-update (js/parseInt e.target.value)))}
           )
  (d/input {:type "range" :min 0 :max 100 :class-name (css {:margin-top "10px"} {:-webkit-appearance "none"} {:appearance "none"} {:width "200px"} {:direction "rtl"} :absolute {:height "0px"} {:pointer-events "none"} ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "20px"} {:height "20px"} {:cursor "pointer"} {:pointer-events "all"}]) :value (:fold mix) :on-change (fn [e] (fold-update (js/parseInt e.target.value)))}
           )
  )
  )

(defnc HeightSlider [{:keys [mix set-mix]}]
  (defn height-update [val]
    (set-mix (update-vals mix #(* (/ % (apply + (vals mix))) val))))
  (let [[h set-h] (hooks/use-state (apply + (vals mix)))]
    (hooks/use-effect [mix] (set-h (apply + (vals mix))))
  (d/input {:type "range" :class-name (css {:writing-mode "vertical-lr"} {:direction "rtl"} {:vertical-align "bottom"} {:webkit-appearance "none"} {:appearance "none"} {:background "rgb(64 64 64)"} {:height "150px"} {:width "15px"}
                                           ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "15px"} {:height "15px"}]) :on-change (fn [e] (height-update (js/parseInt e.target.value))) :value h})
  ))

(defnc PercentSlider [{:keys [mix set-mix]}]
  (let [[t set-t] (hooks/use-state (apply + (vals mix)))]
    (hooks/use-effect [mix] (set-t (apply + (vals mix))))
    (defn pct-raise-update [val]
      (set-mix {:raise (* (/ val 100) t) :call (max (- t (:fold mix) (* (/ val 100) t)) 0) :fold (if (>= (+ (pct (:fold mix) t) val) 100) (- t (* t (/ val 100))) (:fold mix))})
      )
    (defn pct-fold-update [val]
    (set-mix {:raise (if (>= (+ (pct (:raise mix) t) val) 100) (- t (* t (/ val 100))) (:raise mix)) :call (max (- t (:raise mix) (* (/ val 100) t)) 0) :fold (* (/ val 100) t)})
      )
  (<>
         (d/svg {:xlmns "http://www.w3.org/2000/svg" :viewBox "0 0 100 10" :class-name (css :absolute) :width "150" :height "15"}
                (d/rect {:width (pct (:raise mix) t) :height 100 :fill "rgb(239 68 68)"})
          (d/rect {:width (pct (:call mix) t) :height "100" :fill "rgb(34 197 94)" :x (pct (:raise mix) t)})
          (d/rect {:width (pct (:fold mix) t) :height "100" :fill "rgb(14 165 233)" :x (pct (+ (:raise mix) (:call mix)) t)})
          )
  (d/input {:type "range" :min 0 :max 100 :class-name (css {:margin-top "7.5px"} {:-webkit-appearance "none"} {:appearance "none"} {:width "150px"} :absolute {:height "0px"} {:pointer-events "none"} ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "15px"} {:height "15px"} {:cursor "pointer"} {:pointer-events "all"}]) :value (pct (:raise mix) t) :on-change (fn [e] (pct-raise-update (js/parseInt e.target.value)))}
           )
  (d/input {:type "range" :min 0 :max 100 :class-name (css {:margin-top "7.5px"} {:-webkit-appearance "none"} {:appearance "none"} {:width "150px"} {:direction "rtl"} :absolute {:height "0px"} {:pointer-events "none"} ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "15px"} {:height "15px"} {:cursor "pointer"} {:pointer-events "all"}]) :value (pct (:fold mix) t) :on-change (fn [e] (pct-fold-update (js/parseInt e.target.value)))}
           )
  )
  )
  )
