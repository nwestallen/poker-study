(ns app.utils.strategy
  (:require [cljs-bean.core :refer [->clj ->js]]
            [clojure.string :as str]))

(def all-fold
  [
   {:hand "AA" :act {:fold 100}} {:hand "AKs" :act {:fold 100}} {:hand "AQs" :act {:fold 100}} {:hand "AJs" :act {:fold 100}} {:hand "ATs" :act {:fold 100}} {:hand "A9s" :act {:fold 100}} {:hand "A8s" :act {:fold 100}} {:hand "A7s" :act {:fold 100}} {:hand "A6s" :act {:fold 100}} {:hand "A5s" :act {:fold 100}} {:hand "A4s" :act {:fold 100}} {:hand "A3s" :act {:fold 100}} {:hand "A2s" :act {:fold 100}}
    {:hand "AKo" :act {:fold 100}} {:hand "KK" :act {:fold 100}} {:hand "KQs" :act {:fold 100}} {:hand "KJs" :act {:fold 100}} {:hand "KTs" :act {:fold 100}} {:hand "K9s" :act {:fold 100}} {:hand "K8s" :act {:fold 100}} {:hand "K7s" :act {:fold 100}} {:hand "K6s" :act {:fold 100}} {:hand "K5s" :act {:fold 100}} {:hand "K4s" :act {:fold 100}} {:hand "K3s" :act {:fold 100}} {:hand "K2s" :act {:fold 100}}
    {:hand "AQo" :act {:fold 100}} {:hand "KQo" :act {:fold 100}} {:hand "QQ" :act {:fold 100}} {:hand "QJs" :act {:fold 100}} {:hand "QTs" :act {:fold 100}} {:hand "Q9s" :act {:fold 100}} {:hand "Q8s" :act {:fold 100}} {:hand "Q7s" :act {:fold 100}} {:hand "Q6s" :act {:fold 100}} {:hand "Q5s" :act {:fold 100}} {:hand "Q4s" :act {:fold 100}} {:hand "Q3s" :act {:fold 100}} {:hand "Q2s" :act {:fold 100}}
    {:hand "AJo" :act {:fold 100}} {:hand "KJo" :act {:fold 100}} {:hand "QJo" :act {:fold 100}} {:hand "JJ" :act {:fold 100}} {:hand "JTs" :act {:fold 100}} {:hand "J9s" :act {:fold 100}} {:hand "J8s" :act {:fold 100}} {:hand "J7s" :act {:fold 100}} {:hand "J6s" :act {:fold 100}} {:hand "J5s" :act {:fold 100}} {:hand "J4s" :act {:fold 100}} {:hand "J3s" :act {:fold 100}} {:hand "J2s" :act {:fold 100}}
    {:hand "ATo" :act {:fold 100}} {:hand "KTo" :act {:fold 100}} {:hand "QTo" :act {:fold 100}} {:hand "JTo" :act {:fold 100}} {:hand "TT" :act {:fold 100}} {:hand "T9s" :act {:fold 100}} {:hand "T8s" :act {:fold 100}} {:hand "T7s" :act {:fold 100}} {:hand "T6s" :act {:fold 100}} {:hand "T5s" :act {:fold 100}} {:hand "T4s" :act {:fold 100}} {:hand "T3s" :act {:fold 100}} {:hand "T2s" :act {:fold 100}}
    {:hand "A9o" :act {:fold 100}} {:hand "K9o" :act {:fold 100}} {:hand "Q9o" :act {:fold 100}} {:hand "J9o" :act {:fold 100}} {:hand "T9o" :act {:fold 100}} {:hand "99" :act {:fold 100}} {:hand "98s" :act {:fold 100}} {:hand "97s" :act {:fold 100}} {:hand "96s" :act {:fold 100}} {:hand "95s" :act {:fold 100}} {:hand "94s" :act {:fold 100}} {:hand "93s" :act {:fold 100}} {:hand "92s" :act {:fold 100}}
    {:hand "A8o" :act {:fold 100}} {:hand "K8o" :act {:fold 100}} {:hand "Q8o" :act {:fold 100}} {:hand "J8o" :act {:fold 100}} {:hand "T8o" :act {:fold 100}} {:hand "98o" :act {:fold 100}} {:hand "88" :act {:fold 100}} {:hand "87s" :act {:fold 100}} {:hand "86s" :act {:fold 100}} {:hand "85s" :act {:fold 100}} {:hand "84s" :act {:fold 100}} {:hand "83s" :act {:fold 100}} {:hand "82s" :act {:fold 100}}
    {:hand "A7o" :act {:fold 100}} {:hand "K7o" :act {:fold 100}} {:hand "Q7o" :act {:fold 100}} {:hand "J7o" :act {:fold 100}} {:hand "T7o" :act {:fold 100}} {:hand "97o" :act {:fold 100}} {:hand "87o" :act {:fold 100}} {:hand "77" :act {:fold 100}} {:hand "76s" :act {:fold 100}} {:hand "75s" :act {:fold 100}} {:hand "74s" :act {:fold 100}} {:hand "73s" :act {:fold 100}} {:hand "72s" :act {:fold 100}}
    {:hand "A6o" :act {:fold 100}} {:hand "K6o" :act {:fold 100}} {:hand "Q6o" :act {:fold 100}} {:hand "J6o" :act {:fold 100}} {:hand "T6o" :act {:fold 100}} {:hand "96o" :act {:fold 100}} {:hand "86o" :act {:fold 100}} {:hand "76o" :act {:fold 100}} {:hand "66" :act {:fold 100}} {:hand "65s" :act {:fold 100}} {:hand "64s" :act {:fold 100}} {:hand "63s" :act {:fold 100}} {:hand "62s" :act {:fold 100}}
    {:hand "A5o" :act {:fold 100}} {:hand "K5o" :act {:fold 100}} {:hand "Q5o" :act {:fold 100}} {:hand "J5o" :act {:fold 100}} {:hand "T5o" :act {:fold 100}} {:hand "95o" :act {:fold 100}} {:hand "85o" :act {:fold 100}} {:hand "75o" :act {:fold 100}} {:hand "65o" :act {:fold 100}} {:hand "55" :act {:fold 100}} {:hand "54s" :act {:fold 100}} {:hand "53s" :act {:fold 100}} {:hand "52s" :act {:fold 100}}
    {:hand "A4o" :act {:fold 100}} {:hand "K4o" :act {:fold 100}} {:hand "Q4o" :act {:fold 100}} {:hand "J4o" :act {:fold 100}} {:hand "T4o" :act {:fold 100}} {:hand "94o" :act {:fold 100}} {:hand "84o" :act {:fold 100}} {:hand "74o" :act {:fold 100}} {:hand "64o" :act {:fold 100}} {:hand "54o" :act {:fold 100}} {:hand "44" :act {:fold 100}} {:hand "43s" :act {:fold 100}} {:hand "42s" :act {:fold 100}}
    {:hand "A3o" :act {:fold 100}} {:hand "K3o" :act {:fold 100}} {:hand "Q3o" :act {:fold 100}} {:hand "J3o" :act {:fold 100}} {:hand "T3o" :act {:fold 100}} {:hand "93o" :act {:fold 100}} {:hand "83o" :act {:fold 100}} {:hand "73o" :act {:fold 100}} {:hand "63o" :act {:fold 100}} {:hand "53o" :act {:fold 100}} {:hand "43o" :act {:fold 100}} {:hand "33" :act {:fold 100}} {:hand "32s" :act {:fold 100}}
    {:hand "A2o" :act {:fold 100}} {:hand "K2o" :act {:fold 100}} {:hand "Q2o" :act {:fold 100}} {:hand "J2o" :act {:fold 100}} {:hand "T2o" :act {:fold 100}} {:hand "92o" :act {:fold 100}} {:hand "82o" :act {:fold 100}} {:hand "72o" :act {:fold 100}} {:hand "62o" :act {:fold 100}} {:hand "52o" :act {:fold 100}} {:hand "42o" :act {:fold 100}} {:hand "32" :act {:fold 100}} {:hand "22" :act {:fold 100}}
   ])


