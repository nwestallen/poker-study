(ns app.components.contents
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]
            [clojure.walk :as walk]))

(def indentmap
  {"d/h2" "indent-0" "d/h3" "indent-2"})
(def stylemap
  {"d/h2" "font-semibold" "d/h3" "font-medium"})

(defnc TableOfContents [{:keys [headers]}]
  (d/nav {:class-name "bg-sky-600 text-neutral-100 pr-10 pl-5 mr-5 pt-5"}
    (d/ul {:class-name "list-none list-inside"}
      (for [[tag atts text] headers]
        (d/li {:class-name (indentmap (str tag))}
          (d/a {:href (str "#" (:id atts)) :class-name (stylemap (str tag))} text))))))


