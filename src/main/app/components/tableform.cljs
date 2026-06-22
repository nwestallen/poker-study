(ns app.components.tableform
  (:require [helix.core :refer [defnc]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]))

(defnc TableForm [{:keys [on-submit size set-size!]}]
  (d/form {:class-name (css :text-white :text-shadow-md :h-fit :w-full :rounded-lg :p-2 {:background-color "rgb(150 150 150)"}) :on-submit #(do (.preventDefault %) (on-submit size))}
          (d/h3 {:class-name (css :font-bold :mb-2)} "Table Size")
          (d/div (d/input {:type "number" :min 2 :max 10 :class-name (css :text-black {:box-shadow "inset 0 0 3px black"} {:width "98%"} :text-center) :value size :on-change (fn [e] (set-size! e.target.value))}))
   )
  )
