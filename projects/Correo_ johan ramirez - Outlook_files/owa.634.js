self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.634.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[634],{1038:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(32),c=e(972);function o(t,n){return void 0===t||t.__type||(t=Object(c.a)(t)),Object(r.a)("FindItem",t,n)}},1040:function(t,n,e){"use strict";function r(t){return Object.assign({__type:"FindItemRequest:#Exchange"},t)}e.d(n,"a",(function(){return r}))},1685:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(57);function c(t){if(!t)throw new Error("Input parameter to folderNameToId must not be null.");return r.a.defaultFolderNameToIdMap.get(t)}},1686:function(t,n,e){"use strict";var r=e(3);const c=Object(r.action)("initializeOwaObservableDateTime"),o=Object(r.action)("observableNowChanged"),a=Object(r.action)("observableTodayChanged");var i=e(7),u=e(14),s=Object(r.createStore)("ObservableDateTime",{now:0,today:0});const d=Object(u.computed)(()=>Object(i.qc)(s().now)),l=()=>d.get(),f=Object(u.computed)(()=>Object(i.qc)(s().today)),b=()=>f.get(),h=t=>Object(i.Jb)(t,l()),m=t=>Object(i.Hb)(t,l()),p=t=>g(t,i.Jb),O=t=>g(t,i.Kb),g=(t,n)=>n(Object(i.bc)(Object(i.qc)(t)),b());function j(t){if(!t)return"";const n=Object(i.qc)(t);return function(t,n){const e=Object(i.bc)(t);if(Object(i.Lb)(e,n))return i.ab;const r=t=>Object(i.Rb)(e,Object(i.e)(n,-t),n);if(r(3))return i.ib;if(r(30))return i.hb;return i.Y}(n,b())(n)}function v(t){if(!t)return"";const n=Object(i.qc)(t);return function(t,n){const e=Object(i.bc)(t);if(Object(i.Lb)(e,n))return i.T;return i.U}(n,b())(n)}function I(t){if(!t)return"";return function(t,n){const e=Object(i.bc)(t);return Object(i.Lb)(e,n)?Object(i.ab)(t):y(e,n,2)?Object(i.lb)(t):y(e,n,7)?Object(i.H)(Object(i.bb)(t),Object(i.ab)(t)):Object(i.H)(Object(i.J)(t),Object(i.ab)(t))}(Object(i.qc)(t),b())}function y(t,n,e){return Object(i.Rb)(t,Object(i.e)(n,-e),n)}const A=Object(r.action)("updateTimes"),w=Object(r.action)("setNow"),T=Object(r.action)("setToday",t=>({today:t}));Object(r.mutator)(w,()=>{s().now=Object(i.oc)()}),Object(r.mutator)(T,({today:t})=>{s().today=t});var x=e(22),S=e(75);let P=!1;Object(r.orchestrator)(c,()=>{if(A(),!P){const t=Object(i.Ub)(),n=Object(i.dc)(Object(i.h)(t,1)),e=Object(i.w)(n,t);setTimeout(()=>setInterval(A,x.g),e),document&&document.addEventListener("visibilitychange",A),P=!0}}),Object(r.orchestrator)(S.m,()=>{A()}),Object(r.orchestrator)(A,()=>{w();const t=Object(i.Cb)(Object(i.pc)()),n=s().today!=t;n&&T(t),o(),n&&a()}),e.d(n,"d",(function(){return c})),e.d(n,"j",(function(){return o})),e.d(n,"l",(function(){return a})),e.d(n,"i",(function(){return l})),e.d(n,"k",(function(){return b})),e.d(n,"g",(function(){return h})),e.d(n,"e",(function(){return m})),e.d(n,"f",(function(){return p})),e.d(n,"h",(function(){return O})),e.d(n,"a",(function(){return j})),e.d(n,"b",(function(){return v})),e.d(n,"c",(function(){return I}))},1715:function(t,n,e){"use strict";function r(t,n){Object.keys(n).forEach(e=>t.set(e,n[e]))}function c(t){let n=null!=t?t:{headers:new Headers};return n.datapoint=n.datapoint||{},n.datapoint.mailbox="Default",n}e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return c}))},1718:function(t,n,e){"use strict";var r=e(1787),c=e(272),o=e(1686),a=e(61),i=e(7),u=e(40);const s="X-AnchorMailbox",d="Authorization",l="X-OwaWebSessionType",f="X-OWA-ExplicitLogonUser";async function b(t,n){const e={},b=Object(c.k)(t);if(n?(e[s]=n,e[f]=n):b&&(e[s]=b.anchorMailbox),Object(c.s)())return u.h.info("[cal-multiAccounts-sourceId] Bypassing legacy connected account header processing."),e;if(b){if(b.accountState==c.b.AccessRevoked)return null;if(b.accountState==c.b.AccountDeprovisioned||b.accountState==c.b.AccountNotFound)return Object(c.d)(b.accountState,b.accountProviderType),null}if(b){let n,c=b.token,s=Object(o.g)(b.tokenExpiry);!s&&c||(Object(a.o)("getAndUpdateAccessToken",{tokenExpiry:Object(i.y)(b.tokenExpiry,Object(i.Ub)()),isTokenExpired_1:s,isTokenInvalid_2:!c},{isCore:!0}),c=await r.a.importAndExecute(b.accountId,t,c),u.h.info("[AccountLoadRecovery] getConnectedAccountHeaders: finished GetAndUpdateAccessToken for "+t+c),c||(c="")),"Outlook"==b.accountProviderType?(n=`MSAuth1.0 usertoken="${c}", type="MSACT"`,e[l]=1..toString()):"Google"!=b.accountProviderType&&"ICloud"!=b.accountProviderType&&"Yahoo"!=b.accountProviderType||(n=`Bearer ${c}`,e[l]=2..toString()),e[d]=n}return e}var h=e(1715),m=e(914);async function p(t,n){var e;const r=Object(h.a)();if(r.headers=await async function(t,n){var e;const r=n&&(null===(e=t.headers)||void 0===e?void 0:e.set)?new Headers(t.headers):new Headers,c=await b(t.mailboxInfo.userIdentity,O(t.mailboxInfo.type,t.mailboxInfo.mailboxSmtpAddress)?t.mailboxInfo.mailboxSmtpAddress:null);return Object(h.b)(r,c),r}(t,n),r.authNeededOnUnAuthorized=!1,r.datapoint=r.datapoint||{},Object(c.s)()){const n=Object(m.a)(null===(e=null==t?void 0:t.mailboxInfo)||void 0===e?void 0:e.userIdentity);u.h.info("[cal-multiAccounts-sourceId:getConnectedAccountRequestOptions] sourceId: "+n),r.sourceId=n,r.datapoint.mailbox="Connected"}else r.datapoint.mailbox="Connected";return r}function O(t,n){const e="GroupMailbox"==t||"TeamsMailbox"==t||"SharedMailbox"==t||"PublicMailbox"==t;return e&&null==n&&u.d("getHeadersForConnectedAccount: mailboxSmtpAddress should be passed for Group or Teams or Shared or Public Mbx request"),e}e.d(n,"a",(function(){return b})),e.d(n,"b",(function(){return p})),e.d(n,"c",(function(){return O}))},1721:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(3);const c=Object(r.action)("triggerReInitializeAccount",t=>({userIdentity:t}))},1751:function(t,n,e){"use strict";e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"e",(function(){return a})),e.d(n,"d",(function(){return i}));const r="FileAttachment:#Exchange",c="ItemAttachment:#Exchange",o="ItemIdAttachment:#Exchange",a="ReferenceAttachment:#Exchange",i="LinkAttachment:#Exchange"},1787:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(20),c=e(1721);e.d(n,"b",(function(){return c.a}));const o=new r.c(()=>e.e(1045).then(e.bind(null,2021))),a=new r.a(o,t=>t.getAndUpdateAccessToken)},1876:function(t,n,e){"use strict";function r(t){return Object.assign({__type:"IndexedPageView:#Exchange"},t)}e.d(n,"a",(function(){return r}))},1917:function(t,n,e){"use strict";var r;function c(){return[r.noPermissionToShare,r.getSharingInfoFailed,r.linkHasExpired,r.linkWillExpire,r.noPermissionToShareExternally,r.externalRecipientCSL,r.noPermissionSet,r.sharingWithLargeDL]}e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return c})),function(t){t.noPermissionToShare="WarningNoPermissionToShare",t.getSharingInfoFailed="WarningGetSharingInfoFailed",t.linkHasExpired="WarningLinksHasExpired",t.linkWillExpire="WarningLinksWillExpire",t.noPermissionToShareExternally="WarningExternalRecipientButNoPermissionToShareExternally",t.externalRecipientCSL="WarningExternalRecipientsCannotOpenCSLs",t.noPermissionSet="WarningOnlyPeopleWithExistingAccessCanAccess",t.sharingWithLargeDL="WarningNotAllMembersOfDLCanAccess"}(r||(r={}))},1920:function(t,n){t.exports=function(t){return t instanceof Date}},1999:function(t,n,e){var r=e(1920),c=36e5,o=6e4,a=2,i=/[T ]/,u=/:/,s=/^(\d{2})$/,d=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],l=/^(\d{4})/,f=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],b=/^-(\d{2})$/,h=/^-?(\d{3})$/,m=/^-?(\d{2})-?(\d{2})$/,p=/^-?W(\d{2})$/,O=/^-?W(\d{2})-?(\d{1})$/,g=/^(\d{2}([.,]\d*)?)$/,j=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,v=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,I=/([Z+-].*)$/,y=/^(Z)$/,A=/^([+-])(\d{2})$/,w=/^([+-])(\d{2}):?(\d{2})$/;function T(t,n,e){n=n||0,e=e||0;var r=new Date(0);r.setUTCFullYear(t,0,4);var c=7*n+e+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+c),r}t.exports=function(t,n){if(r(t))return new Date(t.getTime());if("string"!=typeof t)return new Date(t);var e=(n||{}).additionalDigits;e=null==e?a:Number(e);var x=function(t){var n,e={},r=t.split(i);u.test(r[0])?(e.date=null,n=r[0]):(e.date=r[0],n=r[1]);if(n){var c=I.exec(n);c?(e.time=n.replace(c[1],""),e.timezone=c[1]):e.time=n}return e}(t),S=function(t,n){var e,r=d[n],c=f[n];if(e=l.exec(t)||c.exec(t)){var o=e[1];return{year:parseInt(o,10),restDateString:t.slice(o.length)}}if(e=s.exec(t)||r.exec(t)){var a=e[1];return{year:100*parseInt(a,10),restDateString:t.slice(a.length)}}return{year:null}}(x.date,e),P=S.year,k=function(t,n){if(null===n)return null;var e,r,c,o;if(0===t.length)return(r=new Date(0)).setUTCFullYear(n),r;if(e=b.exec(t))return r=new Date(0),c=parseInt(e[1],10)-1,r.setUTCFullYear(n,c),r;if(e=h.exec(t)){r=new Date(0);var a=parseInt(e[1],10);return r.setUTCFullYear(n,0,a),r}if(e=m.exec(t)){r=new Date(0),c=parseInt(e[1],10)-1;var i=parseInt(e[2],10);return r.setUTCFullYear(n,c,i),r}if(e=p.exec(t))return o=parseInt(e[1],10)-1,T(n,o);if(e=O.exec(t)){o=parseInt(e[1],10)-1;var u=parseInt(e[2],10)-1;return T(n,o,u)}return null}(S.restDateString,P);if(k){var E,L=k.getTime(),C=0;return x.time&&(C=function(t){var n,e,r;if(n=g.exec(t))return(e=parseFloat(n[1].replace(",",".")))%24*c;if(n=j.exec(t))return e=parseInt(n[1],10),r=parseFloat(n[2].replace(",",".")),e%24*c+r*o;if(n=v.exec(t)){e=parseInt(n[1],10),r=parseInt(n[2],10);var a=parseFloat(n[3].replace(",","."));return e%24*c+r*o+1e3*a}return null}(x.time)),x.timezone?E=function(t){var n,e;if(n=y.exec(t))return 0;if(n=A.exec(t))return e=60*parseInt(n[2],10),"+"===n[1]?-e:e;if(n=w.exec(t))return e=60*parseInt(n[2],10)+parseInt(n[3],10),"+"===n[1]?-e:e;return 0}(x.timezone):(E=new Date(L+C).getTimezoneOffset(),E=new Date(L+C+E*o).getTimezoneOffset()),new Date(L+C+E*o)}return new Date(t)}},2065:function(t,n,e){"use strict";var r=e(1751),c=e(5);const o=t=>t&&["IPM.Note","IPM.Schedule.Meeting","IPM.GroupMailbox.JoinRequest","IPM.Post"].includes(t);function a(t){const n=t.__type||t.OwsTypeName;switch(n){case r.a:return 0;case r.e:return t.IsLink?3:1;case r.d:return 3;case r.b:return 2;case r.c:const e=t,a=t.EmbeddedItemClass;return a&&o(a)||Object(c.k)(e.AttachmentIdToAttach)?2:0;default:throw new Error(`Invalid type of attachment ${n}`)}}e.d(n,"a",(function(){return a}))},2081:function(t,n,e){"use strict";var r;e.d(n,"a",(function(){return r})),function(t){t[t.InProgress=0]="InProgress",t[t.Failed=1]="Failed",t[t.Succeeded=2]="Succeeded"}(r||(r={}))},210:function(t,n,e){"use strict";n.decode=n.parse=e(367),n.encode=n.stringify=e(368)},2101:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(3);const c=Object(r.action)("REFRESH_EXPIRATION_DATE",t=>({id:t}))},2102:function(t,n,e){"use strict";var r;e.d(n,"a",(function(){return r})),function(t){t[t.ignore=0]="ignore",t[t.refreshExpiration=1]="refreshExpiration",t[t.changePermission=2]="changePermission",t[t.attachAsACopy=3]="attachAsACopy"}(r||(r={}))},2247:function(t,n,e){"use strict";e.d(n,"h",(function(){return s})),e.d(n,"i",(function(){return d})),e.d(n,"f",(function(){return l})),e.d(n,"k",(function(){return f})),e.d(n,"m",(function(){return b})),e.d(n,"e",(function(){return h})),e.d(n,"g",(function(){return m})),e.d(n,"j",(function(){return p})),e.d(n,"l",(function(){return O}));var r=e(20),c=e(2101);e.d(n,"n",(function(){return c.a}));var o=e(2081);e.d(n,"a",(function(){return o.a}));var a=e(1917);e.d(n,"d",(function(){return a.b})),e.d(n,"c",(function(){return a.a}));var i=e(2102);e.d(n,"b",(function(){return i.a}));const u=new r.c(()=>Promise.all([e.e(0),e.e(26),e.e(94),e.e(735)]).then(e.bind(null,3285))),s=new r.b(u,t=>t.getSharingInformation),d=new r.b(u,t=>t.getSharingIssuesForSharingData),l=new r.b(u,t=>t.getInfoBarCreator),f=new r.b(u,t=>t.hasLargeDLRecipient),b=new r.b(u,t=>t.hasRecipientExpansionFailure),h=new r.b(u,t=>t.getGroupsAndSmallDLs),m=new r.b(u,t=>t.getInvididualRecipients),p=new r.b(u,t=>t.hasGetRecipientPermissionFailed),O=new r.b(u,t=>t.logSharingTipChangesForLinkRemoval)},2430:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"d",(function(){return c})),e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"e",(function(){return i}));const r="originalsrc",c="shash",o="data-auth",a="&reserved=0",i="Verified"},2523:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(1751);function c(t){return(t.__type||t.OwsTypeName)===r.d}},272:function(t,n,e){"use strict";var r,c=e(3);!function(t){t[t.Valid=0]="Valid",t[t.AccountDeprovisioned=1]="AccountDeprovisioned",t[t.AccessRevoked=2]="AccessRevoked",t[t.TransientTokenError=3]="TransientTokenError",t[t.FailedToInitializeOWAConfig=4]="FailedToInitializeOWAConfig",t[t.AccountNotFound=5]="AccountNotFound",t[t.UnknownTokenError=6]="UnknownTokenError"}(r||(r={}));var o=e(71);const a=Object(c.action)("addAccount",t=>({userIdentity:t.userIdentity,account:t})),i=Object(c.action)("removeAccount",t=>({userIdentity:t})),u=Object(c.action)("updateAccount",(t,n,e)=>({userIdentity:t,accountToken:n,accountTokenExpiresIn:e})),s=Object(c.action)("updateOWAConnectedAccountStatus",(t,n)=>({userIdentity:t,accountState:n})),d=Object(c.action)("connectedAccountIsInErrorState",(t,n)=>Object(o.b)({name:"connectedAccountIsInErrorState",customData:{accountState_1:r[t],accountProvider_2:n}},{accountState:t})),l=Object(c.action)("connectedAccountsListRequested",t=>({isSuccess:t})),f=Object(c.action)("setAccountsStoreState",t=>({state:t}));var b,h=e(14);!function(t){t[t.None=0]="None",t[t.Loading=1]="Loading",t[t.AccountsLoadSuccessful=2]="AccountsLoadSuccessful",t[t.AccountsLoadError=3]="AccountsLoadError"}(b||(b={}));var m=Object(c.createStore)("OWAAccountsStore",{accountsMap:new h.ObservableMap({}),accountsLoadedState:b.None}),p=e(266),O=e(49),g=e(914),j=e(946),v=e(550);function I(t){var n;if(Object(v.a)()){const e=Object(j.a)(Object(g.a)(t));if(e&&"OFFICE365"==(null===(n=e.mailbox)||void 0===n?void 0:n.mailboxType))return!1}else if(t==Object(O.b)())return!1;return void 0!==w(t)}var y=e(956);function A(){return[...m().accountsMap.values()]}function w(t){return m().accountsMap.get(t)}function T(){var t,n;return Object(v.a)()?(null===(t=A())||void 0===t?void 0:t.length)>1?A()[1]:null:(null===(n=A())||void 0===n?void 0:n.length)>0?A()[0]:null}function x(){return A().filter(t=>t.accountState!=r.Valid)}function S(t){return A().filter(n=>t.includes(n.accountState))}function P(t){return A().filter(n=>n.accountProviderType==t)}function k(t){return I(t)?w(t).accountProviderType:null}function E(t){return"Outlook"==t.accountProviderType?`MSAuth1.0 usertoken="${t.token}", type="MSACT"`:"Google"==t.accountProviderType||"ICloud"==t.accountProviderType||"Yahoo"==t.accountProviderType?`Bearer ${t.token}`:"Office365"==t.accountProviderType?(Object(y.a)(!1,"Office365 accounts should not use this function."),""):Object(p.a)(t.accountProviderType)}function L(t,n){return function(e){const r=w(e);return r?r[t]:n}}L("accountUniqueId","0");const C=L("accountState",r.Valid),U=()=>A().some(t=>!N(t.userIdentity)),D=L("accountProviderType",null),R=t=>"Outlook"==D(t),N=t=>C(t)==r.Valid,F=()=>A().length>0;function M(){return m().accountsLoadedState}var _=e(7),$=e(61);Object(c.mutator)(a,({account:t})=>{Object($.o)("owaAccountAdded",{accountStatus_1:r[t.accountState]}),m().accountsMap.set(t.userIdentity,t)}),Object(c.mutator)(i,({userIdentity:t})=>{m().accountsMap.delete(t)}),Object(c.mutator)(u,({userIdentity:t,accountToken:n,accountTokenExpiresIn:e})=>{const r=m().accountsMap.get(t);r.token=n,r.tokenExpiry=Object(_.j)(Object(_.Ub)(),e)}),Object(c.mutator)(s,({userIdentity:t,accountState:n})=>{const e=m().accountsMap.get(t);e.accountState==r.Valid&&n!=r.Valid&&Object($.o)("owaConnectedAccountStatusUpdated",{accountStatus_1:r[n]}),e.accountState=n}),Object(c.mutator)(l,t=>{const n=t.isSuccess?b.AccountsLoadSuccessful:b.AccountsLoadError;m().accountsLoadedState=n}),Object(c.mutator)(f,t=>{m().accountsLoadedState=t.state}),e.d(n,"c",(function(){return a})),e.d(n,"v",(function(){return i})),e.d(n,"y",(function(){return u})),e.d(n,"x",(function(){return s})),e.d(n,"d",(function(){return d})),e.d(n,"e",(function(){return l})),e.d(n,"w",(function(){return f})),e.d(n,"n",(function(){return A})),e.d(n,"k",(function(){return w})),e.d(n,"i",(function(){return T})),e.d(n,"f",(function(){return x})),e.d(n,"g",(function(){return S})),e.d(n,"o",(function(){return P})),e.d(n,"j",(function(){return k})),e.d(n,"m",(function(){return E})),e.d(n,"l",(function(){return C})),e.d(n,"q",(function(){return U})),e.d(n,"u",(function(){return R})),e.d(n,"t",(function(){return N})),e.d(n,"p",(function(){return F})),e.d(n,"h",(function(){return M})),e.d(n,"r",(function(){return I})),e.d(n,"s",(function(){return v.a})),e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return b}))},311:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a}));const r=/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/;function c(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function o(){return c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c()}function a(t){return r.test(t)}},3351:function(t,n,e){"use strict";e.d(n,"f",(function(){return a})),e.d(n,"g",(function(){return i})),e.d(n,"h",(function(){return u}));var r=e(20),c=e(2430);e.d(n,"b",(function(){return c.b})),e.d(n,"d",(function(){return c.d})),e.d(n,"a",(function(){return c.a})),e.d(n,"c",(function(){return c.c})),e.d(n,"e",(function(){return c.e}));const o=new r.c(()=>e.e(1354).then(e.bind(null,7197))),a=new r.b(o,t=>t.evaluateSafeLink),i=(new r.b(o,t=>t.evaluateSafeLinks),new r.b(o,t=>t.isSafeLink)),u=new r.b(o,t=>t.isSafeLinkUrl)},3460:function(t,n,e){"use strict";var r=e(1738),c=e(3665),o=e(699);n.a=Object(o.action)("refreshDownloadUrl")((function(t,n,e=!1){const o=Object(r.a)(t),a=Object(c.a)(t,o.model,n,e);o.download.url=a}))},359:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},3609:function(t,n,e){"use strict";var r=e(44),c=e(5),o=e(4503),a=e(5730),i=e(2859),u=e(4884),s=e(4429),d=e(3665),l=e(4430),f=e(2206),b=e(3822),h=e(2239),m=e(40),p=e(699),O=e(1940);var g=e(2065),j=e(1822);n.a=Object(p.action)("addAndInitializeAttachments")((function(t,n,e=!1,v=!1){const I=Object(O.a)();e||(t=t.filter(t=>!I.attachments.has(t.attachment.AttachmentId.Id))),t.map(t=>{const{attachmentId:e,attachment:I,permissionInfo:y,modelInitializationValues:A}=t,w=function(t,n){const e={id:t,type:Object(g.a)(n),download:{url:null},attachmentClass:0,previewImage:{url:null},thumbnailImage:{url:null},info:{allowDownload:!1,supportedPermissionLevels:[],sharingInfo:null},model:n};if(1===e.type&&Object(j.a)(n)){return Object.assign(Object.assign({},e),{type:1,openUrl:null,originalUrl:null,isFolder:n.AttachmentIsFolder,requiresFetchingSharingInformation:!1})}return e}(e,I);return v||function(t,n,e){const g=Object(f.a)(t),j=Object(h.b)(t.model,!0),v=Object(a.a)(j,t.model);t.attachmentClass=v,t.info=Object(o.a)(j,v,t.model,g,g?t.model.ProviderType:null,n),t.info.allowDownload&&(t.download.url=Object(d.a)(t.id,t.model,!0,!0)),g&&(t.openUrl=Object(l.a)(t.model)),(g&&Object(r.j)("doc-unwrap-safelinks")?Object(s.a)(t.model):Promise.resolve(void 0)).then(n=>{if(n&&(t.originalUrl=n),g&&!e){const n=t.model,e=Object(i.a)(n.ProviderType);(null==e?void 0:e.requiresFetchingSharingInformation)&&!Object(c.k)(n.AttachLongPathName)&&(t.requiresFetchingSharingInformation=!0)}if(Object(b.a)(t.model)){const n=t.id.Id;Object(u.a)(t.id,t.model,g).then(Object(p.action)("updateAttachmentThumbnailUrl")((function(t){Object(O.a)().attachments.has(n)&&(Object(O.a)().attachments.get(n).thumbnailImage.url=t)})),t=>{m.h.warn(t)})}})}(w,y,n),function(t,n){n=n||{},Object.keys(n).forEach(e=>{n[e]&&(t[e]=n[e])})}(w,A||{}),w}).forEach(t=>{var n;const e=t.model;if(e&&!e.AttachmentOriginalUrl){const r=I.attachments.get(t.id.Id);(null===(n=null==r?void 0:r.model)||void 0===n?void 0:n.AttachmentOriginalUrl)&&(e.AttachmentOriginalUrl=r.model.AttachmentOriginalUrl)}if(e&&Object(f.b)(e)){const n=e;if(!n.AttachLongPathName){const e=I.attachments.get(t.id.Id),r=null==e?void 0:e.model;(null==r?void 0:r.AttachLongPathName)&&(n.AttachLongPathName=r.AttachLongPathName)}}I.attachments.set(t.id.Id,t)})}))},3665:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(1865),c=e(2206),o=e(2377);function a(t,n,e,a=!1){if(Object(c.b)(n))switch(n.ProviderType){case r.b:return function(t){const n=t.AttachLongPathName,e=n.lastIndexOf("?");return`${n.substring(0,e)}?dl=1`}(n)}return Object(o.a)(t,n,0,Object(c.b)(n),e,a)}},367:function(t,n,e){"use strict";function r(t,n){return Object.prototype.hasOwnProperty.call(t,n)}t.exports=function(t,n,e,o){n=n||"&",e=e||"=";var a={};if("string"!=typeof t||0===t.length)return a;var i=/\+/g;t=t.split(n);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var s=t.length;u>0&&s>u&&(s=u);for(var d=0;d<s;++d){var l,f,b,h,m=t[d].replace(i,"%20"),p=m.indexOf(e);p>=0?(l=m.substr(0,p),f=m.substr(p+1)):(l=m,f=""),b=decodeURIComponent(l),h=decodeURIComponent(f),r(a,b)?c(a[b])?a[b].push(h):a[b]=[a[b],h]:a[b]=h}return a};var c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},368:function(t,n,e){"use strict";var r=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,n,e,i){return n=n||"&",e=e||"=",null===t&&(t=void 0),"object"==typeof t?o(a(t),(function(a){var i=encodeURIComponent(r(a))+e;return c(t[a])?o(t[a],(function(t){return i+encodeURIComponent(r(t))})).join(n):i+encodeURIComponent(r(t[a]))})).join(n):i?encodeURIComponent(r(i))+e+encodeURIComponent(r(t)):""};var c=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function o(t,n){if(t.map)return t.map(n);for(var e=[],r=0;r<t.length;r++)e.push(n(t[r],r));return e}var a=Object.keys||function(t){var n=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(e);return n}},3685:function(t,n,e){"use strict";e.r(n);var r=e(3);var c=Object(r.action)("checkPendingAttachmentOperation",(t,n,e,r,c)=>({attachmentId:t,itemId:n,operationId:e,operationType:r,completeHandler:c}));function o(t){return Object.assign({__type:"CheckPendingAttachmentOperationRequest:#Exchange"},t)}var a=e(32);function i(t,n,e,r,c){const i=function(t,n,e,r){return o({ewsAttachmentId:t,itemId:n,operationId:e,operationType:r})}(t,n,e,r);return s=c,void 0===(u=i)||u.__type||(u=o(u)),Object(a.a)("CheckPendingAttachmentOperation",u,s);var u,s}var u=e(40),s=e(700),d=(Object(r.orchestrator)(c,async t=>{try{const n=t.itemId?t.itemId.mailboxInfo:t.attachmentId.mailboxInfo,e=await i(t.attachmentId?t.attachmentId.Id:null,t.itemId?t.itemId.Id:null,t.operationId,t.operationType,Object(s.a)(n));t.completeHandler(e)}catch(t){u.h.warn("checkPendingAttachmentOperationAction is failing with error: "+t)}}),e(1937)),l=e(1738),f=e(2247),b=e(7210);Object(r.orchestrator)(f.n,async t=>{if("object"==typeof t.id){const n=Object(l.a)(t.id);if(n){const e=n.model;await Object(b.a)([t.id],e.PermissionType),Object(d.a)(n.id)}}}),Object(r.mutator)(d.b,t=>{const{attachmentId:n,attachmentContentId:e}=t;Object(l.a)(n).model.ContentId=e}),Object(r.mutator)(d.c,t=>{const{attachmentId:n,isInline:e}=t;Object(l.a)(n).model.IsInline=e});var h=e(3609),m=e(699),p=Object(m.action)("setPreviewImageUrl")((function(t,n){Object(l.a)(t).previewImage.url=n})),O=e(3460),g=e(7234),j=e(1865),v=e(4207),I=e(2206),y=e(2377);async function A(t,n,e=!1){const r=Object(l.a)(t);if(Object(I.b)(r.model)&&r.model.ProviderType===j.e){const n=await async function(t){const n=await Object(v.a)(t);if(null==n)throw new Error("URL not available");return n+"2"}(r.model);p(t,n)}else if(!Object(I.b)(r.model)||r.model.ProviderType===j.h||r.model.ProviderType===j.i){const c=Object(y.a)(t,r.model,1,1===r.type,n,e);p(t,c)}}var w=e(3822),T=e(4503),x=Object(m.action)("setAttachmentInfo")((function(t,n){Object(l.a)(t).info=n}));e.d(n,"addAndInitializeAttachments",(function(){return h.a})),e.d(n,"setPreviewImageUrl",(function(){return p})),e.d(n,"refreshDownloadUrl",(function(){return O.a})),e.d(n,"refreshThumbnailImageUrl",(function(){return g.a})),e.d(n,"refreshPreviewImageUrl",(function(){return A})),e.d(n,"getAttachment",(function(){return l.a})),e.d(n,"checkPendingAttachmentOperation",(function(){return c})),e.d(n,"shouldShowImageView",(function(){return w.a})),e.d(n,"createAttachmentInfo",(function(){return T.a})),e.d(n,"setAttachmentInfo",(function(){return x}))},3822:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var r=e(2859),c=e(2034),o=e(2239),a=e(1724),i=e(1822),u=e(3664),s=e(4617);function d(t){if(!Object(o.b)(t,!0).directFileAccessEnabled&&!t.IsInline||Object(c.b)(t.AttachmentId.Id))return!1;if(t.Thumbnail)return!0;const n=Object(a.g)(t.Name,t.ContentType,!1),e=Object(a.h)(t.Name);if((Object(u.a)(t)||Object(s.a)(t))&&(n||e))return!0;if(Object(i.a)(t)){const e=Object(r.a)(t.ProviderType);if(t.AttachmentThumbnailUrl||n&&e&&e.supportImageThumbnail)return!0}return!1}},417:function(t,n,e){"use strict";class r{constructor(t,n,e){this.maxParallelTasks=t,this.taskCallback=n,this.taskDelay=e,this.taskList=[],this.numberOfTasksRunning=0}add(t){this.taskList.unshift(t),this.scheduleTask()}clear(){this.taskList.splice(0,this.taskList.length)}canRunMoreTasks(){return this.numberOfTasksRunning<this.maxParallelTasks&&this.taskList.length>0}scheduleTask(){this.canRunMoreTasks()&&setTimeout(()=>{this.tryRunTask()},this.taskDelay)}onTaskComplete(){this.numberOfTasksRunning--,this.scheduleTask()}tryRunTask(){if(this.canRunMoreTasks()){let t=this.taskList.pop();this.numberOfTasksRunning++,this.taskCallback(t).then(()=>{this.onTaskComplete()}).catch(()=>{this.onTaskComplete()}),this.scheduleTask()}}}e.d(n,"a",(function(){return r}))},4429:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(3351);async function c(t){let n,e;return(e=await r.f.import())&&(n=await e(t.AttachLongPathName)),n}},4430:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(5),c=e(1865),o=e(3078),a=e(29);function i(t){return Object(r.k)(t)?null:("/"!=(t=t.trim())[t.length-1]&&(t+="/"),t)}function u(t){let n=t.AttachLongPathName;if(Object(o.e)(t.PermissionType)||t.ProviderType!==c.i)return n;const e=Object(a.a)(),r=e.ApplicationSettings;if(null!==n&&null!==r){let t;t=i(r.VDirIsPublicProperty||e.PublicComputersDetectionEnabled&&e.SessionSettings.IsPublicComputerSession?r.ExternalSPMySiteHostURL:r.InternalSPMySiteHostURL),null!==t&&(n=function(t,n){const e=new RegExp("^(https?)\\:[\\/\\\\]{2}([\\w\\.-]+)(\\:[0-9]{1,4})?(.*)$","i"),r=e.exec(t),c=e.exec(n);let o,a,i;return r&&c&&r.length>=5&&c.length>=5&&(c[1]&&c[2]&&(i=c[1]+"://"+c[2],o=!0),c[3]&&(i+=c[3]),r[4]&&(a=!0,i+=r[4])),o&&a?i:null}(n,t))}return null!==n?n:t.AttachLongPathName}},4503:function(t,n,e){"use strict";var r=e(3078),c=e(1724),o=e(7),a=e(44);var i=e(4560),u=e(2859);function s(t,n,e,s,d,l=null){if(1===n)return{allowDownload:!1,supportedPermissionLevels:null,sharingInfo:null};const f=Object(c.b)(e.Name),b=Object(i.a)(t,e,f),h=function(t,n,e){if(!t)return null;if(e&&e.length>0)return e;const r=Object(u.a)(n);return null==r?void 0:r.supportedPermissionLevels}(s,d,Object(r.a)(l,0)),m=(p=l)&&0===p.ResultCode?(Object(a.j)("doc-attachment-referenceAttachmentExpiration")||(p.ExpirationDate=null),{getSharingInfoSucceeded:!0,blocksDownload:p.BlocksDownload,canonicalUrl:p.CanonicalUrl,canShareInternally:p.CanShareInternally,canShareExternally:p.CanShareExternally,expirationDate:p.ExpirationDate?Object(o.qc)(p.ExpirationDate):null,canRefresh:!1,shareId:p.ShareId,siteUrl:p.SiteUrl,linkType:p.Type,itemUniqueId:p.ItemUniqueId,mimeType:p.MimeType}):null;var p;return s?function(t,n,e){return{allowDownload:t,supportedPermissionLevels:n,sharingInfo:e}}(b,h,m):function(t){return{allowDownload:t,supportedPermissionLevels:null,sharingInfo:null}}(b)}e.d(n,"a",(function(){return s}))},4560:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(1822),c=e(2859),o=e(2239),a=e(44);function i(t,n,e){let i=t.level!==o.a.Block&&t.directFileAccessEnabled;return i&&Object(r.a)(n)&&(i=function(t,n){if(t.AttachLongPathName){const n=document.createElement("a");if(n.href=t.AttachLongPathName,!Object(a.j)("doc-unwrap-safelinks")&&n.host.indexOf(u,0)>0||n.search.indexOf(s,0)>0)return!1}if(function(t){const n=Object(c.a)(t);return null==n?void 0:n.supportDownload}(t.ProviderType)&&!t.AttachmentIsFolder)return".fluid"!==n&&!function(t,n){return!(t||n&&"application/onenote"!==n&&"image/png"!==n)}(n,t.ContentType);return!1}(n,e)),i}const u="safelinks.protection.outlook.com",s="b7780972f918485c8cfc32b1ba7438eb"},4884:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(1865),c=e(4207),o=e(2377);async function a(t,n,e){if(!e)return Object(o.a)(t,n,2,e,!0);const a=n;return a.ProviderType===r.e&&a.AttachLongPathName?Object(c.a)(a):a.AttachmentThumbnailUrl||null}},550:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(121),c=e(12);function o(){return Object(r.a)("acctmonaccounts")&&Object(c.i)("acctmonaccounts")}},598:function(t,n,e){"use strict";function r(t){return Object.assign({__type:"FolderId:#Exchange"},t)}e.d(n,"a",(function(){return r}))},6033:function(t,n,e){"use strict";var r=e(1937),c=e(1738),o=e(4430),a=e(44),i=e(699);n.a=Object(i.action)("setAttachmentPermissionLevel")((function(t,n,e,i){const u=Object(c.a)(t),s=u.model;s.PermissionType=n,e&&(s.AttachLongPathName=e,u.openUrl=Object(o.a)(s)),Object(a.j)("doc-attachment-referenceAttachmentExpiration")&&u.info&&u.info.sharingInfo&&(u.info.sharingInfo.expirationDate=i),Object(r.a)(t)}))},700:function(t,n,e){"use strict";function r(t,n){return t?Object.assign({mailboxInfo:t},n):null!=n?n:void 0}e.d(n,"a",(function(){return r}))},703:function(t,n,e){"use strict";var r=e(301);const c=e.n(r)()("Profile",{profileId:"",profileName:"",selectedAccountSourceId:"",accountSources:[]});n.a=c},705:function(t,n,e){"use strict";function r(t){return Object.assign({__type:"ItemResponseShape:#Exchange"},t)}e.d(n,"a",(function(){return r}))},707:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a}));var r=e(121),c=e(12);function o(){return Object(r.a)("acctmonaccounts")&&Object(c.i)("acctmonaccounts")}function a(){return o()||!Object(r.a)("acctmonaccounts")&&Object(c.i)("accountsapi")}},71:function(t,n,e){"use strict";var r=e(3);function c(t,n){return(n=n||{}).dp=t,n}function o(t,n,e){return Object(r.action)(t,(...r)=>{const o=n?n(...r):{},a=e?e(o,...r):{name:t};return a.name=a.name||t,a.options=a.options||{isCore:!0},c(a,o)})}function a(t){const{value:n,exactMatches:e=[0,1,2,3,4,5],buckets:r=[10,15,25,50,100]}=t;if(0===r.length)throw new Error("getAggregationBucket: buckets cannot be an empty array");if(e[0]&&n<e[0])return`<${e[0]}`;if(e.includes(n))return`${n}`;for(let t=0;t<r.length;t++)if(n<=r[t])return`${t>0?r[t-1]+1:e[e.length-1]+1||"0"}-${r[t]}`;return`${r[r.length-1]+1}+`}e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return a}))},7210:function(t,n,e){"use strict";var r=e(7),c=e(6033);function o(t){return Object.assign({__type:"SetAttachmentPermissionsRequest:#Exchange"},t)}var a=e(32);function i(t,n,e=null,r=!1){const c=function(t,n,e=null,r=!1){return o({AttachmentIds:t,PermissionLevel:n,NewAttachLongPathNames:e,SetToOriginalPermissionLevel:r})}(t,n,e,r);return void 0===(i={request:c}).request||i.request.__type||(i.request=o(i.request)),Object(a.a)("SetAttachmentPermissionsV2",i,u);var i,u}async function u(t,n,e=null,o=!1){const a=await i(t.map(t=>t.Id),n,e,o);if(!a.OperationSucceeded||!a.NewAttachLongPathNames||a.NewAttachLongPathNames.length!==t.length)throw new Error("Error setting attachment permissions");t.forEach((t,e)=>{var o;let i=null;(null===(o=a.ExpirationDates)||void 0===o?void 0:o[e])&&(i=Object(r.qc)(a.ExpirationDates[e])),Object(c.a)(t,n,a.NewAttachLongPathNames[e],i)})}e.d(n,"a",(function(){return u}))},914:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(703);function c(t){const n=Object(r.a)().accountSources.filter(n=>{var e;return(null===(e=n.mailbox)||void 0===e?void 0:e.emailAddress)===t});if(n.length>1)throw new Error("Found "+n.length+" duplicated accounts with same email address: "+t);return 1===n.length?n[0].id:null}},946:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(40),c=e(703);function o(t){const n=Object(c.a)().accountSources.filter(n=>n.id===t);if(1===n.length)return n[0];n.length>1&&r.h.warn("Found more than one account with the same source id")}},956:function(t,n,e){"use strict";function r(t,n){if(!t)throw new Error(n||"Assertion failed")}e.d(n,"a",(function(){return r}))},972:function(t,n,e){"use strict";function r(t){return Object.assign({__type:"FindItemJsonRequest:#Exchange"},t)}e.d(n,"a",(function(){return r}))}}]);
//# sourceMappingURL=owa.634.js.map
self.scriptsLoaded['owa.634.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.634.js'] = (new Date()).getTime();