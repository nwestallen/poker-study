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

(def cards
  {
   "As" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "0px 0px"})
   "Ks" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-69.3px 0px"})
   "Qs" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-138.6px 0px"})
   "Js" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-207.9px 0px"})
   "Ts" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-277.2px 0px"})
   "9s" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-356.5px 0px"})
   "8s" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-415.8px 0px"})
   "7s" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-4851px 0px"})
   "6s" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-554.4px 0px"})
   "5s" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-623.7px 0px"})
   "4s" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-693px 0px"})
   "3s" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-762.3px 0px"})
   "2s" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-831.6px 0px"})

   "Ah" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "0px -97.4px"})
   "Kh" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-69.3px -97.4px"})
   "Qh" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-138.6px -97.4px"})
   "Jh" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-207.9px -97.4px"})
   "Th" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-277.2px -97.4px"})
   "9h" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-356.5px -97.4px"})
   "8h" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-415.8px -97.4px"})
   "7h" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-4851px -97.4px"})
   "6h" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-554.4px -97.4px"})
   "5h" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-623.7px -97.4px"})
   "4h" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-693px -97.4px"})
   "3h" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-762.3px -97.4px"})
   "2h" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-831.6px -97.4px"})

   "Ac" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "0px -194.8px"})
   "Kc" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-69.3px -194.8px"})
   "Qc" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-138.6px -194.8px"})
   "Jc" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-207.9px -194.8px"})
   "Tc" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-277.2px -194.8px"})
   "9c" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-356.5px -194.8px"})
   "8c" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-415.8px -194.8px"})
   "7c" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-4851px -194.8px"})
   "6c" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-554.4px -194.8px"})
   "5c" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-623.7px -194.8px"})
   "4c" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-693px -194.8px"})
   "3c" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-762.3px -194.8px"})
   "2c" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-831.6px -194.8px"})

   "Ad" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "0px -292.2px"})
   "Kd" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-69.3px -292.2px"})
   "Qd" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-138.6px -292.2px"})
   "Jd" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-207.9px -292.2px"})
   "Td" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-277.2px -292.2px"})
   "9d" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-356.5px -292.2px"})
   "8d" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-415.8px -292.2px"})
   "7d" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-4851px -292.2px"})
   "6d" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-554.4px -292.2px"})
   "5d" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-623.7px -292.2px"})
   "4d" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-693px -292.2px"})
   "3d" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-762.3px -292.2px"})
   "2d" (css {:background-image "url(\"../PokerSpriteSheet-4.png\")"} {:width "69.3px"} {:height "97.4px"} {:background-position "-831.6px -292.2px"})
   }
  )

