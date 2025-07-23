(ns app.components.actionbar
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]))

(defnc ActionBar [{:keys [summary]}]
  (let [total (+ (:raise summary 0) (:call summary 0) (:fold summary 0))
        raise-width (if (> total 0) (* 100 (/ (:raise summary 0) total)) 0)
        call-width (if (> total 0) (* 100 (/ (:call summary 0) total)) 0)
        fold-width (if (> total 0) (* 100 (/ (:fold summary 0) total)) 0)]
    (d/svg {:width "100%" :height "20" :class-name "mt-2"}
           (d/rect {:x 0 :y 0 :width (str raise-width "%") :height 20 :fill "rgb(239 68 68)" :rx "3"}) ; red-500
           (d/rect {:x (str raise-width "%") :y 0 :width (str call-width "%") :height 20 :fill "rgb(34 197 94)"}) ; green-500
           (d/rect {:x (str (+ raise-width call-width) "%") :y 0 :width (str fold-width "%") :height 20 :fill "rgb(14 165 233)" :rx "3"}))))


