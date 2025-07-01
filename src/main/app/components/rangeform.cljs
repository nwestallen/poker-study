(ns app.components.rangeform
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]))

(defnc RangeForm [{:keys [on-submit]}]
  (let [[state set-state] (hooks/use-state {:raise "" :call "" :fold ""})]
  (d/form {:class-name (css :border-2 :border-black {:width "200px"}) :on-submit #(do (.preventDefault %) (.log js/console (prn-str state)) (on-submit state))}
          (d/div (d/p "Raise Range: ") (d/input {:type "text" :class-name (css :border :border-black) :value (:raise state) :on-change (fn [e] (set-state (assoc state :raise e.target.value)))}))
          (d/div (d/p "Call Range: ") (d/input {:type "text" :class-name (css :border :border-black) :value (:call state) :on-change (fn [e] (set-state (assoc state :call e.target.value)))}))
          (d/div (d/p "Fold Range: ") (d/input {:type "text" :class-name (css :border :border-black) :value (:fold state) :on-change (fn [e] (set-state (assoc state :fold e.target.value)))}))
   (d/input {:type "submit" :value "Submit" :class-name (css :border :border-black :font-bold :bg-sky-500 :text-white :p-1 :my-2 [:hover :bg-sky-400 :cursor-pointer])})))
  )

