(ns app.components.mixslider
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [MixSquare]]
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
         (d/svg {:xlmns "http://www.w3.org/2000/svg" :viewBox "0 0 100 10" :class-name (css :absolute) :width "150" :height "15"}
                (d/rect {:width (:raise mix) :height 100 :fill "rgb(239 68 68)"})
          (d/rect {:width (:call mix) :height "100" :fill "rgb(34 197 94)" :x (:raise mix)})
          (d/rect {:width (:fold mix) :height "100" :fill "rgb(14 165 233)" :x (+ (:raise mix) (:call mix))})
          )
  (d/input {:type "range" :min 0 :max 100 :class-name (css {:margin-top "7.5px"} {:-webkit-appearance "none"} {:appearance "none"} {:width "150px"} :absolute {:height "0px"} {:pointer-events "none"} ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "15px"} {:height "15px"} {:cursor "pointer"} {:pointer-events "all"}]) :value (:raise mix) :on-change (fn [e] (raise-update (js/parseInt e.target.value)))}
           )
  (d/input {:type "range" :min 0 :max 100 :class-name (css {:margin-top "7.5px"} {:-webkit-appearance "none"} {:appearance "none"} {:width "150px"} {:direction "rtl"} :absolute {:height "0px"} {:pointer-events "none"} ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "15px"} {:height "15px"} {:cursor "pointer"} {:pointer-events "all"}]) :value (:fold mix) :on-change (fn [e] (fold-update (js/parseInt e.target.value)))}
           )
  )
  )

(defnc HeightSlider [{:keys [height set-height]}]
  (d/input {:type "range" :class-name (css {:writing-mode "vertical-lr"} {:direction "rtl"} {:vertical-align "bottom"} {:webkit-appearance "none"} {:appearance "none"} {:background "rgb(64 64 64)"} {:height "150px"} {:width "15px"}
                                           ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "15px"} {:height "15px"} :cursor-pointer]) :on-change (fn [e] (set-height (js/parseInt e.target.value))) :value height})
  )

(defnc SliderSquare [{:keys [mix set-mix height set-height update]}]
  (d/div {:class-name (css :flex :flex-col :w-fit)}
   (d/div {:class-name (css :flex :flex-row {:width "182px"})}
   (d/div {:class-name (css {:width "150px"} {:height "150px"})}
          ($ MixSquare {:hand "AA" :act update}))
   (d/div {:class-name (css :ml-2)}
          ($ HeightSlider {:height height :set-height set-height})))
   (d/div {:class-name (css :mt-2)}
          ($ MixSlider {:mix mix :set-mix set-mix})))
  )
