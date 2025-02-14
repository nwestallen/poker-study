goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34788){
var map__34792 = p__34788;
var map__34792__$1 = cljs.core.__destructure_map(map__34792);
var runtime = map__34792__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34792__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_35236 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_35236)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__34803 = runtime;
var G__34804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_35236);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__34803,G__34804) : shadow.remote.runtime.shared.process.call(null, G__34803,G__34804));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34815,res){
var map__34816 = p__34815;
var map__34816__$1 = cljs.core.__destructure_map(map__34816);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34816__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34816__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34817 = res;
var G__34817__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34817,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34817);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34817__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34817__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34819 = arguments.length;
switch (G__34819) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34830,msg,handlers,timeout_after_ms){
var map__34831 = p__34830;
var map__34831__$1 = cljs.core.__destructure_map(map__34831);
var runtime = map__34831__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34831__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___35248 = arguments.length;
var i__5727__auto___35249 = (0);
while(true){
if((i__5727__auto___35249 < len__5726__auto___35248)){
args__5732__auto__.push((arguments[i__5727__auto___35249]));

var G__35250 = (i__5727__auto___35249 + (1));
i__5727__auto___35249 = G__35250;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__34841,ev,args){
var map__34843 = p__34841;
var map__34843__$1 = cljs.core.__destructure_map(map__34843);
var runtime = map__34843__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34843__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34950 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34953 = null;
var count__34954 = (0);
var i__34955 = (0);
while(true){
if((i__34955 < count__34954)){
var ext = chunk__34953.cljs$core$IIndexed$_nth$arity$2(null, i__34955);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35260 = seq__34950;
var G__35261 = chunk__34953;
var G__35262 = count__34954;
var G__35263 = (i__34955 + (1));
seq__34950 = G__35260;
chunk__34953 = G__35261;
count__34954 = G__35262;
i__34955 = G__35263;
continue;
} else {
var G__35264 = seq__34950;
var G__35265 = chunk__34953;
var G__35266 = count__34954;
var G__35267 = (i__34955 + (1));
seq__34950 = G__35264;
chunk__34953 = G__35265;
count__34954 = G__35266;
i__34955 = G__35267;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__34950);
if(temp__5823__auto__){
var seq__34950__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34950__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__34950__$1);
var G__35269 = cljs.core.chunk_rest(seq__34950__$1);
var G__35270 = c__5525__auto__;
var G__35271 = cljs.core.count(c__5525__auto__);
var G__35272 = (0);
seq__34950 = G__35269;
chunk__34953 = G__35270;
count__34954 = G__35271;
i__34955 = G__35272;
continue;
} else {
var ext = cljs.core.first(seq__34950__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__35277 = cljs.core.next(seq__34950__$1);
var G__35278 = null;
var G__35279 = (0);
var G__35281 = (0);
seq__34950 = G__35277;
chunk__34953 = G__35278;
count__34954 = G__35279;
i__34955 = G__35281;
continue;
} else {
var G__35285 = cljs.core.next(seq__34950__$1);
var G__35286 = null;
var G__35287 = (0);
var G__35288 = (0);
seq__34950 = G__35285;
chunk__34953 = G__35286;
count__34954 = G__35287;
i__34955 = G__35288;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq34837){
var G__34838 = cljs.core.first(seq34837);
var seq34837__$1 = cljs.core.next(seq34837);
var G__34839 = cljs.core.first(seq34837__$1);
var seq34837__$2 = cljs.core.next(seq34837__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34838,G__34839,seq34837__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34980,p__34981){
var map__34983 = p__34980;
var map__34983__$1 = cljs.core.__destructure_map(map__34983);
var runtime = map__34983__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34983__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34984 = p__34981;
var map__34984__$1 = cljs.core.__destructure_map(map__34984);
var msg = map__34984__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34984__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__34998 = cljs.core.deref(state_ref);
var map__34998__$1 = cljs.core.__destructure_map(map__34998);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34998__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34998__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__35049,msg){
var map__35059 = p__35049;
var map__35059__$1 = cljs.core.__destructure_map(map__35059);
var runtime = map__35059__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35059__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__35090,key,p__35091){
var map__35092 = p__35090;
var map__35092__$1 = cljs.core.__destructure_map(map__35092);
var state = map__35092__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35092__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__35094 = p__35091;
var map__35094__$1 = cljs.core.__destructure_map(map__35094);
var spec = map__35094__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35094__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35094__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__35106,key,spec){
var map__35108 = p__35106;
var map__35108__$1 = cljs.core.__destructure_map(map__35108);
var runtime = map__35108__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___35314 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___35314 == null)){
} else {
var on_welcome_35317 = temp__5827__auto___35314;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_35317.cljs$core$IFn$_invoke$arity$0 ? on_welcome_35317.cljs$core$IFn$_invoke$arity$0() : on_welcome_35317.call(null, ));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__35129_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__35129_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__35133_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__35133_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__35134_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__35134_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__35135_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__35135_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__35138_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__35138_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__35163,key){
var map__35165 = p__35163;
var map__35165__$1 = cljs.core.__destructure_map(map__35165);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35165__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__35172,msg){
var map__35174 = p__35172;
var map__35174__$1 = cljs.core.__destructure_map(map__35174);
var runtime = map__35174__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__35177,p__35178){
var map__35179 = p__35177;
var map__35179__$1 = cljs.core.__destructure_map(map__35179);
var runtime = map__35179__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35179__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__35180 = p__35178;
var map__35180__$1 = cljs.core.__destructure_map(map__35180);
var msg = map__35180__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35180__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35180__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null, msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null, msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__35187 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__35192 = null;
var count__35193 = (0);
var i__35194 = (0);
while(true){
if((i__35194 < count__35193)){
var map__35209 = chunk__35192.cljs$core$IIndexed$_nth$arity$2(null, i__35194);
var map__35209__$1 = cljs.core.__destructure_map(map__35209);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35209__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__35327 = seq__35187;
var G__35328 = chunk__35192;
var G__35329 = count__35193;
var G__35330 = (i__35194 + (1));
seq__35187 = G__35327;
chunk__35192 = G__35328;
count__35193 = G__35329;
i__35194 = G__35330;
continue;
} else {
var G__35331 = seq__35187;
var G__35332 = chunk__35192;
var G__35333 = count__35193;
var G__35334 = (i__35194 + (1));
seq__35187 = G__35331;
chunk__35192 = G__35332;
count__35193 = G__35333;
i__35194 = G__35334;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__35187);
if(temp__5823__auto__){
var seq__35187__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35187__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__35187__$1);
var G__35337 = cljs.core.chunk_rest(seq__35187__$1);
var G__35338 = c__5525__auto__;
var G__35339 = cljs.core.count(c__5525__auto__);
var G__35340 = (0);
seq__35187 = G__35337;
chunk__35192 = G__35338;
count__35193 = G__35339;
i__35194 = G__35340;
continue;
} else {
var map__35215 = cljs.core.first(seq__35187__$1);
var map__35215__$1 = cljs.core.__destructure_map(map__35215);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35215__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null, ));


var G__35341 = cljs.core.next(seq__35187__$1);
var G__35342 = null;
var G__35343 = (0);
var G__35344 = (0);
seq__35187 = G__35341;
chunk__35192 = G__35342;
count__35193 = G__35343;
i__35194 = G__35344;
continue;
} else {
var G__35346 = cljs.core.next(seq__35187__$1);
var G__35347 = null;
var G__35348 = (0);
var G__35349 = (0);
seq__35187 = G__35346;
chunk__35192 = G__35347;
count__35193 = G__35348;
i__35194 = G__35349;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