(def blank-strat
  [
   {:hand "AA" :act {}} {:hand "AKs" :act {}} {:hand "AQs" :act {}} {:hand "AJs" :act {}} {:hand "ATs" :act {}} {:hand "A9s" :act {}} {:hand "A8s" :act {}} {:hand "A7s" :act {}} {:hand "A6s" :act {}} {:hand "A5s" :act {}} {:hand "A4s" :act {}} {:hand "A3s" :act {}} {:hand "A2s" :act {}}
    {:hand "AKo" :act {}} {:hand "KK" :act {}} {:hand "KQs" :act {}} {:hand "KJs" :act {}} {:hand "KTs" :act {}} {:hand "K9s" :act {}} {:hand "K8s" :act {}} {:hand "K7s" :act {}} {:hand "K6s" :act {}} {:hand "K5s" :act {}} {:hand "K4s" :act {}} {:hand "K3s" :act {}} {:hand "K2s" :act {}}
    {:hand "AQo" :act {}} {:hand "KQo" :act {}} {:hand "QQ" :act {}} {:hand "QJs" :act {}} {:hand "QTs" :act {}} {:hand "Q9s" :act {}} {:hand "Q8s" :act {}} {:hand "Q7s" :act {}} {:hand "Q6s" :act {}} {:hand "Q5s" :act {}} {:hand "Q4s" :act {}} {:hand "Q3s" :act {}} {:hand "Q2s" :act {}}
    {:hand "AJo" :act {}} {:hand "KJo" :act {}} {:hand "QJo" :act {}} {:hand "JJ" :act {}} {:hand "JTs" :act {}} {:hand "J9s" :act {}} {:hand "J8s" :act {}} {:hand "J7s" :act {}} {:hand "J6s" :act {}} {:hand "J5s" :act {}} {:hand "J4s" :act {}} {:hand "J3s" :act {}} {:hand "J2s" :act {}}
    {:hand "ATo" :act {}} {:hand "KTo" :act {}} {:hand "QTo" :act {}} {:hand "JTo" :act {}} {:hand "TT" :act {}} {:hand "T9s" :act {}} {:hand "T8s" :act {}} {:hand "T7s" :act {}} {:hand "T6s" :act {}} {:hand "T5s" :act {}} {:hand "T4s" :act {}} {:hand "T3s" :act {}} {:hand "T2s" :act {}}
    {:hand "A9o" :act {}} {:hand "K9o" :act {}} {:hand "Q9o" :act {}} {:hand "J9o" :act {}} {:hand "T9o" :act {}} {:hand "99" :act {}} {:hand "98s" :act {}} {:hand "97s" :act {}} {:hand "96s" :act {}} {:hand "95s" :act {}} {:hand "94s" :act {}} {:hand "93s" :act {}} {:hand "92s" :act {}}
    {:hand "A8o" :act {}} {:hand "K8o" :act {}} {:hand "Q8o" :act {}} {:hand "J8o" :act {}} {:hand "T8o" :act {}} {:hand "98o" :act {}} {:hand "88" :act {}} {:hand "87s" :act {}} {:hand "86s" :act {}} {:hand "85s" :act {}} {:hand "84s" :act {}} {:hand "83s" :act {}} {:hand "82s" :act {}}
    {:hand "A7o" :act {}} {:hand "K7o" :act {}} {:hand "Q7o" :act {}} {:hand "J7o" :act {}} {:hand "T7o" :act {}} {:hand "97o" :act {}} {:hand "87o" :act {}} {:hand "77" :act {}} {:hand "76s" :act {}} {:hand "75s" :act {}} {:hand "74s" :act {}} {:hand "73s" :act {}} {:hand "72s" :act {}}
    {:hand "A6o" :act {}} {:hand "K6o" :act {}} {:hand "Q6o" :act {}} {:hand "J6o" :act {}} {:hand "T6o" :act {}} {:hand "96o" :act {}} {:hand "86o" :act {}} {:hand "76o" :act {}} {:hand "66" :act {}} {:hand "65s" :act {}} {:hand "64s" :act {}} {:hand "63s" :act {}} {:hand "62s" :act {}}
    {:hand "A5o" :act {}} {:hand "K5o" :act {}} {:hand "Q5o" :act {}} {:hand "J5o" :act {}} {:hand "T5o" :act {}} {:hand "95o" :act {}} {:hand "85o" :act {}} {:hand "75o" :act {}} {:hand "65o" :act {}} {:hand "55" :act {}} {:hand "54s" :act {}} {:hand "53s" :act {}} {:hand "52s" :act {}}
    {:hand "A4o" :act {}} {:hand "K4o" :act {}} {:hand "Q4o" :act {}} {:hand "J4o" :act {}} {:hand "T4o" :act {}} {:hand "94o" :act {}} {:hand "84o" :act {}} {:hand "74o" :act {}} {:hand "64o" :act {}} {:hand "54o" :act {}} {:hand "44" :act {}} {:hand "43s" :act {}} {:hand "42s" :act {}}
    {:hand "A3o" :act {}} {:hand "K3o" :act {}} {:hand "Q3o" :act {}} {:hand "J3o" :act {}} {:hand "T3o" :act {}} {:hand "93o" :act {}} {:hand "83o" :act {}} {:hand "73o" :act {}} {:hand "63o" :act {}} {:hand "53o" :act {}} {:hand "43o" :act {}} {:hand "33" :act {}} {:hand "32s" :act {}}
   {:hand "A2o" :act {}} {:hand "K2o" :act {}} {:hand "Q2o" :act {}} {:hand "J2o" :act {}} {:hand "T2o" :act {}} {:hand "92o" :act {}} {:hand "82o" :act {}} {:hand "72o" :act {}} {:hand "62o" :act {}} {:hand "52o" :act {}} {:hand "42o" :act {}} {:hand "32o" :act {}} {:hand "22" :act {}}
    ])

