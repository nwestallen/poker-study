(ns app.components.actionpie
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [shadow.css :refer [css]]))

(defn- parse-action-string [action-str]
  "Parse action string like 'Raise(83.33%)/Fold(16.67%)' into action percentages"
  (->> (clojure.string/split action-str #"[/:]")
       (keep #(when-let [[_ action pct] (re-find #"(\w+)\((\d+(?:\.\d+)?)%" %)]
                [(keyword (clojure.string/lower-case action)) (js/parseFloat pct)]))
       (into {})))

(defn- angle-to-coords [angle radius center]
  [(+ center (* radius (Math/sin (* (/ angle 180) Math/PI))))
   (- center (* radius (Math/cos (* (/ angle 180) Math/PI))))])

(defn- pie-slice [start-angle end-angle radius center color]
  (let [[end-x end-y] (angle-to-coords end-angle radius center)
        large-arc (if (> (- end-angle start-angle) 180) 1 0)]
    (if (>= (- end-angle start-angle) 360)
      (d/circle {:cx center :cy center :r radius :fill color})
      (let [[start-x start-y] (angle-to-coords start-angle radius center)]
        (d/path {:d (str "M " center " " center 
                        " L " start-x " " start-y
                        " A " radius " " radius " 0 " large-arc " 1 "
                        end-x " " end-y " Z")
                 :fill color})))))

(defnc ActionPie [{:keys [action-string]}]
  (let [actions (parse-action-string action-string)
        action-data [{:type :raise :pct (get actions :raise 0) :color "rgb(239 68 68)"}
                     {:type :call :pct (get actions :call 0) :color "rgb(34 197 94)" }
                     {:type :fold :pct (get actions :fold 0) :color "rgb(14 165 233)" }]
        total (reduce + (map :pct action-data))
        radius 49
        center 50]
    (if (= total 0)
      (d/div {:class-name (css {:width "100%" :height "100%"})})
      (d/svg {:width "100%" :viewBox "0 0 100 100" :fill "none" 
              :class-name (css {:filter "drop-shadow(2px 2px 2px rgba(0,0,0,0.2))"})}
        (loop [data action-data
               current-angle 0
               elements []]
          (if (empty? data)
            elements
            (let [{:keys [pct color]} (first data)
                  angle (* 360 (/ pct total))
                  next-angle (+ current-angle angle)]
              (recur (rest data)
                     next-angle
                     (if (> pct 0)
                       (conj elements (pie-slice current-angle next-angle radius center color))
                       elements)))))))))

