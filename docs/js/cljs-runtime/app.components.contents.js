goog.provide('app.components.contents');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
app.components.contents.indentmap = new cljs.core.PersistentArrayMap(null, 2, ["d/h2",(shadow.css.sel("app_components_contents__L9_C11")),"d/h3",(shadow.css.sel("app_components_contents__L10_C11"))], null);
app.components.contents.stylemap = new cljs.core.PersistentArrayMap(null, 2, ["d/h2",(shadow.css.sel("app_components_contents__L12_C11")),"d/h3",(shadow.css.sel("app_components_contents__L13_C11"))], null);

app.components.contents.TableOfContents = (function (){var G__41039 = (function app$components$contents$TableOfContents_render(props__32224__auto__,maybe_ref__32225__auto__){
var vec__41040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__32224__auto__),maybe_ref__32225__auto__], null);
var map__41043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41040,(0),null);
var map__41043__$1 = cljs.core.__destructure_map(map__41043);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41043__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));

return helix.core.get_react().createElement("nav",(function (){var obj41045 = ({"className":(shadow.css.sel("app_components_contents__L16_C23"))});
return obj41045;
})(),helix.core.get_react().createElement("h1",(function (){var obj41047 = ({"className":(shadow.css.sel("app_components_contents__L17_C24"))});
return obj41047;
})(),"Table of Contents"),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement("ul",(function (){var obj41049 = ({"className":(shadow.css.sel("app_components_contents__L19_C24"))});
return obj41049;
})(),(function (){var iter__5480__auto__ = (function app$components$contents$TableOfContents_render_$_iter__41050(s__41051){
return (new cljs.core.LazySeq(null,(function (){
var s__41051__$1 = s__41051;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__41051__$1);
if(temp__5823__auto__){
var s__41051__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41051__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__41051__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__41053 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__41052 = (0);
while(true){
if((i__41052 < size__5479__auto__)){
var vec__41054 = cljs.core._nth(c__5478__auto__,i__41052);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41054,(0),null);
var atts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41054,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41054,(2),null);
cljs.core.chunk_append(b__41053,helix.core.get_react().createElement("li",(function (){var obj41058 = ({"className":(function (){var G__41059 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag);
return (app.components.contents.indentmap.cljs$core$IFn$_invoke$arity$1 ? app.components.contents.indentmap.cljs$core$IFn$_invoke$arity$1(G__41059) : app.components.contents.indentmap.call(null, G__41059));
})()});
return obj41058;
})(),helix.core.get_react().createElement("a",(function (){var obj41061 = ({"href":["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(atts))].join(''),"className":(function (){var G__41062 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag);
return (app.components.contents.stylemap.cljs$core$IFn$_invoke$arity$1 ? app.components.contents.stylemap.cljs$core$IFn$_invoke$arity$1(G__41062) : app.components.contents.stylemap.call(null, G__41062));
})()});
return obj41061;
})(),text)));

var G__41073 = (i__41052 + (1));
i__41052 = G__41073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41053),app$components$contents$TableOfContents_render_$_iter__41050(cljs.core.chunk_rest(s__41051__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41053),null);
}
} else {
var vec__41063 = cljs.core.first(s__41051__$2);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41063,(0),null);
var atts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41063,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41063,(2),null);
return cljs.core.cons(helix.core.get_react().createElement("li",(function (){var obj41067 = ({"className":(function (){var G__41068 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag);
return (app.components.contents.indentmap.cljs$core$IFn$_invoke$arity$1 ? app.components.contents.indentmap.cljs$core$IFn$_invoke$arity$1(G__41068) : app.components.contents.indentmap.call(null, G__41068));
})()});
return obj41067;
})(),helix.core.get_react().createElement("a",(function (){var obj41070 = ({"href":["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(atts))].join(''),"className":(function (){var G__41071 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag);
return (app.components.contents.stylemap.cljs$core$IFn$_invoke$arity$1 ? app.components.contents.stylemap.cljs$core$IFn$_invoke$arity$1(G__41071) : app.components.contents.stylemap.call(null, G__41071));
})()});
return obj41070;
})(),text)),app$components$contents$TableOfContents_render_$_iter__41050(cljs.core.rest(s__41051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(headers);
})()));
});
if(goog.DEBUG === true){
var G__41072 = G__41039;
(G__41072.displayName = "app.components.contents/TableOfContents");

return G__41072;
} else {
return G__41039;
}
})();




//# sourceMappingURL=app.components.contents.js.map
