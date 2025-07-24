(ns app.components.actionform
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]))

(defnc ActionForm [{:keys [on-submit actions set-actions!]}]
  (d/form {:class-name (css :text-white :text-shadow-md :h-fit :w-full :my-3 :rounded-lg :p-2 {:background-color "rgb(150 150 150)"}) :on-submit #(do (.preventDefault %) (.log js/console actions) (on-submit actions))}
          (d/h3 {:class-name (css :font-bold :mb-2)} "Action Sequence Input")
          (d/div (d/input {:type "text" :class-name (css {:box-shadow "inset 0 0 3px black"}) :value actions :on-change (fn [e] (set-actions! e.target.value))}))
   (d/input {:type "submit" :value "Submit" :class-name (css :rounded-md :font-bold {:background "rgb(65 65 65)"} :text-white :py-1 :text-sm :px-2 :mt-2 [:hover :bg-slate-500 :cursor-pointer])}))
  )
