(ns app.components.cards
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]
            [clojure.walk :as walk]))

(def colors
  {
   "s" "text-neutral-950"
   "h" "text-red-600"
   "c" "text-green-600"
   "d" "text-sky-600"
   })

(def shapes
  {
   "s" "♠︎"
   "h" "♥︎"
   "c" "♣︎"
   "d" "♦︎"
   })

(defn card-text [text]
  (d/span {:class-name (get colors (last text))} (str (first text) (get shapes (last text)))))

(defn hand-text [& strings]
  (map card-text strings))

(card-text "As")

(hand-text "As" "Qd" "Kc")
