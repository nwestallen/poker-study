(ns app.utils.scenarios
  (:require [flatland.ordered.map :refer [ordered-map]]
            [clojure.edn :as edn]
            [clojure.string :as str]))

(defn create-scenario
  "Create a scenario map with title, table configuration, and strategy"
  [title table-config strategy]
  {:title title
   :table table-config
   :strategy strategy})

(defn scenario->edn-string
  "Convert a scenario to EDN string format for saving"
  [scenario]
  (binding [*print-readably* true
            *print-meta* true]
    (pr-str scenario)))

(defn edn-string->scenario
  "Parse EDN string back to scenario map"
  [edn-str]
  (try
    (edn/read-string {:readers {'ordered/map ordered-map
                               'ordered/set #(into (ordered-map) %)}}
                     edn-str)
    (catch :default e
      (js/console.error "Failed to parse scenario EDN:" e)
      nil)))

(defn validate-scenario
  "Validate that a scenario has required fields"
  [scenario]
  (and (map? scenario)
       (string? (:title scenario))
       (string? (:table scenario))
       (map? (:strategy scenario))))

(defn save-scenario-to-local-storage
  "Save scenario to browser local storage with a key"
  [scenario-key scenario]
  (when (validate-scenario scenario)
    (let [edn-str (scenario->edn-string scenario)]
      (js/localStorage.setItem (str "poker-scenario-" scenario-key) edn-str)
      true)))

(defn load-scenario-from-local-storage
  "Load scenario from browser local storage"
  [scenario-key]
  (when-let [edn-str (js/localStorage.getItem (str "poker-scenario-" scenario-key))]
    (edn-string->scenario edn-str)))

(defn list-saved-scenarios
  "List all saved scenario keys from local storage"
  []
  (->> (range (.-length js/localStorage))
       (map #(js/localStorage.key %))
       (filter #(str/starts-with? % "poker-scenario-"))
       (map #(str/replace % "poker-scenario-" ""))))

(defn delete-scenario
  "Delete a scenario from local storage"
  [scenario-key]
  (js/localStorage.removeItem (str "poker-scenario-" scenario-key)))

(defn generate-filename
  "Generate a safe filename from scenario title"
  [title]
  (-> title
      (str/replace #"[^a-zA-Z0-9\s-]" "")
      (str/replace #"\s+" "-")
      (str/lower-case)
      (str ".edn")))

(defn download-scenario
  "Create a downloadable EDN file for a scenario"
  [scenario]
  (when (validate-scenario scenario)
    (let [edn-str (scenario->edn-string scenario)
          filename (generate-filename (:title scenario))
          blob (js/Blob. #js [edn-str] #js {:type "application/edn"})
          url (js/URL.createObjectURL blob)
          link (js/document.createElement "a")]
      (set! (.-href link) url)
      (set! (.-download link) filename)
      (js/document.body.appendChild link)
      (.click link)
      (js/document.body.removeChild link)
      (js/URL.revokeObjectURL url))))

(defn upload-scenario
  "Handle file upload and parse scenario from EDN file"
  [file callback]
  (let [reader (js/FileReader.)]
    (set! (.-onload reader)
          (fn [e]
            (let [edn-str (.. e -target -result)
                  scenario (edn-string->scenario edn-str)]
              (if (validate-scenario scenario)
                (callback scenario nil)
                (callback nil "Invalid scenario format")))))
    (.readAsText reader file)))