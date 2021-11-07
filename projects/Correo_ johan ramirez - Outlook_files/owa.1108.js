self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.1108.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[1108],{0:function(e,t,r){"use strict";e.exports=r(369)},1810:function(e,t,r){"use strict";var n=r(20);var o={ChannelData:"ChannelData",SubscriptionAdded:"SubscriptionAdded",SubscriptionRemoved:"SubscriptionRemoved",SubscriptionUpdated:"SubscriptionUpdated",NotificationData:"NotificationData",TraceWarn:"TraceWarn",TraceError:"TraceError"};r.d(t,"j",(function(){return c})),r.d(t,"k",(function(){return i})),r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return f})),r.d(t,"g",(function(){return s})),r.d(t,"h",(function(){return l})),r.d(t,"e",(function(){return p})),r.d(t,"i",(function(){return d})),r.d(t,"f",(function(){return y})),r.d(t,"d",(function(){return b})),r.d(t,"a",(function(){return o}));const u=new n.c(()=>Promise.all([r.e(0),r.e(663)]).then(r.bind(null,19157))),c=new n.a(u,e=>e.subscribe),i=new n.a(u,e=>e.unsubscribe),a=new n.b(u,e=>e.getChannelId),f=new n.a(u,e=>e.getChannelReady),s=new n.a(u,e=>e.retryDisconnectionWithMinimumReconnectInterval),l=new n.a(u,e=>e.setup),p=new n.a(u,e=>e.handleNotification),d=new n.a(u,e=>e.NotificationManager.stopConnection),y=new n.a(u,e=>e.initializeNotificationManager),b=new n.b(u,e=>e.getNotificationEmitter)},18866:function(e,t,r){"use strict";r.r(t),r.d(t,"subscribeToHierarchyNotificationsWeb",(function(){return u}));var n=r(1810),o=r(6728);const u=Object(o.a)((function(){const e={subscriptionId:"HierarchyNotification",requiresExplicitSubscribe:!0,subscriptionParameters:{NotificationType:"HierarchyNotification"}};return Promise.resolve({subscribe:t=>(async function(e,t){return await n.j.importAndExecute(e,t),t})(e,t),unSubscribe:t=>(async function(e,t){await n.k.importAndExecute(e,t)})(e,t)})}))},20:function(e,t,r){"use strict";var n=r(0),o=r(4);var u=()=>{const e=n.useRef(!0);return n.useEffect(()=>(e.current=!0,()=>{e.current=!1})),e};var c=(e,t)=>{const r=u(),[o,c]=n.useState(()=>e.isLoaded()?e.dangerouslyImportSync():void 0),i=n.useMemo(()=>e.isLoaded(),[]);return n.useEffect(()=>{if(i)return;const n=e.import();n.then(e=>{r.current&&c(()=>e)}),t&&n.catch(t)},[]),o};const i="function"==typeof Symbol&&Symbol.for,a=i?Symbol.for("react.forward_ref"):60112,f=i?Symbol.for("react.memo"):60115,s=e=>void 0!==e&&!!(e instanceof Function&&e.prototype&&e.prototype.render||e.$$typeof&&e.$$typeof==a||e.$$typeof&&e.$$typeof==f&&s(e.type));var l=s;var p=function(e,t,r,u){let i=new o.c(e,t);return n.forwardRef((function(e,t){const[o,a]=n.useState(void 0),f="object"==typeof u?u:void 0,s=c(i,f?a:u);if(f&&o)return n.createElement(f,{error:o});const p=s||r;if(!p)return null;if(l(p)){const r=Object.assign(Object.assign({},e),{ref:t});return n.createElement(p,Object.assign({},r))}return n.createElement(p,Object.assign({},e))}))},d=r(3);function y(e,t,r){return{actionCreator:e,handler:r,cloneActionName:t}}function b(e,t,r,n){let u;Object(d.orchestrator)(e,async c=>{u||(u=async function(){const n=new o.c(t,r),u=await n.import();if(e!==u.actionCreator)throw new Error("Lazy orchestrator cannot subscribe to this action.");const c=Object(d.action)(u.cloneActionName,e=>{let t=Object.assign({},e);return delete t.type,delete t.lazyOrchestrator,t});return Object(d.orchestrator)(c,u.handler),c}()),c.lazyOrchestrator=!0;let i=(null==n?void 0:n.captureBundleTime)?Date.now():null;const a=await u;Object(o.g)(i),a(c),Object(o.g)(null)})}const m={loadedImports:new(r(14).ObservableMap)};var h=Object(d.createStore)("bundlingStore",m)(),v=Object(d.mutatorAction)("MARK_IMPORT_AS_LOADED",(function(e){h.loadedImports.set(e,!0)}));function w(e){return h.loadedImports.has(e)}var g=r(40);function S(e){Object(o.f)({markImportAsLoaded:v,isImportLoaded:w,logUsage:e,logError:g.d})}r.d(t,"d",(function(){return p})),r.d(t,"e",(function(){return y})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return S})),r.d(t,"a",(function(){return o.a})),r.d(t,"b",(function(){return o.c})),r.d(t,"c",(function(){return o.d}))},294:function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,a=c(e),f=1;f<arguments.length;f++){for(var s in r=Object(arguments[f]))o.call(r,s)&&(a[s]=r[s]);if(n){i=n(r);for(var l=0;l<i.length;l++)u.call(r,i[l])&&(a[i[l]]=r[i[l]])}}return a}},369:function(e,t,r){"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(294),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,a=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,l=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,y=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function g(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||v}function S(){}function j(e,t,r){this.props=e,this.context=t,this.refs=w,this.updater=r||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},S.prototype=g.prototype;var O=j.prototype=new S;O.constructor=j,n(O,g.prototype),O.isPureReactComponent=!0;var E={current:null},_=Object.prototype.hasOwnProperty,$={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,o={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)_.call(t,n)&&!$.hasOwnProperty(n)&&(o[n]=t[n]);var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){for(var f=Array(a),s=0;s<a;s++)f[s]=arguments[s+2];o.children=f}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===o[n]&&(o[n]=a[n]);return{$$typeof:u,type:e,key:c,ref:i,props:o,_owner:E.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var P=/\/+/g,R=[];function x(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var a=!1;if(null===t)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case u:case c:a=!0}}if(a)return n(o,t,""===r?"."+N(t,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(t))for(var f=0;f<t.length;f++){var s=r+N(i=t[f],f);a+=e(i,s,n,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),f=0;!(i=t.next()).done;)a+=e(i=i.value,s=r+N(i,f++),n,o);else if("object"===i)throw n=""+t,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return a}(e,"",t,r)}function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+r)),n.push(e))}function M(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(P,"$&/")+"/"),I(e,D,t=x(t,u,n,o)),A(t)}var L={current:null};function U(){var e=L.current;if(null===e)throw Error(h(321));return e}var q={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return M(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,T,t=x(null,null,t,r)),A(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(h(143));return e}},t.Component=g,t.Fragment=i,t.Profiler=f,t.PureComponent=j,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var o=n({},e.props),c=e.key,i=e.ref,a=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,a=E.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in t)_.call(t,s)&&!$.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==f?f[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){f=Array(s);for(var l=0;l<s;l++)f[l]=arguments[l+2];o.children=f}return{$$typeof:u,type:e.type,key:c,ref:i,props:o,_owner:a}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.14.0"},6728:function(e,t,r){"use strict";
/*!
    callback-to-async-iterator v1.1.1 - MIT license (https://github.com/withspectrum/callback-to-async-iterator.git)
*/const n=e=>{throw new Error(e.toString())};var o=function(e,t={}){const{onError:r=n,onClose:o}=t;try{let t,n=[],u=[],c=!0;const i=e=>{0!==n.length?n.shift()({value:e,done:!1}):u.push(e)},a=()=>new Promise(e=>{0!==u.length?e({value:u.shift(),done:!1}):n.push(e)}),f=()=>{c&&(c=!1,n.forEach(e=>e({value:void 0,done:!0})),n=[],u=[],null==o||o(t))};return e(e=>i(e)).then(e=>{t=e}).catch(e=>{r(e)}),{next(){return c?a():this.return()},return:()=>(f(),Promise.resolve({value:void 0,done:!0})),throw:e=>(f(),r(e),Promise.reject(e)),[Symbol.asyncIterator](){return this}}}catch(e){return r(e),{next:()=>Promise.reject(e),return:()=>Promise.reject(e),throw:e=>Promise.reject(e),[Symbol.asyncIterator](){return this}}}},u=r(40),c=r(61),i=r(2);function a(e){return{subscribe:async(t,r,n,u)=>{let c=await e(t,r,n,u);return o(c.subscribe,{onClose:c.unSubscribe,onError:f})},resolve:e=>e}}function f(e){Object(c.o)("subscriptionError",{message:Object(i.T)(e.message),stack:Object(i.T)(e.stack)}),Object(u.c)(`Subscription error: ${e.message}`,e)}r.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=owa.1108.js.map
self.scriptsLoaded['owa.1108.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.1108.js'] = (new Date()).getTime();