(ns app.components.mixbuttons
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.components.actionpie :refer [ActionPie]]
            [clojure.string :as str]
            ["react-dom/client" :as rdom]))

(defn button-style [is-selected value]
  (case [is-selected value]
    [true "R/F"] (css :relative :w-11 :h-11 :rounded-lg :shadow-md :border-2 {:border-color "rgb(65 65 65)"}
                      {:overflow "hidden"
                       :background "linear-gradient(135deg, rgb(239 68 68) 50%, rgb(14 165 233) 50%)"})
    [false "R/F"] (css :relative :w-11 :h-11 :rounded-lg :shadow-md :border-2 :border-slate-500
                       {:overflow "hidden"
                        :background "linear-gradient(135deg, rgb(239 68 68) 50%, rgb(14 165 233) 50%)"})
    [true "R/C"] (css :relative :w-11 :h-11 :rounded-lg :shadow-md :border-2 {:border-color "rgb(65 65 65)"}
                      {:overflow "hidden"
                       :background "linear-gradient(135deg, rgb(239 68 68) 50%, rgb(34 197 94) 50%)"})
    [false "R/C"] (css :relative :w-11 :h-11 :rounded-lg :shadow-md :border-2 :border-slate-500
                       {:overflow "hidden"
                        :background "linear-gradient(135deg, rgb(239 68 68) 50%, rgb(34 197 94) 50%)"})
    [true "C/F"] (css :relative :w-11 :h-11 :rounded-lg :shadow-md :border-2 {:border-color "rgb(65 65 65)"}
                      {:overflow "hidden"
                       :background "linear-gradient(135deg, rgb(34 197 94) 50%, rgb(14 165 233) 50%)"})
    [false "C/F"] (css :relative :w-11 :h-11 :rounded-lg :shadow-md :border-2 :border-slate-500
                       {:overflow "hidden"
                        :background "linear-gradient(135deg, rgb(34 197 94) 50%, rgb(14 165 233) 50%)"})))

(defn text-style []
  (css :absolute :flex :items-center :justify-center
       :text-sm :font-bold :text-white
       {:top "0"
        :left "0"
        :right "0"
        :bottom "0"
        :text-shadow "1px 1px 2px rgba(0,0,0,0.5)"}))

(defnc MixRadio [{:keys [selected set-selected!]}]
  (d/div {:class-name (css :flex :items-center :justify-evenly)}
           ;; R/F button
         (d/label {:class-name (css :relative {:cursor "pointer"})}
                  (d/input {:type "radio"
                            :name "mix-radio"
                            :value "R/F"
                            :checked (= selected "R/F")
                            :on-change #(set-selected! "R/F")
                            :class-name (css :absolute {:opacity "0"})})
                  (d/div {:class-name (button-style (= selected "R/F") "R/F")}
                         (d/span {:class-name (text-style)}
                                 "R/F")))
           ;; R/C button
         (d/label {:class-name (css :relative {:cursor "pointer"})}
                  (d/input {:type "radio"
                            :name "mix-radio"
                            :value "R/C"
                            :checked (= selected "R/C")
                            :on-change #(set-selected! "R/C")
                            :class-name (css :absolute {:opacity "0"})})
                  (d/div {:class-name (button-style (= selected "R/C") "R/C")}
                         (d/span {:class-name (text-style)}
                                 "R/C")))
           ;; C/F button
         (d/label {:class-name (css :relative {:cursor "pointer"})}
                  (d/input {:type "radio"
                            :name "mix-radio"
                            :value "C/F"
                            :checked (= selected "C/F")
                            :on-change #(set-selected! "C/F")
                            :class-name (css :absolute {:opacity "0"})})
                  (d/div {:class-name (button-style (= selected "C/F") "C/F")}
                         (d/span {:class-name (text-style)}
                                 "C/F")))))

(def r-map {"R" "Raise"
            "C" "Call"
            "F" "Fold"})

(defnc MixButtons [{:keys [set-mix!]}]
  (let [[selected set-selected!] (hooks/use-state "R/F")
        frst (get r-map (first selected))
        lst (get r-map (last selected))
        mid (get r-map (first (first (dissoc r-map (first selected) (last selected)))))
        ky (comp keyword str/lower-case)]
    (d/div {:class-name (css :flex :my-2 :p-1 :flex-row :flex-wrap :w-full :rounded-xl :shadow-md :justify-evenly {:background "rgb(150 150 150)"})}
           (d/div {:class-name (css :my-2 :w-full)} ($ MixRadio {:selected selected :set-selected! set-selected!}))
           (d/div {:class-name (css {:width "20%"} :m-2 {:cursor "pointer"}) :on-click #(set-mix! {(ky frst) 100 (ky mid) 0 (ky lst) 0})} ($ ActionPie {:action-string (str frst "(100%)")}))
           (d/div {:class-name (css {:width "20%"} :m-2 {:cursor "pointer"}) :on-click #(set-mix! {(ky frst) 83 (ky mid) 0 (ky lst) 17})} ($ ActionPie {:action-string (str frst "(83%)/" lst "(17%)")}))
           (d/div {:class-name (css {:width "20%"} :m-2 {:cursor "pointer"}) :on-click #(set-mix! {(ky frst) 75 (ky mid) 0 (ky lst) 25})} ($ ActionPie {:action-string (str frst "(75%)/" lst "(25%)")}))
           (d/div {:class-name (css {:width "20%"} :m-2 {:cursor "pointer"}) :on-click #(set-mix! {(ky frst) 67 (ky mid) 0 (ky lst) 33})} ($ ActionPie {:action-string (str frst "(67%)/" lst "(33%)")}))
           (d/div {:class-name (css {:width "20%"} :m-2 {:cursor "pointer"}) :on-click #(set-mix! {(ky frst) 50 (ky mid) 0 (ky lst) 50})} ($ ActionPie {:action-string (str frst "(50%)/" lst "(50%)")}))
           (d/div {:class-name (css {:width "20%"} :m-2 {:cursor "pointer"}) :on-click #(set-mix! {(ky frst) 33 (ky mid) 0 (ky lst) 67})} ($ ActionPie {:action-string (str frst "(33%)/" lst "(67%)")}))
           (d/div {:class-name (css {:width "20%"} :m-2 {:cursor "pointer"}) :on-click #(set-mix! {(ky frst) 25 (ky mid) 0 (ky lst) 75})} ($ ActionPie {:action-string (str frst "(25%)/" lst "(75%)")}))
           (d/div {:class-name (css {:width "20%"} :m-2 {:cursor "pointer"}) :on-click #(set-mix! {(ky frst) 13 (ky mid) 0 (ky lst) 87})} ($ ActionPie {:action-string (str frst "(17%)/" lst "(83%)")}))
           (d/div {:class-name (css {:width "20%"} :m-2 {:cursor "pointer"}) :on-click #(set-mix! {(ky frst) 0 (ky mid) 0 (ky lst) 100})} ($ ActionPie {:action-string (str lst "(100%)")})))))

