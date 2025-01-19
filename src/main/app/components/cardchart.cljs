(ns app.components.cardchart
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.utils.strategy :refer [all-fold]]
            ["react-dom/client" :as rdom]))

(def ranks '("A" "K" "Q" "J" "T" "9" "8" "7" "6" "5" "4" "3" "2"))

(def squarestyle
  {
   :header (css :flex :bg-neutral-700 :justify-center :items-center :text-white :font-bold :rounded-md)
   :fold (css :flex :bg-sky-500 :justify-center :items-center :text-white :rounded-md)
   :raise (css :flex :bg-red-500 :justify-center :items-center :text-white :rounded-md)
   })

(defnc Cardchart [{:keys [strategy]}]
  (d/div {:class-name (css :grid {:grid-template-columns "repeat(14, 50px)"}  {:gap "3px"} :bg-white {:width "fit-content" :height "739px"})}
             (for [i (conj ranks 0)] (d/div {:class-name (:header squarestyle)} (if (= i 0) nil i)))
             (for [p (partition 13 all-fold)] (<> (d/div {:class-name (:header squarestyle)} (second (:hand (first p)))) (for [i p] (d/div {:class-name ((:act i) squarestyle)} (:hand i)))))
             ))

