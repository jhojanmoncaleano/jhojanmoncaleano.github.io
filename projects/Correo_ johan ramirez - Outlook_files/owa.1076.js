self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.1076.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[1076],{11241:function(n,e,t){"use strict";var i=t(312),a=t(267);const s="ows/beta/AdsTargetingOptOutController/GetEnvelopId";let u;var d=async function(n){let e=!n;if(n=n||"",null==u){const t=await Object(i.b)(s,void 0,!0,{PreferAnid:n},!1,e);if(Object(a.a)(t.status)){const n=await t.json();return u=n,u}return null}return u};t.d(e,"a",(function(){return d}))},19490:function(n,e,t){"use strict";t.r(e);var i=t(44);var a=t(5970),s=t(6740),u=t(61),d=t(4666),o=t(4255),r=t(11241),l=t(49),c=t(2481);async function v(n,e,t,v){var S,p,A,R,g,m,f,x,N,O,b,I,C,w,E,P,L;const D=new u.b("UserAdConfig",{isCore:!0});let j=n,h="NA";if(j){const n=Object(l.g)().UserOptions.IsFocusedInboxEnabled;let e=!1;const t=Object(l.g)().UserOptions.InboxPlusTabs;e=(null==t?void 0:t.length)>1,n||e||(j=!1,h="FocusInboxInboxPlusTabsOff")}await Object(d.a)();const k=Object(c.n)(),M=Object(c.m)();let W,T="NA",y=[];if(M)if(T=await Object(o.e)(),(null==T?void 0:T.length)>0){a.TCString.decode(T).purposeConsents.forEach((n,e)=>{n&&y.push(e)}),null!=y&&0!=y.length||(y=[0])}else y=[-1];else y=[-1];if(d.b.effectiveOptInValue){let n=Object(c.f)();W=await Object(r.a)(n)}let V,U=null===(S=Object(l.g)())||void 0===S?void 0:S.PrimeSettings;if(null==U?void 0:U.Items)for(let n of U.Items)if("AdsAggregateOptions"===n.Id){V=null===(A=null===(p=n.Value)||void 0===p?void 0:p.options)||void 0===A?void 0:A[0];break}const G=(null==V?void 0:V.nativeAdsSeenRunningSum)>=50&&(null==V?void 0:V.nativeAdsClickedRunningSum)>0&&V.nativeAdsClickedRunningSum/V.nativeAdsSeenRunningSum>=.03;D.addCustomData({AdsEnabled:n,NotEnabledReason:e,UserAdCountry:Object(c.h)(t),CalculatedAdMarket:t,DisplayAdsOn:v,NativeAdsOn:j,DisplayOffReason:n&&!v?e:"NA",NativeOffReason:h,LGPDApplies:k,LGPDOptInStatus:k?d.b.lgpdOptInBit:-1,FirstPartyCookieOptOut:M?2!=d.b.gdprFirstPartyCookieOptInBit:null,MSOptOut:2==d.b.microsoftChoiceCookieOptOutBit,SendMuid:d.b.effectiveOptInValue,AdsExpFlights:["adsexp-adIconText-Sponsored","adsexp-adIconText-Promoted","adsexp-adIconText-cr","adsexp-adIconTextStyle-Nonwhite","adsexp-adIconTextStyle-cr","adsexp-adIconIcon-Info","adsexp-adIconIcon-AdSense","adsexp-adIconIcon-cr","adsexp-adAstupgrade-037","adsexp-adAstupgrade-cr","adsexp-adRefreshAfterDelete-control","adsexp-adRefreshAfterDelete-1m","adsexp-adRefreshAfterDelete-2m","adsexp-adRefreshAfterDelete-3m","adsexp-DisplayOffNativeOn-treament","adsexp-DisplayOffNativeOn-control","adsExp-DONO-AdInPrimary-e1","adsExp-DONO-TwoAdsOther-e1","adsexp-DisplayVerizon-30s","adsexp-DisplayVerizon-cr","adsExp-JacLiveRampBrowser-treatment","adsExp-JacLiveRampBrowser-control","adsexp-nativeAdHover-LightBlue","adsexp-nativeAdHover-MediumGrey","adsexp-nativeAdHover-cr","adsExp-NativeInbox-e2-NoDisplayAd","adsExp-NativeInbox-e3-NoDisplayAd","adsExp-NativeInbox-e4-NoDisplayAd","adsExp-NativeInbox-e3-DisplayAd","adsExp-NativeInbox-control","adsExp-NativeTwoAds-e1","adsExp-NativeTwoAds-e2","adsExp-NativeTwoAds-e3","adsExp-NativeTwoAds-control","adsexp-NRExitRp-treatment","adsexp-NRExitRp-control","adsexp-NRExitRpThrottle-cr","adsexp-NRExitRpThrottle-5s","adsexp-NRExitRpThrottle-10s","adsexp-NRExitRpThrottle-15s","adsexp-NRExitRpThrottle-20s","adsexp-NRExitRpThrottle-202104-cr","adsexp-NRExitRpThrottle-202104-20s","adsexp-NRExitRpThrottle-202104-40s","adsexp-NRExitRpThrottle-202104-60s","adsexp-NRExitRpThrottle-202104-120s","miniAE-NativeUX-update"].filter(n=>Object(i.j)(n)).toString(),GDPRApplies_2:M,GDPRPurposes_2:y.toString(),ReadingPanePosition:null===(R=Object(l.g)().UserOptions)||void 0===R?void 0:R.GlobalReadingPanePositionReact,IsFocusedInboxEnabled:null===(g=Object(l.g)().UserOptions)||void 0===g?void 0:g.IsFocusedInboxEnabled,NativeAdsSeenRunningSum:null!==(m=null==V?void 0:V.nativeAdsSeenRunningSum)&&void 0!==m?m:"NoValue",NativeAdsClickedRunningSum:null!==(f=null==V?void 0:V.nativeAdsClickedRunningSum)&&void 0!==f?f:"NoValue",NativeAdsDeletedRunningSum:null!==(x=null==V?void 0:V.nativeAdsDeletedRunningSum)&&void 0!==x?x:"NoValue",NativeCPMRunningSum:null!==(N=null==V?void 0:V.nativeCPMRunningSum)&&void 0!==N?N:"NoValue",NativeWinningCPMRunningSum:null!==(O=null==V?void 0:V.nativeWinCPMRunningSum)&&void 0!==O?O:"NoValue",WasAdSeenInLastSession:null!==(b=null==V?void 0:V.wasAdSeenInLastSession)&&void 0!==b?b:"NoValue",MiniNativeAdsSeenRunningSum:null!==(I=null==V?void 0:V.miniNativeAdsSeenRunningSum)&&void 0!==I?I:"NoValue",MiniNativeAdsClickedRunningSum:null!==(C=null==V?void 0:V.miniNativeAdsClickedRunningSum)&&void 0!==C?C:"NoValue",MiniNativeAdsDeletedRunningSum:null!==(w=null==V?void 0:V.miniNativeAdsDeletedRunningSum)&&void 0!==w?w:"NoValue",MiniNativeCPMRunningSum:null!==(E=null==V?void 0:V.miniNativeCPMRunningSum)&&void 0!==E?E:"NoValue",MiniNativeWinningCPMRunningSum:null!==(P=null==V?void 0:V.miniNativeWinCPMRunningSum)&&void 0!==P?P:"NoValue",MiniWasAdSeenInLastSession:null!==(L=null==V?void 0:V.miniWasAdSeenInLastSession)&&void 0!==L?L:"NoValue",IsSuperClicker:G}),D.addCosmosOnlyData(JSON.stringify({GDPRConsentString_2:T,LiveRampEnvelopeId:W})),D.end(),s.g.importAndExecute(!1),s.f.importAndExecute(G)}t.d(e,"logUserAdConfig",(function(){return v}))},267:function(n,e,t){"use strict";var i=t(912);t.d(e,"a",(function(){return i.a}))},312:function(n,e,t){"use strict";t.d(e,"e",(function(){return s})),t.d(e,"d",(function(){return u})),t.d(e,"f",(function(){return d})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return r})),t.d(e,"c",(function(){return l})),t.d(e,"g",(function(){return c}));var i=t(20);const a=new i.c(()=>Promise.all([t.e(0),t.e(597)]).then(t.bind(null,1575))),s=new i.a(a,n=>n.makePostRequest).importAndExecute,u=new i.a(a,n=>n.makePatchRequest).importAndExecute,d=new i.a(a,n=>n.makePutRequest).importAndExecute,o=new i.a(a,n=>n.makeGetRequest).importAndExecute,r=new i.a(a,n=>n.makeDeleteRequest).importAndExecute,l=new i.a(a,n=>n.makeGraphRequest).importAndExecute,c=new i.a(a,n=>n.sendOwsPrimeRequest).importAndExecute},4079:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"c",(function(){return u})),t.d(e,"b",(function(){return d})),t.d(e,"d",(function(){return o})),t.d(e,"f",(function(){return r})),t.d(e,"e",(function(){return l}));var i=t(3),a=t(4944);const s=Object(i.action)("IncreaseNativeAdsClickedRunningSum"),u=Object(i.action)("IncreaseNativeAdsSeenRunningSum"),d=Object(i.action)("increaseNativeAdsDeletedRunningSum"),o=Object(i.action)("UpdateNativeWinCPMRunningSum",n=>({newWinCPMRunningSum:n})),r=Object(i.action)("UpdateWasAdLastSeenInLastSession",n=>({wasAdLastSeenInLastSession:n})),l=Object(i.mutatorAction)("UpdateUserIsSuperClicker",n=>{Object(a.a)().isSuperClicker=n})},4944:function(n,e,t){"use strict";t.d(e,"a",(function(){return a}));var i=t(3);let a=Object(i.createStore)("userAdConfigStore",{nativeAdsClickedRunningSum:null,nativeAdsSeenRunningSum:null,nativeWinCPMRunningSum:null,nativeAdsDeletedRunningSum:null,wasAdLastSeenInLastSession:null,wasAdLastSeenInLastSessionValue:null,isSuperClicker:null});a()},6740:function(n,e,t){"use strict";var i=t(4079),a=t(4944),s=t(1693);function u(n){const e=Object(s.g)(s.d.AdsAggregate),t=Object(a.a)();let i=d(t.nativeAdsSeenRunningSum,e?e.nativeAdsSeenRunningSum:0),u=d(t.nativeAdsClickedRunningSum,e?e.nativeAdsClickedRunningSum:0),o=d(t.nativeWinCPMRunningSum,e?e.nativeWinCPMRunningSum:0),r=d(t.nativeAdsDeletedRunningSum,e?e.nativeAdsDeletedRunningSum:0),l=d(t.wasAdLastSeenInLastSession,!!e&&e.wasAdSeenInLastSession);t.nativeAdsSeenRunningSum=i,t.nativeAdsClickedRunningSum=u,t.nativeAdsDeletedRunningSum=r,t.nativeWinCPMRunningSum=o,t.wasAdLastSeenInLastSession=l,n.increaseNativeAdsSeenRunningSum&&(t.nativeAdsSeenRunningSum=i+1,i=t.nativeAdsSeenRunningSum),n.increaseNativeAdsClickedRunningSum&&(t.nativeAdsClickedRunningSum=u+1,u=t.nativeAdsClickedRunningSum),n.increaseNativeAdsDeletedRunningSum&&(t.nativeAdsDeletedRunningSum=r+1,r=t.nativeAdsDeletedRunningSum),n.updateNativeWinCPMRunningSum&&(t.nativeWinCPMRunningSum=o+n.updateNativeWinCPMRunningSum,o=t.nativeWinCPMRunningSum),n.updateWasAdLastSeenInLastSession&&(t.wasAdLastSeenInLastSession=n.updateWasAdLastSeenInLastSessionValue,l=t.wasAdLastSeenInLastSession),s.i.importAndExecute(s.d.AdsAggregate,Object.assign(Object.assign({},e),{nativeAdsSeenRunningSum:i,nativeAdsClickedRunningSum:u,nativeAdsDeletedRunningSum:r,nativeWinCPMRunningSum:o,wasAdSeenInLastSession:l}))}function d(n,e){return null==n?e:n}var o=t(3);Object(o.orchestrator)(i.a,()=>{u({increaseNativeAdsClickedRunningSum:!0})}),Object(o.orchestrator)(i.c,()=>{u({increaseNativeAdsSeenRunningSum:!0})}),Object(o.orchestrator)(i.b,()=>{u({increaseNativeAdsDeletedRunningSum:!0})}),Object(o.orchestrator)(i.d,n=>{u({updateNativeWinCPMRunningSum:n.newWinCPMRunningSum})}),Object(o.orchestrator)(i.f,n=>{u({updateWasAdLastSeenInLastSession:!0,updateWasAdLastSeenInLastSessionValue:n.wasAdLastSeenInLastSession})});var r=t(20);t.d(e,"b",(function(){return c})),t.d(e,"d",(function(){return v})),t.d(e,"e",(function(){return S})),t.d(e,"c",(function(){return p})),t.d(e,"g",(function(){return A})),t.d(e,"f",(function(){return R})),t.d(e,"a",(function(){return a.a}));const l=new r.c(()=>t.e(2031).then(t.bind(null,18952))),c=new r.a(l,n=>n.increaseNativeAdsClickedRunningSum),v=new r.a(l,n=>n.increaseNativeAdsSeenRunningSum),S=new r.a(l,n=>n.updateNativeWinCPMRunningSum),p=new r.a(l,n=>n.increaseNativeAdsDeletedRunningSum),A=new r.a(l,n=>n.updateWasAdLastSeenInLastSession),R=new r.a(l,n=>n.updateUserIsSuperClicker)},912:function(n,e,t){"use strict";function i(n){return n>=200&&n<300}t.d(e,"a",(function(){return i}))}}]);
//# sourceMappingURL=owa.1076.js.map
self.scriptsLoaded['owa.1076.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.1076.js'] = (new Date()).getTime();