goog.provide('app.components.cards');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
app.components.cards.colors = new cljs.core.PersistentArrayMap(null, 4, ["s",(shadow.css.sel("app_components_cards__L14_C8")),"h",(shadow.css.sel("app_components_cards__L15_C8")),"c",(shadow.css.sel("app_components_cards__L16_C8")),"d",(shadow.css.sel("app_components_cards__L17_C8"))], null);
app.components.cards.shapes = new cljs.core.PersistentArrayMap(null, 4, ["s","\u2660\uFE0E","h","\u2665\uFE0E","c","\u2663\uFE0E","d","\u2666\uFE0E"], null);
app.components.cards.card_text = (function app$components$cards$card_text(text){
return helix.core.get_react().createElement("span",(function (){var obj43042 = ({"className":cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.components.cards.colors,cljs.core.last(text))});
return obj43042;
})(),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(text)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.components.cards.shapes,cljs.core.last(text)))].join(''));
});
app.components.cards.hand_text = (function app$components$cards$hand_text(var_args){
var args__5732__auto__ = [];
var len__5726__auto___43062 = arguments.length;
var i__5727__auto___43063 = (0);
while(true){
if((i__5727__auto___43063 < len__5726__auto___43062)){
args__5732__auto__.push((arguments[i__5727__auto___43063]));

var G__43064 = (i__5727__auto___43063 + (1));
i__5727__auto___43063 = G__43064;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return app.components.cards.hand_text.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(app.components.cards.hand_text.cljs$core$IFn$_invoke$arity$variadic = (function (strings){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.components.cards.card_text,strings);
}));

(app.components.cards.hand_text.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.components.cards.hand_text.cljs$lang$applyTo = (function (seq43043){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43043));
}));

app.components.cards.card_img = (function app$components$cards$card_img(text){
return helix.core.get_react().createElement("div",(function (){var obj43045 = ({"className":(shadow.css.sel("app_components_cards__L35_C23"))});
return obj43045;
})(),helix.core.get_react().createElement("div",(function (){var obj43047 = ({"className":cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.components.cardstyle.cards,text)});
return obj43047;
})()));
});
app.components.cards.hand_img = (function app$components$cards$hand_img(var_args){
var args__5732__auto__ = [];
var len__5726__auto___43067 = arguments.length;
var i__5727__auto___43068 = (0);
while(true){
if((i__5727__auto___43068 < len__5726__auto___43067)){
args__5732__auto__.push((arguments[i__5727__auto___43068]));

var G__43069 = (i__5727__auto___43068 + (1));
i__5727__auto___43068 = G__43069;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return app.components.cards.hand_img.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(app.components.cards.hand_img.cljs$core$IFn$_invoke$arity$variadic = (function (strings){
return helix.core.get_react().createElement("div",(function (){var obj43050 = ({"className":(shadow.css.sel("app_components_cards__L39_C23"))});
return obj43050;
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.components.cards.card_img,strings));
}));

(app.components.cards.hand_img.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.components.cards.hand_img.cljs$lang$applyTo = (function (seq43048){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43048));
}));


//# sourceMappingURL=app.components.cards.js.map
