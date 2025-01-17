(ns app.components.cardchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]
            [clojure.walk :as walk]))


(defnc Cardchart []
      (d/div {:class-name (css :grid {:grid-template-columns "repeat(14, 50px)"}  {:gap "2px"} :bg-red-300 {:width "fit-content" :height "726px"})}
             (for [i (range 14)] (d/div {:class-name (css :bg-slate-500)} (if (= i 0) nil i)))
             (for [i (range 13)] (conj (for [j (range 13)] (d/div {:class-name (css :bg-blue-400)} (str i "-" j))) (d/div {:class-name (css :bg-slate-500)} (+ i 1)))))
  )
