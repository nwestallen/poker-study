(ns app.utils.macros)

(defmacro defpage [name content]
  `(do
     (def ~(symbol (str name "-structure")) '~content)
     (helix.core/defnc ~name [] ~content)))

