(ns app.components.table
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            ["react-dom/client" :as rdom]
            [clojure.walk :as walk]))

(defnc  Table [{:keys [headers rows]}]
  (d/table
   (d/tr {:class-name (css :bg-red-400 :text-white)}
         (for [h headers] (d/th {:class-name (css :border :border-gray-500 :text-center :px-2 :py-1)} h)))
   (for [r rows] (d/tr {:class-name (css :bg-sky-100)} (for [c r] (d/td {:class-name (css :border :border-gray-500 :text-center :px-2 :py-1)} c))))))
