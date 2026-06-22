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
  (loop [s (remove str/blank? (str/split act-str "-")) r [] b 0]
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

(defn next-to-act
  "Seat whose turn is next after applying `actions` (already parsed) to `seats`.
   Rotates the table like `zip-play`; returns the seat at the front once actions
   are exhausted, or the first seat for an empty action sequence."
  [seats actions]
  (loop [t (vec seats) a actions]
    (if (or (empty? t) (empty? a))
      (first t)
      (let [s  (first t)
            x  (first a)
            t' (if (= x :fold) (subvec t 1) (conj (subvec t 1) s))]
        (recur t' (rest a))))))

(defn derive-table-state
  "Pure table state from `seats`, `stack-size`, and an action string.
   Seeds the blinds (SB 0.5, BB 1), expands `AI` to the stack size, then folds the
   parsed plays into chip stacks, posted bets, folded seats, and the next seat to
   act. Returns {:stacks :bets :folds :active-seat}."
  [seats stack-size actions]
  (let [acts        (parse-actions (str/replace actions #"AI" (str stack-size)))
        init-bets   (merge (zipmap seats (repeat 0)) {:SB 0.5 :BB 1})
        init-stacks (merge (zipmap seats (repeat stack-size))
                           {:SB (- stack-size 0.5) :BB (- stack-size 1)})
        plays       (zip-play seats acts)
        folds       (into #{} (keep (fn [[s a]] (when (= a :fold) s)) plays))
        bets        (reduce (fn [m [s a]] (if (= a :fold) m (assoc m s a))) init-bets plays)
        stacks      (reduce (fn [m [s a]] (if (= a :fold) m (assoc m s (- stack-size a)))) init-stacks plays)]
    {:stacks stacks :bets bets :folds folds
     :active-seat (next-to-act seats acts)}))

(def seatnames
  {
   :10 [:UTG :UTG1 :UTG2 :UTG3 :LJ :HJ :CO :BTN :SB :BB]
   :9 [:UTG :UTG1 :UTG2 :LJ :HJ :CO :BTN :SB :BB]
   :8 [:UTG :UTG1 :LJ :HJ :CO :BTN :SB :BB]
   :7 [:UTG :LJ :HJ :CO :BTN :SB :BB]
   :6 [:LJ :HJ :CO :BTN :SB :BB]
   :5 [:HJ :CO :BTN :SB :BB]
   :4 [:CO :BTN :SB :BB]
   :3 [:BTN :SB :BB]
   :2 [:SB :BB]
   })

