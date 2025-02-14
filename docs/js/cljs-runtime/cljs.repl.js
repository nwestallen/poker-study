goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39805){
var map__39806 = p__39805;
var map__39806__$1 = cljs.core.__destructure_map(map__39806);
var m = map__39806__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39806__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39806__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39818_40078 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39819_40079 = null;
var count__39820_40080 = (0);
var i__39821_40081 = (0);
while(true){
if((i__39821_40081 < count__39820_40080)){
var f_40082 = chunk__39819_40079.cljs$core$IIndexed$_nth$arity$2(null, i__39821_40081);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40082], 0));


var G__40083 = seq__39818_40078;
var G__40084 = chunk__39819_40079;
var G__40085 = count__39820_40080;
var G__40086 = (i__39821_40081 + (1));
seq__39818_40078 = G__40083;
chunk__39819_40079 = G__40084;
count__39820_40080 = G__40085;
i__39821_40081 = G__40086;
continue;
} else {
var temp__5823__auto___40087 = cljs.core.seq(seq__39818_40078);
if(temp__5823__auto___40087){
var seq__39818_40088__$1 = temp__5823__auto___40087;
if(cljs.core.chunked_seq_QMARK_(seq__39818_40088__$1)){
var c__5525__auto___40089 = cljs.core.chunk_first(seq__39818_40088__$1);
var G__40090 = cljs.core.chunk_rest(seq__39818_40088__$1);
var G__40091 = c__5525__auto___40089;
var G__40092 = cljs.core.count(c__5525__auto___40089);
var G__40093 = (0);
seq__39818_40078 = G__40090;
chunk__39819_40079 = G__40091;
count__39820_40080 = G__40092;
i__39821_40081 = G__40093;
continue;
} else {
var f_40094 = cljs.core.first(seq__39818_40088__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40094], 0));


var G__40095 = cljs.core.next(seq__39818_40088__$1);
var G__40096 = null;
var G__40097 = (0);
var G__40098 = (0);
seq__39818_40078 = G__40095;
chunk__39819_40079 = G__40096;
count__39820_40080 = G__40097;
i__39821_40081 = G__40098;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40099 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40099], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40099)))?cljs.core.second(arglists_40099):arglists_40099)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39854_40100 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39855_40101 = null;
var count__39856_40102 = (0);
var i__39857_40103 = (0);
while(true){
if((i__39857_40103 < count__39856_40102)){
var vec__39887_40104 = chunk__39855_40101.cljs$core$IIndexed$_nth$arity$2(null, i__39857_40103);
var name_40105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39887_40104,(0),null);
var map__39890_40106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39887_40104,(1),null);
var map__39890_40107__$1 = cljs.core.__destructure_map(map__39890_40106);
var doc_40108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39890_40107__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39890_40107__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40105], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40109], 0));

if(cljs.core.truth_(doc_40108)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40108], 0));
} else {
}


var G__40110 = seq__39854_40100;
var G__40111 = chunk__39855_40101;
var G__40112 = count__39856_40102;
var G__40113 = (i__39857_40103 + (1));
seq__39854_40100 = G__40110;
chunk__39855_40101 = G__40111;
count__39856_40102 = G__40112;
i__39857_40103 = G__40113;
continue;
} else {
var temp__5823__auto___40114 = cljs.core.seq(seq__39854_40100);
if(temp__5823__auto___40114){
var seq__39854_40115__$1 = temp__5823__auto___40114;
if(cljs.core.chunked_seq_QMARK_(seq__39854_40115__$1)){
var c__5525__auto___40116 = cljs.core.chunk_first(seq__39854_40115__$1);
var G__40117 = cljs.core.chunk_rest(seq__39854_40115__$1);
var G__40119 = c__5525__auto___40116;
var G__40120 = cljs.core.count(c__5525__auto___40116);
var G__40121 = (0);
seq__39854_40100 = G__40117;
chunk__39855_40101 = G__40119;
count__39856_40102 = G__40120;
i__39857_40103 = G__40121;
continue;
} else {
var vec__39898_40124 = cljs.core.first(seq__39854_40115__$1);
var name_40125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39898_40124,(0),null);
var map__39901_40126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39898_40124,(1),null);
var map__39901_40127__$1 = cljs.core.__destructure_map(map__39901_40126);
var doc_40128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39901_40127__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39901_40127__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40125], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40129], 0));

if(cljs.core.truth_(doc_40128)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40128], 0));
} else {
}


var G__40135 = cljs.core.next(seq__39854_40115__$1);
var G__40136 = null;
var G__40137 = (0);
var G__40138 = (0);
seq__39854_40100 = G__40135;
chunk__39855_40101 = G__40136;
count__39856_40102 = G__40137;
i__39857_40103 = G__40138;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39923 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39925 = null;
var count__39926 = (0);
var i__39927 = (0);
while(true){
if((i__39927 < count__39926)){
var role = chunk__39925.cljs$core$IIndexed$_nth$arity$2(null, i__39927);
var temp__5823__auto___40139__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___40139__$1)){
var spec_40140 = temp__5823__auto___40139__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40140)], 0));
} else {
}


