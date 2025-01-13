(ns app.components.toc
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["react-dom/client" :as rdom]))

(defnc toc [page]
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

