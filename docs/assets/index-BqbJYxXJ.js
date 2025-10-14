(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var sh={exports:{}},Co={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function Fx(){if(z_)return Co;z_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Co.Fragment=t,Co.jsx=i,Co.jsxs=i,Co}var B_;function Hx(){return B_||(B_=1,sh.exports=Fx()),sh.exports}var Xe=Hx(),rh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function Gx(){if(I_)return oe;I_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function g(z,it,At){this.props=z,this.context=it,this.refs=y,this.updater=At||E}g.prototype.isReactComponent={},g.prototype.setState=function(z,it){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,it,"setState")},g.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function N(){}N.prototype=g.prototype;function L(z,it,At){this.props=z,this.context=it,this.refs=y,this.updater=At||E}var D=L.prototype=new N;D.constructor=L,w(D,g.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function B(){}var U={H:null,A:null,T:null,S:null},I=Object.prototype.hasOwnProperty;function A(z,it,At){var Lt=At.ref;return{$$typeof:r,type:z,key:it,ref:Lt!==void 0?Lt:null,props:At}}function R(z,it){return A(z.type,it,z.props)}function F(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function W(z){var it={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(At){return it[At]})}var $=/\/+/g;function ct(z,it){return typeof z=="object"&&z!==null&&z.key!=null?W(""+z.key):it.toString(36)}function rt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(B,B):(z.status="pending",z.then(function(it){z.status==="pending"&&(z.status="fulfilled",z.value=it)},function(it){z.status==="pending"&&(z.status="rejected",z.reason=it)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function O(z,it,At,Lt,It){var nt=typeof z;(nt==="undefined"||nt==="boolean")&&(z=null);var ht=!1;if(z===null)ht=!0;else switch(nt){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(z.$$typeof){case r:case t:ht=!0;break;case S:return ht=z._init,O(ht(z._payload),it,At,Lt,It)}}if(ht)return It=It(z),ht=Lt===""?"."+ct(z,0):Lt,H(It)?(At="",ht!=null&&(At=ht.replace($,"$&/")+"/"),O(It,it,At,"",function(jt){return jt})):It!=null&&(F(It)&&(It=R(It,At+(It.key==null||z&&z.key===It.key?"":(""+It.key).replace($,"$&/")+"/")+ht)),it.push(It)),1;ht=0;var zt=Lt===""?".":Lt+":";if(H(z))for(var Ot=0;Ot<z.length;Ot++)Lt=z[Ot],nt=zt+ct(Lt,Ot),ht+=O(Lt,it,At,nt,It);else if(Ot=M(z),typeof Ot=="function")for(z=Ot.call(z),Ot=0;!(Lt=z.next()).done;)Lt=Lt.value,nt=zt+ct(Lt,Ot++),ht+=O(Lt,it,At,nt,It);else if(nt==="object"){if(typeof z.then=="function")return O(rt(z),it,At,Lt,It);throw it=String(z),Error("Objects are not valid as a React child (found: "+(it==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":it)+"). If you meant to render a collection of children, use an array instead.")}return ht}function j(z,it,At){if(z==null)return z;var Lt=[],It=0;return O(z,Lt,"","",function(nt){return it.call(At,nt,It++)}),Lt}function Y(z){if(z._status===-1){var it=z._result;it=it(),it.then(function(At){(z._status===0||z._status===-1)&&(z._status=1,z._result=At)},function(At){(z._status===0||z._status===-1)&&(z._status=2,z._result=At)}),z._status===-1&&(z._status=0,z._result=it)}if(z._status===1)return z._result.default;throw z._result}var St=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var it=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(it))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Tt={map:j,forEach:function(z,it,At){j(z,function(){it.apply(this,arguments)},At)},count:function(z){var it=0;return j(z,function(){it++}),it},toArray:function(z){return j(z,function(it){return it})||[]},only:function(z){if(!F(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return oe.Activity=_,oe.Children=Tt,oe.Component=g,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=L,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,oe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return U.H.useMemoCache(z)}},oe.cache=function(z){return function(){return z.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(z,it,At){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Lt=w({},z.props),It=z.key;if(it!=null)for(nt in it.key!==void 0&&(It=""+it.key),it)!I.call(it,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&it.ref===void 0||(Lt[nt]=it[nt]);var nt=arguments.length-2;if(nt===1)Lt.children=At;else if(1<nt){for(var ht=Array(nt),zt=0;zt<nt;zt++)ht[zt]=arguments[zt+2];Lt.children=ht}return A(z.type,It,Lt)},oe.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},oe.createElement=function(z,it,At){var Lt,It={},nt=null;if(it!=null)for(Lt in it.key!==void 0&&(nt=""+it.key),it)I.call(it,Lt)&&Lt!=="key"&&Lt!=="__self"&&Lt!=="__source"&&(It[Lt]=it[Lt]);var ht=arguments.length-2;if(ht===1)It.children=At;else if(1<ht){for(var zt=Array(ht),Ot=0;Ot<ht;Ot++)zt[Ot]=arguments[Ot+2];It.children=zt}if(z&&z.defaultProps)for(Lt in ht=z.defaultProps,ht)It[Lt]===void 0&&(It[Lt]=ht[Lt]);return A(z,nt,It)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(z){return{$$typeof:d,render:z}},oe.isValidElement=F,oe.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:Y}},oe.memo=function(z,it){return{$$typeof:p,type:z,compare:it===void 0?null:it}},oe.startTransition=function(z){var it=U.T,At={};U.T=At;try{var Lt=z(),It=U.S;It!==null&&It(At,Lt),typeof Lt=="object"&&Lt!==null&&typeof Lt.then=="function"&&Lt.then(B,St)}catch(nt){St(nt)}finally{it!==null&&At.types!==null&&(it.types=At.types),U.T=it}},oe.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},oe.use=function(z){return U.H.use(z)},oe.useActionState=function(z,it,At){return U.H.useActionState(z,it,At)},oe.useCallback=function(z,it){return U.H.useCallback(z,it)},oe.useContext=function(z){return U.H.useContext(z)},oe.useDebugValue=function(){},oe.useDeferredValue=function(z,it){return U.H.useDeferredValue(z,it)},oe.useEffect=function(z,it){return U.H.useEffect(z,it)},oe.useEffectEvent=function(z){return U.H.useEffectEvent(z)},oe.useId=function(){return U.H.useId()},oe.useImperativeHandle=function(z,it,At){return U.H.useImperativeHandle(z,it,At)},oe.useInsertionEffect=function(z,it){return U.H.useInsertionEffect(z,it)},oe.useLayoutEffect=function(z,it){return U.H.useLayoutEffect(z,it)},oe.useMemo=function(z,it){return U.H.useMemo(z,it)},oe.useOptimistic=function(z,it){return U.H.useOptimistic(z,it)},oe.useReducer=function(z,it,At){return U.H.useReducer(z,it,At)},oe.useRef=function(z){return U.H.useRef(z)},oe.useState=function(z){return U.H.useState(z)},oe.useSyncExternalStore=function(z,it,At){return U.H.useSyncExternalStore(z,it,At)},oe.useTransition=function(){return U.H.useTransition()},oe.version="19.2.0",oe}var F_;function Od(){return F_||(F_=1,rh.exports=Gx()),rh.exports}var Sn=Od(),oh={exports:{}},wo={},lh={exports:{}},ch={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function Vx(){return H_||(H_=1,(function(r){function t(O,j){var Y=O.length;O.push(j);t:for(;0<Y;){var St=Y-1>>>1,Tt=O[St];if(0<l(Tt,j))O[St]=j,O[Y]=Tt,Y=St;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var j=O[0],Y=O.pop();if(Y!==j){O[0]=Y;t:for(var St=0,Tt=O.length,z=Tt>>>1;St<z;){var it=2*(St+1)-1,At=O[it],Lt=it+1,It=O[Lt];if(0>l(At,Y))Lt<Tt&&0>l(It,At)?(O[St]=It,O[Lt]=Y,St=Lt):(O[St]=At,O[it]=Y,St=it);else if(Lt<Tt&&0>l(It,Y))O[St]=It,O[Lt]=Y,St=Lt;else break t}}return j}function l(O,j){var Y=O.sortIndex-j.sortIndex;return Y!==0?Y:O.id-j.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,_=null,x=3,M=!1,E=!1,w=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=O)s(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function H(O){if(w=!1,D(O),!E)if(i(m)!==null)E=!0,B||(B=!0,W());else{var j=i(p);j!==null&&rt(H,j.startTime-O)}}var B=!1,U=-1,I=5,A=-1;function R(){return y?!0:!(r.unstable_now()-A<I)}function F(){if(y=!1,B){var O=r.unstable_now();A=O;var j=!0;try{t:{E=!1,w&&(w=!1,N(U),U=-1),M=!0;var Y=x;try{e:{for(D(O),_=i(m);_!==null&&!(_.expirationTime>O&&R());){var St=_.callback;if(typeof St=="function"){_.callback=null,x=_.priorityLevel;var Tt=St(_.expirationTime<=O);if(O=r.unstable_now(),typeof Tt=="function"){_.callback=Tt,D(O),j=!0;break e}_===i(m)&&s(m),D(O)}else s(m);_=i(m)}if(_!==null)j=!0;else{var z=i(p);z!==null&&rt(H,z.startTime-O),j=!1}}break t}finally{_=null,x=Y,M=!1}j=void 0}}finally{j?W():B=!1}}}var W;if(typeof L=="function")W=function(){L(F)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ct=$.port2;$.port1.onmessage=F,W=function(){ct.postMessage(null)}}else W=function(){g(F,0)};function rt(O,j){U=g(function(){O(r.unstable_now())},j)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(O){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var Y=x;x=j;try{return O()}finally{x=Y}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=x;x=O;try{return j()}finally{x=Y}},r.unstable_scheduleCallback=function(O,j,Y){var St=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?St+Y:St):Y=St,O){case 1:var Tt=-1;break;case 2:Tt=250;break;case 5:Tt=1073741823;break;case 4:Tt=1e4;break;default:Tt=5e3}return Tt=Y+Tt,O={id:S++,callback:j,priorityLevel:O,startTime:Y,expirationTime:Tt,sortIndex:-1},Y>St?(O.sortIndex=Y,t(p,O),i(m)===null&&O===i(p)&&(w?(N(U),U=-1):w=!0,rt(H,Y-St))):(O.sortIndex=Tt,t(m,O),E||M||(E=!0,B||(B=!0,W()))),O},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(O){var j=x;return function(){var Y=x;x=j;try{return O.apply(this,arguments)}finally{x=Y}}}})(ch)),ch}var G_;function kx(){return G_||(G_=1,lh.exports=Vx()),lh.exports}var uh={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function Xx(){if(V_)return wn;V_=1;var r=Od();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:S}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,S)},wn.flushSync=function(m){var p=h.T,S=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=S,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,_=d(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):S==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,_=d(S,p.crossOrigin);s.d.L(m,S,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var k_;function Wx(){if(k_)return uh.exports;k_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),uh.exports=Xx(),uh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X_;function qx(){if(X_)return wo;X_=1;var r=kx(),t=Od(),i=Wx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var v=!1,b=u.child;b;){if(b===a){v=!0,a=u,o=f;break}if(b===o){v=!0,o=u,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,o=u;break}if(b===o){v=!0,o=f,a=u;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case B:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case I:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var rt=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},St=[],Tt=-1;function z(e){return{current:e}}function it(e){0>Tt||(e.current=St[Tt],St[Tt]=null,Tt--)}function At(e,n){Tt++,St[Tt]=e.current,e.current=n}var Lt=z(null),It=z(null),nt=z(null),ht=z(null);function zt(e,n){switch(At(nt,n),At(It,e),At(Lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?s_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=s_(n),e=r_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(Lt),At(Lt,e)}function Ot(){it(Lt),it(It),it(nt)}function jt(e){e.memoizedState!==null&&At(ht,e);var n=Lt.current,a=r_(n,e.type);n!==a&&(At(It,e),At(Lt,a))}function ce(e){It.current===e&&(it(Lt),it(It)),ht.current===e&&(it(ht),To._currentValue=Y)}var je,V;function ye(e){if(je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);je=n&&n[1]||"",V=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+je+e+V}var ae=!1;function te(e,n){if(!e||ae)return"";ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(lt){var at=lt}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(lt){at=lt}e.call(xt.prototype)}}else{try{throw Error()}catch(lt){at=lt}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(lt){if(lt&&at&&typeof lt.stack=="string")return[lt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var G=v.split(`
`),et=b.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===et.length)for(o=G.length-1,u=et.length-1;1<=o&&0<=u&&G[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==et[u]){var mt=`
`+G[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{ae=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ye(a):""}function Pt(e,n){switch(e.tag){case 26:case 27:case 5:return ye(e.type);case 16:return ye("Lazy");case 13:return e.child!==n&&n!==null?ye("Suspense Fallback"):ye("Suspense");case 19:return ye("SuspenseList");case 0:case 15:return te(e.type,!1);case 11:return te(e.type.render,!1);case 1:return te(e.type,!0);case 31:return ye("Activity");default:return""}}function we(e){try{var n="",a=null;do n+=Pt(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var kt=Object.prototype.hasOwnProperty,se=r.unstable_scheduleCallback,Ze=r.unstable_cancelCallback,We=r.unstable_shouldYield,P=r.unstable_requestPaint,T=r.unstable_now,J=r.unstable_getCurrentPriorityLevel,gt=r.unstable_ImmediatePriority,bt=r.unstable_UserBlockingPriority,dt=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Nt=r.unstable_IdlePriority,Ct=r.log,Rt=r.unstable_setDisableYieldValue,ut=null,pt=null;function wt(e){if(typeof Ct=="function"&&Rt(e),pt&&typeof pt.setStrictMode=="function")try{pt.setStrictMode(ut,e)}catch{}}var Dt=Math.clz32?Math.clz32:k,Ut=Math.log,Xt=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Ut(e)/Xt|0)|0}var vt=256,Et=262144,Bt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ft(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=o&134217727;return b!==0?(o=b&~f,o!==0?u=Mt(o):(v&=b,v!==0?u=Mt(v):a||(a=b&~e,a!==0&&(u=Mt(a))))):(b=o&~f,b!==0?u=Mt(b):v!==0?u=Mt(v):a||(a=o&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Vt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function De(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ii(e,n,a,o,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,G=e.expirationTimes,et=e.hiddenUpdates;for(a=v&~a;0<a;){var mt=31-Dt(a),xt=1<<mt;b[mt]=0,G[mt]=-1;var at=et[mt];if(at!==null)for(et[mt]=null,mt=0;mt<at.length;mt++){var lt=at[mt];lt!==null&&(lt.lane&=-536870913)}a&=~xt}o!==0&&Br(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Br(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Dt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Ti(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Dt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function As(e,n){var a=n&-n;return a=(a&42)!==0?1:Rs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Rs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Cs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function qa(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:w_(e.type))}function Ir(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var qn=Math.random().toString(36).slice(2),rn="__reactFiber$"+qn,xn="__reactProps$"+qn,fa="__reactContainer$"+qn,Fr="__reactEvents$"+qn,Jc="__reactListeners$"+qn,$c="__reactHandles$"+qn,Zo="__reactResources$"+qn,Ya="__reactMarker$"+qn;function C(e){delete e[rn],delete e[xn],delete e[Fr],delete e[Jc],delete e[$c]}function Z(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[fa]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=d_(e);e!==null;){if(a=e[rn])return a;e=d_(e)}return n}e=a,a=e.parentNode}return null}function st(e){if(e=e[rn]||e[fa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ot(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Q(e){var n=e[Zo];return n||(n=e[Zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yt(e){e[Ya]=!0}var Ft=new Set,qt={};function Gt(e,n){Qt(e,n),Qt(e+"Capture",n)}function Qt(e,n){for(qt[e]=n,e=0;e<n.length;e++)Ft.add(n[e])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},de={};function Ne(e){return kt.call(de,e)?!0:kt.call(Jt,e)?!1:ne.test(e)?de[e]=!0:(Jt[e]=!0,!1)}function Ge(e,n,a){if(Ne(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Oe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function pe(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Te(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yn(e){if(!e._valueTracker){var n=ke(e)?"checked":"value";e._valueTracker=Te(e,n,""+e[n])}}function Bi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ja=/[\n"\\]/g;function _e(e){return e.replace(ja,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(e,n,a,o,u,f,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Yt(n)):e.value!==""+Yt(n)&&(e.value=""+Yt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?hn(e,v,Yt(n)):a!=null?hn(e,v,Yt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Yt(b):e.removeAttribute("name")}function Nn(e,n,a,o,u,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yn(e);return}a=a!=null?""+Yt(a):"",n=n!=null?""+Yt(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=b?e.checked:!!o,e.defaultChecked=!!o,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),yn(e)}function hn(e,n,a){n==="number"&&gn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Yt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ws(e,n,a){if(n!=null&&(n=""+Yt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Yt(a):""}function bi(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(rt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Yt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),yn(e)}function Ds(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ov=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function np(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Ov.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ip(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&np(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&np(e,f,n[f])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ko(e){return zv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var eu=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Us=null,Ls=null;function ap(e){var n=st(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+_e(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[xn]||null;if(!u)throw Error(s(90));Cn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Bi(o)}break t;case"textarea":ws(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(e,!!a.multiple,n,!1)}}}var iu=!1;function sp(e,n,a){if(iu)return e(n,a);iu=!0;try{var o=e(n);return o}finally{if(iu=!1,(Us!==null||Ls!==null)&&(Bl(),Us&&(n=Us,e=Ls,Ls=Us=null,ap(n),e)))for(n=0;n<e.length;n++)ap(e[n])}}function Hr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=!1;if(Fi)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){au=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{au=!1}var ha=null,su=null,Qo=null;function rp(){if(Qo)return Qo;var e,n=su,a=n.length,o,u="value"in ha?ha.value:ha.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(o=1;o<=v&&n[a-o]===u[f-o];o++);return Qo=u.slice(e,1<o?1-o:void 0)}function Jo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function op(){return!1}function In(e){function n(a,o,u,f,v){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?$o:op,this.isPropagationStopped=op,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=In(Za),Vr=_({},Za,{view:0,detail:0}),Bv=In(Vr),ru,ou,kr,el=_({},Vr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(ru=e.screenX-kr.screenX,ou=e.screenY-kr.screenY):ou=ru=0,kr=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:ou}}),lp=In(el),Iv=_({},el,{dataTransfer:0}),Fv=In(Iv),Hv=_({},Vr,{relatedTarget:0}),lu=In(Hv),Gv=_({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),Vv=In(Gv),kv=_({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xv=In(kv),Wv=_({},Za,{data:0}),cp=In(Wv),qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=jv[e])?!!n[e]:!1}function cu(){return Zv}var Kv=_({},Vr,{key:function(e){if(e.key){var n=qv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cu,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qv=In(Kv),Jv=_({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=In(Jv),$v=_({},Vr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cu}),tS=In($v),eS=_({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=In(eS),iS=_({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),aS=In(iS),sS=_({},Za,{newState:0,oldState:0}),rS=In(sS),oS=[9,13,27,32],uu=Fi&&"CompositionEvent"in window,Xr=null;Fi&&"documentMode"in document&&(Xr=document.documentMode);var lS=Fi&&"TextEvent"in window&&!Xr,fp=Fi&&(!uu||Xr&&8<Xr&&11>=Xr),hp=" ",dp=!1;function pp(e,n){switch(e){case"keyup":return oS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ns=!1;function cS(e,n){switch(e){case"compositionend":return mp(n);case"keypress":return n.which!==32?null:(dp=!0,hp);case"textInput":return e=n.data,e===hp&&dp?null:e;default:return null}}function uS(e,n){if(Ns)return e==="compositionend"||!uu&&pp(e,n)?(e=rp(),Qo=su=ha=null,Ns=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fp&&n.locale!=="ko"?null:n.data;default:return null}}var fS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!fS[e.type]:n==="textarea"}function _p(e,n,a,o){Us?Ls?Ls.push(o):Ls=[o]:Us=o,n=Xl(n,"onChange"),0<n.length&&(a=new tl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Wr=null,qr=null;function hS(e){$g(e,0)}function nl(e){var n=ot(e);if(Bi(n))return e}function vp(e,n){if(e==="change")return n}var Sp=!1;if(Fi){var fu;if(Fi){var hu="oninput"in document;if(!hu){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),hu=typeof xp.oninput=="function"}fu=hu}else fu=!1;Sp=fu&&(!document.documentMode||9<document.documentMode)}function yp(){Wr&&(Wr.detachEvent("onpropertychange",Mp),qr=Wr=null)}function Mp(e){if(e.propertyName==="value"&&nl(qr)){var n=[];_p(n,qr,e,nu(e)),sp(hS,n)}}function dS(e,n,a){e==="focusin"?(yp(),Wr=n,qr=a,Wr.attachEvent("onpropertychange",Mp)):e==="focusout"&&yp()}function pS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return nl(qr)}function mS(e,n){if(e==="click")return nl(n)}function gS(e,n){if(e==="input"||e==="change")return nl(n)}function _S(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:_S;function Yr(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!kt.call(n,u)||!Yn(e[u],n[u]))return!1}return!0}function Ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tp(e,n){var a=Ep(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ep(a)}}function bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gn(e.document)}return n}function du(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var vS=Fi&&"documentMode"in document&&11>=document.documentMode,Os=null,pu=null,jr=null,mu=!1;function Rp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mu||Os==null||Os!==gn(o)||(o=Os,"selectionStart"in o&&du(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),jr&&Yr(jr,o)||(jr=o,o=Xl(pu,"onSelect"),0<o.length&&(n=new tl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Os)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ps={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},gu={},Cp={};Fi&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Qa(e){if(gu[e])return gu[e];if(!Ps[e])return e;var n=Ps[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cp)return gu[e]=n[a];return e}var wp=Qa("animationend"),Dp=Qa("animationiteration"),Up=Qa("animationstart"),SS=Qa("transitionrun"),xS=Qa("transitionstart"),yS=Qa("transitioncancel"),Lp=Qa("transitionend"),Np=new Map,_u="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_u.push("scrollEnd");function _i(e,n){Np.set(e,n),Gt(n,[e])}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ai=[],zs=0,vu=0;function al(){for(var e=zs,n=vu=zs=0;n<e;){var a=ai[n];ai[n++]=null;var o=ai[n];ai[n++]=null;var u=ai[n];ai[n++]=null;var f=ai[n];if(ai[n++]=null,o!==null&&u!==null){var v=o.pending;v===null?u.next=u:(u.next=v.next,v.next=u),o.pending=u}f!==0&&Op(a,u,f)}}function sl(e,n,a,o){ai[zs++]=e,ai[zs++]=n,ai[zs++]=a,ai[zs++]=o,vu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Su(e,n,a,o){return sl(e,n,a,o),rl(e)}function Ja(e,n){return sl(e,null,null,n),rl(e)}function Op(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Dt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function rl(e){if(50<_o)throw _o=0,wf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Bs={};function MS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,o){return new MS(e,n,a,o)}function xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Hi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ol(e,n,a,o,u,f){var v=0;if(o=e,typeof e=="function")xu(e)&&(v=1);else if(typeof e=="string")v=Rx(e,a,Lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=jn(31,a,n,u),e.elementType=A,e.lanes=f,e;case w:return $a(a.children,u,f,n);case y:v=8,u|=24;break;case g:return e=jn(12,a,n,u|2),e.elementType=g,e.lanes=f,e;case H:return e=jn(13,a,n,u),e.elementType=H,e.lanes=f,e;case B:return e=jn(19,a,n,u),e.elementType=B,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break t;case N:v=9;break t;case D:v=11;break t;case U:v=14;break t;case I:v=16,o=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=jn(v,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function $a(e,n,a,o){return e=jn(7,e,o,n),e.lanes=a,e}function yu(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function zp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function Mu(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Bp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Bp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:we(n)},Bp.set(e,n),n)}return{value:e,source:n,stack:we(n)}}var Is=[],Fs=0,ll=null,Zr=0,ri=[],oi=0,da=null,Ai=1,Ri="";function Gi(e,n){Is[Fs++]=Zr,Is[Fs++]=ll,ll=e,Zr=n}function Ip(e,n,a){ri[oi++]=Ai,ri[oi++]=Ri,ri[oi++]=da,da=e;var o=Ai;e=Ri;var u=32-Dt(o)-1;o&=~(1<<u),a+=1;var f=32-Dt(n)+u;if(30<f){var v=u-u%5;f=(o&(1<<v)-1).toString(32),o>>=v,u-=v,Ai=1<<32-Dt(n)+u|a<<u|o,Ri=f+e}else Ai=1<<f|a<<u|o,Ri=e}function Eu(e){e.return!==null&&(Gi(e,1),Ip(e,1,0))}function Tu(e){for(;e===ll;)ll=Is[--Fs],Is[Fs]=null,Zr=Is[--Fs],Is[Fs]=null;for(;e===da;)da=ri[--oi],ri[oi]=null,Ri=ri[--oi],ri[oi]=null,Ai=ri[--oi],ri[oi]=null}function Fp(e,n){ri[oi++]=Ai,ri[oi++]=Ri,ri[oi++]=da,Ai=n.id,Ri=n.overflow,da=e}var Mn=null,qe=null,Me=!1,pa=null,li=!1,bu=Error(s(519));function ma(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kr(si(n,e)),bu}function Hp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[xn]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)ge(So[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Nn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),bi(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||i_(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||ma(e,!0)}function Gp(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:li=!1;return;case 27:case 3:li=!0;return;default:Mn=Mn.return}}function Hs(e){if(e!==Mn)return!1;if(!Me)return Gp(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xf(e.type,e.memoizedProps)),a=!a),a&&qe&&ma(e),Gp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=h_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=h_(e)}else n===27?(n=qe,wa(e.type)?(e=Zf,Zf=null,qe=e):qe=n):qe=Mn?ui(e.stateNode.nextSibling):null;return!0}function ts(){qe=Mn=null,Me=!1}function Au(){var e=pa;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),pa=null),e}function Kr(e){pa===null?pa=[e]:pa.push(e)}var Ru=z(null),es=null,Vi=null;function ga(e,n,a){At(Ru,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=Ru.current,it(Ru)}function Cu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function wu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var G=0;G<n.length;G++)if(b.context===n[G]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Cu(f.return,a,e),o||(v=null);break t}f=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Cu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Gs(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=u.type;Yn(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===ht.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(To):e=[To])}u=u.return}e!==null&&wu(n,e,a,o),n.flags|=262144}function cl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ns(e){es=e,Vi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return Vp(es,e)}function ul(e,n){return es===null&&ns(e),Vp(e,n)}function Vp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Vi===null){if(e===null)throw Error(s(308));Vi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Vi=Vi.next=n;return a}var ES=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},TS=r.unstable_scheduleCallback,bS=r.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new ES,data:new Map,refCount:0}}function Qr(e){e.refCount--,e.refCount===0&&TS(bS,function(){e.controller.abort()})}var Jr=null,Uu=0,Vs=0,ks=null;function AS(e,n){if(Jr===null){var a=Jr=[];Uu=0,Vs=Pf(),ks={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Uu++,n.then(kp,kp),n}function kp(){if(--Uu===0&&Jr!==null){ks!==null&&(ks.status="fulfilled");var e=Jr;Jr=null,Vs=0,ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function RS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Xp=O.S;O.S=function(e,n){Rg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&AS(e,n),Xp!==null&&Xp(e,n)};var is=z(null);function Lu(){var e=is.current;return e!==null?e:Ve.pooledCache}function fl(e,n){n===null?At(is,is.current):At(is,n.pool)}function Wp(){var e=Lu();return e===null?null:{parent:on._currentValue,pool:e}}var Xs=Error(s(460)),Nu=Error(s(474)),hl=Error(s(542)),dl={then:function(){}};function qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e}throw ss=n,Xs}}function as(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ss=a,Xs):a}}var ss=null;function jp(){if(ss===null)throw Error(s(459));var e=ss;return ss=null,e}function Zp(e){if(e===Xs||e===hl)throw Error(s(483))}var Ws=null,$r=0;function pl(e){var n=$r;return $r+=1,Ws===null&&(Ws=[]),Yp(Ws,e,n)}function to(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ml(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Kp(e){function n(K,X){if(e){var tt=K.deletions;tt===null?(K.deletions=[X],K.flags|=16):tt.push(X)}}function a(K,X){if(!e)return null;for(;X!==null;)n(K,X),X=X.sibling;return null}function o(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function u(K,X){return K=Hi(K,X),K.index=0,K.sibling=null,K}function f(K,X,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<X?(K.flags|=67108866,X):tt):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function v(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function b(K,X,tt,_t){return X===null||X.tag!==6?(X=yu(tt,K.mode,_t),X.return=K,X):(X=u(X,tt),X.return=K,X)}function G(K,X,tt,_t){var $t=tt.type;return $t===w?mt(K,X,tt.props.children,_t,tt.key):X!==null&&(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===I&&as($t)===X.type)?(X=u(X,tt.props),to(X,tt),X.return=K,X):(X=ol(tt.type,tt.key,tt.props,null,K.mode,_t),to(X,tt),X.return=K,X)}function et(K,X,tt,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==tt.containerInfo||X.stateNode.implementation!==tt.implementation?(X=Mu(tt,K.mode,_t),X.return=K,X):(X=u(X,tt.children||[]),X.return=K,X)}function mt(K,X,tt,_t,$t){return X===null||X.tag!==7?(X=$a(tt,K.mode,_t,$t),X.return=K,X):(X=u(X,tt),X.return=K,X)}function xt(K,X,tt){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=yu(""+X,K.mode,tt),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return tt=ol(X.type,X.key,X.props,null,K.mode,tt),to(tt,X),tt.return=K,tt;case E:return X=Mu(X,K.mode,tt),X.return=K,X;case I:return X=as(X),xt(K,X,tt)}if(rt(X)||W(X))return X=$a(X,K.mode,tt,null),X.return=K,X;if(typeof X.then=="function")return xt(K,pl(X),tt);if(X.$$typeof===L)return xt(K,ul(K,X),tt);ml(K,X)}return null}function at(K,X,tt,_t){var $t=X!==null?X.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return $t!==null?null:b(K,X,""+tt,_t);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===$t?G(K,X,tt,_t):null;case E:return tt.key===$t?et(K,X,tt,_t):null;case I:return tt=as(tt),at(K,X,tt,_t)}if(rt(tt)||W(tt))return $t!==null?null:mt(K,X,tt,_t,null);if(typeof tt.then=="function")return at(K,X,pl(tt),_t);if(tt.$$typeof===L)return at(K,X,ul(K,tt),_t);ml(K,tt)}return null}function lt(K,X,tt,_t,$t){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(tt)||null,b(X,K,""+_t,$t);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return K=K.get(_t.key===null?tt:_t.key)||null,G(X,K,_t,$t);case E:return K=K.get(_t.key===null?tt:_t.key)||null,et(X,K,_t,$t);case I:return _t=as(_t),lt(K,X,tt,_t,$t)}if(rt(_t)||W(_t))return K=K.get(tt)||null,mt(X,K,_t,$t,null);if(typeof _t.then=="function")return lt(K,X,tt,pl(_t),$t);if(_t.$$typeof===L)return lt(K,X,tt,ul(X,_t),$t);ml(X,_t)}return null}function Wt(K,X,tt,_t){for(var $t=null,Re=null,Kt=X,ue=X=0,Se=null;Kt!==null&&ue<tt.length;ue++){Kt.index>ue?(Se=Kt,Kt=null):Se=Kt.sibling;var Ce=at(K,Kt,tt[ue],_t);if(Ce===null){Kt===null&&(Kt=Se);break}e&&Kt&&Ce.alternate===null&&n(K,Kt),X=f(Ce,X,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce,Kt=Se}if(ue===tt.length)return a(K,Kt),Me&&Gi(K,ue),$t;if(Kt===null){for(;ue<tt.length;ue++)Kt=xt(K,tt[ue],_t),Kt!==null&&(X=f(Kt,X,ue),Re===null?$t=Kt:Re.sibling=Kt,Re=Kt);return Me&&Gi(K,ue),$t}for(Kt=o(Kt);ue<tt.length;ue++)Se=lt(Kt,K,ue,tt[ue],_t),Se!==null&&(e&&Se.alternate!==null&&Kt.delete(Se.key===null?ue:Se.key),X=f(Se,X,ue),Re===null?$t=Se:Re.sibling=Se,Re=Se);return e&&Kt.forEach(function(Oa){return n(K,Oa)}),Me&&Gi(K,ue),$t}function ee(K,X,tt,_t){if(tt==null)throw Error(s(151));for(var $t=null,Re=null,Kt=X,ue=X=0,Se=null,Ce=tt.next();Kt!==null&&!Ce.done;ue++,Ce=tt.next()){Kt.index>ue?(Se=Kt,Kt=null):Se=Kt.sibling;var Oa=at(K,Kt,Ce.value,_t);if(Oa===null){Kt===null&&(Kt=Se);break}e&&Kt&&Oa.alternate===null&&n(K,Kt),X=f(Oa,X,ue),Re===null?$t=Oa:Re.sibling=Oa,Re=Oa,Kt=Se}if(Ce.done)return a(K,Kt),Me&&Gi(K,ue),$t;if(Kt===null){for(;!Ce.done;ue++,Ce=tt.next())Ce=xt(K,Ce.value,_t),Ce!==null&&(X=f(Ce,X,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return Me&&Gi(K,ue),$t}for(Kt=o(Kt);!Ce.done;ue++,Ce=tt.next())Ce=lt(Kt,K,ue,Ce.value,_t),Ce!==null&&(e&&Ce.alternate!==null&&Kt.delete(Ce.key===null?ue:Ce.key),X=f(Ce,X,ue),Re===null?$t=Ce:Re.sibling=Ce,Re=Ce);return e&&Kt.forEach(function(Ix){return n(K,Ix)}),Me&&Gi(K,ue),$t}function He(K,X,tt,_t){if(typeof tt=="object"&&tt!==null&&tt.type===w&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var $t=tt.key;X!==null;){if(X.key===$t){if($t=tt.type,$t===w){if(X.tag===7){a(K,X.sibling),_t=u(X,tt.props.children),_t.return=K,K=_t;break t}}else if(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===I&&as($t)===X.type){a(K,X.sibling),_t=u(X,tt.props),to(_t,tt),_t.return=K,K=_t;break t}a(K,X);break}else n(K,X);X=X.sibling}tt.type===w?(_t=$a(tt.props.children,K.mode,_t,tt.key),_t.return=K,K=_t):(_t=ol(tt.type,tt.key,tt.props,null,K.mode,_t),to(_t,tt),_t.return=K,K=_t)}return v(K);case E:t:{for($t=tt.key;X!==null;){if(X.key===$t)if(X.tag===4&&X.stateNode.containerInfo===tt.containerInfo&&X.stateNode.implementation===tt.implementation){a(K,X.sibling),_t=u(X,tt.children||[]),_t.return=K,K=_t;break t}else{a(K,X);break}else n(K,X);X=X.sibling}_t=Mu(tt,K.mode,_t),_t.return=K,K=_t}return v(K);case I:return tt=as(tt),He(K,X,tt,_t)}if(rt(tt))return Wt(K,X,tt,_t);if(W(tt)){if($t=W(tt),typeof $t!="function")throw Error(s(150));return tt=$t.call(tt),ee(K,X,tt,_t)}if(typeof tt.then=="function")return He(K,X,pl(tt),_t);if(tt.$$typeof===L)return He(K,X,ul(K,tt),_t);ml(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,X!==null&&X.tag===6?(a(K,X.sibling),_t=u(X,tt),_t.return=K,K=_t):(a(K,X),_t=yu(tt,K.mode,_t),_t.return=K,K=_t),v(K)):a(K,X)}return function(K,X,tt,_t){try{$r=0;var $t=He(K,X,tt,_t);return Ws=null,$t}catch(Kt){if(Kt===Xs||Kt===hl)throw Kt;var Re=jn(29,Kt,null,K.mode);return Re.lanes=_t,Re.return=K,Re}finally{}}}var rs=Kp(!0),Qp=Kp(!1),_a=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=rl(e),Op(e,null,a),n}return sl(e,o,n,a),rl(e)}function eo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ti(e,a)}}function zu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Bu=!1;function no(){if(Bu){var e=ks;if(e!==null)throw e}}function io(e,n,a,o){Bu=!1;var u=e.updateQueue;_a=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var G=b,et=G.next;G.next=null,v===null?f=et:v.next=et,v=G;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,b=mt.lastBaseUpdate,b!==v&&(b===null?mt.firstBaseUpdate=et:b.next=et,mt.lastBaseUpdate=G))}if(f!==null){var xt=u.baseState;v=0,mt=et=G=null,b=f;do{var at=b.lane&-536870913,lt=at!==b.lane;if(lt?(ve&at)===at:(o&at)===at){at!==0&&at===Vs&&(Bu=!0),mt!==null&&(mt=mt.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Wt=e,ee=b;at=n;var He=a;switch(ee.tag){case 1:if(Wt=ee.payload,typeof Wt=="function"){xt=Wt.call(He,xt,at);break t}xt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=ee.payload,at=typeof Wt=="function"?Wt.call(He,xt,at):Wt,at==null)break t;xt=_({},xt,at);break t;case 2:_a=!0}}at=b.callback,at!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[at]:lt.push(at))}else lt={lane:at,tag:b.tag,payload:b.payload,callback:b.callback,next:null},mt===null?(et=mt=lt,G=xt):mt=mt.next=lt,v|=at;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);mt===null&&(G=xt),u.baseState=G,u.firstBaseUpdate=et,u.lastBaseUpdate=mt,f===null&&(u.shared.lanes=0),Ta|=v,e.lanes=v,e.memoizedState=xt}}function Jp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function $p(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jp(a[e],n)}var qs=z(null),gl=z(0);function tm(e,n){e=Ji,At(gl,e),At(qs,n),Ji=e|n.baseLanes}function Iu(){At(gl,Ji),At(qs,qs.current)}function Fu(){Ji=gl.current,it(qs),it(gl)}var Zn=z(null),ci=null;function xa(e){var n=e.alternate;At(nn,nn.current&1),At(Zn,e),ci===null&&(n===null||qs.current!==null||n.memoizedState!==null)&&(ci=e)}function Hu(e){At(nn,nn.current),At(Zn,e),ci===null&&(ci=e)}function em(e){e.tag===22?(At(nn,nn.current),At(Zn,e),ci===null&&(ci=e)):ya()}function ya(){At(nn,nn.current),At(Zn,Zn.current)}function Kn(e){it(Zn),ci===e&&(ci=null),it(nn)}var nn=z(0);function _l(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Yf(a)||jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xi=0,le=null,Ie=null,ln=null,vl=!1,Ys=!1,os=!1,Sl=0,ao=0,js=null,CS=0;function $e(){throw Error(s(321))}function Gu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Vu(e,n,a,o,u,f){return Xi=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Im:af,os=!1,f=a(o,u),os=!1,Ys&&(f=im(n,a,o,u)),nm(e),f}function nm(e){O.H=oo;var n=Ie!==null&&Ie.next!==null;if(Xi=0,ln=Ie=le=null,vl=!1,ao=0,js=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&cl(e)&&(cn=!0))}function im(e,n,a,o){le=e;var u=0;do{if(Ys&&(js=null),ao=0,Ys=!1,25<=u)throw Error(s(301));if(u+=1,ln=Ie=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Fm,f=n(a,o)}while(Ys);return f}function wS(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(le.flags|=1024),n}function ku(){var e=Sl!==0;return Sl=0,e}function Xu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Wu(e){if(vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vl=!1}Xi=0,ln=Ie=le=null,Ys=!1,ao=Sl=0,js=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?le.memoizedState=ln=e:ln=ln.next=e,ln}function an(){if(Ie===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=ln===null?le.memoizedState:ln.next;if(n!==null)ln=n,Ie=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},ln===null?le.memoizedState=ln=e:ln=ln.next=e}return ln}function xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ao;return ao+=1,js===null&&(js=[]),e=Yp(js,e,n),n=le,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Im:af),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===L)return En(e)}throw Error(s(438,String(e)))}function qu(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=le.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=xl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=an();return Yu(n,Ie,e)}function Yu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=v=null,G=null,et=n,mt=!1;do{var xt=et.lane&-536870913;if(xt!==et.lane?(ve&xt)===xt:(Xi&xt)===xt){var at=et.revertLane;if(at===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),xt===Vs&&(mt=!0);else if((Xi&at)===at){et=et.next,at===Vs&&(mt=!0);continue}else xt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(b=G=xt,v=f):G=G.next=xt,le.lanes|=at,Ta|=at;xt=et.action,os&&a(f,xt),f=et.hasEagerState?et.eagerState:a(f,xt)}else at={lane:xt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(b=G=at,v=f):G=G.next=at,le.lanes|=xt,Ta|=xt;et=et.next}while(et!==null&&et!==n);if(G===null?v=f:G.next=b,!Yn(f,e.memoizedState)&&(cn=!0,mt&&(a=ks,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function ju(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function am(e,n,a){var o=le,u=an(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Yn((Ie||u).memoizedState,a);if(v&&(u.memoizedState=a,cn=!0),u=u.queue,Qu(om.bind(null,o,u,e),[e]),u.getSnapshot!==n||v||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Zs(9,{destroy:void 0},rm.bind(null,o,u,a,n),null),Ve===null)throw Error(s(349));f||(Xi&127)!==0||sm(o,n,a)}return a}function sm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=xl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function rm(e,n,a,o){n.value=a,n.getSnapshot=o,lm(n)&&cm(e)}function om(e,n,a){return a(function(){lm(n)&&cm(e)})}function lm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function cm(e){var n=Ja(e,2);n!==null&&kn(n,e,2)}function Zu(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),os){wt(!0);try{a()}finally{wt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function um(e,n,a,o){return e.baseState=a,Yu(e,Ie,typeof o=="function"?o:Wi)}function DS(e,n,a,o,u){if(bl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};O.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,fm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function fm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=O.T,v={};O.T=v;try{var b=a(u,o),G=O.S;G!==null&&G(v,b),hm(e,n,b)}catch(et){Ku(e,n,et)}finally{f!==null&&v.types!==null&&(f.types=v.types),O.T=f}}else try{f=a(u,o),hm(e,n,f)}catch(et){Ku(e,n,et)}}function hm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){dm(e,n,o)},function(o){return Ku(e,n,o)}):dm(e,n,a)}function dm(e,n,a){n.status="fulfilled",n.value=a,pm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,fm(e,a)))}function Ku(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,pm(n),n=n.next;while(n!==o)}e.action=null}function pm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function mm(e,n){return n}function gm(e,n){if(Me){var a=Ve.formState;if(a!==null){t:{var o=le;if(Me){if(qe){e:{for(var u=qe,f=li;u.nodeType!==8;){if(!f){u=null;break e}if(u=ui(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=ui(u.nextSibling),o=u.data==="F!";break t}}ma(o)}o=!1}o&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mm,lastRenderedState:n},a.queue=o,a=Pm.bind(null,le,o),o.dispatch=a,o=Zu(!1),f=nf.bind(null,le,!1,o.queue),o=On(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=DS.bind(null,le,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function _m(e){var n=an();return vm(n,Ie,e)}function vm(e,n,a){if(n=Yu(e,n,mm)[0],e=Ml(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(v){throw v===Xs?hl:v}else o=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Zs(9,{destroy:void 0},US.bind(null,u,a),null)),[o,f,e]}function US(e,n){e.action=n}function Sm(e){var n=an(),a=Ie;if(a!==null)return vm(n,a,e);an(),n=n.memoizedState,a=an();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Zs(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=le.updateQueue,n===null&&(n=xl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function xm(){return an().memoizedState}function El(e,n,a,o){var u=On();le.flags|=e,u.memoizedState=Zs(1|n,{destroy:void 0},a,o===void 0?null:o)}function Tl(e,n,a,o){var u=an();o=o===void 0?null:o;var f=u.memoizedState.inst;Ie!==null&&o!==null&&Gu(o,Ie.memoizedState.deps)?u.memoizedState=Zs(n,f,a,o):(le.flags|=e,u.memoizedState=Zs(1|n,f,a,o))}function ym(e,n){El(8390656,8,e,n)}function Qu(e,n){Tl(2048,8,e,n)}function LS(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=xl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Mm(e){var n=an().memoizedState;return LS({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Em(e,n){return Tl(4,2,e,n)}function Tm(e,n){return Tl(4,4,e,n)}function bm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Am(e,n,a){a=a!=null?a.concat([e]):null,Tl(4,4,bm.bind(null,n,e),a)}function Ju(){}function Rm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Gu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Cm(e,n){var a=an();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Gu(n,o[1]))return o[0];if(o=e(),os){wt(!0);try{e()}finally{wt(!1)}}return a.memoizedState=[o,n],o}function $u(e,n,a){return a===void 0||(Xi&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=wg(),le.lanes|=e,Ta|=e,a)}function wm(e,n,a,o){return Yn(a,n)?a:qs.current!==null?(e=$u(e,a,o),Yn(e,n)||(cn=!0),e):(Xi&42)===0||(Xi&1073741824)!==0&&(ve&261930)===0?(cn=!0,e.memoizedState=a):(e=wg(),le.lanes|=e,Ta|=e,n)}function Dm(e,n,a,o,u){var f=j.p;j.p=f!==0&&8>f?f:8;var v=O.T,b={};O.T=b,nf(e,!1,n,a);try{var G=u(),et=O.S;if(et!==null&&et(b,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var mt=RS(G,o);ro(e,n,mt,$n(e))}else ro(e,n,o,$n(e))}catch(xt){ro(e,n,{then:function(){},status:"rejected",reason:xt},$n())}finally{j.p=f,v!==null&&b.types!==null&&(v.types=b.types),O.T=v}}function NS(){}function tf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Um(e).queue;Dm(e,u,n,Y,a===null?NS:function(){return Lm(e),a(o)})}function Um(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Lm(e){var n=Um(e);n.next===null&&(n=e.alternate.memoizedState),ro(e,n.next.queue,{},$n())}function ef(){return En(To)}function Nm(){return an().memoizedState}function Om(){return an().memoizedState}function OS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=va(a);var o=Sa(n,e,a);o!==null&&(kn(o,n,a),eo(o,n,a)),n={cache:Du()},e.payload=n;return}n=n.return}}function PS(e,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},bl(e)?zm(n,a):(a=Su(e,n,a,o),a!==null&&(kn(a,e,o),Bm(a,n,o)))}function Pm(e,n,a){var o=$n();ro(e,n,a,o)}function ro(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(bl(e))zm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(u.hasEagerState=!0,u.eagerState=b,Yn(b,v))return sl(e,n,u,0),Ve===null&&al(),!1}catch{}finally{}if(a=Su(e,n,u,o),a!==null)return kn(a,e,o),Bm(a,n,o),!0}return!1}function nf(e,n,a,o){if(o={lane:2,revertLane:Pf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},bl(e)){if(n)throw Error(s(479))}else n=Su(e,a,o,2),n!==null&&kn(n,e,2)}function bl(e){var n=e.alternate;return e===le||n!==null&&n===le}function zm(e,n){Ys=vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Bm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Ti(e,a)}}var oo={readContext:En,use:yl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};oo.useEffectEvent=$e;var Im={readContext:En,use:yl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:ym,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,El(4194308,4,bm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var o=e();if(os){wt(!0);try{e()}finally{wt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=On();if(a!==void 0){var u=a(n);if(os){wt(!0);try{a(n)}finally{wt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=PS.bind(null,le,e),[o.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Zu(e);var n=e.queue,a=Pm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ju,useDeferredValue:function(e,n){var a=On();return $u(a,e,n)},useTransition:function(){var e=Zu(!1);return e=Dm.bind(null,le,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=le,u=On();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ve===null)throw Error(s(349));(ve&127)!==0||sm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,ym(om.bind(null,o,f,e),[e]),o.flags|=2048,Zs(9,{destroy:void 0},rm.bind(null,o,f,a,n),null),a},useId:function(){var e=On(),n=Ve.identifierPrefix;if(Me){var a=Ri,o=Ai;a=(o&~(1<<32-Dt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Sl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=CS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ef,useFormState:gm,useActionState:gm,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=nf.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:qu,useCacheRefresh:function(){return On().memoizedState=OS.bind(null,le)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},af={readContext:En,use:yl,useCallback:Rm,useContext:En,useEffect:Qu,useImperativeHandle:Am,useInsertionEffect:Em,useLayoutEffect:Tm,useMemo:Cm,useReducer:Ml,useRef:xm,useState:function(){return Ml(Wi)},useDebugValue:Ju,useDeferredValue:function(e,n){var a=an();return wm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Ml(Wi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:am,useId:Nm,useHostTransitionStatus:ef,useFormState:_m,useActionState:_m,useOptimistic:function(e,n){var a=an();return um(a,Ie,e,n)},useMemoCache:qu,useCacheRefresh:Om};af.useEffectEvent=Mm;var Fm={readContext:En,use:yl,useCallback:Rm,useContext:En,useEffect:Qu,useImperativeHandle:Am,useInsertionEffect:Em,useLayoutEffect:Tm,useMemo:Cm,useReducer:ju,useRef:xm,useState:function(){return ju(Wi)},useDebugValue:Ju,useDeferredValue:function(e,n){var a=an();return Ie===null?$u(a,e,n):wm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=ju(Wi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:am,useId:Nm,useHostTransitionStatus:ef,useFormState:Sm,useActionState:Sm,useOptimistic:function(e,n){var a=an();return Ie!==null?um(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:qu,useCacheRefresh:Om};Fm.useEffectEvent=Mm;function sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),u=va(o);u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(kn(n,e,o),eo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),u=va(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Sa(e,u,o),n!==null&&(kn(n,e,o),eo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=Sa(e,o,a),n!==null&&(kn(n,e,a),eo(n,e,a))}};function Hm(e,n,a,o,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,v):n.prototype&&n.prototype.isPureReactComponent?!Yr(a,o)||!Yr(u,f):!0}function Gm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&rf.enqueueReplaceState(n,n.state,null)}function ls(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Vm(e){il(e)}function km(e){console.error(e)}function Xm(e){il(e)}function Al(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function of(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Al(e,n)},a}function qm(e){return e=va(e),e.tag=3,e}function Ym(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){Wm(n,a,o)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Wm(n,a,o),typeof u!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var b=o.stack;this.componentDidCatch(o.value,{componentStack:b!==null?b:""})})}function zS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Gs(n,a,u,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return ci===null?Il():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Lf(e,o,u)),!1;case 22:return a.flags|=65536,o===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Lf(e,o,u)),!1}throw Error(s(435,a.tag))}return Lf(e,o,u),Il(),!1}if(Me)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==bu&&(e=Error(s(422),{cause:o}),Kr(si(e,a)))):(o!==bu&&(n=Error(s(423),{cause:o}),Kr(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=si(o,a),u=of(e.stateNode,o,u),zu(e,u),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:o});if(f=si(f,a),go===null?go=[f]:go.push(f),tn!==4&&(tn=2),n===null)return!0;o=si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=of(a.stateNode,o,e),zu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ba===null||!ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=qm(u),Ym(u,e,a,o),zu(a,u),!1}a=a.return}while(a!==null);return!1}var lf=Error(s(461)),cn=!1;function Tn(e,n,a,o){n.child=e===null?Qp(n,null,a,o):rs(n,e.child,a,o)}function jm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var v={};for(var b in o)b!=="ref"&&(v[b]=o[b])}else v=o;return ns(n),o=Vu(e,n,a,v,f,u),b=ku(),e!==null&&!cn?(Xu(e,n,u),qi(e,n,u)):(Me&&b&&Eu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function Zm(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!xu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Km(e,n,f,o,u)):(e=ol(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!gf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Yr,a(v,o)&&e.ref===n.ref)return qi(e,n,u)}return n.flags|=1,e=Hi(f,o),e.ref=n.ref,e.return=n,n.child=e}function Km(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(Yr(f,o)&&e.ref===n.ref)if(cn=!1,n.pendingProps=o=f,gf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,qi(e,n,u)}return cf(e,n,a,o,u)}function Qm(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Jm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&fl(n,f!==null?f.cachePool:null),f!==null?tm(n,f):Iu(),em(n);else return o=n.lanes=536870912,Jm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(fl(n,f.cachePool),tm(n,f),ya(),n.memoizedState=null):(e!==null&&fl(n,null),Iu(),ya());return Tn(e,n,u,a),n.child}function lo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Jm(e,n,a,o,u){var f=Lu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&fl(n,null),Iu(),em(n),e!==null&&Gs(e,n,o,!0),n.childLanes=u,null}function Rl(e,n){return n=wl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function $m(e,n,a){return rs(n,e.child,null,a),e=Rl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function BS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Rl(n,o),n.lanes=536870912,lo(null,e);if(Hu(n),(e=qe)?(e=f_(e,li),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=zp(e),a.return=n,n.child=a,Mn=n,qe=null)):e=null,e===null)throw ma(n);return n.lanes=536870912,null}return Rl(n,o)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Hu(n),u)if(n.flags&256)n.flags&=-257,n=$m(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Gs(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(o=Ve,o!==null&&(v=As(o,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Ja(e,v),kn(o,e,v),lf;Il(),n=$m(e,n,a)}else e=f.treeContext,qe=ui(v.nextSibling),Mn=n,Me=!0,pa=null,li=!1,e!==null&&Fp(n,e),n=Rl(n,o),n.flags|=4096;return n}return e=Hi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Cl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function cf(e,n,a,o,u){return ns(n),a=Vu(e,n,a,o,void 0,u),o=ku(),e!==null&&!cn?(Xu(e,n,u),qi(e,n,u)):(Me&&o&&Eu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function tg(e,n,a,o,u,f){return ns(n),n.updateQueue=null,a=im(n,o,a,u),nm(e),o=ku(),e!==null&&!cn?(Xu(e,n,f),qi(e,n,f)):(Me&&o&&Eu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function eg(e,n,a,o,u){if(ns(n),n.stateNode===null){var f=Bs,v=a.contextType;typeof v=="object"&&v!==null&&(f=En(v)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Ou(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?En(v):Bs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(sf(n,a,v,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&rf.enqueueReplaceState(f,f.state,null),io(n,o,f,u),no(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,G=ls(a,b);f.props=G;var et=f.context,mt=a.contextType;v=Bs,typeof mt=="object"&&mt!==null&&(v=En(mt));var xt=a.getDerivedStateFromProps;mt=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,mt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||et!==v)&&Gm(n,f,o,v),_a=!1;var at=n.memoizedState;f.state=at,io(n,o,f,u),no(),et=n.memoizedState,b||at!==et||_a?(typeof xt=="function"&&(sf(n,a,xt,o),et=n.memoizedState),(G=_a||Hm(n,a,G,o,at,et,v))?(mt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),f.props=o,f.state=et,f.context=v,o=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Pu(e,n),v=n.memoizedProps,mt=ls(a,v),f.props=mt,xt=n.pendingProps,at=f.context,et=a.contextType,G=Bs,typeof et=="object"&&et!==null&&(G=En(et)),b=a.getDerivedStateFromProps,(et=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xt||at!==G)&&Gm(n,f,o,G),_a=!1,at=n.memoizedState,f.state=at,io(n,o,f,u),no();var lt=n.memoizedState;v!==xt||at!==lt||_a||e!==null&&e.dependencies!==null&&cl(e.dependencies)?(typeof b=="function"&&(sf(n,a,b,o),lt=n.memoizedState),(mt=_a||Hm(n,a,mt,o,at,lt,G)||e!==null&&e.dependencies!==null&&cl(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,lt,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,lt,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),f.props=o,f.state=lt,f.context=G,o=mt):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,Cl(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=rs(n,e.child,null,u),n.child=rs(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=qi(e,n,u),e}function ng(e,n,a,o){return ts(),n.flags|=256,Tn(e,n,a,o),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ff(e){return{baseLanes:e,cachePool:Wp()}}function hf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function ig(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?xa(n):ya(),(e=qe)?(e=f_(e,li),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:da!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=zp(e),a.return=n,n.child=a,Mn=n,qe=null)):e=null,e===null)throw ma(n);return jf(e)?n.lanes=32:n.lanes=536870912,null}var b=o.children;return o=o.fallback,u?(ya(),u=n.mode,b=wl({mode:"hidden",children:b},u),o=$a(o,u,a,null),b.return=n,o.return=n,b.sibling=o,n.child=b,o=n.child,o.memoizedState=ff(a),o.childLanes=hf(e,v,a),n.memoizedState=uf,lo(null,o)):(xa(n),df(n,b))}var G=e.memoizedState;if(G!==null&&(b=G.dehydrated,b!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=pf(e,n,a)):n.memoizedState!==null?(ya(),n.child=e.child,n.flags|=128,n=null):(ya(),b=o.fallback,u=n.mode,o=wl({mode:"visible",children:o.children},u),b=$a(b,u,a,null),b.flags|=2,o.return=n,b.return=n,o.sibling=b,n.child=o,rs(n,e.child,null,a),o=n.child,o.memoizedState=ff(a),o.childLanes=hf(e,v,a),n.memoizedState=uf,n=lo(null,o));else if(xa(n),jf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var et=v.dgst;v=et,o=Error(s(419)),o.stack="",o.digest=v,Kr({value:o,source:null,stack:null}),n=pf(e,n,a)}else if(cn||Gs(e,n,a,!1),v=(a&e.childLanes)!==0,cn||v){if(v=Ve,v!==null&&(o=As(v,a),o!==0&&o!==G.retryLane))throw G.retryLane=o,Ja(e,o),kn(v,e,o),lf;Yf(b)||Il(),n=pf(e,n,a)}else Yf(b)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,qe=ui(b.nextSibling),Mn=n,Me=!0,pa=null,li=!1,e!==null&&Fp(n,e),n=df(n,o.children),n.flags|=4096);return n}return u?(ya(),b=o.fallback,u=n.mode,G=e.child,et=G.sibling,o=Hi(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,et!==null?b=Hi(et,b):(b=$a(b,u,a,null),b.flags|=2),b.return=n,o.return=n,o.sibling=b,n.child=o,lo(null,o),o=n.child,b=e.child.memoizedState,b===null?b=ff(a):(u=b.cachePool,u!==null?(G=on._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Wp(),b={baseLanes:b.baseLanes|a,cachePool:u}),o.memoizedState=b,o.childLanes=hf(e,v,a),n.memoizedState=uf,lo(e.child,o)):(xa(n),a=e.child,e=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function df(e,n){return n=wl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function wl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function pf(e,n,a){return rs(n,e.child,null,a),e=df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ag(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Cu(e.return,n,a)}function mf(e,n,a,o,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=o,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function sg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var v=nn.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,At(nn,v),Tn(e,n,o,a),o=Me?Zr:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,a,n);else if(e.tag===19)ag(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&_l(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),mf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&_l(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}mf(n,!0,a,null,f,o);break;case"together":mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ta|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Hi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Hi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function gf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&cl(e)))}function IS(e,n,a){switch(n.tag){case 3:zt(n,n.stateNode.containerInfo),ga(n,on,e.memoizedState.cache),ts();break;case 27:case 5:jt(n);break;case 4:zt(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ig(e,n,a):(xa(n),e=qi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Gs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return sg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),At(nn,nn.current),o)break;return null;case 22:return n.lanes=0,Qm(e,n,a,n.pendingProps);case 24:ga(n,on,e.memoizedState.cache)}return qi(e,n,a)}function rg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!gf(e,a)&&(n.flags&128)===0)return cn=!1,IS(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,Me&&(n.flags&1048576)!==0&&Ip(n,Zr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=as(n.elementType),n.type=e,typeof e=="function")xu(e)?(o=ls(e,o),n.tag=1,n=eg(null,n,e,o,a)):(n.tag=0,n=cf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=jm(null,n,e,o,a);break t}else if(u===U){n.tag=14,n=Zm(null,n,e,o,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return cf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ls(o,n.pendingProps),eg(e,n,o,u,a);case 3:t:{if(zt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Pu(e,n),io(n,o,null,a);var v=n.memoizedState;if(o=v.cache,ga(n,on,o),o!==f.cache&&wu(n,[on],a,!0),no(),o=v.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ng(e,n,o,a);break t}else if(o!==u){u=si(Error(s(424)),n),Kr(u),n=ng(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(qe=ui(e.firstChild),Mn=n,Me=!0,pa=null,li=!0,a=Qp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ts(),o===u){n=qi(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Cl(e,n),e===null?(a=__(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=Wl(nt.current).createElement(a),o[rn]=n,o[xn]=e,bn(o,a,e),yt(o),n.stateNode=o):n.memoizedState=__(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return jt(n),e===null&&Me&&(o=n.stateNode=p_(n.type,n.pendingProps,nt.current),Mn=n,li=!0,u=qe,wa(n.type)?(Zf=u,qe=ui(o.firstChild)):qe=u),Tn(e,n,n.pendingProps.children,a),Cl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=qe)&&(o=px(o,n.type,n.pendingProps,li),o!==null?(n.stateNode=o,Mn=n,qe=ui(o.firstChild),li=!1,u=!0):u=!1),u||ma(n)),jt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,o=f.children,Xf(u,f)?o=null:v!==null&&Xf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Vu(e,n,wS,null,null,a),To._currentValue=u),Cl(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=qe)&&(a=mx(a,n.pendingProps,li),a!==null?(n.stateNode=a,Mn=n,qe=null,e=!0):e=!1),e||ma(n)),null;case 13:return ig(e,n,a);case 4:return zt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=rs(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return jm(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ns(n),u=En(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return Zm(e,n,n.type,n.pendingProps,a);case 15:return Km(e,n,n.type,n.pendingProps,a);case 19:return sg(e,n,a);case 31:return BS(e,n,a);case 22:return Qm(e,n,a,n.pendingProps);case 24:return ns(n),o=En(on),e===null?(u=Lu(),u===null&&(u=Ve,f=Du(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Ou(n),ga(n,on,u)):((e.lanes&a)!==0&&(Pu(e,n),io(n,null,null,a),no()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ga(n,on,o)):(o=f.cache,ga(n,on,o),o!==u.cache&&wu(n,[on],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function _f(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Ng())e.flags|=8192;else throw ss=dl,Nu}else e.flags&=-16777217}function og(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!M_(n))if(Ng())e.flags|=8192;else throw ss=dl,Nu}function Dl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?De():536870912,e.lanes|=n,$s|=n)}function co(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function FS(e,n,a){var o=n.pendingProps;switch(Tu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ki(on),Ot(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Au())),Ye(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Yi(n),f!==null?(Ye(n),og(n,f)):(Ye(n),_f(n,u,null,o,a))):f?f!==e.memoizedState?(Yi(n),Ye(n),og(n,f)):(Ye(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Yi(n),Ye(n),_f(n,u,e,o,a)),null;case 27:if(ce(n),a=nt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}e=Lt.current,Hs(n)?Hp(n):(e=p_(u,o,a),n.stateNode=e,Yi(n))}return Ye(n),null;case 5:if(ce(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(f=Lt.current,Hs(n))Hp(n);else{var v=Wl(nt.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?v.createElement("select",{is:o.is}):v.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?v.createElement(u,{is:o.is}):v.createElement(u)}}f[rn]=n,f[xn]=o;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(bn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Yi(n)}}return Ye(n),_f(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Yi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=nt.current,Hs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||i_(e.nodeValue,a)),e||ma(n,!0)}else e=Wl(e).createTextNode(o),e[rn]=n,n.stateNode=e}return Ye(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Hs(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),e=!1}else a=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ye(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Hs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=Au(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Dl(n,n.updateQueue),Ye(n),null);case 4:return Ot(),e===null&&Ff(n.stateNode.containerInfo),Ye(n),null;case 10:return ki(n.type),Ye(n),null;case 19:if(it(nn),o=n.memoizedState,o===null)return Ye(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)co(o,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=_l(e),f!==null){for(n.flags|=128,co(o,!1),e=f.updateQueue,n.updateQueue=e,Dl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Pp(a,e),a=a.sibling;return At(nn,nn.current&1|2),Me&&Gi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&T()>Pl&&(n.flags|=128,u=!0,co(o,!1),n.lanes=4194304)}else{if(!u)if(e=_l(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Dl(n,e),co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Me)return Ye(n),null}else 2*T()-o.renderingStartTime>Pl&&a!==536870912&&(n.flags|=128,u=!0,co(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=T(),e.sibling=null,a=nn.current,At(nn,u?a&1|2:a&1),Me&&Gi(n,o.treeForkCount),e):(Ye(n),null);case 22:case 23:return Kn(n),Fu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Dl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&it(is),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(on),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function HS(e,n){switch(Tu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(on),Ot(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ce(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));ts()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ts()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return it(nn),null;case 4:return Ot(),null;case 10:return ki(n.type),null;case 22:case 23:return Kn(n),Fu(),e!==null&&it(is),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(on),null;case 25:return null;default:return null}}function lg(e,n){switch(Tu(n),n.tag){case 3:ki(on),Ot();break;case 26:case 27:case 5:ce(n);break;case 4:Ot();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:it(nn);break;case 10:ki(n.type);break;case 22:case 23:Kn(n),Fu(),e!==null&&it(is);break;case 24:ki(on)}}function uo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,v=a.inst;o=f(),v.destroy=o}a=a.next}while(a!==u)}}catch(b){ze(n,n.return,b)}}function Ma(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var v=o.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=n;var G=a,et=b;try{et()}catch(mt){ze(u,G,mt)}}}o=o.next}while(o!==f)}}catch(mt){ze(n,n.return,mt)}}function cg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{$p(n,a)}catch(o){ze(e,e.return,o)}}}function ug(e,n,a){a.props=ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ze(e,n,o)}}function fo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ze(e,n,u)}}function Ci(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function fg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function vf(e,n,a){try{var o=e.stateNode;lx(o,e.type,a,n),o[xn]=n}catch(u){ze(e,e.return,u)}}function hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wa(e.type)||e.tag===4}function Sf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(xf(e,n,a),e=e.sibling;e!==null;)xf(e,n,a),e=e.sibling}function Ul(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,n,a),e=e.sibling;e!==null;)Ul(e,n,a),e=e.sibling}function dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,o,a),n[rn]=e,n[xn]=a}catch(f){ze(e,e.return,f)}}var ji=!1,un=!1,yf=!1,pg=typeof WeakSet=="function"?WeakSet:Set,_n=null;function GS(e,n){if(e=e.containerInfo,Vf=Jl,e=Ap(e),du(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,G=-1,et=0,mt=0,xt=e,at=null;e:for(;;){for(var lt;xt!==a||u!==0&&xt.nodeType!==3||(b=v+u),xt!==f||o!==0&&xt.nodeType!==3||(G=v+o),xt.nodeType===3&&(v+=xt.nodeValue.length),(lt=xt.firstChild)!==null;)at=xt,xt=lt;for(;;){if(xt===e)break e;if(at===a&&++et===u&&(b=v),at===f&&++mt===o&&(G=v),(lt=xt.nextSibling)!==null)break;xt=at,at=xt.parentNode}xt=lt}a=b===-1||G===-1?null:{start:b,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(kf={focusedElem:e,selectionRange:a},Jl=!1,_n=n;_n!==null;)if(n=_n,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,_n=e;else for(;_n!==null;){switch(n=_n,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Wt=ls(a.type,u);e=o.getSnapshotBeforeUpdate(Wt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){ze(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)qf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,_n=e;break}_n=n.return}}function mg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ki(e,a),o&4&&uo(5,a);break;case 1:if(Ki(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){ze(a,a.return,v)}else{var u=ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ze(a,a.return,v)}}o&64&&cg(a),o&512&&fo(a,a.return);break;case 3:if(Ki(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$p(e,n)}catch(v){ze(a,a.return,v)}}break;case 27:n===null&&o&4&&dg(a);case 26:case 5:Ki(e,a),n===null&&o&4&&fg(a),o&512&&fo(a,a.return);break;case 12:Ki(e,a);break;case 31:Ki(e,a),o&4&&vg(e,a);break;case 13:Ki(e,a),o&4&&Sg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=KS.bind(null,a),gx(e,a))));break;case 22:if(o=a.memoizedState!==null||ji,!o){n=n!==null&&n.memoizedState!==null||un,u=ji;var f=un;ji=o,(un=n)&&!f?Qi(e,a,(a.subtreeFlags&8772)!==0):Ki(e,a),ji=u,un=f}break;case 30:break;default:Ki(e,a)}}function gg(e){var n=e.alternate;n!==null&&(e.alternate=null,gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&C(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Fn=!1;function Zi(e,n,a){for(a=a.child;a!==null;)_g(e,n,a),a=a.sibling}function _g(e,n,a){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(ut,a)}catch{}switch(a.tag){case 26:un||Ci(a,n),Zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ci(a,n);var o=Ke,u=Fn;wa(a.type)&&(Ke=a.stateNode,Fn=!1),Zi(e,n,a),yo(a.stateNode),Ke=o,Fn=u;break;case 5:un||Ci(a,n);case 6:if(o=Ke,u=Fn,Ke=null,Zi(e,n,a),Ke=o,Fn=u,Ke!==null)if(Fn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Ke!==null&&(Fn?(e=Ke,c_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),or(e)):c_(Ke,a.stateNode));break;case 4:o=Ke,u=Fn,Ke=a.stateNode.containerInfo,Fn=!0,Zi(e,n,a),Ke=o,Fn=u;break;case 0:case 11:case 14:case 15:Ma(2,a,n),un||Ma(4,a,n),Zi(e,n,a);break;case 1:un||(Ci(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ug(a,n,o)),Zi(e,n,a);break;case 21:Zi(e,n,a);break;case 22:un=(o=un)||a.memoizedState!==null,Zi(e,n,a),un=o;break;default:Zi(e,n,a)}}function vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{or(e)}catch(a){ze(n,n.return,a)}}}function Sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{or(e)}catch(a){ze(n,n.return,a)}}function VS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pg),n;default:throw Error(s(435,e.tag))}}function Ll(e,n){var a=VS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=QS.bind(null,e,o);o.then(u,u)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(wa(b.type)){Ke=b.stateNode,Fn=!1;break t}break;case 5:Ke=b.stateNode,Fn=!1;break t;case 3:case 4:Ke=b.stateNode.containerInfo,Fn=!0;break t}b=b.return}if(Ke===null)throw Error(s(160));_g(f,v,u),Ke=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)xg(n,e),n=n.sibling}var vi=null;function xg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),o&4&&(Ma(3,e,e.return),uo(3,e),Ma(5,e,e.return));break;case 1:Hn(n,e),Gn(e),o&512&&(un||a===null||Ci(a,a.return)),o&64&&ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=vi;if(Hn(n,e),Gn(e),o&512&&(un||a===null||Ci(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ya]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,o,a),f[rn]=e,yt(f),o=f;break t;case"link":var v=x_("link","href",u).get(o+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=u.createElement(o),bn(f,o,a),u.head.appendChild(f);break;case"meta":if(v=x_("meta","content",u).get(o+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=u.createElement(o),bn(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[rn]=e,yt(f),o=f}e.stateNode=o}else y_(u,e.type,e.stateNode);else e.stateNode=S_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?y_(u,e.type,e.stateNode):S_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&vf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),o&512&&(un||a===null||Ci(a,a.return)),a!==null&&o&4&&vf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),o&512&&(un||a===null||Ci(a,a.return)),e.flags&32){u=e.stateNode;try{Ds(u,"")}catch(Wt){ze(e,e.return,Wt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,vf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(yf=!0);break;case 6:if(Hn(n,e),Gn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Wt){ze(e,e.return,Wt)}}break;case 3:if(jl=null,u=vi,vi=ql(n.containerInfo),Hn(n,e),vi=u,Gn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(Wt){ze(e,e.return,Wt)}yf&&(yf=!1,yg(e));break;case 4:o=vi,vi=ql(e.stateNode.containerInfo),Hn(n,e),Gn(e),vi=o;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ol=T()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,et=ji,mt=un;if(ji=et||u,un=mt||G,Hn(n,e),un=mt,ji=et,Gn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ji||un||cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=G.stateNode;var xt=G.memoizedProps.style,at=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;b.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Wt){ze(G,G.return,Wt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Wt){ze(G,G.return,Wt)}}}else if(n.tag===18){if(a===null){G=n;try{var lt=G.stateNode;u?u_(lt,!0):u_(G.stateNode,!1)}catch(Wt){ze(G,G.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ll(e,a))));break;case 19:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ll(e,o)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(hg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Sf(e);Ul(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ds(v,""),a.flags&=-33);var b=Sf(e);Ul(e,b,v);break;case 3:case 4:var G=a.stateNode.containerInfo,et=Sf(e);xf(e,et,G);break;default:throw Error(s(161))}}catch(mt){ze(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ki(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mg(e,n.alternate,n),n=n.sibling}function cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),cs(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ug(n,n.return,a),cs(n);break;case 27:yo(n.stateNode);case 26:case 5:Ci(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}e=e.sibling}}function Qi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Qi(u,f,a),uo(4,f);break;case 1:if(Qi(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){ze(o,o.return,et)}if(o=f,u=o.updateQueue,u!==null){var b=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Jp(G[u],b)}catch(et){ze(o,o.return,et)}}a&&v&64&&cg(f),fo(f,f.return);break;case 27:dg(f);case 26:case 5:Qi(u,f,a),a&&o===null&&v&4&&fg(f),fo(f,f.return);break;case 12:Qi(u,f,a);break;case 31:Qi(u,f,a),a&&v&4&&vg(u,f);break;case 13:Qi(u,f,a),a&&v&4&&Sg(u,f);break;case 22:f.memoizedState===null&&Qi(u,f,a),fo(f,f.return);break;case 30:break;default:Qi(u,f,a)}n=n.sibling}}function Mf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Qr(a))}function Ef(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e))}function Si(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mg(e,n,a,o),n=n.sibling}function Mg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,o),u&2048&&uo(9,n);break;case 1:Si(e,n,a,o);break;case 3:Si(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Qr(e)));break;case 12:if(u&2048){Si(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){ze(n,n.return,G)}}else Si(e,n,a,o);break;case 31:Si(e,n,a,o);break;case 13:Si(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Si(e,n,a,o):ho(e,n):f._visibility&2?Si(e,n,a,o):(f._visibility|=2,Ks(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Mf(v,n);break;case 24:Si(e,n,a,o),u&2048&&Ef(n.alternate,n);break;default:Si(e,n,a,o)}}function Ks(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,b=a,G=o,et=v.flags;switch(v.tag){case 0:case 11:case 15:Ks(f,v,b,G,u),uo(8,v);break;case 23:break;case 22:var mt=v.stateNode;v.memoizedState!==null?mt._visibility&2?Ks(f,v,b,G,u):ho(f,v):(mt._visibility|=2,Ks(f,v,b,G,u)),u&&et&2048&&Mf(v.alternate,v);break;case 24:Ks(f,v,b,G,u),u&&et&2048&&Ef(v.alternate,v);break;default:Ks(f,v,b,G,u)}n=n.sibling}}function ho(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:ho(a,o),u&2048&&Mf(o.alternate,o);break;case 24:ho(a,o),u&2048&&Ef(o.alternate,o);break;default:ho(a,o)}n=n.sibling}}var po=8192;function Qs(e,n,a){if(e.subtreeFlags&po)for(e=e.child;e!==null;)Eg(e,n,a),e=e.sibling}function Eg(e,n,a){switch(e.tag){case 26:Qs(e,n,a),e.flags&po&&e.memoizedState!==null&&Cx(a,vi,e.memoizedState,e.memoizedProps);break;case 5:Qs(e,n,a);break;case 3:case 4:var o=vi;vi=ql(e.stateNode.containerInfo),Qs(e,n,a),vi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=po,po=16777216,Qs(e,n,a),po=o):Qs(e,n,a));break;default:Qs(e,n,a)}}function Tg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function mo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Ag(o,e)}Tg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 0:case 11:case 15:mo(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:mo(e);break;case 12:mo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):mo(e);break;default:mo(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,Ag(o,e)}Tg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function Ag(e,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Qr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else t:for(a=e;_n!==null;){o=_n;var u=o.sibling,f=o.return;if(gg(o),o===a){_n=null;break t}if(u!==null){u.return=f,_n=u;break t}_n=f}}}var kS={getCacheForType:function(e){var n=En(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(on).controller.signal}},XS=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ve=null,me=null,ve=0,Pe=0,Qn=null,Ea=!1,Js=!1,Tf=!1,Ji=0,tn=0,Ta=0,us=0,bf=0,Jn=0,$s=0,go=null,Vn=null,Af=!1,Ol=0,Rg=0,Pl=1/0,zl=null,ba=null,dn=0,Aa=null,tr=null,$i=0,Rf=0,Cf=null,Cg=null,_o=0,wf=null;function $n(){return(Ue&2)!==0&&ve!==0?ve&-ve:O.T!==null?Pf():qa()}function wg(){if(Jn===0)if((ve&536870912)===0||Me){var e=Et;Et<<=1,(Et&3932160)===0&&(Et=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function kn(e,n,a){(e===Ve&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(er(e,0),Ra(e,ve,Jn,!1)),Ln(e,a),((Ue&2)===0||e!==Ve)&&(e===Ve&&((Ue&2)===0&&(us|=a),tn===4&&Ra(e,ve,Jn,!1)),wi(e))}function Dg(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Vt(e,n),u=o?YS(e,n):Uf(e,n,!0),f=o;do{if(u===0){Js&&!o&&Ra(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!WS(a)){u=Uf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=e;u=go;var G=b.current.memoizedState.isDehydrated;if(G&&(er(b,v).flags|=256),v=Uf(b,v,!1),v!==2){if(Tf&&!G){b.errorRecoveryDisabledLanes|=f,us|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){er(e,0),Ra(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ra(o,n,Jn,!Ea);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ol+300-T(),10<u)){if(Ra(o,n,Jn,!Ea),ft(o,0,!0)!==0)break t;$i=n,o.timeoutHandle=o_(Ug.bind(null,o,a,Vn,zl,Af,n,Jn,us,$s,Ea,f,"Throttled",-0,0),u);break t}Ug(o,a,Vn,zl,Af,n,Jn,us,$s,Ea,f,null,-0,0)}}break}while(!0);wi(e)}function Ug(e,n,a,o,u,f,v,b,G,et,mt,xt,at,lt){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},Eg(n,f,xt);var Wt=(f&62914560)===f?Ol-T():(f&4194048)===f?Rg-T():0;if(Wt=wx(xt,Wt),Wt!==null){$i=f,e.cancelPendingCommit=Wt(Fg.bind(null,e,n,f,a,o,u,v,b,G,mt,xt,null,at,lt)),Ra(e,f,v,!et);return}}Fg(e,n,f,a,o,u,v,b,G)}function WS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Yn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,a,o){n&=~bf,n&=~us,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Dt(u),v=1<<f;o[f]=-1,u&=~v}a!==0&&Br(e,a,n)}function Bl(){return(Ue&6)===0?(vo(0),!1):!0}function Df(){if(me!==null){if(Pe===0)var e=me.return;else e=me,Vi=es=null,Wu(e),Ws=null,$r=0,e=me;for(;e!==null;)lg(e.alternate,e),e=e.return;me=null}}function er(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,fx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),$i=0,Df(),Ve=e,me=a=Hi(e.current,null),ve=n,Pe=0,Qn=null,Ea=!1,Js=Vt(e,n),Tf=!1,$s=Jn=bf=us=Ta=tn=0,Vn=go=null,Af=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Dt(o),f=1<<u;n|=e[u],o&=~f}return Ji=n,al(),a}function Lg(e,n){le=null,O.H=oo,n===Xs||n===hl?(n=jp(),Pe=3):n===Nu?(n=jp(),Pe=4):Pe=n===lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,me===null&&(tn=1,Al(e,si(n,e.current)))}function Ng(){var e=Zn.current;return e===null?!0:(ve&4194048)===ve?ci===null:(ve&62914560)===ve||(ve&536870912)!==0?e===ci:!1}function Og(){var e=O.H;return O.H=oo,e===null?oo:e}function Pg(){var e=O.A;return O.A=kS,e}function Il(){tn=4,Ea||(ve&4194048)!==ve&&Zn.current!==null||(Js=!0),(Ta&134217727)===0&&(us&134217727)===0||Ve===null||Ra(Ve,ve,Jn,!1)}function Uf(e,n,a){var o=Ue;Ue|=2;var u=Og(),f=Pg();(Ve!==e||ve!==n)&&(zl=null,er(e,n)),n=!1;var v=tn;t:do try{if(Pe!==0&&me!==null){var b=me,G=Qn;switch(Pe){case 8:Df(),v=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var et=Pe;if(Pe=0,Qn=null,nr(e,b,G,et),a&&Js){v=0;break t}break;default:et=Pe,Pe=0,Qn=null,nr(e,b,G,et)}}qS(),v=tn;break}catch(mt){Lg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Vi=es=null,Ue=o,O.H=u,O.A=f,me===null&&(Ve=null,ve=0,al()),v}function qS(){for(;me!==null;)zg(me)}function YS(e,n){var a=Ue;Ue|=2;var o=Og(),u=Pg();Ve!==e||ve!==n?(zl=null,Pl=T()+500,er(e,n)):Js=Vt(e,n);t:do try{if(Pe!==0&&me!==null){n=me;var f=Qn;e:switch(Pe){case 1:Pe=0,Qn=null,nr(e,n,f,1);break;case 2:case 9:if(qp(f)){Pe=0,Qn=null,Bg(n);break}n=function(){Pe!==2&&Pe!==9||Ve!==e||(Pe=7),wi(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:qp(f)?(Pe=0,Qn=null,Bg(n)):(Pe=0,Qn=null,nr(e,n,f,7));break;case 5:var v=null;switch(me.tag){case 26:v=me.memoizedState;case 5:case 27:var b=me;if(v?M_(v):b.stateNode.complete){Pe=0,Qn=null;var G=b.sibling;if(G!==null)me=G;else{var et=b.return;et!==null?(me=et,Fl(et)):me=null}break e}}Pe=0,Qn=null,nr(e,n,f,5);break;case 6:Pe=0,Qn=null,nr(e,n,f,6);break;case 8:Df(),tn=6;break t;default:throw Error(s(462))}}jS();break}catch(mt){Lg(e,mt)}while(!0);return Vi=es=null,O.H=o,O.A=u,Ue=a,me!==null?0:(Ve=null,ve=0,al(),tn)}function jS(){for(;me!==null&&!We();)zg(me)}function zg(e){var n=rg(e.alternate,e,Ji);e.memoizedProps=e.pendingProps,n===null?Fl(e):me=n}function Bg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Wu(n);default:lg(a,n),n=me=Pp(n,Ji),n=rg(a,n,Ji)}e.memoizedProps=e.pendingProps,n===null?Fl(e):me=n}function nr(e,n,a,o){Vi=es=null,Wu(n),Ws=null,$r=0;var u=n.return;try{if(zS(e,u,n,a,ve)){tn=1,Al(e,si(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;tn=1,Al(e,si(a,e.current)),me=null;return}n.flags&32768?(Me||o===1?e=!0:Js||(ve&536870912)!==0?e=!1:(Ea=e=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Ig(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){Ig(n,Ea);return}e=n.return;var a=FS(n.alternate,n,Ji);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);tn===0&&(tn=5)}function Ig(e,n){do{var a=HS(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);tn=6,me=null}function Fg(e,n,a,o,u,f,v,b,G){e.cancelPendingCommit=null;do Hl();while(dn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=vu,ii(e,a,f,v,b,G),e===Ve&&(me=Ve=null,ve=0),tr=n,Aa=e,$i=a,Rf=f,Cf=u,Cg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,JS(dt,function(){return Xg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=O.T,O.T=null,u=j.p,j.p=2,v=Ue,Ue|=4;try{GS(e,n,a)}finally{Ue=v,j.p=u,O.T=o}}dn=1,Hg(),Gg(),Vg()}}function Hg(){if(dn===1){dn=0;var e=Aa,n=tr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var o=j.p;j.p=2;var u=Ue;Ue|=4;try{xg(n,e);var f=kf,v=Ap(e.containerInfo),b=f.focusedElem,G=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&bp(b.ownerDocument.documentElement,b)){if(G!==null&&du(b)){var et=G.start,mt=G.end;if(mt===void 0&&(mt=et),"selectionStart"in b)b.selectionStart=et,b.selectionEnd=Math.min(mt,b.value.length);else{var xt=b.ownerDocument||document,at=xt&&xt.defaultView||window;if(at.getSelection){var lt=at.getSelection(),Wt=b.textContent.length,ee=Math.min(G.start,Wt),He=G.end===void 0?ee:Math.min(G.end,Wt);!lt.extend&&ee>He&&(v=He,He=ee,ee=v);var K=Tp(b,ee),X=Tp(b,He);if(K&&X&&(lt.rangeCount!==1||lt.anchorNode!==K.node||lt.anchorOffset!==K.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var tt=xt.createRange();tt.setStart(K.node,K.offset),lt.removeAllRanges(),ee>He?(lt.addRange(tt),lt.extend(X.node,X.offset)):(tt.setEnd(X.node,X.offset),lt.addRange(tt))}}}}for(xt=[],lt=b;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<xt.length;b++){var _t=xt[b];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Jl=!!Vf,kf=Vf=null}finally{Ue=u,j.p=o,O.T=a}}e.current=n,dn=2}}function Gg(){if(dn===2){dn=0;var e=Aa,n=tr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var o=j.p;j.p=2;var u=Ue;Ue|=4;try{mg(e,n.alternate,n)}finally{Ue=u,j.p=o,O.T=a}}dn=3}}function Vg(){if(dn===4||dn===3){dn=0,P();var e=Aa,n=tr,a=$i,o=Cg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,tr=Aa=null,kg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(ba=null),Cs(a),n=n.stateNode,pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(ut,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=O.T,u=j.p,j.p=2,O.T=null;try{for(var f=e.onRecoverableError,v=0;v<o.length;v++){var b=o[v];f(b.value,{componentStack:b.stack})}}finally{O.T=n,j.p=u}}($i&3)!==0&&Hl(),wi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===wf?_o++:(_o=0,wf=e):_o=0,vo(0)}}function kg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Qr(n)))}function Hl(){return Hg(),Gg(),Vg(),Xg()}function Xg(){if(dn!==5)return!1;var e=Aa,n=Rf;Rf=0;var a=Cs($i),o=O.T,u=j.p;try{j.p=32>a?32:a,O.T=null,a=Cf,Cf=null;var f=Aa,v=$i;if(dn=0,tr=Aa=null,$i=0,(Ue&6)!==0)throw Error(s(331));var b=Ue;if(Ue|=4,bg(f.current),Mg(f,f.current,v,a),Ue=b,vo(0,!1),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(ut,f)}catch{}return!0}finally{j.p=u,O.T=o,kg(e,n)}}function Wg(e,n,a){n=si(a,n),n=of(e.stateNode,n,2),e=Sa(e,n,2),e!==null&&(Ln(e,2),wi(e))}function ze(e,n,a){if(e.tag===3)Wg(e,e,a);else for(;n!==null;){if(n.tag===3){Wg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ba===null||!ba.has(o))){e=si(a,e),a=qm(2),o=Sa(n,a,2),o!==null&&(Ym(a,o,n,e),Ln(o,2),wi(o));break}}n=n.return}}function Lf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new XS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Tf=!0,u.add(a),e=ZS.bind(null,e,n,a),n.then(e,e))}function ZS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ve===e&&(ve&a)===a&&(tn===4||tn===3&&(ve&62914560)===ve&&300>T()-Ol?(Ue&2)===0&&er(e,0):bf|=a,$s===ve&&($s=0)),wi(e)}function qg(e,n){n===0&&(n=De()),e=Ja(e,n),e!==null&&(Ln(e,n),wi(e))}function KS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),qg(e,a)}function QS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),qg(e,a)}function JS(e,n){return se(e,n)}var Gl=null,ir=null,Nf=!1,Vl=!1,Of=!1,Ca=0;function wi(e){e!==ir&&e.next===null&&(ir===null?Gl=ir=e:ir=ir.next=e),Vl=!0,Nf||(Nf=!0,tx())}function vo(e,n){if(!Of&&Vl){Of=!0;do for(var a=!1,o=Gl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var v=o.suspendedLanes,b=o.pingedLanes;f=(1<<31-Dt(42|e)+1)-1,f&=u&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Kg(o,f))}else f=ve,f=ft(o,o===Ve?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Vt(o,f)||(a=!0,Kg(o,f));o=o.next}while(a);Of=!1}}function $S(){Yg()}function Yg(){Vl=Nf=!1;var e=0;Ca!==0&&ux()&&(e=Ca);for(var n=T(),a=null,o=Gl;o!==null;){var u=o.next,f=jg(o,n);f===0?(o.next=null,a===null?Gl=u:a.next=u,u===null&&(ir=a)):(a=o,(e!==0||(f&3)!==0)&&(Vl=!0)),o=u}dn!==0&&dn!==5||vo(e),Ca!==0&&(Ca=0)}function jg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Dt(f),b=1<<v,G=u[v];G===-1?((b&a)===0||(b&o)!==0)&&(u[v]=re(b,n)):G<=n&&(e.expiredLanes|=b),f&=~b}if(n=Ve,a=ve,a=ft(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ze(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Vt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ze(o),Cs(a)){case 2:case 8:a=bt;break;case 32:a=dt;break;case 268435456:a=Nt;break;default:a=dt}return o=Zg.bind(null,e),a=se(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ze(o),e.callbackPriority=2,e.callbackNode=null,2}function Zg(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hl()&&e.callbackNode!==a)return null;var o=ve;return o=ft(e,e===Ve?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Dg(e,o,n),jg(e,T()),e.callbackNode!=null&&e.callbackNode===a?Zg.bind(null,e):null)}function Kg(e,n){if(Hl())return null;Dg(e,n,!0)}function tx(){hx(function(){(Ue&6)!==0?se(gt,$S):Yg()})}function Pf(){if(Ca===0){var e=Vs;e===0&&(e=vt,vt<<=1,(vt&261888)===0&&(vt=256)),Ca=e}return Ca}function Qg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ko(""+e)}function Jg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ex(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Qg((u[xn]||null).action),v=o.submitter;v&&(n=(n=v[xn]||null)?Qg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new tl("action","action",null,o,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ca!==0){var G=v?Jg(u,v):new FormData(u);tf(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(b.preventDefault(),G=v?Jg(u,v):new FormData(u),tf(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var zf=0;zf<_u.length;zf++){var Bf=_u[zf],nx=Bf.toLowerCase(),ix=Bf[0].toUpperCase()+Bf.slice(1);_i(nx,"on"+ix)}_i(wp,"onAnimationEnd"),_i(Dp,"onAnimationIteration"),_i(Up,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(SS,"onTransitionRun"),_i(xS,"onTransitionStart"),_i(yS,"onTransitionCancel"),_i(Lp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ax=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function $g(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var v=o.length-1;0<=v;v--){var b=o[v],G=b.instance,et=b.currentTarget;if(b=b.listener,G!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=et;try{f(u)}catch(mt){il(mt)}u.currentTarget=null,f=G}else for(v=0;v<o.length;v++){if(b=o[v],G=b.instance,et=b.currentTarget,b=b.listener,G!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=et;try{f(u)}catch(mt){il(mt)}u.currentTarget=null,f=G}}}}function ge(e,n){var a=n[Fr];a===void 0&&(a=n[Fr]=new Set);var o=e+"__bubble";a.has(o)||(t_(n,e,2,!1),a.add(o))}function If(e,n,a){var o=0;n&&(o|=4),t_(a,e,o,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Ff(e){if(!e[kl]){e[kl]=!0,Ft.forEach(function(a){a!=="selectionchange"&&(ax.has(a)||If(a,!1,e),If(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,If("selectionchange",!1,n))}}function t_(e,n,a,o){switch(w_(n)){case 2:var u=Lx;break;case 8:u=Nx;break;default:u=th}a=u.bind(null,n,a,e),u=void 0,!au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Hf(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var v=o.tag;if(v===3||v===4){var b=o.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=o.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=Z(b),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){o=f=v;continue t}b=b.parentNode}}o=o.return}sp(function(){var et=f,mt=nu(a),xt=[];t:{var at=Np.get(e);if(at!==void 0){var lt=tl,Wt=e;switch(e){case"keypress":if(Jo(a)===0)break t;case"keydown":case"keyup":lt=Qv;break;case"focusin":Wt="focus",lt=lu;break;case"focusout":Wt="blur",lt=lu;break;case"beforeblur":case"afterblur":lt=lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=tS;break;case wp:case Dp:case Up:lt=Vv;break;case Lp:lt=nS;break;case"scroll":case"scrollend":lt=Bv;break;case"wheel":lt=aS;break;case"copy":case"cut":case"paste":lt=Xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=up;break;case"toggle":case"beforetoggle":lt=rS}var ee=(n&4)!==0,He=!ee&&(e==="scroll"||e==="scrollend"),K=ee?at!==null?at+"Capture":null:at;ee=[];for(var X=et,tt;X!==null;){var _t=X;if(tt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||tt===null||K===null||(_t=Hr(X,K),_t!=null&&ee.push(xo(X,_t,tt))),He)break;X=X.return}0<ee.length&&(at=new lt(at,Wt,null,a,mt),xt.push({event:at,listeners:ee}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",at&&a!==eu&&(Wt=a.relatedTarget||a.fromElement)&&(Z(Wt)||Wt[fa]))break t;if((lt||at)&&(at=mt.window===mt?mt:(at=mt.ownerDocument)?at.defaultView||at.parentWindow:window,lt?(Wt=a.relatedTarget||a.toElement,lt=et,Wt=Wt?Z(Wt):null,Wt!==null&&(He=c(Wt),ee=Wt.tag,Wt!==He||ee!==5&&ee!==27&&ee!==6)&&(Wt=null)):(lt=null,Wt=et),lt!==Wt)){if(ee=lp,_t="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ee=up,_t="onPointerLeave",K="onPointerEnter",X="pointer"),He=lt==null?at:ot(lt),tt=Wt==null?at:ot(Wt),at=new ee(_t,X+"leave",lt,a,mt),at.target=He,at.relatedTarget=tt,_t=null,Z(mt)===et&&(ee=new ee(K,X+"enter",Wt,a,mt),ee.target=tt,ee.relatedTarget=He,_t=ee),He=_t,lt&&Wt)e:{for(ee=sx,K=lt,X=Wt,tt=0,_t=K;_t;_t=ee(_t))tt++;_t=0;for(var $t=X;$t;$t=ee($t))_t++;for(;0<tt-_t;)K=ee(K),tt--;for(;0<_t-tt;)X=ee(X),_t--;for(;tt--;){if(K===X||X!==null&&K===X.alternate){ee=K;break e}K=ee(K),X=ee(X)}ee=null}else ee=null;lt!==null&&e_(xt,at,lt,ee,!1),Wt!==null&&He!==null&&e_(xt,He,Wt,ee,!0)}}t:{if(at=et?ot(et):window,lt=at.nodeName&&at.nodeName.toLowerCase(),lt==="select"||lt==="input"&&at.type==="file")var Re=vp;else if(gp(at))if(Sp)Re=gS;else{Re=pS;var Kt=dS}else lt=at.nodeName,!lt||lt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&tu(et.elementType)&&(Re=vp):Re=mS;if(Re&&(Re=Re(e,et))){_p(xt,Re,a,mt);break t}Kt&&Kt(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&hn(at,"number",at.value)}switch(Kt=et?ot(et):window,e){case"focusin":(gp(Kt)||Kt.contentEditable==="true")&&(Os=Kt,pu=et,jr=null);break;case"focusout":jr=pu=Os=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,Rp(xt,a,mt);break;case"selectionchange":if(vS)break;case"keydown":case"keyup":Rp(xt,a,mt)}var ue;if(uu)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Ns?pp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(fp&&a.locale!=="ko"&&(Ns||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Ns&&(ue=rp()):(ha=mt,su="value"in ha?ha.value:ha.textContent,Ns=!0)),Kt=Xl(et,Se),0<Kt.length&&(Se=new cp(Se,e,null,a,mt),xt.push({event:Se,listeners:Kt}),ue?Se.data=ue:(ue=mp(a),ue!==null&&(Se.data=ue)))),(ue=lS?cS(e,a):uS(e,a))&&(Se=Xl(et,"onBeforeInput"),0<Se.length&&(Kt=new cp("onBeforeInput","beforeinput",null,a,mt),xt.push({event:Kt,listeners:Se}),Kt.data=ue)),ex(xt,e,et,a,mt)}$g(xt,n)})}function xo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Hr(e,a),u!=null&&o.unshift(xo(e,u,f)),u=Hr(e,n),u!=null&&o.push(xo(e,u,f))),e.tag===3)return o;e=e.return}return[]}function sx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function e_(e,n,a,o,u){for(var f=n._reactName,v=[];a!==null&&a!==o;){var b=a,G=b.alternate,et=b.stateNode;if(b=b.tag,G!==null&&G===o)break;b!==5&&b!==26&&b!==27||et===null||(G=et,u?(et=Hr(a,f),et!=null&&v.unshift(xo(a,et,G))):u||(et=Hr(a,f),et!=null&&v.push(xo(a,et,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var rx=/\r\n?/g,ox=/\u0000|\uFFFD/g;function n_(e){return(typeof e=="string"?e:""+e).replace(rx,`
`).replace(ox,"")}function i_(e,n){return n=n_(n),n_(e)===n}function Fe(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ds(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ds(e,""+o);break;case"className":Oe(e,"class",o);break;case"tabIndex":Oe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(e,a,o);break;case"style":ip(e,o,f);break;case"data":if(n!=="object"){Oe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",u.name,u,null),Fe(e,n,"formEncType",u.formEncType,u,null),Fe(e,n,"formMethod",u.formMethod,u,null),Fe(e,n,"formTarget",u.formTarget,u,null)):(Fe(e,n,"encType",u.encType,u,null),Fe(e,n,"method",u.method,u,null),Fe(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ko(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ko(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ge(e,"popover",o);break;case"xlinkActuate":pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ge(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Pv.get(a)||a,Ge(e,a,o))}}function Gf(e,n,a,o,u,f){switch(a){case"style":ip(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ds(e,o):(typeof o=="number"||typeof o=="bigint")&&Ds(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ge(e,a,o)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(e,n,f,v,a,null)}}u&&Fe(e,n,"srcSet",a.srcSet,a,null),o&&Fe(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=f=v=u=null,G=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":v=mt;break;case"checked":G=mt;break;case"defaultChecked":et=mt;break;case"value":f=mt;break;case"defaultValue":b=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(s(137,n));break;default:Fe(e,n,o,mt,a,null)}}Nn(e,f,b,G,et,v,u,!1);return;case"select":ge("invalid",e),o=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":o=b;default:Fe(e,n,u,b,a,null)}n=f,a=v,e.multiple=!!o,n!=null?en(e,!!o,n,!1):a!=null&&en(e,!!o,a,!0);return;case"textarea":ge("invalid",e),f=u=o=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":o=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Fe(e,n,v,b,a,null)}bi(e,o,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Fe(e,n,G,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<So.length;o++)ge(So[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(e,n,et,o,a,null)}return;default:if(tu(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Gf(e,n,mt,o,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(o=a[b],o!=null&&Fe(e,n,b,o,a,null))}function lx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,b=null,G=null,et=null,mt=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":G=xt;default:o.hasOwnProperty(lt)||Fe(e,n,lt,null,o,xt)}}for(var at in o){var lt=o[at];if(xt=a[at],o.hasOwnProperty(at)&&(lt!=null||xt!=null))switch(at){case"type":f=lt;break;case"name":u=lt;break;case"checked":et=lt;break;case"defaultChecked":mt=lt;break;case"value":v=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==xt&&Fe(e,n,at,lt,o,xt)}}Cn(e,v,b,G,et,mt,f,u);return;case"select":lt=v=b=at=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":lt=G;default:o.hasOwnProperty(f)||Fe(e,n,f,null,o,G)}for(u in o)if(f=o[u],G=a[u],o.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":at=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==G&&Fe(e,n,u,f,o,G)}n=b,a=v,o=lt,at!=null?en(e,!!a,at,!1):!!o!=!!a&&(n!=null?en(e,!!a,n,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":lt=at=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!o.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Fe(e,n,b,null,o,u)}for(v in o)if(u=o[v],f=a[v],o.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":at=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Fe(e,n,v,u,o,f)}ws(e,at,lt);return;case"option":for(var Wt in a)if(at=a[Wt],a.hasOwnProperty(Wt)&&at!=null&&!o.hasOwnProperty(Wt))switch(Wt){case"selected":e.selected=!1;break;default:Fe(e,n,Wt,null,o,at)}for(G in o)if(at=o[G],lt=a[G],o.hasOwnProperty(G)&&at!==lt&&(at!=null||lt!=null))switch(G){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Fe(e,n,G,at,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)at=a[ee],a.hasOwnProperty(ee)&&at!=null&&!o.hasOwnProperty(ee)&&Fe(e,n,ee,null,o,at);for(et in o)if(at=o[et],lt=a[et],o.hasOwnProperty(et)&&at!==lt&&(at!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Fe(e,n,et,at,o,lt)}return;default:if(tu(n)){for(var He in a)at=a[He],a.hasOwnProperty(He)&&at!==void 0&&!o.hasOwnProperty(He)&&Gf(e,n,He,void 0,o,at);for(mt in o)at=o[mt],lt=a[mt],!o.hasOwnProperty(mt)||at===lt||at===void 0&&lt===void 0||Gf(e,n,mt,at,o,lt);return}}for(var K in a)at=a[K],a.hasOwnProperty(K)&&at!=null&&!o.hasOwnProperty(K)&&Fe(e,n,K,null,o,at);for(xt in o)at=o[xt],lt=a[xt],!o.hasOwnProperty(xt)||at===lt||at==null&&lt==null||Fe(e,n,xt,at,o,lt)}function a_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cx(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,v=u.initiatorType,b=u.duration;if(f&&b&&a_(v)){for(v=0,b=u.responseEnd,o+=1;o<a.length;o++){var G=a[o],et=G.startTime;if(et>b)break;var mt=G.transferSize,xt=G.initiatorType;mt&&a_(xt)&&(G=G.responseEnd,v+=mt*(G<b?1:(b-et)/(G-et)))}if(--o,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vf=null,kf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function s_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function r_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Wf=null;function ux(){var e=window.event;return e&&e.type==="popstate"?e===Wf?!1:(Wf=e,!0):(Wf=null,!1)}var o_=typeof setTimeout=="function"?setTimeout:void 0,fx=typeof clearTimeout=="function"?clearTimeout:void 0,l_=typeof Promise=="function"?Promise:void 0,hx=typeof queueMicrotask=="function"?queueMicrotask:typeof l_<"u"?function(e){return l_.resolve(null).then(e).catch(dx)}:o_;function dx(e){setTimeout(function(){throw e})}function wa(e){return e==="head"}function c_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),or(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[Ya]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&yo(e.ownerDocument.body);a=u}while(a);or(n)}function u_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function qf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qf(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function px(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ya])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function mx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ui(e.nextSibling),e===null))return null;return e}function f_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function Yf(e){return e.data==="$?"||e.data==="$~"}function jf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function gx(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ui(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zf=null;function h_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ui(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function d_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function p_(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);C(e)}var fi=new Map,m_=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=j.d;j.d={f:_x,r:vx,D:Sx,C:xx,L:yx,m:Mx,X:Tx,S:Ex,M:bx};function _x(){var e=ta.f(),n=Bl();return e||n}function vx(e){var n=st(e);n!==null&&n.tag===5&&n.type==="form"?Lm(n):ta.r(e)}var ar=typeof document>"u"?null:document;function g_(e,n,a){var o=ar;if(o&&typeof n=="string"&&n){var u=_e(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),m_.has(u)||(m_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),bn(n,"link",e),yt(n),o.head.appendChild(n)))}}function Sx(e){ta.D(e),g_("dns-prefetch",e,null)}function xx(e,n){ta.C(e,n),g_("preconnect",e,n)}function yx(e,n,a){ta.L(e,n,a);var o=ar;if(o&&e&&n){var u='link[rel="preload"][as="'+_e(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+_e(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+_e(a.imageSizes)+'"]')):u+='[href="'+_e(e)+'"]';var f=u;switch(n){case"style":f=sr(e);break;case"script":f=rr(e)}fi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),fi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Mo(f))||n==="script"&&o.querySelector(Eo(f))||(n=o.createElement("link"),bn(n,"link",e),yt(n),o.head.appendChild(n)))}}function Mx(e,n){ta.m(e,n);var a=ar;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+_e(o)+'"][href="'+_e(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rr(e)}if(!fi.has(f)&&(e=_({rel:"modulepreload",href:e},n),fi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Eo(f)))return}o=a.createElement("link"),bn(o,"link",e),yt(o),a.head.appendChild(o)}}}function Ex(e,n,a){ta.S(e,n,a);var o=ar;if(o&&e){var u=Q(o).hoistableStyles,f=sr(e);n=n||"default";var v=u.get(f);if(!v){var b={loading:0,preload:null};if(v=o.querySelector(Mo(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=fi.get(f))&&Kf(e,a);var G=v=o.createElement("link");yt(G),bn(G,"link",e),G._p=new Promise(function(et,mt){G.onload=et,G.onerror=mt}),G.addEventListener("load",function(){b.loading|=1}),G.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(v,n,o)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(f,v)}}}function Tx(e,n){ta.X(e,n);var a=ar;if(a&&e){var o=Q(a).hoistableScripts,u=rr(e),f=o.get(u);f||(f=a.querySelector(Eo(u)),f||(e=_({src:e,async:!0},n),(n=fi.get(u))&&Qf(e,n),f=a.createElement("script"),yt(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function bx(e,n){ta.M(e,n);var a=ar;if(a&&e){var o=Q(a).hoistableScripts,u=rr(e),f=o.get(u);f||(f=a.querySelector(Eo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=fi.get(u))&&Qf(e,n),f=a.createElement("script"),yt(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function __(e,n,a,o){var u=(u=nt.current)?ql(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=sr(a.href),a=Q(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=sr(a.href);var f=Q(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Mo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),fi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},fi.set(e,a),f||Ax(u,e,a,v.state))),n&&o===null)throw Error(s(528,""));return v}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rr(a),a=Q(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function sr(e){return'href="'+_e(e)+'"'}function Mo(e){return'link[rel="stylesheet"]['+e+"]"}function v_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Ax(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",a),yt(n),e.head.appendChild(n))}function rr(e){return'[src="'+_e(e)+'"]'}function Eo(e){return"script[async]"+e}function S_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+_e(a.href)+'"]');if(o)return n.instance=o,yt(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),yt(o),bn(o,"style",u),Yl(o,a.precedence,e),n.instance=o;case"stylesheet":u=sr(a.href);var f=e.querySelector(Mo(u));if(f)return n.state.loading|=4,n.instance=f,yt(f),f;o=v_(a),(u=fi.get(u))&&Kf(o,u),f=(e.ownerDocument||e).createElement("link"),yt(f);var v=f;return v._p=new Promise(function(b,G){v.onload=b,v.onerror=G}),bn(f,"link",o),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=rr(a.src),(u=e.querySelector(Eo(f)))?(n.instance=u,yt(u),u):(o=a,(u=fi.get(f))&&(o=_({},a),Qf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),yt(u),bn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Yl(o,a.precedence,e));return n.instance}function Yl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,v=0;v<o.length;v++){var b=o[v];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jl=null;function x_(e,n,a){if(jl===null){var o=new Map,u=jl=new Map;u.set(a,o)}else u=jl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ya]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var b=o.get(v);b?b.push(f):o.set(v,[f])}}return o}function y_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Rx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function M_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Cx(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=sr(o.href),f=n.querySelector(Mo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Zl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,yt(f);return}f=n.ownerDocument||n,o=v_(o),(u=fi.get(u))&&Kf(o,u),f=f.createElement("link"),yt(f);var v=f;v._p=new Promise(function(b,G){v.onload=b,v.onerror=G}),bn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Zl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Jf=0;function wx(e,n){return e.stylesheets&&e.count===0&&Ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Jf===0&&(Jf=62500*cx());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ql(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Zl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Kl=null;function Ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Kl=new Map,n.forEach(Dx,e),Kl=null,Zl.call(e))}function Dx(e,n){if(!(n.state.loading&4)){var a=Kl.get(e);if(a)var o=a.get(null);else{a=new Map,Kl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),o=v)}o&&a.set(null,o)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||o,f===o&&a.set(null,u),a.set(v,u),this.count++,o=Zl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var To={$$typeof:L,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Ux(e,n,a,o,u,f,v,b,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function E_(e,n,a,o,u,f,v,b,G,et,mt,xt){return e=new Ux(e,n,a,v,G,et,mt,xt,b),n=1,f===!0&&(n|=24),f=jn(3,null,null,n),e.current=f,f.stateNode=e,n=Du(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Ou(f),e}function T_(e){return e?(e=Bs,e):Bs}function b_(e,n,a,o,u,f){u=T_(u),o.context===null?o.context=u:o.pendingContext=u,o=va(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Sa(e,o,n),a!==null&&(kn(a,e,n),eo(a,e,n))}function A_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function $f(e,n){A_(e,n),(e=e.alternate)&&A_(e,n)}function R_(e){if(e.tag===13||e.tag===31){var n=Ja(e,67108864);n!==null&&kn(n,e,67108864),$f(e,67108864)}}function C_(e){if(e.tag===13||e.tag===31){var n=$n();n=Rs(n);var a=Ja(e,n);a!==null&&kn(a,e,n),$f(e,n)}}var Jl=!0;function Lx(e,n,a,o){var u=O.T;O.T=null;var f=j.p;try{j.p=2,th(e,n,a,o)}finally{j.p=f,O.T=u}}function Nx(e,n,a,o){var u=O.T;O.T=null;var f=j.p;try{j.p=8,th(e,n,a,o)}finally{j.p=f,O.T=u}}function th(e,n,a,o){if(Jl){var u=eh(o);if(u===null)Hf(e,n,o,$l,a),D_(e,o);else if(Px(u,e,n,a,o))o.stopPropagation();else if(D_(e,o),n&4&&-1<Ox.indexOf(e)){for(;u!==null;){var f=st(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Mt(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var G=1<<31-Dt(v);b.entanglements[1]|=G,v&=~G}wi(f),(Ue&6)===0&&(Pl=T()+500,vo(0))}}break;case 31:case 13:b=Ja(f,2),b!==null&&kn(b,f,2),Bl(),$f(f,2)}if(f=eh(o),f===null&&Hf(e,n,o,$l,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else Hf(e,n,o,null,a)}}function eh(e){return e=nu(e),nh(e)}var $l=null;function nh(e){if($l=null,e=Z(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function w_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case gt:return 2;case bt:return 8;case dt:case Zt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var ih=!1,Da=null,Ua=null,La=null,bo=new Map,Ao=new Map,Na=[],Ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function D_(e,n){switch(e){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ua=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(n.pointerId)}}function Ro(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=st(n),n!==null&&R_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Px(e,n,a,o,u){switch(n){case"focusin":return Da=Ro(Da,e,n,a,o,u),!0;case"dragenter":return Ua=Ro(Ua,e,n,a,o,u),!0;case"mouseover":return La=Ro(La,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return bo.set(f,Ro(bo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ao.set(f,Ro(Ao.get(f)||null,e,n,a,o,u)),!0}return!1}function U_(e){var n=Z(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Ir(e.priority,function(){C_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ir(e.priority,function(){C_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=eh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);eu=o,a.target.dispatchEvent(o),eu=null}else return n=st(a),n!==null&&R_(n),e.blockedOn=a,!1;n.shift()}return!0}function L_(e,n,a){tc(e)&&a.delete(n)}function zx(){ih=!1,Da!==null&&tc(Da)&&(Da=null),Ua!==null&&tc(Ua)&&(Ua=null),La!==null&&tc(La)&&(La=null),bo.forEach(L_),Ao.forEach(L_)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,ih||(ih=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,zx)))}var nc=null;function N_(e){nc!==e&&(nc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){nc===e&&(nc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(nh(o||a)===null)continue;break}var f=st(a);f!==null&&(e.splice(n,3),n-=3,tf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function or(e){function n(G){return ec(G,e)}Da!==null&&ec(Da,e),Ua!==null&&ec(Ua,e),La!==null&&ec(La,e),bo.forEach(n),Ao.forEach(n);for(var a=0;a<Na.length;a++){var o=Na[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Na.length&&(a=Na[0],a.blockedOn===null);)U_(a),a.blockedOn===null&&Na.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],v=u[xn]||null;if(typeof f=="function")v||N_(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[xn]||null)b=v.formAction;else if(nh(u)!==null)continue}else b=v.action;typeof b=="function"?a[o+1]=b:(a.splice(o,3),o-=3),N_(a)}}}function O_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ah(e){this._internalRoot=e}ic.prototype.render=ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=$n();b_(a,o,e,n,null,null)},ic.prototype.unmount=ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;b_(e.current,2,null,e,null,null),Bl(),n[fa]=null}};function ic(e){this._internalRoot=e}ic.prototype.unstable_scheduleHydration=function(e){if(e){var n=qa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Na.length&&n!==0&&n<Na[a].priority;a++);Na.splice(a,0,e),a===0&&U_(e)}};var P_=t.version;if(P_!=="19.2.0")throw Error(s(527,P_,"19.2.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Bx={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ac=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ac.isDisabled&&ac.supportsFiber)try{ut=ac.inject(Bx),pt=ac}catch{}}return wo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Vm,f=km,v=Xm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=E_(e,1,!1,null,null,a,o,null,u,f,v,O_),e[fa]=n.current,Ff(e),new ah(n)},wo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=Vm,v=km,b=Xm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=E_(e,1,!0,n,a??null,o,u,G,f,v,b,O_),n.context=T_(null),a=n.current,o=$n(),o=Rs(o),u=va(o),u.callback=null,Sa(a,u,o),a=o,n.current.lanes=a,Ln(n,a),wi(n),e[fa]=n.current,Ff(e),new ic(n)},wo.version="19.2.0",wo}var W_;function Yx(){if(W_)return oh.exports;W_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),oh.exports=qx(),oh.exports}var jx=Yx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pd="180",br={ROTATE:0,DOLLY:1,PAN:2},Zx=0,q_=1,Kx=2,J0=1,Qx=2,ra=3,Xa=0,Xn=1,oa=2,ca=0,Ar=1,Y_=2,j_=3,Z_=4,Jx=5,Ss=100,$x=101,ty=102,ey=103,ny=104,iy=200,ay=201,sy=202,ry=203,qh=204,Yh=205,oy=206,ly=207,cy=208,uy=209,fy=210,hy=211,dy=212,py=213,my=214,jh=0,Zh=1,Kh=2,wr=3,Qh=4,Jh=5,$h=6,td=7,zd=0,gy=1,_y=2,ka=0,$0=1,tv=2,ev=3,nv=4,iv=5,av=6,sv=7,rv=300,Dr=301,Ur=302,ed=303,nd=304,jc=306,id=1e3,ys=1001,ad=1002,Bn=1003,vy=1004,sc=1005,Ui=1006,fh=1007,Ms=1008,Oi=1009,ov=1010,lv=1011,Ho=1012,Bd=1013,Es=1014,la=1015,Wa=1016,Id=1017,Fd=1018,Go=1020,cv=35902,uv=35899,fv=1021,hv=1022,Ei=1023,Vo=1026,ko=1027,dv=1028,Hd=1029,pv=1030,Gd=1031,Vd=1033,Ic=33776,Fc=33777,Hc=33778,Gc=33779,sd=35840,rd=35841,od=35842,ld=35843,cd=36196,ud=37492,fd=37496,hd=37808,dd=37809,pd=37810,md=37811,gd=37812,_d=37813,vd=37814,Sd=37815,xd=37816,yd=37817,Md=37818,Ed=37819,Td=37820,bd=37821,Ad=36492,Rd=36494,Cd=36495,wd=36283,Dd=36284,Ud=36285,Ld=36286,Sy=3200,xy=3201,kd=0,yy=1,Va="",di="srgb",Lr="srgb-linear",kc="linear",Be="srgb",lr=7680,K_=519,My=512,Ey=513,Ty=514,mv=515,by=516,Ay=517,Ry=518,Cy=519,Q_=35044,J_="300 es",Li=2e3,Xc=2001;class Ts{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $_=1234567;const Rr=Math.PI/180,Xo=180/Math.PI;function Or(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function xe(r,t,i){return Math.max(t,Math.min(i,r))}function Xd(r,t){return(r%t+t)%t}function wy(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function Dy(r,t,i){return r!==t?(i-r)/(t-r):0}function zo(r,t,i){return(1-i)*r+i*t}function Uy(r,t,i,s){return zo(r,t,1-Math.exp(-i*s))}function Ly(r,t=1){return t-Math.abs(Xd(r,t*2)-t)}function Ny(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function Oy(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function Py(r,t){return r+Math.floor(Math.random()*(t-r+1))}function zy(r,t){return r+Math.random()*(t-r)}function By(r){return r*(.5-Math.random())}function Iy(r){r!==void 0&&($_=r);let t=$_+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fy(r){return r*Rr}function Hy(r){return r*Xo}function Gy(r){return(r&r-1)===0&&r!==0}function Vy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ky(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xy(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),S=h((t+s)/2),_=c((t-s)/2),x=h((t-s)/2),M=c((s-t)/2),E=h((s-t)/2);switch(l){case"XYX":r.set(d*S,m*_,m*x,d*p);break;case"YZY":r.set(m*x,d*S,m*_,d*p);break;case"ZXZ":r.set(m*_,m*x,d*S,d*p);break;case"XZX":r.set(d*S,m*E,m*M,d*p);break;case"YXY":r.set(m*M,d*S,m*E,d*p);break;case"ZYZ":r.set(m*E,m*M,d*S,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Er(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const t0={DEG2RAD:Rr,RAD2DEG:Xo,generateUUID:Or,clamp:xe,euclideanModulo:Xd,mapLinear:wy,inverseLerp:Dy,lerp:zo,damp:Uy,pingpong:Ly,smoothstep:Ny,smootherstep:Oy,randInt:Py,randFloat:zy,randFloatSpread:By,seededRandom:Iy,degToRad:Fy,radToDeg:Hy,isPowerOfTwo:Gy,ceilPowerOfTwo:Vy,floorPowerOfTwo:ky,setQuaternionFromProperEuler:Xy,normalize:Pn,denormalize:Er};class ie{constructor(t=0,i=0){ie.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pr{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],S=s[l+2],_=s[l+3];const x=c[h+0],M=c[h+1],E=c[h+2],w=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=S,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=w;return}if(_!==w||m!==x||p!==M||S!==E){let y=1-d;const g=m*x+p*M+S*E+_*w,N=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const H=Math.sqrt(L),B=Math.atan2(H,g*N);y=Math.sin(y*B)/H,d=Math.sin(d*B)/H}const D=d*N;if(m=m*y+x*D,p=p*y+M*D,S=S*y+E*D,_=_*y+w*D,y===1-d){const H=1/Math.sqrt(m*m+p*p+S*S+_*_);m*=H,p*=H,S*=H,_*=H}}t[i]=m,t[i+1]=p,t[i+2]=S,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],S=s[l+3],_=c[h],x=c[h+1],M=c[h+2],E=c[h+3];return t[i]=d*E+S*_+m*M-p*x,t[i+1]=m*E+S*x+p*_-d*M,t[i+2]=p*E+S*M+d*x-m*_,t[i+3]=S*E-d*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),S=d(l/2),_=d(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*S*_+p*M*E,this._y=p*M*_-x*S*E,this._z=p*S*E+x*M*_,this._w=p*S*_-x*M*E;break;case"YXZ":this._x=x*S*_+p*M*E,this._y=p*M*_-x*S*E,this._z=p*S*E-x*M*_,this._w=p*S*_+x*M*E;break;case"ZXY":this._x=x*S*_-p*M*E,this._y=p*M*_+x*S*E,this._z=p*S*E+x*M*_,this._w=p*S*_-x*M*E;break;case"ZYX":this._x=x*S*_-p*M*E,this._y=p*M*_+x*S*E,this._z=p*S*E-x*M*_,this._w=p*S*_+x*M*E;break;case"YZX":this._x=x*S*_+p*M*E,this._y=p*M*_+x*S*E,this._z=p*S*E-x*M*_,this._w=p*S*_-x*M*E;break;case"XZY":this._x=x*S*_-p*M*E,this._y=p*M*_-x*S*E,this._z=p*S*E+x*M*_,this._w=p*S*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],_=i[10],x=s+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(S-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(S-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=s*S+h*d+l*p-c*m,this._y=l*S+h*m+c*d-s*p,this._z=c*S+h*p+s*m-l*d,this._w=h*S-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),_=Math.sin((1-i)*S)/p,x=Math.sin(i*S)/p;return this._w=h*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,i=0,s=0){q.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(e0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(e0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),S=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*S,this.y=s+m*S+d*p-c*_,this.z=l+m*_+c*S-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return hh.copy(this).projectOnVector(t),this.sub(hh)}reflect(t){return this.sub(hh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(xe(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hh=new q,e0=new Pr;class fe{constructor(t,i,s,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const S=this.elements;return S[0]=t,S[1]=l,S[2]=d,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],S=s[4],_=s[7],x=s[2],M=s[5],E=s[8],w=l[0],y=l[3],g=l[6],N=l[1],L=l[4],D=l[7],H=l[2],B=l[5],U=l[8];return c[0]=h*w+d*N+m*H,c[3]=h*y+d*L+m*B,c[6]=h*g+d*D+m*U,c[1]=p*w+S*N+_*H,c[4]=p*y+S*L+_*B,c[7]=p*g+S*D+_*U,c[2]=x*w+M*N+E*H,c[5]=x*y+M*L+E*B,c[8]=x*g+M*D+E*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8];return i*h*S-i*d*p-s*c*S+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8],_=S*h-d*p,x=d*m-S*c,M=p*c-h*m,E=i*_+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=_*w,t[1]=(l*p-S*s)*w,t[2]=(d*s-l*h)*w,t[3]=x*w,t[4]=(S*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(dh.makeScale(t,i)),this}rotate(t){return this.premultiply(dh.makeRotation(-t)),this}translate(t,i){return this.premultiply(dh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new fe;function gv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Wc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Wy(){const r=Wc("canvas");return r.style.display="block",r}const n0={};function Wo(r){r in n0||(n0[r]=!0,console.warn(r))}function qy(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const i0=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a0=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yy(){const r={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Be&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Be&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Va?kc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Lr]:{primaries:t,whitePoint:s,transfer:kc,toXYZ:i0,fromXYZ:a0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:i0,fromXYZ:a0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),r}const Ae=Yy();function ua(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cr;class jy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{cr===void 0&&(cr=Wc("canvas")),cr.width=t.width,cr.height=t.height;const l=cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Wc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ua(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ua(i[s]/255)*255):i[s]=ua(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zy=0;class Wd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Or(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(ph(l[h].image)):c.push(ph(l[h]))}else c=ph(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ph(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ky=0;const mh=new q;class Wn extends Ts{constructor(t=Wn.DEFAULT_IMAGE,i=Wn.DEFAULT_MAPPING,s=ys,l=ys,c=Ui,h=Ms,d=Ei,m=Oi,p=Wn.DEFAULT_ANISOTROPY,S=Va){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=Or(),this.name="",this.source=new Wd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case id:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case ad:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case id:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case ad:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=rv;Wn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,s=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],S=m[4],_=m[8],x=m[1],M=m[5],E=m[9],w=m[2],y=m[6],g=m[10];if(Math.abs(S-x)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(S+x)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,H=(g+1)/2,B=(S+x)/4,U=(_+w)/4,I=(E+y)/4;return L>D&&L>H?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=B/s,c=U/s):D>H?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=B/l,c=I/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=U/c,l=I/c),this.set(s,l,c,i),this}let N=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(x-S)*(x-S));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(_-w)/N,this.z=(x-S)/N,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(xe(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qy extends Ts{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Wn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Wd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Qy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class _v extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jy extends Wn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo{constructor(t=new q(1/0,1/0,1/0),i=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,xi):xi.fromBufferAttribute(c,h),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),rc.copy(s.boundingBox)),rc.applyMatrix4(t.matrixWorld),this.union(rc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),oc.subVectors(this.max,Do),ur.subVectors(t.a,Do),fr.subVectors(t.b,Do),hr.subVectors(t.c,Do),Pa.subVectors(fr,ur),za.subVectors(hr,fr),fs.subVectors(ur,hr);let i=[0,-Pa.z,Pa.y,0,-za.z,za.y,0,-fs.z,fs.y,Pa.z,0,-Pa.x,za.z,0,-za.x,fs.z,0,-fs.x,-Pa.y,Pa.x,0,-za.y,za.x,0,-fs.y,fs.x,0];return!gh(i,ur,fr,hr,oc)||(i=[1,0,0,0,1,0,0,0,1],!gh(i,ur,fr,hr,oc))?!1:(lc.crossVectors(Pa,za),i=[lc.x,lc.y,lc.z],gh(i,ur,fr,hr,oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new q,new q,new q,new q,new q,new q,new q,new q],xi=new q,rc=new qo,ur=new q,fr=new q,hr=new q,Pa=new q,za=new q,fs=new q,Do=new q,oc=new q,lc=new q,hs=new q;function gh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){hs.fromArray(r,c);const d=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),m=t.dot(hs),p=i.dot(hs),S=s.dot(hs);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const $y=new qo,Uo=new q,_h=new q;class Zc{constructor(t=new q,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):$y.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Uo.subVectors(t,this.center);const i=Uo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Uo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Uo.copy(t.center).add(_h)),this.expandByPoint(Uo.copy(t.center).sub(_h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const na=new q,vh=new q,cc=new q,Ba=new q,Sh=new q,uc=new q,xh=new q;class vv{constructor(t=new q,i=new q(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){vh.copy(t).add(i).multiplyScalar(.5),cc.copy(i).sub(t).normalize(),Ba.copy(this.origin).sub(vh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(cc),d=Ba.dot(this.direction),m=-Ba.dot(cc),p=Ba.lengthSq(),S=Math.abs(1-h*h);let _,x,M,E;if(S>0)if(_=h*m-d,x=h*d-m,E=c*S,_>=0)if(x>=-E)if(x<=E){const w=1/S;_*=w,x*=w,M=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(vh).addScaledVector(cc,x),M}intersectSphere(t,i){na.subVectors(t.center,this.origin);const s=na.dot(this.direction),l=na.dot(na)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),S>=0?(c=(t.min.y-x.y)*S,h=(t.max.y-x.y)*S):(c=(t.max.y-x.y)*S,h=(t.min.y-x.y)*S),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,s,l,c){Sh.subVectors(i,t),uc.subVectors(s,t),xh.crossVectors(Sh,uc);let h=this.direction.dot(xh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ba.subVectors(this.origin,t);const m=d*this.direction.dot(uc.crossVectors(Ba,uc));if(m<0)return null;const p=d*this.direction.dot(Sh.cross(Ba));if(p<0||m+p>h)return null;const S=-d*Ba.dot(xh);return S<0?null:this.at(S/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,c,h,d,m,p,S,_,x,M,E,w,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,S,_,x,M,E,w,y)}set(t,i,s,l,c,h,d,m,p,S,_,x,M,E,w,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=S,g[10]=_,g[14]=x,g[3]=M,g[7]=E,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/dr.setFromMatrixColumn(t,0).length(),c=1/dr.setFromMatrixColumn(t,1).length(),h=1/dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*S,M=h*_,E=d*S,w=d*_;i[0]=m*S,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=x-w*p,i[9]=-d*m,i[2]=w-x*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*S,M=m*_,E=p*S,w=p*_;i[0]=x+w*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*S,i[9]=-d,i[2]=M*d-E,i[6]=w+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*S,M=m*_,E=p*S,w=p*_;i[0]=x-w*d,i[4]=-h*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*S,i[9]=w-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*S,M=h*_,E=d*S,w=d*_;i[0]=m*S,i[4]=E*p-M,i[8]=x*p+w,i[1]=m*_,i[5]=w*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,E=d*m,w=d*p;i[0]=m*S,i[4]=w-x*_,i[8]=E*_+M,i[1]=_,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*_+E,i[10]=x-w*_}else if(t.order==="XZY"){const x=h*m,M=h*p,E=d*m,w=d*p;i[0]=m*S,i[4]=-_,i[8]=p*S,i[1]=x*_+w,i[5]=h*S,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*S,i[10]=w*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tM,t,eM)}lookAt(t,i,s){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ia.crossVectors(s,ti),Ia.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ia.crossVectors(s,ti)),Ia.normalize(),fc.crossVectors(ti,Ia),l[0]=Ia.x,l[4]=fc.x,l[8]=ti.x,l[1]=Ia.y,l[5]=fc.y,l[9]=ti.y,l[2]=Ia.z,l[6]=fc.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],S=s[1],_=s[5],x=s[9],M=s[13],E=s[2],w=s[6],y=s[10],g=s[14],N=s[3],L=s[7],D=s[11],H=s[15],B=l[0],U=l[4],I=l[8],A=l[12],R=l[1],F=l[5],W=l[9],$=l[13],ct=l[2],rt=l[6],O=l[10],j=l[14],Y=l[3],St=l[7],Tt=l[11],z=l[15];return c[0]=h*B+d*R+m*ct+p*Y,c[4]=h*U+d*F+m*rt+p*St,c[8]=h*I+d*W+m*O+p*Tt,c[12]=h*A+d*$+m*j+p*z,c[1]=S*B+_*R+x*ct+M*Y,c[5]=S*U+_*F+x*rt+M*St,c[9]=S*I+_*W+x*O+M*Tt,c[13]=S*A+_*$+x*j+M*z,c[2]=E*B+w*R+y*ct+g*Y,c[6]=E*U+w*F+y*rt+g*St,c[10]=E*I+w*W+y*O+g*Tt,c[14]=E*A+w*$+y*j+g*z,c[3]=N*B+L*R+D*ct+H*Y,c[7]=N*U+L*F+D*rt+H*St,c[11]=N*I+L*W+D*O+H*Tt,c[15]=N*A+L*$+D*j+H*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],S=t[2],_=t[6],x=t[10],M=t[14],E=t[3],w=t[7],y=t[11],g=t[15];return E*(+c*m*_-l*p*_-c*d*x+s*p*x+l*d*M-s*m*M)+w*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*S-c*m*S)+y*(+i*p*_-i*d*M-c*h*_+s*h*M+c*d*S-s*p*S)+g*(-l*d*S-i*m*_+i*d*x+l*h*_-s*h*x+s*m*S)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8],_=t[9],x=t[10],M=t[11],E=t[12],w=t[13],y=t[14],g=t[15],N=_*y*p-w*x*p+w*m*M-d*y*M-_*m*g+d*x*g,L=E*x*p-S*y*p-E*m*M+h*y*M+S*m*g-h*x*g,D=S*w*p-E*_*p+E*d*M-h*w*M-S*d*g+h*_*g,H=E*_*m-S*w*m-E*d*x+h*w*x+S*d*y-h*_*y,B=i*N+s*L+l*D+c*H;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/B;return t[0]=N*U,t[1]=(w*x*c-_*y*c-w*l*M+s*y*M+_*l*g-s*x*g)*U,t[2]=(d*y*c-w*m*c+w*l*p-s*y*p-d*l*g+s*m*g)*U,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*M-s*m*M)*U,t[4]=L*U,t[5]=(S*y*c-E*x*c+E*l*M-i*y*M-S*l*g+i*x*g)*U,t[6]=(E*m*c-h*y*c-E*l*p+i*y*p+h*l*g-i*m*g)*U,t[7]=(h*x*c-S*m*c+S*l*p-i*x*p-h*l*M+i*m*M)*U,t[8]=D*U,t[9]=(E*_*c-S*w*c-E*s*M+i*w*M+S*s*g-i*_*g)*U,t[10]=(h*w*c-E*d*c+E*s*p-i*w*p-h*s*g+i*d*g)*U,t[11]=(S*d*c-h*_*c-S*s*p+i*_*p+h*s*M-i*d*M)*U,t[12]=H*U,t[13]=(S*w*l-E*_*l+E*s*x-i*w*x-S*s*y+i*_*y)*U,t[14]=(E*d*l-h*w*l-E*s*m+i*w*m+h*s*y-i*d*y)*U,t[15]=(h*_*l-S*d*l+S*s*m-i*_*m-h*s*x+i*d*x)*U,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,S=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+s,S*m-l*h,0,p*m-l*d,S*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,S=h+h,_=d+d,x=c*p,M=c*S,E=c*_,w=h*S,y=h*_,g=d*_,N=m*p,L=m*S,D=m*_,H=s.x,B=s.y,U=s.z;return l[0]=(1-(w+g))*H,l[1]=(M+D)*H,l[2]=(E-L)*H,l[3]=0,l[4]=(M-D)*B,l[5]=(1-(x+g))*B,l[6]=(y+N)*B,l[7]=0,l[8]=(E+L)*U,l[9]=(y-N)*U,l[10]=(1-(x+w))*U,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=dr.set(l[0],l[1],l[2]).length();const h=dr.set(l[4],l[5],l[6]).length(),d=dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/c,S=1/h,_=1/d;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=S,yi.elements[5]*=S,yi.elements[6]*=S,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,i.setFromRotationMatrix(yi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Li,m=!1){const p=this.elements,S=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let E,w;if(m)E=c/(h-c),w=h*c/(h-c);else if(d===Li)E=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Xc)E=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Li,m=!1){const p=this.elements,S=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let E,w;if(m)E=1/(h-c),w=h/(h-c);else if(d===Li)E=-2/(h-c),w=-(h+c)/(h-c);else if(d===Xc)E=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const dr=new q,yi=new Je,tM=new q(0,0,0),eM=new q(1,1,1),Ia=new q,fc=new q,ti=new q,s0=new Je,r0=new Pr;class zi{constructor(t=0,i=0,s=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-xe(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return s0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(s0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return r0.setFromEuler(this),this.setFromQuaternion(r0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Sv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nM=0;const o0=new q,pr=new Pr,ia=new Je,hc=new q,Lo=new q,iM=new q,aM=new Pr,l0=new q(1,0,0),c0=new q(0,1,0),u0=new q(0,0,1),f0={type:"added"},sM={type:"removed"},mr={type:"childadded",child:null},yh={type:"childremoved",child:null};class Rn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const t=new q,i=new zi,s=new Pr,l=new q(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new fe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(l0,t)}rotateY(t){return this.rotateOnAxis(c0,t)}rotateZ(t){return this.rotateOnAxis(u0,t)}translateOnAxis(t,i){return o0.copy(t).applyQuaternion(this.quaternion),this.position.add(o0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(l0,t)}translateY(t){return this.translateOnAxis(c0,t)}translateZ(t){return this.translateOnAxis(u0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?hc.copy(t):hc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Lo,hc,this.up):ia.lookAt(hc,Lo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),pr.setFromRotationMatrix(ia),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(f0),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(sM),yh.child=t,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(f0),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,t,iM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,aM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),S=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Rn.DEFAULT_UP=new q(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new q,aa=new q,Mh=new q,sa=new q,gr=new q,_r=new q,h0=new q,Eh=new q,Th=new q,bh=new q,Ah=new Qe,Rh=new Qe,Ch=new Qe;class mi{constructor(t=new q,i=new q,s=new q){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Mi.subVectors(t,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Mi.subVectors(l,i),aa.subVectors(s,i),Mh.subVectors(t,i);const h=Mi.dot(Mi),d=Mi.dot(aa),m=Mi.dot(Mh),p=aa.dot(aa),S=aa.dot(Mh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-d*S)*x,E=(h*S-d*m)*x;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(h,sa.y),m.addScaledVector(d,sa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(t,i),Rh.fromBufferAttribute(t,s),Ch.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Ah,c.x),h.addScaledVector(Rh,c.y),h.addScaledVector(Ch,c.z),h}static isFrontFacing(t,i,s,l){return Mi.subVectors(s,i),aa.subVectors(t,i),Mi.cross(aa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),Mi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;gr.subVectors(l,s),_r.subVectors(c,s),Eh.subVectors(t,s);const m=gr.dot(Eh),p=_r.dot(Eh);if(m<=0&&p<=0)return i.copy(s);Th.subVectors(t,l);const S=gr.dot(Th),_=_r.dot(Th);if(S>=0&&_<=S)return i.copy(l);const x=m*_-S*p;if(x<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(s).addScaledVector(gr,h);bh.subVectors(t,c);const M=gr.dot(bh),E=_r.dot(bh);if(E>=0&&M<=E)return i.copy(c);const w=M*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(_r,d);const y=S*E-M*_;if(y<=0&&_-S>=0&&M-E>=0)return h0.subVectors(c,l),d=(_-S)/(_-S+(M-E)),i.copy(l).addScaledVector(h0,d);const g=1/(y+w+x);return h=w*g,d=x*g,i.copy(s).addScaledVector(gr,h).addScaledVector(_r,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fa={h:0,s:0,l:0},dc={h:0,s:0,l:0};function wh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=Xd(t,1),i=xe(i,0,1),s=xe(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=wh(h,c,t+1/3),this.g=wh(h,c,t),this.b=wh(h,c,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=di){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){const s=xv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Ae.workingToColorSpace(Un.copy(this),t),Math.round(xe(Un.r*255,0,255))*65536+Math.round(xe(Un.g*255,0,255))*256+Math.round(xe(Un.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=S<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=S,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=di){Ae.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==di?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Fa),this.setHSL(Fa.h+t,Fa.s+i,Fa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Fa),t.getHSL(dc);const s=zo(Fa.h,dc.h,i),l=zo(Fa.s,dc.s,i),c=zo(Fa.l,dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new be;be.NAMES=xv;let rM=0;class bs extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=Ar,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qh,this.blendDst=Yh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==qh&&(s.blendSrc=this.blendSrc),this.blendDst!==Yh&&(s.blendDst=this.blendDst),this.blendEquation!==Ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==K_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Bo extends bs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new q,pc=new ie;let oM=0;class Ni{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Q_,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)pc.fromBufferAttribute(this,i),pc.applyMatrix3(t),this.setXY(i,pc.x,pc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Er(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Pn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Er(i,this.array)),i}setX(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Er(i,this.array)),i}setY(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Er(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Er(i,this.array)),i}setW(t,i){return this.normalized&&(i=Pn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),s=Pn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),s=Pn(s,this.array),l=Pn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Pn(i,this.array),s=Pn(s,this.array),l=Pn(l,this.array),c=Pn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Q_&&(t.usage=this.usage),t}}class yv extends Ni{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Mv extends Ni{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class sn extends Ni{constructor(t,i,s){super(new Float32Array(t),i,s)}}let lM=0;const hi=new Je,Dh=new Rn,vr=new q,ei=new qo,No=new qo,vn=new q;class ni extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gv(t)?Mv:yv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,s){return hi.makeTranslation(t,i,s),this.applyMatrix4(hi),this}scale(t,i,s){return hi.makeScale(t,i,s),this.applyMatrix4(hi),this}lookAt(t){return Dh.lookAt(t),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vr).negate(),this.translate(vr.x,vr.y,vr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new sn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ei.setFromBufferAttribute(c),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];No.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ei.min,No.min),ei.expandByPoint(vn),vn.addVectors(ei.max,No.max),ei.expandByPoint(vn)):(ei.expandByPoint(No.min),ei.expandByPoint(No.max))}ei.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)vn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(vn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)vn.fromBufferAttribute(d,p),m&&(vr.fromBufferAttribute(t,p),vn.add(vr)),l=Math.max(l,s.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let I=0;I<s.count;I++)d[I]=new q,m[I]=new q;const p=new q,S=new q,_=new q,x=new ie,M=new ie,E=new ie,w=new q,y=new q;function g(I,A,R){p.fromBufferAttribute(s,I),S.fromBufferAttribute(s,A),_.fromBufferAttribute(s,R),x.fromBufferAttribute(c,I),M.fromBufferAttribute(c,A),E.fromBufferAttribute(c,R),S.sub(p),_.sub(p),M.sub(x),E.sub(x);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(w.copy(S).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(F),y.copy(_).multiplyScalar(M.x).addScaledVector(S,-E.x).multiplyScalar(F),d[I].add(w),d[A].add(w),d[R].add(w),m[I].add(y),m[A].add(y),m[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let I=0,A=N.length;I<A;++I){const R=N[I],F=R.start,W=R.count;for(let $=F,ct=F+W;$<ct;$+=3)g(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new q,D=new q,H=new q,B=new q;function U(I){H.fromBufferAttribute(l,I),B.copy(H);const A=d[I];L.copy(A),L.sub(H.multiplyScalar(H.dot(A))).normalize(),D.crossVectors(B,A);const F=D.dot(m[I])<0?-1:1;h.setXYZW(I,L.x,L.y,L.z,F)}for(let I=0,A=N.length;I<A;++I){const R=N[I],F=R.start,W=R.count;for(let $=F,ct=F+W;$<ct;$+=3)U(t.getX($+0)),U(t.getX($+1)),U(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new q,c=new q,h=new q,d=new q,m=new q,p=new q,S=new q,_=new q;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),w=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),S.subVectors(h,c),_.subVectors(l,c),S.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),d.add(S),m.add(S),p.add(S),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,c),_.subVectors(l,c),S.cross(_),s.setXYZ(x+0,S.x,S.y,S.z),s.setXYZ(x+1,S.x,S.y,S.z),s.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,m){const p=d.array,S=d.itemSize,_=d.normalized,x=new p.constructor(m.length*S);let M=0,E=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*S;for(let g=0;g<S;g++)x[E++]=p[M++]}return new Ni(x,S,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ni,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let S=0,_=p.length;S<_;S++){const x=p[S],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];S.push(M.toJSON(t.data))}S.length>0&&(l[m]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=t.morphAttributes;for(const p in c){const S=[],_=c[p];for(let x=0,M=_.length;x<M;x++)S.push(_[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,S=h.length;p<S;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const d0=new Je,ds=new vv,mc=new Zc,p0=new q,gc=new q,_c=new q,vc=new q,Uh=new q,Sc=new q,m0=new q,xc=new q;class An extends Rn{constructor(t=new ni,i=new Bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Sc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=d[m],_=c[m];S!==0&&(Uh.fromBufferAttribute(_,t),h?Sc.addScaledVector(Uh,S):Sc.addScaledVector(Uh.sub(i),S))}i.add(Sc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),mc.copy(s.boundingSphere),mc.applyMatrix4(c),ds.copy(t.ray).recast(t.near),!(mc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(mc,p0)===null||ds.origin.distanceToSquared(p0)>(t.far-t.near)**2))&&(d0.copy(c).invert(),ds.copy(t.ray).applyMatrix4(d0),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,w=x.length;E<w;E++){const y=x[E],g=h[y.materialIndex],N=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=N,H=L;D<H;D+=3){const B=d.getX(D),U=d.getX(D+1),I=d.getX(D+2);l=yc(this,g,t,s,p,S,_,B,U,I),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=E,g=w;y<g;y+=3){const N=d.getX(y),L=d.getX(y+1),D=d.getX(y+2);l=yc(this,h,t,s,p,S,_,N,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,w=x.length;E<w;E++){const y=x[E],g=h[y.materialIndex],N=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=N,H=L;D<H;D+=3){const B=D,U=D+1,I=D+2;l=yc(this,g,t,s,p,S,_,B,U,I),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=E,g=w;y<g;y+=3){const N=y,L=y+1,D=y+2;l=yc(this,h,t,s,p,S,_,N,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function cM(r,t,i,s,l,c,h,d){let m;if(t.side===Xn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Xa,d),m===null)return null;xc.copy(d),xc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(xc);return p<i.near||p>i.far?null:{distance:p,point:xc.clone(),object:r}}function yc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,gc),r.getVertexPosition(m,_c),r.getVertexPosition(p,vc);const S=cM(r,t,i,s,gc,_c,vc,m0);if(S){const _=new q;mi.getBarycoord(m0,gc,_c,vc,_),l&&(S.uv=mi.getInterpolatedAttribute(l,d,m,p,_,new ie)),c&&(S.uv1=mi.getInterpolatedAttribute(c,d,m,p,_,new ie)),h&&(S.normal=mi.getInterpolatedAttribute(h,d,m,p,_,new q),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new q,materialIndex:0};mi.getNormal(gc,_c,vc,x.normal),S.face=x,S.barycoord=_}return S}class Yo extends ni{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],S=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(S,3)),this.setAttribute("uv",new sn(_,2));function E(w,y,g,N,L,D,H,B,U,I,A){const R=D/U,F=H/I,W=D/2,$=H/2,ct=B/2,rt=U+1,O=I+1;let j=0,Y=0;const St=new q;for(let Tt=0;Tt<O;Tt++){const z=Tt*F-$;for(let it=0;it<rt;it++){const At=it*R-W;St[w]=At*N,St[y]=z*L,St[g]=ct,p.push(St.x,St.y,St.z),St[w]=0,St[y]=0,St[g]=B>0?1:-1,S.push(St.x,St.y,St.z),_.push(it/U),_.push(1-Tt/I),j+=1}}for(let Tt=0;Tt<I;Tt++)for(let z=0;z<U;z++){const it=x+z+rt*Tt,At=x+z+rt*(Tt+1),Lt=x+(z+1)+rt*(Tt+1),It=x+(z+1)+rt*Tt;m.push(it,At,It),m.push(At,Lt,It),Y+=6}d.addGroup(M,Y,A),M+=Y,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(r){const t={};for(let i=0;i<r.length;i++){const s=Nr(r[i]);for(const l in s)t[l]=s[l]}return t}function uM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Ev(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const qd={clone:Nr,merge:zn};var fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends bs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=uM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Tv extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ha=new q,g0=new ie,_0=new ie;class pi extends Tv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z),Ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ha.x,Ha.y).multiplyScalar(-t/Ha.z)}getViewSize(t,i){return this.getViewBounds(t,g0,_0),i.subVectors(_0,g0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Rr*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Sr=-90,xr=1;class dM extends Rn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(Sr,xr,t,i);l.layers=this.layers,this.add(l);const c=new pi(Sr,xr,t,i);c.layers=this.layers,this.add(c);const h=new pi(Sr,xr,t,i);h.layers=this.layers,this.add(h);const d=new pi(Sr,xr,t,i);d.layers=this.layers,this.add(d);const m=new pi(Sr,xr,t,i);m.layers=this.layers,this.add(m);const p=new pi(Sr,xr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Li)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Xc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,S]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,S),t.setRenderTarget(_,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class bv extends Wn{constructor(t=[],i=Dr,s,l,c,h,d,m,p,S){super(t,i,s,l,c,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pM extends Pi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new bv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yo(5,5,5),c=new gi({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:ca});c.uniforms.tEquirect.value=i;const h=new An(l,c),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=Ui),new dM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Mc extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mM={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),g=this._getHandJoint(p,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const S=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=S.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(mM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Mc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class gM extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Nh=new q,_M=new q,vM=new fe;class _s{constructor(t=new q(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Nh.subVectors(s,i).cross(_M.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Nh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||vM.getNormalMatrix(t),l=this.coplanarPoint(Nh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Zc,SM=new ie(.5,.5),Ec=new q;class Yd{constructor(t=new _s,i=new _s,s=new _s,l=new _s,c=new _s,h=new _s){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Li,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],S=c[4],_=c[5],x=c[6],M=c[7],E=c[8],w=c[9],y=c[10],g=c[11],N=c[12],L=c[13],D=c[14],H=c[15];if(l[0].setComponents(p-h,M-S,g-E,H-N).normalize(),l[1].setComponents(p+h,M+S,g+E,H+N).normalize(),l[2].setComponents(p+d,M+_,g+w,H+L).normalize(),l[3].setComponents(p-d,M-_,g-w,H-L).normalize(),s)l[4].setComponents(m,x,y,D).normalize(),l[5].setComponents(p-m,M-x,g-y,H-D).normalize();else if(l[4].setComponents(p-m,M-x,g-y,H-D).normalize(),i===Li)l[5].setComponents(p+m,M+x,g+y,H+D).normalize();else if(i===Xc)l[5].setComponents(m,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);const i=SM.distanceTo(t.center);return ps.radius=.7071067811865476+i,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ec.x=l.normal.x>0?t.max.x:t.min.x,Ec.y=l.normal.y>0?t.max.y:t.min.y,Ec.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Av extends bs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const qc=new q,Yc=new q,v0=new Je,Oo=new vv,Tc=new Zc,Oh=new q,S0=new q;class xM extends Rn{constructor(t=new ni,i=new Av){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)qc.fromBufferAttribute(i,l-1),Yc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=qc.distanceTo(Yc);t.setAttribute("lineDistance",new sn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=c,t.ray.intersectsSphere(Tc)===!1)return;v0.copy(l).invert(),Oo.copy(t.ray).applyMatrix4(v0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=s.index,x=s.attributes.position;if(S!==null){const M=Math.max(0,h.start),E=Math.min(S.count,h.start+h.count);for(let w=M,y=E-1;w<y;w+=p){const g=S.getX(w),N=S.getX(w+1),L=bc(this,t,Oo,m,g,N,w);L&&i.push(L)}if(this.isLineLoop){const w=S.getX(E-1),y=S.getX(M),g=bc(this,t,Oo,m,w,y,E-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let w=M,y=E-1;w<y;w+=p){const g=bc(this,t,Oo,m,w,w+1,w);g&&i.push(g)}if(this.isLineLoop){const w=bc(this,t,Oo,m,E-1,M,E-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function bc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(qc.fromBufferAttribute(d,l),Yc.fromBufferAttribute(d,c),i.distanceSqToSegment(qc,Yc,Oh,S0)>s)return;Oh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Oh);if(!(p<t.near||p>t.far))return{distance:p,point:S0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const x0=new q,y0=new q;class yM extends xM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)x0.fromBufferAttribute(i,l),y0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+x0.distanceTo(y0);t.setAttribute("lineDistance",new sn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jd extends Wn{constructor(t,i,s=Es,l,c,h,d=Bn,m=Bn,p,S=Vo,_=1){if(S!==Vo&&S!==ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,d,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Rv extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zd extends ni{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const S=[],_=[],x=[],M=[];let E=0;const w=[],y=s/2;let g=0;N(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(S),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(M,2));function N(){const D=new q,H=new q;let B=0;const U=(i-t)/s;for(let I=0;I<=c;I++){const A=[],R=I/c,F=R*(i-t)+t;for(let W=0;W<=l;W++){const $=W/l,ct=$*m+d,rt=Math.sin(ct),O=Math.cos(ct);H.x=F*rt,H.y=-R*s+y,H.z=F*O,_.push(H.x,H.y,H.z),D.set(rt,U,O).normalize(),x.push(D.x,D.y,D.z),M.push($,1-R),A.push(E++)}w.push(A)}for(let I=0;I<l;I++)for(let A=0;A<c;A++){const R=w[A][I],F=w[A+1][I],W=w[A+1][I+1],$=w[A][I+1];(t>0||A!==0)&&(S.push(R,F,$),B+=3),(i>0||A!==c-1)&&(S.push(F,W,$),B+=3)}p.addGroup(g,B,0),g+=B}function L(D){const H=E,B=new ie,U=new q;let I=0;const A=D===!0?t:i,R=D===!0?1:-1;for(let W=1;W<=l;W++)_.push(0,y*R,0),x.push(0,R,0),M.push(.5,.5),E++;const F=E;for(let W=0;W<=l;W++){const ct=W/l*m+d,rt=Math.cos(ct),O=Math.sin(ct);U.x=A*O,U.y=y*R,U.z=A*rt,_.push(U.x,U.y,U.z),x.push(0,R,0),B.x=rt*.5+.5,B.y=O*.5*R+.5,M.push(B.x,B.y),E++}for(let W=0;W<l;W++){const $=H+W,ct=F+W;D===!0?S.push(ct,ct+1,$):S.push(ct+1,ct,$),I+=3}p.addGroup(g,I,D===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kd extends ni{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),S(),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(c.slice(),3)),this.setAttribute("uv",new sn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const L=new q,D=new q,H=new q;for(let B=0;B<i.length;B+=3)M(i[B+0],L),M(i[B+1],D),M(i[B+2],H),m(L,D,H,N)}function m(N,L,D,H){const B=H+1,U=[];for(let I=0;I<=B;I++){U[I]=[];const A=N.clone().lerp(D,I/B),R=L.clone().lerp(D,I/B),F=B-I;for(let W=0;W<=F;W++)W===0&&I===B?U[I][W]=A:U[I][W]=A.clone().lerp(R,W/F)}for(let I=0;I<B;I++)for(let A=0;A<2*(B-I)-1;A++){const R=Math.floor(A/2);A%2===0?(x(U[I][R+1]),x(U[I+1][R]),x(U[I][R])):(x(U[I][R+1]),x(U[I+1][R+1]),x(U[I+1][R]))}}function p(N){const L=new q;for(let D=0;D<c.length;D+=3)L.x=c[D+0],L.y=c[D+1],L.z=c[D+2],L.normalize().multiplyScalar(N),c[D+0]=L.x,c[D+1]=L.y,c[D+2]=L.z}function S(){const N=new q;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const D=y(N)/2/Math.PI+.5,H=g(N)/Math.PI+.5;h.push(D,1-H)}E(),_()}function _(){for(let N=0;N<h.length;N+=6){const L=h[N+0],D=h[N+2],H=h[N+4],B=Math.max(L,D,H),U=Math.min(L,D,H);B>.9&&U<.1&&(L<.2&&(h[N+0]+=1),D<.2&&(h[N+2]+=1),H<.2&&(h[N+4]+=1))}}function x(N){c.push(N.x,N.y,N.z)}function M(N,L){const D=N*3;L.x=t[D+0],L.y=t[D+1],L.z=t[D+2]}function E(){const N=new q,L=new q,D=new q,H=new q,B=new ie,U=new ie,I=new ie;for(let A=0,R=0;A<c.length;A+=9,R+=6){N.set(c[A+0],c[A+1],c[A+2]),L.set(c[A+3],c[A+4],c[A+5]),D.set(c[A+6],c[A+7],c[A+8]),B.set(h[R+0],h[R+1]),U.set(h[R+2],h[R+3]),I.set(h[R+4],h[R+5]),H.copy(N).add(L).add(D).divideScalar(3);const F=y(H);w(B,R+0,N,F),w(U,R+2,L,F),w(I,R+4,D,F)}}function w(N,L,D,H){H<0&&N.x===1&&(h[L]=N.x-1),D.x===0&&D.z===0&&(h[L]=H/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function g(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kd(t.vertices,t.indices,t.radius,t.details)}}const Ac=new q,Rc=new q,Ph=new q,Cc=new mi;class MM extends ni{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Rr*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],S=["a","b","c"],_=new Array(3),x={},M=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:w,b:y,c:g}=Cc;if(w.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),g.fromBufferAttribute(d,p[2]),Cc.getNormal(Ph),_[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,_[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,_[2]=`${Math.round(g.x*l)},${Math.round(g.y*l)},${Math.round(g.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let N=0;N<3;N++){const L=(N+1)%3,D=_[N],H=_[L],B=Cc[S[N]],U=Cc[S[L]],I=`${D}_${H}`,A=`${H}_${D}`;A in x&&x[A]?(Ph.dot(x[A].normal)<=c&&(M.push(B.x,B.y,B.z),M.push(U.x,U.y,U.z)),x[A]=null):I in x||(x[I]={index0:p[N],index1:p[L],normal:Ph.clone()})}}for(const E in x)if(x[E]){const{index0:w,index1:y}=x[E];Ac.fromBufferAttribute(d,w),Rc.fromBufferAttribute(d,y),M.push(Ac.x,Ac.y,Ac.z),M.push(Rc.x,Rc.y,Rc.z)}this.setAttribute("position",new sn(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Io extends Kd{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Io(t.radius,t.detail)}}class Kc extends ni{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,S=m+1,_=t/d,x=i/m,M=[],E=[],w=[],y=[];for(let g=0;g<S;g++){const N=g*x-h;for(let L=0;L<p;L++){const D=L*_-c;E.push(D,-N,0),w.push(0,0,1),y.push(L/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<d;N++){const L=N+p*g,D=N+p*(g+1),H=N+1+p*(g+1),B=N+1+p*g;M.push(L,D,B),M.push(D,H,B)}this.setIndex(M),this.setAttribute("position",new sn(E,3)),this.setAttribute("normal",new sn(w,3)),this.setAttribute("uv",new sn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fo extends ni{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const S=[],_=new q,x=new q,M=[],E=[],w=[],y=[];for(let g=0;g<=s;g++){const N=[],L=g/s;let D=0;g===0&&h===0?D=.5/i:g===s&&m===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const B=H/i;_.x=-t*Math.cos(l+B*c)*Math.sin(h+L*d),_.y=t*Math.cos(h+L*d),_.z=t*Math.sin(l+B*c)*Math.sin(h+L*d),E.push(_.x,_.y,_.z),x.copy(_).normalize(),w.push(x.x,x.y,x.z),y.push(B+D,1-L),N.push(p++)}S.push(N)}for(let g=0;g<s;g++)for(let N=0;N<i;N++){const L=S[g][N+1],D=S[g][N],H=S[g+1][N],B=S[g+1][N+1];(g!==0||h>0)&&M.push(L,D,B),(g!==s-1||m<Math.PI)&&M.push(D,H,B)}this.setIndex(M),this.setAttribute("position",new sn(E,3)),this.setAttribute("normal",new sn(w,3)),this.setAttribute("uv",new sn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class EM extends gi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wc extends bs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=zd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class TM extends bs{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kd,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class bM extends bs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class AM extends bs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cv extends Rn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const zh=new Je,M0=new q,E0=new q;class RM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yd,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;M0.setFromMatrixPosition(t.matrixWorld),i.position.copy(M0),E0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(E0),i.updateMatrixWorld(),zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(zh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qd extends Tv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class CM extends RM{constructor(){super(new Qd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wM extends Cv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new CM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class DM extends Cv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class UM extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class LM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class NM extends Ts{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function T0(r,t,i,s){const l=OM(s);switch(i){case fv:return r*t;case dv:return r*t/l.components*l.byteLength;case Hd:return r*t/l.components*l.byteLength;case pv:return r*t*2/l.components*l.byteLength;case Gd:return r*t*2/l.components*l.byteLength;case hv:return r*t*3/l.components*l.byteLength;case Ei:return r*t*4/l.components*l.byteLength;case Vd:return r*t*4/l.components*l.byteLength;case Ic:case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hc:case Gc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case rd:case ld:return Math.max(r,16)*Math.max(t,8)/4;case sd:case od:return Math.max(r,8)*Math.max(t,8)/2;case cd:case ud:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case fd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case dd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case pd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case md:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case gd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case _d:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case vd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case yd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Md:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Td:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case bd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ad:case Rd:case Cd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case wd:case Dd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ud:case Ld:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function OM(r){switch(r){case Oi:case ov:return{byteLength:1,components:1};case Ho:case lv:case Wa:return{byteLength:2,components:1};case Id:case Fd:return{byteLength:2,components:4};case Es:case Bd:case la:return{byteLength:4,components:1};case cv:case uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wv(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function PM(r){const t=new WeakMap;function i(d,m){const p=d.array,S=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const S=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,S);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],w=_[M];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++x,_[x]=w)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const w=_[M];r.bufferSubData(p,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=t.get(d);(!S||S.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
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
#endif`,IM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
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
#endif`,kM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XM=`#ifdef USE_BATCHING
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
#endif`,WM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZM=`#ifdef USE_IRIDESCENCE
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
#endif`,KM=`#ifdef USE_BUMPMAP
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sE=`#define PI 3.141592653589793
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
} // validated`,rE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oE=`vec3 transformedNormal = objectNormal;
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
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hE="gl_FragColor = linearToOutputTexel( gl_FragColor );",dE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gE=`#ifdef USE_ENVMAP
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
#endif`,_E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
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
#endif`,SE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ME=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EE=`#ifdef USE_GRADIENTMAP
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
}`,TE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RE=`uniform bool receiveShadow;
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
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NE=`PhysicalMaterial material;
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
#endif`,OE=`struct PhysicalMaterial {
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
}`,PE=`
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
#endif`,zE=`#if defined( RE_IndirectDiffuse )
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
#endif`,BE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WE=`#if defined( USE_POINTS_UV )
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
#endif`,qE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QE=`#ifdef USE_MORPHTARGETS
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
#endif`,JE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$E=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aT=`#ifdef USE_NORMALMAP
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
#endif`,sT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_T=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ST=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xT=`float getShadowMask() {
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
}`,yT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MT=`#ifdef USE_SKINNING
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
#endif`,ET=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TT=`#ifdef USE_SKINNING
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
#endif`,bT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wT=`#ifdef USE_TRANSMISSION
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
#endif`,DT=`#ifdef USE_TRANSMISSION
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zT=`uniform sampler2D t2D;
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
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GT=`#include <common>
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
}`,VT=`#if DEPTH_PACKING == 3200
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
}`,kT=`#define DISTANCE
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
}`,XT=`#define DISTANCE
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
}`,WT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YT=`uniform float scale;
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
}`,jT=`uniform vec3 diffuse;
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
}`,ZT=`#include <common>
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
}`,KT=`uniform vec3 diffuse;
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
}`,QT=`#define LAMBERT
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
}`,JT=`#define LAMBERT
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
}`,$T=`#define MATCAP
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
}`,tb=`#define MATCAP
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
}`,eb=`#define NORMAL
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
}`,nb=`#define NORMAL
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
}`,ib=`#define PHONG
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
}`,ab=`#define PHONG
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
}`,sb=`#define STANDARD
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
}`,rb=`#define STANDARD
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
}`,ob=`#define TOON
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
}`,lb=`#define TOON
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
}`,cb=`uniform float size;
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
}`,ub=`uniform vec3 diffuse;
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
}`,fb=`#include <common>
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
}`,hb=`uniform vec3 color;
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
}`,db=`uniform float rotation;
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
}`,pb=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:zM,alphahash_pars_fragment:BM,alphamap_fragment:IM,alphamap_pars_fragment:FM,alphatest_fragment:HM,alphatest_pars_fragment:GM,aomap_fragment:VM,aomap_pars_fragment:kM,batching_pars_vertex:XM,batching_vertex:WM,begin_vertex:qM,beginnormal_vertex:YM,bsdfs:jM,iridescence_fragment:ZM,bumpmap_pars_fragment:KM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:tE,color_fragment:eE,color_pars_fragment:nE,color_pars_vertex:iE,color_vertex:aE,common:sE,cube_uv_reflection_fragment:rE,defaultnormal_vertex:oE,displacementmap_pars_vertex:lE,displacementmap_vertex:cE,emissivemap_fragment:uE,emissivemap_pars_fragment:fE,colorspace_fragment:hE,colorspace_pars_fragment:dE,envmap_fragment:pE,envmap_common_pars_fragment:mE,envmap_pars_fragment:gE,envmap_pars_vertex:_E,envmap_physical_pars_fragment:CE,envmap_vertex:vE,fog_vertex:SE,fog_pars_vertex:xE,fog_fragment:yE,fog_pars_fragment:ME,gradientmap_pars_fragment:EE,lightmap_pars_fragment:TE,lights_lambert_fragment:bE,lights_lambert_pars_fragment:AE,lights_pars_begin:RE,lights_toon_fragment:wE,lights_toon_pars_fragment:DE,lights_phong_fragment:UE,lights_phong_pars_fragment:LE,lights_physical_fragment:NE,lights_physical_pars_fragment:OE,lights_fragment_begin:PE,lights_fragment_maps:zE,lights_fragment_end:BE,logdepthbuf_fragment:IE,logdepthbuf_pars_fragment:FE,logdepthbuf_pars_vertex:HE,logdepthbuf_vertex:GE,map_fragment:VE,map_pars_fragment:kE,map_particle_fragment:XE,map_particle_pars_fragment:WE,metalnessmap_fragment:qE,metalnessmap_pars_fragment:YE,morphinstance_vertex:jE,morphcolor_vertex:ZE,morphnormal_vertex:KE,morphtarget_pars_vertex:QE,morphtarget_vertex:JE,normal_fragment_begin:$E,normal_fragment_maps:tT,normal_pars_fragment:eT,normal_pars_vertex:nT,normal_vertex:iT,normalmap_pars_fragment:aT,clearcoat_normal_fragment_begin:sT,clearcoat_normal_fragment_maps:rT,clearcoat_pars_fragment:oT,iridescence_pars_fragment:lT,opaque_fragment:cT,packing:uT,premultiplied_alpha_fragment:fT,project_vertex:hT,dithering_fragment:dT,dithering_pars_fragment:pT,roughnessmap_fragment:mT,roughnessmap_pars_fragment:gT,shadowmap_pars_fragment:_T,shadowmap_pars_vertex:vT,shadowmap_vertex:ST,shadowmask_pars_fragment:xT,skinbase_vertex:yT,skinning_pars_vertex:MT,skinning_vertex:ET,skinnormal_vertex:TT,specularmap_fragment:bT,specularmap_pars_fragment:AT,tonemapping_fragment:RT,tonemapping_pars_fragment:CT,transmission_fragment:wT,transmission_pars_fragment:DT,uv_pars_fragment:UT,uv_pars_vertex:LT,uv_vertex:NT,worldpos_vertex:OT,background_vert:PT,background_frag:zT,backgroundCube_vert:BT,backgroundCube_frag:IT,cube_vert:FT,cube_frag:HT,depth_vert:GT,depth_frag:VT,distanceRGBA_vert:kT,distanceRGBA_frag:XT,equirect_vert:WT,equirect_frag:qT,linedashed_vert:YT,linedashed_frag:jT,meshbasic_vert:ZT,meshbasic_frag:KT,meshlambert_vert:QT,meshlambert_frag:JT,meshmatcap_vert:$T,meshmatcap_frag:tb,meshnormal_vert:eb,meshnormal_frag:nb,meshphong_vert:ib,meshphong_frag:ab,meshphysical_vert:sb,meshphysical_frag:rb,meshtoon_vert:ob,meshtoon_frag:lb,points_vert:cb,points_frag:ub,shadow_vert:fb,shadow_frag:hb,sprite_vert:db,sprite_frag:pb},Ht={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Di={basic:{uniforms:zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new be(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:zn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:zn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:zn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new be(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:zn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:zn([Ht.points,Ht.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:zn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:zn([Ht.common,Ht.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:zn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:zn([Ht.sprite,Ht.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:zn([Ht.common,Ht.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:zn([Ht.lights,Ht.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Di.physical={uniforms:zn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Dc={r:0,b:0,g:0},ms=new zi,mb=new Je;function gb(r,t,i,s,l,c,h){const d=new be(0);let m=c===!0?0:1,p,S,_=null,x=0,M=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function w(L){let D=!1;const H=E(L);H===null?g(d,m):H&&H.isColor&&(g(H,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(L,D){const H=E(D);H&&(H.isCubeTexture||H.mapping===jc)?(S===void 0&&(S=new An(new Yo(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Nr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(B,U,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),ms.copy(D.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),S.material.uniforms.envMap.value=H,S.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(mb.makeRotationFromEuler(ms)),S.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Be,(_!==H||x!==H.version||M!==r.toneMapping)&&(S.material.needsUpdate=!0,_=H,x=H.version,M=r.toneMapping),S.layers.enableAll(),L.unshift(S,S.geometry,S.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new An(new Kc(2,2),new gi({name:"BackgroundMaterial",uniforms:Nr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Be,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||x!==H.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=H,x=H.version,M=r.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,D){L.getRGB(Dc,Ev(r)),s.buffers.color.setClear(Dc.r,Dc.g,Dc.b,D,h)}function N(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(d,m)},render:w,addToRenderList:y,dispose:N}}function _b(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(R,F,W,$,ct){let rt=!1;const O=_($,W,F);c!==O&&(c=O,p(c.object)),rt=M(R,$,W,ct),rt&&E(R,$,W,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(rt||h)&&(h=!1,D(R,F,W,$),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function S(R){return r.deleteVertexArray(R)}function _(R,F,W){const $=W.wireframe===!0;let ct=s[R.id];ct===void 0&&(ct={},s[R.id]=ct);let rt=ct[F.id];rt===void 0&&(rt={},ct[F.id]=rt);let O=rt[$];return O===void 0&&(O=x(m()),rt[$]=O),O}function x(R){const F=[],W=[],$=[];for(let ct=0;ct<i;ct++)F[ct]=0,W[ct]=0,$[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:$,object:R,attributes:{},index:null}}function M(R,F,W,$){const ct=c.attributes,rt=F.attributes;let O=0;const j=W.getAttributes();for(const Y in j)if(j[Y].location>=0){const Tt=ct[Y];let z=rt[Y];if(z===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),Tt===void 0||Tt.attribute!==z||z&&Tt.data!==z.data)return!0;O++}return c.attributesNum!==O||c.index!==$}function E(R,F,W,$){const ct={},rt=F.attributes;let O=0;const j=W.getAttributes();for(const Y in j)if(j[Y].location>=0){let Tt=rt[Y];Tt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(Tt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(Tt=R.instanceColor));const z={};z.attribute=Tt,Tt&&Tt.data&&(z.data=Tt.data),ct[Y]=z,O++}c.attributes=ct,c.attributesNum=O,c.index=$}function w(){const R=c.newAttributes;for(let F=0,W=R.length;F<W;F++)R[F]=0}function y(R){g(R,0)}function g(R,F){const W=c.newAttributes,$=c.enabledAttributes,ct=c.attributeDivisors;W[R]=1,$[R]===0&&(r.enableVertexAttribArray(R),$[R]=1),ct[R]!==F&&(r.vertexAttribDivisor(R,F),ct[R]=F)}function N(){const R=c.newAttributes,F=c.enabledAttributes;for(let W=0,$=F.length;W<$;W++)F[W]!==R[W]&&(r.disableVertexAttribArray(W),F[W]=0)}function L(R,F,W,$,ct,rt,O){O===!0?r.vertexAttribIPointer(R,F,W,ct,rt):r.vertexAttribPointer(R,F,W,$,ct,rt)}function D(R,F,W,$){w();const ct=$.attributes,rt=W.getAttributes(),O=F.defaultAttributeValues;for(const j in rt){const Y=rt[j];if(Y.location>=0){let St=ct[j];if(St===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(St=R.instanceColor)),St!==void 0){const Tt=St.normalized,z=St.itemSize,it=t.get(St);if(it===void 0)continue;const At=it.buffer,Lt=it.type,It=it.bytesPerElement,nt=Lt===r.INT||Lt===r.UNSIGNED_INT||St.gpuType===Bd;if(St.isInterleavedBufferAttribute){const ht=St.data,zt=ht.stride,Ot=St.offset;if(ht.isInstancedInterleavedBuffer){for(let jt=0;jt<Y.locationSize;jt++)g(Y.location+jt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let jt=0;jt<Y.locationSize;jt++)y(Y.location+jt);r.bindBuffer(r.ARRAY_BUFFER,At);for(let jt=0;jt<Y.locationSize;jt++)L(Y.location+jt,z/Y.locationSize,Lt,Tt,zt*It,(Ot+z/Y.locationSize*jt)*It,nt)}else{if(St.isInstancedBufferAttribute){for(let ht=0;ht<Y.locationSize;ht++)g(Y.location+ht,St.meshPerAttribute);R.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let ht=0;ht<Y.locationSize;ht++)y(Y.location+ht);r.bindBuffer(r.ARRAY_BUFFER,At);for(let ht=0;ht<Y.locationSize;ht++)L(Y.location+ht,z/Y.locationSize,Lt,Tt,z*It,z/Y.locationSize*ht*It,nt)}}else if(O!==void 0){const Tt=O[j];if(Tt!==void 0)switch(Tt.length){case 2:r.vertexAttrib2fv(Y.location,Tt);break;case 3:r.vertexAttrib3fv(Y.location,Tt);break;case 4:r.vertexAttrib4fv(Y.location,Tt);break;default:r.vertexAttrib1fv(Y.location,Tt)}}}}N()}function H(){I();for(const R in s){const F=s[R];for(const W in F){const $=F[W];for(const ct in $)S($[ct].object),delete $[ct];delete F[W]}delete s[R]}}function B(R){if(s[R.id]===void 0)return;const F=s[R.id];for(const W in F){const $=F[W];for(const ct in $)S($[ct].object),delete $[ct];delete F[W]}delete s[R.id]}function U(R){for(const F in s){const W=s[F];if(W[R.id]===void 0)continue;const $=W[R.id];for(const ct in $)S($[ct].object),delete $[ct];delete W[R.id]}}function I(){A(),h=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:I,resetDefaultState:A,dispose:H,releaseStatesOfGeometry:B,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function vb(r,t,i){let s;function l(p){s=p}function c(p,S){r.drawArrays(s,p,S),i.update(S,s,1)}function h(p,S,_){_!==0&&(r.drawArraysInstanced(s,p,S,_),i.update(S,s,_))}function d(p,S,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,S,0,_);let M=0;for(let E=0;E<_;E++)M+=S[E];i.update(M,s,1)}function m(p,S,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],S[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,S,0,x,0,_);let E=0;for(let w=0;w<_;w++)E+=S[w]*x[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Sb(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(U){return!(U!==Ei&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const I=U===Wa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Oi&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==la&&!I)}function m(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:H,maxSamples:B}}function xb(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new _s,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=S(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,g=r.get(_);if(!l||E===null||E.length===0||c&&!y)c?S(null):p();else{const N=c?0:s,L=N*4;let D=g.clippingState||null;m.value=D,D=S(E,x,L,M);for(let H=0;H!==L;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(_,x,M,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,E!==!0||y===null){const g=M+w*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,D=M;L!==w;++L,D+=4)h.copy(_[L]).applyMatrix4(N,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function yb(r){let t=new WeakMap;function i(h,d){return d===ed?h.mapping=Dr:d===nd&&(h.mapping=Ur),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===ed||d===nd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new pM(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Tr=4,b0=[.125,.215,.35,.446,.526,.582],xs=20,Bh=new Qd,A0=new be;let Ih=null,Fh=0,Hh=0,Gh=!1;const vs=(1+Math.sqrt(5))/2,yr=1/vs,R0=[new q(-vs,yr,0),new q(vs,yr,0),new q(-yr,0,vs),new q(yr,0,vs),new q(0,vs,-yr),new q(0,vs,yr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],Mb=new q;class C0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=Mb}=c;Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ih,Fh,Hh),this._renderer.xr.enabled=Gh,t.scissorTest=!1,Uc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Dr||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ih=this._renderer.getRenderTarget(),Fh=this._renderer.getActiveCubeFace(),Hh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Wa,format:Ei,colorSpace:Lr,depthBuffer:!1},l=w0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eb(c)),this._blurMaterial=Tb(c,t,i)}return l}_compileMaterial(t){const i=new An(this._lodPlanes[0],t);this._renderer.compile(i,Bh)}_sceneToCubeUV(t,i,s,l,c){const m=new pi(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(A0),_.toneMapping=ka,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const w=new Bo({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),y=new An(new Yo,w);let g=!1;const N=t.background;N?N.isColor&&(w.color.copy(N),t.background=null,g=!0):(w.color.copy(A0),g=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[L]));const H=this._cubeSize;Uc(l,D*H,L>2?H:0,H,H),_.setRenderTarget(l),g&&_.render(y,m),_.render(t,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Dr||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=U0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new An(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Uc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Bh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=R0[(l-c-1)%R0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,_=new An(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*xs-1),w=c/E,y=isFinite(c)?1+Math.floor(S*w):xs;y>xs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${xs}`);const g=[];let N=0;for(let U=0;U<xs;++U){const I=U/w,A=Math.exp(-I*I/2);g.push(A),U===0?N+=A:U<y&&(N+=2*A)}for(let U=0;U<g.length;U++)g[U]=g[U]/N;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const D=this._sizeLods[l],H=3*D*(l>L-Tr?l-L+Tr:0),B=4*(this._cubeSize-D);Uc(i,H,B,3*D,2*D),m.setRenderTarget(i),m.render(_,Bh)}}function Eb(r){const t=[],i=[],s=[];let l=r;const c=r-Tr+1+b0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>r-Tr?m=b0[h-r+Tr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),S=-p,_=1+p,x=[S,S,_,S,_,_,S,S,_,_,S,_],M=6,E=6,w=3,y=2,g=1,N=new Float32Array(w*E*M),L=new Float32Array(y*E*M),D=new Float32Array(g*E*M);for(let B=0;B<M;B++){const U=B%3*2/3-1,I=B>2?0:-1,A=[U,I,0,U+2/3,I,0,U+2/3,I+1,0,U,I,0,U+2/3,I+1,0,U,I+1,0];N.set(A,w*E*B),L.set(x,y*E*B);const R=[B,B,B,B,B,B];D.set(R,g*E*B)}const H=new ni;H.setAttribute("position",new Ni(N,w)),H.setAttribute("uv",new Ni(L,y)),H.setAttribute("faceIndex",new Ni(D,g)),t.push(H),l>Tr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function w0(r,t,i){const s=new Pi(r,t,i);return s.texture.mapping=jc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Uc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Tb(r,t,i){const s=new Float32Array(xs),l=new q(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:ca,depthTest:!1,depthWrite:!1})}function D0(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jd(),fragmentShader:`

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
		`,blending:ca,depthTest:!1,depthWrite:!1})}function U0(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Jd(){return`

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
	`}function bb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===ed||m===nd,S=m===Dr||m===Ur;if(p||S){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new C0(r)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new C0(r)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Ab(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Rb(r,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],r.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,E=_.attributes.position;let w=0;if(M!==null){const N=M.array;w=M.version;for(let L=0,D=N.length;L<D;L+=3){const H=N[L+0],B=N[L+1],U=N[L+2];x.push(H,B,B,U,U,H)}}else if(E!==void 0){const N=E.array;w=E.version;for(let L=0,D=N.length/3-1;L<D;L+=3){const H=L+0,B=L+1,U=L+2;x.push(H,B,B,U,U,H)}}else return;const y=new(gv(x)?Mv:yv)(x,1);y.version=w;const g=c.get(_);g&&t.remove(g),c.set(_,y)}function S(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:S}}function Cb(r,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){r.drawElements(s,M,c,x*h),i.update(M,s,1)}function p(x,M,E){E!==0&&(r.drawElementsInstanced(s,M,c,x*h,E),i.update(M,s,E))}function S(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];i.update(y,s,1)}function _(x,M,E,w){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,w,0,E);let g=0;for(let N=0;N<E;N++)g+=M[N]*w[N];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=_}function wb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Db(r,t,i){const s=new WeakMap,l=new Qe;function c(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=S!==void 0?S.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let R=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let H=d.attributes.position.count*D,B=1;H>t.maxTextureSize&&(B=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const U=new Float32Array(H*B*4*_),I=new _v(U,H,B,_);I.type=la,I.needsUpdate=!0;const A=D*4;for(let F=0;F<_;F++){const W=g[F],$=N[F],ct=L[F],rt=H*B*4*F;for(let O=0;O<W.count;O++){const j=O*A;E===!0&&(l.fromBufferAttribute(W,O),U[rt+j+0]=l.x,U[rt+j+1]=l.y,U[rt+j+2]=l.z,U[rt+j+3]=0),w===!0&&(l.fromBufferAttribute($,O),U[rt+j+4]=l.x,U[rt+j+5]=l.y,U[rt+j+6]=l.z,U[rt+j+7]=0),y===!0&&(l.fromBufferAttribute(ct,O),U[rt+j+8]=l.x,U[rt+j+9]=l.y,U[rt+j+10]=l.z,U[rt+j+11]=ct.itemSize===4?l.w:1)}}x={count:_,texture:I,size:new ie(H,B)},s.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function Ub(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,S=m.geometry,_=t.get(m,S);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Dv=new Wn,L0=new jd(1,1),Uv=new _v,Lv=new Jy,Nv=new bv,N0=[],O0=[],P0=new Float32Array(16),z0=new Float32Array(9),B0=new Float32Array(4);function zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=N0[l];if(c===void 0&&(c=new Float32Array(l),N0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function pn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function mn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Qc(r,t){let i=O0[t];i===void 0&&(i=new Int32Array(t),O0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Lb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Nb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2fv(this.addr,t),mn(i,t)}}function Ob(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;r.uniform3fv(this.addr,t),mn(i,t)}}function Pb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4fv(this.addr,t),mn(i,t)}}function zb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;B0.set(s),r.uniformMatrix2fv(this.addr,!1,B0),mn(i,s)}}function Bb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;z0.set(s),r.uniformMatrix3fv(this.addr,!1,z0),mn(i,s)}}function Ib(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(pn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,s))return;P0.set(s),r.uniformMatrix4fv(this.addr,!1,P0),mn(i,s)}}function Fb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function Hb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2iv(this.addr,t),mn(i,t)}}function Gb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3iv(this.addr,t),mn(i,t)}}function Vb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4iv(this.addr,t),mn(i,t)}}function kb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Xb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;r.uniform2uiv(this.addr,t),mn(i,t)}}function Wb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;r.uniform3uiv(this.addr,t),mn(i,t)}}function qb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;r.uniform4uiv(this.addr,t),mn(i,t)}}function Yb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(L0.compareFunction=mv,c=L0):c=Dv,i.setTexture2D(t||c,l)}function jb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Lv,l)}function Zb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Nv,l)}function Kb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Uv,l)}function Qb(r){switch(r){case 5126:return Lb;case 35664:return Nb;case 35665:return Ob;case 35666:return Pb;case 35674:return zb;case 35675:return Bb;case 35676:return Ib;case 5124:case 35670:return Fb;case 35667:case 35671:return Hb;case 35668:case 35672:return Gb;case 35669:case 35673:return Vb;case 5125:return kb;case 36294:return Xb;case 36295:return Wb;case 36296:return qb;case 35678:case 36198:case 36298:case 36306:case 35682:return Yb;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Kb}}function Jb(r,t){r.uniform1fv(this.addr,t)}function $b(r,t){const i=zr(t,this.size,2);r.uniform2fv(this.addr,i)}function t1(r,t){const i=zr(t,this.size,3);r.uniform3fv(this.addr,i)}function e1(r,t){const i=zr(t,this.size,4);r.uniform4fv(this.addr,i)}function n1(r,t){const i=zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function i1(r,t){const i=zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function a1(r,t){const i=zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function s1(r,t){r.uniform1iv(this.addr,t)}function r1(r,t){r.uniform2iv(this.addr,t)}function o1(r,t){r.uniform3iv(this.addr,t)}function l1(r,t){r.uniform4iv(this.addr,t)}function c1(r,t){r.uniform1uiv(this.addr,t)}function u1(r,t){r.uniform2uiv(this.addr,t)}function f1(r,t){r.uniform3uiv(this.addr,t)}function h1(r,t){r.uniform4uiv(this.addr,t)}function d1(r,t,i){const s=this.cache,l=t.length,c=Qc(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Dv,c[h])}function p1(r,t,i){const s=this.cache,l=t.length,c=Qc(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Lv,c[h])}function m1(r,t,i){const s=this.cache,l=t.length,c=Qc(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Nv,c[h])}function g1(r,t,i){const s=this.cache,l=t.length,c=Qc(i,l);pn(s,c)||(r.uniform1iv(this.addr,c),mn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Uv,c[h])}function _1(r){switch(r){case 5126:return Jb;case 35664:return $b;case 35665:return t1;case 35666:return e1;case 35674:return n1;case 35675:return i1;case 35676:return a1;case 5124:case 35670:return s1;case 35667:case 35671:return r1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}class v1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Qb(i.type)}}class S1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_1(i.type)}}class x1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Vh=/(\w+)(\])?(\[|\.)?/g;function I0(r,t){r.seq.push(t),r.map[t.id]=t}function y1(r,t,i){const s=r.name,l=s.length;for(Vh.lastIndex=0;;){const c=Vh.exec(s),h=Vh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){I0(i,p===void 0?new v1(d,r,t):new S1(d,r,t));break}else{let _=i.map[d];_===void 0&&(_=new x1(d),I0(i,_)),i=_}}}class Vc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);y1(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function F0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const M1=37297;let E1=0;function T1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const H0=new fe;function b1(r){Ae._getMatrix(H0,Ae.workingColorSpace,r);const t=`mat3( ${H0.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(r)){case kc:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function G0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+T1(r.getShaderSource(t),d)}else return c}function A1(r,t){const i=b1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function R1(r,t){let i;switch(t){case $0:i="Linear";break;case tv:i="Reinhard";break;case ev:i="Cineon";break;case nv:i="ACESFilmic";break;case av:i="AgX";break;case sv:i="Neutral";break;case iv:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Lc=new q;function C1(){Ae.getLuminanceCoefficients(Lc);const r=Lc.x.toFixed(4),t=Lc.y.toFixed(4),i=Lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function D1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function U1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function Po(r){return r!==""}function V0(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function k0(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nd(r){return r.replace(L1,O1)}const N1=new Map;function O1(r,t){let i=he[t];if(i===void 0){const s=N1.get(t);if(s!==void 0)i=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Nd(i)}const P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X0(r){return r.replace(P1,z1)}function z1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function W0(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function B1(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===J0?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qx?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function I1(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Dr:case Ur:t="ENVMAP_TYPE_CUBE";break;case jc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F1(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ur:t="ENVMAP_MODE_REFRACTION";break}return t}function H1(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case zd:t="ENVMAP_BLENDING_MULTIPLY";break;case gy:t="ENVMAP_BLENDING_MIX";break;case _y:t="ENVMAP_BLENDING_ADD";break}return t}function G1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function V1(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=B1(i),p=I1(i),S=F1(i),_=H1(i),x=G1(i),M=w1(i),E=D1(c),w=l.createProgram();let y,g,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Po).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Po).join(`
`),g.length>0&&(g+=`
`)):(y=[W0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),g=[W0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?he.tonemapping_pars_fragment:"",i.toneMapping!==ka?R1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,A1("linearToOutputTexel",i.outputColorSpace),C1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Po).join(`
`)),h=Nd(h),h=V0(h,i),h=k0(h,i),d=Nd(d),d=V0(d,i),d=k0(d,i),h=X0(h),d=X0(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===J_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===J_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=N+y+h,D=N+g+d,H=F0(l,l.VERTEX_SHADER,L),B=F0(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,B),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function U(F){if(r.debug.checkShaderErrors){const W=l.getProgramInfoLog(w)||"",$=l.getShaderInfoLog(H)||"",ct=l.getShaderInfoLog(B)||"",rt=W.trim(),O=$.trim(),j=ct.trim();let Y=!0,St=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,H,B);else{const Tt=G0(l,H,"vertex"),z=G0(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+rt+`
`+Tt+`
`+z)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(O===""||j==="")&&(St=!1);St&&(F.diagnostics={runnable:Y,programLog:rt,vertexShader:{log:O,prefix:y},fragmentShader:{log:j,prefix:g}})}l.deleteShader(H),l.deleteShader(B),I=new Vc(l,w),A=U1(l,w)}let I;this.getUniforms=function(){return I===void 0&&U(this),I};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,M1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E1++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=B,this}let k1=0;class X1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new W1(t),i.set(t,s)),s}}class W1{constructor(t){this.id=k1++,this.code=t,this.usedTimes=0}}function q1(r,t,i,s,l,c,h){const d=new Sv,m=new X1,p=new Set,S=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,R,F,W,$){const ct=W.fog,rt=$.geometry,O=A.isMeshStandardMaterial?W.environment:null,j=(A.isMeshStandardMaterial?i:t).get(A.envMap||O),Y=j&&j.mapping===jc?j.image.height:null,St=E[A.type];A.precision!==null&&(M=l.getMaxPrecision(A.precision),M!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const Tt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,z=Tt!==void 0?Tt.length:0;let it=0;rt.morphAttributes.position!==void 0&&(it=1),rt.morphAttributes.normal!==void 0&&(it=2),rt.morphAttributes.color!==void 0&&(it=3);let At,Lt,It,nt;if(St){const Ee=Di[St];At=Ee.vertexShader,Lt=Ee.fragmentShader}else At=A.vertexShader,Lt=A.fragmentShader,m.update(A),It=m.getVertexShaderID(A),nt=m.getFragmentShaderID(A);const ht=r.getRenderTarget(),zt=r.state.buffers.depth.getReversed(),Ot=$.isInstancedMesh===!0,jt=$.isBatchedMesh===!0,ce=!!A.map,je=!!A.matcap,V=!!j,ye=!!A.aoMap,ae=!!A.lightMap,te=!!A.bumpMap,Pt=!!A.normalMap,we=!!A.displacementMap,kt=!!A.emissiveMap,se=!!A.metalnessMap,Ze=!!A.roughnessMap,We=A.anisotropy>0,P=A.clearcoat>0,T=A.dispersion>0,J=A.iridescence>0,gt=A.sheen>0,bt=A.transmission>0,dt=We&&!!A.anisotropyMap,Zt=P&&!!A.clearcoatMap,Nt=P&&!!A.clearcoatNormalMap,Ct=P&&!!A.clearcoatRoughnessMap,Rt=J&&!!A.iridescenceMap,ut=J&&!!A.iridescenceThicknessMap,pt=gt&&!!A.sheenColorMap,wt=gt&&!!A.sheenRoughnessMap,Dt=!!A.specularMap,Ut=!!A.specularColorMap,Xt=!!A.specularIntensityMap,k=bt&&!!A.transmissionMap,vt=bt&&!!A.thicknessMap,Et=!!A.gradientMap,Bt=!!A.alphaMap,Mt=A.alphaTest>0,ft=!!A.alphaHash,Vt=!!A.extensions;let re=ka;A.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(re=r.toneMapping);const De={shaderID:St,shaderType:A.type,shaderName:A.name,vertexShader:At,fragmentShader:Lt,defines:A.defines,customVertexShaderID:It,customFragmentShaderID:nt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:jt,batchingColor:jt&&$._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&$.instanceColor!==null,instancingMorph:Ot&&$.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Lr,alphaToCoverage:!!A.alphaToCoverage,map:ce,matcap:je,envMap:V,envMapMode:V&&j.mapping,envMapCubeUVHeight:Y,aoMap:ye,lightMap:ae,bumpMap:te,normalMap:Pt,displacementMap:x&&we,emissiveMap:kt,normalMapObjectSpace:Pt&&A.normalMapType===yy,normalMapTangentSpace:Pt&&A.normalMapType===kd,metalnessMap:se,roughnessMap:Ze,anisotropy:We,anisotropyMap:dt,clearcoat:P,clearcoatMap:Zt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Ct,dispersion:T,iridescence:J,iridescenceMap:Rt,iridescenceThicknessMap:ut,sheen:gt,sheenColorMap:pt,sheenRoughnessMap:wt,specularMap:Dt,specularColorMap:Ut,specularIntensityMap:Xt,transmission:bt,transmissionMap:k,thicknessMap:vt,gradientMap:Et,opaque:A.transparent===!1&&A.blending===Ar&&A.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:ft,combine:A.combine,mapUv:ce&&w(A.map.channel),aoMapUv:ye&&w(A.aoMap.channel),lightMapUv:ae&&w(A.lightMap.channel),bumpMapUv:te&&w(A.bumpMap.channel),normalMapUv:Pt&&w(A.normalMap.channel),displacementMapUv:we&&w(A.displacementMap.channel),emissiveMapUv:kt&&w(A.emissiveMap.channel),metalnessMapUv:se&&w(A.metalnessMap.channel),roughnessMapUv:Ze&&w(A.roughnessMap.channel),anisotropyMapUv:dt&&w(A.anisotropyMap.channel),clearcoatMapUv:Zt&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:wt&&w(A.sheenRoughnessMap.channel),specularMapUv:Dt&&w(A.specularMap.channel),specularColorMapUv:Ut&&w(A.specularColorMap.channel),specularIntensityMapUv:Xt&&w(A.specularIntensityMap.channel),transmissionMapUv:k&&w(A.transmissionMap.channel),thicknessMapUv:vt&&w(A.thicknessMap.channel),alphaMapUv:Bt&&w(A.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Pt||We),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!rt.attributes.uv&&(ce||Bt),fog:!!ct,useFog:A.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:zt,skinning:$.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:it,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:re,decodeVideoTexture:ce&&A.map.isVideoTexture===!0&&Ae.getTransfer(A.map.colorSpace)===Be,decodeVideoTextureEmissive:kt&&A.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(A.emissiveMap.colorSpace)===Be,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===oa,flipSided:A.side===Xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Vt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&A.extensions.multiDraw===!0||jt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return De.vertexUv1s=p.has(1),De.vertexUv2s=p.has(2),De.vertexUv3s=p.has(3),p.clear(),De}function g(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const F in A.defines)R.push(F),R.push(A.defines[F]);return A.isRawShaderMaterial===!1&&(N(R,A),L(R,A),R.push(r.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function N(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function L(A,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),A.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),A.push(d.mask)}function D(A){const R=E[A.type];let F;if(R){const W=Di[R];F=qd.clone(W.uniforms)}else F=A.uniforms;return F}function H(A,R){let F;for(let W=0,$=S.length;W<$;W++){const ct=S[W];if(ct.cacheKey===R){F=ct,++F.usedTimes;break}}return F===void 0&&(F=new V1(r,R,A,c),S.push(F)),F}function B(A){if(--A.usedTimes===0){const R=S.indexOf(A);S[R]=S[S.length-1],S.pop(),A.destroy()}}function U(A){m.remove(A)}function I(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:B,releaseShaderCache:U,programs:S,dispose:I}}function Y1(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function j1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function q0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Y0(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,x,M,E,w,y){let g=r[t];return g===void 0?(g={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:w,group:y},r[t]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=w,g.group=y),t++,g}function d(_,x,M,E,w,y){const g=h(_,x,M,E,w,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(_,x,M,E,w,y){const g=h(_,x,M,E,w,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(_,x){i.length>1&&i.sort(_||j1),s.length>1&&s.sort(x||q0),l.length>1&&l.sort(x||q0)}function S(){for(let _=t,x=r.length;_<x;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:S,sort:p}}function Z1(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new Y0,r.set(s,[h])):l>=c.length?(h=new Y0,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function K1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new q,color:new be};break;case"SpotLight":i={position:new q,direction:new q,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new q,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new q,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new q,halfWidth:new q,halfHeight:new q};break}return r[t.id]=i,i}}}function Q1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let J1=0;function $1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function tA(r){const t=new K1,i=Q1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new q);const l=new q,c=new Je,h=new Je;function d(p){let S=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let M=0,E=0,w=0,y=0,g=0,N=0,L=0,D=0,H=0,B=0,U=0;p.sort($1);for(let A=0,R=p.length;A<R;A++){const F=p[A],W=F.color,$=F.intensity,ct=F.distance,rt=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)S+=W.r*$,_+=W.g*$,x+=W.b*$;else if(F.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(F.sh.coefficients[O],$);U++}else if(F.isDirectionalLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,Y=i.get(F);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=rt,s.directionalShadowMatrix[M]=F.shadow.matrix,N++}s.directional[M]=O,M++}else if(F.isSpotLight){const O=t.get(F);O.position.setFromMatrixPosition(F.matrixWorld),O.color.copy(W).multiplyScalar($),O.distance=ct,O.coneCos=Math.cos(F.angle),O.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),O.decay=F.decay,s.spot[w]=O;const j=F.shadow;if(F.map&&(s.spotLightMap[H]=F.map,H++,j.updateMatrices(F),F.castShadow&&B++),s.spotLightMatrix[w]=j.matrix,F.castShadow){const Y=i.get(F);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.spotShadow[w]=Y,s.spotShadowMap[w]=rt,D++}w++}else if(F.isRectAreaLight){const O=t.get(F);O.color.copy(W).multiplyScalar($),O.halfWidth.set(F.width*.5,0,0),O.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=O,y++}else if(F.isPointLight){const O=t.get(F);if(O.color.copy(F.color).multiplyScalar(F.intensity),O.distance=F.distance,O.decay=F.decay,F.castShadow){const j=F.shadow,Y=i.get(F);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=rt,s.pointShadowMatrix[E]=F.shadow.matrix,L++}s.point[E]=O,E++}else if(F.isHemisphereLight){const O=t.get(F);O.skyColor.copy(F.color).multiplyScalar($),O.groundColor.copy(F.groundColor).multiplyScalar($),s.hemi[g]=O,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ht.LTC_FLOAT_1,s.rectAreaLTC2=Ht.LTC_FLOAT_2):(s.rectAreaLTC1=Ht.LTC_HALF_1,s.rectAreaLTC2=Ht.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=_,s.ambient[2]=x;const I=s.hash;(I.directionalLength!==M||I.pointLength!==E||I.spotLength!==w||I.rectAreaLength!==y||I.hemiLength!==g||I.numDirectionalShadows!==N||I.numPointShadows!==L||I.numSpotShadows!==D||I.numSpotMaps!==H||I.numLightProbes!==U)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+H-B,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=U,I.directionalLength=M,I.pointLength=E,I.spotLength=w,I.rectAreaLength=y,I.hemiLength=g,I.numDirectionalShadows=N,I.numPointShadows=L,I.numSpotShadows=D,I.numSpotMaps=H,I.numLightProbes=U,s.version=J1++)}function m(p,S){let _=0,x=0,M=0,E=0,w=0;const y=S.matrixWorldInverse;for(let g=0,N=p.length;g<N;g++){const L=p[g];if(L.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),_++}else if(L.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:s}}function j0(r){const t=new tA(r),i=[],s=[];function l(S){p.camera=S,i.length=0,s.length=0}function c(S){i.push(S)}function h(S){s.push(S)}function d(){t.setup(i)}function m(S){t.setupView(i,S)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function eA(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new j0(r),t.set(l,[d])):c>=h.length?(d=new j0(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const nA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iA=`uniform sampler2D shadow_pass;
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
}`;function aA(r,t,i){let s=new Yd;const l=new ie,c=new ie,h=new Qe,d=new bM({depthPacking:xy}),m=new AM,p={},S=i.maxTextureSize,_={[Xa]:Xn,[Xn]:Xa,[oa]:oa},x=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:nA,fragmentShader:iA}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new ni;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new An(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=J0;let g=this.type;this.render=function(B,U,I){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const A=r.getRenderTarget(),R=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),W=r.state;W.setBlending(ca),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const $=g!==ra&&this.type===ra,ct=g===ra&&this.type!==ra;for(let rt=0,O=B.length;rt<O;rt++){const j=B[rt],Y=j.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const St=Y.getFrameExtents();if(l.multiply(St),c.copy(Y.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/St.x),l.x=c.x*St.x,Y.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/St.y),l.y=c.y*St.y,Y.mapSize.y=c.y)),Y.map===null||$===!0||ct===!0){const z=this.type!==ra?{minFilter:Bn,magFilter:Bn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Pi(l.x,l.y,z),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const Tt=Y.getViewportCount();for(let z=0;z<Tt;z++){const it=Y.getViewport(z);h.set(c.x*it.x,c.y*it.y,c.x*it.z,c.y*it.w),W.viewport(h),Y.updateMatrices(j,z),s=Y.getFrustum(),D(U,I,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===ra&&N(Y,I),Y.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(A,R,F)};function N(B,U){const I=t.update(w);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Pi(l.x,l.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(U,null,I,x,w,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(U,null,I,M,w,null)}function L(B,U,I,A){let R=null;const F=I.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)R=F;else if(R=I.isPointLight===!0?m:d,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const W=R.uuid,$=U.uuid;let ct=p[W];ct===void 0&&(ct={},p[W]=ct);let rt=ct[$];rt===void 0&&(rt=R.clone(),ct[$]=rt,U.addEventListener("dispose",H)),R=rt}if(R.visible=U.visible,R.wireframe=U.wireframe,A===ra?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:_[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,I.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const W=r.properties.get(R);W.light=I}return R}function D(B,U,I,A,R){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===ra)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,B.matrixWorld);const $=t.update(B),ct=B.material;if(Array.isArray(ct)){const rt=$.groups;for(let O=0,j=rt.length;O<j;O++){const Y=rt[O],St=ct[Y.materialIndex];if(St&&St.visible){const Tt=L(B,St,A,R);B.onBeforeShadow(r,B,U,I,$,Tt,Y),r.renderBufferDirect(I,null,$,Tt,B,Y),B.onAfterShadow(r,B,U,I,$,Tt,Y)}}}else if(ct.visible){const rt=L(B,ct,A,R);B.onBeforeShadow(r,B,U,I,$,rt,null),r.renderBufferDirect(I,null,$,rt,B,null),B.onAfterShadow(r,B,U,I,$,rt,null)}}const W=B.children;for(let $=0,ct=W.length;$<ct;$++)D(W[$],U,I,A,R)}function H(B){B.target.removeEventListener("dispose",H);for(const I in p){const A=p[I],R=B.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const sA={[jh]:Zh,[Kh]:$h,[Qh]:td,[wr]:Jh,[Zh]:jh,[$h]:Kh,[td]:Qh,[Jh]:wr};function rA(r,t){function i(){let k=!1;const vt=new Qe;let Et=null;const Bt=new Qe(0,0,0,0);return{setMask:function(Mt){Et!==Mt&&!k&&(r.colorMask(Mt,Mt,Mt,Mt),Et=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,ft,Vt,re,De){De===!0&&(Mt*=re,ft*=re,Vt*=re),vt.set(Mt,ft,Vt,re),Bt.equals(vt)===!1&&(r.clearColor(Mt,ft,Vt,re),Bt.copy(vt))},reset:function(){k=!1,Et=null,Bt.set(-1,0,0,0)}}}function s(){let k=!1,vt=!1,Et=null,Bt=null,Mt=null;return{setReversed:function(ft){if(vt!==ft){const Vt=t.get("EXT_clip_control");ft?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),vt=ft;const re=Mt;Mt=null,this.setClear(re)}},getReversed:function(){return vt},setTest:function(ft){ft?ht(r.DEPTH_TEST):zt(r.DEPTH_TEST)},setMask:function(ft){Et!==ft&&!k&&(r.depthMask(ft),Et=ft)},setFunc:function(ft){if(vt&&(ft=sA[ft]),Bt!==ft){switch(ft){case jh:r.depthFunc(r.NEVER);break;case Zh:r.depthFunc(r.ALWAYS);break;case Kh:r.depthFunc(r.LESS);break;case wr:r.depthFunc(r.LEQUAL);break;case Qh:r.depthFunc(r.EQUAL);break;case Jh:r.depthFunc(r.GEQUAL);break;case $h:r.depthFunc(r.GREATER);break;case td:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Bt=ft}},setLocked:function(ft){k=ft},setClear:function(ft){Mt!==ft&&(vt&&(ft=1-ft),r.clearDepth(ft),Mt=ft)},reset:function(){k=!1,Et=null,Bt=null,Mt=null,vt=!1}}}function l(){let k=!1,vt=null,Et=null,Bt=null,Mt=null,ft=null,Vt=null,re=null,De=null;return{setTest:function(Ee){k||(Ee?ht(r.STENCIL_TEST):zt(r.STENCIL_TEST))},setMask:function(Ee){vt!==Ee&&!k&&(r.stencilMask(Ee),vt=Ee)},setFunc:function(Ee,Ln,ii){(Et!==Ee||Bt!==Ln||Mt!==ii)&&(r.stencilFunc(Ee,Ln,ii),Et=Ee,Bt=Ln,Mt=ii)},setOp:function(Ee,Ln,ii){(ft!==Ee||Vt!==Ln||re!==ii)&&(r.stencilOp(Ee,Ln,ii),ft=Ee,Vt=Ln,re=ii)},setLocked:function(Ee){k=Ee},setClear:function(Ee){De!==Ee&&(r.clearStencil(Ee),De=Ee)},reset:function(){k=!1,vt=null,Et=null,Bt=null,Mt=null,ft=null,Vt=null,re=null,De=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let S={},_={},x=new WeakMap,M=[],E=null,w=!1,y=null,g=null,N=null,L=null,D=null,H=null,B=null,U=new be(0,0,0),I=0,A=!1,R=null,F=null,W=null,$=null,ct=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=j>=2);let St=null,Tt={};const z=r.getParameter(r.SCISSOR_BOX),it=r.getParameter(r.VIEWPORT),At=new Qe().fromArray(z),Lt=new Qe().fromArray(it);function It(k,vt,Et,Bt){const Mt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(k,ft),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<Et;Vt++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(vt,0,r.RGBA,1,1,Bt,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(vt+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return ft}const nt={};nt[r.TEXTURE_2D]=It(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=It(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=It(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=It(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ht(r.DEPTH_TEST),h.setFunc(wr),te(!1),Pt(q_),ht(r.CULL_FACE),ye(ca);function ht(k){S[k]!==!0&&(r.enable(k),S[k]=!0)}function zt(k){S[k]!==!1&&(r.disable(k),S[k]=!1)}function Ot(k,vt){return _[k]!==vt?(r.bindFramebuffer(k,vt),_[k]=vt,k===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=vt),k===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=vt),!0):!1}function jt(k,vt){let Et=M,Bt=!1;if(k){Et=x.get(vt),Et===void 0&&(Et=[],x.set(vt,Et));const Mt=k.textures;if(Et.length!==Mt.length||Et[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,Vt=Mt.length;ft<Vt;ft++)Et[ft]=r.COLOR_ATTACHMENT0+ft;Et.length=Mt.length,Bt=!0}}else Et[0]!==r.BACK&&(Et[0]=r.BACK,Bt=!0);Bt&&r.drawBuffers(Et)}function ce(k){return E!==k?(r.useProgram(k),E=k,!0):!1}const je={[Ss]:r.FUNC_ADD,[$x]:r.FUNC_SUBTRACT,[ty]:r.FUNC_REVERSE_SUBTRACT};je[ey]=r.MIN,je[ny]=r.MAX;const V={[iy]:r.ZERO,[ay]:r.ONE,[sy]:r.SRC_COLOR,[qh]:r.SRC_ALPHA,[fy]:r.SRC_ALPHA_SATURATE,[cy]:r.DST_COLOR,[oy]:r.DST_ALPHA,[ry]:r.ONE_MINUS_SRC_COLOR,[Yh]:r.ONE_MINUS_SRC_ALPHA,[uy]:r.ONE_MINUS_DST_COLOR,[ly]:r.ONE_MINUS_DST_ALPHA,[hy]:r.CONSTANT_COLOR,[dy]:r.ONE_MINUS_CONSTANT_COLOR,[py]:r.CONSTANT_ALPHA,[my]:r.ONE_MINUS_CONSTANT_ALPHA};function ye(k,vt,Et,Bt,Mt,ft,Vt,re,De,Ee){if(k===ca){w===!0&&(zt(r.BLEND),w=!1);return}if(w===!1&&(ht(r.BLEND),w=!0),k!==Jx){if(k!==y||Ee!==A){if((g!==Ss||D!==Ss)&&(r.blendEquation(r.FUNC_ADD),g=Ss,D=Ss),Ee)switch(k){case Ar:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Y_:r.blendFunc(r.ONE,r.ONE);break;case j_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Z_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ar:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Y_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case j_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Z_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,L=null,H=null,B=null,U.set(0,0,0),I=0,y=k,A=Ee}return}Mt=Mt||vt,ft=ft||Et,Vt=Vt||Bt,(vt!==g||Mt!==D)&&(r.blendEquationSeparate(je[vt],je[Mt]),g=vt,D=Mt),(Et!==N||Bt!==L||ft!==H||Vt!==B)&&(r.blendFuncSeparate(V[Et],V[Bt],V[ft],V[Vt]),N=Et,L=Bt,H=ft,B=Vt),(re.equals(U)===!1||De!==I)&&(r.blendColor(re.r,re.g,re.b,De),U.copy(re),I=De),y=k,A=!1}function ae(k,vt){k.side===oa?zt(r.CULL_FACE):ht(r.CULL_FACE);let Et=k.side===Xn;vt&&(Et=!Et),te(Et),k.blending===Ar&&k.transparent===!1?ye(ca):ye(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Bt=k.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),kt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):zt(r.SAMPLE_ALPHA_TO_COVERAGE)}function te(k){R!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),R=k)}function Pt(k){k!==Zx?(ht(r.CULL_FACE),k!==F&&(k===q_?r.cullFace(r.BACK):k===Kx?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):zt(r.CULL_FACE),F=k}function we(k){k!==W&&(O&&r.lineWidth(k),W=k)}function kt(k,vt,Et){k?(ht(r.POLYGON_OFFSET_FILL),($!==vt||ct!==Et)&&(r.polygonOffset(vt,Et),$=vt,ct=Et)):zt(r.POLYGON_OFFSET_FILL)}function se(k){k?ht(r.SCISSOR_TEST):zt(r.SCISSOR_TEST)}function Ze(k){k===void 0&&(k=r.TEXTURE0+rt-1),St!==k&&(r.activeTexture(k),St=k)}function We(k,vt,Et){Et===void 0&&(St===null?Et=r.TEXTURE0+rt-1:Et=St);let Bt=Tt[Et];Bt===void 0&&(Bt={type:void 0,texture:void 0},Tt[Et]=Bt),(Bt.type!==k||Bt.texture!==vt)&&(St!==Et&&(r.activeTexture(Et),St=Et),r.bindTexture(k,vt||nt[k]),Bt.type=k,Bt.texture=vt)}function P(){const k=Tt[St];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function gt(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ct(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(k){At.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),At.copy(k))}function wt(k){Lt.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),Lt.copy(k))}function Dt(k,vt){let Et=p.get(vt);Et===void 0&&(Et=new WeakMap,p.set(vt,Et));let Bt=Et.get(k);Bt===void 0&&(Bt=r.getUniformBlockIndex(vt,k.name),Et.set(k,Bt))}function Ut(k,vt){const Bt=p.get(vt).get(k);m.get(vt)!==Bt&&(r.uniformBlockBinding(vt,Bt,k.__bindingPointIndex),m.set(vt,Bt))}function Xt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),S={},St=null,Tt={},_={},x=new WeakMap,M=[],E=null,w=!1,y=null,g=null,N=null,L=null,D=null,H=null,B=null,U=new be(0,0,0),I=0,A=!1,R=null,F=null,W=null,$=null,ct=null,At.set(0,0,r.canvas.width,r.canvas.height),Lt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ht,disable:zt,bindFramebuffer:Ot,drawBuffers:jt,useProgram:ce,setBlending:ye,setMaterial:ae,setFlipSided:te,setCullFace:Pt,setLineWidth:we,setPolygonOffset:kt,setScissorTest:se,activeTexture:Ze,bindTexture:We,unbindTexture:P,compressedTexImage2D:T,compressedTexImage3D:J,texImage2D:Rt,texImage3D:ut,updateUBOMapping:Dt,uniformBlockBinding:Ut,texStorage2D:Nt,texStorage3D:Ct,texSubImage2D:gt,texSubImage3D:bt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Zt,scissor:pt,viewport:wt,reset:Xt}}function oA(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ie,S=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,T){return M?new OffscreenCanvas(P,T):Wc("canvas")}function w(P,T,J){let gt=1;const bt=We(P);if((bt.width>J||bt.height>J)&&(gt=J/Math.max(bt.width,bt.height)),gt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const dt=Math.floor(gt*bt.width),Zt=Math.floor(gt*bt.height);_===void 0&&(_=E(dt,Zt));const Nt=T?E(dt,Zt):_;return Nt.width=dt,Nt.height=Zt,Nt.getContext("2d").drawImage(P,0,0,dt,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+dt+"x"+Zt+")."),Nt}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),P;return P}function y(P){return P.generateMipmaps}function g(P){r.generateMipmap(P)}function N(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(P,T,J,gt,bt=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let dt=T;if(T===r.RED&&(J===r.FLOAT&&(dt=r.R32F),J===r.HALF_FLOAT&&(dt=r.R16F),J===r.UNSIGNED_BYTE&&(dt=r.R8)),T===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(dt=r.R8UI),J===r.UNSIGNED_SHORT&&(dt=r.R16UI),J===r.UNSIGNED_INT&&(dt=r.R32UI),J===r.BYTE&&(dt=r.R8I),J===r.SHORT&&(dt=r.R16I),J===r.INT&&(dt=r.R32I)),T===r.RG&&(J===r.FLOAT&&(dt=r.RG32F),J===r.HALF_FLOAT&&(dt=r.RG16F),J===r.UNSIGNED_BYTE&&(dt=r.RG8)),T===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(dt=r.RG8UI),J===r.UNSIGNED_SHORT&&(dt=r.RG16UI),J===r.UNSIGNED_INT&&(dt=r.RG32UI),J===r.BYTE&&(dt=r.RG8I),J===r.SHORT&&(dt=r.RG16I),J===r.INT&&(dt=r.RG32I)),T===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(dt=r.RGB8UI),J===r.UNSIGNED_SHORT&&(dt=r.RGB16UI),J===r.UNSIGNED_INT&&(dt=r.RGB32UI),J===r.BYTE&&(dt=r.RGB8I),J===r.SHORT&&(dt=r.RGB16I),J===r.INT&&(dt=r.RGB32I)),T===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(dt=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(dt=r.RGBA16UI),J===r.UNSIGNED_INT&&(dt=r.RGBA32UI),J===r.BYTE&&(dt=r.RGBA8I),J===r.SHORT&&(dt=r.RGBA16I),J===r.INT&&(dt=r.RGBA32I)),T===r.RGB&&(J===r.UNSIGNED_INT_5_9_9_9_REV&&(dt=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(dt=r.R11F_G11F_B10F)),T===r.RGBA){const Zt=bt?kc:Ae.getTransfer(gt);J===r.FLOAT&&(dt=r.RGBA32F),J===r.HALF_FLOAT&&(dt=r.RGBA16F),J===r.UNSIGNED_BYTE&&(dt=Zt===Be?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(dt=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(dt=r.RGB5_A1)}return(dt===r.R16F||dt===r.R32F||dt===r.RG16F||dt===r.RG32F||dt===r.RGBA16F||dt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function D(P,T){let J;return P?T===null||T===Es||T===Go?J=r.DEPTH24_STENCIL8:T===la?J=r.DEPTH32F_STENCIL8:T===Ho&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Es||T===Go?J=r.DEPTH_COMPONENT24:T===la?J=r.DEPTH_COMPONENT32F:T===Ho&&(J=r.DEPTH_COMPONENT16),J}function H(P,T){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==Bn&&P.minFilter!==Ui?Math.log2(Math.max(T.width,T.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?T.mipmaps.length:1}function B(P){const T=P.target;T.removeEventListener("dispose",B),I(T),T.isVideoTexture&&S.delete(T)}function U(P){const T=P.target;T.removeEventListener("dispose",U),R(T)}function I(P){const T=s.get(P);if(T.__webglInit===void 0)return;const J=P.source,gt=x.get(J);if(gt){const bt=gt[T.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&A(P),Object.keys(gt).length===0&&x.delete(J)}s.remove(P)}function A(P){const T=s.get(P);r.deleteTexture(T.__webglTexture);const J=P.source,gt=x.get(J);delete gt[T.__cacheKey],h.memory.textures--}function R(P){const T=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(T.__webglFramebuffer[gt]))for(let bt=0;bt<T.__webglFramebuffer[gt].length;bt++)r.deleteFramebuffer(T.__webglFramebuffer[gt][bt]);else r.deleteFramebuffer(T.__webglFramebuffer[gt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[gt])}else{if(Array.isArray(T.__webglFramebuffer))for(let gt=0;gt<T.__webglFramebuffer.length;gt++)r.deleteFramebuffer(T.__webglFramebuffer[gt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let gt=0;gt<T.__webglColorRenderbuffer.length;gt++)T.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[gt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=P.textures;for(let gt=0,bt=J.length;gt<bt;gt++){const dt=s.get(J[gt]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),h.memory.textures--),s.remove(J[gt])}s.remove(P)}let F=0;function W(){F=0}function $(){const P=F;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),F+=1,P}function ct(P){const T=[];return T.push(P.wrapS),T.push(P.wrapT),T.push(P.wrapR||0),T.push(P.magFilter),T.push(P.minFilter),T.push(P.anisotropy),T.push(P.internalFormat),T.push(P.format),T.push(P.type),T.push(P.generateMipmaps),T.push(P.premultiplyAlpha),T.push(P.flipY),T.push(P.unpackAlignment),T.push(P.colorSpace),T.join()}function rt(P,T){const J=s.get(P);if(P.isVideoTexture&&se(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&J.__version!==P.version){const gt=P.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(J,P,T);return}}else P.isExternalTexture&&(J.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+T)}function O(P,T){const J=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){nt(J,P,T);return}i.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+T)}function j(P,T){const J=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){nt(J,P,T);return}i.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+T)}function Y(P,T){const J=s.get(P);if(P.version>0&&J.__version!==P.version){ht(J,P,T);return}i.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+T)}const St={[id]:r.REPEAT,[ys]:r.CLAMP_TO_EDGE,[ad]:r.MIRRORED_REPEAT},Tt={[Bn]:r.NEAREST,[vy]:r.NEAREST_MIPMAP_NEAREST,[sc]:r.NEAREST_MIPMAP_LINEAR,[Ui]:r.LINEAR,[fh]:r.LINEAR_MIPMAP_NEAREST,[Ms]:r.LINEAR_MIPMAP_LINEAR},z={[My]:r.NEVER,[Cy]:r.ALWAYS,[Ey]:r.LESS,[mv]:r.LEQUAL,[Ty]:r.EQUAL,[Ry]:r.GEQUAL,[by]:r.GREATER,[Ay]:r.NOTEQUAL};function it(P,T){if(T.type===la&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ui||T.magFilter===fh||T.magFilter===sc||T.magFilter===Ms||T.minFilter===Ui||T.minFilter===fh||T.minFilter===sc||T.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,St[T.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,St[T.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,St[T.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Tt[T.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Tt[T.minFilter]),T.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bn||T.minFilter!==sc&&T.minFilter!==Ms||T.type===la&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function At(P,T){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,T.addEventListener("dispose",B));const gt=T.source;let bt=x.get(gt);bt===void 0&&(bt={},x.set(gt,bt));const dt=ct(T);if(dt!==P.__cacheKey){bt[dt]===void 0&&(bt[dt]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,J=!0),bt[dt].usedTimes++;const Zt=bt[P.__cacheKey];Zt!==void 0&&(bt[P.__cacheKey].usedTimes--,Zt.usedTimes===0&&A(T)),P.__cacheKey=dt,P.__webglTexture=bt[dt].texture}return J}function Lt(P,T,J){return Math.floor(Math.floor(P/J)/T)}function It(P,T,J,gt){const dt=P.updateRanges;if(dt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,J,gt,T.data);else{dt.sort((ut,pt)=>ut.start-pt.start);let Zt=0;for(let ut=1;ut<dt.length;ut++){const pt=dt[Zt],wt=dt[ut],Dt=pt.start+pt.count,Ut=Lt(wt.start,T.width,4),Xt=Lt(pt.start,T.width,4);wt.start<=Dt+1&&Ut===Xt&&Lt(wt.start+wt.count-1,T.width,4)===Ut?pt.count=Math.max(pt.count,wt.start+wt.count-pt.start):(++Zt,dt[Zt]=wt)}dt.length=Zt+1;const Nt=r.getParameter(r.UNPACK_ROW_LENGTH),Ct=r.getParameter(r.UNPACK_SKIP_PIXELS),Rt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ut=0,pt=dt.length;ut<pt;ut++){const wt=dt[ut],Dt=Math.floor(wt.start/4),Ut=Math.ceil(wt.count/4),Xt=Dt%T.width,k=Math.floor(Dt/T.width),vt=Ut,Et=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),i.texSubImage2D(r.TEXTURE_2D,0,Xt,k,vt,Et,J,gt,T.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Nt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,Rt)}}function nt(P,T,J){let gt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(gt=r.TEXTURE_3D);const bt=At(P,T),dt=T.source;i.bindTexture(gt,P.__webglTexture,r.TEXTURE0+J);const Zt=s.get(dt);if(dt.version!==Zt.__version||bt===!0){i.activeTexture(r.TEXTURE0+J);const Nt=Ae.getPrimaries(Ae.workingColorSpace),Ct=T.colorSpace===Va?null:Ae.getPrimaries(T.colorSpace),Rt=T.colorSpace===Va||Nt===Ct?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let ut=w(T.image,!1,l.maxTextureSize);ut=Ze(T,ut);const pt=c.convert(T.format,T.colorSpace),wt=c.convert(T.type);let Dt=L(T.internalFormat,pt,wt,T.colorSpace,T.isVideoTexture);it(gt,T);let Ut;const Xt=T.mipmaps,k=T.isVideoTexture!==!0,vt=Zt.__version===void 0||bt===!0,Et=dt.dataReady,Bt=H(T,ut);if(T.isDepthTexture)Dt=D(T.format===ko,T.type),vt&&(k?i.texStorage2D(r.TEXTURE_2D,1,Dt,ut.width,ut.height):i.texImage2D(r.TEXTURE_2D,0,Dt,ut.width,ut.height,0,pt,wt,null));else if(T.isDataTexture)if(Xt.length>0){k&&vt&&i.texStorage2D(r.TEXTURE_2D,Bt,Dt,Xt[0].width,Xt[0].height);for(let Mt=0,ft=Xt.length;Mt<ft;Mt++)Ut=Xt[Mt],k?Et&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,pt,wt,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,Dt,Ut.width,Ut.height,0,pt,wt,Ut.data);T.generateMipmaps=!1}else k?(vt&&i.texStorage2D(r.TEXTURE_2D,Bt,Dt,ut.width,ut.height),Et&&It(T,ut,pt,wt)):i.texImage2D(r.TEXTURE_2D,0,Dt,ut.width,ut.height,0,pt,wt,ut.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){k&&vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Dt,Xt[0].width,Xt[0].height,ut.depth);for(let Mt=0,ft=Xt.length;Mt<ft;Mt++)if(Ut=Xt[Mt],T.format!==Ei)if(pt!==null)if(k){if(Et)if(T.layerUpdates.size>0){const Vt=T0(Ut.width,Ut.height,T.format,T.type);for(const re of T.layerUpdates){const De=Ut.data.subarray(re*Vt/Ut.data.BYTES_PER_ELEMENT,(re+1)*Vt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,re,Ut.width,Ut.height,1,pt,De)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,ut.depth,pt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Dt,Ut.width,Ut.height,ut.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Et&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,ut.depth,pt,wt,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Dt,Ut.width,Ut.height,ut.depth,0,pt,wt,Ut.data)}else{k&&vt&&i.texStorage2D(r.TEXTURE_2D,Bt,Dt,Xt[0].width,Xt[0].height);for(let Mt=0,ft=Xt.length;Mt<ft;Mt++)Ut=Xt[Mt],T.format!==Ei?pt!==null?k?Et&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,pt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,Dt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Et&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,pt,wt,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,Dt,Ut.width,Ut.height,0,pt,wt,Ut.data)}else if(T.isDataArrayTexture)if(k){if(vt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Bt,Dt,ut.width,ut.height,ut.depth),Et)if(T.layerUpdates.size>0){const Mt=T0(ut.width,ut.height,T.format,T.type);for(const ft of T.layerUpdates){const Vt=ut.data.subarray(ft*Mt/ut.data.BYTES_PER_ELEMENT,(ft+1)*Mt/ut.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ft,ut.width,ut.height,1,pt,wt,Vt)}T.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,pt,wt,ut.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Dt,ut.width,ut.height,ut.depth,0,pt,wt,ut.data);else if(T.isData3DTexture)k?(vt&&i.texStorage3D(r.TEXTURE_3D,Bt,Dt,ut.width,ut.height,ut.depth),Et&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,pt,wt,ut.data)):i.texImage3D(r.TEXTURE_3D,0,Dt,ut.width,ut.height,ut.depth,0,pt,wt,ut.data);else if(T.isFramebufferTexture){if(vt)if(k)i.texStorage2D(r.TEXTURE_2D,Bt,Dt,ut.width,ut.height);else{let Mt=ut.width,ft=ut.height;for(let Vt=0;Vt<Bt;Vt++)i.texImage2D(r.TEXTURE_2D,Vt,Dt,Mt,ft,0,pt,wt,null),Mt>>=1,ft>>=1}}else if(Xt.length>0){if(k&&vt){const Mt=We(Xt[0]);i.texStorage2D(r.TEXTURE_2D,Bt,Dt,Mt.width,Mt.height)}for(let Mt=0,ft=Xt.length;Mt<ft;Mt++)Ut=Xt[Mt],k?Et&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,pt,wt,Ut):i.texImage2D(r.TEXTURE_2D,Mt,Dt,pt,wt,Ut);T.generateMipmaps=!1}else if(k){if(vt){const Mt=We(ut);i.texStorage2D(r.TEXTURE_2D,Bt,Dt,Mt.width,Mt.height)}Et&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,pt,wt,ut)}else i.texImage2D(r.TEXTURE_2D,0,Dt,pt,wt,ut);y(T)&&g(gt),Zt.__version=dt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function ht(P,T,J){if(T.image.length!==6)return;const gt=At(P,T),bt=T.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+J);const dt=s.get(bt);if(bt.version!==dt.__version||gt===!0){i.activeTexture(r.TEXTURE0+J);const Zt=Ae.getPrimaries(Ae.workingColorSpace),Nt=T.colorSpace===Va?null:Ae.getPrimaries(T.colorSpace),Ct=T.colorSpace===Va||Zt===Nt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Rt=T.isCompressedTexture||T.image[0].isCompressedTexture,ut=T.image[0]&&T.image[0].isDataTexture,pt=[];for(let ft=0;ft<6;ft++)!Rt&&!ut?pt[ft]=w(T.image[ft],!0,l.maxCubemapSize):pt[ft]=ut?T.image[ft].image:T.image[ft],pt[ft]=Ze(T,pt[ft]);const wt=pt[0],Dt=c.convert(T.format,T.colorSpace),Ut=c.convert(T.type),Xt=L(T.internalFormat,Dt,Ut,T.colorSpace),k=T.isVideoTexture!==!0,vt=dt.__version===void 0||gt===!0,Et=bt.dataReady;let Bt=H(T,wt);it(r.TEXTURE_CUBE_MAP,T);let Mt;if(Rt){k&&vt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,Xt,wt.width,wt.height);for(let ft=0;ft<6;ft++){Mt=pt[ft].mipmaps;for(let Vt=0;Vt<Mt.length;Vt++){const re=Mt[Vt];T.format!==Ei?Dt!==null?k?Et&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,0,0,re.width,re.height,Dt,re.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,Xt,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,0,0,re.width,re.height,Dt,Ut,re.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt,Xt,re.width,re.height,0,Dt,Ut,re.data)}}}else{if(Mt=T.mipmaps,k&&vt){Mt.length>0&&Bt++;const ft=We(pt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Bt,Xt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(ut){k?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,pt[ft].width,pt[ft].height,Dt,Ut,pt[ft].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Xt,pt[ft].width,pt[ft].height,0,Dt,Ut,pt[ft].data);for(let Vt=0;Vt<Mt.length;Vt++){const De=Mt[Vt].image[ft].image;k?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,0,0,De.width,De.height,Dt,Ut,De.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,Xt,De.width,De.height,0,Dt,Ut,De.data)}}else{k?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Dt,Ut,pt[ft]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Xt,Dt,Ut,pt[ft]);for(let Vt=0;Vt<Mt.length;Vt++){const re=Mt[Vt];k?Et&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,0,0,Dt,Ut,re.image[ft]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Vt+1,Xt,Dt,Ut,re.image[ft])}}}y(T)&&g(r.TEXTURE_CUBE_MAP),dt.__version=bt.version,T.onUpdate&&T.onUpdate(T)}P.__version=T.version}function zt(P,T,J,gt,bt,dt){const Zt=c.convert(J.format,J.colorSpace),Nt=c.convert(J.type),Ct=L(J.internalFormat,Zt,Nt,J.colorSpace),Rt=s.get(T),ut=s.get(J);if(ut.__renderTarget=T,!Rt.__hasExternalTextures){const pt=Math.max(1,T.width>>dt),wt=Math.max(1,T.height>>dt);bt===r.TEXTURE_3D||bt===r.TEXTURE_2D_ARRAY?i.texImage3D(bt,dt,Ct,pt,wt,T.depth,0,Zt,Nt,null):i.texImage2D(bt,dt,Ct,pt,wt,0,Zt,Nt,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),kt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,bt,ut.__webglTexture,0,we(T)):(bt===r.TEXTURE_2D||bt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,bt,ut.__webglTexture,dt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(P,T,J){if(r.bindRenderbuffer(r.RENDERBUFFER,P),T.depthBuffer){const gt=T.depthTexture,bt=gt&&gt.isDepthTexture?gt.type:null,dt=D(T.stencilBuffer,bt),Zt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=we(T);kt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Nt,dt,T.width,T.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,dt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,dt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,P)}else{const gt=T.textures;for(let bt=0;bt<gt.length;bt++){const dt=gt[bt],Zt=c.convert(dt.format,dt.colorSpace),Nt=c.convert(dt.type),Ct=L(dt.internalFormat,Zt,Nt,dt.colorSpace),Rt=we(T);J&&kt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,Ct,T.width,T.height):kt(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Rt,Ct,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ct,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function jt(P,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(T.depthTexture);gt.__renderTarget=T,(!gt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),rt(T.depthTexture,0);const bt=gt.__webglTexture,dt=we(T);if(T.depthTexture.format===Vo)kt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,bt,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,bt,0);else if(T.depthTexture.format===ko)kt(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,bt,0,dt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,bt,0);else throw new Error("Unknown depthTexture format")}function ce(P){const T=s.get(P),J=P.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==P.depthTexture){const gt=P.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),gt){const bt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,gt.removeEventListener("dispose",bt)};gt.addEventListener("dispose",bt),T.__depthDisposeCallback=bt}T.__boundDepthTexture=gt}if(P.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const gt=P.texture.mipmaps;gt&&gt.length>0?jt(T.__webglFramebuffer[0],P):jt(T.__webglFramebuffer,P)}else if(J){T.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[gt]),T.__webglDepthbuffer[gt]===void 0)T.__webglDepthbuffer[gt]=r.createRenderbuffer(),Ot(T.__webglDepthbuffer[gt],P,!1);else{const bt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,dt)}}else{const gt=P.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Ot(T.__webglDepthbuffer,P,!1);else{const bt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,dt),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,dt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function je(P,T,J){const gt=s.get(P);T!==void 0&&zt(gt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&ce(P)}function V(P){const T=P.texture,J=s.get(P),gt=s.get(T);P.addEventListener("dispose",U);const bt=P.textures,dt=P.isWebGLCubeRenderTarget===!0,Zt=bt.length>1;if(Zt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=T.version,h.memory.textures++),dt){J.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[Nt]=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)J.__webglFramebuffer[Nt][Ct]=r.createFramebuffer()}else J.__webglFramebuffer[Nt]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let Nt=0;Nt<T.mipmaps.length;Nt++)J.__webglFramebuffer[Nt]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Nt=0,Ct=bt.length;Nt<Ct;Nt++){const Rt=s.get(bt[Nt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=r.createTexture(),h.memory.textures++)}if(P.samples>0&&kt(P)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Nt=0;Nt<bt.length;Nt++){const Ct=bt[Nt];J.__webglColorRenderbuffer[Nt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[Nt]);const Rt=c.convert(Ct.format,Ct.colorSpace),ut=c.convert(Ct.type),pt=L(Ct.internalFormat,Rt,ut,Ct.colorSpace,P.isXRRenderTarget===!0),wt=we(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,wt,pt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Nt,r.RENDERBUFFER,J.__webglColorRenderbuffer[Nt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Ot(J.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(dt){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),it(r.TEXTURE_CUBE_MAP,T);for(let Nt=0;Nt<6;Nt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ct=0;Ct<T.mipmaps.length;Ct++)zt(J.__webglFramebuffer[Nt][Ct],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ct);else zt(J.__webglFramebuffer[Nt],P,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);y(T)&&g(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Nt=0,Ct=bt.length;Nt<Ct;Nt++){const Rt=bt[Nt],ut=s.get(Rt);let pt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(pt,ut.__webglTexture),it(pt,Rt),zt(J.__webglFramebuffer,P,Rt,r.COLOR_ATTACHMENT0+Nt,pt,0),y(Rt)&&g(pt)}i.unbindTexture()}else{let Nt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Nt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Nt,gt.__webglTexture),it(Nt,T),T.mipmaps&&T.mipmaps.length>0)for(let Ct=0;Ct<T.mipmaps.length;Ct++)zt(J.__webglFramebuffer[Ct],P,T,r.COLOR_ATTACHMENT0,Nt,Ct);else zt(J.__webglFramebuffer,P,T,r.COLOR_ATTACHMENT0,Nt,0);y(T)&&g(Nt),i.unbindTexture()}P.depthBuffer&&ce(P)}function ye(P){const T=P.textures;for(let J=0,gt=T.length;J<gt;J++){const bt=T[J];if(y(bt)){const dt=N(P),Zt=s.get(bt).__webglTexture;i.bindTexture(dt,Zt),g(dt),i.unbindTexture()}}}const ae=[],te=[];function Pt(P){if(P.samples>0){if(kt(P)===!1){const T=P.textures,J=P.width,gt=P.height;let bt=r.COLOR_BUFFER_BIT;const dt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(P),Nt=T.length>1;if(Nt)for(let Rt=0;Rt<T.length;Rt++)i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Ct=P.texture.mipmaps;Ct&&Ct.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Rt=0;Rt<T.length;Rt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(bt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(bt|=r.STENCIL_BUFFER_BIT)),Nt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[Rt]);const ut=s.get(T[Rt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ut,0)}r.blitFramebuffer(0,0,J,gt,0,0,J,gt,bt,r.NEAREST),m===!0&&(ae.length=0,te.length=0,ae.push(r.COLOR_ATTACHMENT0+Rt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ae.push(dt),te.push(dt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,te)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Nt)for(let Rt=0;Rt<T.length;Rt++){i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[Rt]);const ut=s.get(T[Rt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.TEXTURE_2D,ut,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const T=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function we(P){return Math.min(l.maxSamples,P.samples)}function kt(P){const T=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(P){const T=h.render.frame;S.get(P)!==T&&(S.set(P,T),P.update())}function Ze(P,T){const J=P.colorSpace,gt=P.format,bt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==Lr&&J!==Va&&(Ae.getTransfer(J)===Be?(gt!==Ei||bt!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=W,this.setTexture2D=rt,this.setTexture2DArray=O,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=je,this.setupRenderTarget=V,this.updateRenderTargetMipmap=ye,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=kt}function lA(r,t){function i(s,l=Va){let c;const h=Ae.getTransfer(l);if(s===Oi)return r.UNSIGNED_BYTE;if(s===Id)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Fd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===cv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===uv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===ov)return r.BYTE;if(s===lv)return r.SHORT;if(s===Ho)return r.UNSIGNED_SHORT;if(s===Bd)return r.INT;if(s===Es)return r.UNSIGNED_INT;if(s===la)return r.FLOAT;if(s===Wa)return r.HALF_FLOAT;if(s===fv)return r.ALPHA;if(s===hv)return r.RGB;if(s===Ei)return r.RGBA;if(s===Vo)return r.DEPTH_COMPONENT;if(s===ko)return r.DEPTH_STENCIL;if(s===dv)return r.RED;if(s===Hd)return r.RED_INTEGER;if(s===pv)return r.RG;if(s===Gd)return r.RG_INTEGER;if(s===Vd)return r.RGBA_INTEGER;if(s===Ic||s===Fc||s===Hc||s===Gc)if(h===Be)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ic)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ic)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sd||s===rd||s===od||s===ld)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===sd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===od)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ld)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cd||s===ud||s===fd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===cd||s===ud)return h===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===fd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===Sd||s===xd||s===yd||s===Md||s===Ed||s===Td||s===bd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===hd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===md)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===gd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_d)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===vd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Sd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Md)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ed)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Td)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bd)return h===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ad||s===Rd||s===Cd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Ad)return h===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Rd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Cd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wd||s===Dd||s===Ud||s===Ld)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===wd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Dd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ud)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ld)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Go?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const cA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uA=`
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

}`;class fA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Rv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new gi({vertexShader:cA,fragmentShader:uA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new An(new Kc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hA extends Ts{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,S=null,_=null,x=null,M=null,E=null;const w=typeof XRWebGLBinding<"u",y=new fA,g={},N=i.getContextAttributes();let L=null,D=null;const H=[],B=[],U=new ie;let I=null;const A=new pi;A.viewport=new Qe;const R=new pi;R.viewport=new Qe;const F=[A,R],W=new UM;let $=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ht=H[nt];return ht===void 0&&(ht=new Lh,H[nt]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(nt){let ht=H[nt];return ht===void 0&&(ht=new Lh,H[nt]=ht),ht.getGripSpace()},this.getHand=function(nt){let ht=H[nt];return ht===void 0&&(ht=new Lh,H[nt]=ht),ht.getHandSpace()};function rt(nt){const ht=B.indexOf(nt.inputSource);if(ht===-1)return;const zt=H[ht];zt!==void 0&&(zt.update(nt.inputSource,nt.frame,p||h),zt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function O(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",j);for(let nt=0;nt<H.length;nt++){const ht=B[nt];ht!==null&&(B[nt]=null,H[nt].disconnect(ht))}$=null,ct=null,y.reset();for(const nt in g)delete g[nt];t.setRenderTarget(L),M=null,x=null,_=null,l=null,D=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(I),t.setSize(U.width,U.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){c=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){d=nt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",O),l.addEventListener("inputsourceschange",j),N.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(U),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let zt=null,Ot=null,jt=null;N.depth&&(jt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,zt=N.stencil?ko:Vo,Ot=N.stencil?Go:Es);const ce={colorFormat:i.RGBA8,depthFormat:jt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(ce),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new Pi(x.textureWidth,x.textureHeight,{format:Ei,type:Oi,depthTexture:new jd(x.textureWidth,x.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,zt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const zt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,zt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Pi(M.framebufferWidth,M.framebufferHeight,{format:Ei,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(nt){for(let ht=0;ht<nt.removed.length;ht++){const zt=nt.removed[ht],Ot=B.indexOf(zt);Ot>=0&&(B[Ot]=null,H[Ot].disconnect(zt))}for(let ht=0;ht<nt.added.length;ht++){const zt=nt.added[ht];let Ot=B.indexOf(zt);if(Ot===-1){for(let ce=0;ce<H.length;ce++)if(ce>=B.length){B.push(zt),Ot=ce;break}else if(B[ce]===null){B[ce]=zt,Ot=ce;break}if(Ot===-1)break}const jt=H[Ot];jt&&jt.connect(zt)}}const Y=new q,St=new q;function Tt(nt,ht,zt){Y.setFromMatrixPosition(ht.matrixWorld),St.setFromMatrixPosition(zt.matrixWorld);const Ot=Y.distanceTo(St),jt=ht.projectionMatrix.elements,ce=zt.projectionMatrix.elements,je=jt[14]/(jt[10]-1),V=jt[14]/(jt[10]+1),ye=(jt[9]+1)/jt[5],ae=(jt[9]-1)/jt[5],te=(jt[8]-1)/jt[0],Pt=(ce[8]+1)/ce[0],we=je*te,kt=je*Pt,se=Ot/(-te+Pt),Ze=se*-te;if(ht.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Ze),nt.translateZ(se),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),jt[10]===-1)nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const We=je+se,P=V+se,T=we-Ze,J=kt+(Ot-Ze),gt=ye*V/P*We,bt=ae*V/P*We;nt.projectionMatrix.makePerspective(T,J,gt,bt,We,P),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function z(nt,ht){ht===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ht.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let ht=nt.near,zt=nt.far;y.texture!==null&&(y.depthNear>0&&(ht=y.depthNear),y.depthFar>0&&(zt=y.depthFar)),W.near=R.near=A.near=ht,W.far=R.far=A.far=zt,($!==W.near||ct!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),$=W.near,ct=W.far),W.layers.mask=nt.layers.mask|6,A.layers.mask=W.layers.mask&3,R.layers.mask=W.layers.mask&5;const Ot=nt.parent,jt=W.cameras;z(W,Ot);for(let ce=0;ce<jt.length;ce++)z(jt[ce],Ot);jt.length===2?Tt(W,A,R):W.projectionMatrix.copy(A.projectionMatrix),it(nt,W,Ot)};function it(nt,ht,zt){zt===null?nt.matrix.copy(ht.matrixWorld):(nt.matrix.copy(zt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ht.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ht.projectionMatrix),nt.projectionMatrixInverse.copy(ht.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Xo*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(nt){m=nt,x!==null&&(x.fixedFoveation=nt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)},this.getCameraTexture=function(nt){return g[nt]};let At=null;function Lt(nt,ht){if(S=ht.getViewerPose(p||h),E=ht,S!==null){const zt=S.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let Ot=!1;zt.length!==W.cameras.length&&(W.cameras.length=0,Ot=!0);for(let V=0;V<zt.length;V++){const ye=zt[V];let ae=null;if(M!==null)ae=M.getViewport(ye);else{const Pt=_.getViewSubImage(x,ye);ae=Pt.viewport,V===0&&(t.setRenderTargetTextures(D,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(D))}let te=F[V];te===void 0&&(te=new pi,te.layers.enable(V),te.viewport=new Qe,F[V]=te),te.matrix.fromArray(ye.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ye.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ae.x,ae.y,ae.width,ae.height),V===0&&(W.matrix.copy(te.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ot===!0&&W.cameras.push(te)}const jt=l.enabledFeatures;if(jt&&jt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){_=s.getBinding();const V=_.getDepthInformation(zt[0]);V&&V.isValid&&V.texture&&y.init(V,l.renderState)}if(jt&&jt.includes("camera-access")&&w){t.state.unbindTexture(),_=s.getBinding();for(let V=0;V<zt.length;V++){const ye=zt[V].camera;if(ye){let ae=g[ye];ae||(ae=new Rv,g[ye]=ae);const te=_.getCameraImage(ye);ae.sourceTexture=te}}}}for(let zt=0;zt<H.length;zt++){const Ot=B[zt],jt=H[zt];Ot!==null&&jt!==void 0&&jt.update(Ot,ht,p||h)}At&&At(nt,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),E=null}const It=new wv;It.setAnimationLoop(Lt),this.setAnimationLoop=function(nt){At=nt},this.dispose=function(){}}}const gs=new zi,dA=new Je;function pA(r,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,Ev(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,N,L,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),_(y,g)):g.isMeshPhongMaterial?(c(y,g),S(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,D)):g.isMeshMatcapMaterial?(c(y,g),E(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),w(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,N,L):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Xn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Xn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=t.get(g),L=N.envMap,D=N.envMapRotation;L&&(y.envMap.value=L,gs.copy(D),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),y.envMapRotation.value.setFromMatrix4(dA.makeRotationFromEuler(gs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,N,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=L*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function S(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function _(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Xn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const N=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function mA(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const D=L.program;s.uniformBlockBinding(N,D)}function p(N,L){let D=l[N.id];D===void 0&&(E(N),D=S(N),l[N.id]=D,N.addEventListener("dispose",y));const H=L.program;s.updateUBOMapping(N,H);const B=t.render.frame;c[N.id]!==B&&(x(N),c[N.id]=B)}function S(N){const L=_();N.__bindingPointIndex=L;const D=r.createBuffer(),H=N.__size,B=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,H,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function _(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],D=N.uniforms,H=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let B=0,U=D.length;B<U;B++){const I=Array.isArray(D[B])?D[B]:[D[B]];for(let A=0,R=I.length;A<R;A++){const F=I[A];if(M(F,B,A,H)===!0){const W=F.__offset,$=Array.isArray(F.value)?F.value:[F.value];let ct=0;for(let rt=0;rt<$.length;rt++){const O=$[rt],j=w(O);typeof O=="number"||typeof O=="boolean"?(F.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,W+ct,F.__data)):O.isMatrix3?(F.__data[0]=O.elements[0],F.__data[1]=O.elements[1],F.__data[2]=O.elements[2],F.__data[3]=0,F.__data[4]=O.elements[3],F.__data[5]=O.elements[4],F.__data[6]=O.elements[5],F.__data[7]=0,F.__data[8]=O.elements[6],F.__data[9]=O.elements[7],F.__data[10]=O.elements[8],F.__data[11]=0):(O.toArray(F.__data,ct),ct+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,W,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(N,L,D,H){const B=N.value,U=L+"_"+D;if(H[U]===void 0)return typeof B=="number"||typeof B=="boolean"?H[U]=B:H[U]=B.clone(),!0;{const I=H[U];if(typeof B=="number"||typeof B=="boolean"){if(I!==B)return H[U]=B,!0}else if(I.equals(B)===!1)return I.copy(B),!0}return!1}function E(N){const L=N.uniforms;let D=0;const H=16;for(let U=0,I=L.length;U<I;U++){const A=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,F=A.length;R<F;R++){const W=A[R],$=Array.isArray(W.value)?W.value:[W.value];for(let ct=0,rt=$.length;ct<rt;ct++){const O=$[ct],j=w(O),Y=D%H,St=Y%j.boundary,Tt=Y+St;D+=St,Tt!==0&&H-Tt<j.storage&&(D+=H-Tt),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=D,D+=j.storage}}}const B=D%H;return B>0&&(D+=H-B),N.__size=D,N.__cache={},this}function w(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function g(){for(const N in l)r.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class gA{constructor(t={}){const{canvas:i=Wy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=di;let B=0,U=0,I=null,A=-1,R=null;const F=new Qe,W=new Qe;let $=null;const ct=new be(0);let rt=0,O=i.width,j=i.height,Y=1,St=null,Tt=null;const z=new Qe(0,0,O,j),it=new Qe(0,0,O,j);let At=!1;const Lt=new Yd;let It=!1,nt=!1;const ht=new Je,zt=new q,Ot=new Qe,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ce=!1;function je(){return I===null?Y:1}let V=s;function ye(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Pd}`),i.addEventListener("webglcontextlost",Et,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),V===null){const Z="webgl2";if(V=ye(Z,C),V===null)throw ye(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ae,te,Pt,we,kt,se,Ze,We,P,T,J,gt,bt,dt,Zt,Nt,Ct,Rt,ut,pt,wt,Dt,Ut,Xt;function k(){ae=new Ab(V),ae.init(),Dt=new lA(V,ae),te=new Sb(V,ae,t,Dt),Pt=new rA(V,ae),te.reversedDepthBuffer&&x&&Pt.buffers.depth.setReversed(!0),we=new wb(V),kt=new Y1,se=new oA(V,ae,Pt,kt,te,Dt,we),Ze=new yb(D),We=new bb(D),P=new PM(V),Ut=new _b(V,P),T=new Rb(V,P,we,Ut),J=new Ub(V,T,P,we),ut=new Db(V,te,se),Nt=new xb(kt),gt=new q1(D,Ze,We,ae,te,Ut,Nt),bt=new pA(D,kt),dt=new Z1,Zt=new eA(ae),Rt=new gb(D,Ze,We,Pt,J,M,m),Ct=new aA(D,J,te),Xt=new mA(V,we,te,Pt),pt=new vb(V,ae,we),wt=new Cb(V,ae,we),we.programs=gt.programs,D.capabilities=te,D.extensions=ae,D.properties=kt,D.renderLists=dt,D.shadowMap=Ct,D.state=Pt,D.info=we}k();const vt=new hA(D,V);this.xr=vt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=ae.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ae.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(O,j,!1))},this.getSize=function(C){return C.set(O,j)},this.setSize=function(C,Z,st=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=C,j=Z,i.width=Math.floor(C*Y),i.height=Math.floor(Z*Y),st===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(O*Y,j*Y).floor()},this.setDrawingBufferSize=function(C,Z,st){O=C,j=Z,Y=st,i.width=Math.floor(C*st),i.height=Math.floor(Z*st),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,Z,st,ot){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,Z,st,ot),Pt.viewport(F.copy(z).multiplyScalar(Y).round())},this.getScissor=function(C){return C.copy(it)},this.setScissor=function(C,Z,st,ot){C.isVector4?it.set(C.x,C.y,C.z,C.w):it.set(C,Z,st,ot),Pt.scissor(W.copy(it).multiplyScalar(Y).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(C){Pt.setScissorTest(At=C)},this.setOpaqueSort=function(C){St=C},this.setTransparentSort=function(C){Tt=C},this.getClearColor=function(C){return C.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,st=!0){let ot=0;if(C){let Q=!1;if(I!==null){const yt=I.texture.format;Q=yt===Vd||yt===Gd||yt===Hd}if(Q){const yt=I.texture.type,Ft=yt===Oi||yt===Es||yt===Ho||yt===Go||yt===Id||yt===Fd,qt=Rt.getClearColor(),Gt=Rt.getClearAlpha(),Qt=qt.r,ne=qt.g,Jt=qt.b;Ft?(E[0]=Qt,E[1]=ne,E[2]=Jt,E[3]=Gt,V.clearBufferuiv(V.COLOR,0,E)):(w[0]=Qt,w[1]=ne,w[2]=Jt,w[3]=Gt,V.clearBufferiv(V.COLOR,0,w))}else ot|=V.COLOR_BUFFER_BIT}Z&&(ot|=V.DEPTH_BUFFER_BIT),st&&(ot|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Et,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),Rt.dispose(),dt.dispose(),Zt.dispose(),kt.dispose(),Ze.dispose(),We.dispose(),J.dispose(),Ut.dispose(),Xt.dispose(),gt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",ii),vt.removeEventListener("sessionend",Br),Ti.stop()};function Et(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=we.autoReset,Z=Ct.enabled,st=Ct.autoUpdate,ot=Ct.needsUpdate,Q=Ct.type;k(),we.autoReset=C,Ct.enabled=Z,Ct.autoUpdate=st,Ct.needsUpdate=ot,Ct.type=Q}function Mt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ft(C){const Z=C.target;Z.removeEventListener("dispose",ft),Vt(Z)}function Vt(C){re(C),kt.remove(C)}function re(C){const Z=kt.get(C).programs;Z!==void 0&&(Z.forEach(function(st){gt.releaseProgram(st)}),C.isShaderMaterial&&gt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,st,ot,Q,yt){Z===null&&(Z=jt);const Ft=Q.isMesh&&Q.matrixWorld.determinant()<0,qt=fa(C,Z,st,ot,Q);Pt.setMaterial(ot,Ft);let Gt=st.index,Qt=1;if(ot.wireframe===!0){if(Gt=T.getWireframeAttribute(st),Gt===void 0)return;Qt=2}const ne=st.drawRange,Jt=st.attributes.position;let de=ne.start*Qt,Ne=(ne.start+ne.count)*Qt;yt!==null&&(de=Math.max(de,yt.start*Qt),Ne=Math.min(Ne,(yt.start+yt.count)*Qt)),Gt!==null?(de=Math.max(de,0),Ne=Math.min(Ne,Gt.count)):Jt!=null&&(de=Math.max(de,0),Ne=Math.min(Ne,Jt.count));const Ge=Ne-de;if(Ge<0||Ge===1/0)return;Ut.setup(Q,ot,qt,st,Gt);let Oe,pe=pt;if(Gt!==null&&(Oe=P.get(Gt),pe=wt,pe.setIndex(Oe)),Q.isMesh)ot.wireframe===!0?(Pt.setLineWidth(ot.wireframeLinewidth*je()),pe.setMode(V.LINES)):pe.setMode(V.TRIANGLES);else if(Q.isLine){let Yt=ot.linewidth;Yt===void 0&&(Yt=1),Pt.setLineWidth(Yt*je()),Q.isLineSegments?pe.setMode(V.LINES):Q.isLineLoop?pe.setMode(V.LINE_LOOP):pe.setMode(V.LINE_STRIP)}else Q.isPoints?pe.setMode(V.POINTS):Q.isSprite&&pe.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Wo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))pe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Yt=Q._multiDrawStarts,ke=Q._multiDrawCounts,Te=Q._multiDrawCount,yn=Gt?P.get(Gt).bytesPerElement:1,Bi=kt.get(ot).currentProgram.getUniforms();for(let gn=0;gn<Te;gn++)Bi.setValue(V,"_gl_DrawID",gn),pe.render(Yt[gn]/yn,ke[gn])}else if(Q.isInstancedMesh)pe.renderInstances(de,Ge,Q.count);else if(st.isInstancedBufferGeometry){const Yt=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,ke=Math.min(st.instanceCount,Yt);pe.renderInstances(de,Ge,ke)}else pe.render(de,Ge)};function De(C,Z,st){C.transparent===!0&&C.side===oa&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,qn(C,Z,st),C.side=Xa,C.needsUpdate=!0,qn(C,Z,st),C.side=oa):qn(C,Z,st)}this.compile=function(C,Z,st=null){st===null&&(st=C),g=Zt.get(st),g.init(Z),L.push(g),st.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),C!==st&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();const ot=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const yt=Q.material;if(yt)if(Array.isArray(yt))for(let Ft=0;Ft<yt.length;Ft++){const qt=yt[Ft];De(qt,st,Q),ot.add(qt)}else De(yt,st,Q),ot.add(yt)}),g=L.pop(),ot},this.compileAsync=function(C,Z,st=null){const ot=this.compile(C,Z,st);return new Promise(Q=>{function yt(){if(ot.forEach(function(Ft){kt.get(Ft).currentProgram.isReady()&&ot.delete(Ft)}),ot.size===0){Q(C);return}setTimeout(yt,10)}ae.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ee=null;function Ln(C){Ee&&Ee(C)}function ii(){Ti.stop()}function Br(){Ti.start()}const Ti=new wv;Ti.setAnimationLoop(Ln),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(C){Ee=C,vt.setAnimationLoop(C),C===null?Ti.stop():Ti.start()},vt.addEventListener("sessionstart",ii),vt.addEventListener("sessionend",Br),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(Z),Z=vt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,Z,I),g=Zt.get(C,L.length),g.init(Z),L.push(g),ht.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Lt.setFromProjectionMatrix(ht,Li,Z.reversedDepth),nt=this.localClippingEnabled,It=Nt.init(this.clippingPlanes,nt),y=dt.get(C,N.length),y.init(),N.push(y),vt.enabled===!0&&vt.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&As(yt,Z,-1/0,D.sortObjects)}As(C,Z,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(St,Tt),ce=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,ce&&Rt.addToRenderList(y,C),this.info.render.frame++,It===!0&&Nt.beginShadows();const st=g.state.shadowsArray;Ct.render(st,C,Z),It===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,Q=y.transmissive;if(g.setupLights(),Z.isArrayCamera){const yt=Z.cameras;if(Q.length>0)for(let Ft=0,qt=yt.length;Ft<qt;Ft++){const Gt=yt[Ft];Cs(ot,Q,C,Gt)}ce&&Rt.render(C);for(let Ft=0,qt=yt.length;Ft<qt;Ft++){const Gt=yt[Ft];Rs(y,C,Gt,Gt.viewport)}}else Q.length>0&&Cs(ot,Q,C,Z),ce&&Rt.render(C),Rs(y,C,Z);I!==null&&U===0&&(se.updateMultisampleRenderTarget(I),se.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(D,C,Z),Ut.resetDefaultState(),A=-1,R=null,L.pop(),L.length>0?(g=L[L.length-1],It===!0&&Nt.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function As(C,Z,st,ot){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Lt.intersectsSprite(C)){ot&&Ot.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ht);const Ft=J.update(C),qt=C.material;qt.visible&&y.push(C,Ft,qt,st,Ot.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Lt.intersectsObject(C))){const Ft=J.update(C),qt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ot.copy(C.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),Ot.copy(Ft.boundingSphere.center)),Ot.applyMatrix4(C.matrixWorld).applyMatrix4(ht)),Array.isArray(qt)){const Gt=Ft.groups;for(let Qt=0,ne=Gt.length;Qt<ne;Qt++){const Jt=Gt[Qt],de=qt[Jt.materialIndex];de&&de.visible&&y.push(C,Ft,de,st,Ot.z,Jt)}}else qt.visible&&y.push(C,Ft,qt,st,Ot.z,null)}}const yt=C.children;for(let Ft=0,qt=yt.length;Ft<qt;Ft++)As(yt[Ft],Z,st,ot)}function Rs(C,Z,st,ot){const Q=C.opaque,yt=C.transmissive,Ft=C.transparent;g.setupLightsView(st),It===!0&&Nt.setGlobalState(D.clippingPlanes,st),ot&&Pt.viewport(F.copy(ot)),Q.length>0&&qa(Q,Z,st),yt.length>0&&qa(yt,Z,st),Ft.length>0&&qa(Ft,Z,st),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Cs(C,Z,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ot.id]===void 0&&(g.state.transmissionRenderTarget[ot.id]=new Pi(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Wa:Oi,minFilter:Ms,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const yt=g.state.transmissionRenderTarget[ot.id],Ft=ot.viewport||F;yt.setSize(Ft.z*D.transmissionResolutionScale,Ft.w*D.transmissionResolutionScale);const qt=D.getRenderTarget(),Gt=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(yt),D.getClearColor(ct),rt=D.getClearAlpha(),rt<1&&D.setClearColor(16777215,.5),D.clear(),ce&&Rt.render(st);const ne=D.toneMapping;D.toneMapping=ka;const Jt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),g.setupLightsView(ot),It===!0&&Nt.setGlobalState(D.clippingPlanes,ot),qa(C,st,ot),se.updateMultisampleRenderTarget(yt),se.updateRenderTargetMipmap(yt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ne=0,Ge=Z.length;Ne<Ge;Ne++){const Oe=Z[Ne],pe=Oe.object,Yt=Oe.geometry,ke=Oe.material,Te=Oe.group;if(ke.side===oa&&pe.layers.test(ot.layers)){const yn=ke.side;ke.side=Xn,ke.needsUpdate=!0,Ir(pe,st,ot,Yt,ke,Te),ke.side=yn,ke.needsUpdate=!0,de=!0}}de===!0&&(se.updateMultisampleRenderTarget(yt),se.updateRenderTargetMipmap(yt))}D.setRenderTarget(qt,Gt,Qt),D.setClearColor(ct,rt),Jt!==void 0&&(ot.viewport=Jt),D.toneMapping=ne}function qa(C,Z,st){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,yt=C.length;Q<yt;Q++){const Ft=C[Q],qt=Ft.object,Gt=Ft.geometry,Qt=Ft.group;let ne=Ft.material;ne.allowOverride===!0&&ot!==null&&(ne=ot),qt.layers.test(st.layers)&&Ir(qt,Z,st,Gt,ne,Qt)}}function Ir(C,Z,st,ot,Q,yt){C.onBeforeRender(D,Z,st,ot,Q,yt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(D,Z,st,ot,C,yt),Q.transparent===!0&&Q.side===oa&&Q.forceSinglePass===!1?(Q.side=Xn,Q.needsUpdate=!0,D.renderBufferDirect(st,Z,ot,Q,C,yt),Q.side=Xa,Q.needsUpdate=!0,D.renderBufferDirect(st,Z,ot,Q,C,yt),Q.side=oa):D.renderBufferDirect(st,Z,ot,Q,C,yt),C.onAfterRender(D,Z,st,ot,Q,yt)}function qn(C,Z,st){Z.isScene!==!0&&(Z=jt);const ot=kt.get(C),Q=g.state.lights,yt=g.state.shadowsArray,Ft=Q.state.version,qt=gt.getParameters(C,Q.state,yt,Z,st),Gt=gt.getProgramCacheKey(qt);let Qt=ot.programs;ot.environment=C.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(C.isMeshStandardMaterial?We:Ze).get(C.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Qt===void 0&&(C.addEventListener("dispose",ft),Qt=new Map,ot.programs=Qt);let ne=Qt.get(Gt);if(ne!==void 0){if(ot.currentProgram===ne&&ot.lightsStateVersion===Ft)return xn(C,qt),ne}else qt.uniforms=gt.getUniforms(C),C.onBeforeCompile(qt,D),ne=gt.acquireProgram(qt,Gt),Qt.set(Gt,ne),ot.uniforms=qt.uniforms;const Jt=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=Nt.uniform),xn(C,qt),ot.needsLights=Jc(C),ot.lightsStateVersion=Ft,ot.needsLights&&(Jt.ambientLightColor.value=Q.state.ambient,Jt.lightProbe.value=Q.state.probe,Jt.directionalLights.value=Q.state.directional,Jt.directionalLightShadows.value=Q.state.directionalShadow,Jt.spotLights.value=Q.state.spot,Jt.spotLightShadows.value=Q.state.spotShadow,Jt.rectAreaLights.value=Q.state.rectArea,Jt.ltc_1.value=Q.state.rectAreaLTC1,Jt.ltc_2.value=Q.state.rectAreaLTC2,Jt.pointLights.value=Q.state.point,Jt.pointLightShadows.value=Q.state.pointShadow,Jt.hemisphereLights.value=Q.state.hemi,Jt.directionalShadowMap.value=Q.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Jt.spotShadowMap.value=Q.state.spotShadowMap,Jt.spotLightMatrix.value=Q.state.spotLightMatrix,Jt.spotLightMap.value=Q.state.spotLightMap,Jt.pointShadowMap.value=Q.state.pointShadowMap,Jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ot.currentProgram=ne,ot.uniformsList=null,ne}function rn(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Vc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function xn(C,Z){const st=kt.get(C);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function fa(C,Z,st,ot,Q){Z.isScene!==!0&&(Z=jt),se.resetTextureUnits();const yt=Z.fog,Ft=ot.isMeshStandardMaterial?Z.environment:null,qt=I===null?D.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Lr,Gt=(ot.isMeshStandardMaterial?We:Ze).get(ot.envMap||Ft),Qt=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ne=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Jt=!!st.morphAttributes.position,de=!!st.morphAttributes.normal,Ne=!!st.morphAttributes.color;let Ge=ka;ot.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const Oe=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,pe=Oe!==void 0?Oe.length:0,Yt=kt.get(ot),ke=g.state.lights;if(It===!0&&(nt===!0||C!==R)){const hn=C===R&&ot.id===A;Nt.setState(ot,C,hn)}let Te=!1;ot.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==ke.state.version||Yt.outputColorSpace!==qt||Q.isBatchedMesh&&Yt.batching===!1||!Q.isBatchedMesh&&Yt.batching===!0||Q.isBatchedMesh&&Yt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Yt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Yt.instancing===!1||!Q.isInstancedMesh&&Yt.instancing===!0||Q.isSkinnedMesh&&Yt.skinning===!1||!Q.isSkinnedMesh&&Yt.skinning===!0||Q.isInstancedMesh&&Yt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Yt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Yt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Yt.instancingMorph===!1&&Q.morphTexture!==null||Yt.envMap!==Gt||ot.fog===!0&&Yt.fog!==yt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Nt.numPlanes||Yt.numIntersection!==Nt.numIntersection)||Yt.vertexAlphas!==Qt||Yt.vertexTangents!==ne||Yt.morphTargets!==Jt||Yt.morphNormals!==de||Yt.morphColors!==Ne||Yt.toneMapping!==Ge||Yt.morphTargetsCount!==pe)&&(Te=!0):(Te=!0,Yt.__version=ot.version);let yn=Yt.currentProgram;Te===!0&&(yn=qn(ot,Z,Q));let Bi=!1,gn=!1,ja=!1;const _e=yn.getUniforms(),Cn=Yt.uniforms;if(Pt.useProgram(yn.program)&&(Bi=!0,gn=!0,ja=!0),ot.id!==A&&(A=ot.id,gn=!0),Bi||R!==C){Pt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),_e.setValue(V,"projectionMatrix",C.projectionMatrix),_e.setValue(V,"viewMatrix",C.matrixWorldInverse);const en=_e.map.cameraPosition;en!==void 0&&en.setValue(V,zt.setFromMatrixPosition(C.matrixWorld)),te.logarithmicDepthBuffer&&_e.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&_e.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,gn=!0,ja=!0)}if(Q.isSkinnedMesh){_e.setOptional(V,Q,"bindMatrix"),_e.setOptional(V,Q,"bindMatrixInverse");const hn=Q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),_e.setValue(V,"boneTexture",hn.boneTexture,se))}Q.isBatchedMesh&&(_e.setOptional(V,Q,"batchingTexture"),_e.setValue(V,"batchingTexture",Q._matricesTexture,se),_e.setOptional(V,Q,"batchingIdTexture"),_e.setValue(V,"batchingIdTexture",Q._indirectTexture,se),_e.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&_e.setValue(V,"batchingColorTexture",Q._colorsTexture,se));const Nn=st.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&ut.update(Q,st,yn),(gn||Yt.receiveShadow!==Q.receiveShadow)&&(Yt.receiveShadow=Q.receiveShadow,_e.setValue(V,"receiveShadow",Q.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Cn.envMap.value=Gt,Cn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(Cn.envMapIntensity.value=Z.environmentIntensity),gn&&(_e.setValue(V,"toneMappingExposure",D.toneMappingExposure),Yt.needsLights&&Fr(Cn,ja),yt&&ot.fog===!0&&bt.refreshFogUniforms(Cn,yt),bt.refreshMaterialUniforms(Cn,ot,Y,j,g.state.transmissionRenderTarget[C.id]),Vc.upload(V,rn(Yt),Cn,se)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Vc.upload(V,rn(Yt),Cn,se),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&_e.setValue(V,"center",Q.center),_e.setValue(V,"modelViewMatrix",Q.modelViewMatrix),_e.setValue(V,"normalMatrix",Q.normalMatrix),_e.setValue(V,"modelMatrix",Q.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const hn=ot.uniformsGroups;for(let en=0,ws=hn.length;en<ws;en++){const bi=hn[en];Xt.update(bi,yn),Xt.bind(bi,yn)}}return yn}function Fr(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function Jc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,Z,st){const ot=kt.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),kt.get(C.texture).__webglTexture=Z,kt.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const st=kt.get(C);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const $c=V.createFramebuffer();this.setRenderTarget=function(C,Z=0,st=0){I=C,B=Z,U=st;let ot=!0,Q=null,yt=!1,Ft=!1;if(C){const Gt=kt.get(C);if(Gt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(V.FRAMEBUFFER,null),ot=!1;else if(Gt.__webglFramebuffer===void 0)se.setupRenderTarget(C);else if(Gt.__hasExternalTextures)se.rebindTextures(C,kt.get(C.texture).__webglTexture,kt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(Gt.__boundDepthTexture!==Jt){if(Jt!==null&&kt.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(C)}}const Qt=C.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Ft=!0);const ne=kt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[Z])?Q=ne[Z][st]:Q=ne[Z],yt=!0):C.samples>0&&se.useMultisampledRTT(C)===!1?Q=kt.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?Q=ne[st]:Q=ne,F.copy(C.viewport),W.copy(C.scissor),$=C.scissorTest}else F.copy(z).multiplyScalar(Y).floor(),W.copy(it).multiplyScalar(Y).floor(),$=At;if(st!==0&&(Q=$c),Pt.bindFramebuffer(V.FRAMEBUFFER,Q)&&ot&&Pt.drawBuffers(C,Q),Pt.viewport(F),Pt.scissor(W),Pt.setScissorTest($),yt){const Gt=kt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Gt.__webglTexture,st)}else if(Ft){const Gt=Z;for(let Qt=0;Qt<C.textures.length;Qt++){const ne=kt.get(C.textures[Qt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Qt,ne.__webglTexture,st,Gt)}}else if(C!==null&&st!==0){const Gt=kt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Gt.__webglTexture,st)}A=-1},this.readRenderTargetPixels=function(C,Z,st,ot,Q,yt,Ft,qt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Gt=Gt[Ft]),Gt){Pt.bindFramebuffer(V.FRAMEBUFFER,Gt);try{const Qt=C.textures[qt],ne=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ot&&st>=0&&st<=C.height-Q&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+qt),V.readPixels(Z,st,ot,Q,Dt.convert(ne),Dt.convert(Jt),yt))}finally{const Qt=I!==null?kt.get(I).__webglFramebuffer:null;Pt.bindFramebuffer(V.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,st,ot,Q,yt,Ft,qt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=kt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ft!==void 0&&(Gt=Gt[Ft]),Gt)if(Z>=0&&Z<=C.width-ot&&st>=0&&st<=C.height-Q){Pt.bindFramebuffer(V.FRAMEBUFFER,Gt);const Qt=C.textures[qt],ne=Qt.format,Jt=Qt.type;if(!te.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.bufferData(V.PIXEL_PACK_BUFFER,yt.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+qt),V.readPixels(Z,st,ot,Q,Dt.convert(ne),Dt.convert(Jt),0);const Ne=I!==null?kt.get(I).__webglFramebuffer:null;Pt.bindFramebuffer(V.FRAMEBUFFER,Ne);const Ge=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await qy(V,Ge,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,yt),V.deleteBuffer(de),V.deleteSync(Ge),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,st=0){const ot=Math.pow(2,-st),Q=Math.floor(C.image.width*ot),yt=Math.floor(C.image.height*ot),Ft=Z!==null?Z.x:0,qt=Z!==null?Z.y:0;se.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,st,0,0,Ft,qt,Q,yt),Pt.unbindTexture()};const Zo=V.createFramebuffer(),Ya=V.createFramebuffer();this.copyTextureToTexture=function(C,Z,st=null,ot=null,Q=0,yt=null){yt===null&&(Q!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Q,Q=0):yt=0);let Ft,qt,Gt,Qt,ne,Jt,de,Ne,Ge;const Oe=C.isCompressedTexture?C.mipmaps[yt]:C.image;if(st!==null)Ft=st.max.x-st.min.x,qt=st.max.y-st.min.y,Gt=st.isBox3?st.max.z-st.min.z:1,Qt=st.min.x,ne=st.min.y,Jt=st.isBox3?st.min.z:0;else{const Nn=Math.pow(2,-Q);Ft=Math.floor(Oe.width*Nn),qt=Math.floor(Oe.height*Nn),C.isDataArrayTexture?Gt=Oe.depth:C.isData3DTexture?Gt=Math.floor(Oe.depth*Nn):Gt=1,Qt=0,ne=0,Jt=0}ot!==null?(de=ot.x,Ne=ot.y,Ge=ot.z):(de=0,Ne=0,Ge=0);const pe=Dt.convert(Z.format),Yt=Dt.convert(Z.type);let ke;Z.isData3DTexture?(se.setTexture3D(Z,0),ke=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(se.setTexture2DArray(Z,0),ke=V.TEXTURE_2D_ARRAY):(se.setTexture2D(Z,0),ke=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const Te=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Bi=V.getParameter(V.UNPACK_SKIP_PIXELS),gn=V.getParameter(V.UNPACK_SKIP_ROWS),ja=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Oe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Oe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ne),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Jt);const _e=C.isDataArrayTexture||C.isData3DTexture,Cn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const Nn=kt.get(C),hn=kt.get(Z),en=kt.get(Nn.__renderTarget),ws=kt.get(hn.__renderTarget);Pt.bindFramebuffer(V.READ_FRAMEBUFFER,en.__webglFramebuffer),Pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,ws.__webglFramebuffer);for(let bi=0;bi<Gt;bi++)_e&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kt.get(C).__webglTexture,Q,Jt+bi),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,kt.get(Z).__webglTexture,yt,Ge+bi)),V.blitFramebuffer(Qt,ne,Ft,qt,de,Ne,Ft,qt,V.DEPTH_BUFFER_BIT,V.NEAREST);Pt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||kt.has(C)){const Nn=kt.get(C),hn=kt.get(Z);Pt.bindFramebuffer(V.READ_FRAMEBUFFER,Zo),Pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ya);for(let en=0;en<Gt;en++)_e?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Nn.__webglTexture,Q,Jt+en):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Nn.__webglTexture,Q),Cn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,yt,Ge+en):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,yt),Q!==0?V.blitFramebuffer(Qt,ne,Ft,qt,de,Ne,Ft,qt,V.COLOR_BUFFER_BIT,V.NEAREST):Cn?V.copyTexSubImage3D(ke,yt,de,Ne,Ge+en,Qt,ne,Ft,qt):V.copyTexSubImage2D(ke,yt,de,Ne,Qt,ne,Ft,qt);Pt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Cn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(ke,yt,de,Ne,Ge,Ft,qt,Gt,pe,Yt,Oe.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(ke,yt,de,Ne,Ge,Ft,qt,Gt,pe,Oe.data):V.texSubImage3D(ke,yt,de,Ne,Ge,Ft,qt,Gt,pe,Yt,Oe):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,yt,de,Ne,Ft,qt,pe,Yt,Oe.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,yt,de,Ne,Oe.width,Oe.height,pe,Oe.data):V.texSubImage2D(V.TEXTURE_2D,yt,de,Ne,Ft,qt,pe,Yt,Oe);V.pixelStorei(V.UNPACK_ROW_LENGTH,Te),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bi),V.pixelStorei(V.UNPACK_SKIP_ROWS,gn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ja),yt===0&&Z.generateMipmaps&&V.generateMipmap(ke),Pt.unbindTexture()},this.initRenderTarget=function(C){kt.get(C).__webglFramebuffer===void 0&&se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?se.setTextureCube(C,0):C.isData3DTexture?se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?se.setTexture2DArray(C,0):se.setTexture2D(C,0),Pt.unbindTexture()},this.resetState=function(){B=0,U=0,I=null,Pt.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const kh={type:"change"},$d={type:"start"},tp={type:"end"},Z0=1e-6,Le={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},Nc=new ie,Ga=new ie,_A=new q,Oc=new q,Xh=new q,Mr=new Pr,K0=new q,Pc=new q,Wh=new q,zc=new q;class vA extends NM{constructor(t,i=null){super(t,i),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:br.ROTATE,MIDDLE:br.DOLLY,RIGHT:br.PAN},this.target=new q,this.state=Le.NONE,this.keyState=Le.NONE,this._lastPosition=new q,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new q,this._movePrev=new ie,this._moveCurr=new ie,this._lastAxis=new q,this._zoomStart=new ie,this._zoomEnd=new ie,this._panStart=new ie,this._panEnd=new ie,this._pointers=[],this._pointerPositions={},this._onPointerMove=xA.bind(this),this._onPointerDown=SA.bind(this),this._onPointerUp=yA.bind(this),this._onPointerCancel=MA.bind(this),this._onContextMenu=wA.bind(this),this._onMouseWheel=CA.bind(this),this._onKeyDown=TA.bind(this),this._onKeyUp=EA.bind(this),this._onTouchStart=DA.bind(this),this._onTouchMove=UA.bind(this),this._onTouchEnd=LA.bind(this),this._onMouseDown=bA.bind(this),this._onMouseMove=AA.bind(this),this._onMouseUp=RA.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,i!==null&&(this.connect(i),this.handleResize()),this.update()}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const t=this.domElement.getBoundingClientRect(),i=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-i.clientLeft,this.screen.top=t.top+window.pageYOffset-i.clientTop,this.screen.width=t.width,this.screen.height=t.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>Z0&&(this.dispatchEvent(kh),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>Z0||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(kh),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=Le.NONE,this.keyState=Le.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(kh),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(Ga.copy(this._panEnd).sub(this._panStart),Ga.lengthSq()){if(this.object.isOrthographicCamera){const t=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,i=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;Ga.x*=t,Ga.y*=i}Ga.multiplyScalar(this._eye.length()*this.panSpeed),Oc.copy(this._eye).cross(this.object.up).setLength(Ga.x),Oc.add(_A.copy(this.object.up).setLength(Ga.y)),this.object.position.add(Oc),this.target.add(Oc),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(Ga.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){zc.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let t=zc.length();t?(this._eye.copy(this.object.position).sub(this.target),K0.copy(this._eye).normalize(),Pc.copy(this.object.up).normalize(),Wh.crossVectors(Pc,K0).normalize(),Pc.setLength(this._moveCurr.y-this._movePrev.y),Wh.setLength(this._moveCurr.x-this._movePrev.x),zc.copy(Pc.add(Wh)),Xh.crossVectors(zc,this._eye).normalize(),t*=this.rotateSpeed,Mr.setFromAxisAngle(Xh,t),this._eye.applyQuaternion(Mr),this.object.up.applyQuaternion(Mr),this._lastAxis.copy(Xh),this._lastAngle=t):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Mr.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Mr),this.object.up.applyQuaternion(Mr)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===Le.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=t0.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=t0.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(t,i){return Nc.set((t-this.screen.left)/this.screen.width,(i-this.screen.top)/this.screen.height),Nc}_getMouseOnCircle(t,i){return Nc.set((t-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-i))/this.screen.width),Nc}_addPointer(t){this._pointers.push(t)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i].pointerId==t.pointerId){this._pointers.splice(i,1);return}}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ie,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[i.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function SA(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r))}function xA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function yA(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchEnd(r):this._onMouseUp(),this._removePointer(r),this._pointers.length===0&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function MA(r){this._removePointer(r)}function EA(){this.enabled!==!1&&(this.keyState=Le.NONE,window.addEventListener("keydown",this._onKeyDown))}function TA(r){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===Le.NONE&&(r.code===this.keys[Le.ROTATE]&&!this.noRotate?this.keyState=Le.ROTATE:r.code===this.keys[Le.ZOOM]&&!this.noZoom?this.keyState=Le.ZOOM:r.code===this.keys[Le.PAN]&&!this.noPan&&(this.keyState=Le.PAN)))}function bA(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case br.DOLLY:this.state=Le.ZOOM;break;case br.ROTATE:this.state=Le.ROTATE;break;case br.PAN:this.state=Le.PAN;break;default:this.state=Le.NONE}const i=this.keyState!==Le.NONE?this.keyState:this.state;i===Le.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY)),this._movePrev.copy(this._moveCurr)):i===Le.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(r.pageX,r.pageY)),this._zoomEnd.copy(this._zoomStart)):i===Le.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(r.pageX,r.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent($d)}function AA(r){const t=this.keyState!==Le.NONE?this.keyState:this.state;t===Le.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY))):t===Le.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(r.pageX,r.pageY)):t===Le.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(r.pageX,r.pageY))}function RA(){this.state=Le.NONE,this.dispatchEvent(tp)}function CA(r){if(this.enabled!==!1&&this.noZoom!==!0){switch(r.preventDefault(),r.deltaMode){case 2:this._zoomStart.y-=r.deltaY*.025;break;case 1:this._zoomStart.y-=r.deltaY*.01;break;default:this._zoomStart.y-=r.deltaY*25e-5;break}this.dispatchEvent($d),this.dispatchEvent(tp)}}function wA(r){this.enabled!==!1&&r.preventDefault()}function DA(r){switch(this._trackPointer(r),this._pointers.length){case 1:this.state=Le.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=Le.TOUCH_ZOOM_PAN;const t=this._pointers[0].pageX-this._pointers[1].pageX,i=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(t*t+i*i);const s=(this._pointers[0].pageX+this._pointers[1].pageX)/2,l=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(s,l)),this._panEnd.copy(this._panStart);break}this.dispatchEvent($d)}function UA(r){switch(this._trackPointer(r),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY));break;default:const t=this._getSecondPointerPosition(r),i=r.pageX-t.x,s=r.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(i*i+s*s);const l=(r.pageX+t.x)/2,c=(r.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(l,c));break}}function LA(r){switch(this._pointers.length){case 0:this.state=Le.NONE;break;case 1:this.state=Le.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=Le.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==r.pointerId){const i=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(i.x,i.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(tp)}class jo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const NA=new Qd(-1,1,1,-1,0,1);class OA extends ni{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}}const PA=new OA;class ep{constructor(t){this._mesh=new An(PA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,NA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}const zA={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class BA extends jo{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof gi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qd.clone(t.uniforms),this.material=new gi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ep(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Q0 extends jo{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class IA extends jo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class FA{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new ie);this._width=s.width,this._height=s.height,i=new Pi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wa}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new BA(zA),this.copyPass.material.blending=ca,this.clock=new LM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),h.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Q0!==void 0&&(h instanceof Q0?s=!0:h instanceof IA&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const Bc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class HA extends jo{constructor(){super(),this.uniforms=qd.clone(Bc.uniforms),this.material=new EM({name:Bc.name,uniforms:this.uniforms,vertexShader:Bc.vertexShader,fragmentShader:Bc.fragmentShader}),this._fsQuad=new ep(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ae.getTransfer(this._outputColorSpace)===Be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tv?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ev?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nv?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===av?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sv?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===iv&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class GA extends jo{constructor(t,i,s,l={}){super(),this.pixelSize=t,this.scene=i,this.camera=s,this.normalEdgeStrength=l.normalEdgeStrength||.3,this.depthEdgeStrength=l.depthEdgeStrength||.4,this.pixelatedMaterial=this._createPixelatedMaterial(),this._resolution=new ie,this._renderResolution=new ie,this._normalMaterial=new TM,this._beautyRenderTarget=new Pi,this._beautyRenderTarget.texture.minFilter=Bn,this._beautyRenderTarget.texture.magFilter=Bn,this._beautyRenderTarget.texture.type=Wa,this._beautyRenderTarget.depthTexture=new jd,this._normalRenderTarget=new Pi,this._normalRenderTarget.texture.minFilter=Bn,this._normalRenderTarget.texture.magFilter=Bn,this._normalRenderTarget.texture.type=Wa,this._fsQuad=new ep(this.pixelatedMaterial)}dispose(){this._beautyRenderTarget.dispose(),this._normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this._normalMaterial.dispose(),this._fsQuad.dispose()}setSize(t,i){this._resolution.set(t,i),this._renderResolution.set(t/this.pixelSize|0,i/this.pixelSize|0);const{x:s,y:l}=this._renderResolution;this._beautyRenderTarget.setSize(s,l),this._normalRenderTarget.setSize(s,l),this._fsQuad.material.uniforms.resolution.value.set(s,l,1/s,1/l)}setPixelSize(t){this.pixelSize=t,this.setSize(this._resolution.x,this._resolution.y)}render(t,i){const s=this._fsQuad.material.uniforms;s.normalEdgeStrength.value=this.normalEdgeStrength,s.depthEdgeStrength.value=this.depthEdgeStrength,t.setRenderTarget(this._beautyRenderTarget),t.render(this.scene,this.camera);const l=this.scene.overrideMaterial;t.setRenderTarget(this._normalRenderTarget),this.scene.overrideMaterial=this._normalMaterial,t.render(this.scene,this.camera),this.scene.overrideMaterial=l,s.tDiffuse.value=this._beautyRenderTarget.texture,s.tDepth.value=this._beautyRenderTarget.depthTexture,s.tNormal.value=this._normalRenderTarget.texture,this.renderToScreen?t.setRenderTarget(null):(t.setRenderTarget(i),this.clear&&t.clear()),this._fsQuad.render(t)}_createPixelatedMaterial(){return new gi({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new Qe},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
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
			`})}}function VA(){const r=Sn.useRef(null),[t,i]=Sn.useState(50),[s,l]=Sn.useState(45),[c,h]=Sn.useState(0),[d,m]=Sn.useState(0),[p,S]=Sn.useState(0),[_]=Sn.useState(Date.now()),[x,M]=Sn.useState(!1),E=Sn.useRef({w:!1,a:!1,s:!1,d:!1}),[w,y]=Sn.useState({x:0,y:0}),[g,N]=Sn.useState(!1),L=Sn.useRef([]),D=Sn.useRef(null);Sn.useEffect(()=>{const U=r.current,I=new gM;I.background=new be(16777215);const A=new pi(75,U.clientWidth/U.clientHeight,.1,1e3);A.position.set(0,0,50);const R=new gA({antialias:!0});R.setSize(U.clientWidth,U.clientHeight),U.appendChild(R.domElement);const F=new FA(R),W={normalEdgeStrength:2,depthEdgeStrength:1},$=new GA(2,I,A,W);F.addPass($);const ct=new HA;F.addPass(ct);const rt=new vA(A,R.domElement);rt.enableDamping=!0,rt.noPan=!0,rt.noZoom=!0;const O=new Io(20,9),j=new wc({color:0,flatShading:!0,roughness:0,metalness:1}),Y=new MM(O),St=new Av({color:3342336}),Tt=new yM(Y,St);I.add(Tt);const z=new An(O,j);I.add(z);const it=O.attributes.position.array.slice(),At=new Fo(.3,4,4),Lt=new Bo({color:4473924});for(let Ct=0;Ct<200;Ct++){const Rt=new An(At,Lt),ut=100+Math.random()*50,pt=Math.random()*Math.PI*2,wt=Math.acos(2*Math.random()-1);Rt.position.x=ut*Math.sin(wt)*Math.cos(pt),Rt.position.y=ut*Math.cos(wt),Rt.position.z=ut*Math.sin(wt)*Math.sin(pt),I.add(Rt)}const It=new DM(16777215,1);I.add(It);const nt=new wM(16777215,10,0);nt.position.set(0,0,25),I.add(nt);const ht=new Io(1),zt=new wc({color:65280}),Ot=new An(ht,zt);Ot.position.set(0,0,21),I.add(Ot);const jt=new Zd(.2,.2,3,3),ce=new wc({color:16776960}),je=new An(jt,ce);Ot.add(je);const V=(Ct,Rt)=>{const ut=Ct*Math.PI/180,pt=Rt*Math.PI/180,wt=Ot.position.clone().normalize(),Dt=A.up.clone().normalize(),Ut=new q().crossVectors(A.position.clone().normalize().negate(),Dt).normalize(),Xt=Dt.clone().sub(wt.clone().multiplyScalar(Dt.dot(wt))).normalize(),k=Ut.clone().sub(wt.clone().multiplyScalar(Ut.dot(wt))).normalize(),vt=new q;vt.add(wt.clone().multiplyScalar(Math.sin(ut))),vt.add(Xt.clone().multiplyScalar(Math.cos(ut)*Math.cos(pt))),vt.add(k.clone().multiplyScalar(Math.cos(ut)*Math.sin(pt))),vt.normalize();const Et=Ot.worldToLocal(Ot.position.clone().add(vt)).normalize();je.position.copy(Et.clone().multiplyScalar(2)),je.quaternion.setFromUnitVectors(new q(0,1,0),Et)};r.current.updateIndicator=V,V(45,0);const ye=()=>{const Ct=[],Rt=new wc({color:16711680});for(let ut=0;ut<6;ut++){const pt=Math.random()*Math.PI*2,wt=Math.acos(2*Math.random()-1),Dt=new Io(1),Ut=new An(Dt,Rt),Xt=new q(21*Math.sin(wt)*Math.cos(pt),21*Math.cos(wt),21*Math.sin(wt)*Math.sin(pt));Ut.position.copy(Xt),Ut.lookAt(Xt.clone().multiplyScalar(2)),I.add(Ut),Ct.push(Ut)}return Ct},ae=ye();L.current=ae;const te=()=>{const Ct=O.attributes.position;for(let Rt=0;Rt<Ct.count;Rt++)Ct.setXYZ(Rt,it[Rt*3],it[Rt*3+1],it[Rt*3+2]);Ct.needsUpdate=!0,O.computeVertexNormals()};r.current.createTargets=ye,r.current.resetPlanet=te;let Pt=null,we=new q;const kt=[],se=Ct=>{const Rt=Ct.clone().normalize(),ut=O.attributes.position,pt=new q;let wt=0,Dt=0;const Ut=.2;for(let Xt=0;Xt<ut.count;Xt++){pt.fromBufferAttribute(ut,Xt);const k=pt.clone().normalize(),vt=Math.acos(Math.max(-1,Math.min(1,Rt.dot(k))));if(vt<Ut){const Et=1/(vt+.01);wt+=pt.length()*Et,Dt+=Et}}return Dt>0?wt/Dt:20},Ze=(Ct,Rt=2)=>{const ut=z.worldToLocal(Ct.clone()),pt=O.attributes.position,wt=new q;for(let k=0;k<pt.count;k++){wt.fromBufferAttribute(pt,k);const vt=wt.distanceTo(ut),Et=8,Bt=Et*.6;if(vt<Et){const Mt=wt.clone().normalize();if(vt<Bt){const ft=1-vt/Bt,Vt=Rt*ft*ft;wt.sub(Mt.multiplyScalar(Vt))}else{const ft=(vt-Bt)/(Et-Bt),Vt=Rt*.6*(1-ft*ft);wt.add(Mt.multiplyScalar(Vt))}pt.setXYZ(k,wt.x,wt.y,wt.z)}}pt.needsUpdate=!0,O.computeVertexNormals();const Dt=Ot.position.clone().normalize(),Ut=se(Dt)+1;Ot.position.copy(Dt.multiplyScalar(Ut));const Xt=L.current;for(let k=0;k<Xt.length;k++){const vt=Xt[k].position.clone().normalize(),Et=se(vt)+1;Xt[k].position.copy(vt.multiplyScalar(Et))}},We=(Ct,Rt)=>{for(let pt=0;pt<30;pt++){const wt=new Fo(.4,4,4),Dt=new Bo({color:Rt?16711680:16777215}),Ut=new An(wt,Dt);Ut.position.copy(Ct);const Xt=new q((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2).normalize().multiplyScalar(Math.random()*3+1);I.add(Ut),kt.push({mesh:Ut,velocity:Xt,life:1})}},P=(Ct,Rt)=>{Ze(Ct,Rt?2.5:1.5),We(Ct,Rt)},T=(Ct,Rt,ut)=>{Pt&&I.remove(Pt);const pt=new Fo(.5,8,8),wt=new Bo({color:16711680});Pt=new An(pt,wt),Pt.position.copy(Ot.position),I.add(Pt);const Dt=Rt*Math.PI/180,Ut=ut*Math.PI/180,Xt=Ct/100,k=Ot.position.clone().normalize(),vt=A.up.clone().normalize(),Et=new q().crossVectors(A.position.clone().normalize().negate(),vt).normalize(),Bt=vt.clone().sub(k.clone().multiplyScalar(vt.dot(k))).normalize(),Mt=Et.clone().sub(k.clone().multiplyScalar(Et.dot(k))).normalize(),ft=new q;ft.add(k.clone().multiplyScalar(Math.sin(Dt))),ft.add(Bt.clone().multiplyScalar(Math.cos(Dt)*Math.cos(Ut))),ft.add(Mt.clone().multiplyScalar(Math.cos(Dt)*Math.sin(Ut))),ft.normalize(),we.copy(ft.multiplyScalar(Xt))};r.current.launchProjectile=T;const J=E.current,gt=Ct=>{const Rt=Ct.key.toLowerCase();if(Rt in J&&(J[Rt]=!0),Ct.key===" "&&(Ct.preventDefault(),T(r.current?.velocity||50,r.current?.angle||45,r.current?.heading||0)),Rt==="q"){Ct.preventDefault();const ut=((r.current?.heading||0)-5+360)%360;r.current&&(r.current.heading=ut,r.current.updateIndicator?.(r.current.angle||45,ut)),h(ut)}if(Rt==="e"){Ct.preventDefault();const ut=((r.current?.heading||0)+5)%360;r.current&&(r.current.heading=ut,r.current.updateIndicator?.(r.current.angle||45,ut)),h(ut)}},bt=Ct=>{const Rt=Ct.key.toLowerCase();Rt in J&&(J[Rt]=!1)};window.addEventListener("keydown",gt),window.addEventListener("keyup",bt),r.current.velocity=t,r.current.angle=s,r.current.heading=c;const dt=()=>{const Rt=Ot.position.clone(),ut=Rt.clone().normalize(),pt=A.up.clone().normalize(),wt=new q().crossVectors(A.position.clone().normalize().negate(),pt).normalize(),Dt=pt.clone().sub(ut.clone().multiplyScalar(pt.dot(ut))).normalize(),Ut=wt.clone().sub(ut.clone().multiplyScalar(wt.dot(ut))).normalize(),Xt=new q;if(J.w&&Xt.add(Dt.clone().multiplyScalar(.05)),J.s&&Xt.add(Dt.clone().multiplyScalar(-.05)),J.a&&Xt.add(Ut.clone().multiplyScalar(-.05)),J.d&&Xt.add(Ut.clone().multiplyScalar(.05)),Xt.length()>0){Rt.add(Xt);const ft=Rt.clone().normalize(),Vt=se(ft)+1;Ot.position.copy(ft.multiplyScalar(Vt));const De=Ot.position.clone().normalize().multiplyScalar(50);A.position.lerp(De,.1),A.lookAt(0,0,0)}const k=Ot.position.clone().normalize(),vt=A.up.clone().normalize();let Et=vt.clone().sub(k.clone().multiplyScalar(vt.dot(k))).normalize();if(Et.length()<.01){const ft=new q().crossVectors(A.position.clone().normalize().negate(),vt).normalize();Et=ft.clone().sub(k.clone().multiplyScalar(ft.dot(k))).normalize()}const Bt=new q().crossVectors(k,Et).normalize();Et=new q().crossVectors(Bt,k).normalize();const Mt=new Je;Mt.makeBasis(Bt,k,Et),Ot.quaternion.setFromRotationMatrix(Mt)},Zt=()=>{requestAnimationFrame(Zt);const Ct=Date.now()*.001,Rt=25;nt.position.x=Math.cos(Ct/10)*Rt,nt.position.z=Math.sin(Ct/10)*Rt,nt.position.y=Math.sin(Ct/10*.05)*3,dt();for(let ut=kt.length-1;ut>=0;ut--){const pt=kt[ut];pt.mesh.position.add(pt.velocity),pt.velocity.multiplyScalar(.95),pt.life-=.02,pt.mesh.material.opacity=pt.life,pt.mesh.material.transparent=!0;const wt=pt.life;pt.mesh.scale.set(wt,wt,wt),pt.life<=0&&(I.remove(pt.mesh),pt.mesh.geometry.dispose(),pt.mesh.material.dispose(),kt.splice(ut,1))}if(Pt){const ut=Pt.position.clone().normalize().multiplyScalar(-.02);we.add(ut),Pt.position.add(we);let pt=!1;const wt=L.current;for(let Dt=wt.length-1;Dt>=0;Dt--)if(Pt.position.distanceTo(wt[Dt].position)<3){P(Pt.position,!0),I.remove(wt[Dt]),wt.splice(Dt,1),I.remove(Pt),Pt=null,pt=!0,m(Ut=>Ut+1),wt.length===0&&M(!0);break}!pt&&Pt&&Pt.position.length()<20.5&&(P(Pt.position,!1),I.remove(Pt),Pt=null),Pt&&Pt.position.length()>200&&(I.remove(Pt),Pt=null)}rt.update(),F.render()};Zt();const Nt=()=>{A.aspect=U.clientWidth/U.clientHeight,A.updateProjectionMatrix(),R.setSize(U.clientWidth,U.clientHeight),F.setSize(U.clientWidth,U.clientHeight)};return window.addEventListener("resize",Nt),()=>{window.removeEventListener("resize",Nt),window.removeEventListener("keydown",gt),window.removeEventListener("keyup",bt),kt.forEach(Ct=>{I.remove(Ct.mesh),Ct.mesh.geometry.dispose(),Ct.mesh.material.dispose()}),U.removeChild(R.domElement)}},[]);const H=()=>{r.current&&r.current.launchProjectile&&(r.current.launchProjectile(t,s,c),S(U=>U+1))};Sn.useEffect(()=>{r.current&&(r.current.velocity=t,r.current.angle=s,r.current.heading=c)},[t,s,c]),Sn.useEffect(()=>{r.current&&r.current.updateIndicator&&r.current.updateIndicator(s,c)},[s,c]),Sn.useEffect(()=>{const U=D.current;if(!U)return;const I=F=>{F.preventDefault(),N(!0);const W=F.touches[0],$=U.getBoundingClientRect(),ct=$.width/2,rt=$.height/2,O=W.clientX-$.left-ct,j=W.clientY-$.top-rt,Y=Math.sqrt(O*O+j*j),St=40,Tt=Y>St?O/Y*St:O,z=Y>St?j/Y*St:j;y({x:Tt,y:z}),E.current.w=z<-15,E.current.s=z>15,E.current.a=Tt<-15,E.current.d=Tt>15},A=F=>{F.preventDefault();const W=F.touches[0],$=U.getBoundingClientRect(),ct=$.width/2,rt=$.height/2,O=W.clientX-$.left-ct,j=W.clientY-$.top-rt,Y=Math.sqrt(O*O+j*j),St=40,Tt=Y>St?O/Y*St:O,z=Y>St?j/Y*St:j;y({x:Tt,y:z}),E.current.w=z<-15,E.current.s=z>15,E.current.a=Tt<-15,E.current.d=Tt>15},R=F=>{F.preventDefault(),N(!1),y({x:0,y:0}),E.current.w=!1,E.current.s=!1,E.current.a=!1,E.current.d=!1};return U.addEventListener("touchstart",I,{passive:!1}),U.addEventListener("touchmove",A,{passive:!1}),U.addEventListener("touchend",R,{passive:!1}),()=>{U.removeEventListener("touchstart",I),U.removeEventListener("touchmove",A),U.removeEventListener("touchend",R)}},[]);const B=()=>{if(r.current&&r.current.createTargets&&r.current.resetPlanet){r.current.resetPlanet(),L.current.forEach(I=>{const A=r.current.children[0];A&&A.remove(I)});const U=r.current.createTargets();L.current=U,m(0),S(0),M(!1)}};return Xe.jsxs("div",{children:[Xe.jsx("div",{ref:r,style:{width:"100%",height:"100vh"}}),Xe.jsxs("div",{style:{position:"absolute",top:"0px",right:"0px",background:"rgba(0,0,0,0.5)",color:"white",padding:"10px",fontSize:"24px",fontWeight:"bold"},children:["Score: ",d*100]}),Xe.jsxs("div",{style:{position:"absolute",bottom:"0px",right:"0px",left:"0px",maxWidth:"60%",marginLeft:"auto",background:"rgba(0,0,0,0.5)",color:"white",padding:"10px"},children:[Xe.jsxs("div",{children:[Xe.jsxs("label",{children:["Velocity: ",t]}),Xe.jsx("input",{type:"range",min:"10",max:"100",value:t,onChange:U=>i(Number(U.target.value)),style:{width:"100%"}})]}),Xe.jsxs("div",{children:[Xe.jsxs("label",{children:["Angle: ",s]}),Xe.jsx("input",{type:"range",min:"0",max:"90",value:s,onChange:U=>l(Number(U.target.value)),style:{width:"100%"}})]}),Xe.jsxs("div",{children:[Xe.jsxs("label",{children:["Heading: ",c]}),Xe.jsx("input",{type:"range",min:"0",max:"359",value:c,onChange:U=>h(Number(U.target.value)),style:{width:"100%"}})]}),Xe.jsx("button",{onClick:H,style:{width:"100%",padding:"10px",marginTop:"10px"},children:"Launch"})]}),x&&Xe.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0,0,0,0.9)",color:"white",padding:"40px",borderRadius:"10px",border:"3px solid white",textAlign:"center",zIndex:1e3},children:[Xe.jsx("h1",{style:{fontSize:"48px",margin:"0 0 20px 0"},children:"VICTORY!"}),Xe.jsxs("p",{style:{fontSize:"20px",margin:"0 0 10px 0"},children:["Kills: ",d," × 100 = ",d*100]}),Xe.jsxs("p",{style:{fontSize:"20px",margin:"0 0 10px 0"},children:["Shots: ",p," × -30 = ",p*-30]}),Xe.jsxs("p",{style:{fontSize:"20px",margin:"0 0 20px 0"},children:["Time: ",Math.floor((Date.now()-_)/1e3),"s × -1 = -",Math.floor((Date.now()-_)/1e3)]}),Xe.jsxs("p",{style:{fontSize:"28px",margin:"0 0 30px 0",fontWeight:"bold",borderTop:"2px solid white",paddingTop:"10px"},children:["Final Score: ",d*100-p*30-Math.floor((Date.now()-_)/1e3)]}),Xe.jsx("button",{onClick:B,style:{fontSize:"24px",padding:"15px 30px",background:"white",color:"black",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"},children:"PLAY AGAIN"})]}),Xe.jsxs("div",{ref:D,style:{position:"absolute",bottom:"0px",left:"0px",width:"120px",height:"120px"},onMouseDown:U=>{N(!0);const I=U.currentTarget.getBoundingClientRect(),A=I.width/2,R=I.height/2,F=U.clientX-I.left-A,W=U.clientY-I.top-R,$=Math.sqrt(F*F+W*W),ct=40,rt=$>ct?F/$*ct:F,O=$>ct?W/$*ct:W;y({x:rt,y:O}),E.current.w=O<-15,E.current.s=O>15,E.current.a=rt<-15,E.current.d=rt>15},onMouseMove:U=>{if(!g)return;const I=U.currentTarget.getBoundingClientRect(),A=I.width/2,R=I.height/2,F=U.clientX-I.left-A,W=U.clientY-I.top-R,$=Math.sqrt(F*F+W*W),ct=40,rt=$>ct?F/$*ct:F,O=$>ct?W/$*ct:W;y({x:rt,y:O}),E.current.w=O<-15,E.current.s=O>15,E.current.a=rt<-15,E.current.d=rt>15},onMouseUp:()=>{N(!1),y({x:0,y:0}),E.current.w=!1,E.current.s=!1,E.current.a=!1,E.current.d=!1},onMouseLeave:()=>{g&&(N(!1),y({x:0,y:0}),E.current.w=!1,E.current.s=!1,E.current.a=!1,E.current.d=!1)},children:[Xe.jsx("div",{style:{position:"absolute",width:"120px",height:"120px",borderRadius:"50%",background:"rgba(0,0,0,0.3)",border:"3px solid rgba(255,255,255,0.5)"}}),Xe.jsx("div",{style:{position:"absolute",width:"50px",height:"50px",borderRadius:"50%",background:"rgba(255,255,255,0.7)",border:"2px solid white",left:`${60+w.x-25}px`,top:`${60+w.y-25}px`,transition:g?"none":"all 0.2s ease-out",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"}})]})]})}jx.createRoot(document.getElementById("root")).render(Xe.jsx(Sn.StrictMode,{children:Xe.jsx(VA,{})}));
