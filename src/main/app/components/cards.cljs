(ns app.components.cards
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]
            [clojure.walk :as walk]
            [goog.string :as gstring]
            [goog.string.format]
            [app.components.cardstyle :refer [cards]]))

(def colors
  {
   "s" (css :text-neutral-950)
   "h" (css :text-red-600)
   "c" (css :text-green-600)
   "d" (css :text-sky-600)
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

(defn card-img [text]
  (d/div {:class-name (css :border-solid :border :m-1 :border-gray-400 :rounded :shadow-sm)}
  (d/div {:class-name (get cards text)})))

(defn hand-img [& strings]
  (d/div {:class-name (css :flex :flex-row :border-solid :border-2 :p-2 :border-yellow-700 :w-fit :bg-green-700 :rounded-3xl :shadow-lg)}
  (map #(d/div {:class-name (css {:width "70px"})}(card-img %)) strings)))
