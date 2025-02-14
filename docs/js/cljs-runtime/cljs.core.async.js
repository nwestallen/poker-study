goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34604 = (function (f,blockable,meta34605){
this.f = f;
this.blockable = blockable;
this.meta34605 = meta34605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34606,meta34605__$1){
var self__ = this;
var _34606__$1 = this;
return (new cljs.core.async.t_cljs$core$async34604(self__.f,self__.blockable,meta34605__$1));
}));

(cljs.core.async.t_cljs$core$async34604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34606){
var self__ = this;
var _34606__$1 = this;
return self__.meta34605;
}));

(cljs.core.async.t_cljs$core$async34604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34605","meta34605",900011416,null)], null);
}));

(cljs.core.async.t_cljs$core$async34604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34604");

(cljs.core.async.t_cljs$core$async34604.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34604.
 */
cljs.core.async.__GT_t_cljs$core$async34604 = (function cljs$core$async$__GT_t_cljs$core$async34604(f,blockable,meta34605){
return (new cljs.core.async.t_cljs$core$async34604(f,blockable,meta34605));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34603 = arguments.length;
switch (G__34603) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async34604(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34616 = arguments.length;
switch (G__34616) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34626 = arguments.length;
switch (G__34626) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34632 = arguments.length;
switch (G__34632) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_37548 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37548) : fn1.call(null, val_37548));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_37548) : fn1.call(null, val_37548));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34638 = arguments.length;
switch (G__34638) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null, ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___37552 = n;
var x_37553 = (0);
while(true){
if((x_37553 < n__5593__auto___37552)){
(a[x_37553] = x_37553);

var G__37554 = (x_37553 + (1));
x_37553 = G__37554;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34647 = (function (flag,meta34648){
this.flag = flag;
this.meta34648 = meta34648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34649,meta34648__$1){
var self__ = this;
var _34649__$1 = this;
return (new cljs.core.async.t_cljs$core$async34647(self__.flag,meta34648__$1));
}));

(cljs.core.async.t_cljs$core$async34647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34649){
var self__ = this;
var _34649__$1 = this;
return self__.meta34648;
}));

(cljs.core.async.t_cljs$core$async34647.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34647.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34648","meta34648",-1419284141,null)], null);
}));

(cljs.core.async.t_cljs$core$async34647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34647");

(cljs.core.async.t_cljs$core$async34647.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34647.
 */
cljs.core.async.__GT_t_cljs$core$async34647 = (function cljs$core$async$__GT_t_cljs$core$async34647(flag,meta34648){
return (new cljs.core.async.t_cljs$core$async34647(flag,meta34648));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async34647(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34654 = (function (flag,cb,meta34655){
this.flag = flag;
this.cb = cb;
this.meta34655 = meta34655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34656,meta34655__$1){
var self__ = this;
var _34656__$1 = this;
return (new cljs.core.async.t_cljs$core$async34654(self__.flag,self__.cb,meta34655__$1));
}));

(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34656){
var self__ = this;
var _34656__$1 = this;
return self__.meta34655;
}));

(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34654.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34655","meta34655",834729489,null)], null);
}));

