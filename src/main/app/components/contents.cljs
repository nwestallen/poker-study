(ns app.components.contents
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]))

(def indentmap
  {"d/h2" (css :pl-0 :my-3)
   "d/h3" (css :pl-2 :my-2)})
(def stylemap
  {"d/h2" (css :font-semibold :text-wrap)
   "d/h3" (css :font-medium :text-wrap)})

(defnc TableOfContents [{:keys [headers]}]
  (d/nav {:class-name (css :bg-sky-600 :text-neutral-100 :px-6 :mr-12 :pt-5 :border-solid :border-r-2 :border-sky-300 {:width "33rem"})}
    (d/h1 {:class-name (css :font-semibold :underline :fixed)}"Table of Contents")
    (d/br)
    (d/ul {:class-name (css :list-none :list-inside :fixed)}
      (for [[tag atts text] headers]
        (d/li {:class-name (indentmap (str tag))}
          (d/a {:href (str "#" (:id atts)) :class-name (stylemap (str tag))} text))))))


