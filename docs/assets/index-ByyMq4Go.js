(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var th={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg;function Lx(){if(Dg)return Ao;Dg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var Ug;function Nx(){return Ug||(Ug=1,th.exports=Lx()),th.exports}var On=Nx(),eh={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lg;function Ox(){if(Lg)return ce;Lg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function M(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function _(z,nt,gt){this.props=z,this.context=nt,this.refs=y,this.updater=gt||b}_.prototype.isReactComponent={},_.prototype.setState=function(z,nt){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,nt,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function L(){}L.prototype=_.prototype;function U(z,nt,gt){this.props=z,this.context=nt,this.refs=y,this.updater=gt||b}var w=U.prototype=new L;w.constructor=U,R(w,_.prototype),w.isPureReactComponent=!0;var H=Array.isArray;function I(){}var B={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function D(z,nt,gt){var At=gt.ref;return{$$typeof:o,type:z,key:nt,ref:At!==void 0?At:null,props:gt}}function C(z,nt){return D(z.type,nt,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function $(z){var nt={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(gt){return nt[gt]})}var ot=/\/+/g;function pt(z,nt){return typeof z=="object"&&z!==null&&z.key!=null?$(""+z.key):nt.toString(36)}function ft(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(I,I):(z.status="pending",z.then(function(nt){z.status==="pending"&&(z.status="fulfilled",z.value=nt)},function(nt){z.status==="pending"&&(z.status="rejected",z.reason=nt)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function P(z,nt,gt,At,Lt){var it=typeof z;(it==="undefined"||it==="boolean")&&(z=null);var lt=!1;if(z===null)lt=!0;else switch(it){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(z.$$typeof){case o:case t:lt=!0;break;case S:return lt=z._init,P(lt(z._payload),nt,gt,At,Lt)}}if(lt)return Lt=Lt(z),lt=At===""?"."+pt(z,0):At,H(Lt)?(gt="",lt!=null&&(gt=lt.replace(ot,"$&/")+"/"),P(Lt,nt,gt,"",function(Rt){return Rt})):Lt!=null&&(G(Lt)&&(Lt=C(Lt,gt+(Lt.key==null||z&&z.key===Lt.key?"":(""+Lt.key).replace(ot,"$&/")+"/")+lt)),nt.push(Lt)),1;lt=0;var Ut=At===""?".":At+":";if(H(z))for(var Et=0;Et<z.length;Et++)At=z[Et],it=Ut+pt(At,Et),lt+=P(At,nt,gt,it,Lt);else if(Et=M(z),typeof Et=="function")for(z=Et.call(z),Et=0;!(At=z.next()).done;)At=At.value,it=Ut+pt(At,Et++),lt+=P(At,nt,gt,it,Lt);else if(it==="object"){if(typeof z.then=="function")return P(ft(z),nt,gt,At,Lt);throw nt=String(z),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return lt}function Z(z,nt,gt){if(z==null)return z;var At=[],Lt=0;return P(z,At,"","",function(it){return nt.call(gt,it,Lt++)}),At}function W(z){if(z._status===-1){var nt=z._result;nt=nt(),nt.then(function(gt){(z._status===0||z._status===-1)&&(z._status=1,z._result=gt)},function(gt){(z._status===0||z._status===-1)&&(z._status=2,z._result=gt)}),z._status===-1&&(z._status=0,z._result=nt)}if(z._status===1)return z._result.default;throw z._result}var St=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Mt={map:Z,forEach:function(z,nt,gt){Z(z,function(){nt.apply(this,arguments)},gt)},count:function(z){var nt=0;return Z(z,function(){nt++}),nt},toArray:function(z){return Z(z,function(nt){return nt})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ce.Activity=g,ce.Children=Mt,ce.Component=_,ce.Fragment=i,ce.Profiler=l,ce.PureComponent=U,ce.StrictMode=s,ce.Suspense=m,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,ce.__COMPILER_RUNTIME={__proto__:null,c:function(z){return B.H.useMemoCache(z)}},ce.cache=function(z){return function(){return z.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(z,nt,gt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var At=R({},z.props),Lt=z.key;if(nt!=null)for(it in nt.key!==void 0&&(Lt=""+nt.key),nt)!k.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(At[it]=nt[it]);var it=arguments.length-2;if(it===1)At.children=gt;else if(1<it){for(var lt=Array(it),Ut=0;Ut<it;Ut++)lt[Ut]=arguments[Ut+2];At.children=lt}return D(z.type,Lt,At)},ce.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},ce.createElement=function(z,nt,gt){var At,Lt={},it=null;if(nt!=null)for(At in nt.key!==void 0&&(it=""+nt.key),nt)k.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Lt[At]=nt[At]);var lt=arguments.length-2;if(lt===1)Lt.children=gt;else if(1<lt){for(var Ut=Array(lt),Et=0;Et<lt;Et++)Ut[Et]=arguments[Et+2];Lt.children=Ut}if(z&&z.defaultProps)for(At in lt=z.defaultProps,lt)Lt[At]===void 0&&(Lt[At]=lt[At]);return D(z,it,Lt)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(z){return{$$typeof:d,render:z}},ce.isValidElement=G,ce.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:W}},ce.memo=function(z,nt){return{$$typeof:p,type:z,compare:nt===void 0?null:nt}},ce.startTransition=function(z){var nt=B.T,gt={};B.T=gt;try{var At=z(),Lt=B.S;Lt!==null&&Lt(gt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(I,St)}catch(it){St(it)}finally{nt!==null&&gt.types!==null&&(nt.types=gt.types),B.T=nt}},ce.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},ce.use=function(z){return B.H.use(z)},ce.useActionState=function(z,nt,gt){return B.H.useActionState(z,nt,gt)},ce.useCallback=function(z,nt){return B.H.useCallback(z,nt)},ce.useContext=function(z){return B.H.useContext(z)},ce.useDebugValue=function(){},ce.useDeferredValue=function(z,nt){return B.H.useDeferredValue(z,nt)},ce.useEffect=function(z,nt){return B.H.useEffect(z,nt)},ce.useEffectEvent=function(z){return B.H.useEffectEvent(z)},ce.useId=function(){return B.H.useId()},ce.useImperativeHandle=function(z,nt,gt){return B.H.useImperativeHandle(z,nt,gt)},ce.useInsertionEffect=function(z,nt){return B.H.useInsertionEffect(z,nt)},ce.useLayoutEffect=function(z,nt){return B.H.useLayoutEffect(z,nt)},ce.useMemo=function(z,nt){return B.H.useMemo(z,nt)},ce.useOptimistic=function(z,nt){return B.H.useOptimistic(z,nt)},ce.useReducer=function(z,nt,gt){return B.H.useReducer(z,nt,gt)},ce.useRef=function(z){return B.H.useRef(z)},ce.useState=function(z){return B.H.useState(z)},ce.useSyncExternalStore=function(z,nt,gt){return B.H.useSyncExternalStore(z,nt,gt)},ce.useTransition=function(){return B.H.useTransition()},ce.version="19.2.0",ce}var Ng;function Dd(){return Ng||(Ng=1,eh.exports=Ox()),eh.exports}var Er=Dd(),nh={exports:{}},Ro={},ih={exports:{}},ah={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function Px(){return Og||(Og=1,(function(o){function t(P,Z){var W=P.length;P.push(Z);t:for(;0<W;){var St=W-1>>>1,Mt=P[St];if(0<l(Mt,Z))P[St]=Z,P[W]=Mt,W=St;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var Z=P[0],W=P.pop();if(W!==Z){P[0]=W;t:for(var St=0,Mt=P.length,z=Mt>>>1;St<z;){var nt=2*(St+1)-1,gt=P[nt],At=nt+1,Lt=P[At];if(0>l(gt,W))At<Mt&&0>l(Lt,gt)?(P[St]=Lt,P[At]=W,St=At):(P[St]=gt,P[nt]=W,St=nt);else if(At<Mt&&0>l(Lt,W))P[St]=Lt,P[At]=W,St=At;else break t}}return Z}function l(P,Z){var W=P.sortIndex-Z.sortIndex;return W!==0?W:P.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,g=null,x=3,M=!1,b=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(P){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=P)s(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function H(P){if(R=!1,w(P),!b)if(i(m)!==null)b=!0,I||(I=!0,$());else{var Z=i(p);Z!==null&&ft(H,Z.startTime-P)}}var I=!1,B=-1,k=5,D=-1;function C(){return y?!0:!(o.unstable_now()-D<k)}function G(){if(y=!1,I){var P=o.unstable_now();D=P;var Z=!0;try{t:{b=!1,R&&(R=!1,L(B),B=-1),M=!0;var W=x;try{e:{for(w(P),g=i(m);g!==null&&!(g.expirationTime>P&&C());){var St=g.callback;if(typeof St=="function"){g.callback=null,x=g.priorityLevel;var Mt=St(g.expirationTime<=P);if(P=o.unstable_now(),typeof Mt=="function"){g.callback=Mt,w(P),Z=!0;break e}g===i(m)&&s(m),w(P)}else s(m);g=i(m)}if(g!==null)Z=!0;else{var z=i(p);z!==null&&ft(H,z.startTime-P),Z=!1}}break t}finally{g=null,x=W,M=!1}Z=void 0}}finally{Z?$():I=!1}}}var $;if(typeof U=="function")$=function(){U(G)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,pt=ot.port2;ot.port1.onmessage=G,$=function(){pt.postMessage(null)}}else $=function(){_(G,0)};function ft(P,Z){B=_(function(){P(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var W=x;x=Z;try{return P()}finally{x=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,Z){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=x;x=P;try{return Z()}finally{x=W}},o.unstable_scheduleCallback=function(P,Z,W){var St=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?St+W:St):W=St,P){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=W+Mt,P={id:S++,callback:Z,priorityLevel:P,startTime:W,expirationTime:Mt,sortIndex:-1},W>St?(P.sortIndex=W,t(p,P),i(m)===null&&P===i(p)&&(R?(L(B),B=-1):R=!0,ft(H,W-St))):(P.sortIndex=Mt,t(m,P),b||M||(b=!0,I||(I=!0,$()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var Z=x;return function(){var W=x;x=Z;try{return P.apply(this,arguments)}finally{x=W}}}})(ah)),ah}var Pg;function zx(){return Pg||(Pg=1,ih.exports=Px()),ih.exports}var sh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zg;function Bx(){if(zg)return Rn;zg=1;var o=Dd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,S)},Rn.flushSync=function(m){var p=h.T,S=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=S,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,g=d(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):S==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,g=d(S,p.crossOrigin);s.d.L(m,S,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.0",Rn}var Bg;function Ix(){if(Bg)return sh.exports;Bg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),sh.exports=Bx(),sh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function Fx(){if(Ig)return Ro;Ig=1;var o=zx(),t=Dd(),i=Ix();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,r=f;break}if(T===r){v=!0,r=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,r=u;break}if(T===r){v=!0,r=f,a=u;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function pt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case I:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:pt(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return pt(e(n))}catch{}}return null}var ft=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},St=[],Mt=-1;function z(e){return{current:e}}function nt(e){0>Mt||(e.current=St[Mt],St[Mt]=null,Mt--)}function gt(e,n){Mt++,St[Mt]=e.current,e.current=n}var At=z(null),Lt=z(null),it=z(null),lt=z(null);function Ut(e,n){switch(gt(it,n),gt(Lt,e),gt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?$_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=$_(n),e=tg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(At),gt(At,e)}function Et(){nt(At),nt(Lt),nt(it)}function Rt(e){e.memoizedState!==null&&gt(lt,e);var n=At.current,a=tg(n,e.type);n!==a&&(gt(Lt,e),gt(At,a))}function Wt(e){Lt.current===e&&(nt(At),nt(Lt)),lt.current===e&&(nt(lt),Mo._currentValue=W)}var Jt,N;function oe(e){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",N=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+e+N}var Kt=!1;function jt(e,n){if(!e||Kt)return"";Kt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(rt){var et=rt}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(rt){et=rt}e.call(mt.prototype)}}else{try{throw Error()}catch(rt){et=rt}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(rt){if(rt&&et&&typeof rt.stack=="string")return[rt.stack,et.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var F=v.split(`
`),J=T.split(`
`);for(u=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(r===F.length||u===J.length)for(r=F.length-1,u=J.length-1;1<=r&&0<=u&&F[r]!==J[u];)u--;for(;1<=r&&0<=u;r--,u--)if(F[r]!==J[u]){if(r!==1||u!==1)do if(r--,u--,0>u||F[r]!==J[u]){var ut=`
`+F[r].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=r&&0<=u);break}}}finally{Kt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oe(a):""}function It(e,n){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==n&&n!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return jt(e.type,!1);case 11:return jt(e.type.render,!1);case 1:return jt(e.type,!0);case 31:return oe("Activity");default:return""}}function Te(e){try{var n="",a=null;do n+=It(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Bt=Object.prototype.hasOwnProperty,ae=o.unstable_scheduleCallback,Ie=o.unstable_cancelCallback,Ze=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,tt=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,xt=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,Qt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,Yt=o.log,Zt=o.unstable_setDisableYieldValue,Tt=null,wt=null;function $t(e){if(typeof Yt=="function"&&Zt(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Tt,e)}catch{}}var Ft=Math.clz32?Math.clz32:X,Nt=Math.log,ue=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Nt(e)/ue|0)|0}var bt=256,Dt=262144,Ht=4194304;function yt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?u=yt(r):(v&=T,v!==0?u=yt(v):a||(a=T&~e,a!==0&&(u=yt(a))))):(T=r&~f,T!==0?u=yt(T):v!==0?u=yt(v):a||(a=r&~e,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Gt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function le(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function be(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Un(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ii(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,F=e.expirationTimes,J=e.hiddenUpdates;for(a=v&~a;0<a;){var ut=31-Ft(a),mt=1<<ut;T[ut]=0,F[ut]=-1;var et=J[ut];if(et!==null)for(J[ut]=null,ut=0;ut<et.length;ut++){var rt=et[ut];rt!==null&&(rt.lane&=-536870913)}a&=~mt}r!==0&&Pr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Pr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ft(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function bi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ft(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Rs(e,n){var a=n&-n;return a=(a&42)!==0?1:Cs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ya(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Eg(e.type))}function zr(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var Yn=Math.random().toString(36).slice(2),an="__reactFiber$"+Yn,Sn="__reactProps$"+Yn,ha="__reactContainer$"+Yn,Br="__reactEvents$"+Yn,Yc="__reactListeners$"+Yn,jc="__reactHandles$"+Yn,jo="__reactResources$"+Yn,ja="__reactMarker$"+Yn;function A(e){delete e[an],delete e[Sn],delete e[Br],delete e[Yc],delete e[jc]}function q(e){var n=e[an];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ha]||a[an]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=og(e);e!==null;){if(a=e[an])return a;e=og(e)}return n}e=a,a=e.parentNode}return null}function at(e){if(e=e[an]||e[ha]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function K(e){var n=e[jo];return n||(n=e[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(e){e[ja]=!0}var Ot=new Set,kt={};function zt(e,n){te(e,n),te(e+"Capture",n)}function te(e,n){for(kt[e]=n,e=0;e<n.length;e++)Ot.add(n[e])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},me={};function Le(e){return Bt.call(me,e)?!0:Bt.call(ee,e)?!1:re.test(e)?me[e]=!0:(ee[e]=!0,!1)}function ke(e,n,a){if(Le(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function _e(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function We(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ae(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xn(e){if(!e._valueTracker){var n=We(e)?"checked":"value";e._valueTracker=Ae(e,n,""+e[n])}}function Ii(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=We(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function mn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Za=/[\n"\\]/g;function xe(e){return e.replace(Za,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(e,n,a,r,u,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Xt(n)):e.value!==""+Xt(n)&&(e.value=""+Xt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?un(e,v,Xt(n)):a!=null?un(e,v,Xt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Xt(T):e.removeAttribute("name")}function Ln(e,n,a,r,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){xn(e);return}a=a!=null?""+Xt(a):"",n=n!=null?""+Xt(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),xn(e)}function un(e,n,a){n==="number"&&mn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Xt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ds(e,n,a){if(n!=null&&(n=""+Xt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Xt(a):""}function Ai(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ft(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Xt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),xn(e)}function Us(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Rv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Rv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Qd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Kd(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Kd(e,f,n[f])}function Zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return wv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fi(){}var Kc=null;function Qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,Ns=null;function Jd(e){var n=at(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(An(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Sn]||null;if(!u)throw Error(s(90));An(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ii(r)}break t;case"textarea":Ds(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var Jc=!1;function $d(e,n,a){if(Jc)return e(n,a);Jc=!0;try{var r=e(n);return r}finally{if(Jc=!1,(Ls!==null||Ns!==null)&&(zl(),Ls&&(n=Ls,e=Ns,Ns=Ls=null,Jd(n),e)))for(n=0;n<e.length;n++)Jd(e[n])}}function Ir(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Sn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$c=!1;if(Hi)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){$c=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{$c=!1}var da=null,tu=null,Ko=null;function tp(){if(Ko)return Ko;var e,n=tu,a=n.length,r,u="value"in da?da.value:da.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return Ko=u.slice(e,1<r?1-r:void 0)}function Qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function ep(){return!1}function Bn(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jo:ep,this.isPropagationStopped=ep,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var Ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Bn(Ka),Hr=g({},Ka,{view:0,detail:0}),Dv=Bn(Hr),eu,nu,Gr,tl=g({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(eu=e.screenX-Gr.screenX,nu=e.screenY-Gr.screenY):nu=eu=0,Gr=e),eu)},movementY:function(e){return"movementY"in e?e.movementY:nu}}),np=Bn(tl),Uv=g({},tl,{dataTransfer:0}),Lv=Bn(Uv),Nv=g({},Hr,{relatedTarget:0}),iu=Bn(Nv),Ov=g({},Ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Pv=Bn(Ov),zv=g({},Ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bv=Bn(zv),Iv=g({},Ka,{data:0}),ip=Bn(Iv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Gv[e])?!!n[e]:!1}function au(){return Vv}var kv=g({},Hr,{key:function(e){if(e.key){var n=Fv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xv=Bn(kv),Wv=g({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ap=Bn(Wv),qv=g({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Yv=Bn(qv),jv=g({},Ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zv=Bn(jv),Kv=g({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qv=Bn(Kv),Jv=g({},Ka,{newState:0,oldState:0}),$v=Bn(Jv),tS=[9,13,27,32],su=Hi&&"CompositionEvent"in window,Vr=null;Hi&&"documentMode"in document&&(Vr=document.documentMode);var eS=Hi&&"TextEvent"in window&&!Vr,sp=Hi&&(!su||Vr&&8<Vr&&11>=Vr),rp=" ",op=!1;function lp(e,n){switch(e){case"keyup":return tS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function nS(e,n){switch(e){case"compositionend":return cp(n);case"keypress":return n.which!==32?null:(op=!0,rp);case"textInput":return e=n.data,e===rp&&op?null:e;default:return null}}function iS(e,n){if(Os)return e==="compositionend"||!su&&lp(e,n)?(e=tp(),Ko=tu=da=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return sp&&n.locale!=="ko"?null:n.data;default:return null}}var aS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!aS[e.type]:n==="textarea"}function fp(e,n,a,r){Ls?Ns?Ns.push(r):Ns=[r]:Ls=r,n=kl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var kr=null,Xr=null;function sS(e){Y_(e,0)}function el(e){var n=st(e);if(Ii(n))return e}function hp(e,n){if(e==="change")return n}var dp=!1;if(Hi){var ru;if(Hi){var ou="oninput"in document;if(!ou){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),ou=typeof pp.oninput=="function"}ru=ou}else ru=!1;dp=ru&&(!document.documentMode||9<document.documentMode)}function mp(){kr&&(kr.detachEvent("onpropertychange",_p),Xr=kr=null)}function _p(e){if(e.propertyName==="value"&&el(Xr)){var n=[];fp(n,Xr,e,Qc(e)),$d(sS,n)}}function rS(e,n,a){e==="focusin"?(mp(),kr=n,Xr=a,kr.attachEvent("onpropertychange",_p)):e==="focusout"&&mp()}function oS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(Xr)}function lS(e,n){if(e==="click")return el(n)}function cS(e,n){if(e==="input"||e==="change")return el(n)}function uS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var jn=typeof Object.is=="function"?Object.is:uS;function Wr(e,n){if(jn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Bt.call(n,u)||!jn(e[u],n[u]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vp(e,n){var a=gp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gp(a)}}function Sp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Sp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=mn(e.document)}return n}function lu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var fS=Hi&&"documentMode"in document&&11>=document.documentMode,Ps=null,cu=null,qr=null,uu=!1;function yp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;uu||Ps==null||Ps!==mn(r)||(r=Ps,"selectionStart"in r&&lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&Wr(qr,r)||(qr=r,r=kl(cu,"onSelect"),0<r.length&&(n=new $o("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ps)))}function Qa(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var zs={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionrun:Qa("Transition","TransitionRun"),transitionstart:Qa("Transition","TransitionStart"),transitioncancel:Qa("Transition","TransitionCancel"),transitionend:Qa("Transition","TransitionEnd")},fu={},Mp={};Hi&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Ja(e){if(fu[e])return fu[e];if(!zs[e])return e;var n=zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Mp)return fu[e]=n[a];return e}var Ep=Ja("animationend"),Tp=Ja("animationiteration"),bp=Ja("animationstart"),hS=Ja("transitionrun"),dS=Ja("transitionstart"),pS=Ja("transitioncancel"),Ap=Ja("transitionend"),Rp=new Map,hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hu.push("scrollEnd");function vi(e,n){Rp.set(e,n),zt(n,[e])}var nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],Bs=0,du=0;function il(){for(var e=Bs,n=du=Bs=0;n<e;){var a=ai[n];ai[n++]=null;var r=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&Cp(a,u,f)}}function al(e,n,a,r){ai[Bs++]=e,ai[Bs++]=n,ai[Bs++]=a,ai[Bs++]=r,du|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function pu(e,n,a,r){return al(e,n,a,r),sl(e)}function $a(e,n){return al(e,null,null,n),sl(e)}function Cp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function sl(e){if(50<mo)throw mo=0,Tf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function mS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,r){return new mS(e,n,a,r)}function mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function wp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function rl(e,n,a,r,u,f){var v=0;if(r=e,typeof e=="function")mu(e)&&(v=1);else if(typeof e=="string")v=xx(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=Zn(31,a,n,u),e.elementType=D,e.lanes=f,e;case R:return ts(a.children,u,f,n);case y:v=8,u|=24;break;case _:return e=Zn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case H:return e=Zn(13,a,n,u),e.elementType=H,e.lanes=f,e;case I:return e=Zn(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:v=10;break t;case L:v=9;break t;case w:v=11;break t;case B:v=14;break t;case k:v=16,r=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Zn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function ts(e,n,a,r){return e=Zn(7,e,r,n),e.lanes=a,e}function _u(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function Dp(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function gu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Up=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Up.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Te(n)},Up.set(e,n),n)}return{value:e,source:n,stack:Te(n)}}var Fs=[],Hs=0,ol=null,Yr=0,ri=[],oi=0,pa=null,Ri=1,Ci="";function Vi(e,n){Fs[Hs++]=Yr,Fs[Hs++]=ol,ol=e,Yr=n}function Lp(e,n,a){ri[oi++]=Ri,ri[oi++]=Ci,ri[oi++]=pa,pa=e;var r=Ri;e=Ci;var u=32-Ft(r)-1;r&=~(1<<u),a+=1;var f=32-Ft(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Ri=1<<32-Ft(n)+u|a<<u|r,Ci=f+e}else Ri=1<<f|a<<u|r,Ci=e}function vu(e){e.return!==null&&(Vi(e,1),Lp(e,1,0))}function Su(e){for(;e===ol;)ol=Fs[--Hs],Fs[Hs]=null,Yr=Fs[--Hs],Fs[Hs]=null;for(;e===pa;)pa=ri[--oi],ri[oi]=null,Ci=ri[--oi],ri[oi]=null,Ri=ri[--oi],ri[oi]=null}function Np(e,n){ri[oi++]=Ri,ri[oi++]=Ci,ri[oi++]=pa,Ri=n.id,Ci=n.overflow,pa=e}var yn=null,qe=null,Ee=!1,ma=null,li=!1,xu=Error(s(519));function _a(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jr(si(n,e)),xu}function Op(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[an]=e,n[Sn]=r,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)ve(go[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Ln(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Ai(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Q_(n.textContent,a)?(r.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),r.onScroll!=null&&ve("scroll",n),r.onScrollEnd!=null&&ve("scrollend",n),r.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||_a(e,!0)}function Pp(e){for(yn=e.return;yn;)switch(yn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:yn=yn.return}}function Gs(e){if(e!==yn)return!1;if(!Ee)return Pp(e),Ee=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ff(e.type,e.memoizedProps)),a=!a),a&&qe&&_a(e),Pp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=rg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=rg(e)}else n===27?(n=qe,Da(e.type)?(e=Xf,Xf=null,qe=e):qe=n):qe=yn?ui(e.stateNode.nextSibling):null;return!0}function es(){qe=yn=null,Ee=!1}function yu(){var e=ma;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),ma=null),e}function jr(e){ma===null?ma=[e]:ma.push(e)}var Mu=z(null),ns=null,ki=null;function ga(e,n,a){gt(Mu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=Mu.current,nt(Mu)}function Eu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Tu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var F=0;F<n.length;F++)if(T.context===n[F]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Eu(f.return,a,e),r||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Eu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Vs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=u.type;jn(u.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(u===lt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&Tu(n,e,a,r),n.flags|=262144}function ll(e){for(e=e.firstContext;e!==null;){if(!jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function is(e){ns=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Mn(e){return zp(ns,e)}function cl(e,n){return ns===null&&is(e),zp(e,n)}function zp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var _S=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},gS=o.unstable_scheduleCallback,vS=o.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new _S,data:new Map,refCount:0}}function Zr(e){e.refCount--,e.refCount===0&&gS(vS,function(){e.controller.abort()})}var Kr=null,Au=0,ks=0,Xs=null;function SS(e,n){if(Kr===null){var a=Kr=[];Au=0,ks=Df(),Xs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Au++,n.then(Bp,Bp),n}function Bp(){if(--Au===0&&Kr!==null){Xs!==null&&(Xs.status="fulfilled");var e=Kr;Kr=null,ks=0,Xs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Ip=P.S;P.S=function(e,n){y_=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&SS(e,n),Ip!==null&&Ip(e,n)};var as=z(null);function Ru(){var e=as.current;return e!==null?e:Xe.pooledCache}function ul(e,n){n===null?gt(as,as.current):gt(as,n.pool)}function Fp(){var e=Ru();return e===null?null:{parent:sn._currentValue,pool:e}}var Ws=Error(s(460)),Cu=Error(s(474)),fl=Error(s(542)),hl={then:function(){}};function Hp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Gp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,kp(e),e}throw rs=n,Ws}}function ss(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(rs=a,Ws):a}}var rs=null;function Vp(){if(rs===null)throw Error(s(459));var e=rs;return rs=null,e}function kp(e){if(e===Ws||e===fl)throw Error(s(483))}var qs=null,Qr=0;function dl(e){var n=Qr;return Qr+=1,qs===null&&(qs=[]),Gp(qs,e,n)}function Jr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Xp(e){function n(j,V){if(e){var Q=j.deletions;Q===null?(j.deletions=[V],j.flags|=16):Q.push(V)}}function a(j,V){if(!e)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function r(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=Gi(j,V),j.index=0,j.sibling=null,j}function f(j,V,Q){return j.index=Q,e?(Q=j.alternate,Q!==null?(Q=Q.index,Q<V?(j.flags|=67108866,V):Q):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function v(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function T(j,V,Q,dt){return V===null||V.tag!==6?(V=_u(Q,j.mode,dt),V.return=j,V):(V=u(V,Q),V.return=j,V)}function F(j,V,Q,dt){var ne=Q.type;return ne===R?ut(j,V,Q.props.children,dt,Q.key):V!==null&&(V.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===k&&ss(ne)===V.type)?(V=u(V,Q.props),Jr(V,Q),V.return=j,V):(V=rl(Q.type,Q.key,Q.props,null,j.mode,dt),Jr(V,Q),V.return=j,V)}function J(j,V,Q,dt){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=gu(Q,j.mode,dt),V.return=j,V):(V=u(V,Q.children||[]),V.return=j,V)}function ut(j,V,Q,dt,ne){return V===null||V.tag!==7?(V=ts(Q,j.mode,dt,ne),V.return=j,V):(V=u(V,Q),V.return=j,V)}function mt(j,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=_u(""+V,j.mode,Q),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case M:return Q=rl(V.type,V.key,V.props,null,j.mode,Q),Jr(Q,V),Q.return=j,Q;case b:return V=gu(V,j.mode,Q),V.return=j,V;case k:return V=ss(V),mt(j,V,Q)}if(ft(V)||$(V))return V=ts(V,j.mode,Q,null),V.return=j,V;if(typeof V.then=="function")return mt(j,dl(V),Q);if(V.$$typeof===U)return mt(j,cl(j,V),Q);pl(j,V)}return null}function et(j,V,Q,dt){var ne=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return ne!==null?null:T(j,V,""+Q,dt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===ne?F(j,V,Q,dt):null;case b:return Q.key===ne?J(j,V,Q,dt):null;case k:return Q=ss(Q),et(j,V,Q,dt)}if(ft(Q)||$(Q))return ne!==null?null:ut(j,V,Q,dt,null);if(typeof Q.then=="function")return et(j,V,dl(Q),dt);if(Q.$$typeof===U)return et(j,V,cl(j,Q),dt);pl(j,Q)}return null}function rt(j,V,Q,dt,ne){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return j=j.get(Q)||null,T(V,j,""+dt,ne);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return j=j.get(dt.key===null?Q:dt.key)||null,F(V,j,dt,ne);case b:return j=j.get(dt.key===null?Q:dt.key)||null,J(V,j,dt,ne);case k:return dt=ss(dt),rt(j,V,Q,dt,ne)}if(ft(dt)||$(dt))return j=j.get(Q)||null,ut(V,j,dt,ne,null);if(typeof dt.then=="function")return rt(j,V,Q,dl(dt),ne);if(dt.$$typeof===U)return rt(j,V,Q,cl(V,dt),ne);pl(V,dt)}return null}function Vt(j,V,Q,dt){for(var ne=null,we=null,qt=V,he=V=0,Me=null;qt!==null&&he<Q.length;he++){qt.index>he?(Me=qt,qt=null):Me=qt.sibling;var De=et(j,qt,Q[he],dt);if(De===null){qt===null&&(qt=Me);break}e&&qt&&De.alternate===null&&n(j,qt),V=f(De,V,he),we===null?ne=De:we.sibling=De,we=De,qt=Me}if(he===Q.length)return a(j,qt),Ee&&Vi(j,he),ne;if(qt===null){for(;he<Q.length;he++)qt=mt(j,Q[he],dt),qt!==null&&(V=f(qt,V,he),we===null?ne=qt:we.sibling=qt,we=qt);return Ee&&Vi(j,he),ne}for(qt=r(qt);he<Q.length;he++)Me=rt(qt,j,he,Q[he],dt),Me!==null&&(e&&Me.alternate!==null&&qt.delete(Me.key===null?he:Me.key),V=f(Me,V,he),we===null?ne=Me:we.sibling=Me,we=Me);return e&&qt.forEach(function(Pa){return n(j,Pa)}),Ee&&Vi(j,he),ne}function ie(j,V,Q,dt){if(Q==null)throw Error(s(151));for(var ne=null,we=null,qt=V,he=V=0,Me=null,De=Q.next();qt!==null&&!De.done;he++,De=Q.next()){qt.index>he?(Me=qt,qt=null):Me=qt.sibling;var Pa=et(j,qt,De.value,dt);if(Pa===null){qt===null&&(qt=Me);break}e&&qt&&Pa.alternate===null&&n(j,qt),V=f(Pa,V,he),we===null?ne=Pa:we.sibling=Pa,we=Pa,qt=Me}if(De.done)return a(j,qt),Ee&&Vi(j,he),ne;if(qt===null){for(;!De.done;he++,De=Q.next())De=mt(j,De.value,dt),De!==null&&(V=f(De,V,he),we===null?ne=De:we.sibling=De,we=De);return Ee&&Vi(j,he),ne}for(qt=r(qt);!De.done;he++,De=Q.next())De=rt(qt,j,he,De.value,dt),De!==null&&(e&&De.alternate!==null&&qt.delete(De.key===null?he:De.key),V=f(De,V,he),we===null?ne=De:we.sibling=De,we=De);return e&&qt.forEach(function(Ux){return n(j,Ux)}),Ee&&Vi(j,he),ne}function Ge(j,V,Q,dt){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var ne=Q.key;V!==null;){if(V.key===ne){if(ne=Q.type,ne===R){if(V.tag===7){a(j,V.sibling),dt=u(V,Q.props.children),dt.return=j,j=dt;break t}}else if(V.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===k&&ss(ne)===V.type){a(j,V.sibling),dt=u(V,Q.props),Jr(dt,Q),dt.return=j,j=dt;break t}a(j,V);break}else n(j,V);V=V.sibling}Q.type===R?(dt=ts(Q.props.children,j.mode,dt,Q.key),dt.return=j,j=dt):(dt=rl(Q.type,Q.key,Q.props,null,j.mode,dt),Jr(dt,Q),dt.return=j,j=dt)}return v(j);case b:t:{for(ne=Q.key;V!==null;){if(V.key===ne)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(j,V.sibling),dt=u(V,Q.children||[]),dt.return=j,j=dt;break t}else{a(j,V);break}else n(j,V);V=V.sibling}dt=gu(Q,j.mode,dt),dt.return=j,j=dt}return v(j);case k:return Q=ss(Q),Ge(j,V,Q,dt)}if(ft(Q))return Vt(j,V,Q,dt);if($(Q)){if(ne=$(Q),typeof ne!="function")throw Error(s(150));return Q=ne.call(Q),ie(j,V,Q,dt)}if(typeof Q.then=="function")return Ge(j,V,dl(Q),dt);if(Q.$$typeof===U)return Ge(j,V,cl(j,Q),dt);pl(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(j,V.sibling),dt=u(V,Q),dt.return=j,j=dt):(a(j,V),dt=_u(Q,j.mode,dt),dt.return=j,j=dt),v(j)):a(j,V)}return function(j,V,Q,dt){try{Qr=0;var ne=Ge(j,V,Q,dt);return qs=null,ne}catch(qt){if(qt===Ws||qt===fl)throw qt;var we=Zn(29,qt,null,j.mode);return we.lanes=dt,we.return=j,we}finally{}}}var os=Xp(!0),Wp=Xp(!1),va=!1;function wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Du(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ue&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=sl(e),Cp(e,null,a),n}return al(e,r,n,a),sl(e)}function $r(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,bi(e,a)}}function Uu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function to(){if(Lu){var e=Xs;if(e!==null)throw e}}function eo(e,n,a,r){Lu=!1;var u=e.updateQueue;va=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var F=T,J=F.next;F.next=null,v===null?f=J:v.next=J,v=F;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==v&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=F))}if(f!==null){var mt=u.baseState;v=0,ut=J=F=null,T=f;do{var et=T.lane&-536870913,rt=et!==T.lane;if(rt?(ye&et)===et:(r&et)===et){et!==0&&et===ks&&(Lu=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Vt=e,ie=T;et=n;var Ge=a;switch(ie.tag){case 1:if(Vt=ie.payload,typeof Vt=="function"){mt=Vt.call(Ge,mt,et);break t}mt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ie.payload,et=typeof Vt=="function"?Vt.call(Ge,mt,et):Vt,et==null)break t;mt=g({},mt,et);break t;case 2:va=!0}}et=T.callback,et!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[et]:rt.push(et))}else rt={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=rt,F=mt):ut=ut.next=rt,v|=et;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ut===null&&(F=mt),u.baseState=F,u.firstBaseUpdate=J,u.lastBaseUpdate=ut,f===null&&(u.shared.lanes=0),ba|=v,e.lanes=v,e.memoizedState=mt}}function qp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Yp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qp(a[e],n)}var Ys=z(null),ml=z(0);function jp(e,n){e=$i,gt(ml,e),gt(Ys,n),$i=e|n.baseLanes}function Nu(){gt(ml,$i),gt(Ys,Ys.current)}function Ou(){$i=ml.current,nt(Ys),nt(ml)}var Kn=z(null),ci=null;function ya(e){var n=e.alternate;gt(en,en.current&1),gt(Kn,e),ci===null&&(n===null||Ys.current!==null||n.memoizedState!==null)&&(ci=e)}function Pu(e){gt(en,en.current),gt(Kn,e),ci===null&&(ci=e)}function Zp(e){e.tag===22?(gt(en,en.current),gt(Kn,e),ci===null&&(ci=e)):Ma()}function Ma(){gt(en,en.current),gt(Kn,Kn.current)}function Qn(e){nt(Kn),ci===e&&(ci=null),nt(en)}var en=z(0);function _l(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Vf(a)||kf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,fe=null,Fe=null,rn=null,gl=!1,js=!1,ls=!1,vl=0,no=0,Zs=null,yS=0;function Qe(){throw Error(s(321))}function zu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!jn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,r,u,f){return Wi=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Lm:Ju,ls=!1,f=a(r,u),ls=!1,js&&(f=Qp(n,a,r,u)),Kp(e),f}function Kp(e){P.H=so;var n=Fe!==null&&Fe.next!==null;if(Wi=0,rn=Fe=fe=null,gl=!1,no=0,Zs=null,n)throw Error(s(300));e===null||on||(e=e.dependencies,e!==null&&ll(e)&&(on=!0))}function Qp(e,n,a,r){fe=e;var u=0;do{if(js&&(Zs=null),no=0,js=!1,25<=u)throw Error(s(301));if(u+=1,rn=Fe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Nm,f=n(a,r)}while(js);return f}function MS(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?io(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(fe.flags|=1024),n}function Iu(){var e=vl!==0;return vl=0,e}function Fu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Hu(e){if(gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}gl=!1}Wi=0,rn=Fe=fe=null,js=!1,no=vl=0,Zs=null}function Nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?fe.memoizedState=rn=e:rn=rn.next=e,rn}function nn(){if(Fe===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=rn===null?fe.memoizedState:rn.next;if(n!==null)rn=n,Fe=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},rn===null?fe.memoizedState=rn=e:rn=rn.next=e}return rn}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(e){var n=no;return no+=1,Zs===null&&(Zs=[]),e=Gp(Zs,e,n),n=fe,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Lm:Ju),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return io(e);if(e.$$typeof===U)return Mn(e)}throw Error(s(438,String(e)))}function Gu(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function yl(e){var n=nn();return Vu(n,Fe,e)}function Vu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=v=null,F=null,J=n,ut=!1;do{var mt=J.lane&-536870913;if(mt!==J.lane?(ye&mt)===mt:(Wi&mt)===mt){var et=J.revertLane;if(et===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),mt===ks&&(ut=!0);else if((Wi&et)===et){J=J.next,et===ks&&(ut=!0);continue}else mt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(T=F=mt,v=f):F=F.next=mt,fe.lanes|=et,ba|=et;mt=J.action,ls&&a(f,mt),f=J.hasEagerState?J.eagerState:a(f,mt)}else et={lane:mt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(T=F=et,v=f):F=F.next=et,fe.lanes|=mt,ba|=mt;J=J.next}while(J!==null&&J!==n);if(F===null?v=f:F.next=T,!jn(f,e.memoizedState)&&(on=!0,ut&&(a=Xs,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=F,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function ku(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);jn(f,n.memoizedState)||(on=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Jp(e,n,a){var r=fe,u=nn(),f=Ee;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!jn((Fe||u).memoizedState,a);if(v&&(u.memoizedState=a,on=!0),u=u.queue,qu(em.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||rn!==null&&rn.memoizedState.tag&1){if(r.flags|=2048,Ks(9,{destroy:void 0},tm.bind(null,r,u,a,n),null),Xe===null)throw Error(s(349));f||(Wi&127)!==0||$p(r,n,a)}return a}function $p(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Sl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function tm(e,n,a,r){n.value=a,n.getSnapshot=r,nm(n)&&im(e)}function em(e,n,a){return a(function(){nm(n)&&im(e)})}function nm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!jn(e,a)}catch{return!0}}function im(e){var n=$a(e,2);n!==null&&Vn(n,e,2)}function Xu(e){var n=Nn();if(typeof e=="function"){var a=e;if(e=a(),ls){$t(!0);try{a()}finally{$t(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function am(e,n,a,r){return e.baseState=a,Vu(e,Fe,typeof r=="function"?r:qi)}function ES(e,n,a,r,u){if(Tl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,sm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function sm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var T=a(u,r),F=P.S;F!==null&&F(v,T),rm(e,n,T)}catch(J){Wu(e,n,J)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,r),rm(e,n,f)}catch(J){Wu(e,n,J)}}function rm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){om(e,n,r)},function(r){return Wu(e,n,r)}):om(e,n,a)}function om(e,n,a){n.status="fulfilled",n.value=a,lm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,sm(e,a)))}function Wu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,lm(n),n=n.next;while(n!==r)}e.action=null}function lm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function cm(e,n){return n}function um(e,n){if(Ee){var a=Xe.formState;if(a!==null){t:{var r=fe;if(Ee){if(qe){e:{for(var u=qe,f=li;u.nodeType!==8;){if(!f){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=ui(u.nextSibling),r=u.data==="F!";break t}}_a(r)}r=!1}r&&(n=a[0])}}return a=Nn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cm,lastRenderedState:n},a.queue=r,a=wm.bind(null,fe,r),r.dispatch=a,r=Xu(!1),f=Qu.bind(null,fe,!1,r.queue),r=Nn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=ES.bind(null,fe,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function fm(e){var n=nn();return hm(n,Fe,e)}function hm(e,n,a){if(n=Vu(e,n,cm)[0],e=yl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=io(n)}catch(v){throw v===Ws?fl:v}else r=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,Ks(9,{destroy:void 0},TS.bind(null,u,a),null)),[r,f,e]}function TS(e,n){e.action=n}function dm(e){var n=nn(),a=Fe;if(a!==null)return hm(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Ks(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Sl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function pm(){return nn().memoizedState}function Ml(e,n,a,r){var u=Nn();fe.flags|=e,u.memoizedState=Ks(1|n,{destroy:void 0},a,r===void 0?null:r)}function El(e,n,a,r){var u=nn();r=r===void 0?null:r;var f=u.memoizedState.inst;Fe!==null&&r!==null&&zu(r,Fe.memoizedState.deps)?u.memoizedState=Ks(n,f,a,r):(fe.flags|=e,u.memoizedState=Ks(1|n,f,a,r))}function mm(e,n){Ml(8390656,8,e,n)}function qu(e,n){El(2048,8,e,n)}function bS(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Sl(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function _m(e){var n=nn().memoizedState;return bS({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function gm(e,n){return El(4,2,e,n)}function vm(e,n){return El(4,4,e,n)}function Sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xm(e,n,a){a=a!=null?a.concat([e]):null,El(4,4,Sm.bind(null,n,e),a)}function Yu(){}function ym(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&zu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Mm(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&zu(n,r[1]))return r[0];if(r=e(),ls){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[r,n],r}function ju(e,n,a){return a===void 0||(Wi&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=E_(),fe.lanes|=e,ba|=e,a)}function Em(e,n,a,r){return jn(a,n)?a:Ys.current!==null?(e=ju(e,a,r),jn(e,n)||(on=!0),e):(Wi&42)===0||(Wi&1073741824)!==0&&(ye&261930)===0?(on=!0,e.memoizedState=a):(e=E_(),fe.lanes|=e,ba|=e,n)}function Tm(e,n,a,r,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var v=P.T,T={};P.T=T,Qu(e,!1,n,a);try{var F=u(),J=P.S;if(J!==null&&J(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ut=xS(F,r);ao(e,n,ut,ti(e))}else ao(e,n,r,ti(e))}catch(mt){ao(e,n,{then:function(){},status:"rejected",reason:mt},ti())}finally{Z.p=f,v!==null&&T.types!==null&&(v.types=T.types),P.T=v}}function AS(){}function Zu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=bm(e).queue;Tm(e,u,n,W,a===null?AS:function(){return Am(e),a(r)})}function bm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Am(e){var n=bm(e);n.next===null&&(n=e.alternate.memoizedState),ao(e,n.next.queue,{},ti())}function Ku(){return Mn(Mo)}function Rm(){return nn().memoizedState}function Cm(){return nn().memoizedState}function RS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();e=Sa(a);var r=xa(n,e,a);r!==null&&(Vn(r,n,a),$r(r,n,a)),n={cache:bu()},e.payload=n;return}n=n.return}}function CS(e,n,a){var r=ti();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?Dm(n,a):(a=pu(e,n,a,r),a!==null&&(Vn(a,e,r),Um(a,n,r)))}function wm(e,n,a){var r=ti();ao(e,n,a,r)}function ao(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Dm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,jn(T,v))return al(e,n,u,0),Xe===null&&il(),!1}catch{}finally{}if(a=pu(e,n,u,r),a!==null)return Vn(a,e,r),Um(a,n,r),!0}return!1}function Qu(e,n,a,r){if(r={lane:2,revertLane:Df(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(s(479))}else n=pu(e,a,r,2),n!==null&&Vn(n,e,2)}function Tl(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Dm(e,n){js=gl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Um(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,bi(e,a)}}var so={readContext:Mn,use:xl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};so.useEffectEvent=Qe;var Lm={readContext:Mn,use:xl,useCallback:function(e,n){return Nn().memoizedState=[e,n===void 0?null:n],e},useContext:Mn,useEffect:mm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,Sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Nn();n=n===void 0?null:n;var r=e();if(ls){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Nn();if(a!==void 0){var u=a(n);if(ls){$t(!0);try{a(n)}finally{$t(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=CS.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var n=Nn();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,a=wm.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Yu,useDeferredValue:function(e,n){var a=Nn();return ju(a,e,n)},useTransition:function(){var e=Xu(!1);return e=Tm.bind(null,fe,e.queue,!0,!1),Nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=fe,u=Nn();if(Ee){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xe===null)throw Error(s(349));(ye&127)!==0||$p(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,mm(em.bind(null,r,f,e),[e]),r.flags|=2048,Ks(9,{destroy:void 0},tm.bind(null,r,f,a,n),null),a},useId:function(){var e=Nn(),n=Xe.identifierPrefix;if(Ee){var a=Ci,r=Ri;a=(r&~(1<<32-Ft(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ku,useFormState:um,useActionState:um,useOptimistic:function(e){var n=Nn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Qu.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Gu,useCacheRefresh:function(){return Nn().memoizedState=RS.bind(null,fe)},useEffectEvent:function(e){var n=Nn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ju={readContext:Mn,use:xl,useCallback:ym,useContext:Mn,useEffect:qu,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:vm,useMemo:Mm,useReducer:yl,useRef:pm,useState:function(){return yl(qi)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=nn();return Em(a,Fe.memoizedState,e,n)},useTransition:function(){var e=yl(qi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:Ku,useFormState:fm,useActionState:fm,useOptimistic:function(e,n){var a=nn();return am(a,Fe,e,n)},useMemoCache:Gu,useCacheRefresh:Cm};Ju.useEffectEvent=_m;var Nm={readContext:Mn,use:xl,useCallback:ym,useContext:Mn,useEffect:qu,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:vm,useMemo:Mm,useReducer:ku,useRef:pm,useState:function(){return ku(qi)},useDebugValue:Yu,useDeferredValue:function(e,n){var a=nn();return Fe===null?ju(a,e,n):Em(a,Fe.memoizedState,e,n)},useTransition:function(){var e=ku(qi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:Jp,useId:Rm,useHostTransitionStatus:Ku,useFormState:dm,useActionState:dm,useOptimistic:function(e,n){var a=nn();return Fe!==null?am(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Gu,useCacheRefresh:Cm};Nm.useEffectEvent=_m;function $u(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var tf={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ti(),u=Sa(r);u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,r),n!==null&&(Vn(n,e,r),$r(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ti(),u=Sa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=xa(e,u,r),n!==null&&(Vn(n,e,r),$r(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ti(),r=Sa(a);r.tag=2,n!=null&&(r.callback=n),n=xa(e,r,a),n!==null&&(Vn(n,e,a),$r(n,e,a))}};function Om(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Wr(a,r)||!Wr(u,f):!0}function Pm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&tf.enqueueReplaceState(n,n.state,null)}function cs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function zm(e){nl(e)}function Bm(e){console.error(e)}function Im(e){nl(e)}function bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Fm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ef(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(e,n)},a}function Hm(e){return e=Sa(e),e.tag=3,e}function Gm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Fm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Fm(n,a,r),typeof u!="function"&&(Aa===null?Aa=new Set([this]):Aa.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function wS(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Bl():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Rf(e,r,u)),!1;case 22:return a.flags|=65536,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Rf(e,r,u)),!1}throw Error(s(435,a.tag))}return Rf(e,r,u),Bl(),!1}if(Ee)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==xu&&(e=Error(s(422),{cause:r}),jr(si(e,a)))):(r!==xu&&(n=Error(s(423),{cause:r}),jr(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=si(r,a),u=ef(e.stateNode,r,u),Uu(e,u),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=si(f,a),po===null?po=[f]:po.push(f),Je!==4&&(Je=2),n===null)return!0;r=si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ef(a.stateNode,r,e),Uu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Aa===null||!Aa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Hm(u),Gm(u,e,a,r),Uu(a,u),!1}a=a.return}while(a!==null);return!1}var nf=Error(s(461)),on=!1;function En(e,n,a,r){n.child=e===null?Wp(n,null,a,r):os(n,e.child,a,r)}function Vm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return is(n),r=Bu(e,n,a,v,f,u),T=Iu(),e!==null&&!on?(Fu(e,n,u),Yi(e,n,u)):(Ee&&T&&vu(n),n.flags|=1,En(e,n,r,u),n.child)}function km(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!mu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Xm(e,n,f,r,u)):(e=rl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ff(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Wr,a(v,r)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Gi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Xm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Wr(f,r)&&e.ref===n.ref)if(on=!1,n.pendingProps=r=f,ff(e,u))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return af(e,n,a,r,u)}function Wm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return qm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(n,f!==null?f.cachePool:null),f!==null?jp(n,f):Nu(),Zp(n);else return r=n.lanes=536870912,qm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ul(n,f.cachePool),jp(n,f),Ma(),n.memoizedState=null):(e!==null&&ul(n,null),Nu(),Ma());return En(e,n,u,a),n.child}function ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qm(e,n,a,r,u){var f=Ru();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ul(n,null),Nu(),Zp(n),e!==null&&Vs(e,n,r,!0),n.childLanes=u,null}function Al(e,n){return n=Cl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Ym(e,n,a){return os(n,e.child,null,a),e=Al(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function DS(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ee){if(r.mode==="hidden")return e=Al(n,r),n.lanes=536870912,ro(null,e);if(Pu(n),(e=qe)?(e=sg(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Dp(e),a.return=n,n.child=a,yn=n,qe=null)):e=null,e===null)throw _a(n);return n.lanes=536870912,null}return Al(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Pu(n),u)if(n.flags&256)n.flags&=-257,n=Ym(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(on||Vs(e,n,a,!1),u=(a&e.childLanes)!==0,on||u){if(r=Xe,r!==null&&(v=Rs(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,$a(e,v),Vn(r,e,v),nf;Bl(),n=Ym(e,n,a)}else e=f.treeContext,qe=ui(v.nextSibling),yn=n,Ee=!0,ma=null,li=!1,e!==null&&Np(n,e),n=Al(n,r),n.flags|=4096;return n}return e=Gi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Rl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function af(e,n,a,r,u){return is(n),a=Bu(e,n,a,r,void 0,u),r=Iu(),e!==null&&!on?(Fu(e,n,u),Yi(e,n,u)):(Ee&&r&&vu(n),n.flags|=1,En(e,n,a,u),n.child)}function jm(e,n,a,r,u,f){return is(n),n.updateQueue=null,a=Qp(n,r,a,u),Kp(e),r=Iu(),e!==null&&!on?(Fu(e,n,f),Yi(e,n,f)):(Ee&&r&&vu(n),n.flags|=1,En(e,n,a,f),n.child)}function Zm(e,n,a,r,u){if(is(n),n.stateNode===null){var f=Is,v=a.contextType;typeof v=="object"&&v!==null&&(f=Mn(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=tf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},wu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Mn(v):Is,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&($u(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&tf.enqueueReplaceState(f,f.state,null),eo(n,r,f,u),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,F=cs(a,T);f.props=F;var J=f.context,ut=a.contextType;v=Is,typeof ut=="object"&&ut!==null&&(v=Mn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==v)&&Pm(n,f,r,v),va=!1;var et=n.memoizedState;f.state=et,eo(n,r,f,u),to(),J=n.memoizedState,T||et!==J||va?(typeof mt=="function"&&($u(n,a,mt,r),J=n.memoizedState),(F=va||Om(n,a,F,r,et,J,v))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=v,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Du(e,n),v=n.memoizedProps,ut=cs(a,v),f.props=ut,mt=n.pendingProps,et=f.context,J=a.contextType,F=Is,typeof J=="object"&&J!==null&&(F=Mn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==mt||et!==F)&&Pm(n,f,r,F),va=!1,et=n.memoizedState,f.state=et,eo(n,r,f,u),to();var rt=n.memoizedState;v!==mt||et!==rt||va||e!==null&&e.dependencies!==null&&ll(e.dependencies)?(typeof T=="function"&&($u(n,a,T,r),rt=n.memoizedState),(ut=va||Om(n,a,ut,r,et,rt,F)||e!==null&&e.dependencies!==null&&ll(e.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=F,r=ut):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Rl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=os(n,e.child,null,u),n.child=os(n,null,a,u)):En(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Yi(e,n,u),e}function Km(e,n,a,r){return es(),n.flags|=256,En(e,n,a,r),n.child}var sf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rf(e){return{baseLanes:e,cachePool:Fp()}}function of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function Qm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(u?ya(n):Ma(),(e=qe)?(e=sg(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:pa!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=Dp(e),a.return=n,n.child=a,yn=n,qe=null)):e=null,e===null)throw _a(n);return kf(e)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,u?(Ma(),u=n.mode,T=Cl({mode:"hidden",children:T},u),r=ts(r,u,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=rf(a),r.childLanes=of(e,v,a),n.memoizedState=sf,ro(null,r)):(ya(n),lf(n,T))}var F=e.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(f)n.flags&256?(ya(n),n.flags&=-257,n=cf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),T=r.fallback,u=n.mode,r=Cl({mode:"visible",children:r.children},u),T=ts(T,u,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,os(n,e.child,null,a),r=n.child,r.memoizedState=rf(a),r.childLanes=of(e,v,a),n.memoizedState=sf,n=ro(null,r));else if(ya(n),kf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var J=v.dgst;v=J,r=Error(s(419)),r.stack="",r.digest=v,jr({value:r,source:null,stack:null}),n=cf(e,n,a)}else if(on||Vs(e,n,a,!1),v=(a&e.childLanes)!==0,on||v){if(v=Xe,v!==null&&(r=Rs(v,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,$a(e,r),Vn(v,e,r),nf;Vf(T)||Bl(),n=cf(e,n,a)}else Vf(T)?(n.flags|=192,n.child=e.child,n=null):(e=F.treeContext,qe=ui(T.nextSibling),yn=n,Ee=!0,ma=null,li=!1,e!==null&&Np(n,e),n=lf(n,r.children),n.flags|=4096);return n}return u?(Ma(),T=r.fallback,u=n.mode,F=e.child,J=F.sibling,r=Gi(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,J!==null?T=Gi(J,T):(T=ts(T,u,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,ro(null,r),r=n.child,T=e.child.memoizedState,T===null?T=rf(a):(u=T.cachePool,u!==null?(F=sn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Fp(),T={baseLanes:T.baseLanes|a,cachePool:u}),r.memoizedState=T,r.childLanes=of(e,v,a),n.memoizedState=sf,ro(e.child,r)):(ya(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function lf(e,n){return n=Cl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function cf(e,n,a){return os(n,e.child,null,a),e=lf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Eu(e.return,n,a)}function uf(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function $m(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=en.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,gt(en,v),En(e,n,r,a),r=Ee?Yr:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jm(e,a,n);else if(e.tag===19)Jm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&_l(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),uf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&_l(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}uf(n,!0,a,null,f,r);break;case"together":uf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ba|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ff(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ll(e)))}function US(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),ga(n,sn,e.memoizedState.cache),es();break;case 27:case 5:Rt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Pu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Qm(e,n,a):(ya(n),e=Yi(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Vs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return $m(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(en,en.current),r)break;return null;case 22:return n.lanes=0,Wm(e,n,a,n.pendingProps);case 24:ga(n,sn,e.memoizedState.cache)}return Yi(e,n,a)}function t_(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!ff(e,a)&&(n.flags&128)===0)return on=!1,US(e,n,a);on=(e.flags&131072)!==0}else on=!1,Ee&&(n.flags&1048576)!==0&&Lp(n,Yr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=ss(n.elementType),n.type=e,typeof e=="function")mu(e)?(r=cs(e,r),n.tag=1,n=Zm(null,n,e,r,a)):(n.tag=0,n=af(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===w){n.tag=11,n=Vm(null,n,e,r,a);break t}else if(u===B){n.tag=14,n=km(null,n,e,r,a);break t}}throw n=pt(e)||e,Error(s(306,n,""))}}return n;case 0:return af(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=cs(r,n.pendingProps),Zm(e,n,r,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Du(e,n),eo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,ga(n,sn,r),r!==f.cache&&Tu(n,[sn],a,!0),to(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Km(e,n,r,a);break t}else if(r!==u){u=si(Error(s(424)),n),jr(u),n=Km(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=ui(e.firstChild),yn=n,Ee=!0,ma=null,li=!0,a=Wp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(es(),r===u){n=Yi(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return Rl(e,n),e===null?(a=fg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ee||(a=n.type,e=n.pendingProps,r=Xl(it.current).createElement(a),r[an]=n,r[Sn]=e,Tn(r,a,e),vt(r),n.stateNode=r):n.memoizedState=fg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Rt(n),e===null&&Ee&&(r=n.stateNode=lg(n.type,n.pendingProps,it.current),yn=n,li=!0,u=qe,Da(n.type)?(Xf=u,qe=ui(r.firstChild)):qe=u),En(e,n,n.pendingProps.children,a),Rl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((u=r=qe)&&(r=ox(r,n.type,n.pendingProps,li),r!==null?(n.stateNode=r,yn=n,qe=ui(r.firstChild),li=!1,u=!0):u=!1),u||_a(n)),Rt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Ff(u,f)?r=null:v!==null&&Ff(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(e,n,MS,null,null,a),Mo._currentValue=u),Rl(e,n),En(e,n,r,a),n.child;case 6:return e===null&&Ee&&((e=a=qe)&&(a=lx(a,n.pendingProps,li),a!==null?(n.stateNode=a,yn=n,qe=null,e=!0):e=!1),e||_a(n)),null;case 13:return Qm(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=os(n,null,r,a):En(e,n,r,a),n.child;case 11:return Vm(e,n,n.type,n.pendingProps,a);case 7:return En(e,n,n.pendingProps,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ga(n,n.type,r.value),En(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,is(n),u=Mn(u),r=r(u),n.flags|=1,En(e,n,r,a),n.child;case 14:return km(e,n,n.type,n.pendingProps,a);case 15:return Xm(e,n,n.type,n.pendingProps,a);case 19:return $m(e,n,a);case 31:return DS(e,n,a);case 22:return Wm(e,n,a,n.pendingProps);case 24:return is(n),r=Mn(sn),e===null?(u=Ru(),u===null&&(u=Xe,f=bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},wu(n),ga(n,sn,u)):((e.lanes&a)!==0&&(Du(e,n),eo(n,null,null,a),to()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,sn,r)):(r=f.cache,ga(n,sn,r),r!==u.cache&&Tu(n,[sn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ji(e){e.flags|=4}function hf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(R_())e.flags|=8192;else throw rs=hl,Cu}else e.flags&=-16777217}function e_(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_g(n))if(R_())e.flags|=8192;else throw rs=hl,Cu}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,tr|=n)}function oo(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function LS(e,n,a){var r=n.pendingProps;switch(Su(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Xi(sn),Et(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gs(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),Ye(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ji(n),f!==null?(Ye(n),e_(n,f)):(Ye(n),hf(n,u,null,r,a))):f?f!==e.memoizedState?(ji(n),Ye(n),e_(n,f)):(Ye(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&ji(n),Ye(n),hf(n,u,e,r,a)),null;case 27:if(Wt(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}e=At.current,Gs(n)?Op(n):(e=lg(u,r,a),n.stateNode=e,ji(n))}return Ye(n),null;case 5:if(Wt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(f=At.current,Gs(n))Op(n);else{var v=Xl(it.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[an]=n,f[Sn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Tn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ji(n)}}return Ye(n),hf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ji(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Gs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=yn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[an]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Q_(e.nodeValue,a)),e||_a(n,!0)}else e=Xl(e).createTextNode(r),e[an]=n,n.stateNode=e}return Ye(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Gs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[an]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),e=!1}else a=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ye(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[an]=n}else es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),Ye(n),null);case 4:return Et(),e===null&&Of(n.stateNode.containerInfo),Ye(n),null;case 10:return Xi(n.type),Ye(n),null;case 19:if(nt(en),r=n.memoizedState,r===null)return Ye(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)oo(r,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=_l(e),f!==null){for(n.flags|=128,oo(r,!1),e=f.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)wp(a,e),a=a.sibling;return gt(en,en.current&1|2),Ee&&Vi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>Ol&&(n.flags|=128,u=!0,oo(r,!1),n.lanes=4194304)}else{if(!u)if(e=_l(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),oo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Ee)return Ye(n),null}else 2*E()-r.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,u=!0,oo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=en.current,gt(en,u?a&1|2:a&1),Ee&&Vi(n,r.treeForkCount),e):(Ye(n),null);case 22:case 23:return Qn(n),Ou(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&nt(as),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(sn),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function NS(e,n){switch(Su(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(sn),Et(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));es()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(en),null;case 4:return Et(),null;case 10:return Xi(n.type),null;case 22:case 23:return Qn(n),Ou(),e!==null&&nt(as),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(sn),null;case 25:return null;default:return null}}function n_(e,n){switch(Su(n),n.tag){case 3:Xi(sn),Et();break;case 26:case 27:case 5:Wt(n);break;case 4:Et();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:nt(en);break;case 10:Xi(n.type);break;case 22:case 23:Qn(n),Ou(),e!==null&&nt(as);break;case 24:Xi(sn)}}function lo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(T){ze(n,n.return,T)}}function Ea(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var F=a,J=T;try{J()}catch(ut){ze(u,F,ut)}}}r=r.next}while(r!==f)}}catch(ut){ze(n,n.return,ut)}}function i_(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Yp(n,a)}catch(r){ze(e,e.return,r)}}}function a_(e,n,a){a.props=cs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){ze(e,n,r)}}function co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){ze(e,n,u)}}function wi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function s_(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function df(e,n,a){try{var r=e.stateNode;ex(r,e.type,a,n),r[Sn]=n}catch(u){ze(e,e.return,u)}}function r_(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Da(e.type)||e.tag===4}function pf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||r_(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Da(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi));else if(r!==4&&(r===27&&Da(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(mf(e,n,a),e=e.sibling;e!==null;)mf(e,n,a),e=e.sibling}function Dl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Da(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Dl(e,n,a),e=e.sibling;e!==null;)Dl(e,n,a),e=e.sibling}function o_(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,r,a),n[an]=e,n[Sn]=a}catch(f){ze(e,e.return,f)}}var Zi=!1,ln=!1,_f=!1,l_=typeof WeakSet=="function"?WeakSet:Set,_n=null;function OS(e,n){if(e=e.containerInfo,Bf=Ql,e=xp(e),lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,F=-1,J=0,ut=0,mt=e,et=null;e:for(;;){for(var rt;mt!==a||u!==0&&mt.nodeType!==3||(T=v+u),mt!==f||r!==0&&mt.nodeType!==3||(F=v+r),mt.nodeType===3&&(v+=mt.nodeValue.length),(rt=mt.firstChild)!==null;)et=mt,mt=rt;for(;;){if(mt===e)break e;if(et===a&&++J===u&&(T=v),et===f&&++ut===r&&(F=v),(rt=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=rt}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(If={focusedElem:e,selectionRange:a},Ql=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Vt=cs(a.type,u);e=r.getSnapshotBeforeUpdate(Vt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ie){ze(a,a.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Gf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function c_(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),r&4&&lo(5,a);break;case 1:if(Qi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){ze(a,a.return,v)}else{var u=cs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ze(a,a.return,v)}}r&64&&i_(a),r&512&&co(a,a.return);break;case 3:if(Qi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Yp(e,n)}catch(v){ze(a,a.return,v)}}break;case 27:n===null&&r&4&&o_(a);case 26:case 5:Qi(e,a),n===null&&r&4&&s_(a),r&512&&co(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),r&4&&h_(e,a);break;case 13:Qi(e,a),r&4&&d_(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=kS.bind(null,a),cx(e,a))));break;case 22:if(r=a.memoizedState!==null||Zi,!r){n=n!==null&&n.memoizedState!==null||ln,u=Zi;var f=ln;Zi=r,(ln=n)&&!f?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),Zi=u,ln=f}break;case 30:break;default:Qi(e,a)}}function u_(e){var n=e.alternate;n!==null&&(e.alternate=null,u_(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&A(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,In=!1;function Ki(e,n,a){for(a=a.child;a!==null;)f_(e,n,a),a=a.sibling}function f_(e,n,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:ln||wi(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ln||wi(a,n);var r=je,u=In;Da(a.type)&&(je=a.stateNode,In=!1),Ki(e,n,a),So(a.stateNode),je=r,In=u;break;case 5:ln||wi(a,n);case 6:if(r=je,u=In,je=null,Ki(e,n,a),je=r,In=u,je!==null)if(In)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:je!==null&&(In?(e=je,ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),lr(e)):ig(je,a.stateNode));break;case 4:r=je,u=In,je=a.stateNode.containerInfo,In=!0,Ki(e,n,a),je=r,In=u;break;case 0:case 11:case 14:case 15:Ea(2,a,n),ln||Ea(4,a,n),Ki(e,n,a);break;case 1:ln||(wi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&a_(a,n,r)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:ln=(r=ln)||a.memoizedState!==null,Ki(e,n,a),ln=r;break;default:Ki(e,n,a)}}function h_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{lr(e)}catch(a){ze(n,n.return,a)}}}function d_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{lr(e)}catch(a){ze(n,n.return,a)}}function PS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new l_),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new l_),n;default:throw Error(s(435,e.tag))}}function Ul(e,n){var a=PS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=XS.bind(null,e,r);r.then(u,u)}})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Da(T.type)){je=T.stateNode,In=!1;break t}break;case 5:je=T.stateNode,In=!1;break t;case 3:case 4:je=T.stateNode.containerInfo,In=!0;break t}T=T.return}if(je===null)throw Error(s(160));f_(f,v,u),je=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)p_(n,e),n=n.sibling}var Si=null;function p_(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),Hn(e),r&4&&(Ea(3,e,e.return),lo(3,e),Ea(5,e,e.return));break;case 1:Fn(n,e),Hn(e),r&512&&(ln||a===null||wi(a,a.return)),r&64&&Zi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Si;if(Fn(n,e),Hn(e),r&512&&(ln||a===null||wi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ja]||f[an]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Tn(f,r,a),f[an]=e,vt(f),r=f;break t;case"link":var v=pg("link","href",u).get(r+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=u.createElement(r),Tn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=pg("meta","content",u).get(r+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=u.createElement(r),Tn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[an]=e,vt(f),r=f}e.stateNode=r}else mg(u,e.type,e.stateNode);else e.stateNode=dg(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?mg(u,e.type,e.stateNode):dg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&df(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),Hn(e),r&512&&(ln||a===null||wi(a,a.return)),a!==null&&r&4&&df(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),Hn(e),r&512&&(ln||a===null||wi(a,a.return)),e.flags&32){u=e.stateNode;try{Us(u,"")}catch(Vt){ze(e,e.return,Vt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,df(e,u,a!==null?a.memoizedProps:u)),r&1024&&(_f=!0);break;case 6:if(Fn(n,e),Hn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Vt){ze(e,e.return,Vt)}}break;case 3:if(Yl=null,u=Si,Si=Wl(n.containerInfo),Fn(n,e),Si=u,Hn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{lr(n.containerInfo)}catch(Vt){ze(e,e.return,Vt)}_f&&(_f=!1,m_(e));break;case 4:r=Si,Si=Wl(e.stateNode.containerInfo),Fn(n,e),Hn(e),Si=r;break;case 12:Fn(n,e),Hn(e);break;case 31:Fn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 13:Fn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 22:u=e.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,J=Zi,ut=ln;if(Zi=J||u,ln=ut||F,Fn(n,e),ln=ut,Zi=J,Hn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||Zi||ln||us(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=F.stateNode;var mt=F.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Vt){ze(F,F.return,Vt)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Vt){ze(F,F.return,Vt)}}}else if(n.tag===18){if(a===null){F=n;try{var rt=F.stateNode;u?ag(rt,!0):ag(F.stateNode,!1)}catch(Vt){ze(F,F.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ul(e,a))));break;case 19:Fn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 30:break;case 21:break;default:Fn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(r_(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=pf(e);Dl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Us(v,""),a.flags&=-33);var T=pf(e);Dl(e,T,v);break;case 3:case 4:var F=a.stateNode.containerInfo,J=pf(e);mf(e,J,F);break;default:throw Error(s(161))}}catch(ut){ze(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function m_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;m_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)c_(e,n.alternate,n),n=n.sibling}function us(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),us(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&a_(n,n.return,a),us(n);break;case 27:So(n.stateNode);case 26:case 5:wi(n,n.return),us(n);break;case 22:n.memoizedState===null&&us(n);break;case 30:us(n);break;default:us(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(u,f,a),lo(4,f);break;case 1:if(Ji(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){ze(r,r.return,J)}if(r=f,u=r.updateQueue,u!==null){var T=r.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)qp(F[u],T)}catch(J){ze(r,r.return,J)}}a&&v&64&&i_(f),co(f,f.return);break;case 27:o_(f);case 26:case 5:Ji(u,f,a),a&&r===null&&v&4&&s_(f),co(f,f.return);break;case 12:Ji(u,f,a);break;case 31:Ji(u,f,a),a&&v&4&&h_(u,f);break;case 13:Ji(u,f,a),a&&v&4&&d_(u,f);break;case 22:f.memoizedState===null&&Ji(u,f,a),co(f,f.return);break;case 30:break;default:Ji(u,f,a)}n=n.sibling}}function gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zr(a))}function vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zr(e))}function xi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)__(e,n,a,r),n=n.sibling}function __(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,r),u&2048&&lo(9,n);break;case 1:xi(e,n,a,r);break;case 3:xi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zr(e)));break;case 12:if(u&2048){xi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(F){ze(n,n.return,F)}}else xi(e,n,a,r);break;case 31:xi(e,n,a,r);break;case 13:xi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,r):uo(e,n):f._visibility&2?xi(e,n,a,r):(f._visibility|=2,Qs(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&gf(v,n);break;case 24:xi(e,n,a,r),u&2048&&vf(n.alternate,n);break;default:xi(e,n,a,r)}}function Qs(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,F=r,J=v.flags;switch(v.tag){case 0:case 11:case 15:Qs(f,v,T,F,u),lo(8,v);break;case 23:break;case 22:var ut=v.stateNode;v.memoizedState!==null?ut._visibility&2?Qs(f,v,T,F,u):uo(f,v):(ut._visibility|=2,Qs(f,v,T,F,u)),u&&J&2048&&gf(v.alternate,v);break;case 24:Qs(f,v,T,F,u),u&&J&2048&&vf(v.alternate,v);break;default:Qs(f,v,T,F,u)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:uo(a,r),u&2048&&gf(r.alternate,r);break;case 24:uo(a,r),u&2048&&vf(r.alternate,r);break;default:uo(a,r)}n=n.sibling}}var fo=8192;function Js(e,n,a){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)g_(e,n,a),e=e.sibling}function g_(e,n,a){switch(e.tag){case 26:Js(e,n,a),e.flags&fo&&e.memoizedState!==null&&yx(a,Si,e.memoizedState,e.memoizedProps);break;case 5:Js(e,n,a);break;case 3:case 4:var r=Si;Si=Wl(e.stateNode.containerInfo),Js(e,n,a),Si=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=fo,fo=16777216,Js(e,n,a),fo=r):Js(e,n,a));break;default:Js(e,n,a)}}function v_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,x_(r,e)}v_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)S_(e),e=e.sibling}function S_(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):ho(e);break;default:ho(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];_n=r,x_(r,e)}v_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function x_(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Zr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,_n=r;else t:for(a=e;_n!==null;){r=_n;var u=r.sibling,f=r.return;if(u_(r),r===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var zS={getCacheForType:function(e){var n=Mn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Mn(sn).controller.signal}},BS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Xe=null,ge=null,ye=0,Pe=0,Jn=null,Ta=!1,$s=!1,Sf=!1,$i=0,Je=0,ba=0,fs=0,xf=0,$n=0,tr=0,po=null,Gn=null,yf=!1,Nl=0,y_=0,Ol=1/0,Pl=null,Aa=null,fn=0,Ra=null,er=null,ta=0,Mf=0,Ef=null,M_=null,mo=0,Tf=null;function ti(){return(Ue&2)!==0&&ye!==0?ye&-ye:P.T!==null?Df():Ya()}function E_(){if($n===0)if((ye&536870912)===0||Ee){var e=Dt;Dt<<=1,(Dt&3932160)===0&&(Dt=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function Vn(e,n,a){(e===Xe&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(nr(e,0),Ca(e,ye,$n,!1)),Un(e,a),((Ue&2)===0||e!==Xe)&&(e===Xe&&((Ue&2)===0&&(fs|=a),Je===4&&Ca(e,ye,$n,!1)),Di(e))}function T_(e,n,a){if((Ue&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Gt(e,n),u=r?HS(e,n):Af(e,n,!0),f=r;do{if(u===0){$s&&!r&&Ca(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!IS(a)){u=Af(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=e;u=po;var F=T.current.memoizedState.isDehydrated;if(F&&(nr(T,v).flags|=256),v=Af(T,v,!1),v!==2){if(Sf&&!F){T.errorRecoveryDisabledLanes|=f,fs|=f,u=4;break t}f=Gn,Gn=u,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){nr(e,0),Ca(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ca(r,n,$n,!Ta);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Nl+300-E(),10<u)){if(Ca(r,n,$n,!Ta),_t(r,0,!0)!==0)break t;ta=n,r.timeoutHandle=eg(b_.bind(null,r,a,Gn,Pl,yf,n,$n,fs,tr,Ta,f,"Throttled",-0,0),u);break t}b_(r,a,Gn,Pl,yf,n,$n,fs,tr,Ta,f,null,-0,0)}}break}while(!0);Di(e)}function b_(e,n,a,r,u,f,v,T,F,J,ut,mt,et,rt){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},g_(n,f,mt);var Vt=(f&62914560)===f?Nl-E():(f&4194048)===f?y_-E():0;if(Vt=Mx(mt,Vt),Vt!==null){ta=f,e.cancelPendingCommit=Vt(N_.bind(null,e,n,f,a,r,u,v,T,F,ut,mt,null,et,rt)),Ca(e,f,v,!J);return}}N_(e,n,f,a,r,u,v,T,F)}function IS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ca(e,n,a,r){n&=~xf,n&=~fs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Ft(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Pr(e,a,n)}function zl(){return(Ue&6)===0?(_o(0),!1):!0}function bf(){if(ge!==null){if(Pe===0)var e=ge.return;else e=ge,ki=ns=null,Hu(e),qs=null,Qr=0,e=ge;for(;e!==null;)n_(e.alternate,e),e=e.return;ge=null}}function nr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ax(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,bf(),Xe=e,ge=a=Gi(e.current,null),ye=n,Pe=0,Jn=null,Ta=!1,$s=Gt(e,n),Sf=!1,tr=$n=xf=fs=ba=Je=0,Gn=po=null,yf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ft(r),f=1<<u;n|=e[u],r&=~f}return $i=n,il(),a}function A_(e,n){fe=null,P.H=so,n===Ws||n===fl?(n=Vp(),Pe=3):n===Cu?(n=Vp(),Pe=4):Pe=n===nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,ge===null&&(Je=1,bl(e,si(n,e.current)))}function R_(){var e=Kn.current;return e===null?!0:(ye&4194048)===ye?ci===null:(ye&62914560)===ye||(ye&536870912)!==0?e===ci:!1}function C_(){var e=P.H;return P.H=so,e===null?so:e}function w_(){var e=P.A;return P.A=zS,e}function Bl(){Je=4,Ta||(ye&4194048)!==ye&&Kn.current!==null||($s=!0),(ba&134217727)===0&&(fs&134217727)===0||Xe===null||Ca(Xe,ye,$n,!1)}function Af(e,n,a){var r=Ue;Ue|=2;var u=C_(),f=w_();(Xe!==e||ye!==n)&&(Pl=null,nr(e,n)),n=!1;var v=Je;t:do try{if(Pe!==0&&ge!==null){var T=ge,F=Jn;switch(Pe){case 8:bf(),v=6;break t;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var J=Pe;if(Pe=0,Jn=null,ir(e,T,F,J),a&&$s){v=0;break t}break;default:J=Pe,Pe=0,Jn=null,ir(e,T,F,J)}}FS(),v=Je;break}catch(ut){A_(e,ut)}while(!0);return n&&e.shellSuspendCounter++,ki=ns=null,Ue=r,P.H=u,P.A=f,ge===null&&(Xe=null,ye=0,il()),v}function FS(){for(;ge!==null;)D_(ge)}function HS(e,n){var a=Ue;Ue|=2;var r=C_(),u=w_();Xe!==e||ye!==n?(Pl=null,Ol=E()+500,nr(e,n)):$s=Gt(e,n);t:do try{if(Pe!==0&&ge!==null){n=ge;var f=Jn;e:switch(Pe){case 1:Pe=0,Jn=null,ir(e,n,f,1);break;case 2:case 9:if(Hp(f)){Pe=0,Jn=null,U_(n);break}n=function(){Pe!==2&&Pe!==9||Xe!==e||(Pe=7),Di(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Hp(f)?(Pe=0,Jn=null,U_(n)):(Pe=0,Jn=null,ir(e,n,f,7));break;case 5:var v=null;switch(ge.tag){case 26:v=ge.memoizedState;case 5:case 27:var T=ge;if(v?_g(v):T.stateNode.complete){Pe=0,Jn=null;var F=T.sibling;if(F!==null)ge=F;else{var J=T.return;J!==null?(ge=J,Il(J)):ge=null}break e}}Pe=0,Jn=null,ir(e,n,f,5);break;case 6:Pe=0,Jn=null,ir(e,n,f,6);break;case 8:bf(),Je=6;break t;default:throw Error(s(462))}}GS();break}catch(ut){A_(e,ut)}while(!0);return ki=ns=null,P.H=r,P.A=u,Ue=a,ge!==null?0:(Xe=null,ye=0,il(),Je)}function GS(){for(;ge!==null&&!Ze();)D_(ge)}function D_(e){var n=t_(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Il(e):ge=n}function U_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=jm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=jm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Hu(n);default:n_(a,n),n=ge=wp(n,$i),n=t_(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Il(e):ge=n}function ir(e,n,a,r){ki=ns=null,Hu(n),qs=null,Qr=0;var u=n.return;try{if(wS(e,u,n,a,ye)){Je=1,bl(e,si(a,e.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;Je=1,bl(e,si(a,e.current)),ge=null;return}n.flags&32768?(Ee||r===1?e=!0:$s||(ye&536870912)!==0?e=!1:(Ta=e=!0,(r===2||r===9||r===3||r===6)&&(r=Kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),L_(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){L_(n,Ta);return}e=n.return;var a=LS(n.alternate,n,$i);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);Je===0&&(Je=5)}function L_(e,n){do{var a=NS(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);Je=6,ge=null}function N_(e,n,a,r,u,f,v,T,F){e.cancelPendingCommit=null;do Fl();while(fn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=du,ii(e,a,f,v,T,F),e===Xe&&(ge=Xe=null,ye=0),er=n,Ra=e,ta=a,Mf=f,Ef=u,M_=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,WS(ct,function(){return I_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,u=Z.p,Z.p=2,v=Ue,Ue|=4;try{OS(e,n,a)}finally{Ue=v,Z.p=u,P.T=r}}fn=1,O_(),P_(),z_()}}function O_(){if(fn===1){fn=0;var e=Ra,n=er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=Z.p;Z.p=2;var u=Ue;Ue|=4;try{p_(n,e);var f=If,v=xp(e.containerInfo),T=f.focusedElem,F=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&Sp(T.ownerDocument.documentElement,T)){if(F!==null&&lu(T)){var J=F.start,ut=F.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var mt=T.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var rt=et.getSelection(),Vt=T.textContent.length,ie=Math.min(F.start,Vt),Ge=F.end===void 0?ie:Math.min(F.end,Vt);!rt.extend&&ie>Ge&&(v=Ge,Ge=ie,ie=v);var j=vp(T,ie),V=vp(T,Ge);if(j&&V&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==V.node||rt.focusOffset!==V.offset)){var Q=mt.createRange();Q.setStart(j.node,j.offset),rt.removeAllRanges(),ie>Ge?(rt.addRange(Q),rt.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),rt.addRange(Q))}}}}for(mt=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&mt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var dt=mt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Ql=!!Bf,If=Bf=null}finally{Ue=u,Z.p=r,P.T=a}}e.current=n,fn=2}}function P_(){if(fn===2){fn=0;var e=Ra,n=er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=Z.p;Z.p=2;var u=Ue;Ue|=4;try{c_(e,n.alternate,n)}finally{Ue=u,Z.p=r,P.T=a}}fn=3}}function z_(){if(fn===4||fn===3){fn=0,O();var e=Ra,n=er,a=ta,r=M_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,er=Ra=null,B_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Aa=null),ws(a),n=n.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Tt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,u=Z.p,Z.p=2,P.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var T=r[v];f(T.value,{componentStack:T.stack})}}finally{P.T=n,Z.p=u}}(ta&3)!==0&&Fl(),Di(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Tf?mo++:(mo=0,Tf=e):mo=0,_o(0)}}function B_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zr(n)))}function Fl(){return O_(),P_(),z_(),I_()}function I_(){if(fn!==5)return!1;var e=Ra,n=Mf;Mf=0;var a=ws(ta),r=P.T,u=Z.p;try{Z.p=32>a?32:a,P.T=null,a=Ef,Ef=null;var f=Ra,v=ta;if(fn=0,er=Ra=null,ta=0,(Ue&6)!==0)throw Error(s(331));var T=Ue;if(Ue|=4,S_(f.current),__(f,f.current,v,a),Ue=T,_o(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Tt,f)}catch{}return!0}finally{Z.p=u,P.T=r,B_(e,n)}}function F_(e,n,a){n=si(a,n),n=ef(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(Un(e,2),Di(e))}function ze(e,n,a){if(e.tag===3)F_(e,e,a);else for(;n!==null;){if(n.tag===3){F_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Aa===null||!Aa.has(r))){e=si(a,e),a=Hm(2),r=xa(n,a,2),r!==null&&(Gm(a,r,n,e),Un(r,2),Di(r));break}}n=n.return}}function Rf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new BS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Sf=!0,u.add(a),e=VS.bind(null,e,n,a),n.then(e,e))}function VS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Xe===e&&(ye&a)===a&&(Je===4||Je===3&&(ye&62914560)===ye&&300>E()-Nl?(Ue&2)===0&&nr(e,0):xf|=a,tr===ye&&(tr=0)),Di(e)}function H_(e,n){n===0&&(n=Oe()),e=$a(e,n),e!==null&&(Un(e,n),Di(e))}function kS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),H_(e,a)}function XS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),H_(e,a)}function WS(e,n){return ae(e,n)}var Hl=null,ar=null,Cf=!1,Gl=!1,wf=!1,wa=0;function Di(e){e!==ar&&e.next===null&&(ar===null?Hl=ar=e:ar=ar.next=e),Gl=!0,Cf||(Cf=!0,YS())}function _o(e,n){if(!wf&&Gl){wf=!0;do for(var a=!1,r=Hl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Ft(42|e)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,X_(r,f))}else f=ye,f=_t(r,r===Xe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Gt(r,f)||(a=!0,X_(r,f));r=r.next}while(a);wf=!1}}function qS(){G_()}function G_(){Gl=Cf=!1;var e=0;wa!==0&&ix()&&(e=wa);for(var n=E(),a=null,r=Hl;r!==null;){var u=r.next,f=V_(r,n);f===0?(r.next=null,a===null?Hl=u:a.next=u,u===null&&(ar=a)):(a=r,(e!==0||(f&3)!==0)&&(Gl=!0)),r=u}fn!==0&&fn!==5||_o(e),wa!==0&&(wa=0)}function V_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ft(f),T=1<<v,F=u[v];F===-1?((T&a)===0||(T&r)!==0)&&(u[v]=le(T,n)):F<=n&&(e.expiredLanes|=T),f&=~T}if(n=Xe,a=ye,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ie(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ie(r),ws(a)){case 2:case 8:a=xt;break;case 32:a=ct;break;case 268435456:a=Ct;break;default:a=ct}return r=k_.bind(null,e),a=ae(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ie(r),e.callbackPriority=2,e.callbackNode=null,2}function k_(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var r=ye;return r=_t(e,e===Xe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(T_(e,r,n),V_(e,E()),e.callbackNode!=null&&e.callbackNode===a?k_.bind(null,e):null)}function X_(e,n){if(Fl())return null;T_(e,n,!0)}function YS(){sx(function(){(Ue&6)!==0?ae(ht,qS):G_()})}function Df(){if(wa===0){var e=ks;e===0&&(e=bt,bt<<=1,(bt&261888)===0&&(bt=256)),wa=e}return wa}function W_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function q_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function jS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=W_((u[Sn]||null).action),v=r.submitter;v&&(n=(n=v[Sn]||null)?W_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new $o("action","action",null,r,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(wa!==0){var F=v?q_(u,v):new FormData(u);Zu(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(T.preventDefault(),F=v?q_(u,v):new FormData(u),Zu(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Uf=0;Uf<hu.length;Uf++){var Lf=hu[Uf],ZS=Lf.toLowerCase(),KS=Lf[0].toUpperCase()+Lf.slice(1);vi(ZS,"on"+KS)}vi(Ep,"onAnimationEnd"),vi(Tp,"onAnimationIteration"),vi(bp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(hS,"onTransitionRun"),vi(dS,"onTransitionStart"),vi(pS,"onTransitionCancel"),vi(Ap,"onTransitionEnd"),te("onMouseEnter",["mouseout","mouseover"]),te("onMouseLeave",["mouseout","mouseover"]),te("onPointerEnter",["pointerout","pointerover"]),te("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function Y_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var T=r[v],F=T.instance,J=T.currentTarget;if(T=T.listener,F!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ut){nl(ut)}u.currentTarget=null,f=F}else for(v=0;v<r.length;v++){if(T=r[v],F=T.instance,J=T.currentTarget,T=T.listener,F!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=J;try{f(u)}catch(ut){nl(ut)}u.currentTarget=null,f=F}}}}function ve(e,n){var a=n[Br];a===void 0&&(a=n[Br]=new Set);var r=e+"__bubble";a.has(r)||(j_(n,e,2,!1),a.add(r))}function Nf(e,n,a){var r=0;n&&(r|=4),j_(a,e,r,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Of(e){if(!e[Vl]){e[Vl]=!0,Ot.forEach(function(a){a!=="selectionchange"&&(QS.has(a)||Nf(a,!1,e),Nf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,Nf("selectionchange",!1,n))}}function j_(e,n,a,r){switch(Eg(n)){case 2:var u=bx;break;case 8:u=Ax;break;default:u=Zf}a=u.bind(null,n,a,e),u=void 0,!$c||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Pf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=r.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=q(T),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){r=f=v;continue t}T=T.parentNode}}r=r.return}$d(function(){var J=f,ut=Qc(a),mt=[];t:{var et=Rp.get(e);if(et!==void 0){var rt=$o,Vt=e;switch(e){case"keypress":if(Qo(a)===0)break t;case"keydown":case"keyup":rt=Xv;break;case"focusin":Vt="focus",rt=iu;break;case"focusout":Vt="blur",rt=iu;break;case"beforeblur":case"afterblur":rt=iu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Lv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=Yv;break;case Ep:case Tp:case bp:rt=Pv;break;case Ap:rt=Zv;break;case"scroll":case"scrollend":rt=Dv;break;case"wheel":rt=Qv;break;case"copy":case"cut":case"paste":rt=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=ap;break;case"toggle":case"beforetoggle":rt=$v}var ie=(n&4)!==0,Ge=!ie&&(e==="scroll"||e==="scrollend"),j=ie?et!==null?et+"Capture":null:et;ie=[];for(var V=J,Q;V!==null;){var dt=V;if(Q=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Q===null||j===null||(dt=Ir(V,j),dt!=null&&ie.push(vo(V,dt,Q))),Ge)break;V=V.return}0<ie.length&&(et=new rt(et,Vt,null,a,ut),mt.push({event:et,listeners:ie}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",et&&a!==Kc&&(Vt=a.relatedTarget||a.fromElement)&&(q(Vt)||Vt[ha]))break t;if((rt||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,rt?(Vt=a.relatedTarget||a.toElement,rt=J,Vt=Vt?q(Vt):null,Vt!==null&&(Ge=c(Vt),ie=Vt.tag,Vt!==Ge||ie!==5&&ie!==27&&ie!==6)&&(Vt=null)):(rt=null,Vt=J),rt!==Vt)){if(ie=np,dt="onMouseLeave",j="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ie=ap,dt="onPointerLeave",j="onPointerEnter",V="pointer"),Ge=rt==null?et:st(rt),Q=Vt==null?et:st(Vt),et=new ie(dt,V+"leave",rt,a,ut),et.target=Ge,et.relatedTarget=Q,dt=null,q(ut)===J&&(ie=new ie(j,V+"enter",Vt,a,ut),ie.target=Q,ie.relatedTarget=Ge,dt=ie),Ge=dt,rt&&Vt)e:{for(ie=JS,j=rt,V=Vt,Q=0,dt=j;dt;dt=ie(dt))Q++;dt=0;for(var ne=V;ne;ne=ie(ne))dt++;for(;0<Q-dt;)j=ie(j),Q--;for(;0<dt-Q;)V=ie(V),dt--;for(;Q--;){if(j===V||V!==null&&j===V.alternate){ie=j;break e}j=ie(j),V=ie(V)}ie=null}else ie=null;rt!==null&&Z_(mt,et,rt,ie,!1),Vt!==null&&Ge!==null&&Z_(mt,Ge,Vt,ie,!0)}}t:{if(et=J?st(J):window,rt=et.nodeName&&et.nodeName.toLowerCase(),rt==="select"||rt==="input"&&et.type==="file")var we=hp;else if(up(et))if(dp)we=cS;else{we=oS;var qt=rS}else rt=et.nodeName,!rt||rt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Zc(J.elementType)&&(we=hp):we=lS;if(we&&(we=we(e,J))){fp(mt,we,a,ut);break t}qt&&qt(e,et,J),e==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&un(et,"number",et.value)}switch(qt=J?st(J):window,e){case"focusin":(up(qt)||qt.contentEditable==="true")&&(Ps=qt,cu=J,qr=null);break;case"focusout":qr=cu=Ps=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,yp(mt,a,ut);break;case"selectionchange":if(fS)break;case"keydown":case"keyup":yp(mt,a,ut)}var he;if(su)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Os?lp(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(sp&&a.locale!=="ko"&&(Os||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Os&&(he=tp()):(da=ut,tu="value"in da?da.value:da.textContent,Os=!0)),qt=kl(J,Me),0<qt.length&&(Me=new ip(Me,e,null,a,ut),mt.push({event:Me,listeners:qt}),he?Me.data=he:(he=cp(a),he!==null&&(Me.data=he)))),(he=eS?nS(e,a):iS(e,a))&&(Me=kl(J,"onBeforeInput"),0<Me.length&&(qt=new ip("onBeforeInput","beforeinput",null,a,ut),mt.push({event:qt,listeners:Me}),qt.data=he)),jS(mt,e,J,a,ut)}Y_(mt,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ir(e,a),u!=null&&r.unshift(vo(e,u,f)),u=Ir(e,n),u!=null&&r.push(vo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function JS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Z_(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var T=a,F=T.alternate,J=T.stateNode;if(T=T.tag,F!==null&&F===r)break;T!==5&&T!==26&&T!==27||J===null||(F=J,u?(J=Ir(a,f),J!=null&&v.unshift(vo(a,J,F))):u||(J=Ir(a,f),J!=null&&v.push(vo(a,J,F)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var $S=/\r\n?/g,tx=/\u0000|\uFFFD/g;function K_(e){return(typeof e=="string"?e:""+e).replace($S,`
`).replace(tx,"")}function Q_(e,n){return n=K_(n),K_(e)===n}function He(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Us(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Us(e,""+r);break;case"className":Ne(e,"class",r);break;case"tabIndex":Ne(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,a,r);break;case"style":Qd(e,r,f);break;case"data":if(n!=="object"){Ne(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Zo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Zo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Fi);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Zo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ve("beforetoggle",e),ve("toggle",e),ke(e,"popover",r);break;case"xlinkActuate":_e(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":_e(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":_e(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":_e(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":_e(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":_e(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":_e(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":_e(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":_e(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ke(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Cv.get(a)||a,ke(e,a,r))}}function zf(e,n,a,r,u,f){switch(a){case"style":Qd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Us(e,r):(typeof r=="number"||typeof r=="bigint")&&Us(e,""+r);break;case"onScroll":r!=null&&ve("scroll",e);break;case"onScrollEnd":r!=null&&ve("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Sn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ke(e,a,r)}}}function Tn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,f,v,a,null)}}u&&He(e,n,"srcSet",a.srcSet,a,null),r&&He(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=v=u=null,F=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":u=ut;break;case"type":v=ut;break;case"checked":F=ut;break;case"defaultChecked":J=ut;break;case"value":f=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:He(e,n,r,ut,a,null)}}Ln(e,f,T,F,J,v,u,!1);return;case"select":ve("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:He(e,n,u,T,a,null)}n=f,a=v,e.multiple=!!r,n!=null?tn(e,!!r,n,!1):a!=null&&tn(e,!!r,a,!0);return;case"textarea":ve("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:He(e,n,v,T,a,null)}Ai(e,r,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(r=a[F],r!=null))switch(F){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:He(e,n,F,r,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(r=0;r<go.length;r++)ve(go[r],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:He(e,n,J,r,a,null)}return;default:if(Zc(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&zf(e,n,ut,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&He(e,n,T,r,a,null))}function ex(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,F=null,J=null,ut=null;for(rt in a){var mt=a[rt];if(a.hasOwnProperty(rt)&&mt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":F=mt;default:r.hasOwnProperty(rt)||He(e,n,rt,null,r,mt)}}for(var et in r){var rt=r[et];if(mt=a[et],r.hasOwnProperty(et)&&(rt!=null||mt!=null))switch(et){case"type":f=rt;break;case"name":u=rt;break;case"checked":J=rt;break;case"defaultChecked":ut=rt;break;case"value":v=rt;break;case"defaultValue":T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==mt&&He(e,n,et,rt,r,mt)}}An(e,v,T,F,J,ut,f,u);return;case"select":rt=v=T=et=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":rt=F;default:r.hasOwnProperty(f)||He(e,n,f,null,r,F)}for(u in r)if(f=r[u],F=a[u],r.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":et=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==F&&He(e,n,u,f,r,F)}n=T,a=v,r=rt,et!=null?tn(e,!!a,et,!1):!!r!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":rt=et=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:He(e,n,T,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":et=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&He(e,n,v,u,r,f)}Ds(e,et,rt);return;case"option":for(var Vt in a)if(et=a[Vt],a.hasOwnProperty(Vt)&&et!=null&&!r.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:He(e,n,Vt,null,r,et)}for(F in r)if(et=r[F],rt=a[F],r.hasOwnProperty(F)&&et!==rt&&(et!=null||rt!=null))switch(F){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:He(e,n,F,et,r,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)et=a[ie],a.hasOwnProperty(ie)&&et!=null&&!r.hasOwnProperty(ie)&&He(e,n,ie,null,r,et);for(J in r)if(et=r[J],rt=a[J],r.hasOwnProperty(J)&&et!==rt&&(et!=null||rt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:He(e,n,J,et,r,rt)}return;default:if(Zc(n)){for(var Ge in a)et=a[Ge],a.hasOwnProperty(Ge)&&et!==void 0&&!r.hasOwnProperty(Ge)&&zf(e,n,Ge,void 0,r,et);for(ut in r)et=r[ut],rt=a[ut],!r.hasOwnProperty(ut)||et===rt||et===void 0&&rt===void 0||zf(e,n,ut,et,r,rt);return}}for(var j in a)et=a[j],a.hasOwnProperty(j)&&et!=null&&!r.hasOwnProperty(j)&&He(e,n,j,null,r,et);for(mt in r)et=r[mt],rt=a[mt],!r.hasOwnProperty(mt)||et===rt||et==null&&rt==null||He(e,n,mt,et,r,rt)}function J_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function nx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&J_(v)){for(v=0,T=u.responseEnd,r+=1;r<a.length;r++){var F=a[r],J=F.startTime;if(J>T)break;var ut=F.transferSize,mt=F.initiatorType;ut&&J_(mt)&&(F=F.responseEnd,v+=ut*(F<T?1:(T-J)/(F-J)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bf=null,If=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function $_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ff(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hf=null;function ix(){var e=window.event;return e&&e.type==="popstate"?e===Hf?!1:(Hf=e,!0):(Hf=null,!1)}var eg=typeof setTimeout=="function"?setTimeout:void 0,ax=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,sx=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(e){return ng.resolve(null).then(e).catch(rx)}:eg;function rx(e){setTimeout(function(){throw e})}function Da(e){return e==="head"}function ig(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),lr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")So(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,So(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[ja]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&So(e.ownerDocument.body);a=u}while(a);lr(n)}function ag(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Gf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Gf(a),A(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ox(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function lx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function sg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Vf(e){return e.data==="$?"||e.data==="$~"}function kf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function cx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Xf=null;function rg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function og(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function lg(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);A(e)}var fi=new Map,cg=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=Z.d;Z.d={f:ux,r:fx,D:hx,C:dx,L:px,m:mx,X:gx,S:_x,M:vx};function ux(){var e=ea.f(),n=zl();return e||n}function fx(e){var n=at(e);n!==null&&n.tag===5&&n.type==="form"?Am(n):ea.r(e)}var sr=typeof document>"u"?null:document;function ug(e,n,a){var r=sr;if(r&&typeof n=="string"&&n){var u=xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),cg.has(u)||(cg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Tn(n,"link",e),vt(n),r.head.appendChild(n)))}}function hx(e){ea.D(e),ug("dns-prefetch",e,null)}function dx(e,n){ea.C(e,n),ug("preconnect",e,n)}function px(e,n,a){ea.L(e,n,a);var r=sr;if(r&&e&&n){var u='link[rel="preload"][as="'+xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xe(a.imageSizes)+'"]')):u+='[href="'+xe(e)+'"]';var f=u;switch(n){case"style":f=rr(e);break;case"script":f=or(e)}fi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(xo(f))||n==="script"&&r.querySelector(yo(f))||(n=r.createElement("link"),Tn(n,"link",e),vt(n),r.head.appendChild(n)))}}function mx(e,n){ea.m(e,n);var a=sr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xe(r)+'"][href="'+xe(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=or(e)}if(!fi.has(f)&&(e=g({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}r=a.createElement("link"),Tn(r,"link",e),vt(r),a.head.appendChild(r)}}}function _x(e,n,a){ea.S(e,n,a);var r=sr;if(r&&e){var u=K(r).hoistableStyles,f=rr(e);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(xo(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Wf(e,a);var F=v=r.createElement("link");vt(F),Tn(F,"link",e),F._p=new Promise(function(J,ut){F.onload=J,F.onerror=ut}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ql(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function gx(e,n){ea.X(e,n);var a=sr;if(a&&e){var r=K(a).hoistableScripts,u=or(e),f=r.get(u);f||(f=a.querySelector(yo(u)),f||(e=g({src:e,async:!0},n),(n=fi.get(u))&&qf(e,n),f=a.createElement("script"),vt(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function vx(e,n){ea.M(e,n);var a=sr;if(a&&e){var r=K(a).hoistableScripts,u=or(e),f=r.get(u);f||(f=a.querySelector(yo(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&qf(e,n),f=a.createElement("script"),vt(f),Tn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function fg(e,n,a,r){var u=(u=it.current)?Wl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rr(a.href),a=K(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rr(a.href);var f=K(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(xo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||Sx(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=K(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function rr(e){return'href="'+xe(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function hg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Sx(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Tn(n,"link",a),vt(n),e.head.appendChild(n))}function or(e){return'[src="'+xe(e)+'"]'}function yo(e){return"script[async]"+e}function dg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+xe(a.href)+'"]');if(r)return n.instance=r,vt(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),vt(r),Tn(r,"style",u),ql(r,a.precedence,e),n.instance=r;case"stylesheet":u=rr(a.href);var f=e.querySelector(xo(u));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;r=hg(a),(u=fi.get(u))&&Wf(r,u),f=(e.ownerDocument||e).createElement("link"),vt(f);var v=f;return v._p=new Promise(function(T,F){v.onload=T,v.onerror=F}),Tn(f,"link",r),n.state.loading|=4,ql(f,a.precedence,e),n.instance=f;case"script":return f=or(a.src),(u=e.querySelector(yo(f)))?(n.instance=u,vt(u),u):(r=a,(u=fi.get(f))&&(r=g({},a),qf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),vt(u),Tn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ql(r,a.precedence,e));return n.instance}function ql(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Yl=null;function pg(e,n,a){if(Yl===null){var r=new Map,u=Yl=new Map;u.set(a,r)}else u=Yl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ja]||f[an]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=r.get(v);T?T.push(f):r.set(v,[f])}}return r}function mg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yx(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=rr(r.href),f=n.querySelector(xo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,r=hg(r),(u=fi.get(u))&&Wf(r,u),f=f.createElement("link"),vt(f);var v=f;v._p=new Promise(function(T,F){v.onload=T,v.onerror=F}),Tn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Yf=0;function Mx(e,n){return e.stylesheets&&e.count===0&&Kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Yf===0&&(Yf=62500*nx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Yf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(Ex,e),Zl=null,jl.call(e))}function Ex(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var r=a.get(null);else{a=new Map,Zl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=jl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:U,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Tx(e,n,a,r,u,f,v,T,F){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function gg(e,n,a,r,u,f,v,T,F,J,ut,mt){return e=new Tx(e,n,a,v,F,J,ut,mt,T),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=bu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},wu(f),e}function vg(e){return e?(e=Is,e):Is}function Sg(e,n,a,r,u,f){u=vg(u),r.context===null?r.context=u:r.pendingContext=u,r=Sa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=xa(e,r,n),a!==null&&(Vn(a,e,n),$r(a,e,n))}function xg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){xg(e,n),(e=e.alternate)&&xg(e,n)}function yg(e){if(e.tag===13||e.tag===31){var n=$a(e,67108864);n!==null&&Vn(n,e,67108864),jf(e,67108864)}}function Mg(e){if(e.tag===13||e.tag===31){var n=ti();n=Cs(n);var a=$a(e,n);a!==null&&Vn(a,e,n),jf(e,n)}}var Ql=!0;function bx(e,n,a,r){var u=P.T;P.T=null;var f=Z.p;try{Z.p=2,Zf(e,n,a,r)}finally{Z.p=f,P.T=u}}function Ax(e,n,a,r){var u=P.T;P.T=null;var f=Z.p;try{Z.p=8,Zf(e,n,a,r)}finally{Z.p=f,P.T=u}}function Zf(e,n,a,r){if(Ql){var u=Kf(r);if(u===null)Pf(e,n,r,Jl,a),Tg(e,r);else if(Cx(u,e,n,a,r))r.stopPropagation();else if(Tg(e,r),n&4&&-1<Rx.indexOf(e)){for(;u!==null;){var f=at(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=yt(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var F=1<<31-Ft(v);T.entanglements[1]|=F,v&=~F}Di(f),(Ue&6)===0&&(Ol=E()+500,_o(0))}}break;case 31:case 13:T=$a(f,2),T!==null&&Vn(T,f,2),zl(),jf(f,2)}if(f=Kf(r),f===null&&Pf(e,n,r,Jl,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Pf(e,n,r,null,a)}}function Kf(e){return e=Qc(e),Qf(e)}var Jl=null;function Qf(e){if(Jl=null,e=q(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function Eg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tt()){case ht:return 2;case xt:return 8;case ct:case Qt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Jf=!1,Ua=null,La=null,Na=null,Eo=new Map,To=new Map,Oa=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tg(e,n){switch(e){case"focusin":case"focusout":Ua=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&yg(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Cx(e,n,a,r,u){switch(n){case"focusin":return Ua=bo(Ua,e,n,a,r,u),!0;case"dragenter":return La=bo(La,e,n,a,r,u),!0;case"mouseover":return Na=bo(Na,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Eo.set(f,bo(Eo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,To.set(f,bo(To.get(f)||null,e,n,a,r,u)),!0}return!1}function bg(e){var n=q(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,zr(e.priority,function(){Mg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,zr(e.priority,function(){Mg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Kf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Kc=r,a.target.dispatchEvent(r),Kc=null}else return n=at(a),n!==null&&yg(n),e.blockedOn=a,!1;n.shift()}return!0}function Ag(e,n,a){$l(e)&&a.delete(n)}function wx(){Jf=!1,Ua!==null&&$l(Ua)&&(Ua=null),La!==null&&$l(La)&&(La=null),Na!==null&&$l(Na)&&(Na=null),Eo.forEach(Ag),To.forEach(Ag)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,Jf||(Jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,wx)))}var ec=null;function Rg(e){ec!==e&&(ec=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Qf(r||a)===null)continue;break}var f=at(a);f!==null&&(e.splice(n,3),n-=3,Zu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function lr(e){function n(F){return tc(F,e)}Ua!==null&&tc(Ua,e),La!==null&&tc(La,e),Na!==null&&tc(Na,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Oa.length;a++){var r=Oa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)bg(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[Sn]||null;if(typeof f=="function")v||Rg(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[Sn]||null)T=v.formAction;else if(Qf(u)!==null)continue}else T=v.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),Rg(a)}}}function Cg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function $f(e){this._internalRoot=e}nc.prototype.render=$f.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ti();Sg(a,r,e,n,null,null)},nc.prototype.unmount=$f.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Sg(e.current,2,null,e,null,null),zl(),n[ha]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ya();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Oa.length&&n!==0&&n<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&bg(e)}};var wg=t.version;if(wg!=="19.2.0")throw Error(s(527,wg,"19.2.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Dx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Tt=ic.inject(Dx),wt=ic}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=zm,f=Bm,v=Im;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=gg(e,1,!1,null,null,a,r,null,u,f,v,Cg),e[ha]=n.current,Of(e),new $f(n)},Ro.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=zm,v=Bm,T=Im,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=gg(e,1,!0,n,a??null,r,u,F,f,v,T,Cg),n.context=vg(null),a=n.current,r=ti(),r=Cs(r),u=Sa(r),u.callback=null,xa(a,u,r),a=r,n.current.lanes=a,Un(n,a),Di(n),e[ha]=n.current,Of(e),new nc(n)},Ro.version="19.2.0",Ro}var Fg;function Hx(){if(Fg)return nh.exports;Fg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),nh.exports=Fx(),nh.exports}var Gx=Hx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="180",Ar={ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vx=0,Hg=1,kx=2,W0=1,Xx=2,oa=3,Wa=0,Wn=1,la=2,ua=0,Rr=1,Gg=2,Vg=3,kg=4,Wx=5,Ss=100,qx=101,Yx=102,jx=103,Zx=104,Kx=200,Qx=201,Jx=202,$x=203,Gh=204,Vh=205,ty=206,ey=207,ny=208,iy=209,ay=210,sy=211,ry=212,oy=213,ly=214,kh=0,Xh=1,Wh=2,wr=3,qh=4,Yh=5,jh=6,Zh=7,Ld=0,cy=1,uy=2,Xa=0,q0=1,Y0=2,j0=3,Z0=4,K0=5,Q0=6,J0=7,$0=300,Dr=301,Ur=302,Kh=303,Qh=304,kc=306,Jh=1e3,ys=1001,$h=1002,zn=1003,fy=1004,ac=1005,Li=1006,rh=1007,Ms=1008,Pi=1009,tv=1010,ev=1011,Fo=1012,Nd=1013,Es=1014,ca=1015,qa=1016,Od=1017,Pd=1018,Ho=1020,nv=35902,iv=35899,av=1021,sv=1022,Ti=1023,Go=1026,Vo=1027,rv=1028,zd=1029,ov=1030,Bd=1031,Id=1033,Nc=33776,Oc=33777,Pc=33778,zc=33779,td=35840,ed=35841,nd=35842,id=35843,ad=36196,sd=37492,rd=37496,od=37808,ld=37809,cd=37810,ud=37811,fd=37812,hd=37813,dd=37814,pd=37815,md=37816,_d=37817,gd=37818,vd=37819,Sd=37820,xd=37821,yd=36492,Md=36494,Ed=36495,Td=36283,bd=36284,Ad=36285,Rd=36286,hy=3200,dy=3201,Fd=0,py=1,ka="",di="srgb",Lr="srgb-linear",Ic="linear",Be="srgb",cr=7680,Xg=519,my=512,_y=513,gy=514,lv=515,vy=516,Sy=517,xy=518,yy=519,Wg=35044,qg="300 es",Ni=2e3,Fc=2001;class bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Po=Math.PI/180,Cd=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Se(o,t,i){return Math.max(t,Math.min(i,o))}function My(o,t){return(o%t+t)%t}function oh(o,t,i){return(1-i)*o+i*t}function Co(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ey={DEG2RAD:Po};class se{constructor(t=0,i=0){se.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ts{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],S=s[l+2],g=s[l+3];const x=c[h+0],M=c[h+1],b=c[h+2],R=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=S,t[i+3]=g;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=b,t[i+3]=R;return}if(g!==R||m!==x||p!==M||S!==b){let y=1-d;const _=m*x+p*M+S*b+g*R,L=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const H=Math.sqrt(U),I=Math.atan2(H,_*L);y=Math.sin(y*I)/H,d=Math.sin(d*I)/H}const w=d*L;if(m=m*y+x*w,p=p*y+M*w,S=S*y+b*w,g=g*y+R*w,y===1-d){const H=1/Math.sqrt(m*m+p*p+S*S+g*g);m*=H,p*=H,S*=H,g*=H}}t[i]=m,t[i+1]=p,t[i+2]=S,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],S=s[l+3],g=c[h],x=c[h+1],M=c[h+2],b=c[h+3];return t[i]=d*b+S*g+m*M-p*x,t[i+1]=m*b+S*x+p*g-d*M,t[i+2]=p*b+S*M+d*x-m*g,t[i+3]=S*b-d*g-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),S=d(l/2),g=d(c/2),x=m(s/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=x*S*g+p*M*b,this._y=p*M*g-x*S*b,this._z=p*S*b+x*M*g,this._w=p*S*g-x*M*b;break;case"YXZ":this._x=x*S*g+p*M*b,this._y=p*M*g-x*S*b,this._z=p*S*b-x*M*g,this._w=p*S*g+x*M*b;break;case"ZXY":this._x=x*S*g-p*M*b,this._y=p*M*g+x*S*b,this._z=p*S*b+x*M*g,this._w=p*S*g-x*M*b;break;case"ZYX":this._x=x*S*g-p*M*b,this._y=p*M*g+x*S*b,this._z=p*S*b-x*M*g,this._w=p*S*g+x*M*b;break;case"YZX":this._x=x*S*g+p*M*b,this._y=p*M*g+x*S*b,this._z=p*S*b-x*M*g,this._w=p*S*g-x*M*b;break;case"XZY":this._x=x*S*g-p*M*b,this._y=p*M*g-x*S*b,this._z=p*S*b+x*M*g,this._w=p*S*g+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],g=i[10],x=s+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(S-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(S-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=s*S+h*d+l*p-c*m,this._y=l*S+h*m+c*d-s*p,this._z=c*S+h*p+s*m-l*d,this._w=h*S-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),g=Math.sin((1-i)*S)/p,x=Math.sin(i*S)/p;return this._w=h*g+this._w*x,this._x=s*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,s=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Yg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Yg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),S=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*S,this.y=s+m*S+d*p-c*g,this.z=l+m*g+c*S-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return lh.copy(this).projectOnVector(t),this.sub(lh)}reflect(t){return this.sub(lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Se(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lh=new Y,Yg=new Ts;class de{constructor(t,i,s,l,c,h,d,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const S=this.elements;return S[0]=t,S[1]=l,S[2]=d,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],S=s[4],g=s[7],x=s[2],M=s[5],b=s[8],R=l[0],y=l[3],_=l[6],L=l[1],U=l[4],w=l[7],H=l[2],I=l[5],B=l[8];return c[0]=h*R+d*L+m*H,c[3]=h*y+d*U+m*I,c[6]=h*_+d*w+m*B,c[1]=p*R+S*L+g*H,c[4]=p*y+S*U+g*I,c[7]=p*_+S*w+g*B,c[2]=x*R+M*L+b*H,c[5]=x*y+M*U+b*I,c[8]=x*_+M*w+b*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8];return i*h*S-i*d*p-s*c*S+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8],g=S*h-d*p,x=d*m-S*c,M=p*c-h*m,b=i*g+s*x+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=g*R,t[1]=(l*p-S*s)*R,t[2]=(d*s-l*h)*R,t[3]=x*R,t[4]=(S*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=M*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ch.makeScale(t,i)),this}rotate(t){return this.premultiply(ch.makeRotation(-t)),this}translate(t,i){return this.premultiply(ch.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ch=new de;function cv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Hc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ty(){const o=Hc("canvas");return o.style.display="block",o}const jg={};function ko(o){o in jg||(jg[o]=!0,console.warn(o))}function by(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Zg=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kg=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ay(){const o={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Ic:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ko("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ko("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Lr]:{primaries:t,whitePoint:s,transfer:Ic,toXYZ:Zg,fromXYZ:Kg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:Zg,fromXYZ:Kg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),o}const Ce=Ay();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ur;class Ry{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ur===void 0&&(ur=Hc("canvas")),ur.width=t.width,ur.height=t.height;const l=ur.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ur}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Hc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=fa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(fa(i[s]/255)*255):i[s]=fa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cy=0;class Hd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(uh(l[h].image)):c.push(uh(l[h]))}else c=uh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function uh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ry.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wy=0;const fh=new Y;class qn extends bs{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=ys,l=ys,c=Li,h=Ms,d=Ti,m=Pi,p=qn.DEFAULT_ANISOTROPY,S=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Xo(),this.name="",this.source=new Hd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(fh).x}get height(){return this.source.getSize(fh).y}get depth(){return this.source.getSize(fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jh:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case $h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jh:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case $h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=$0;qn.DEFAULT_ANISOTROPY=1;class Ke{constructor(t=0,i=0,s=0,l=1){Ke.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],S=m[4],g=m[8],x=m[1],M=m[5],b=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(S-x)<.01&&Math.abs(g-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(S+x)<.1&&Math.abs(g+R)<.1&&Math.abs(b+y)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,w=(M+1)/2,H=(_+1)/2,I=(S+x)/4,B=(g+R)/4,k=(b+y)/4;return U>w&&U>H?U<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(U),l=I/s,c=B/s):w>H?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=I/l,c=k/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=B/c,l=k/c),this.set(s,l,c,i),this}let L=Math.sqrt((y-b)*(y-b)+(g-R)*(g-R)+(x-S)*(x-S));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(g-R)/L,this.z=(x-S)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Se(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dy extends bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Ke(0,0,t,i),this.scissorTest=!1,this.viewport=new Ke(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new qn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Li,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Hd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends Dy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class uv extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Uy extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=zn,this.minFilter=zn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,yi):yi.fromBufferAttribute(c,h),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),rc.subVectors(this.max,wo),fr.subVectors(t.a,wo),hr.subVectors(t.b,wo),dr.subVectors(t.c,wo),za.subVectors(hr,fr),Ba.subVectors(dr,hr),hs.subVectors(fr,dr);let i=[0,-za.z,za.y,0,-Ba.z,Ba.y,0,-hs.z,hs.y,za.z,0,-za.x,Ba.z,0,-Ba.x,hs.z,0,-hs.x,-za.y,za.x,0,-Ba.y,Ba.x,0,-hs.y,hs.x,0];return!hh(i,fr,hr,dr,rc)||(i=[1,0,0,0,1,0,0,0,1],!hh(i,fr,hr,dr,rc))?!1:(oc.crossVectors(za,Ba),i=[oc.x,oc.y,oc.z],hh(i,fr,hr,dr,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const na=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],yi=new Y,sc=new Wo,fr=new Y,hr=new Y,dr=new Y,za=new Y,Ba=new Y,hs=new Y,wo=new Y,rc=new Y,oc=new Y,ds=new Y;function hh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){ds.fromArray(o,c);const d=l.x*Math.abs(ds.x)+l.y*Math.abs(ds.y)+l.z*Math.abs(ds.z),m=t.dot(ds),p=i.dot(ds),S=s.dot(ds);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const Ly=new Wo,Do=new Y,dh=new Y;class Xc{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ly.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Do,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(dh)),this.expandByPoint(Do.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ia=new Y,ph=new Y,lc=new Y,Ia=new Y,mh=new Y,cc=new Y,_h=new Y;class Gd{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ph.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Ia.copy(this.origin).sub(ph);const c=t.distanceTo(i)*.5,h=-this.direction.dot(lc),d=Ia.dot(this.direction),m=-Ia.dot(lc),p=Ia.lengthSq(),S=Math.abs(1-h*h);let g,x,M,b;if(S>0)if(g=h*m-d,x=h*d-m,b=c*S,g>=0)if(x>=-b)if(x<=b){const R=1/S;g*=R,x*=R,M=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=c,g=Math.max(0,-(h*x+d)),M=-g*g+x*(x+2*m)+p;else x=-c,g=Math.max(0,-(h*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-h*c+d)),x=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(g=Math.max(0,-(h*c+d)),x=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+x*(x+2*m)+p);else x=h>0?-c:c,g=Math.max(0,-(h*x+d)),M=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ph).addScaledVector(lc,x),M}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const s=ia.dot(this.direction),l=ia.dot(ia)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),S>=0?(c=(t.min.y-x.y)*S,h=(t.max.y-x.y)*S):(c=(t.max.y-x.y)*S,h=(t.min.y-x.y)*S),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,s,l,c){mh.subVectors(i,t),cc.subVectors(s,t),_h.crossVectors(mh,cc);let h=this.direction.dot(_h),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ia.subVectors(this.origin,t);const m=d*this.direction.dot(cc.crossVectors(Ia,cc));if(m<0)return null;const p=d*this.direction.dot(mh.cross(Ia));if(p<0||m+p>h)return null;const S=-d*Ia.dot(_h);return S<0?null:this.at(S/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,i,s,l,c,h,d,m,p,S,g,x,M,b,R,y){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,S,g,x,M,b,R,y)}set(t,i,s,l,c,h,d,m,p,S,g,x,M,b,R,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=S,_[10]=g,_[14]=x,_[3]=M,_[7]=b,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/pr.setFromMatrixColumn(t,0).length(),c=1/pr.setFromMatrixColumn(t,1).length(),h=1/pr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const x=h*S,M=h*g,b=d*S,R=d*g;i[0]=m*S,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=x-R*p,i[9]=-d*m,i[2]=R-x*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*S,M=m*g,b=p*S,R=p*g;i[0]=x+R*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*S,i[9]=-d,i[2]=M*d-b,i[6]=R+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*S,M=m*g,b=p*S,R=p*g;i[0]=x-R*d,i[4]=-h*g,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*S,i[9]=R-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*S,M=h*g,b=d*S,R=d*g;i[0]=m*S,i[4]=b*p-M,i[8]=x*p+R,i[1]=m*g,i[5]=R*p+x,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*S,i[4]=R-x*g,i[8]=b*g+M,i[1]=g,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*g+b,i[10]=x-R*g}else if(t.order==="XZY"){const x=h*m,M=h*p,b=d*m,R=d*p;i[0]=m*S,i[4]=-g,i[8]=p*S,i[1]=x*g+R,i[5]=h*S,i[9]=M*g-b,i[2]=b*g-M,i[6]=d*S,i[10]=R*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ny,t,Oy)}lookAt(t,i,s){const l=this.elements;return ei.subVectors(t,i),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Fa.crossVectors(s,ei),Fa.lengthSq()===0&&(Math.abs(s.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Fa.crossVectors(s,ei)),Fa.normalize(),uc.crossVectors(ei,Fa),l[0]=Fa.x,l[4]=uc.x,l[8]=ei.x,l[1]=Fa.y,l[5]=uc.y,l[9]=ei.y,l[2]=Fa.z,l[6]=uc.z,l[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],S=s[1],g=s[5],x=s[9],M=s[13],b=s[2],R=s[6],y=s[10],_=s[14],L=s[3],U=s[7],w=s[11],H=s[15],I=l[0],B=l[4],k=l[8],D=l[12],C=l[1],G=l[5],$=l[9],ot=l[13],pt=l[2],ft=l[6],P=l[10],Z=l[14],W=l[3],St=l[7],Mt=l[11],z=l[15];return c[0]=h*I+d*C+m*pt+p*W,c[4]=h*B+d*G+m*ft+p*St,c[8]=h*k+d*$+m*P+p*Mt,c[12]=h*D+d*ot+m*Z+p*z,c[1]=S*I+g*C+x*pt+M*W,c[5]=S*B+g*G+x*ft+M*St,c[9]=S*k+g*$+x*P+M*Mt,c[13]=S*D+g*ot+x*Z+M*z,c[2]=b*I+R*C+y*pt+_*W,c[6]=b*B+R*G+y*ft+_*St,c[10]=b*k+R*$+y*P+_*Mt,c[14]=b*D+R*ot+y*Z+_*z,c[3]=L*I+U*C+w*pt+H*W,c[7]=L*B+U*G+w*ft+H*St,c[11]=L*k+U*$+w*P+H*Mt,c[15]=L*D+U*ot+w*Z+H*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],S=t[2],g=t[6],x=t[10],M=t[14],b=t[3],R=t[7],y=t[11],_=t[15];return b*(+c*m*g-l*p*g-c*d*x+s*p*x+l*d*M-s*m*M)+R*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*S-c*m*S)+y*(+i*p*g-i*d*M-c*h*g+s*h*M+c*d*S-s*p*S)+_*(-l*d*S-i*m*g+i*d*x+l*h*g-s*h*x+s*m*S)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8],g=t[9],x=t[10],M=t[11],b=t[12],R=t[13],y=t[14],_=t[15],L=g*y*p-R*x*p+R*m*M-d*y*M-g*m*_+d*x*_,U=b*x*p-S*y*p-b*m*M+h*y*M+S*m*_-h*x*_,w=S*R*p-b*g*p+b*d*M-h*R*M-S*d*_+h*g*_,H=b*g*m-S*R*m-b*d*x+h*R*x+S*d*y-h*g*y,I=i*L+s*U+l*w+c*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return t[0]=L*B,t[1]=(R*x*c-g*y*c-R*l*M+s*y*M+g*l*_-s*x*_)*B,t[2]=(d*y*c-R*m*c+R*l*p-s*y*p-d*l*_+s*m*_)*B,t[3]=(g*m*c-d*x*c-g*l*p+s*x*p+d*l*M-s*m*M)*B,t[4]=U*B,t[5]=(S*y*c-b*x*c+b*l*M-i*y*M-S*l*_+i*x*_)*B,t[6]=(b*m*c-h*y*c-b*l*p+i*y*p+h*l*_-i*m*_)*B,t[7]=(h*x*c-S*m*c+S*l*p-i*x*p-h*l*M+i*m*M)*B,t[8]=w*B,t[9]=(b*g*c-S*R*c-b*s*M+i*R*M+S*s*_-i*g*_)*B,t[10]=(h*R*c-b*d*c+b*s*p-i*R*p-h*s*_+i*d*_)*B,t[11]=(S*d*c-h*g*c-S*s*p+i*g*p+h*s*M-i*d*M)*B,t[12]=H*B,t[13]=(S*R*l-b*g*l+b*s*x-i*R*x-S*s*y+i*g*y)*B,t[14]=(b*d*l-h*R*l-b*s*m+i*R*m+h*s*y-i*d*y)*B,t[15]=(h*g*l-S*d*l+S*s*m-i*g*m-h*s*x+i*d*x)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,S=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+s,S*m-l*h,0,p*m-l*d,S*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,S=h+h,g=d+d,x=c*p,M=c*S,b=c*g,R=h*S,y=h*g,_=d*g,L=m*p,U=m*S,w=m*g,H=s.x,I=s.y,B=s.z;return l[0]=(1-(R+_))*H,l[1]=(M+w)*H,l[2]=(b-U)*H,l[3]=0,l[4]=(M-w)*I,l[5]=(1-(x+_))*I,l[6]=(y+L)*I,l[7]=0,l[8]=(b+U)*B,l[9]=(y-L)*B,l[10]=(1-(x+R))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=pr.set(l[0],l[1],l[2]).length();const h=pr.set(l[4],l[5],l[6]).length(),d=pr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const p=1/c,S=1/h,g=1/d;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=S,Mi.elements[5]*=S,Mi.elements[6]*=S,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,i.setFromRotationMatrix(Mi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Ni,m=!1){const p=this.elements,S=2*c/(i-t),g=2*c/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let b,R;if(m)b=c/(h-c),R=h*c/(h-c);else if(d===Ni)b=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Fc)b=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ni,m=!1){const p=this.elements,S=2/(i-t),g=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,R;if(m)b=1/(h-c),R=h/(h-c);else if(d===Ni)b=-2/(h-c),R=-(h+c)/(h-c);else if(d===Fc)b=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const pr=new Y,Mi=new $e,Ny=new Y(0,0,0),Oy=new Y(1,1,1),Fa=new Y,uc=new Y,ei=new Y,Qg=new $e,Jg=new Ts;class Bi{constructor(t=0,i=0,s=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Qg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Jg.setFromEuler(this),this.setFromQuaternion(Jg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class fv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Py=0;const $g=new Y,mr=new Ts,aa=new $e,fc=new Y,Uo=new Y,zy=new Y,By=new Ts,t0=new Y(1,0,0),e0=new Y(0,1,0),n0=new Y(0,0,1),i0={type:"added"},Iy={type:"removed"},_r={type:"childadded",child:null},gh={type:"childremoved",child:null};class bn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const t=new Y,i=new Bi,s=new Ts,l=new Y(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $e},normalMatrix:{value:new de}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(t0,t)}rotateY(t){return this.rotateOnAxis(e0,t)}rotateZ(t){return this.rotateOnAxis(n0,t)}translateOnAxis(t,i){return $g.copy(t).applyQuaternion(this.quaternion),this.position.add($g.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(t0,t)}translateY(t){return this.translateOnAxis(e0,t)}translateZ(t){return this.translateOnAxis(n0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?fc.copy(t):fc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Uo,fc,this.up):aa.lookAt(fc,Uo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),mr.setFromRotationMatrix(aa),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(i0),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Iy),gh.child=t,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(i0),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,zy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,By,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),S=h(t.images),g=h(t.shapes),x=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}bn.DEFAULT_UP=new Y(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ei=new Y,sa=new Y,vh=new Y,ra=new Y,gr=new Y,vr=new Y,a0=new Y,Sh=new Y,xh=new Y,yh=new Y,Mh=new Ke,Eh=new Ke,Th=new Ke;class mi{constructor(t=new Y,i=new Y,s=new Y){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ei.subVectors(t,i),l.cross(Ei);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ei.subVectors(l,i),sa.subVectors(s,i),vh.subVectors(t,i);const h=Ei.dot(Ei),d=Ei.dot(sa),m=Ei.dot(vh),p=sa.dot(sa),S=sa.dot(vh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,M=(p*m-d*S)*x,b=(h*S-d*m)*x;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ra.x),m.addScaledVector(h,ra.y),m.addScaledVector(d,ra.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Mh.setScalar(0),Eh.setScalar(0),Th.setScalar(0),Mh.fromBufferAttribute(t,i),Eh.fromBufferAttribute(t,s),Th.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Mh,c.x),h.addScaledVector(Eh,c.y),h.addScaledVector(Th,c.z),h}static isFrontFacing(t,i,s,l){return Ei.subVectors(s,i),sa.subVectors(t,i),Ei.cross(sa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ei.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Ei.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;gr.subVectors(l,s),vr.subVectors(c,s),Sh.subVectors(t,s);const m=gr.dot(Sh),p=vr.dot(Sh);if(m<=0&&p<=0)return i.copy(s);xh.subVectors(t,l);const S=gr.dot(xh),g=vr.dot(xh);if(S>=0&&g<=S)return i.copy(l);const x=m*g-S*p;if(x<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(s).addScaledVector(gr,h);yh.subVectors(t,c);const M=gr.dot(yh),b=vr.dot(yh);if(b>=0&&M<=b)return i.copy(c);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(vr,d);const y=S*b-M*g;if(y<=0&&g-S>=0&&M-b>=0)return a0.subVectors(c,l),d=(g-S)/(g-S+(M-b)),i.copy(l).addScaledVector(a0,d);const _=1/(y+R+x);return h=R*_,d=x*_,i.copy(s).addScaledVector(gr,h).addScaledVector(vr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ha={h:0,s:0,l:0},hc={h:0,s:0,l:0};function bh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Re{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ce.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ce.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ce.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ce.workingColorSpace){if(t=My(t,1),i=Se(i,0,1),s=Se(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=bh(h,c,t+1/3),this.g=bh(h,c,t),this.b=bh(h,c,t-1/3)}return Ce.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const s=hv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Ce.workingToColorSpace(wn.copy(this),t),Math.round(Se(wn.r*255,0,255))*65536+Math.round(Se(wn.g*255,0,255))*256+Math.round(Se(wn.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ce.workingColorSpace){Ce.workingToColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,c=wn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=S<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=S,t}getRGB(t,i=Ce.workingColorSpace){return Ce.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=di){Ce.workingToColorSpace(wn.copy(this),t);const i=wn.r,s=wn.g,l=wn.b;return t!==di?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ha),this.setHSL(Ha.h+t,Ha.s+i,Ha.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ha),t.getHSL(hc);const s=oh(Ha.h,hc.h,i),l=oh(Ha.s,hc.s,i),c=oh(Ha.l,hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Re;Re.NAMES=hv;let Fy=0;class As extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Rr,this.side=Wa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Vh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==Wa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Gh&&(s.blendSrc=this.blendSrc),this.blendDst!==Vh&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zo extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new Y,dc=new se;let Hy=0;class Oi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Wg,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Co(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wg&&(t.usage=this.usage),t}}class dv extends Oi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class pv extends Oi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class vn extends Oi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Gy=0;const hi=new $e,Ah=new bn,Sr=new Y,ni=new Wo,Lo=new Wo,gn=new Y;class gi extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cv(t)?pv:dv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,s){return hi.makeTranslation(t,i,s),this.applyMatrix4(hi),this}scale(t,i,s){return hi.makeScale(t,i,s),this.applyMatrix4(hi),this}lookAt(t){return Ah.lookAt(t),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(gn.addVectors(ni.min,Lo.min),ni.expandByPoint(gn),gn.addVectors(ni.max,Lo.max),ni.expandByPoint(gn)):(ni.expandByPoint(Lo.min),ni.expandByPoint(Lo.max))}ni.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)gn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(gn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)gn.fromBufferAttribute(d,p),m&&(Sr.fromBufferAttribute(t,p),gn.add(Sr)),l=Math.max(l,s.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let k=0;k<s.count;k++)d[k]=new Y,m[k]=new Y;const p=new Y,S=new Y,g=new Y,x=new se,M=new se,b=new se,R=new Y,y=new Y;function _(k,D,C){p.fromBufferAttribute(s,k),S.fromBufferAttribute(s,D),g.fromBufferAttribute(s,C),x.fromBufferAttribute(c,k),M.fromBufferAttribute(c,D),b.fromBufferAttribute(c,C),S.sub(p),g.sub(p),M.sub(x),b.sub(x);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(R.copy(S).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(G),y.copy(g).multiplyScalar(M.x).addScaledVector(S,-b.x).multiplyScalar(G),d[k].add(R),d[D].add(R),d[C].add(R),m[k].add(y),m[D].add(y),m[C].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let k=0,D=L.length;k<D;++k){const C=L[k],G=C.start,$=C.count;for(let ot=G,pt=G+$;ot<pt;ot+=3)_(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const U=new Y,w=new Y,H=new Y,I=new Y;function B(k){H.fromBufferAttribute(l,k),I.copy(H);const D=d[k];U.copy(D),U.sub(H.multiplyScalar(H.dot(D))).normalize(),w.crossVectors(I,D);const G=w.dot(m[k])<0?-1:1;h.setXYZW(k,U.x,U.y,U.z,G)}for(let k=0,D=L.length;k<D;++k){const C=L[k],G=C.start,$=C.count;for(let ot=G,pt=G+$;ot<pt;ot+=3)B(t.getX(ot+0)),B(t.getX(ot+1)),B(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Oi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new Y,c=new Y,h=new Y,d=new Y,m=new Y,p=new Y,S=new Y,g=new Y;if(t)for(let x=0,M=t.count;x<M;x+=3){const b=t.getX(x+0),R=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),S.subVectors(h,c),g.subVectors(l,c),S.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,y),d.add(S),m.add(S),p.add(S),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,c),g.subVectors(l,c),S.cross(g),s.setXYZ(x+0,S.x,S.y,S.z),s.setXYZ(x+1,S.x,S.y,S.z),s.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)gn.fromBufferAttribute(t,i),gn.normalize(),t.setXYZ(i,gn.x,gn.y,gn.z)}toNonIndexed(){function t(d,m){const p=d.array,S=d.itemSize,g=d.normalized,x=new p.constructor(m.length*S);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*S;for(let _=0;_<S;_++)x[b++]=p[M++]}return new Oi(x,S,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new gi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let S=0,g=p.length;S<g;S++){const x=p[S],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];S.push(M.toJSON(t.data))}S.length>0&&(l[m]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=t.morphAttributes;for(const p in c){const S=[],g=c[p];for(let x=0,M=g.length;x<M;x++)S.push(g[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,S=h.length;p<S;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s0=new $e,ps=new Gd,pc=new Xc,r0=new Y,mc=new Y,_c=new Y,gc=new Y,Rh=new Y,vc=new Y,o0=new Y,Sc=new Y;class Dn extends bn{constructor(t=new gi,i=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=d[m],g=c[m];S!==0&&(Rh.fromBufferAttribute(g,t),h?vc.addScaledVector(Rh,S):vc.addScaledVector(Rh.sub(i),S))}i.add(vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(c),ps.copy(t.ray).recast(t.near),!(pc.containsPoint(ps.origin)===!1&&(ps.intersectSphere(pc,r0)===null||ps.origin.distanceToSquared(r0)>(t.far-t.near)**2))&&(s0.copy(c).invert(),ps.copy(t.ray).applyMatrix4(s0),!(s.boundingBox!==null&&ps.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ps)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,g=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],_=h[y.materialIndex],L=Math.max(y.start,M.start),U=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=L,H=U;w<H;w+=3){const I=d.getX(w),B=d.getX(w+1),k=d.getX(w+2);l=xc(this,_,t,s,p,S,g,I,B,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const L=d.getX(y),U=d.getX(y+1),w=d.getX(y+2);l=xc(this,h,t,s,p,S,g,L,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],_=h[y.materialIndex],L=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let w=L,H=U;w<H;w+=3){const I=w,B=w+1,k=w+2;l=xc(this,_,t,s,p,S,g,I,B,k),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,_=R;y<_;y+=3){const L=y,U=y+1,w=y+2;l=xc(this,h,t,s,p,S,g,L,U,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Vy(o,t,i,s,l,c,h,d){let m;if(t.side===Wn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Wa,d),m===null)return null;Sc.copy(d),Sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:o}}function xc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,mc),o.getVertexPosition(m,_c),o.getVertexPosition(p,gc);const S=Vy(o,t,i,s,mc,_c,gc,o0);if(S){const g=new Y;mi.getBarycoord(o0,mc,_c,gc,g),l&&(S.uv=mi.getInterpolatedAttribute(l,d,m,p,g,new se)),c&&(S.uv1=mi.getInterpolatedAttribute(c,d,m,p,g,new se)),h&&(S.normal=mi.getInterpolatedAttribute(h,d,m,p,g,new Y),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new Y,materialIndex:0};mi.getNormal(mc,_c,gc,x.normal),S.face=x,S.barycoord=g}return S}class qo extends gi{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],S=[],g=[];let x=0,M=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new vn(p,3)),this.setAttribute("normal",new vn(S,3)),this.setAttribute("uv",new vn(g,2));function b(R,y,_,L,U,w,H,I,B,k,D){const C=w/B,G=H/k,$=w/2,ot=H/2,pt=I/2,ft=B+1,P=k+1;let Z=0,W=0;const St=new Y;for(let Mt=0;Mt<P;Mt++){const z=Mt*G-ot;for(let nt=0;nt<ft;nt++){const gt=nt*C-$;St[R]=gt*L,St[y]=z*U,St[_]=pt,p.push(St.x,St.y,St.z),St[R]=0,St[y]=0,St[_]=I>0?1:-1,S.push(St.x,St.y,St.z),g.push(nt/B),g.push(1-Mt/k),Z+=1}}for(let Mt=0;Mt<k;Mt++)for(let z=0;z<B;z++){const nt=x+z+ft*Mt,gt=x+z+ft*(Mt+1),At=x+(z+1)+ft*(Mt+1),Lt=x+(z+1)+ft*Mt;m.push(nt,gt,Lt),m.push(gt,At,Lt),W+=6}d.addGroup(M,W,D),M+=W,x+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(o){const t={};for(let i=0;i<o.length;i++){const s=Nr(o[i]);for(const l in s)t[l]=s[l]}return t}function ky(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function mv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ce.workingColorSpace}const Vd={clone:Nr,merge:Pn};var Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=Wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=ky(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class _v extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ga=new Y,l0=new se,c0=new se;class pi extends _v{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Cd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cd*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ga.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z),Ga.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ga.x,Ga.y).multiplyScalar(-t/Ga.z)}getViewSize(t,i){return this.getViewBounds(t,l0,c0),i.subVectors(c0,l0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Po*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xr=-90,yr=1;class qy extends bn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(xr,yr,t,i);l.layers=this.layers,this.add(l);const c=new pi(xr,yr,t,i);c.layers=this.layers,this.add(c);const h=new pi(xr,yr,t,i);h.layers=this.layers,this.add(h);const d=new pi(xr,yr,t,i);d.layers=this.layers,this.add(d);const m=new pi(xr,yr,t,i);m.layers=this.layers,this.add(m);const p=new pi(xr,yr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ni)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Fc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,S]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,S),t.setRenderTarget(g,x,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class gv extends qn{constructor(t=[],i=Dr,s,l,c,h,d,m,p,S){super(t,i,s,l,c,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yy extends zi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new gv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new qo(5,5,5),c=new _i({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ua});c.uniforms.tEquirect.value=i;const h=new Dn(l,c),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=Li),new qy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class yc extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jy={type:"move"};class Ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,s),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const S=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=S.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&x>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(jy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new yc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Zy extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wh=new Y,Ky=new Y,Qy=new de;class Va{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=wh.subVectors(s,i).cross(Ky.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(wh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Qy.getNormalMatrix(t),l=this.coplanarPoint(wh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Xc,Jy=new se(.5,.5),Mc=new Y;class kd{constructor(t=new Va,i=new Va,s=new Va,l=new Va,c=new Va,h=new Va){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ni,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],S=c[4],g=c[5],x=c[6],M=c[7],b=c[8],R=c[9],y=c[10],_=c[11],L=c[12],U=c[13],w=c[14],H=c[15];if(l[0].setComponents(p-h,M-S,_-b,H-L).normalize(),l[1].setComponents(p+h,M+S,_+b,H+L).normalize(),l[2].setComponents(p+d,M+g,_+R,H+U).normalize(),l[3].setComponents(p-d,M-g,_-R,H-U).normalize(),s)l[4].setComponents(m,x,y,w).normalize(),l[5].setComponents(p-m,M-x,_-y,H-w).normalize();else if(l[4].setComponents(p-m,M-x,_-y,H-w).normalize(),i===Ni)l[5].setComponents(p+m,M+x,_+y,H+w).normalize();else if(i===Fc)l[5].setComponents(m,x,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ms.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(t){ms.center.set(0,0,0);const i=Jy.distanceTo(t.center);return ms.radius=.7071067811865476+i,ms.applyMatrix4(t.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vv extends As{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gc=new Y,Vc=new Y,u0=new $e,No=new Gd,Ec=new Xc,Dh=new Y,f0=new Y;class $y extends bn{constructor(t=new gi,i=new vv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Gc.fromBufferAttribute(i,l-1),Vc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Gc.distanceTo(Vc);t.setAttribute("lineDistance",new vn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=c,t.ray.intersectsSphere(Ec)===!1)return;u0.copy(l).invert(),No.copy(t.ray).applyMatrix4(u0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=s.index,x=s.attributes.position;if(S!==null){const M=Math.max(0,h.start),b=Math.min(S.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=p){const _=S.getX(R),L=S.getX(R+1),U=Tc(this,t,No,m,_,L,R);U&&i.push(U)}if(this.isLineLoop){const R=S.getX(b-1),y=S.getX(M),_=Tc(this,t,No,m,R,y,b-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),b=Math.min(x.count,h.start+h.count);for(let R=M,y=b-1;R<y;R+=p){const _=Tc(this,t,No,m,R,R+1,R);_&&i.push(_)}if(this.isLineLoop){const R=Tc(this,t,No,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Tc(o,t,i,s,l,c,h){const d=o.geometry.attributes.position;if(Gc.fromBufferAttribute(d,l),Vc.fromBufferAttribute(d,c),i.distanceSqToSegment(Gc,Vc,Dh,f0)>s)return;Dh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Dh);if(!(p<t.near||p>t.far))return{distance:p,point:f0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const h0=new Y,d0=new Y;class tM extends $y{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)h0.fromBufferAttribute(i,l),d0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+h0.distanceTo(d0);t.setAttribute("lineDistance",new vn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xd extends qn{constructor(t,i,s=Es,l,c,h,d=zn,m=zn,p,S=Go,g=1){if(S!==Go&&S!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,c,h,d,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Sv extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wd extends gi{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),S(),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(c.slice(),3)),this.setAttribute("uv",new vn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(L){const U=new Y,w=new Y,H=new Y;for(let I=0;I<i.length;I+=3)M(i[I+0],U),M(i[I+1],w),M(i[I+2],H),m(U,w,H,L)}function m(L,U,w,H){const I=H+1,B=[];for(let k=0;k<=I;k++){B[k]=[];const D=L.clone().lerp(w,k/I),C=U.clone().lerp(w,k/I),G=I-k;for(let $=0;$<=G;$++)$===0&&k===I?B[k][$]=D:B[k][$]=D.clone().lerp(C,$/G)}for(let k=0;k<I;k++)for(let D=0;D<2*(I-k)-1;D++){const C=Math.floor(D/2);D%2===0?(x(B[k][C+1]),x(B[k+1][C]),x(B[k][C])):(x(B[k][C+1]),x(B[k+1][C+1]),x(B[k+1][C]))}}function p(L){const U=new Y;for(let w=0;w<c.length;w+=3)U.x=c[w+0],U.y=c[w+1],U.z=c[w+2],U.normalize().multiplyScalar(L),c[w+0]=U.x,c[w+1]=U.y,c[w+2]=U.z}function S(){const L=new Y;for(let U=0;U<c.length;U+=3){L.x=c[U+0],L.y=c[U+1],L.z=c[U+2];const w=y(L)/2/Math.PI+.5,H=_(L)/Math.PI+.5;h.push(w,1-H)}b(),g()}function g(){for(let L=0;L<h.length;L+=6){const U=h[L+0],w=h[L+2],H=h[L+4],I=Math.max(U,w,H),B=Math.min(U,w,H);I>.9&&B<.1&&(U<.2&&(h[L+0]+=1),w<.2&&(h[L+2]+=1),H<.2&&(h[L+4]+=1))}}function x(L){c.push(L.x,L.y,L.z)}function M(L,U){const w=L*3;U.x=t[w+0],U.y=t[w+1],U.z=t[w+2]}function b(){const L=new Y,U=new Y,w=new Y,H=new Y,I=new se,B=new se,k=new se;for(let D=0,C=0;D<c.length;D+=9,C+=6){L.set(c[D+0],c[D+1],c[D+2]),U.set(c[D+3],c[D+4],c[D+5]),w.set(c[D+6],c[D+7],c[D+8]),I.set(h[C+0],h[C+1]),B.set(h[C+2],h[C+3]),k.set(h[C+4],h[C+5]),H.copy(L).add(U).add(w).divideScalar(3);const G=y(H);R(I,C+0,L,G),R(B,C+2,U,G),R(k,C+4,w,G)}}function R(L,U,w,H){H<0&&L.x===1&&(h[U]=L.x-1),w.x===0&&w.z===0&&(h[U]=H/2/Math.PI+.5)}function y(L){return Math.atan2(L.z,-L.x)}function _(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wd(t.vertices,t.indices,t.radius,t.details)}}const bc=new Y,Ac=new Y,Uh=new Y,Rc=new mi;class eM extends gi{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Po*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],S=["a","b","c"],g=new Array(3),x={},M=[];for(let b=0;b<m;b+=3){h?(p[0]=h.getX(b),p[1]=h.getX(b+1),p[2]=h.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:R,b:y,c:_}=Rc;if(R.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),_.fromBufferAttribute(d,p[2]),Rc.getNormal(Uh),g[0]=`${Math.round(R.x*l)},${Math.round(R.y*l)},${Math.round(R.z*l)}`,g[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,g[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let L=0;L<3;L++){const U=(L+1)%3,w=g[L],H=g[U],I=Rc[S[L]],B=Rc[S[U]],k=`${w}_${H}`,D=`${H}_${w}`;D in x&&x[D]?(Uh.dot(x[D].normal)<=c&&(M.push(I.x,I.y,I.z),M.push(B.x,B.y,B.z)),x[D]=null):k in x||(x[k]={index0:p[L],index1:p[U],normal:Uh.clone()})}}for(const b in x)if(x[b]){const{index0:R,index1:y}=x[b];bc.fromBufferAttribute(d,R),Ac.fromBufferAttribute(d,y),M.push(bc.x,bc.y,bc.z),M.push(Ac.x,Ac.y,Ac.z)}this.setAttribute("position",new vn(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Bo extends Wd{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Bo(t.radius,t.detail)}}class Wc extends gi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,S=m+1,g=t/d,x=i/m,M=[],b=[],R=[],y=[];for(let _=0;_<S;_++){const L=_*x-h;for(let U=0;U<p;U++){const w=U*g-c;b.push(w,-L,0),R.push(0,0,1),y.push(U/d),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<d;L++){const U=L+p*_,w=L+p*(_+1),H=L+1+p*(_+1),I=L+1+p*_;M.push(U,w,I),M.push(w,H,I)}this.setIndex(M),this.setAttribute("position",new vn(b,3)),this.setAttribute("normal",new vn(R,3)),this.setAttribute("uv",new vn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Io extends gi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const S=[],g=new Y,x=new Y,M=[],b=[],R=[],y=[];for(let _=0;_<=s;_++){const L=[],U=_/s;let w=0;_===0&&h===0?w=.5/i:_===s&&m===Math.PI&&(w=-.5/i);for(let H=0;H<=i;H++){const I=H/i;g.x=-t*Math.cos(l+I*c)*Math.sin(h+U*d),g.y=t*Math.cos(h+U*d),g.z=t*Math.sin(l+I*c)*Math.sin(h+U*d),b.push(g.x,g.y,g.z),x.copy(g).normalize(),R.push(x.x,x.y,x.z),y.push(I+w,1-U),L.push(p++)}S.push(L)}for(let _=0;_<s;_++)for(let L=0;L<i;L++){const U=S[_][L+1],w=S[_][L],H=S[_+1][L],I=S[_+1][L+1];(_!==0||h>0)&&M.push(U,w,I),(_!==s-1||m<Math.PI)&&M.push(w,H,I)}this.setIndex(M),this.setAttribute("position",new vn(b,3)),this.setAttribute("normal",new vn(R,3)),this.setAttribute("uv",new vn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nM extends _i{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lh extends As{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class iM extends As{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class aM extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class sM extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class xv extends bn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Nh=new $e,p0=new Y,m0=new Y;class rM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;p0.setFromMatrixPosition(t.matrixWorld),i.position.copy(p0),m0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(m0),i.updateMatrixWorld(),Nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qd extends _v{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class oM extends rM{constructor(){super(new qd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lM extends xv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new oM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cM extends xv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class uM extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class fM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class _0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Se(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Se(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class hM extends bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function g0(o,t,i,s){const l=dM(s);switch(i){case av:return o*t;case rv:return o*t/l.components*l.byteLength;case zd:return o*t/l.components*l.byteLength;case ov:return o*t*2/l.components*l.byteLength;case Bd:return o*t*2/l.components*l.byteLength;case sv:return o*t*3/l.components*l.byteLength;case Ti:return o*t*4/l.components*l.byteLength;case Id:return o*t*4/l.components*l.byteLength;case Nc:case Oc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ed:case id:return Math.max(o,16)*Math.max(t,8)/4;case td:case nd:return Math.max(o,8)*Math.max(t,8)/2;case ad:case sd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case rd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case od:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case cd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ud:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case fd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case hd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case dd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case pd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case md:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case _d:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case gd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case vd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case xd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case yd:case Md:case Ed:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Td:case bd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Ad:case Rd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dM(o){switch(o){case Pi:case tv:return{byteLength:1,components:1};case Fo:case ev:case qa:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Es:case Nd:case ca:return{byteLength:4,components:1};case nv:case iv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function pM(o){const t=new WeakMap;function i(d,m){const p=d.array,S=d.usage,g=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const S=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,S);else{g.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<g.length;M++){const b=g[x],R=g[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,g[x]=R)}g.length=x+1;for(let M=0,b=g.length;M<b;M++){const R=g[M];o.bufferSubData(p,R.start*S.BYTES_PER_ELEMENT,S,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=t.get(d);(!S||S.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var mM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_M=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,MM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,EM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,IM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,FM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,WM="gl_FragColor = linearToOutputTexel( gl_FragColor );",qM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,YM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,KM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,aE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,oE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_E=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ME=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,AE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,IE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,XE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,KE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,MT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ET=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,TT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,FT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:mM,alphahash_pars_fragment:_M,alphamap_fragment:gM,alphamap_pars_fragment:vM,alphatest_fragment:SM,alphatest_pars_fragment:xM,aomap_fragment:yM,aomap_pars_fragment:MM,batching_pars_vertex:EM,batching_vertex:TM,begin_vertex:bM,beginnormal_vertex:AM,bsdfs:RM,iridescence_fragment:CM,bumpmap_pars_fragment:wM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:LM,clipping_planes_vertex:NM,color_fragment:OM,color_pars_fragment:PM,color_pars_vertex:zM,color_vertex:BM,common:IM,cube_uv_reflection_fragment:FM,defaultnormal_vertex:HM,displacementmap_pars_vertex:GM,displacementmap_vertex:VM,emissivemap_fragment:kM,emissivemap_pars_fragment:XM,colorspace_fragment:WM,colorspace_pars_fragment:qM,envmap_fragment:YM,envmap_common_pars_fragment:jM,envmap_pars_fragment:ZM,envmap_pars_vertex:KM,envmap_physical_pars_fragment:oE,envmap_vertex:QM,fog_vertex:JM,fog_pars_vertex:$M,fog_fragment:tE,fog_pars_fragment:eE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:aE,lights_lambert_pars_fragment:sE,lights_pars_begin:rE,lights_toon_fragment:lE,lights_toon_pars_fragment:cE,lights_phong_fragment:uE,lights_phong_pars_fragment:fE,lights_physical_fragment:hE,lights_physical_pars_fragment:dE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:_E,logdepthbuf_fragment:gE,logdepthbuf_pars_fragment:vE,logdepthbuf_pars_vertex:SE,logdepthbuf_vertex:xE,map_fragment:yE,map_pars_fragment:ME,map_particle_fragment:EE,map_particle_pars_fragment:TE,metalnessmap_fragment:bE,metalnessmap_pars_fragment:AE,morphinstance_vertex:RE,morphcolor_vertex:CE,morphnormal_vertex:wE,morphtarget_pars_vertex:DE,morphtarget_vertex:UE,normal_fragment_begin:LE,normal_fragment_maps:NE,normal_pars_fragment:OE,normal_pars_vertex:PE,normal_vertex:zE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:IE,clearcoat_normal_fragment_maps:FE,clearcoat_pars_fragment:HE,iridescence_pars_fragment:GE,opaque_fragment:VE,packing:kE,premultiplied_alpha_fragment:XE,project_vertex:WE,dithering_fragment:qE,dithering_pars_fragment:YE,roughnessmap_fragment:jE,roughnessmap_pars_fragment:ZE,shadowmap_pars_fragment:KE,shadowmap_pars_vertex:QE,shadowmap_vertex:JE,shadowmask_pars_fragment:$E,skinbase_vertex:tT,skinning_pars_vertex:eT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:aT,specularmap_pars_fragment:sT,tonemapping_fragment:rT,tonemapping_pars_fragment:oT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:fT,uv_vertex:hT,worldpos_vertex:dT,background_vert:pT,background_frag:mT,backgroundCube_vert:_T,backgroundCube_frag:gT,cube_vert:vT,cube_frag:ST,depth_vert:xT,depth_frag:yT,distanceRGBA_vert:MT,distanceRGBA_frag:ET,equirect_vert:TT,equirect_frag:bT,linedashed_vert:AT,linedashed_frag:RT,meshbasic_vert:CT,meshbasic_frag:wT,meshlambert_vert:DT,meshlambert_frag:UT,meshmatcap_vert:LT,meshmatcap_frag:NT,meshnormal_vert:OT,meshnormal_frag:PT,meshphong_vert:zT,meshphong_frag:BT,meshphysical_vert:IT,meshphysical_frag:FT,meshtoon_vert:HT,meshtoon_frag:GT,points_vert:VT,points_frag:kT,shadow_vert:XT,shadow_frag:WT,sprite_vert:qT,sprite_frag:YT},Pt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ui={basic:{uniforms:Pn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Pn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Pn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Pn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Pn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Re(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Pn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Pn([Pt.points,Pt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Pn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Pn([Pt.common,Pt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Pn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Pn([Pt.sprite,Pt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Pn([Pt.common,Pt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Pn([Pt.lights,Pt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};Ui.physical={uniforms:Pn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const Cc={r:0,b:0,g:0},_s=new Bi,jT=new $e;function ZT(o,t,i,s,l,c,h){const d=new Re(0);let m=c===!0?0:1,p,S,g=null,x=0,M=null;function b(U){let w=U.isScene===!0?U.background:null;return w&&w.isTexture&&(w=(U.backgroundBlurriness>0?i:t).get(w)),w}function R(U){let w=!1;const H=b(U);H===null?_(d,m):H&&H.isColor&&(_(H,1),w=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,w){const H=b(w);H&&(H.isCubeTexture||H.mapping===kc)?(S===void 0&&(S=new Dn(new qo(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Nr(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(I,B,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),_s.copy(w.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),S.material.uniforms.envMap.value=H,S.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(jT.makeRotationFromEuler(_s)),S.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Be,(g!==H||x!==H.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,g=H,x=H.version,M=o.toneMapping),S.layers.enableAll(),U.unshift(S,S.geometry,S.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Dn(new Wc(2,2),new _i({name:"BackgroundMaterial",uniforms:Nr(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=Ce.getTransfer(H.colorSpace)!==Be,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||x!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=H,x=H.version,M=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,w){U.getRGB(Cc,mv(o)),s.buffers.color.setClear(Cc.r,Cc.g,Cc.b,w,h)}function L(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,w=1){d.set(U),m=w,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(d,m)},render:R,addToRenderList:y,dispose:L}}function KT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(C,G,$,ot,pt){let ft=!1;const P=g(ot,$,G);c!==P&&(c=P,p(c.object)),ft=M(C,ot,$,pt),ft&&b(C,ot,$,pt),pt!==null&&t.update(pt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,w(C,G,$,ot),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function S(C){return o.deleteVertexArray(C)}function g(C,G,$){const ot=$.wireframe===!0;let pt=s[C.id];pt===void 0&&(pt={},s[C.id]=pt);let ft=pt[G.id];ft===void 0&&(ft={},pt[G.id]=ft);let P=ft[ot];return P===void 0&&(P=x(m()),ft[ot]=P),P}function x(C){const G=[],$=[],ot=[];for(let pt=0;pt<i;pt++)G[pt]=0,$[pt]=0,ot[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:$,attributeDivisors:ot,object:C,attributes:{},index:null}}function M(C,G,$,ot){const pt=c.attributes,ft=G.attributes;let P=0;const Z=$.getAttributes();for(const W in Z)if(Z[W].location>=0){const Mt=pt[W];let z=ft[W];if(z===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),Mt===void 0||Mt.attribute!==z||z&&Mt.data!==z.data)return!0;P++}return c.attributesNum!==P||c.index!==ot}function b(C,G,$,ot){const pt={},ft=G.attributes;let P=0;const Z=$.getAttributes();for(const W in Z)if(Z[W].location>=0){let Mt=ft[W];Mt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor));const z={};z.attribute=Mt,Mt&&Mt.data&&(z.data=Mt.data),pt[W]=z,P++}c.attributes=pt,c.attributesNum=P,c.index=ot}function R(){const C=c.newAttributes;for(let G=0,$=C.length;G<$;G++)C[G]=0}function y(C){_(C,0)}function _(C,G){const $=c.newAttributes,ot=c.enabledAttributes,pt=c.attributeDivisors;$[C]=1,ot[C]===0&&(o.enableVertexAttribArray(C),ot[C]=1),pt[C]!==G&&(o.vertexAttribDivisor(C,G),pt[C]=G)}function L(){const C=c.newAttributes,G=c.enabledAttributes;for(let $=0,ot=G.length;$<ot;$++)G[$]!==C[$]&&(o.disableVertexAttribArray($),G[$]=0)}function U(C,G,$,ot,pt,ft,P){P===!0?o.vertexAttribIPointer(C,G,$,pt,ft):o.vertexAttribPointer(C,G,$,ot,pt,ft)}function w(C,G,$,ot){R();const pt=ot.attributes,ft=$.getAttributes(),P=G.defaultAttributeValues;for(const Z in ft){const W=ft[Z];if(W.location>=0){let St=pt[Z];if(St===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const Mt=St.normalized,z=St.itemSize,nt=t.get(St);if(nt===void 0)continue;const gt=nt.buffer,At=nt.type,Lt=nt.bytesPerElement,it=At===o.INT||At===o.UNSIGNED_INT||St.gpuType===Nd;if(St.isInterleavedBufferAttribute){const lt=St.data,Ut=lt.stride,Et=St.offset;if(lt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<W.locationSize;Rt++)_(W.location+Rt,lt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Rt=0;Rt<W.locationSize;Rt++)y(W.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let Rt=0;Rt<W.locationSize;Rt++)U(W.location+Rt,z/W.locationSize,At,Mt,Ut*Lt,(Et+z/W.locationSize*Rt)*Lt,it)}else{if(St.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)_(W.location+lt,St.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let lt=0;lt<W.locationSize;lt++)y(W.location+lt);o.bindBuffer(o.ARRAY_BUFFER,gt);for(let lt=0;lt<W.locationSize;lt++)U(W.location+lt,z/W.locationSize,At,Mt,z*Lt,z/W.locationSize*lt*Lt,it)}}else if(P!==void 0){const Mt=P[Z];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(W.location,Mt);break;case 3:o.vertexAttrib3fv(W.location,Mt);break;case 4:o.vertexAttrib4fv(W.location,Mt);break;default:o.vertexAttrib1fv(W.location,Mt)}}}}L()}function H(){k();for(const C in s){const G=s[C];for(const $ in G){const ot=G[$];for(const pt in ot)S(ot[pt].object),delete ot[pt];delete G[$]}delete s[C]}}function I(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const $ in G){const ot=G[$];for(const pt in ot)S(ot[pt].object),delete ot[pt];delete G[$]}delete s[C.id]}function B(C){for(const G in s){const $=s[G];if($[C.id]===void 0)continue;const ot=$[C.id];for(const pt in ot)S(ot[pt].object),delete ot[pt];delete $[C.id]}}function k(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:y,disableUnusedAttributes:L}}function QT(o,t,i){let s;function l(p){s=p}function c(p,S){o.drawArrays(s,p,S),i.update(S,s,1)}function h(p,S,g){g!==0&&(o.drawArraysInstanced(s,p,S,g),i.update(S,s,g))}function d(p,S,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,S,0,g);let M=0;for(let b=0;b<g;b++)M+=S[b];i.update(M,s,1)}function m(p,S,g,x){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],S[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,S,0,x,0,g);let b=0;for(let R=0;R<g;R++)b+=S[R]*x[R];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function JT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==Ti&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const k=B===qa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Pi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ca&&!k)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:w,vertexTextures:H,maxSamples:I}}function $T(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Va,d=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||s!==0||l;return l=x,s=g.length,M},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=S(g,x,0)},this.setState=function(g,x,M){const b=g.clippingPlanes,R=g.clipIntersection,y=g.clipShadows,_=o.get(g);if(!l||b===null||b.length===0||c&&!y)c?S(null):p();else{const L=c?0:s,U=L*4;let w=_.clippingState||null;m.value=w,w=S(b,x,U,M);for(let H=0;H!==U;++H)w[H]=i[H];_.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(g,x,M,b){const R=g!==null?g.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const _=M+R*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<_)&&(y=new Float32Array(_));for(let U=0,w=M;U!==R;++U,w+=4)h.copy(g[U]).applyMatrix4(L,d),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}function tb(o){let t=new WeakMap;function i(h,d){return d===Kh?h.mapping=Dr:d===Qh&&(h.mapping=Ur),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Kh||d===Qh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Yy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const br=4,v0=[.125,.215,.35,.446,.526,.582],xs=20,Oh=new qd,S0=new Re;let Ph=null,zh=0,Bh=0,Ih=!1;const vs=(1+Math.sqrt(5))/2,Mr=1/vs,x0=[new Y(-vs,Mr,0),new Y(vs,Mr,0),new Y(-Mr,0,vs),new Y(Mr,0,vs),new Y(0,vs,-Mr),new Y(0,vs,Mr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],eb=new Y;class y0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=eb}=c;Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=T0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=E0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,zh,Bh),this._renderer.xr.enabled=Ih,t.scissorTest=!1,wc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Dr||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Bh=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Li,minFilter:Li,generateMipmaps:!1,type:qa,format:Ti,colorSpace:Lr,depthBuffer:!1},l=M0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=M0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nb(c)),this._blurMaterial=ib(c,t,i)}return l}_compileMaterial(t){const i=new Dn(this._lodPlanes[0],t);this._renderer.compile(i,Oh)}_sceneToCubeUV(t,i,s,l,c){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,M=g.toneMapping;g.getClearColor(S0),g.toneMapping=Xa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const R=new zo({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),y=new Dn(new qo,R);let _=!1;const L=t.background;L?L.isColor&&(R.color.copy(L),t.background=null,_=!0):(R.color.copy(S0),_=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[U],c.y,c.z)):w===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[U]));const H=this._cubeSize;wc(l,w*H,U>2?H:0,H,H),g.setRenderTarget(l),_&&g.render(y,m),g.render(t,m)}y.geometry.dispose(),y.material.dispose(),g.toneMapping=M,g.autoClear=x,t.background=L}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Dr||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=T0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=E0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Dn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;wc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Oh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=x0[(l-c-1)%x0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,g=new Dn(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*xs-1),R=c/b,y=isFinite(c)?1+Math.floor(S*R):xs;y>xs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xs}`);const _=[];let L=0;for(let B=0;B<xs;++B){const k=B/R,D=Math.exp(-k*k/2);_.push(D),B===0?L+=D:B<y&&(L+=2*D)}for(let B=0;B<_.length;B++)_[B]=_[B]/L;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=b,x.mipInt.value=U-s;const w=this._sizeLods[l],H=3*w*(l>U-br?l-U+br:0),I=4*(this._cubeSize-w);wc(i,H,I,3*w,2*w),m.setRenderTarget(i),m.render(g,Oh)}}function nb(o){const t=[],i=[],s=[];let l=o;const c=o-br+1+v0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-br?m=v0[h-o+br-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),S=-p,g=1+p,x=[S,S,g,S,g,g,S,S,g,g,S,g],M=6,b=6,R=3,y=2,_=1,L=new Float32Array(R*b*M),U=new Float32Array(y*b*M),w=new Float32Array(_*b*M);for(let I=0;I<M;I++){const B=I%3*2/3-1,k=I>2?0:-1,D=[B,k,0,B+2/3,k,0,B+2/3,k+1,0,B,k,0,B+2/3,k+1,0,B,k+1,0];L.set(D,R*b*I),U.set(x,y*b*I);const C=[I,I,I,I,I,I];w.set(C,_*b*I)}const H=new gi;H.setAttribute("position",new Oi(L,R)),H.setAttribute("uv",new Oi(U,y)),H.setAttribute("faceIndex",new Oi(w,_)),t.push(H),l>br&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function M0(o,t,i){const s=new zi(o,t,i);return s.texture.mapping=kc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function ib(o,t,i){const s=new Float32Array(xs),l=new Y(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function E0(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function T0(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ab(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Kh||m===Qh,S=m===Dr||m===Ur;if(p||S){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new y0(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new y0(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function sb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ko("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function rb(o,t,i,s){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,b=g.attributes.position;let R=0;if(M!==null){const L=M.array;R=M.version;for(let U=0,w=L.length;U<w;U+=3){const H=L[U+0],I=L[U+1],B=L[U+2];x.push(H,I,I,B,B,H)}}else if(b!==void 0){const L=b.array;R=b.version;for(let U=0,w=L.length/3-1;U<w;U+=3){const H=U+0,I=U+1,B=U+2;x.push(H,I,I,B,B,H)}}else return;const y=new(cv(x)?pv:dv)(x,1);y.version=R;const _=c.get(g);_&&t.remove(_),c.set(g,y)}function S(g){const x=c.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:S}}function ob(o,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(s,M,c,x*h),i.update(M,s,1)}function p(x,M,b){b!==0&&(o.drawElementsInstanced(s,M,c,x*h,b),i.update(M,s,b))}function S(x,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,b);let y=0;for(let _=0;_<b;_++)y+=M[_];i.update(y,s,1)}function g(x,M,b,R){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)p(x[_]/h,M[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,R,0,b);let _=0;for(let L=0;L<b;L++)_+=M[L]*R[L];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=g}function lb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function cb(o,t,i){const s=new WeakMap,l=new Ke;function c(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=S!==void 0?S.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let C=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let H=d.attributes.position.count*w,I=1;H>t.maxTextureSize&&(I=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const B=new Float32Array(H*I*4*g),k=new uv(B,H,I,g);k.type=ca,k.needsUpdate=!0;const D=w*4;for(let G=0;G<g;G++){const $=_[G],ot=L[G],pt=U[G],ft=H*I*4*G;for(let P=0;P<$.count;P++){const Z=P*D;b===!0&&(l.fromBufferAttribute($,P),B[ft+Z+0]=l.x,B[ft+Z+1]=l.y,B[ft+Z+2]=l.z,B[ft+Z+3]=0),R===!0&&(l.fromBufferAttribute(ot,P),B[ft+Z+4]=l.x,B[ft+Z+5]=l.y,B[ft+Z+6]=l.z,B[ft+Z+7]=0),y===!0&&(l.fromBufferAttribute(pt,P),B[ft+Z+8]=l.x,B[ft+Z+9]=l.y,B[ft+Z+10]=l.z,B[ft+Z+11]=pt.itemSize===4?l.w:1)}}x={count:g,texture:k,size:new se(H,I)},s.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<p.length;y++)b+=p[y];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function ub(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,S=m.geometry,g=t.get(m,S);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Mv=new qn,b0=new Xd(1,1),Ev=new uv,Tv=new Uy,bv=new gv,A0=[],R0=[],C0=new Float32Array(16),w0=new Float32Array(9),D0=new Float32Array(4);function Or(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=A0[l];if(c===void 0&&(c=new Float32Array(l),A0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function dn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function pn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function qc(o,t){let i=R0[t];i===void 0&&(i=new Int32Array(t),R0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function fb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function hb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;o.uniform2fv(this.addr,t),pn(i,t)}}function db(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;o.uniform3fv(this.addr,t),pn(i,t)}}function pb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;o.uniform4fv(this.addr,t),pn(i,t)}}function mb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(dn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,s))return;D0.set(s),o.uniformMatrix2fv(this.addr,!1,D0),pn(i,s)}}function _b(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(dn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,s))return;w0.set(s),o.uniformMatrix3fv(this.addr,!1,w0),pn(i,s)}}function gb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(dn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),pn(i,t)}else{if(dn(i,s))return;C0.set(s),o.uniformMatrix4fv(this.addr,!1,C0),pn(i,s)}}function vb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Sb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;o.uniform2iv(this.addr,t),pn(i,t)}}function xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;o.uniform3iv(this.addr,t),pn(i,t)}}function yb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;o.uniform4iv(this.addr,t),pn(i,t)}}function Mb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Eb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;o.uniform2uiv(this.addr,t),pn(i,t)}}function Tb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;o.uniform3uiv(this.addr,t),pn(i,t)}}function bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;o.uniform4uiv(this.addr,t),pn(i,t)}}function Ab(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(b0.compareFunction=lv,c=b0):c=Mv,i.setTexture2D(t||c,l)}function Rb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Tv,l)}function Cb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||bv,l)}function wb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Ev,l)}function Db(o){switch(o){case 5126:return fb;case 35664:return hb;case 35665:return db;case 35666:return pb;case 35674:return mb;case 35675:return _b;case 35676:return gb;case 5124:case 35670:return vb;case 35667:case 35671:return Sb;case 35668:case 35672:return xb;case 35669:case 35673:return yb;case 5125:return Mb;case 36294:return Eb;case 36295:return Tb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ab;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return wb}}function Ub(o,t){o.uniform1fv(this.addr,t)}function Lb(o,t){const i=Or(t,this.size,2);o.uniform2fv(this.addr,i)}function Nb(o,t){const i=Or(t,this.size,3);o.uniform3fv(this.addr,i)}function Ob(o,t){const i=Or(t,this.size,4);o.uniform4fv(this.addr,i)}function Pb(o,t){const i=Or(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function zb(o,t){const i=Or(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Bb(o,t){const i=Or(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Ib(o,t){o.uniform1iv(this.addr,t)}function Fb(o,t){o.uniform2iv(this.addr,t)}function Hb(o,t){o.uniform3iv(this.addr,t)}function Gb(o,t){o.uniform4iv(this.addr,t)}function Vb(o,t){o.uniform1uiv(this.addr,t)}function kb(o,t){o.uniform2uiv(this.addr,t)}function Xb(o,t){o.uniform3uiv(this.addr,t)}function Wb(o,t){o.uniform4uiv(this.addr,t)}function qb(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);dn(s,c)||(o.uniform1iv(this.addr,c),pn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Mv,c[h])}function Yb(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);dn(s,c)||(o.uniform1iv(this.addr,c),pn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Tv,c[h])}function jb(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);dn(s,c)||(o.uniform1iv(this.addr,c),pn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||bv,c[h])}function Zb(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);dn(s,c)||(o.uniform1iv(this.addr,c),pn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Ev,c[h])}function Kb(o){switch(o){case 5126:return Ub;case 35664:return Lb;case 35665:return Nb;case 35666:return Ob;case 35674:return Pb;case 35675:return zb;case 35676:return Bb;case 5124:case 35670:return Ib;case 35667:case 35671:return Fb;case 35668:case 35672:return Hb;case 35669:case 35673:return Gb;case 5125:return Vb;case 36294:return kb;case 36295:return Xb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return Yb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Zb}}class Qb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Db(i.type)}}class Jb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Kb(i.type)}}class $b{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function U0(o,t){o.seq.push(t),o.map[t.id]=t}function tA(o,t,i){const s=o.name,l=s.length;for(Fh.lastIndex=0;;){const c=Fh.exec(s),h=Fh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){U0(i,p===void 0?new Qb(d,o,t):new Jb(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new $b(d),U0(i,g)),i=g}}}class Bc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);tA(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function L0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const eA=37297;let nA=0;function iA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const N0=new de;function aA(o){Ce._getMatrix(N0,Ce.workingColorSpace,o);const t=`mat3( ${N0.elements.map(i=>i.toFixed(4))} )`;switch(Ce.getTransfer(o)){case Ic:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function O0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+iA(o.getShaderSource(t),d)}else return c}function sA(o,t){const i=aA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function rA(o,t){let i;switch(t){case q0:i="Linear";break;case Y0:i="Reinhard";break;case j0:i="Cineon";break;case Z0:i="ACESFilmic";break;case Q0:i="AgX";break;case J0:i="Neutral";break;case K0:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new Y;function oA(){Ce.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function cA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function uA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Oo(o){return o!==""}function P0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function z0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fA=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(o){return o.replace(fA,dA)}const hA=new Map;function dA(o,t){let i=pe[t];if(i===void 0){const s=hA.get(t);if(s!==void 0)i=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return wd(i)}const pA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(o){return o.replace(pA,mA)}function mA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function I0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _A(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===W0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Xx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function gA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Dr:case Ur:t="ENVMAP_TYPE_CUBE";break;case kc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vA(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ur:t="ENVMAP_MODE_REFRACTION";break}return t}function SA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ld:t="ENVMAP_BLENDING_MULTIPLY";break;case cy:t="ENVMAP_BLENDING_MIX";break;case uy:t="ENVMAP_BLENDING_ADD";break}return t}function xA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function yA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=_A(i),p=gA(i),S=vA(i),g=SA(i),x=xA(i),M=lA(i),b=cA(c),R=l.createProgram();let y,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Oo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Oo).join(`
`),_.length>0&&(_+=`
`)):(y=[I0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),_=[I0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xa?"#define TONE_MAPPING":"",i.toneMapping!==Xa?pe.tonemapping_pars_fragment:"",i.toneMapping!==Xa?rA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,sA("linearToOutputTexel",i.outputColorSpace),oA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),h=wd(h),h=P0(h,i),h=z0(h,i),d=wd(d),d=P0(d,i),d=z0(d,i),h=B0(h),d=B0(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===qg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===qg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=L+y+h,w=L+_+d,H=L0(l,l.VERTEX_SHADER,U),I=L0(l,l.FRAGMENT_SHADER,w);l.attachShader(R,H),l.attachShader(R,I),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function B(G){if(o.debug.checkShaderErrors){const $=l.getProgramInfoLog(R)||"",ot=l.getShaderInfoLog(H)||"",pt=l.getShaderInfoLog(I)||"",ft=$.trim(),P=ot.trim(),Z=pt.trim();let W=!0,St=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,H,I);else{const Mt=O0(l,H,"vertex"),z=O0(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+Mt+`
`+z)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(P===""||Z==="")&&(St=!1);St&&(G.diagnostics={runnable:W,programLog:ft,vertexShader:{log:P,prefix:y},fragmentShader:{log:Z,prefix:_}})}l.deleteShader(H),l.deleteShader(I),k=new Bc(l,R),D=uA(l,R)}let k;this.getUniforms=function(){return k===void 0&&B(this),k};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,eA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nA++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=I,this}let MA=0;class EA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new TA(t),i.set(t,s)),s}}class TA{constructor(t){this.id=MA++,this.code=t,this.usedTimes=0}}function bA(o,t,i,s,l,c,h){const d=new fv,m=new EA,p=new Set,S=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function y(D,C,G,$,ot){const pt=$.fog,ft=ot.geometry,P=D.isMeshStandardMaterial?$.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||P),W=Z&&Z.mapping===kc?Z.image.height:null,St=b[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const Mt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,z=Mt!==void 0?Mt.length:0;let nt=0;ft.morphAttributes.position!==void 0&&(nt=1),ft.morphAttributes.normal!==void 0&&(nt=2),ft.morphAttributes.color!==void 0&&(nt=3);let gt,At,Lt,it;if(St){const be=Ui[St];gt=be.vertexShader,At=be.fragmentShader}else gt=D.vertexShader,At=D.fragmentShader,m.update(D),Lt=m.getVertexShaderID(D),it=m.getFragmentShaderID(D);const lt=o.getRenderTarget(),Ut=o.state.buffers.depth.getReversed(),Et=ot.isInstancedMesh===!0,Rt=ot.isBatchedMesh===!0,Wt=!!D.map,Jt=!!D.matcap,N=!!Z,oe=!!D.aoMap,Kt=!!D.lightMap,jt=!!D.bumpMap,It=!!D.normalMap,Te=!!D.displacementMap,Bt=!!D.emissiveMap,ae=!!D.metalnessMap,Ie=!!D.roughnessMap,Ze=D.anisotropy>0,O=D.clearcoat>0,E=D.dispersion>0,tt=D.iridescence>0,ht=D.sheen>0,xt=D.transmission>0,ct=Ze&&!!D.anisotropyMap,Qt=O&&!!D.clearcoatMap,Ct=O&&!!D.clearcoatNormalMap,Yt=O&&!!D.clearcoatRoughnessMap,Zt=tt&&!!D.iridescenceMap,Tt=tt&&!!D.iridescenceThicknessMap,wt=ht&&!!D.sheenColorMap,$t=ht&&!!D.sheenRoughnessMap,Ft=!!D.specularMap,Nt=!!D.specularColorMap,ue=!!D.specularIntensityMap,X=xt&&!!D.transmissionMap,bt=xt&&!!D.thicknessMap,Dt=!!D.gradientMap,Ht=!!D.alphaMap,yt=D.alphaTest>0,_t=!!D.alphaHash,Gt=!!D.extensions;let le=Xa;D.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(le=o.toneMapping);const Oe={shaderID:St,shaderType:D.type,shaderName:D.name,vertexShader:gt,fragmentShader:At,defines:D.defines,customVertexShaderID:Lt,customFragmentShaderID:it,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Rt,batchingColor:Rt&&ot._colorsTexture!==null,instancing:Et,instancingColor:Et&&ot.instanceColor!==null,instancingMorph:Et&&ot.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Lr,alphaToCoverage:!!D.alphaToCoverage,map:Wt,matcap:Jt,envMap:N,envMapMode:N&&Z.mapping,envMapCubeUVHeight:W,aoMap:oe,lightMap:Kt,bumpMap:jt,normalMap:It,displacementMap:x&&Te,emissiveMap:Bt,normalMapObjectSpace:It&&D.normalMapType===py,normalMapTangentSpace:It&&D.normalMapType===Fd,metalnessMap:ae,roughnessMap:Ie,anisotropy:Ze,anisotropyMap:ct,clearcoat:O,clearcoatMap:Qt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Yt,dispersion:E,iridescence:tt,iridescenceMap:Zt,iridescenceThicknessMap:Tt,sheen:ht,sheenColorMap:wt,sheenRoughnessMap:$t,specularMap:Ft,specularColorMap:Nt,specularIntensityMap:ue,transmission:xt,transmissionMap:X,thicknessMap:bt,gradientMap:Dt,opaque:D.transparent===!1&&D.blending===Rr&&D.alphaToCoverage===!1,alphaMap:Ht,alphaTest:yt,alphaHash:_t,combine:D.combine,mapUv:Wt&&R(D.map.channel),aoMapUv:oe&&R(D.aoMap.channel),lightMapUv:Kt&&R(D.lightMap.channel),bumpMapUv:jt&&R(D.bumpMap.channel),normalMapUv:It&&R(D.normalMap.channel),displacementMapUv:Te&&R(D.displacementMap.channel),emissiveMapUv:Bt&&R(D.emissiveMap.channel),metalnessMapUv:ae&&R(D.metalnessMap.channel),roughnessMapUv:Ie&&R(D.roughnessMap.channel),anisotropyMapUv:ct&&R(D.anisotropyMap.channel),clearcoatMapUv:Qt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:$t&&R(D.sheenRoughnessMap.channel),specularMapUv:Ft&&R(D.specularMap.channel),specularColorMapUv:Nt&&R(D.specularColorMap.channel),specularIntensityMapUv:ue&&R(D.specularIntensityMap.channel),transmissionMapUv:X&&R(D.transmissionMap.channel),thicknessMapUv:bt&&R(D.thicknessMap.channel),alphaMapUv:Ht&&R(D.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(It||Ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ft.attributes.uv&&(Wt||Ht),fog:!!pt,useFog:D.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ut,skinning:ot.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,decodeVideoTexture:Wt&&D.map.isVideoTexture===!0&&Ce.getTransfer(D.map.colorSpace)===Be,decodeVideoTextureEmissive:Bt&&D.emissiveMap.isVideoTexture===!0&&Ce.getTransfer(D.emissiveMap.colorSpace)===Be,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===la,flipSided:D.side===Wn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Gt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&D.extensions.multiDraw===!0||Rt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(L(C,D),U(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function L(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function U(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=b[D.type];let G;if(C){const $=Ui[C];G=Vd.clone($.uniforms)}else G=D.uniforms;return G}function H(D,C){let G;for(let $=0,ot=S.length;$<ot;$++){const pt=S[$];if(pt.cacheKey===C){G=pt,++G.usedTimes;break}}return G===void 0&&(G=new yA(o,C,D,c),S.push(G)),G}function I(D){if(--D.usedTimes===0){const C=S.indexOf(D);S[C]=S[S.length-1],S.pop(),D.destroy()}}function B(D){m.remove(D)}function k(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:w,acquireProgram:H,releaseProgram:I,releaseShaderCache:B,programs:S,dispose:k}}function AA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function RA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function F0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function H0(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,x,M,b,R,y){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:x,material:M,groupOrder:b,renderOrder:g.renderOrder,z:R,group:y},o[t]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=M,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=R,_.group=y),t++,_}function d(g,x,M,b,R,y){const _=h(g,x,M,b,R,y);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,x,M,b,R,y){const _=h(g,x,M,b,R,y);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,x){i.length>1&&i.sort(g||RA),s.length>1&&s.sort(x||F0),l.length>1&&l.sort(x||F0)}function S(){for(let g=t,x=o.length;g<x;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:S,sort:p}}function CA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new H0,o.set(s,[h])):l>=c.length?(h=new H0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function wA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new Re};break;case"SpotLight":i={position:new Y,direction:new Y,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[t.id]=i,i}}}function DA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let UA=0;function LA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function NA(o){const t=new wA,i=DA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Y);const l=new Y,c=new $e,h=new $e;function d(p){let S=0,g=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,b=0,R=0,y=0,_=0,L=0,U=0,w=0,H=0,I=0,B=0;p.sort(LA);for(let D=0,C=p.length;D<C;D++){const G=p[D],$=G.color,ot=G.intensity,pt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)S+=$.r*ot,g+=$.g*ot,x+=$.b*ot;else if(G.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(G.sh.coefficients[P],ot);B++}else if(G.isDirectionalLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,W=i.get(G);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,s.directionalShadow[M]=W,s.directionalShadowMap[M]=ft,s.directionalShadowMatrix[M]=G.shadow.matrix,L++}s.directional[M]=P,M++}else if(G.isSpotLight){const P=t.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy($).multiplyScalar(ot),P.distance=pt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,s.spot[R]=P;const Z=G.shadow;if(G.map&&(s.spotLightMap[H]=G.map,H++,Z.updateMatrices(G),G.castShadow&&I++),s.spotLightMatrix[R]=Z.matrix,G.castShadow){const W=i.get(G);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,s.spotShadow[R]=W,s.spotShadowMap[R]=ft,w++}R++}else if(G.isRectAreaLight){const P=t.get(G);P.color.copy($).multiplyScalar(ot),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=P,y++}else if(G.isPointLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const Z=G.shadow,W=i.get(G);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,s.pointShadow[b]=W,s.pointShadowMap[b]=ft,s.pointShadowMatrix[b]=G.shadow.matrix,U++}s.point[b]=P,b++}else if(G.isHemisphereLight){const P=t.get(G);P.skyColor.copy(G.color).multiplyScalar(ot),P.groundColor.copy(G.groundColor).multiplyScalar(ot),s.hemi[_]=P,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=g,s.ambient[2]=x;const k=s.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==R||k.rectAreaLength!==y||k.hemiLength!==_||k.numDirectionalShadows!==L||k.numPointShadows!==U||k.numSpotShadows!==w||k.numSpotMaps!==H||k.numLightProbes!==B)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=w+H-I,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=B,k.directionalLength=M,k.pointLength=b,k.spotLength=R,k.rectAreaLength=y,k.hemiLength=_,k.numDirectionalShadows=L,k.numPointShadows=U,k.numSpotShadows=w,k.numSpotMaps=H,k.numLightProbes=B,s.version=UA++)}function m(p,S){let g=0,x=0,M=0,b=0,R=0;const y=S.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const U=p[_];if(U.isDirectionalLight){const w=s.directional[g];w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),g++}else if(U.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const w=s.rectArea[b];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),h.identity(),c.copy(U.matrixWorld),c.premultiply(y),h.extractRotation(c),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(U.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(y),x++}else if(U.isHemisphereLight){const w=s.hemi[R];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:d,setupView:m,state:s}}function G0(o){const t=new NA(o),i=[],s=[];function l(S){p.camera=S,i.length=0,s.length=0}function c(S){i.push(S)}function h(S){s.push(S)}function d(){t.setup(i)}function m(S){t.setupView(i,S)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function OA(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new G0(o),t.set(l,[d])):c>=h.length?(d=new G0(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const PA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BA(o,t,i){let s=new kd;const l=new se,c=new se,h=new Ke,d=new aM({depthPacking:dy}),m=new sM,p={},S=i.maxTextureSize,g={[Wa]:Wn,[Wn]:Wa,[la]:la},x=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:PA,fragmentShader:zA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new gi;b.setAttribute("position",new Oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Dn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=W0;let _=this.type;this.render=function(I,B,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),$=o.state;$.setBlending(ua),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ot=_!==oa&&this.type===oa,pt=_===oa&&this.type!==oa;for(let ft=0,P=I.length;ft<P;ft++){const Z=I[ft],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const St=W.getFrameExtents();if(l.multiply(St),c.copy(W.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/St.x),l.x=c.x*St.x,W.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/St.y),l.y=c.y*St.y,W.mapSize.y=c.y)),W.map===null||ot===!0||pt===!0){const z=this.type!==oa?{minFilter:zn,magFilter:zn}:{};W.map!==null&&W.map.dispose(),W.map=new zi(l.x,l.y,z),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const Mt=W.getViewportCount();for(let z=0;z<Mt;z++){const nt=W.getViewport(z);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),$.viewport(h),W.updateMatrices(Z,z),s=W.getFrustum(),w(B,k,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===oa&&L(W,k),W.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(D,C,G)};function L(I,B){const k=t.update(R);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new zi(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(B,null,k,x,R,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(B,null,k,M,R,null)}function U(I,B,k,D){let C=null;const G=k.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(G!==void 0)C=G;else if(C=k.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=C.uuid,ot=B.uuid;let pt=p[$];pt===void 0&&(pt={},p[$]=pt);let ft=pt[ot];ft===void 0&&(ft=C.clone(),pt[ot]=ft,B.addEventListener("dispose",H)),C=ft}if(C.visible=B.visible,C.wireframe=B.wireframe,D===oa?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:g[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=o.properties.get(C);$.light=k}return C}function w(I,B,k,D,C){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===oa)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,I.matrixWorld);const ot=t.update(I),pt=I.material;if(Array.isArray(pt)){const ft=ot.groups;for(let P=0,Z=ft.length;P<Z;P++){const W=ft[P],St=pt[W.materialIndex];if(St&&St.visible){const Mt=U(I,St,D,C);I.onBeforeShadow(o,I,B,k,ot,Mt,W),o.renderBufferDirect(k,null,ot,Mt,I,W),I.onAfterShadow(o,I,B,k,ot,Mt,W)}}}else if(pt.visible){const ft=U(I,pt,D,C);I.onBeforeShadow(o,I,B,k,ot,ft,null),o.renderBufferDirect(k,null,ot,ft,I,null),I.onAfterShadow(o,I,B,k,ot,ft,null)}}const $=I.children;for(let ot=0,pt=$.length;ot<pt;ot++)w($[ot],B,k,D,C)}function H(I){I.target.removeEventListener("dispose",H);for(const k in p){const D=p[k],C=I.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const IA={[kh]:Xh,[Wh]:jh,[qh]:Zh,[wr]:Yh,[Xh]:kh,[jh]:Wh,[Zh]:qh,[Yh]:wr};function FA(o,t){function i(){let X=!1;const bt=new Ke;let Dt=null;const Ht=new Ke(0,0,0,0);return{setMask:function(yt){Dt!==yt&&!X&&(o.colorMask(yt,yt,yt,yt),Dt=yt)},setLocked:function(yt){X=yt},setClear:function(yt,_t,Gt,le,Oe){Oe===!0&&(yt*=le,_t*=le,Gt*=le),bt.set(yt,_t,Gt,le),Ht.equals(bt)===!1&&(o.clearColor(yt,_t,Gt,le),Ht.copy(bt))},reset:function(){X=!1,Dt=null,Ht.set(-1,0,0,0)}}}function s(){let X=!1,bt=!1,Dt=null,Ht=null,yt=null;return{setReversed:function(_t){if(bt!==_t){const Gt=t.get("EXT_clip_control");_t?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),bt=_t;const le=yt;yt=null,this.setClear(le)}},getReversed:function(){return bt},setTest:function(_t){_t?lt(o.DEPTH_TEST):Ut(o.DEPTH_TEST)},setMask:function(_t){Dt!==_t&&!X&&(o.depthMask(_t),Dt=_t)},setFunc:function(_t){if(bt&&(_t=IA[_t]),Ht!==_t){switch(_t){case kh:o.depthFunc(o.NEVER);break;case Xh:o.depthFunc(o.ALWAYS);break;case Wh:o.depthFunc(o.LESS);break;case wr:o.depthFunc(o.LEQUAL);break;case qh:o.depthFunc(o.EQUAL);break;case Yh:o.depthFunc(o.GEQUAL);break;case jh:o.depthFunc(o.GREATER);break;case Zh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ht=_t}},setLocked:function(_t){X=_t},setClear:function(_t){yt!==_t&&(bt&&(_t=1-_t),o.clearDepth(_t),yt=_t)},reset:function(){X=!1,Dt=null,Ht=null,yt=null,bt=!1}}}function l(){let X=!1,bt=null,Dt=null,Ht=null,yt=null,_t=null,Gt=null,le=null,Oe=null;return{setTest:function(be){X||(be?lt(o.STENCIL_TEST):Ut(o.STENCIL_TEST))},setMask:function(be){bt!==be&&!X&&(o.stencilMask(be),bt=be)},setFunc:function(be,Un,ii){(Dt!==be||Ht!==Un||yt!==ii)&&(o.stencilFunc(be,Un,ii),Dt=be,Ht=Un,yt=ii)},setOp:function(be,Un,ii){(_t!==be||Gt!==Un||le!==ii)&&(o.stencilOp(be,Un,ii),_t=be,Gt=Un,le=ii)},setLocked:function(be){X=be},setClear:function(be){Oe!==be&&(o.clearStencil(be),Oe=be)},reset:function(){X=!1,bt=null,Dt=null,Ht=null,yt=null,_t=null,Gt=null,le=null,Oe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let S={},g={},x=new WeakMap,M=[],b=null,R=!1,y=null,_=null,L=null,U=null,w=null,H=null,I=null,B=new Re(0,0,0),k=0,D=!1,C=null,G=null,$=null,ot=null,pt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Z=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=Z>=2);let St=null,Mt={};const z=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),gt=new Ke().fromArray(z),At=new Ke().fromArray(nt);function Lt(X,bt,Dt,Ht){const yt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(X,_t),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<Dt;Gt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(bt,0,o.RGBA,1,1,Ht,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(bt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return _t}const it={};it[o.TEXTURE_2D]=Lt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Lt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Lt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Lt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),lt(o.DEPTH_TEST),h.setFunc(wr),jt(!1),It(Hg),lt(o.CULL_FACE),oe(ua);function lt(X){S[X]!==!0&&(o.enable(X),S[X]=!0)}function Ut(X){S[X]!==!1&&(o.disable(X),S[X]=!1)}function Et(X,bt){return g[X]!==bt?(o.bindFramebuffer(X,bt),g[X]=bt,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=bt),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=bt),!0):!1}function Rt(X,bt){let Dt=M,Ht=!1;if(X){Dt=x.get(bt),Dt===void 0&&(Dt=[],x.set(bt,Dt));const yt=X.textures;if(Dt.length!==yt.length||Dt[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Gt=yt.length;_t<Gt;_t++)Dt[_t]=o.COLOR_ATTACHMENT0+_t;Dt.length=yt.length,Ht=!0}}else Dt[0]!==o.BACK&&(Dt[0]=o.BACK,Ht=!0);Ht&&o.drawBuffers(Dt)}function Wt(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const Jt={[Ss]:o.FUNC_ADD,[qx]:o.FUNC_SUBTRACT,[Yx]:o.FUNC_REVERSE_SUBTRACT};Jt[jx]=o.MIN,Jt[Zx]=o.MAX;const N={[Kx]:o.ZERO,[Qx]:o.ONE,[Jx]:o.SRC_COLOR,[Gh]:o.SRC_ALPHA,[ay]:o.SRC_ALPHA_SATURATE,[ny]:o.DST_COLOR,[ty]:o.DST_ALPHA,[$x]:o.ONE_MINUS_SRC_COLOR,[Vh]:o.ONE_MINUS_SRC_ALPHA,[iy]:o.ONE_MINUS_DST_COLOR,[ey]:o.ONE_MINUS_DST_ALPHA,[sy]:o.CONSTANT_COLOR,[ry]:o.ONE_MINUS_CONSTANT_COLOR,[oy]:o.CONSTANT_ALPHA,[ly]:o.ONE_MINUS_CONSTANT_ALPHA};function oe(X,bt,Dt,Ht,yt,_t,Gt,le,Oe,be){if(X===ua){R===!0&&(Ut(o.BLEND),R=!1);return}if(R===!1&&(lt(o.BLEND),R=!0),X!==Wx){if(X!==y||be!==D){if((_!==Ss||w!==Ss)&&(o.blendEquation(o.FUNC_ADD),_=Ss,w=Ss),be)switch(X){case Rr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gg:o.blendFunc(o.ONE,o.ONE);break;case Vg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case kg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Gg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Vg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}L=null,U=null,H=null,I=null,B.set(0,0,0),k=0,y=X,D=be}return}yt=yt||bt,_t=_t||Dt,Gt=Gt||Ht,(bt!==_||yt!==w)&&(o.blendEquationSeparate(Jt[bt],Jt[yt]),_=bt,w=yt),(Dt!==L||Ht!==U||_t!==H||Gt!==I)&&(o.blendFuncSeparate(N[Dt],N[Ht],N[_t],N[Gt]),L=Dt,U=Ht,H=_t,I=Gt),(le.equals(B)===!1||Oe!==k)&&(o.blendColor(le.r,le.g,le.b,Oe),B.copy(le),k=Oe),y=X,D=!1}function Kt(X,bt){X.side===la?Ut(o.CULL_FACE):lt(o.CULL_FACE);let Dt=X.side===Wn;bt&&(Dt=!Dt),jt(Dt),X.blending===Rr&&X.transparent===!1?oe(ua):oe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ht=X.stencilWrite;d.setTest(Ht),Ht&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):Ut(o.SAMPLE_ALPHA_TO_COVERAGE)}function jt(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function It(X){X!==Vx?(lt(o.CULL_FACE),X!==G&&(X===Hg?o.cullFace(o.BACK):X===kx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ut(o.CULL_FACE),G=X}function Te(X){X!==$&&(P&&o.lineWidth(X),$=X)}function Bt(X,bt,Dt){X?(lt(o.POLYGON_OFFSET_FILL),(ot!==bt||pt!==Dt)&&(o.polygonOffset(bt,Dt),ot=bt,pt=Dt)):Ut(o.POLYGON_OFFSET_FILL)}function ae(X){X?lt(o.SCISSOR_TEST):Ut(o.SCISSOR_TEST)}function Ie(X){X===void 0&&(X=o.TEXTURE0+ft-1),St!==X&&(o.activeTexture(X),St=X)}function Ze(X,bt,Dt){Dt===void 0&&(St===null?Dt=o.TEXTURE0+ft-1:Dt=St);let Ht=Mt[Dt];Ht===void 0&&(Ht={type:void 0,texture:void 0},Mt[Dt]=Ht),(Ht.type!==X||Ht.texture!==bt)&&(St!==Dt&&(o.activeTexture(Dt),St=Dt),o.bindTexture(X,bt||it[X]),Ht.type=X,Ht.texture=bt)}function O(){const X=Mt[St];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Qt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(X){gt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),gt.copy(X))}function $t(X){At.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),At.copy(X))}function Ft(X,bt){let Dt=p.get(bt);Dt===void 0&&(Dt=new WeakMap,p.set(bt,Dt));let Ht=Dt.get(X);Ht===void 0&&(Ht=o.getUniformBlockIndex(bt,X.name),Dt.set(X,Ht))}function Nt(X,bt){const Ht=p.get(bt).get(X);m.get(bt)!==Ht&&(o.uniformBlockBinding(bt,Ht,X.__bindingPointIndex),m.set(bt,Ht))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},St=null,Mt={},g={},x=new WeakMap,M=[],b=null,R=!1,y=null,_=null,L=null,U=null,w=null,H=null,I=null,B=new Re(0,0,0),k=0,D=!1,C=null,G=null,$=null,ot=null,pt=null,gt.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:lt,disable:Ut,bindFramebuffer:Et,drawBuffers:Rt,useProgram:Wt,setBlending:oe,setMaterial:Kt,setFlipSided:jt,setCullFace:It,setLineWidth:Te,setPolygonOffset:Bt,setScissorTest:ae,activeTexture:Ie,bindTexture:Ze,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:tt,texImage2D:Zt,texImage3D:Tt,updateUBOMapping:Ft,uniformBlockBinding:Nt,texStorage2D:Ct,texStorage3D:Yt,texSubImage2D:ht,texSubImage3D:xt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Qt,scissor:wt,viewport:$t,reset:ue}}function HA(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,S=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return M?new OffscreenCanvas(O,E):Hc("canvas")}function R(O,E,tt){let ht=1;const xt=Ze(O);if((xt.width>tt||xt.height>tt)&&(ht=tt/Math.max(xt.width,xt.height)),ht<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ct=Math.floor(ht*xt.width),Qt=Math.floor(ht*xt.height);g===void 0&&(g=b(ct,Qt));const Ct=E?b(ct,Qt):g;return Ct.width=ct,Ct.height=Qt,Ct.getContext("2d").drawImage(O,0,0,ct,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ct+"x"+Qt+")."),Ct}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),O;return O}function y(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(O,E,tt,ht,xt=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ct=E;if(E===o.RED&&(tt===o.FLOAT&&(ct=o.R32F),tt===o.HALF_FLOAT&&(ct=o.R16F),tt===o.UNSIGNED_BYTE&&(ct=o.R8)),E===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.R8UI),tt===o.UNSIGNED_SHORT&&(ct=o.R16UI),tt===o.UNSIGNED_INT&&(ct=o.R32UI),tt===o.BYTE&&(ct=o.R8I),tt===o.SHORT&&(ct=o.R16I),tt===o.INT&&(ct=o.R32I)),E===o.RG&&(tt===o.FLOAT&&(ct=o.RG32F),tt===o.HALF_FLOAT&&(ct=o.RG16F),tt===o.UNSIGNED_BYTE&&(ct=o.RG8)),E===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RG16UI),tt===o.UNSIGNED_INT&&(ct=o.RG32UI),tt===o.BYTE&&(ct=o.RG8I),tt===o.SHORT&&(ct=o.RG16I),tt===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),tt===o.UNSIGNED_INT&&(ct=o.RGB32UI),tt===o.BYTE&&(ct=o.RGB8I),tt===o.SHORT&&(ct=o.RGB16I),tt===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ct=o.RGBA32UI),tt===o.BYTE&&(ct=o.RGBA8I),tt===o.SHORT&&(ct=o.RGBA16I),tt===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),E===o.RGBA){const Qt=xt?Ic:Ce.getTransfer(ht);tt===o.FLOAT&&(ct=o.RGBA32F),tt===o.HALF_FLOAT&&(ct=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ct=Qt===Be?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(O,E){let tt;return O?E===null||E===Es||E===Ho?tt=o.DEPTH24_STENCIL8:E===ca?tt=o.DEPTH32F_STENCIL8:E===Fo&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Es||E===Ho?tt=o.DEPTH_COMPONENT24:E===ca?tt=o.DEPTH_COMPONENT32F:E===Fo&&(tt=o.DEPTH_COMPONENT16),tt}function H(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==zn&&O.minFilter!==Li?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function I(O){const E=O.target;E.removeEventListener("dispose",I),k(E),E.isVideoTexture&&S.delete(E)}function B(O){const E=O.target;E.removeEventListener("dispose",B),C(E)}function k(O){const E=s.get(O);if(E.__webglInit===void 0)return;const tt=O.source,ht=x.get(tt);if(ht){const xt=ht[E.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(O),Object.keys(ht).length===0&&x.delete(tt)}s.remove(O)}function D(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const tt=O.source,ht=x.get(tt);delete ht[E.__cacheKey],h.memory.textures--}function C(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let xt=0;xt<E.__webglFramebuffer[ht].length;xt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][xt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const tt=O.textures;for(let ht=0,xt=tt.length;ht<xt;ht++){const ct=s.get(tt[ht]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(tt[ht])}s.remove(O)}let G=0;function $(){G=0}function ot(){const O=G;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function pt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function ft(O,E){const tt=s.get(O);if(O.isVideoTexture&&ae(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&tt.__version!==O.version){const ht=O.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(tt,O,E);return}}else O.isExternalTexture&&(tt.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+E)}function P(O,E){const tt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){it(tt,O,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+E)}function Z(O,E){const tt=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&tt.__version!==O.version){it(tt,O,E);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+E)}function W(O,E){const tt=s.get(O);if(O.version>0&&tt.__version!==O.version){lt(tt,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+E)}const St={[Jh]:o.REPEAT,[ys]:o.CLAMP_TO_EDGE,[$h]:o.MIRRORED_REPEAT},Mt={[zn]:o.NEAREST,[fy]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[Li]:o.LINEAR,[rh]:o.LINEAR_MIPMAP_NEAREST,[Ms]:o.LINEAR_MIPMAP_LINEAR},z={[my]:o.NEVER,[yy]:o.ALWAYS,[_y]:o.LESS,[lv]:o.LEQUAL,[gy]:o.EQUAL,[xy]:o.GEQUAL,[vy]:o.GREATER,[Sy]:o.NOTEQUAL};function nt(O,E){if(E.type===ca&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Li||E.magFilter===rh||E.magFilter===ac||E.magFilter===Ms||E.minFilter===Li||E.minFilter===rh||E.minFilter===ac||E.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,St[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Mt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Mt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===zn||E.minFilter!==ac&&E.minFilter!==Ms||E.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function gt(O,E){let tt=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",I));const ht=E.source;let xt=x.get(ht);xt===void 0&&(xt={},x.set(ht,xt));const ct=pt(E);if(ct!==O.__cacheKey){xt[ct]===void 0&&(xt[ct]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),xt[ct].usedTimes++;const Qt=xt[O.__cacheKey];Qt!==void 0&&(xt[O.__cacheKey].usedTimes--,Qt.usedTimes===0&&D(E)),O.__cacheKey=ct,O.__webglTexture=xt[ct].texture}return tt}function At(O,E,tt){return Math.floor(Math.floor(O/tt)/E)}function Lt(O,E,tt,ht){const ct=O.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,tt,ht,E.data);else{ct.sort((Tt,wt)=>Tt.start-wt.start);let Qt=0;for(let Tt=1;Tt<ct.length;Tt++){const wt=ct[Qt],$t=ct[Tt],Ft=wt.start+wt.count,Nt=At($t.start,E.width,4),ue=At(wt.start,E.width,4);$t.start<=Ft+1&&Nt===ue&&At($t.start+$t.count-1,E.width,4)===Nt?wt.count=Math.max(wt.count,$t.start+$t.count-wt.start):(++Qt,ct[Qt]=$t)}ct.length=Qt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),Yt=o.getParameter(o.UNPACK_SKIP_PIXELS),Zt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Tt=0,wt=ct.length;Tt<wt;Tt++){const $t=ct[Tt],Ft=Math.floor($t.start/4),Nt=Math.ceil($t.count/4),ue=Ft%E.width,X=Math.floor(Ft/E.width),bt=Nt,Dt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ue,X,bt,Dt,tt,ht,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Zt)}}function it(O,E,tt){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const xt=gt(O,E),ct=E.source;i.bindTexture(ht,O.__webglTexture,o.TEXTURE0+tt);const Qt=s.get(ct);if(ct.version!==Qt.__version||xt===!0){i.activeTexture(o.TEXTURE0+tt);const Ct=Ce.getPrimaries(Ce.workingColorSpace),Yt=E.colorSpace===ka?null:Ce.getPrimaries(E.colorSpace),Zt=E.colorSpace===ka||Ct===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Tt=R(E.image,!1,l.maxTextureSize);Tt=Ie(E,Tt);const wt=c.convert(E.format,E.colorSpace),$t=c.convert(E.type);let Ft=U(E.internalFormat,wt,$t,E.colorSpace,E.isVideoTexture);nt(ht,E);let Nt;const ue=E.mipmaps,X=E.isVideoTexture!==!0,bt=Qt.__version===void 0||xt===!0,Dt=ct.dataReady,Ht=H(E,Tt);if(E.isDepthTexture)Ft=w(E.format===Vo,E.type),bt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Ft,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Ft,Tt.width,Tt.height,0,wt,$t,null));else if(E.isDataTexture)if(ue.length>0){X&&bt&&i.texStorage2D(o.TEXTURE_2D,Ht,Ft,ue[0].width,ue[0].height);for(let yt=0,_t=ue.length;yt<_t;yt++)Nt=ue[yt],X?Dt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,wt,$t,Nt.data):i.texImage2D(o.TEXTURE_2D,yt,Ft,Nt.width,Nt.height,0,wt,$t,Nt.data);E.generateMipmaps=!1}else X?(bt&&i.texStorage2D(o.TEXTURE_2D,Ht,Ft,Tt.width,Tt.height),Dt&&Lt(E,Tt,wt,$t)):i.texImage2D(o.TEXTURE_2D,0,Ft,Tt.width,Tt.height,0,wt,$t,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,Ft,ue[0].width,ue[0].height,Tt.depth);for(let yt=0,_t=ue.length;yt<_t;yt++)if(Nt=ue[yt],E.format!==Ti)if(wt!==null)if(X){if(Dt)if(E.layerUpdates.size>0){const Gt=g0(Nt.width,Nt.height,E.format,E.type);for(const le of E.layerUpdates){const Oe=Nt.data.subarray(le*Gt/Nt.data.BYTES_PER_ELEMENT,(le+1)*Gt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,le,Nt.width,Nt.height,1,wt,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Nt.width,Nt.height,Tt.depth,wt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Ft,Nt.width,Nt.height,Tt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Dt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Nt.width,Nt.height,Tt.depth,wt,$t,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Ft,Nt.width,Nt.height,Tt.depth,0,wt,$t,Nt.data)}else{X&&bt&&i.texStorage2D(o.TEXTURE_2D,Ht,Ft,ue[0].width,ue[0].height);for(let yt=0,_t=ue.length;yt<_t;yt++)Nt=ue[yt],E.format!==Ti?wt!==null?X?Dt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,wt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Ft,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Dt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,wt,$t,Nt.data):i.texImage2D(o.TEXTURE_2D,yt,Ft,Nt.width,Nt.height,0,wt,$t,Nt.data)}else if(E.isDataArrayTexture)if(X){if(bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,Ft,Tt.width,Tt.height,Tt.depth),Dt)if(E.layerUpdates.size>0){const yt=g0(Tt.width,Tt.height,E.format,E.type);for(const _t of E.layerUpdates){const Gt=Tt.data.subarray(_t*yt/Tt.data.BYTES_PER_ELEMENT,(_t+1)*yt/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,wt,$t,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,wt,$t,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,Tt.width,Tt.height,Tt.depth,0,wt,$t,Tt.data);else if(E.isData3DTexture)X?(bt&&i.texStorage3D(o.TEXTURE_3D,Ht,Ft,Tt.width,Tt.height,Tt.depth),Dt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,wt,$t,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Ft,Tt.width,Tt.height,Tt.depth,0,wt,$t,Tt.data);else if(E.isFramebufferTexture){if(bt)if(X)i.texStorage2D(o.TEXTURE_2D,Ht,Ft,Tt.width,Tt.height);else{let yt=Tt.width,_t=Tt.height;for(let Gt=0;Gt<Ht;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,Ft,yt,_t,0,wt,$t,null),yt>>=1,_t>>=1}}else if(ue.length>0){if(X&&bt){const yt=Ze(ue[0]);i.texStorage2D(o.TEXTURE_2D,Ht,Ft,yt.width,yt.height)}for(let yt=0,_t=ue.length;yt<_t;yt++)Nt=ue[yt],X?Dt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,wt,$t,Nt):i.texImage2D(o.TEXTURE_2D,yt,Ft,wt,$t,Nt);E.generateMipmaps=!1}else if(X){if(bt){const yt=Ze(Tt);i.texStorage2D(o.TEXTURE_2D,Ht,Ft,yt.width,yt.height)}Dt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,wt,$t,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Ft,wt,$t,Tt);y(E)&&_(ht),Qt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function lt(O,E,tt){if(E.image.length!==6)return;const ht=gt(O,E),xt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+tt);const ct=s.get(xt);if(xt.version!==ct.__version||ht===!0){i.activeTexture(o.TEXTURE0+tt);const Qt=Ce.getPrimaries(Ce.workingColorSpace),Ct=E.colorSpace===ka?null:Ce.getPrimaries(E.colorSpace),Yt=E.colorSpace===ka||Qt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const Zt=E.isCompressedTexture||E.image[0].isCompressedTexture,Tt=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let _t=0;_t<6;_t++)!Zt&&!Tt?wt[_t]=R(E.image[_t],!0,l.maxCubemapSize):wt[_t]=Tt?E.image[_t].image:E.image[_t],wt[_t]=Ie(E,wt[_t]);const $t=wt[0],Ft=c.convert(E.format,E.colorSpace),Nt=c.convert(E.type),ue=U(E.internalFormat,Ft,Nt,E.colorSpace),X=E.isVideoTexture!==!0,bt=ct.__version===void 0||ht===!0,Dt=xt.dataReady;let Ht=H(E,$t);nt(o.TEXTURE_CUBE_MAP,E);let yt;if(Zt){X&&bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ue,$t.width,$t.height);for(let _t=0;_t<6;_t++){yt=wt[_t].mipmaps;for(let Gt=0;Gt<yt.length;Gt++){const le=yt[Gt];E.format!==Ti?Ft!==null?X?Dt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,le.width,le.height,Ft,le.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,ue,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,0,0,le.width,le.height,Ft,Nt,le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt,ue,le.width,le.height,0,Ft,Nt,le.data)}}}else{if(yt=E.mipmaps,X&&bt){yt.length>0&&Ht++;const _t=Ze(wt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ue,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,wt[_t].width,wt[_t].height,Ft,Nt,wt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,wt[_t].width,wt[_t].height,0,Ft,Nt,wt[_t].data);for(let Gt=0;Gt<yt.length;Gt++){const Oe=yt[Gt].image[_t].image;X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,Oe.width,Oe.height,Ft,Nt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,ue,Oe.width,Oe.height,0,Ft,Nt,Oe.data)}}else{X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ft,Nt,wt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ue,Ft,Nt,wt[_t]);for(let Gt=0;Gt<yt.length;Gt++){const le=yt[Gt];X?Dt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,0,0,Ft,Nt,le.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Gt+1,ue,Ft,Nt,le.image[_t])}}}y(E)&&_(o.TEXTURE_CUBE_MAP),ct.__version=xt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Ut(O,E,tt,ht,xt,ct){const Qt=c.convert(tt.format,tt.colorSpace),Ct=c.convert(tt.type),Yt=U(tt.internalFormat,Qt,Ct,tt.colorSpace),Zt=s.get(E),Tt=s.get(tt);if(Tt.__renderTarget=E,!Zt.__hasExternalTextures){const wt=Math.max(1,E.width>>ct),$t=Math.max(1,E.height>>ct);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,ct,Yt,wt,$t,E.depth,0,Qt,Ct,null):i.texImage2D(xt,ct,Yt,wt,$t,0,Qt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Bt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,xt,Tt.__webglTexture,0,Te(E)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,xt,Tt.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(O,E,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const ht=E.depthTexture,xt=ht&&ht.isDepthTexture?ht.type:null,ct=w(E.stencilBuffer,xt),Qt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=Te(E);Bt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ct,E.width,E.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Qt,o.RENDERBUFFER,O)}else{const ht=E.textures;for(let xt=0;xt<ht.length;xt++){const ct=ht[xt],Qt=c.convert(ct.format,ct.colorSpace),Ct=c.convert(ct.type),Yt=U(ct.internalFormat,Qt,Ct,ct.colorSpace),Zt=Te(E);tt&&Bt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Yt,E.width,E.height):Bt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt,Yt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=s.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const xt=ht.__webglTexture,ct=Te(E);if(E.depthTexture.format===Go)Bt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,xt,0);else if(E.depthTexture.format===Vo)Bt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function Wt(O){const E=s.get(O),tt=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const ht=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const xt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",xt)};ht.addEventListener("dispose",xt),E.__depthDisposeCallback=xt}E.__boundDepthTexture=ht}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const ht=O.texture.mipmaps;ht&&ht.length>0?Rt(E.__webglFramebuffer[0],O):Rt(E.__webglFramebuffer,O)}else if(tt){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),Et(E.__webglDepthbuffer[ht],O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}else{const ht=O.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Et(E.__webglDepthbuffer,O,!1);else{const xt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,xt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Jt(O,E,tt){const ht=s.get(O);E!==void 0&&Ut(ht.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Wt(O)}function N(O){const E=O.texture,tt=s.get(O),ht=s.get(E);O.addEventListener("dispose",B);const xt=O.textures,ct=O.isWebGLCubeRenderTarget===!0,Qt=xt.length>1;if(Qt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),ct){tt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer[Ct]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)tt.__webglFramebuffer[Ct][Yt]=o.createFramebuffer()}else tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)tt.__webglFramebuffer[Ct]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(Qt)for(let Ct=0,Yt=xt.length;Ct<Yt;Ct++){const Zt=s.get(xt[Ct]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Bt(O)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<xt.length;Ct++){const Yt=xt[Ct];tt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct]);const Zt=c.convert(Yt.format,Yt.colorSpace),Tt=c.convert(Yt.type),wt=U(Yt.internalFormat,Zt,Tt,Yt.colorSpace,O.isXRRenderTarget===!0),$t=Te(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,$t,wt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Et(tt.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),nt(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Ut(tt.__webglFramebuffer[Ct][Yt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Yt);else Ut(tt.__webglFramebuffer[Ct],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let Ct=0,Yt=xt.length;Ct<Yt;Ct++){const Zt=xt[Ct],Tt=s.get(Zt);let wt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(wt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,Tt.__webglTexture),nt(wt,Zt),Ut(tt.__webglFramebuffer,O,Zt,o.COLOR_ATTACHMENT0+Ct,wt,0),y(Zt)&&_(wt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,ht.__webglTexture),nt(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Ut(tt.__webglFramebuffer[Yt],O,E,o.COLOR_ATTACHMENT0,Ct,Yt);else Ut(tt.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,Ct,0);y(E)&&_(Ct),i.unbindTexture()}O.depthBuffer&&Wt(O)}function oe(O){const E=O.textures;for(let tt=0,ht=E.length;tt<ht;tt++){const xt=E[tt];if(y(xt)){const ct=L(O),Qt=s.get(xt).__webglTexture;i.bindTexture(ct,Qt),_(ct),i.unbindTexture()}}}const Kt=[],jt=[];function It(O){if(O.samples>0){if(Bt(O)===!1){const E=O.textures,tt=O.width,ht=O.height;let xt=o.COLOR_BUFFER_BIT;const ct=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Qt=s.get(O),Ct=E.length>1;if(Ct)for(let Zt=0;Zt<E.length;Zt++)i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const Yt=O.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let Zt=0;Zt<E.length;Zt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Qt.__webglColorRenderbuffer[Zt]);const Tt=s.get(E[Zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Tt,0)}o.blitFramebuffer(0,0,tt,ht,0,0,tt,ht,xt,o.NEAREST),m===!0&&(Kt.length=0,jt.length=0,Kt.push(o.COLOR_ATTACHMENT0+Zt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Kt.push(ct),jt.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,jt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Kt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Zt=0;Zt<E.length;Zt++){i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,Qt.__webglColorRenderbuffer[Zt]);const Tt=s.get(E[Zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,Tt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Te(O){return Math.min(l.maxSamples,O.samples)}function Bt(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ae(O){const E=h.render.frame;S.get(O)!==E&&(S.set(O,E),O.update())}function Ie(O,E){const tt=O.colorSpace,ht=O.format,xt=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||tt!==Lr&&tt!==ka&&(Ce.getTransfer(tt)===Be?(ht!==Ti||xt!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),E}function Ze(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=$,this.setTexture2D=ft,this.setTexture2DArray=P,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Jt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Bt}function GA(o,t){function i(s,l=ka){let c;const h=Ce.getTransfer(l);if(s===Pi)return o.UNSIGNED_BYTE;if(s===Od)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Pd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===nv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===iv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===tv)return o.BYTE;if(s===ev)return o.SHORT;if(s===Fo)return o.UNSIGNED_SHORT;if(s===Nd)return o.INT;if(s===Es)return o.UNSIGNED_INT;if(s===ca)return o.FLOAT;if(s===qa)return o.HALF_FLOAT;if(s===av)return o.ALPHA;if(s===sv)return o.RGB;if(s===Ti)return o.RGBA;if(s===Go)return o.DEPTH_COMPONENT;if(s===Vo)return o.DEPTH_STENCIL;if(s===rv)return o.RED;if(s===zd)return o.RED_INTEGER;if(s===ov)return o.RG;if(s===Bd)return o.RG_INTEGER;if(s===Id)return o.RGBA_INTEGER;if(s===Nc||s===Oc||s===Pc||s===zc)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Nc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Nc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===td||s===ed||s===nd||s===id)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===td)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===id)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ad||s===sd||s===rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ad||s===sd)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===rd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===_d||s===gd||s===vd||s===Sd||s===xd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===od)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ld)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ud)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===md)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_d)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yd||s===Md||s===Ed)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===yd)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ed)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Td||s===bd||s===Ad||s===Rd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Td)return c.COMPRESSED_RED_RGTC1_EXT;if(s===bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ad)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ho?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const VA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Sv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new _i({vertexShader:VA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Dn(new Wc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends bs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,S=null,g=null,x=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new XA,_={},L=i.getContextAttributes();let U=null,w=null;const H=[],I=[],B=new se;let k=null;const D=new pi;D.viewport=new Ke;const C=new pi;C.viewport=new Ke;const G=[D,C],$=new uM;let ot=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let lt=H[it];return lt===void 0&&(lt=new Ch,H[it]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(it){let lt=H[it];return lt===void 0&&(lt=new Ch,H[it]=lt),lt.getGripSpace()},this.getHand=function(it){let lt=H[it];return lt===void 0&&(lt=new Ch,H[it]=lt),lt.getHandSpace()};function ft(it){const lt=I.indexOf(it.inputSource);if(lt===-1)return;const Ut=H[lt];Ut!==void 0&&(Ut.update(it.inputSource,it.frame,p||h),Ut.dispatchEvent({type:it.type,data:it.inputSource}))}function P(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Z);for(let it=0;it<H.length;it++){const lt=I[it];lt!==null&&(I[it]=null,H[it].disconnect(lt))}ot=null,pt=null,y.reset();for(const it in _)delete _[it];t.setRenderTarget(U),M=null,x=null,g=null,l=null,w=null,Lt.stop(),s.isPresenting=!1,t.setPixelRatio(k),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Z),L.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Et=null,Rt=null;L.depth&&(Rt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=L.stencil?Vo:Go,Et=L.stencil?Ho:Es);const Wt={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(Wt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),w=new zi(x.textureWidth,x.textureHeight,{format:Ti,type:Pi,depthTexture:new Xd(x.textureWidth,x.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ut={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new zi(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Lt.setContext(l),Lt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(it){for(let lt=0;lt<it.removed.length;lt++){const Ut=it.removed[lt],Et=I.indexOf(Ut);Et>=0&&(I[Et]=null,H[Et].disconnect(Ut))}for(let lt=0;lt<it.added.length;lt++){const Ut=it.added[lt];let Et=I.indexOf(Ut);if(Et===-1){for(let Wt=0;Wt<H.length;Wt++)if(Wt>=I.length){I.push(Ut),Et=Wt;break}else if(I[Wt]===null){I[Wt]=Ut,Et=Wt;break}if(Et===-1)break}const Rt=H[Et];Rt&&Rt.connect(Ut)}}const W=new Y,St=new Y;function Mt(it,lt,Ut){W.setFromMatrixPosition(lt.matrixWorld),St.setFromMatrixPosition(Ut.matrixWorld);const Et=W.distanceTo(St),Rt=lt.projectionMatrix.elements,Wt=Ut.projectionMatrix.elements,Jt=Rt[14]/(Rt[10]-1),N=Rt[14]/(Rt[10]+1),oe=(Rt[9]+1)/Rt[5],Kt=(Rt[9]-1)/Rt[5],jt=(Rt[8]-1)/Rt[0],It=(Wt[8]+1)/Wt[0],Te=Jt*jt,Bt=Jt*It,ae=Et/(-jt+It),Ie=ae*-jt;if(lt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ie),it.translateZ(ae),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Rt[10]===-1)it.projectionMatrix.copy(lt.projectionMatrix),it.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Ze=Jt+ae,O=N+ae,E=Te-Ie,tt=Bt+(Et-Ie),ht=oe*N/O*Ze,xt=Kt*N/O*Ze;it.projectionMatrix.makePerspective(E,tt,ht,xt,Ze,O),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function z(it,lt){lt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(lt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let lt=it.near,Ut=it.far;y.texture!==null&&(y.depthNear>0&&(lt=y.depthNear),y.depthFar>0&&(Ut=y.depthFar)),$.near=C.near=D.near=lt,$.far=C.far=D.far=Ut,(ot!==$.near||pt!==$.far)&&(l.updateRenderState({depthNear:$.near,depthFar:$.far}),ot=$.near,pt=$.far),$.layers.mask=it.layers.mask|6,D.layers.mask=$.layers.mask&3,C.layers.mask=$.layers.mask&5;const Et=it.parent,Rt=$.cameras;z($,Et);for(let Wt=0;Wt<Rt.length;Wt++)z(Rt[Wt],Et);Rt.length===2?Mt($,D,C):$.projectionMatrix.copy(D.projectionMatrix),nt(it,$,Et)};function nt(it,lt,Ut){Ut===null?it.matrix.copy(lt.matrixWorld):(it.matrix.copy(Ut.matrixWorld),it.matrix.invert(),it.matrix.multiply(lt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(lt.projectionMatrix),it.projectionMatrixInverse.copy(lt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Cd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(it){m=it,x!==null&&(x.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(it){return _[it]};let gt=null;function At(it,lt){if(S=lt.getViewerPose(p||h),b=lt,S!==null){const Ut=S.views;M!==null&&(t.setRenderTargetFramebuffer(w,M.framebuffer),t.setRenderTarget(w));let Et=!1;Ut.length!==$.cameras.length&&($.cameras.length=0,Et=!0);for(let N=0;N<Ut.length;N++){const oe=Ut[N];let Kt=null;if(M!==null)Kt=M.getViewport(oe);else{const It=g.getViewSubImage(x,oe);Kt=It.viewport,N===0&&(t.setRenderTargetTextures(w,It.colorTexture,It.depthStencilTexture),t.setRenderTarget(w))}let jt=G[N];jt===void 0&&(jt=new pi,jt.layers.enable(N),jt.viewport=new Ke,G[N]=jt),jt.matrix.fromArray(oe.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(oe.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),N===0&&($.matrix.copy(jt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Et===!0&&$.cameras.push(jt)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=s.getBinding();const N=g.getDepthInformation(Ut[0]);N&&N.isValid&&N.texture&&y.init(N,l.renderState)}if(Rt&&Rt.includes("camera-access")&&R){t.state.unbindTexture(),g=s.getBinding();for(let N=0;N<Ut.length;N++){const oe=Ut[N].camera;if(oe){let Kt=_[oe];Kt||(Kt=new Sv,_[oe]=Kt);const jt=g.getCameraImage(oe);Kt.sourceTexture=jt}}}}for(let Ut=0;Ut<H.length;Ut++){const Et=I[Ut],Rt=H[Ut];Et!==null&&Rt!==void 0&&Rt.update(Et,lt,p||h)}gt&&gt(it,lt),lt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:lt}),b=null}const Lt=new yv;Lt.setAnimationLoop(At),this.setAnimationLoop=function(it){gt=it},this.dispose=function(){}}}const gs=new Bi,qA=new $e;function YA(o,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function s(y,_){_.color.getRGB(y.fogColor.value,mv(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,L,U,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),g(y,_)):_.isMeshPhongMaterial?(c(y,_),S(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&M(y,_,w)):_.isMeshMatcapMaterial?(c(y,_),b(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),R(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(h(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?m(y,_,L,U):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Wn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Wn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const L=t.get(_),U=L.envMap,w=L.envMapRotation;U&&(y.envMap.value=U,gs.copy(w),gs.x*=-1,gs.y*=-1,gs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),y.envMapRotation.value.setFromMatrix4(qA.makeRotationFromEuler(gs)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function h(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,L,U){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*L,y.scale.value=U*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function S(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,L){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const L=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function jA(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const w=U.program;s.uniformBlockBinding(L,w)}function p(L,U){let w=l[L.id];w===void 0&&(b(L),w=S(L),l[L.id]=w,L.addEventListener("dispose",y));const H=U.program;s.updateUBOMapping(L,H);const I=t.render.frame;c[L.id]!==I&&(x(L),c[L.id]=I)}function S(L){const U=g();L.__bindingPointIndex=U;const w=o.createBuffer(),H=L.__size,I=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,H,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,w),w}function g(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=l[L.id],w=L.uniforms,H=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let I=0,B=w.length;I<B;I++){const k=Array.isArray(w[I])?w[I]:[w[I]];for(let D=0,C=k.length;D<C;D++){const G=k[D];if(M(G,I,D,H)===!0){const $=G.__offset,ot=Array.isArray(G.value)?G.value:[G.value];let pt=0;for(let ft=0;ft<ot.length;ft++){const P=ot[ft],Z=R(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,$+pt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,pt),pt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,$,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,U,w,H){const I=L.value,B=U+"_"+w;if(H[B]===void 0)return typeof I=="number"||typeof I=="boolean"?H[B]=I:H[B]=I.clone(),!0;{const k=H[B];if(typeof I=="number"||typeof I=="boolean"){if(k!==I)return H[B]=I,!0}else if(k.equals(I)===!1)return k.copy(I),!0}return!1}function b(L){const U=L.uniforms;let w=0;const H=16;for(let B=0,k=U.length;B<k;B++){const D=Array.isArray(U[B])?U[B]:[U[B]];for(let C=0,G=D.length;C<G;C++){const $=D[C],ot=Array.isArray($.value)?$.value:[$.value];for(let pt=0,ft=ot.length;pt<ft;pt++){const P=ot[pt],Z=R(P),W=w%H,St=W%Z.boundary,Mt=W+St;w+=St,Mt!==0&&H-Mt<Z.storage&&(w+=H-Mt),$.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=Z.storage}}}const I=w%H;return I>0&&(w+=H-I),L.__size=w,L.__cache={},this}function R(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),U}function y(L){const U=L.target;U.removeEventListener("dispose",y);const w=h.indexOf(U.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const L in l)o.deleteBuffer(l[L]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class ZA{constructor(t={}){const{canvas:i=Ty(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,_=null;const L=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let H=!1;this._outputColorSpace=di;let I=0,B=0,k=null,D=-1,C=null;const G=new Ke,$=new Ke;let ot=null;const pt=new Re(0);let ft=0,P=i.width,Z=i.height,W=1,St=null,Mt=null;const z=new Ke(0,0,P,Z),nt=new Ke(0,0,P,Z);let gt=!1;const At=new kd;let Lt=!1,it=!1;const lt=new $e,Ut=new Y,Et=new Ke,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function Jt(){return k===null?W:1}let N=s;function oe(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ud}`),i.addEventListener("webglcontextlost",Dt,!1),i.addEventListener("webglcontextrestored",Ht,!1),i.addEventListener("webglcontextcreationerror",yt,!1),N===null){const q="webgl2";if(N=oe(q,A),N===null)throw oe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Kt,jt,It,Te,Bt,ae,Ie,Ze,O,E,tt,ht,xt,ct,Qt,Ct,Yt,Zt,Tt,wt,$t,Ft,Nt,ue;function X(){Kt=new sb(N),Kt.init(),Ft=new GA(N,Kt),jt=new JT(N,Kt,t,Ft),It=new FA(N,Kt),jt.reversedDepthBuffer&&x&&It.buffers.depth.setReversed(!0),Te=new lb(N),Bt=new AA,ae=new HA(N,Kt,It,Bt,jt,Ft,Te),Ie=new tb(w),Ze=new ab(w),O=new pM(N),Nt=new KT(N,O),E=new rb(N,O,Te,Nt),tt=new ub(N,E,O,Te),Tt=new cb(N,jt,ae),Ct=new $T(Bt),ht=new bA(w,Ie,Ze,Kt,jt,Nt,Ct),xt=new YA(w,Bt),ct=new CA,Qt=new OA(Kt),Zt=new ZT(w,Ie,Ze,It,tt,M,m),Yt=new BA(w,tt,jt),ue=new jA(N,Te,jt,It),wt=new QT(N,Kt,Te),$t=new ob(N,Kt,Te),Te.programs=ht.programs,w.capabilities=jt,w.extensions=Kt,w.properties=Bt,w.renderLists=ct,w.shadowMap=Yt,w.state=It,w.info=Te}X();const bt=new WA(w,N);this.xr=bt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Kt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Kt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(P,Z,!1))},this.getSize=function(A){return A.set(P,Z)},this.setSize=function(A,q,at=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=A,Z=q,i.width=Math.floor(A*W),i.height=Math.floor(q*W),at===!0&&(i.style.width=A+"px",i.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(P*W,Z*W).floor()},this.setDrawingBufferSize=function(A,q,at){P=A,Z=q,W=at,i.width=Math.floor(A*at),i.height=Math.floor(q*at),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(z)},this.setViewport=function(A,q,at,st){A.isVector4?z.set(A.x,A.y,A.z,A.w):z.set(A,q,at,st),It.viewport(G.copy(z).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,q,at,st){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,q,at,st),It.scissor($.copy(nt).multiplyScalar(W).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(A){It.setScissorTest(gt=A)},this.setOpaqueSort=function(A){St=A},this.setTransparentSort=function(A){Mt=A},this.getClearColor=function(A){return A.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,at=!0){let st=0;if(A){let K=!1;if(k!==null){const vt=k.texture.format;K=vt===Id||vt===Bd||vt===zd}if(K){const vt=k.texture.type,Ot=vt===Pi||vt===Es||vt===Fo||vt===Ho||vt===Od||vt===Pd,kt=Zt.getClearColor(),zt=Zt.getClearAlpha(),te=kt.r,re=kt.g,ee=kt.b;Ot?(b[0]=te,b[1]=re,b[2]=ee,b[3]=zt,N.clearBufferuiv(N.COLOR,0,b)):(R[0]=te,R[1]=re,R[2]=ee,R[3]=zt,N.clearBufferiv(N.COLOR,0,R))}else st|=N.COLOR_BUFFER_BIT}q&&(st|=N.DEPTH_BUFFER_BIT),at&&(st|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Dt,!1),i.removeEventListener("webglcontextrestored",Ht,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),Zt.dispose(),ct.dispose(),Qt.dispose(),Bt.dispose(),Ie.dispose(),Ze.dispose(),tt.dispose(),Nt.dispose(),ue.dispose(),ht.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ii),bt.removeEventListener("sessionend",Pr),bi.stop()};function Dt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ht(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const A=Te.autoReset,q=Yt.enabled,at=Yt.autoUpdate,st=Yt.needsUpdate,K=Yt.type;X(),Te.autoReset=A,Yt.enabled=q,Yt.autoUpdate=at,Yt.needsUpdate=st,Yt.type=K}function yt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const q=A.target;q.removeEventListener("dispose",_t),Gt(q)}function Gt(A){le(A),Bt.remove(A)}function le(A){const q=Bt.get(A).programs;q!==void 0&&(q.forEach(function(at){ht.releaseProgram(at)}),A.isShaderMaterial&&ht.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,at,st,K,vt){q===null&&(q=Rt);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,kt=ha(A,q,at,st,K);It.setMaterial(st,Ot);let zt=at.index,te=1;if(st.wireframe===!0){if(zt=E.getWireframeAttribute(at),zt===void 0)return;te=2}const re=at.drawRange,ee=at.attributes.position;let me=re.start*te,Le=(re.start+re.count)*te;vt!==null&&(me=Math.max(me,vt.start*te),Le=Math.min(Le,(vt.start+vt.count)*te)),zt!==null?(me=Math.max(me,0),Le=Math.min(Le,zt.count)):ee!=null&&(me=Math.max(me,0),Le=Math.min(Le,ee.count));const ke=Le-me;if(ke<0||ke===1/0)return;Nt.setup(K,st,kt,at,zt);let Ne,_e=wt;if(zt!==null&&(Ne=O.get(zt),_e=$t,_e.setIndex(Ne)),K.isMesh)st.wireframe===!0?(It.setLineWidth(st.wireframeLinewidth*Jt()),_e.setMode(N.LINES)):_e.setMode(N.TRIANGLES);else if(K.isLine){let Xt=st.linewidth;Xt===void 0&&(Xt=1),It.setLineWidth(Xt*Jt()),K.isLineSegments?_e.setMode(N.LINES):K.isLineLoop?_e.setMode(N.LINE_LOOP):_e.setMode(N.LINE_STRIP)}else K.isPoints?_e.setMode(N.POINTS):K.isSprite&&_e.setMode(N.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ko("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_e.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))_e.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Xt=K._multiDrawStarts,We=K._multiDrawCounts,Ae=K._multiDrawCount,xn=zt?O.get(zt).bytesPerElement:1,Ii=Bt.get(st).currentProgram.getUniforms();for(let mn=0;mn<Ae;mn++)Ii.setValue(N,"_gl_DrawID",mn),_e.render(Xt[mn]/xn,We[mn])}else if(K.isInstancedMesh)_e.renderInstances(me,ke,K.count);else if(at.isInstancedBufferGeometry){const Xt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,We=Math.min(at.instanceCount,Xt);_e.renderInstances(me,ke,We)}else _e.render(me,ke)};function Oe(A,q,at){A.transparent===!0&&A.side===la&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,Yn(A,q,at),A.side=Wa,A.needsUpdate=!0,Yn(A,q,at),A.side=la):Yn(A,q,at)}this.compile=function(A,q,at=null){at===null&&(at=A),_=Qt.get(at),_.init(q),U.push(_),at.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),A!==at&&A.traverseVisible(function(K){K.isLight&&K.layers.test(q.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const st=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const vt=K.material;if(vt)if(Array.isArray(vt))for(let Ot=0;Ot<vt.length;Ot++){const kt=vt[Ot];Oe(kt,at,K),st.add(kt)}else Oe(vt,at,K),st.add(vt)}),_=U.pop(),st},this.compileAsync=function(A,q,at=null){const st=this.compile(A,q,at);return new Promise(K=>{function vt(){if(st.forEach(function(Ot){Bt.get(Ot).currentProgram.isReady()&&st.delete(Ot)}),st.size===0){K(A);return}setTimeout(vt,10)}Kt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let be=null;function Un(A){be&&be(A)}function ii(){bi.stop()}function Pr(){bi.start()}const bi=new yv;bi.setAnimationLoop(Un),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){be=A,bt.setAnimationLoop(A),A===null?bi.stop():bi.start()},bt.addEventListener("sessionstart",ii),bt.addEventListener("sessionend",Pr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,q,k),_=Qt.get(A,U.length),_.init(q),U.push(_),lt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),At.setFromProjectionMatrix(lt,Ni,q.reversedDepth),it=this.localClippingEnabled,Lt=Ct.init(this.clippingPlanes,it),y=ct.get(A,L.length),y.init(),L.push(y),bt.enabled===!0&&bt.isPresenting===!0){const vt=w.xr.getDepthSensingMesh();vt!==null&&Rs(vt,q,-1/0,w.sortObjects)}Rs(A,q,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(St,Mt),Wt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Wt&&Zt.addToRenderList(y,A),this.info.render.frame++,Lt===!0&&Ct.beginShadows();const at=_.state.shadowsArray;Yt.render(at,A,q),Lt===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,K=y.transmissive;if(_.setupLights(),q.isArrayCamera){const vt=q.cameras;if(K.length>0)for(let Ot=0,kt=vt.length;Ot<kt;Ot++){const zt=vt[Ot];ws(st,K,A,zt)}Wt&&Zt.render(A);for(let Ot=0,kt=vt.length;Ot<kt;Ot++){const zt=vt[Ot];Cs(y,A,zt,zt.viewport)}}else K.length>0&&ws(st,K,A,q),Wt&&Zt.render(A),Cs(y,A,q);k!==null&&B===0&&(ae.updateMultisampleRenderTarget(k),ae.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(w,A,q),Nt.resetDefaultState(),D=-1,C=null,U.pop(),U.length>0?(_=U[U.length-1],Lt===!0&&Ct.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function Rs(A,q,at,st){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||At.intersectsSprite(A)){st&&Et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);const Ot=tt.update(A),kt=A.material;kt.visible&&y.push(A,Ot,kt,at,Et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||At.intersectsObject(A))){const Ot=tt.update(A),kt=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Et.copy(A.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),Et.copy(Ot.boundingSphere.center)),Et.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(kt)){const zt=Ot.groups;for(let te=0,re=zt.length;te<re;te++){const ee=zt[te],me=kt[ee.materialIndex];me&&me.visible&&y.push(A,Ot,me,at,Et.z,ee)}}else kt.visible&&y.push(A,Ot,kt,at,Et.z,null)}}const vt=A.children;for(let Ot=0,kt=vt.length;Ot<kt;Ot++)Rs(vt[Ot],q,at,st)}function Cs(A,q,at,st){const K=A.opaque,vt=A.transmissive,Ot=A.transparent;_.setupLightsView(at),Lt===!0&&Ct.setGlobalState(w.clippingPlanes,at),st&&It.viewport(G.copy(st)),K.length>0&&Ya(K,q,at),vt.length>0&&Ya(vt,q,at),Ot.length>0&&Ya(Ot,q,at),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function ws(A,q,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[st.id]===void 0&&(_.state.transmissionRenderTarget[st.id]=new zi(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?qa:Pi,minFilter:Ms,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ce.workingColorSpace}));const vt=_.state.transmissionRenderTarget[st.id],Ot=st.viewport||G;vt.setSize(Ot.z*w.transmissionResolutionScale,Ot.w*w.transmissionResolutionScale);const kt=w.getRenderTarget(),zt=w.getActiveCubeFace(),te=w.getActiveMipmapLevel();w.setRenderTarget(vt),w.getClearColor(pt),ft=w.getClearAlpha(),ft<1&&w.setClearColor(16777215,.5),w.clear(),Wt&&Zt.render(at);const re=w.toneMapping;w.toneMapping=Xa;const ee=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),_.setupLightsView(st),Lt===!0&&Ct.setGlobalState(w.clippingPlanes,st),Ya(A,at,st),ae.updateMultisampleRenderTarget(vt),ae.updateRenderTargetMipmap(vt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let me=!1;for(let Le=0,ke=q.length;Le<ke;Le++){const Ne=q[Le],_e=Ne.object,Xt=Ne.geometry,We=Ne.material,Ae=Ne.group;if(We.side===la&&_e.layers.test(st.layers)){const xn=We.side;We.side=Wn,We.needsUpdate=!0,zr(_e,at,st,Xt,We,Ae),We.side=xn,We.needsUpdate=!0,me=!0}}me===!0&&(ae.updateMultisampleRenderTarget(vt),ae.updateRenderTargetMipmap(vt))}w.setRenderTarget(kt,zt,te),w.setClearColor(pt,ft),ee!==void 0&&(st.viewport=ee),w.toneMapping=re}function Ya(A,q,at){const st=q.isScene===!0?q.overrideMaterial:null;for(let K=0,vt=A.length;K<vt;K++){const Ot=A[K],kt=Ot.object,zt=Ot.geometry,te=Ot.group;let re=Ot.material;re.allowOverride===!0&&st!==null&&(re=st),kt.layers.test(at.layers)&&zr(kt,q,at,zt,re,te)}}function zr(A,q,at,st,K,vt){A.onBeforeRender(w,q,at,st,K,vt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(w,q,at,st,A,vt),K.transparent===!0&&K.side===la&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,w.renderBufferDirect(at,q,st,K,A,vt),K.side=Wa,K.needsUpdate=!0,w.renderBufferDirect(at,q,st,K,A,vt),K.side=la):w.renderBufferDirect(at,q,st,K,A,vt),A.onAfterRender(w,q,at,st,K,vt)}function Yn(A,q,at){q.isScene!==!0&&(q=Rt);const st=Bt.get(A),K=_.state.lights,vt=_.state.shadowsArray,Ot=K.state.version,kt=ht.getParameters(A,K.state,vt,q,at),zt=ht.getProgramCacheKey(kt);let te=st.programs;st.environment=A.isMeshStandardMaterial?q.environment:null,st.fog=q.fog,st.envMap=(A.isMeshStandardMaterial?Ze:Ie).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,te===void 0&&(A.addEventListener("dispose",_t),te=new Map,st.programs=te);let re=te.get(zt);if(re!==void 0){if(st.currentProgram===re&&st.lightsStateVersion===Ot)return Sn(A,kt),re}else kt.uniforms=ht.getUniforms(A),A.onBeforeCompile(kt,w),re=ht.acquireProgram(kt,zt),te.set(zt,re),st.uniforms=kt.uniforms;const ee=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ee.clippingPlanes=Ct.uniform),Sn(A,kt),st.needsLights=Yc(A),st.lightsStateVersion=Ot,st.needsLights&&(ee.ambientLightColor.value=K.state.ambient,ee.lightProbe.value=K.state.probe,ee.directionalLights.value=K.state.directional,ee.directionalLightShadows.value=K.state.directionalShadow,ee.spotLights.value=K.state.spot,ee.spotLightShadows.value=K.state.spotShadow,ee.rectAreaLights.value=K.state.rectArea,ee.ltc_1.value=K.state.rectAreaLTC1,ee.ltc_2.value=K.state.rectAreaLTC2,ee.pointLights.value=K.state.point,ee.pointLightShadows.value=K.state.pointShadow,ee.hemisphereLights.value=K.state.hemi,ee.directionalShadowMap.value=K.state.directionalShadowMap,ee.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ee.spotShadowMap.value=K.state.spotShadowMap,ee.spotLightMatrix.value=K.state.spotLightMatrix,ee.spotLightMap.value=K.state.spotLightMap,ee.pointShadowMap.value=K.state.pointShadowMap,ee.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=re,st.uniformsList=null,re}function an(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Bc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Sn(A,q){const at=Bt.get(A);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function ha(A,q,at,st,K){q.isScene!==!0&&(q=Rt),ae.resetTextureUnits();const vt=q.fog,Ot=st.isMeshStandardMaterial?q.environment:null,kt=k===null?w.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Lr,zt=(st.isMeshStandardMaterial?Ze:Ie).get(st.envMap||Ot),te=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,re=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),ee=!!at.morphAttributes.position,me=!!at.morphAttributes.normal,Le=!!at.morphAttributes.color;let ke=Xa;st.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ke=w.toneMapping);const Ne=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,_e=Ne!==void 0?Ne.length:0,Xt=Bt.get(st),We=_.state.lights;if(Lt===!0&&(it===!0||A!==C)){const un=A===C&&st.id===D;Ct.setState(st,A,un)}let Ae=!1;st.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==We.state.version||Xt.outputColorSpace!==kt||K.isBatchedMesh&&Xt.batching===!1||!K.isBatchedMesh&&Xt.batching===!0||K.isBatchedMesh&&Xt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Xt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Xt.instancing===!1||!K.isInstancedMesh&&Xt.instancing===!0||K.isSkinnedMesh&&Xt.skinning===!1||!K.isSkinnedMesh&&Xt.skinning===!0||K.isInstancedMesh&&Xt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Xt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Xt.instancingMorph===!1&&K.morphTexture!==null||Xt.envMap!==zt||st.fog===!0&&Xt.fog!==vt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Ct.numPlanes||Xt.numIntersection!==Ct.numIntersection)||Xt.vertexAlphas!==te||Xt.vertexTangents!==re||Xt.morphTargets!==ee||Xt.morphNormals!==me||Xt.morphColors!==Le||Xt.toneMapping!==ke||Xt.morphTargetsCount!==_e)&&(Ae=!0):(Ae=!0,Xt.__version=st.version);let xn=Xt.currentProgram;Ae===!0&&(xn=Yn(st,q,K));let Ii=!1,mn=!1,Za=!1;const xe=xn.getUniforms(),An=Xt.uniforms;if(It.useProgram(xn.program)&&(Ii=!0,mn=!0,Za=!0),st.id!==D&&(D=st.id,mn=!0),Ii||C!==A){It.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xe.setValue(N,"projectionMatrix",A.projectionMatrix),xe.setValue(N,"viewMatrix",A.matrixWorldInverse);const tn=xe.map.cameraPosition;tn!==void 0&&tn.setValue(N,Ut.setFromMatrixPosition(A.matrixWorld)),jt.logarithmicDepthBuffer&&xe.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&xe.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,mn=!0,Za=!0)}if(K.isSkinnedMesh){xe.setOptional(N,K,"bindMatrix"),xe.setOptional(N,K,"bindMatrixInverse");const un=K.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),xe.setValue(N,"boneTexture",un.boneTexture,ae))}K.isBatchedMesh&&(xe.setOptional(N,K,"batchingTexture"),xe.setValue(N,"batchingTexture",K._matricesTexture,ae),xe.setOptional(N,K,"batchingIdTexture"),xe.setValue(N,"batchingIdTexture",K._indirectTexture,ae),xe.setOptional(N,K,"batchingColorTexture"),K._colorsTexture!==null&&xe.setValue(N,"batchingColorTexture",K._colorsTexture,ae));const Ln=at.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&Tt.update(K,at,xn),(mn||Xt.receiveShadow!==K.receiveShadow)&&(Xt.receiveShadow=K.receiveShadow,xe.setValue(N,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(An.envMap.value=zt,An.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&q.environment!==null&&(An.envMapIntensity.value=q.environmentIntensity),mn&&(xe.setValue(N,"toneMappingExposure",w.toneMappingExposure),Xt.needsLights&&Br(An,Za),vt&&st.fog===!0&&xt.refreshFogUniforms(An,vt),xt.refreshMaterialUniforms(An,st,W,Z,_.state.transmissionRenderTarget[A.id]),Bc.upload(N,an(Xt),An,ae)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Bc.upload(N,an(Xt),An,ae),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&xe.setValue(N,"center",K.center),xe.setValue(N,"modelViewMatrix",K.modelViewMatrix),xe.setValue(N,"normalMatrix",K.normalMatrix),xe.setValue(N,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const un=st.uniformsGroups;for(let tn=0,Ds=un.length;tn<Ds;tn++){const Ai=un[tn];ue.update(Ai,xn),ue.bind(Ai,xn)}}return xn}function Br(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Yc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,q,at){const st=Bt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Bt.get(A.texture).__webglTexture=q,Bt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const at=Bt.get(A);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0};const jc=N.createFramebuffer();this.setRenderTarget=function(A,q=0,at=0){k=A,I=q,B=at;let st=!0,K=null,vt=!1,Ot=!1;if(A){const zt=Bt.get(A);if(zt.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(N.FRAMEBUFFER,null),st=!1;else if(zt.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(zt.__hasExternalTextures)ae.rebindTextures(A,Bt.get(A.texture).__webglTexture,Bt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ee=A.depthTexture;if(zt.__boundDepthTexture!==ee){if(ee!==null&&Bt.has(ee)&&(A.width!==ee.image.width||A.height!==ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const te=A.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ot=!0);const re=Bt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(re[q])?K=re[q][at]:K=re[q],vt=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?K=Bt.get(A).__webglMultisampledFramebuffer:Array.isArray(re)?K=re[at]:K=re,G.copy(A.viewport),$.copy(A.scissor),ot=A.scissorTest}else G.copy(z).multiplyScalar(W).floor(),$.copy(nt).multiplyScalar(W).floor(),ot=gt;if(at!==0&&(K=jc),It.bindFramebuffer(N.FRAMEBUFFER,K)&&st&&It.drawBuffers(A,K),It.viewport(G),It.scissor($),It.setScissorTest(ot),vt){const zt=Bt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,at)}else if(Ot){const zt=q;for(let te=0;te<A.textures.length;te++){const re=Bt.get(A.textures[te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+te,re.__webglTexture,at,zt)}}else if(A!==null&&at!==0){const zt=Bt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,zt.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(A,q,at,st,K,vt,Ot,kt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){It.bindFramebuffer(N.FRAMEBUFFER,zt);try{const te=A.textures[kt],re=te.format,ee=te.type;if(!jt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-st&&at>=0&&at<=A.height-K&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+kt),N.readPixels(q,at,st,K,Ft.convert(re),Ft.convert(ee),vt))}finally{const te=k!==null?Bt.get(k).__webglFramebuffer:null;It.bindFramebuffer(N.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(A,q,at,st,K,vt,Ot,kt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Bt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(q>=0&&q<=A.width-st&&at>=0&&at<=A.height-K){It.bindFramebuffer(N.FRAMEBUFFER,zt);const te=A.textures[kt],re=te.format,ee=te.type;if(!jt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.bufferData(N.PIXEL_PACK_BUFFER,vt.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+kt),N.readPixels(q,at,st,K,Ft.convert(re),Ft.convert(ee),0);const Le=k!==null?Bt.get(k).__webglFramebuffer:null;It.bindFramebuffer(N.FRAMEBUFFER,Le);const ke=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await by(N,ke,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,vt),N.deleteBuffer(me),N.deleteSync(ke),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,at=0){const st=Math.pow(2,-at),K=Math.floor(A.image.width*st),vt=Math.floor(A.image.height*st),Ot=q!==null?q.x:0,kt=q!==null?q.y:0;ae.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,at,0,0,Ot,kt,K,vt),It.unbindTexture()};const jo=N.createFramebuffer(),ja=N.createFramebuffer();this.copyTextureToTexture=function(A,q,at=null,st=null,K=0,vt=null){vt===null&&(K!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=K,K=0):vt=0);let Ot,kt,zt,te,re,ee,me,Le,ke;const Ne=A.isCompressedTexture?A.mipmaps[vt]:A.image;if(at!==null)Ot=at.max.x-at.min.x,kt=at.max.y-at.min.y,zt=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,re=at.min.y,ee=at.isBox3?at.min.z:0;else{const Ln=Math.pow(2,-K);Ot=Math.floor(Ne.width*Ln),kt=Math.floor(Ne.height*Ln),A.isDataArrayTexture?zt=Ne.depth:A.isData3DTexture?zt=Math.floor(Ne.depth*Ln):zt=1,te=0,re=0,ee=0}st!==null?(me=st.x,Le=st.y,ke=st.z):(me=0,Le=0,ke=0);const _e=Ft.convert(q.format),Xt=Ft.convert(q.type);let We;q.isData3DTexture?(ae.setTexture3D(q,0),We=N.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ae.setTexture2DArray(q,0),We=N.TEXTURE_2D_ARRAY):(ae.setTexture2D(q,0),We=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,q.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,q.unpackAlignment);const Ae=N.getParameter(N.UNPACK_ROW_LENGTH),xn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ii=N.getParameter(N.UNPACK_SKIP_PIXELS),mn=N.getParameter(N.UNPACK_SKIP_ROWS),Za=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ne.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ne.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,te),N.pixelStorei(N.UNPACK_SKIP_ROWS,re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ee);const xe=A.isDataArrayTexture||A.isData3DTexture,An=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Ln=Bt.get(A),un=Bt.get(q),tn=Bt.get(Ln.__renderTarget),Ds=Bt.get(un.__renderTarget);It.bindFramebuffer(N.READ_FRAMEBUFFER,tn.__webglFramebuffer),It.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Ai=0;Ai<zt;Ai++)xe&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.get(A).__webglTexture,K,ee+Ai),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Bt.get(q).__webglTexture,vt,ke+Ai)),N.blitFramebuffer(te,re,Ot,kt,me,Le,Ot,kt,N.DEPTH_BUFFER_BIT,N.NEAREST);It.bindFramebuffer(N.READ_FRAMEBUFFER,null),It.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Bt.has(A)){const Ln=Bt.get(A),un=Bt.get(q);It.bindFramebuffer(N.READ_FRAMEBUFFER,jo),It.bindFramebuffer(N.DRAW_FRAMEBUFFER,ja);for(let tn=0;tn<zt;tn++)xe?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ln.__webglTexture,K,ee+tn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ln.__webglTexture,K),An?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,un.__webglTexture,vt,ke+tn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,un.__webglTexture,vt),K!==0?N.blitFramebuffer(te,re,Ot,kt,me,Le,Ot,kt,N.COLOR_BUFFER_BIT,N.NEAREST):An?N.copyTexSubImage3D(We,vt,me,Le,ke+tn,te,re,Ot,kt):N.copyTexSubImage2D(We,vt,me,Le,te,re,Ot,kt);It.bindFramebuffer(N.READ_FRAMEBUFFER,null),It.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(We,vt,me,Le,ke,Ot,kt,zt,_e,Xt,Ne.data):q.isCompressedArrayTexture?N.compressedTexSubImage3D(We,vt,me,Le,ke,Ot,kt,zt,_e,Ne.data):N.texSubImage3D(We,vt,me,Le,ke,Ot,kt,zt,_e,Xt,Ne):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,vt,me,Le,Ot,kt,_e,Xt,Ne.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,vt,me,Le,Ne.width,Ne.height,_e,Ne.data):N.texSubImage2D(N.TEXTURE_2D,vt,me,Le,Ot,kt,_e,Xt,Ne);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ae),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ii),N.pixelStorei(N.UNPACK_SKIP_ROWS,mn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Za),vt===0&&q.generateMipmaps&&N.generateMipmap(We),It.unbindTexture()},this.initRenderTarget=function(A){Bt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),It.unbindTexture()},this.resetState=function(){I=0,B=0,k=null,It.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ce._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ce._getUnpackColorSpace()}}const V0={type:"change"},jd={type:"start"},Av={type:"end"},Uc=new Gd,k0=new Va,KA=Math.cos(70*Ey.DEG2RAD),hn=new Y,Xn=2*Math.PI,Ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6;class QA extends hM{constructor(t,i=null){super(t,i),this.state=Ve.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Ts,this._lastTargetPosition=new Y,this._quat=new Ts().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _0,this._sphericalDelta=new _0,this._scale=1,this._panOffset=new Y,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new Y,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$A.bind(this),this._onPointerDown=JA.bind(this),this._onPointerUp=t1.bind(this),this._onContextMenu=o1.bind(this),this._onMouseWheel=i1.bind(this),this._onKeyDown=a1.bind(this),this._onTouchStart=s1.bind(this),this._onTouchMove=r1.bind(this),this._onMouseDown=e1.bind(this),this._onMouseMove=n1.bind(this),this._interceptControlDown=l1.bind(this),this._interceptControlUp=c1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(V0),this.update(),this.state=Ve.NONE}update(t=null){const i=this.object.position;hn.copy(i).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),i.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=hn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Y(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Y(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Uc.origin.copy(this.object.position),Uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uc.direction))<KA?this.object.lookAt(this.target):(k0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uc.intersectPlane(k0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(V0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){hn.setFromMatrixColumn(i,0),hn.multiplyScalar(-t),this._panOffset.add(hn)}_panUp(t,i){this.screenSpacePanning===!0?hn.setFromMatrixColumn(i,1):(hn.setFromMatrixColumn(i,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(t),this._panOffset.add(hn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;hn.copy(l).sub(this.target);let c=hn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new se,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function JA(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function $A(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function t1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Av),this.state=Ve.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function e1(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ve.DOLLY;break;case Ar.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ve.ROTATE}break;case Ar.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ve.PAN}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(jd)}function n1(o){switch(this.state){case Ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function i1(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ve.NONE||(o.preventDefault(),this.dispatchEvent(jd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Av))}function a1(o){this.enabled!==!1&&this._handleKeyDown(o)}function s1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ve.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ve.TOUCH_PAN;break;default:this.state=Ve.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ve.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ve.TOUCH_DOLLY_ROTATE;break;default:this.state=Ve.NONE}break;default:this.state=Ve.NONE}this.state!==Ve.NONE&&this.dispatchEvent(jd)}function r1(o){switch(this._trackPointer(o),this.state){case Ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ve.NONE}}function o1(o){this.enabled!==!1&&o.preventDefault()}function l1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function c1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const u1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Yo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const f1=new qd(-1,1,1,-1,0,1);class h1 extends gi{constructor(){super(),this.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vn([0,2,0,0,2,0],2))}}const d1=new h1;class Zd{constructor(t){this._mesh=new Dn(d1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,f1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class p1 extends Yo{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof _i?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vd.clone(t.uniforms),this.material=new _i({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Zd(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class X0 extends Yo{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class m1 extends Yo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _1{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new se);this._width=s.width,this._height=s.height,i=new zi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qa}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new p1(u1),this.copyPass.material.blending=ua,this.clock=new fM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),h.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}X0!==void 0&&(h instanceof X0?s=!0:h instanceof m1&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class g1 extends Yo{constructor(t,i,s,l={}){super(),this.pixelSize=t,this.scene=i,this.camera=s,this.normalEdgeStrength=l.normalEdgeStrength||.3,this.depthEdgeStrength=l.depthEdgeStrength||.4,this.pixelatedMaterial=this._createPixelatedMaterial(),this._resolution=new se,this._renderResolution=new se,this._normalMaterial=new iM,this._beautyRenderTarget=new zi,this._beautyRenderTarget.texture.minFilter=zn,this._beautyRenderTarget.texture.magFilter=zn,this._beautyRenderTarget.texture.type=qa,this._beautyRenderTarget.depthTexture=new Xd,this._normalRenderTarget=new zi,this._normalRenderTarget.texture.minFilter=zn,this._normalRenderTarget.texture.magFilter=zn,this._normalRenderTarget.texture.type=qa,this._fsQuad=new Zd(this.pixelatedMaterial)}dispose(){this._beautyRenderTarget.dispose(),this._normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this._normalMaterial.dispose(),this._fsQuad.dispose()}setSize(t,i){this._resolution.set(t,i),this._renderResolution.set(t/this.pixelSize|0,i/this.pixelSize|0);const{x:s,y:l}=this._renderResolution;this._beautyRenderTarget.setSize(s,l),this._normalRenderTarget.setSize(s,l),this._fsQuad.material.uniforms.resolution.value.set(s,l,1/s,1/l)}setPixelSize(t){this.pixelSize=t,this.setSize(this._resolution.x,this._resolution.y)}render(t,i){const s=this._fsQuad.material.uniforms;s.normalEdgeStrength.value=this.normalEdgeStrength,s.depthEdgeStrength.value=this.depthEdgeStrength,t.setRenderTarget(this._beautyRenderTarget),t.render(this.scene,this.camera);const l=this.scene.overrideMaterial;t.setRenderTarget(this._normalRenderTarget),this.scene.overrideMaterial=this._normalMaterial,t.render(this.scene,this.camera),this.scene.overrideMaterial=l,s.tDiffuse.value=this._beautyRenderTarget.texture,s.tDepth.value=this._beautyRenderTarget.depthTexture,s.tNormal.value=this._normalRenderTarget.texture,this.renderToScreen?t.setRenderTarget(null):(t.setRenderTarget(i),this.clear&&t.clear()),this._fsQuad.render(t)}_createPixelatedMaterial(){return new _i({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new Ke},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D tDiffuse;
				uniform sampler2D tDepth;
				uniform sampler2D tNormal;
				uniform vec4 resolution;
				uniform float normalEdgeStrength;
				uniform float depthEdgeStrength;
				varying vec2 vUv;

				float getDepth(int x, int y) {

					return texture2D( tDepth, vUv + vec2(x, y) * resolution.zw ).r;

				}

				vec3 getNormal(int x, int y) {

					return texture2D( tNormal, vUv + vec2(x, y) * resolution.zw ).rgb * 2.0 - 1.0;

				}

				float depthEdgeIndicator(float depth, vec3 normal) {

					float diff = 0.0;
					diff += clamp(getDepth(1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(-1, 0) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, 1) - depth, 0.0, 1.0);
					diff += clamp(getDepth(0, -1) - depth, 0.0, 1.0);
					return floor(smoothstep(0.01, 0.02, diff) * 2.) / 2.;

				}

				float neighborNormalEdgeIndicator(int x, int y, float depth, vec3 normal) {

					float depthDiff = getDepth(x, y) - depth;
					vec3 neighborNormal = getNormal(x, y);

					// Edge pixels should yield to faces who's normals are closer to the bias normal.
					vec3 normalEdgeBias = vec3(1., 1., 1.); // This should probably be a parameter.
					float normalDiff = dot(normal - neighborNormal, normalEdgeBias);
					float normalIndicator = clamp(smoothstep(-.01, .01, normalDiff), 0.0, 1.0);

					// Only the shallower pixel should detect the normal edge.
					float depthIndicator = clamp(sign(depthDiff * .25 + .0025), 0.0, 1.0);

					return (1.0 - dot(normal, neighborNormal)) * depthIndicator * normalIndicator;

				}

				float normalEdgeIndicator(float depth, vec3 normal) {

					float indicator = 0.0;

					indicator += neighborNormalEdgeIndicator(0, -1, depth, normal);
					indicator += neighborNormalEdgeIndicator(0, 1, depth, normal);
					indicator += neighborNormalEdgeIndicator(-1, 0, depth, normal);
					indicator += neighborNormalEdgeIndicator(1, 0, depth, normal);

					return step(0.1, indicator);

				}

				void main() {

					vec4 texel = texture2D( tDiffuse, vUv );

					float depth = 0.0;
					vec3 normal = vec3(0.0);

					if (depthEdgeStrength > 0.0 || normalEdgeStrength > 0.0) {

						depth = getDepth(0, 0);
						normal = getNormal(0, 0);

					}

					float dei = 0.0;
					if (depthEdgeStrength > 0.0)
						dei = depthEdgeIndicator(depth, normal);

					float nei = 0.0;
					if (normalEdgeStrength > 0.0)
						nei = normalEdgeIndicator(depth, normal);

					float Strength = dei > 0.0 ? (1.0 - depthEdgeStrength * dei) : (1.0 + normalEdgeStrength * nei);

					gl_FragColor = texel * Strength;

				}
			`})}}const Lc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class v1 extends Yo{constructor(){super(),this.uniforms=Vd.clone(Lc.uniforms),this.material=new nM({name:Lc.name,uniforms:this.uniforms,vertexShader:Lc.vertexShader,fragmentShader:Lc.fragmentShader}),this._fsQuad=new Zd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ce.getTransfer(this._outputColorSpace)===Be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===q0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Y0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===j0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Z0?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Q0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===J0?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===K0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function S1(){const o=Er.useRef(null),[t,i]=Er.useState(50),[s,l]=Er.useState(45),[c,h]=Er.useState(0);Er.useEffect(()=>{const m=o.current,p=new Zy;p.background=new Re(16777215);const S=new pi(75,m.clientWidth/m.clientHeight,.1,1e3);S.position.set(0,0,50);const g=new ZA({antialias:!0});g.setSize(m.clientWidth,m.clientHeight),m.appendChild(g.domElement);const x=new _1(g),M={normalEdgeStrength:2,depthEdgeStrength:1},b=new g1(4,p,S,M);x.addPass(b);const R=new v1;x.addPass(R);const y=new QA(S,g.domElement);y.enableDamping=!0;const _=new Bo(20,6),L=new Lh({color:2236962,flatShading:!0}),U=new eM(_),w=new vv({color:3342336}),H=new tM(U,w);p.add(H);const I=new Dn(_,L);p.add(I),_.attributes.position.array.slice();const B=new Io(.3,4,4),k=new zo({color:4473924});for(let Et=0;Et<200;Et++){const Rt=new Dn(B,k),Wt=100+Math.random()*50,Jt=Math.random()*Math.PI*2,N=Math.acos(2*Math.random()-1);Rt.position.x=Wt*Math.sin(N)*Math.cos(Jt),Rt.position.y=Wt*Math.cos(N),Rt.position.z=Wt*Math.sin(N)*Math.sin(Jt),p.add(Rt)}const D=new cM(16777215,1);p.add(D);const C=new lM(16777215,10,0);C.position.set(0,0,25),p.add(C);const G=new Bo(1),$=new Lh({color:65280}),ot=new Dn(G,$);ot.position.set(0,0,21),p.add(ot);const pt=[],ft=new Lh({color:16711680});for(let Et=0;Et<12;Et++){const Rt=Math.random()*Math.PI*2,Wt=Math.acos(2*Math.random()-1),Jt=new Bo(1),N=new Dn(Jt,ft),oe=new Y(21*Math.sin(Wt)*Math.cos(Rt),21*Math.cos(Wt),21*Math.sin(Wt)*Math.sin(Rt));N.position.copy(oe),N.lookAt(oe.clone().multiplyScalar(2)),p.add(N),pt.push(N)}let P=null,Z=new Y;const W=[],St=(Et,Rt=2)=>{const Wt=I.worldToLocal(Et.clone()),Jt=_.attributes.position,N=new Y;for(let oe=0;oe<Jt.count;oe++){N.fromBufferAttribute(Jt,oe);const Kt=N.distanceTo(Wt),jt=8,It=jt*.6;if(Kt<jt){const Te=N.clone().normalize();if(Kt<It){const Bt=1-Kt/It,ae=Rt*Bt*Bt;N.sub(Te.multiplyScalar(ae))}else{const Bt=(Kt-It)/(jt-It),ae=Rt*.6*(1-Bt*Bt);N.add(Te.multiplyScalar(ae))}Jt.setXYZ(oe,N.x,N.y,N.z)}}Jt.needsUpdate=!0,_.computeVertexNormals()},Mt=(Et,Rt)=>{for(let Jt=0;Jt<30;Jt++){const N=new Io(.4,4,4),oe=new zo({color:Rt?16711680:16777215}),Kt=new Dn(N,oe);Kt.position.copy(Et);const jt=new Y((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2).normalize().multiplyScalar(Math.random()*3+1);p.add(Kt),W.push({mesh:Kt,velocity:jt,life:1})}},z=(Et,Rt)=>{St(Et,Rt?2.5:1.5),Mt(Et,Rt)},nt=(Et,Rt,Wt)=>{P&&p.remove(P);const Jt=new Io(.5,8,8),N=new zo({color:16711680});P=new Dn(Jt,N),P.position.copy(ot.position),p.add(P);const oe=Rt*Math.PI/180,Kt=Wt*Math.PI/180,jt=Et/100,It=ot.position.clone().normalize();let Te=new Y(0,1,0);Math.abs(It.dot(Te))>.9&&(Te=new Y(1,0,0));const Bt=new Y().crossVectors(Te,It).normalize(),ae=new Y().crossVectors(It,Bt).normalize(),Ie=new Y;Ie.add(It.clone().multiplyScalar(Math.sin(oe))),Ie.add(Bt.clone().multiplyScalar(Math.cos(oe)*Math.sin(Kt))),Ie.add(ae.clone().multiplyScalar(Math.cos(oe)*Math.cos(Kt))),Ie.normalize(),Z.copy(Ie.multiplyScalar(jt))};o.current.launchProjectile=nt;const gt={w:!1,a:!1,s:!1,d:!1},At=Et=>{const Rt=Et.key.toLowerCase();Rt in gt&&(gt[Rt]=!0)},Lt=Et=>{const Rt=Et.key.toLowerCase();Rt in gt&&(gt[Rt]=!1)};window.addEventListener("keydown",At),window.addEventListener("keyup",Lt);const it=()=>{const Wt=ot.position.clone().normalize();let Jt=Math.atan2(Wt.x,Wt.z),N=Math.acos(Wt.y);gt.w&&(N-=.005),gt.s&&(N+=.005),gt.a&&(Jt-=.005),gt.d&&(Jt+=.005),N=Math.max(.01,Math.min(Math.PI-.01,N)),ot.position.x=21*Math.sin(N)*Math.sin(Jt),ot.position.y=21*Math.cos(N),ot.position.z=21*Math.sin(N)*Math.cos(Jt)},lt=()=>{requestAnimationFrame(lt);const Et=Date.now()*.001,Rt=25;C.position.x=Math.cos(Et/10)*Rt,C.position.z=Math.sin(Et/10)*Rt,C.position.y=Math.sin(Et/10*.05)*3,it();for(let Wt=W.length-1;Wt>=0;Wt--){const Jt=W[Wt];Jt.mesh.position.add(Jt.velocity),Jt.velocity.multiplyScalar(.95),Jt.life-=.02,Jt.mesh.material.opacity=Jt.life,Jt.mesh.material.transparent=!0;const N=Jt.life;Jt.mesh.scale.set(N,N,N),Jt.life<=0&&(p.remove(Jt.mesh),Jt.mesh.geometry.dispose(),Jt.mesh.material.dispose(),W.splice(Wt,1))}if(P){const Wt=P.position.clone().normalize().multiplyScalar(-.02);Z.add(Wt),P.position.add(Z);let Jt=!1;for(let N=pt.length-1;N>=0;N--)if(P.position.distanceTo(pt[N].position)<3){z(P.position,!0),p.remove(pt[N]),pt.splice(N,1),p.remove(P),P=null,Jt=!0;break}!Jt&&P&&P.position.length()<20.5&&(z(P.position,!1),p.remove(P),P=null),P&&P.position.length()>200&&(p.remove(P),P=null)}y.update(),x.render()};lt();const Ut=()=>{S.aspect=m.clientWidth/m.clientHeight,S.updateProjectionMatrix(),g.setSize(m.clientWidth,m.clientHeight),x.setSize(m.clientWidth,m.clientHeight)};return window.addEventListener("resize",Ut),()=>{window.removeEventListener("resize",Ut),window.removeEventListener("keydown",At),window.removeEventListener("keyup",Lt),W.forEach(Et=>{p.remove(Et.mesh),Et.mesh.geometry.dispose(),Et.mesh.material.dispose()}),m.removeChild(g.domElement)}},[]);const d=()=>{o.current&&o.current.launchProjectile&&o.current.launchProjectile(t,s,c)};return On.jsxs("div",{children:[On.jsx("div",{ref:o,style:{width:"100%",height:"100vh"}}),On.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",background:"rgba(0,0,0,0.5)",color:"white",padding:"10px"},children:[On.jsxs("div",{children:[On.jsxs("label",{children:["Velocity: ",t]}),On.jsx("input",{type:"range",min:"10",max:"100",value:t,onChange:m=>i(Number(m.target.value))})]}),On.jsxs("div",{children:[On.jsxs("label",{children:["Angle: ",s]}),On.jsx("input",{type:"range",min:"0",max:"90",value:s,onChange:m=>l(Number(m.target.value))})]}),On.jsxs("div",{children:[On.jsxs("label",{children:["Heading: ",c]}),On.jsx("input",{type:"range",min:"0",max:"359",value:c,onChange:m=>h(Number(m.target.value))})]}),On.jsx("button",{onClick:d,children:"Launch"})]})]})}Gx.createRoot(document.getElementById("root")).render(On.jsx(Er.StrictMode,{children:On.jsx(S1,{})}));
