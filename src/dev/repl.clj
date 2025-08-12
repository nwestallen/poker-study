(ns repl
  (:require
   [clojure.java.io :as io]
   [build]
   [shadow.cljs.devtools.api :as shadow]
   [shadow.cljs.devtools.server.fs-watch :as fs-watch]))

(defonce css-watch-ref (atom nil))

(defn start
  "Start development environment with FlowStorm debugging and shadow-css hot reload"
  {:shadow/requires-server true}
  []
  
  ;; Enable FlowStorm compilation
  (println "🌩️  Starting development environment...")
  
  ;; Start the shadow-cljs watch with FlowStorm
  (shadow/watch :app)

  ;; build css once on start
  (build/css-release)

  ;; then setup the watcher that rebuilds everything on change
  (reset! css-watch-ref
          (fs-watch/start
           {}
           [(io/file "src" "main")]
           ["cljs" "cljc" "clj"]
           (fn [_]
             (try
               (build/css-release)
               (catch Exception e
                 (prn [:css-failed e]))))))

  (println "🚀 Development environment ready!")
  (println "   • Shadow-cljs: http://localhost:8080")
  (println "   • nREPL: localhost:9000")  
  (println "   • FlowStorm: enabled")
  (println "   • Shadow-CSS: hot reload enabled")
  
  ::started)


(defn stop []
  (when-some [css-watch @css-watch-ref]
    (fs-watch/stop css-watch))

  ::stopped)

(defn go []
  (stop)
  (start))
