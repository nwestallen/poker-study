(ns app.utils.strategy)

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

(defn hand-index [h]
  (.indexOf all-fold (first (filter (comp #{h} :hand) all-fold)))
)

(def strategy
  (fn [strats]
    (loop [s strats
           result all-fold]
      (if (empty? s)
        result
        (recur (rest s) (assoc-in result [(hand-index (:hand (first s))) :act] (:act (first s))))))))

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
  (comp strategy act-ranges))


