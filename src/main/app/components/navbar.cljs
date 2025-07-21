(ns app.components.navbar
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-router-dom" :as router]))

(defnc Navbar []
  (let [navigate (router/useNavigate)]
    (d/nav {:class-name (css {:background "rgb(60 60 60)"} :p-4 :w-full)}
      (d/div {:class-name (css :flex :space-x-4)}
        (d/button {:class-name (css :text-white :px-3 :py-2 :rounded :font-bold)
                   :on-click #(navigate "/create")}
                  "Create")
        (d/button {:class-name (css :text-white :px-3 :py-2 :rounded :font-bold)
                   :on-click #(navigate "/test")}
          "Test")
        ))))
