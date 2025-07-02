(ns app.utils.strategy
  (:require [cljs-bean.core :refer [->clj ->js]]
            [clojure.string :as str]
            [flatland.ordered.map :refer [ordered-map]]))

(def old-fold
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
    {:hand "A2o" :act {:fold 100}} {:hand "K2o" :act {:fold 100}} {:hand "Q2o" :act {:fold 100}} {:hand "J2o" :act {:fold 100}} {:hand "T2o" :act {:fold 100}} {:hand "92o" :act {:fold 100}} {:hand "82o" :act {:fold 100}} {:hand "72o" :act {:fold 100}} {:hand "62o" :act {:fold 100}} {:hand "52o" :act {:fold 100}} {:hand "42o" :act {:fold 100}} {:hand "32o" :act {:fold 100}} {:hand "22" :act {:fold 100}}
   ])

(defn keyed-strat [strat]
  (apply merge (map #(ordered-map (keyword (:hand %)) (:act %)) strat)))

(def all-fold (keyed-strat old-fold))

(def blank-strat (ordered-map (map #(vector (key %) {}) all-fold)))

blank-strat

all-fold

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
  (flatten (into () (apply merge-with merge ranges)))
  )

(defn convert-ranges [{:keys [raise call fold]}]
  (strategy blank-strat
  (consolidate-ranges (parse-hands raise :raise)
                      (parse-hands call :call)
                      (parse-hands fold :fold))))

(def raiseAA '(:AA {:raise 100}))

raiseAA
(count (strategy all-fold raiseAA))
;;(count (strategy all-fold (flatten (into () (parse-hands raise-range :raise)))))


(def raise-range "7d7c: 0.003,7h7c: 0.003,7h7d: 0.003,7s7c: 0.003,7s7d: 0.003,7s7h: 0.003,8d8c: 0.00800000028,8h8c: 0.00800000028,8h8d: 0.00800000028,8s8c: 0.00800000028,8s8d: 0.00800000028,8s8h: 0.00800000028,9d9c: 0.036000003,9h9c: 0.036000003,9h9d: 0.036000003,9s9c: 0.036000003,9s9d: 0.036000003,9s9h: 0.036000003,TdTc: 0.1310000013,ThTc: 0.1310000013,ThTd: 0.1310000013,TsTc: 0.1310000013,TsTd: 0.1310000013,TsTh: 0.1310000013,JcTd: 0.02,JcTh: 0.02,JcTs: 0.02,JdTc: 0.02,JdTh: 0.02,JdTs: 0.02,JdJc: 0.1389999957,JhTc: 0.02,JhTd: 0.02,JhTs: 0.02,JhJc: 0.1389999957,JhJd: 0.1389999957,JsTc: 0.02,JsTd: 0.02,JsTh: 0.02,JsJc: 0.1389999957,JsJd: 0.1389999957,JsJh: 0.1389999957,QcJd: 0.003,QcJh: 0.003,QcJs: 0.003,QdJc: 0.003,QdJh: 0.003,QdJs: 0.003,QdQc: 0.255,QhJc: 0.003,QhJd: 0.003,QhJs: 0.003,QhQc: 0.255,QhQd: 0.255,QsJc: 0.003,QsJd: 0.003,QsJh: 0.003,QsQc: 0.255,QsQd: 0.255,QsQh: 0.255,Kc3c: 0.015,Kc4c: 0.07,Kc5c: 0.06,KcTd: 0.054000001,KcTh: 0.054000001,KcTs: 0.054000001,KcJd: 0.08399999916,KcJh: 0.08399999916,KcJs: 0.08399999916,KcQd: 0.0950000022,KcQh: 0.0950000022,KcQs: 0.0950000022,Kd3d: 0.015,Kd4d: 0.07,Kd5d: 0.06,KdTc: 0.054000001,KdTh: 0.054000001,KdTs: 0.054000001,KdJc: 0.08399999916,KdJh: 0.08399999916,KdJs: 0.08399999916,KdQc: 0.0950000022,KdQh: 0.0950000022,KdQs: 0.0950000022,KdKc: 0.235,Kh3h: 0.015,Kh4h: 0.07,Kh5h: 0.06,KhTc: 0.054000001,KhTd: 0.054000001,KhTs: 0.054000001,KhJc: 0.08399999916,KhJd: 0.08399999916,KhJs: 0.08399999916,KhQc: 0.0950000022,KhQd: 0.0950000022,KhQs: 0.0950000022,KhKc: 0.235,KhKd: 0.235,Ks3s: 0.015,Ks4s: 0.07,Ks5s: 0.06,KsTc: 0.054000001,KsTd: 0.054000001,KsTh: 0.054000001,KsJc: 0.08399999916,KsJd: 0.08399999916,KsJh: 0.08399999916,KsQc: 0.0950000022,KsQd: 0.0950000022,KsQh: 0.0950000022,KsKc: 0.235,KsKd: 0.235,KsKh: 0.235,Ac5d: 0.0420000003,Ac5h: 0.0420000003,Ac5s: 0.0420000003,Ac9d: 0.029,Ac9h: 0.029,Ac9s: 0.029,AcTd: 0.1289999958,AcTh: 0.1289999958,AcTs: 0.1289999958,AcJd: 0.1540000011,AcJh: 0.1540000011,AcJs: 0.1540000011,AcQc: 0.23,AcQd: 0.11099999988,AcQh: 0.11099999988,AcQs: 0.11099999988,AcKc: 0.48,AcKd: 0.126000001,AcKh: 0.126000001,AcKs: 0.126000001,Ad5c: 0.0420000003,Ad5h: 0.0420000003,Ad5s: 0.0420000003,Ad9c: 0.029,Ad9h: 0.029,Ad9s: 0.029,AdTc: 0.1289999958,AdTh: 0.1289999958,AdTs: 0.1289999958,AdJc: 0.1540000011,AdJh: 0.1540000011,AdJs: 0.1540000011,AdQc: 0.11099999988,AdQd: 0.23,AdQh: 0.11099999988,AdQs: 0.11099999988,AdKc: 0.126000001,AdKd: 0.48,AdKh: 0.126000001,AdKs: 0.126000001,AdAc: 0.295,Ah5c: 0.0420000003,Ah5d: 0.0420000003,Ah5s: 0.0420000003,Ah9c: 0.029,Ah9d: 0.029,Ah9s: 0.029,AhTc: 0.1289999958,AhTd: 0.1289999958,AhTs: 0.1289999958,AhJc: 0.1540000011,AhJd: 0.1540000011,AhJs: 0.1540000011,AhQc: 0.11099999988,AhQd: 0.11099999988,AhQh: 0.23,AhQs: 0.11099999988,AhKc: 0.126000001,AhKd: 0.126000001,AhKh: 0.48,AhKs: 0.126000001,AhAc: 0.295,AhAd: 0.295,As5c: 0.0420000003,As5d: 0.0420000003,As5h: 0.0420000003,As9c: 0.029,As9d: 0.029,As9h: 0.029,AsTc: 0.1289999958,AsTd: 0.1289999958,AsTh: 0.1289999958,AsJc: 0.1540000011,AsJd: 0.1540000011,AsJh: 0.1540000011,AsQc: 0.11099999988,AsQd: 0.11099999988,AsQh: 0.11099999988,AsQs: 0.23,AsKc: 0.126000001,AsKd: 0.126000001,AsKh: 0.126000001,AsKs: 0.48,AsAc: 0.295,AsAd: 0.295,AsAh: 0.295")

(def call-range "4d4c: 0.005,4h4c: 0.005,4h4d: 0.005,4s4c: 0.005,4s4d: 0.005,4s4h: 0.005,5c4c: 0.265,5d4d: 0.265,5d5c: 0.03,5h4h: 0.265,5h5c: 0.03,5h5d: 0.03,5s4s: 0.265,5s5c: 0.03,5s5d: 0.03,5s5h: 0.03,6c5c: 0.235,6d5d: 0.235,6d6c: 0.065,6h5h: 0.235,6h6c: 0.065,6h6d: 0.065,6s5s: 0.235,6s6c: 0.065,6s6d: 0.065,6s6h: 0.065,7c5c: 0.045000003,7c6c: 0.2,7d5d: 0.045000003,7d6d: 0.2,7d7c: 0.122,7h5h: 0.045000003,7h6h: 0.2,7h7c: 0.122,7h7d: 0.122,7s5s: 0.045000003,7s6s: 0.2,7s7c: 0.122,7s7d: 0.122,7s7h: 0.122,8c6c: 0.18,8c7c: 0.15,8d6d: 0.18,8d7d: 0.15,8d8c: 0.1720000008,8h6h: 0.18,8h7h: 0.15,8h8c: 0.1720000008,8h8d: 0.1720000008,8s6s: 0.18,8s7s: 0.15,8s8c: 0.1720000008,8s8d: 0.1720000008,8s8h: 0.1720000008,9c7c: 0.055,9c8c: 0.1,9d7d: 0.055,9d8d: 0.1,9d9c: 0.2240000022,9h7h: 0.055,9h8h: 0.1,9h9c: 0.2240000022,9h9d: 0.2240000022,9s7s: 0.055,9s8s: 0.1,9s9c: 0.2240000022,9s9d: 0.2240000022,9s9h: 0.2240000022,Tc8c: 0.095,Tc9c: 0.285,Td8d: 0.095,Td9d: 0.285,TdTc: 0.184000005,Th8h: 0.095,Th9h: 0.285,ThTc: 0.184000005,ThTd: 0.184000005,Ts8s: 0.095,Ts9s: 0.285,TsTc: 0.184000005,TsTd: 0.184000005,TsTh: 0.184000005,Jc9c: 0.185,JcTc: 0.525,Jd9d: 0.185,JdTd: 0.525,JdJc: 0.1510000043,Jh9h: 0.185,JhTh: 0.525,JhJc: 0.1510000043,JhJd: 0.1510000043,Js9s: 0.185,JsTs: 0.525,JsJc: 0.1510000043,JsJd: 0.1510000043,JsJh: 0.1510000043,Qc8c: 0.075,Qc9c: 0.09,QcTc: 0.5,QcJc: 0.58,QcJd: 0.007,QcJh: 0.007,QcJs: 0.007,Qd8d: 0.075,Qd9d: 0.09,QdTd: 0.5,QdJc: 0.007,QdJd: 0.58,QdJh: 0.007,QdJs: 0.007,Qh8h: 0.075,Qh9h: 0.09,QhTh: 0.5,QhJc: 0.007,QhJd: 0.007,QhJh: 0.58,QhJs: 0.007,Qs8s: 0.075,Qs9s: 0.09,QsTs: 0.5,QsJc: 0.007,QsJd: 0.007,QsJh: 0.007,QsJs: 0.58,Kc6c: 0.025,Kc7c: 0.125,Kc8c: 0.175,Kc9c: 0.22,KcTc: 0.485,KcTd: 0.00099999999,KcTh: 0.00099999999,KcTs: 0.00099999999,KcJc: 0.59,KcJd: 0.01699999983,KcJh: 0.01699999983,KcJs: 0.01699999983,KcQc: 0.625,KcQd: 0.0599999978,KcQh: 0.0599999978,KcQs: 0.0599999978,Kd6d: 0.025,Kd7d: 0.125,Kd8d: 0.175,Kd9d: 0.22,KdTc: 0.00099999999,KdTd: 0.485,KdTh: 0.00099999999,KdTs: 0.00099999999,KdJc: 0.01699999983,KdJd: 0.59,KdJh: 0.01699999983,KdJs: 0.01699999983,KdQc: 0.0599999978,KdQd: 0.625,KdQh: 0.0599999978,KdQs: 0.0599999978,Kh6h: 0.025,Kh7h: 0.125,Kh8h: 0.175,Kh9h: 0.22,KhTc: 0.00099999999,KhTd: 0.00099999999,KhTh: 0.485,KhTs: 0.00099999999,KhJc: 0.01699999983,KhJd: 0.01699999983,KhJh: 0.59,KhJs: 0.01699999983,KhQc: 0.0599999978,KhQd: 0.0599999978,KhQh: 0.625,KhQs: 0.0599999978,Ks6s: 0.025,Ks7s: 0.125,Ks8s: 0.175,Ks9s: 0.22,KsTc: 0.00099999999,KsTd: 0.00099999999,KsTh: 0.00099999999,KsTs: 0.485,KsJc: 0.01699999983,KsJd: 0.01699999983,KsJh: 0.01699999983,KsJs: 0.59,KsQc: 0.0599999978,KsQd: 0.0599999978,KsQh: 0.0599999978,KsQs: 0.625,Ac3c: 0.005,Ac4c: 0.0939999984,Ac5c: 0.308,Ac6c: 0.095,Ac7c: 0.315,Ac8c: 0.46,Ac9c: 0.475,AcTc: 0.655,AcTd: 0.001000000001,AcTh: 0.001000000001,AcTs: 0.001000000001,AcJc: 0.605,AcJd: 0.01100000055,AcJh: 0.01100000055,AcJs: 0.01100000055,AcQd: 0.183000006,AcQh: 0.183000006,AcQs: 0.183000006,Ad3d: 0.005,Ad4d: 0.0939999984,Ad5d: 0.308,Ad6d: 0.095,Ad7d: 0.315,Ad8d: 0.46,Ad9d: 0.475,AdTc: 0.001000000001,AdTd: 0.655,AdTh: 0.001000000001,AdTs: 0.001000000001,AdJc: 0.01100000055,AdJd: 0.605,AdJh: 0.01100000055,AdJs: 0.01100000055,AdQc: 0.183000006,AdQh: 0.183000006,AdQs: 0.183000006,Ah3h: 0.005,Ah4h: 0.0939999984,Ah5h: 0.308,Ah6h: 0.095,Ah7h: 0.315,Ah8h: 0.46,Ah9h: 0.475,AhTc: 0.001000000001,AhTd: 0.001000000001,AhTh: 0.655,AhTs: 0.001000000001,AhJc: 0.01100000055,AhJd: 0.01100000055,AhJh: 0.605,AhJs: 0.01100000055,AhQc: 0.183000006,AhQd: 0.183000006,AhQs: 0.183000006,As3s: 0.005,As4s: 0.0939999984,As5s: 0.308,As6s: 0.095,As7s: 0.315,As8s: 0.46,As9s: 0.475,AsTc: 0.001000000001,AsTd: 0.001000000001,AsTh: 0.001000000001,AsTs: 0.655,AsJc: 0.01100000055,AsJd: 0.01100000055,AsJh: 0.01100000055,AsJs: 0.605,AsQc: 0.183000006,AsQd: 0.183000006,AsQh: 0.183000006")

(def fold-range "4c2c: 0.13,4c3c: 0.155,4d2d: 0.13,4d3d: 0.155,4h2h: 0.13,4h3h: 0.155,4s2s: 0.13,4s3s: 0.155,5c2c: 0.23,5c3c: 0.255,5d2d: 0.23,5d3d: 0.255,5h2h: 0.23,5h3h: 0.255,5s2s: 0.23,5s3s: 0.255,6c3c: 0.215,6c4c: 0.255,6c5d: 0.03,6c5h: 0.03,6c5s: 0.03,6d3d: 0.215,6d4d: 0.255,6d5c: 0.03,6d5h: 0.03,6d5s: 0.03,6h3h: 0.215,6h4h: 0.255,6h5c: 0.03,6h5d: 0.03,6h5s: 0.03,6s3s: 0.215,6s4s: 0.255,6s5c: 0.03,6s5d: 0.03,6s5h: 0.03,7c3c: 0.105,7c4c: 0.2,7c5c: 0.0400000004,7c6d: 0.12,7c6h: 0.12,7c6s: 0.12,7d3d: 0.105,7d4d: 0.2,7d5d: 0.0400000004,7d6c: 0.12,7d6h: 0.12,7d6s: 0.12,7h3h: 0.105,7h4h: 0.2,7h5h: 0.0400000004,7h6c: 0.12,7h6d: 0.12,7h6s: 0.12,7s3s: 0.105,7s4s: 0.2,7s5s: 0.0400000004,7s6c: 0.12,7s6d: 0.12,7s6h: 0.12,8c4c: 0.24,8c5c: 0.165,8c6d: 0.01,8c6h: 0.01,8c6s: 0.01,8c7d: 0.14,8c7h: 0.14,8c7s: 0.14,8d4d: 0.24,8d5d: 0.165,8d6c: 0.01,8d6h: 0.01,8d6s: 0.01,8d7c: 0.14,8d7h: 0.14,8d7s: 0.14,8h4h: 0.24,8h5h: 0.165,8h6c: 0.01,8h6d: 0.01,8h6s: 0.01,8h7c: 0.14,8h7d: 0.14,8h7s: 0.14,8s4s: 0.24,8s5s: 0.165,8s6c: 0.01,8s6d: 0.01,8s6h: 0.01,8s7c: 0.14,8s7d: 0.14,8s7h: 0.14,9c4c: 0.205,9c5c: 0.26,9c6c: 0.075,9c7d: 0.16,9c7h: 0.16,9c7s: 0.16,9c8d: 0.175,9c8h: 0.175,9c8s: 0.175,9d4d: 0.205,9d5d: 0.26,9d6d: 0.075,9d7c: 0.16,9d7h: 0.16,9d7s: 0.16,9d8c: 0.175,9d8h: 0.175,9d8s: 0.175,9h4h: 0.205,9h5h: 0.26,9h6h: 0.075,9h7c: 0.16,9h7d: 0.16,9h7s: 0.16,9h8c: 0.175,9h8d: 0.175,9h8s: 0.175,9s4s: 0.205,9s5s: 0.26,9s6s: 0.075,9s7c: 0.16,9s7d: 0.16,9s7h: 0.16,9s8c: 0.175,9s8d: 0.175,9s8h: 0.175,Tc2c: 0.115,Tc3c: 0.17,Tc4c: 0.225,Tc5c: 0.215,Tc6c: 0.185,Tc7d: 0.18,Tc7h: 0.18,Tc7s: 0.18,Tc8d: 0.195,Tc8h: 0.195,Tc8s: 0.195,Tc9d: 0.115,Tc9h: 0.115,Tc9s: 0.115,Td2d: 0.115,Td3d: 0.17,Td4d: 0.225,Td5d: 0.215,Td6d: 0.185,Td7c: 0.18,Td7h: 0.18,Td7s: 0.18,Td8c: 0.195,Td8h: 0.195,Td8s: 0.195,Td9c: 0.115,Td9h: 0.115,Td9s: 0.115,Th2h: 0.115,Th3h: 0.17,Th4h: 0.225,Th5h: 0.215,Th6h: 0.185,Th7c: 0.18,Th7d: 0.18,Th7s: 0.18,Th8c: 0.195,Th8d: 0.195,Th8s: 0.195,Th9c: 0.115,Th9d: 0.115,Th9s: 0.115,Ts2s: 0.115,Ts3s: 0.17,Ts4s: 0.225,Ts5s: 0.215,Ts6s: 0.185,Ts7c: 0.18,Ts7d: 0.18,Ts7h: 0.18,Ts8c: 0.195,Ts8d: 0.195,Ts8h: 0.195,Ts9c: 0.115,Ts9d: 0.115,Ts9h: 0.115,Jc2c: 0.14,Jc3c: 0.14,Jc4c: 0.21,Jc5c: 0.13,Jc6c: 0.19,Jc7d: 0.13,Jc7h: 0.13,Jc7s: 0.13,Jc8d: 0.235,Jc8h: 0.235,Jc8s: 0.235,Jc9d: 0.155,Jc9h: 0.155,Jc9s: 0.155,Jd2d: 0.14,Jd3d: 0.14,Jd4d: 0.21,Jd5d: 0.13,Jd6d: 0.19,Jd7c: 0.13,Jd7h: 0.13,Jd7s: 0.13,Jd8c: 0.235,Jd8h: 0.235,Jd8s: 0.235,Jd9c: 0.155,Jd9h: 0.155,Jd9s: 0.155,Jh2h: 0.14,Jh3h: 0.14,Jh4h: 0.21,Jh5h: 0.13,Jh6h: 0.19,Jh7c: 0.13,Jh7d: 0.13,Jh7s: 0.13,Jh8c: 0.235,Jh8d: 0.235,Jh8s: 0.235,Jh9c: 0.155,Jh9d: 0.155,Jh9s: 0.155,Js2s: 0.14,Js3s: 0.14,Js4s: 0.21,Js5s: 0.13,Js6s: 0.19,Js7c: 0.13,Js7d: 0.13,Js7h: 0.13,Js8c: 0.235,Js8d: 0.235,Js8h: 0.235,Js9c: 0.155,Js9d: 0.155,Js9h: 0.155,Qc2c: 0.07,Qc3c: 0.09,Qc4c: 0.105,Qc5d: 0.065,Qc5h: 0.065,Qc5s: 0.065,Qc6d: 0.105,Qc6h: 0.105,Qc6s: 0.105,Qc7d: 0.105,Qc7h: 0.105,Qc7s: 0.105,Qc8d: 0.19,Qc8h: 0.19,Qc8s: 0.19,Qc9d: 0.165,Qc9h: 0.165,Qc9s: 0.165,QcTd: 0.015,QcTh: 0.015,QcTs: 0.015,Qd2d: 0.07,Qd3d: 0.09,Qd4d: 0.105,Qd5c: 0.065,Qd5h: 0.065,Qd5s: 0.065,Qd6c: 0.105,Qd6h: 0.105,Qd6s: 0.105,Qd7c: 0.105,Qd7h: 0.105,Qd7s: 0.105,Qd8c: 0.19,Qd8h: 0.19,Qd8s: 0.19,Qd9c: 0.165,Qd9h: 0.165,Qd9s: 0.165,QdTc: 0.015,QdTh: 0.015,QdTs: 0.015,Qh2h: 0.07,Qh3h: 0.09,Qh4h: 0.105,Qh5c: 0.065,Qh5d: 0.065,Qh5s: 0.065,Qh6c: 0.105,Qh6d: 0.105,Qh6s: 0.105,Qh7c: 0.105,Qh7d: 0.105,Qh7s: 0.105,Qh8c: 0.19,Qh8d: 0.19,Qh8s: 0.19,Qh9c: 0.165,Qh9d: 0.165,Qh9s: 0.165,QhTc: 0.015,QhTd: 0.015,QhTs: 0.015,Qs2s: 0.07,Qs3s: 0.09,Qs4s: 0.105,Qs5c: 0.065,Qs5d: 0.065,Qs5h: 0.065,Qs6c: 0.105,Qs6d: 0.105,Qs6h: 0.105,Qs7c: 0.105,Qs7d: 0.105,Qs7h: 0.105,Qs8c: 0.19,Qs8d: 0.19,Qs8h: 0.19,Qs9c: 0.165,Qs9d: 0.165,Qs9h: 0.165,QsTc: 0.015,QsTd: 0.015,QsTh: 0.015,Kc5d: 0.145,Kc5h: 0.145,Kc5s: 0.145,Kc6d: 0.18,Kc6h: 0.18,Kc6s: 0.18,Kc7d: 0.11,Kc7h: 0.11,Kc7s: 0.11,Kc8d: 0.16,Kc8h: 0.16,Kc8s: 0.16,Kc9d: 0.19,Kc9h: 0.19,Kc9s: 0.19,Kd5c: 0.145,Kd5h: 0.145,Kd5s: 0.145,Kd6c: 0.18,Kd6h: 0.18,Kd6s: 0.18,Kd7c: 0.11,Kd7h: 0.11,Kd7s: 0.11,Kd8c: 0.16,Kd8h: 0.16,Kd8s: 0.16,Kd9c: 0.19,Kd9h: 0.19,Kd9s: 0.19,Kh5c: 0.145,Kh5d: 0.145,Kh5s: 0.145,Kh6c: 0.18,Kh6d: 0.18,Kh6s: 0.18,Kh7c: 0.11,Kh7d: 0.11,Kh7s: 0.11,Kh8c: 0.16,Kh8d: 0.16,Kh8s: 0.16,Kh9c: 0.19,Kh9d: 0.19,Kh9s: 0.19,Ks5c: 0.145,Ks5d: 0.145,Ks5h: 0.145,Ks6c: 0.18,Ks6d: 0.18,Ks6h: 0.18,Ks7c: 0.11,Ks7d: 0.11,Ks7h: 0.11,Ks8c: 0.16,Ks8d: 0.16,Ks8h: 0.16,Ks9c: 0.19,Ks9d: 0.19,Ks9h: 0.19,Ac2d: 0.05,Ac2h: 0.05,Ac2s: 0.05,Ac3d: 0.09,Ac3h: 0.09,Ac3s: 0.09,Ac4d: 0.09,Ac4h: 0.09,Ac4s: 0.09,Ac5d: 0.0480000024,Ac5h: 0.0480000024,Ac5s: 0.0480000024,Ac6d: 0.18,Ac6h: 0.18,Ac6s: 0.18,Ac7d: 0.17,Ac7h: 0.17,Ac7s: 0.17,Ac8d: 0.17,Ac8h: 0.17,Ac8s: 0.17,Ac9d: 0.131,Ac9h: 0.131,Ac9s: 0.131,Ad2c: 0.05,Ad2h: 0.05,Ad2s: 0.05,Ad3c: 0.09,Ad3h: 0.09,Ad3s: 0.09,Ad4c: 0.09,Ad4h: 0.09,Ad4s: 0.09,Ad5c: 0.0480000024,Ad5h: 0.0480000024,Ad5s: 0.0480000024,Ad6c: 0.18,Ad6h: 0.18,Ad6s: 0.18,Ad7c: 0.17,Ad7h: 0.17,Ad7s: 0.17,Ad8c: 0.17,Ad8h: 0.17,Ad8s: 0.17,Ad9c: 0.131,Ad9h: 0.131,Ad9s: 0.131,Ah2c: 0.05,Ah2d: 0.05,Ah2s: 0.05,Ah3c: 0.09,Ah3d: 0.09,Ah3s: 0.09,Ah4c: 0.09,Ah4d: 0.09,Ah4s: 0.09,Ah5c: 0.0480000024,Ah5d: 0.0480000024,Ah5s: 0.0480000024,Ah6c: 0.18,Ah6d: 0.18,Ah6s: 0.18,Ah7c: 0.17,Ah7d: 0.17,Ah7s: 0.17,Ah8c: 0.17,Ah8d: 0.17,Ah8s: 0.17,Ah9c: 0.131,Ah9d: 0.131,Ah9s: 0.131,As2c: 0.05,As2d: 0.05,As2h: 0.05,As3c: 0.09,As3d: 0.09,As3h: 0.09,As4c: 0.09,As4d: 0.09,As4h: 0.09,As5c: 0.0480000024,As5d: 0.0480000024,As5h: 0.0480000024,As6c: 0.18,As6d: 0.18,As6h: 0.18,As7c: 0.17,As7d: 0.17,As7h: 0.17,As8c: 0.17,As8d: 0.17,As8h: 0.17,As9c: 0.131,As9d: 0.131,As9h: 0.131")


