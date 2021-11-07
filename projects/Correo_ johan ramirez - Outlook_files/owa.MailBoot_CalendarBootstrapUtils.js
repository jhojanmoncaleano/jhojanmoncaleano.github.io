self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailBoot~CalendarBootstrapUtils.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[397],{1049:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(32),o=e(1054);function c(t,n){return void 0===t||t.__type||(t=Object(o.a)(t)),Object(r.a)("GetUserUnifiedGroups",t,n)}},1050:function(t,n,e){"use strict";function r(t){return Object.assign({__type:"GetUserUnifiedGroupsRequest:#Exchange"},t)}e.d(n,"a",(function(){return r}))},1054:function(t,n,e){"use strict";function r(t){return Object.assign({__type:"GetUserUnifiedGroupsJsonRequest:#Exchange"},t)}e.d(n,"a",(function(){return r}))},1057:function(t,n,e){"use strict";var r=e(3),o=Object(r.createStore)("calendarAccountInitializationStateStore",{isAllCalendarAccountsAndCacheLoaded:!1});const c=Object(r.action)("allCalendarAccountsAndCacheLoaded",(t,n)=>({isSuccess:t,userIdentity:n})),a=Object(r.action)("removedConnectedAccountIdCleanup");function u(){return o().isAllCalendarAccountsAndCacheLoaded}Object(r.mutator)(c,t=>{t.isSuccess&&(o().isAllCalendarAccountsAndCacheLoaded=!0)}),e.d(n,"a",(function(){return c})),e.d(n,"c",(function(){return a})),e.d(n,"b",(function(){return u}))},1064:function(t,n,e){"use strict";e.d(n,"c",(function(){return c})),e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return u}));var r=e(20);const o=new r.c(()=>Promise.all([e.e(1),e.e(2),e.e(3),e.e(18),e.e(30),e.e(683)]).then(e.bind(null,1592))),c=new r.a(o,t=>t.initializeSelectedTeamsCalendars),a=new r.a(o,t=>t.getSelectedTeamsCalendars),u=new r.a(o,t=>t.createCalendarCacheInfoFromTeamsChannel)},1065:function(t,n,e){"use strict";var r=e(61),o=e(129);const c="Groups";var a=e(209),u=e(245),i=e(700),d=e(1049),s=e(1050),l=e(1067),f=e(5);async function b(t){const n=await async function(t){let n=[];n.push({FilterType:1,SortType:4,SortDirection:"Descending"}),n.push({FilterType:2,SortType:4,SortDirection:"Descending"});const e=Object(u.b)();e.RequestServerVersion="V2018_01_08";const r=Object(i.a)(Object(a.d)(t));return await Object(d.a)({Header:e,Body:Object(s.a)({RequestedGroupsSets:n})},r)}(t);return null!=n&&n.Body.GroupsSets&&n.Body.GroupsSets.length>0?function(t,n){const e=[],r=Object(o.r)(n,c);if(t.forEach(t=>{t.Groups.forEach(t=>{var o;let c=t.SmtpAddress.toLowerCase(),a={calendarId:{id:c,mailboxInfo:{type:"GroupMailbox",userIdentity:n,mailboxSmtpAddress:c}},CalendarColor:-1,CalendarName:t.DisplayName,OwnerEmailAddress:c,OwnerName:t.DisplayName,IsGroupMailboxCalendar:!0,IsGeneralScheduleCalendar:!0,ParentGroupId:r,CanShare:!1,__typename:"LinkedCalendarEntry"};e.push({entry:a,groupMailboxGuid:null===(o=t.MailboxGuid)||void 0===o?void 0:o.toLowerCase()})})}),e.length>0){const t={calendarGroupId:{id:r,mailboxInfo:{type:"GroupMailbox",userIdentity:n,mailboxSmtpAddress:n}},serverGroupId:r,GroupName:Object(f.b)(l.a),GroupType:3};return{groupCalendars:e,calendarGroup:t}}return null}(n.Body.GroupsSets,t):null}var I=e(223);var O=e(283);async function m(t){const n=await b(t),e=Object(O.a)(t)?function(t){var n;let e=Object(o.k)().filter(t=>Object(I.m)(t));if(0==e.length)return t;const r=[];for(let o=0;o<(null===(n=null==t?void 0:t.groupCalendars)||void 0===n?void 0:n.length);o++){const n=t.groupCalendars[o];e.some(t=>{var e,r;const o=t;return(null===(e=o.OwnerEmailAddress)||void 0===e?void 0:e.toLowerCase())===n.entry.calendarId.mailboxInfo.mailboxSmtpAddress&&(null===(r=o.SharedOwnerMailboxGuid)||void 0===r?void 0:r.toLowerCase())===n.groupMailboxGuid})||r.push(n)}return(null==r?void 0:r.length)>0?{groupCalendars:r,calendarGroup:t.calendarGroup}:null}(n):n;return null!=e&&null!=e.groupCalendars?(e.groupCalendars.forEach(t=>{Object(o.b)(t.entry)}),Object(o.a)(e.calendarGroup),{group:e.calendarGroup}):null}var p=e(49);async function j(t,n){var e;const u=new r.b("initializeGroupCalendars");t||(t=Object(a.d)().userIdentity);const i=!!(null===(e=Object(p.h)(t))||void 0===e?void 0:e.GroupsEnabled),d=Object(o.r)(t,c),s=!Object(o.t)().some(n=>n.serverGroupId===d&&n.calendarGroupId.mailboxInfo.userIdentity===t),l=i&&(n||s);u.addCustomData({issueServiceCall:l,GroupsEnabled:i,featureEnabled:!0,refresh:n,initialLoad:s});try{l&&await m(t),u.end()}catch(t){throw u.endWithError("ServerError",Error(t)),t}}e.d(n,"b",(function(){return j})),e.d(n,"a",(function(){return c}))},1067:function(t){t.exports=JSON.parse('{"a":"Via"}')},1075:function(t,n,e){"use strict";let r;function o(t){return r=null==t?void 0:t.getCalendarFolders,t}function c(){let t=r;return r=void 0,t}e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return c}))},1888:function(t,n,e){"use strict";var r=e(223);function o(t,n){return!t.some(t=>{var e,o;return t&&n&&(null===(e=Object(r.j)(t))||void 0===e?void 0:e.Id)===(null===(o=Object(r.j)(n))||void 0===o?void 0:o.Id)})}function c(t,n){return t.indexOf(n)<0}function a(t,n=c){if(!t)return[];const e=[];return t&&t.forEach(t=>{n(e,t)&&e.push(t)}),e}var u=e(14);function i(t,n=c){if(!t)return t;const e=new u.ObservableMap;return t.forEach((t,r)=>{e.set(r,a(t,n))}),e}function d(t,n=c){if(!t)return[];const e=[];return t.forEach(t=>{t&&t.forEach(t=>{n(e,t)&&e.push(t)})}),e}e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return d}))},2038:function(t,n,e){"use strict";var r;!function(t){t.EwsId="ews",t.EwsImmutableId="ewsimmutable"}(r||(r={}));var o=e(44),c=e(3),a=Object(c.createStore)("immutableId",{IsImmutableIdFeatureOnForConnectedAccount:!1});var u=e(272);function i(t){return Object(u.r)(t)?a().IsImmutableIdFeatureOnForConnectedAccount?r.EwsImmutableId:r.EwsId:Object(o.j)("fwk-immutable-ids")?r.EwsImmutableId:r.EwsId}function d(t){const n=[],e=[],r=[];return null==t||t.forEach((t,o)=>{"string"==typeof t&&(t.indexOf("@")>-1?r.push({id:t,idx:o}):!function(t){return!!t&&t.length<90}(t)?e.push({id:t,idx:o}):n.push({id:t,idx:o}))}),[n,e,r]}function s(t,n){const[e,o]=d(t),c=i(n);return c===r.EwsImmutableId&&o.length>0||c===r.EwsId&&e.length>0}const l=Object(c.mutatorAction)("setIsImmutableIdFeatureOnForConnectedAccount",t=>{a().IsImmutableIdFeatureOnForConnectedAccount=t});e.d(n,"b",(function(){return i})),e.d(n,"d",(function(){return d})),e.d(n,"c",(function(){return s})),e.d(n,"e",(function(){return l})),e.d(n,"a",(function(){return r}))},2190:function(t,n,e){"use strict";var r,o=e(4);!function(t){t.SelectedCalendars="SelectedCalendars",t.MyDay="MyDay",t.SavedCalendarViews="SavedCalendarViews",t.BoardCalendarAsset="BoardCalendarAsset",t.Spotlight="Spotlight",t.CalendarWidget="CalendarWidget",t.Addins="Addins",t.ActivityFeed="ActivityFeed",t.ReadingPane="ReadingPane",t.SXSAttachments="SXSAttachments",t.BoardMailItem="BoardMailItem"}(r||(r={})),e.d(n,"b",(function(){return u})),e.d(n,"e",(function(){return i})),e.d(n,"c",(function(){return d})),e.d(n,"d",(function(){return s})),e.d(n,"a",(function(){return r}));const c=new o.d(()=>e.e(1043).then(e.bind(null,19314))),a=(t,n)=>{const e=new o.a(t,n);return(...t)=>e.importAndExecute(...t)},u=a(c,t=>t.convertIdsToTargetFormat),i=a(c,t=>t.translateRestImmutableIdsToEwsIds),d=a(c,t=>t.translateEwsIdsToEwsImmutableIds),s=a(c,t=>t.translateEwsIdsToRestImmutableIds);a(c,t=>t.translateEwsImmutableIdsToEwsIds)},223:function(t,n,e){"use strict";const r="LinkedCalendarEntry",o="LocalCacheForRemoteCalendarEntry";function c(t){return(null==t?void 0:t.__typename)==r}function a(t){return(null==t?void 0:t.__typename)==o}function u(t){return(null==t?void 0:t.__typename)==r&&!(null==t?void 0:t.IsGroupMailboxCalendar)}function i(t){var n;return(null===(n=t)||void 0===n?void 0:n.CanViewPrivateItems)||c(t)}const d="_CHANNELTEAMSTYPE_";function s(t){return t.split(d)[0]}function l(t,n){return[t,n].join(d)}function f(t){if(t.FolderId)return t.FolderId;let n=t;return n.IsGeneralScheduleCalendar?{Id:n.OwnerEmailAddress,ChangeKey:""}:n.SharedFolderId?{Id:n.SharedFolderId.Id,ChangeKey:null!=n.SharedFolderId.ChangeKey?n.SharedFolderId.ChangeKey:""}:null}function b(t){return t&&!!t.ProviderId}function I(t){return t&&(null==t.IsRemovable||t.IsRemovable)&&(null==t.CalendarFolderType||3!=t.CalendarFolderType)&&!t.IsGroupMailboxCalendar}function O(t){return t&&I(t)&&!c(t)&&(!t.FolderId||!b(t))}function m(t){return t&&!t.IsGroupMailboxCalendar}function p(t){return t&&void 0!==t.FolderId}function j(t){return O(t)||m(t)||p(t)}e.d(n,"l",(function(){return c})),e.d(n,"m",(function(){return a})),e.d(n,"n",(function(){return u})),e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return"LocalCalendarEntry"})),e.d(n,"h",(function(){return i})),e.d(n,"i",(function(){return s})),e.d(n,"o",(function(){return l})),e.d(n,"j",(function(){return f})),e.d(n,"e",(function(){return I})),e.d(n,"g",(function(){return O})),e.d(n,"d",(function(){return m})),e.d(n,"c",(function(){return p})),e.d(n,"f",(function(){return j})),e.d(n,"k",(function(){return b}))},2340:function(t,n,e){"use strict";var r=e(3);const o=Object(r.action)("UPDATE_SELECTED_CALENDARS_IN_STORE",(t,n)=>({calendarIds:t,userIdentity:n})),c=Object(r.action)("ADD_SELECTED_CALENDAR_IN_STORE",(t,n)=>({calendarId:t,userIdentity:n})),a=Object(r.action)("FORMAT_INITIAL_SELECTED_CALENDARS",(t,n)=>({ids:t,userIdentity:n}));const u={selectedCalendars:new(e(14).ObservableMap)},i=Object(r.createStore)("selectedCalendarsStore",u);var d=e(1888);function s(){return Object(d.c)(i().selectedCalendars)}function l(){return Object(d.d)(s())}function f(t){const n=s().get(t);return n||[]}Object(r.mutator)(o,t=>{const{calendarIds:n,userIdentity:e}=t;i().selectedCalendars.set(e,Object(d.b)(n))}),Object(r.mutator)(c,t=>{const{calendarId:n,userIdentity:e}=t;i().selectedCalendars.set(e,Object(d.b)([...f(e),n]))});const b=Object(r.action)("UPDATE_SELECTED_CALENDARS",(t,n)=>({calendarIds:t,userIdentity:n})),I=Object(r.action)("ADD_SELECTED_CALENDAR",(t,n)=>({calendarId:t,userIdentity:n})),O=(Object(r.action)("INITIALIZE_SELECTED_CALENDARS",(t,n)=>({calendarIds:t,userIdentity:n})),Object(r.action)("SELECTED_CALENDARS_UPDATED",(t,n)=>({calendarIds:t,userIdentity:n}))),m=Object(r.action)("REFRESH_IMMUTABLE_SELECTED_CALENDARS",t=>({userIdentity:t}));var p=e(209),j=e(40),v=e(49),C=e(700);const y="OWA.ViewStateConfiguration";function A(t,n){t&&v.u.importAndExecute([{key:"SelectedCalendarsDesktop",valuetype:"StringArray",value:Object(d.b)(t)}],y,Object(C.a)(Object(p.d)(n))).catch(t=>{j.h.warn("Could not save new selected calendars list to user configuration")})}Object(r.orchestrator)(b,t=>{const{calendarIds:n,userIdentity:e}=t;o(n,e),O(n,e),A(n,e)}),Object(r.orchestrator)(I,t=>{const{calendarId:n,userIdentity:e}=t;c(n,e);const r=f(e);O(r,e),A(r,e)});var E=e(2038);Object(r.orchestrator)(v.z,t=>{const{userConfiguration:n,userIdentity:e}=t;let r=n.ViewStateConfiguration.SelectedCalendarsDesktop;const c=e||Object(p.d)().userIdentity;Object(E.c)(r,c)?a(r,c):(o(r,c),O(r,c))});var h=e(2190);function S(t){return t?function(t){let n=s().get(t);return n?n.length:0}(t):function(){let t=s(),n=0;return t.forEach((t,e)=>{t&&(n+=t.length)}),n}()}function w(t){return!!i().selectedCalendars.get(t)}Object(r.orchestrator)(a,async t=>{const{ids:n,userIdentity:e}=t,r=await Object(h.b)(n,Object(E.b)(e),e,h.a.SelectedCalendars);b(r,e),m(e)}),e.d(n,"i",(function(){return b})),e.d(n,"a",(function(){return I})),e.d(n,"h",(function(){return O})),e.d(n,"g",(function(){return m})),e.d(n,"e",(function(){return f})),e.d(n,"c",(function(){return S})),e.d(n,"b",(function(){return s})),e.d(n,"d",(function(){return l})),e.d(n,"f",(function(){return w}))},571:function(t,n,e){"use strict";function r(t,n,e){return null==t?null:Object.assign({__typename:n},e?e(t):t)}function o(t,n,e){return(null==t?void 0:t.map(t=>r(t,n,e)))||null}e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o}))},598:function(t,n,e){"use strict";function r(t){return Object.assign({__type:"FolderId:#Exchange"},t)}e.d(n,"a",(function(){return r}))},620:function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"d",(function(){return d}));var r=e(809);e.d(n,"f",(function(){return r.c})),e.d(n,"e",(function(){return r.b}));var o=e(991);e.d(n,"a",(function(){return o.a}));var c=e(20);const a=new c.c(()=>Promise.all([e.e(9),e.e(10),e.e(12),e.e(13),e.e(583)]).then(e.bind(null,1588))),u=new c.a(a,t=>t.initializeOwaAccountsStore),i=new c.a(a,t=>t.initializeOwaConnectedAccount),d=new c.a(a,t=>t.removeOWAConnectedAccount)},6234:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c}));var r=e(20);const o=new r.c(()=>e.e(1283).then(e.bind(null,11109)).then(t=>(t.initialize(),t)));let c=new r.a(o,t=>t.tryAutoSelect)},700:function(t,n,e){"use strict";function r(t,n){return t?Object.assign({mailboxInfo:t},n):null!=n?n:void 0}e.d(n,"a",(function(){return r}))},7229:function(t,n,e){"use strict";e.r(n);var r=e(833),o=e(3),c=e(2340),a=e(209),u=e(129),i=e(1047);Object(o.orchestrator)(r.c,async t=>{const{userId:n}=t,e=Object(c.e)(n||Object(a.d)().userIdentity);await Promise.all(e.filter(t=>Object(u.d)(t)&&Object(u.c)(t)).map(i.c))});var d=e(7421),s=e(9085);e.d(n,"initializeAccountAndCalendars",(function(){return d.a})),e.d(n,"initializeCalendarsDataForModule",(function(){return s.a}))},7421:function(t,n,e){"use strict";e.d(n,"a",(function(){return d}));var r=e(49),o=e(833),c=e(620),a=e(44),u=e(121),i=e(272);async function d(){await Object(o.e)();const t=Object(r.g)();Object(a.h)("cal-multiAccounts",()=>{var n,e;(Object(u.a)("multiAccounts")&&!Object(r.r)()&&!(null===(n=null==t?void 0:t.SessionSettings)||void 0===n?void 0:n.IsExplicitLogon)&&(null===(e=null==t?void 0:t.PolicySettings)||void 0===e?void 0:e.PersonalAccountCalendarsEnabled)||Object(i.s)())&&c.b.importAndExecute()})}},807:function(t,n,e){"use strict";function r(t={}){!function(t){t.timeBetweenRetryInMS=t.timeBetweenRetryInMS||(()=>6e4)}(t);const{maximumAttempts:n,timeBetweenRetryInMS:e}=t;return t=>{let r=0,o=!1;const c=(a,u)=>{o?u(new Error("The function retry was cancelled")):(r++,t().then(t=>a(t)).catch(t=>{n&&r>=n?u(t):setTimeout(()=>c(a,u),e(r))}))};return{retriableFunc:()=>new Promise((t,n)=>c(t,n)),cancel:()=>o=!0}}}function o(t){return n=>Math.pow(2,n)*t}e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o}))},809:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return a})),e.d(n,"b",(function(){return u}));var r=e(3);const o=Object(r.action)("initializeOwaAccountsStore"),c=Object(r.action)("owaConnectedAccountAdded",(t,n,e)=>({userIdentity:t,accountProviderType:n,source:e})),a=Object(r.action)("removeAccount",t=>({userIdentity:t})),u=Object(r.action)("owaAccountStoreInitializationFailed",(t,n,e,r)=>({userIdentity:t,isRetry:n,accountProvider:e,error:r}))},833:function(t,n,e){"use strict";var r=e(3),o=e(14);var c,a=Object(r.createStore)("cacheLoaderStore",{calendarAccountLoadMap:new o.ObservableMap({})});!function(t){t[t.Outlook=0]="Outlook",t[t.OutlookGroup=1]="OutlookGroup",t[t.TeamsCalendars=2]="TeamsCalendars"}(c||(c={}));var u=e(266),i=e(209);function d(t,n){switch(t){case c.Outlook:case c.OutlookGroup:return(n||Object(i.d)().userIdentity)+t.toString();case c.TeamsCalendars:return t.toString();default:return Object(u.a)(t)}}var s,l=e(49),f=e(44);function b(t,n){var e;const r=d(t,n);return(null===(e=a().calendarAccountLoadMap.get(r))||void 0===e?void 0:e.loadState)==s.Loaded}function I(t){return function(t){if(t&&t!==Object(l.b)()){const t=[c.Outlook];return Object(f.j)("cal-multiAccounts-groups")&&t.push(c.OutlookGroup),t}return[c.Outlook,c.OutlookGroup,c.TeamsCalendars]}(t).every(n=>b(n,t))}!function(t){t[t.Loading=0]="Loading",t[t.Loaded=1]="Loaded",t[t.Error=2]="Error"}(s||(s={}));const O=Object(r.mutatorAction)("addToAccounts",(t,n,e,r)=>{const o=a(),c={calendarEndpointType:e,userId:n,loadState:r};o.calendarAccountLoadMap.has(t)||o.calendarAccountLoadMap.set(t,c)}),m=Object(r.mutatorAction)("updateAccountLoadState",(t,n)=>{const e=a(),r=e.calendarAccountLoadMap.get(t);r.loadState=n,e.calendarAccountLoadMap.set(t,r)});var p=e(620),j=e(40);const v=Object(r.action)("calendarCacheInitializedForAccount",(t,n,e)=>({calendarEndpointType:t,userId:n,source:e}));var C=e(1047),y=e(1065),A=e(1064);var E=e(807);const h=Object(E.b)({maximumAttempts:3,timeBetweenRetryInMS:Object(E.a)(1e3)});var S=e(272),w=e(1057);const g={};function L(t,n){const e=n?n.userIdentity:Object(i.d)().userIdentity,r=Object(S.r)(e),o=d(t,e);if(O(o,e,t,s.Loading),b(t,e))return Promise.resolve();const a=g[o];if(a)return a.requestPromise;const l=h(()=>(async function(t,n){switch(t){case c.Outlook:await Object(C.f)(n);break;case c.OutlookGroup:await Object(y.b)(n);break;case c.TeamsCalendars:Object(f.j)("cal-showAddTeamsCalendars")&&await A.c.importAndExecute();break;default:Object(u.a)(t)}})(t,e)).retriableFunc();return g[o]={requestPromise:l},l.then(()=>{m(o,s.Loaded),v(t,e,null==n?void 0:n.source),r&&I(e)&&Object(w.a)(!0,e)}).catch(t=>{m(o,s.Error),j.d("initializeCalendarsCacheForAccount: failed to initialize calendar cache",t)})}async function G(){const t=L(c.Outlook),n=Object(S.n)().map(t=>{if(Object(l.h)(t.userIdentity)){const n={userIdentity:t.userIdentity,source:p.a.Init};L(c.Outlook,n)}});let e=[t,L(c.OutlookGroup),...n,L(c.TeamsCalendars)];if(Object(f.j)("cal-multiAccounts-groups")){const t=Object(S.n)().map(t=>{if(Object(l.h)(t.userIdentity)){const n={userIdentity:t.userIdentity,source:p.a.Init};L(c.OutlookGroup,n)}});e=e.concat(t)}await Promise.all(e)}function T(t,n){const{calendarAccountLoadMap:e}=a(),r=d(n,t);return e.get(r).loadState}Object(r.orchestrator)(p.f,t=>{const{userIdentity:n,source:e}=t,r={userIdentity:n,source:e};L(c.Outlook,r),Object(f.j)("cal-multiAccounts-groups")&&L(c.OutlookGroup,r)}),e.d(n,"g",(function(){return b})),e.d(n,"b",(function(){return I})),e.d(n,"f",(function(){return L})),e.d(n,"a",(function(){return c})),e.d(n,"c",(function(){return v})),e.d(n,"e",(function(){return G})),e.d(n,"d",(function(){return T}))},9085:function(t,n,e){"use strict";var r=e(6234),o=e(7421),c=e(20);const a=new c.c(()=>e.e(834).then(e.bind(null,19485))),u=new c.a(a,t=>t.loadWorkloadScenarioSettings);e.d(n,"a",(function(){return d}));let i=!1;async function d(){if(i)return;i=!0;const t=[Object(o.a)(),u.importAndExecute()];r.a.import(),await Promise.all(t)}},991:function(t,n,e){"use strict";var r;e.d(n,"a",(function(){return r})),function(t){t[t.Add=0]="Add",t[t.Init=1]="Init"}(r||(r={}))}}]);
//# sourceMappingURL=owa.MailBoot~CalendarBootstrapUtils.js.map
self.scriptsLoaded['owa.MailBoot~CalendarBootstrapUtils.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailBoot~CalendarBootstrapUtils.js'] = (new Date()).getTime();