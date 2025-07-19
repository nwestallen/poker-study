(ns app.utils.tablelogic
  (:require [clojure.string :as str]))

(defn zip-play
  "Return a vector of [seat action] pairs.
   `seats`   – ordered collection of still‑in players
   `actions` – finite sequence of actions (:bet :raise :call :fold …)"
  [seats actions]
  (loop [t   (vec seats)   ; current table
         a   actions       ; remaining actions
         out []]           ; accumulated result
    (if (or (empty? t) (empty? a))
      out                                         ; finished
      (let [s  (first t)                          ; seat to act
            x  (first a)                          ; its action
            t' (if (= x :fold)                    ; updated table
                 (subvec t 1)
                 (conj (subvec t 1) s))]
        (recur t' (rest a) (conj out [s x]))))))  ; tail recursion

(defn chips [amount]
  (let [denominations [100 25 5 1]]
  (mapv #(quot %1 %2) (reductions #(rem %1 %2) amount denominations) denominations)
  ))

(defn stack
  [chips]
  (->> chips
       (reductions + 0)
       (partition 2 1)
       (mapv (fn [[start end]]
               (vec (range start end))))))

(defn stack-chips [amount]
(apply concat (map (fn [[k v]] (map #(vector k %) v)) (zipmap [:Blue :Red :Green :Black] (stack (reverse (chips amount)))))))

(defn parse-actions [act-str]
  (loop [s (str/split act-str "-") r [] b 0]
    (if (empty? s)
      r
      (let [act (first s)]
      (recur (rest s)
             (conj r (if (= act "F") :fold (if (= (first act) "R")
                                             (parse-double (apply str (rest act)))
                                             (if (= act "C") b 0))))
             (if (= (first act) "R") (parse-double (apply str (rest act))) b)))
      )
    ))

