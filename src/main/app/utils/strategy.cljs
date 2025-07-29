(ns app.utils.strategy
  (:require [cljs-bean.core :refer [->clj ->js]]
            [clojure.string :as str]
            [flatland.ordered.map :refer [ordered-map]]))

(def all-fold
#ordered/map ([:AA {:fold 100}] [:AKs {:fold 100}] [:AQs {:fold 100}] [:AJs {:fold 100}] [:ATs {:fold 100}] [:A9s {:fold 100}] [:A8s {:fold 100}] [:A7s {:fold 100}] [:A6s {:fold 100}] [:A5s {:fold 100}] [:A4s {:fold 100}] [:A3s {:fold 100}] [:A2s {:fold 100}] [:AKo {:fold 100}] [:KK {:fold 100}] [:KQs {:fold 100}] [:KJs {:fold 100}] [:KTs {:fold 100}] [:K9s {:fold 100}] [:K8s {:fold 100}] [:K7s {:fold 100}] [:K6s {:fold 100}] [:K5s {:fold 100}] [:K4s {:fold 100}] [:K3s {:fold 100}] [:K2s {:fold 100}] [:AQo {:fold 100}] [:KQo {:fold 100}] [:QQ {:fold 100}] [:QJs {:fold 100}] [:QTs {:fold 100}] [:Q9s {:fold 100}] [:Q8s {:fold 100}] [:Q7s {:fold 100}] [:Q6s {:fold 100}] [:Q5s {:fold 100}] [:Q4s {:fold 100}] [:Q3s {:fold 100}] [:Q2s {:fold 100}] [:AJo {:fold 100}] [:KJo {:fold 100}] [:QJo {:fold 100}] [:JJ {:fold 100}] [:JTs {:fold 100}] [:J9s {:fold 100}] [:J8s {:fold 100}] [:J7s {:fold 100}] [:J6s {:fold 100}] [:J5s {:fold 100}] [:J4s {:fold 100}] [:J3s {:fold 100}] [:J2s {:fold 100}] [:ATo {:fold 100}] [:KTo {:fold 100}] [:QTo {:fold 100}] [:JTo {:fold 100}] [:TT {:fold 100}] [:T9s {:fold 100}] [:T8s {:fold 100}] [:T7s {:fold 100}] [:T6s {:fold 100}] [:T5s {:fold 100}] [:T4s {:fold 100}] [:T3s {:fold 100}] [:T2s {:fold 100}] [:A9o {:fold 100}] [:K9o {:fold 100}] [:Q9o {:fold 100}] [:J9o {:fold 100}] [:T9o {:fold 100}] [:99 {:fold 100}] [:98s {:fold 100}] [:97s {:fold 100}] [:96s {:fold 100}] [:95s {:fold 100}] [:94s {:fold 100}] [:93s {:fold 100}] [:92s {:fold 100}] [:A8o {:fold 100}] [:K8o {:fold 100}] [:Q8o {:fold 100}] [:J8o {:fold 100}] [:T8o {:fold 100}] [:98o {:fold 100}] [:88 {:fold 100}] [:87s {:fold 100}] [:86s {:fold 100}] [:85s {:fold 100}] [:84s {:fold 100}] [:83s {:fold 100}] [:82s {:fold 100}] [:A7o {:fold 100}] [:K7o {:fold 100}] [:Q7o {:fold 100}] [:J7o {:fold 100}] [:T7o {:fold 100}] [:97o {:fold 100}] [:87o {:fold 100}] [:77 {:fold 100}] [:76s {:fold 100}] [:75s {:fold 100}] [:74s {:fold 100}] [:73s {:fold 100}] [:72s {:fold 100}] [:A6o {:fold 100}] [:K6o {:fold 100}] [:Q6o {:fold 100}] [:J6o {:fold 100}] [:T6o {:fold 100}] [:96o {:fold 100}] [:86o {:fold 100}] [:76o {:fold 100}] [:66 {:fold 100}] [:65s {:fold 100}] [:64s {:fold 100}] [:63s {:fold 100}] [:62s {:fold 100}] [:A5o {:fold 100}] [:K5o {:fold 100}] [:Q5o {:fold 100}] [:J5o {:fold 100}] [:T5o {:fold 100}] [:95o {:fold 100}] [:85o {:fold 100}] [:75o {:fold 100}] [:65o {:fold 100}] [:55 {:fold 100}] [:54s {:fold 100}] [:53s {:fold 100}] [:52s {:fold 100}] [:A4o {:fold 100}] [:K4o {:fold 100}] [:Q4o {:fold 100}] [:J4o {:fold 100}] [:T4o {:fold 100}] [:94o {:fold 100}] [:84o {:fold 100}] [:74o {:fold 100}] [:64o {:fold 100}] [:54o {:fold 100}] [:44 {:fold 100}] [:43s {:fold 100}] [:42s {:fold 100}] [:A3o {:fold 100}] [:K3o {:fold 100}] [:Q3o {:fold 100}] [:J3o {:fold 100}] [:T3o {:fold 100}] [:93o {:fold 100}] [:83o {:fold 100}] [:73o {:fold 100}] [:63o {:fold 100}] [:53o {:fold 100}] [:43o {:fold 100}] [:33 {:fold 100}] [:32s {:fold 100}] [:A2o {:fold 100}] [:K2o {:fold 100}] [:Q2o {:fold 100}] [:J2o {:fold 100}] [:T2o {:fold 100}] [:92o {:fold 100}] [:82o {:fold 100}] [:72o {:fold 100}] [:62o {:fold 100}] [:52o {:fold 100}] [:42o {:fold 100}] [:32o {:fold 100}] [:22 {:fold 100}])
  )

