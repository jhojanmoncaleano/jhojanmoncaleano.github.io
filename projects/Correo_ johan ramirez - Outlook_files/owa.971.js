self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.971.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[971],{1686:function(t,e,n){"use strict";var c=n(3);const o=Object(c.action)("initializeOwaObservableDateTime"),r=Object(c.action)("observableNowChanged"),i=Object(c.action)("observableTodayChanged");var u=n(7),a=n(14),s=Object(c.createStore)("ObservableDateTime",{now:0,today:0});const b=Object(a.computed)(()=>Object(u.qc)(s().now)),d=()=>b.get(),l=Object(a.computed)(()=>Object(u.qc)(s().today)),f=()=>l.get(),j=t=>Object(u.Jb)(t,d()),O=t=>Object(u.Hb)(t,d()),p=t=>y(t,u.Jb),h=t=>y(t,u.Kb),y=(t,e)=>e(Object(u.bc)(Object(u.qc)(t)),f());function m(t){if(!t)return"";const e=Object(u.qc)(t);return function(t,e){const n=Object(u.bc)(t);if(Object(u.Lb)(n,e))return u.ab;const c=t=>Object(u.Rb)(n,Object(u.e)(e,-t),e);if(c(3))return u.ib;if(c(30))return u.hb;return u.Y}(e,f())(e)}function v(t){if(!t)return"";const e=Object(u.qc)(t);return function(t,e){const n=Object(u.bc)(t);if(Object(u.Lb)(n,e))return u.T;return u.U}(e,f())(e)}function g(t){if(!t)return"";return function(t,e){const n=Object(u.bc)(t);return Object(u.Lb)(n,e)?Object(u.ab)(t):T(n,e,2)?Object(u.lb)(t):T(n,e,7)?Object(u.H)(Object(u.bb)(t),Object(u.ab)(t)):Object(u.H)(Object(u.J)(t),Object(u.ab)(t))}(Object(u.qc)(t),f())}function T(t,e,n){return Object(u.Rb)(t,Object(u.e)(e,-n),e)}const A=Object(c.action)("updateTimes"),w=Object(c.action)("setNow"),I=Object(c.action)("setToday",t=>({today:t}));Object(c.mutator)(w,()=>{s().now=Object(u.oc)()}),Object(c.mutator)(I,({today:t})=>{s().today=t});var S=n(22),x=n(75);let P=!1;Object(c.orchestrator)(o,()=>{if(A(),!P){const t=Object(u.Ub)(),e=Object(u.dc)(Object(u.h)(t,1)),n=Object(u.w)(e,t);setTimeout(()=>setInterval(A,S.g),n),document&&document.addEventListener("visibilitychange",A),P=!0}}),Object(c.orchestrator)(x.m,()=>{A()}),Object(c.orchestrator)(A,()=>{w();const t=Object(u.Cb)(Object(u.pc)()),e=s().today!=t;e&&I(t),r(),e&&i()}),n.d(e,"d",(function(){return o})),n.d(e,"j",(function(){return r})),n.d(e,"l",(function(){return i})),n.d(e,"i",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return O})),n.d(e,"f",(function(){return p})),n.d(e,"h",(function(){return h})),n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return g}))},1715:function(t,e,n){"use strict";function c(t,e){Object.keys(e).forEach(n=>t.set(n,e[n]))}function o(t){let e=null!=t?t:{headers:new Headers};return e.datapoint=e.datapoint||{},e.datapoint.mailbox="Default",e}n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return o}))},1718:function(t,e,n){"use strict";var c=n(1787),o=n(272),r=n(1686),i=n(61),u=n(7),a=n(40);const s="X-AnchorMailbox",b="Authorization",d="X-OwaWebSessionType",l="X-OWA-ExplicitLogonUser";async function f(t,e){const n={},f=Object(o.k)(t);if(e?(n[s]=e,n[l]=e):f&&(n[s]=f.anchorMailbox),Object(o.s)())return a.h.info("[cal-multiAccounts-sourceId] Bypassing legacy connected account header processing."),n;if(f){if(f.accountState==o.b.AccessRevoked)return null;if(f.accountState==o.b.AccountDeprovisioned||f.accountState==o.b.AccountNotFound)return Object(o.d)(f.accountState,f.accountProviderType),null}if(f){let e,o=f.token,s=Object(r.g)(f.tokenExpiry);!s&&o||(Object(i.o)("getAndUpdateAccessToken",{tokenExpiry:Object(u.y)(f.tokenExpiry,Object(u.Ub)()),isTokenExpired_1:s,isTokenInvalid_2:!o},{isCore:!0}),o=await c.a.importAndExecute(f.accountId,t,o),a.h.info("[AccountLoadRecovery] getConnectedAccountHeaders: finished GetAndUpdateAccessToken for "+t+o),o||(o="")),"Outlook"==f.accountProviderType?(e=`MSAuth1.0 usertoken="${o}", type="MSACT"`,n[d]=1..toString()):"Google"!=f.accountProviderType&&"ICloud"!=f.accountProviderType&&"Yahoo"!=f.accountProviderType||(e=`Bearer ${o}`,n[d]=2..toString()),n[b]=e}return n}var j=n(1715),O=n(914);async function p(t,e){var n;const c=Object(j.a)();if(c.headers=await async function(t,e){var n;const c=e&&(null===(n=t.headers)||void 0===n?void 0:n.set)?new Headers(t.headers):new Headers,o=await f(t.mailboxInfo.userIdentity,h(t.mailboxInfo.type,t.mailboxInfo.mailboxSmtpAddress)?t.mailboxInfo.mailboxSmtpAddress:null);return Object(j.b)(c,o),c}(t,e),c.authNeededOnUnAuthorized=!1,c.datapoint=c.datapoint||{},Object(o.s)()){const e=Object(O.a)(null===(n=null==t?void 0:t.mailboxInfo)||void 0===n?void 0:n.userIdentity);a.h.info("[cal-multiAccounts-sourceId:getConnectedAccountRequestOptions] sourceId: "+e),c.sourceId=e,c.datapoint.mailbox="Connected"}else c.datapoint.mailbox="Connected";return c}function h(t,e){const n="GroupMailbox"==t||"TeamsMailbox"==t||"SharedMailbox"==t||"PublicMailbox"==t;return n&&null==e&&a.d("getHeadersForConnectedAccount: mailboxSmtpAddress should be passed for Group or Teams or Shared or Public Mbx request"),n}n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return h}))},1721:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(3);const o=Object(c.action)("triggerReInitializeAccount",t=>({userIdentity:t}))},1787:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n(20),o=n(1721);n.d(e,"b",(function(){return o.a}));const r=new c.c(()=>n.e(1045).then(n.bind(null,2021))),i=new c.a(r,t=>t.getAndUpdateAccessToken)},19569:function(t,e,n){"use strict";n.r(e);var c=n(3754),o=n(699),r=n(209),i=Object(o.action)("execute3SPrimeCall")((function(){Object(c.b)(Object(r.d)().userIdentity,null,!1)}));n.d(e,"execute3SPrimeCall",(function(){return i}))},2120:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(44);function o(){return Object(c.j)("rp-cacheFirstPeopleTrieSize300")||Object(c.j)("rp-cacheFirstPeopleTrieSize500")||Object(c.j)("rp-cacheFirstPeopleTrieSize700")||Object(c.j)("rp-peopleTrieOnTimeoutLow")||Object(c.j)("rp-peopleTrieOnTimeoutMed")||Object(c.j)("rp-peopleTrieOnTimeoutHigh")}},267:function(t,e,n){"use strict";var c=n(912);n.d(e,"a",(function(){return c.a}))},2825:function(t,e,n){"use strict";var c=n(121);var o=n(44),r=n(6);n.d(e,"a",(function(){return u}));const i="searchtesthook";function u(t={}){const e=function(t,...e){const n={};for(const c of e)for(const e of Object.keys(c))t.includes(e)&&n.hasOwnProperty(e)?n[e]=n[e]+","+c[e]:n[e]=c[e];return n}(["setflight"],t,function(){let t={};const e=Object(r.c)(i),n=decodeURIComponent(e||"").trim();if(Object(o.j)("sea-debugHook")&&n.length>0){t=n.split("&").reduce((t,e)=>{const[n,c]=e.split("=");return t[n]=c,t},{})}return t}(),Object(c.a)("includePartnerIn3SRequest")?{partner:"exchangeshared"}:{});return Object.keys(e).filter(t=>null!==e[t]).reduce((t,n)=>Object.assign(Object.assign({},t),{[n]:e[n]}),{})}},3655:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(2120);const o=["Id","ADObjectId","DisplayName","EmailAddresses","PeopleSubtype","PeopleType","PDLItemId","PersonaId","ImAddress","JobTitle","PersonId","MRI"],r=o.concat(["FeatureData","GivenName","Surname","Alias","AdditionalNames"]),i=o.concat(["FeatureData"]),u=o.concat(["Phones","OfficeLocation","Department"]);function a(t,e=!0){return 2===t?u:Object(c.a)()&&e?function(t){return 0==t?[...r]:[...i]}(t):o}},3754:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return g})),n.d(e,"c",(function(){return A}));var c=n(272),o=n(1718),r=n(44),i=n(311),u=n(267),a=n(312),s=n(2825),b=n(283),d=n(2120),l=n(40),f=n(3655);const j="/search/api/v1/init?",O="/search/api/v1/suggestions?",p="owa.react.compose",h="20",y="5",m="CSRClientEnabled",v="owa.projectMoca.peopleCard";async function g(t,e,n,c,o,r,s,b=!0){const d=s||p;if(null==e)return async function(t){return Object(a.b)(j+A(t),void 0,!0,await w(null),!0,!1).then(t=>Object(u.a)(t.status)?t.json():null).catch(t=>(t.networkError=!0,l.d(t),null))}(d);{let u=function(t,e,n){return{AppName:"OWA",Scenario:{Name:n},Cvid:e||Object(i.a)(),EntityRequests:[t]}}(await async function(t,e,n,c,o){let r={Query:{QueryString:t},EntityType:"People",Provenances:T(e),Size:e?h:y};c&&c.length>0&&(r.Context=function(t){let e={};t&&(e.RecipientsTo=t.toString());return e}(c));return r.Fields=o===v?Object(f.a)(2,n):Object(f.a)(1,n),r}(e,n,b,r,d),null==o?void 0:o.conversationId,d);return Object(a.e)(O+A(d,e),u,c,!1,await w(t,null==o?void 0:o.clientSessionId),!0,!0,!1).then(t=>t).catch(t=>(l.h.info(t),null))}}function T(t){let e=["Mailbox"];return t&&!Object(b.a)()&&e.push("Directory"),e}function A(t,e){const n=Object.assign({scenario:t},Object(s.a)());let c=[];return Object(d.a)()&&c.push(m),Object(r.j)("rp-cacheFirstPeopleTrieSize500cf")&&c.push(m),n.setflight&&c.push(n.setflight),c.length>0&&(n.setflight=c.join(",")),Object.keys(n).map(t=>`${t}=${n[t]}`).join("&")}async function w(t,e){let n={};return e&&(n["client-session-id"]=e),t&&Object(c.r)(t)?Object(o.a)(t).then(t=>(Object.keys(t).forEach(e=>n[e]=t[e]),n)):n}},912:function(t,e,n){"use strict";function c(t){return t>=200&&t<300}n.d(e,"a",(function(){return c}))}}]);
//# sourceMappingURL=owa.971.js.map
self.scriptsLoaded['owa.971.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.971.js'] = (new Date()).getTime();