var G__40141 = seq__39923;
var G__40142 = chunk__39925;
var G__40143 = count__39926;
var G__40144 = (i__39927 + (1));
seq__39923 = G__40141;
chunk__39925 = G__40142;
count__39926 = G__40143;
i__39927 = G__40144;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__39923);
if(temp__5823__auto____$1){
var seq__39923__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39923__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__39923__$1);
var G__40145 = cljs.core.chunk_rest(seq__39923__$1);
var G__40146 = c__5525__auto__;
var G__40147 = cljs.core.count(c__5525__auto__);
var G__40149 = (0);
seq__39923 = G__40145;
chunk__39925 = G__40146;
count__39926 = G__40147;
i__39927 = G__40149;
continue;
} else {
var role = cljs.core.first(seq__39923__$1);
var temp__5823__auto___40151__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___40151__$2)){
var spec_40152 = temp__5823__auto___40151__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40152)], 0));
} else {
}


var G__40154 = cljs.core.next(seq__39923__$1);
var G__40155 = null;
var G__40156 = (0);
var G__40157 = (0);
seq__39923 = G__40154;
chunk__39925 = G__40155;
count__39926 = G__40156;
i__39927 = G__40157;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39981 = datafied_throwable;
var map__39981__$1 = cljs.core.__destructure_map(map__39981);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39981__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39981__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39981__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39982 = cljs.core.last(via);
var map__39982__$1 = cljs.core.__destructure_map(map__39982);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39982__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39982__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39982__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39983 = data;
var map__39983__$1 = cljs.core.__destructure_map(map__39983);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39983__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39983__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39983__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39984 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39984__$1 = cljs.core.__destructure_map(map__39984);
var top_data = map__39984__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39984__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39989 = phase;
var G__39989__$1 = (((G__39989 instanceof cljs.core.Keyword))?G__39989.fqn:null);
switch (G__39989__$1) {
case "read-source":
var map__39990 = data;
var map__39990__$1 = cljs.core.__destructure_map(map__39990);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39990__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39990__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39991 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39991__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39991,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39991);
var G__39991__$2 = (cljs.core.truth_((function (){var fexpr__39995 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39995.cljs$core$IFn$_invoke$arity$1 ? fexpr__39995.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39995.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39991__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39991__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39991__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39991__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39996 = top_data;
var G__39996__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39996,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39996);
var G__39996__$2 = (cljs.core.truth_((function (){var fexpr__39997 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39997.cljs$core$IFn$_invoke$arity$1 ? fexpr__39997.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39997.call(null, source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39996__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39996__$1);
var G__39996__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39996__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39996__$2);
var G__39996__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39996__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39996__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39996__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39996__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39999 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39999,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39999,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39999,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39999,(3),null);
var G__40002 = top_data;
var G__40002__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40002,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40002);
var G__40002__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40002__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40002__$1);
var G__40002__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40002__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40002__$2);
var G__40002__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40002__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40002__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40002__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40002__$4;
}

break;
case "execution":
var vec__40010 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40010,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40010,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40010,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40010,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39979_SHARP_){
var or__5002__auto__ = (p1__39979_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__40013 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40013.cljs$core$IFn$_invoke$arity$1 ? fexpr__40013.cljs$core$IFn$_invoke$arity$1(p1__39979_SHARP_) : fexpr__40013.call(null, p1__39979_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__40014 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40014__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40014,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40014);
var G__40014__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40014__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40014__$1);
var G__40014__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40014__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40014__$2);
var G__40014__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40014__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40014__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40014__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40014__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39989__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40030){
var map__40031 = p__40030;
var map__40031__$1 = cljs.core.__destructure_map(map__40031);
var triage_data = map__40031__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40031__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40031__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40031__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40031__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40031__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40031__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40031__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40031__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40033 = phase;
var G__40033__$1 = (((G__40033 instanceof cljs.core.Keyword))?G__40033.fqn:null);
switch (G__40033__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null, "Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40034 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40035 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40036 = loc;
var G__40037 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40038_40188 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40039_40189 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40040_40190 = true;
var _STAR_print_fn_STAR__temp_val__40041_40191 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40040_40190);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40041_40191);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40028_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40028_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40039_40189);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40038_40188);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null, "%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40034,G__40035,G__40036,G__40037) : format.call(null, G__40034,G__40035,G__40036,G__40037));

break;
case "macroexpansion":
var G__40042 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40043 = cause_type;
var G__40044 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40045 = loc;
var G__40046 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40042,G__40043,G__40044,G__40045,G__40046) : format.call(null, G__40042,G__40043,G__40044,G__40045,G__40046));

break;
case "compile-syntax-check":
var G__40047 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40048 = cause_type;
var G__40049 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40050 = loc;
var G__40051 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40047,G__40048,G__40049,G__40050,G__40051) : format.call(null, G__40047,G__40048,G__40049,G__40050,G__40051));

break;
case "compilation":
var G__40052 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40053 = cause_type;
var G__40054 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40055 = loc;
var G__40056 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40052,G__40053,G__40054,G__40055,G__40056) : format.call(null, G__40052,G__40053,G__40054,G__40055,G__40056));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null, "Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40057 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40058 = symbol;
var G__40059 = loc;
var G__40060 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40061_40222 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40062_40223 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40063_40224 = true;
var _STAR_print_fn_STAR__temp_val__40064_40225 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40063_40224);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40064_40225);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40029_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40029_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40062_40223);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40061_40222);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40057,G__40058,G__40059,G__40060) : format.call(null, G__40057,G__40058,G__40059,G__40060));
} else {
var G__40069 = "Execution error%s at %s(%s).\n%s\n";
var G__40070 = cause_type;
var G__40071 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40072 = loc;
var G__40073 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40069,G__40070,G__40071,G__40072,G__40073) : format.call(null, G__40069,G__40070,G__40071,G__40072,G__40073));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40033__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
