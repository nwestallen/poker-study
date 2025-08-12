#!/bin/bash
# Clean release build without FlowStorm dependencies

echo "🚀 Building production release (without FlowStorm)..."

# Override the dev-focused shadow-cljs.edn for clean release builds
clojure -M -m shadow.cljs.devtools.cli --config-merge '{
  :deps true
  :nrepl {:middleware ["cider.nrepl/cider-middleware"]}
  :builds {:app {:devtools {:preloads ["app.dev"]}}}
}' release app

echo "✅ Production build completed!"
echo "   Output: docs/js/main.js (no FlowStorm dependencies)"