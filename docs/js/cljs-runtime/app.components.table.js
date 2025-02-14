goog.provide('app.components.table');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});

app.components.table.Table = (function (){var G__43051 = (function app$components$table$Table_render(props__42219__auto__,maybe_ref__42220__auto__){
var vec__43052 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__42219__auto__),maybe_ref__42220__auto__], null);
var map__43055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43052,(0),null);
var map__43055__$1 = cljs.core.__destructure_map(map__43055);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43055__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43055__$1,new cljs.core.Keyword(null,"rows","rows",850049680));

return helix.core.get_react().createElement("table",null,helix.core.get_react().createElement("tr",(function (){var obj43057 = ({"className":(shadow.css.sel("app_components_table__L11_C23"))});
return obj43057;
})(),(function (){var iter__5480__auto__ = (function app$components$table$Table_render_$_iter__43058(s__43059){
return (new cljs.core.LazySeq(null,(function (){
var s__43059__$1 = s__43059;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__43059__$1);
if(temp__5823__auto__){
var s__43059__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43059__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__43059__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__43061 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__43060 = (0);
while(true){
if((i__43060 < size__5479__auto__)){
var h = cljs.core._nth(c__5478__auto__,i__43060);
cljs.core.chunk_append(b__43061,helix.core.get_react().createElement("th",(function (){var obj43066 = ({"className":(shadow.css.sel("app_components_table__L12_C46"))});
return obj43066;
})(),h));

var G__43147 = (i__43060 + (1));
i__43060 = G__43147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43061),app$components$table$Table_render_$_iter__43058(cljs.core.chunk_rest(s__43059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43061),null);
}
} else {
var h = cljs.core.first(s__43059__$2);
return cljs.core.cons(helix.core.get_react().createElement("th",(function (){var obj43072 = ({"className":(shadow.css.sel("app_components_table__L12_C46"))});
return obj43072;
})(),h),app$components$table$Table_render_$_iter__43058(cljs.core.rest(s__43059__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(headers);
})()),(function (){var iter__5480__auto__ = (function app$components$table$Table_render_$_iter__43074(s__43075){
return (new cljs.core.LazySeq(null,(function (){
var s__43075__$1 = s__43075;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__43075__$1);
if(temp__5823__auto__){
var s__43075__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43075__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__43075__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__43077 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__43076 = (0);
while(true){
if((i__43076 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__43076);
cljs.core.chunk_append(b__43077,helix.core.get_react().createElement("tr",(function (){var obj43088 = ({"className":(shadow.css.sel("app_components_table__L13_C37"))});
return obj43088;
})(),(function (){var iter__5480__auto__ = ((function (i__43076,r,c__5478__auto__,size__5479__auto__,b__43077,s__43075__$2,temp__5823__auto__,vec__43052,map__43055,map__43055__$1,headers,rows){
return (function app$components$table$Table_render_$_iter__43074_$_iter__43089(s__43090){
return (new cljs.core.LazySeq(null,((function (i__43076,r,c__5478__auto__,size__5479__auto__,b__43077,s__43075__$2,temp__5823__auto__,vec__43052,map__43055,map__43055__$1,headers,rows){
return (function (){
var s__43090__$1 = s__43090;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__43090__$1);
if(temp__5823__auto____$1){
var s__43090__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43090__$2)){
var c__5478__auto____$1 = cljs.core.chunk_first(s__43090__$2);
var size__5479__auto____$1 = cljs.core.count(c__5478__auto____$1);
var b__43092 = cljs.core.chunk_buffer(size__5479__auto____$1);
if((function (){var i__43091 = (0);
while(true){
if((i__43091 < size__5479__auto____$1)){
var c = cljs.core._nth(c__5478__auto____$1,i__43091);
cljs.core.chunk_append(b__43092,helix.core.get_react().createElement("td",(function (){var obj43096 = ({"className":(shadow.css.sel("app_components_table__L13_C86"))});
return obj43096;
})(),c));

var G__43149 = (i__43091 + (1));
i__43091 = G__43149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43092),app$components$table$Table_render_$_iter__43074_$_iter__43089(cljs.core.chunk_rest(s__43090__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43092),null);
}
} else {
var c = cljs.core.first(s__43090__$2);
return cljs.core.cons(helix.core.get_react().createElement("td",(function (){var obj43098 = ({"className":(shadow.css.sel("app_components_table__L13_C86"))});
return obj43098;
})(),c),app$components$table$Table_render_$_iter__43074_$_iter__43089(cljs.core.rest(s__43090__$2)));
}
} else {
return null;
}
break;
}
});})(i__43076,r,c__5478__auto__,size__5479__auto__,b__43077,s__43075__$2,temp__5823__auto__,vec__43052,map__43055,map__43055__$1,headers,rows))
,null,null));
});})(i__43076,r,c__5478__auto__,size__5479__auto__,b__43077,s__43075__$2,temp__5823__auto__,vec__43052,map__43055,map__43055__$1,headers,rows))
;
return iter__5480__auto__(r);
})()));

var G__43153 = (i__43076 + (1));
i__43076 = G__43153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43077),app$components$table$Table_render_$_iter__43074(cljs.core.chunk_rest(s__43075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43077),null);
}
} else {
var r = cljs.core.first(s__43075__$2);
return cljs.core.cons(helix.core.get_react().createElement("tr",(function (){var obj43102 = ({"className":(shadow.css.sel("app_components_table__L13_C37"))});
return obj43102;
})(),(function (){var iter__5480__auto__ = ((function (r,s__43075__$2,temp__5823__auto__,vec__43052,map__43055,map__43055__$1,headers,rows){
return (function app$components$table$Table_render_$_iter__43074_$_iter__43103(s__43104){
return (new cljs.core.LazySeq(null,(function (){
var s__43104__$1 = s__43104;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__43104__$1);
if(temp__5823__auto____$1){
var s__43104__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43104__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__43104__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__43106 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__43105 = (0);
while(true){
if((i__43105 < size__5479__auto__)){
var c = cljs.core._nth(c__5478__auto__,i__43105);
cljs.core.chunk_append(b__43106,helix.core.get_react().createElement("td",(function (){var obj43114 = ({"className":(shadow.css.sel("app_components_table__L13_C86"))});
return obj43114;
})(),c));

var G__43158 = (i__43105 + (1));
i__43105 = G__43158;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43106),app$components$table$Table_render_$_iter__43074_$_iter__43103(cljs.core.chunk_rest(s__43104__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43106),null);
}
} else {
var c = cljs.core.first(s__43104__$2);
return cljs.core.cons(helix.core.get_react().createElement("td",(function (){var obj43120 = ({"className":(shadow.css.sel("app_components_table__L13_C86"))});
return obj43120;
})(),c),app$components$table$Table_render_$_iter__43074_$_iter__43103(cljs.core.rest(s__43104__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(r,s__43075__$2,temp__5823__auto__,vec__43052,map__43055,map__43055__$1,headers,rows))
;
return iter__5480__auto__(r);
})()),app$components$table$Table_render_$_iter__43074(cljs.core.rest(s__43075__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(rows);
})());
});
if(goog.DEBUG === true){
var G__43142 = G__43051;
(G__43142.displayName = "app.components.table/Table");

return G__43142;
} else {
return G__43051;
}
})();




//# sourceMappingURL=app.components.table.js.map
