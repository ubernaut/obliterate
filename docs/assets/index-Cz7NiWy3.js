(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var eh={exports:{}},Ao={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function Nx(){if(U_)return Ao;U_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var L_;function Ox(){return L_||(L_=1,eh.exports=Nx()),eh.exports}var We=Ox(),nh={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function Px(){if(N_)return oe;N_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function M(z){return z===null||typeof z!="object"?null:(z=x&&z[x]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function g(z,at,bt){this.props=z,this.context=at,this.refs=y,this.updater=bt||E}g.prototype.isReactComponent={},g.prototype.setState=function(z,at){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,at,"setState")},g.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function N(){}N.prototype=g.prototype;function L(z,at,bt){this.props=z,this.context=at,this.refs=y,this.updater=bt||E}var D=L.prototype=new N;D.constructor=L,w(D,g.prototype),D.isPureReactComponent=!0;var H=Array.isArray;function I(){}var U={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function A(z,at,bt){var Ut=bt.ref;return{$$typeof:o,type:z,key:at,ref:Ut!==void 0?Ut:null,props:bt}}function R(z,at){return A(z.type,at,z.props)}function F(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function Y(z){var at={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(bt){return at[bt]})}var J=/\/+/g;function ut(z,at){return typeof z=="object"&&z!==null&&z.key!=null?Y(""+z.key):at.toString(36)}function ot(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(I,I):(z.status="pending",z.then(function(at){z.status==="pending"&&(z.status="fulfilled",z.value=at)},function(at){z.status==="pending"&&(z.status="rejected",z.reason=at)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function P(z,at,bt,Ut,Pt){var st=typeof z;(st==="undefined"||st==="boolean")&&(z=null);var ft=!1;if(z===null)ft=!0;else switch(st){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(z.$$typeof){case o:case t:ft=!0;break;case S:return ft=z._init,P(ft(z._payload),at,bt,Ut,Pt)}}if(ft)return Pt=Pt(z),ft=Ut===""?"."+ut(z,0):Ut,H(Pt)?(bt="",ft!=null&&(bt=ft.replace(J,"$&/")+"/"),P(Pt,at,bt,"",function(Zt){return Zt})):Pt!=null&&(F(Pt)&&(Pt=R(Pt,bt+(Pt.key==null||z&&z.key===Pt.key?"":(""+Pt.key).replace(J,"$&/")+"/")+ft)),at.push(Pt)),1;ft=0;var wt=Ut===""?".":Ut+":";if(H(z))for(var Ht=0;Ht<z.length;Ht++)Ut=z[Ht],st=wt+ut(Ut,Ht),ft+=P(Ut,at,bt,st,Pt);else if(Ht=M(z),typeof Ht=="function")for(z=Ht.call(z),Ht=0;!(Ut=z.next()).done;)Ut=Ut.value,st=wt+ut(Ut,Ht++),ft+=P(Ut,at,bt,st,Pt);else if(st==="object"){if(typeof z.then=="function")return P(ot(z),at,bt,Ut,Pt);throw at=String(z),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ft}function j(z,at,bt){if(z==null)return z;var Ut=[],Pt=0;return P(z,Ut,"","",function(st){return at.call(bt,st,Pt++)}),Ut}function q(z){if(z._status===-1){var at=z._result;at=at(),at.then(function(bt){(z._status===0||z._status===-1)&&(z._status=1,z._result=bt)},function(bt){(z._status===0||z._status===-1)&&(z._status=2,z._result=bt)}),z._status===-1&&(z._status=0,z._result=at)}if(z._status===1)return z._result.default;throw z._result}var gt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Mt={map:j,forEach:function(z,at,bt){j(z,function(){at.apply(this,arguments)},bt)},count:function(z){var at=0;return j(z,function(){at++}),at},toArray:function(z){return j(z,function(at){return at})||[]},only:function(z){if(!F(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return oe.Activity=_,oe.Children=Mt,oe.Component=g,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=L,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,oe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return U.H.useMemoCache(z)}},oe.cache=function(z){return function(){return z.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(z,at,bt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ut=w({},z.props),Pt=z.key;if(at!=null)for(st in at.key!==void 0&&(Pt=""+at.key),at)!B.call(at,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&at.ref===void 0||(Ut[st]=at[st]);var st=arguments.length-2;if(st===1)Ut.children=bt;else if(1<st){for(var ft=Array(st),wt=0;wt<st;wt++)ft[wt]=arguments[wt+2];Ut.children=ft}return A(z.type,Pt,Ut)},oe.createContext=function(z){return z={$$typeof:h,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},oe.createElement=function(z,at,bt){var Ut,Pt={},st=null;if(at!=null)for(Ut in at.key!==void 0&&(st=""+at.key),at)B.call(at,Ut)&&Ut!=="key"&&Ut!=="__self"&&Ut!=="__source"&&(Pt[Ut]=at[Ut]);var ft=arguments.length-2;if(ft===1)Pt.children=bt;else if(1<ft){for(var wt=Array(ft),Ht=0;Ht<ft;Ht++)wt[Ht]=arguments[Ht+2];Pt.children=wt}if(z&&z.defaultProps)for(Ut in ft=z.defaultProps,ft)Pt[Ut]===void 0&&(Pt[Ut]=ft[Ut]);return A(z,st,Pt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(z){return{$$typeof:d,render:z}},oe.isValidElement=F,oe.lazy=function(z){return{$$typeof:S,_payload:{_status:-1,_result:z},_init:q}},oe.memo=function(z,at){return{$$typeof:p,type:z,compare:at===void 0?null:at}},oe.startTransition=function(z){var at=U.T,bt={};U.T=bt;try{var Ut=z(),Pt=U.S;Pt!==null&&Pt(bt,Ut),typeof Ut=="object"&&Ut!==null&&typeof Ut.then=="function"&&Ut.then(I,gt)}catch(st){gt(st)}finally{at!==null&&bt.types!==null&&(at.types=bt.types),U.T=at}},oe.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},oe.use=function(z){return U.H.use(z)},oe.useActionState=function(z,at,bt){return U.H.useActionState(z,at,bt)},oe.useCallback=function(z,at){return U.H.useCallback(z,at)},oe.useContext=function(z){return U.H.useContext(z)},oe.useDebugValue=function(){},oe.useDeferredValue=function(z,at){return U.H.useDeferredValue(z,at)},oe.useEffect=function(z,at){return U.H.useEffect(z,at)},oe.useEffectEvent=function(z){return U.H.useEffectEvent(z)},oe.useId=function(){return U.H.useId()},oe.useImperativeHandle=function(z,at,bt){return U.H.useImperativeHandle(z,at,bt)},oe.useInsertionEffect=function(z,at){return U.H.useInsertionEffect(z,at)},oe.useLayoutEffect=function(z,at){return U.H.useLayoutEffect(z,at)},oe.useMemo=function(z,at){return U.H.useMemo(z,at)},oe.useOptimistic=function(z,at){return U.H.useOptimistic(z,at)},oe.useReducer=function(z,at,bt){return U.H.useReducer(z,at,bt)},oe.useRef=function(z){return U.H.useRef(z)},oe.useState=function(z){return U.H.useState(z)},oe.useSyncExternalStore=function(z,at,bt){return U.H.useSyncExternalStore(z,at,bt)},oe.useTransition=function(){return U.H.useTransition()},oe.version="19.2.0",oe}var O_;function Dd(){return O_||(O_=1,nh.exports=Px()),nh.exports}var An=Dd(),ih={exports:{}},Ro={},ah={exports:{}},sh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function zx(){return P_||(P_=1,(function(o){function t(P,j){var q=P.length;P.push(j);t:for(;0<q;){var gt=q-1>>>1,Mt=P[gt];if(0<l(Mt,j))P[gt]=j,P[q]=Mt,q=gt;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var j=P[0],q=P.pop();if(q!==j){P[0]=q;t:for(var gt=0,Mt=P.length,z=Mt>>>1;gt<z;){var at=2*(gt+1)-1,bt=P[at],Ut=at+1,Pt=P[Ut];if(0>l(bt,q))Ut<Mt&&0>l(Pt,bt)?(P[gt]=Pt,P[Ut]=q,gt=Ut):(P[gt]=bt,P[at]=q,gt=at);else if(Ut<Mt&&0>l(Pt,q))P[gt]=Pt,P[Ut]=q,gt=Ut;else break t}}return j}function l(P,j){var q=P.sortIndex-j.sortIndex;return q!==0?q:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,_=null,x=3,M=!1,E=!1,w=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(P){for(var j=i(p);j!==null;){if(j.callback===null)s(p);else if(j.startTime<=P)s(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function H(P){if(w=!1,D(P),!E)if(i(m)!==null)E=!0,I||(I=!0,Y());else{var j=i(p);j!==null&&ot(H,j.startTime-P)}}var I=!1,U=-1,B=5,A=-1;function R(){return y?!0:!(o.unstable_now()-A<B)}function F(){if(y=!1,I){var P=o.unstable_now();A=P;var j=!0;try{t:{E=!1,w&&(w=!1,N(U),U=-1),M=!0;var q=x;try{e:{for(D(P),_=i(m);_!==null&&!(_.expirationTime>P&&R());){var gt=_.callback;if(typeof gt=="function"){_.callback=null,x=_.priorityLevel;var Mt=gt(_.expirationTime<=P);if(P=o.unstable_now(),typeof Mt=="function"){_.callback=Mt,D(P),j=!0;break e}_===i(m)&&s(m),D(P)}else s(m);_=i(m)}if(_!==null)j=!0;else{var z=i(p);z!==null&&ot(H,z.startTime-P),j=!1}}break t}finally{_=null,x=q,M=!1}j=void 0}}finally{j?Y():I=!1}}}var Y;if(typeof L=="function")Y=function(){L(F)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ut=J.port2;J.port1.onmessage=F,Y=function(){ut.postMessage(null)}}else Y=function(){g(F,0)};function ot(P,j){U=g(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(P){switch(x){case 1:case 2:case 3:var j=3;break;default:j=x}var q=x;x=j;try{return P()}finally{x=q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=x;x=P;try{return j()}finally{x=q}},o.unstable_scheduleCallback=function(P,j,q){var gt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?gt+q:gt):q=gt,P){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=q+Mt,P={id:S++,callback:j,priorityLevel:P,startTime:q,expirationTime:Mt,sortIndex:-1},q>gt?(P.sortIndex=q,t(p,P),i(m)===null&&P===i(p)&&(w?(N(U),U=-1):w=!0,ot(H,q-gt))):(P.sortIndex=Mt,t(m,P),E||M||(E=!0,I||(I=!0,Y()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var j=x;return function(){var q=x;x=j;try{return P.apply(this,arguments)}finally{x=q}}}})(sh)),sh}var z_;function Ix(){return z_||(z_=1,ah.exports=zx()),ah.exports}var rh={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function Bx(){if(I_)return Dn;I_=1;var o=Dd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,S)},Dn.flushSync=function(m){var p=h.T,S=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=S,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,_=d(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:M}):S==="script"&&s.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,_=d(S,p.crossOrigin);s.d.L(m,S,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},Dn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Dn.version="19.2.0",Dn}var B_;function Fx(){if(B_)return rh.exports;B_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),rh.exports=Bx(),rh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function Hx(){if(F_)return Ro;F_=1;var o=Ix(),t=Dd(),i=Fx();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,b=u.child;b;){if(b===a){v=!0,a=u,r=f;break}if(b===r){v=!0,r=u,a=f;break}b=b.sibling}if(!v){for(b=f.child;b;){if(b===a){v=!0,a=f,r=u;break}if(b===r){v=!0,r=f,a=u;break}b=b.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case I:return"SuspenseList";case A:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:ut(e.type)||"Memo";case B:n=e._payload,e=e._init;try{return ut(e(n))}catch{}}return null}var ot=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},gt=[],Mt=-1;function z(e){return{current:e}}function at(e){0>Mt||(e.current=gt[Mt],gt[Mt]=null,Mt--)}function bt(e,n){Mt++,gt[Mt]=e.current,e.current=n}var Ut=z(null),Pt=z(null),st=z(null),ft=z(null);function wt(e,n){switch(bt(st,n),bt(Pt,e),bt(Ut,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?t_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=t_(n),e=e_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(Ut),bt(Ut,e)}function Ht(){at(Ut),at(Pt),at(st)}function Zt(e){e.memoizedState!==null&&bt(ft,e);var n=Ut.current,a=e_(n,e.type);n!==a&&(bt(Pt,e),bt(Ut,a))}function le(e){Pt.current===e&&(at(Ut),at(Pt)),ft.current===e&&(at(ft),Mo._currentValue=q)}var Ke,V;function Me(e){if(Ke===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ke=n&&n[1]||"",V=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ke+e+V}var Gt=!1;function $t(e,n){if(!e||Gt)return"";Gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var it=ct}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ct){it=ct}e.call(_t.prototype)}}else{try{throw Error()}catch(ct){it=ct}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&it&&typeof ct.stack=="string")return[ct.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],b=f[1];if(v&&b){var G=v.split(`
`),nt=b.split(`
`);for(u=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(r===G.length||u===nt.length)for(r=G.length-1,u=nt.length-1;1<=r&&0<=u&&G[r]!==nt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(G[r]!==nt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||G[r]!==nt[u]){var ht=`
`+G[r].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=r&&0<=u);break}}}finally{Gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Me(a):""}function kt(e,n){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return e.child!==n&&n!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return Me("Activity");default:return""}}function Ne(e){try{var n="",a=null;do n+=kt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Wt=Object.prototype.hasOwnProperty,se=o.unstable_scheduleCallback,je=o.unstable_cancelCallback,Re=o.unstable_shouldYield,O=o.unstable_requestPaint,T=o.unstable_now,$=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Et=o.unstable_UserBlockingPriority,et=o.unstable_NormalPriority,Nt=o.unstable_LowPriority,St=o.unstable_IdlePriority,At=o.log,Tt=o.unstable_setDisableYieldValue,pt=null,xt=null;function zt(e){if(typeof At=="function"&&Tt(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(pt,e)}catch{}}var Dt=Math.clz32?Math.clz32:X,Lt=Math.log,ee=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Lt(e)/ee|0)|0}var Rt=256,Ot=262144,Vt=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?u=Ct(r):(v&=b,v!==0?u=Ct(v):a||(a=b&~e,a!==0&&(u=Ct(a))))):(b=r&~f,b!==0?u=Ct(b):v!==0?u=Ct(v):a||(a=r&~e,a!==0&&(u=Ct(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Xt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function si(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-Dt(a),_t=1<<ht;b[ht]=0,G[ht]=-1;var it=nt[ht];if(it!==null)for(nt[ht]=null,ht=0;ht<it.length;ht++){var ct=it[ht];ct!==null&&(ct.lane&=-536870913)}a&=~_t}r!==0&&Pr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Pr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Dt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ai(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Dt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Cs(e,n){var a=n&-n;return a=(a&42)!==0?1:ws(a),(a&(e.suspendedLanes|n))!==0?0:a}function ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ds(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ja(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:T_(e.type))}function zr(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var jn=Math.random().toString(36).slice(2),rn="__reactFiber$"+jn,xn="__reactProps$"+jn,da="__reactContainer$"+jn,Ir="__reactEvents$"+jn,jc="__reactListeners$"+jn,Zc="__reactHandles$"+jn,jo="__reactResources$"+jn,Za="__reactMarker$"+jn;function C(e){delete e[rn],delete e[xn],delete e[Ir],delete e[jc],delete e[Zc]}function Z(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[da]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=l_(e);e!==null;){if(a=e[rn])return a;e=l_(e)}return n}e=a,a=e.parentNode}return null}function rt(e){if(e=e[rn]||e[da]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function lt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Q(e){var n=e[jo];return n||(n=e[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function yt(e){e[Za]=!0}var It=new Set,qt={};function Ft(e,n){Qt(e,n),Qt(e+"Capture",n)}function Qt(e,n){for(qt[e]=n,e=0;e<n.length;e++)It.add(n[e])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},de={};function Ue(e){return Wt.call(de,e)?!0:Wt.call(Jt,e)?!1:ae.test(e)?de[e]=!0:(Jt[e]=!0,!1)}function Ve(e,n,a){if(Ue(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Le(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function pe(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Te(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yn(e){if(!e._valueTracker){var n=Xe(e)?"checked":"value";e._valueTracker=Te(e,n,""+e[n])}}function Fi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Xe(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ka=/[\n"\\]/g;function ve(e){return e.replace(Ka,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wn(e,n,a,r,u,f,v,b){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+jt(n)):e.value!==""+jt(n)&&(e.value=""+jt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?hn(e,v,jt(n)):a!=null?hn(e,v,jt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+jt(b):e.removeAttribute("name")}function On(e,n,a,r,u,f,v,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){yn(e);return}a=a!=null?""+jt(a):"",n=n!=null?""+jt(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),yn(e)}function hn(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function en(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Us(e,n,a){if(n!=null&&(n=""+jt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+jt(a):""}function Ri(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ot(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=jt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),yn(e)}function Ls(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Cv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Cv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Jd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Qd(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Qd(e,f,n[f])}function Kc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return Dv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Hi(){}var Qc=null;function Jc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ns=null,Os=null;function $d(e){var n=rt(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(wn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[xn]||null;if(!u)throw Error(s(90));wn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Fi(r)}break t;case"textarea":Us(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&en(e,!!a.multiple,n,!1)}}}var $c=!1;function tp(e,n,a){if($c)return e(n,a);$c=!0;try{var r=e(n);return r}finally{if($c=!1,(Ns!==null||Os!==null)&&(zl(),Ns&&(n=Ns,e=Os,Os=Ns=null,$d(n),e)))for(n=0;n<e.length;n++)$d(e[n])}}function Br(e,n){var a=e.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Gi)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){tu=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{tu=!1}var pa=null,eu=null,Ko=null;function ep(){if(Ko)return Ko;var e,n=eu,a=n.length,r,u="value"in pa?pa.value:pa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return Ko=u.slice(e,1<r?1-r:void 0)}function Qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function np(){return!1}function Bn(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jo:np,this.isPropagationStopped=np,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Bn(Qa),Hr=_({},Qa,{view:0,detail:0}),Uv=Bn(Hr),nu,iu,Gr,tl=_({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(nu=e.screenX-Gr.screenX,iu=e.screenY-Gr.screenY):iu=nu=0,Gr=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),ip=Bn(tl),Lv=_({},tl,{dataTransfer:0}),Nv=Bn(Lv),Ov=_({},Hr,{relatedTarget:0}),au=Bn(Ov),Pv=_({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=Bn(Pv),Iv=_({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bv=Bn(Iv),Fv=_({},Qa,{data:0}),ap=Bn(Fv),Hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Vv[e])?!!n[e]:!1}function su(){return kv}var Xv=_({},Hr,{key:function(e){if(e.key){var n=Hv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wv=Bn(Xv),Yv=_({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=Bn(Yv),qv=_({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),jv=Bn(qv),Zv=_({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=Bn(Zv),Qv=_({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jv=Bn(Qv),$v=_({},Qa,{newState:0,oldState:0}),tS=Bn($v),eS=[9,13,27,32],ru=Gi&&"CompositionEvent"in window,Vr=null;Gi&&"documentMode"in document&&(Vr=document.documentMode);var nS=Gi&&"TextEvent"in window&&!Vr,rp=Gi&&(!ru||Vr&&8<Vr&&11>=Vr),op=" ",lp=!1;function cp(e,n){switch(e){case"keyup":return eS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ps=!1;function iS(e,n){switch(e){case"compositionend":return up(n);case"keypress":return n.which!==32?null:(lp=!0,op);case"textInput":return e=n.data,e===op&&lp?null:e;default:return null}}function aS(e,n){if(Ps)return e==="compositionend"||!ru&&cp(e,n)?(e=ep(),Ko=eu=pa=null,Ps=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return rp&&n.locale!=="ko"?null:n.data;default:return null}}var sS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!sS[e.type]:n==="textarea"}function hp(e,n,a,r){Ns?Os?Os.push(r):Os=[r]:Ns=r,n=kl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var kr=null,Xr=null;function rS(e){jg(e,0)}function el(e){var n=lt(e);if(Fi(n))return e}function dp(e,n){if(e==="change")return n}var pp=!1;if(Gi){var ou;if(Gi){var lu="oninput"in document;if(!lu){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),lu=typeof mp.oninput=="function"}ou=lu}else ou=!1;pp=ou&&(!document.documentMode||9<document.documentMode)}function gp(){kr&&(kr.detachEvent("onpropertychange",_p),Xr=kr=null)}function _p(e){if(e.propertyName==="value"&&el(Xr)){var n=[];hp(n,Xr,e,Jc(e)),tp(rS,n)}}function oS(e,n,a){e==="focusin"?(gp(),kr=n,Xr=a,kr.attachEvent("onpropertychange",_p)):e==="focusout"&&gp()}function lS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(Xr)}function cS(e,n){if(e==="click")return el(n)}function uS(e,n){if(e==="input"||e==="change")return el(n)}function fS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:fS;function Wr(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Wt.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function vp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sp(e,n){var a=vp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=vp(a)}}function xp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?xp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var hS=Gi&&"documentMode"in document&&11>=document.documentMode,zs=null,uu=null,Yr=null,fu=!1;function Mp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fu||zs==null||zs!==_n(r)||(r=zs,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&Wr(Yr,r)||(Yr=r,r=kl(uu,"onSelect"),0<r.length&&(n=new $o("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=zs)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Is={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},hu={},Ep={};Gi&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function $a(e){if(hu[e])return hu[e];if(!Is[e])return e;var n=Is[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ep)return hu[e]=n[a];return e}var Tp=$a("animationend"),bp=$a("animationiteration"),Ap=$a("animationstart"),dS=$a("transitionrun"),pS=$a("transitionstart"),mS=$a("transitioncancel"),Rp=$a("transitionend"),Cp=new Map,du="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");du.push("scrollEnd");function Si(e,n){Cp.set(e,n),Ft(n,[e])}var nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],Bs=0,pu=0;function il(){for(var e=Bs,n=pu=Bs=0;n<e;){var a=ri[n];ri[n++]=null;var r=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&wp(a,u,f)}}function al(e,n,a,r){ri[Bs++]=e,ri[Bs++]=n,ri[Bs++]=a,ri[Bs++]=r,pu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function mu(e,n,a,r){return al(e,n,a,r),sl(e)}function ts(e,n){return al(e,null,null,n),sl(e)}function wp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Dt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function sl(e){if(50<mo)throw mo=0,bf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fs={};function gS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,r){return new gS(e,n,a,r)}function gu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Dp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function rl(e,n,a,r,u,f){var v=0;if(r=e,typeof e=="function")gu(e)&&(v=1);else if(typeof e=="string")v=yx(e,a,Ut.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case A:return e=Kn(31,a,n,u),e.elementType=A,e.lanes=f,e;case w:return es(a.children,u,f,n);case y:v=8,u|=24;break;case g:return e=Kn(12,a,n,u|2),e.elementType=g,e.lanes=f,e;case H:return e=Kn(13,a,n,u),e.elementType=H,e.lanes=f,e;case I:return e=Kn(19,a,n,u),e.elementType=I,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break t;case N:v=9;break t;case D:v=11;break t;case U:v=14;break t;case B:v=16,r=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Kn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function es(e,n,a,r){return e=Kn(7,e,r,n),e.lanes=a,e}function _u(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function Up(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function vu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Lp=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=Lp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ne(n)},Lp.set(e,n),n)}return{value:e,source:n,stack:Ne(n)}}var Hs=[],Gs=0,ol=null,qr=0,li=[],ci=0,ma=null,Ci=1,wi="";function ki(e,n){Hs[Gs++]=qr,Hs[Gs++]=ol,ol=e,qr=n}function Np(e,n,a){li[ci++]=Ci,li[ci++]=wi,li[ci++]=ma,ma=e;var r=Ci;e=wi;var u=32-Dt(r)-1;r&=~(1<<u),a+=1;var f=32-Dt(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Ci=1<<32-Dt(n)+u|a<<u|r,wi=f+e}else Ci=1<<f|a<<u|r,wi=e}function Su(e){e.return!==null&&(ki(e,1),Np(e,1,0))}function xu(e){for(;e===ol;)ol=Hs[--Gs],Hs[Gs]=null,qr=Hs[--Gs],Hs[Gs]=null;for(;e===ma;)ma=li[--ci],li[ci]=null,wi=li[--ci],li[ci]=null,Ci=li[--ci],li[ci]=null}function Op(e,n){li[ci++]=Ci,li[ci++]=wi,li[ci++]=ma,Ci=n.id,wi=n.overflow,ma=e}var Mn=null,Ye=null,ye=!1,ga=null,ui=!1,yu=Error(s(519));function _a(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jr(oi(n,e)),yu}function Pp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[xn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)ge(_o[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),On(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Ri(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Jg(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||_a(e,!0)}function zp(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Mn=Mn.return}}function Vs(e){if(e!==Mn)return!1;if(!ye)return zp(e),ye=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Hf(e.type,e.memoizedProps)),a=!a),a&&Ye&&_a(e),zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=o_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ye=o_(e)}else n===27?(n=Ye,Ua(e.type)?(e=Wf,Wf=null,Ye=e):Ye=n):Ye=Mn?hi(e.stateNode.nextSibling):null;return!0}function ns(){Ye=Mn=null,ye=!1}function Mu(){var e=ga;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ga=null),e}function jr(e){ga===null?ga=[e]:ga.push(e)}var Eu=z(null),is=null,Xi=null;function va(e,n,a){bt(Eu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Eu.current,at(Eu)}function Tu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function bu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var G=0;G<n.length;G++)if(b.context===n[G]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Tu(f.return,a,e),r||(v=null);break t}f=b.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Tu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function ks(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var b=u.type;Zn(u.pendingProps.value,v.value)||(e!==null?e.push(b):e=[b])}}else if(u===ft.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&bu(n,e,a,r),n.flags|=262144}function ll(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function as(e){is=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return Ip(is,e)}function cl(e,n){return is===null&&as(e),Ip(e,n)}function Ip(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(s(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var _S=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},vS=o.unstable_scheduleCallback,SS=o.unstable_NormalPriority,on={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Au(){return{controller:new _S,data:new Map,refCount:0}}function Zr(e){e.refCount--,e.refCount===0&&vS(SS,function(){e.controller.abort()})}var Kr=null,Ru=0,Xs=0,Ws=null;function xS(e,n){if(Kr===null){var a=Kr=[];Ru=0,Xs=Uf(),Ws={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ru++,n.then(Bp,Bp),n}function Bp(){if(--Ru===0&&Kr!==null){Ws!==null&&(Ws.status="fulfilled");var e=Kr;Kr=null,Xs=0,Ws=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Fp=P.S;P.S=function(e,n){Mg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&xS(e,n),Fp!==null&&Fp(e,n)};var ss=z(null);function Cu(){var e=ss.current;return e!==null?e:ke.pooledCache}function ul(e,n){n===null?bt(ss,ss.current):bt(ss,n.pool)}function Hp(){var e=Cu();return e===null?null:{parent:on._currentValue,pool:e}}var Ys=Error(s(460)),wu=Error(s(474)),fl=Error(s(542)),hl={then:function(){}};function Gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xp(e),e;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Xp(e),e}throw os=n,Ys}}function rs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(os=a,Ys):a}}var os=null;function kp(){if(os===null)throw Error(s(459));var e=os;return os=null,e}function Xp(e){if(e===Ys||e===fl)throw Error(s(483))}var qs=null,Qr=0;function dl(e){var n=Qr;return Qr+=1,qs===null&&(qs=[]),Vp(qs,e,n)}function Jr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Wp(e){function n(K,k){if(e){var tt=K.deletions;tt===null?(K.deletions=[k],K.flags|=16):tt.push(k)}}function a(K,k){if(!e)return null;for(;k!==null;)n(K,k),k=k.sibling;return null}function r(K){for(var k=new Map;K!==null;)K.key!==null?k.set(K.key,K):k.set(K.index,K),K=K.sibling;return k}function u(K,k){return K=Vi(K,k),K.index=0,K.sibling=null,K}function f(K,k,tt){return K.index=tt,e?(tt=K.alternate,tt!==null?(tt=tt.index,tt<k?(K.flags|=67108866,k):tt):(K.flags|=67108866,k)):(K.flags|=1048576,k)}function v(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function b(K,k,tt,mt){return k===null||k.tag!==6?(k=_u(tt,K.mode,mt),k.return=K,k):(k=u(k,tt),k.return=K,k)}function G(K,k,tt,mt){var te=tt.type;return te===w?ht(K,k,tt.props.children,mt,tt.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===B&&rs(te)===k.type)?(k=u(k,tt.props),Jr(k,tt),k.return=K,k):(k=rl(tt.type,tt.key,tt.props,null,K.mode,mt),Jr(k,tt),k.return=K,k)}function nt(K,k,tt,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=vu(tt,K.mode,mt),k.return=K,k):(k=u(k,tt.children||[]),k.return=K,k)}function ht(K,k,tt,mt,te){return k===null||k.tag!==7?(k=es(tt,K.mode,mt,te),k.return=K,k):(k=u(k,tt),k.return=K,k)}function _t(K,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=_u(""+k,K.mode,tt),k.return=K,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return tt=rl(k.type,k.key,k.props,null,K.mode,tt),Jr(tt,k),tt.return=K,tt;case E:return k=vu(k,K.mode,tt),k.return=K,k;case B:return k=rs(k),_t(K,k,tt)}if(ot(k)||Y(k))return k=es(k,K.mode,tt,null),k.return=K,k;if(typeof k.then=="function")return _t(K,dl(k),tt);if(k.$$typeof===L)return _t(K,cl(K,k),tt);pl(K,k)}return null}function it(K,k,tt,mt){var te=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return te!==null?null:b(K,k,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===te?G(K,k,tt,mt):null;case E:return tt.key===te?nt(K,k,tt,mt):null;case B:return tt=rs(tt),it(K,k,tt,mt)}if(ot(tt)||Y(tt))return te!==null?null:ht(K,k,tt,mt,null);if(typeof tt.then=="function")return it(K,k,dl(tt),mt);if(tt.$$typeof===L)return it(K,k,cl(K,tt),mt);pl(K,tt)}return null}function ct(K,k,tt,mt,te){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(tt)||null,b(k,K,""+mt,te);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return K=K.get(mt.key===null?tt:mt.key)||null,G(k,K,mt,te);case E:return K=K.get(mt.key===null?tt:mt.key)||null,nt(k,K,mt,te);case B:return mt=rs(mt),ct(K,k,tt,mt,te)}if(ot(mt)||Y(mt))return K=K.get(tt)||null,ht(k,K,mt,te,null);if(typeof mt.then=="function")return ct(K,k,tt,dl(mt),te);if(mt.$$typeof===L)return ct(K,k,tt,cl(k,mt),te);pl(k,mt)}return null}function Yt(K,k,tt,mt){for(var te=null,Ce=null,Kt=k,ue=k=0,xe=null;Kt!==null&&ue<tt.length;ue++){Kt.index>ue?(xe=Kt,Kt=null):xe=Kt.sibling;var we=it(K,Kt,tt[ue],mt);if(we===null){Kt===null&&(Kt=xe);break}e&&Kt&&we.alternate===null&&n(K,Kt),k=f(we,k,ue),Ce===null?te=we:Ce.sibling=we,Ce=we,Kt=xe}if(ue===tt.length)return a(K,Kt),ye&&ki(K,ue),te;if(Kt===null){for(;ue<tt.length;ue++)Kt=_t(K,tt[ue],mt),Kt!==null&&(k=f(Kt,k,ue),Ce===null?te=Kt:Ce.sibling=Kt,Ce=Kt);return ye&&ki(K,ue),te}for(Kt=r(Kt);ue<tt.length;ue++)xe=ct(Kt,K,ue,tt[ue],mt),xe!==null&&(e&&xe.alternate!==null&&Kt.delete(xe.key===null?ue:xe.key),k=f(xe,k,ue),Ce===null?te=xe:Ce.sibling=xe,Ce=xe);return e&&Kt.forEach(function(za){return n(K,za)}),ye&&ki(K,ue),te}function ne(K,k,tt,mt){if(tt==null)throw Error(s(151));for(var te=null,Ce=null,Kt=k,ue=k=0,xe=null,we=tt.next();Kt!==null&&!we.done;ue++,we=tt.next()){Kt.index>ue?(xe=Kt,Kt=null):xe=Kt.sibling;var za=it(K,Kt,we.value,mt);if(za===null){Kt===null&&(Kt=xe);break}e&&Kt&&za.alternate===null&&n(K,Kt),k=f(za,k,ue),Ce===null?te=za:Ce.sibling=za,Ce=za,Kt=xe}if(we.done)return a(K,Kt),ye&&ki(K,ue),te;if(Kt===null){for(;!we.done;ue++,we=tt.next())we=_t(K,we.value,mt),we!==null&&(k=f(we,k,ue),Ce===null?te=we:Ce.sibling=we,Ce=we);return ye&&ki(K,ue),te}for(Kt=r(Kt);!we.done;ue++,we=tt.next())we=ct(Kt,K,ue,we.value,mt),we!==null&&(e&&we.alternate!==null&&Kt.delete(we.key===null?ue:we.key),k=f(we,k,ue),Ce===null?te=we:Ce.sibling=we,Ce=we);return e&&Kt.forEach(function(Lx){return n(K,Lx)}),ye&&ki(K,ue),te}function He(K,k,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===w&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var te=tt.key;k!==null;){if(k.key===te){if(te=tt.type,te===w){if(k.tag===7){a(K,k.sibling),mt=u(k,tt.props.children),mt.return=K,K=mt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===B&&rs(te)===k.type){a(K,k.sibling),mt=u(k,tt.props),Jr(mt,tt),mt.return=K,K=mt;break t}a(K,k);break}else n(K,k);k=k.sibling}tt.type===w?(mt=es(tt.props.children,K.mode,mt,tt.key),mt.return=K,K=mt):(mt=rl(tt.type,tt.key,tt.props,null,K.mode,mt),Jr(mt,tt),mt.return=K,K=mt)}return v(K);case E:t:{for(te=tt.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(K,k.sibling),mt=u(k,tt.children||[]),mt.return=K,K=mt;break t}else{a(K,k);break}else n(K,k);k=k.sibling}mt=vu(tt,K.mode,mt),mt.return=K,K=mt}return v(K);case B:return tt=rs(tt),He(K,k,tt,mt)}if(ot(tt))return Yt(K,k,tt,mt);if(Y(tt)){if(te=Y(tt),typeof te!="function")throw Error(s(150));return tt=te.call(tt),ne(K,k,tt,mt)}if(typeof tt.then=="function")return He(K,k,dl(tt),mt);if(tt.$$typeof===L)return He(K,k,cl(K,tt),mt);pl(K,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(K,k.sibling),mt=u(k,tt),mt.return=K,K=mt):(a(K,k),mt=_u(tt,K.mode,mt),mt.return=K,K=mt),v(K)):a(K,k)}return function(K,k,tt,mt){try{Qr=0;var te=He(K,k,tt,mt);return qs=null,te}catch(Kt){if(Kt===Ys||Kt===fl)throw Kt;var Ce=Kn(29,Kt,null,K.mode);return Ce.lanes=mt,Ce.return=K,Ce}finally{}}}var ls=Wp(!0),Yp=Wp(!1),Sa=!1;function Du(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=sl(e),wp(e,null,a),n}return al(e,r,n,a),sl(e)}function $r(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ai(e,a)}}function Lu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Nu=!1;function to(){if(Nu){var e=Ws;if(e!==null)throw e}}function eo(e,n,a,r){Nu=!1;var u=e.updateQueue;Sa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var G=b,nt=G.next;G.next=null,v===null?f=nt:v.next=nt,v=G;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,b=ht.lastBaseUpdate,b!==v&&(b===null?ht.firstBaseUpdate=nt:b.next=nt,ht.lastBaseUpdate=G))}if(f!==null){var _t=u.baseState;v=0,ht=nt=G=null,b=f;do{var it=b.lane&-536870913,ct=it!==b.lane;if(ct?(Se&it)===it:(r&it)===it){it!==0&&it===Xs&&(Nu=!0),ht!==null&&(ht=ht.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var Yt=e,ne=b;it=n;var He=a;switch(ne.tag){case 1:if(Yt=ne.payload,typeof Yt=="function"){_t=Yt.call(He,_t,it);break t}_t=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ne.payload,it=typeof Yt=="function"?Yt.call(He,_t,it):Yt,it==null)break t;_t=_({},_t,it);break t;case 2:Sa=!0}}it=b.callback,it!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[it]:ct.push(it))}else ct={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ht===null?(nt=ht=ct,G=_t):ht=ht.next=ct,v|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;ct=b,b=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);ht===null&&(G=_t),u.baseState=G,u.firstBaseUpdate=nt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Aa|=v,e.lanes=v,e.memoizedState=_t}}function qp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function jp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)qp(a[e],n)}var js=z(null),ml=z(0);function Zp(e,n){e=ta,bt(ml,e),bt(js,n),ta=e|n.baseLanes}function Ou(){bt(ml,ta),bt(js,js.current)}function Pu(){ta=ml.current,at(js),at(ml)}var Qn=z(null),fi=null;function Ma(e){var n=e.alternate;bt(nn,nn.current&1),bt(Qn,e),fi===null&&(n===null||js.current!==null||n.memoizedState!==null)&&(fi=e)}function zu(e){bt(nn,nn.current),bt(Qn,e),fi===null&&(fi=e)}function Kp(e){e.tag===22?(bt(nn,nn.current),bt(Qn,e),fi===null&&(fi=e)):Ea()}function Ea(){bt(nn,nn.current),bt(Qn,Qn.current)}function Jn(e){at(Qn),fi===e&&(fi=null),at(nn)}var nn=z(0);function gl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||kf(a)||Xf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=0,ce=null,Be=null,ln=null,_l=!1,Zs=!1,cs=!1,vl=0,no=0,Ks=null,MS=0;function $e(){throw Error(s(321))}function Iu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Bu(e,n,a,r,u,f){return Yi=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?Nm:$u,cs=!1,f=a(r,u),cs=!1,Zs&&(f=Jp(n,a,r,u)),Qp(e),f}function Qp(e){P.H=so;var n=Be!==null&&Be.next!==null;if(Yi=0,ln=Be=ce=null,_l=!1,no=0,Ks=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&ll(e)&&(cn=!0))}function Jp(e,n,a,r){ce=e;var u=0;do{if(Zs&&(Ks=null),no=0,Zs=!1,25<=u)throw Error(s(301));if(u+=1,ln=Be=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Om,f=n(a,r)}while(Zs);return f}function ES(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?io(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(ce.flags|=1024),n}function Fu(){var e=vl!==0;return vl=0,e}function Hu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Gu(e){if(_l){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}_l=!1}Yi=0,ln=Be=ce=null,Zs=!1,no=vl=0,Ks=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ce.memoizedState=ln=e:ln=ln.next=e,ln}function an(){if(Be===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=ln===null?ce.memoizedState:ln.next;if(n!==null)ln=n,Be=e;else{if(e===null)throw ce.alternate===null?Error(s(467)):Error(s(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},ln===null?ce.memoizedState=ln=e:ln=ln.next=e}return ln}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(e){var n=no;return no+=1,Ks===null&&(Ks=[]),e=Vp(Ks,e,n),n=ce,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Nm:$u),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return io(e);if(e.$$typeof===L)return En(e)}throw Error(s(438,String(e)))}function Vu(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ce.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=R;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function yl(e){var n=an();return ku(n,Be,e)}function ku(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=v=null,G=null,nt=n,ht=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(Se&_t)===_t:(Yi&_t)===_t){var it=nt.revertLane;if(it===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===Xs&&(ht=!0);else if((Yi&it)===it){nt=nt.next,it===Xs&&(ht=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(b=G=_t,v=f):G=G.next=_t,ce.lanes|=it,Aa|=it;_t=nt.action,cs&&a(f,_t),f=nt.hasEagerState?nt.eagerState:a(f,_t)}else it={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(b=G=it,v=f):G=G.next=it,ce.lanes|=_t,Aa|=_t;nt=nt.next}while(nt!==null&&nt!==n);if(G===null?v=f:G.next=b,!Zn(f,e.memoizedState)&&(cn=!0,ht&&(a=Ws,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xu(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Zn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function $p(e,n,a){var r=ce,u=an(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Zn((Be||u).memoizedState,a);if(v&&(u.memoizedState=a,cn=!0),u=u.queue,qu(nm.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,Qs(9,{destroy:void 0},em.bind(null,r,u,a,n),null),ke===null)throw Error(s(349));f||(Yi&127)!==0||tm(r,n,a)}return a}function tm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Sl(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function em(e,n,a,r){n.value=a,n.getSnapshot=r,im(n)&&am(e)}function nm(e,n,a){return a(function(){im(n)&&am(e)})}function im(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function am(e){var n=ts(e,2);n!==null&&kn(n,e,2)}function Wu(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),cs){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function sm(e,n,a,r){return e.baseState=a,ku(e,Be,typeof r=="function"?r:qi)}function TS(e,n,a,r,u){if(Tl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,rm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function rm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var b=a(u,r),G=P.S;G!==null&&G(v,b),om(e,n,b)}catch(nt){Yu(e,n,nt)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,r),om(e,n,f)}catch(nt){Yu(e,n,nt)}}function om(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){lm(e,n,r)},function(r){return Yu(e,n,r)}):lm(e,n,a)}function lm(e,n,a){n.status="fulfilled",n.value=a,cm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,rm(e,a)))}function Yu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,cm(n),n=n.next;while(n!==r)}e.action=null}function cm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function um(e,n){return n}function fm(e,n){if(ye){var a=ke.formState;if(a!==null){t:{var r=ce;if(ye){if(Ye){e:{for(var u=Ye,f=ui;u.nodeType!==8;){if(!f){u=null;break e}if(u=hi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=hi(u.nextSibling),r=u.data==="F!";break t}}_a(r)}r=!1}r&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:um,lastRenderedState:n},a.queue=r,a=Dm.bind(null,ce,r),r.dispatch=a,r=Wu(!1),f=Ju.bind(null,ce,!1,r.queue),r=Pn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=TS.bind(null,ce,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function hm(e){var n=an();return dm(n,Be,e)}function dm(e,n,a){if(n=ku(e,n,um)[0],e=yl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=io(n)}catch(v){throw v===Ys?fl:v}else r=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Qs(9,{destroy:void 0},bS.bind(null,u,a),null)),[r,f,e]}function bS(e,n){e.action=n}function pm(e){var n=an(),a=Be;if(a!==null)return dm(n,a,e);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Qs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Sl(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function mm(){return an().memoizedState}function Ml(e,n,a,r){var u=Pn();ce.flags|=e,u.memoizedState=Qs(1|n,{destroy:void 0},a,r===void 0?null:r)}function El(e,n,a,r){var u=an();r=r===void 0?null:r;var f=u.memoizedState.inst;Be!==null&&r!==null&&Iu(r,Be.memoizedState.deps)?u.memoizedState=Qs(n,f,a,r):(ce.flags|=e,u.memoizedState=Qs(1|n,f,a,r))}function gm(e,n){Ml(8390656,8,e,n)}function qu(e,n){El(2048,8,e,n)}function AS(e){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=Sl(),ce.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function _m(e){var n=an().memoizedState;return AS({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function vm(e,n){return El(4,2,e,n)}function Sm(e,n){return El(4,4,e,n)}function xm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function ym(e,n,a){a=a!=null?a.concat([e]):null,El(4,4,xm.bind(null,n,e),a)}function ju(){}function Mm(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Iu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Em(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Iu(n,r[1]))return r[0];if(r=e(),cs){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r}function Zu(e,n,a){return a===void 0||(Yi&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Tg(),ce.lanes|=e,Aa|=e,a)}function Tm(e,n,a,r){return Zn(a,n)?a:js.current!==null?(e=Zu(e,a,r),Zn(e,n)||(cn=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&(Se&261930)===0?(cn=!0,e.memoizedState=a):(e=Tg(),ce.lanes|=e,Aa|=e,n)}function bm(e,n,a,r,u){var f=j.p;j.p=f!==0&&8>f?f:8;var v=P.T,b={};P.T=b,Ju(e,!1,n,a);try{var G=u(),nt=P.S;if(nt!==null&&nt(b,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ht=yS(G,r);ao(e,n,ht,ei(e))}else ao(e,n,r,ei(e))}catch(_t){ao(e,n,{then:function(){},status:"rejected",reason:_t},ei())}finally{j.p=f,v!==null&&b.types!==null&&(v.types=b.types),P.T=v}}function RS(){}function Ku(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Am(e).queue;bm(e,u,n,q,a===null?RS:function(){return Rm(e),a(r)})}function Am(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rm(e){var n=Am(e);n.next===null&&(n=e.alternate.memoizedState),ao(e,n.next.queue,{},ei())}function Qu(){return En(Mo)}function Cm(){return an().memoizedState}function wm(){return an().memoizedState}function CS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=xa(a);var r=ya(n,e,a);r!==null&&(kn(r,n,a),$r(r,n,a)),n={cache:Au()},e.payload=n;return}n=n.return}}function wS(e,n,a){var r=ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?Um(n,a):(a=mu(e,n,a,r),a!==null&&(kn(a,e,r),Lm(a,n,r)))}function Dm(e,n,a){var r=ei();ao(e,n,a,r)}function ao(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Um(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,b=f(v,a);if(u.hasEagerState=!0,u.eagerState=b,Zn(b,v))return al(e,n,u,0),ke===null&&il(),!1}catch{}finally{}if(a=mu(e,n,u,r),a!==null)return kn(a,e,r),Lm(a,n,r),!0}return!1}function Ju(e,n,a,r){if(r={lane:2,revertLane:Uf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(s(479))}else n=mu(e,a,r,2),n!==null&&kn(n,e,2)}function Tl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Um(e,n){Zs=_l=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Lm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ai(e,a)}}var so={readContext:En,use:xl,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};so.useEffectEvent=$e;var Nm={readContext:En,use:xl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:gm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ml(4194308,4,xm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){Ml(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var r=e();if(cs){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Pn();if(a!==void 0){var u=a(n);if(cs){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=wS.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=Wu(e);var n=e.queue,a=Dm.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ju,useDeferredValue:function(e,n){var a=Pn();return Zu(a,e,n)},useTransition:function(){var e=Wu(!1);return e=bm.bind(null,ce,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ce,u=Pn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(Se&127)!==0||tm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,gm(nm.bind(null,r,f,e),[e]),r.flags|=2048,Qs(9,{destroy:void 0},em.bind(null,r,f,a,n),null),a},useId:function(){var e=Pn(),n=ke.identifierPrefix;if(ye){var a=wi,r=Ci;a=(r&~(1<<32-Dt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=MS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Qu,useFormState:fm,useActionState:fm,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ju.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Vu,useCacheRefresh:function(){return Pn().memoizedState=CS.bind(null,ce)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},$u={readContext:En,use:xl,useCallback:Mm,useContext:En,useEffect:qu,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:Sm,useMemo:Em,useReducer:yl,useRef:mm,useState:function(){return yl(qi)},useDebugValue:ju,useDeferredValue:function(e,n){var a=an();return Tm(a,Be.memoizedState,e,n)},useTransition:function(){var e=yl(qi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:Qu,useFormState:hm,useActionState:hm,useOptimistic:function(e,n){var a=an();return sm(a,Be,e,n)},useMemoCache:Vu,useCacheRefresh:wm};$u.useEffectEvent=_m;var Om={readContext:En,use:xl,useCallback:Mm,useContext:En,useEffect:qu,useImperativeHandle:ym,useInsertionEffect:vm,useLayoutEffect:Sm,useMemo:Em,useReducer:Xu,useRef:mm,useState:function(){return Xu(qi)},useDebugValue:ju,useDeferredValue:function(e,n){var a=an();return Be===null?Zu(a,e,n):Tm(a,Be.memoizedState,e,n)},useTransition:function(){var e=Xu(qi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:$p,useId:Cm,useHostTransitionStatus:Qu,useFormState:pm,useActionState:pm,useOptimistic:function(e,n){var a=an();return Be!==null?sm(a,Be,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Vu,useCacheRefresh:wm};Om.useEffectEvent=_m;function tf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ef={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ei(),u=xa(r);u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,r),n!==null&&(kn(n,e,r),$r(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ei(),u=xa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ya(e,u,r),n!==null&&(kn(n,e,r),$r(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),r=xa(a);r.tag=2,n!=null&&(r.callback=n),n=ya(e,r,a),n!==null&&(kn(n,e,a),$r(n,e,a))}};function Pm(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Wr(a,r)||!Wr(u,f):!0}function zm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&ef.enqueueReplaceState(n,n.state,null)}function us(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Im(e){nl(e)}function Bm(e){console.error(e)}function Fm(e){nl(e)}function bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Hm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function nf(e,n,a){return a=xa(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(e,n)},a}function Gm(e){return e=xa(e),e.tag=3,e}function Vm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Hm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Hm(n,a,r),typeof u!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function DS(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ks(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Il():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Cf(e,r,u)),!1;case 22:return a.flags|=65536,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Cf(e,r,u)),!1}throw Error(s(435,a.tag))}return Cf(e,r,u),Il(),!1}if(ye)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==yu&&(e=Error(s(422),{cause:r}),jr(oi(e,a)))):(r!==yu&&(n=Error(s(423),{cause:r}),jr(oi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=oi(r,a),u=nf(e.stateNode,r,u),Lu(e,u),tn!==4&&(tn=2)),!1;var f=Error(s(520),{cause:r});if(f=oi(f,a),po===null?po=[f]:po.push(f),tn!==4&&(tn=2),n===null)return!0;r=oi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=nf(a.stateNode,r,e),Lu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ra===null||!Ra.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Gm(u),Vm(u,e,a,r),Lu(a,u),!1}a=a.return}while(a!==null);return!1}var af=Error(s(461)),cn=!1;function Tn(e,n,a,r){n.child=e===null?Yp(n,null,a,r):ls(n,e.child,a,r)}function km(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var b in r)b!=="ref"&&(v[b]=r[b])}else v=r;return as(n),r=Bu(e,n,a,v,f,u),b=Fu(),e!==null&&!cn?(Hu(e,n,u),ji(e,n,u)):(ye&&b&&Su(n),n.flags|=1,Tn(e,n,r,u),n.child)}function Xm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!gu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Wm(e,n,f,r,u)):(e=rl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!hf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Wr,a(v,r)&&e.ref===n.ref)return ji(e,n,u)}return n.flags|=1,e=Vi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Wm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Wr(f,r)&&e.ref===n.ref)if(cn=!1,n.pendingProps=r=f,hf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,ji(e,n,u)}return sf(e,n,a,r,u)}function Ym(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return qm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(n,f!==null?f.cachePool:null),f!==null?Zp(n,f):Ou(),Kp(n);else return r=n.lanes=536870912,qm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ul(n,f.cachePool),Zp(n,f),Ea(),n.memoizedState=null):(e!==null&&ul(n,null),Ou(),Ea());return Tn(e,n,u,a),n.child}function ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qm(e,n,a,r,u){var f=Cu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ul(n,null),Ou(),Kp(n),e!==null&&ks(e,n,r,!0),n.childLanes=u,null}function Al(e,n){return n=Cl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function jm(e,n,a){return ls(n,e.child,null,a),e=Al(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function US(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ye){if(r.mode==="hidden")return e=Al(n,r),n.lanes=536870912,ro(null,e);if(zu(n),(e=Ye)?(e=r_(e,ui),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Up(e),a.return=n,n.child=a,Mn=n,Ye=null)):e=null,e===null)throw _a(n);return n.lanes=536870912,null}return Al(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(zu(n),u)if(n.flags&256)n.flags&=-257,n=jm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||ks(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(r=ke,r!==null&&(v=Cs(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ts(e,v),kn(r,e,v),af;Il(),n=jm(e,n,a)}else e=f.treeContext,Ye=hi(v.nextSibling),Mn=n,ye=!0,ga=null,ui=!1,e!==null&&Op(n,e),n=Al(n,r),n.flags|=4096;return n}return e=Vi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Rl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sf(e,n,a,r,u){return as(n),a=Bu(e,n,a,r,void 0,u),r=Fu(),e!==null&&!cn?(Hu(e,n,u),ji(e,n,u)):(ye&&r&&Su(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Zm(e,n,a,r,u,f){return as(n),n.updateQueue=null,a=Jp(n,r,a,u),Qp(e),r=Fu(),e!==null&&!cn?(Hu(e,n,f),ji(e,n,f)):(ye&&r&&Su(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Km(e,n,a,r,u){if(as(n),n.stateNode===null){var f=Fs,v=a.contextType;typeof v=="object"&&v!==null&&(f=En(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ef,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Du(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?En(v):Fs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(tf(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&ef.enqueueReplaceState(f,f.state,null),eo(n,r,f,u),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,G=us(a,b);f.props=G;var nt=f.context,ht=a.contextType;v=Fs,typeof ht=="object"&&ht!==null&&(v=En(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||nt!==v)&&zm(n,f,r,v),Sa=!1;var it=n.memoizedState;f.state=it,eo(n,r,f,u),to(),nt=n.memoizedState,b||it!==nt||Sa?(typeof _t=="function"&&(tf(n,a,_t,r),nt=n.memoizedState),(G=Sa||Pm(n,a,G,r,it,nt,v))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=nt),f.props=r,f.state=nt,f.context=v,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Uu(e,n),v=n.memoizedProps,ht=us(a,v),f.props=ht,_t=n.pendingProps,it=f.context,nt=a.contextType,G=Fs,typeof nt=="object"&&nt!==null&&(G=En(nt)),b=a.getDerivedStateFromProps,(nt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==_t||it!==G)&&zm(n,f,r,G),Sa=!1,it=n.memoizedState,f.state=it,eo(n,r,f,u),to();var ct=n.memoizedState;v!==_t||it!==ct||Sa||e!==null&&e.dependencies!==null&&ll(e.dependencies)?(typeof b=="function"&&(tf(n,a,b,r),ct=n.memoizedState),(ht=Sa||Pm(n,a,ht,r,it,ct,G)||e!==null&&e.dependencies!==null&&ll(e.dependencies))?(nt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=G,r=ht):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Rl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ls(n,e.child,null,u),n.child=ls(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ji(e,n,u),e}function Qm(e,n,a,r){return ns(),n.flags|=256,Tn(e,n,a,r),n.child}var rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function of(e){return{baseLanes:e,cachePool:Hp()}}function lf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function Jm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(ye){if(u?Ma(n):Ea(),(e=Ye)?(e=r_(e,ui),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ma!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Up(e),a.return=n,n.child=a,Mn=n,Ye=null)):e=null,e===null)throw _a(n);return Xf(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,u?(Ea(),u=n.mode,b=Cl({mode:"hidden",children:b},u),r=es(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,v,a),n.memoizedState=rf,ro(null,r)):(Ma(n),cf(n,b))}var G=e.memoizedState;if(G!==null&&(b=G.dehydrated,b!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=uf(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),b=r.fallback,u=n.mode,r=Cl({mode:"visible",children:r.children},u),b=es(b,u,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,ls(n,e.child,null,a),r=n.child,r.memoizedState=of(a),r.childLanes=lf(e,v,a),n.memoizedState=rf,n=ro(null,r));else if(Ma(n),Xf(b)){if(v=b.nextSibling&&b.nextSibling.dataset,v)var nt=v.dgst;v=nt,r=Error(s(419)),r.stack="",r.digest=v,jr({value:r,source:null,stack:null}),n=uf(e,n,a)}else if(cn||ks(e,n,a,!1),v=(a&e.childLanes)!==0,cn||v){if(v=ke,v!==null&&(r=Cs(v,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,ts(e,r),kn(v,e,r),af;kf(b)||Il(),n=uf(e,n,a)}else kf(b)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Ye=hi(b.nextSibling),Mn=n,ye=!0,ga=null,ui=!1,e!==null&&Op(n,e),n=cf(n,r.children),n.flags|=4096);return n}return u?(Ea(),b=r.fallback,u=n.mode,G=e.child,nt=G.sibling,r=Vi(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,nt!==null?b=Vi(nt,b):(b=es(b,u,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,ro(null,r),r=n.child,b=e.child.memoizedState,b===null?b=of(a):(u=b.cachePool,u!==null?(G=on._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Hp(),b={baseLanes:b.baseLanes|a,cachePool:u}),r.memoizedState=b,r.childLanes=lf(e,v,a),n.memoizedState=rf,ro(e.child,r)):(Ma(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function cf(e,n){return n=Cl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function uf(e,n,a){return ls(n,e.child,null,a),e=cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $m(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Tu(e.return,n,a)}function ff(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function tg(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=nn.current,b=(v&2)!==0;if(b?(v=v&1|2,n.flags|=128):v&=1,bt(nn,v),Tn(e,n,r,a),r=ye?qr:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$m(e,a,n);else if(e.tag===19)$m(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&gl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),ff(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&gl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}ff(n,!0,a,null,f,r);break;case"together":ff(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ll(e)))}function LS(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),va(n,on,e.memoizedState.cache),ns();break;case 27:case 5:Zt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,zu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jm(e,n,a):(Ma(n),e=ji(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(ks(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return tg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),bt(nn,nn.current),r)break;return null;case 22:return n.lanes=0,Ym(e,n,a,n.pendingProps);case 24:va(n,on,e.memoizedState.cache)}return ji(e,n,a)}function eg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!hf(e,a)&&(n.flags&128)===0)return cn=!1,LS(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,ye&&(n.flags&1048576)!==0&&Np(n,qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=rs(n.elementType),n.type=e,typeof e=="function")gu(e)?(r=us(e,r),n.tag=1,n=Km(null,n,e,r,a)):(n.tag=0,n=sf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=km(null,n,e,r,a);break t}else if(u===U){n.tag=14,n=Xm(null,n,e,r,a);break t}}throw n=ut(e)||e,Error(s(306,n,""))}}return n;case 0:return sf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=us(r,n.pendingProps),Km(e,n,r,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Uu(e,n),eo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,va(n,on,r),r!==f.cache&&bu(n,[on],a,!0),to(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Qm(e,n,r,a);break t}else if(r!==u){u=oi(Error(s(424)),n),jr(u),n=Qm(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ye=hi(e.firstChild),Mn=n,ye=!0,ga=null,ui=!0,a=Yp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ns(),r===u){n=ji(e,n,a);break t}Tn(e,n,r,a)}n=n.child}return n;case 26:return Rl(e,n),e===null?(a=h_(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,e=n.pendingProps,r=Xl(st.current).createElement(a),r[rn]=n,r[xn]=e,bn(r,a,e),yt(r),n.stateNode=r):n.memoizedState=h_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Zt(n),e===null&&ye&&(r=n.stateNode=c_(n.type,n.pendingProps,st.current),Mn=n,ui=!0,u=Ye,Ua(n.type)?(Wf=u,Ye=hi(r.firstChild)):Ye=u),Tn(e,n,n.pendingProps.children,a),Rl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ye&&((u=r=Ye)&&(r=lx(r,n.type,n.pendingProps,ui),r!==null?(n.stateNode=r,Mn=n,Ye=hi(r.firstChild),ui=!1,u=!0):u=!1),u||_a(n)),Zt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Hf(u,f)?r=null:v!==null&&Hf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Bu(e,n,ES,null,null,a),Mo._currentValue=u),Rl(e,n),Tn(e,n,r,a),n.child;case 6:return e===null&&ye&&((e=a=Ye)&&(a=cx(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Mn=n,Ye=null,e=!0):e=!1),e||_a(n)),null;case 13:return Jm(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ls(n,null,r,a):Tn(e,n,r,a),n.child;case 11:return km(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,va(n,n.type,r.value),Tn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,as(n),u=En(u),r=r(u),n.flags|=1,Tn(e,n,r,a),n.child;case 14:return Xm(e,n,n.type,n.pendingProps,a);case 15:return Wm(e,n,n.type,n.pendingProps,a);case 19:return tg(e,n,a);case 31:return US(e,n,a);case 22:return Ym(e,n,a,n.pendingProps);case 24:return as(n),r=En(on),e===null?(u=Cu(),u===null&&(u=ke,f=Au(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Du(n),va(n,on,u)):((e.lanes&a)!==0&&(Uu(e,n),eo(n,null,null,a),to()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),va(n,on,r)):(r=f.cache,va(n,on,r),r!==u.cache&&bu(n,[on],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Zi(e){e.flags|=4}function df(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Cg())e.flags|=8192;else throw os=hl,wu}else e.flags&=-16777217}function ng(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!__(n))if(Cg())e.flags|=8192;else throw os=hl,wu}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,er|=n)}function oo(e,n){if(!ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function NS(e,n,a){var r=n.pendingProps;switch(xu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Wi(on),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vs(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Mu())),qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Zi(n),f!==null?(qe(n),ng(n,f)):(qe(n),df(n,u,null,r,a))):f?f!==e.memoizedState?(Zi(n),qe(n),ng(n,f)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Zi(n),qe(n),df(n,u,e,r,a)),null;case 27:if(le(n),a=st.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=Ut.current,Vs(n)?Pp(n):(e=c_(u,r,a),n.stateNode=e,Zi(n))}return qe(n),null;case 5:if(le(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(f=Ut.current,Vs(n))Pp(n);else{var v=Xl(st.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[rn]=n,f[xn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(bn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Zi(n)}}return qe(n),df(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Zi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=st.current,Vs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Jg(e.nodeValue,a)),e||_a(n,!0)}else e=Xl(e).createTextNode(r),e[rn]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Vs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Vs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else ns(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),u=!1}else u=Mu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),qe(n),null);case 4:return Ht(),e===null&&Pf(n.stateNode.containerInfo),qe(n),null;case 10:return Wi(n.type),qe(n),null;case 19:if(at(nn),r=n.memoizedState,r===null)return qe(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)oo(r,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=gl(e),f!==null){for(n.flags|=128,oo(r,!1),e=f.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Dp(a,e),a=a.sibling;return bt(nn,nn.current&1|2),ye&&ki(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&T()>Ol&&(n.flags|=128,u=!0,oo(r,!1),n.lanes=4194304)}else{if(!u)if(e=gl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),oo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!ye)return qe(n),null}else 2*T()-r.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,u=!0,oo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=T(),e.sibling=null,a=nn.current,bt(nn,u?a&1|2:a&1),ye&&ki(n,r.treeForkCount),e):(qe(n),null);case 22:case 23:return Jn(n),Pu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&at(ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(on),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function OS(e,n){switch(xu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(on),Ht(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ns()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(nn),null;case 4:return Ht(),null;case 10:return Wi(n.type),null;case 22:case 23:return Jn(n),Pu(),e!==null&&at(ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(on),null;case 25:return null;default:return null}}function ig(e,n){switch(xu(n),n.tag){case 3:Wi(on),Ht();break;case 26:case 27:case 5:le(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:at(nn);break;case 10:Wi(n.type);break;case 22:case 23:Jn(n),Pu(),e!==null&&at(ss);break;case 24:Wi(on)}}function lo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(b){ze(n,n.return,b)}}function Ta(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,b=v.destroy;if(b!==void 0){v.destroy=void 0,u=n;var G=a,nt=b;try{nt()}catch(ht){ze(u,G,ht)}}}r=r.next}while(r!==f)}}catch(ht){ze(n,n.return,ht)}}function ag(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{jp(n,a)}catch(r){ze(e,e.return,r)}}}function sg(e,n,a){a.props=us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){ze(e,n,r)}}function co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){ze(e,n,u)}}function Di(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function rg(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function pf(e,n,a){try{var r=e.stateNode;nx(r,e.type,a,n),r[xn]=n}catch(u){ze(e,e.return,u)}}function og(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function mf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||og(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(r!==4&&(r===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gf(e,n,a),e=e.sibling;e!==null;)gf(e,n,a),e=e.sibling}function Dl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Dl(e,n,a),e=e.sibling;e!==null;)Dl(e,n,a),e=e.sibling}function lg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,r,a),n[rn]=e,n[xn]=a}catch(f){ze(e,e.return,f)}}var Ki=!1,un=!1,_f=!1,cg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function PS(e,n){if(e=e.containerInfo,Bf=Ql,e=yp(e),cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,b=-1,G=-1,nt=0,ht=0,_t=e,it=null;e:for(;;){for(var ct;_t!==a||u!==0&&_t.nodeType!==3||(b=v+u),_t!==f||r!==0&&_t.nodeType!==3||(G=v+r),_t.nodeType===3&&(v+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)it=_t,_t=ct;for(;;){if(_t===e)break e;if(it===a&&++nt===u&&(b=v),it===f&&++ht===r&&(G=v),(ct=_t.nextSibling)!==null)break;_t=it,it=_t.parentNode}_t=ct}a=b===-1||G===-1?null:{start:b,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ff={focusedElem:e,selectionRange:a},Ql=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Yt=us(a.type,u);e=r.getSnapshotBeforeUpdate(Yt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ne){ze(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Vf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function ug(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),r&4&&lo(5,a);break;case 1:if(Ji(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){ze(a,a.return,v)}else{var u=us(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ze(a,a.return,v)}}r&64&&ag(a),r&512&&co(a,a.return);break;case 3:if(Ji(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{jp(e,n)}catch(v){ze(a,a.return,v)}}break;case 27:n===null&&r&4&&lg(a);case 26:case 5:Ji(e,a),n===null&&r&4&&rg(a),r&512&&co(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),r&4&&dg(e,a);break;case 13:Ji(e,a),r&4&&pg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=XS.bind(null,a),ux(e,a))));break;case 22:if(r=a.memoizedState!==null||Ki,!r){n=n!==null&&n.memoizedState!==null||un,u=Ki;var f=un;Ki=r,(un=n)&&!f?$i(e,a,(a.subtreeFlags&8772)!==0):Ji(e,a),Ki=u,un=f}break;case 30:break;default:Ji(e,a)}}function fg(e){var n=e.alternate;n!==null&&(e.alternate=null,fg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&C(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Fn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)hg(e,n,a),a=a.sibling}function hg(e,n,a){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:un||Di(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Di(a,n);var r=Ze,u=Fn;Ua(a.type)&&(Ze=a.stateNode,Fn=!1),Qi(e,n,a),So(a.stateNode),Ze=r,Fn=u;break;case 5:un||Di(a,n);case 6:if(r=Ze,u=Fn,Ze=null,Qi(e,n,a),Ze=r,Fn=u,Ze!==null)if(Fn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Ze.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Ze!==null&&(Fn?(e=Ze,a_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),cr(e)):a_(Ze,a.stateNode));break;case 4:r=Ze,u=Fn,Ze=a.stateNode.containerInfo,Fn=!0,Qi(e,n,a),Ze=r,Fn=u;break;case 0:case 11:case 14:case 15:Ta(2,a,n),un||Ta(4,a,n),Qi(e,n,a);break;case 1:un||(Di(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&sg(a,n,r)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,Qi(e,n,a),un=r;break;default:Qi(e,n,a)}}function dg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cr(e)}catch(a){ze(n,n.return,a)}}}function pg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cr(e)}catch(a){ze(n,n.return,a)}}function zS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new cg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new cg),n;default:throw Error(s(435,e.tag))}}function Ul(e,n){var a=zS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=WS.bind(null,e,r);r.then(u,u)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,v=n,b=v;t:for(;b!==null;){switch(b.tag){case 27:if(Ua(b.type)){Ze=b.stateNode,Fn=!1;break t}break;case 5:Ze=b.stateNode,Fn=!1;break t;case 3:case 4:Ze=b.stateNode.containerInfo,Fn=!0;break t}b=b.return}if(Ze===null)throw Error(s(160));hg(f,v,u),Ze=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)mg(n,e),n=n.sibling}var xi=null;function mg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),r&4&&(Ta(3,e,e.return),lo(3,e),Ta(5,e,e.return));break;case 1:Hn(n,e),Gn(e),r&512&&(un||a===null||Di(a,a.return)),r&64&&Ki&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=xi;if(Hn(n,e),Gn(e),r&512&&(un||a===null||Di(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Za]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,r,a),f[rn]=e,yt(f),r=f;break t;case"link":var v=m_("link","href",u).get(r+(a.href||""));if(v){for(var b=0;b<v.length;b++)if(f=v[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(b,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=m_("meta","content",u).get(r+(a.content||""))){for(b=0;b<v.length;b++)if(f=v[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(b,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,yt(f),r=f}e.stateNode=r}else g_(u,e.type,e.stateNode);else e.stateNode=p_(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?g_(u,e.type,e.stateNode):p_(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&pf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),r&512&&(un||a===null||Di(a,a.return)),a!==null&&r&4&&pf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),r&512&&(un||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Ls(u,"")}catch(Yt){ze(e,e.return,Yt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,pf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(_f=!0);break;case 6:if(Hn(n,e),Gn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Yt){ze(e,e.return,Yt)}}break;case 3:if(ql=null,u=xi,xi=Wl(n.containerInfo),Hn(n,e),xi=u,Gn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{cr(n.containerInfo)}catch(Yt){ze(e,e.return,Yt)}_f&&(_f=!1,gg(e));break;case 4:r=xi,xi=Wl(e.stateNode.containerInfo),Hn(n,e),Gn(e),xi=r;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nl=T()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,nt=Ki,ht=un;if(Ki=nt||u,un=ht||G,Hn(n,e),un=ht,Ki=nt,Gn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Ki||un||fs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{b=G.stateNode;var _t=G.memoizedProps.style,it=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Yt){ze(G,G.return,Yt)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Yt){ze(G,G.return,Yt)}}}else if(n.tag===18){if(a===null){G=n;try{var ct=G.stateNode;u?s_(ct,!0):s_(G.stateNode,!1)}catch(Yt){ze(G,G.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ul(e,a))));break;case 19:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(og(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=mf(e);Dl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ls(v,""),a.flags&=-33);var b=mf(e);Dl(e,b,v);break;case 3:case 4:var G=a.stateNode.containerInfo,nt=mf(e);gf(e,nt,G);break;default:throw Error(s(161))}}catch(ht){ze(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function gg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;gg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ug(e,n.alternate,n),n=n.sibling}function fs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),fs(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&sg(n,n.return,a),fs(n);break;case 27:So(n.stateNode);case 26:case 5:Di(n,n.return),fs(n);break;case 22:n.memoizedState===null&&fs(n);break;case 30:fs(n);break;default:fs(n)}e=e.sibling}}function $i(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:$i(u,f,a),lo(4,f);break;case 1:if($i(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(nt){ze(r,r.return,nt)}if(r=f,u=r.updateQueue,u!==null){var b=r.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)qp(G[u],b)}catch(nt){ze(r,r.return,nt)}}a&&v&64&&ag(f),co(f,f.return);break;case 27:lg(f);case 26:case 5:$i(u,f,a),a&&r===null&&v&4&&rg(f),co(f,f.return);break;case 12:$i(u,f,a);break;case 31:$i(u,f,a),a&&v&4&&dg(u,f);break;case 13:$i(u,f,a),a&&v&4&&pg(u,f);break;case 22:f.memoizedState===null&&$i(u,f,a),co(f,f.return);break;case 30:break;default:$i(u,f,a)}n=n.sibling}}function vf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zr(a))}function Sf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zr(e))}function yi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_g(e,n,a,r),n=n.sibling}function _g(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,r),u&2048&&lo(9,n);break;case 1:yi(e,n,a,r);break;case 3:yi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zr(e)));break;case 12:if(u&2048){yi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,b=f.onPostCommit;typeof b=="function"&&b(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){ze(n,n.return,G)}}else yi(e,n,a,r);break;case 31:yi(e,n,a,r);break;case 13:yi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?yi(e,n,a,r):uo(e,n):f._visibility&2?yi(e,n,a,r):(f._visibility|=2,Js(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&vf(v,n);break;case 24:yi(e,n,a,r),u&2048&&Sf(n.alternate,n);break;default:yi(e,n,a,r)}}function Js(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,b=a,G=r,nt=v.flags;switch(v.tag){case 0:case 11:case 15:Js(f,v,b,G,u),lo(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?Js(f,v,b,G,u):uo(f,v):(ht._visibility|=2,Js(f,v,b,G,u)),u&&nt&2048&&vf(v.alternate,v);break;case 24:Js(f,v,b,G,u),u&&nt&2048&&Sf(v.alternate,v);break;default:Js(f,v,b,G,u)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:uo(a,r),u&2048&&vf(r.alternate,r);break;case 24:uo(a,r),u&2048&&Sf(r.alternate,r);break;default:uo(a,r)}n=n.sibling}}var fo=8192;function $s(e,n,a){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)vg(e,n,a),e=e.sibling}function vg(e,n,a){switch(e.tag){case 26:$s(e,n,a),e.flags&fo&&e.memoizedState!==null&&Mx(a,xi,e.memoizedState,e.memoizedProps);break;case 5:$s(e,n,a);break;case 3:case 4:var r=xi;xi=Wl(e.stateNode.containerInfo),$s(e,n,a),xi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=fo,fo=16777216,$s(e,n,a),fo=r):$s(e,n,a));break;default:$s(e,n,a)}}function Sg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,yg(r,e)}Sg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xg(e),e=e.sibling}function xg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):ho(e);break;default:ho(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,yg(r,e)}Sg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function yg(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Zr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=e;vn!==null;){r=vn;var u=r.sibling,f=r.return;if(fg(r),r===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var IS={getCacheForType:function(e){var n=En(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(on).controller.signal}},BS=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,me=null,Se=0,Pe=0,$n=null,ba=!1,tr=!1,xf=!1,ta=0,tn=0,Aa=0,hs=0,yf=0,ti=0,er=0,po=null,Vn=null,Mf=!1,Nl=0,Mg=0,Ol=1/0,Pl=null,Ra=null,dn=0,Ca=null,nr=null,ea=0,Ef=0,Tf=null,Eg=null,mo=0,bf=null;function ei(){return(De&2)!==0&&Se!==0?Se&-Se:P.T!==null?Uf():ja()}function Tg(){if(ti===0)if((Se&536870912)===0||ye){var e=Ot;Ot<<=1,(Ot&3932160)===0&&(Ot=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function kn(e,n,a){(e===ke&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(ir(e,0),wa(e,Se,ti,!1)),Nn(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(hs|=a),tn===4&&wa(e,Se,ti,!1)),Ui(e))}function bg(e,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xt(e,n),u=r?GS(e,n):Rf(e,n,!0),f=r;do{if(u===0){tr&&!r&&wa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!FS(a)){u=Rf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var b=e;u=po;var G=b.current.memoizedState.isDehydrated;if(G&&(ir(b,v).flags|=256),v=Rf(b,v,!1),v!==2){if(xf&&!G){b.errorRecoveryDisabledLanes|=f,hs|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){ir(e,0),wa(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:wa(r,n,ti,!ba);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Nl+300-T(),10<u)){if(wa(r,n,ti,!ba),vt(r,0,!0)!==0)break t;ea=n,r.timeoutHandle=n_(Ag.bind(null,r,a,Vn,Pl,Mf,n,ti,hs,er,ba,f,"Throttled",-0,0),u);break t}Ag(r,a,Vn,Pl,Mf,n,ti,hs,er,ba,f,null,-0,0)}}break}while(!0);Ui(e)}function Ag(e,n,a,r,u,f,v,b,G,nt,ht,_t,it,ct){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},vg(n,f,_t);var Yt=(f&62914560)===f?Nl-T():(f&4194048)===f?Mg-T():0;if(Yt=Ex(_t,Yt),Yt!==null){ea=f,e.cancelPendingCommit=Yt(Og.bind(null,e,n,f,a,r,u,v,b,G,ht,_t,null,it,ct)),wa(e,f,v,!nt);return}}Og(e,n,f,a,r,u,v,b,G)}function FS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wa(e,n,a,r){n&=~yf,n&=~hs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Dt(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Pr(e,a,n)}function zl(){return(De&6)===0?(go(0),!1):!0}function Af(){if(me!==null){if(Pe===0)var e=me.return;else e=me,Xi=is=null,Gu(e),qs=null,Qr=0,e=me;for(;e!==null;)ig(e.alternate,e),e=e.return;me=null}}function ir(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,sx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Af(),ke=e,me=a=Vi(e.current,null),Se=n,Pe=0,$n=null,ba=!1,tr=Xt(e,n),xf=!1,er=ti=yf=hs=Aa=tn=0,Vn=po=null,Mf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Dt(r),f=1<<u;n|=e[u],r&=~f}return ta=n,il(),a}function Rg(e,n){ce=null,P.H=so,n===Ys||n===fl?(n=kp(),Pe=3):n===wu?(n=kp(),Pe=4):Pe=n===af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,me===null&&(tn=1,bl(e,oi(n,e.current)))}function Cg(){var e=Qn.current;return e===null?!0:(Se&4194048)===Se?fi===null:(Se&62914560)===Se||(Se&536870912)!==0?e===fi:!1}function wg(){var e=P.H;return P.H=so,e===null?so:e}function Dg(){var e=P.A;return P.A=IS,e}function Il(){tn=4,ba||(Se&4194048)!==Se&&Qn.current!==null||(tr=!0),(Aa&134217727)===0&&(hs&134217727)===0||ke===null||wa(ke,Se,ti,!1)}function Rf(e,n,a){var r=De;De|=2;var u=wg(),f=Dg();(ke!==e||Se!==n)&&(Pl=null,ir(e,n)),n=!1;var v=tn;t:do try{if(Pe!==0&&me!==null){var b=me,G=$n;switch(Pe){case 8:Af(),v=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var nt=Pe;if(Pe=0,$n=null,ar(e,b,G,nt),a&&tr){v=0;break t}break;default:nt=Pe,Pe=0,$n=null,ar(e,b,G,nt)}}HS(),v=tn;break}catch(ht){Rg(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Xi=is=null,De=r,P.H=u,P.A=f,me===null&&(ke=null,Se=0,il()),v}function HS(){for(;me!==null;)Ug(me)}function GS(e,n){var a=De;De|=2;var r=wg(),u=Dg();ke!==e||Se!==n?(Pl=null,Ol=T()+500,ir(e,n)):tr=Xt(e,n);t:do try{if(Pe!==0&&me!==null){n=me;var f=$n;e:switch(Pe){case 1:Pe=0,$n=null,ar(e,n,f,1);break;case 2:case 9:if(Gp(f)){Pe=0,$n=null,Lg(n);break}n=function(){Pe!==2&&Pe!==9||ke!==e||(Pe=7),Ui(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Gp(f)?(Pe=0,$n=null,Lg(n)):(Pe=0,$n=null,ar(e,n,f,7));break;case 5:var v=null;switch(me.tag){case 26:v=me.memoizedState;case 5:case 27:var b=me;if(v?__(v):b.stateNode.complete){Pe=0,$n=null;var G=b.sibling;if(G!==null)me=G;else{var nt=b.return;nt!==null?(me=nt,Bl(nt)):me=null}break e}}Pe=0,$n=null,ar(e,n,f,5);break;case 6:Pe=0,$n=null,ar(e,n,f,6);break;case 8:Af(),tn=6;break t;default:throw Error(s(462))}}VS();break}catch(ht){Rg(e,ht)}while(!0);return Xi=is=null,P.H=r,P.A=u,De=a,me!==null?0:(ke=null,Se=0,il(),tn)}function VS(){for(;me!==null&&!Re();)Ug(me)}function Ug(e){var n=eg(e.alternate,e,ta);e.memoizedProps=e.pendingProps,n===null?Bl(e):me=n}function Lg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Zm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Zm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Gu(n);default:ig(a,n),n=me=Dp(n,ta),n=eg(a,n,ta)}e.memoizedProps=e.pendingProps,n===null?Bl(e):me=n}function ar(e,n,a,r){Xi=is=null,Gu(n),qs=null,Qr=0;var u=n.return;try{if(DS(e,u,n,a,Se)){tn=1,bl(e,oi(a,e.current)),me=null;return}}catch(f){if(u!==null)throw me=u,f;tn=1,bl(e,oi(a,e.current)),me=null;return}n.flags&32768?(ye||r===1?e=!0:tr||(Se&536870912)!==0?e=!1:(ba=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ng(n,e)):Bl(n)}function Bl(e){var n=e;do{if((n.flags&32768)!==0){Ng(n,ba);return}e=n.return;var a=NS(n.alternate,n,ta);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);tn===0&&(tn=5)}function Ng(e,n){do{var a=OS(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);tn=6,me=null}function Og(e,n,a,r,u,f,v,b,G){e.cancelPendingCommit=null;do Fl();while(dn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=pu,si(e,a,f,v,b,G),e===ke&&(me=ke=null,Se=0),nr=n,Ca=e,ea=a,Ef=f,Tf=u,Eg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,YS(et,function(){return Fg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,u=j.p,j.p=2,v=De,De|=4;try{PS(e,n,a)}finally{De=v,j.p=u,P.T=r}}dn=1,Pg(),zg(),Ig()}}function Pg(){if(dn===1){dn=0;var e=Ca,n=nr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=j.p;j.p=2;var u=De;De|=4;try{mg(n,e);var f=Ff,v=yp(e.containerInfo),b=f.focusedElem,G=f.selectionRange;if(v!==b&&b&&b.ownerDocument&&xp(b.ownerDocument.documentElement,b)){if(G!==null&&cu(b)){var nt=G.start,ht=G.end;if(ht===void 0&&(ht=nt),"selectionStart"in b)b.selectionStart=nt,b.selectionEnd=Math.min(ht,b.value.length);else{var _t=b.ownerDocument||document,it=_t&&_t.defaultView||window;if(it.getSelection){var ct=it.getSelection(),Yt=b.textContent.length,ne=Math.min(G.start,Yt),He=G.end===void 0?ne:Math.min(G.end,Yt);!ct.extend&&ne>He&&(v=He,He=ne,ne=v);var K=Sp(b,ne),k=Sp(b,He);if(K&&k&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var tt=_t.createRange();tt.setStart(K.node,K.offset),ct.removeAllRanges(),ne>He?(ct.addRange(tt),ct.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ct.addRange(tt))}}}}for(_t=[],ct=b;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<_t.length;b++){var mt=_t[b];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Ql=!!Bf,Ff=Bf=null}finally{De=u,j.p=r,P.T=a}}e.current=n,dn=2}}function zg(){if(dn===2){dn=0;var e=Ca,n=nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=j.p;j.p=2;var u=De;De|=4;try{ug(e,n.alternate,n)}finally{De=u,j.p=r,P.T=a}}dn=3}}function Ig(){if(dn===4||dn===3){dn=0,O();var e=Ca,n=nr,a=ea,r=Eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?dn=5:(dn=0,nr=Ca=null,Bg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ra=null),Ds(a),n=n.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(pt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,u=j.p,j.p=2,P.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var b=r[v];f(b.value,{componentStack:b.stack})}}finally{P.T=n,j.p=u}}(ea&3)!==0&&Fl(),Ui(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===bf?mo++:(mo=0,bf=e):mo=0,go(0)}}function Bg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zr(n)))}function Fl(){return Pg(),zg(),Ig(),Fg()}function Fg(){if(dn!==5)return!1;var e=Ca,n=Ef;Ef=0;var a=Ds(ea),r=P.T,u=j.p;try{j.p=32>a?32:a,P.T=null,a=Tf,Tf=null;var f=Ca,v=ea;if(dn=0,nr=Ca=null,ea=0,(De&6)!==0)throw Error(s(331));var b=De;if(De|=4,xg(f.current),_g(f,f.current,v,a),De=b,go(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(pt,f)}catch{}return!0}finally{j.p=u,P.T=r,Bg(e,n)}}function Hg(e,n,a){n=oi(a,n),n=nf(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(Nn(e,2),Ui(e))}function ze(e,n,a){if(e.tag===3)Hg(e,e,a);else for(;n!==null;){if(n.tag===3){Hg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ra===null||!Ra.has(r))){e=oi(a,e),a=Gm(2),r=ya(n,a,2),r!==null&&(Vm(a,r,n,e),Nn(r,2),Ui(r));break}}n=n.return}}function Cf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new BS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(xf=!0,u.add(a),e=kS.bind(null,e,n,a),n.then(e,e))}function kS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Se&a)===a&&(tn===4||tn===3&&(Se&62914560)===Se&&300>T()-Nl?(De&2)===0&&ir(e,0):yf|=a,er===Se&&(er=0)),Ui(e)}function Gg(e,n){n===0&&(n=Oe()),e=ts(e,n),e!==null&&(Nn(e,n),Ui(e))}function XS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Gg(e,a)}function WS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Gg(e,a)}function YS(e,n){return se(e,n)}var Hl=null,sr=null,wf=!1,Gl=!1,Df=!1,Da=0;function Ui(e){e!==sr&&e.next===null&&(sr===null?Hl=sr=e:sr=sr.next=e),Gl=!0,wf||(wf=!0,jS())}function go(e,n){if(!Df&&Gl){Df=!0;do for(var a=!1,r=Hl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Dt(42|e)+1)-1,f&=u&~(v&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Wg(r,f))}else f=Se,f=vt(r,r===ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Xt(r,f)||(a=!0,Wg(r,f));r=r.next}while(a);Df=!1}}function qS(){Vg()}function Vg(){Gl=wf=!1;var e=0;Da!==0&&ax()&&(e=Da);for(var n=T(),a=null,r=Hl;r!==null;){var u=r.next,f=kg(r,n);f===0?(r.next=null,a===null?Hl=u:a.next=u,u===null&&(sr=a)):(a=r,(e!==0||(f&3)!==0)&&(Gl=!0)),r=u}dn!==0&&dn!==5||go(e),Da!==0&&(Da=0)}function kg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Dt(f),b=1<<v,G=u[v];G===-1?((b&a)===0||(b&r)!==0)&&(u[v]=re(b,n)):G<=n&&(e.expiredLanes|=b),f&=~b}if(n=ke,a=Se,a=vt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&je(r),Ds(a)){case 2:case 8:a=Et;break;case 32:a=et;break;case 268435456:a=St;break;default:a=et}return r=Xg.bind(null,e),a=se(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function Xg(e,n){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var r=Se;return r=vt(e,e===ke?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(bg(e,r,n),kg(e,T()),e.callbackNode!=null&&e.callbackNode===a?Xg.bind(null,e):null)}function Wg(e,n){if(Fl())return null;bg(e,n,!0)}function jS(){rx(function(){(De&6)!==0?se(dt,qS):Vg()})}function Uf(){if(Da===0){var e=Xs;e===0&&(e=Rt,Rt<<=1,(Rt&261888)===0&&(Rt=256)),Da=e}return Da}function Yg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function qg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ZS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Yg((u[xn]||null).action),v=r.submitter;v&&(n=(n=v[xn]||null)?Yg(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var b=new $o("action","action",null,r,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Da!==0){var G=v?qg(u,v):new FormData(u);Ku(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(b.preventDefault(),G=v?qg(u,v):new FormData(u),Ku(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var Lf=0;Lf<du.length;Lf++){var Nf=du[Lf],KS=Nf.toLowerCase(),QS=Nf[0].toUpperCase()+Nf.slice(1);Si(KS,"on"+QS)}Si(Tp,"onAnimationEnd"),Si(bp,"onAnimationIteration"),Si(Ap,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(dS,"onTransitionRun"),Si(pS,"onTransitionStart"),Si(mS,"onTransitionCancel"),Si(Rp,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function jg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var b=r[v],G=b.instance,nt=b.currentTarget;if(b=b.listener,G!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=nt;try{f(u)}catch(ht){nl(ht)}u.currentTarget=null,f=G}else for(v=0;v<r.length;v++){if(b=r[v],G=b.instance,nt=b.currentTarget,b=b.listener,G!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=nt;try{f(u)}catch(ht){nl(ht)}u.currentTarget=null,f=G}}}}function ge(e,n){var a=n[Ir];a===void 0&&(a=n[Ir]=new Set);var r=e+"__bubble";a.has(r)||(Zg(n,e,2,!1),a.add(r))}function Of(e,n,a){var r=0;n&&(r|=4),Zg(a,e,r,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Pf(e){if(!e[Vl]){e[Vl]=!0,It.forEach(function(a){a!=="selectionchange"&&(JS.has(a)||Of(a,!1,e),Of(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,Of("selectionchange",!1,n))}}function Zg(e,n,a,r){switch(T_(n)){case 2:var u=Ax;break;case 8:u=Rx;break;default:u=Kf}a=u.bind(null,n,a,e),u=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function zf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var b=r.stateNode.containerInfo;if(b===u)break;if(v===4)for(v=r.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;b!==null;){if(v=Z(b),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){r=f=v;continue t}b=b.parentNode}}r=r.return}tp(function(){var nt=f,ht=Jc(a),_t=[];t:{var it=Cp.get(e);if(it!==void 0){var ct=$o,Yt=e;switch(e){case"keypress":if(Qo(a)===0)break t;case"keydown":case"keyup":ct=Wv;break;case"focusin":Yt="focus",ct=au;break;case"focusout":Yt="blur",ct=au;break;case"beforeblur":case"afterblur":ct=au;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=jv;break;case Tp:case bp:case Ap:ct=zv;break;case Rp:ct=Kv;break;case"scroll":case"scrollend":ct=Uv;break;case"wheel":ct=Jv;break;case"copy":case"cut":case"paste":ct=Bv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=sp;break;case"toggle":case"beforetoggle":ct=tS}var ne=(n&4)!==0,He=!ne&&(e==="scroll"||e==="scrollend"),K=ne?it!==null?it+"Capture":null:it;ne=[];for(var k=nt,tt;k!==null;){var mt=k;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||K===null||(mt=Br(k,K),mt!=null&&ne.push(vo(k,mt,tt))),He)break;k=k.return}0<ne.length&&(it=new ct(it,Yt,null,a,ht),_t.push({event:it,listeners:ne}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",it&&a!==Qc&&(Yt=a.relatedTarget||a.fromElement)&&(Z(Yt)||Yt[da]))break t;if((ct||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,ct?(Yt=a.relatedTarget||a.toElement,ct=nt,Yt=Yt?Z(Yt):null,Yt!==null&&(He=c(Yt),ne=Yt.tag,Yt!==He||ne!==5&&ne!==27&&ne!==6)&&(Yt=null)):(ct=null,Yt=nt),ct!==Yt)){if(ne=ip,mt="onMouseLeave",K="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ne=sp,mt="onPointerLeave",K="onPointerEnter",k="pointer"),He=ct==null?it:lt(ct),tt=Yt==null?it:lt(Yt),it=new ne(mt,k+"leave",ct,a,ht),it.target=He,it.relatedTarget=tt,mt=null,Z(ht)===nt&&(ne=new ne(K,k+"enter",Yt,a,ht),ne.target=tt,ne.relatedTarget=He,mt=ne),He=mt,ct&&Yt)e:{for(ne=$S,K=ct,k=Yt,tt=0,mt=K;mt;mt=ne(mt))tt++;mt=0;for(var te=k;te;te=ne(te))mt++;for(;0<tt-mt;)K=ne(K),tt--;for(;0<mt-tt;)k=ne(k),mt--;for(;tt--;){if(K===k||k!==null&&K===k.alternate){ne=K;break e}K=ne(K),k=ne(k)}ne=null}else ne=null;ct!==null&&Kg(_t,it,ct,ne,!1),Yt!==null&&He!==null&&Kg(_t,He,Yt,ne,!0)}}t:{if(it=nt?lt(nt):window,ct=it.nodeName&&it.nodeName.toLowerCase(),ct==="select"||ct==="input"&&it.type==="file")var Ce=dp;else if(fp(it))if(pp)Ce=uS;else{Ce=lS;var Kt=oS}else ct=it.nodeName,!ct||ct.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?nt&&Kc(nt.elementType)&&(Ce=dp):Ce=cS;if(Ce&&(Ce=Ce(e,nt))){hp(_t,Ce,a,ht);break t}Kt&&Kt(e,it,nt),e==="focusout"&&nt&&it.type==="number"&&nt.memoizedProps.value!=null&&hn(it,"number",it.value)}switch(Kt=nt?lt(nt):window,e){case"focusin":(fp(Kt)||Kt.contentEditable==="true")&&(zs=Kt,uu=nt,Yr=null);break;case"focusout":Yr=uu=zs=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,Mp(_t,a,ht);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":Mp(_t,a,ht)}var ue;if(ru)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Ps?cp(e,a)&&(xe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(rp&&a.locale!=="ko"&&(Ps||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ps&&(ue=ep()):(pa=ht,eu="value"in pa?pa.value:pa.textContent,Ps=!0)),Kt=kl(nt,xe),0<Kt.length&&(xe=new ap(xe,e,null,a,ht),_t.push({event:xe,listeners:Kt}),ue?xe.data=ue:(ue=up(a),ue!==null&&(xe.data=ue)))),(ue=nS?iS(e,a):aS(e,a))&&(xe=kl(nt,"onBeforeInput"),0<xe.length&&(Kt=new ap("onBeforeInput","beforeinput",null,a,ht),_t.push({event:Kt,listeners:xe}),Kt.data=ue)),ZS(_t,e,nt,a,ht)}jg(_t,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Br(e,a),u!=null&&r.unshift(vo(e,u,f)),u=Br(e,n),u!=null&&r.push(vo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function $S(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kg(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var b=a,G=b.alternate,nt=b.stateNode;if(b=b.tag,G!==null&&G===r)break;b!==5&&b!==26&&b!==27||nt===null||(G=nt,u?(nt=Br(a,f),nt!=null&&v.unshift(vo(a,nt,G))):u||(nt=Br(a,f),nt!=null&&v.push(vo(a,nt,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var tx=/\r\n?/g,ex=/\u0000|\uFFFD/g;function Qg(e){return(typeof e=="string"?e:""+e).replace(tx,`
`).replace(ex,"")}function Jg(e,n){return n=Qg(n),Qg(e)===n}function Fe(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ls(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ls(e,""+r);break;case"className":Le(e,"class",r);break;case"tabIndex":Le(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(e,a,r);break;case"style":Jd(e,r,f);break;case"data":if(n!=="object"){Le(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Zo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Fe(e,n,"name",u.name,u,null),Fe(e,n,"formEncType",u.formEncType,u,null),Fe(e,n,"formMethod",u.formMethod,u,null),Fe(e,n,"formTarget",u.formTarget,u,null)):(Fe(e,n,"encType",u.encType,u,null),Fe(e,n,"method",u.method,u,null),Fe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Zo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Hi);break;case"onScroll":r!=null&&ge("scroll",e);break;case"onScrollEnd":r!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Zo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ve(e,"popover",r);break;case"xlinkActuate":pe(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":pe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":pe(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":pe(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":pe(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":pe(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":pe(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":pe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":pe(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ve(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=wv.get(a)||a,Ve(e,a,r))}}function If(e,n,a,r,u,f){switch(a){case"style":Jd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ls(e,r):(typeof r=="number"||typeof r=="bigint")&&Ls(e,""+r);break;case"onScroll":r!=null&&ge("scroll",e);break;case"onScrollEnd":r!=null&&ge("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Ve(e,a,r)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(e,n,f,v,a,null)}}u&&Fe(e,n,"srcSet",a.srcSet,a,null),r&&Fe(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var b=f=v=u=null,G=null,nt=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":u=ht;break;case"type":v=ht;break;case"checked":G=ht;break;case"defaultChecked":nt=ht;break;case"value":f=ht;break;case"defaultValue":b=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Fe(e,n,r,ht,a,null)}}On(e,f,b,G,nt,v,u,!1);return;case"select":ge("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":v=b;break;case"multiple":r=b;default:Fe(e,n,u,b,a,null)}n=f,a=v,e.multiple=!!r,n!=null?en(e,!!r,n,!1):a!=null&&en(e,!!r,a,!0);return;case"textarea":ge("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(b=a[v],b!=null))switch(v){case"value":r=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Fe(e,n,v,b,a,null)}Ri(e,r,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(r=a[G],r!=null))switch(G){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Fe(e,n,G,r,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(r=0;r<_o.length;r++)ge(_o[r],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(r=a[nt],r!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(e,n,nt,r,a,null)}return;default:if(Kc(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&If(e,n,ht,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Fe(e,n,b,r,a,null))}function nx(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,b=null,G=null,nt=null,ht=null;for(ct in a){var _t=a[ct];if(a.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=_t;default:r.hasOwnProperty(ct)||Fe(e,n,ct,null,r,_t)}}for(var it in r){var ct=r[it];if(_t=a[it],r.hasOwnProperty(it)&&(ct!=null||_t!=null))switch(it){case"type":f=ct;break;case"name":u=ct;break;case"checked":nt=ct;break;case"defaultChecked":ht=ct;break;case"value":v=ct;break;case"defaultValue":b=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==_t&&Fe(e,n,it,ct,r,_t)}}wn(e,v,b,G,nt,ht,f,u);return;case"select":ct=v=b=it=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":ct=G;default:r.hasOwnProperty(f)||Fe(e,n,f,null,r,G)}for(u in r)if(f=r[u],G=a[u],r.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":v=f;default:f!==G&&Fe(e,n,u,f,r,G)}n=b,a=v,r=ct,it!=null?en(e,!!a,it,!1):!!r!=!!a&&(n!=null?en(e,!!a,n,!0):en(e,!!a,a?[]:"",!1));return;case"textarea":ct=it=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Fe(e,n,b,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":it=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Fe(e,n,v,u,r,f)}Us(e,it,ct);return;case"option":for(var Yt in a)if(it=a[Yt],a.hasOwnProperty(Yt)&&it!=null&&!r.hasOwnProperty(Yt))switch(Yt){case"selected":e.selected=!1;break;default:Fe(e,n,Yt,null,r,it)}for(G in r)if(it=r[G],ct=a[G],r.hasOwnProperty(G)&&it!==ct&&(it!=null||ct!=null))switch(G){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:Fe(e,n,G,it,r,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)it=a[ne],a.hasOwnProperty(ne)&&it!=null&&!r.hasOwnProperty(ne)&&Fe(e,n,ne,null,r,it);for(nt in r)if(it=r[nt],ct=a[nt],r.hasOwnProperty(nt)&&it!==ct&&(it!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Fe(e,n,nt,it,r,ct)}return;default:if(Kc(n)){for(var He in a)it=a[He],a.hasOwnProperty(He)&&it!==void 0&&!r.hasOwnProperty(He)&&If(e,n,He,void 0,r,it);for(ht in r)it=r[ht],ct=a[ht],!r.hasOwnProperty(ht)||it===ct||it===void 0&&ct===void 0||If(e,n,ht,it,r,ct);return}}for(var K in a)it=a[K],a.hasOwnProperty(K)&&it!=null&&!r.hasOwnProperty(K)&&Fe(e,n,K,null,r,it);for(_t in r)it=r[_t],ct=a[_t],!r.hasOwnProperty(_t)||it===ct||it==null&&ct==null||Fe(e,n,_t,it,r,ct)}function $g(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ix(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,b=u.duration;if(f&&b&&$g(v)){for(v=0,b=u.responseEnd,r+=1;r<a.length;r++){var G=a[r],nt=G.startTime;if(nt>b)break;var ht=G.transferSize,_t=G.initiatorType;ht&&$g(_t)&&(G=G.responseEnd,v+=ht*(G<b?1:(b-nt)/(G-nt)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Bf=null,Ff=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function t_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function e_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Hf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gf=null;function ax(){var e=window.event;return e&&e.type==="popstate"?e===Gf?!1:(Gf=e,!0):(Gf=null,!1)}var n_=typeof setTimeout=="function"?setTimeout:void 0,sx=typeof clearTimeout=="function"?clearTimeout:void 0,i_=typeof Promise=="function"?Promise:void 0,rx=typeof queueMicrotask=="function"?queueMicrotask:typeof i_<"u"?function(e){return i_.resolve(null).then(e).catch(ox)}:n_;function ox(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function a_(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),cr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")So(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,So(a);for(var f=a.firstChild;f;){var v=f.nextSibling,b=f.nodeName;f[Za]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&So(e.ownerDocument.body);a=u}while(a);cr(n)}function s_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Vf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Vf(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function lx(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Za])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function cx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function r_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function kf(e){return e.data==="$?"||e.data==="$~"}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ux(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Wf=null;function o_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function l_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function c_(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function So(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);C(e)}var di=new Map,u_=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=j.d;j.d={f:fx,r:hx,D:dx,C:px,L:mx,m:gx,X:vx,S:_x,M:Sx};function fx(){var e=na.f(),n=zl();return e||n}function hx(e){var n=rt(e);n!==null&&n.tag===5&&n.type==="form"?Rm(n):na.r(e)}var rr=typeof document>"u"?null:document;function f_(e,n,a){var r=rr;if(r&&typeof n=="string"&&n){var u=ve(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),u_.has(u)||(u_.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),bn(n,"link",e),yt(n),r.head.appendChild(n)))}}function dx(e){na.D(e),f_("dns-prefetch",e,null)}function px(e,n){na.C(e,n),f_("preconnect",e,n)}function mx(e,n,a){na.L(e,n,a);var r=rr;if(r&&e&&n){var u='link[rel="preload"][as="'+ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ve(a.imageSizes)+'"]')):u+='[href="'+ve(e)+'"]';var f=u;switch(n){case"style":f=or(e);break;case"script":f=lr(e)}di.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(xo(f))||n==="script"&&r.querySelector(yo(f))||(n=r.createElement("link"),bn(n,"link",e),yt(n),r.head.appendChild(n)))}}function gx(e,n){na.m(e,n);var a=rr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ve(r)+'"][href="'+ve(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=lr(e)}if(!di.has(f)&&(e=_({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(f)))return}r=a.createElement("link"),bn(r,"link",e),yt(r),a.head.appendChild(r)}}}function _x(e,n,a){na.S(e,n,a);var r=rr;if(r&&e){var u=Q(r).hoistableStyles,f=or(e);n=n||"default";var v=u.get(f);if(!v){var b={loading:0,preload:null};if(v=r.querySelector(xo(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Yf(e,a);var G=v=r.createElement("link");yt(G),bn(G,"link",e),G._p=new Promise(function(nt,ht){G.onload=nt,G.onerror=ht}),G.addEventListener("load",function(){b.loading|=1}),G.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:b},u.set(f,v)}}}function vx(e,n){na.X(e,n);var a=rr;if(a&&e){var r=Q(a).hoistableScripts,u=lr(e),f=r.get(u);f||(f=a.querySelector(yo(u)),f||(e=_({src:e,async:!0},n),(n=di.get(u))&&qf(e,n),f=a.createElement("script"),yt(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Sx(e,n){na.M(e,n);var a=rr;if(a&&e){var r=Q(a).hoistableScripts,u=lr(e),f=r.get(u);f||(f=a.querySelector(yo(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=di.get(u))&&qf(e,n),f=a.createElement("script"),yt(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function h_(e,n,a,r){var u=(u=st.current)?Wl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=or(a.href),a=Q(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=or(a.href);var f=Q(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(xo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||xx(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=lr(a),a=Q(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function or(e){return'href="'+ve(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function d_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function xx(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),yt(n),e.head.appendChild(n))}function lr(e){return'[src="'+ve(e)+'"]'}function yo(e){return"script[async]"+e}function p_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+ve(a.href)+'"]');if(r)return n.instance=r,yt(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),yt(r),bn(r,"style",u),Yl(r,a.precedence,e),n.instance=r;case"stylesheet":u=or(a.href);var f=e.querySelector(xo(u));if(f)return n.state.loading|=4,n.instance=f,yt(f),f;r=d_(a),(u=di.get(u))&&Yf(r,u),f=(e.ownerDocument||e).createElement("link"),yt(f);var v=f;return v._p=new Promise(function(b,G){v.onload=b,v.onerror=G}),bn(f,"link",r),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=lr(a.src),(u=e.querySelector(yo(f)))?(n.instance=u,yt(u),u):(r=a,(u=di.get(f))&&(r=_({},a),qf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),yt(u),bn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yl(r,a.precedence,e));return n.instance}function Yl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var b=r[v];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function qf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ql=null;function m_(e,n,a){if(ql===null){var r=new Map,u=ql=new Map;u.set(a,r)}else u=ql,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Za]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var b=r.get(v);b?b.push(f):r.set(v,[f])}}return r}function g_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function yx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function __(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Mx(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=or(r.href),f=n.querySelector(xo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,yt(f);return}f=n.ownerDocument||n,r=d_(r),(u=di.get(u))&&Yf(r,u),f=f.createElement("link"),yt(f);var v=f;v._p=new Promise(function(b,G){v.onload=b,v.onerror=G}),bn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var jf=0;function Ex(e,n){return e.stylesheets&&e.count===0&&Kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&jf===0&&(jf=62500*ix());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>jf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(Tx,e),Zl=null,jl.call(e))}function Tx(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var r=a.get(null);else{a=new Map,Zl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=jl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:L,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function bx(e,n,a,r,u,f,v,b,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function v_(e,n,a,r,u,f,v,b,G,nt,ht,_t){return e=new bx(e,n,a,v,G,nt,ht,_t,b),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Du(f),e}function S_(e){return e?(e=Fs,e):Fs}function x_(e,n,a,r,u,f){u=S_(u),r.context===null?r.context=u:r.pendingContext=u,r=xa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ya(e,r,n),a!==null&&(kn(a,e,n),$r(a,e,n))}function y_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Zf(e,n){y_(e,n),(e=e.alternate)&&y_(e,n)}function M_(e){if(e.tag===13||e.tag===31){var n=ts(e,67108864);n!==null&&kn(n,e,67108864),Zf(e,67108864)}}function E_(e){if(e.tag===13||e.tag===31){var n=ei();n=ws(n);var a=ts(e,n);a!==null&&kn(a,e,n),Zf(e,n)}}var Ql=!0;function Ax(e,n,a,r){var u=P.T;P.T=null;var f=j.p;try{j.p=2,Kf(e,n,a,r)}finally{j.p=f,P.T=u}}function Rx(e,n,a,r){var u=P.T;P.T=null;var f=j.p;try{j.p=8,Kf(e,n,a,r)}finally{j.p=f,P.T=u}}function Kf(e,n,a,r){if(Ql){var u=Qf(r);if(u===null)zf(e,n,r,Jl,a),b_(e,r);else if(wx(u,e,n,a,r))r.stopPropagation();else if(b_(e,r),n&4&&-1<Cx.indexOf(e)){for(;u!==null;){var f=rt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ct(f.pendingLanes);if(v!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;v;){var G=1<<31-Dt(v);b.entanglements[1]|=G,v&=~G}Ui(f),(De&6)===0&&(Ol=T()+500,go(0))}}break;case 31:case 13:b=ts(f,2),b!==null&&kn(b,f,2),zl(),Zf(f,2)}if(f=Qf(r),f===null&&zf(e,n,r,Jl,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else zf(e,n,r,null,a)}}function Qf(e){return e=Jc(e),Jf(e)}var Jl=null;function Jf(e){if(Jl=null,e=Z(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function T_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($()){case dt:return 2;case Et:return 8;case et:case Nt:return 32;case St:return 268435456;default:return 32}default:return 32}}var $f=!1,La=null,Na=null,Oa=null,Eo=new Map,To=new Map,Pa=[],Cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function b_(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=rt(n),n!==null&&M_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function wx(e,n,a,r,u){switch(n){case"focusin":return La=bo(La,e,n,a,r,u),!0;case"dragenter":return Na=bo(Na,e,n,a,r,u),!0;case"mouseover":return Oa=bo(Oa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Eo.set(f,bo(Eo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,To.set(f,bo(To.get(f)||null,e,n,a,r,u)),!0}return!1}function A_(e){var n=Z(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,zr(e.priority,function(){E_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,zr(e.priority,function(){E_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Qc=r,a.target.dispatchEvent(r),Qc=null}else return n=rt(a),n!==null&&M_(n),e.blockedOn=a,!1;n.shift()}return!0}function R_(e,n,a){$l(e)&&a.delete(n)}function Dx(){$f=!1,La!==null&&$l(La)&&(La=null),Na!==null&&$l(Na)&&(Na=null),Oa!==null&&$l(Oa)&&(Oa=null),Eo.forEach(R_),To.forEach(R_)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,$f||($f=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Dx)))}var ec=null;function C_(e){ec!==e&&(ec=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Jf(r||a)===null)continue;break}var f=rt(a);f!==null&&(e.splice(n,3),n-=3,Ku(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function cr(e){function n(G){return tc(G,e)}La!==null&&tc(La,e),Na!==null&&tc(Na,e),Oa!==null&&tc(Oa,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Pa.length;a++){var r=Pa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)A_(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[xn]||null;if(typeof f=="function")v||C_(a);else if(v){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[xn]||null)b=v.formAction;else if(Jf(u)!==null)continue}else b=v.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),C_(a)}}}function w_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function th(e){this._internalRoot=e}nc.prototype.render=th.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ei();x_(a,r,e,n,null,null)},nc.prototype.unmount=th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;x_(e.current,2,null,e,null,null),zl(),n[da]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=ja();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&A_(e)}};var D_=t.version;if(D_!=="19.2.0")throw Error(s(527,D_,"19.2.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var Ux={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{pt=ic.inject(Ux),xt=ic}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Im,f=Bm,v=Fm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=v_(e,1,!1,null,null,a,r,null,u,f,v,w_),e[da]=n.current,Pf(e),new th(n)},Ro.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Im,v=Bm,b=Fm,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=v_(e,1,!0,n,a??null,r,u,G,f,v,b,w_),n.context=S_(null),a=n.current,r=ei(),r=ws(r),u=xa(r),u.callback=null,ya(a,u,r),a=r,n.current.lanes=a,Nn(n,a),Ui(n),e[da]=n.current,Pf(e),new nc(n)},Ro.version="19.2.0",Ro}var H_;function Gx(){if(H_)return ih.exports;H_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ih.exports=Hx(),ih.exports}var Vx=Gx();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ud="180",Ar={ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kx=0,G_=1,Xx=2,Y0=1,Wx=2,la=3,Ya=0,Yn=1,ca=2,fa=0,Rr=1,V_=2,k_=3,X_=4,Yx=5,xs=100,qx=101,jx=102,Zx=103,Kx=104,Qx=200,Jx=201,$x=202,ty=203,Gh=204,Vh=205,ey=206,ny=207,iy=208,ay=209,sy=210,ry=211,oy=212,ly=213,cy=214,kh=0,Xh=1,Wh=2,wr=3,Yh=4,qh=5,jh=6,Zh=7,Ld=0,uy=1,fy=2,Wa=0,q0=1,j0=2,Z0=3,K0=4,Q0=5,J0=6,$0=7,tv=300,Dr=301,Ur=302,Kh=303,Qh=304,Xc=306,Jh=1e3,Ms=1001,$h=1002,In=1003,hy=1004,ac=1005,Ni=1006,oh=1007,Es=1008,zi=1009,ev=1010,nv=1011,Fo=1012,Nd=1013,Ts=1014,ua=1015,qa=1016,Od=1017,Pd=1018,Ho=1020,iv=35902,av=35899,sv=1021,rv=1022,bi=1023,Go=1026,Vo=1027,ov=1028,zd=1029,lv=1030,Id=1031,Bd=1033,Oc=33776,Pc=33777,zc=33778,Ic=33779,td=35840,ed=35841,nd=35842,id=35843,ad=36196,sd=37492,rd=37496,od=37808,ld=37809,cd=37810,ud=37811,fd=37812,hd=37813,dd=37814,pd=37815,md=37816,gd=37817,_d=37818,vd=37819,Sd=37820,xd=37821,yd=36492,Md=36494,Ed=36495,Td=36283,bd=36284,Ad=36285,Rd=36286,dy=3200,py=3201,Fd=0,my=1,Xa="",mi="srgb",Lr="srgb-linear",Fc="linear",Ie="srgb",ur=7680,W_=519,gy=512,_y=513,vy=514,cv=515,Sy=516,xy=517,yy=518,My=519,Y_=35044,q_="300 es",Oi=2e3,Hc=2001;class As{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Po=Math.PI/180,Cd=180/Math.PI;function Xo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Un[o&255]+Un[o>>8&255]+Un[o>>16&255]+Un[o>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]).toLowerCase()}function _e(o,t,i){return Math.max(t,Math.min(i,o))}function Ey(o,t){return(o%t+t)%t}function lh(o,t,i){return(1-i)*o+i*t}function Co(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Xn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Ty={DEG2RAD:Po};class ie{constructor(t=0,i=0){ie.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],S=s[l+2],_=s[l+3];const x=c[h+0],M=c[h+1],E=c[h+2],w=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=S,t[i+3]=_;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=w;return}if(_!==w||m!==x||p!==M||S!==E){let y=1-d;const g=m*x+p*M+S*E+_*w,N=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const H=Math.sqrt(L),I=Math.atan2(H,g*N);y=Math.sin(y*I)/H,d=Math.sin(d*I)/H}const D=d*N;if(m=m*y+x*D,p=p*y+M*D,S=S*y+E*D,_=_*y+w*D,y===1-d){const H=1/Math.sqrt(m*m+p*p+S*S+_*_);m*=H,p*=H,S*=H,_*=H}}t[i]=m,t[i+1]=p,t[i+2]=S,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],S=s[l+3],_=c[h],x=c[h+1],M=c[h+2],E=c[h+3];return t[i]=d*E+S*_+m*M-p*x,t[i+1]=m*E+S*x+p*_-d*M,t[i+2]=p*E+S*M+d*x-m*_,t[i+3]=S*E-d*_-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),S=d(l/2),_=d(c/2),x=m(s/2),M=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=x*S*_+p*M*E,this._y=p*M*_-x*S*E,this._z=p*S*E+x*M*_,this._w=p*S*_-x*M*E;break;case"YXZ":this._x=x*S*_+p*M*E,this._y=p*M*_-x*S*E,this._z=p*S*E-x*M*_,this._w=p*S*_+x*M*E;break;case"ZXY":this._x=x*S*_-p*M*E,this._y=p*M*_+x*S*E,this._z=p*S*E+x*M*_,this._w=p*S*_-x*M*E;break;case"ZYX":this._x=x*S*_-p*M*E,this._y=p*M*_+x*S*E,this._z=p*S*E-x*M*_,this._w=p*S*_+x*M*E;break;case"YZX":this._x=x*S*_+p*M*E,this._y=p*M*_+x*S*E,this._z=p*S*E-x*M*_,this._w=p*S*_-x*M*E;break;case"XZY":this._x=x*S*_-p*M*E,this._y=p*M*_-x*S*E,this._z=p*S*E+x*M*_,this._w=p*S*_+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],_=i[10],x=s+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(S-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(S-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=s*S+h*d+l*p-c*m,this._y=l*S+h*m+c*d-s*p,this._z=c*S+h*p+s*m-l*d,this._w=h*S-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),_=Math.sin((1-i)*S)/p,x=Math.sin(i*S)/p;return this._w=h*_+this._w*x,this._x=s*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,i=0,s=0){W.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(j_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(j_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),S=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*S,this.y=s+m*S+d*p-c*_,this.z=l+m*_+c*S-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ch.copy(this).projectOnVector(t),this.sub(ch)}reflect(t){return this.sub(ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new W,j_=new bs;class fe{constructor(t,i,s,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const S=this.elements;return S[0]=t,S[1]=l,S[2]=d,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],S=s[4],_=s[7],x=s[2],M=s[5],E=s[8],w=l[0],y=l[3],g=l[6],N=l[1],L=l[4],D=l[7],H=l[2],I=l[5],U=l[8];return c[0]=h*w+d*N+m*H,c[3]=h*y+d*L+m*I,c[6]=h*g+d*D+m*U,c[1]=p*w+S*N+_*H,c[4]=p*y+S*L+_*I,c[7]=p*g+S*D+_*U,c[2]=x*w+M*N+E*H,c[5]=x*y+M*L+E*I,c[8]=x*g+M*D+E*U,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8];return i*h*S-i*d*p-s*c*S+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8],_=S*h-d*p,x=d*m-S*c,M=p*c-h*m,E=i*_+s*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=_*w,t[1]=(l*p-S*s)*w,t[2]=(d*s-l*h)*w,t[3]=x*w,t[4]=(S*i-l*m)*w,t[5]=(l*c-d*i)*w,t[6]=M*w,t[7]=(s*m-p*i)*w,t[8]=(h*i-s*c)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(uh.makeScale(t,i)),this}rotate(t){return this.premultiply(uh.makeRotation(-t)),this}translate(t,i){return this.premultiply(uh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const uh=new fe;function uv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Gc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function by(){const o=Gc("canvas");return o.style.display="block",o}const Z_={};function ko(o){o in Z_||(Z_[o]=!0,console.warn(o))}function Ay(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const K_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ry(){const o={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return ko("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return ko("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Lr]:{primaries:t,whitePoint:s,transfer:Fc,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:t,whitePoint:s,transfer:Ie,toXYZ:K_,fromXYZ:Q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),o}const Ae=Ry();function ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let fr;class Cy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{fr===void 0&&(fr=Gc("canvas")),fr.width=t.width,fr.height=t.height;const l=fr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=fr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Gc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ha(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wy=0;class Hd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(fh(l[h].image)):c.push(fh(l[h]))}else c=fh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function fh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Cy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dy=0;const hh=new W;class qn extends As{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=Ms,l=Ms,c=Ni,h=Es,d=bi,m=zi,p=qn.DEFAULT_ANISOTROPY,S=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Xo(),this.name="",this.source=new Hd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hh).x}get height(){return this.source.getSize(hh).y}get depth(){return this.source.getSize(hh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==tv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jh:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case $h:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jh:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case $h:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=tv;qn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,s=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],S=m[4],_=m[8],x=m[1],M=m[5],E=m[9],w=m[2],y=m[6],g=m[10];if(Math.abs(S-x)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(S+x)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,D=(M+1)/2,H=(g+1)/2,I=(S+x)/4,U=(_+w)/4,B=(E+y)/4;return L>D&&L>H?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=I/s,c=U/s):D>H?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=I/l,c=B/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=U/c,l=B/c),this.set(s,l,c,i),this}let N=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(x-S)*(x-S));return Math.abs(N)<.001&&(N=1),this.x=(y-E)/N,this.y=(_-w)/N,this.z=(x-S)/N,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uy extends As{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new qn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ni,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Hd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends Uy{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class fv extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ly extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(t=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Mi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Mi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Mi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Mi):Mi.fromBufferAttribute(c,h),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),rc.subVectors(this.max,wo),hr.subVectors(t.a,wo),dr.subVectors(t.b,wo),pr.subVectors(t.c,wo),Ia.subVectors(dr,hr),Ba.subVectors(pr,dr),ds.subVectors(hr,pr);let i=[0,-Ia.z,Ia.y,0,-Ba.z,Ba.y,0,-ds.z,ds.y,Ia.z,0,-Ia.x,Ba.z,0,-Ba.x,ds.z,0,-ds.x,-Ia.y,Ia.x,0,-Ba.y,Ba.x,0,-ds.y,ds.x,0];return!dh(i,hr,dr,pr,rc)||(i=[1,0,0,0,1,0,0,0,1],!dh(i,hr,dr,pr,rc))?!1:(oc.crossVectors(Ia,Ba),i=[oc.x,oc.y,oc.z],dh(i,hr,dr,pr,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ia=[new W,new W,new W,new W,new W,new W,new W,new W],Mi=new W,sc=new Wo,hr=new W,dr=new W,pr=new W,Ia=new W,Ba=new W,ds=new W,wo=new W,rc=new W,oc=new W,ps=new W;function dh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){ps.fromArray(o,c);const d=l.x*Math.abs(ps.x)+l.y*Math.abs(ps.y)+l.z*Math.abs(ps.z),m=t.dot(ps),p=i.dot(ps),S=s.dot(ps);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const Ny=new Wo,Do=new W,ph=new W;class Wc{constructor(t=new W,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ny.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Do,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ph.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(ph)),this.expandByPoint(Do.copy(t.center).sub(ph))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const aa=new W,mh=new W,lc=new W,Fa=new W,gh=new W,cc=new W,_h=new W;class Gd{constructor(t=new W,i=new W(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){mh.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(mh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(lc),d=Fa.dot(this.direction),m=-Fa.dot(lc),p=Fa.lengthSq(),S=Math.abs(1-h*h);let _,x,M,E;if(S>0)if(_=h*m-d,x=h*d-m,E=c*S,_>=0)if(x>=-E)if(x<=E){const w=1/S;_*=w,x*=w,M=_*(_+h*x+2*d)+x*(h*_+x+2*m)+p}else x=c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-h*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(_=Math.max(0,-(h*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+x*(x+2*m)+p);else x=h>0?-c:c,_=Math.max(0,-(h*x+d)),M=-_*_+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(mh).addScaledVector(lc,x),M}intersectSphere(t,i){aa.subVectors(t.center,this.origin);const s=aa.dot(this.direction),l=aa.dot(aa)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),S>=0?(c=(t.min.y-x.y)*S,h=(t.max.y-x.y)*S):(c=(t.max.y-x.y)*S,h=(t.min.y-x.y)*S),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-x.z)*_,m=(t.max.z-x.z)*_):(d=(t.max.z-x.z)*_,m=(t.min.z-x.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,aa)!==null}intersectTriangle(t,i,s,l,c){gh.subVectors(i,t),cc.subVectors(s,t),_h.crossVectors(gh,cc);let h=this.direction.dot(_h),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Fa.subVectors(this.origin,t);const m=d*this.direction.dot(cc.crossVectors(Fa,cc));if(m<0)return null;const p=d*this.direction.dot(gh.cross(Fa));if(p<0||m+p>h)return null;const S=-d*Fa.dot(_h);return S<0?null:this.at(S/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,c,h,d,m,p,S,_,x,M,E,w,y){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,S,_,x,M,E,w,y)}set(t,i,s,l,c,h,d,m,p,S,_,x,M,E,w,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=h,g[9]=d,g[13]=m,g[2]=p,g[6]=S,g[10]=_,g[14]=x,g[3]=M,g[7]=E,g[11]=w,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/mr.setFromMatrixColumn(t,0).length(),c=1/mr.setFromMatrixColumn(t,1).length(),h=1/mr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const x=h*S,M=h*_,E=d*S,w=d*_;i[0]=m*S,i[4]=-m*_,i[8]=p,i[1]=M+E*p,i[5]=x-w*p,i[9]=-d*m,i[2]=w-x*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*S,M=m*_,E=p*S,w=p*_;i[0]=x+w*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*_,i[5]=h*S,i[9]=-d,i[2]=M*d-E,i[6]=w+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*S,M=m*_,E=p*S,w=p*_;i[0]=x-w*d,i[4]=-h*_,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*S,i[9]=w-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*S,M=h*_,E=d*S,w=d*_;i[0]=m*S,i[4]=E*p-M,i[8]=x*p+w,i[1]=m*_,i[5]=w*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,E=d*m,w=d*p;i[0]=m*S,i[4]=w-x*_,i[8]=E*_+M,i[1]=_,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=M*_+E,i[10]=x-w*_}else if(t.order==="XZY"){const x=h*m,M=h*p,E=d*m,w=d*p;i[0]=m*S,i[4]=-_,i[8]=p*S,i[1]=x*_+w,i[5]=h*S,i[9]=M*_-E,i[2]=E*_-M,i[6]=d*S,i[10]=w*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Oy,t,Py)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ha.crossVectors(s,ni),Ha.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ha.crossVectors(s,ni)),Ha.normalize(),uc.crossVectors(ni,Ha),l[0]=Ha.x,l[4]=uc.x,l[8]=ni.x,l[1]=Ha.y,l[5]=uc.y,l[9]=ni.y,l[2]=Ha.z,l[6]=uc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],S=s[1],_=s[5],x=s[9],M=s[13],E=s[2],w=s[6],y=s[10],g=s[14],N=s[3],L=s[7],D=s[11],H=s[15],I=l[0],U=l[4],B=l[8],A=l[12],R=l[1],F=l[5],Y=l[9],J=l[13],ut=l[2],ot=l[6],P=l[10],j=l[14],q=l[3],gt=l[7],Mt=l[11],z=l[15];return c[0]=h*I+d*R+m*ut+p*q,c[4]=h*U+d*F+m*ot+p*gt,c[8]=h*B+d*Y+m*P+p*Mt,c[12]=h*A+d*J+m*j+p*z,c[1]=S*I+_*R+x*ut+M*q,c[5]=S*U+_*F+x*ot+M*gt,c[9]=S*B+_*Y+x*P+M*Mt,c[13]=S*A+_*J+x*j+M*z,c[2]=E*I+w*R+y*ut+g*q,c[6]=E*U+w*F+y*ot+g*gt,c[10]=E*B+w*Y+y*P+g*Mt,c[14]=E*A+w*J+y*j+g*z,c[3]=N*I+L*R+D*ut+H*q,c[7]=N*U+L*F+D*ot+H*gt,c[11]=N*B+L*Y+D*P+H*Mt,c[15]=N*A+L*J+D*j+H*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],S=t[2],_=t[6],x=t[10],M=t[14],E=t[3],w=t[7],y=t[11],g=t[15];return E*(+c*m*_-l*p*_-c*d*x+s*p*x+l*d*M-s*m*M)+w*(+i*m*M-i*p*x+c*h*x-l*h*M+l*p*S-c*m*S)+y*(+i*p*_-i*d*M-c*h*_+s*h*M+c*d*S-s*p*S)+g*(-l*d*S-i*m*_+i*d*x+l*h*_-s*h*x+s*m*S)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],S=t[8],_=t[9],x=t[10],M=t[11],E=t[12],w=t[13],y=t[14],g=t[15],N=_*y*p-w*x*p+w*m*M-d*y*M-_*m*g+d*x*g,L=E*x*p-S*y*p-E*m*M+h*y*M+S*m*g-h*x*g,D=S*w*p-E*_*p+E*d*M-h*w*M-S*d*g+h*_*g,H=E*_*m-S*w*m-E*d*x+h*w*x+S*d*y-h*_*y,I=i*N+s*L+l*D+c*H;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/I;return t[0]=N*U,t[1]=(w*x*c-_*y*c-w*l*M+s*y*M+_*l*g-s*x*g)*U,t[2]=(d*y*c-w*m*c+w*l*p-s*y*p-d*l*g+s*m*g)*U,t[3]=(_*m*c-d*x*c-_*l*p+s*x*p+d*l*M-s*m*M)*U,t[4]=L*U,t[5]=(S*y*c-E*x*c+E*l*M-i*y*M-S*l*g+i*x*g)*U,t[6]=(E*m*c-h*y*c-E*l*p+i*y*p+h*l*g-i*m*g)*U,t[7]=(h*x*c-S*m*c+S*l*p-i*x*p-h*l*M+i*m*M)*U,t[8]=D*U,t[9]=(E*_*c-S*w*c-E*s*M+i*w*M+S*s*g-i*_*g)*U,t[10]=(h*w*c-E*d*c+E*s*p-i*w*p-h*s*g+i*d*g)*U,t[11]=(S*d*c-h*_*c-S*s*p+i*_*p+h*s*M-i*d*M)*U,t[12]=H*U,t[13]=(S*w*l-E*_*l+E*s*x-i*w*x-S*s*y+i*_*y)*U,t[14]=(E*d*l-h*w*l-E*s*m+i*w*m+h*s*y-i*d*y)*U,t[15]=(h*_*l-S*d*l+S*s*m-i*_*m-h*s*x+i*d*x)*U,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,S=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+s,S*m-l*h,0,p*m-l*d,S*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,S=h+h,_=d+d,x=c*p,M=c*S,E=c*_,w=h*S,y=h*_,g=d*_,N=m*p,L=m*S,D=m*_,H=s.x,I=s.y,U=s.z;return l[0]=(1-(w+g))*H,l[1]=(M+D)*H,l[2]=(E-L)*H,l[3]=0,l[4]=(M-D)*I,l[5]=(1-(x+g))*I,l[6]=(y+N)*I,l[7]=0,l[8]=(E+L)*U,l[9]=(y-N)*U,l[10]=(1-(x+w))*U,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=mr.set(l[0],l[1],l[2]).length();const h=mr.set(l[4],l[5],l[6]).length(),d=mr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,S=1/h,_=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=S,Ei.elements[5]*=S,Ei.elements[6]*=S,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,i.setFromRotationMatrix(Ei),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Oi,m=!1){const p=this.elements,S=2*c/(i-t),_=2*c/(s-l),x=(i+t)/(i-t),M=(s+l)/(s-l);let E,w;if(m)E=c/(h-c),w=h*c/(h-c);else if(d===Oi)E=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Hc)E=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Oi,m=!1){const p=this.elements,S=2/(i-t),_=2/(s-l),x=-(i+t)/(i-t),M=-(s+l)/(s-l);let E,w;if(m)E=1/(h-c),w=h/(h-c);else if(d===Oi)E=-2/(h-c),w=-(h+c)/(h-c);else if(d===Hc)E=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const mr=new W,Ei=new Je,Oy=new W(0,0,0),Py=new W(1,1,1),Ha=new W,uc=new W,ni=new W,J_=new Je,$_=new bs;class Bi{constructor(t=0,i=0,s=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],_=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-_e(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return J_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(J_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return $_.setFromEuler(this),this.setFromQuaternion($_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class hv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zy=0;const t0=new W,gr=new bs,sa=new Je,fc=new W,Uo=new W,Iy=new W,By=new bs,e0=new W(1,0,0),n0=new W(0,1,0),i0=new W(0,0,1),a0={type:"added"},Fy={type:"removed"},_r={type:"childadded",child:null},vh={type:"childremoved",child:null};class Cn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const t=new W,i=new Bi,s=new bs,l=new W(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new fe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.multiply(gr),this}rotateOnWorldAxis(t,i){return gr.setFromAxisAngle(t,i),this.quaternion.premultiply(gr),this}rotateX(t){return this.rotateOnAxis(e0,t)}rotateY(t){return this.rotateOnAxis(n0,t)}rotateZ(t){return this.rotateOnAxis(i0,t)}translateOnAxis(t,i){return t0.copy(t).applyQuaternion(this.quaternion),this.position.add(t0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(e0,t)}translateY(t){return this.translateOnAxis(n0,t)}translateZ(t){return this.translateOnAxis(i0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?fc.copy(t):fc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Uo,fc,this.up):sa.lookAt(fc,Uo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),gr.setFromRotationMatrix(sa),this.quaternion.premultiply(gr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(a0),_r.child=t,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Fy),vh.child=t,this.dispatchEvent(vh),vh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(a0),_r.child=t,this.dispatchEvent(_r),_r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,Iy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,By,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),S=h(t.images),_=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),_.length>0&&(s.shapes=_),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new W(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new W,ra=new W,Sh=new W,oa=new W,vr=new W,Sr=new W,s0=new W,xh=new W,yh=new W,Mh=new W,Eh=new Qe,Th=new Qe,bh=new Qe;class _i{constructor(t=new W,i=new W,s=new W){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ti.subVectors(l,i),ra.subVectors(s,i),Sh.subVectors(t,i);const h=Ti.dot(Ti),d=Ti.dot(ra),m=Ti.dot(Sh),p=ra.dot(ra),S=ra.dot(Sh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,M=(p*m-d*S)*x,E=(h*S-d*m)*x;return c.set(1-M-E,E,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(h,oa.y),m.addScaledVector(d,oa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Eh.setScalar(0),Th.setScalar(0),bh.setScalar(0),Eh.fromBufferAttribute(t,i),Th.fromBufferAttribute(t,s),bh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Eh,c.x),h.addScaledVector(Th,c.y),h.addScaledVector(bh,c.z),h}static isFrontFacing(t,i,s,l){return Ti.subVectors(s,i),ra.subVectors(t,i),Ti.cross(ra).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Ti.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return _i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return _i.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return _i.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return _i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return _i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;vr.subVectors(l,s),Sr.subVectors(c,s),xh.subVectors(t,s);const m=vr.dot(xh),p=Sr.dot(xh);if(m<=0&&p<=0)return i.copy(s);yh.subVectors(t,l);const S=vr.dot(yh),_=Sr.dot(yh);if(S>=0&&_<=S)return i.copy(l);const x=m*_-S*p;if(x<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(s).addScaledVector(vr,h);Mh.subVectors(t,c);const M=vr.dot(Mh),E=Sr.dot(Mh);if(E>=0&&M<=E)return i.copy(c);const w=M*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(s).addScaledVector(Sr,d);const y=S*E-M*_;if(y<=0&&_-S>=0&&M-E>=0)return s0.subVectors(c,l),d=(_-S)/(_-S+(M-E)),i.copy(l).addScaledVector(s0,d);const g=1/(y+w+x);return h=w*g,d=x*g,i.copy(s).addScaledVector(vr,h).addScaledVector(Sr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},hc={h:0,s:0,l:0};function Ah(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ae.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ae.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ae.workingColorSpace){if(t=Ey(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Ah(h,c,t+1/3),this.g=Ah(h,c,t),this.b=Ah(h,c,t-1/3)}return Ae.colorSpaceToWorking(this,l),this}setStyle(t,i=mi){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=mi){const s=dv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return Ae.workingToColorSpace(Ln.copy(this),t),Math.round(_e(Ln.r*255,0,255))*65536+Math.round(_e(Ln.g*255,0,255))*256+Math.round(_e(Ln.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ae.workingColorSpace){Ae.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,c=Ln.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=S<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=S,t}getRGB(t,i=Ae.workingColorSpace){return Ae.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=mi){Ae.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(hc);const s=lh(Ga.h,hc.h,i),l=lh(Ga.s,hc.s,i),c=lh(Ga.l,hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new be;be.NAMES=dv;let Hy=0;class Rs extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=Rr,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Vh,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=W_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(s.blending=this.blending),this.side!==Ya&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Gh&&(s.blendSrc=this.blendSrc),this.blendDst!==Vh&&(s.blendDst=this.blendDst),this.blendEquation!==xs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==W_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zo extends Rs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new W,dc=new ie;let Gy=0;class Pi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Y_,this.updateRanges=[],this.gpuType=ua,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Co(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Y_&&(t.usage=this.usage),t}}class pv extends Pi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class mv extends Pi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class sn extends Pi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Vy=0;const pi=new Je,Rh=new Cn,xr=new W,ii=new Wo,Lo=new Wo,Sn=new W;class ai extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uv(t)?mv:pv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,s){return pi.makeTranslation(t,i,s),this.applyMatrix4(pi),this}scale(t,i,s){return pi.makeScale(t,i,s),this.applyMatrix4(pi),this}lookAt(t){return Rh.lookAt(t),Rh.updateMatrix(),this.applyMatrix4(Rh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new sn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ii.min,Lo.min),ii.expandByPoint(Sn),Sn.addVectors(ii.max,Lo.max),ii.expandByPoint(Sn)):(ii.expandByPoint(Lo.min),ii.expandByPoint(Lo.max))}ii.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)Sn.fromBufferAttribute(d,p),m&&(xr.fromBufferAttribute(t,p),Sn.add(xr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let B=0;B<s.count;B++)d[B]=new W,m[B]=new W;const p=new W,S=new W,_=new W,x=new ie,M=new ie,E=new ie,w=new W,y=new W;function g(B,A,R){p.fromBufferAttribute(s,B),S.fromBufferAttribute(s,A),_.fromBufferAttribute(s,R),x.fromBufferAttribute(c,B),M.fromBufferAttribute(c,A),E.fromBufferAttribute(c,R),S.sub(p),_.sub(p),M.sub(x),E.sub(x);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(w.copy(S).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(F),y.copy(_).multiplyScalar(M.x).addScaledVector(S,-E.x).multiplyScalar(F),d[B].add(w),d[A].add(w),d[R].add(w),m[B].add(y),m[A].add(y),m[R].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let B=0,A=N.length;B<A;++B){const R=N[B],F=R.start,Y=R.count;for(let J=F,ut=F+Y;J<ut;J+=3)g(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const L=new W,D=new W,H=new W,I=new W;function U(B){H.fromBufferAttribute(l,B),I.copy(H);const A=d[B];L.copy(A),L.sub(H.multiplyScalar(H.dot(A))).normalize(),D.crossVectors(I,A);const F=D.dot(m[B])<0?-1:1;h.setXYZW(B,L.x,L.y,L.z,F)}for(let B=0,A=N.length;B<A;++B){const R=N[B],F=R.start,Y=R.count;for(let J=F,ut=F+Y;J<ut;J+=3)U(t.getX(J+0)),U(t.getX(J+1)),U(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Pi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new W,c=new W,h=new W,d=new W,m=new W,p=new W,S=new W,_=new W;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),w=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,y),S.subVectors(h,c),_.subVectors(l,c),S.cross(_),d.fromBufferAttribute(s,E),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,y),d.add(S),m.add(S),p.add(S),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,c),_.subVectors(l,c),S.cross(_),s.setXYZ(x+0,S.x,S.y,S.z),s.setXYZ(x+1,S.x,S.y,S.z),s.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,S=d.itemSize,_=d.normalized,x=new p.constructor(m.length*S);let M=0,E=0;for(let w=0,y=m.length;w<y;w++){d.isInterleavedBufferAttribute?M=m[w]*d.data.stride+d.offset:M=m[w]*S;for(let g=0;g<S;g++)x[E++]=p[M++]}return new Pi(x,S,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ai,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let S=0,_=p.length;S<_;S++){const x=p[S],M=t(x,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];S.push(M.toJSON(t.data))}S.length>0&&(l[m]=S,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=t.morphAttributes;for(const p in c){const S=[],_=c[p];for(let x=0,M=_.length;x<M;x++)S.push(_[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,S=h.length;p<S;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const r0=new Je,ms=new Gd,pc=new Wc,o0=new W,mc=new W,gc=new W,_c=new W,Ch=new W,vc=new W,l0=new W,Sc=new W;class Rn extends Cn{constructor(t=new ai,i=new zo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=d[m],_=c[m];S!==0&&(Ch.fromBufferAttribute(_,t),h?vc.addScaledVector(Ch,S):vc.addScaledVector(Ch.sub(i),S))}i.add(vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(c),ms.copy(t.ray).recast(t.near),!(pc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(pc,o0)===null||ms.origin.distanceToSquared(o0)>(t.far-t.near)**2))&&(r0.copy(c).invert(),ms.copy(t.ray).applyMatrix4(r0),!(s.boundingBox!==null&&ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ms)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,_=c.attributes.normal,x=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,w=x.length;E<w;E++){const y=x[E],g=h[y.materialIndex],N=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=N,H=L;D<H;D+=3){const I=d.getX(D),U=d.getX(D+1),B=d.getX(D+2);l=xc(this,g,t,s,p,S,_,I,U,B),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let y=E,g=w;y<g;y+=3){const N=d.getX(y),L=d.getX(y+1),D=d.getX(y+2);l=xc(this,h,t,s,p,S,_,N,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,w=x.length;E<w;E++){const y=x[E],g=h[y.materialIndex],N=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=N,H=L;D<H;D+=3){const I=D,U=D+1,B=D+2;l=xc(this,g,t,s,p,S,_,I,U,B),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=E,g=w;y<g;y+=3){const N=y,L=y+1,D=y+2;l=xc(this,h,t,s,p,S,_,N,L,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ky(o,t,i,s,l,c,h,d){let m;if(t.side===Yn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Ya,d),m===null)return null;Sc.copy(d),Sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:o}}function xc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,mc),o.getVertexPosition(m,gc),o.getVertexPosition(p,_c);const S=ky(o,t,i,s,mc,gc,_c,l0);if(S){const _=new W;_i.getBarycoord(l0,mc,gc,_c,_),l&&(S.uv=_i.getInterpolatedAttribute(l,d,m,p,_,new ie)),c&&(S.uv1=_i.getInterpolatedAttribute(c,d,m,p,_,new ie)),h&&(S.normal=_i.getInterpolatedAttribute(h,d,m,p,_,new W),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new W,materialIndex:0};_i.getNormal(mc,gc,_c,x.normal),S.face=x,S.barycoord=_}return S}class Yo extends ai{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],S=[],_=[];let x=0,M=0;E("z","y","x",-1,-1,s,i,t,h,c,0),E("z","y","x",1,-1,s,i,-t,h,c,1),E("x","z","y",1,1,t,s,i,l,h,2),E("x","z","y",1,-1,t,s,-i,l,h,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new sn(p,3)),this.setAttribute("normal",new sn(S,3)),this.setAttribute("uv",new sn(_,2));function E(w,y,g,N,L,D,H,I,U,B,A){const R=D/U,F=H/B,Y=D/2,J=H/2,ut=I/2,ot=U+1,P=B+1;let j=0,q=0;const gt=new W;for(let Mt=0;Mt<P;Mt++){const z=Mt*F-J;for(let at=0;at<ot;at++){const bt=at*R-Y;gt[w]=bt*N,gt[y]=z*L,gt[g]=ut,p.push(gt.x,gt.y,gt.z),gt[w]=0,gt[y]=0,gt[g]=I>0?1:-1,S.push(gt.x,gt.y,gt.z),_.push(at/U),_.push(1-Mt/B),j+=1}}for(let Mt=0;Mt<B;Mt++)for(let z=0;z<U;z++){const at=x+z+ot*Mt,bt=x+z+ot*(Mt+1),Ut=x+(z+1)+ot*(Mt+1),Pt=x+(z+1)+ot*Mt;m.push(at,bt,Pt),m.push(bt,Ut,Pt),q+=6}d.addGroup(M,q,A),M+=q,x+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const s=Nr(o[i]);for(const l in s)t[l]=s[l]}return t}function Xy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function gv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const Vd={clone:Nr,merge:zn};var Wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends Rs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wy,this.fragmentShader=Yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=Xy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class _v extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new W,c0=new ie,u0=new ie;class gi extends _v{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Cd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cd*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,c0,u0),i.subVectors(u0,c0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Po*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const yr=-90,Mr=1;class qy extends Cn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(yr,Mr,t,i);l.layers=this.layers,this.add(l);const c=new gi(yr,Mr,t,i);c.layers=this.layers,this.add(c);const h=new gi(yr,Mr,t,i);h.layers=this.layers,this.add(h);const d=new gi(yr,Mr,t,i);d.layers=this.layers,this.add(d);const m=new gi(yr,Mr,t,i);m.layers=this.layers,this.add(m);const p=new gi(yr,Mr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Oi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,S]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=w,t.setRenderTarget(s,5,l),t.render(i,S),t.setRenderTarget(_,x,M),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class vv extends qn{constructor(t=[],i=Dr,s,l,c,h,d,m,p,S){super(t,i,s,l,c,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jy extends Ii{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new vv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yo(5,5,5),c=new vi({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:fa});c.uniforms.tEquirect.value=i;const h=new Rn(l,c),d=i.minFilter;return i.minFilter===Es&&(i.minFilter=Ni),new qy(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class yc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zy={type:"move"};class wh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const w of t.hand.values()){const y=i.getJointPose(w,s),g=this._getHandJoint(p,w);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const S=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=S.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Zy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new yc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Ky extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Dh=new W,Qy=new W,Jy=new fe;class ka{constructor(t=new W(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Dh.subVectors(s,i).cross(Qy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Dh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Jy.getNormalMatrix(t),l=this.coplanarPoint(Dh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Wc,$y=new ie(.5,.5),Mc=new W;class kd{constructor(t=new ka,i=new ka,s=new ka,l=new ka,c=new ka,h=new ka){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Oi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],S=c[4],_=c[5],x=c[6],M=c[7],E=c[8],w=c[9],y=c[10],g=c[11],N=c[12],L=c[13],D=c[14],H=c[15];if(l[0].setComponents(p-h,M-S,g-E,H-N).normalize(),l[1].setComponents(p+h,M+S,g+E,H+N).normalize(),l[2].setComponents(p+d,M+_,g+w,H+L).normalize(),l[3].setComponents(p-d,M-_,g-w,H-L).normalize(),s)l[4].setComponents(m,x,y,D).normalize(),l[5].setComponents(p-m,M-x,g-y,H-D).normalize();else if(l[4].setComponents(p-m,M-x,g-y,H-D).normalize(),i===Oi)l[5].setComponents(p+m,M+x,g+y,H+D).normalize();else if(i===Hc)l[5].setComponents(m,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const i=$y.distanceTo(t.center);return gs.radius=.7071067811865476+i,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Mc.x=l.normal.x>0?t.max.x:t.min.x,Mc.y=l.normal.y>0?t.max.y:t.min.y,Mc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sv extends Rs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vc=new W,kc=new W,f0=new Je,No=new Gd,Ec=new Wc,Uh=new W,h0=new W;class tM extends Cn{constructor(t=new ai,i=new Sv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Vc.fromBufferAttribute(i,l-1),kc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Vc.distanceTo(kc);t.setAttribute("lineDistance",new sn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ec.copy(s.boundingSphere),Ec.applyMatrix4(l),Ec.radius+=c,t.ray.intersectsSphere(Ec)===!1)return;f0.copy(l).invert(),No.copy(t.ray).applyMatrix4(f0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,S=s.index,x=s.attributes.position;if(S!==null){const M=Math.max(0,h.start),E=Math.min(S.count,h.start+h.count);for(let w=M,y=E-1;w<y;w+=p){const g=S.getX(w),N=S.getX(w+1),L=Tc(this,t,No,m,g,N,w);L&&i.push(L)}if(this.isLineLoop){const w=S.getX(E-1),y=S.getX(M),g=Tc(this,t,No,m,w,y,E-1);g&&i.push(g)}}else{const M=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let w=M,y=E-1;w<y;w+=p){const g=Tc(this,t,No,m,w,w+1,w);g&&i.push(g)}if(this.isLineLoop){const w=Tc(this,t,No,m,E-1,M,E-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Tc(o,t,i,s,l,c,h){const d=o.geometry.attributes.position;if(Vc.fromBufferAttribute(d,l),kc.fromBufferAttribute(d,c),i.distanceSqToSegment(Vc,kc,Uh,h0)>s)return;Uh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Uh);if(!(p<t.near||p>t.far))return{distance:p,point:h0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const d0=new W,p0=new W;class eM extends tM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)d0.fromBufferAttribute(i,l),p0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+d0.distanceTo(p0);t.setAttribute("lineDistance",new sn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xd extends qn{constructor(t,i,s=Ts,l,c,h,d=In,m=In,p,S=Go,_=1){if(S!==Go&&S!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,c,h,d,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class xv extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wd extends ai{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const S=[],_=[],x=[],M=[];let E=0;const w=[],y=s/2;let g=0;N(),h===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(S),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(M,2));function N(){const D=new W,H=new W;let I=0;const U=(i-t)/s;for(let B=0;B<=c;B++){const A=[],R=B/c,F=R*(i-t)+t;for(let Y=0;Y<=l;Y++){const J=Y/l,ut=J*m+d,ot=Math.sin(ut),P=Math.cos(ut);H.x=F*ot,H.y=-R*s+y,H.z=F*P,_.push(H.x,H.y,H.z),D.set(ot,U,P).normalize(),x.push(D.x,D.y,D.z),M.push(J,1-R),A.push(E++)}w.push(A)}for(let B=0;B<l;B++)for(let A=0;A<c;A++){const R=w[A][B],F=w[A+1][B],Y=w[A+1][B+1],J=w[A][B+1];(t>0||A!==0)&&(S.push(R,F,J),I+=3),(i>0||A!==c-1)&&(S.push(F,Y,J),I+=3)}p.addGroup(g,I,0),g+=I}function L(D){const H=E,I=new ie,U=new W;let B=0;const A=D===!0?t:i,R=D===!0?1:-1;for(let Y=1;Y<=l;Y++)_.push(0,y*R,0),x.push(0,R,0),M.push(.5,.5),E++;const F=E;for(let Y=0;Y<=l;Y++){const ut=Y/l*m+d,ot=Math.cos(ut),P=Math.sin(ut);U.x=A*P,U.y=y*R,U.z=A*ot,_.push(U.x,U.y,U.z),x.push(0,R,0),I.x=ot*.5+.5,I.y=P*.5*R+.5,M.push(I.x,I.y),E++}for(let Y=0;Y<l;Y++){const J=H+Y,ut=F+Y;D===!0?S.push(ut,ut+1,J):S.push(ut+1,ut,J),B+=3}p.addGroup(g,B,D===!0?1:2),g+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wd(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yd extends ai{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],h=[];d(l),p(s),S(),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(c.slice(),3)),this.setAttribute("uv",new sn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(N){const L=new W,D=new W,H=new W;for(let I=0;I<i.length;I+=3)M(i[I+0],L),M(i[I+1],D),M(i[I+2],H),m(L,D,H,N)}function m(N,L,D,H){const I=H+1,U=[];for(let B=0;B<=I;B++){U[B]=[];const A=N.clone().lerp(D,B/I),R=L.clone().lerp(D,B/I),F=I-B;for(let Y=0;Y<=F;Y++)Y===0&&B===I?U[B][Y]=A:U[B][Y]=A.clone().lerp(R,Y/F)}for(let B=0;B<I;B++)for(let A=0;A<2*(I-B)-1;A++){const R=Math.floor(A/2);A%2===0?(x(U[B][R+1]),x(U[B+1][R]),x(U[B][R])):(x(U[B][R+1]),x(U[B+1][R+1]),x(U[B+1][R]))}}function p(N){const L=new W;for(let D=0;D<c.length;D+=3)L.x=c[D+0],L.y=c[D+1],L.z=c[D+2],L.normalize().multiplyScalar(N),c[D+0]=L.x,c[D+1]=L.y,c[D+2]=L.z}function S(){const N=new W;for(let L=0;L<c.length;L+=3){N.x=c[L+0],N.y=c[L+1],N.z=c[L+2];const D=y(N)/2/Math.PI+.5,H=g(N)/Math.PI+.5;h.push(D,1-H)}E(),_()}function _(){for(let N=0;N<h.length;N+=6){const L=h[N+0],D=h[N+2],H=h[N+4],I=Math.max(L,D,H),U=Math.min(L,D,H);I>.9&&U<.1&&(L<.2&&(h[N+0]+=1),D<.2&&(h[N+2]+=1),H<.2&&(h[N+4]+=1))}}function x(N){c.push(N.x,N.y,N.z)}function M(N,L){const D=N*3;L.x=t[D+0],L.y=t[D+1],L.z=t[D+2]}function E(){const N=new W,L=new W,D=new W,H=new W,I=new ie,U=new ie,B=new ie;for(let A=0,R=0;A<c.length;A+=9,R+=6){N.set(c[A+0],c[A+1],c[A+2]),L.set(c[A+3],c[A+4],c[A+5]),D.set(c[A+6],c[A+7],c[A+8]),I.set(h[R+0],h[R+1]),U.set(h[R+2],h[R+3]),B.set(h[R+4],h[R+5]),H.copy(N).add(L).add(D).divideScalar(3);const F=y(H);w(I,R+0,N,F),w(U,R+2,L,F),w(B,R+4,D,F)}}function w(N,L,D,H){H<0&&N.x===1&&(h[L]=N.x-1),D.x===0&&D.z===0&&(h[L]=H/2/Math.PI+.5)}function y(N){return Math.atan2(N.z,-N.x)}function g(N){return Math.atan2(-N.y,Math.sqrt(N.x*N.x+N.z*N.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yd(t.vertices,t.indices,t.radius,t.details)}}const bc=new W,Ac=new W,Lh=new W,Rc=new _i;class nM extends ai{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Po*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],S=["a","b","c"],_=new Array(3),x={},M=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:w,b:y,c:g}=Rc;if(w.fromBufferAttribute(d,p[0]),y.fromBufferAttribute(d,p[1]),g.fromBufferAttribute(d,p[2]),Rc.getNormal(Lh),_[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,_[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,_[2]=`${Math.round(g.x*l)},${Math.round(g.y*l)},${Math.round(g.z*l)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let N=0;N<3;N++){const L=(N+1)%3,D=_[N],H=_[L],I=Rc[S[N]],U=Rc[S[L]],B=`${D}_${H}`,A=`${H}_${D}`;A in x&&x[A]?(Lh.dot(x[A].normal)<=c&&(M.push(I.x,I.y,I.z),M.push(U.x,U.y,U.z)),x[A]=null):B in x||(x[B]={index0:p[N],index1:p[L],normal:Lh.clone()})}}for(const E in x)if(x[E]){const{index0:w,index1:y}=x[E];bc.fromBufferAttribute(d,w),Ac.fromBufferAttribute(d,y),M.push(bc.x,bc.y,bc.z),M.push(Ac.x,Ac.y,Ac.z)}this.setAttribute("position",new sn(M,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Io extends Yd{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Io(t.radius,t.detail)}}class Yc extends ai{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,S=m+1,_=t/d,x=i/m,M=[],E=[],w=[],y=[];for(let g=0;g<S;g++){const N=g*x-h;for(let L=0;L<p;L++){const D=L*_-c;E.push(D,-N,0),w.push(0,0,1),y.push(L/d),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let N=0;N<d;N++){const L=N+p*g,D=N+p*(g+1),H=N+1+p*(g+1),I=N+1+p*g;M.push(L,D,I),M.push(D,H,I)}this.setIndex(M),this.setAttribute("position",new sn(E,3)),this.setAttribute("normal",new sn(w,3)),this.setAttribute("uv",new sn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bo extends ai{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(h+d,Math.PI);let p=0;const S=[],_=new W,x=new W,M=[],E=[],w=[],y=[];for(let g=0;g<=s;g++){const N=[],L=g/s;let D=0;g===0&&h===0?D=.5/i:g===s&&m===Math.PI&&(D=-.5/i);for(let H=0;H<=i;H++){const I=H/i;_.x=-t*Math.cos(l+I*c)*Math.sin(h+L*d),_.y=t*Math.cos(h+L*d),_.z=t*Math.sin(l+I*c)*Math.sin(h+L*d),E.push(_.x,_.y,_.z),x.copy(_).normalize(),w.push(x.x,x.y,x.z),y.push(I+D,1-L),N.push(p++)}S.push(N)}for(let g=0;g<s;g++)for(let N=0;N<i;N++){const L=S[g][N+1],D=S[g][N],H=S[g+1][N],I=S[g+1][N+1];(g!==0||h>0)&&M.push(L,D,I),(g!==s-1||m<Math.PI)&&M.push(D,H,I)}this.setIndex(M),this.setAttribute("position",new sn(E,3)),this.setAttribute("normal",new sn(w,3)),this.setAttribute("uv",new sn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class iM extends vi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cc extends Rs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new be(16777215),this.specular=new be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class aM extends Rs{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class sM extends Rs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rM extends Rs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yv extends Cn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Nh=new Je,m0=new W,g0=new W;class oM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;m0.setFromMatrixPosition(t.matrixWorld),i.position.copy(m0),g0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(g0),i.updateMatrixWorld(),Nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Nh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class qd extends _v{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class lM extends oM{constructor(){super(new qd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cM extends yv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new lM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class uM extends yv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class fM extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class hM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class _0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(_e(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dM extends As{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function v0(o,t,i,s){const l=pM(s);switch(i){case sv:return o*t;case ov:return o*t/l.components*l.byteLength;case zd:return o*t/l.components*l.byteLength;case lv:return o*t*2/l.components*l.byteLength;case Id:return o*t*2/l.components*l.byteLength;case rv:return o*t*3/l.components*l.byteLength;case bi:return o*t*4/l.components*l.byteLength;case Bd:return o*t*4/l.components*l.byteLength;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zc:case Ic:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ed:case id:return Math.max(o,16)*Math.max(t,8)/4;case td:case nd:return Math.max(o,8)*Math.max(t,8)/2;case ad:case sd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case rd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case od:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ld:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case cd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ud:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case fd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case hd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case dd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case pd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case md:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case gd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case _d:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case vd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Sd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case xd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case yd:case Md:case Ed:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Td:case bd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Ad:case Rd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function pM(o){switch(o){case zi:case ev:return{byteLength:1,components:1};case Fo:case nv:case qa:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case Ts:case Nd:case ua:return{byteLength:4,components:1};case iv:case av:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ud}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ud);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function mM(o){const t=new WeakMap;function i(d,m){const p=d.array,S=d.usage,_=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,S),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const S=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,S);else{_.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<_.length;M++){const E=_[x],w=_[M];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++x,_[x]=w)}_.length=x+1;for(let M=0,E=_.length;M<E;M++){const w=_[M];o.bufferSubData(p,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=t.get(d);(!S||S.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var gM=`#ifdef USE_ALPHAHASH
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
#endif`,vM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MM=`#ifdef USE_AOMAP
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
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
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
#endif`,bM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,CM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wM=`#ifdef USE_IRIDESCENCE
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
#endif`,DM=`#ifdef USE_BUMPMAP
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
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,FM=`#define PI 3.141592653589793
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
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GM=`vec3 transformedNormal = objectNormal;
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
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YM="gl_FragColor = linearToOutputTexel( gl_FragColor );",qM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jM=`#ifdef USE_ENVMAP
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
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
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
}`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
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
#endif`,lE=`#ifdef USE_ENVMAP
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
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dE=`PhysicalMaterial material;
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
#endif`,pE=`struct PhysicalMaterial {
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
}`,mE=`
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
#endif`,gE=`#if defined( RE_IndirectDiffuse )
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
#endif`,vE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ME=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bE=`#if defined( USE_POINTS_UV )
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
#endif`,AE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`#ifdef USE_MORPHTARGETS
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
#endif`,LE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IE=`#ifndef FLAT_SHADED
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
#endif`,FE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tT=`float getShadowMask() {
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
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nT=`#ifdef USE_SKINNING
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
#endif`,iT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aT=`#ifdef USE_SKINNING
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
#endif`,sT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cT=`#ifdef USE_TRANSMISSION
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
#endif`,uT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gT=`uniform sampler2D t2D;
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
}`,vT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
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
}`,MT=`#if DEPTH_PACKING == 3200
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
}`,ET=`#define DISTANCE
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
}`,TT=`#define DISTANCE
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
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RT=`uniform float scale;
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
}`,CT=`uniform vec3 diffuse;
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
}`,wT=`#include <common>
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
}`,DT=`uniform vec3 diffuse;
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
}`,UT=`#define LAMBERT
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
}`,LT=`#define LAMBERT
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
}`,NT=`#define MATCAP
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
}`,OT=`#define MATCAP
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
}`,PT=`#define NORMAL
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
}`,zT=`#define NORMAL
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
}`,IT=`#define PHONG
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
}`,FT=`#define STANDARD
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
}`,HT=`#define STANDARD
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
}`,GT=`#define TOON
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
}`,VT=`#define TOON
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
}`,kT=`uniform float size;
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
}`,XT=`uniform vec3 diffuse;
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
}`,WT=`#include <common>
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
}`,YT=`uniform vec3 color;
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
}`,jT=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:gM,alphahash_pars_fragment:_M,alphamap_fragment:vM,alphamap_pars_fragment:SM,alphatest_fragment:xM,alphatest_pars_fragment:yM,aomap_fragment:MM,aomap_pars_fragment:EM,batching_pars_vertex:TM,batching_vertex:bM,begin_vertex:AM,beginnormal_vertex:RM,bsdfs:CM,iridescence_fragment:wM,bumpmap_pars_fragment:DM,clipping_planes_fragment:UM,clipping_planes_pars_fragment:LM,clipping_planes_pars_vertex:NM,clipping_planes_vertex:OM,color_fragment:PM,color_pars_fragment:zM,color_pars_vertex:IM,color_vertex:BM,common:FM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:GM,displacementmap_pars_vertex:VM,displacementmap_vertex:kM,emissivemap_fragment:XM,emissivemap_pars_fragment:WM,colorspace_fragment:YM,colorspace_pars_fragment:qM,envmap_fragment:jM,envmap_common_pars_fragment:ZM,envmap_pars_fragment:KM,envmap_pars_vertex:QM,envmap_physical_pars_fragment:lE,envmap_vertex:JM,fog_vertex:$M,fog_pars_vertex:tE,fog_fragment:eE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_pars_fragment:aE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:rE,lights_pars_begin:oE,lights_toon_fragment:cE,lights_toon_pars_fragment:uE,lights_phong_fragment:fE,lights_phong_pars_fragment:hE,lights_physical_fragment:dE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:_E,logdepthbuf_fragment:vE,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:xE,logdepthbuf_vertex:yE,map_fragment:ME,map_pars_fragment:EE,map_particle_fragment:TE,map_particle_pars_fragment:bE,metalnessmap_fragment:AE,metalnessmap_pars_fragment:RE,morphinstance_vertex:CE,morphcolor_vertex:wE,morphnormal_vertex:DE,morphtarget_pars_vertex:UE,morphtarget_vertex:LE,normal_fragment_begin:NE,normal_fragment_maps:OE,normal_pars_fragment:PE,normal_pars_vertex:zE,normal_vertex:IE,normalmap_pars_fragment:BE,clearcoat_normal_fragment_begin:FE,clearcoat_normal_fragment_maps:HE,clearcoat_pars_fragment:GE,iridescence_pars_fragment:VE,opaque_fragment:kE,packing:XE,premultiplied_alpha_fragment:WE,project_vertex:YE,dithering_fragment:qE,dithering_pars_fragment:jE,roughnessmap_fragment:ZE,roughnessmap_pars_fragment:KE,shadowmap_pars_fragment:QE,shadowmap_pars_vertex:JE,shadowmap_vertex:$E,shadowmask_pars_fragment:tT,skinbase_vertex:eT,skinning_pars_vertex:nT,skinning_vertex:iT,skinnormal_vertex:aT,specularmap_fragment:sT,specularmap_pars_fragment:rT,tonemapping_fragment:oT,tonemapping_pars_fragment:lT,transmission_fragment:cT,transmission_pars_fragment:uT,uv_pars_fragment:fT,uv_pars_vertex:hT,uv_vertex:dT,worldpos_vertex:pT,background_vert:mT,background_frag:gT,backgroundCube_vert:_T,backgroundCube_frag:vT,cube_vert:ST,cube_frag:xT,depth_vert:yT,depth_frag:MT,distanceRGBA_vert:ET,distanceRGBA_frag:TT,equirect_vert:bT,equirect_frag:AT,linedashed_vert:RT,linedashed_frag:CT,meshbasic_vert:wT,meshbasic_frag:DT,meshlambert_vert:UT,meshlambert_frag:LT,meshmatcap_vert:NT,meshmatcap_frag:OT,meshnormal_vert:PT,meshnormal_frag:zT,meshphong_vert:IT,meshphong_frag:BT,meshphysical_vert:FT,meshphysical_frag:HT,meshtoon_vert:GT,meshtoon_frag:VT,points_vert:kT,points_frag:XT,shadow_vert:WT,shadow_frag:YT,sprite_vert:qT,sprite_frag:jT},Bt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Li={basic:{uniforms:zn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:zn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:zn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:zn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:zn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:zn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:zn([Bt.points,Bt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:zn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:zn([Bt.common,Bt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:zn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:zn([Bt.sprite,Bt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:zn([Bt.common,Bt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:zn([Bt.lights,Bt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Li.physical={uniforms:zn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const wc={r:0,b:0,g:0},_s=new Bi,ZT=new Je;function KT(o,t,i,s,l,c,h){const d=new be(0);let m=c===!0?0:1,p,S,_=null,x=0,M=null;function E(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function w(L){let D=!1;const H=E(L);H===null?g(d,m):H&&H.isColor&&(g(H,1),D=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(L,D){const H=E(D);H&&(H.isCubeTexture||H.mapping===Xc)?(S===void 0&&(S=new Rn(new Yo(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Nr(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(I,U,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),_s.copy(D.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),S.material.uniforms.envMap.value=H,S.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(_s)),S.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Ie,(_!==H||x!==H.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,_=H,x=H.version,M=o.toneMapping),S.layers.enableAll(),L.unshift(S,S.geometry,S.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new Rn(new Yc(2,2),new vi({name:"BackgroundMaterial",uniforms:Nr(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(H.colorSpace)!==Ie,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(_!==H||x!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,_=H,x=H.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function g(L,D){L.getRGB(wc,gv(o)),s.buffers.color.setClear(wc.r,wc.g,wc.b,D,h)}function N(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),m=D,g(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,g(d,m)},render:w,addToRenderList:y,dispose:N}}function QT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(R,F,Y,J,ut){let ot=!1;const P=_(J,Y,F);c!==P&&(c=P,p(c.object)),ot=M(R,J,Y,ut),ot&&E(R,J,Y,ut),ut!==null&&t.update(ut,o.ELEMENT_ARRAY_BUFFER),(ot||h)&&(h=!1,D(R,F,Y,J),ut!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ut).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function S(R){return o.deleteVertexArray(R)}function _(R,F,Y){const J=Y.wireframe===!0;let ut=s[R.id];ut===void 0&&(ut={},s[R.id]=ut);let ot=ut[F.id];ot===void 0&&(ot={},ut[F.id]=ot);let P=ot[J];return P===void 0&&(P=x(m()),ot[J]=P),P}function x(R){const F=[],Y=[],J=[];for(let ut=0;ut<i;ut++)F[ut]=0,Y[ut]=0,J[ut]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:J,object:R,attributes:{},index:null}}function M(R,F,Y,J){const ut=c.attributes,ot=F.attributes;let P=0;const j=Y.getAttributes();for(const q in j)if(j[q].location>=0){const Mt=ut[q];let z=ot[q];if(z===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(z=R.instanceColor)),Mt===void 0||Mt.attribute!==z||z&&Mt.data!==z.data)return!0;P++}return c.attributesNum!==P||c.index!==J}function E(R,F,Y,J){const ut={},ot=F.attributes;let P=0;const j=Y.getAttributes();for(const q in j)if(j[q].location>=0){let Mt=ot[q];Mt===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor));const z={};z.attribute=Mt,Mt&&Mt.data&&(z.data=Mt.data),ut[q]=z,P++}c.attributes=ut,c.attributesNum=P,c.index=J}function w(){const R=c.newAttributes;for(let F=0,Y=R.length;F<Y;F++)R[F]=0}function y(R){g(R,0)}function g(R,F){const Y=c.newAttributes,J=c.enabledAttributes,ut=c.attributeDivisors;Y[R]=1,J[R]===0&&(o.enableVertexAttribArray(R),J[R]=1),ut[R]!==F&&(o.vertexAttribDivisor(R,F),ut[R]=F)}function N(){const R=c.newAttributes,F=c.enabledAttributes;for(let Y=0,J=F.length;Y<J;Y++)F[Y]!==R[Y]&&(o.disableVertexAttribArray(Y),F[Y]=0)}function L(R,F,Y,J,ut,ot,P){P===!0?o.vertexAttribIPointer(R,F,Y,ut,ot):o.vertexAttribPointer(R,F,Y,J,ut,ot)}function D(R,F,Y,J){w();const ut=J.attributes,ot=Y.getAttributes(),P=F.defaultAttributeValues;for(const j in ot){const q=ot[j];if(q.location>=0){let gt=ut[j];if(gt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const Mt=gt.normalized,z=gt.itemSize,at=t.get(gt);if(at===void 0)continue;const bt=at.buffer,Ut=at.type,Pt=at.bytesPerElement,st=Ut===o.INT||Ut===o.UNSIGNED_INT||gt.gpuType===Nd;if(gt.isInterleavedBufferAttribute){const ft=gt.data,wt=ft.stride,Ht=gt.offset;if(ft.isInstancedInterleavedBuffer){for(let Zt=0;Zt<q.locationSize;Zt++)g(q.location+Zt,ft.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Zt=0;Zt<q.locationSize;Zt++)y(q.location+Zt);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let Zt=0;Zt<q.locationSize;Zt++)L(q.location+Zt,z/q.locationSize,Ut,Mt,wt*Pt,(Ht+z/q.locationSize*Zt)*Pt,st)}else{if(gt.isInstancedBufferAttribute){for(let ft=0;ft<q.locationSize;ft++)g(q.location+ft,gt.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ft=0;ft<q.locationSize;ft++)y(q.location+ft);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let ft=0;ft<q.locationSize;ft++)L(q.location+ft,z/q.locationSize,Ut,Mt,z*Pt,z/q.locationSize*ft*Pt,st)}}else if(P!==void 0){const Mt=P[j];if(Mt!==void 0)switch(Mt.length){case 2:o.vertexAttrib2fv(q.location,Mt);break;case 3:o.vertexAttrib3fv(q.location,Mt);break;case 4:o.vertexAttrib4fv(q.location,Mt);break;default:o.vertexAttrib1fv(q.location,Mt)}}}}N()}function H(){B();for(const R in s){const F=s[R];for(const Y in F){const J=F[Y];for(const ut in J)S(J[ut].object),delete J[ut];delete F[Y]}delete s[R]}}function I(R){if(s[R.id]===void 0)return;const F=s[R.id];for(const Y in F){const J=F[Y];for(const ut in J)S(J[ut].object),delete J[ut];delete F[Y]}delete s[R.id]}function U(R){for(const F in s){const Y=s[F];if(Y[R.id]===void 0)continue;const J=Y[R.id];for(const ut in J)S(J[ut].object),delete J[ut];delete Y[R.id]}}function B(){A(),h=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:B,resetDefaultState:A,dispose:H,releaseStatesOfGeometry:I,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:y,disableUnusedAttributes:N}}function JT(o,t,i){let s;function l(p){s=p}function c(p,S){o.drawArrays(s,p,S),i.update(S,s,1)}function h(p,S,_){_!==0&&(o.drawArraysInstanced(s,p,S,_),i.update(S,s,_))}function d(p,S,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,S,0,_);let M=0;for(let E=0;E<_;E++)M+=S[E];i.update(M,s,1)}function m(p,S,_,x){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],S[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,S,0,x,0,_);let E=0;for(let w=0;w<_;w++)E+=S[w]*x[w];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function $T(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(U){return!(U!==bi&&s.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const B=U===qa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==zi&&s.convert(U)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==ua&&!B)}function m(U){if(U==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const _=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:H,maxSamples:I}}function tb(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ka,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||s!==0||l;return l=x,s=_.length,M},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=S(_,x,0)},this.setState=function(_,x,M){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,g=o.get(_);if(!l||E===null||E.length===0||c&&!y)c?S(null):p();else{const N=c?0:s,L=N*4;let D=g.clippingState||null;m.value=D,D=S(E,x,L,M);for(let H=0;H!==L;++H)D[H]=i[H];g.clippingState=D,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function S(_,x,M,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=m.value,E!==!0||y===null){const g=M+w*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,D=M;L!==w;++L,D+=4)h.copy(_[L]).applyMatrix4(N,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,y}}function eb(o){let t=new WeakMap;function i(h,d){return d===Kh?h.mapping=Dr:d===Qh&&(h.mapping=Ur),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Kh||d===Qh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new jy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const br=4,S0=[.125,.215,.35,.446,.526,.582],ys=20,Oh=new qd,x0=new be;let Ph=null,zh=0,Ih=0,Bh=!1;const Ss=(1+Math.sqrt(5))/2,Er=1/Ss,y0=[new W(-Ss,Er,0),new W(Ss,Er,0),new W(-Er,0,Ss),new W(Er,0,Ss),new W(0,Ss,-Er),new W(0,Ss,Er),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],nb=new W;class M0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=nb}=c;Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ph,zh,Ih),this._renderer.xr.enabled=Bh,t.scissorTest=!1,Dc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Dr||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ph=this._renderer.getRenderTarget(),zh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ni,minFilter:Ni,generateMipmaps:!1,type:qa,format:bi,colorSpace:Lr,depthBuffer:!1},l=E0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=E0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ib(c)),this._blurMaterial=ab(c,t,i)}return l}_compileMaterial(t){const i=new Rn(this._lodPlanes[0],t);this._renderer.compile(i,Oh)}_sceneToCubeUV(t,i,s,l,c){const m=new gi(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(x0),_.toneMapping=Wa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const w=new zo({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1}),y=new Rn(new Yo,w);let g=!1;const N=t.background;N?N.isColor&&(w.color.copy(N),t.background=null,g=!0):(w.color.copy(x0),g=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[L],c.y,c.z)):D===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[L]));const H=this._cubeSize;Dc(l,D*H,L>2?H:0,H,H),_.setRenderTarget(l),g&&_.render(y,m),_.render(t,m)}y.geometry.dispose(),y.material.dispose(),_.toneMapping=M,_.autoClear=x,t.background=N}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Dr||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Rn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Dc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Oh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=y0[(l-c-1)%y0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,_=new Rn(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ys-1),w=c/E,y=isFinite(c)?1+Math.floor(S*w):ys;y>ys&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const g=[];let N=0;for(let U=0;U<ys;++U){const B=U/w,A=Math.exp(-B*B/2);g.push(A),U===0?N+=A:U<y&&(N+=2*A)}for(let U=0;U<g.length;U++)g[U]=g[U]/N;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=E,x.mipInt.value=L-s;const D=this._sizeLods[l],H=3*D*(l>L-br?l-L+br:0),I=4*(this._cubeSize-D);Dc(i,H,I,3*D,2*D),m.setRenderTarget(i),m.render(_,Oh)}}function ib(o){const t=[],i=[],s=[];let l=o;const c=o-br+1+S0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-br?m=S0[h-o+br-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),S=-p,_=1+p,x=[S,S,_,S,_,_,S,S,_,_,S,_],M=6,E=6,w=3,y=2,g=1,N=new Float32Array(w*E*M),L=new Float32Array(y*E*M),D=new Float32Array(g*E*M);for(let I=0;I<M;I++){const U=I%3*2/3-1,B=I>2?0:-1,A=[U,B,0,U+2/3,B,0,U+2/3,B+1,0,U,B,0,U+2/3,B+1,0,U,B+1,0];N.set(A,w*E*I),L.set(x,y*E*I);const R=[I,I,I,I,I,I];D.set(R,g*E*I)}const H=new ai;H.setAttribute("position",new Pi(N,w)),H.setAttribute("uv",new Pi(L,y)),H.setAttribute("faceIndex",new Pi(D,g)),t.push(H),l>br&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function E0(o,t,i){const s=new Ii(o,t,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function ab(o,t,i){const s=new Float32Array(ys),l=new W(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jd(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function T0(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

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
		`,blending:fa,depthTest:!1,depthWrite:!1})}function b0(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fa,depthTest:!1,depthWrite:!1})}function jd(){return`

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
	`}function sb(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Kh||m===Qh,S=m===Dr||m===Ur;if(p||S){let _=t.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new M0(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||S&&M&&l(M)?(i===null&&(i=new M0(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function rb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&ko("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function ob(o,t,i,s){const l={},c=new WeakMap;function h(_){const x=_.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const M=c.get(x);M&&(t.remove(M),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(_,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,E=_.attributes.position;let w=0;if(M!==null){const N=M.array;w=M.version;for(let L=0,D=N.length;L<D;L+=3){const H=N[L+0],I=N[L+1],U=N[L+2];x.push(H,I,I,U,U,H)}}else if(E!==void 0){const N=E.array;w=E.version;for(let L=0,D=N.length/3-1;L<D;L+=3){const H=L+0,I=L+1,U=L+2;x.push(H,I,I,U,U,H)}}else return;const y=new(uv(x)?mv:pv)(x,1);y.version=w;const g=c.get(_);g&&t.remove(g),c.set(_,y)}function S(_){const x=c.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:S}}function lb(o,t,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(s,M,c,x*h),i.update(M,s,1)}function p(x,M,E){E!==0&&(o.drawElementsInstanced(s,M,c,x*h,E),i.update(M,s,E))}function S(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,x,0,E);let y=0;for(let g=0;g<E;g++)y+=M[g];i.update(y,s,1)}function _(x,M,E,w){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)p(x[g]/h,M[g],w[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,x,0,w,0,E);let g=0;for(let N=0;N<E;N++)g+=M[N]*w[N];i.update(g,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=_}function cb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function ub(o,t,i){const s=new WeakMap,l=new Qe;function c(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=S!==void 0?S.length:0;let x=s.get(d);if(x===void 0||x.count!==_){let R=function(){B.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),w===!0&&(D=2),y===!0&&(D=3);let H=d.attributes.position.count*D,I=1;H>t.maxTextureSize&&(I=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const U=new Float32Array(H*I*4*_),B=new fv(U,H,I,_);B.type=ua,B.needsUpdate=!0;const A=D*4;for(let F=0;F<_;F++){const Y=g[F],J=N[F],ut=L[F],ot=H*I*4*F;for(let P=0;P<Y.count;P++){const j=P*A;E===!0&&(l.fromBufferAttribute(Y,P),U[ot+j+0]=l.x,U[ot+j+1]=l.y,U[ot+j+2]=l.z,U[ot+j+3]=0),w===!0&&(l.fromBufferAttribute(J,P),U[ot+j+4]=l.x,U[ot+j+5]=l.y,U[ot+j+6]=l.z,U[ot+j+7]=0),y===!0&&(l.fromBufferAttribute(ut,P),U[ot+j+8]=l.x,U[ot+j+9]=l.y,U[ot+j+10]=l.z,U[ot+j+11]=ut.itemSize===4?l.w:1)}}x={count:_,texture:B,size:new ie(H,I)},s.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function fb(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,S=m.geometry,_=t.get(m,S);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Ev=new qn,A0=new Xd(1,1),Tv=new fv,bv=new Ly,Av=new vv,R0=[],C0=[],w0=new Float32Array(16),D0=new Float32Array(9),U0=new Float32Array(4);function Or(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=R0[l];if(c===void 0&&(c=new Float32Array(l),R0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function qc(o,t){let i=C0[t];i===void 0&&(i=new Int32Array(t),C0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function hb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function db(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function pb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function gb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;U0.set(s),o.uniformMatrix2fv(this.addr,!1,U0),gn(i,s)}}function _b(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;D0.set(s),o.uniformMatrix3fv(this.addr,!1,D0),gn(i,s)}}function vb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;w0.set(s),o.uniformMatrix4fv(this.addr,!1,w0),gn(i,s)}}function Sb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function yb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function Mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function Eb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Tb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function bb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function Ab(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function Rb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(A0.compareFunction=cv,c=A0):c=Ev,i.setTexture2D(t||c,l)}function Cb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||bv,l)}function wb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Av,l)}function Db(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Tv,l)}function Ub(o){switch(o){case 5126:return hb;case 35664:return db;case 35665:return pb;case 35666:return mb;case 35674:return gb;case 35675:return _b;case 35676:return vb;case 5124:case 35670:return Sb;case 35667:case 35671:return xb;case 35668:case 35672:return yb;case 35669:case 35673:return Mb;case 5125:return Eb;case 36294:return Tb;case 36295:return bb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Cb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Db}}function Lb(o,t){o.uniform1fv(this.addr,t)}function Nb(o,t){const i=Or(t,this.size,2);o.uniform2fv(this.addr,i)}function Ob(o,t){const i=Or(t,this.size,3);o.uniform3fv(this.addr,i)}function Pb(o,t){const i=Or(t,this.size,4);o.uniform4fv(this.addr,i)}function zb(o,t){const i=Or(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Ib(o,t){const i=Or(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Bb(o,t){const i=Or(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Fb(o,t){o.uniform1iv(this.addr,t)}function Hb(o,t){o.uniform2iv(this.addr,t)}function Gb(o,t){o.uniform3iv(this.addr,t)}function Vb(o,t){o.uniform4iv(this.addr,t)}function kb(o,t){o.uniform1uiv(this.addr,t)}function Xb(o,t){o.uniform2uiv(this.addr,t)}function Wb(o,t){o.uniform3uiv(this.addr,t)}function Yb(o,t){o.uniform4uiv(this.addr,t)}function qb(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||Ev,c[h])}function jb(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||bv,c[h])}function Zb(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Av,c[h])}function Kb(o,t,i){const s=this.cache,l=t.length,c=qc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Tv,c[h])}function Qb(o){switch(o){case 5126:return Lb;case 35664:return Nb;case 35665:return Ob;case 35666:return Pb;case 35674:return zb;case 35675:return Ib;case 35676:return Bb;case 5124:case 35670:return Fb;case 35667:case 35671:return Hb;case 35668:case 35672:return Gb;case 35669:case 35673:return Vb;case 5125:return kb;case 36294:return Xb;case 36295:return Wb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return qb;case 35679:case 36299:case 36307:return jb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Kb}}class Jb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Ub(i.type)}}class $b{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Qb(i.type)}}class t1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Fh=/(\w+)(\])?(\[|\.)?/g;function L0(o,t){o.seq.push(t),o.map[t.id]=t}function e1(o,t,i){const s=o.name,l=s.length;for(Fh.lastIndex=0;;){const c=Fh.exec(s),h=Fh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){L0(i,p===void 0?new Jb(d,o,t):new $b(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new t1(d),L0(i,_)),i=_}}}class Bc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);e1(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function N0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const n1=37297;let i1=0;function a1(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const O0=new fe;function s1(o){Ae._getMatrix(O0,Ae.workingColorSpace,o);const t=`mat3( ${O0.elements.map(i=>i.toFixed(4))} )`;switch(Ae.getTransfer(o)){case Fc:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function P0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+a1(o.getShaderSource(t),d)}else return c}function r1(o,t){const i=s1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function o1(o,t){let i;switch(t){case q0:i="Linear";break;case j0:i="Reinhard";break;case Z0:i="Cineon";break;case K0:i="ACESFilmic";break;case J0:i="AgX";break;case $0:i="Neutral";break;case Q0:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new W;function l1(){Ae.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),t=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function u1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function f1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Oo(o){return o!==""}function z0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function I0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h1=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(o){return o.replace(h1,p1)}const d1=new Map;function p1(o,t){let i=he[t];if(i===void 0){const s=d1.get(t);if(s!==void 0)i=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return wd(i)}const m1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(o){return o.replace(m1,g1)}function g1(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function F0(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function _1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Y0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Wx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===la&&(t="SHADOWMAP_TYPE_VSM"),t}function v1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Dr:case Ur:t="ENVMAP_TYPE_CUBE";break;case Xc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function S1(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ur:t="ENVMAP_MODE_REFRACTION";break}return t}function x1(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ld:t="ENVMAP_BLENDING_MULTIPLY";break;case uy:t="ENVMAP_BLENDING_MIX";break;case fy:t="ENVMAP_BLENDING_ADD";break}return t}function y1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function M1(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=_1(i),p=v1(i),S=S1(i),_=x1(i),x=y1(i),M=c1(i),E=u1(c),w=l.createProgram();let y,g,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(y=[F0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[F0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?he.tonemapping_pars_fragment:"",i.toneMapping!==Wa?o1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,r1("linearToOutputTexel",i.outputColorSpace),l1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Oo).join(`
`)),h=wd(h),h=z0(h,i),h=I0(h,i),d=wd(d),d=z0(d,i),d=I0(d,i),h=B0(h),d=B0(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=N+y+h,D=N+g+d,H=N0(l,l.VERTEX_SHADER,L),I=N0(l,l.FRAGMENT_SHADER,D);l.attachShader(w,H),l.attachShader(w,I),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function U(F){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(w)||"",J=l.getShaderInfoLog(H)||"",ut=l.getShaderInfoLog(I)||"",ot=Y.trim(),P=J.trim(),j=ut.trim();let q=!0,gt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,H,I);else{const Mt=P0(l,H,"vertex"),z=P0(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+ot+`
`+Mt+`
`+z)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(P===""||j==="")&&(gt=!1);gt&&(F.diagnostics={runnable:q,programLog:ot,vertexShader:{log:P,prefix:y},fragmentShader:{log:j,prefix:g}})}l.deleteShader(H),l.deleteShader(I),B=new Bc(l,w),A=f1(l,w)}let B;this.getUniforms=function(){return B===void 0&&U(this),B};let A;this.getAttributes=function(){return A===void 0&&U(this),A};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(w,n1)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=i1++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=H,this.fragmentShader=I,this}let E1=0;class T1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new b1(t),i.set(t,s)),s}}class b1{constructor(t){this.id=E1++,this.code=t,this.usedTimes=0}}function A1(o,t,i,s,l,c,h){const d=new hv,m=new T1,p=new Set,S=[],_=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(A){return p.add(A),A===0?"uv":`uv${A}`}function y(A,R,F,Y,J){const ut=Y.fog,ot=J.geometry,P=A.isMeshStandardMaterial?Y.environment:null,j=(A.isMeshStandardMaterial?i:t).get(A.envMap||P),q=j&&j.mapping===Xc?j.image.height:null,gt=E[A.type];A.precision!==null&&(M=l.getMaxPrecision(A.precision),M!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",M,"instead."));const Mt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,z=Mt!==void 0?Mt.length:0;let at=0;ot.morphAttributes.position!==void 0&&(at=1),ot.morphAttributes.normal!==void 0&&(at=2),ot.morphAttributes.color!==void 0&&(at=3);let bt,Ut,Pt,st;if(gt){const Ee=Li[gt];bt=Ee.vertexShader,Ut=Ee.fragmentShader}else bt=A.vertexShader,Ut=A.fragmentShader,m.update(A),Pt=m.getVertexShaderID(A),st=m.getFragmentShaderID(A);const ft=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Ht=J.isInstancedMesh===!0,Zt=J.isBatchedMesh===!0,le=!!A.map,Ke=!!A.matcap,V=!!j,Me=!!A.aoMap,Gt=!!A.lightMap,$t=!!A.bumpMap,kt=!!A.normalMap,Ne=!!A.displacementMap,Wt=!!A.emissiveMap,se=!!A.metalnessMap,je=!!A.roughnessMap,Re=A.anisotropy>0,O=A.clearcoat>0,T=A.dispersion>0,$=A.iridescence>0,dt=A.sheen>0,Et=A.transmission>0,et=Re&&!!A.anisotropyMap,Nt=O&&!!A.clearcoatMap,St=O&&!!A.clearcoatNormalMap,At=O&&!!A.clearcoatRoughnessMap,Tt=$&&!!A.iridescenceMap,pt=$&&!!A.iridescenceThicknessMap,xt=dt&&!!A.sheenColorMap,zt=dt&&!!A.sheenRoughnessMap,Dt=!!A.specularMap,Lt=!!A.specularColorMap,ee=!!A.specularIntensityMap,X=Et&&!!A.transmissionMap,Rt=Et&&!!A.thicknessMap,Ot=!!A.gradientMap,Vt=!!A.alphaMap,Ct=A.alphaTest>0,vt=!!A.alphaHash,Xt=!!A.extensions;let re=Wa;A.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(re=o.toneMapping);const Oe={shaderID:gt,shaderType:A.type,shaderName:A.name,vertexShader:bt,fragmentShader:Ut,defines:A.defines,customVertexShaderID:Pt,customFragmentShaderID:st,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:M,batching:Zt,batchingColor:Zt&&J._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&J.instanceColor!==null,instancingMorph:Ht&&J.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ft===null?o.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Lr,alphaToCoverage:!!A.alphaToCoverage,map:le,matcap:Ke,envMap:V,envMapMode:V&&j.mapping,envMapCubeUVHeight:q,aoMap:Me,lightMap:Gt,bumpMap:$t,normalMap:kt,displacementMap:x&&Ne,emissiveMap:Wt,normalMapObjectSpace:kt&&A.normalMapType===my,normalMapTangentSpace:kt&&A.normalMapType===Fd,metalnessMap:se,roughnessMap:je,anisotropy:Re,anisotropyMap:et,clearcoat:O,clearcoatMap:Nt,clearcoatNormalMap:St,clearcoatRoughnessMap:At,dispersion:T,iridescence:$,iridescenceMap:Tt,iridescenceThicknessMap:pt,sheen:dt,sheenColorMap:xt,sheenRoughnessMap:zt,specularMap:Dt,specularColorMap:Lt,specularIntensityMap:ee,transmission:Et,transmissionMap:X,thicknessMap:Rt,gradientMap:Ot,opaque:A.transparent===!1&&A.blending===Rr&&A.alphaToCoverage===!1,alphaMap:Vt,alphaTest:Ct,alphaHash:vt,combine:A.combine,mapUv:le&&w(A.map.channel),aoMapUv:Me&&w(A.aoMap.channel),lightMapUv:Gt&&w(A.lightMap.channel),bumpMapUv:$t&&w(A.bumpMap.channel),normalMapUv:kt&&w(A.normalMap.channel),displacementMapUv:Ne&&w(A.displacementMap.channel),emissiveMapUv:Wt&&w(A.emissiveMap.channel),metalnessMapUv:se&&w(A.metalnessMap.channel),roughnessMapUv:je&&w(A.roughnessMap.channel),anisotropyMapUv:et&&w(A.anisotropyMap.channel),clearcoatMapUv:Nt&&w(A.clearcoatMap.channel),clearcoatNormalMapUv:St&&w(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&w(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&w(A.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&w(A.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&w(A.sheenColorMap.channel),sheenRoughnessMapUv:zt&&w(A.sheenRoughnessMap.channel),specularMapUv:Dt&&w(A.specularMap.channel),specularColorMapUv:Lt&&w(A.specularColorMap.channel),specularIntensityMapUv:ee&&w(A.specularIntensityMap.channel),transmissionMapUv:X&&w(A.transmissionMap.channel),thicknessMapUv:Rt&&w(A.thicknessMap.channel),alphaMapUv:Vt&&w(A.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(kt||Re),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ot.attributes.uv&&(le||Vt),fog:!!ut,useFog:A.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:wt,skinning:J.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:at,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:A.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:re,decodeVideoTexture:le&&A.map.isVideoTexture===!0&&Ae.getTransfer(A.map.colorSpace)===Ie,decodeVideoTextureEmissive:Wt&&A.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(A.emissiveMap.colorSpace)===Ie,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ca,flipSided:A.side===Yn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Xt&&A.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&A.extensions.multiDraw===!0||Zt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function g(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const F in A.defines)R.push(F),R.push(A.defines[F]);return A.isRawShaderMaterial===!1&&(N(R,A),L(R,A),R.push(o.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function N(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function L(A,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),A.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),A.push(d.mask)}function D(A){const R=E[A.type];let F;if(R){const Y=Li[R];F=Vd.clone(Y.uniforms)}else F=A.uniforms;return F}function H(A,R){let F;for(let Y=0,J=S.length;Y<J;Y++){const ut=S[Y];if(ut.cacheKey===R){F=ut,++F.usedTimes;break}}return F===void 0&&(F=new M1(o,R,A,c),S.push(F)),F}function I(A){if(--A.usedTimes===0){const R=S.indexOf(A);S[R]=S[S.length-1],S.pop(),A.destroy()}}function U(A){m.remove(A)}function B(){m.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:D,acquireProgram:H,releaseProgram:I,releaseShaderCache:U,programs:S,dispose:B}}function R1(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function C1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function H0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function G0(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,x,M,E,w,y){let g=o[t];return g===void 0?(g={id:_.id,object:_,geometry:x,material:M,groupOrder:E,renderOrder:_.renderOrder,z:w,group:y},o[t]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=M,g.groupOrder=E,g.renderOrder=_.renderOrder,g.z=w,g.group=y),t++,g}function d(_,x,M,E,w,y){const g=h(_,x,M,E,w,y);M.transmission>0?s.push(g):M.transparent===!0?l.push(g):i.push(g)}function m(_,x,M,E,w,y){const g=h(_,x,M,E,w,y);M.transmission>0?s.unshift(g):M.transparent===!0?l.unshift(g):i.unshift(g)}function p(_,x){i.length>1&&i.sort(_||C1),s.length>1&&s.sort(x||H0),l.length>1&&l.sort(x||H0)}function S(){for(let _=t,x=o.length;_<x;_++){const M=o[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:S,sort:p}}function w1(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new G0,o.set(s,[h])):l>=c.length?(h=new G0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function D1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new W,color:new be};break;case"SpotLight":i={position:new W,direction:new W,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new W,halfWidth:new W,halfHeight:new W};break}return o[t.id]=i,i}}}function U1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let L1=0;function N1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function O1(o){const t=new D1,i=U1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new W);const l=new W,c=new Je,h=new Je;function d(p){let S=0,_=0,x=0;for(let A=0;A<9;A++)s.probe[A].set(0,0,0);let M=0,E=0,w=0,y=0,g=0,N=0,L=0,D=0,H=0,I=0,U=0;p.sort(N1);for(let A=0,R=p.length;A<R;A++){const F=p[A],Y=F.color,J=F.intensity,ut=F.distance,ot=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)S+=Y.r*J,_+=Y.g*J,x+=Y.b*J;else if(F.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(F.sh.coefficients[P],J);U++}else if(F.isDirectionalLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,q=i.get(F);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,s.directionalShadow[M]=q,s.directionalShadowMap[M]=ot,s.directionalShadowMatrix[M]=F.shadow.matrix,N++}s.directional[M]=P,M++}else if(F.isSpotLight){const P=t.get(F);P.position.setFromMatrixPosition(F.matrixWorld),P.color.copy(Y).multiplyScalar(J),P.distance=ut,P.coneCos=Math.cos(F.angle),P.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),P.decay=F.decay,s.spot[w]=P;const j=F.shadow;if(F.map&&(s.spotLightMap[H]=F.map,H++,j.updateMatrices(F),F.castShadow&&I++),s.spotLightMatrix[w]=j.matrix,F.castShadow){const q=i.get(F);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,s.spotShadow[w]=q,s.spotShadowMap[w]=ot,D++}w++}else if(F.isRectAreaLight){const P=t.get(F);P.color.copy(Y).multiplyScalar(J),P.halfWidth.set(F.width*.5,0,0),P.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=P,y++}else if(F.isPointLight){const P=t.get(F);if(P.color.copy(F.color).multiplyScalar(F.intensity),P.distance=F.distance,P.decay=F.decay,F.castShadow){const j=F.shadow,q=i.get(F);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,s.pointShadow[E]=q,s.pointShadowMap[E]=ot,s.pointShadowMatrix[E]=F.shadow.matrix,L++}s.point[E]=P,E++}else if(F.isHemisphereLight){const P=t.get(F);P.skyColor.copy(F.color).multiplyScalar(J),P.groundColor.copy(F.groundColor).multiplyScalar(J),s.hemi[g]=P,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=_,s.ambient[2]=x;const B=s.hash;(B.directionalLength!==M||B.pointLength!==E||B.spotLength!==w||B.rectAreaLength!==y||B.hemiLength!==g||B.numDirectionalShadows!==N||B.numPointShadows!==L||B.numSpotShadows!==D||B.numSpotMaps!==H||B.numLightProbes!==U)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=E,s.hemi.length=g,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+H-I,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=U,B.directionalLength=M,B.pointLength=E,B.spotLength=w,B.rectAreaLength=y,B.hemiLength=g,B.numDirectionalShadows=N,B.numPointShadows=L,B.numSpotShadows=D,B.numSpotMaps=H,B.numLightProbes=U,s.version=L1++)}function m(p,S){let _=0,x=0,M=0,E=0,w=0;const y=S.matrixWorldInverse;for(let g=0,N=p.length;g<N;g++){const L=p[g];if(L.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),_++}else if(L.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),h.identity(),c.copy(L.matrixWorld),c.premultiply(y),h.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const D=s.hemi[w];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(y),w++}}}return{setup:d,setupView:m,state:s}}function V0(o){const t=new O1(o),i=[],s=[];function l(S){p.camera=S,i.length=0,s.length=0}function c(S){i.push(S)}function h(S){s.push(S)}function d(){t.setup(i)}function m(S){t.setupView(i,S)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function P1(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new V0(o),t.set(l,[d])):c>=h.length?(d=new V0(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const z1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I1=`uniform sampler2D shadow_pass;
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
}`;function B1(o,t,i){let s=new kd;const l=new ie,c=new ie,h=new Qe,d=new sM({depthPacking:py}),m=new rM,p={},S=i.maxTextureSize,_={[Ya]:Yn,[Yn]:Ya,[ca]:ca},x=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:z1,fragmentShader:I1}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new ai;E.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Rn(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let g=this.type;this.render=function(I,U,B){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const A=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(fa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=g!==la&&this.type===la,ut=g===la&&this.type!==la;for(let ot=0,P=I.length;ot<P;ot++){const j=I[ot],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const gt=q.getFrameExtents();if(l.multiply(gt),c.copy(q.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/gt.x),l.x=c.x*gt.x,q.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/gt.y),l.y=c.y*gt.y,q.mapSize.y=c.y)),q.map===null||J===!0||ut===!0){const z=this.type!==la?{minFilter:In,magFilter:In}:{};q.map!==null&&q.map.dispose(),q.map=new Ii(l.x,l.y,z),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const Mt=q.getViewportCount();for(let z=0;z<Mt;z++){const at=q.getViewport(z);h.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),Y.viewport(h),q.updateMatrices(j,z),s=q.getFrustum(),D(U,B,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===la&&N(q,B),q.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(A,R,F)};function N(I,U){const B=t.update(w);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ii(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(U,null,B,x,w,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(U,null,B,M,w,null)}function L(I,U,B,A){let R=null;const F=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(F!==void 0)R=F;else if(R=B.isPointLight===!0?m:d,o.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Y=R.uuid,J=U.uuid;let ut=p[Y];ut===void 0&&(ut={},p[Y]=ut);let ot=ut[J];ot===void 0&&(ot=R.clone(),ut[J]=ot,U.addEventListener("dispose",H)),R=ot}if(R.visible=U.visible,R.wireframe=U.wireframe,A===la?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:_[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Y=o.properties.get(R);Y.light=B}return R}function D(I,U,B,A,R){if(I.visible===!1)return;if(I.layers.test(U.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===la)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const J=t.update(I),ut=I.material;if(Array.isArray(ut)){const ot=J.groups;for(let P=0,j=ot.length;P<j;P++){const q=ot[P],gt=ut[q.materialIndex];if(gt&&gt.visible){const Mt=L(I,gt,A,R);I.onBeforeShadow(o,I,U,B,J,Mt,q),o.renderBufferDirect(B,null,J,Mt,I,q),I.onAfterShadow(o,I,U,B,J,Mt,q)}}}else if(ut.visible){const ot=L(I,ut,A,R);I.onBeforeShadow(o,I,U,B,J,ot,null),o.renderBufferDirect(B,null,J,ot,I,null),I.onAfterShadow(o,I,U,B,J,ot,null)}}const Y=I.children;for(let J=0,ut=Y.length;J<ut;J++)D(Y[J],U,B,A,R)}function H(I){I.target.removeEventListener("dispose",H);for(const B in p){const A=p[B],R=I.target.uuid;R in A&&(A[R].dispose(),delete A[R])}}}const F1={[kh]:Xh,[Wh]:jh,[Yh]:Zh,[wr]:qh,[Xh]:kh,[jh]:Wh,[Zh]:Yh,[qh]:wr};function H1(o,t){function i(){let X=!1;const Rt=new Qe;let Ot=null;const Vt=new Qe(0,0,0,0);return{setMask:function(Ct){Ot!==Ct&&!X&&(o.colorMask(Ct,Ct,Ct,Ct),Ot=Ct)},setLocked:function(Ct){X=Ct},setClear:function(Ct,vt,Xt,re,Oe){Oe===!0&&(Ct*=re,vt*=re,Xt*=re),Rt.set(Ct,vt,Xt,re),Vt.equals(Rt)===!1&&(o.clearColor(Ct,vt,Xt,re),Vt.copy(Rt))},reset:function(){X=!1,Ot=null,Vt.set(-1,0,0,0)}}}function s(){let X=!1,Rt=!1,Ot=null,Vt=null,Ct=null;return{setReversed:function(vt){if(Rt!==vt){const Xt=t.get("EXT_clip_control");vt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Rt=vt;const re=Ct;Ct=null,this.setClear(re)}},getReversed:function(){return Rt},setTest:function(vt){vt?ft(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(vt){Ot!==vt&&!X&&(o.depthMask(vt),Ot=vt)},setFunc:function(vt){if(Rt&&(vt=F1[vt]),Vt!==vt){switch(vt){case kh:o.depthFunc(o.NEVER);break;case Xh:o.depthFunc(o.ALWAYS);break;case Wh:o.depthFunc(o.LESS);break;case wr:o.depthFunc(o.LEQUAL);break;case Yh:o.depthFunc(o.EQUAL);break;case qh:o.depthFunc(o.GEQUAL);break;case jh:o.depthFunc(o.GREATER);break;case Zh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=vt}},setLocked:function(vt){X=vt},setClear:function(vt){Ct!==vt&&(Rt&&(vt=1-vt),o.clearDepth(vt),Ct=vt)},reset:function(){X=!1,Ot=null,Vt=null,Ct=null,Rt=!1}}}function l(){let X=!1,Rt=null,Ot=null,Vt=null,Ct=null,vt=null,Xt=null,re=null,Oe=null;return{setTest:function(Ee){X||(Ee?ft(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Ee){Rt!==Ee&&!X&&(o.stencilMask(Ee),Rt=Ee)},setFunc:function(Ee,Nn,si){(Ot!==Ee||Vt!==Nn||Ct!==si)&&(o.stencilFunc(Ee,Nn,si),Ot=Ee,Vt=Nn,Ct=si)},setOp:function(Ee,Nn,si){(vt!==Ee||Xt!==Nn||re!==si)&&(o.stencilOp(Ee,Nn,si),vt=Ee,Xt=Nn,re=si)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Oe!==Ee&&(o.clearStencil(Ee),Oe=Ee)},reset:function(){X=!1,Rt=null,Ot=null,Vt=null,Ct=null,vt=null,Xt=null,re=null,Oe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let S={},_={},x=new WeakMap,M=[],E=null,w=!1,y=null,g=null,N=null,L=null,D=null,H=null,I=null,U=new be(0,0,0),B=0,A=!1,R=null,F=null,Y=null,J=null,ut=null;const ot=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),P=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),P=j>=2);let gt=null,Mt={};const z=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),bt=new Qe().fromArray(z),Ut=new Qe().fromArray(at);function Pt(X,Rt,Ot,Vt){const Ct=new Uint8Array(4),vt=o.createTexture();o.bindTexture(X,vt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Xt=0;Xt<Ot;Xt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Rt+Xt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return vt}const st={};st[o.TEXTURE_2D]=Pt(o.TEXTURE_2D,o.TEXTURE_2D,1),st[o.TEXTURE_CUBE_MAP]=Pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[o.TEXTURE_2D_ARRAY]=Pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),st[o.TEXTURE_3D]=Pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ft(o.DEPTH_TEST),h.setFunc(wr),$t(!1),kt(G_),ft(o.CULL_FACE),Me(fa);function ft(X){S[X]!==!0&&(o.enable(X),S[X]=!0)}function wt(X){S[X]!==!1&&(o.disable(X),S[X]=!1)}function Ht(X,Rt){return _[X]!==Rt?(o.bindFramebuffer(X,Rt),_[X]=Rt,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Rt),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Zt(X,Rt){let Ot=M,Vt=!1;if(X){Ot=x.get(Rt),Ot===void 0&&(Ot=[],x.set(Rt,Ot));const Ct=X.textures;if(Ot.length!==Ct.length||Ot[0]!==o.COLOR_ATTACHMENT0){for(let vt=0,Xt=Ct.length;vt<Xt;vt++)Ot[vt]=o.COLOR_ATTACHMENT0+vt;Ot.length=Ct.length,Vt=!0}}else Ot[0]!==o.BACK&&(Ot[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(Ot)}function le(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const Ke={[xs]:o.FUNC_ADD,[qx]:o.FUNC_SUBTRACT,[jx]:o.FUNC_REVERSE_SUBTRACT};Ke[Zx]=o.MIN,Ke[Kx]=o.MAX;const V={[Qx]:o.ZERO,[Jx]:o.ONE,[$x]:o.SRC_COLOR,[Gh]:o.SRC_ALPHA,[sy]:o.SRC_ALPHA_SATURATE,[iy]:o.DST_COLOR,[ey]:o.DST_ALPHA,[ty]:o.ONE_MINUS_SRC_COLOR,[Vh]:o.ONE_MINUS_SRC_ALPHA,[ay]:o.ONE_MINUS_DST_COLOR,[ny]:o.ONE_MINUS_DST_ALPHA,[ry]:o.CONSTANT_COLOR,[oy]:o.ONE_MINUS_CONSTANT_COLOR,[ly]:o.CONSTANT_ALPHA,[cy]:o.ONE_MINUS_CONSTANT_ALPHA};function Me(X,Rt,Ot,Vt,Ct,vt,Xt,re,Oe,Ee){if(X===fa){w===!0&&(wt(o.BLEND),w=!1);return}if(w===!1&&(ft(o.BLEND),w=!0),X!==Yx){if(X!==y||Ee!==A){if((g!==xs||D!==xs)&&(o.blendEquation(o.FUNC_ADD),g=xs,D=xs),Ee)switch(X){case Rr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case V_:o.blendFunc(o.ONE,o.ONE);break;case k_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case X_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Rr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case V_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case k_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case X_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}N=null,L=null,H=null,I=null,U.set(0,0,0),B=0,y=X,A=Ee}return}Ct=Ct||Rt,vt=vt||Ot,Xt=Xt||Vt,(Rt!==g||Ct!==D)&&(o.blendEquationSeparate(Ke[Rt],Ke[Ct]),g=Rt,D=Ct),(Ot!==N||Vt!==L||vt!==H||Xt!==I)&&(o.blendFuncSeparate(V[Ot],V[Vt],V[vt],V[Xt]),N=Ot,L=Vt,H=vt,I=Xt),(re.equals(U)===!1||Oe!==B)&&(o.blendColor(re.r,re.g,re.b,Oe),U.copy(re),B=Oe),y=X,A=!1}function Gt(X,Rt){X.side===ca?wt(o.CULL_FACE):ft(o.CULL_FACE);let Ot=X.side===Yn;Rt&&(Ot=!Ot),$t(Ot),X.blending===Rr&&X.transparent===!1?Me(fa):Me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Vt=X.stencilWrite;d.setTest(Vt),Vt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Wt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ft(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function kt(X){X!==kx?(ft(o.CULL_FACE),X!==F&&(X===G_?o.cullFace(o.BACK):X===Xx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),F=X}function Ne(X){X!==Y&&(P&&o.lineWidth(X),Y=X)}function Wt(X,Rt,Ot){X?(ft(o.POLYGON_OFFSET_FILL),(J!==Rt||ut!==Ot)&&(o.polygonOffset(Rt,Ot),J=Rt,ut=Ot)):wt(o.POLYGON_OFFSET_FILL)}function se(X){X?ft(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function je(X){X===void 0&&(X=o.TEXTURE0+ot-1),gt!==X&&(o.activeTexture(X),gt=X)}function Re(X,Rt,Ot){Ot===void 0&&(gt===null?Ot=o.TEXTURE0+ot-1:Ot=gt);let Vt=Mt[Ot];Vt===void 0&&(Vt={type:void 0,texture:void 0},Mt[Ot]=Vt),(Vt.type!==X||Vt.texture!==Rt)&&(gt!==Ot&&(o.activeTexture(Ot),gt=Ot),o.bindTexture(X,Rt||st[X]),Vt.type=X,Vt.texture=Rt)}function O(){const X=Mt[gt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(X){bt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),bt.copy(X))}function zt(X){Ut.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Ut.copy(X))}function Dt(X,Rt){let Ot=p.get(Rt);Ot===void 0&&(Ot=new WeakMap,p.set(Rt,Ot));let Vt=Ot.get(X);Vt===void 0&&(Vt=o.getUniformBlockIndex(Rt,X.name),Ot.set(X,Vt))}function Lt(X,Rt){const Vt=p.get(Rt).get(X);m.get(Rt)!==Vt&&(o.uniformBlockBinding(Rt,Vt,X.__bindingPointIndex),m.set(Rt,Vt))}function ee(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},gt=null,Mt={},_={},x=new WeakMap,M=[],E=null,w=!1,y=null,g=null,N=null,L=null,D=null,H=null,I=null,U=new be(0,0,0),B=0,A=!1,R=null,F=null,Y=null,J=null,ut=null,bt.set(0,0,o.canvas.width,o.canvas.height),Ut.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ft,disable:wt,bindFramebuffer:Ht,drawBuffers:Zt,useProgram:le,setBlending:Me,setMaterial:Gt,setFlipSided:$t,setCullFace:kt,setLineWidth:Ne,setPolygonOffset:Wt,setScissorTest:se,activeTexture:je,bindTexture:Re,unbindTexture:O,compressedTexImage2D:T,compressedTexImage3D:$,texImage2D:Tt,texImage3D:pt,updateUBOMapping:Dt,uniformBlockBinding:Lt,texStorage2D:St,texStorage3D:At,texSubImage2D:dt,texSubImage3D:Et,compressedTexSubImage2D:et,compressedTexSubImage3D:Nt,scissor:xt,viewport:zt,reset:ee}}function G1(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ie,S=new WeakMap;let _;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(O,T){return M?new OffscreenCanvas(O,T):Gc("canvas")}function w(O,T,$){let dt=1;const Et=Re(O);if((Et.width>$||Et.height>$)&&(dt=$/Math.max(Et.width,Et.height)),dt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const et=Math.floor(dt*Et.width),Nt=Math.floor(dt*Et.height);_===void 0&&(_=E(et,Nt));const St=T?E(et,Nt):_;return St.width=et,St.height=Nt,St.getContext("2d").drawImage(O,0,0,et,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+et+"x"+Nt+")."),St}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),O;return O}function y(O){return O.generateMipmaps}function g(O){o.generateMipmap(O)}function N(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(O,T,$,dt,Et=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let et=T;if(T===o.RED&&($===o.FLOAT&&(et=o.R32F),$===o.HALF_FLOAT&&(et=o.R16F),$===o.UNSIGNED_BYTE&&(et=o.R8)),T===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(et=o.R8UI),$===o.UNSIGNED_SHORT&&(et=o.R16UI),$===o.UNSIGNED_INT&&(et=o.R32UI),$===o.BYTE&&(et=o.R8I),$===o.SHORT&&(et=o.R16I),$===o.INT&&(et=o.R32I)),T===o.RG&&($===o.FLOAT&&(et=o.RG32F),$===o.HALF_FLOAT&&(et=o.RG16F),$===o.UNSIGNED_BYTE&&(et=o.RG8)),T===o.RG_INTEGER&&($===o.UNSIGNED_BYTE&&(et=o.RG8UI),$===o.UNSIGNED_SHORT&&(et=o.RG16UI),$===o.UNSIGNED_INT&&(et=o.RG32UI),$===o.BYTE&&(et=o.RG8I),$===o.SHORT&&(et=o.RG16I),$===o.INT&&(et=o.RG32I)),T===o.RGB_INTEGER&&($===o.UNSIGNED_BYTE&&(et=o.RGB8UI),$===o.UNSIGNED_SHORT&&(et=o.RGB16UI),$===o.UNSIGNED_INT&&(et=o.RGB32UI),$===o.BYTE&&(et=o.RGB8I),$===o.SHORT&&(et=o.RGB16I),$===o.INT&&(et=o.RGB32I)),T===o.RGBA_INTEGER&&($===o.UNSIGNED_BYTE&&(et=o.RGBA8UI),$===o.UNSIGNED_SHORT&&(et=o.RGBA16UI),$===o.UNSIGNED_INT&&(et=o.RGBA32UI),$===o.BYTE&&(et=o.RGBA8I),$===o.SHORT&&(et=o.RGBA16I),$===o.INT&&(et=o.RGBA32I)),T===o.RGB&&($===o.UNSIGNED_INT_5_9_9_9_REV&&(et=o.RGB9_E5),$===o.UNSIGNED_INT_10F_11F_11F_REV&&(et=o.R11F_G11F_B10F)),T===o.RGBA){const Nt=Et?Fc:Ae.getTransfer(dt);$===o.FLOAT&&(et=o.RGBA32F),$===o.HALF_FLOAT&&(et=o.RGBA16F),$===o.UNSIGNED_BYTE&&(et=Nt===Ie?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(et=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(et=o.RGB5_A1)}return(et===o.R16F||et===o.R32F||et===o.RG16F||et===o.RG32F||et===o.RGBA16F||et===o.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function D(O,T){let $;return O?T===null||T===Ts||T===Ho?$=o.DEPTH24_STENCIL8:T===ua?$=o.DEPTH32F_STENCIL8:T===Fo&&($=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ts||T===Ho?$=o.DEPTH_COMPONENT24:T===ua?$=o.DEPTH_COMPONENT32F:T===Fo&&($=o.DEPTH_COMPONENT16),$}function H(O,T){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==In&&O.minFilter!==Ni?Math.log2(Math.max(T.width,T.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?T.mipmaps.length:1}function I(O){const T=O.target;T.removeEventListener("dispose",I),B(T),T.isVideoTexture&&S.delete(T)}function U(O){const T=O.target;T.removeEventListener("dispose",U),R(T)}function B(O){const T=s.get(O);if(T.__webglInit===void 0)return;const $=O.source,dt=x.get($);if(dt){const Et=dt[T.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&A(O),Object.keys(dt).length===0&&x.delete($)}s.remove(O)}function A(O){const T=s.get(O);o.deleteTexture(T.__webglTexture);const $=O.source,dt=x.get($);delete dt[T.__cacheKey],h.memory.textures--}function R(O){const T=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let Et=0;Et<T.__webglFramebuffer[dt].length;Et++)o.deleteFramebuffer(T.__webglFramebuffer[dt][Et]);else o.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)o.deleteFramebuffer(T.__webglFramebuffer[dt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=O.textures;for(let dt=0,Et=$.length;dt<Et;dt++){const et=s.get($[dt]);et.__webglTexture&&(o.deleteTexture(et.__webglTexture),h.memory.textures--),s.remove($[dt])}s.remove(O)}let F=0;function Y(){F=0}function J(){const O=F;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),F+=1,O}function ut(O){const T=[];return T.push(O.wrapS),T.push(O.wrapT),T.push(O.wrapR||0),T.push(O.magFilter),T.push(O.minFilter),T.push(O.anisotropy),T.push(O.internalFormat),T.push(O.format),T.push(O.type),T.push(O.generateMipmaps),T.push(O.premultiplyAlpha),T.push(O.flipY),T.push(O.unpackAlignment),T.push(O.colorSpace),T.join()}function ot(O,T){const $=s.get(O);if(O.isVideoTexture&&se(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&$.__version!==O.version){const dt=O.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st($,O,T);return}}else O.isExternalTexture&&($.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+T)}function P(O,T){const $=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){st($,O,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+T)}function j(O,T){const $=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){st($,O,T);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+T)}function q(O,T){const $=s.get(O);if(O.version>0&&$.__version!==O.version){ft($,O,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+T)}const gt={[Jh]:o.REPEAT,[Ms]:o.CLAMP_TO_EDGE,[$h]:o.MIRRORED_REPEAT},Mt={[In]:o.NEAREST,[hy]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[Ni]:o.LINEAR,[oh]:o.LINEAR_MIPMAP_NEAREST,[Es]:o.LINEAR_MIPMAP_LINEAR},z={[gy]:o.NEVER,[My]:o.ALWAYS,[_y]:o.LESS,[cv]:o.LEQUAL,[vy]:o.EQUAL,[yy]:o.GEQUAL,[Sy]:o.GREATER,[xy]:o.NOTEQUAL};function at(O,T){if(T.type===ua&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ni||T.magFilter===oh||T.magFilter===ac||T.magFilter===Es||T.minFilter===Ni||T.minFilter===oh||T.minFilter===ac||T.minFilter===Es)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,gt[T.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,gt[T.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,gt[T.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,Mt[T.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,Mt[T.minFilter]),T.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,z[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===In||T.minFilter!==ac&&T.minFilter!==Es||T.type===ua&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function bt(O,T){let $=!1;O.__webglInit===void 0&&(O.__webglInit=!0,T.addEventListener("dispose",I));const dt=T.source;let Et=x.get(dt);Et===void 0&&(Et={},x.set(dt,Et));const et=ut(T);if(et!==O.__cacheKey){Et[et]===void 0&&(Et[et]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,$=!0),Et[et].usedTimes++;const Nt=Et[O.__cacheKey];Nt!==void 0&&(Et[O.__cacheKey].usedTimes--,Nt.usedTimes===0&&A(T)),O.__cacheKey=et,O.__webglTexture=Et[et].texture}return $}function Ut(O,T,$){return Math.floor(Math.floor(O/$)/T)}function Pt(O,T,$,dt){const et=O.updateRanges;if(et.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,$,dt,T.data);else{et.sort((pt,xt)=>pt.start-xt.start);let Nt=0;for(let pt=1;pt<et.length;pt++){const xt=et[Nt],zt=et[pt],Dt=xt.start+xt.count,Lt=Ut(zt.start,T.width,4),ee=Ut(xt.start,T.width,4);zt.start<=Dt+1&&Lt===ee&&Ut(zt.start+zt.count-1,T.width,4)===Lt?xt.count=Math.max(xt.count,zt.start+zt.count-xt.start):(++Nt,et[Nt]=zt)}et.length=Nt+1;const St=o.getParameter(o.UNPACK_ROW_LENGTH),At=o.getParameter(o.UNPACK_SKIP_PIXELS),Tt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let pt=0,xt=et.length;pt<xt;pt++){const zt=et[pt],Dt=Math.floor(zt.start/4),Lt=Math.ceil(zt.count/4),ee=Dt%T.width,X=Math.floor(Dt/T.width),Rt=Lt,Ot=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ee),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ee,X,Rt,Ot,$,dt,T.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,St),o.pixelStorei(o.UNPACK_SKIP_PIXELS,At),o.pixelStorei(o.UNPACK_SKIP_ROWS,Tt)}}function st(O,T,$){let dt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=o.TEXTURE_3D);const Et=bt(O,T),et=T.source;i.bindTexture(dt,O.__webglTexture,o.TEXTURE0+$);const Nt=s.get(et);if(et.version!==Nt.__version||Et===!0){i.activeTexture(o.TEXTURE0+$);const St=Ae.getPrimaries(Ae.workingColorSpace),At=T.colorSpace===Xa?null:Ae.getPrimaries(T.colorSpace),Tt=T.colorSpace===Xa||St===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let pt=w(T.image,!1,l.maxTextureSize);pt=je(T,pt);const xt=c.convert(T.format,T.colorSpace),zt=c.convert(T.type);let Dt=L(T.internalFormat,xt,zt,T.colorSpace,T.isVideoTexture);at(dt,T);let Lt;const ee=T.mipmaps,X=T.isVideoTexture!==!0,Rt=Nt.__version===void 0||Et===!0,Ot=et.dataReady,Vt=H(T,pt);if(T.isDepthTexture)Dt=D(T.format===Vo,T.type),Rt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Dt,pt.width,pt.height):i.texImage2D(o.TEXTURE_2D,0,Dt,pt.width,pt.height,0,xt,zt,null));else if(T.isDataTexture)if(ee.length>0){X&&Rt&&i.texStorage2D(o.TEXTURE_2D,Vt,Dt,ee[0].width,ee[0].height);for(let Ct=0,vt=ee.length;Ct<vt;Ct++)Lt=ee[Ct],X?Ot&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Lt.width,Lt.height,xt,zt,Lt.data):i.texImage2D(o.TEXTURE_2D,Ct,Dt,Lt.width,Lt.height,0,xt,zt,Lt.data);T.generateMipmaps=!1}else X?(Rt&&i.texStorage2D(o.TEXTURE_2D,Vt,Dt,pt.width,pt.height),Ot&&Pt(T,pt,xt,zt)):i.texImage2D(o.TEXTURE_2D,0,Dt,pt.width,pt.height,0,xt,zt,pt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Dt,ee[0].width,ee[0].height,pt.depth);for(let Ct=0,vt=ee.length;Ct<vt;Ct++)if(Lt=ee[Ct],T.format!==bi)if(xt!==null)if(X){if(Ot)if(T.layerUpdates.size>0){const Xt=v0(Lt.width,Lt.height,T.format,T.type);for(const re of T.layerUpdates){const Oe=Lt.data.subarray(re*Xt/Lt.data.BYTES_PER_ELEMENT,(re+1)*Xt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,re,Lt.width,Lt.height,1,xt,Oe)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Lt.width,Lt.height,pt.depth,xt,Lt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ct,Dt,Lt.width,Lt.height,pt.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ot&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Lt.width,Lt.height,pt.depth,xt,zt,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ct,Dt,Lt.width,Lt.height,pt.depth,0,xt,zt,Lt.data)}else{X&&Rt&&i.texStorage2D(o.TEXTURE_2D,Vt,Dt,ee[0].width,ee[0].height);for(let Ct=0,vt=ee.length;Ct<vt;Ct++)Lt=ee[Ct],T.format!==bi?xt!==null?X?Ot&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ct,0,0,Lt.width,Lt.height,xt,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,Ct,Dt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ot&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Lt.width,Lt.height,xt,zt,Lt.data):i.texImage2D(o.TEXTURE_2D,Ct,Dt,Lt.width,Lt.height,0,xt,zt,Lt.data)}else if(T.isDataArrayTexture)if(X){if(Rt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Dt,pt.width,pt.height,pt.depth),Ot)if(T.layerUpdates.size>0){const Ct=v0(pt.width,pt.height,T.format,T.type);for(const vt of T.layerUpdates){const Xt=pt.data.subarray(vt*Ct/pt.data.BYTES_PER_ELEMENT,(vt+1)*Ct/pt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,vt,pt.width,pt.height,1,xt,zt,Xt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,xt,zt,pt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Dt,pt.width,pt.height,pt.depth,0,xt,zt,pt.data);else if(T.isData3DTexture)X?(Rt&&i.texStorage3D(o.TEXTURE_3D,Vt,Dt,pt.width,pt.height,pt.depth),Ot&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,xt,zt,pt.data)):i.texImage3D(o.TEXTURE_3D,0,Dt,pt.width,pt.height,pt.depth,0,xt,zt,pt.data);else if(T.isFramebufferTexture){if(Rt)if(X)i.texStorage2D(o.TEXTURE_2D,Vt,Dt,pt.width,pt.height);else{let Ct=pt.width,vt=pt.height;for(let Xt=0;Xt<Vt;Xt++)i.texImage2D(o.TEXTURE_2D,Xt,Dt,Ct,vt,0,xt,zt,null),Ct>>=1,vt>>=1}}else if(ee.length>0){if(X&&Rt){const Ct=Re(ee[0]);i.texStorage2D(o.TEXTURE_2D,Vt,Dt,Ct.width,Ct.height)}for(let Ct=0,vt=ee.length;Ct<vt;Ct++)Lt=ee[Ct],X?Ot&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,xt,zt,Lt):i.texImage2D(o.TEXTURE_2D,Ct,Dt,xt,zt,Lt);T.generateMipmaps=!1}else if(X){if(Rt){const Ct=Re(pt);i.texStorage2D(o.TEXTURE_2D,Vt,Dt,Ct.width,Ct.height)}Ot&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,xt,zt,pt)}else i.texImage2D(o.TEXTURE_2D,0,Dt,xt,zt,pt);y(T)&&g(dt),Nt.__version=et.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function ft(O,T,$){if(T.image.length!==6)return;const dt=bt(O,T),Et=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+$);const et=s.get(Et);if(Et.version!==et.__version||dt===!0){i.activeTexture(o.TEXTURE0+$);const Nt=Ae.getPrimaries(Ae.workingColorSpace),St=T.colorSpace===Xa?null:Ae.getPrimaries(T.colorSpace),At=T.colorSpace===Xa||Nt===St?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Tt=T.isCompressedTexture||T.image[0].isCompressedTexture,pt=T.image[0]&&T.image[0].isDataTexture,xt=[];for(let vt=0;vt<6;vt++)!Tt&&!pt?xt[vt]=w(T.image[vt],!0,l.maxCubemapSize):xt[vt]=pt?T.image[vt].image:T.image[vt],xt[vt]=je(T,xt[vt]);const zt=xt[0],Dt=c.convert(T.format,T.colorSpace),Lt=c.convert(T.type),ee=L(T.internalFormat,Dt,Lt,T.colorSpace),X=T.isVideoTexture!==!0,Rt=et.__version===void 0||dt===!0,Ot=Et.dataReady;let Vt=H(T,zt);at(o.TEXTURE_CUBE_MAP,T);let Ct;if(Tt){X&&Rt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ee,zt.width,zt.height);for(let vt=0;vt<6;vt++){Ct=xt[vt].mipmaps;for(let Xt=0;Xt<Ct.length;Xt++){const re=Ct[Xt];T.format!==bi?Dt!==null?X?Ot&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,0,0,re.width,re.height,Dt,re.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,ee,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,0,0,re.width,re.height,Dt,Lt,re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt,ee,re.width,re.height,0,Dt,Lt,re.data)}}}else{if(Ct=T.mipmaps,X&&Rt){Ct.length>0&&Vt++;const vt=Re(xt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ee,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(pt){X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,xt[vt].width,xt[vt].height,Dt,Lt,xt[vt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ee,xt[vt].width,xt[vt].height,0,Dt,Lt,xt[vt].data);for(let Xt=0;Xt<Ct.length;Xt++){const Oe=Ct[Xt].image[vt].image;X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,0,0,Oe.width,Oe.height,Dt,Lt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,ee,Oe.width,Oe.height,0,Dt,Lt,Oe.data)}}else{X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Dt,Lt,xt[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,ee,Dt,Lt,xt[vt]);for(let Xt=0;Xt<Ct.length;Xt++){const re=Ct[Xt];X?Ot&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,0,0,Dt,Lt,re.image[vt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Xt+1,ee,Dt,Lt,re.image[vt])}}}y(T)&&g(o.TEXTURE_CUBE_MAP),et.__version=Et.version,T.onUpdate&&T.onUpdate(T)}O.__version=T.version}function wt(O,T,$,dt,Et,et){const Nt=c.convert($.format,$.colorSpace),St=c.convert($.type),At=L($.internalFormat,Nt,St,$.colorSpace),Tt=s.get(T),pt=s.get($);if(pt.__renderTarget=T,!Tt.__hasExternalTextures){const xt=Math.max(1,T.width>>et),zt=Math.max(1,T.height>>et);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,et,At,xt,zt,T.depth,0,Nt,St,null):i.texImage2D(Et,et,At,xt,zt,0,Nt,St,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Wt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Et,pt.__webglTexture,0,Ne(T)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Et,pt.__webglTexture,et),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(O,T,$){if(o.bindRenderbuffer(o.RENDERBUFFER,O),T.depthBuffer){const dt=T.depthTexture,Et=dt&&dt.isDepthTexture?dt.type:null,et=D(T.stencilBuffer,Et),Nt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=Ne(T);Wt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,St,et,T.width,T.height):$?o.renderbufferStorageMultisample(o.RENDERBUFFER,St,et,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,et,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Nt,o.RENDERBUFFER,O)}else{const dt=T.textures;for(let Et=0;Et<dt.length;Et++){const et=dt[Et],Nt=c.convert(et.format,et.colorSpace),St=c.convert(et.type),At=L(et.internalFormat,Nt,St,et.colorSpace),Tt=Ne(T);$&&Wt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Tt,At,T.width,T.height):Wt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Tt,At,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,At,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Zt(O,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ot(T.depthTexture,0);const Et=dt.__webglTexture,et=Ne(T);if(T.depthTexture.format===Go)Wt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(T.depthTexture.format===Vo)Wt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,et):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function le(O){const T=s.get(O),$=O.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==O.depthTexture){const dt=O.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const Et=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",Et)};dt.addEventListener("dispose",Et),T.__depthDisposeCallback=Et}T.__boundDepthTexture=dt}if(O.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");const dt=O.texture.mipmaps;dt&&dt.length>0?Zt(T.__webglFramebuffer[0],O):Zt(T.__webglFramebuffer,O)}else if($){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=o.createRenderbuffer(),Ht(T.__webglDepthbuffer[dt],O,!1);else{const Et=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,et),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,et)}}else{const dt=O.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ht(T.__webglDepthbuffer,O,!1);else{const Et=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,et=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,et),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,et)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ke(O,T,$){const dt=s.get(O);T!==void 0&&wt(dt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&le(O)}function V(O){const T=O.texture,$=s.get(O),dt=s.get(T);O.addEventListener("dispose",U);const Et=O.textures,et=O.isWebGLCubeRenderTarget===!0,Nt=Et.length>1;if(Nt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=T.version,h.memory.textures++),et){$.__webglFramebuffer=[];for(let St=0;St<6;St++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[St]=[];for(let At=0;At<T.mipmaps.length;At++)$.__webglFramebuffer[St][At]=o.createFramebuffer()}else $.__webglFramebuffer[St]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let St=0;St<T.mipmaps.length;St++)$.__webglFramebuffer[St]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(Nt)for(let St=0,At=Et.length;St<At;St++){const Tt=s.get(Et[St]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Wt(O)===!1){$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let St=0;St<Et.length;St++){const At=Et[St];$.__webglColorRenderbuffer[St]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[St]);const Tt=c.convert(At.format,At.colorSpace),pt=c.convert(At.type),xt=L(At.internalFormat,Tt,pt,At.colorSpace,O.isXRRenderTarget===!0),zt=Ne(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,xt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+St,o.RENDERBUFFER,$.__webglColorRenderbuffer[St])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht($.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(et){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),at(o.TEXTURE_CUBE_MAP,T);for(let St=0;St<6;St++)if(T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)wt($.__webglFramebuffer[St][At],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,At);else wt($.__webglFramebuffer[St],O,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);y(T)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Nt){for(let St=0,At=Et.length;St<At;St++){const Tt=Et[St],pt=s.get(Tt);let xt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(xt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(xt,pt.__webglTexture),at(xt,Tt),wt($.__webglFramebuffer,O,Tt,o.COLOR_ATTACHMENT0+St,xt,0),y(Tt)&&g(xt)}i.unbindTexture()}else{let St=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(St=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(St,dt.__webglTexture),at(St,T),T.mipmaps&&T.mipmaps.length>0)for(let At=0;At<T.mipmaps.length;At++)wt($.__webglFramebuffer[At],O,T,o.COLOR_ATTACHMENT0,St,At);else wt($.__webglFramebuffer,O,T,o.COLOR_ATTACHMENT0,St,0);y(T)&&g(St),i.unbindTexture()}O.depthBuffer&&le(O)}function Me(O){const T=O.textures;for(let $=0,dt=T.length;$<dt;$++){const Et=T[$];if(y(Et)){const et=N(O),Nt=s.get(Et).__webglTexture;i.bindTexture(et,Nt),g(et),i.unbindTexture()}}}const Gt=[],$t=[];function kt(O){if(O.samples>0){if(Wt(O)===!1){const T=O.textures,$=O.width,dt=O.height;let Et=o.COLOR_BUFFER_BIT;const et=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=s.get(O),St=T.length>1;if(St)for(let Tt=0;Tt<T.length;Tt++)i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const At=O.texture.mipmaps;At&&At.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let Tt=0;Tt<T.length;Tt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),St){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Tt]);const pt=s.get(T[Tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,pt,0)}o.blitFramebuffer(0,0,$,dt,0,0,$,dt,Et,o.NEAREST),m===!0&&(Gt.length=0,$t.length=0,Gt.push(o.COLOR_ATTACHMENT0+Tt),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Gt.push(et),$t.push(et),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Gt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),St)for(let Tt=0;Tt<T.length;Tt++){i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.RENDERBUFFER,Nt.__webglColorRenderbuffer[Tt]);const pt=s.get(T[Tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Nt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.TEXTURE_2D,pt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const T=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Ne(O){return Math.min(l.maxSamples,O.samples)}function Wt(O){const T=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function se(O){const T=h.render.frame;S.get(O)!==T&&(S.set(O,T),O.update())}function je(O,T){const $=O.colorSpace,dt=O.format,Et=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||$!==Lr&&$!==Xa&&(Ae.getTransfer($)===Ie?(dt!==bi||Et!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Re(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=Y,this.setTexture2D=ot,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=Ke,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Wt}function V1(o,t){function i(s,l=Xa){let c;const h=Ae.getTransfer(l);if(s===zi)return o.UNSIGNED_BYTE;if(s===Od)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Pd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===iv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===av)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===ev)return o.BYTE;if(s===nv)return o.SHORT;if(s===Fo)return o.UNSIGNED_SHORT;if(s===Nd)return o.INT;if(s===Ts)return o.UNSIGNED_INT;if(s===ua)return o.FLOAT;if(s===qa)return o.HALF_FLOAT;if(s===sv)return o.ALPHA;if(s===rv)return o.RGB;if(s===bi)return o.RGBA;if(s===Go)return o.DEPTH_COMPONENT;if(s===Vo)return o.DEPTH_STENCIL;if(s===ov)return o.RED;if(s===zd)return o.RED_INTEGER;if(s===lv)return o.RG;if(s===Id)return o.RG_INTEGER;if(s===Bd)return o.RGBA_INTEGER;if(s===Oc||s===Pc||s===zc||s===Ic)if(h===Ie)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ic)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ic)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===td||s===ed||s===nd||s===id)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===td)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ed)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===id)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ad||s===sd||s===rd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===ad||s===sd)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===rd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===od||s===ld||s===cd||s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===Sd||s===xd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===od)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ld)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ud)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===md)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===_d)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yd||s===Md||s===Ed)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===yd)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Md)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ed)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Td||s===bd||s===Ad||s===Rd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Td)return c.COMPRESSED_RED_RGTC1_EXT;if(s===bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ad)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ho?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const k1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X1=`
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

}`;class W1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new xv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new vi({vertexShader:k1,fragmentShader:X1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Rn(new Yc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y1 extends As{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,S=null,_=null,x=null,M=null,E=null;const w=typeof XRWebGLBinding<"u",y=new W1,g={},N=i.getContextAttributes();let L=null,D=null;const H=[],I=[],U=new ie;let B=null;const A=new gi;A.viewport=new Qe;const R=new gi;R.viewport=new Qe;const F=[A,R],Y=new fM;let J=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(st){let ft=H[st];return ft===void 0&&(ft=new wh,H[st]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(st){let ft=H[st];return ft===void 0&&(ft=new wh,H[st]=ft),ft.getGripSpace()},this.getHand=function(st){let ft=H[st];return ft===void 0&&(ft=new wh,H[st]=ft),ft.getHandSpace()};function ot(st){const ft=I.indexOf(st.inputSource);if(ft===-1)return;const wt=H[ft];wt!==void 0&&(wt.update(st.inputSource,st.frame,p||h),wt.dispatchEvent({type:st.type,data:st.inputSource}))}function P(){l.removeEventListener("select",ot),l.removeEventListener("selectstart",ot),l.removeEventListener("selectend",ot),l.removeEventListener("squeeze",ot),l.removeEventListener("squeezestart",ot),l.removeEventListener("squeezeend",ot),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",j);for(let st=0;st<H.length;st++){const ft=I[st];ft!==null&&(I[st]=null,H[st].disconnect(ft))}J=null,ut=null,y.reset();for(const st in g)delete g[st];t.setRenderTarget(L),M=null,x=null,_=null,l=null,D=null,Pt.stop(),s.isPresenting=!1,t.setPixelRatio(B),t.setSize(U.width,U.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(st){c=st,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(st){d=st,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(st){p=st},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(st){if(l=st,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ot),l.addEventListener("selectstart",ot),l.addEventListener("selectend",ot),l.addEventListener("squeeze",ot),l.addEventListener("squeezestart",ot),l.addEventListener("squeezeend",ot),l.addEventListener("end",P),l.addEventListener("inputsourceschange",j),N.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(U),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,Zt=null;N.depth&&(Zt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=N.stencil?Vo:Go,Ht=N.stencil?Ho:Ts);const le={colorFormat:i.RGBA8,depthFormat:Zt,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(le),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),D=new Ii(x.textureWidth,x.textureHeight,{format:bi,type:zi,depthTexture:new Xd(x.textureWidth,x.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const wt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Ii(M.framebufferWidth,M.framebufferHeight,{format:bi,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Pt.setContext(l),Pt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(st){for(let ft=0;ft<st.removed.length;ft++){const wt=st.removed[ft],Ht=I.indexOf(wt);Ht>=0&&(I[Ht]=null,H[Ht].disconnect(wt))}for(let ft=0;ft<st.added.length;ft++){const wt=st.added[ft];let Ht=I.indexOf(wt);if(Ht===-1){for(let le=0;le<H.length;le++)if(le>=I.length){I.push(wt),Ht=le;break}else if(I[le]===null){I[le]=wt,Ht=le;break}if(Ht===-1)break}const Zt=H[Ht];Zt&&Zt.connect(wt)}}const q=new W,gt=new W;function Mt(st,ft,wt){q.setFromMatrixPosition(ft.matrixWorld),gt.setFromMatrixPosition(wt.matrixWorld);const Ht=q.distanceTo(gt),Zt=ft.projectionMatrix.elements,le=wt.projectionMatrix.elements,Ke=Zt[14]/(Zt[10]-1),V=Zt[14]/(Zt[10]+1),Me=(Zt[9]+1)/Zt[5],Gt=(Zt[9]-1)/Zt[5],$t=(Zt[8]-1)/Zt[0],kt=(le[8]+1)/le[0],Ne=Ke*$t,Wt=Ke*kt,se=Ht/(-$t+kt),je=se*-$t;if(ft.matrixWorld.decompose(st.position,st.quaternion,st.scale),st.translateX(je),st.translateZ(se),st.matrixWorld.compose(st.position,st.quaternion,st.scale),st.matrixWorldInverse.copy(st.matrixWorld).invert(),Zt[10]===-1)st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const Re=Ke+se,O=V+se,T=Ne-je,$=Wt+(Ht-je),dt=Me*V/O*Re,Et=Gt*V/O*Re;st.projectionMatrix.makePerspective(T,$,dt,Et,Re,O),st.projectionMatrixInverse.copy(st.projectionMatrix).invert()}}function z(st,ft){ft===null?st.matrixWorld.copy(st.matrix):st.matrixWorld.multiplyMatrices(ft.matrixWorld,st.matrix),st.matrixWorldInverse.copy(st.matrixWorld).invert()}this.updateCamera=function(st){if(l===null)return;let ft=st.near,wt=st.far;y.texture!==null&&(y.depthNear>0&&(ft=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),Y.near=R.near=A.near=ft,Y.far=R.far=A.far=wt,(J!==Y.near||ut!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),J=Y.near,ut=Y.far),Y.layers.mask=st.layers.mask|6,A.layers.mask=Y.layers.mask&3,R.layers.mask=Y.layers.mask&5;const Ht=st.parent,Zt=Y.cameras;z(Y,Ht);for(let le=0;le<Zt.length;le++)z(Zt[le],Ht);Zt.length===2?Mt(Y,A,R):Y.projectionMatrix.copy(A.projectionMatrix),at(st,Y,Ht)};function at(st,ft,wt){wt===null?st.matrix.copy(ft.matrixWorld):(st.matrix.copy(wt.matrixWorld),st.matrix.invert(),st.matrix.multiply(ft.matrixWorld)),st.matrix.decompose(st.position,st.quaternion,st.scale),st.updateMatrixWorld(!0),st.projectionMatrix.copy(ft.projectionMatrix),st.projectionMatrixInverse.copy(ft.projectionMatrixInverse),st.isPerspectiveCamera&&(st.fov=Cd*2*Math.atan(1/st.projectionMatrix.elements[5]),st.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(st){m=st,x!==null&&(x.fixedFoveation=st),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=st)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(st){return g[st]};let bt=null;function Ut(st,ft){if(S=ft.getViewerPose(p||h),E=ft,S!==null){const wt=S.views;M!==null&&(t.setRenderTargetFramebuffer(D,M.framebuffer),t.setRenderTarget(D));let Ht=!1;wt.length!==Y.cameras.length&&(Y.cameras.length=0,Ht=!0);for(let V=0;V<wt.length;V++){const Me=wt[V];let Gt=null;if(M!==null)Gt=M.getViewport(Me);else{const kt=_.getViewSubImage(x,Me);Gt=kt.viewport,V===0&&(t.setRenderTargetTextures(D,kt.colorTexture,kt.depthStencilTexture),t.setRenderTarget(D))}let $t=F[V];$t===void 0&&($t=new gi,$t.layers.enable(V),$t.viewport=new Qe,F[V]=$t),$t.matrix.fromArray(Me.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Me.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),V===0&&(Y.matrix.copy($t.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ht===!0&&Y.cameras.push($t)}const Zt=l.enabledFeatures;if(Zt&&Zt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){_=s.getBinding();const V=_.getDepthInformation(wt[0]);V&&V.isValid&&V.texture&&y.init(V,l.renderState)}if(Zt&&Zt.includes("camera-access")&&w){t.state.unbindTexture(),_=s.getBinding();for(let V=0;V<wt.length;V++){const Me=wt[V].camera;if(Me){let Gt=g[Me];Gt||(Gt=new xv,g[Me]=Gt);const $t=_.getCameraImage(Me);Gt.sourceTexture=$t}}}}for(let wt=0;wt<H.length;wt++){const Ht=I[wt],Zt=H[wt];Ht!==null&&Zt!==void 0&&Zt.update(Ht,ft,p||h)}bt&&bt(st,ft),ft.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ft}),E=null}const Pt=new Mv;Pt.setAnimationLoop(Ut),this.setAnimationLoop=function(st){bt=st},this.dispose=function(){}}}const vs=new Bi,q1=new Je;function j1(o,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,gv(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,N,L,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),_(y,g)):g.isMeshPhongMaterial?(c(y,g),S(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&M(y,g,D)):g.isMeshMatcapMaterial?(c(y,g),E(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),w(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(h(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?m(y,g,N,L):g.isSpriteMaterial?p(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Yn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Yn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const N=t.get(g),L=N.envMap,D=N.envMapRotation;L&&(y.envMap.value=L,vs.copy(D),vs.x*=-1,vs.y*=-1,vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),y.envMapRotation.value.setFromMatrix4(q1.makeRotationFromEuler(vs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function h(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,N,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*N,y.scale.value=L*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function p(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function S(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function _(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,N){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Yn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,g){g.matcap&&(y.matcap.value=g.matcap)}function w(y,g){const N=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Z1(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,L){const D=L.program;s.uniformBlockBinding(N,D)}function p(N,L){let D=l[N.id];D===void 0&&(E(N),D=S(N),l[N.id]=D,N.addEventListener("dispose",y));const H=L.program;s.updateUBOMapping(N,H);const I=t.render.frame;c[N.id]!==I&&(x(N),c[N.id]=I)}function S(N){const L=_();N.__bindingPointIndex=L;const D=o.createBuffer(),H=N.__size,I=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,D),D}function _(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=l[N.id],D=N.uniforms,H=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let I=0,U=D.length;I<U;I++){const B=Array.isArray(D[I])?D[I]:[D[I]];for(let A=0,R=B.length;A<R;A++){const F=B[A];if(M(F,I,A,H)===!0){const Y=F.__offset,J=Array.isArray(F.value)?F.value:[F.value];let ut=0;for(let ot=0;ot<J.length;ot++){const P=J[ot],j=w(P);typeof P=="number"||typeof P=="boolean"?(F.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,Y+ut,F.__data)):P.isMatrix3?(F.__data[0]=P.elements[0],F.__data[1]=P.elements[1],F.__data[2]=P.elements[2],F.__data[3]=0,F.__data[4]=P.elements[3],F.__data[5]=P.elements[4],F.__data[6]=P.elements[5],F.__data[7]=0,F.__data[8]=P.elements[6],F.__data[9]=P.elements[7],F.__data[10]=P.elements[8],F.__data[11]=0):(P.toArray(F.__data,ut),ut+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(N,L,D,H){const I=N.value,U=L+"_"+D;if(H[U]===void 0)return typeof I=="number"||typeof I=="boolean"?H[U]=I:H[U]=I.clone(),!0;{const B=H[U];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return H[U]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function E(N){const L=N.uniforms;let D=0;const H=16;for(let U=0,B=L.length;U<B;U++){const A=Array.isArray(L[U])?L[U]:[L[U]];for(let R=0,F=A.length;R<F;R++){const Y=A[R],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let ut=0,ot=J.length;ut<ot;ut++){const P=J[ut],j=w(P),q=D%H,gt=q%j.boundary,Mt=q+gt;D+=gt,Mt!==0&&H-Mt<j.storage&&(D+=H-Mt),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=D,D+=j.storage}}}const I=D%H;return I>0&&(D+=H-I),N.__size=D,N.__cache={},this}function w(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function y(N){const L=N.target;L.removeEventListener("dispose",y);const D=h.indexOf(L.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function g(){for(const N in l)o.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:m,update:p,dispose:g}}class K1{constructor(t={}){const{canvas:i=by(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,g=null;const N=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let H=!1;this._outputColorSpace=mi;let I=0,U=0,B=null,A=-1,R=null;const F=new Qe,Y=new Qe;let J=null;const ut=new be(0);let ot=0,P=i.width,j=i.height,q=1,gt=null,Mt=null;const z=new Qe(0,0,P,j),at=new Qe(0,0,P,j);let bt=!1;const Ut=new kd;let Pt=!1,st=!1;const ft=new Je,wt=new W,Ht=new Qe,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function Ke(){return B===null?q:1}let V=s;function Me(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ud}`),i.addEventListener("webglcontextlost",Ot,!1),i.addEventListener("webglcontextrestored",Vt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),V===null){const Z="webgl2";if(V=Me(Z,C),V===null)throw Me(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Gt,$t,kt,Ne,Wt,se,je,Re,O,T,$,dt,Et,et,Nt,St,At,Tt,pt,xt,zt,Dt,Lt,ee;function X(){Gt=new rb(V),Gt.init(),Dt=new V1(V,Gt),$t=new $T(V,Gt,t,Dt),kt=new H1(V,Gt),$t.reversedDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),Ne=new cb(V),Wt=new R1,se=new G1(V,Gt,kt,Wt,$t,Dt,Ne),je=new eb(D),Re=new sb(D),O=new mM(V),Lt=new QT(V,O),T=new ob(V,O,Ne,Lt),$=new fb(V,T,O,Ne),pt=new ub(V,$t,se),St=new tb(Wt),dt=new A1(D,je,Re,Gt,$t,Lt,St),Et=new j1(D,Wt),et=new w1,Nt=new P1(Gt),Tt=new KT(D,je,Re,kt,$,M,m),At=new B1(D,$,$t),ee=new Z1(V,Ne,$t,kt),xt=new JT(V,Gt,Ne),zt=new lb(V,Gt,Ne),Ne.programs=dt.programs,D.capabilities=$t,D.extensions=Gt,D.properties=Wt,D.renderLists=et,D.shadowMap=At,D.state=kt,D.info=Ne}X();const Rt=new Y1(D,V);this.xr=Rt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const C=Gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(P,j,!1))},this.getSize=function(C){return C.set(P,j)},this.setSize=function(C,Z,rt=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,j=Z,i.width=Math.floor(C*q),i.height=Math.floor(Z*q),rt===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(P*q,j*q).floor()},this.setDrawingBufferSize=function(C,Z,rt){P=C,j=Z,q=rt,i.width=Math.floor(C*rt),i.height=Math.floor(Z*rt),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(z)},this.setViewport=function(C,Z,rt,lt){C.isVector4?z.set(C.x,C.y,C.z,C.w):z.set(C,Z,rt,lt),kt.viewport(F.copy(z).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(at)},this.setScissor=function(C,Z,rt,lt){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,Z,rt,lt),kt.scissor(Y.copy(at).multiplyScalar(q).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(C){kt.setScissorTest(bt=C)},this.setOpaqueSort=function(C){gt=C},this.setTransparentSort=function(C){Mt=C},this.getClearColor=function(C){return C.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor(...arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,rt=!0){let lt=0;if(C){let Q=!1;if(B!==null){const yt=B.texture.format;Q=yt===Bd||yt===Id||yt===zd}if(Q){const yt=B.texture.type,It=yt===zi||yt===Ts||yt===Fo||yt===Ho||yt===Od||yt===Pd,qt=Tt.getClearColor(),Ft=Tt.getClearAlpha(),Qt=qt.r,ae=qt.g,Jt=qt.b;It?(E[0]=Qt,E[1]=ae,E[2]=Jt,E[3]=Ft,V.clearBufferuiv(V.COLOR,0,E)):(w[0]=Qt,w[1]=ae,w[2]=Jt,w[3]=Ft,V.clearBufferiv(V.COLOR,0,w))}else lt|=V.COLOR_BUFFER_BIT}Z&&(lt|=V.DEPTH_BUFFER_BIT),rt&&(lt|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ot,!1),i.removeEventListener("webglcontextrestored",Vt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),Tt.dispose(),et.dispose(),Nt.dispose(),Wt.dispose(),je.dispose(),Re.dispose(),$.dispose(),Lt.dispose(),ee.dispose(),dt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",si),Rt.removeEventListener("sessionend",Pr),Ai.stop()};function Ot(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const C=Ne.autoReset,Z=At.enabled,rt=At.autoUpdate,lt=At.needsUpdate,Q=At.type;X(),Ne.autoReset=C,At.enabled=Z,At.autoUpdate=rt,At.needsUpdate=lt,At.type=Q}function Ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function vt(C){const Z=C.target;Z.removeEventListener("dispose",vt),Xt(Z)}function Xt(C){re(C),Wt.remove(C)}function re(C){const Z=Wt.get(C).programs;Z!==void 0&&(Z.forEach(function(rt){dt.releaseProgram(rt)}),C.isShaderMaterial&&dt.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,rt,lt,Q,yt){Z===null&&(Z=Zt);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,qt=da(C,Z,rt,lt,Q);kt.setMaterial(lt,It);let Ft=rt.index,Qt=1;if(lt.wireframe===!0){if(Ft=T.getWireframeAttribute(rt),Ft===void 0)return;Qt=2}const ae=rt.drawRange,Jt=rt.attributes.position;let de=ae.start*Qt,Ue=(ae.start+ae.count)*Qt;yt!==null&&(de=Math.max(de,yt.start*Qt),Ue=Math.min(Ue,(yt.start+yt.count)*Qt)),Ft!==null?(de=Math.max(de,0),Ue=Math.min(Ue,Ft.count)):Jt!=null&&(de=Math.max(de,0),Ue=Math.min(Ue,Jt.count));const Ve=Ue-de;if(Ve<0||Ve===1/0)return;Lt.setup(Q,lt,qt,rt,Ft);let Le,pe=xt;if(Ft!==null&&(Le=O.get(Ft),pe=zt,pe.setIndex(Le)),Q.isMesh)lt.wireframe===!0?(kt.setLineWidth(lt.wireframeLinewidth*Ke()),pe.setMode(V.LINES)):pe.setMode(V.TRIANGLES);else if(Q.isLine){let jt=lt.linewidth;jt===void 0&&(jt=1),kt.setLineWidth(jt*Ke()),Q.isLineSegments?pe.setMode(V.LINES):Q.isLineLoop?pe.setMode(V.LINE_LOOP):pe.setMode(V.LINE_STRIP)}else Q.isPoints?pe.setMode(V.POINTS):Q.isSprite&&pe.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ko("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))pe.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const jt=Q._multiDrawStarts,Xe=Q._multiDrawCounts,Te=Q._multiDrawCount,yn=Ft?O.get(Ft).bytesPerElement:1,Fi=Wt.get(lt).currentProgram.getUniforms();for(let _n=0;_n<Te;_n++)Fi.setValue(V,"_gl_DrawID",_n),pe.render(jt[_n]/yn,Xe[_n])}else if(Q.isInstancedMesh)pe.renderInstances(de,Ve,Q.count);else if(rt.isInstancedBufferGeometry){const jt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Xe=Math.min(rt.instanceCount,jt);pe.renderInstances(de,Ve,Xe)}else pe.render(de,Ve)};function Oe(C,Z,rt){C.transparent===!0&&C.side===ca&&C.forceSinglePass===!1?(C.side=Yn,C.needsUpdate=!0,jn(C,Z,rt),C.side=Ya,C.needsUpdate=!0,jn(C,Z,rt),C.side=ca):jn(C,Z,rt)}this.compile=function(C,Z,rt=null){rt===null&&(rt=C),g=Nt.get(rt),g.init(Z),L.push(g),rt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),C!==rt&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();const lt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const yt=Q.material;if(yt)if(Array.isArray(yt))for(let It=0;It<yt.length;It++){const qt=yt[It];Oe(qt,rt,Q),lt.add(qt)}else Oe(yt,rt,Q),lt.add(yt)}),g=L.pop(),lt},this.compileAsync=function(C,Z,rt=null){const lt=this.compile(C,Z,rt);return new Promise(Q=>{function yt(){if(lt.forEach(function(It){Wt.get(It).currentProgram.isReady()&&lt.delete(It)}),lt.size===0){Q(C);return}setTimeout(yt,10)}Gt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ee=null;function Nn(C){Ee&&Ee(C)}function si(){Ai.stop()}function Pr(){Ai.start()}const Ai=new Mv;Ai.setAnimationLoop(Nn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){Ee=C,Rt.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},Rt.addEventListener("sessionstart",si),Rt.addEventListener("sessionend",Pr),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(Z),Z=Rt.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,Z,B),g=Nt.get(C,L.length),g.init(Z),L.push(g),ft.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ut.setFromProjectionMatrix(ft,Oi,Z.reversedDepth),st=this.localClippingEnabled,Pt=St.init(this.clippingPlanes,st),y=et.get(C,N.length),y.init(),N.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){const yt=D.xr.getDepthSensingMesh();yt!==null&&Cs(yt,Z,-1/0,D.sortObjects)}Cs(C,Z,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(gt,Mt),le=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,le&&Tt.addToRenderList(y,C),this.info.render.frame++,Pt===!0&&St.beginShadows();const rt=g.state.shadowsArray;At.render(rt,C,Z),Pt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,Q=y.transmissive;if(g.setupLights(),Z.isArrayCamera){const yt=Z.cameras;if(Q.length>0)for(let It=0,qt=yt.length;It<qt;It++){const Ft=yt[It];Ds(lt,Q,C,Ft)}le&&Tt.render(C);for(let It=0,qt=yt.length;It<qt;It++){const Ft=yt[It];ws(y,C,Ft,Ft.viewport)}}else Q.length>0&&Ds(lt,Q,C,Z),le&&Tt.render(C),ws(y,C,Z);B!==null&&U===0&&(se.updateMultisampleRenderTarget(B),se.updateRenderTargetMipmap(B)),C.isScene===!0&&C.onAfterRender(D,C,Z),Lt.resetDefaultState(),A=-1,R=null,L.pop(),L.length>0?(g=L[L.length-1],Pt===!0&&St.setGlobalState(D.clippingPlanes,g.state.camera)):g=null,N.pop(),N.length>0?y=N[N.length-1]:y=null};function Cs(C,Z,rt,lt){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ut.intersectsSprite(C)){lt&&Ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ft);const It=$.update(C),qt=C.material;qt.visible&&y.push(C,It,qt,rt,Ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ut.intersectsObject(C))){const It=$.update(C),qt=C.material;if(lt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ht.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ht.copy(It.boundingSphere.center)),Ht.applyMatrix4(C.matrixWorld).applyMatrix4(ft)),Array.isArray(qt)){const Ft=It.groups;for(let Qt=0,ae=Ft.length;Qt<ae;Qt++){const Jt=Ft[Qt],de=qt[Jt.materialIndex];de&&de.visible&&y.push(C,It,de,rt,Ht.z,Jt)}}else qt.visible&&y.push(C,It,qt,rt,Ht.z,null)}}const yt=C.children;for(let It=0,qt=yt.length;It<qt;It++)Cs(yt[It],Z,rt,lt)}function ws(C,Z,rt,lt){const Q=C.opaque,yt=C.transmissive,It=C.transparent;g.setupLightsView(rt),Pt===!0&&St.setGlobalState(D.clippingPlanes,rt),lt&&kt.viewport(F.copy(lt)),Q.length>0&&ja(Q,Z,rt),yt.length>0&&ja(yt,Z,rt),It.length>0&&ja(It,Z,rt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ds(C,Z,rt,lt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[lt.id]===void 0&&(g.state.transmissionRenderTarget[lt.id]=new Ii(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?qa:zi,minFilter:Es,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace}));const yt=g.state.transmissionRenderTarget[lt.id],It=lt.viewport||F;yt.setSize(It.z*D.transmissionResolutionScale,It.w*D.transmissionResolutionScale);const qt=D.getRenderTarget(),Ft=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(yt),D.getClearColor(ut),ot=D.getClearAlpha(),ot<1&&D.setClearColor(16777215,.5),D.clear(),le&&Tt.render(rt);const ae=D.toneMapping;D.toneMapping=Wa;const Jt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),g.setupLightsView(lt),Pt===!0&&St.setGlobalState(D.clippingPlanes,lt),ja(C,rt,lt),se.updateMultisampleRenderTarget(yt),se.updateRenderTargetMipmap(yt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let de=!1;for(let Ue=0,Ve=Z.length;Ue<Ve;Ue++){const Le=Z[Ue],pe=Le.object,jt=Le.geometry,Xe=Le.material,Te=Le.group;if(Xe.side===ca&&pe.layers.test(lt.layers)){const yn=Xe.side;Xe.side=Yn,Xe.needsUpdate=!0,zr(pe,rt,lt,jt,Xe,Te),Xe.side=yn,Xe.needsUpdate=!0,de=!0}}de===!0&&(se.updateMultisampleRenderTarget(yt),se.updateRenderTargetMipmap(yt))}D.setRenderTarget(qt,Ft,Qt),D.setClearColor(ut,ot),Jt!==void 0&&(lt.viewport=Jt),D.toneMapping=ae}function ja(C,Z,rt){const lt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,yt=C.length;Q<yt;Q++){const It=C[Q],qt=It.object,Ft=It.geometry,Qt=It.group;let ae=It.material;ae.allowOverride===!0&&lt!==null&&(ae=lt),qt.layers.test(rt.layers)&&zr(qt,Z,rt,Ft,ae,Qt)}}function zr(C,Z,rt,lt,Q,yt){C.onBeforeRender(D,Z,rt,lt,Q,yt),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(D,Z,rt,lt,C,yt),Q.transparent===!0&&Q.side===ca&&Q.forceSinglePass===!1?(Q.side=Yn,Q.needsUpdate=!0,D.renderBufferDirect(rt,Z,lt,Q,C,yt),Q.side=Ya,Q.needsUpdate=!0,D.renderBufferDirect(rt,Z,lt,Q,C,yt),Q.side=ca):D.renderBufferDirect(rt,Z,lt,Q,C,yt),C.onAfterRender(D,Z,rt,lt,Q,yt)}function jn(C,Z,rt){Z.isScene!==!0&&(Z=Zt);const lt=Wt.get(C),Q=g.state.lights,yt=g.state.shadowsArray,It=Q.state.version,qt=dt.getParameters(C,Q.state,yt,Z,rt),Ft=dt.getProgramCacheKey(qt);let Qt=lt.programs;lt.environment=C.isMeshStandardMaterial?Z.environment:null,lt.fog=Z.fog,lt.envMap=(C.isMeshStandardMaterial?Re:je).get(C.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Qt===void 0&&(C.addEventListener("dispose",vt),Qt=new Map,lt.programs=Qt);let ae=Qt.get(Ft);if(ae!==void 0){if(lt.currentProgram===ae&&lt.lightsStateVersion===It)return xn(C,qt),ae}else qt.uniforms=dt.getUniforms(C),C.onBeforeCompile(qt,D),ae=dt.acquireProgram(qt,Ft),Qt.set(Ft,ae),lt.uniforms=qt.uniforms;const Jt=lt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Jt.clippingPlanes=St.uniform),xn(C,qt),lt.needsLights=jc(C),lt.lightsStateVersion=It,lt.needsLights&&(Jt.ambientLightColor.value=Q.state.ambient,Jt.lightProbe.value=Q.state.probe,Jt.directionalLights.value=Q.state.directional,Jt.directionalLightShadows.value=Q.state.directionalShadow,Jt.spotLights.value=Q.state.spot,Jt.spotLightShadows.value=Q.state.spotShadow,Jt.rectAreaLights.value=Q.state.rectArea,Jt.ltc_1.value=Q.state.rectAreaLTC1,Jt.ltc_2.value=Q.state.rectAreaLTC2,Jt.pointLights.value=Q.state.point,Jt.pointLightShadows.value=Q.state.pointShadow,Jt.hemisphereLights.value=Q.state.hemi,Jt.directionalShadowMap.value=Q.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Jt.spotShadowMap.value=Q.state.spotShadowMap,Jt.spotLightMatrix.value=Q.state.spotLightMatrix,Jt.spotLightMap.value=Q.state.spotLightMap,Jt.pointShadowMap.value=Q.state.pointShadowMap,Jt.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=ae,lt.uniformsList=null,ae}function rn(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Bc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function xn(C,Z){const rt=Wt.get(C);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.batchingColor=Z.batchingColor,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.instancingMorph=Z.instancingMorph,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function da(C,Z,rt,lt,Q){Z.isScene!==!0&&(Z=Zt),se.resetTextureUnits();const yt=Z.fog,It=lt.isMeshStandardMaterial?Z.environment:null,qt=B===null?D.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Lr,Ft=(lt.isMeshStandardMaterial?Re:je).get(lt.envMap||It),Qt=lt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ae=!!rt.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Jt=!!rt.morphAttributes.position,de=!!rt.morphAttributes.normal,Ue=!!rt.morphAttributes.color;let Ve=Wa;lt.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Le=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,pe=Le!==void 0?Le.length:0,jt=Wt.get(lt),Xe=g.state.lights;if(Pt===!0&&(st===!0||C!==R)){const hn=C===R&&lt.id===A;St.setState(lt,C,hn)}let Te=!1;lt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Xe.state.version||jt.outputColorSpace!==qt||Q.isBatchedMesh&&jt.batching===!1||!Q.isBatchedMesh&&jt.batching===!0||Q.isBatchedMesh&&jt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&jt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&jt.instancing===!1||!Q.isInstancedMesh&&jt.instancing===!0||Q.isSkinnedMesh&&jt.skinning===!1||!Q.isSkinnedMesh&&jt.skinning===!0||Q.isInstancedMesh&&jt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&jt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&jt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&jt.instancingMorph===!1&&Q.morphTexture!==null||jt.envMap!==Ft||lt.fog===!0&&jt.fog!==yt||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==St.numPlanes||jt.numIntersection!==St.numIntersection)||jt.vertexAlphas!==Qt||jt.vertexTangents!==ae||jt.morphTargets!==Jt||jt.morphNormals!==de||jt.morphColors!==Ue||jt.toneMapping!==Ve||jt.morphTargetsCount!==pe)&&(Te=!0):(Te=!0,jt.__version=lt.version);let yn=jt.currentProgram;Te===!0&&(yn=jn(lt,Z,Q));let Fi=!1,_n=!1,Ka=!1;const ve=yn.getUniforms(),wn=jt.uniforms;if(kt.useProgram(yn.program)&&(Fi=!0,_n=!0,Ka=!0),lt.id!==A&&(A=lt.id,_n=!0),Fi||R!==C){kt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ve.setValue(V,"projectionMatrix",C.projectionMatrix),ve.setValue(V,"viewMatrix",C.matrixWorldInverse);const en=ve.map.cameraPosition;en!==void 0&&en.setValue(V,wt.setFromMatrixPosition(C.matrixWorld)),$t.logarithmicDepthBuffer&&ve.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&ve.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,_n=!0,Ka=!0)}if(Q.isSkinnedMesh){ve.setOptional(V,Q,"bindMatrix"),ve.setOptional(V,Q,"bindMatrixInverse");const hn=Q.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),ve.setValue(V,"boneTexture",hn.boneTexture,se))}Q.isBatchedMesh&&(ve.setOptional(V,Q,"batchingTexture"),ve.setValue(V,"batchingTexture",Q._matricesTexture,se),ve.setOptional(V,Q,"batchingIdTexture"),ve.setValue(V,"batchingIdTexture",Q._indirectTexture,se),ve.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ve.setValue(V,"batchingColorTexture",Q._colorsTexture,se));const On=rt.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&pt.update(Q,rt,yn),(_n||jt.receiveShadow!==Q.receiveShadow)&&(jt.receiveShadow=Q.receiveShadow,ve.setValue(V,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(wn.envMap.value=Ft,wn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Z.environment!==null&&(wn.envMapIntensity.value=Z.environmentIntensity),_n&&(ve.setValue(V,"toneMappingExposure",D.toneMappingExposure),jt.needsLights&&Ir(wn,Ka),yt&&lt.fog===!0&&Et.refreshFogUniforms(wn,yt),Et.refreshMaterialUniforms(wn,lt,q,j,g.state.transmissionRenderTarget[C.id]),Bc.upload(V,rn(jt),wn,se)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Bc.upload(V,rn(jt),wn,se),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&ve.setValue(V,"center",Q.center),ve.setValue(V,"modelViewMatrix",Q.modelViewMatrix),ve.setValue(V,"normalMatrix",Q.normalMatrix),ve.setValue(V,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const hn=lt.uniformsGroups;for(let en=0,Us=hn.length;en<Us;en++){const Ri=hn[en];ee.update(Ri,yn),ee.bind(Ri,yn)}}return yn}function Ir(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function jc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(C,Z,rt){const lt=Wt.get(C);lt.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Wt.get(C.texture).__webglTexture=Z,Wt.get(C.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:rt,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const rt=Wt.get(C);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0};const Zc=V.createFramebuffer();this.setRenderTarget=function(C,Z=0,rt=0){B=C,I=Z,U=rt;let lt=!0,Q=null,yt=!1,It=!1;if(C){const Ft=Wt.get(C);if(Ft.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(V.FRAMEBUFFER,null),lt=!1;else if(Ft.__webglFramebuffer===void 0)se.setupRenderTarget(C);else if(Ft.__hasExternalTextures)se.rebindTextures(C,Wt.get(C.texture).__webglTexture,Wt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Jt=C.depthTexture;if(Ft.__boundDepthTexture!==Jt){if(Jt!==null&&Wt.has(Jt)&&(C.width!==Jt.image.width||C.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(C)}}const Qt=C.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(It=!0);const ae=Wt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ae[Z])?Q=ae[Z][rt]:Q=ae[Z],yt=!0):C.samples>0&&se.useMultisampledRTT(C)===!1?Q=Wt.get(C).__webglMultisampledFramebuffer:Array.isArray(ae)?Q=ae[rt]:Q=ae,F.copy(C.viewport),Y.copy(C.scissor),J=C.scissorTest}else F.copy(z).multiplyScalar(q).floor(),Y.copy(at).multiplyScalar(q).floor(),J=bt;if(rt!==0&&(Q=Zc),kt.bindFramebuffer(V.FRAMEBUFFER,Q)&&lt&&kt.drawBuffers(C,Q),kt.viewport(F),kt.scissor(Y),kt.setScissorTest(J),yt){const Ft=Wt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ft.__webglTexture,rt)}else if(It){const Ft=Z;for(let Qt=0;Qt<C.textures.length;Qt++){const ae=Wt.get(C.textures[Qt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Qt,ae.__webglTexture,rt,Ft)}}else if(C!==null&&rt!==0){const Ft=Wt.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ft.__webglTexture,rt)}A=-1},this.readRenderTargetPixels=function(C,Z,rt,lt,Q,yt,It,qt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft){kt.bindFramebuffer(V.FRAMEBUFFER,Ft);try{const Qt=C.textures[qt],ae=Qt.format,Jt=Qt.type;if(!$t.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-lt&&rt>=0&&rt<=C.height-Q&&(C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+qt),V.readPixels(Z,rt,lt,Q,Dt.convert(ae),Dt.convert(Jt),yt))}finally{const Qt=B!==null?Wt.get(B).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,rt,lt,Q,yt,It,qt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Wt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(Ft=Ft[It]),Ft)if(Z>=0&&Z<=C.width-lt&&rt>=0&&rt<=C.height-Q){kt.bindFramebuffer(V.FRAMEBUFFER,Ft);const Qt=C.textures[qt],ae=Qt.format,Jt=Qt.type;if(!$t.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const de=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.bufferData(V.PIXEL_PACK_BUFFER,yt.byteLength,V.STREAM_READ),C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+qt),V.readPixels(Z,rt,lt,Q,Dt.convert(ae),Dt.convert(Jt),0);const Ue=B!==null?Wt.get(B).__webglFramebuffer:null;kt.bindFramebuffer(V.FRAMEBUFFER,Ue);const Ve=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Ay(V,Ve,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,de),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,yt),V.deleteBuffer(de),V.deleteSync(Ve),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,rt=0){const lt=Math.pow(2,-rt),Q=Math.floor(C.image.width*lt),yt=Math.floor(C.image.height*lt),It=Z!==null?Z.x:0,qt=Z!==null?Z.y:0;se.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,It,qt,Q,yt),kt.unbindTexture()};const jo=V.createFramebuffer(),Za=V.createFramebuffer();this.copyTextureToTexture=function(C,Z,rt=null,lt=null,Q=0,yt=null){yt===null&&(Q!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=Q,Q=0):yt=0);let It,qt,Ft,Qt,ae,Jt,de,Ue,Ve;const Le=C.isCompressedTexture?C.mipmaps[yt]:C.image;if(rt!==null)It=rt.max.x-rt.min.x,qt=rt.max.y-rt.min.y,Ft=rt.isBox3?rt.max.z-rt.min.z:1,Qt=rt.min.x,ae=rt.min.y,Jt=rt.isBox3?rt.min.z:0;else{const On=Math.pow(2,-Q);It=Math.floor(Le.width*On),qt=Math.floor(Le.height*On),C.isDataArrayTexture?Ft=Le.depth:C.isData3DTexture?Ft=Math.floor(Le.depth*On):Ft=1,Qt=0,ae=0,Jt=0}lt!==null?(de=lt.x,Ue=lt.y,Ve=lt.z):(de=0,Ue=0,Ve=0);const pe=Dt.convert(Z.format),jt=Dt.convert(Z.type);let Xe;Z.isData3DTexture?(se.setTexture3D(Z,0),Xe=V.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(se.setTexture2DArray(Z,0),Xe=V.TEXTURE_2D_ARRAY):(se.setTexture2D(Z,0),Xe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Z.unpackAlignment);const Te=V.getParameter(V.UNPACK_ROW_LENGTH),yn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Fi=V.getParameter(V.UNPACK_SKIP_PIXELS),_n=V.getParameter(V.UNPACK_SKIP_ROWS),Ka=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Le.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Le.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ae),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Jt);const ve=C.isDataArrayTexture||C.isData3DTexture,wn=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const On=Wt.get(C),hn=Wt.get(Z),en=Wt.get(On.__renderTarget),Us=Wt.get(hn.__renderTarget);kt.bindFramebuffer(V.READ_FRAMEBUFFER,en.__webglFramebuffer),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let Ri=0;Ri<Ft;Ri++)ve&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.get(C).__webglTexture,Q,Jt+Ri),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Wt.get(Z).__webglTexture,yt,Ve+Ri)),V.blitFramebuffer(Qt,ae,It,qt,de,Ue,It,qt,V.DEPTH_BUFFER_BIT,V.NEAREST);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||Wt.has(C)){const On=Wt.get(C),hn=Wt.get(Z);kt.bindFramebuffer(V.READ_FRAMEBUFFER,jo),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Za);for(let en=0;en<Ft;en++)ve?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,On.__webglTexture,Q,Jt+en):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,On.__webglTexture,Q),wn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,yt,Ve+en):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,yt),Q!==0?V.blitFramebuffer(Qt,ae,It,qt,de,Ue,It,qt,V.COLOR_BUFFER_BIT,V.NEAREST):wn?V.copyTexSubImage3D(Xe,yt,de,Ue,Ve+en,Qt,ae,It,qt):V.copyTexSubImage2D(Xe,yt,de,Ue,Qt,ae,It,qt);kt.bindFramebuffer(V.READ_FRAMEBUFFER,null),kt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else wn?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Xe,yt,de,Ue,Ve,It,qt,Ft,pe,jt,Le.data):Z.isCompressedArrayTexture?V.compressedTexSubImage3D(Xe,yt,de,Ue,Ve,It,qt,Ft,pe,Le.data):V.texSubImage3D(Xe,yt,de,Ue,Ve,It,qt,Ft,pe,jt,Le):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,yt,de,Ue,It,qt,pe,jt,Le.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,yt,de,Ue,Le.width,Le.height,pe,Le.data):V.texSubImage2D(V.TEXTURE_2D,yt,de,Ue,It,qt,pe,jt,Le);V.pixelStorei(V.UNPACK_ROW_LENGTH,Te),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,yn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Fi),V.pixelStorei(V.UNPACK_SKIP_ROWS,_n),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ka),yt===0&&Z.generateMipmaps&&V.generateMipmap(Xe),kt.unbindTexture()},this.initRenderTarget=function(C){Wt.get(C).__webglFramebuffer===void 0&&se.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?se.setTextureCube(C,0):C.isData3DTexture?se.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?se.setTexture2DArray(C,0):se.setTexture2D(C,0),kt.unbindTexture()},this.resetState=function(){I=0,U=0,B=null,kt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ae._getUnpackColorSpace()}}const k0={type:"change"},Zd={type:"start"},Rv={type:"end"},Lc=new Gd,X0=new ka,Q1=Math.cos(70*Ty.DEG2RAD),pn=new W,Wn=2*Math.PI,Ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6;class J1 extends dM{constructor(t,i=null){super(t,i),this.state=Ge.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new bs,this._lastTargetPosition=new W,this._quat=new bs().setFromUnitVectors(t.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _0,this._sphericalDelta=new _0,this._scale=1,this._panOffset=new W,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new W,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tA.bind(this),this._onPointerDown=$1.bind(this),this._onPointerUp=eA.bind(this),this._onContextMenu=lA.bind(this),this._onMouseWheel=aA.bind(this),this._onKeyDown=sA.bind(this),this._onTouchStart=rA.bind(this),this._onTouchMove=oA.bind(this),this._onMouseDown=nA.bind(this),this._onMouseMove=iA.bind(this),this._interceptControlDown=cA.bind(this),this._interceptControlUp=uA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(k0),this.update(),this.state=Ge.NONE}update(t=null){const i=this.object.position;pn.copy(i).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),l<-Math.PI?l+=Wn:l>Math.PI&&(l-=Wn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),i.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=pn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new W(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new W(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Lc.origin.copy(this.object.position),Lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Lc.direction))<Q1?this.object.lookAt(this.target):(X0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Lc.intersectPlane(X0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(k0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){pn.setFromMatrixColumn(i,0),pn.multiplyScalar(-t),this._panOffset.add(pn)}_panUp(t,i){this.screenSpacePanning===!0?pn.setFromMatrixColumn(i,1):(pn.setFromMatrixColumn(i,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(t),this._panOffset.add(pn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;pn.copy(l).sub(this.target);let c=pn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ie,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function $1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function tA(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function eA(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rv),this.state=Ge.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function nA(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ge.DOLLY;break;case Ar.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ge.ROTATE}break;case Ar.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ge.PAN}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Zd)}function iA(o){switch(this.state){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function aA(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ge.NONE||(o.preventDefault(),this.dispatchEvent(Zd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Rv))}function sA(o){this.enabled!==!1&&this._handleKeyDown(o)}function rA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ge.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ge.TOUCH_PAN;break;default:this.state=Ge.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ge.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ge.TOUCH_DOLLY_ROTATE;break;default:this.state=Ge.NONE}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Zd)}function oA(o){switch(this._trackPointer(o),this.state){case Ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ge.NONE}}function lA(o){this.enabled!==!1&&o.preventDefault()}function cA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function uA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const fA={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class qo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const hA=new qd(-1,1,1,-1,0,1);class dA extends ai{constructor(){super(),this.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new sn([0,2,0,0,2,0],2))}}const pA=new dA;class Kd{constructor(t){this._mesh=new Rn(pA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,hA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class mA extends qo{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof vi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vd.clone(t.uniforms),this.material=new vi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Kd(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class W0 extends qo{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class gA extends qo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _A{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new ie);this._width=s.width,this._height=s.height,i=new Ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qa}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mA(fA),this.copyPass.material.blending=fa,this.clock=new hM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),h.needsSwap){if(s){const d=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),m.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}W0!==void 0&&(h instanceof W0?s=!0:h instanceof gA&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vA extends qo{constructor(t,i,s,l={}){super(),this.pixelSize=t,this.scene=i,this.camera=s,this.normalEdgeStrength=l.normalEdgeStrength||.3,this.depthEdgeStrength=l.depthEdgeStrength||.4,this.pixelatedMaterial=this._createPixelatedMaterial(),this._resolution=new ie,this._renderResolution=new ie,this._normalMaterial=new aM,this._beautyRenderTarget=new Ii,this._beautyRenderTarget.texture.minFilter=In,this._beautyRenderTarget.texture.magFilter=In,this._beautyRenderTarget.texture.type=qa,this._beautyRenderTarget.depthTexture=new Xd,this._normalRenderTarget=new Ii,this._normalRenderTarget.texture.minFilter=In,this._normalRenderTarget.texture.magFilter=In,this._normalRenderTarget.texture.type=qa,this._fsQuad=new Kd(this.pixelatedMaterial)}dispose(){this._beautyRenderTarget.dispose(),this._normalRenderTarget.dispose(),this.pixelatedMaterial.dispose(),this._normalMaterial.dispose(),this._fsQuad.dispose()}setSize(t,i){this._resolution.set(t,i),this._renderResolution.set(t/this.pixelSize|0,i/this.pixelSize|0);const{x:s,y:l}=this._renderResolution;this._beautyRenderTarget.setSize(s,l),this._normalRenderTarget.setSize(s,l),this._fsQuad.material.uniforms.resolution.value.set(s,l,1/s,1/l)}setPixelSize(t){this.pixelSize=t,this.setSize(this._resolution.x,this._resolution.y)}render(t,i){const s=this._fsQuad.material.uniforms;s.normalEdgeStrength.value=this.normalEdgeStrength,s.depthEdgeStrength.value=this.depthEdgeStrength,t.setRenderTarget(this._beautyRenderTarget),t.render(this.scene,this.camera);const l=this.scene.overrideMaterial;t.setRenderTarget(this._normalRenderTarget),this.scene.overrideMaterial=this._normalMaterial,t.render(this.scene,this.camera),this.scene.overrideMaterial=l,s.tDiffuse.value=this._beautyRenderTarget.texture,s.tDepth.value=this._beautyRenderTarget.depthTexture,s.tNormal.value=this._normalRenderTarget.texture,this.renderToScreen?t.setRenderTarget(null):(t.setRenderTarget(i),this.clear&&t.clear()),this._fsQuad.render(t)}_createPixelatedMaterial(){return new vi({uniforms:{tDiffuse:{value:null},tDepth:{value:null},tNormal:{value:null},resolution:{value:new Qe},normalEdgeStrength:{value:0},depthEdgeStrength:{value:0}},vertexShader:`
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
			`})}}const Nc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class SA extends qo{constructor(){super(),this.uniforms=Vd.clone(Nc.uniforms),this.material=new iM({name:Nc.name,uniforms:this.uniforms,vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader}),this._fsQuad=new Kd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ae.getTransfer(this._outputColorSpace)===Ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===q0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===j0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Z0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===K0?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===J0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===$0?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Q0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function xA(){const o=An.useRef(null),[t,i]=An.useState(50),[s,l]=An.useState(45),[c,h]=An.useState(0),[d,m]=An.useState(0),[p,S]=An.useState(0),[_]=An.useState(Date.now()),[x,M]=An.useState(!1),E=An.useRef({w:!1,a:!1,s:!1,d:!1}),[w,y]=An.useState({x:0,y:0}),[g,N]=An.useState(!1),L=An.useRef([]),D=An.useRef(null);An.useEffect(()=>{const U=o.current,B=new Ky;B.background=new be(16777215);const A=new gi(75,U.clientWidth/U.clientHeight,.1,1e3);A.position.set(0,0,50);const R=new K1({antialias:!0});R.setSize(U.clientWidth,U.clientHeight),U.appendChild(R.domElement);const F=new _A(R),Y={normalEdgeStrength:2,depthEdgeStrength:1},J=new vA(2,B,A,Y);F.addPass(J);const ut=new SA;F.addPass(ut);const ot=new J1(A,R.domElement);ot.enableDamping=!0;const P=new Io(20,9),j=new Cc({color:0,flatShading:!0,roughness:0,metalness:1}),q=new nM(P),gt=new Sv({color:3342336}),Mt=new eM(q,gt);B.add(Mt);const z=new Rn(P,j);B.add(z),P.attributes.position.array.slice();const at=new Bo(.3,4,4),bt=new zo({color:4473924});for(let et=0;et<200;et++){const Nt=new Rn(at,bt),St=100+Math.random()*50,At=Math.random()*Math.PI*2,Tt=Math.acos(2*Math.random()-1);Nt.position.x=St*Math.sin(Tt)*Math.cos(At),Nt.position.y=St*Math.cos(Tt),Nt.position.z=St*Math.sin(Tt)*Math.sin(At),B.add(Nt)}const Ut=new uM(16777215,1);B.add(Ut);const Pt=new cM(16777215,10,0);Pt.position.set(0,0,25),B.add(Pt);const st=new Io(1),ft=new Cc({color:65280}),wt=new Rn(st,ft);wt.position.set(0,0,21),B.add(wt);const Ht=new Wd(.2,.2,3,3),Zt=new Cc({color:16776960}),le=new Rn(Ht,Zt);wt.add(le);const Ke=(et,Nt)=>{const St=et*Math.PI/180,At=Nt*Math.PI/180,Tt=wt.position.clone().normalize();let pt=new W(0,1,0);Math.abs(Tt.dot(pt))>.9&&(pt=new W(1,0,0));const xt=new W().crossVectors(pt,Tt).normalize(),zt=new W().crossVectors(Tt,xt).normalize(),Dt=new W;Dt.add(Tt.clone().multiplyScalar(Math.sin(St))),Dt.add(xt.clone().multiplyScalar(Math.cos(St)*Math.sin(At))),Dt.add(zt.clone().multiplyScalar(Math.cos(St)*Math.cos(At))),Dt.normalize();const Lt=wt.worldToLocal(wt.position.clone().add(Dt)).normalize();le.position.copy(Lt.clone().multiplyScalar(2)),le.quaternion.setFromUnitVectors(new W(0,1,0),Lt)};o.current.updateIndicator=Ke,Ke(45,0);const V=()=>{const et=[],Nt=new Cc({color:16711680});for(let St=0;St<12;St++){const At=Math.random()*Math.PI*2,Tt=Math.acos(2*Math.random()-1),pt=new Io(1),xt=new Rn(pt,Nt),zt=new W(21*Math.sin(Tt)*Math.cos(At),21*Math.cos(Tt),21*Math.sin(Tt)*Math.sin(At));xt.position.copy(zt),xt.lookAt(zt.clone().multiplyScalar(2)),B.add(xt),et.push(xt)}return et},Me=V();L.current=Me,o.current.createTargets=V;let Gt=null,$t=new W;const kt=[],Ne=(et,Nt=2)=>{const St=z.worldToLocal(et.clone()),At=P.attributes.position,Tt=new W;for(let pt=0;pt<At.count;pt++){Tt.fromBufferAttribute(At,pt);const xt=Tt.distanceTo(St),zt=8,Dt=zt*.6;if(xt<zt){const Lt=Tt.clone().normalize();if(xt<Dt){const ee=1-xt/Dt,X=Nt*ee*ee;Tt.sub(Lt.multiplyScalar(X))}else{const ee=(xt-Dt)/(zt-Dt),X=Nt*.6*(1-ee*ee);Tt.add(Lt.multiplyScalar(X))}At.setXYZ(pt,Tt.x,Tt.y,Tt.z)}}At.needsUpdate=!0,P.computeVertexNormals()},Wt=(et,Nt)=>{for(let At=0;At<30;At++){const Tt=new Bo(.4,4,4),pt=new zo({color:Nt?16711680:16777215}),xt=new Rn(Tt,pt);xt.position.copy(et);const zt=new W((Math.random()-.5)*2,(Math.random()-.5)*2,(Math.random()-.5)*2).normalize().multiplyScalar(Math.random()*3+1);B.add(xt),kt.push({mesh:xt,velocity:zt,life:1})}},se=(et,Nt)=>{Ne(et,Nt?2.5:1.5),Wt(et,Nt)},je=(et,Nt,St)=>{Gt&&B.remove(Gt);const At=new Bo(.5,8,8),Tt=new zo({color:16711680});Gt=new Rn(At,Tt),Gt.position.copy(wt.position),B.add(Gt);const pt=Nt*Math.PI/180,xt=St*Math.PI/180,zt=et/100,Dt=wt.position.clone().normalize();let Lt=new W(0,1,0);Math.abs(Dt.dot(Lt))>.9&&(Lt=new W(1,0,0));const ee=new W().crossVectors(Lt,Dt).normalize(),X=new W().crossVectors(Dt,ee).normalize(),Rt=new W;Rt.add(Dt.clone().multiplyScalar(Math.sin(pt))),Rt.add(ee.clone().multiplyScalar(Math.cos(pt)*Math.sin(xt))),Rt.add(X.clone().multiplyScalar(Math.cos(pt)*Math.cos(xt))),Rt.normalize(),$t.copy(Rt.multiplyScalar(zt))};o.current.launchProjectile=je;const Re=E.current,O=et=>{const Nt=et.key.toLowerCase();Nt in Re&&(Re[Nt]=!0)},T=et=>{const Nt=et.key.toLowerCase();Nt in Re&&(Re[Nt]=!1)};window.addEventListener("keydown",O),window.addEventListener("keyup",T);const $=()=>{const St=wt.position.clone().normalize();let At=Math.atan2(St.x,St.z),Tt=Math.acos(St.y);Re.w&&(Tt-=.005),Re.s&&(Tt+=.005),Re.a&&(At-=.005),Re.d&&(At+=.005),Tt=Math.max(.01,Math.min(Math.PI-.01,Tt)),wt.position.x=21*Math.sin(Tt)*Math.sin(At),wt.position.y=21*Math.cos(Tt),wt.position.z=21*Math.sin(Tt)*Math.cos(At);const pt=wt.position.clone().normalize(),xt=new W(0,1,0);let zt=xt.clone().sub(pt.clone().multiplyScalar(xt.dot(pt))).normalize();zt.length()<.01&&(zt=new W(0,0,1));const Dt=new W().crossVectors(pt,zt).normalize();zt=new W().crossVectors(Dt,pt).normalize();const Lt=new Je;Lt.makeBasis(Dt,pt,zt),wt.quaternion.setFromRotationMatrix(Lt)},dt=()=>{requestAnimationFrame(dt);const et=Date.now()*.001,Nt=25;Pt.position.x=Math.cos(et/10)*Nt,Pt.position.z=Math.sin(et/10)*Nt,Pt.position.y=Math.sin(et/10*.05)*3,$();for(let St=kt.length-1;St>=0;St--){const At=kt[St];At.mesh.position.add(At.velocity),At.velocity.multiplyScalar(.95),At.life-=.02,At.mesh.material.opacity=At.life,At.mesh.material.transparent=!0;const Tt=At.life;At.mesh.scale.set(Tt,Tt,Tt),At.life<=0&&(B.remove(At.mesh),At.mesh.geometry.dispose(),At.mesh.material.dispose(),kt.splice(St,1))}if(Gt){const St=Gt.position.clone().normalize().multiplyScalar(-.02);$t.add(St),Gt.position.add($t);let At=!1;const Tt=L.current;for(let pt=Tt.length-1;pt>=0;pt--)if(Gt.position.distanceTo(Tt[pt].position)<3){se(Gt.position,!0),B.remove(Tt[pt]),Tt.splice(pt,1),B.remove(Gt),Gt=null,At=!0,m(xt=>xt+1),Tt.length===0&&M(!0);break}!At&&Gt&&Gt.position.length()<20.5&&(se(Gt.position,!1),B.remove(Gt),Gt=null),Gt&&Gt.position.length()>200&&(B.remove(Gt),Gt=null)}ot.update(),F.render()};dt();const Et=()=>{A.aspect=U.clientWidth/U.clientHeight,A.updateProjectionMatrix(),R.setSize(U.clientWidth,U.clientHeight),F.setSize(U.clientWidth,U.clientHeight)};return window.addEventListener("resize",Et),()=>{window.removeEventListener("resize",Et),window.removeEventListener("keydown",O),window.removeEventListener("keyup",T),kt.forEach(et=>{B.remove(et.mesh),et.mesh.geometry.dispose(),et.mesh.material.dispose()}),U.removeChild(R.domElement)}},[]);const H=()=>{o.current&&o.current.launchProjectile&&(o.current.launchProjectile(t,s,c),S(U=>U+1))};An.useEffect(()=>{o.current&&o.current.updateIndicator&&o.current.updateIndicator(s,c)},[s,c]),An.useEffect(()=>{const U=D.current;if(!U)return;const B=F=>{F.preventDefault(),N(!0);const Y=F.touches[0],J=U.getBoundingClientRect(),ut=J.width/2,ot=J.height/2,P=Y.clientX-J.left-ut,j=Y.clientY-J.top-ot,q=Math.sqrt(P*P+j*j),gt=40,Mt=q>gt?P/q*gt:P,z=q>gt?j/q*gt:j;y({x:Mt,y:z}),E.current.w=z<-15,E.current.s=z>15,E.current.a=Mt<-15,E.current.d=Mt>15},A=F=>{F.preventDefault();const Y=F.touches[0],J=U.getBoundingClientRect(),ut=J.width/2,ot=J.height/2,P=Y.clientX-J.left-ut,j=Y.clientY-J.top-ot,q=Math.sqrt(P*P+j*j),gt=40,Mt=q>gt?P/q*gt:P,z=q>gt?j/q*gt:j;y({x:Mt,y:z}),E.current.w=z<-15,E.current.s=z>15,E.current.a=Mt<-15,E.current.d=Mt>15},R=F=>{F.preventDefault(),N(!1),y({x:0,y:0}),E.current.w=!1,E.current.s=!1,E.current.a=!1,E.current.d=!1};return U.addEventListener("touchstart",B,{passive:!1}),U.addEventListener("touchmove",A,{passive:!1}),U.addEventListener("touchend",R,{passive:!1}),()=>{U.removeEventListener("touchstart",B),U.removeEventListener("touchmove",A),U.removeEventListener("touchend",R)}},[]);const I=()=>{if(o.current&&o.current.createTargets){L.current.forEach(B=>{const A=o.current.children[0];A&&A.remove(B)});const U=o.current.createTargets();L.current=U,m(0),S(0),M(!1)}};return We.jsxs("div",{children:[We.jsx("div",{ref:o,style:{width:"100%",height:"100vh"}}),We.jsxs("div",{style:{position:"absolute",top:"0px",right:"0px",background:"rgba(0,0,0,0.5)",color:"white",padding:"10px",fontSize:"24px",fontWeight:"bold"},children:["Score: ",d*100]}),We.jsxs("div",{style:{position:"absolute",bottom:"0px",right:"0px",left:"0px",maxWidth:"60%",marginLeft:"auto",background:"rgba(0,0,0,0.5)",color:"white",padding:"10px"},children:[We.jsxs("div",{children:[We.jsxs("label",{children:["Velocity: ",t]}),We.jsx("input",{type:"range",min:"10",max:"100",value:t,onChange:U=>i(Number(U.target.value)),style:{width:"100%"}})]}),We.jsxs("div",{children:[We.jsxs("label",{children:["Angle: ",s]}),We.jsx("input",{type:"range",min:"0",max:"90",value:s,onChange:U=>l(Number(U.target.value)),style:{width:"100%"}})]}),We.jsxs("div",{children:[We.jsxs("label",{children:["Heading: ",c]}),We.jsx("input",{type:"range",min:"0",max:"359",value:c,onChange:U=>h(Number(U.target.value)),style:{width:"100%"}})]}),We.jsx("button",{onClick:H,style:{width:"100%",padding:"10px",marginTop:"10px"},children:"Launch"})]}),x&&We.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:"rgba(0,0,0,0.9)",color:"white",padding:"40px",borderRadius:"10px",border:"3px solid white",textAlign:"center",zIndex:1e3},children:[We.jsx("h1",{style:{fontSize:"48px",margin:"0 0 20px 0"},children:"VICTORY!"}),We.jsxs("p",{style:{fontSize:"20px",margin:"0 0 10px 0"},children:["Kills: ",d," × 100 = ",d*100]}),We.jsxs("p",{style:{fontSize:"20px",margin:"0 0 10px 0"},children:["Shots: ",p," × -30 = ",p*-30]}),We.jsxs("p",{style:{fontSize:"20px",margin:"0 0 20px 0"},children:["Time: ",Math.floor((Date.now()-_)/1e3),"s × -1 = -",Math.floor((Date.now()-_)/1e3)]}),We.jsxs("p",{style:{fontSize:"28px",margin:"0 0 30px 0",fontWeight:"bold",borderTop:"2px solid white",paddingTop:"10px"},children:["Final Score: ",d*100-p*30-Math.floor((Date.now()-_)/1e3)]}),We.jsx("button",{onClick:I,style:{fontSize:"24px",padding:"15px 30px",background:"white",color:"black",border:"none",borderRadius:"5px",cursor:"pointer",fontWeight:"bold"},children:"PLAY AGAIN"})]}),We.jsxs("div",{ref:D,style:{position:"absolute",bottom:"0px",left:"0px",width:"120px",height:"120px"},onMouseDown:U=>{N(!0);const B=U.currentTarget.getBoundingClientRect(),A=B.width/2,R=B.height/2,F=U.clientX-B.left-A,Y=U.clientY-B.top-R,J=Math.sqrt(F*F+Y*Y),ut=40,ot=J>ut?F/J*ut:F,P=J>ut?Y/J*ut:Y;y({x:ot,y:P}),E.current.w=P<-15,E.current.s=P>15,E.current.a=ot<-15,E.current.d=ot>15},onMouseMove:U=>{if(!g)return;const B=U.currentTarget.getBoundingClientRect(),A=B.width/2,R=B.height/2,F=U.clientX-B.left-A,Y=U.clientY-B.top-R,J=Math.sqrt(F*F+Y*Y),ut=40,ot=J>ut?F/J*ut:F,P=J>ut?Y/J*ut:Y;y({x:ot,y:P}),E.current.w=P<-15,E.current.s=P>15,E.current.a=ot<-15,E.current.d=ot>15},onMouseUp:()=>{N(!1),y({x:0,y:0}),E.current.w=!1,E.current.s=!1,E.current.a=!1,E.current.d=!1},onMouseLeave:()=>{g&&(N(!1),y({x:0,y:0}),E.current.w=!1,E.current.s=!1,E.current.a=!1,E.current.d=!1)},children:[We.jsx("div",{style:{position:"absolute",width:"120px",height:"120px",borderRadius:"50%",background:"rgba(0,0,0,0.3)",border:"3px solid rgba(255,255,255,0.5)"}}),We.jsx("div",{style:{position:"absolute",width:"50px",height:"50px",borderRadius:"50%",background:"rgba(255,255,255,0.7)",border:"2px solid white",left:`${60+w.x-25}px`,top:`${60+w.y-25}px`,transition:g?"none":"all 0.2s ease-out",boxShadow:"0 2px 10px rgba(0,0,0,0.3)"}})]})]})}Vx.createRoot(document.getElementById("root")).render(We.jsx(An.StrictMode,{children:We.jsx(xA,{})}));
