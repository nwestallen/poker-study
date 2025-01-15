(ns app.components.contents
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]
            [clojure.walk :as walk]))

(def indentmap
  {"d/h2" (css :pl-0) "d/h3" (css :pl-2)})
(def stylemap
  {"d/h2" (css :font-semibold) "d/h3" (css :font-medium)})

(defnc TableOfContents [{:keys [headers]}]
  (d/nav {:class-name (css :bg-sky-600 :text-neutral-100 :pr-10 :pl-5 :mr-5 :pt-5)}
    (d/ul {:class-name (css :list-none :list-inside)}
      (for [[tag atts text] headers]
        (d/li {:class-name (indentmap (str tag))}
          (d/a {:href (str "#" (:id atts)) :class-name (stylemap (str tag))} text))))))


