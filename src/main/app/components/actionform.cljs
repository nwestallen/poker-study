(ns app.components.actionform
  (:require [helix.core :refer [defnc $ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]))

(defnc ActionForm [{:keys [on-submit actions set-actions!]}]
  (d/form {:class-name (css :h-fit :w-full :my-3 :rounded-lg :p-2 {:background-color "rgb(175 175 175)"}) :on-submit #(do (.preventDefault %) (.log js/console actions) (on-submit actions))}
          (d/h3 {:class-name (css :font-bold)} "Action Sequence Input")
          (d/div (d/input {:type "text" :class-name (css :border :border-black) :value actions :on-change (fn [e] (set-actions! e.target.value))}))
   (d/input {:type "submit" :value "Submit" :class-name (css :rounded-md :font-bold :bg-sky-500 :text-white :py-1 :px-2 :mt-2 [:hover :bg-sky-400 :cursor-pointer])}))
  )
