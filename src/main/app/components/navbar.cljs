(ns app.components.navbar
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-router-dom" :as router]))

(defnc Navbar []
  (let [navigate (router/useNavigate)]
    (d/nav {:class-name (css :bg-gray-800 :p-4 :w-full)}
      (d/div {:class-name (css :flex :space-x-4)}
        (d/button {:class-name (css :text-white :hover:text-gray-300 :px-3 :py-2 :rounded)
                   :on-click #(navigate "/")}
          "Paintchart")
        (d/button {:class-name (css :text-white :hover:text-gray-300 :px-3 :py-2 :rounded)
                   :on-click #(navigate "/select")}
          "Selectchart")))))