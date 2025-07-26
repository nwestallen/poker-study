(ns app.components.rangeform
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]))

(defnc RangeForm [{:keys [on-submit]}]
  (let [[state set-state] (hooks/use-state {:raise "" :call "" :fold ""})]
  (d/form {:class-name (css :text-white :text-shadow-sm :h-fit :w-full :rounded-lg :mb-2 :p-2 {:background-color "rgb(150 150 150)"} :shadow-xl) :on-submit #(do (.preventDefault %) (.log js/console (prn-str state)) (on-submit state))}
          (d/h3 {:class-name (css :font-bold :text-shadow-md)} "Solver Range Input")
          (d/div (d/p {:class-name (css {:background "rgb(239 68 68)"} :w-fit :p-1 :rounded-md :text-xs :my-1 :shadow-sm)} "Raise Range") (d/input {:type "text" :class-name (css :text-black {:box-shadow "inset 0 0 3px black"} :rounded-sm) :value (:raise state) :on-change (fn [e] (set-state (assoc state :raise e.target.value)))}))
          (d/div (d/p {:class-name (css {:background "rgb(34 197 94)"} :w-fit :p-1 :rounded-md :text-xs :my-1 :shadow-sm)} "Call Range" ) (d/input {:type "text" :class-name (css :text-black {:box-shadow "inset 0 0 3px black"} :rounded-sm) :value (:call state) :on-change (fn [e] (set-state (assoc state :call e.target.value)))}))
          (d/div (d/p {:class-name (css {:background "rgb(14 165 233)"} :w-fit :p-1 :rounded-md :text-xs :my-1 :shadow-sm)} "Fold Range") (d/input {:type "text" :class-name (css :text-black {:box-shadow "inset 0 0 3px black"} :rounded-sm) :value (:fold state) :on-change (fn [e] (set-state (assoc state :fold e.target.value)))}))
          (d/input {:type "submit" :value "Submit" :class-name (css :rounded-md :font-bold {:background "rgb(65 65 65)"} :text-white :text-sm :py-1 :px-2 :mt-2 [:hover :bg-slate-500 :cursor-pointer])})))
  )