(cljs.core.async.t_cljs$core$async34654.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34654");

(cljs.core.async.t_cljs$core$async34654.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async34654");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34654.
 */
cljs.core.async.__GT_t_cljs$core$async34654 = (function cljs$core$async$__GT_t_cljs$core$async34654(flag,cb,meta34655){
return (new cljs.core.async.t_cljs$core$async34654(flag,cb,meta34655));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async34654(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null, (0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null, (1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34658_SHARP_){
var G__34663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34658_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34663) : fret.call(null, G__34663));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34659_SHARP_){
var G__34664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34659_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34664) : fret.call(null, G__34664));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37582 = (i + (1));
i = G__37582;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null, );
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null, );
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___37592 = arguments.length;
var i__5727__auto___37593 = (0);
while(true){
if((i__5727__auto___37593 < len__5726__auto___37592)){
args__5732__auto__.push((arguments[i__5727__auto___37593]));

var G__37596 = (i__5727__auto___37593 + (1));
i__5727__auto___37593 = G__37596;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34676){
var map__34677 = p__34676;
var map__34677__$1 = cljs.core.__destructure_map(map__34677);
var opts = map__34677__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34670){
var G__34671 = cljs.core.first(seq34670);
var seq34670__$1 = cljs.core.next(seq34670);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34671,seq34670__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34684 = arguments.length;
switch (G__34684) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34509__auto___37616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_34767){
var state_val_34768 = (state_34767[(1)]);
if((state_val_34768 === (7))){
var inst_34747 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34781_37617 = state_34767__$1;
(statearr_34781_37617[(2)] = inst_34747);

(statearr_34781_37617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (1))){
var state_34767__$1 = state_34767;
var statearr_34784_37618 = state_34767__$1;
(statearr_34784_37618[(2)] = null);

(statearr_34784_37618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (4))){
var inst_34725 = (state_34767[(7)]);
var inst_34725__$1 = (state_34767[(2)]);
var inst_34726 = (inst_34725__$1 == null);
var state_34767__$1 = (function (){var statearr_34794 = state_34767;
(statearr_34794[(7)] = inst_34725__$1);

return statearr_34794;
})();
if(cljs.core.truth_(inst_34726)){
var statearr_34795_37619 = state_34767__$1;
(statearr_34795_37619[(1)] = (5));

} else {
var statearr_34796_37620 = state_34767__$1;
(statearr_34796_37620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (13))){
var state_34767__$1 = state_34767;
var statearr_34797_37621 = state_34767__$1;
(statearr_34797_37621[(2)] = null);

(statearr_34797_37621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (6))){
var inst_34725 = (state_34767[(7)]);
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34767__$1,(11),to,inst_34725);
} else {
if((state_val_34768 === (3))){
var inst_34750 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34767__$1,inst_34750);
} else {
if((state_val_34768 === (12))){
var state_34767__$1 = state_34767;
var statearr_34798_37626 = state_34767__$1;
(statearr_34798_37626[(2)] = null);

(statearr_34798_37626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (2))){
var state_34767__$1 = state_34767;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34767__$1,(4),from);
} else {
if((state_val_34768 === (11))){
var inst_34740 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
if(cljs.core.truth_(inst_34740)){
var statearr_34799_37628 = state_34767__$1;
(statearr_34799_37628[(1)] = (12));

} else {
var statearr_34800_37629 = state_34767__$1;
(statearr_34800_37629[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (9))){
var state_34767__$1 = state_34767;
var statearr_34801_37630 = state_34767__$1;
(statearr_34801_37630[(2)] = null);

(statearr_34801_37630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (5))){
var state_34767__$1 = state_34767;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34802_37631 = state_34767__$1;
(statearr_34802_37631[(1)] = (8));

} else {
var statearr_34805_37632 = state_34767__$1;
(statearr_34805_37632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (14))){
var inst_34745 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34806_37633 = state_34767__$1;
(statearr_34806_37633[(2)] = inst_34745);

(statearr_34806_37633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (10))){
var inst_34736 = (state_34767[(2)]);
var state_34767__$1 = state_34767;
var statearr_34807_37634 = state_34767__$1;
(statearr_34807_37634[(2)] = inst_34736);

(statearr_34807_37634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34768 === (8))){
var inst_34730 = cljs.core.async.close_BANG_(to);
var state_34767__$1 = state_34767;
var statearr_34808_37636 = state_34767__$1;
(statearr_34808_37636[(2)] = inst_34730);

(statearr_34808_37636[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_34810 = [null,null,null,null,null,null,null,null];
(statearr_34810[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_34810[(1)] = (1));

return statearr_34810;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_34767){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_34767);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e34811){var ex__34289__auto__ = e34811;
var statearr_34812_37637 = state_34767;
(statearr_34812_37637[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_34767[(4)]))){
var statearr_34813_37638 = state_34767;
(statearr_34813_37638[(1)] = cljs.core.first((state_34767[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37639 = state_34767;
state_34767 = G__37639;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_34767){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_34767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_34814 = f__34510__auto__();
(statearr_34814[(6)] = c__34509__auto___37616);

return statearr_34814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__34820){
var vec__34821 = p__34820;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34821,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34821,(1),null);
var job = vec__34821;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__34509__auto___37644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_34828){
var state_val_34829 = (state_34828[(1)]);
if((state_val_34829 === (1))){
var state_34828__$1 = state_34828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34828__$1,(2),res,v);
} else {
if((state_val_34829 === (2))){
var inst_34825 = (state_34828[(2)]);
var inst_34826 = cljs.core.async.close_BANG_(res);
var state_34828__$1 = (function (){var statearr_34832 = state_34828;
(statearr_34832[(7)] = inst_34825);

return statearr_34832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34828__$1,inst_34826);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0 = (function (){
var statearr_34833 = [null,null,null,null,null,null,null,null];
(statearr_34833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__);

(statearr_34833[(1)] = (1));

return statearr_34833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1 = (function (state_34828){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_34828);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e34834){var ex__34289__auto__ = e34834;
var statearr_34835_37652 = state_34828;
(statearr_34835_37652[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_34828[(4)]))){
var statearr_34836_37653 = state_34828;
(statearr_34836_37653[(1)] = cljs.core.first((state_34828[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37656 = state_34828;
state_34828 = G__37656;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__ = function(state_34828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1.call(this,state_34828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_34840 = f__34510__auto__();
(statearr_34840[(6)] = c__34509__auto___37644);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34842){
var vec__34844 = p__34842;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34844,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34844,(1),null);
var job = vec__34844;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null, v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___37658 = n;
var __37659 = (0);
while(true){
if((__37659 < n__5593__auto___37658)){
var G__34847_37660 = type;
var G__34847_37661__$1 = (((G__34847_37660 instanceof cljs.core.Keyword))?G__34847_37660.fqn:null);
switch (G__34847_37661__$1) {
case "compute":
var c__34509__auto___37663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37659,c__34509__auto___37663,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async){
return (function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = ((function (__37659,c__34509__auto___37663,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async){
return (function (state_34967){
var state_val_34968 = (state_34967[(1)]);
if((state_val_34968 === (1))){
var state_34967__$1 = state_34967;
var statearr_34969_37664 = state_34967__$1;
(statearr_34969_37664[(2)] = null);

(statearr_34969_37664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34968 === (2))){
var state_34967__$1 = state_34967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34967__$1,(4),jobs);
} else {
if((state_val_34968 === (3))){
var inst_34965 = (state_34967[(2)]);
var state_34967__$1 = state_34967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34967__$1,inst_34965);
} else {
if((state_val_34968 === (4))){
var inst_34850 = (state_34967[(2)]);
var inst_34958 = process__$1(inst_34850);
var state_34967__$1 = state_34967;
if(cljs.core.truth_(inst_34958)){
var statearr_34970_37667 = state_34967__$1;
(statearr_34970_37667[(1)] = (5));

} else {
var statearr_34971_37668 = state_34967__$1;
(statearr_34971_37668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34968 === (5))){
var state_34967__$1 = state_34967;
var statearr_34972_37669 = state_34967__$1;
(statearr_34972_37669[(2)] = null);

(statearr_34972_37669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34968 === (6))){
var state_34967__$1 = state_34967;
var statearr_34973_37670 = state_34967__$1;
(statearr_34973_37670[(2)] = null);

(statearr_34973_37670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34968 === (7))){
var inst_34963 = (state_34967[(2)]);
var state_34967__$1 = state_34967;
var statearr_34974_37671 = state_34967__$1;
(statearr_34974_37671[(2)] = inst_34963);

(statearr_34974_37671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37659,c__34509__auto___37663,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async))
;
return ((function (__37659,switch__34285__auto__,c__34509__auto___37663,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0 = (function (){
var statearr_34975 = [null,null,null,null,null,null,null];
(statearr_34975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__);

(statearr_34975[(1)] = (1));

return statearr_34975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1 = (function (state_34967){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_34967);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e34976){var ex__34289__auto__ = e34976;
var statearr_34977_37672 = state_34967;
(statearr_34977_37672[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_34967[(4)]))){
var statearr_34978_37673 = state_34967;
(statearr_34978_37673[(1)] = cljs.core.first((state_34967[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37674 = state_34967;
state_34967 = G__37674;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__ = function(state_34967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1.call(this,state_34967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__;
})()
;})(__37659,switch__34285__auto__,c__34509__auto___37663,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async))
})();
var state__34511__auto__ = (function (){var statearr_34979 = f__34510__auto__();
(statearr_34979[(6)] = c__34509__auto___37663);

return statearr_34979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
});})(__37659,c__34509__auto___37663,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async))
);


break;
case "async":
var c__34509__auto___37675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__37659,c__34509__auto___37675,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async){
return (function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = ((function (__37659,c__34509__auto___37675,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async){
return (function (state_34996){
var state_val_34997 = (state_34996[(1)]);
if((state_val_34997 === (1))){
var state_34996__$1 = state_34996;
var statearr_35002_37676 = state_34996__$1;
(statearr_35002_37676[(2)] = null);

(statearr_35002_37676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (2))){
var state_34996__$1 = state_34996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34996__$1,(4),jobs);
} else {
if((state_val_34997 === (3))){
var inst_34994 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34996__$1,inst_34994);
} else {
if((state_val_34997 === (4))){
var inst_34986 = (state_34996[(2)]);
var inst_34987 = async(inst_34986);
var state_34996__$1 = state_34996;
if(cljs.core.truth_(inst_34987)){
var statearr_35006_37677 = state_34996__$1;
(statearr_35006_37677[(1)] = (5));

} else {
var statearr_35007_37678 = state_34996__$1;
(statearr_35007_37678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (5))){
var state_34996__$1 = state_34996;
var statearr_35008_37679 = state_34996__$1;
(statearr_35008_37679[(2)] = null);

(statearr_35008_37679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (6))){
var state_34996__$1 = state_34996;
var statearr_35009_37681 = state_34996__$1;
(statearr_35009_37681[(2)] = null);

(statearr_35009_37681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34997 === (7))){
var inst_34992 = (state_34996[(2)]);
var state_34996__$1 = state_34996;
var statearr_35010_37684 = state_34996__$1;
(statearr_35010_37684[(2)] = inst_34992);

(statearr_35010_37684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__37659,c__34509__auto___37675,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async))
;
return ((function (__37659,switch__34285__auto__,c__34509__auto___37675,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0 = (function (){
var statearr_35013 = [null,null,null,null,null,null,null];
(statearr_35013[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__);

(statearr_35013[(1)] = (1));

return statearr_35013;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1 = (function (state_34996){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_34996);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e35016){var ex__34289__auto__ = e35016;
var statearr_35017_37685 = state_34996;
(statearr_35017_37685[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_34996[(4)]))){
var statearr_35019_37686 = state_34996;
(statearr_35019_37686[(1)] = cljs.core.first((state_34996[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37687 = state_34996;
state_34996 = G__37687;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__ = function(state_34996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1.call(this,state_34996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__;
})()
;})(__37659,switch__34285__auto__,c__34509__auto___37675,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async))
})();
var state__34511__auto__ = (function (){var statearr_35020 = f__34510__auto__();
(statearr_35020[(6)] = c__34509__auto___37675);

return statearr_35020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
});})(__37659,c__34509__auto___37675,G__34847_37660,G__34847_37661__$1,n__5593__auto___37658,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34847_37661__$1)].join('')));

}

var G__37692 = (__37659 + (1));
__37659 = G__37692;
continue;
} else {
}
break;
}

var c__34509__auto___37694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_35057){
var state_val_35058 = (state_35057[(1)]);
if((state_val_35058 === (7))){
var inst_35052 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
var statearr_35083_37698 = state_35057__$1;
(statearr_35083_37698[(2)] = inst_35052);

(statearr_35083_37698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (1))){
var state_35057__$1 = state_35057;
var statearr_35084_37699 = state_35057__$1;
(statearr_35084_37699[(2)] = null);

(statearr_35084_37699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (4))){
var inst_35031 = (state_35057[(7)]);
var inst_35031__$1 = (state_35057[(2)]);
var inst_35032 = (inst_35031__$1 == null);
var state_35057__$1 = (function (){var statearr_35086 = state_35057;
(statearr_35086[(7)] = inst_35031__$1);

return statearr_35086;
})();
if(cljs.core.truth_(inst_35032)){
var statearr_35087_37700 = state_35057__$1;
(statearr_35087_37700[(1)] = (5));

} else {
var statearr_35088_37701 = state_35057__$1;
(statearr_35088_37701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (6))){
var inst_35031 = (state_35057[(7)]);
var inst_35036 = (state_35057[(8)]);
var inst_35036__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_35042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35043 = [inst_35031,inst_35036__$1];
var inst_35044 = (new cljs.core.PersistentVector(null,2,(5),inst_35042,inst_35043,null));
var state_35057__$1 = (function (){var statearr_35096 = state_35057;
(statearr_35096[(8)] = inst_35036__$1);

return statearr_35096;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35057__$1,(8),jobs,inst_35044);
} else {
if((state_val_35058 === (3))){
var inst_35054 = (state_35057[(2)]);
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35057__$1,inst_35054);
} else {
if((state_val_35058 === (2))){
var state_35057__$1 = state_35057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35057__$1,(4),from);
} else {
if((state_val_35058 === (9))){
var inst_35048 = (state_35057[(2)]);
var state_35057__$1 = (function (){var statearr_35098 = state_35057;
(statearr_35098[(9)] = inst_35048);

return statearr_35098;
})();
var statearr_35099_37706 = state_35057__$1;
(statearr_35099_37706[(2)] = null);

(statearr_35099_37706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (5))){
var inst_35034 = cljs.core.async.close_BANG_(jobs);
var state_35057__$1 = state_35057;
var statearr_35101_37707 = state_35057__$1;
(statearr_35101_37707[(2)] = inst_35034);

(statearr_35101_37707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35058 === (8))){
var inst_35036 = (state_35057[(8)]);
var inst_35046 = (state_35057[(2)]);
var state_35057__$1 = (function (){var statearr_35105 = state_35057;
(statearr_35105[(10)] = inst_35046);

return statearr_35105;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35057__$1,(9),results,inst_35036);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0 = (function (){
var statearr_35107 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35107[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__);

(statearr_35107[(1)] = (1));

return statearr_35107;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1 = (function (state_35057){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_35057);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e35112){var ex__34289__auto__ = e35112;
var statearr_35113_37708 = state_35057;
(statearr_35113_37708[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_35057[(4)]))){
var statearr_35114_37709 = state_35057;
(statearr_35114_37709[(1)] = cljs.core.first((state_35057[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37711 = state_35057;
state_35057 = G__37711;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__ = function(state_35057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1.call(this,state_35057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_35115 = f__34510__auto__();
(statearr_35115[(6)] = c__34509__auto___37694);

return statearr_35115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


var c__34509__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_35158){
var state_val_35159 = (state_35158[(1)]);
if((state_val_35159 === (7))){
var inst_35154 = (state_35158[(2)]);
var state_35158__$1 = state_35158;
var statearr_35175_37713 = state_35158__$1;
(statearr_35175_37713[(2)] = inst_35154);

(statearr_35175_37713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (20))){
var state_35158__$1 = state_35158;
var statearr_35176_37715 = state_35158__$1;
(statearr_35176_37715[(2)] = null);

(statearr_35176_37715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (1))){
var state_35158__$1 = state_35158;
var statearr_35185_37716 = state_35158__$1;
(statearr_35185_37716[(2)] = null);

(statearr_35185_37716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (4))){
var inst_35118 = (state_35158[(7)]);
var inst_35118__$1 = (state_35158[(2)]);
var inst_35119 = (inst_35118__$1 == null);
var state_35158__$1 = (function (){var statearr_35200 = state_35158;
(statearr_35200[(7)] = inst_35118__$1);

return statearr_35200;
})();
if(cljs.core.truth_(inst_35119)){
var statearr_35202_37719 = state_35158__$1;
(statearr_35202_37719[(1)] = (5));

} else {
var statearr_35203_37722 = state_35158__$1;
(statearr_35203_37722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (15))){
var inst_35132 = (state_35158[(8)]);
var state_35158__$1 = state_35158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35158__$1,(18),to,inst_35132);
} else {
if((state_val_35159 === (21))){
var inst_35149 = (state_35158[(2)]);
var state_35158__$1 = state_35158;
var statearr_35205_37725 = state_35158__$1;
(statearr_35205_37725[(2)] = inst_35149);

(statearr_35205_37725[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (13))){
var inst_35151 = (state_35158[(2)]);
var state_35158__$1 = (function (){var statearr_35207 = state_35158;
(statearr_35207[(9)] = inst_35151);

return statearr_35207;
})();
var statearr_35211_37727 = state_35158__$1;
(statearr_35211_37727[(2)] = null);

(statearr_35211_37727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (6))){
var inst_35118 = (state_35158[(7)]);
var state_35158__$1 = state_35158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35158__$1,(11),inst_35118);
} else {
if((state_val_35159 === (17))){
var inst_35144 = (state_35158[(2)]);
var state_35158__$1 = state_35158;
if(cljs.core.truth_(inst_35144)){
var statearr_35213_37730 = state_35158__$1;
(statearr_35213_37730[(1)] = (19));

} else {
var statearr_35214_37731 = state_35158__$1;
(statearr_35214_37731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (3))){
var inst_35156 = (state_35158[(2)]);
var state_35158__$1 = state_35158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35158__$1,inst_35156);
} else {
if((state_val_35159 === (12))){
var inst_35128 = (state_35158[(10)]);
var state_35158__$1 = state_35158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35158__$1,(14),inst_35128);
} else {
if((state_val_35159 === (2))){
var state_35158__$1 = state_35158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35158__$1,(4),results);
} else {
if((state_val_35159 === (19))){
var state_35158__$1 = state_35158;
var statearr_35219_37736 = state_35158__$1;
(statearr_35219_37736[(2)] = null);

(statearr_35219_37736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (11))){
var inst_35128 = (state_35158[(2)]);
var state_35158__$1 = (function (){var statearr_35220 = state_35158;
(statearr_35220[(10)] = inst_35128);

return statearr_35220;
})();
var statearr_35222_37738 = state_35158__$1;
(statearr_35222_37738[(2)] = null);

(statearr_35222_37738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (9))){
var state_35158__$1 = state_35158;
var statearr_35225_37746 = state_35158__$1;
(statearr_35225_37746[(2)] = null);

(statearr_35225_37746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (5))){
var state_35158__$1 = state_35158;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35227_37747 = state_35158__$1;
(statearr_35227_37747[(1)] = (8));

} else {
var statearr_35228_37748 = state_35158__$1;
(statearr_35228_37748[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (14))){
var inst_35132 = (state_35158[(8)]);
var inst_35137 = (state_35158[(11)]);
var inst_35132__$1 = (state_35158[(2)]);
var inst_35136 = (inst_35132__$1 == null);
var inst_35137__$1 = cljs.core.not(inst_35136);
var state_35158__$1 = (function (){var statearr_35229 = state_35158;
(statearr_35229[(8)] = inst_35132__$1);

(statearr_35229[(11)] = inst_35137__$1);

return statearr_35229;
})();
if(inst_35137__$1){
var statearr_35233_37753 = state_35158__$1;
(statearr_35233_37753[(1)] = (15));

} else {
var statearr_35234_37755 = state_35158__$1;
(statearr_35234_37755[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (16))){
var inst_35137 = (state_35158[(11)]);
var state_35158__$1 = state_35158;
var statearr_35235_37760 = state_35158__$1;
(statearr_35235_37760[(2)] = inst_35137);

(statearr_35235_37760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (10))){
var inst_35125 = (state_35158[(2)]);
var state_35158__$1 = state_35158;
var statearr_35237_37769 = state_35158__$1;
(statearr_35237_37769[(2)] = inst_35125);

(statearr_35237_37769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (18))){
var inst_35141 = (state_35158[(2)]);
var state_35158__$1 = state_35158;
var statearr_35238_37770 = state_35158__$1;
(statearr_35238_37770[(2)] = inst_35141);

(statearr_35238_37770[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35159 === (8))){
var inst_35122 = cljs.core.async.close_BANG_(to);
var state_35158__$1 = state_35158;
var statearr_35239_37771 = state_35158__$1;
(statearr_35239_37771[(2)] = inst_35122);

(statearr_35239_37771[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0 = (function (){
var statearr_35240 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__);

(statearr_35240[(1)] = (1));

return statearr_35240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1 = (function (state_35158){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_35158);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e35242){var ex__34289__auto__ = e35242;
var statearr_35243_37773 = state_35158;
(statearr_35243_37773[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_35158[(4)]))){
var statearr_35244_37774 = state_35158;
(statearr_35244_37774[(1)] = cljs.core.first((state_35158[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37778 = state_35158;
state_35158 = G__37778;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__ = function(state_35158){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1.call(this,state_35158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34286__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_35245 = f__34510__auto__();
(statearr_35245[(6)] = c__34509__auto__);

return statearr_35245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));

return c__34509__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35247 = arguments.length;
switch (G__35247) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__35252 = arguments.length;
switch (G__35252) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__35259 = arguments.length;
switch (G__35259) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__34509__auto___37787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_35306){
var state_val_35307 = (state_35306[(1)]);
if((state_val_35307 === (7))){
var inst_35302 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
var statearr_35308_37789 = state_35306__$1;
(statearr_35308_37789[(2)] = inst_35302);

(statearr_35308_37789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (1))){
var state_35306__$1 = state_35306;
var statearr_35309_37790 = state_35306__$1;
(statearr_35309_37790[(2)] = null);

(statearr_35309_37790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (4))){
var inst_35275 = (state_35306[(7)]);
var inst_35275__$1 = (state_35306[(2)]);
var inst_35276 = (inst_35275__$1 == null);
var state_35306__$1 = (function (){var statearr_35311 = state_35306;
(statearr_35311[(7)] = inst_35275__$1);

return statearr_35311;
})();
if(cljs.core.truth_(inst_35276)){
var statearr_35313_37791 = state_35306__$1;
(statearr_35313_37791[(1)] = (5));

} else {
var statearr_35318_37792 = state_35306__$1;
(statearr_35318_37792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (13))){
var state_35306__$1 = state_35306;
var statearr_35320_37793 = state_35306__$1;
(statearr_35320_37793[(2)] = null);

(statearr_35320_37793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (6))){
var inst_35275 = (state_35306[(7)]);
var inst_35289 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35275) : p.call(null, inst_35275));
var state_35306__$1 = state_35306;
if(cljs.core.truth_(inst_35289)){
var statearr_35323_37794 = state_35306__$1;
(statearr_35323_37794[(1)] = (9));

} else {
var statearr_35324_37795 = state_35306__$1;
(statearr_35324_37795[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (3))){
var inst_35304 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35306__$1,inst_35304);
} else {
if((state_val_35307 === (12))){
var state_35306__$1 = state_35306;
var statearr_35326_37796 = state_35306__$1;
(statearr_35326_37796[(2)] = null);

(statearr_35326_37796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (2))){
var state_35306__$1 = state_35306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35306__$1,(4),ch);
} else {
if((state_val_35307 === (11))){
var inst_35275 = (state_35306[(7)]);
var inst_35293 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35306__$1,(8),inst_35293,inst_35275);
} else {
if((state_val_35307 === (9))){
var state_35306__$1 = state_35306;
var statearr_35352_37800 = state_35306__$1;
(statearr_35352_37800[(2)] = tc);

(statearr_35352_37800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (5))){
var inst_35282 = cljs.core.async.close_BANG_(tc);
var inst_35283 = cljs.core.async.close_BANG_(fc);
var state_35306__$1 = (function (){var statearr_35357 = state_35306;
(statearr_35357[(8)] = inst_35282);

return statearr_35357;
})();
var statearr_35359_37801 = state_35306__$1;
(statearr_35359_37801[(2)] = inst_35283);

(statearr_35359_37801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (14))){
var inst_35300 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
var statearr_35365_37802 = state_35306__$1;
(statearr_35365_37802[(2)] = inst_35300);

(statearr_35365_37802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (10))){
var state_35306__$1 = state_35306;
var statearr_35367_37803 = state_35306__$1;
(statearr_35367_37803[(2)] = fc);

(statearr_35367_37803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35307 === (8))){
var inst_35295 = (state_35306[(2)]);
var state_35306__$1 = state_35306;
if(cljs.core.truth_(inst_35295)){
var statearr_35370_37804 = state_35306__$1;
(statearr_35370_37804[(1)] = (12));

} else {
var statearr_35372_37805 = state_35306__$1;
(statearr_35372_37805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_35374 = [null,null,null,null,null,null,null,null,null];
(statearr_35374[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_35374[(1)] = (1));

return statearr_35374;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_35306){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_35306);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e35375){var ex__34289__auto__ = e35375;
var statearr_35376_37810 = state_35306;
(statearr_35376_37810[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_35306[(4)]))){
var statearr_35377_37811 = state_35306;
(statearr_35377_37811[(1)] = cljs.core.first((state_35306[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37815 = state_35306;
state_35306 = G__37815;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_35306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_35306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_35378 = f__34510__auto__();
(statearr_35378[(6)] = c__34509__auto___37787);

return statearr_35378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34509__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_35401){
var state_val_35402 = (state_35401[(1)]);
if((state_val_35402 === (7))){
var inst_35397 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35403_37816 = state_35401__$1;
(statearr_35403_37816[(2)] = inst_35397);

(statearr_35403_37816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (1))){
var inst_35380 = init;
var inst_35381 = inst_35380;
var state_35401__$1 = (function (){var statearr_35407 = state_35401;
(statearr_35407[(7)] = inst_35381);

return statearr_35407;
})();
var statearr_35408_37817 = state_35401__$1;
(statearr_35408_37817[(2)] = null);

(statearr_35408_37817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (4))){
var inst_35384 = (state_35401[(8)]);
var inst_35384__$1 = (state_35401[(2)]);
var inst_35385 = (inst_35384__$1 == null);
var state_35401__$1 = (function (){var statearr_35409 = state_35401;
(statearr_35409[(8)] = inst_35384__$1);

return statearr_35409;
})();
if(cljs.core.truth_(inst_35385)){
var statearr_35410_37819 = state_35401__$1;
(statearr_35410_37819[(1)] = (5));

} else {
var statearr_35411_37820 = state_35401__$1;
(statearr_35411_37820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (6))){
var inst_35384 = (state_35401[(8)]);
var inst_35381 = (state_35401[(7)]);
var inst_35388 = (state_35401[(9)]);
var inst_35388__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_35381,inst_35384) : f.call(null, inst_35381,inst_35384));
var inst_35389 = cljs.core.reduced_QMARK_(inst_35388__$1);
var state_35401__$1 = (function (){var statearr_35414 = state_35401;
(statearr_35414[(9)] = inst_35388__$1);

return statearr_35414;
})();
if(inst_35389){
var statearr_35416_37821 = state_35401__$1;
(statearr_35416_37821[(1)] = (8));

} else {
var statearr_35417_37822 = state_35401__$1;
(statearr_35417_37822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (3))){
var inst_35399 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35401__$1,inst_35399);
} else {
if((state_val_35402 === (2))){
var state_35401__$1 = state_35401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35401__$1,(4),ch);
} else {
if((state_val_35402 === (9))){
var inst_35388 = (state_35401[(9)]);
var inst_35381 = inst_35388;
var state_35401__$1 = (function (){var statearr_35421 = state_35401;
(statearr_35421[(7)] = inst_35381);

return statearr_35421;
})();
var statearr_35423_37826 = state_35401__$1;
(statearr_35423_37826[(2)] = null);

(statearr_35423_37826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (5))){
var inst_35381 = (state_35401[(7)]);
var state_35401__$1 = state_35401;
var statearr_35424_37827 = state_35401__$1;
(statearr_35424_37827[(2)] = inst_35381);

(statearr_35424_37827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (10))){
var inst_35395 = (state_35401[(2)]);
var state_35401__$1 = state_35401;
var statearr_35425_37828 = state_35401__$1;
(statearr_35425_37828[(2)] = inst_35395);

(statearr_35425_37828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35402 === (8))){
var inst_35388 = (state_35401[(9)]);
var inst_35391 = cljs.core.deref(inst_35388);
var state_35401__$1 = state_35401;
var statearr_35426_37829 = state_35401__$1;
(statearr_35426_37829[(2)] = inst_35391);

(statearr_35426_37829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34286__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34286__auto____0 = (function (){
var statearr_35427 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35427[(0)] = cljs$core$async$reduce_$_state_machine__34286__auto__);

(statearr_35427[(1)] = (1));

return statearr_35427;
});
var cljs$core$async$reduce_$_state_machine__34286__auto____1 = (function (state_35401){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_35401);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e35428){var ex__34289__auto__ = e35428;
var statearr_35429_37832 = state_35401;
(statearr_35429_37832[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_35401[(4)]))){
var statearr_35432_37833 = state_35401;
(statearr_35432_37833[(1)] = cljs.core.first((state_35401[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37834 = state_35401;
state_35401 = G__37834;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34286__auto__ = function(state_35401){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34286__auto____1.call(this,state_35401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34286__auto____0;
cljs$core$async$reduce_$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34286__auto____1;
return cljs$core$async$reduce_$_state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_35435 = f__34510__auto__();
(statearr_35435[(6)] = c__34509__auto__);

return statearr_35435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));

return c__34509__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null, f));
var c__34509__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_35446){
var state_val_35447 = (state_35446[(1)]);
if((state_val_35447 === (1))){
var inst_35441 = cljs.core.async.reduce(f__$1,init,ch);
var state_35446__$1 = state_35446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35446__$1,(2),inst_35441);
} else {
if((state_val_35447 === (2))){
var inst_35443 = (state_35446[(2)]);
var inst_35444 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_35443) : f__$1.call(null, inst_35443));
var state_35446__$1 = state_35446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35446__$1,inst_35444);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34286__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34286__auto____0 = (function (){
var statearr_35452 = [null,null,null,null,null,null,null];
(statearr_35452[(0)] = cljs$core$async$transduce_$_state_machine__34286__auto__);

(statearr_35452[(1)] = (1));

return statearr_35452;
});
var cljs$core$async$transduce_$_state_machine__34286__auto____1 = (function (state_35446){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_35446);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e35455){var ex__34289__auto__ = e35455;
var statearr_35457_37838 = state_35446;
(statearr_35457_37838[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_35446[(4)]))){
var statearr_35459_37842 = state_35446;
(statearr_35459_37842[(1)] = cljs.core.first((state_35446[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37843 = state_35446;
state_35446 = G__37843;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34286__auto__ = function(state_35446){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34286__auto____1.call(this,state_35446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34286__auto____0;
cljs$core$async$transduce_$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34286__auto____1;
return cljs$core$async$transduce_$_state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_35462 = f__34510__auto__();
(statearr_35462[(6)] = c__34509__auto__);

return statearr_35462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));

return c__34509__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__35468 = arguments.length;
switch (G__35468) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34509__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_35507){
var state_val_35508 = (state_35507[(1)]);
if((state_val_35508 === (7))){
var inst_35488 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
var statearr_35521_37848 = state_35507__$1;
(statearr_35521_37848[(2)] = inst_35488);

(statearr_35521_37848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (1))){
var inst_35479 = cljs.core.seq(coll);
var inst_35483 = inst_35479;
var state_35507__$1 = (function (){var statearr_35522 = state_35507;
(statearr_35522[(7)] = inst_35483);

return statearr_35522;
})();
var statearr_35524_37850 = state_35507__$1;
(statearr_35524_37850[(2)] = null);

(statearr_35524_37850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (4))){
var inst_35483 = (state_35507[(7)]);
var inst_35486 = cljs.core.first(inst_35483);
var state_35507__$1 = state_35507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35507__$1,(7),ch,inst_35486);
} else {
if((state_val_35508 === (13))){
var inst_35501 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
var statearr_35528_37854 = state_35507__$1;
(statearr_35528_37854[(2)] = inst_35501);

(statearr_35528_37854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (6))){
var inst_35491 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
if(cljs.core.truth_(inst_35491)){
var statearr_35530_37855 = state_35507__$1;
(statearr_35530_37855[(1)] = (8));

} else {
var statearr_35531_37856 = state_35507__$1;
(statearr_35531_37856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (3))){
var inst_35505 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35507__$1,inst_35505);
} else {
if((state_val_35508 === (12))){
var state_35507__$1 = state_35507;
var statearr_35535_37857 = state_35507__$1;
(statearr_35535_37857[(2)] = null);

(statearr_35535_37857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (2))){
var inst_35483 = (state_35507[(7)]);
var state_35507__$1 = state_35507;
if(cljs.core.truth_(inst_35483)){
var statearr_35538_37858 = state_35507__$1;
(statearr_35538_37858[(1)] = (4));

} else {
var statearr_35539_37859 = state_35507__$1;
(statearr_35539_37859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (11))){
var inst_35498 = cljs.core.async.close_BANG_(ch);
var state_35507__$1 = state_35507;
var statearr_35541_37860 = state_35507__$1;
(statearr_35541_37860[(2)] = inst_35498);

(statearr_35541_37860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (9))){
var state_35507__$1 = state_35507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35542_37861 = state_35507__$1;
(statearr_35542_37861[(1)] = (11));

} else {
var statearr_35543_37862 = state_35507__$1;
(statearr_35543_37862[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (5))){
var inst_35483 = (state_35507[(7)]);
var state_35507__$1 = state_35507;
var statearr_35544_37863 = state_35507__$1;
(statearr_35544_37863[(2)] = inst_35483);

(statearr_35544_37863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (10))){
var inst_35503 = (state_35507[(2)]);
var state_35507__$1 = state_35507;
var statearr_35545_37864 = state_35507__$1;
(statearr_35545_37864[(2)] = inst_35503);

(statearr_35545_37864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35508 === (8))){
var inst_35483 = (state_35507[(7)]);
var inst_35493 = cljs.core.next(inst_35483);
var inst_35483__$1 = inst_35493;
var state_35507__$1 = (function (){var statearr_35546 = state_35507;
(statearr_35546[(7)] = inst_35483__$1);

return statearr_35546;
})();
var statearr_35547_37865 = state_35507__$1;
(statearr_35547_37865[(2)] = null);

(statearr_35547_37865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_35548 = [null,null,null,null,null,null,null,null];
(statearr_35548[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_35548[(1)] = (1));

return statearr_35548;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_35507){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_35507);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e35549){var ex__34289__auto__ = e35549;
var statearr_35550_37866 = state_35507;
(statearr_35550_37866[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_35507[(4)]))){
var statearr_35551_37868 = state_35507;
(statearr_35551_37868[(1)] = cljs.core.first((state_35507[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37870 = state_35507;
state_35507 = G__37870;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_35507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_35507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_35552 = f__34510__auto__();
(statearr_35552[(6)] = c__34509__auto__);

return statearr_35552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));

return c__34509__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35558 = arguments.length;
switch (G__35558) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_37872 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null, _));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null, _));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_37872(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_37877 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null, m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null, m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_37877(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_37878 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_37878(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_37879 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_37879(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35594 = (function (ch,cs,meta35595){
this.ch = ch;
this.cs = cs;
this.meta35595 = meta35595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35596,meta35595__$1){
var self__ = this;
var _35596__$1 = this;
return (new cljs.core.async.t_cljs$core$async35594(self__.ch,self__.cs,meta35595__$1));
}));

(cljs.core.async.t_cljs$core$async35594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35596){
var self__ = this;
var _35596__$1 = this;
return self__.meta35595;
}));

(cljs.core.async.t_cljs$core$async35594.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35594.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35594.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async35594.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async35594.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async35594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35595","meta35595",1356571707,null)], null);
}));

(cljs.core.async.t_cljs$core$async35594.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35594");

(cljs.core.async.t_cljs$core$async35594.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async35594");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35594.
 */
cljs.core.async.__GT_t_cljs$core$async35594 = (function cljs$core$async$__GT_t_cljs$core$async35594(ch,cs,meta35595){
return (new cljs.core.async.t_cljs$core$async35594(ch,cs,meta35595));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async35594(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__34509__auto___37886 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_35750){
var state_val_35754 = (state_35750[(1)]);
if((state_val_35754 === (7))){
var inst_35742 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35775_37887 = state_35750__$1;
(statearr_35775_37887[(2)] = inst_35742);

(statearr_35775_37887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (20))){
var inst_35644 = (state_35750[(7)]);
var inst_35656 = cljs.core.first(inst_35644);
var inst_35657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35656,(0),null);
var inst_35658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35656,(1),null);
var state_35750__$1 = (function (){var statearr_35787 = state_35750;
(statearr_35787[(8)] = inst_35657);

return statearr_35787;
})();
if(cljs.core.truth_(inst_35658)){
var statearr_35791_37892 = state_35750__$1;
(statearr_35791_37892[(1)] = (22));

} else {
var statearr_35800_37893 = state_35750__$1;
(statearr_35800_37893[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (27))){
var inst_35687 = (state_35750[(9)]);
var inst_35689 = (state_35750[(10)]);
var inst_35694 = (state_35750[(11)]);
var inst_35610 = (state_35750[(12)]);
var inst_35694__$1 = cljs.core._nth(inst_35687,inst_35689);
var inst_35695 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35694__$1,inst_35610,done);
var state_35750__$1 = (function (){var statearr_35817 = state_35750;
(statearr_35817[(11)] = inst_35694__$1);

return statearr_35817;
})();
if(cljs.core.truth_(inst_35695)){
var statearr_35825_37895 = state_35750__$1;
(statearr_35825_37895[(1)] = (30));

} else {
var statearr_35826_37896 = state_35750__$1;
(statearr_35826_37896[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (1))){
var state_35750__$1 = state_35750;
var statearr_35827_37897 = state_35750__$1;
(statearr_35827_37897[(2)] = null);

(statearr_35827_37897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (24))){
var inst_35644 = (state_35750[(7)]);
var inst_35663 = (state_35750[(2)]);
var inst_35664 = cljs.core.next(inst_35644);
var inst_35619 = inst_35664;
var inst_35620 = null;
var inst_35621 = (0);
var inst_35622 = (0);
var state_35750__$1 = (function (){var statearr_35837 = state_35750;
(statearr_35837[(13)] = inst_35663);

(statearr_35837[(14)] = inst_35621);

(statearr_35837[(15)] = inst_35620);

(statearr_35837[(16)] = inst_35619);

(statearr_35837[(17)] = inst_35622);

return statearr_35837;
})();
var statearr_35840_37898 = state_35750__$1;
(statearr_35840_37898[(2)] = null);

(statearr_35840_37898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (39))){
var state_35750__$1 = state_35750;
var statearr_35858_37899 = state_35750__$1;
(statearr_35858_37899[(2)] = null);

(statearr_35858_37899[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (4))){
var inst_35610 = (state_35750[(12)]);
var inst_35610__$1 = (state_35750[(2)]);
var inst_35611 = (inst_35610__$1 == null);
var state_35750__$1 = (function (){var statearr_35864 = state_35750;
(statearr_35864[(12)] = inst_35610__$1);

return statearr_35864;
})();
if(cljs.core.truth_(inst_35611)){
var statearr_35865_37901 = state_35750__$1;
(statearr_35865_37901[(1)] = (5));

} else {
var statearr_35868_37903 = state_35750__$1;
(statearr_35868_37903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (15))){
var inst_35621 = (state_35750[(14)]);
var inst_35620 = (state_35750[(15)]);
var inst_35619 = (state_35750[(16)]);
var inst_35622 = (state_35750[(17)]);
var inst_35639 = (state_35750[(2)]);
var inst_35641 = (inst_35622 + (1));
var tmp35848 = inst_35621;
var tmp35849 = inst_35620;
var tmp35850 = inst_35619;
var inst_35619__$1 = tmp35850;
var inst_35620__$1 = tmp35849;
var inst_35621__$1 = tmp35848;
var inst_35622__$1 = inst_35641;
var state_35750__$1 = (function (){var statearr_35879 = state_35750;
(statearr_35879[(18)] = inst_35639);

(statearr_35879[(14)] = inst_35621__$1);

(statearr_35879[(15)] = inst_35620__$1);

(statearr_35879[(16)] = inst_35619__$1);

(statearr_35879[(17)] = inst_35622__$1);

return statearr_35879;
})();
var statearr_35881_37957 = state_35750__$1;
(statearr_35881_37957[(2)] = null);

(statearr_35881_37957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (21))){
var inst_35667 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35893_37958 = state_35750__$1;
(statearr_35893_37958[(2)] = inst_35667);

(statearr_35893_37958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (31))){
var inst_35694 = (state_35750[(11)]);
var inst_35698 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_35694);
var state_35750__$1 = state_35750;
var statearr_35900_37959 = state_35750__$1;
(statearr_35900_37959[(2)] = inst_35698);

(statearr_35900_37959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (32))){
var inst_35688 = (state_35750[(19)]);
var inst_35686 = (state_35750[(20)]);
var inst_35687 = (state_35750[(9)]);
var inst_35689 = (state_35750[(10)]);
var inst_35700 = (state_35750[(2)]);
var inst_35701 = (inst_35689 + (1));
var tmp35887 = inst_35688;
var tmp35888 = inst_35686;
var tmp35889 = inst_35687;
var inst_35686__$1 = tmp35888;
var inst_35687__$1 = tmp35889;
var inst_35688__$1 = tmp35887;
var inst_35689__$1 = inst_35701;
var state_35750__$1 = (function (){var statearr_35902 = state_35750;
(statearr_35902[(21)] = inst_35700);

(statearr_35902[(19)] = inst_35688__$1);

(statearr_35902[(20)] = inst_35686__$1);

(statearr_35902[(9)] = inst_35687__$1);

(statearr_35902[(10)] = inst_35689__$1);

return statearr_35902;
})();
var statearr_35903_37965 = state_35750__$1;
(statearr_35903_37965[(2)] = null);

(statearr_35903_37965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (40))){
var inst_35714 = (state_35750[(22)]);
var inst_35718 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null, inst_35714);
var state_35750__$1 = state_35750;
var statearr_35906_37967 = state_35750__$1;
(statearr_35906_37967[(2)] = inst_35718);

(statearr_35906_37967[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (33))){
var inst_35704 = (state_35750[(23)]);
var inst_35706 = cljs.core.chunked_seq_QMARK_(inst_35704);
var state_35750__$1 = state_35750;
if(inst_35706){
var statearr_35908_37968 = state_35750__$1;
(statearr_35908_37968[(1)] = (36));

} else {
var statearr_35910_37969 = state_35750__$1;
(statearr_35910_37969[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (13))){
var inst_35632 = (state_35750[(24)]);
var inst_35636 = cljs.core.async.close_BANG_(inst_35632);
var state_35750__$1 = state_35750;
var statearr_35913_37970 = state_35750__$1;
(statearr_35913_37970[(2)] = inst_35636);

(statearr_35913_37970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (22))){
var inst_35657 = (state_35750[(8)]);
var inst_35660 = cljs.core.async.close_BANG_(inst_35657);
var state_35750__$1 = state_35750;
var statearr_35915_37971 = state_35750__$1;
(statearr_35915_37971[(2)] = inst_35660);

(statearr_35915_37971[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (36))){
var inst_35704 = (state_35750[(23)]);
var inst_35708 = cljs.core.chunk_first(inst_35704);
var inst_35709 = cljs.core.chunk_rest(inst_35704);
var inst_35711 = cljs.core.count(inst_35708);
var inst_35686 = inst_35709;
var inst_35687 = inst_35708;
var inst_35688 = inst_35711;
var inst_35689 = (0);
var state_35750__$1 = (function (){var statearr_35918 = state_35750;
(statearr_35918[(19)] = inst_35688);

(statearr_35918[(20)] = inst_35686);

(statearr_35918[(9)] = inst_35687);

(statearr_35918[(10)] = inst_35689);

return statearr_35918;
})();
var statearr_35919_37986 = state_35750__$1;
(statearr_35919_37986[(2)] = null);

(statearr_35919_37986[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (41))){
var inst_35704 = (state_35750[(23)]);
var inst_35720 = (state_35750[(2)]);
var inst_35721 = cljs.core.next(inst_35704);
var inst_35686 = inst_35721;
var inst_35687 = null;
var inst_35688 = (0);
var inst_35689 = (0);
var state_35750__$1 = (function (){var statearr_35920 = state_35750;
(statearr_35920[(19)] = inst_35688);

(statearr_35920[(20)] = inst_35686);

(statearr_35920[(9)] = inst_35687);

(statearr_35920[(10)] = inst_35689);

(statearr_35920[(25)] = inst_35720);

return statearr_35920;
})();
var statearr_35921_37998 = state_35750__$1;
(statearr_35921_37998[(2)] = null);

(statearr_35921_37998[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (43))){
var state_35750__$1 = state_35750;
var statearr_35922_38003 = state_35750__$1;
(statearr_35922_38003[(2)] = null);

(statearr_35922_38003[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (29))){
var inst_35729 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35925_38005 = state_35750__$1;
(statearr_35925_38005[(2)] = inst_35729);

(statearr_35925_38005[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (44))){
var inst_35739 = (state_35750[(2)]);
var state_35750__$1 = (function (){var statearr_35927 = state_35750;
(statearr_35927[(26)] = inst_35739);

return statearr_35927;
})();
var statearr_35928_38007 = state_35750__$1;
(statearr_35928_38007[(2)] = null);

(statearr_35928_38007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (6))){
var inst_35678 = (state_35750[(27)]);
var inst_35677 = cljs.core.deref(cs);
var inst_35678__$1 = cljs.core.keys(inst_35677);
var inst_35679 = cljs.core.count(inst_35678__$1);
var inst_35680 = cljs.core.reset_BANG_(dctr,inst_35679);
var inst_35685 = cljs.core.seq(inst_35678__$1);
var inst_35686 = inst_35685;
var inst_35687 = null;
var inst_35688 = (0);
var inst_35689 = (0);
var state_35750__$1 = (function (){var statearr_35932 = state_35750;
(statearr_35932[(19)] = inst_35688);

(statearr_35932[(20)] = inst_35686);

(statearr_35932[(9)] = inst_35687);

(statearr_35932[(10)] = inst_35689);

(statearr_35932[(27)] = inst_35678__$1);

(statearr_35932[(28)] = inst_35680);

return statearr_35932;
})();
var statearr_35933_38024 = state_35750__$1;
(statearr_35933_38024[(2)] = null);

(statearr_35933_38024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (28))){
var inst_35686 = (state_35750[(20)]);
var inst_35704 = (state_35750[(23)]);
var inst_35704__$1 = cljs.core.seq(inst_35686);
var state_35750__$1 = (function (){var statearr_35935 = state_35750;
(statearr_35935[(23)] = inst_35704__$1);

return statearr_35935;
})();
if(inst_35704__$1){
var statearr_35936_38032 = state_35750__$1;
(statearr_35936_38032[(1)] = (33));

} else {
var statearr_35937_38035 = state_35750__$1;
(statearr_35937_38035[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (25))){
var inst_35688 = (state_35750[(19)]);
var inst_35689 = (state_35750[(10)]);
var inst_35691 = (inst_35689 < inst_35688);
var inst_35692 = inst_35691;
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35692)){
var statearr_35940_38036 = state_35750__$1;
(statearr_35940_38036[(1)] = (27));

} else {
var statearr_35941_38037 = state_35750__$1;
(statearr_35941_38037[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (34))){
var state_35750__$1 = state_35750;
var statearr_35944_38038 = state_35750__$1;
(statearr_35944_38038[(2)] = null);

(statearr_35944_38038[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (17))){
var state_35750__$1 = state_35750;
var statearr_35946_38041 = state_35750__$1;
(statearr_35946_38041[(2)] = null);

(statearr_35946_38041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (3))){
var inst_35744 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35750__$1,inst_35744);
} else {
if((state_val_35754 === (12))){
var inst_35673 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35949_38044 = state_35750__$1;
(statearr_35949_38044[(2)] = inst_35673);

(statearr_35949_38044[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (2))){
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35750__$1,(4),ch);
} else {
if((state_val_35754 === (23))){
var state_35750__$1 = state_35750;
var statearr_35950_38045 = state_35750__$1;
(statearr_35950_38045[(2)] = null);

(statearr_35950_38045[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (35))){
var inst_35727 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35952_38049 = state_35750__$1;
(statearr_35952_38049[(2)] = inst_35727);

(statearr_35952_38049[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (19))){
var inst_35644 = (state_35750[(7)]);
var inst_35648 = cljs.core.chunk_first(inst_35644);
var inst_35649 = cljs.core.chunk_rest(inst_35644);
var inst_35650 = cljs.core.count(inst_35648);
var inst_35619 = inst_35649;
var inst_35620 = inst_35648;
var inst_35621 = inst_35650;
var inst_35622 = (0);
var state_35750__$1 = (function (){var statearr_35953 = state_35750;
(statearr_35953[(14)] = inst_35621);

(statearr_35953[(15)] = inst_35620);

(statearr_35953[(16)] = inst_35619);

(statearr_35953[(17)] = inst_35622);

return statearr_35953;
})();
var statearr_35954_38054 = state_35750__$1;
(statearr_35954_38054[(2)] = null);

(statearr_35954_38054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (11))){
var inst_35644 = (state_35750[(7)]);
var inst_35619 = (state_35750[(16)]);
var inst_35644__$1 = cljs.core.seq(inst_35619);
var state_35750__$1 = (function (){var statearr_35962 = state_35750;
(statearr_35962[(7)] = inst_35644__$1);

return statearr_35962;
})();
if(inst_35644__$1){
var statearr_35967_38059 = state_35750__$1;
(statearr_35967_38059[(1)] = (16));

} else {
var statearr_35968_38060 = state_35750__$1;
(statearr_35968_38060[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (9))){
var inst_35675 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35969_38061 = state_35750__$1;
(statearr_35969_38061[(2)] = inst_35675);

(statearr_35969_38061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (5))){
var inst_35617 = cljs.core.deref(cs);
var inst_35618 = cljs.core.seq(inst_35617);
var inst_35619 = inst_35618;
var inst_35620 = null;
var inst_35621 = (0);
var inst_35622 = (0);
var state_35750__$1 = (function (){var statearr_35975 = state_35750;
(statearr_35975[(14)] = inst_35621);

(statearr_35975[(15)] = inst_35620);

(statearr_35975[(16)] = inst_35619);

(statearr_35975[(17)] = inst_35622);

return statearr_35975;
})();
var statearr_35976_38062 = state_35750__$1;
(statearr_35976_38062[(2)] = null);

(statearr_35976_38062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (14))){
var state_35750__$1 = state_35750;
var statearr_35977_38066 = state_35750__$1;
(statearr_35977_38066[(2)] = null);

(statearr_35977_38066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (45))){
var inst_35736 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35978_38070 = state_35750__$1;
(statearr_35978_38070[(2)] = inst_35736);

(statearr_35978_38070[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (26))){
var inst_35678 = (state_35750[(27)]);
var inst_35731 = (state_35750[(2)]);
var inst_35732 = cljs.core.seq(inst_35678);
var state_35750__$1 = (function (){var statearr_35983 = state_35750;
(statearr_35983[(29)] = inst_35731);

return statearr_35983;
})();
if(inst_35732){
var statearr_35986_38073 = state_35750__$1;
(statearr_35986_38073[(1)] = (42));

} else {
var statearr_35987_38074 = state_35750__$1;
(statearr_35987_38074[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (16))){
var inst_35644 = (state_35750[(7)]);
var inst_35646 = cljs.core.chunked_seq_QMARK_(inst_35644);
var state_35750__$1 = state_35750;
if(inst_35646){
var statearr_35989_38075 = state_35750__$1;
(statearr_35989_38075[(1)] = (19));

} else {
var statearr_35990_38076 = state_35750__$1;
(statearr_35990_38076[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (38))){
var inst_35724 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35992_38078 = state_35750__$1;
(statearr_35992_38078[(2)] = inst_35724);

(statearr_35992_38078[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (30))){
var state_35750__$1 = state_35750;
var statearr_35993_38079 = state_35750__$1;
(statearr_35993_38079[(2)] = null);

(statearr_35993_38079[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (10))){
var inst_35620 = (state_35750[(15)]);
var inst_35622 = (state_35750[(17)]);
var inst_35631 = cljs.core._nth(inst_35620,inst_35622);
var inst_35632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35631,(0),null);
var inst_35634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35631,(1),null);
var state_35750__$1 = (function (){var statearr_35994 = state_35750;
(statearr_35994[(24)] = inst_35632);

return statearr_35994;
})();
if(cljs.core.truth_(inst_35634)){
var statearr_35995_38080 = state_35750__$1;
(statearr_35995_38080[(1)] = (13));

} else {
var statearr_35996_38081 = state_35750__$1;
(statearr_35996_38081[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (18))){
var inst_35671 = (state_35750[(2)]);
var state_35750__$1 = state_35750;
var statearr_35997_38083 = state_35750__$1;
(statearr_35997_38083[(2)] = inst_35671);

(statearr_35997_38083[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (42))){
var state_35750__$1 = state_35750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35750__$1,(45),dchan);
} else {
if((state_val_35754 === (37))){
var inst_35704 = (state_35750[(23)]);
var inst_35610 = (state_35750[(12)]);
var inst_35714 = (state_35750[(22)]);
var inst_35714__$1 = cljs.core.first(inst_35704);
var inst_35715 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_35714__$1,inst_35610,done);
var state_35750__$1 = (function (){var statearr_35999 = state_35750;
(statearr_35999[(22)] = inst_35714__$1);

return statearr_35999;
})();
if(cljs.core.truth_(inst_35715)){
var statearr_36004_38085 = state_35750__$1;
(statearr_36004_38085[(1)] = (39));

} else {
var statearr_36005_38086 = state_35750__$1;
(statearr_36005_38086[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35754 === (8))){
var inst_35621 = (state_35750[(14)]);
var inst_35622 = (state_35750[(17)]);
var inst_35624 = (inst_35622 < inst_35621);
var inst_35626 = inst_35624;
var state_35750__$1 = state_35750;
if(cljs.core.truth_(inst_35626)){
var statearr_36007_38087 = state_35750__$1;
(statearr_36007_38087[(1)] = (10));

} else {
var statearr_36010_38088 = state_35750__$1;
(statearr_36010_38088[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__34286__auto__ = null;
var cljs$core$async$mult_$_state_machine__34286__auto____0 = (function (){
var statearr_36013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36013[(0)] = cljs$core$async$mult_$_state_machine__34286__auto__);

(statearr_36013[(1)] = (1));

return statearr_36013;
});
var cljs$core$async$mult_$_state_machine__34286__auto____1 = (function (state_35750){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_35750);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e36015){var ex__34289__auto__ = e36015;
var statearr_36017_38091 = state_35750;
(statearr_36017_38091[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_35750[(4)]))){
var statearr_36018_38092 = state_35750;
(statearr_36018_38092[(1)] = cljs.core.first((state_35750[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38093 = state_35750;
state_35750 = G__38093;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34286__auto__ = function(state_35750){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34286__auto____1.call(this,state_35750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34286__auto____0;
cljs$core$async$mult_$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34286__auto____1;
return cljs$core$async$mult_$_state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_36019 = f__34510__auto__();
(statearr_36019[(6)] = c__34509__auto___37886);

return statearr_36019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36025 = arguments.length;
switch (G__36025) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_38097 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_38097(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_38107 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null, m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null, m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_38107(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_38122 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null, m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null, m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_38122(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_38125 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null, m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null, m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_38125(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_38127 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null, m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null, m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_38127(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___38132 = arguments.length;
var i__5727__auto___38133 = (0);
while(true){
if((i__5727__auto___38133 < len__5726__auto___38132)){
args__5732__auto__.push((arguments[i__5727__auto___38133]));

var G__38134 = (i__5727__auto___38133 + (1));
i__5727__auto___38133 = G__38134;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36054){
var map__36055 = p__36054;
var map__36055__$1 = cljs.core.__destructure_map(map__36055);
var opts = map__36055__$1;
var statearr_36056_38147 = state;
(statearr_36056_38147[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_36057_38148 = state;
(statearr_36057_38148[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_36058_38149 = state;
(statearr_36058_38149[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36049){
var G__36050 = cljs.core.first(seq36049);
var seq36049__$1 = cljs.core.next(seq36049);
var G__36051 = cljs.core.first(seq36049__$1);
var seq36049__$2 = cljs.core.next(seq36049__$1);
var G__36052 = cljs.core.first(seq36049__$2);
var seq36049__$3 = cljs.core.next(seq36049__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36050,G__36051,G__36052,seq36049__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36065 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36066){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta36066 = meta36066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36067,meta36066__$1){
var self__ = this;
var _36067__$1 = this;
return (new cljs.core.async.t_cljs$core$async36065(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta36066__$1));
}));

(cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36067){
var self__ = this;
var _36067__$1 = this;
return self__.meta36066;
}));

(cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async36065.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null, mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null, ));
}));

(cljs.core.async.t_cljs$core$async36065.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta36066","meta36066",159882619,null)], null);
}));

(cljs.core.async.t_cljs$core$async36065.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36065");

(cljs.core.async.t_cljs$core$async36065.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async36065");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36065.
 */
cljs.core.async.__GT_t_cljs$core$async36065 = (function cljs$core$async$__GT_t_cljs$core$async36065(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36066){
return (new cljs.core.async.t_cljs$core$async36065(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta36066));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null, v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async36065(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__34509__auto___38164 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_36150){
var state_val_36151 = (state_36150[(1)]);
if((state_val_36151 === (7))){
var inst_36106 = (state_36150[(2)]);
var state_36150__$1 = state_36150;
if(cljs.core.truth_(inst_36106)){
var statearr_36153_38166 = state_36150__$1;
(statearr_36153_38166[(1)] = (8));

} else {
var statearr_36154_38167 = state_36150__$1;
(statearr_36154_38167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (20))){
var inst_36098 = (state_36150[(7)]);
var state_36150__$1 = state_36150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36150__$1,(23),out,inst_36098);
} else {
if((state_val_36151 === (1))){
var inst_36081 = calc_state();
var inst_36082 = cljs.core.__destructure_map(inst_36081);
var inst_36083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36082,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36082,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36082,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36086 = inst_36081;
var state_36150__$1 = (function (){var statearr_36155 = state_36150;
(statearr_36155[(8)] = inst_36083);

(statearr_36155[(9)] = inst_36084);

(statearr_36155[(10)] = inst_36086);

(statearr_36155[(11)] = inst_36085);

return statearr_36155;
})();
var statearr_36156_38168 = state_36150__$1;
(statearr_36156_38168[(2)] = null);

(statearr_36156_38168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (24))){
var inst_36089 = (state_36150[(12)]);
var inst_36086 = inst_36089;
var state_36150__$1 = (function (){var statearr_36157 = state_36150;
(statearr_36157[(10)] = inst_36086);

return statearr_36157;
})();
var statearr_36158_38169 = state_36150__$1;
(statearr_36158_38169[(2)] = null);

(statearr_36158_38169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (4))){
var inst_36100 = (state_36150[(13)]);
var inst_36098 = (state_36150[(7)]);
var inst_36097 = (state_36150[(2)]);
var inst_36098__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36097,(0),null);
var inst_36099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36097,(1),null);
var inst_36100__$1 = (inst_36098__$1 == null);
var state_36150__$1 = (function (){var statearr_36160 = state_36150;
(statearr_36160[(14)] = inst_36099);

(statearr_36160[(13)] = inst_36100__$1);

(statearr_36160[(7)] = inst_36098__$1);

return statearr_36160;
})();
if(cljs.core.truth_(inst_36100__$1)){
var statearr_36161_38170 = state_36150__$1;
(statearr_36161_38170[(1)] = (5));

} else {
var statearr_36162_38171 = state_36150__$1;
(statearr_36162_38171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (15))){
var inst_36120 = (state_36150[(15)]);
var inst_36090 = (state_36150[(16)]);
var inst_36120__$1 = cljs.core.empty_QMARK_(inst_36090);
var state_36150__$1 = (function (){var statearr_36163 = state_36150;
(statearr_36163[(15)] = inst_36120__$1);

return statearr_36163;
})();
if(inst_36120__$1){
var statearr_36164_38172 = state_36150__$1;
(statearr_36164_38172[(1)] = (17));

} else {
var statearr_36165_38173 = state_36150__$1;
(statearr_36165_38173[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (21))){
var inst_36089 = (state_36150[(12)]);
var inst_36086 = inst_36089;
var state_36150__$1 = (function (){var statearr_36166 = state_36150;
(statearr_36166[(10)] = inst_36086);

return statearr_36166;
})();
var statearr_36167_38175 = state_36150__$1;
(statearr_36167_38175[(2)] = null);

(statearr_36167_38175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (13))){
var inst_36113 = (state_36150[(2)]);
var inst_36114 = calc_state();
var inst_36086 = inst_36114;
var state_36150__$1 = (function (){var statearr_36169 = state_36150;
(statearr_36169[(17)] = inst_36113);

(statearr_36169[(10)] = inst_36086);

return statearr_36169;
})();
var statearr_36170_38181 = state_36150__$1;
(statearr_36170_38181[(2)] = null);

(statearr_36170_38181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (22))){
var inst_36144 = (state_36150[(2)]);
var state_36150__$1 = state_36150;
var statearr_36171_38182 = state_36150__$1;
(statearr_36171_38182[(2)] = inst_36144);

(statearr_36171_38182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (6))){
var inst_36099 = (state_36150[(14)]);
var inst_36103 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36099,change);
var state_36150__$1 = state_36150;
var statearr_36172_38183 = state_36150__$1;
(statearr_36172_38183[(2)] = inst_36103);

(statearr_36172_38183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (25))){
var state_36150__$1 = state_36150;
var statearr_36173_38184 = state_36150__$1;
(statearr_36173_38184[(2)] = null);

(statearr_36173_38184[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (17))){
var inst_36091 = (state_36150[(18)]);
var inst_36099 = (state_36150[(14)]);
var inst_36122 = (inst_36091.cljs$core$IFn$_invoke$arity$1 ? inst_36091.cljs$core$IFn$_invoke$arity$1(inst_36099) : inst_36091.call(null, inst_36099));
var inst_36123 = cljs.core.not(inst_36122);
var state_36150__$1 = state_36150;
var statearr_36175_38185 = state_36150__$1;
(statearr_36175_38185[(2)] = inst_36123);

(statearr_36175_38185[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (3))){
var inst_36148 = (state_36150[(2)]);
var state_36150__$1 = state_36150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36150__$1,inst_36148);
} else {
if((state_val_36151 === (12))){
var state_36150__$1 = state_36150;
var statearr_36181_38186 = state_36150__$1;
(statearr_36181_38186[(2)] = null);

(statearr_36181_38186[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (2))){
var inst_36086 = (state_36150[(10)]);
var inst_36089 = (state_36150[(12)]);
var inst_36089__$1 = cljs.core.__destructure_map(inst_36086);
var inst_36090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36089__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36089__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36089__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36150__$1 = (function (){var statearr_36186 = state_36150;
(statearr_36186[(18)] = inst_36091);

(statearr_36186[(12)] = inst_36089__$1);

(statearr_36186[(16)] = inst_36090);

return statearr_36186;
})();
return cljs.core.async.ioc_alts_BANG_(state_36150__$1,(4),inst_36092);
} else {
if((state_val_36151 === (23))){
var inst_36132 = (state_36150[(2)]);
var state_36150__$1 = state_36150;
if(cljs.core.truth_(inst_36132)){
var statearr_36187_38201 = state_36150__$1;
(statearr_36187_38201[(1)] = (24));

} else {
var statearr_36188_38202 = state_36150__$1;
(statearr_36188_38202[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (19))){
var inst_36126 = (state_36150[(2)]);
var state_36150__$1 = state_36150;
var statearr_36189_38203 = state_36150__$1;
(statearr_36189_38203[(2)] = inst_36126);

(statearr_36189_38203[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (11))){
var inst_36099 = (state_36150[(14)]);
var inst_36110 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_36099);
var state_36150__$1 = state_36150;
var statearr_36190_38211 = state_36150__$1;
(statearr_36190_38211[(2)] = inst_36110);

(statearr_36190_38211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (9))){
var inst_36099 = (state_36150[(14)]);
var inst_36117 = (state_36150[(19)]);
var inst_36090 = (state_36150[(16)]);
var inst_36117__$1 = (inst_36090.cljs$core$IFn$_invoke$arity$1 ? inst_36090.cljs$core$IFn$_invoke$arity$1(inst_36099) : inst_36090.call(null, inst_36099));
var state_36150__$1 = (function (){var statearr_36191 = state_36150;
(statearr_36191[(19)] = inst_36117__$1);

return statearr_36191;
})();
if(cljs.core.truth_(inst_36117__$1)){
var statearr_36192_38216 = state_36150__$1;
(statearr_36192_38216[(1)] = (14));

} else {
var statearr_36193_38220 = state_36150__$1;
(statearr_36193_38220[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (5))){
var inst_36100 = (state_36150[(13)]);
var state_36150__$1 = state_36150;
var statearr_36195_38221 = state_36150__$1;
(statearr_36195_38221[(2)] = inst_36100);

(statearr_36195_38221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (14))){
var inst_36117 = (state_36150[(19)]);
var state_36150__$1 = state_36150;
var statearr_36196_38228 = state_36150__$1;
(statearr_36196_38228[(2)] = inst_36117);

(statearr_36196_38228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (26))){
var inst_36140 = (state_36150[(2)]);
var state_36150__$1 = state_36150;
var statearr_36198_38229 = state_36150__$1;
(statearr_36198_38229[(2)] = inst_36140);

(statearr_36198_38229[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (16))){
var inst_36128 = (state_36150[(2)]);
var state_36150__$1 = state_36150;
if(cljs.core.truth_(inst_36128)){
var statearr_36200_38233 = state_36150__$1;
(statearr_36200_38233[(1)] = (20));

} else {
var statearr_36203_38234 = state_36150__$1;
(statearr_36203_38234[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (10))){
var inst_36146 = (state_36150[(2)]);
var state_36150__$1 = state_36150;
var statearr_36204_38238 = state_36150__$1;
(statearr_36204_38238[(2)] = inst_36146);

(statearr_36204_38238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (18))){
var inst_36120 = (state_36150[(15)]);
var state_36150__$1 = state_36150;
var statearr_36205_38246 = state_36150__$1;
(statearr_36205_38246[(2)] = inst_36120);

(statearr_36205_38246[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36151 === (8))){
var inst_36098 = (state_36150[(7)]);
var inst_36108 = (inst_36098 == null);
var state_36150__$1 = state_36150;
if(cljs.core.truth_(inst_36108)){
var statearr_36206_38253 = state_36150__$1;
(statearr_36206_38253[(1)] = (11));

} else {
var statearr_36207_38257 = state_36150__$1;
(statearr_36207_38257[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__34286__auto__ = null;
var cljs$core$async$mix_$_state_machine__34286__auto____0 = (function (){
var statearr_36209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36209[(0)] = cljs$core$async$mix_$_state_machine__34286__auto__);

(statearr_36209[(1)] = (1));

return statearr_36209;
});
var cljs$core$async$mix_$_state_machine__34286__auto____1 = (function (state_36150){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_36150);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e36212){var ex__34289__auto__ = e36212;
var statearr_36213_38266 = state_36150;
(statearr_36213_38266[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_36150[(4)]))){
var statearr_36216_38270 = state_36150;
(statearr_36216_38270[(1)] = cljs.core.first((state_36150[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38274 = state_36150;
state_36150 = G__38274;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34286__auto__ = function(state_36150){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34286__auto____1.call(this,state_36150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34286__auto____0;
cljs$core$async$mix_$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34286__auto____1;
return cljs$core$async$mix_$_state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_36217 = f__34510__auto__();
(statearr_36217[(6)] = c__34509__auto___38164);

return statearr_36217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_38277 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null, p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null, p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_38277(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_38295 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null, p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null, p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_38295(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_38311 = (function() {
var G__38312 = null;
var G__38312__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null, p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null, p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__38312__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null, p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null, p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__38312 = function(p,v){
switch(arguments.length){
case 1:
return G__38312__1.call(this,p);
case 2:
return G__38312__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__38312.cljs$core$IFn$_invoke$arity$1 = G__38312__1;
G__38312.cljs$core$IFn$_invoke$arity$2 = G__38312__2;
return G__38312;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36235 = arguments.length;
switch (G__36235) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38311(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_38311(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36249 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36250){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36250 = meta36250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36251,meta36250__$1){
var self__ = this;
var _36251__$1 = this;
return (new cljs.core.async.t_cljs$core$async36249(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36250__$1));
}));

(cljs.core.async.t_cljs$core$async36249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36251){
var self__ = this;
var _36251__$1 = this;
return self__.meta36250;
}));

(cljs.core.async.t_cljs$core$async36249.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async36249.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36249.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null, topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async36249.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async36249.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async36249.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async36249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36250","meta36250",1589545676,null)], null);
}));

(cljs.core.async.t_cljs$core$async36249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36249");

(cljs.core.async.t_cljs$core$async36249.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async36249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36249.
 */
cljs.core.async.__GT_t_cljs$core$async36249 = (function cljs$core$async$__GT_t_cljs$core$async36249(ch,topic_fn,buf_fn,mults,ensure_mult,meta36250){
return (new cljs.core.async.t_cljs$core$async36249(ch,topic_fn,buf_fn,mults,ensure_mult,meta36250));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36248 = arguments.length;
switch (G__36248) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__36240_SHARP_){
if(cljs.core.truth_((p1__36240_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__36240_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__36240_SHARP_.call(null, topic)))){
return p1__36240_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36240_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null, topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async36249(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__34509__auto___38385 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_36340){
var state_val_36341 = (state_36340[(1)]);
if((state_val_36341 === (7))){
var inst_36336 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36342_38395 = state_36340__$1;
(statearr_36342_38395[(2)] = inst_36336);

(statearr_36342_38395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (20))){
var state_36340__$1 = state_36340;
var statearr_36344_38396 = state_36340__$1;
(statearr_36344_38396[(2)] = null);

(statearr_36344_38396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (1))){
var state_36340__$1 = state_36340;
var statearr_36346_38397 = state_36340__$1;
(statearr_36346_38397[(2)] = null);

(statearr_36346_38397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (24))){
var inst_36319 = (state_36340[(7)]);
var inst_36328 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_36319);
var state_36340__$1 = state_36340;
var statearr_36348_38401 = state_36340__$1;
(statearr_36348_38401[(2)] = inst_36328);

(statearr_36348_38401[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (4))){
var inst_36263 = (state_36340[(8)]);
var inst_36263__$1 = (state_36340[(2)]);
var inst_36264 = (inst_36263__$1 == null);
var state_36340__$1 = (function (){var statearr_36349 = state_36340;
(statearr_36349[(8)] = inst_36263__$1);

return statearr_36349;
})();
if(cljs.core.truth_(inst_36264)){
var statearr_36350_38407 = state_36340__$1;
(statearr_36350_38407[(1)] = (5));

} else {
var statearr_36351_38408 = state_36340__$1;
(statearr_36351_38408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (15))){
var inst_36312 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36356_38413 = state_36340__$1;
(statearr_36356_38413[(2)] = inst_36312);

(statearr_36356_38413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (21))){
var inst_36333 = (state_36340[(2)]);
var state_36340__$1 = (function (){var statearr_36357 = state_36340;
(statearr_36357[(9)] = inst_36333);

return statearr_36357;
})();
var statearr_36358_38424 = state_36340__$1;
(statearr_36358_38424[(2)] = null);

(statearr_36358_38424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (13))){
var inst_36290 = (state_36340[(10)]);
var inst_36292 = cljs.core.chunked_seq_QMARK_(inst_36290);
var state_36340__$1 = state_36340;
if(inst_36292){
var statearr_36361_38425 = state_36340__$1;
(statearr_36361_38425[(1)] = (16));

} else {
var statearr_36362_38426 = state_36340__$1;
(statearr_36362_38426[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (22))){
var inst_36325 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
if(cljs.core.truth_(inst_36325)){
var statearr_36363_38430 = state_36340__$1;
(statearr_36363_38430[(1)] = (23));

} else {
var statearr_36364_38435 = state_36340__$1;
(statearr_36364_38435[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (6))){
var inst_36263 = (state_36340[(8)]);
var inst_36319 = (state_36340[(7)]);
var inst_36321 = (state_36340[(11)]);
var inst_36319__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_36263) : topic_fn.call(null, inst_36263));
var inst_36320 = cljs.core.deref(mults);
var inst_36321__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_36320,inst_36319__$1);
var state_36340__$1 = (function (){var statearr_36369 = state_36340;
(statearr_36369[(7)] = inst_36319__$1);

(statearr_36369[(11)] = inst_36321__$1);

return statearr_36369;
})();
if(cljs.core.truth_(inst_36321__$1)){
var statearr_36370_38436 = state_36340__$1;
(statearr_36370_38436[(1)] = (19));

} else {
var statearr_36371_38437 = state_36340__$1;
(statearr_36371_38437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (25))){
var inst_36330 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36372_38438 = state_36340__$1;
(statearr_36372_38438[(2)] = inst_36330);

(statearr_36372_38438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (17))){
var inst_36290 = (state_36340[(10)]);
var inst_36303 = cljs.core.first(inst_36290);
var inst_36304 = cljs.core.async.muxch_STAR_(inst_36303);
var inst_36305 = cljs.core.async.close_BANG_(inst_36304);
var inst_36306 = cljs.core.next(inst_36290);
var inst_36273 = inst_36306;
var inst_36274 = null;
var inst_36275 = (0);
var inst_36276 = (0);
var state_36340__$1 = (function (){var statearr_36379 = state_36340;
(statearr_36379[(12)] = inst_36305);

(statearr_36379[(13)] = inst_36275);

(statearr_36379[(14)] = inst_36274);

(statearr_36379[(15)] = inst_36276);

(statearr_36379[(16)] = inst_36273);

return statearr_36379;
})();
var statearr_36380_38439 = state_36340__$1;
(statearr_36380_38439[(2)] = null);

(statearr_36380_38439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (3))){
var inst_36338 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36340__$1,inst_36338);
} else {
if((state_val_36341 === (12))){
var inst_36314 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36385_38443 = state_36340__$1;
(statearr_36385_38443[(2)] = inst_36314);

(statearr_36385_38443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (2))){
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36340__$1,(4),ch);
} else {
if((state_val_36341 === (23))){
var state_36340__$1 = state_36340;
var statearr_36386_38444 = state_36340__$1;
(statearr_36386_38444[(2)] = null);

(statearr_36386_38444[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (19))){
var inst_36263 = (state_36340[(8)]);
var inst_36321 = (state_36340[(11)]);
var inst_36323 = cljs.core.async.muxch_STAR_(inst_36321);
var state_36340__$1 = state_36340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36340__$1,(22),inst_36323,inst_36263);
} else {
if((state_val_36341 === (11))){
var inst_36290 = (state_36340[(10)]);
var inst_36273 = (state_36340[(16)]);
var inst_36290__$1 = cljs.core.seq(inst_36273);
var state_36340__$1 = (function (){var statearr_36390 = state_36340;
(statearr_36390[(10)] = inst_36290__$1);

return statearr_36390;
})();
if(inst_36290__$1){
var statearr_36391_38445 = state_36340__$1;
(statearr_36391_38445[(1)] = (13));

} else {
var statearr_36392_38446 = state_36340__$1;
(statearr_36392_38446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (9))){
var inst_36316 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36393_38447 = state_36340__$1;
(statearr_36393_38447[(2)] = inst_36316);

(statearr_36393_38447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (5))){
var inst_36270 = cljs.core.deref(mults);
var inst_36271 = cljs.core.vals(inst_36270);
var inst_36272 = cljs.core.seq(inst_36271);
var inst_36273 = inst_36272;
var inst_36274 = null;
var inst_36275 = (0);
var inst_36276 = (0);
var state_36340__$1 = (function (){var statearr_36394 = state_36340;
(statearr_36394[(13)] = inst_36275);

(statearr_36394[(14)] = inst_36274);

(statearr_36394[(15)] = inst_36276);

(statearr_36394[(16)] = inst_36273);

return statearr_36394;
})();
var statearr_36396_38448 = state_36340__$1;
(statearr_36396_38448[(2)] = null);

(statearr_36396_38448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (14))){
var state_36340__$1 = state_36340;
var statearr_36400_38449 = state_36340__$1;
(statearr_36400_38449[(2)] = null);

(statearr_36400_38449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (16))){
var inst_36290 = (state_36340[(10)]);
var inst_36295 = cljs.core.chunk_first(inst_36290);
var inst_36296 = cljs.core.chunk_rest(inst_36290);
var inst_36297 = cljs.core.count(inst_36295);
var inst_36273 = inst_36296;
var inst_36274 = inst_36295;
var inst_36275 = inst_36297;
var inst_36276 = (0);
var state_36340__$1 = (function (){var statearr_36401 = state_36340;
(statearr_36401[(13)] = inst_36275);

(statearr_36401[(14)] = inst_36274);

(statearr_36401[(15)] = inst_36276);

(statearr_36401[(16)] = inst_36273);

return statearr_36401;
})();
var statearr_36402_38450 = state_36340__$1;
(statearr_36402_38450[(2)] = null);

(statearr_36402_38450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (10))){
var inst_36275 = (state_36340[(13)]);
var inst_36274 = (state_36340[(14)]);
var inst_36276 = (state_36340[(15)]);
var inst_36273 = (state_36340[(16)]);
var inst_36283 = cljs.core._nth(inst_36274,inst_36276);
var inst_36284 = cljs.core.async.muxch_STAR_(inst_36283);
var inst_36285 = cljs.core.async.close_BANG_(inst_36284);
var inst_36287 = (inst_36276 + (1));
var tmp36397 = inst_36275;
var tmp36398 = inst_36274;
var tmp36399 = inst_36273;
var inst_36273__$1 = tmp36399;
var inst_36274__$1 = tmp36398;
var inst_36275__$1 = tmp36397;
var inst_36276__$1 = inst_36287;
var state_36340__$1 = (function (){var statearr_36403 = state_36340;
(statearr_36403[(17)] = inst_36285);

(statearr_36403[(13)] = inst_36275__$1);

(statearr_36403[(14)] = inst_36274__$1);

(statearr_36403[(15)] = inst_36276__$1);

(statearr_36403[(16)] = inst_36273__$1);

return statearr_36403;
})();
var statearr_36404_38451 = state_36340__$1;
(statearr_36404_38451[(2)] = null);

(statearr_36404_38451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (18))){
var inst_36309 = (state_36340[(2)]);
var state_36340__$1 = state_36340;
var statearr_36407_38455 = state_36340__$1;
(statearr_36407_38455[(2)] = inst_36309);

(statearr_36407_38455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36341 === (8))){
var inst_36275 = (state_36340[(13)]);
var inst_36276 = (state_36340[(15)]);
var inst_36280 = (inst_36276 < inst_36275);
var inst_36281 = inst_36280;
var state_36340__$1 = state_36340;
if(cljs.core.truth_(inst_36281)){
var statearr_36413_38457 = state_36340__$1;
(statearr_36413_38457[(1)] = (10));

} else {
var statearr_36414_38458 = state_36340__$1;
(statearr_36414_38458[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_36419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36419[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_36419[(1)] = (1));

return statearr_36419;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_36340){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_36340);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e36420){var ex__34289__auto__ = e36420;
var statearr_36421_38462 = state_36340;
(statearr_36421_38462[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_36340[(4)]))){
var statearr_36422_38463 = state_36340;
(statearr_36422_38463[(1)] = cljs.core.first((state_36340[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38464 = state_36340;
state_36340 = G__38464;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_36340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_36340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_36423 = f__34510__auto__();
(statearr_36423[(6)] = c__34509__auto___38385);

return statearr_36423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36429 = arguments.length;
switch (G__36429) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36438 = arguments.length;
switch (G__36438) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36451 = arguments.length;
switch (G__36451) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__34509__auto___38479 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_36509){
var state_val_36511 = (state_36509[(1)]);
if((state_val_36511 === (7))){
var state_36509__$1 = state_36509;
var statearr_36512_38480 = state_36509__$1;
(statearr_36512_38480[(2)] = null);

(statearr_36512_38480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (1))){
var state_36509__$1 = state_36509;
var statearr_36513_38484 = state_36509__$1;
(statearr_36513_38484[(2)] = null);

(statearr_36513_38484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (4))){
var inst_36459 = (state_36509[(7)]);
var inst_36458 = (state_36509[(8)]);
var inst_36461 = (inst_36459 < inst_36458);
var state_36509__$1 = state_36509;
if(cljs.core.truth_(inst_36461)){
var statearr_36514_38487 = state_36509__$1;
(statearr_36514_38487[(1)] = (6));

} else {
var statearr_36515_38488 = state_36509__$1;
(statearr_36515_38488[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (15))){
var inst_36494 = (state_36509[(9)]);
var inst_36499 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_36494);
var state_36509__$1 = state_36509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36509__$1,(17),out,inst_36499);
} else {
if((state_val_36511 === (13))){
var inst_36494 = (state_36509[(9)]);
var inst_36494__$1 = (state_36509[(2)]);
var inst_36495 = cljs.core.some(cljs.core.nil_QMARK_,inst_36494__$1);
var state_36509__$1 = (function (){var statearr_36518 = state_36509;
(statearr_36518[(9)] = inst_36494__$1);

return statearr_36518;
})();
if(cljs.core.truth_(inst_36495)){
var statearr_36519_38491 = state_36509__$1;
(statearr_36519_38491[(1)] = (14));

} else {
var statearr_36522_38492 = state_36509__$1;
(statearr_36522_38492[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (6))){
var state_36509__$1 = state_36509;
var statearr_36523_38493 = state_36509__$1;
(statearr_36523_38493[(2)] = null);

(statearr_36523_38493[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (17))){
var inst_36501 = (state_36509[(2)]);
var state_36509__$1 = (function (){var statearr_36536 = state_36509;
(statearr_36536[(10)] = inst_36501);

return statearr_36536;
})();
var statearr_36537_38494 = state_36509__$1;
(statearr_36537_38494[(2)] = null);

(statearr_36537_38494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (3))){
var inst_36507 = (state_36509[(2)]);
var state_36509__$1 = state_36509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36509__$1,inst_36507);
} else {
if((state_val_36511 === (12))){
var _ = (function (){var statearr_36538 = state_36509;
(statearr_36538[(4)] = cljs.core.rest((state_36509[(4)])));

return statearr_36538;
})();
var state_36509__$1 = state_36509;
var ex36533 = (state_36509__$1[(2)]);
var statearr_36540_38495 = state_36509__$1;
(statearr_36540_38495[(5)] = ex36533);


if((ex36533 instanceof Object)){
var statearr_36545_38496 = state_36509__$1;
(statearr_36545_38496[(1)] = (11));

(statearr_36545_38496[(5)] = null);

} else {
throw ex36533;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (2))){
var inst_36457 = cljs.core.reset_BANG_(dctr,cnt);
var inst_36458 = cnt;
var inst_36459 = (0);
var state_36509__$1 = (function (){var statearr_36554 = state_36509;
(statearr_36554[(7)] = inst_36459);

(statearr_36554[(8)] = inst_36458);

(statearr_36554[(11)] = inst_36457);

return statearr_36554;
})();
var statearr_36555_38498 = state_36509__$1;
(statearr_36555_38498[(2)] = null);

(statearr_36555_38498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (11))){
var inst_36473 = (state_36509[(2)]);
var inst_36474 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_36509__$1 = (function (){var statearr_36556 = state_36509;
(statearr_36556[(12)] = inst_36473);

return statearr_36556;
})();
var statearr_36557_38499 = state_36509__$1;
(statearr_36557_38499[(2)] = inst_36474);

(statearr_36557_38499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (9))){
var inst_36459 = (state_36509[(7)]);
var _ = (function (){var statearr_36558 = state_36509;
(statearr_36558[(4)] = cljs.core.cons((12),(state_36509[(4)])));

return statearr_36558;
})();
var inst_36480 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_36459) : chs__$1.call(null, inst_36459));
var inst_36481 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_36459) : done.call(null, inst_36459));
var inst_36482 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_36480,inst_36481);
var ___$1 = (function (){var statearr_36569 = state_36509;
(statearr_36569[(4)] = cljs.core.rest((state_36509[(4)])));

return statearr_36569;
})();
var state_36509__$1 = state_36509;
var statearr_36573_38502 = state_36509__$1;
(statearr_36573_38502[(2)] = inst_36482);

(statearr_36573_38502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (5))){
var inst_36492 = (state_36509[(2)]);
var state_36509__$1 = (function (){var statearr_36574 = state_36509;
(statearr_36574[(13)] = inst_36492);

return statearr_36574;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36509__$1,(13),dchan);
} else {
if((state_val_36511 === (14))){
var inst_36497 = cljs.core.async.close_BANG_(out);
var state_36509__$1 = state_36509;
var statearr_36578_38504 = state_36509__$1;
(statearr_36578_38504[(2)] = inst_36497);

(statearr_36578_38504[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (16))){
var inst_36505 = (state_36509[(2)]);
var state_36509__$1 = state_36509;
var statearr_36579_38506 = state_36509__$1;
(statearr_36579_38506[(2)] = inst_36505);

(statearr_36579_38506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (10))){
var inst_36459 = (state_36509[(7)]);
var inst_36485 = (state_36509[(2)]);
var inst_36486 = (inst_36459 + (1));
var inst_36459__$1 = inst_36486;
var state_36509__$1 = (function (){var statearr_36581 = state_36509;
(statearr_36581[(14)] = inst_36485);

(statearr_36581[(7)] = inst_36459__$1);

return statearr_36581;
})();
var statearr_36582_38518 = state_36509__$1;
(statearr_36582_38518[(2)] = null);

(statearr_36582_38518[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36511 === (8))){
var inst_36490 = (state_36509[(2)]);
var state_36509__$1 = state_36509;
var statearr_36584_38519 = state_36509__$1;
(statearr_36584_38519[(2)] = inst_36490);

(statearr_36584_38519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_36587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36587[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_36587[(1)] = (1));

return statearr_36587;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_36509){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_36509);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e36590){var ex__34289__auto__ = e36590;
var statearr_36591_38523 = state_36509;
(statearr_36591_38523[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_36509[(4)]))){
var statearr_36594_38538 = state_36509;
(statearr_36594_38538[(1)] = cljs.core.first((state_36509[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38540 = state_36509;
state_36509 = G__38540;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_36509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_36509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_36599 = f__34510__auto__();
(statearr_36599[(6)] = c__34509__auto___38479);

return statearr_36599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36605 = arguments.length;
switch (G__36605) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34509__auto___38542 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_36645){
var state_val_36646 = (state_36645[(1)]);
if((state_val_36646 === (7))){
var inst_36622 = (state_36645[(7)]);
var inst_36623 = (state_36645[(8)]);
var inst_36622__$1 = (state_36645[(2)]);
var inst_36623__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36622__$1,(0),null);
var inst_36625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_36622__$1,(1),null);
var inst_36626 = (inst_36623__$1 == null);
var state_36645__$1 = (function (){var statearr_36653 = state_36645;
(statearr_36653[(7)] = inst_36622__$1);

(statearr_36653[(9)] = inst_36625);

(statearr_36653[(8)] = inst_36623__$1);

return statearr_36653;
})();
if(cljs.core.truth_(inst_36626)){
var statearr_36659_38544 = state_36645__$1;
(statearr_36659_38544[(1)] = (8));

} else {
var statearr_36661_38546 = state_36645__$1;
(statearr_36661_38546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (1))){
var inst_36609 = cljs.core.vec(chs);
var inst_36610 = inst_36609;
var state_36645__$1 = (function (){var statearr_36665 = state_36645;
(statearr_36665[(10)] = inst_36610);

return statearr_36665;
})();
var statearr_36666_38549 = state_36645__$1;
(statearr_36666_38549[(2)] = null);

(statearr_36666_38549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (4))){
var inst_36610 = (state_36645[(10)]);
var state_36645__$1 = state_36645;
return cljs.core.async.ioc_alts_BANG_(state_36645__$1,(7),inst_36610);
} else {
if((state_val_36646 === (6))){
var inst_36641 = (state_36645[(2)]);
var state_36645__$1 = state_36645;
var statearr_36668_38551 = state_36645__$1;
(statearr_36668_38551[(2)] = inst_36641);

(statearr_36668_38551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (3))){
var inst_36643 = (state_36645[(2)]);
var state_36645__$1 = state_36645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36645__$1,inst_36643);
} else {
if((state_val_36646 === (2))){
var inst_36610 = (state_36645[(10)]);
var inst_36612 = cljs.core.count(inst_36610);
var inst_36613 = (inst_36612 > (0));
var state_36645__$1 = state_36645;
if(cljs.core.truth_(inst_36613)){
var statearr_36675_38553 = state_36645__$1;
(statearr_36675_38553[(1)] = (4));

} else {
var statearr_36676_38554 = state_36645__$1;
(statearr_36676_38554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (11))){
var inst_36610 = (state_36645[(10)]);
var inst_36633 = (state_36645[(2)]);
var tmp36669 = inst_36610;
var inst_36610__$1 = tmp36669;
var state_36645__$1 = (function (){var statearr_36680 = state_36645;
(statearr_36680[(10)] = inst_36610__$1);

(statearr_36680[(11)] = inst_36633);

return statearr_36680;
})();
var statearr_36684_38555 = state_36645__$1;
(statearr_36684_38555[(2)] = null);

(statearr_36684_38555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (9))){
var inst_36623 = (state_36645[(8)]);
var state_36645__$1 = state_36645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36645__$1,(11),out,inst_36623);
} else {
if((state_val_36646 === (5))){
var inst_36639 = cljs.core.async.close_BANG_(out);
var state_36645__$1 = state_36645;
var statearr_36691_38558 = state_36645__$1;
(statearr_36691_38558[(2)] = inst_36639);

(statearr_36691_38558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (10))){
var inst_36636 = (state_36645[(2)]);
var state_36645__$1 = state_36645;
var statearr_36692_38560 = state_36645__$1;
(statearr_36692_38560[(2)] = inst_36636);

(statearr_36692_38560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36646 === (8))){
var inst_36610 = (state_36645[(10)]);
var inst_36622 = (state_36645[(7)]);
var inst_36625 = (state_36645[(9)]);
var inst_36623 = (state_36645[(8)]);
var inst_36628 = (function (){var cs = inst_36610;
var vec__36618 = inst_36622;
var v = inst_36623;
var c = inst_36625;
return (function (p1__36601_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__36601_SHARP_);
});
})();
var inst_36629 = cljs.core.filterv(inst_36628,inst_36610);
var inst_36610__$1 = inst_36629;
var state_36645__$1 = (function (){var statearr_36696 = state_36645;
(statearr_36696[(10)] = inst_36610__$1);

return statearr_36696;
})();
var statearr_36698_38563 = state_36645__$1;
(statearr_36698_38563[(2)] = null);

(statearr_36698_38563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_36700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36700[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_36700[(1)] = (1));

return statearr_36700;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_36645){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_36645);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e36702){var ex__34289__auto__ = e36702;
var statearr_36703_38566 = state_36645;
(statearr_36703_38566[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_36645[(4)]))){
var statearr_36705_38567 = state_36645;
(statearr_36705_38567[(1)] = cljs.core.first((state_36645[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38571 = state_36645;
state_36645 = G__38571;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_36645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_36645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_36708 = f__34510__auto__();
(statearr_36708[(6)] = c__34509__auto___38542);

return statearr_36708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36716 = arguments.length;
switch (G__36716) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34509__auto___38576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_36778){
var state_val_36779 = (state_36778[(1)]);
if((state_val_36779 === (7))){
var inst_36748 = (state_36778[(7)]);
var inst_36748__$1 = (state_36778[(2)]);
var inst_36752 = (inst_36748__$1 == null);
var inst_36753 = cljs.core.not(inst_36752);
var state_36778__$1 = (function (){var statearr_36794 = state_36778;
(statearr_36794[(7)] = inst_36748__$1);

return statearr_36794;
})();
if(inst_36753){
var statearr_36795_38577 = state_36778__$1;
(statearr_36795_38577[(1)] = (8));

} else {
var statearr_36796_38578 = state_36778__$1;
(statearr_36796_38578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (1))){
var inst_36740 = (0);
var state_36778__$1 = (function (){var statearr_36797 = state_36778;
(statearr_36797[(8)] = inst_36740);

return statearr_36797;
})();
var statearr_36798_38579 = state_36778__$1;
(statearr_36798_38579[(2)] = null);

(statearr_36798_38579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (4))){
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36778__$1,(7),ch);
} else {
if((state_val_36779 === (6))){
var inst_36769 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36800_38581 = state_36778__$1;
(statearr_36800_38581[(2)] = inst_36769);

(statearr_36800_38581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (3))){
var inst_36771 = (state_36778[(2)]);
var inst_36776 = cljs.core.async.close_BANG_(out);
var state_36778__$1 = (function (){var statearr_36803 = state_36778;
(statearr_36803[(9)] = inst_36771);

return statearr_36803;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36778__$1,inst_36776);
} else {
if((state_val_36779 === (2))){
var inst_36740 = (state_36778[(8)]);
var inst_36743 = (inst_36740 < n);
var state_36778__$1 = state_36778;
if(cljs.core.truth_(inst_36743)){
var statearr_36809_38582 = state_36778__$1;
(statearr_36809_38582[(1)] = (4));

} else {
var statearr_36810_38583 = state_36778__$1;
(statearr_36810_38583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (11))){
var inst_36740 = (state_36778[(8)]);
var inst_36758 = (state_36778[(2)]);
var inst_36759 = (inst_36740 + (1));
var inst_36740__$1 = inst_36759;
var state_36778__$1 = (function (){var statearr_36812 = state_36778;
(statearr_36812[(10)] = inst_36758);

(statearr_36812[(8)] = inst_36740__$1);

return statearr_36812;
})();
var statearr_36814_38584 = state_36778__$1;
(statearr_36814_38584[(2)] = null);

(statearr_36814_38584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (9))){
var state_36778__$1 = state_36778;
var statearr_36818_38587 = state_36778__$1;
(statearr_36818_38587[(2)] = null);

(statearr_36818_38587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (5))){
var state_36778__$1 = state_36778;
var statearr_36819_38590 = state_36778__$1;
(statearr_36819_38590[(2)] = null);

(statearr_36819_38590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (10))){
var inst_36766 = (state_36778[(2)]);
var state_36778__$1 = state_36778;
var statearr_36822_38591 = state_36778__$1;
(statearr_36822_38591[(2)] = inst_36766);

(statearr_36822_38591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36779 === (8))){
var inst_36748 = (state_36778[(7)]);
var state_36778__$1 = state_36778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36778__$1,(11),out,inst_36748);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_36832 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36832[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_36832[(1)] = (1));

return statearr_36832;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_36778){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_36778);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e36838){var ex__34289__auto__ = e36838;
var statearr_36839_38609 = state_36778;
(statearr_36839_38609[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_36778[(4)]))){
var statearr_36841_38614 = state_36778;
(statearr_36841_38614[(1)] = cljs.core.first((state_36778[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38617 = state_36778;
state_36778 = G__38617;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_36778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_36778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_36843 = f__34510__auto__();
(statearr_36843[(6)] = c__34509__auto___38576);

return statearr_36843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36851 = (function (f,ch,meta36847,_,fn1,meta36852){
this.f = f;
this.ch = ch;
this.meta36847 = meta36847;
this._ = _;
this.fn1 = fn1;
this.meta36852 = meta36852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36853,meta36852__$1){
var self__ = this;
var _36853__$1 = this;
return (new cljs.core.async.t_cljs$core$async36851(self__.f,self__.ch,self__.meta36847,self__._,self__.fn1,meta36852__$1));
}));

(cljs.core.async.t_cljs$core$async36851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36853){
var self__ = this;
var _36853__$1 = this;
return self__.meta36852;
}));

(cljs.core.async.t_cljs$core$async36851.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async36851.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async36851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__36844_SHARP_){
var G__36855 = (((p1__36844_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__36844_SHARP_) : self__.f.call(null, p1__36844_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__36855) : f1.call(null, G__36855));
});
}));

(cljs.core.async.t_cljs$core$async36851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36847","meta36847",887055664,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36846","cljs.core.async/t_cljs$core$async36846",-16024493,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36852","meta36852",908249512,null)], null);
}));

(cljs.core.async.t_cljs$core$async36851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36851");

(cljs.core.async.t_cljs$core$async36851.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async36851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36851.
 */
cljs.core.async.__GT_t_cljs$core$async36851 = (function cljs$core$async$__GT_t_cljs$core$async36851(f,ch,meta36847,_,fn1,meta36852){
return (new cljs.core.async.t_cljs$core$async36851(f,ch,meta36847,_,fn1,meta36852));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36846 = (function (f,ch,meta36847){
this.f = f;
this.ch = ch;
this.meta36847 = meta36847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36848,meta36847__$1){
var self__ = this;
var _36848__$1 = this;
return (new cljs.core.async.t_cljs$core$async36846(self__.f,self__.ch,meta36847__$1));
}));

(cljs.core.async.t_cljs$core$async36846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36848){
var self__ = this;
var _36848__$1 = this;
return self__.meta36847;
}));

(cljs.core.async.t_cljs$core$async36846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36846.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async36851(self__.f,self__.ch,self__.meta36847,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__36862 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__36862) : self__.f.call(null, G__36862));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async36846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async36846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36847","meta36847",887055664,null)], null);
}));

(cljs.core.async.t_cljs$core$async36846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36846");

(cljs.core.async.t_cljs$core$async36846.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async36846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36846.
 */
cljs.core.async.__GT_t_cljs$core$async36846 = (function cljs$core$async$__GT_t_cljs$core$async36846(f,ch,meta36847){
return (new cljs.core.async.t_cljs$core$async36846(f,ch,meta36847));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36863 = (function (f,ch,meta36864){
this.f = f;
this.ch = ch;
this.meta36864 = meta36864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36865,meta36864__$1){
var self__ = this;
var _36865__$1 = this;
return (new cljs.core.async.t_cljs$core$async36863(self__.f,self__.ch,meta36864__$1));
}));

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36865){
var self__ = this;
var _36865__$1 = this;
return self__.meta36864;
}));

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36863.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null, val)),fn1);
}));

(cljs.core.async.t_cljs$core$async36863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36864","meta36864",-85802020,null)], null);
}));

(cljs.core.async.t_cljs$core$async36863.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36863");

(cljs.core.async.t_cljs$core$async36863.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async36863");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36863.
 */
cljs.core.async.__GT_t_cljs$core$async36863 = (function cljs$core$async$__GT_t_cljs$core$async36863(f,ch,meta36864){
return (new cljs.core.async.t_cljs$core$async36863(f,ch,meta36864));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async36863(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36872 = (function (p,ch,meta36873){
this.p = p;
this.ch = ch;
this.meta36873 = meta36873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async36872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36874,meta36873__$1){
var self__ = this;
var _36874__$1 = this;
return (new cljs.core.async.t_cljs$core$async36872(self__.p,self__.ch,meta36873__$1));
}));

(cljs.core.async.t_cljs$core$async36872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36874){
var self__ = this;
var _36874__$1 = this;
return self__.meta36873;
}));

(cljs.core.async.t_cljs$core$async36872.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36872.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36872.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async36872.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36872.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async36872.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async36872.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null, val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async36872.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36873","meta36873",-1291304945,null)], null);
}));

(cljs.core.async.t_cljs$core$async36872.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async36872.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36872");

(cljs.core.async.t_cljs$core$async36872.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async36872");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36872.
 */
cljs.core.async.__GT_t_cljs$core$async36872 = (function cljs$core$async$__GT_t_cljs$core$async36872(p,ch,meta36873){
return (new cljs.core.async.t_cljs$core$async36872(p,ch,meta36873));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async36872(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36876 = arguments.length;
switch (G__36876) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34509__auto___38673 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_36897){
var state_val_36898 = (state_36897[(1)]);
if((state_val_36898 === (7))){
var inst_36893 = (state_36897[(2)]);
var state_36897__$1 = state_36897;
var statearr_36899_38675 = state_36897__$1;
(statearr_36899_38675[(2)] = inst_36893);

(statearr_36899_38675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36898 === (1))){
var state_36897__$1 = state_36897;
var statearr_36900_38676 = state_36897__$1;
(statearr_36900_38676[(2)] = null);

(statearr_36900_38676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36898 === (4))){
var inst_36879 = (state_36897[(7)]);
var inst_36879__$1 = (state_36897[(2)]);
var inst_36880 = (inst_36879__$1 == null);
var state_36897__$1 = (function (){var statearr_36901 = state_36897;
(statearr_36901[(7)] = inst_36879__$1);

return statearr_36901;
})();
if(cljs.core.truth_(inst_36880)){
var statearr_36902_38677 = state_36897__$1;
(statearr_36902_38677[(1)] = (5));

} else {
var statearr_36903_38682 = state_36897__$1;
(statearr_36903_38682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36898 === (6))){
var inst_36879 = (state_36897[(7)]);
var inst_36884 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_36879) : p.call(null, inst_36879));
var state_36897__$1 = state_36897;
if(cljs.core.truth_(inst_36884)){
var statearr_36904_38687 = state_36897__$1;
(statearr_36904_38687[(1)] = (8));

} else {
var statearr_36905_38688 = state_36897__$1;
(statearr_36905_38688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36898 === (3))){
var inst_36895 = (state_36897[(2)]);
var state_36897__$1 = state_36897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36897__$1,inst_36895);
} else {
if((state_val_36898 === (2))){
var state_36897__$1 = state_36897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36897__$1,(4),ch);
} else {
if((state_val_36898 === (11))){
var inst_36887 = (state_36897[(2)]);
var state_36897__$1 = state_36897;
var statearr_36906_38693 = state_36897__$1;
(statearr_36906_38693[(2)] = inst_36887);

(statearr_36906_38693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36898 === (9))){
var state_36897__$1 = state_36897;
var statearr_36907_38694 = state_36897__$1;
(statearr_36907_38694[(2)] = null);

(statearr_36907_38694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36898 === (5))){
var inst_36882 = cljs.core.async.close_BANG_(out);
var state_36897__$1 = state_36897;
var statearr_36908_38695 = state_36897__$1;
(statearr_36908_38695[(2)] = inst_36882);

(statearr_36908_38695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36898 === (10))){
var inst_36890 = (state_36897[(2)]);
var state_36897__$1 = (function (){var statearr_36909 = state_36897;
(statearr_36909[(8)] = inst_36890);

return statearr_36909;
})();
var statearr_36910_38700 = state_36897__$1;
(statearr_36910_38700[(2)] = null);

(statearr_36910_38700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36898 === (8))){
var inst_36879 = (state_36897[(7)]);
var state_36897__$1 = state_36897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36897__$1,(11),out,inst_36879);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_36911 = [null,null,null,null,null,null,null,null,null];
(statearr_36911[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_36911[(1)] = (1));

return statearr_36911;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_36897){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_36897);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e36912){var ex__34289__auto__ = e36912;
var statearr_36913_38707 = state_36897;
(statearr_36913_38707[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_36897[(4)]))){
var statearr_36914_38708 = state_36897;
(statearr_36914_38708[(1)] = cljs.core.first((state_36897[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38709 = state_36897;
state_36897 = G__38709;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_36897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_36897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_36915 = f__34510__auto__();
(statearr_36915[(6)] = c__34509__auto___38673);

return statearr_36915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36917 = arguments.length;
switch (G__36917) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34509__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_36992){
var state_val_36993 = (state_36992[(1)]);
if((state_val_36993 === (7))){
var inst_36988 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37003_38716 = state_36992__$1;
(statearr_37003_38716[(2)] = inst_36988);

(statearr_37003_38716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (20))){
var inst_36953 = (state_36992[(7)]);
var inst_36969 = (state_36992[(2)]);
var inst_36970 = cljs.core.next(inst_36953);
var inst_36938 = inst_36970;
var inst_36939 = null;
var inst_36940 = (0);
var inst_36941 = (0);
var state_36992__$1 = (function (){var statearr_37004 = state_36992;
(statearr_37004[(8)] = inst_36969);

(statearr_37004[(9)] = inst_36940);

(statearr_37004[(10)] = inst_36938);

(statearr_37004[(11)] = inst_36941);

(statearr_37004[(12)] = inst_36939);

return statearr_37004;
})();
var statearr_37008_38720 = state_36992__$1;
(statearr_37008_38720[(2)] = null);

(statearr_37008_38720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (1))){
var state_36992__$1 = state_36992;
var statearr_37012_38721 = state_36992__$1;
(statearr_37012_38721[(2)] = null);

(statearr_37012_38721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (4))){
var inst_36920 = (state_36992[(13)]);
var inst_36920__$1 = (state_36992[(2)]);
var inst_36921 = (inst_36920__$1 == null);
var state_36992__$1 = (function (){var statearr_37014 = state_36992;
(statearr_37014[(13)] = inst_36920__$1);

return statearr_37014;
})();
if(cljs.core.truth_(inst_36921)){
var statearr_37015_38723 = state_36992__$1;
(statearr_37015_38723[(1)] = (5));

} else {
var statearr_37016_38724 = state_36992__$1;
(statearr_37016_38724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (15))){
var state_36992__$1 = state_36992;
var statearr_37024_38728 = state_36992__$1;
(statearr_37024_38728[(2)] = null);

(statearr_37024_38728[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (21))){
var state_36992__$1 = state_36992;
var statearr_37026_38729 = state_36992__$1;
(statearr_37026_38729[(2)] = null);

(statearr_37026_38729[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (13))){
var inst_36940 = (state_36992[(9)]);
var inst_36938 = (state_36992[(10)]);
var inst_36941 = (state_36992[(11)]);
var inst_36939 = (state_36992[(12)]);
var inst_36949 = (state_36992[(2)]);
var inst_36950 = (inst_36941 + (1));
var tmp37020 = inst_36940;
var tmp37021 = inst_36938;
var tmp37022 = inst_36939;
var inst_36938__$1 = tmp37021;
var inst_36939__$1 = tmp37022;
var inst_36940__$1 = tmp37020;
var inst_36941__$1 = inst_36950;
var state_36992__$1 = (function (){var statearr_37032 = state_36992;
(statearr_37032[(9)] = inst_36940__$1);

(statearr_37032[(10)] = inst_36938__$1);

(statearr_37032[(11)] = inst_36941__$1);

(statearr_37032[(12)] = inst_36939__$1);

(statearr_37032[(14)] = inst_36949);

return statearr_37032;
})();
var statearr_37034_38734 = state_36992__$1;
(statearr_37034_38734[(2)] = null);

(statearr_37034_38734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (22))){
var state_36992__$1 = state_36992;
var statearr_37035_38741 = state_36992__$1;
(statearr_37035_38741[(2)] = null);

(statearr_37035_38741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (6))){
var inst_36920 = (state_36992[(13)]);
var inst_36936 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36920) : f.call(null, inst_36920));
var inst_36937 = cljs.core.seq(inst_36936);
var inst_36938 = inst_36937;
var inst_36939 = null;
var inst_36940 = (0);
var inst_36941 = (0);
var state_36992__$1 = (function (){var statearr_37037 = state_36992;
(statearr_37037[(9)] = inst_36940);

(statearr_37037[(10)] = inst_36938);

(statearr_37037[(11)] = inst_36941);

(statearr_37037[(12)] = inst_36939);

return statearr_37037;
})();
var statearr_37039_38745 = state_36992__$1;
(statearr_37039_38745[(2)] = null);

(statearr_37039_38745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (17))){
var inst_36953 = (state_36992[(7)]);
var inst_36957 = cljs.core.chunk_first(inst_36953);
var inst_36958 = cljs.core.chunk_rest(inst_36953);
var inst_36959 = cljs.core.count(inst_36957);
var inst_36938 = inst_36958;
var inst_36939 = inst_36957;
var inst_36940 = inst_36959;
var inst_36941 = (0);
var state_36992__$1 = (function (){var statearr_37040 = state_36992;
(statearr_37040[(9)] = inst_36940);

(statearr_37040[(10)] = inst_36938);

(statearr_37040[(11)] = inst_36941);

(statearr_37040[(12)] = inst_36939);

return statearr_37040;
})();
var statearr_37041_38746 = state_36992__$1;
(statearr_37041_38746[(2)] = null);

(statearr_37041_38746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (3))){
var inst_36990 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36992__$1,inst_36990);
} else {
if((state_val_36993 === (12))){
var inst_36978 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37043_38748 = state_36992__$1;
(statearr_37043_38748[(2)] = inst_36978);

(statearr_37043_38748[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (2))){
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36992__$1,(4),in$);
} else {
if((state_val_36993 === (23))){
var inst_36986 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37051_38749 = state_36992__$1;
(statearr_37051_38749[(2)] = inst_36986);

(statearr_37051_38749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (19))){
var inst_36973 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37055_38750 = state_36992__$1;
(statearr_37055_38750[(2)] = inst_36973);

(statearr_37055_38750[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (11))){
var inst_36953 = (state_36992[(7)]);
var inst_36938 = (state_36992[(10)]);
var inst_36953__$1 = cljs.core.seq(inst_36938);
var state_36992__$1 = (function (){var statearr_37058 = state_36992;
(statearr_37058[(7)] = inst_36953__$1);

return statearr_37058;
})();
if(inst_36953__$1){
var statearr_37059_38752 = state_36992__$1;
(statearr_37059_38752[(1)] = (14));

} else {
var statearr_37060_38753 = state_36992__$1;
(statearr_37060_38753[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (9))){
var inst_36980 = (state_36992[(2)]);
var inst_36981 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36992__$1 = (function (){var statearr_37062 = state_36992;
(statearr_37062[(15)] = inst_36980);

return statearr_37062;
})();
if(cljs.core.truth_(inst_36981)){
var statearr_37068_38755 = state_36992__$1;
(statearr_37068_38755[(1)] = (21));

} else {
var statearr_37070_38756 = state_36992__$1;
(statearr_37070_38756[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (5))){
var inst_36923 = cljs.core.async.close_BANG_(out);
var state_36992__$1 = state_36992;
var statearr_37072_38757 = state_36992__$1;
(statearr_37072_38757[(2)] = inst_36923);

(statearr_37072_38757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (14))){
var inst_36953 = (state_36992[(7)]);
var inst_36955 = cljs.core.chunked_seq_QMARK_(inst_36953);
var state_36992__$1 = state_36992;
if(inst_36955){
var statearr_37074_38760 = state_36992__$1;
(statearr_37074_38760[(1)] = (17));

} else {
var statearr_37075_38761 = state_36992__$1;
(statearr_37075_38761[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (16))){
var inst_36976 = (state_36992[(2)]);
var state_36992__$1 = state_36992;
var statearr_37080_38762 = state_36992__$1;
(statearr_37080_38762[(2)] = inst_36976);

(statearr_37080_38762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36993 === (10))){
var inst_36941 = (state_36992[(11)]);
var inst_36939 = (state_36992[(12)]);
var inst_36947 = cljs.core._nth(inst_36939,inst_36941);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36992__$1,(13),out,inst_36947);
} else {
if((state_val_36993 === (18))){
var inst_36953 = (state_36992[(7)]);
var inst_36966 = cljs.core.first(inst_36953);
var state_36992__$1 = state_36992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36992__$1,(20),out,inst_36966);
} else {
if((state_val_36993 === (8))){
var inst_36940 = (state_36992[(9)]);
var inst_36941 = (state_36992[(11)]);
var inst_36944 = (inst_36941 < inst_36940);
var inst_36945 = inst_36944;
var state_36992__$1 = state_36992;
if(cljs.core.truth_(inst_36945)){
var statearr_37088_38767 = state_36992__$1;
(statearr_37088_38767[(1)] = (10));

} else {
var statearr_37089_38768 = state_36992__$1;
(statearr_37089_38768[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34286__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34286__auto____0 = (function (){
var statearr_37093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37093[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34286__auto__);

(statearr_37093[(1)] = (1));

return statearr_37093;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34286__auto____1 = (function (state_36992){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_36992);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e37098){var ex__34289__auto__ = e37098;
var statearr_37099_38770 = state_36992;
(statearr_37099_38770[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_36992[(4)]))){
var statearr_37100_38771 = state_36992;
(statearr_37100_38771[(1)] = cljs.core.first((state_36992[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38772 = state_36992;
state_36992 = G__38772;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34286__auto__ = function(state_36992){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34286__auto____1.call(this,state_36992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34286__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34286__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_37105 = f__34510__auto__();
(statearr_37105[(6)] = c__34509__auto__);

return statearr_37105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));

return c__34509__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__37114 = arguments.length;
switch (G__37114) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__37121 = arguments.length;
switch (G__37121) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__37132 = arguments.length;
switch (G__37132) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34509__auto___38854 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_37157){
var state_val_37158 = (state_37157[(1)]);
if((state_val_37158 === (7))){
var inst_37152 = (state_37157[(2)]);
var state_37157__$1 = state_37157;
var statearr_37169_38855 = state_37157__$1;
(statearr_37169_38855[(2)] = inst_37152);

(statearr_37169_38855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (1))){
var inst_37134 = null;
var state_37157__$1 = (function (){var statearr_37172 = state_37157;
(statearr_37172[(7)] = inst_37134);

return statearr_37172;
})();
var statearr_37175_38867 = state_37157__$1;
(statearr_37175_38867[(2)] = null);

(statearr_37175_38867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (4))){
var inst_37137 = (state_37157[(8)]);
var inst_37137__$1 = (state_37157[(2)]);
var inst_37138 = (inst_37137__$1 == null);
var inst_37139 = cljs.core.not(inst_37138);
var state_37157__$1 = (function (){var statearr_37180 = state_37157;
(statearr_37180[(8)] = inst_37137__$1);

return statearr_37180;
})();
if(inst_37139){
var statearr_37181_38878 = state_37157__$1;
(statearr_37181_38878[(1)] = (5));

} else {
var statearr_37183_38879 = state_37157__$1;
(statearr_37183_38879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (6))){
var state_37157__$1 = state_37157;
var statearr_37184_38880 = state_37157__$1;
(statearr_37184_38880[(2)] = null);

(statearr_37184_38880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (3))){
var inst_37154 = (state_37157[(2)]);
var inst_37155 = cljs.core.async.close_BANG_(out);
var state_37157__$1 = (function (){var statearr_37188 = state_37157;
(statearr_37188[(9)] = inst_37154);

return statearr_37188;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37157__$1,inst_37155);
} else {
if((state_val_37158 === (2))){
var state_37157__$1 = state_37157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37157__$1,(4),ch);
} else {
if((state_val_37158 === (11))){
var inst_37137 = (state_37157[(8)]);
var inst_37146 = (state_37157[(2)]);
var inst_37134 = inst_37137;
var state_37157__$1 = (function (){var statearr_37190 = state_37157;
(statearr_37190[(7)] = inst_37134);

(statearr_37190[(10)] = inst_37146);

return statearr_37190;
})();
var statearr_37191_38897 = state_37157__$1;
(statearr_37191_38897[(2)] = null);

(statearr_37191_38897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (9))){
var inst_37137 = (state_37157[(8)]);
var state_37157__$1 = state_37157;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37157__$1,(11),out,inst_37137);
} else {
if((state_val_37158 === (5))){
var inst_37134 = (state_37157[(7)]);
var inst_37137 = (state_37157[(8)]);
var inst_37141 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37137,inst_37134);
var state_37157__$1 = state_37157;
if(inst_37141){
var statearr_37200_38901 = state_37157__$1;
(statearr_37200_38901[(1)] = (8));

} else {
var statearr_37201_38902 = state_37157__$1;
(statearr_37201_38902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (10))){
var inst_37149 = (state_37157[(2)]);
var state_37157__$1 = state_37157;
var statearr_37202_38903 = state_37157__$1;
(statearr_37202_38903[(2)] = inst_37149);

(statearr_37202_38903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37158 === (8))){
var inst_37134 = (state_37157[(7)]);
var tmp37197 = inst_37134;
var inst_37134__$1 = tmp37197;
var state_37157__$1 = (function (){var statearr_37206 = state_37157;
(statearr_37206[(7)] = inst_37134__$1);

return statearr_37206;
})();
var statearr_37207_38904 = state_37157__$1;
(statearr_37207_38904[(2)] = null);

(statearr_37207_38904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_37210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37210[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_37210[(1)] = (1));

return statearr_37210;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_37157){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_37157);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e37211){var ex__34289__auto__ = e37211;
var statearr_37212_38905 = state_37157;
(statearr_37212_38905[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_37157[(4)]))){
var statearr_37213_38906 = state_37157;
(statearr_37213_38906[(1)] = cljs.core.first((state_37157[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38908 = state_37157;
state_37157 = G__38908;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_37157){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_37157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_37218 = f__34510__auto__();
(statearr_37218[(6)] = c__34509__auto___38854);

return statearr_37218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37221 = arguments.length;
switch (G__37221) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34509__auto___38918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_37268){
var state_val_37269 = (state_37268[(1)]);
if((state_val_37269 === (7))){
var inst_37264 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37271_38935 = state_37268__$1;
(statearr_37271_38935[(2)] = inst_37264);

(statearr_37271_38935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (1))){
var inst_37225 = (new Array(n));
var inst_37226 = inst_37225;
var inst_37227 = (0);
var state_37268__$1 = (function (){var statearr_37274 = state_37268;
(statearr_37274[(7)] = inst_37226);

(statearr_37274[(8)] = inst_37227);

return statearr_37274;
})();
var statearr_37276_38944 = state_37268__$1;
(statearr_37276_38944[(2)] = null);

(statearr_37276_38944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (4))){
var inst_37232 = (state_37268[(9)]);
var inst_37232__$1 = (state_37268[(2)]);
var inst_37233 = (inst_37232__$1 == null);
var inst_37234 = cljs.core.not(inst_37233);
var state_37268__$1 = (function (){var statearr_37277 = state_37268;
(statearr_37277[(9)] = inst_37232__$1);

return statearr_37277;
})();
if(inst_37234){
var statearr_37279_38949 = state_37268__$1;
(statearr_37279_38949[(1)] = (5));

} else {
var statearr_37280_38950 = state_37268__$1;
(statearr_37280_38950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (15))){
var inst_37258 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37281_38951 = state_37268__$1;
(statearr_37281_38951[(2)] = inst_37258);

(statearr_37281_38951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (13))){
var state_37268__$1 = state_37268;
var statearr_37284_38952 = state_37268__$1;
(statearr_37284_38952[(2)] = null);

(statearr_37284_38952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (6))){
var inst_37227 = (state_37268[(8)]);
var inst_37254 = (inst_37227 > (0));
var state_37268__$1 = state_37268;
if(cljs.core.truth_(inst_37254)){
var statearr_37286_38953 = state_37268__$1;
(statearr_37286_38953[(1)] = (12));

} else {
var statearr_37287_38954 = state_37268__$1;
(statearr_37287_38954[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (3))){
var inst_37266 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37268__$1,inst_37266);
} else {
if((state_val_37269 === (12))){
var inst_37226 = (state_37268[(7)]);
var inst_37256 = cljs.core.vec(inst_37226);
var state_37268__$1 = state_37268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37268__$1,(15),out,inst_37256);
} else {
if((state_val_37269 === (2))){
var state_37268__$1 = state_37268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37268__$1,(4),ch);
} else {
if((state_val_37269 === (11))){
var inst_37247 = (state_37268[(2)]);
var inst_37248 = (new Array(n));
var inst_37226 = inst_37248;
var inst_37227 = (0);
var state_37268__$1 = (function (){var statearr_37295 = state_37268;
(statearr_37295[(7)] = inst_37226);

(statearr_37295[(10)] = inst_37247);

(statearr_37295[(8)] = inst_37227);

return statearr_37295;
})();
var statearr_37297_38959 = state_37268__$1;
(statearr_37297_38959[(2)] = null);

(statearr_37297_38959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (9))){
var inst_37226 = (state_37268[(7)]);
var inst_37245 = cljs.core.vec(inst_37226);
var state_37268__$1 = state_37268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37268__$1,(11),out,inst_37245);
} else {
if((state_val_37269 === (5))){
var inst_37232 = (state_37268[(9)]);
var inst_37226 = (state_37268[(7)]);
var inst_37237 = (state_37268[(11)]);
var inst_37227 = (state_37268[(8)]);
var inst_37236 = (inst_37226[inst_37227] = inst_37232);
var inst_37237__$1 = (inst_37227 + (1));
var inst_37239 = (inst_37237__$1 < n);
var state_37268__$1 = (function (){var statearr_37324 = state_37268;
(statearr_37324[(11)] = inst_37237__$1);

(statearr_37324[(12)] = inst_37236);

return statearr_37324;
})();
if(cljs.core.truth_(inst_37239)){
var statearr_37325_38966 = state_37268__$1;
(statearr_37325_38966[(1)] = (8));

} else {
var statearr_37326_38967 = state_37268__$1;
(statearr_37326_38967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (14))){
var inst_37261 = (state_37268[(2)]);
var inst_37262 = cljs.core.async.close_BANG_(out);
var state_37268__$1 = (function (){var statearr_37330 = state_37268;
(statearr_37330[(13)] = inst_37261);

return statearr_37330;
})();
var statearr_37332_38973 = state_37268__$1;
(statearr_37332_38973[(2)] = inst_37262);

(statearr_37332_38973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (10))){
var inst_37251 = (state_37268[(2)]);
var state_37268__$1 = state_37268;
var statearr_37333_38980 = state_37268__$1;
(statearr_37333_38980[(2)] = inst_37251);

(statearr_37333_38980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37269 === (8))){
var inst_37226 = (state_37268[(7)]);
var inst_37237 = (state_37268[(11)]);
var tmp37328 = inst_37226;
var inst_37226__$1 = tmp37328;
var inst_37227 = inst_37237;
var state_37268__$1 = (function (){var statearr_37335 = state_37268;
(statearr_37335[(7)] = inst_37226__$1);

(statearr_37335[(8)] = inst_37227);

return statearr_37335;
})();
var statearr_37336_38987 = state_37268__$1;
(statearr_37336_38987[(2)] = null);

(statearr_37336_38987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_37339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37339[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_37339[(1)] = (1));

return statearr_37339;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_37268){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_37268);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e37341){var ex__34289__auto__ = e37341;
var statearr_37344_39001 = state_37268;
(statearr_37344_39001[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_37268[(4)]))){
var statearr_37345_39003 = state_37268;
(statearr_37345_39003[(1)] = cljs.core.first((state_37268[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39006 = state_37268;
state_37268 = G__39006;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_37268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_37268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_37351 = f__34510__auto__();
(statearr_37351[(6)] = c__34509__auto___38918);

return statearr_37351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37357 = arguments.length;
switch (G__37357) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__34509__auto___39014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__34510__auto__ = (function (){var switch__34285__auto__ = (function (state_37426){
var state_val_37427 = (state_37426[(1)]);
if((state_val_37427 === (7))){
var inst_37421 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37431_39019 = state_37426__$1;
(statearr_37431_39019[(2)] = inst_37421);

(statearr_37431_39019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (1))){
var inst_37367 = [];
var inst_37368 = inst_37367;
var inst_37369 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37426__$1 = (function (){var statearr_37432 = state_37426;
(statearr_37432[(7)] = inst_37368);

(statearr_37432[(8)] = inst_37369);

return statearr_37432;
})();
var statearr_37435_39021 = state_37426__$1;
(statearr_37435_39021[(2)] = null);

(statearr_37435_39021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (4))){
var inst_37372 = (state_37426[(9)]);
var inst_37372__$1 = (state_37426[(2)]);
var inst_37373 = (inst_37372__$1 == null);
var inst_37374 = cljs.core.not(inst_37373);
var state_37426__$1 = (function (){var statearr_37437 = state_37426;
(statearr_37437[(9)] = inst_37372__$1);

return statearr_37437;
})();
if(inst_37374){
var statearr_37438_39022 = state_37426__$1;
(statearr_37438_39022[(1)] = (5));

} else {
var statearr_37439_39023 = state_37426__$1;
(statearr_37439_39023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (15))){
var inst_37368 = (state_37426[(7)]);
var inst_37412 = cljs.core.vec(inst_37368);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37426__$1,(18),out,inst_37412);
} else {
if((state_val_37427 === (13))){
var inst_37404 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37442_39024 = state_37426__$1;
(statearr_37442_39024[(2)] = inst_37404);

(statearr_37442_39024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (6))){
var inst_37368 = (state_37426[(7)]);
var inst_37407 = inst_37368.length;
var inst_37408 = (inst_37407 > (0));
var state_37426__$1 = state_37426;
if(cljs.core.truth_(inst_37408)){
var statearr_37443_39025 = state_37426__$1;
(statearr_37443_39025[(1)] = (15));

} else {
var statearr_37444_39027 = state_37426__$1;
(statearr_37444_39027[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (17))){
var inst_37418 = (state_37426[(2)]);
var inst_37419 = cljs.core.async.close_BANG_(out);
var state_37426__$1 = (function (){var statearr_37445 = state_37426;
(statearr_37445[(10)] = inst_37418);

return statearr_37445;
})();
var statearr_37446_39041 = state_37426__$1;
(statearr_37446_39041[(2)] = inst_37419);

(statearr_37446_39041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (3))){
var inst_37423 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37426__$1,inst_37423);
} else {
if((state_val_37427 === (12))){
var inst_37368 = (state_37426[(7)]);
var inst_37393 = cljs.core.vec(inst_37368);
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37426__$1,(14),out,inst_37393);
} else {
if((state_val_37427 === (2))){
var state_37426__$1 = state_37426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37426__$1,(4),ch);
} else {
if((state_val_37427 === (11))){
var inst_37368 = (state_37426[(7)]);
var inst_37379 = (state_37426[(11)]);
var inst_37372 = (state_37426[(9)]);
var inst_37390 = inst_37368.push(inst_37372);
var tmp37447 = inst_37368;
var inst_37368__$1 = tmp37447;
var inst_37369 = inst_37379;
var state_37426__$1 = (function (){var statearr_37448 = state_37426;
(statearr_37448[(12)] = inst_37390);

(statearr_37448[(7)] = inst_37368__$1);

(statearr_37448[(8)] = inst_37369);

return statearr_37448;
})();
var statearr_37450_39046 = state_37426__$1;
(statearr_37450_39046[(2)] = null);

(statearr_37450_39046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (9))){
var inst_37369 = (state_37426[(8)]);
var inst_37384 = cljs.core.keyword_identical_QMARK_(inst_37369,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_37426__$1 = state_37426;
var statearr_37451_39051 = state_37426__$1;
(statearr_37451_39051[(2)] = inst_37384);

(statearr_37451_39051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (5))){
var inst_37381 = (state_37426[(13)]);
var inst_37379 = (state_37426[(11)]);
var inst_37372 = (state_37426[(9)]);
var inst_37369 = (state_37426[(8)]);
var inst_37379__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_37372) : f.call(null, inst_37372));
var inst_37381__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_37379__$1,inst_37369);
var state_37426__$1 = (function (){var statearr_37452 = state_37426;
(statearr_37452[(13)] = inst_37381__$1);

(statearr_37452[(11)] = inst_37379__$1);

return statearr_37452;
})();
if(inst_37381__$1){
var statearr_37453_39055 = state_37426__$1;
(statearr_37453_39055[(1)] = (8));

} else {
var statearr_37454_39056 = state_37426__$1;
(statearr_37454_39056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (14))){
var inst_37379 = (state_37426[(11)]);
var inst_37372 = (state_37426[(9)]);
var inst_37395 = (state_37426[(2)]);
var inst_37400 = [];
var inst_37401 = inst_37400.push(inst_37372);
var inst_37368 = inst_37400;
var inst_37369 = inst_37379;
var state_37426__$1 = (function (){var statearr_37455 = state_37426;
(statearr_37455[(7)] = inst_37368);

(statearr_37455[(14)] = inst_37395);

(statearr_37455[(15)] = inst_37401);

(statearr_37455[(8)] = inst_37369);

return statearr_37455;
})();
var statearr_37456_39058 = state_37426__$1;
(statearr_37456_39058[(2)] = null);

(statearr_37456_39058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (16))){
var state_37426__$1 = state_37426;
var statearr_37462_39059 = state_37426__$1;
(statearr_37462_39059[(2)] = null);

(statearr_37462_39059[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (10))){
var inst_37386 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
if(cljs.core.truth_(inst_37386)){
var statearr_37464_39060 = state_37426__$1;
(statearr_37464_39060[(1)] = (11));

} else {
var statearr_37466_39061 = state_37426__$1;
(statearr_37466_39061[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (18))){
var inst_37414 = (state_37426[(2)]);
var state_37426__$1 = state_37426;
var statearr_37467_39063 = state_37426__$1;
(statearr_37467_39063[(2)] = inst_37414);

(statearr_37467_39063[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37427 === (8))){
var inst_37381 = (state_37426[(13)]);
var state_37426__$1 = state_37426;
var statearr_37468_39064 = state_37426__$1;
(statearr_37468_39064[(2)] = inst_37381);

(statearr_37468_39064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__34286__auto__ = null;
var cljs$core$async$state_machine__34286__auto____0 = (function (){
var statearr_37473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37473[(0)] = cljs$core$async$state_machine__34286__auto__);

(statearr_37473[(1)] = (1));

return statearr_37473;
});
var cljs$core$async$state_machine__34286__auto____1 = (function (state_37426){
while(true){
var ret_value__34287__auto__ = (function (){try{while(true){
var result__34288__auto__ = switch__34285__auto__(state_37426);
if(cljs.core.keyword_identical_QMARK_(result__34288__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34288__auto__;
}
break;
}
}catch (e37477){var ex__34289__auto__ = e37477;
var statearr_37478_39068 = state_37426;
(statearr_37478_39068[(2)] = ex__34289__auto__);


if(cljs.core.seq((state_37426[(4)]))){
var statearr_37479_39069 = state_37426;
(statearr_37479_39069[(1)] = cljs.core.first((state_37426[(4)])));

} else {
throw ex__34289__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__34287__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39070 = state_37426;
state_37426 = G__39070;
continue;
} else {
return ret_value__34287__auto__;
}
break;
}
});
cljs$core$async$state_machine__34286__auto__ = function(state_37426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34286__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34286__auto____1.call(this,state_37426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34286__auto____0;
cljs$core$async$state_machine__34286__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34286__auto____1;
return cljs$core$async$state_machine__34286__auto__;
})()
})();
var state__34511__auto__ = (function (){var statearr_37481 = f__34510__auto__();
(statearr_37481[(6)] = c__34509__auto___39014);

return statearr_37481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__34511__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
