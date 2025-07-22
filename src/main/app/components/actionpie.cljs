(ns app.components.actionpie
  (:require [helix.core :refer [defnc $]]
            [helix.dom :as d]))

(defn- parse-action-string [action-str]
  "Parse action string like 'Raise(83.33%)/Fold(16.67%)' into action percentages"
  (let [parts (clojure.string/split action-str #"[/:]")
        actions {}]
    (reduce (fn [acc part]
              (if-let [[_ action pct] (re-find #"(\w+)\((\d+(?:\.\d+)?)%" part)]
                (assoc acc (keyword (clojure.string/lower-case action)) (js/parseFloat pct))
                acc))
            actions parts)))

(defnc ActionPie [{:keys [action-string size]
                   :or {size 20}}]
  (let [actions (parse-action-string action-string)
        raise-pct (get actions :raise 0)
        call-pct (get actions :call 0)
        fold-pct (get actions :fold 0)
        total (+ raise-pct call-pct fold-pct)
        radius (- (/ size 2) 1)
        center (/ size 2)]
    (if (= total 0)
      (d/div {:style {:width size :height size}}) ; empty div if no actions
      (let [raise-angle (* 360 (/ raise-pct total))
            call-angle (* 360 (/ call-pct total))
            fold-angle (* 360 (/ fold-pct total))]
        (d/svg {:width size :height size}
          (when (> raise-pct 0)
            (if (>= raise-pct 100)
              (d/circle {:cx center :cy center :r radius :fill "#ef4444"})
              (d/path {:d (str "M " center " " center 
                              " L " center " 0"
                              " A " radius " " radius " 0 " 
                              (if (> raise-angle 180) 1 0) " 1 "
                              (+ center (* radius (Math/sin (* (/ raise-angle 180) Math/PI))))
                              " "
                              (- center (* radius (Math/cos (* (/ raise-angle 180) Math/PI))))
                              " Z")
                       :fill "#ef4444"}))) ; red-500
          (when (> call-pct 0)
            (if (>= call-pct 100)
              (d/circle {:cx center :cy center :r radius :fill "#10b981"})
              (d/path {:d (str "M " center " " center 
                              " L " (+ center (* radius (Math/sin (* (/ raise-angle 180) Math/PI))))
                              " " (- center (* radius (Math/cos (* (/ raise-angle 180) Math/PI))))
                              " A " radius " " radius " 0 " 
                              (if (> call-angle 180) 1 0) " 1 "
                              (+ center (* radius (Math/sin (* (/ (+ raise-angle call-angle) 180) Math/PI))))
                              " "
                              (- center (* radius (Math/cos (* (/ (+ raise-angle call-angle) 180) Math/PI))))
                              " Z")
                       :fill "#10b981"}))) ; green-500
          (when (> fold-pct 0)
            (if (>= fold-pct 100)
              (d/circle {:cx center :cy center :r radius :fill "#0ea5e9"})
              (d/path {:d (str "M " center " " center 
                              " L " (+ center (* radius (Math/sin (* (/ (+ raise-angle call-angle) 180) Math/PI))))
                              " " (- center (* radius (Math/cos (* (/ (+ raise-angle call-angle) 180) Math/PI))))
                              " A " radius " " radius " 0 " 
                              (if (> fold-angle 180) 1 0) " 1 "
                              center " 0"
                              " Z")
                       :fill "#0ea5e9"}))) ; sky-500
          )))))