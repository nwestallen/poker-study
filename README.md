# s(hadow-cljs)h(elix)t(ailwind)-template
This is a clojurescript react project template that uses [shadow-cljs](https://github.com/thheller/shadow-cljs) for builds & dependency management, [helix](https://github.com/lilactown/helix) as the react wrapper, and [tailwind](https://tailwindcss.com/) for styling. Template uses [teknql's build hooks](https://github.com/teknql/shadow-cljs-tailwind-jit/tree/main?tab=readme-ov-file) to enable shadow-cljs to handle the css recompiling on change.

## Quick Start
1. Clone this template into your local
2. Cd into sht-template directory and run `npm i` in your terminal
3. In the same directory run `shadow-cljs watch app`
4. Navigate to http://localhost:8080/ to view dev server
5. Make changes to src/main/app/core.cljs and save to view results
