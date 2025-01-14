(ns app.components.cards
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]
            [clojure.walk :as walk]
            [goog.string :as gstring]
            [goog.string.format]))

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

(def rank-offset
  {
   "A" 0
   "K" 1
   "Q" 2
   "J" 3
   "T" 4
   "9" 5
   "8" 6
   "7" 7
   "6" 8
   "5" 9
   "4" 10
   "3" 11
   "2" 12
   })

(def suit-offset
  {"s" 0 "h" 1 "c" 2 "d" 3})

(def card-size {:h 97.4 :w 69.3})

(defn card-img [text]
  (d/img {:src "Poker Sprite Sheet - 4.png" :class-name (str "object-[position:-" (gstring/format "%.1f" (* (:w card-size) (get rank-offset (first text))))"px_-"(gstring/format "%.1f" (* (:h card-size) (get suit-offset (last text))))"px] object-none h-[97.4px] w-[69.3px]")}))

(def Fourd (card-img "4d"))

(card-img "Js")

(def card-map
  {"As" (d/img {:src "Poker Sprite Sheet - 4.png" :class-name "object-[position:0px_0px] object-none h-[97.4px] w-[69.3px]"})
   "4d" (d/img {:src "Poker Sprite Sheet - 4.png" :class-name "object-[position:-693px_-292.2px] object-none h-[97.4px] w-[69.3px]"})
   "Kc" (d/img {:src "Poker Sprite Sheet - 4.png" :class-name "object-[position:-69.3px_-194.8px] object-none h-[97.4px] w-[69.3px]"})

})

;;(d/img {:src "Poker Sprite Sheet - 4.png" :class-name "object-[position:-207.9px_-97.4px] object-none h-[97.4px] w-[69.3px]"})
;; big problem, the dynamically defined image won't dispay - abandon tailwind if necessary, you're using repeated styles anyway, try shadow-css, first maybe static css that defines the position of every card explicityly (ugh)
