goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_32671 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_32671(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_32672 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_32672(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__31896 = coll;
var G__31897 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__31896,G__31897) : shadow.dom.lazy_native_coll_seq.call(null, G__31896,G__31897));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null, );
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__31900 = arguments.length;
switch (G__31900) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__31902 = arguments.length;
switch (G__31902) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__31904 = arguments.length;
switch (G__31904) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__31910 = arguments.length;
switch (G__31910) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__31914 = arguments.length;
switch (G__31914) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__31918 = arguments.length;
switch (G__31918) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
}));
}catch (e31923){if((e31923 instanceof Object)){
var e = e31923;
return console.log("didnt support attachEvent",el,e);
} else {
throw e31923;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__31931 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__31932 = null;
var count__31933 = (0);
var i__31934 = (0);
while(true){
if((i__31934 < count__31933)){
var el = chunk__31932.cljs$core$IIndexed$_nth$arity$2(null, i__31934);
var handler_32724__$1 = ((function (seq__31931,chunk__31932,count__31933,i__31934,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__31931,chunk__31932,count__31933,i__31934,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32724__$1);


var G__32725 = seq__31931;
var G__32726 = chunk__31932;
var G__32727 = count__31933;
var G__32728 = (i__31934 + (1));
seq__31931 = G__32725;
chunk__31932 = G__32726;
count__31933 = G__32727;
i__31934 = G__32728;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__31931);
if(temp__5823__auto__){
var seq__31931__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31931__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31931__$1);
var G__32732 = cljs.core.chunk_rest(seq__31931__$1);
var G__32733 = c__5525__auto__;
var G__32734 = cljs.core.count(c__5525__auto__);
var G__32735 = (0);
seq__31931 = G__32732;
chunk__31932 = G__32733;
count__31933 = G__32734;
i__31934 = G__32735;
continue;
} else {
var el = cljs.core.first(seq__31931__$1);
var handler_32741__$1 = ((function (seq__31931,chunk__31932,count__31933,i__31934,el,seq__31931__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});})(seq__31931,chunk__31932,count__31933,i__31934,el,seq__31931__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_32741__$1);


var G__32756 = cljs.core.next(seq__31931__$1);
var G__32757 = null;
var G__32758 = (0);
var G__32759 = (0);
seq__31931 = G__32756;
chunk__31932 = G__32757;
count__31933 = G__32758;
i__31934 = G__32759;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__31940 = arguments.length;
switch (G__31940) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null, e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__31945 = cljs.core.seq(events);
var chunk__31946 = null;
var count__31947 = (0);
var i__31948 = (0);
while(true){
if((i__31948 < count__31947)){
var vec__31963 = chunk__31946.cljs$core$IIndexed$_nth$arity$2(null, i__31948);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31963,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31963,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32765 = seq__31945;
var G__32766 = chunk__31946;
var G__32767 = count__31947;
var G__32768 = (i__31948 + (1));
seq__31945 = G__32765;
chunk__31946 = G__32766;
count__31947 = G__32767;
i__31948 = G__32768;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__31945);
if(temp__5823__auto__){
var seq__31945__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31945__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31945__$1);
var G__32769 = cljs.core.chunk_rest(seq__31945__$1);
var G__32770 = c__5525__auto__;
var G__32771 = cljs.core.count(c__5525__auto__);
var G__32772 = (0);
seq__31945 = G__32769;
chunk__31946 = G__32770;
count__31947 = G__32771;
i__31948 = G__32772;
continue;
} else {
var vec__31966 = cljs.core.first(seq__31945__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31966,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31966,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__32774 = cljs.core.next(seq__31945__$1);
var G__32775 = null;
var G__32776 = (0);
var G__32777 = (0);
seq__31945 = G__32774;
chunk__31946 = G__32775;
count__31947 = G__32776;
i__31948 = G__32777;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__31978 = cljs.core.seq(styles);
var chunk__31979 = null;
var count__31980 = (0);
var i__31981 = (0);
while(true){
if((i__31981 < count__31980)){
var vec__31993 = chunk__31979.cljs$core$IIndexed$_nth$arity$2(null, i__31981);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31993,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31993,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32779 = seq__31978;
var G__32780 = chunk__31979;
var G__32781 = count__31980;
var G__32782 = (i__31981 + (1));
seq__31978 = G__32779;
chunk__31979 = G__32780;
count__31980 = G__32781;
i__31981 = G__32782;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__31978);
if(temp__5823__auto__){
var seq__31978__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31978__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__31978__$1);
var G__32786 = cljs.core.chunk_rest(seq__31978__$1);
var G__32787 = c__5525__auto__;
var G__32788 = cljs.core.count(c__5525__auto__);
var G__32789 = (0);
seq__31978 = G__32786;
chunk__31979 = G__32787;
count__31980 = G__32788;
i__31981 = G__32789;
continue;
} else {
var vec__31997 = cljs.core.first(seq__31978__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31997,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31997,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__32790 = cljs.core.next(seq__31978__$1);
var G__32791 = null;
var G__32792 = (0);
var G__32793 = (0);
seq__31978 = G__32790;
chunk__31979 = G__32791;
count__31980 = G__32792;
i__31981 = G__32793;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32007_32794 = key;
var G__32007_32795__$1 = (((G__32007_32794 instanceof cljs.core.Keyword))?G__32007_32794.fqn:null);
switch (G__32007_32795__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_32799 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_32799,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_32799,"aria-");
}
})())){
el.setAttribute(ks_32799,value);
} else {
(el[ks_32799] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32031){
var map__32032 = p__32031;
var map__32032__$1 = cljs.core.__destructure_map(map__32032);
var props = map__32032__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32032__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32033 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32033,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32033,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32033,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32036 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32036,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32036;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32041 = arguments.length;
switch (G__32041) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32058){
var vec__32060 = p__32058;
var seq__32061 = cljs.core.seq(vec__32060);
var first__32062 = cljs.core.first(seq__32061);
var seq__32061__$1 = cljs.core.next(seq__32061);
var nn = first__32062;
var first__32062__$1 = cljs.core.first(seq__32061__$1);
var seq__32061__$2 = cljs.core.next(seq__32061__$1);
var np = first__32062__$1;
var nc = seq__32061__$2;
var node = vec__32060;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32067 = nn;
var G__32068 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32067,G__32068) : create_fn.call(null, G__32067,G__32068));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null, nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32069 = nn;
var G__32070 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32069,G__32070) : create_fn.call(null, G__32069,G__32070));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32076 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32076,(1),null);
var seq__32082_32820 = cljs.core.seq(node_children);
var chunk__32083_32821 = null;
var count__32084_32822 = (0);
var i__32085_32823 = (0);
while(true){
if((i__32085_32823 < count__32084_32822)){
var child_struct_32828 = chunk__32083_32821.cljs$core$IIndexed$_nth$arity$2(null, i__32085_32823);
var children_32832 = shadow.dom.dom_node(child_struct_32828);
if(cljs.core.seq_QMARK_(children_32832)){
var seq__32115_32834 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32832));
var chunk__32117_32835 = null;
var count__32118_32836 = (0);
var i__32119_32837 = (0);
while(true){
if((i__32119_32837 < count__32118_32836)){
var child_32840 = chunk__32117_32835.cljs$core$IIndexed$_nth$arity$2(null, i__32119_32837);
if(cljs.core.truth_(child_32840)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32840);


var G__32841 = seq__32115_32834;
var G__32842 = chunk__32117_32835;
var G__32843 = count__32118_32836;
var G__32844 = (i__32119_32837 + (1));
seq__32115_32834 = G__32841;
chunk__32117_32835 = G__32842;
count__32118_32836 = G__32843;
i__32119_32837 = G__32844;
continue;
} else {
var G__32845 = seq__32115_32834;
var G__32846 = chunk__32117_32835;
var G__32847 = count__32118_32836;
var G__32848 = (i__32119_32837 + (1));
seq__32115_32834 = G__32845;
chunk__32117_32835 = G__32846;
count__32118_32836 = G__32847;
i__32119_32837 = G__32848;
continue;
}
} else {
var temp__5823__auto___32850 = cljs.core.seq(seq__32115_32834);
if(temp__5823__auto___32850){
var seq__32115_32853__$1 = temp__5823__auto___32850;
if(cljs.core.chunked_seq_QMARK_(seq__32115_32853__$1)){
var c__5525__auto___32855 = cljs.core.chunk_first(seq__32115_32853__$1);
var G__32857 = cljs.core.chunk_rest(seq__32115_32853__$1);
var G__32859 = c__5525__auto___32855;
var G__32860 = cljs.core.count(c__5525__auto___32855);
var G__32861 = (0);
seq__32115_32834 = G__32857;
chunk__32117_32835 = G__32859;
count__32118_32836 = G__32860;
i__32119_32837 = G__32861;
continue;
} else {
var child_32863 = cljs.core.first(seq__32115_32853__$1);
if(cljs.core.truth_(child_32863)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32863);


var G__32866 = cljs.core.next(seq__32115_32853__$1);
var G__32867 = null;
var G__32868 = (0);
var G__32869 = (0);
seq__32115_32834 = G__32866;
chunk__32117_32835 = G__32867;
count__32118_32836 = G__32868;
i__32119_32837 = G__32869;
continue;
} else {
var G__32871 = cljs.core.next(seq__32115_32853__$1);
var G__32872 = null;
var G__32873 = (0);
var G__32874 = (0);
seq__32115_32834 = G__32871;
chunk__32117_32835 = G__32872;
count__32118_32836 = G__32873;
i__32119_32837 = G__32874;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32832);
}


var G__32877 = seq__32082_32820;
var G__32878 = chunk__32083_32821;
var G__32879 = count__32084_32822;
var G__32880 = (i__32085_32823 + (1));
seq__32082_32820 = G__32877;
chunk__32083_32821 = G__32878;
count__32084_32822 = G__32879;
i__32085_32823 = G__32880;
continue;
} else {
var temp__5823__auto___32882 = cljs.core.seq(seq__32082_32820);
if(temp__5823__auto___32882){
var seq__32082_32885__$1 = temp__5823__auto___32882;
if(cljs.core.chunked_seq_QMARK_(seq__32082_32885__$1)){
var c__5525__auto___32886 = cljs.core.chunk_first(seq__32082_32885__$1);
var G__32887 = cljs.core.chunk_rest(seq__32082_32885__$1);
var G__32888 = c__5525__auto___32886;
var G__32889 = cljs.core.count(c__5525__auto___32886);
var G__32890 = (0);
seq__32082_32820 = G__32887;
chunk__32083_32821 = G__32888;
count__32084_32822 = G__32889;
i__32085_32823 = G__32890;
continue;
} else {
var child_struct_32891 = cljs.core.first(seq__32082_32885__$1);
var children_32892 = shadow.dom.dom_node(child_struct_32891);
if(cljs.core.seq_QMARK_(children_32892)){
var seq__32123_32894 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_32892));
var chunk__32125_32895 = null;
var count__32126_32896 = (0);
var i__32127_32897 = (0);
while(true){
if((i__32127_32897 < count__32126_32896)){
var child_32901 = chunk__32125_32895.cljs$core$IIndexed$_nth$arity$2(null, i__32127_32897);
if(cljs.core.truth_(child_32901)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32901);


var G__32902 = seq__32123_32894;
var G__32903 = chunk__32125_32895;
var G__32904 = count__32126_32896;
var G__32905 = (i__32127_32897 + (1));
seq__32123_32894 = G__32902;
chunk__32125_32895 = G__32903;
count__32126_32896 = G__32904;
i__32127_32897 = G__32905;
continue;
} else {
var G__32910 = seq__32123_32894;
var G__32911 = chunk__32125_32895;
var G__32912 = count__32126_32896;
var G__32913 = (i__32127_32897 + (1));
seq__32123_32894 = G__32910;
chunk__32125_32895 = G__32911;
count__32126_32896 = G__32912;
i__32127_32897 = G__32913;
continue;
}
} else {
var temp__5823__auto___32920__$1 = cljs.core.seq(seq__32123_32894);
if(temp__5823__auto___32920__$1){
var seq__32123_32921__$1 = temp__5823__auto___32920__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32123_32921__$1)){
var c__5525__auto___32922 = cljs.core.chunk_first(seq__32123_32921__$1);
var G__32923 = cljs.core.chunk_rest(seq__32123_32921__$1);
var G__32924 = c__5525__auto___32922;
var G__32925 = cljs.core.count(c__5525__auto___32922);
var G__32926 = (0);
seq__32123_32894 = G__32923;
chunk__32125_32895 = G__32924;
count__32126_32896 = G__32925;
i__32127_32897 = G__32926;
continue;
} else {
var child_32927 = cljs.core.first(seq__32123_32921__$1);
if(cljs.core.truth_(child_32927)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_32927);


var G__32928 = cljs.core.next(seq__32123_32921__$1);
var G__32929 = null;
var G__32930 = (0);
var G__32931 = (0);
seq__32123_32894 = G__32928;
chunk__32125_32895 = G__32929;
count__32126_32896 = G__32930;
i__32127_32897 = G__32931;
continue;
} else {
var G__32933 = cljs.core.next(seq__32123_32921__$1);
var G__32934 = null;
var G__32935 = (0);
var G__32936 = (0);
seq__32123_32894 = G__32933;
chunk__32125_32895 = G__32934;
count__32126_32896 = G__32935;
i__32127_32897 = G__32936;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_32892);
}


var G__32938 = cljs.core.next(seq__32082_32885__$1);
var G__32939 = null;
var G__32940 = (0);
var G__32941 = (0);
seq__32082_32820 = G__32938;
chunk__32083_32821 = G__32939;
count__32084_32822 = G__32940;
i__32085_32823 = G__32941;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32137 = cljs.core.seq(node);
var chunk__32138 = null;
var count__32139 = (0);
var i__32140 = (0);
while(true){
if((i__32140 < count__32139)){
var n = chunk__32138.cljs$core$IIndexed$_nth$arity$2(null, i__32140);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__32958 = seq__32137;
var G__32959 = chunk__32138;
var G__32960 = count__32139;
var G__32961 = (i__32140 + (1));
seq__32137 = G__32958;
chunk__32138 = G__32959;
count__32139 = G__32960;
i__32140 = G__32961;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__32137);
if(temp__5823__auto__){
var seq__32137__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32137__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__32137__$1);
var G__32964 = cljs.core.chunk_rest(seq__32137__$1);
var G__32965 = c__5525__auto__;
var G__32966 = cljs.core.count(c__5525__auto__);
var G__32967 = (0);
seq__32137 = G__32964;
chunk__32138 = G__32965;
count__32139 = G__32966;
i__32140 = G__32967;
continue;
} else {
var n = cljs.core.first(seq__32137__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null, n));


var G__32972 = cljs.core.next(seq__32137__$1);
var G__32973 = null;
var G__32974 = (0);
var G__32975 = (0);
seq__32137 = G__32972;
chunk__32138 = G__32973;
count__32139 = G__32974;
i__32140 = G__32975;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32149 = arguments.length;
switch (G__32149) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32161 = arguments.length;
switch (G__32161) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32165 = arguments.length;
switch (G__32165) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33003 = arguments.length;
var i__5727__auto___33004 = (0);
while(true){
if((i__5727__auto___33004 < len__5726__auto___33003)){
args__5732__auto__.push((arguments[i__5727__auto___33004]));

var G__33006 = (i__5727__auto___33004 + (1));
i__5727__auto___33004 = G__33006;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32172_33009 = cljs.core.seq(nodes);
var chunk__32173_33010 = null;
var count__32174_33011 = (0);
var i__32175_33012 = (0);
while(true){
if((i__32175_33012 < count__32174_33011)){
var node_33015 = chunk__32173_33010.cljs$core$IIndexed$_nth$arity$2(null, i__32175_33012);
fragment.appendChild(shadow.dom._to_dom(node_33015));


var G__33018 = seq__32172_33009;
var G__33020 = chunk__32173_33010;
var G__33021 = count__32174_33011;
var G__33022 = (i__32175_33012 + (1));
seq__32172_33009 = G__33018;
chunk__32173_33010 = G__33020;
count__32174_33011 = G__33021;
i__32175_33012 = G__33022;
continue;
} else {
var temp__5823__auto___33024 = cljs.core.seq(seq__32172_33009);
if(temp__5823__auto___33024){
var seq__32172_33025__$1 = temp__5823__auto___33024;
if(cljs.core.chunked_seq_QMARK_(seq__32172_33025__$1)){
var c__5525__auto___33026 = cljs.core.chunk_first(seq__32172_33025__$1);
var G__33027 = cljs.core.chunk_rest(seq__32172_33025__$1);
var G__33028 = c__5525__auto___33026;
var G__33029 = cljs.core.count(c__5525__auto___33026);
var G__33030 = (0);
seq__32172_33009 = G__33027;
chunk__32173_33010 = G__33028;
count__32174_33011 = G__33029;
i__32175_33012 = G__33030;
continue;
} else {
var node_33031 = cljs.core.first(seq__32172_33025__$1);
fragment.appendChild(shadow.dom._to_dom(node_33031));


var G__33032 = cljs.core.next(seq__32172_33025__$1);
var G__33033 = null;
var G__33034 = (0);
var G__33035 = (0);
seq__32172_33009 = G__33032;
chunk__32173_33010 = G__33033;
count__32174_33011 = G__33034;
i__32175_33012 = G__33035;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32171){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32171));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32179_33047 = cljs.core.seq(scripts);
var chunk__32180_33048 = null;
var count__32181_33049 = (0);
var i__32182_33050 = (0);
while(true){
if((i__32182_33050 < count__32181_33049)){
var vec__32189_33051 = chunk__32180_33048.cljs$core$IIndexed$_nth$arity$2(null, i__32182_33050);
var script_tag_33052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32189_33051,(0),null);
var script_body_33053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32189_33051,(1),null);
eval(script_body_33053);


var G__33054 = seq__32179_33047;
var G__33055 = chunk__32180_33048;
var G__33056 = count__32181_33049;
var G__33057 = (i__32182_33050 + (1));
seq__32179_33047 = G__33054;
chunk__32180_33048 = G__33055;
count__32181_33049 = G__33056;
i__32182_33050 = G__33057;
continue;
} else {
var temp__5823__auto___33058 = cljs.core.seq(seq__32179_33047);
if(temp__5823__auto___33058){
var seq__32179_33059__$1 = temp__5823__auto___33058;
if(cljs.core.chunked_seq_QMARK_(seq__32179_33059__$1)){
var c__5525__auto___33060 = cljs.core.chunk_first(seq__32179_33059__$1);
var G__33062 = cljs.core.chunk_rest(seq__32179_33059__$1);
var G__33063 = c__5525__auto___33060;
var G__33064 = cljs.core.count(c__5525__auto___33060);
var G__33065 = (0);
seq__32179_33047 = G__33062;
chunk__32180_33048 = G__33063;
count__32181_33049 = G__33064;
i__32182_33050 = G__33065;
continue;
} else {
var vec__32193_33067 = cljs.core.first(seq__32179_33059__$1);
var script_tag_33068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32193_33067,(0),null);
var script_body_33069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32193_33067,(1),null);
eval(script_body_33069);


var G__33071 = cljs.core.next(seq__32179_33059__$1);
var G__33072 = null;
var G__33073 = (0);
var G__33074 = (0);
seq__32179_33047 = G__33071;
chunk__32180_33048 = G__33072;
count__32181_33049 = G__33073;
i__32182_33050 = G__33074;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32196){
var vec__32197 = p__32196;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32197,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32197,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32202 = arguments.length;
switch (G__32202) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32205 = cljs.core.seq(style_keys);
var chunk__32206 = null;
var count__32207 = (0);
var i__32208 = (0);
while(true){
if((i__32208 < count__32207)){
var it = chunk__32206.cljs$core$IIndexed$_nth$arity$2(null, i__32208);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33086 = seq__32205;
var G__33087 = chunk__32206;
var G__33088 = count__32207;
var G__33089 = (i__32208 + (1));
seq__32205 = G__33086;
chunk__32206 = G__33087;
count__32207 = G__33088;
i__32208 = G__33089;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__32205);
if(temp__5823__auto__){
var seq__32205__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32205__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__32205__$1);
var G__33091 = cljs.core.chunk_rest(seq__32205__$1);
var G__33092 = c__5525__auto__;
var G__33093 = cljs.core.count(c__5525__auto__);
var G__33094 = (0);
seq__32205 = G__33091;
chunk__32206 = G__33092;
count__32207 = G__33093;
i__32208 = G__33094;
continue;
} else {
var it = cljs.core.first(seq__32205__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33097 = cljs.core.next(seq__32205__$1);
var G__33098 = null;
var G__33099 = (0);
var G__33100 = (0);
seq__32205 = G__33097;
chunk__32206 = G__33098;
count__32207 = G__33099;
i__32208 = G__33100;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k32217,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__32253 = k32217;
var G__32253__$1 = (((G__32253 instanceof cljs.core.Keyword))?G__32253.fqn:null);
switch (G__32253__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32217,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__32266){
var vec__32267 = p__32266;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32267,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32267,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32216){
var self__ = this;
var G__32216__$1 = this;
return (new cljs.core.RecordIter((0),G__32216__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32218,other32219){
var self__ = this;
var this32218__$1 = this;
return (((!((other32219 == null)))) && ((((this32218__$1.constructor === other32219.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32218__$1.x,other32219.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32218__$1.y,other32219.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32218__$1.__extmap,other32219.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k32217){
var self__ = this;
var this__5307__auto____$1 = this;
var G__32322 = k32217;
var G__32322__$1 = (((G__32322 instanceof cljs.core.Keyword))?G__32322.fqn:null);
switch (G__32322__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32217);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__32216){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__32327 = cljs.core.keyword_identical_QMARK_;
var expr__32328 = k__5309__auto__;
if(cljs.core.truth_((pred__32327.cljs$core$IFn$_invoke$arity$2 ? pred__32327.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32328) : pred__32327.call(null, new cljs.core.Keyword(null,"x","x",2099068185),expr__32328)))){
return (new shadow.dom.Coordinate(G__32216,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32327.cljs$core$IFn$_invoke$arity$2 ? pred__32327.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32328) : pred__32327.call(null, new cljs.core.Keyword(null,"y","y",-1757859776),expr__32328)))){
return (new shadow.dom.Coordinate(self__.x,G__32216,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__32216),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__32216){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32216,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32233){
var extmap__5342__auto__ = (function (){var G__32362 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32233,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32233)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32362);
} else {
return G__32362;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32233),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32233),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k32367,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__32385 = k32367;
var G__32385__$1 = (((G__32385 instanceof cljs.core.Keyword))?G__32385.fqn:null);
switch (G__32385__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32367,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__32409){
var vec__32411 = p__32409;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32411,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32411,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32366){
var self__ = this;
var G__32366__$1 = this;
return (new cljs.core.RecordIter((0),G__32366__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32368,other32369){
var self__ = this;
var this32368__$1 = this;
return (((!((other32369 == null)))) && ((((this32368__$1.constructor === other32369.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32368__$1.w,other32369.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32368__$1.h,other32369.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32368__$1.__extmap,other32369.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k32367){
var self__ = this;
var this__5307__auto____$1 = this;
var G__32453 = k32367;
var G__32453__$1 = (((G__32453 instanceof cljs.core.Keyword))?G__32453.fqn:null);
switch (G__32453__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32367);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__32366){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__32454 = cljs.core.keyword_identical_QMARK_;
var expr__32455 = k__5309__auto__;
if(cljs.core.truth_((pred__32454.cljs$core$IFn$_invoke$arity$2 ? pred__32454.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32455) : pred__32454.call(null, new cljs.core.Keyword(null,"w","w",354169001),expr__32455)))){
return (new shadow.dom.Size(G__32366,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32454.cljs$core$IFn$_invoke$arity$2 ? pred__32454.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32455) : pred__32454.call(null, new cljs.core.Keyword(null,"h","h",1109658740),expr__32455)))){
return (new shadow.dom.Size(self__.w,G__32366,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__32366),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__32366){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32366,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32374){
var extmap__5342__auto__ = (function (){var G__32462 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32374,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32374)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32462);
} else {
return G__32462;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32374),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32374),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__33188 = (i + (1));
var G__33189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33188;
ret = G__33189;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32489){
var vec__32490 = p__32489;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32490,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32500 = arguments.length;
switch (G__32500) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33202 = ps;
var G__33203 = (i + (1));
el__$1 = G__33202;
i = G__33203;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null, parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32523 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32523,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32523,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32523,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32526_33207 = cljs.core.seq(props);
var chunk__32527_33208 = null;
var count__32528_33209 = (0);
var i__32529_33210 = (0);
while(true){
if((i__32529_33210 < count__32528_33209)){
var vec__32545_33211 = chunk__32527_33208.cljs$core$IIndexed$_nth$arity$2(null, i__32529_33210);
var k_33212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32545_33211,(0),null);
var v_33213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32545_33211,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_33212);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33212),v_33213);


var G__33215 = seq__32526_33207;
var G__33216 = chunk__32527_33208;
var G__33217 = count__32528_33209;
var G__33218 = (i__32529_33210 + (1));
seq__32526_33207 = G__33215;
chunk__32527_33208 = G__33216;
count__32528_33209 = G__33217;
i__32529_33210 = G__33218;
continue;
} else {
var temp__5823__auto___33219 = cljs.core.seq(seq__32526_33207);
if(temp__5823__auto___33219){
var seq__32526_33220__$1 = temp__5823__auto___33219;
if(cljs.core.chunked_seq_QMARK_(seq__32526_33220__$1)){
var c__5525__auto___33223 = cljs.core.chunk_first(seq__32526_33220__$1);
var G__33226 = cljs.core.chunk_rest(seq__32526_33220__$1);
var G__33227 = c__5525__auto___33223;
var G__33228 = cljs.core.count(c__5525__auto___33223);
var G__33229 = (0);
seq__32526_33207 = G__33226;
chunk__32527_33208 = G__33227;
count__32528_33209 = G__33228;
i__32529_33210 = G__33229;
continue;
} else {
var vec__32554_33230 = cljs.core.first(seq__32526_33220__$1);
var k_33231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32554_33230,(0),null);
var v_33232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32554_33230,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_33231);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33231),v_33232);


var G__33238 = cljs.core.next(seq__32526_33220__$1);
var G__33239 = null;
var G__33240 = (0);
var G__33241 = (0);
seq__32526_33207 = G__33238;
chunk__32527_33208 = G__33239;
count__32528_33209 = G__33240;
i__32529_33210 = G__33241;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null, );
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32562 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32562,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32562,(1),null);
var seq__32570_33244 = cljs.core.seq(node_children);
var chunk__32572_33245 = null;
var count__32573_33246 = (0);
var i__32574_33247 = (0);
while(true){
if((i__32574_33247 < count__32573_33246)){
var child_struct_33253 = chunk__32572_33245.cljs$core$IIndexed$_nth$arity$2(null, i__32574_33247);
if((!((child_struct_33253 == null)))){
if(typeof child_struct_33253 === 'string'){
var text_33256 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33256),child_struct_33253].join(''));
} else {
var children_33257 = shadow.dom.svg_node(child_struct_33253);
if(cljs.core.seq_QMARK_(children_33257)){
var seq__32626_33258 = cljs.core.seq(children_33257);
var chunk__32628_33259 = null;
var count__32629_33260 = (0);
var i__32630_33261 = (0);
while(true){
if((i__32630_33261 < count__32629_33260)){
var child_33262 = chunk__32628_33259.cljs$core$IIndexed$_nth$arity$2(null, i__32630_33261);
if(cljs.core.truth_(child_33262)){
node.appendChild(child_33262);


var G__33263 = seq__32626_33258;
var G__33264 = chunk__32628_33259;
var G__33265 = count__32629_33260;
var G__33266 = (i__32630_33261 + (1));
seq__32626_33258 = G__33263;
chunk__32628_33259 = G__33264;
count__32629_33260 = G__33265;
i__32630_33261 = G__33266;
continue;
} else {
var G__33267 = seq__32626_33258;
var G__33268 = chunk__32628_33259;
var G__33269 = count__32629_33260;
var G__33270 = (i__32630_33261 + (1));
seq__32626_33258 = G__33267;
chunk__32628_33259 = G__33268;
count__32629_33260 = G__33269;
i__32630_33261 = G__33270;
continue;
}
} else {
var temp__5823__auto___33271 = cljs.core.seq(seq__32626_33258);
if(temp__5823__auto___33271){
var seq__32626_33272__$1 = temp__5823__auto___33271;
if(cljs.core.chunked_seq_QMARK_(seq__32626_33272__$1)){
var c__5525__auto___33274 = cljs.core.chunk_first(seq__32626_33272__$1);
var G__33275 = cljs.core.chunk_rest(seq__32626_33272__$1);
var G__33276 = c__5525__auto___33274;
var G__33277 = cljs.core.count(c__5525__auto___33274);
var G__33278 = (0);
seq__32626_33258 = G__33275;
chunk__32628_33259 = G__33276;
count__32629_33260 = G__33277;
i__32630_33261 = G__33278;
continue;
} else {
var child_33279 = cljs.core.first(seq__32626_33272__$1);
if(cljs.core.truth_(child_33279)){
node.appendChild(child_33279);


var G__33280 = cljs.core.next(seq__32626_33272__$1);
var G__33281 = null;
var G__33282 = (0);
var G__33283 = (0);
seq__32626_33258 = G__33280;
chunk__32628_33259 = G__33281;
count__32629_33260 = G__33282;
i__32630_33261 = G__33283;
continue;
} else {
var G__33284 = cljs.core.next(seq__32626_33272__$1);
var G__33285 = null;
var G__33286 = (0);
var G__33287 = (0);
seq__32626_33258 = G__33284;
chunk__32628_33259 = G__33285;
count__32629_33260 = G__33286;
i__32630_33261 = G__33287;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33257);
}
}


var G__33288 = seq__32570_33244;
var G__33289 = chunk__32572_33245;
var G__33290 = count__32573_33246;
var G__33291 = (i__32574_33247 + (1));
seq__32570_33244 = G__33288;
chunk__32572_33245 = G__33289;
count__32573_33246 = G__33290;
i__32574_33247 = G__33291;
continue;
} else {
var G__33292 = seq__32570_33244;
var G__33293 = chunk__32572_33245;
var G__33294 = count__32573_33246;
var G__33295 = (i__32574_33247 + (1));
seq__32570_33244 = G__33292;
chunk__32572_33245 = G__33293;
count__32573_33246 = G__33294;
i__32574_33247 = G__33295;
continue;
}
} else {
var temp__5823__auto___33296 = cljs.core.seq(seq__32570_33244);
if(temp__5823__auto___33296){
var seq__32570_33297__$1 = temp__5823__auto___33296;
if(cljs.core.chunked_seq_QMARK_(seq__32570_33297__$1)){
var c__5525__auto___33298 = cljs.core.chunk_first(seq__32570_33297__$1);
var G__33299 = cljs.core.chunk_rest(seq__32570_33297__$1);
var G__33300 = c__5525__auto___33298;
var G__33301 = cljs.core.count(c__5525__auto___33298);
var G__33302 = (0);
seq__32570_33244 = G__33299;
chunk__32572_33245 = G__33300;
count__32573_33246 = G__33301;
i__32574_33247 = G__33302;
continue;
} else {
var child_struct_33303 = cljs.core.first(seq__32570_33297__$1);
if((!((child_struct_33303 == null)))){
if(typeof child_struct_33303 === 'string'){
var text_33304 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33304),child_struct_33303].join(''));
} else {
var children_33305 = shadow.dom.svg_node(child_struct_33303);
if(cljs.core.seq_QMARK_(children_33305)){
var seq__32636_33306 = cljs.core.seq(children_33305);
var chunk__32638_33307 = null;
var count__32639_33308 = (0);
var i__32640_33309 = (0);
while(true){
if((i__32640_33309 < count__32639_33308)){
var child_33310 = chunk__32638_33307.cljs$core$IIndexed$_nth$arity$2(null, i__32640_33309);
if(cljs.core.truth_(child_33310)){
node.appendChild(child_33310);


var G__33311 = seq__32636_33306;
var G__33312 = chunk__32638_33307;
var G__33313 = count__32639_33308;
var G__33314 = (i__32640_33309 + (1));
seq__32636_33306 = G__33311;
chunk__32638_33307 = G__33312;
count__32639_33308 = G__33313;
i__32640_33309 = G__33314;
continue;
} else {
var G__33315 = seq__32636_33306;
var G__33316 = chunk__32638_33307;
var G__33317 = count__32639_33308;
var G__33318 = (i__32640_33309 + (1));
seq__32636_33306 = G__33315;
chunk__32638_33307 = G__33316;
count__32639_33308 = G__33317;
i__32640_33309 = G__33318;
continue;
}
} else {
var temp__5823__auto___33319__$1 = cljs.core.seq(seq__32636_33306);
if(temp__5823__auto___33319__$1){
var seq__32636_33321__$1 = temp__5823__auto___33319__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32636_33321__$1)){
var c__5525__auto___33323 = cljs.core.chunk_first(seq__32636_33321__$1);
var G__33324 = cljs.core.chunk_rest(seq__32636_33321__$1);
var G__33325 = c__5525__auto___33323;
var G__33326 = cljs.core.count(c__5525__auto___33323);
var G__33327 = (0);
seq__32636_33306 = G__33324;
chunk__32638_33307 = G__33325;
count__32639_33308 = G__33326;
i__32640_33309 = G__33327;
continue;
} else {
var child_33328 = cljs.core.first(seq__32636_33321__$1);
if(cljs.core.truth_(child_33328)){
node.appendChild(child_33328);


var G__33329 = cljs.core.next(seq__32636_33321__$1);
var G__33330 = null;
var G__33331 = (0);
var G__33332 = (0);
seq__32636_33306 = G__33329;
chunk__32638_33307 = G__33330;
count__32639_33308 = G__33331;
i__32640_33309 = G__33332;
continue;
} else {
var G__33333 = cljs.core.next(seq__32636_33321__$1);
var G__33334 = null;
var G__33335 = (0);
var G__33336 = (0);
seq__32636_33306 = G__33333;
chunk__32638_33307 = G__33334;
count__32639_33308 = G__33335;
i__32640_33309 = G__33336;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33305);
}
}


var G__33338 = cljs.core.next(seq__32570_33297__$1);
var G__33339 = null;
var G__33340 = (0);
var G__33341 = (0);
seq__32570_33244 = G__33338;
chunk__32572_33245 = G__33339;
count__32573_33246 = G__33340;
i__32574_33247 = G__33341;
continue;
} else {
var G__33343 = cljs.core.next(seq__32570_33297__$1);
var G__33344 = null;
var G__33345 = (0);
var G__33346 = (0);
seq__32570_33244 = G__33343;
chunk__32572_33245 = G__33344;
count__32573_33246 = G__33345;
i__32574_33247 = G__33346;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___33347 = arguments.length;
var i__5727__auto___33348 = (0);
while(true){
if((i__5727__auto___33348 < len__5726__auto___33347)){
args__5732__auto__.push((arguments[i__5727__auto___33348]));

var G__33349 = (i__5727__auto___33348 + (1));
i__5727__auto___33348 = G__33349;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq32660){
var G__32661 = cljs.core.first(seq32660);
var seq32660__$1 = cljs.core.next(seq32660);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32661,seq32660__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
