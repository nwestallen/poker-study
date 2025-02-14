goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___41699 = arguments.length;
var i__5727__auto___41700 = (0);
while(true){
if((i__5727__auto___41700 < len__5726__auto___41699)){
args__5732__auto__.push((arguments[i__5727__auto___41700]));

var G__41702 = (i__5727__auto___41700 + (1));
i__5727__auto___41700 = G__41702;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41029){
var G__41030 = cljs.core.first(seq41029);
var seq41029__$1 = cljs.core.next(seq41029);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41030,seq41029__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41034 = cljs.core.seq(sources);
var chunk__41035 = null;
var count__41036 = (0);
var i__41037 = (0);
while(true){
if((i__41037 < count__41036)){
var map__41042 = chunk__41035.cljs$core$IIndexed$_nth$arity$2(null, i__41037);
var map__41042__$1 = cljs.core.__destructure_map(map__41042);
var src = map__41042__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41042__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41042__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41042__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41042__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41044){var e_41708 = e41044;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41708);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41708.message)].join('')));
}

var G__41710 = seq__41034;
var G__41711 = chunk__41035;
var G__41712 = count__41036;
var G__41713 = (i__41037 + (1));
seq__41034 = G__41710;
chunk__41035 = G__41711;
count__41036 = G__41712;
i__41037 = G__41713;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__41034);
if(temp__5823__auto__){
var seq__41034__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41034__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__41034__$1);
var G__41714 = cljs.core.chunk_rest(seq__41034__$1);
var G__41715 = c__5525__auto__;
var G__41716 = cljs.core.count(c__5525__auto__);
var G__41717 = (0);
seq__41034 = G__41714;
chunk__41035 = G__41715;
count__41036 = G__41716;
i__41037 = G__41717;
continue;
} else {
var map__41045 = cljs.core.first(seq__41034__$1);
var map__41045__$1 = cljs.core.__destructure_map(map__41045);
var src = map__41045__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41045__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41045__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41045__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41045__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41046){var e_41721 = e41046;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_41721);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_41721.message)].join('')));
}

var G__41722 = cljs.core.next(seq__41034__$1);
var G__41723 = null;
var G__41724 = (0);
var G__41725 = (0);
seq__41034 = G__41722;
chunk__41035 = G__41723;
count__41036 = G__41724;
i__41037 = G__41725;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__41047 = cljs.core.seq(js_requires);
var chunk__41048 = null;
var count__41049 = (0);
var i__41050 = (0);
while(true){
if((i__41050 < count__41049)){
var js_ns = chunk__41048.cljs$core$IIndexed$_nth$arity$2(null, i__41050);
var require_str_41728 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41728);


var G__41729 = seq__41047;
var G__41730 = chunk__41048;
var G__41731 = count__41049;
var G__41732 = (i__41050 + (1));
seq__41047 = G__41729;
chunk__41048 = G__41730;
count__41049 = G__41731;
i__41050 = G__41732;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__41047);
if(temp__5823__auto__){
var seq__41047__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41047__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__41047__$1);
var G__41733 = cljs.core.chunk_rest(seq__41047__$1);
var G__41734 = c__5525__auto__;
var G__41735 = cljs.core.count(c__5525__auto__);
var G__41736 = (0);
seq__41047 = G__41733;
chunk__41048 = G__41734;
count__41049 = G__41735;
i__41050 = G__41736;
continue;
} else {
var js_ns = cljs.core.first(seq__41047__$1);
var require_str_41737 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_41737);


