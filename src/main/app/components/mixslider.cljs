(ns app.components.mixslider
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cardchart :refer [MixSquare]]
            ["react-dom/client" :as rdom]))

(defn pct [n d]
  (* 100 (/ n d)))

(defnc ActionInputs [{:keys [mix set-mix]}]
  (d/div {:class-name (css :flex :flex-row :w-full :text-xs)}
         (d/div {:class-name (css {:width "33%"} :rounded-md :p-1 {:background-color "rgb(239 68 68)"})}
                (d/p {:class-name (css :text-white :text-center)} "Raise")
                (d/input {:type "text" :class-name (css :w-full :text-white {:background-color "rgb(239 68 68)"} :text-center) :value (:raise mix) :on-change (fn [e] (set-mix (assoc mix :raise (js/parseInt e.target.value))))}))
         (d/div {:class-name (css :rounded-md :p-1 {:width "33%"} {:background-color "rgb(34 197 94)"})}
                (d/p {:class-name (css :text-center :text-white)} "Call")
                (d/input {:type "text" :class-name (css :w-full :text-white {:background-color "rgb(34 197 94)"} :text-center) :value (:call mix) :on-change (fn [e] (set-mix (assoc mix :call (js/parseInt e.target.value))))}))
         (d/div {:class-name (css :rounded-md :p-1 {:width "33%"} {:background-color "rgb(14 165 233)"})}
                (d/p {:class-name (css :text-white :text-center)} "Fold")
                (d/input {:type "text" :class-name (css :text-white :w-full {:background-color "rgb(14 165 233)"} :text-center) :value (:fold mix) :on-change (fn [e] (set-mix (assoc mix :fold (js/parseInt e.target.value))))}))))

(defnc HeightInput [{:keys [height set-height]}]
  (d/div {:class-name (css :flex :flex-col :p-1 :rounded-md :text-white  :text-xs {:background-color "rgb(64 64 64)"})}
         (d/p {:class-name (css :text-center)} "Range")
         (d/input {:type "text" :class-name (css :text-center :text-white {:background-color "rgb(64 64 64)"}) :value height :on-change (fn [e] (set-height (js/parseInt e.target.value)))})))

(defnc MixSlider [{:keys [mix set-mix]}]
  (defn raise-update [val]
    (set-mix {:raise val :call (max (- 100 (:fold mix) val) 0) :fold (if (>= (+ (:fold mix) val) 100) (- 100 val) (:fold mix))}))
  (defn fold-update [val]
    (set-mix {:raise (if (>= (+ (:raise mix) val) 100) (- 100 val) (:raise mix)) :call (max (- 100 (:raise mix) val) 0) :fold val}))
  (d/div {:class-name (css :w-full :relative)}
   (d/svg {:xlmns "http://www.w3.org/2000/svg" :viewBox "0 0 100 12" :width "100%" :height "15px" :preserveAspectRatio "none"}
          (d/rect {:width (:raise mix) :height 100 :fill "rgb(239 68 68)"})
          (d/rect {:width (:call mix) :height 100 :fill "rgb(34 197 94)" :x (:raise mix)})
          (d/rect {:width (:fold mix) :height 100 :fill "rgb(14 165 233)" :x (+ (:raise mix) (:call mix))}))
   (d/input {:type "range" :min 0 :max 100 :class-name (css {:top "50%"} {:-webkit-appearance "none"} {:appearance "none"} :w-full :absolute {:height "0px"} {:pointer-events "none"} ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "15px"} {:height "15px"} {:cursor "pointer"} {:pointer-events "all"}]) :value (:raise mix) :on-change (fn [e] (raise-update (js/parseInt e.target.value)))})
   (d/input {:type "range" :min 0 :max 100 :class-name (css {:top "50%"} {:-webkit-appearance "none"} {:appearance "none"} :w-full {:direction "rtl"} :absolute {:height "0px"} {:pointer-events "none"} ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "15px"} {:height "15px"} {:cursor "pointer"} {:pointer-events "all"}]) :value (:fold mix) :on-change (fn [e] (fold-update (js/parseInt e.target.value)))})))

(defnc HeightSlider [{:keys [height set-height]}]
  (d/input {:type "range" :class-name (css {:writing-mode "vertical-lr"} {:direction "rtl"} {:vertical-align "bottom"} {:-webkit-appearance "none"} {:appearance "none"} {:background "rgb(64 64 64)"} {:width "15px"}
                                           ["&::-webkit-slider-thumb" {:-webkit-appearance "none"} {:background-color "lightgrey"} {:width "15px"} {:height "15px"} :cursor-pointer]) :on-change (fn [e] (set-height (js/parseInt e.target.value))) :value height}))

(defnc SliderSquare [{:keys [mix set-mix height set-height update]}]
  (d/div {:class-name (css :flex :flex-row :rounded-xl :p-2 {:width "100%"} {:background "rgb(150 150 150)"})}
  (d/div {:class-name (css :flex :flex-col {:width "100%"})}
         ($ MixSquare {:hand "AA" :act update})
         (d/div {:class-name (css {:height "15px" :margin-top "5%"})} ($ MixSlider {:mix mix :set-mix set-mix}))
         (d/div {:class-name (css {:margin-top "5%"})} ($ ActionInputs {:mix mix :set-mix set-mix}))
         )
  (d/div {:class-name (css {:margin-left "5%"})} ($ HeightSlider {:height height :set-height set-height}))
  (d/div {:class-name (css {:margin-left "5%" :width "22.5%" :margin-top "20%"})} ($ HeightInput {:height height :set-height set-height}))
  )
  )
