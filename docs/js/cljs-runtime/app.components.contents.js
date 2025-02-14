goog.provide('app.components.contents');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
app.components.contents.indentmap = new cljs.core.PersistentArrayMap(null, 2, ["d/h2",(shadow.css.sel("app_components_contents__L9_C11")),"d/h3",(shadow.css.sel("app_components_contents__L10_C11"))], null);
app.components.contents.stylemap = new cljs.core.PersistentArrayMap(null, 2, ["d/h2",(shadow.css.sel("app_components_contents__L12_C11")),"d/h3",(shadow.css.sel("app_components_contents__L13_C11"))], null);

app.components.contents.TableOfContents = (function (){var G__43073 = (function app$components$contents$TableOfContents_render(props__42219__auto__,maybe_ref__42220__auto__){
var vec__43078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__42219__auto__),maybe_ref__42220__auto__], null);
var map__43081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43078,(0),null);
var map__43081__$1 = cljs.core.__destructure_map(map__43081);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43081__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));

return helix.core.get_react().createElement("nav",(function (){var obj43094 = ({"className":(shadow.css.sel("app_components_contents__L16_C23"))});
return obj43094;
})(),helix.core.get_react().createElement("h1",(function (){var obj43100 = ({"className":(shadow.css.sel("app_components_contents__L17_C24"))});
return obj43100;
})(),"Table of Contents"),helix.core.get_react().createElement("br",null),helix.core.get_react().createElement("ul",(function (){var obj43110 = ({"className":(shadow.css.sel("app_components_contents__L19_C24"))});
return obj43110;
})(),(function (){var iter__5480__auto__ = (function app$components$contents$TableOfContents_render_$_iter__43115(s__43116){
return (new cljs.core.LazySeq(null,(function (){
var s__43116__$1 = s__43116;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__43116__$1);
if(temp__5823__auto__){
var s__43116__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43116__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__43116__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__43118 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__43117 = (0);
while(true){
if((i__43117 < size__5479__auto__)){
var vec__43136 = cljs.core._nth(c__5478__auto__,i__43117);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43136,(0),null);
var atts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43136,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43136,(2),null);
cljs.core.chunk_append(b__43118,helix.core.get_react().createElement("li",(function (){var obj43141 = ({"className":(function (){var G__43143 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag);
return (app.components.contents.indentmap.cljs$core$IFn$_invoke$arity$1 ? app.components.contents.indentmap.cljs$core$IFn$_invoke$arity$1(G__43143) : app.components.contents.indentmap.call(null, G__43143));
})()});
return obj43141;
})(),helix.core.get_react().createElement("a",(function (){var obj43145 = ({"href":["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(atts))].join(''),"className":(function (){var G__43146 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag);
return (app.components.contents.stylemap.cljs$core$IFn$_invoke$arity$1 ? app.components.contents.stylemap.cljs$core$IFn$_invoke$arity$1(G__43146) : app.components.contents.stylemap.call(null, G__43146));
})()});
return obj43145;
})(),text)));

var G__43180 = (i__43117 + (1));
i__43117 = G__43180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43118),app$components$contents$TableOfContents_render_$_iter__43115(cljs.core.chunk_rest(s__43116__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43118),null);
}
} else {
var vec__43150 = cljs.core.first(s__43116__$2);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43150,(0),null);
var atts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43150,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43150,(2),null);
return cljs.core.cons(helix.core.get_react().createElement("li",(function (){var obj43160 = ({"className":(function (){var G__43161 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag);
return (app.components.contents.indentmap.cljs$core$IFn$_invoke$arity$1 ? app.components.contents.indentmap.cljs$core$IFn$_invoke$arity$1(G__43161) : app.components.contents.indentmap.call(null, G__43161));
})()});
return obj43160;
})(),helix.core.get_react().createElement("a",(function (){var obj43165 = ({"href":["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(atts))].join(''),"className":(function (){var G__43166 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag);
return (app.components.contents.stylemap.cljs$core$IFn$_invoke$arity$1 ? app.components.contents.stylemap.cljs$core$IFn$_invoke$arity$1(G__43166) : app.components.contents.stylemap.call(null, G__43166));
})()});
return obj43165;
})(),text)),app$components$contents$TableOfContents_render_$_iter__43115(cljs.core.rest(s__43116__$2)));
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
var G__43171 = G__43073;
(G__43171.displayName = "app.components.contents/TableOfContents");

return G__43171;
} else {
return G__43073;
}
})();




//# sourceMappingURL=app.components.contents.js.map
