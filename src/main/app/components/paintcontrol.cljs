(ns app.components.paintcontrol
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.mixslider :refer [SliderSquare]]
            ["react-dom/client" :as rdom]))

(defnc ActionInputs [{:keys [mix set-mix]}]
  (d/div {:class-name (css :flex :flex-row :mt-6)}
         (d/div {:class-name (css :rounded-md :p-1 {:background-color "rgb(239 68 68)"})}
         (d/p {:class-name (css :text-white :text-center)} "Raise")
         (d/input {:type "text" :class-name (css {:width "44px"} :text-white {:background-color "rgb(239 68 68)"} :text-center) :value (:raise mix) :on-change (fn [e] (set-mix (assoc mix :raise (js/parseInt e.target.value))))}))
         (d/div {:class-name (css :rounded-md :p-1 {:background-color "rgb(34 197 94)"})}
         (d/p {:class-name (css :text-center :text-white)} "Call")
         (d/input {:type "text" :class-name (css {:width "44px"} :text-white {:background-color "rgb(34 197 94)"} :text-center) :value (:call mix) :on-change (fn [e] (set-mix (assoc mix :call (js/parseInt e.target.value))))}))
         (d/div {:class-name (css :rounded-md :p-1 {:background-color "rgb(14 165 233)" })}
         (d/p {:class-name (css :text-white :text-center)} "Fold")
         (d/input {:type "text" :class-name (css {:width "44px"} :text-white {:background-color "rgb(14 165 233)"} :text-center) :value (:fold mix) :on-change (fn [e] (set-mix (assoc mix :fold (js/parseInt e.target.value))))}))
         )
  )

(defnc HeightInput [{:keys [height set-height]}]
  (d/div {:class-name (css :flex :flex-col :border-2 :border-black :p-1 :rounded-md :text-white {:background-color "rgb(64 64 64)"} {:height "60px"})}
         (d/p {:class-name (css :text-center)} "Range")
         (d/input {:type "text" :class-name (css :text-center {:width "44px" :height "30px"} :text-white {:background-color "rgb(64 64 64)"}) :value height :on-change (fn [e] (set-height (js/parseInt e.target.value)))})
         )
  )

(defnc ControlPanel [{:keys [mix set-mix height set-height update]}]
  (d/div {:class-name (css :p-2 :w-fit :m-3 :rounded-lg {:background-color "rgb(150 150 150)"})}
                   (d/div {:class-name (css :flex :flex-row :items-center)}
                  ($ SliderSquare {:mix mix :set-mix set-mix :height height :set-height set-height :update update})
                  ($ HeightInput {:height height :set-height set-height})
                  )
                  ($ ActionInputs {:mix mix :set-mix set-mix})
                  )
  )

