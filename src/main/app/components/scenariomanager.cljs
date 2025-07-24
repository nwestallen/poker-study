(ns app.components.scenariomanager
  (:require [helix.core :refer [defnc $]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [shadow.css :refer [css]]
            [app.utils.scenarios :as scenarios]))

(defnc ScenarioSaver
  "Component for saving scenarios"
  [{:keys [current-scenario on-save]}]
  (let [[title set-title!] (hooks/use-state "")
        [saving? set-saving!] (hooks/use-state false)

        handle-save (fn []
                      (when-not (empty? title)
                        (set-saving! true)
                        (let [scenario (scenarios/create-scenario 
                                       title 
                                       (:table current-scenario)
                                       (:strategy current-scenario))]
                          (scenarios/save-scenario-to-local-storage title scenario)
                          (when on-save (on-save scenario))
                          (set-title! "")
                          (set-saving! false))))]

    (d/div {:class-name (css :bg-white :rounded-md :p-4 :text-xs)}
      (d/h3 {:class-name (css :text-slate-700 :mb-4 :mt-0)} "Save Current Scenario")
      (d/div {:class-name (css :mb-4)}
        (d/label {:class-name (css :text-slate-600 :block :font-semibold :mb-1)} "Title:")
        (d/input {:type "text"
                  :value title
                  :placeholder "Enter scenario title..."
                  :class-name (css :border :border-gray-300 :rounded-md :p-2 :w-full [:focus :border-sky-500 :outline-none])
                  :onChange #(set-title! (.. % -target -value))
                  :onKeyPress #(when (= (.-key %) "Enter") (handle-save))}))
      (d/div {:class-name (css :flex :gap-2)}
        (d/button {:onClick handle-save
                   :disabled (or (empty? title) saving?)
                   :class-name (css :bg-sky-500 :text-white :font-bold :px-4 :py-2 :rounded-md 
                                   [:hover :bg-sky-400 :cursor-pointer]
                                   [:disabled :bg-gray-400 :cursor-not-allowed])}
                  (if saving? "Saving..." "Save Scenario"))
        (d/button {:onClick #(scenarios/download-scenario 
                             (scenarios/create-scenario 
                              title 
                              (:table current-scenario)
                              (:strategy current-scenario)))
                   :disabled (empty? title)
                   :class-name (css :bg-sky-500 :text-white :font-bold :px-4 :py-2 :rounded-md 
                                   [:hover :bg-sky-400 :cursor-pointer]
                                   [:disabled :bg-gray-400 :cursor-not-allowed])}
                  "Download EDN")))))

(defnc ScenarioLoader
  "Component for loading scenarios"
  [{:keys [on-load]}]
  (let [[saved-scenarios set-saved-scenarios!] (hooks/use-state [])
        [loading? set-loading!] (hooks/use-state false)
        [selected-scenario set-selected-scenario!] (hooks/use-state "")

        refresh-scenarios (fn []
                           (set-saved-scenarios! (scenarios/list-saved-scenarios)))

        handle-load (fn []
                     (when-not (empty? selected-scenario)
                       (set-loading! true)
                       (when-let [scenario (scenarios/load-scenario-from-local-storage selected-scenario)]
                         (when on-load (on-load scenario)))
                       (set-loading! false)))

        handle-delete (fn []
                       (when (and (not (empty? selected-scenario))
                                  (js/confirm (str "Delete scenario: " selected-scenario "?")))
                         (scenarios/delete-scenario selected-scenario)
                         (set-selected-scenario! "")
                         (refresh-scenarios)))

        handle-file-upload (fn [e]
                            (when-let [file (first (array-seq (.. e -target -files)))]
                              (scenarios/upload-scenario 
                               file
                               (fn [scenario error]
                                 (if error
                                   (js/alert (str "Error loading file: " error))
                                   (when on-load (on-load scenario)))))))]

    (hooks/use-effect
     :once
     (refresh-scenarios)
     js/undefined)

    (d/div {:class-name (css :bg-white :rounded-md :p-4 :text-xs :shadow-md :text-shadow-sm)}
      (d/h3 {:class-name (css :text-slate-700 :mb-4 :mt-0)} "Load Scenario")

      (d/div {:class-name (css :border-b :border-gray-200 :mb-4 :pb-4)}
        (d/label {:class-name (css :text-slate-600 :block :font-semibold :mb-1)} "Upload EDN file:")
        (d/input {:type "file"
                  :accept ".edn"
                  :class-name (css :border :border-gray-300 :rounded-md :p-2 :w-full :shadow-sm)
                  :onChange handle-file-upload}))

      (d/div
        (d/div {:class-name (css :flex :justify-between :items-center :mb-2)}
          (d/h4 {:class-name (css :text-gray-700 :mb-0)} "Saved Scenarios")
          (d/button {:onClick refresh-scenarios
                     :class-name (css :bg-sky-500 :text-white :font-bold :px-3 :py-1 :rounded-md 
                                     [:hover :bg-sky-400 :cursor-pointer])} 
                    "Refresh"))

        (if (empty? saved-scenarios)
          (d/p {:class-name (css :text-gray-500 :italic)} "No saved scenarios found")
          (d/div
            (d/div {:class-name (css :mb-4)}
              (d/label {:class-name (css :text-slate-600 :block :font-semibold :mb-1)} "Select scenario:")
              (d/select {:value selected-scenario
                         :onChange #(set-selected-scenario! (.. % -target -value))
                         :class-name (css :border :border-gray-300 :rounded-md :p-2 :w-full [:focus :border-sky-500 :outline-none] :shadow-sm)}
                        (d/option {:value ""} "-- Choose a scenario --")
                        (for [scenario-key saved-scenarios]
                          (d/option {:key scenario-key :value scenario-key} scenario-key))))
            
            (d/div {:class-name (css :flex :gap-2)}
              (d/button {:onClick handle-load
                         :disabled (or (empty? selected-scenario) loading?)
                         :class-name (css :bg-sky-500 :text-white :font-bold :px-2 :py-1 :rounded-md :shadow-sm
                                         [:hover :bg-sky-400 :cursor-pointer]
                                         [:disabled :bg-gray-400 :cursor-not-allowed])}
                        (if loading? "Loading..." "Load"))
              (d/button {:onClick handle-delete
                         :disabled (empty? selected-scenario)
                         :class-name (css :bg-red-500 :text-white :font-bold :px-2 :py-1 :rounded-md :shadow-sm
                                         [:hover :bg-red-600 :cursor-pointer]
                                         [:disabled :bg-gray-400 :cursor-not-allowed])}
                        "Delete"))))))))

(defnc ScenarioManager
  "Main scenario management component"
  [{:keys [current-scenario on-scenario-change]}]
  (let [[active-tab set-active-tab!] (hooks/use-state :save)]
    (d/div {:class-name (css :h-fit {:width "500px"} :my-3 :rounded-lg :p-4 {:background-color "rgb(150 150 150)"})}
      (d/div {:class-name (css :flex :mb-4 {:border-bottom "2px solid #ccc"})}
        (d/button {:class-name (css :font-bold :mr-1 :py-2 :px-4 :text-white :border-none :cursor-pointer
                                   {:background "rgb(65 65 65)"} {:border-radius "0.375rem 0.375rem 0 0"}
                                   [:hover :bg-slate-500])
                   :onClick #(set-active-tab! :save)}
                  "Save")
        (d/button {:class-name (css :font-bold :mr-1 :py-2 :px-4 :text-white :border-none :cursor-pointer
                                   {:background "rgb(65 65 65)"} {:border-radius "0.375rem 0.375rem 0 0"}
                                   [:hover :bg-slate-500])
                   :onClick #(set-active-tab! :load)}
                  "Load"))

      (d/div
        (case active-tab
          :save ($ ScenarioSaver {:current-scenario current-scenario
                                  :on-save #(js/alert "Scenario saved successfully!")})
          :load ($ ScenarioLoader {:on-load on-scenario-change}))))))