(defn hand-index [h range]
  (.indexOf range (first (filter (comp #{h} :hand) range)))
)

(def strategy
  (fn [range strats]
    (loop [s strats
           result range]
      (if (empty? s)
        result
        (recur (rest s) (assoc-in result [(hand-index (:hand (first s)) range) :act] (:act (first s))))))))

(defn action [act hands]
  (partial (map #(hash-map :hand % :act act) hands)))

(defn actions [actionmap]
  (flatten (map (fn [[k v]] (action k v)) actionmap)))

(def ranks '("2" "3" "4" "5" "6" "7" "8" "9" "T" "J" "Q" "K" "A"))

(defn rank-value [card]
  (case card
        "A" 14
        "K" 13
        "Q" 12
        "J" 11
        "T" 10
        (js/parseInt card)))

(defn pair-range [hand]
  (if (= (last hand) "+") (pair-range (apply str "AA-" (drop-last hand)))
  (map (fn [r] (str r r)) (filter #(<= (rank-value (last hand)) (rank-value %) (rank-value (first hand))) ranks))
  ))

(defn unpair-range [hand]
  (if (= (last hand) "+") (unpair-range (apply str (first hand) (nth ranks (- (rank-value (first hand)) 3)) (nth hand 2) "-" (drop-last hand)))
  (let [top (first hand) start (second hand) end (nth hand 5) suit (last hand)]
    (map (fn [b] (str top b suit)) (filter #(<= (rank-value end) (rank-value %) (rank-value start)) ranks))
    )))

(defn hand-range [hand]
  (if (= (first hand) (second hand))
    (pair-range hand)
    (if (= (count hand) 3) (list hand) (unpair-range hand))))

(def hand-ranges (comp flatten (partial map hand-range)))

(defn act-ranges [actionmap]
  (flatten (map (fn [[k v]] (action k (hand-ranges v))) actionmap)))

(def strat-ranges
  (comp (partial strategy all-fold) act-ranges))

(defn strat-pipe [range]
  (comp (partial strategy range) act-ranges))

(def six-strat

  {:RFI {
         :EP {:OPEN {{:raise 100} '("77+" "AKo" "A5s+" "K9s+" "QTs+" "JTs+")}}
         :LJ {:OPEN {{:raise 100} '("77+" "ATo+" "KJo+" "A3s+" "K9s+" "Q9s+" "JTs" "T9s") {:raise 50 :fold 50} '("66" "QJo" "K8s") {:raise 12 :fold 88} '("55-22" "98s" "87s" "76s" "65s" "54s")}
              :vs3-BET {{:raise 100} '("AA-QQ" "AKs" "AKo") {:raise 50 :call 50} '("AQs-ATs" "KQs-KJs" "JJ-TT") {:call 100} '("55-22" "98s" "87s" "76s" "65s" "54s") {:call 50 :fold 50} '("99-66" "QTs" "JTs" "T9s")}}
         :HJ {:OPEN {{:raise 100} '("66+" "A2s+" "K6s+" "Q9s+" "J9s+" "T9s" "ATo+" "KTo+" "QJo") {:raise 50 :fold 50} '("QTo" "55" "Q8s" "K5s" "98s" "T8s") {:raise 25 :fold 75} '("87s" "76s" "65s" "54s" "44-22" "JTo" "A9o")}
              :vCO-BTN-3BET {{:raise 100} '("AA-QQ" "AKs" "AKo-AQo" "KJs-KTs") {:call 100} '("99" "AQs" "87s" "76s" "65s" "54s" "44-22") {:raise 50 :call 50} '("KQs-KTs" "AJs-ATs" "JJ-TT") {:call 50 :fold 50} '("JTs" "T9s" "98s" "88-55" "QJs")}
              :vSB-BB-3BET {{:raise 100} '("AA") {:raise 50 :call 50} '("AKs" "KK") {:raise 25 :call 75} '("AJs-ATs" "KJs-KTs" "JJ" "AKo" "AQo") {:call 100} '("QQ" "TT-88" "87s" "76s" "65s" "54s" "JTs" "44-22" "QJs-QTs" "AQs" "KQs") {:call 50 :fold 50} '("T9s" "98s" "77-55")}}
         :CO {:OPEN {{:raise 100} '("44+" "87s+" "97s+" "T8s+" "J8s+" "Q6s+" "K4s+" "A2s+" "A9o+" "KTo+" "QTo+" "JTo+") {:raise 50 :fold 50} '("76s" "T7s" "A8o" "33-22")}
              :vBTN-3BET {{:raise 100} '("TT+" "AKs" "AKo-AQo" "KJs-KTs") {:call 100} '("AQs-A9s" "A5s" "KQs" "QJ-QTs" "JTs" "99-22" "86s" "76s" "65s" "54s")}
              :vSB-BB-3BET {{:raise 100} '("AA" "AKs" "KK") {:call 100} '("AQs-A9s" "A5s-A4s" "QQ-22" "86s" "76s" "65s" "54s" "QJs-QTs" "JTs-J9s" "T9s" "KQs-K9s" "AKo-AQo")}}
         :BTN {:OPEN {{:raise 100} '("22+" "53s+" "64s+" "75s+" "85s+" "96s+" "T6s+" "J4s+" "Q3s+" "K2s+" "A2s+" "A5o+" "K8o+" "Q9o+" "J9o+" "T8o+" "98o")}
               :v3BET {{:raise 100} '("AA-KK" "AKs") {:call 100} '("AQs-A2s" "KQs-K5s" "QJs-Q8s" "JTs-J8s" "T9s-T7s" "98s-96s" "87s-86s" "76s-75s" "65s-64s" "54s-53s" "QQ-22" "AKo-ATo" "KQo-KJo")}}
         :SB {:OPEN {{:raise 100} '("AKs" "ATs-A7s" "A5s" "KJs-K9s" "QJs-Q9s" "JTs-J9s") {:raise 50 :call 50} '("22+" "AQs-AJs" "A4s" "K8s-K5s" "J7-J4s" "Q5s-Q2s" "A5o+" "K8o+" "KQs" "980-97o"  "87o")
              {:call 100} '("A4o-A2o" "K7o-K4o" "Q6o+" "J7o+" "T7o+" "Q8s-Q6s" "J2s+" "K4s-K2s" "T3s+" "94s+" "84s+" "63s+" "53s+" "43s" "A3s" "A6s" "A2s" "74s+")}
              :vBBR {{:raise 100} '("99+" "AQo+" "A8s+" "A5s" "K9s+" "Q9s+" "J9s+" "T9s+") {:call 100} '("88-22" "AJo-A7o" "A5o" "KQo-K9o" "QJo-Q9o" "JTo-J9o" "T9o" "A7s-A6s" "A4s-A2s" "K8s-K2s" "Q8s-Q2s" "J8s-J4s" "T8s-T6s" "98s-96s" "87s-85s" "76s-74s" "65s-64s" "54s-53s")}
              :vBB3BET {{:raise 100} '("JJ+" "AKs" "AKo") {:call 100} '("AQs-A2s" "KQs-K4s" "QJs-Q8s" "JTs-J8s" "T9s-T7s" "98s-97s" "87s-86s" "76s" "65s" "54s" "KTo" "QJo" "JTo" "99-22") {:raise 50 :call 50} '("AQo-ATo" "KQo-KTo" "TT")}}
         }
   :vEP-Open {}
   :vLJ-Open {}
   :v-HJ-Open {}
   :v-CO-Open {}
   :v-BTN-Open {}
   })

(defn combos [hand]
  (if (= (first hand) (last hand))
    6
    (if (= (last hand) "s")
      4
      12)
    ))

(defn combo-count [handact]
  (hash-map :hand (:hand handact) :act
  (update-vals (:act handact) #(/ (* (combos (:hand handact)) %) 100)))
  )

(defn standardize [handact]
  (hash-map :hand (:hand handact) :act
            (merge-with + {:raise 0 :call 0 :fold 0} (:act handact)))
  )

(def combodize
  (comp standardize combo-count))

(def HJvCO (strat-ranges (get-in six-strat [:RFI :HJ :vCO-BTN-3BET])))

(defn action-combos [strat]
  (map #(combodize %) strat))

(defn action-summary [strat]
  (apply merge-with + (map #(:act %) (action-combos strat)))
  )

(defn keyed-strat [strat]
  (apply merge (map #(hash-map (keyword (:hand %)) (:act %)) strat)))

(def key-combos (comp keyed-strat action-combos))

(defn diff-strats [strat1 strat2]
  (merge-with (partial merge-with -) (key-combos strat1) (key-combos strat2))
  )

(defn summarize-diff [diff]
  (/ (apply + (map abs (vals diff))) 2)
  )

(defn diff-summary [strat1 strat2]
  (filter #(> (last %) 0) (sort-by val > (update-vals (diff-strats strat1 strat2) summarize-diff)))
  )

(defn classify-hand [hand]
  (if (= (first hand) (nth hand 2)) (str (first hand) (nth hand 2))
      (if (= (second hand) (last hand)) (str (first hand) (nth hand 2) "s")
          (str (first hand) (nth hand 2) "o")))
    )

(defn get-hand [string]
  (apply str (take 4 string)))

(defn get-amount [string]
  (let [d (str/index-of string " ")]
    (* 100 (js/parseFloat (apply str (drop (+ d 1) string))))))

(defn parse-hand [string]
  (if (str/blank? string) {}
  (let [hand (classify-hand (get-hand string))]
  {(keyword hand) (js/parseFloat (.toFixed (/ (get-amount string) (combos hand)) 3))})))

(defn parse-hands [string action-key]
  (as-> string x
    (str/split x #",")
    (map parse-hand x)
    (apply (partial merge-with +) x)
    (update-vals x #(assoc {} action-key (js/parseFloat (.toFixed % 3))))
    ))

(defn consolidate-ranges [& ranges]
  (apply merge-with merge ranges)
  )

(defn convert-strat [strat]
  (strategy blank-strat (mapv #(hash-map :hand (name (key %)) :act (val %)) strat))
  )

(defn convert-ranges [{:keys [raise call fold]}]
  (convert-strat
  (consolidate-ranges (parse-hands raise :raise)
                      (parse-hands call :call)
                      (parse-hands fold :fold))))