(defn keyed-strat [strat]
  (apply merge (map #(ordered-map (keyword (:hand %)) (:act %)) strat)))

(def blank-strat (ordered-map (map #(vector (key %) {}) all-fold)))

(def ranks '("2" "3" "4" "5" "6" "7" "8" "9" "T" "J" "Q" "K" "A"))

(defn rank-value [card]
  (case card
        "A" 14
        "K" 13
        "Q" 12
        "J" 11
        "T" 10
        (js/parseInt card)))

(defn hand-type [hand]
  (if (= (first hand) (second hand))
    :pair
    (if (= (last hand) "s") :suited :offsuit)))

(group-by hand-type '("AA" "AKs" "AJo" "QQ" "KQo" "54s"))
(update-vals (group-by hand-type '("AA" "AKs" "AJo" "ATo" "A9o" "A5s" "QQ" "QJs" "KQo" "KQs" "KTs" "KJs" "KJo" "54s")) (partial group-by first))

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

(apply assoc all-fold (flatten (map #(vector (keyword %) {:raise 100}) (hand-ranges '("QQ+" "A5s+")))))

(defn strategy [base updates]
  (apply assoc base updates))

(defn act-range [k v]
  (flatten (map #(vector (keyword %) k) (hand-ranges v))))

(defn act-ranges [actionmap]
  (flatten (map (fn [[k v]] (act-range k v)) actionmap))
  )

(act-ranges {{:raise 100} '("QQ+" "AQs+") {:call 100} '("77-44")})

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

(defn combo-count [strat]
  (map (fn [[k v]] (vector k (update-vals v #(/ (* % (combos (name k))) 100)))) strat))

(defn standardize [strat]
  (map (fn [[k v]] (vector k (merge-with + {:raise 0 :call 0 :fold 0} v))) strat)
  )

(def combodize
  (comp ordered-map standardize combo-count))

(def HJvCO (strat-ranges (get-in six-strat [:RFI :HJ :vCO-BTN-3BET])))

(defn action-summary [strat]
  (apply merge-with + (vals (combodize strat)))
  )

(defn diff-strats [strat1 strat2]
  (merge-with (partial merge-with -) (combodize strat1) (combodize strat2))
  )

(defn summarize-diff [diff]
  (/ (apply + (map abs (vals diff))) 2)
  )

(defn diff-summary [strat1 strat2]
  (filter #(> (last %) 0) (sort-by val > (update-vals (diff-strats strat1 strat2) summarize-diff)))
  )

(defn strat-accuracy [strat1 strat2]
  (.toFixed (* 100 (/ (- 1326 (reduce + (vals (diff-summary strat1 strat2)))) 1326)) 1)
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

(defn round-two [n]
  (/ (Math/round (* n 100.0)) 100.0))

(defn parse-hand [string]
  (if (str/blank? string) {}
  (let [hand (classify-hand (get-hand string))]
  {(keyword hand) (/ (get-amount string) (combos hand))})))

(defn parse-hands [string action-key]
  (as-> string x
    (str/split x #",")
    (map parse-hand x)
    (apply (partial merge-with +) x)
    (update-vals x #(assoc {} action-key  %))
    ))

(defn consolidate-ranges [& ranges]
  (flatten (into () (apply merge-with merge ranges)))
  )

(defn convert-ranges [{:keys [raise call fold]}]
  (strategy blank-strat
  (consolidate-ranges (parse-hands raise :raise)
                      (parse-hands call :call)
                      (parse-hands fold :fold))))

(defn combo-percent [n]
  (* (/ n 1326) 100))

(defn percent-summary [strat]
  (update-vals (action-summary strat) combo-percent))

(defn mult-round [m n]
  (Math/round (/ (Math/round (* 100 (* (Math/round (/ n m)) m))) 100))
  )

(defn pair-round [n]
  (mult-round (/ 100 6) n))

(defn suited-round [n]
  (mult-round 25 n))

(defn offsuit-round [n]
  (let [p (pair-round n)
        s (suited-round n)]
    (first (min-key second [p (Math/abs (- p n))] [s (Math/abs (- s n))]))
      )
  )

(defn drop-min [act]
  (let [d (apply min-key (juxt second first) act)]
    (update-vals (dissoc act (first d)) #(+ % (/ (second d) 2)))
    ))

(defn drop-third [act]
  (if (> (count act) 2) (drop-min act) act))

(defn round-hand [h]
  (let [hand (name (key h))
        act (drop-third (val h))
        rnd (if (= (first hand) (second hand))
              pair-round
              (if (= (last hand) "s") suited-round offsuit-round))]
    (vector (key h) (update-vals act rnd))
  ))

(defn simplify-strat [strat]
  (ordered-map (map round-hand strat)))

(defn group-by-action [strat]
  (update-vals (group-by #(into {} (filter (comp pos? val) (val %))) strat) #(map first %)))

(defn act-str [act]
(str/join "/" (remove str/blank? (map (fn [[k v]] (if (> v 0) (str (str/capitalize (name k))"(" (round-two v) "%)"))) act))))

(defn group-adjacent
  [nums]
  (->> nums
       (sort-by #((comp - rank-value) (second (name %))))
       (map-indexed vector)
       (partition-by (fn [[i n]] (+ (rank-value (second (name n))) i)))
       (map (partial mapv second))))

(defn top? [h]
  (or (= h :AA) (= (- (rank-value (first (name h))) (rank-value (second (name h)))) 1)))

(defn abbreviate [hands]
  (if (= (count hands) 1)
    (name (first hands))
    (if (top? (first hands))
      (str (name (last hands)) "+")
      (str (name (first hands)) "-" (name (last hands))))))

(defn group-range [r]
  (update-vals (group-by #(hand-type (name %)) r) (partial group-by #(first (name %)))))

(defn abbrv-pairs [hands]
  (map abbreviate (group-adjacent (flatten (mapv val hands)))))

(defn abbrv-nopairs [hands]
  (map abbreviate (apply concat (map second (sort-by (fn [[k v]] ((comp - rank-value) k)) (update-vals hands group-adjacent))))))

(defn abbrv-range [range]
(as-> range r
 (group-range r)
 (update r :pair abbrv-pairs)
 (update r :suited abbrv-nopairs)
 (update r :offsuit abbrv-nopairs)
 (map second r)
 (flatten r)
 (str/join ", " r)))

(set (keys (filter (comp pos? val) {:raise 100 :call 0 :fold 0})))

(defn abbrv-strat [strat]
  (as-> strat r
    (group-by-action r)
    (update-vals r abbrv-range)
    (sort-by (fn [[k v]]
               (let [raise-pct (get k :raise 0)
                     call-pct (get k :call 0)]
                 (cond
                   (> raise-pct 0) [0 (- raise-pct) (- call-pct)]
                   (> call-pct 0) [1 0 (- call-pct)]
                   :else [2 0 0]))) r)
    (mapv (fn [[k v]] [(act-str k) v]) r)
    (mapv (fn [[k v]] (str k ": " v)) r)))

;; Range-based encoding uses existing range compression functions

(defn encode-percentage [pct]
  "Encode percentage as integer with 2 decimal places (0-10000)"
  (Math/round (* pct 100)))

(defn decode-percentage [encoded]
  "Decode percentage from integer back to float"
  (/ encoded 100.0))

(defn encode-strategy [strat]
  "Encode strategy as diff from all-fold using range compression"
  (try
    (let [;; Only encode hands that differ from all-fold (100% fold)
          non-fold-hands (filter (fn [[hand actions]]
                                   (not (and (= (:raise actions 0) 0)
                                            (= (:call actions 0) 0)
                                            (= (:fold actions 100) 100)))) strat)
          ;; Group non-fold hands by action profile
          action-groups (group-by (fn [[hand actions]] 
                                    {:raise (:raise actions 0) 
                                     :call (:call actions 0)
                                     :fold (:fold actions 100)}) non-fold-hands)
          encoded-groups (map (fn [[actions hand-entries]]
                                (let [raise-pct (encode-percentage (:raise actions))
                                      call-pct (encode-percentage (:call actions))
                                      hands (map first hand-entries)
                                      range-str (abbrv-range hands)]
                                  (str raise-pct "," call-pct ":" range-str))) action-groups)]
      (str/join "|" encoded-groups))
    (catch :default e
      (js/console.error "Error encoding strategy:" e)
      "")))

(defn decode-strategy [encoded-str]
  "Decode strategy from range-compressed format"
  (if (str/blank? encoded-str)
    all-fold
    (try
      (let [action-groups (str/split encoded-str #"\|")
            decoded-actions (mapcat (fn [group]
                                      (let [[action-str range-str] (str/split group #":" 2)
                                            [raise-str call-str] (str/split action-str #",")
                                            raise-pct (decode-percentage (js/parseInt raise-str))
                                            call-pct (decode-percentage (js/parseInt call-str))
                                            fold-pct (- 100 raise-pct call-pct)
                                            hands (hand-ranges (str/split range-str #",\s*"))
                                            actions {:raise raise-pct :call call-pct :fold fold-pct}]
                                        (map #(vector (keyword %) actions) hands))) action-groups)]
        (apply assoc all-fold (flatten decoded-actions)))
      (catch :default e
        (js/console.error "Error decoding strategy:" e encoded-str)
        all-fold))))