var G__41738 = cljs.core.next(seq__41047__$1);
var G__41739 = null;
var G__41740 = (0);
var G__41741 = (0);
seq__41047 = G__41738;
chunk__41048 = G__41739;
count__41049 = G__41740;
i__41050 = G__41741;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41052){
var map__41053 = p__41052;
var map__41053__$1 = cljs.core.__destructure_map(map__41053);
var msg = map__41053__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41053__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41053__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41054(s__41055){
return (new cljs.core.LazySeq(null,(function (){
var s__41055__$1 = s__41055;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__41055__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__41060 = cljs.core.first(xs__6383__auto__);
var map__41060__$1 = cljs.core.__destructure_map(map__41060);
var src = map__41060__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41060__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41060__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__41055__$1,map__41060,map__41060__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__41053,map__41053__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41054_$_iter__41056(s__41057){
return (new cljs.core.LazySeq(null,((function (s__41055__$1,map__41060,map__41060__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__41053,map__41053__$1,msg,info,reload_info){
return (function (){
var s__41057__$1 = s__41057;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__41057__$1);
if(temp__5823__auto____$1){
var s__41057__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41057__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__41057__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__41059 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__41058 = (0);
while(true){
if((i__41058 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__41058);
cljs.core.chunk_append(b__41059,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__41748 = (i__41058 + (1));
i__41058 = G__41748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41059),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41054_$_iter__41056(cljs.core.chunk_rest(s__41057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41059),null);
}
} else {
var warning = cljs.core.first(s__41057__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41054_$_iter__41056(cljs.core.rest(s__41057__$2)));
}
} else {
return null;
}
break;
}
});})(s__41055__$1,map__41060,map__41060__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__41053,map__41053__$1,msg,info,reload_info))
,null,null));
});})(s__41055__$1,map__41060,map__41060__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__41053,map__41053__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41054(cljs.core.rest(s__41055__$1)));
} else {
var G__41749 = cljs.core.rest(s__41055__$1);
s__41055__$1 = G__41749;
continue;
}
} else {
var G__41750 = cljs.core.rest(s__41055__$1);
s__41055__$1 = G__41750;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__41063_41751 = cljs.core.seq(warnings);
var chunk__41064_41752 = null;
var count__41065_41753 = (0);
var i__41066_41754 = (0);
while(true){
if((i__41066_41754 < count__41065_41753)){
var map__41077_41757 = chunk__41064_41752.cljs$core$IIndexed$_nth$arity$2(null, i__41066_41754);
var map__41077_41758__$1 = cljs.core.__destructure_map(map__41077_41757);
var w_41759 = map__41077_41758__$1;
var msg_41760__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41077_41758__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41077_41758__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41077_41758__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41077_41758__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41763)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41761),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41762),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41760__$1)].join(''));


var G__41764 = seq__41063_41751;
var G__41765 = chunk__41064_41752;
var G__41766 = count__41065_41753;
var G__41767 = (i__41066_41754 + (1));
seq__41063_41751 = G__41764;
chunk__41064_41752 = G__41765;
count__41065_41753 = G__41766;
i__41066_41754 = G__41767;
continue;
} else {
var temp__5823__auto___41768 = cljs.core.seq(seq__41063_41751);
if(temp__5823__auto___41768){
var seq__41063_41769__$1 = temp__5823__auto___41768;
if(cljs.core.chunked_seq_QMARK_(seq__41063_41769__$1)){
var c__5525__auto___41770 = cljs.core.chunk_first(seq__41063_41769__$1);
var G__41771 = cljs.core.chunk_rest(seq__41063_41769__$1);
var G__41772 = c__5525__auto___41770;
var G__41773 = cljs.core.count(c__5525__auto___41770);
var G__41774 = (0);
seq__41063_41751 = G__41771;
chunk__41064_41752 = G__41772;
count__41065_41753 = G__41773;
i__41066_41754 = G__41774;
continue;
} else {
var map__41084_41775 = cljs.core.first(seq__41063_41769__$1);
var map__41084_41776__$1 = cljs.core.__destructure_map(map__41084_41775);
var w_41777 = map__41084_41776__$1;
var msg_41778__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41084_41776__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_41779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41084_41776__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_41780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41084_41776__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_41781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41084_41776__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_41781)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41779),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_41780),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_41778__$1)].join(''));


