self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.14.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[14],{2027:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return b})),n.d(t,"j",(function(){return p})),n.d(t,"i",(function(){return f}));var o=n(20);const r=new o.c(()=>n.e(917).then(n.bind(null,18641))),a=new o.a(r,e=>e.getTopicDefinition),i=new o.a(r,e=>e.getTopicAnnotations),s=new o.a(r,e=>e.getMyTopics),c=new o.a(r,e=>e.getTopicsByName),u=new o.a(r,e=>e.getTopicsByPrefix),d=new o.a(r,e=>e.logEvent),l=new o.a(r,e=>e.getTopicsSdkAsync),b=new o.a(r,e=>e.addTopicHighlight),p=new o.a(r,e=>e.updateIsTopicHighlightsEnabled),f=new o.a(r,e=>e.removeTopicHighlightsByItemId);new o.a(r,e=>e.removeTopicHighlightByTopicId)},2122:function(e,t,n){"use strict";var o=n(61),r=n(2),a=n(44),i=n(121),s=n(5),c=n(1869),u=n(9201);const d="left=0,top=0,height=600,width=800,location=0,menubar=0,resizable=1,scrollbars=0,status=0,toolbar=0";function l(e,t){let n=e;t&&(n=n.replace("gulp&","").replace("gulp",""));const o=window.open(n||"about:blank","Deeplink",d);o&&t&&(o.opener=null)}var b=n(8364),p=n(921),f=n(6),g=n(8365),m=n(210);function j(e,t){if(t){const n=t.displayName?t.displayName+"<"+t.smtpAddress+">":t.smtpAddress;return e?"&"+e+"="+n:n}return""}function O(e,t){return t?"&"+e+"="+t:""}function v(e){var t;if(!(null===(t=e.to)||void 0===t?void 0:t.smtpAddress)){if(e.subject&&e.body){const t=Object(f.d)();return delete t.mailtouri,t.subject=e.subject,t.body=e.body,Object(g.a)(b.c,b.a,"?"+m.stringify(t))}return""}const n=Object(f.d)();return delete n.subject,delete n.body,n.mailtouri=function(e){var t;if(!(null===(t=e.to)||void 0===t?void 0:t.smtpAddress))return"";const n="mailto:"+j(null,e.to);let o="";return o+=j("cc",e.cc),o+=j("bcc",e.bcc),o+=O("subject",e.subject),o+=O("body",e.body),o?n+"?"+o.slice(1):n}(e),Object(g.a)(b.c,b.a,"?"+m.stringify(n))}var h=n(57),P=n(283),C=n(2027),w=n(40),I=n(1700),y=n(3);const S=Object(y.action)("onAcceptingMeeting",(e,t)=>({meetingId:e,respondToSeries:t})),U=Object(y.action)("onTentativelyAcceptingMeeting",(e,t)=>({meetingId:e,respondToSeries:t})),A=Object(y.action)("onDecliningMeeting",(e,t)=>({meetingId:e,respondToSeries:t})),T=Object(y.action)("onCancelingMeeting",(e,t)=>({meetingId:e,respondToSeries:t})),M=Object(y.action)("onDeletingMeeting",(e,t)=>({meetingId:e,respondToSeries:t})),B=Object(y.action)("onMeetingResponseActionFailed",(e,t,n,o)=>({meetingId:e,originalMeetingResponse:t,error:n,meetingResponseActionParams:o})),k=Object(y.action)("onMeetingResponseActionSucceeded",(e,t,n)=>({meetingId:e,originalMeetingResponse:t,meetingResponseActionParams:n})),F=Object(y.action)("joinOnlineMeeting",(e,t)=>({meetingId:e,joinOnlineMeetingParams:t})),R=Object(y.action)("editMeeting",(e,t)=>({meetingId:e,editMeetingParams:t})),L=Object(y.action)("onMeetingInfoRequested",(e,t)=>({personaId:e,successCallback:t})),E=Object(y.action)("openMeeting",e=>({meetingId:e}));var G=n(7227),D=n(6799),N=n(245),x=n(2152),_=n(1705),H=n(1776),q=n(1825);function $(e){const t=Object(H.a)({BaseFolderId:Object(q.a)({Id:"contacts"})}),n=Object(D.a)({PersonaId:null,PersonTypeString:"Person",PropertyUpdates:[],ParentFolderId:t});return e&&e.length>0&&e.forEach(e=>{n.PropertyUpdates.push(Object(x.a)({Path:Object(_.a)({FieldURI:e.name}),OldValue:e.oldValue,NewValue:e.newValue}))}),n}function z(e){return Object(G.a)({request:{Header:Object(N.b)(),Body:$(e)}})}var V=n(2223),W=n(1895);function X(e){return Object(V.a)({getNotesForPersonaRequest:Object(W.a)({PersonaId:e,MaxBytesToFetch:512e3})}).then(e=>e.PersonaWithNotes)}var J=n(1883),K=n(910),Y=n(1875);function Q(e){const t=Object(J.a)({PersonaId:Object(K.a)({Id:e})});return Object(Y.a)({Header:Object(N.b)(),Body:t}).then(e=>{if(e.Body&&"NoError"===e.Body.ResponseCode)return e.Body.Persona;throw new Error("GetPersona failed")})}var Z=n(2153),ee=n(7228),te=n(6800);function ne(e,t){const n=Object(te.a)({PersonaId:Object(K.a)({Id:e}),PersonTypeString:"Person",PropertyUpdates:[]});return t&&t.length>0&&t.forEach(e=>{e.newValue!==e.oldValue&&n.PropertyUpdates.push(Object(x.a)({Path:Object(_.a)({FieldURI:e.name}),OldValue:e.oldValue,NewValue:e.newValue}))}),n}function oe(e,t){return Object(ee.a)({request:{Header:Object(N.b)(),Body:ne(e,t)}})}var re=n(2135),ae=n(312);const ie="ows/api/beta/subscriptions/brands/{0}";async function se(e,t,n){w.h.info(`[getBrandUnsubscribeInfo] targetBrandSatoriId: ${t}`);const o=Object(s.c)(ie,t);try{let e=await Object(ae.b)(o);if(null==e?void 0:e.subscriptions){n(e.subscriptions.map(e=>{let t=e.brand?e.brand.brandName:e.smtpInfo.displayName;return{smtp:e.smtpInfo.smtpAddress,smtpIdentifier:e.smtpInfo.smtpIdentifier,smtpDisplayName:t,unsubscribeSilentUri:e.unsubscribeSilentUris,unsubscribeHttpUri:e.unsubscribeHttpUris}}),void 0)}else n(void 0,"Call to get brand info returned empty response")}catch(e){w.h.info("[getBrandUnsubscribeInfo] exception from network request: "+e),n(void 0,e)}}var ce=n(3946);function ue(e,t,n){w.h.info("[unsubscribeFromBrand] target brand smtp identifier: "+t.smtpIdentifier),Object(ce.e)("BrandCard",t.smtp,t.smtpIdentifier,t.unsubscribeSilentUri,t.unsubscribeHttpUri[0],n)}var de=n(1811),le=n(2022),be=n(1732),pe=n(3987),fe=n(391);function ge(e,t,n){const o=Object(de.a)(e.Smtp);let r={};Object(pe.a)().then(a=>{a&&(r={Authorization:Object(fe.buildAuthorizationHeader)(a),"X-AnchorMailbox":e.Smtp});const i="Group"==e.PersonaType?"GroupMailbox":void 0;t(o?Object(le.b)(o,i,be.c.regular):Object(le.a)(e.Smtp,e.OlsPersonaId,i,"largeRounded"===n),!1,r)})}function me(e,t){return S(e,t),{onSuccess:k,onFailure:B}}function je(e,t){return U(e,t),{onSuccess:k,onFailure:B}}function Oe(e,t){return A(e,t),{onSuccess:k,onFailure:B}}function ve(e,t){return T(e,t),{onSuccess:k,onFailure:B}}function he(e,t){return M(e,t),{onSuccess:k,onFailure:B}}function Pe(e,t){F(e,t)}function Ce(e,t){R(e,t)}var we=n(5300);async function Ie(e){let t={};try{const e=Object(I.c)(),n=2===e||Object(i.a)("skipAwaitLpcConfig");262144!==e&&n||(t=await Object(re.a)())}catch(e){Object(o.o)("LpcCallbacksWereNotInitialized")}return Object(c.initializeLivePersonaCardAsync)(function(e,t){const n=function(e,t){var n,o;const r={readMail:ye,composeMail:Se(e,t),meetingActionCallbacks:{onAcceptingMeeting:me,onTentativelyAcceptingMeeting:je,onDecliningMeeting:Oe,onCancelingMeeting:ve,onDeletingMeeting:he,joinOnlineMeeting:Pe,editMeeting:Ce},onPersonaUpdated:we.a,openMeeting:ke};Object(a.j)("rp-brandCardsUnsubscribe")&&(r.unsubscribeFromBrand=ue);(Object(a.j)("csi-owa-topics-mvp")||Object(a.j)("csi-owa-topics-mvp-preview"))&&(r.removeTopicHighlight=Be);if(e.actionCallbacks){e.actionCallbacks.favoritePersona&&(r.favoritePersona=e.actionCallbacks.favoritePersona),e.actionCallbacks.unfavoritePersona&&(r.unfavoritePersona=e.actionCallbacks.unfavoritePersona),e.actionCallbacks.readMail&&(r.readMail=e.actionCallbacks.readMail),e.actionCallbacks.toggleSubscribeToGroup&&(r.toggleSubscribeToGroup=e.actionCallbacks.toggleSubscribeToGroup),e.actionCallbacks.editGroup&&(r.editGroup=e.actionCallbacks.editGroup),e.actionCallbacks.addGroupMembers&&(r.addGroupMembers=e.actionCallbacks.addGroupMembers),e.actionCallbacks.updateMembership&&(r.updateMembership=e.actionCallbacks.updateMembership);const t=null===(o=(n=e.actionCallbacks).getStartChatCallback)||void 0===o?void 0:o.call(n);t&&(r.startChat=t)}return r}(e,t),i=function(e){var t,n;const o={getAndPrefetchPersonaImageUri:ge,getPersonaInfo:Ae};(null===(t=e.dataCallbacks)||void 0===t?void 0:t.getIsPersonaFavorited)&&(o.getIsPersonaFavorited=e.dataCallbacks.getIsPersonaFavorited);Object(a.j)("rp-brandCardsUnsubscribe")&&(o.getBrandUnsubscribeInfo=se);(null===(n=e.dataCallbacks)||void 0===n?void 0:n.getPresence)&&(o.getPresence=e.dataCallbacks.getPresence);(Object(a.j)("csi-owa-topics-mvp")||Object(a.j)("csi-owa-topics-mvp-preview"))&&(o.getTopicPageData=Te);!Object(a.j)("csi-owa-topics-mvp")&&!Object(a.j)("csi-owa-topics-mvp-preview")||Object(a.j)("csi-gettopicdata")||(o.getTopicData=Me,o.getTopicDataAsync=e=>C.d.importAndExecute(e.TopicId));return o}(e),d={updateOwsPersona:oe,getOwsPersona:Q,getOwsPersonaByEmailAddress:Z.a,getNotesForPersona:X,createOwsPersona:z},l=function(e){const t={};if(!e.dataUpdateBroadcaster)return t;e.dataUpdateBroadcaster.setGroupUpdateListener&&(t.setGroupUpdateListener=e.dataUpdateBroadcaster.setGroupUpdateListener);e.dataUpdateBroadcaster.setGroupMembersUpdateListener&&(t.setGroupMembersUpdateListener=e.dataUpdateBroadcaster.setGroupMembersUpdateListener);e.dataUpdateBroadcaster.setGroupDeleteListener&&(t.setGroupDeleteListener=e.dataUpdateBroadcaster.setGroupDeleteListener);e.dataUpdateBroadcaster.updatePopupStateListener&&(t.updatePopupStateListener=e.dataUpdateBroadcaster.updatePopupStateListener);e.dataUpdateBroadcaster.setGroupUpdateSmtpListener&&(t.setGroupUpdateSmtpListener=e.dataUpdateBroadcaster.setGroupUpdateSmtpListener);return t}(e);!function(){if(c.isLokiInitialized)return;const e=Object(P.a)(),t=Object(s.e)(),n=h.a.userConfiguration.SessionSettings.TenantGuid,i=Object(r.M)(),u=Object(a.j)("peo-lokiDogfood");Object(c.initializeLoki)({culture:t,isConsumer:e,useDogfood:u,logger:(e,t)=>{Object(o.o)(e,t)},tenantId:n,clientCorrelationId:i})}();const b=Object(c.getLokiBootstrapperConfig)(),p=h.a.userConfiguration.UserOptions.TimeFormat,f=h.a.userConfiguration.UserOptions.DateFormat,g=h.a.userConfiguration.SegmentationSettings.SetPhoto,m=p&&-1===p.indexOf("tt"),j=Object(u.a)();return Object.assign(Object.assign({},b),{actionCallbacks:n,dataCallbacks:i,privateDataCallbacks:d,dataUpdateBroadcaster:l,options:{isSetPhotoEnabled:g,isLinkedInIntegrationEnabled:!1,timeFormat:p,dateFormat:f,is24HourFormat:m,sharedMailboxAadObjectId:j}})}(t,e))}function ye(e){var t;l((t=e)?Object(g.a)(b.c,b.d+"/"+encodeURIComponent(t),Object(p.a)()):"",!0)}function Se(e,t){return(n,o,r,a,i)=>{var s;t?t(n,n):(null===(s=e.actionCallbacks)||void 0===s?void 0:s.composeMail)?e.actionCallbacks.composeMail(n,o,r,a):l(v({to:{smtpAddress:n,displayName:Ue(a)},subject:o,body:r}),!0),window.LPC.dismissCard()}}function Ue(e){if(e){if(e.personaDisplayName)return e.personaDisplayName;if(e.recipientDisplayName)return e.recipientDisplayName}}function Ae(e,t){"Meeting"===e.PersonaType?L(e,t):t(void 0,void 0)}function Te(e,t){t({feedbackClientInfo:["",`Topic data source: ${Object(a.j)("csi-gettopicdata")?"LPC":"OWA"}`,`API: ${Object(a.j)("csi-usetopicssdkapi")?"SDK":"KM API"}`,`WTQ filter: ${Object(a.j)("csi-disableTopicRelevanceFilter")?"Disabled":"Enabled"}`,`OWA version: ${Object(r.u)()}`,`Client correlation id: ${Object(r.M)()}`].join("\n * ")})}function Me(e,t){const n=e=>{w.h.info(e),t(void 0,e)};C.d.importAndExecute(e.TopicId).then(e=>{try{t(e)}catch(e){n(`Error in LPC getTopicData callback: ${e}`)}},e=>{n(`Error getting topic definition: ${e}`)})}function Be(e){C.h.importAndExecute("Cortex.TopicAnnotations.TopicHighlights.Remove",{topicId:e})}function ke(e){window.LPC.dismissCard(),E(e)}n.d(t,"a",(function(){return Ie}))},3496:function(e,t,n){"use strict";var o=n(3),r=n(1681),a=Object(o.mutatorAction)("addBrandToDynamicBrandSet",(e,t)=>{t?r.a.dynamicBrandSets.verifiedBrands.set(e,!0):r.a.dynamicBrandSets.unverifiedBrands.set(e,!0)}),i=n(699),s=Object(i.action)("setIsPendingFetch")((function(e,t){e.personaBlob.isPendingFetch=t})),c=n(1856),u=n(2022),d=n(61),l=n(44),b=n(5),p=n(312),f=n(152),g=n(151),m=n(283),j=n(40),O=n(1712),v=n(3987),h=n(391);n.d(t,"a",(function(){return A}));const P="GetProfileImageTime",C="GetPersonaTime",w="GetProfileImageNoPhoto",I="GetPersonaResponseNoPhoto",y="image_verified_flag",S="outlook.brands.verified_status";let U={};async function A(e,t,n){const o=e.personaBlob;if(t||!(o.isPendingFetch||o.hasFetchFailed||o.blobUrl&&U[o.blobUrl]||Object(b.k)(e.emailAddress)&&Object(b.k)(e.personaId)||(null==n?void 0:n()))){s(e,!0);try{await(Object(O.a)()&&Object(O.b)(e.personaId,e.emailAddress)?async function(e,t){const n=Object(m.a)(),o=Object(c.a)(e.emailAddress,e.mailboxType);let r={"Content-Type":"image/gif","X-AnchorMailbox":e.emailAddress,image_verified_flag:"","X-RoutingParameter-ResolutionDepth":"Shallow"};if(n){const e=await Object(v.b)();if(!e)return;r.Authorization=Object(h.buildAuthorizationHeader)(e)}t&&(r["Cache-Control"]="no-cache");const i=T(),s=await Object(p.b)(o,null,!0,r);n&&Object(l.j)("rp-brandCards")&&function(e,t){const n=t.headers.get(y);if(null!=n){const t=n.toLowerCase(),o=-1!==t.indexOf(S),r=-1!==t.indexOf(`${S} = true`);o&&a(e.emailAddress,r)}}(e,s);const u=await s.blob();M(e,u),i.end()}(e,t):async function(e,t){const n=T(),o=new Headers;t&&o.append("Cache-Control","no-cache");const r=await Object(f.a)({isUserActivity:!1,returnFullResponseOnSuccess:!0,headers:o,method:"GET"});r.credentials="same-origin",r.headers.has("X-OWA-CANARY")&&r.headers.delete("X-OWA-CANARY");r.headers.has("X-Req-Source")&&r.headers.delete("X-Req-Source");r.headers.has("Prefer")&&r.headers.delete("Prefer");const a=await Object(g.a)(Object(u.a)(e.emailAddress,e.personaId),r);M(e,await a.blob()),n.end()}(e,t))}catch(e){throw j.h.warn(`Error in getPersonaPhoto ${e}`),e}finally{s(e,!1)}}}function T(){const e=Object(O.a)()?P:C;return new d.c(e)}let M=Object(i.action)("processGetPhotoResponse")((function(e,t){s(e,!1);const n=0==t.type.toLowerCase().indexOf("image"),o=0==t.type.toLowerCase().indexOf("text/xml"),r=t.size<100;if((n||o)&&!r)return e.personaBlob.blobUrl=URL.createObjectURL(t),U[e.personaBlob.blobUrl]=!0,void(e.personaBlob.hasFetchFailed=!1);!function(){const e=Object(O.a)()?w:I;Object(d.p)(e)}(),e.personaBlob.hasFetchFailed=!0}))},3946:function(e,t,n){"use strict";function o(e){return e>0}var r=n(3),a=n(71);const i=Object(r.action)("UNSUBSCRIBE_FROM_BRAND_SUBSCRIPTION",(e,t,n,o,r,i)=>Object(a.b)({name:"UnsubscribeSubscription",customData:{unsubscribeSourceType:e}},{unsubscribeSourceType:e,smtpAddress:t,smtpIdentifier:n,unsubscribeSilentUris:o,unsubscribeHttpUri:r,completedCallback:i})),s=Object(r.action)("AFTER_UNSUBSCRIBE",(e,t,n,o,r)=>({smtpIdentifier:e,unsubscribeSourceType:t,responseType:n,debugMessage:o,completedCallback:r}));var c=n(5),u=n(312);const d="ows/api/beta/subscriptions/{0}/unsubscribe";var l,b=function(e,t){return Object(u.d)(Object(c.c)(d,e),{UnsubscribeSilentUris:t,ShouldReturnFailedUris:!0},null,!0)};!function(e){e[e.Fail=0]="Fail",e[e.Success=1]="Success"}(l||(l={}));var p=l,f=n(14);var g=Object(r.createStore)("BrandSubscription",{subscriptions:new f.ObservableMap({}),unsubscribedSubscriptions:new f.ObservableMap({})})();function m(e){return e&&g.subscriptions.has(e.toLowerCase())?g.subscriptions.get(e.toLowerCase()):null}var j=Object(r.mutatorAction)("unsubscribeFromCache",e=>{const t=Object.assign({},m(e));t?(g.subscriptions.delete(e.toLowerCase()),g.unsubscribedSubscriptions.set(e.toLowerCase(),t)):P()}),O=n(267);Object(r.orchestrator)(i,async e=>{var t,n;const{unsubscribeSourceType:r,smtpAddress:a,smtpIdentifier:i,unsubscribeSilentUris:c,unsubscribeHttpUri:u,completedCallback:d}=e;let l,f;if(!(u&&0!==u.length||c&&0!==c.length))return l="No unsubscribe URIs or SilentURIs provided",f=p.Fail,s(i,r,f,l,d),Promise.reject(new Error("No unsubscribe URIs or SilentURIs provided"));c&&o(c.length)||!u?l="No unsubscribe URIs provided":(window.open(u,"_blank"),l="Opened unsubscribe URI in new tab");const g=await b(i,c);let m=null;if(Object(O.a)(g.status)){if(200===g.status){const e=await g.json();(null===(t=null==e?void 0:e.failedPostSilentHttpUris)||void 0===t?void 0:t.length)>0&&(l="Opened failed silent URI in new tab",window.open(e.failedPostSilentHttpUris[0],"_blank"))}l="Unsubscribe service called successfully. "+l,f=p.Success,j(a)}else{l="Unsubscribe service failed. "+l,f=p.Fail;const e=await g.text().then(e=>e?JSON.parse(e):{});m=new Error(`ResponseCode=${g.status}, ErrorMessage=${null===(n=null==e?void 0:e.error)||void 0===n?void 0:n.message}`),m.fetchErrorType="ServerFailure"}return s(i,r,f,l,d),m?Promise.reject(m):Promise.resolve()});Object(r.mutator)(s,e=>{const{unsubscribeSourceType:t,responseType:n,debugMessage:o,completedCallback:r}=e;"BrandCard"===t&&r&&r(n===p.Success,o)});var v=Object(r.mutatorAction)("populateSubscriptionStore",e=>{e.subscriptions.forEach(e=>{var t;(null===(t=null==e?void 0:e.smtpInfo)||void 0===t?void 0:t.smtpAddress)&&g.subscriptions.set(e.smtpInfo.smtpAddress.toLowerCase(),e)}),e.unsubscribedSubscriptions.forEach(e=>{var t;(null===(t=null==e?void 0:e.smtpInfo)||void 0===t?void 0:t.smtpAddress)&&g.unsubscribedSubscriptions.set(e.smtpInfo.smtpAddress.toLowerCase(),e)})});const h="ows/api/beta/subscriptions?orderBy=name, asc";var P=async function(e){const t=await Object(u.b)(e?h+"&noResolveBrand=true":h,void 0,!0);if(Object(O.a)(t.status)){const e=await t.json();return v(e),e}return null};n.d(t,"b",(function(){return P})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return o}))},3987:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return c}));var o=n(283),r=n(391),a=n(597);const i="https://outlook.office.com/M365.Access";function s(){return Object(o.a)()?c():Object(r.getAccessTokenforResource)(Object(a.n)())}function c(){return Object(r.getDelegationTokenForOwa)(i)}},4139:function(e,t,n){"use strict";function o(e,t,n,o,r,a){return{emailAddress:n,hexConsumerIdForUser:t,personaId:o,name:e,personaBlob:{blobUrl:null,isPendingFetch:!1,hasFetchFailed:!1},size:r,mailboxType:a}}n.d(t,"a",(function(){return o}))},4707:function(e,t,n){"use strict";n.r(t);var o=n(699),r=n(1681),a=n(3496);t.default=Object(o.action)("refreshPersonaPhoto")((e,t)=>{r.a.viewStates.forEach(n=>{(e&&n.emailAddress===e||t&&n.personaId===t)&&Object(a.a)(n,!0)})})},5300:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n(3496),r=n(1811),a=n(4139),i=n(4707),s=n(2022),c=n(1712),u=n(1732);function d(e,t){var n;if(null==t?void 0:t.profilePhotoDataUrl){const t=(null===(n=e.EmailAddresses)||void 0===n?void 0:n[0])?e.EmailAddresses[0].EmailAddress:void 0,d=e.PersonaId?e.PersonaId.Id:void 0;if(Object(i.default)(t,d),t){const n=Object(r.a)(t),i="ModernGroup"==e.PersonaTypeString?"GroupMailbox":"";if(Object(c.a)()){const r=Object(a.a)(e.DisplayName,n,t,d,u.c.regular,i);Object(o.a)(r,!0)}else{const e=n?Object(s.b)(n,i,u.c.regular):Object(s.a)(t,d,i);fetch(e,{headers:{"Cache-Control":"no-cache"},credentials:"include"})}}}}},6799:function(e,t,n){"use strict";function o(e){return Object.assign({__type:"CreatePersonaRequest:#Exchange"},e)}n.d(t,"a",(function(){return o}))},6800:function(e,t,n){"use strict";function o(e){return Object.assign({__type:"UpdatePersonaRequest:#Exchange"},e)}n.d(t,"a",(function(){return o}))},7227:function(e,t,n){"use strict";var o=n(32);function r(e,t){var n;return void 0===e.request||e.request.__type||(e.request=(n=e.request,Object.assign({__type:"CreatePersonaJsonRequest:#Exchange"},n))),Object(o.a)("CreatePersona",e,t)}n.d(t,"a",(function(){return r}))},7228:function(e,t,n){"use strict";var o=n(32);function r(e,t){var n;return void 0===e.request||e.request.__type||(e.request=(n=e.request,Object.assign({__type:"UpdatePersonaJsonRequest:#Exchange"},n))),Object(o.a)("UpdatePersona",e,t)}n.d(t,"a",(function(){return r}))},8364:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return s}));var o=n(957);const r="compose",a="read",i="group",s="/"+["mail",...Object(o.a)().split("/").slice(1)].join("/")+"deeplink/";["calendar",...Object(o.a)().split("/").slice(1)].join("/")},8365:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(279);function r(e,t,n){const r={pathname:e+t,search:n};return o.format(r)}},9201:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(57);function r(){var e;const{IsExplicitLogon:t,ExternalDirectoryUserGuid:n}=null===(e=o.a.userConfiguration)||void 0===e?void 0:e.SessionSettings;return t?n:void 0}}}]);
//# sourceMappingURL=owa.14.js.map
self.scriptsLoaded['owa.14.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.14.js'] = (new Date()).getTime();