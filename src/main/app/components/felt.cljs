(ns app.components.felt
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.cards :refer [card-img]]
            ["react-dom/client" :as rdom]))

(defnc Felt [{:keys [fill border border-width width height]}]
  (d/svg {:width width, :height height, :viewBox (str "0 0 " width " " height), :fill "none"}
         (d/rect {:x (/ border-width 2) :y (/ border-width 2), :width (- width border-width), :height (- height border-width), :rx (/ (- height border-width) 2), :ry (/ (- height border-width) 2), :fill fill :stroke border :stroke-width border-width})
  ))