var G__41785 = cljs.core.next(seq__41063_41769__$1);
var G__41786 = null;
var G__41787 = (0);
var G__41788 = (0);
seq__41063_41751 = G__41785;
chunk__41064_41752 = G__41786;
count__41065_41753 = G__41787;
i__41066_41754 = G__41788;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41051_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41051_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return new$;
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__41109){
var map__41110 = p__41109;
var map__41110__$1 = cljs.core.__destructure_map(map__41110);
var msg = map__41110__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41110__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41110__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__41111 = cljs.core.seq(updates);
var chunk__41113 = null;
var count__41114 = (0);
var i__41115 = (0);
while(true){
if((i__41115 < count__41114)){
var path = chunk__41113.cljs$core$IIndexed$_nth$arity$2(null, i__41115);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41414_41794 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41418_41795 = null;
var count__41419_41796 = (0);
var i__41420_41797 = (0);
while(true){
if((i__41420_41797 < count__41419_41796)){
var node_41800 = chunk__41418_41795.cljs$core$IIndexed$_nth$arity$2(null, i__41420_41797);
if(cljs.core.not(node_41800.shadow$old)){
var path_match_41801 = shadow.cljs.devtools.client.browser.match_paths(node_41800.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41801)){
var new_link_41802 = (function (){var G__41446 = node_41800.cloneNode(true);
G__41446.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41801),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41446;
})();
(node_41800.shadow$old = true);

(new_link_41802.onload = ((function (seq__41414_41794,chunk__41418_41795,count__41419_41796,i__41420_41797,seq__41111,chunk__41113,count__41114,i__41115,new_link_41802,path_match_41801,node_41800,path,map__41110,map__41110__$1,msg,updates,reload_info){
return (function (e){
var seq__41447_41803 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41449_41804 = null;
var count__41450_41805 = (0);
var i__41451_41806 = (0);
while(true){
if((i__41451_41806 < count__41450_41805)){
var map__41458_41807 = chunk__41449_41804.cljs$core$IIndexed$_nth$arity$2(null, i__41451_41806);
var map__41458_41808__$1 = cljs.core.__destructure_map(map__41458_41807);
var task_41809 = map__41458_41808__$1;
var fn_str_41810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41458_41808__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41811 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41458_41808__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41812 = goog.getObjectByName(fn_str_41810,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41811)].join(''));

(fn_obj_41812.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41812.cljs$core$IFn$_invoke$arity$2(path,new_link_41802) : fn_obj_41812.call(null, path,new_link_41802));


var G__41814 = seq__41447_41803;
var G__41815 = chunk__41449_41804;
var G__41816 = count__41450_41805;
var G__41817 = (i__41451_41806 + (1));
seq__41447_41803 = G__41814;
chunk__41449_41804 = G__41815;
count__41450_41805 = G__41816;
i__41451_41806 = G__41817;
continue;
} else {
var temp__5823__auto___41818 = cljs.core.seq(seq__41447_41803);
if(temp__5823__auto___41818){
var seq__41447_41819__$1 = temp__5823__auto___41818;
if(cljs.core.chunked_seq_QMARK_(seq__41447_41819__$1)){
var c__5525__auto___41820 = cljs.core.chunk_first(seq__41447_41819__$1);
var G__41821 = cljs.core.chunk_rest(seq__41447_41819__$1);
var G__41822 = c__5525__auto___41820;
var G__41823 = cljs.core.count(c__5525__auto___41820);
var G__41824 = (0);
seq__41447_41803 = G__41821;
chunk__41449_41804 = G__41822;
count__41450_41805 = G__41823;
i__41451_41806 = G__41824;
continue;
} else {
var map__41472_41825 = cljs.core.first(seq__41447_41819__$1);
var map__41472_41826__$1 = cljs.core.__destructure_map(map__41472_41825);
var task_41827 = map__41472_41826__$1;
var fn_str_41828 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472_41826__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41472_41826__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41831 = goog.getObjectByName(fn_str_41828,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41829)].join(''));

(fn_obj_41831.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41831.cljs$core$IFn$_invoke$arity$2(path,new_link_41802) : fn_obj_41831.call(null, path,new_link_41802));


var G__41832 = cljs.core.next(seq__41447_41819__$1);
var G__41833 = null;
var G__41834 = (0);
var G__41835 = (0);
seq__41447_41803 = G__41832;
chunk__41449_41804 = G__41833;
count__41450_41805 = G__41834;
i__41451_41806 = G__41835;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41800);
});})(seq__41414_41794,chunk__41418_41795,count__41419_41796,i__41420_41797,seq__41111,chunk__41113,count__41114,i__41115,new_link_41802,path_match_41801,node_41800,path,map__41110,map__41110__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41801], 0));

goog.dom.insertSiblingAfter(new_link_41802,node_41800);


var G__41836 = seq__41414_41794;
var G__41837 = chunk__41418_41795;
var G__41838 = count__41419_41796;
var G__41839 = (i__41420_41797 + (1));
seq__41414_41794 = G__41836;
chunk__41418_41795 = G__41837;
count__41419_41796 = G__41838;
i__41420_41797 = G__41839;
continue;
} else {
var G__41840 = seq__41414_41794;
var G__41841 = chunk__41418_41795;
var G__41842 = count__41419_41796;
var G__41843 = (i__41420_41797 + (1));
seq__41414_41794 = G__41840;
chunk__41418_41795 = G__41841;
count__41419_41796 = G__41842;
i__41420_41797 = G__41843;
continue;
}
} else {
var G__41844 = seq__41414_41794;
var G__41845 = chunk__41418_41795;
var G__41846 = count__41419_41796;
var G__41847 = (i__41420_41797 + (1));
seq__41414_41794 = G__41844;
chunk__41418_41795 = G__41845;
count__41419_41796 = G__41846;
i__41420_41797 = G__41847;
continue;
}
} else {
var temp__5823__auto___41848 = cljs.core.seq(seq__41414_41794);
if(temp__5823__auto___41848){
var seq__41414_41849__$1 = temp__5823__auto___41848;
if(cljs.core.chunked_seq_QMARK_(seq__41414_41849__$1)){
var c__5525__auto___41850 = cljs.core.chunk_first(seq__41414_41849__$1);
var G__41851 = cljs.core.chunk_rest(seq__41414_41849__$1);
var G__41852 = c__5525__auto___41850;
var G__41853 = cljs.core.count(c__5525__auto___41850);
var G__41854 = (0);
seq__41414_41794 = G__41851;
chunk__41418_41795 = G__41852;
count__41419_41796 = G__41853;
i__41420_41797 = G__41854;
continue;
} else {
var node_41855 = cljs.core.first(seq__41414_41849__$1);
if(cljs.core.not(node_41855.shadow$old)){
var path_match_41856 = shadow.cljs.devtools.client.browser.match_paths(node_41855.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41856)){
var new_link_41857 = (function (){var G__41485 = node_41855.cloneNode(true);
G__41485.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41856),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41485;
})();
(node_41855.shadow$old = true);

(new_link_41857.onload = ((function (seq__41414_41794,chunk__41418_41795,count__41419_41796,i__41420_41797,seq__41111,chunk__41113,count__41114,i__41115,new_link_41857,path_match_41856,node_41855,seq__41414_41849__$1,temp__5823__auto___41848,path,map__41110,map__41110__$1,msg,updates,reload_info){
return (function (e){
var seq__41492_41858 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41494_41859 = null;
var count__41495_41860 = (0);
var i__41496_41861 = (0);
while(true){
if((i__41496_41861 < count__41495_41860)){
var map__41510_41862 = chunk__41494_41859.cljs$core$IIndexed$_nth$arity$2(null, i__41496_41861);
var map__41510_41863__$1 = cljs.core.__destructure_map(map__41510_41862);
var task_41864 = map__41510_41863__$1;
var fn_str_41865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41510_41863__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41510_41863__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41867 = goog.getObjectByName(fn_str_41865,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41866)].join(''));

(fn_obj_41867.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41867.cljs$core$IFn$_invoke$arity$2(path,new_link_41857) : fn_obj_41867.call(null, path,new_link_41857));


var G__41868 = seq__41492_41858;
var G__41869 = chunk__41494_41859;
var G__41870 = count__41495_41860;
var G__41871 = (i__41496_41861 + (1));
seq__41492_41858 = G__41868;
chunk__41494_41859 = G__41869;
count__41495_41860 = G__41870;
i__41496_41861 = G__41871;
continue;
} else {
var temp__5823__auto___41872__$1 = cljs.core.seq(seq__41492_41858);
if(temp__5823__auto___41872__$1){
var seq__41492_41873__$1 = temp__5823__auto___41872__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41492_41873__$1)){
var c__5525__auto___41874 = cljs.core.chunk_first(seq__41492_41873__$1);
var G__41875 = cljs.core.chunk_rest(seq__41492_41873__$1);
var G__41876 = c__5525__auto___41874;
var G__41877 = cljs.core.count(c__5525__auto___41874);
var G__41878 = (0);
seq__41492_41858 = G__41875;
chunk__41494_41859 = G__41876;
count__41495_41860 = G__41877;
i__41496_41861 = G__41878;
continue;
} else {
var map__41515_41879 = cljs.core.first(seq__41492_41873__$1);
var map__41515_41880__$1 = cljs.core.__destructure_map(map__41515_41879);
var task_41881 = map__41515_41880__$1;
var fn_str_41882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41515_41880__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41515_41880__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41884 = goog.getObjectByName(fn_str_41882,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41883)].join(''));

(fn_obj_41884.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41884.cljs$core$IFn$_invoke$arity$2(path,new_link_41857) : fn_obj_41884.call(null, path,new_link_41857));


var G__41885 = cljs.core.next(seq__41492_41873__$1);
var G__41886 = null;
var G__41887 = (0);
var G__41888 = (0);
seq__41492_41858 = G__41885;
chunk__41494_41859 = G__41886;
count__41495_41860 = G__41887;
i__41496_41861 = G__41888;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41855);
});})(seq__41414_41794,chunk__41418_41795,count__41419_41796,i__41420_41797,seq__41111,chunk__41113,count__41114,i__41115,new_link_41857,path_match_41856,node_41855,seq__41414_41849__$1,temp__5823__auto___41848,path,map__41110,map__41110__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41856], 0));

goog.dom.insertSiblingAfter(new_link_41857,node_41855);


var G__41889 = cljs.core.next(seq__41414_41849__$1);
var G__41890 = null;
var G__41891 = (0);
var G__41892 = (0);
seq__41414_41794 = G__41889;
chunk__41418_41795 = G__41890;
count__41419_41796 = G__41891;
i__41420_41797 = G__41892;
continue;
} else {
var G__41893 = cljs.core.next(seq__41414_41849__$1);
var G__41894 = null;
var G__41895 = (0);
var G__41896 = (0);
seq__41414_41794 = G__41893;
chunk__41418_41795 = G__41894;
count__41419_41796 = G__41895;
i__41420_41797 = G__41896;
continue;
}
} else {
var G__41897 = cljs.core.next(seq__41414_41849__$1);
var G__41898 = null;
var G__41899 = (0);
var G__41900 = (0);
seq__41414_41794 = G__41897;
chunk__41418_41795 = G__41898;
count__41419_41796 = G__41899;
i__41420_41797 = G__41900;
continue;
}
}
} else {
}
}
break;
}


