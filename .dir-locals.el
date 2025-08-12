;;; Directory Local Variables for poker-study project
;;; For more information see (info "(emacs) Directory Variables")

((clojure-mode . ((cider-shadow-cljs-default-options . "app")
                  (cider-default-cljs-repl . shadow)
                  (cider-shadow-watched-builds . ("app"))
                  (cider-clojure-cli-aliases . ":dev-storm")
                  (eval . (setq-local cider-jack-in-dependencies
                                      '(("nrepl/nrepl" "1.0.0")
                                        ("cider/cider-nrepl" "0.51.0")
                                        ("com.github.flow-storm/flow-storm-dbg" "4.5.0"))))
                  (eval . (setq-local cider-jack-in-nrepl-middlewares 
                                      '("flow-storm.nrepl.middleware/wrap-flow-storm"
                                        "cider.nrepl.middleware/cider-middleware")))
                  (eval . (setq-local cider-jack-in-lein-plugins nil))
                  (eval . (message "🌩️ FlowStorm + Shadow-CSS development environment configured!")))))