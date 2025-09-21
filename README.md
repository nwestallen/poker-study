# Poker Study Tool
This is currently a range-memorization tool that I'm building for myself that mimics similar tools available on several browser-based GTO platforms and adds features that I think will help improve my study

## Current Features
* Strategy-painter with arbitary strategy mix (only 3 actions: raise/call/fold) and height (height signifies how often that hand combo is in your extant range)
* Poker table visualization to reprsent the scenario corresponding to your range (currently 9-handed with SB & BB only)
* Scenario and (preflop/suit-isomorphic) strategy URL ecoding, so that links can be produced and saved to practice created spots
* Able to import strategies from GTO Wizard, Upswing via copying ranges for a given action
* Import scenarios from GTO Wizard via the preflop_actions URL query parameter
  - Strings of the form "F-F-F-R3-F-C-F" indicate actions of each player, starting with UTG, and can be hand-typed for custom scenarios
* Button to simplify strategies by naively rounding to preset intervals based on hand comob type:
  - Suited hands (e.g. AKs) snap to nearest 1/4th
  - Pairs snap to nearest 1/6th
  - Offsuit hands snap to either nearest 1/4th or 1/6th
* Strategy summary that displays ranges assigned each action mix
* Scoring based on comparing the number of correct hand combinations
* Convenience buttons for setting paint mix to selected mix intervals (1/6ths and 1/4ths)

## Planned Features
* Enhancements for 3-bet scenarios:
  - Toggle switch to 'lock' height of the paint mix on the range test screen: if an existing hand's height is 50%, whatever the action mix is, say raise 75% and fold 25%, apply that mix to the 50% remaining, so ultimately the underlying action mix will be raise 37.5% and fold 12.5%
  - Function to convert non-folds to folds and folds to blanks so that you can paint based on extant range implied by previous action
* Enhancements for postflop scenarios:
  - Input for specifying cards on board (flop/turn/river)
  - Toggle/remove blinds, set remaining players
  - Corresponding import logic
  - Encoding for fully enumerated strategies (all 1,326 hands where suits matter)
  - Way to display action mixes for individual hands (e.g. AhKh vs. AsKs)
* Enable 4 or more actions (e.g. raises and bets of different amounts)
* Poker table scenario customization:
  - Number of players
  - Blinds & antes
  - Input for stack sizes
* Mobile and small layouts/more responsive design
* Action summary should handle partial strategies (omit unavailable actions and normalize to 100%)

## Dev Notes
1. run `npx shadow-cljs run repl/start` in command line
2. in Emacs cider-repl-connect-cljs
3. choose localhost, then the port reported from the command line
4. use `npm run release` to build production deployment - this works around debugger conflict with `shadow-cljs release app`