var G__41901 = seq__41111;
var G__41902 = chunk__41113;
var G__41903 = count__41114;
var G__41904 = (i__41115 + (1));
seq__41111 = G__41901;
chunk__41113 = G__41902;
count__41114 = G__41903;
i__41115 = G__41904;
continue;
} else {
var G__41905 = seq__41111;
var G__41906 = chunk__41113;
var G__41907 = count__41114;
var G__41908 = (i__41115 + (1));
seq__41111 = G__41905;
chunk__41113 = G__41906;
count__41114 = G__41907;
i__41115 = G__41908;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__41111);
if(temp__5823__auto__){
var seq__41111__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41111__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__41111__$1);
var G__41910 = cljs.core.chunk_rest(seq__41111__$1);
var G__41911 = c__5525__auto__;
var G__41912 = cljs.core.count(c__5525__auto__);
var G__41913 = (0);
seq__41111 = G__41910;
chunk__41113 = G__41911;
count__41114 = G__41912;
i__41115 = G__41913;
continue;
} else {
var path = cljs.core.first(seq__41111__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__41522_41914 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__41526_41915 = null;
var count__41527_41916 = (0);
var i__41528_41917 = (0);
while(true){
if((i__41528_41917 < count__41527_41916)){
var node_41918 = chunk__41526_41915.cljs$core$IIndexed$_nth$arity$2(null, i__41528_41917);
if(cljs.core.not(node_41918.shadow$old)){
var path_match_41919 = shadow.cljs.devtools.client.browser.match_paths(node_41918.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41919)){
var new_link_41920 = (function (){var G__41600 = node_41918.cloneNode(true);
G__41600.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41919),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41600;
})();
(node_41918.shadow$old = true);

(new_link_41920.onload = ((function (seq__41522_41914,chunk__41526_41915,count__41527_41916,i__41528_41917,seq__41111,chunk__41113,count__41114,i__41115,new_link_41920,path_match_41919,node_41918,path,seq__41111__$1,temp__5823__auto__,map__41110,map__41110__$1,msg,updates,reload_info){
return (function (e){
var seq__41601_41921 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41603_41922 = null;
var count__41604_41923 = (0);
var i__41605_41924 = (0);
while(true){
if((i__41605_41924 < count__41604_41923)){
var map__41609_41925 = chunk__41603_41922.cljs$core$IIndexed$_nth$arity$2(null, i__41605_41924);
var map__41609_41926__$1 = cljs.core.__destructure_map(map__41609_41925);
var task_41927 = map__41609_41926__$1;
var fn_str_41928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41609_41926__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41609_41926__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41931 = goog.getObjectByName(fn_str_41928,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41929)].join(''));

(fn_obj_41931.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41931.cljs$core$IFn$_invoke$arity$2(path,new_link_41920) : fn_obj_41931.call(null, path,new_link_41920));


var G__41933 = seq__41601_41921;
var G__41934 = chunk__41603_41922;
var G__41935 = count__41604_41923;
var G__41936 = (i__41605_41924 + (1));
seq__41601_41921 = G__41933;
chunk__41603_41922 = G__41934;
count__41604_41923 = G__41935;
i__41605_41924 = G__41936;
continue;
} else {
var temp__5823__auto___41937__$1 = cljs.core.seq(seq__41601_41921);
if(temp__5823__auto___41937__$1){
var seq__41601_41938__$1 = temp__5823__auto___41937__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41601_41938__$1)){
var c__5525__auto___41939 = cljs.core.chunk_first(seq__41601_41938__$1);
var G__41940 = cljs.core.chunk_rest(seq__41601_41938__$1);
var G__41941 = c__5525__auto___41939;
var G__41942 = cljs.core.count(c__5525__auto___41939);
var G__41943 = (0);
seq__41601_41921 = G__41940;
chunk__41603_41922 = G__41941;
count__41604_41923 = G__41942;
i__41605_41924 = G__41943;
continue;
} else {
var map__41610_41944 = cljs.core.first(seq__41601_41938__$1);
var map__41610_41945__$1 = cljs.core.__destructure_map(map__41610_41944);
var task_41946 = map__41610_41945__$1;
var fn_str_41947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41610_41945__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41610_41945__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41950 = goog.getObjectByName(fn_str_41947,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41948)].join(''));

(fn_obj_41950.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41950.cljs$core$IFn$_invoke$arity$2(path,new_link_41920) : fn_obj_41950.call(null, path,new_link_41920));


var G__41952 = cljs.core.next(seq__41601_41938__$1);
var G__41953 = null;
var G__41954 = (0);
var G__41955 = (0);
seq__41601_41921 = G__41952;
chunk__41603_41922 = G__41953;
count__41604_41923 = G__41954;
i__41605_41924 = G__41955;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41918);
});})(seq__41522_41914,chunk__41526_41915,count__41527_41916,i__41528_41917,seq__41111,chunk__41113,count__41114,i__41115,new_link_41920,path_match_41919,node_41918,path,seq__41111__$1,temp__5823__auto__,map__41110,map__41110__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41919], 0));

goog.dom.insertSiblingAfter(new_link_41920,node_41918);


var G__41956 = seq__41522_41914;
var G__41957 = chunk__41526_41915;
var G__41958 = count__41527_41916;
var G__41959 = (i__41528_41917 + (1));
seq__41522_41914 = G__41956;
chunk__41526_41915 = G__41957;
count__41527_41916 = G__41958;
i__41528_41917 = G__41959;
continue;
} else {
var G__41960 = seq__41522_41914;
var G__41961 = chunk__41526_41915;
var G__41962 = count__41527_41916;
var G__41963 = (i__41528_41917 + (1));
seq__41522_41914 = G__41960;
chunk__41526_41915 = G__41961;
count__41527_41916 = G__41962;
i__41528_41917 = G__41963;
continue;
}
} else {
var G__41964 = seq__41522_41914;
var G__41965 = chunk__41526_41915;
var G__41966 = count__41527_41916;
var G__41967 = (i__41528_41917 + (1));
seq__41522_41914 = G__41964;
chunk__41526_41915 = G__41965;
count__41527_41916 = G__41966;
i__41528_41917 = G__41967;
continue;
}
} else {
var temp__5823__auto___41968__$1 = cljs.core.seq(seq__41522_41914);
if(temp__5823__auto___41968__$1){
var seq__41522_41969__$1 = temp__5823__auto___41968__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41522_41969__$1)){
var c__5525__auto___41970 = cljs.core.chunk_first(seq__41522_41969__$1);
var G__41971 = cljs.core.chunk_rest(seq__41522_41969__$1);
var G__41972 = c__5525__auto___41970;
var G__41973 = cljs.core.count(c__5525__auto___41970);
var G__41974 = (0);
seq__41522_41914 = G__41971;
chunk__41526_41915 = G__41972;
count__41527_41916 = G__41973;
i__41528_41917 = G__41974;
continue;
} else {
var node_41975 = cljs.core.first(seq__41522_41969__$1);
if(cljs.core.not(node_41975.shadow$old)){
var path_match_41976 = shadow.cljs.devtools.client.browser.match_paths(node_41975.getAttribute("href"),path);
if(cljs.core.truth_(path_match_41976)){
var new_link_41977 = (function (){var G__41611 = node_41975.cloneNode(true);
G__41611.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_41976),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__41611;
})();
(node_41975.shadow$old = true);

(new_link_41977.onload = ((function (seq__41522_41914,chunk__41526_41915,count__41527_41916,i__41528_41917,seq__41111,chunk__41113,count__41114,i__41115,new_link_41977,path_match_41976,node_41975,seq__41522_41969__$1,temp__5823__auto___41968__$1,path,seq__41111__$1,temp__5823__auto__,map__41110,map__41110__$1,msg,updates,reload_info){
return (function (e){
var seq__41612_41978 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__41614_41979 = null;
var count__41615_41980 = (0);
var i__41616_41981 = (0);
while(true){
if((i__41616_41981 < count__41615_41980)){
var map__41624_41982 = chunk__41614_41979.cljs$core$IIndexed$_nth$arity$2(null, i__41616_41981);
var map__41624_41983__$1 = cljs.core.__destructure_map(map__41624_41982);
var task_41984 = map__41624_41983__$1;
var fn_str_41985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41624_41983__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_41986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41624_41983__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_41987 = goog.getObjectByName(fn_str_41985,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_41986)].join(''));

(fn_obj_41987.cljs$core$IFn$_invoke$arity$2 ? fn_obj_41987.cljs$core$IFn$_invoke$arity$2(path,new_link_41977) : fn_obj_41987.call(null, path,new_link_41977));


var G__41988 = seq__41612_41978;
var G__41989 = chunk__41614_41979;
var G__41990 = count__41615_41980;
var G__41991 = (i__41616_41981 + (1));
seq__41612_41978 = G__41988;
chunk__41614_41979 = G__41989;
count__41615_41980 = G__41990;
i__41616_41981 = G__41991;
continue;
} else {
var temp__5823__auto___41992__$2 = cljs.core.seq(seq__41612_41978);
if(temp__5823__auto___41992__$2){
var seq__41612_41993__$1 = temp__5823__auto___41992__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41612_41993__$1)){
var c__5525__auto___41994 = cljs.core.chunk_first(seq__41612_41993__$1);
var G__41995 = cljs.core.chunk_rest(seq__41612_41993__$1);
var G__41996 = c__5525__auto___41994;
var G__41997 = cljs.core.count(c__5525__auto___41994);
var G__41998 = (0);
seq__41612_41978 = G__41995;
chunk__41614_41979 = G__41996;
count__41615_41980 = G__41997;
i__41616_41981 = G__41998;
continue;
} else {
var map__41641_41999 = cljs.core.first(seq__41612_41993__$1);
var map__41641_42000__$1 = cljs.core.__destructure_map(map__41641_41999);
var task_42001 = map__41641_42000__$1;
var fn_str_42002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41641_42000__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_42003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41641_42000__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_42004 = goog.getObjectByName(fn_str_42002,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_42003)].join(''));

(fn_obj_42004.cljs$core$IFn$_invoke$arity$2 ? fn_obj_42004.cljs$core$IFn$_invoke$arity$2(path,new_link_41977) : fn_obj_42004.call(null, path,new_link_41977));


var G__42005 = cljs.core.next(seq__41612_41993__$1);
var G__42006 = null;
var G__42007 = (0);
var G__42008 = (0);
seq__41612_41978 = G__42005;
chunk__41614_41979 = G__42006;
count__41615_41980 = G__42007;
i__41616_41981 = G__42008;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_41975);
});})(seq__41522_41914,chunk__41526_41915,count__41527_41916,i__41528_41917,seq__41111,chunk__41113,count__41114,i__41115,new_link_41977,path_match_41976,node_41975,seq__41522_41969__$1,temp__5823__auto___41968__$1,path,seq__41111__$1,temp__5823__auto__,map__41110,map__41110__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_41976], 0));

