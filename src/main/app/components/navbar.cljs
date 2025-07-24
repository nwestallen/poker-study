(ns app.components.navbar
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-router-dom" :as router]))

(defnc Navbar []
  (let [navigate (router/useNavigate)]
    (d/nav {:class-name (css {:background "rgb(60 60 60)"} :p-4 :w-full :shadow-xl)}
      (d/div {:class-name (css :flex :space-x-4)}
        (d/button {:class-name (css :text-white :px-3 :py-2 :rounded :font-bold [:hover :text-sky-400])
                   :on-click #(navigate "/")}
                  "Create")
        (d/button {:class-name (css :text-white :px-3 :py-2 :rounded :font-bold [:hover :text-sky-400])
                   :on-click #(navigate "/test")}
          "Test")
        ))))
