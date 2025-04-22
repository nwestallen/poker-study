(ns app.components.felt
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]))

(defnc Felt [{:keys [fill border]}]
(d/svg {:xmlns "http://www.w3.org/2000/svg", :width "383", :height "169", :viewBox "0 0 383 169", :fill "none"}
 (d/path {:d "M306.14 3C347.213 3.00015 380 39.7852 380 84.5C380 129.215 347.213 166 306.14 166C265.067 166 232.28 129.215 232.28 84.5C232.28 39.7852 265.067 3 306.14 3Z", :fill fill, :stroke border, :stroke-width "6"})
 (d/path {:d "M76.8604 3C117.934 3.00015 150.72 39.7852 150.72 84.5C150.72 129.215 117.934 166 76.8604 166C35.787 166 3 129.215 3 84.5C3 39.7852 35.787 3 76.8604 3Z", :fill fill, :stroke border, :stroke-width "6"})
 (d/rect {:fill fill, :x "77.3114", :width "230", :height "169"})
 (d/rect {:fill border, :x"77.3114", :width "230" :height "6"})
  (d/rect {:fill border, :x"77.3114", :y"163", :width "230" :height "6"})
  ))
