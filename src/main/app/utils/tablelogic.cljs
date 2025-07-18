(ns app.utils.tablelogic)

;;Action URL: F-F-F-F-F-F-F-R3.5-R12.5

(def positions [:SB :BB :UTG :UTG1 :UTG2 :LJ :HJ :CO :BTN ])

(def action-seq '(:bet :raise :fold :fold :raise :fold :fold :call :fold :raise :call :call :call))

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

(zip-play positions action-seq)

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

;; for the result of 'deal'(rename), doseq: -increment corresponding bet value, -decrement corresponding stack value
;; bets and stacks must therefore be stateful slices within th epokertable component
;; at some point, go through this project and annotate all fucntions with side-effects with '!'
;; raise and call amounts should be specified; call amount equal to last raise amount
