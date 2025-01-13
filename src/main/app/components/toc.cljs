(ns app.components.toc
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]
            [clojure.walk :as walk]))

(def toc-tree
  (d/ul {:class "list-none list-inside bg-[#3787B4] text-neutral-100 pr-10 pl-5 mr-5 pt-5"}
   (d/li
    (d/a {:href "#section_1" :class "font-semibold"} "Section 1")
    (d/ul {:class "list-none indent-2"}
     (d/li (d/a {:class "font-medium"} "Subsection A"))
     (d/li (d/a "Subsection B"))
     )
    )
   (d/li {:href "#bottom"} "Bottom Section")
   )
  )

(defnc toc [content] toc-tree)

(defnc TableOfContents [{:keys [headers]}]
  (d/nav
    (d/ul
      (for [{:keys [type text]} headers]
        (d/li {:class (name type)}
          (d/a {:href (str "#" (-> text
                                   clojure.string/lower-case
                                   (clojure.string/replace #"\s+" "-")))}
            text))))))


