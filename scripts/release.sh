#!/bin/bash
# Clean release build without FlowStorm dependencies

echo "🚀 Building production release (without FlowStorm)..."

# Build CSS first
echo "📦 Building CSS..."
shadow-cljs run build/css-release

# Override the dev-focused shadow-cljs.edn for clean release builds
echo "📦 Building JavaScript..."
clojure -M -m shadow.cljs.devtools.cli --config-merge '{
  :deps true
  :nrepl {:middleware ["cider.nrepl/cider-middleware"]}
  :builds {:app {:devtools {:preloads ["app.dev"]}}}
}' release app

echo "✅ Production build completed!"
echo "   CSS: docs/css/ui.css"
echo "   JS:  docs/js/main.js (no FlowStorm dependencies)"