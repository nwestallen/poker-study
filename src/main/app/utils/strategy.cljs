(ns app.utils.strategy)

(def all-fold
  [
   {:hand "AA" :act :fold} {:hand "AKs" :act :fold} {:hand "AQs" :act :fold} {:hand "AJs" :act :fold} {:hand "ATs" :act :fold} {:hand "A9s" :act :fold} {:hand "A8s" :act :fold} {:hand "A7s" :act :fold} {:hand "A6s" :act :fold} {:hand "A5s" :act :fold} {:hand "A4s" :act :fold} {:hand "A3s" :act :fold} {:hand "A2s" :act :fold}
    {:hand "AKo" :act :fold} {:hand "KK" :act :fold} {:hand "KQs" :act :fold} {:hand "KJs" :act :fold} {:hand "KTs" :act :fold} {:hand "K9s" :act :fold} {:hand "K8s" :act :fold} {:hand "K7s" :act :fold} {:hand "K6s" :act :fold} {:hand "K5s" :act :fold} {:hand "K4s" :act :fold} {:hand "K3s" :act :fold} {:hand "K2s" :act :fold}
    {:hand "AQo" :act :fold} {:hand "KQo" :act :fold} {:hand "QQ" :act :fold} {:hand "QJs" :act :fold} {:hand "QTs" :act :fold} {:hand "Q9s" :act :fold} {:hand "Q8s" :act :fold} {:hand "Q7s" :act :fold} {:hand "Q6s" :act :fold} {:hand "Q5s" :act :fold} {:hand "Q4s" :act :fold} {:hand "Q3s" :act :fold} {:hand "Q2s" :act :fold}
    {:hand "AJo" :act :fold} {:hand "KJo" :act :fold} {:hand "QJo" :act :fold} {:hand "JJ" :act :fold} {:hand "JTs" :act :fold} {:hand "J9s" :act :fold} {:hand "J8s" :act :fold} {:hand "J7s" :act :fold} {:hand "J6s" :act :fold} {:hand "J5s" :act :fold} {:hand "J4s" :act :fold} {:hand "J3s" :act :fold} {:hand "J2s" :act :fold}
    {:hand "ATo" :act :fold} {:hand "KTo" :act :fold} {:hand "QTo" :act :fold} {:hand "JTo" :act :fold} {:hand "TT" :act :fold} {:hand "T9s" :act :fold} {:hand "T8s" :act :fold} {:hand "T7s" :act :fold} {:hand "T6s" :act :fold} {:hand "T5s" :act :fold} {:hand "T4s" :act :fold} {:hand "T3s" :act :fold} {:hand "T2s" :act :fold}
    {:hand "A9o" :act :fold} {:hand "K9o" :act :fold} {:hand "Q9o" :act :fold} {:hand "J9o" :act :fold} {:hand "T9o" :act :fold} {:hand "99" :act :fold} {:hand "98s" :act :fold} {:hand "97s" :act :fold} {:hand "96s" :act :fold} {:hand "95s" :act :fold} {:hand "94s" :act :fold} {:hand "93s" :act :fold} {:hand "92s" :act :fold}
    {:hand "A8o" :act :fold} {:hand "K8o" :act :fold} {:hand "Q8o" :act :fold} {:hand "J8o" :act :fold} {:hand "T8o" :act :fold} {:hand "98o" :act :fold} {:hand "88" :act :fold} {:hand "87s" :act :fold} {:hand "86s" :act :fold} {:hand "85s" :act :fold} {:hand "84s" :act :fold} {:hand "83s" :act :fold} {:hand "82s" :act :fold}
    {:hand "A7o" :act :fold} {:hand "K7o" :act :fold} {:hand "Q7o" :act :fold} {:hand "J7o" :act :fold} {:hand "T7o" :act :fold} {:hand "97o" :act :fold} {:hand "87o" :act :fold} {:hand "77" :act :fold} {:hand "76s" :act :fold} {:hand "75s" :act :fold} {:hand "74s" :act :fold} {:hand "73s" :act :fold} {:hand "72s" :act :fold}
    {:hand "A6o" :act :fold} {:hand "K6o" :act :fold} {:hand "Q6o" :act :fold} {:hand "J6o" :act :fold} {:hand "T6o" :act :fold} {:hand "96o" :act :fold} {:hand "86o" :act :fold} {:hand "76o" :act :fold} {:hand "66" :act :fold} {:hand "65s" :act :fold} {:hand "64s" :act :fold} {:hand "63s" :act :fold} {:hand "62s" :act :fold}
    {:hand "A5o" :act :fold} {:hand "K5o" :act :fold} {:hand "Q5o" :act :fold} {:hand "J5o" :act :fold} {:hand "T5o" :act :fold} {:hand "95o" :act :fold} {:hand "85o" :act :fold} {:hand "75o" :act :fold} {:hand "65o" :act :fold} {:hand "55" :act :fold} {:hand "54s" :act :fold} {:hand "53s" :act :fold} {:hand "52s" :act :fold}
    {:hand "A4o" :act :fold} {:hand "K4o" :act :fold} {:hand "Q4o" :act :fold} {:hand "J4o" :act :fold} {:hand "T4o" :act :fold} {:hand "94o" :act :fold} {:hand "84o" :act :fold} {:hand "74o" :act :fold} {:hand "64o" :act :fold} {:hand "54o" :act :fold} {:hand "44" :act :fold} {:hand "43s" :act :fold} {:hand "42s" :act :fold}
    {:hand "A3o" :act :fold} {:hand "K3o" :act :fold} {:hand "Q3o" :act :fold} {:hand "J3o" :act :fold} {:hand "T3o" :act :fold} {:hand "93o" :act :fold} {:hand "83o" :act :fold} {:hand "73o" :act :fold} {:hand "63o" :act :fold} {:hand "53o" :act :fold} {:hand "43o" :act :fold} {:hand "33" :act :fold} {:hand "32s" :act :fold}
    {:hand "A2o" :act :fold} {:hand "K2o" :act :fold} {:hand "Q2o" :act :fold} {:hand "J2o" :act :fold} {:hand "T2o" :act :fold} {:hand "92o" :act :fold} {:hand "82o" :act :fold} {:hand "72o" :act :fold} {:hand "62o" :act :fold} {:hand "52o" :act :fold} {:hand "42o" :act :fold} {:hand "32" :act :fold} {:hand "22" :act :fold}
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

(defn raise [hands]
  (map #(hash-map :hand % :act :raise) hands))

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

(def raise-range (comp (partial raise) hand-ranges))