goog.dom.insertSiblingAfter(new_link_41977,node_41975);


var G__42010 = cljs.core.next(seq__41522_41969__$1);
var G__42011 = null;
var G__42012 = (0);
var G__42013 = (0);
seq__41522_41914 = G__42010;
chunk__41526_41915 = G__42011;
count__41527_41916 = G__42012;
i__41528_41917 = G__42013;
continue;
} else {
var G__42014 = cljs.core.next(seq__41522_41969__$1);
var G__42015 = null;
var G__42016 = (0);
var G__42017 = (0);
seq__41522_41914 = G__42014;
chunk__41526_41915 = G__42015;
count__41527_41916 = G__42016;
i__41528_41917 = G__42017;
continue;
}
} else {
var G__42018 = cljs.core.next(seq__41522_41969__$1);
var G__42019 = null;
var G__42020 = (0);
var G__42021 = (0);
seq__41522_41914 = G__42018;
chunk__41526_41915 = G__42019;
count__41527_41916 = G__42020;
i__41528_41917 = G__42021;
continue;
}
}
} else {
}
}
break;
}


var G__42022 = cljs.core.next(seq__41111__$1);
var G__42023 = null;
var G__42024 = (0);
var G__42025 = (0);
seq__41111 = G__42022;
chunk__41113 = G__42023;
count__41114 = G__42024;
i__41115 = G__42025;
continue;
} else {
var G__42026 = cljs.core.next(seq__41111__$1);
var G__42027 = null;
var G__42028 = (0);
var G__42029 = (0);
seq__41111 = G__42026;
chunk__41113 = G__42027;
count__41114 = G__42028;
i__41115 = G__42029;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__41668){
var map__41669 = p__41668;
var map__41669__$1 = cljs.core.__destructure_map(map__41669);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41669__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__41671,done,error){
var map__41673 = p__41671;
var map__41673__$1 = cljs.core.__destructure_map(map__41673);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41673__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null, ));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__41676,done,error){
var map__41678 = p__41676;
var map__41678__$1 = cljs.core.__destructure_map(map__41678);
var msg = map__41678__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41678__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41678__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41678__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__41679){
var map__41680 = p__41679;
var map__41680__$1 = cljs.core.__destructure_map(map__41680);
var src = map__41680__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41680__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__41681 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__41681) : done.call(null, G__41681));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__41682){
var map__41683 = p__41682;
var map__41683__$1 = cljs.core.__destructure_map(map__41683);
var msg__$1 = map__41683__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41683__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null, sources_to_load));
}catch (e41684){var ex = e41684;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null, ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__41685){
var map__41686 = p__41685;
var map__41686__$1 = cljs.core.__destructure_map(map__41686);
var env = map__41686__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41686__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__41689){
var map__41690 = p__41689;
var map__41690__$1 = cljs.core.__destructure_map(map__41690);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41690__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41690__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__41694){
var map__41695 = p__41694;
var map__41695__$1 = cljs.core.__destructure_map(map__41695);
var svc = map__41695__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41695__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
