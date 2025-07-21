(ns app.components.accreport
  (:require [helix.core :refer [defnc $ <>]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [clojure.set :as set]
            [app.components.percentgauge :refer [PercentGauge]]
            [app.components.cardchart :refer [PureChart]]
            [app.components.freqchart :refer [FreqBar]]
            [app.utils.strategy :refer [strat-accuracy percent-summary diff-summary all-fold abbrv-range]]
            ["react-dom/client" :as rdom]))

(def all-hands
  (set (map first all-fold)))

(defn filter-results [guess answer filter-fn]
  (map first (filter filter-fn (diff-summary guess answer))))

(defn hide-set [guess answer filter-fn]
  (set/difference (set (map first all-fold)) (set (filter-results guess answer filter-fn))))

(defnc ResultSet [{:keys [name guess answer filter-fn set-hidelist!]}]
  (d/div {:on-mouse-enter #(set-hidelist! (hide-set guess answer filter-fn))
          :on-mouse-leave #(set-hidelist! #{})
          :class-name (css :m-1 :p-1 {:width "80%"} :border-2 :border-black)}
         (d/p {:class-name (css :text-white)} name)
         (d/p (abbrv-range (filter-results guess answer filter-fn))))
  )

(defnc AccReport [{:keys [guess answer on-close set-strategy!]}]
  (let [[hidelist set-hidelist!] (hooks/use-state #{})
        accuracy (hooks/use-memo [guess answer] (strat-accuracy guess answer))]
  (d/div {:class-name (css :absolute :m-5 :p-5 {:background "rgb(120 120 120)"} {:width "85%"} {:opacity 1} :rounded-xl :shadow-xl)}
         (d/button {:on-click on-close :class-name (css {:background "rgb(64 64 64)"} :text-white :py-1 :px-2 :rounded-md)} "Close")
         (d/div {:class-name (css :flex :flex-row)}
                (d/div {:class-name (css {:width "50%"} :m-2 {:height "50%"})} ($ PureChart {:strategy guess :hidelist hidelist}))
                (d/div {:class-name (css {:width "30%"} :flex :flex-col :items-center)}
                       (d/div {:class-name (css {:width "200px"} {:height "200px"})} ($ PercentGauge {:percentage accuracy}))
                       (d/div {:class-name (css {:width "250px"} {:height "150px"})} ($ FreqBar {:left (percent-summary guess) :right (percent-summary answer)}))
                       ($ ResultSet {:name "Mistakes: " :guess guess :answer answer :set-hidelist! set-hidelist! :filter-fn #(<= 2 (second %) 5)})
                       ($ ResultSet {:name "Blunders: " :guess guess :answer answer :set-hidelist! set-hidelist! :filter-fn #(> (second %) 5)})
                       (d/button {:on-click #(set-strategy! answer) :class-name (css :m-3 :p-2 {:background "rgb(64 64 64)"} :text-white :rounded-md)} "Match Answer")
                )
                (d/div {:class-name (css {:width "50%"} :m-2 {:height "50%"})} ($ PureChart {:strategy answer :hidelist hidelist}))
                           )
                           )
  ))
