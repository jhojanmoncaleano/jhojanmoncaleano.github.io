self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~Addins~ReadingPane.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[240],{1280:function(t,n,e){"use strict";var r=e(0),o=e(208),i=e(302),c=e(421),u=e(104),a=e(512),s=e(514),d=e(136),l=0,f={reset:function(){u.b.getInstance().onReset((function(){return l++}))},getId:function(){return l},renderStyles:function(t,n){return Object(a.a)(Array.isArray(t)?t:[t],n)},renderFontFace:function(t,n){return Object(s.a)(t)},renderKeyframes:function(t){return Object(d.a)(t)}},b=function(t,n){for(var e=0,r=n;e<r.length;e++){var o=r[e];if(!(t=t.get(o)))return}return t},p=function(t,n,e){for(var r=0;r<n.length-1;r++){var o=n[r],i=t.get(o);i||(i=new Map,t.set(o,i)),t=i}t.set(n[n.length-1],e)};var m,h,v=(m=function(t){var n=t.semanticColors,e=t.fonts;return{body:[{color:n.bodyText,background:n.bodyBackground,fontFamily:e.medium.fontFamily,fontWeight:e.medium.fontWeight,fontSize:e.medium.fontSize,MozOsxFontSmoothing:e.medium.MozOsxFontSmoothing,WebkitFontSmoothing:e.medium.WebkitFontSmoothing}]}},h=new Map,function(t){void 0===t&&(t={});var n=t.theme,e=Object(i.d)(),r=Object(c.a)();n=n||r;var o=f.getId(),u="function"==typeof m,a=u?[o,e,n]:[o,e],s=b(h,a);if(!s){var d=u?m(n):m;s=f.renderStyles(d,{targetWindow:e,rtl:!!n.rtl}),p(h,a,s)}return s});function g(t){var n=v(t),e=t.className,c=t.applyTo;!function(t,n){var e,o="body"===t.applyTo,c=null===(e=Object(i.c)())||void 0===e?void 0:e.body;r.useEffect((function(){if(o&&c){for(var t=0,e=n;t<e.length;t++){var r=e[t];r&&c.classList.add(r)}return function(){if(o&&c)for(var t=0,e=n;t<e.length;t++){var r=e[t];r&&c.classList.remove(r)}}}}),[o,c,n])}(t,[n.root,n.body]),t.className=Object(o.a)(e,n.root,"element"===c&&n.body)}var O=e(1),j=e(734),I=e(182),S=e(213),y=e(422),E=function(t){var n=t.theme,e=t.customizerContext,o=t.as||"div",i="string"==typeof t.as?Object(j.a)(t.as,t):Object(I.d)(t,["as"]);return r.createElement(y.a.Provider,{value:n},r.createElement(S.a.Provider,{value:e},r.createElement(o,Object(O.__assign)({},i))))},P=e(476),A=e(220),w=new Map,k=function(t){var n=t.theme,e=Object(c.a)(),o=t.theme=r.useMemo((function(){var t=Object(P.a)(e,n);return t.id=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var e=[],r=0,o=t;r<o.length;r++){var i=o[r];if(i){var c=i.id||w.get(i);c||(c=Object(A.a)(""),w.set(i,c)),e.push(c)}}return e.join("-")}(e,n),t}),[e,n]);t.customizerContext=r.useMemo((function(){return{customizations:{inCustomizerContext:!0,settings:{theme:o},scopedSettings:o.components||{}}}}),[o]),t.theme.rtl!==e.rtl&&(t.dir=t.theme.rtl?"rtl":"ltr")},C=e(728),T=e(424),_=e(439);e.d(n,"a",(function(){return x}));var x=r.forwardRef((function(t,n){var e=function(t,n){var e=Object(C.a)(n,t);return k(e),{state:e,render:E}}(t,{ref:Object(_.a)(n,r.useRef(null)),as:"div",applyTo:"element"}),o=e.render,i=e.state;return g(i),Object(T.b)(i.ref),o(i)}));x.displayName="ThemeProvider"},147:function(t,n,e){var r;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var e={}.hasOwnProperty;function o(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(this&&this[r]||r);else if(Array.isArray(r))t.push(o.apply(this,r));else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)e.call(r,c)&&r[c]&&t.push(this&&this[c]||c);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(t.exports=r)}()},1686:function(t,n,e){"use strict";var r=e(3);const o=Object(r.action)("initializeOwaObservableDateTime"),i=Object(r.action)("observableNowChanged"),c=Object(r.action)("observableTodayChanged");var u=e(7),a=e(14),s=Object(r.createStore)("ObservableDateTime",{now:0,today:0});const d=Object(a.computed)(()=>Object(u.qc)(s().now)),l=()=>d.get(),f=Object(a.computed)(()=>Object(u.qc)(s().today)),b=()=>f.get(),p=t=>Object(u.Jb)(t,l()),m=t=>Object(u.Hb)(t,l()),h=t=>g(t,u.Jb),v=t=>g(t,u.Kb),g=(t,n)=>n(Object(u.bc)(Object(u.qc)(t)),b());function O(t){if(!t)return"";const n=Object(u.qc)(t);return function(t,n){const e=Object(u.bc)(t);if(Object(u.Lb)(e,n))return u.ab;const r=t=>Object(u.Rb)(e,Object(u.e)(n,-t),n);if(r(3))return u.ib;if(r(30))return u.hb;return u.Y}(n,b())(n)}function j(t){if(!t)return"";const n=Object(u.qc)(t);return function(t,n){const e=Object(u.bc)(t);if(Object(u.Lb)(e,n))return u.T;return u.U}(n,b())(n)}function I(t){if(!t)return"";return function(t,n){const e=Object(u.bc)(t);return Object(u.Lb)(e,n)?Object(u.ab)(t):S(e,n,2)?Object(u.lb)(t):S(e,n,7)?Object(u.H)(Object(u.bb)(t),Object(u.ab)(t)):Object(u.H)(Object(u.J)(t),Object(u.ab)(t))}(Object(u.qc)(t),b())}function S(t,n,e){return Object(u.Rb)(t,Object(u.e)(n,-e),n)}const y=Object(r.action)("updateTimes"),E=Object(r.action)("setNow"),P=Object(r.action)("setToday",t=>({today:t}));Object(r.mutator)(E,()=>{s().now=Object(u.oc)()}),Object(r.mutator)(P,({today:t})=>{s().today=t});var A=e(22),w=e(75);let k=!1;Object(r.orchestrator)(o,()=>{if(y(),!k){const t=Object(u.Ub)(),n=Object(u.dc)(Object(u.h)(t,1)),e=Object(u.w)(n,t);setTimeout(()=>setInterval(y,A.g),e),document&&document.addEventListener("visibilitychange",y),k=!0}}),Object(r.orchestrator)(w.m,()=>{y()}),Object(r.orchestrator)(y,()=>{E();const t=Object(u.Cb)(Object(u.pc)()),n=s().today!=t;n&&P(t),i(),n&&c()}),e.d(n,"d",(function(){return o})),e.d(n,"j",(function(){return i})),e.d(n,"l",(function(){return c})),e.d(n,"i",(function(){return l})),e.d(n,"k",(function(){return b})),e.d(n,"g",(function(){return p})),e.d(n,"e",(function(){return m})),e.d(n,"f",(function(){return h})),e.d(n,"h",(function(){return v})),e.d(n,"a",(function(){return O})),e.d(n,"b",(function(){return j})),e.d(n,"c",(function(){return I}))},1884:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(20),o=e(2269);function i(t,n,e,i,c){return class{constructor(...t){this.onImportedCallbacks=[],this.args=t,this.pluginName=e}initialize(t){this.editor=t,this.pendingEvents=[],this.pluginInstance?this.initializeAndCallback():i||this.internalImport()}dispose(){this.pluginInstance&&(this.pluginInstance.dispose(),c||(this.pluginInstance=null)),this.editor=null,this.importPluginPromise=null,this.onImportedCallbacks=[]}getName(){return this.isImported()?this.pluginInstance.getName():this.pluginName}setPluginUtils(t){this.pluginUtils=t,Object(o.a)(this.pluginInstance)&&this.pluginInstance.setPluginUtils(this.pluginUtils)}getContextMenuItems(t){var n,e;return this.isImported()?null===(e=(n=this.pluginInstance).getContextMenuItems)||void 0===e?void 0:e.call(n,t):null}onPluginEvent(t){this.pluginInstance?this.pluginInstance.onPluginEvent&&this.pluginInstance.onPluginEvent(t):(null==i?void 0:i(t,this.editor))&&this.internalImport(t)}willHandleEventExclusively(t){return!(!this.pluginInstance||!this.pluginInstance.willHandleEventExclusively)&&this.pluginInstance.willHandleEventExclusively(t)}getPlugin(){return this.pluginInstance?Promise.resolve(this.pluginInstance):this.internalImport()}isImported(){return!!this.pluginInstance}addOnImportedCallback(t){this.isImported()&&this.editor?t(this.pluginInstance):this.onImportedCallbacks&&this.onImportedCallbacks.push(t)}initializeAndCallback(){this.pluginInstance.initialize(this.editor),this.onImportedCallbacks.forEach(t=>t(this.pluginInstance))}internalImport(e){return this.importPluginPromise||(this.importPluginPromise=new r.b(t,n).import().then(t=>(this.pluginInstance=new t(...this.args),this.setPluginUtils(this.pluginUtils),this.editor&&(this.initializeAndCallback(),this.pendingEvents.length>0&&this.pluginInstance.onPluginEvent&&this.pendingEvents.forEach(t=>{this.pluginInstance.onPluginEvent(t)}),this.pendingEvents=[]),this.pluginInstance)),this.importPluginPromise.catch(()=>{this.pendingEvents=[]})),e&&this.pendingEvents.push(e),this.importPluginPromise}}}},1886:function(t,n,e){"use strict";e.d(n,"k",(function(){return r})),e.d(n,"j",(function(){return o})),e.d(n,"g",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return u})),e.d(n,"a",(function(){return a})),e.d(n,"e",(function(){return s})),e.d(n,"f",(function(){return d})),e.d(n,"i",(function(){return l})),e.d(n,"b",(function(){return f})),e.d(n,"h",(function(){return b}));const r="SwitchGroup",o="NavigateFromMeToWe",i="GroupHeader_SendEmail_Button_Clicked",c="GroupHeader_Email_Button_Clicked",u="GroupHeader_Files_Button_Clicked",a="GroupHeader_Calendar_Button_Clicked",s="GroupHeader_Notebook_Button_Clicked",d="GroupHeader_Planner_Button_Clicked",l="GroupHeader_Site_Button_Clicked",f="GroupHeader_CustomLeaveGroup_Button_Clicked",b="GroupHeader_Settings_Button_Clicked"},1893:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(2318),o=e(3);const i=Object(o.mutatorAction)("removeInfoBarMessages",(t,n,e)=>{n>=0&&t.infoBarIds.splice(n,1);const o=t.infoBarHostKey;r.b[o]&&(delete r.b[o][e],0===Object.keys(r.b[o]).length&&delete r.b[o])});function c(t,n){if(t){const e=Array.isArray(n)?n:n?[n]:t.infoBarIds?[...t.infoBarIds]:[];for(const n of e){const e=t.infoBarIds&&t.infoBarIds.indexOf(n);i(t,e,n)}}}},1936:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(1785);function o(t,n){return{headers:Object(r.e)(t,"GroupMailbox",!1,n)}}},1987:function(t,n,e){"use strict";e(1936);var r=e(1871);function o(t){let n=void 0;switch(t){case"None":n=0;break;case"Private":n=1;break;case"Secret":n=2;break;case"Public":n=3}return n}var i=e(3),c=Object(i.action)("EDIT_GROUP_SUCCESS",(t,n)=>({groupSmtp:t,photoUrl:n})),u=Object(i.action)("ADD_GROUP_MEMBER_SUCCESS",t=>({groupSmtp:t})),a=Object(i.action)("MEMBER_MANAGEMENT_SUCCESS",t=>({groupSmtp:t})),s=Object(i.action)("POPUP_OPENED",()=>({isOpen:!0})),d=Object(i.action)("POPUP_CLOSED",()=>({isOpen:!1})),l=Object(i.action)("DELETE_GROUP_SUCCESS",t=>({groupSmtp:t})),f=Object(i.action)("EDIT_GROUP_SMTP_SUCCESS",(t,n,e,r)=>({aadObjectId:t,groupSmtp:n,photoUrl:e,oldGroupSmtp:r})),b=e(1886);e.d(n,"n",(function(){return r.a})),e.d(n,"o",(function(){return o})),e.d(n,"m",(function(){return c})),e.d(n,"j",(function(){return u})),e.d(n,"p",(function(){return a})),e.d(n,"r",(function(){return s})),e.d(n,"q",(function(){return d})),e.d(n,"k",(function(){return l})),e.d(n,"l",(function(){return f})),e.d(n,"g",(function(){return b.g})),e.d(n,"c",(function(){return b.c})),e.d(n,"d",(function(){return b.d})),e.d(n,"a",(function(){return b.a})),e.d(n,"e",(function(){return b.e})),e.d(n,"f",(function(){return b.f})),e.d(n,"i",(function(){return b.i})),e.d(n,"b",(function(){return b.b})),e.d(n,"h",(function(){return b.h}))},2057:function(t,n,e){"use strict";function r(t){return Object.assign({__type:"BodyContentType:#Exchange"},t)}e.d(n,"a",(function(){return r}))},2269:function(t,n,e){"use strict";function r(t){return t&&!!t.setPluginUtils}e.d(n,"a",(function(){return r}))},2412:function(t,n,e){"use strict";var r=e(3);n.a=Object(r.action)("updateInternetMessageId",(t,n,e)=>({conversationId:t,itemId:n,internetMessageId:e}))},2420:function(t,n,e){"use strict";n.a=t=>{if(t){const{shouldEncryptMessageAsSmime:n,shouldSignMessageAsSmime:e}=t;return n||e}return!1}},272:function(t,n,e){"use strict";var r,o=e(3);!function(t){t[t.Valid=0]="Valid",t[t.AccountDeprovisioned=1]="AccountDeprovisioned",t[t.AccessRevoked=2]="AccessRevoked",t[t.TransientTokenError=3]="TransientTokenError",t[t.FailedToInitializeOWAConfig=4]="FailedToInitializeOWAConfig",t[t.AccountNotFound=5]="AccountNotFound",t[t.UnknownTokenError=6]="UnknownTokenError"}(r||(r={}));var i=e(71);const c=Object(o.action)("addAccount",t=>({userIdentity:t.userIdentity,account:t})),u=Object(o.action)("removeAccount",t=>({userIdentity:t})),a=Object(o.action)("updateAccount",(t,n,e)=>({userIdentity:t,accountToken:n,accountTokenExpiresIn:e})),s=Object(o.action)("updateOWAConnectedAccountStatus",(t,n)=>({userIdentity:t,accountState:n})),d=Object(o.action)("connectedAccountIsInErrorState",(t,n)=>Object(i.b)({name:"connectedAccountIsInErrorState",customData:{accountState_1:r[t],accountProvider_2:n}},{accountState:t})),l=Object(o.action)("connectedAccountsListRequested",t=>({isSuccess:t})),f=Object(o.action)("setAccountsStoreState",t=>({state:t}));var b,p=e(14);!function(t){t[t.None=0]="None",t[t.Loading=1]="Loading",t[t.AccountsLoadSuccessful=2]="AccountsLoadSuccessful",t[t.AccountsLoadError=3]="AccountsLoadError"}(b||(b={}));var m=Object(o.createStore)("OWAAccountsStore",{accountsMap:new p.ObservableMap({}),accountsLoadedState:b.None}),h=e(266),v=e(49),g=e(914),O=e(946),j=e(550);function I(t){var n;if(Object(j.a)()){const e=Object(O.a)(Object(g.a)(t));if(e&&"OFFICE365"==(null===(n=e.mailbox)||void 0===n?void 0:n.mailboxType))return!1}else if(t==Object(v.b)())return!1;return void 0!==E(t)}var S=e(956);function y(){return[...m().accountsMap.values()]}function E(t){return m().accountsMap.get(t)}function P(){var t,n;return Object(j.a)()?(null===(t=y())||void 0===t?void 0:t.length)>1?y()[1]:null:(null===(n=y())||void 0===n?void 0:n.length)>0?y()[0]:null}function A(){return y().filter(t=>t.accountState!=r.Valid)}function w(t){return y().filter(n=>t.includes(n.accountState))}function k(t){return y().filter(n=>n.accountProviderType==t)}function C(t){return I(t)?E(t).accountProviderType:null}function T(t){return"Outlook"==t.accountProviderType?`MSAuth1.0 usertoken="${t.token}", type="MSACT"`:"Google"==t.accountProviderType||"ICloud"==t.accountProviderType||"Yahoo"==t.accountProviderType?`Bearer ${t.token}`:"Office365"==t.accountProviderType?(Object(S.a)(!1,"Office365 accounts should not use this function."),""):Object(h.a)(t.accountProviderType)}function _(t,n){return function(e){const r=E(e);return r?r[t]:n}}_("accountUniqueId","0");const x=_("accountState",r.Valid),M=()=>y().some(t=>!U(t.userIdentity)),R=_("accountProviderType",null),L=t=>"Outlook"==R(t),U=t=>x(t)==r.Valid,N=()=>y().length>0;function z(){return m().accountsLoadedState}var B=e(7),G=e(61);Object(o.mutator)(c,({account:t})=>{Object(G.o)("owaAccountAdded",{accountStatus_1:r[t.accountState]}),m().accountsMap.set(t.userIdentity,t)}),Object(o.mutator)(u,({userIdentity:t})=>{m().accountsMap.delete(t)}),Object(o.mutator)(a,({userIdentity:t,accountToken:n,accountTokenExpiresIn:e})=>{const r=m().accountsMap.get(t);r.token=n,r.tokenExpiry=Object(B.j)(Object(B.Ub)(),e)}),Object(o.mutator)(s,({userIdentity:t,accountState:n})=>{const e=m().accountsMap.get(t);e.accountState==r.Valid&&n!=r.Valid&&Object(G.o)("owaConnectedAccountStatusUpdated",{accountStatus_1:r[n]}),e.accountState=n}),Object(o.mutator)(l,t=>{const n=t.isSuccess?b.AccountsLoadSuccessful:b.AccountsLoadError;m().accountsLoadedState=n}),Object(o.mutator)(f,t=>{m().accountsLoadedState=t.state}),e.d(n,"c",(function(){return c})),e.d(n,"v",(function(){return u})),e.d(n,"y",(function(){return a})),e.d(n,"x",(function(){return s})),e.d(n,"d",(function(){return d})),e.d(n,"e",(function(){return l})),e.d(n,"w",(function(){return f})),e.d(n,"n",(function(){return y})),e.d(n,"k",(function(){return E})),e.d(n,"i",(function(){return P})),e.d(n,"f",(function(){return A})),e.d(n,"g",(function(){return w})),e.d(n,"o",(function(){return k})),e.d(n,"j",(function(){return C})),e.d(n,"m",(function(){return T})),e.d(n,"l",(function(){return x})),e.d(n,"q",(function(){return M})),e.d(n,"u",(function(){return L})),e.d(n,"t",(function(){return U})),e.d(n,"p",(function(){return N})),e.d(n,"h",(function(){return z})),e.d(n,"r",(function(){return I})),e.d(n,"s",(function(){return j.a})),e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return b}))},311:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return c}));const r=/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/;function o(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function i(){return o()+o()+"-"+o()+"-"+o()+"-"+o()+"-"+o()+o()+o()}function c(t){return r.test(t)}},312:function(t,n,e){"use strict";e.d(n,"e",(function(){return i})),e.d(n,"d",(function(){return c})),e.d(n,"f",(function(){return u})),e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return s})),e.d(n,"c",(function(){return d})),e.d(n,"g",(function(){return l}));var r=e(20);const o=new r.c(()=>Promise.all([e.e(0),e.e(597)]).then(e.bind(null,1575))),i=new r.a(o,t=>t.makePostRequest).importAndExecute,c=new r.a(o,t=>t.makePatchRequest).importAndExecute,u=new r.a(o,t=>t.makePutRequest).importAndExecute,a=new r.a(o,t=>t.makeGetRequest).importAndExecute,s=new r.a(o,t=>t.makeDeleteRequest).importAndExecute,d=new r.a(o,t=>t.makeGraphRequest).importAndExecute,l=new r.a(o,t=>t.sendOwsPrimeRequest).importAndExecute},3422:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return i}));var r=e(29);function o(t,n){return t===n||t&&n&&t.toLowerCase()==n.toLowerCase()}function i(t){return t&&o(t.EmailAddress,Object(r.a)().SessionSettings.UserEmailAddress)}},3450:function(t,n,e){"use strict";function r(t){const n=[];if(null==t?void 0:t.recipients)for(const e of t.recipients){const t=e.persona.EmailAddress;(null==t?void 0:t.ItemId)&&"PrivateDL"==t.MailboxType?n.push({Name:t.Name,RoutingType:t.RoutingType,MailboxType:t.MailboxType,ItemId:{Id:t.ItemId.Id,ChangeKey:null},EmailAddressIndex:t.EmailAddressIndex,RelevanceScore:t.RelevanceScore||0}):n.push(e.persona.EmailAddress)}return n}e.d(n,"a",(function(){return r}))},421:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),o=e(358),i=e(62),c=e(422);var u=function(){var t=Object(r.useContext)(c.a),n=Object(o.a)(["theme"]).theme;return t||n||Object(i.a)({})}},422:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(0),o=r.createContext(void 0)},548:function(t,n,e){"use strict";e.d(n,"b",(function(){return u}));var r=e(20),o=e(916);e.d(n,"a",(function(){return o.a}));const i=new r.c(()=>Promise.all([e.e(1),e.e(2),e.e(3),e.e(4),e.e(229),e.e(685)]).then(e.bind(null,1576)));let c=new r.b(i,t=>t.confirmAction);function u(t,n,e,r){return c.import().then(o=>o(t,n,e,r))}},550:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(121),o=e(12);function i(){return Object(r.a)("acctmonaccounts")&&Object(o.i)("acctmonaccounts")}},703:function(t,n,e){"use strict";var r=e(301);const o=e.n(r)()("Profile",{profileId:"",profileName:"",selectedAccountSourceId:"",accountSources:[]});n.a=o},704:function(t,n,e){"use strict";var r=e(3),o=Object(r.createStore)("recipientcache",{recipientCache:null,allKeys:{},usedFindPeopleFallback:!1,userIdentity:""})();n.a=o},71:function(t,n,e){"use strict";var r=e(3);function o(t,n){return(n=n||{}).dp=t,n}function i(t,n,e){return Object(r.action)(t,(...r)=>{const i=n?n(...r):{},c=e?e(i,...r):{name:t};return c.name=c.name||t,c.options=c.options||{isCore:!0},o(c,i)})}function c(t){const{value:n,exactMatches:e=[0,1,2,3,4,5],buckets:r=[10,15,25,50,100]}=t;if(0===r.length)throw new Error("getAggregationBucket: buckets cannot be an empty array");if(e[0]&&n<e[0])return`<${e[0]}`;if(e.includes(n))return`${n}`;for(let t=0;t<r.length;t++)if(n<=r[t])return`${t>0?r[t-1]+1:e[e.length-1]+1||"0"}-${r[t]}`;return`${r[r.length-1]+1}+`}e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return c}))},716:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));const r=["\t","\n","\v","\f","\r"," ",""," "," "," "," "," "," "," "," "," "," "," "," "," ","\u2028","\u2029"," "," ","　","؜","​","‌","‍","‎","‏","\u2028","\u2029","‪","‫","‬","‭","‮"," ","⁠","⁦","⁧","⁨","⁩"];let o=null;const i=t=>{if(!t)return!0;return null===o&&(o=new Set,r.forEach(t=>o.add(t))),t.split("").every(t=>o.has(t))}},734:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(45),o={label:r.p,audio:r.b,video:r.z,ol:r.r,li:r.q,a:r.a,button:r.e,input:r.o,textarea:r.w,select:r.t,option:r.s,table:r.u,tr:r.y,th:r.x,td:r.v,colGroup:r.f,col:r.g,form:r.i,iframe:r.l,img:r.n};function i(t,n,e){var i=t&&o[t]||r.k;return Object(r.j)(n,i,e)}},7832:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"d",(function(){return a}));var r=e(4334),o=e(1902);const i=function(t={conversationReadingPaneState:Object(o.a)()}){var n;return(null===(n=t.conversationReadingPaneState)||void 0===n?void 0:n.focusedItemPart)?t.conversationReadingPaneState.focusedItemPart.itemPart:null},c=function(t={conversationReadingPaneState:Object(o.a)()}){var n;return(null===(n=t.conversationReadingPaneState)||void 0===n?void 0:n.focusedItemPart)?t.conversationReadingPaneState.focusedItemPart.focusedItemArea:null},u=function(t={conversationReadingPaneState:Object(o.a)()}){var n;return(null===(n=t.conversationReadingPaneState)||void 0===n?void 0:n.initiallySelectedItemPart)?t.conversationReadingPaneState.initiallySelectedItemPart.itemPart:null},a=function(t,n={conversationReadingPaneState:Object(o.a)()}){const e=i(n),u=c(n);return e==t&&u==r.a.Item}},914:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(703);function o(t){const n=Object(r.a)().accountSources.filter(n=>{var e;return(null===(e=n.mailbox)||void 0===e?void 0:e.emailAddress)===t});if(n.length>1)throw new Error("Found "+n.length+" duplicated accounts with same email address: "+t);return 1===n.length?n[0].id:null}},916:function(t,n,e){"use strict";var r;e.d(n,"a",(function(){return r})),function(t){t[t.ok=0]="ok",t[t.cancel=1]="cancel",t[t.dismiss=2]="dismiss",t[t.continue=3]="continue"}(r||(r={}))},917:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"d",(function(){return c})),e.d(n,"c",(function(){return u})),e.d(n,"b",(function(){return d}));var r=e(704),o=e(923);function i(t,n,e,r){return a(d(t),n,e,r)}function c(t,n,e,r){return o.d.import().then(o=>o(t,n,t=>s(e,t,r)))}function u(t,n,e,r){return a(t,n,e,r)}function a(t,n,e,o){let i=[],c=0;for(;i.length<n&&r.a.recipientCache&&c<r.a.recipientCache.length;){const n=r.a.recipientCache[c];if(t(n)){s(e,n.EmailAddress,o)||i.push(n)}c++}return i}function s(t,n,e){let r=!1;return t&&function(t,n){for(var e=0;e<n.length;e++)if(t.EmailAddress==n[e].EmailAddress.EmailAddress)return!0;return!1}(n,t)&&(r=!0),e&&e.indexOf(n.MailboxType)>=0&&(r=!0),r}const d=t=>n=>{const e=n.EmailAddress;if(e.EmailAddress&&0==e.EmailAddress.toLowerCase().indexOf(t))return!0;if(e.Name){if(0==e.Name.toLowerCase().indexOf(t))return!0;const n=e.Name.toLowerCase().split(" ");for(let e=0;e<n.length;e++)if(0==n[e].indexOf(t))return!0}return!1}},923:function(t,n,e){"use strict";e.d(n,"d",(function(){return i})),e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a}));var r=e(20);const o=new r.c(()=>e.e(646).then(e.bind(null,1574)));let i=new r.b(o,t=>t.searchCacheTrie),c=new r.b(o,t=>t.compareFeatureData),u=new r.a(o,t=>t.initializeSuggestionTrie),a=new r.a(o,t=>t.isSuggestionTrieEmpty)},946:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(40),o=e(703);function i(t){const n=Object(o.a)().accountSources.filter(n=>n.id===t);if(1===n.length)return n[0];n.length>1&&r.h.warn("Found more than one account with the same source id")}},956:function(t,n,e){"use strict";function r(t,n){if(!t)throw new Error(n||"Assertion failed")}e.d(n,"a",(function(){return r}))}}]);
//# sourceMappingURL=owa.MailBoot~Addins~ReadingPane.js.map
self.scriptsLoaded['owa.MailBoot~Addins~ReadingPane.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~Addins~ReadingPane.js'] = (new Date()).getTime();