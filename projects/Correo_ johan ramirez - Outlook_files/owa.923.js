self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.923.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[923],{1071:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(246);function r(e){if(e){const t=Object(a.a)();for(const n of t.tabs)if(n.id==e)return n}return null}},1271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),r=n(951),o=n(115);t.default=function(e,t,n,i){o.getGlobalContext().legacyInDispatch++,a.action(t||"(anonymous action)",r.dispatchWithMiddleware.bind(null,e,t,n,i))(),o.getGlobalContext().legacyInDispatch--}},1272:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(799),r=n(115);function o(e,t){var n={};return Object.keys(e).forEach((function(a){void 0===n[a]&&Object.defineProperty(n,a,{enumerable:!0,get:function(){return e[a].apply(null,t)}})})),Object.freeze(n),n}t.default=function(e){return function(t){if(r.getGlobalContext().legacyTestMode)return t;var n=this,i=t.length-1,c=a.getOriginalTarget(t);c&&(i=c.length-1);var u=function(){var a=o(e,arguments),r=Array.prototype.slice.call(arguments);if(void 0===r[i]){for(var c=r.length;c<i;c++)r[c]=void 0;r[i]=a}return t.apply(n,r)};return a.setActionType(u,a.getActionType(t)),u}}},1273:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),r=n(947),o=0,i=null;var c=[];function u(e){var t,n=e.object;switch(e.type){case"update":t=void 0!==e.index?{verify:function(){return n[e.index]===e.newValue},objectName:e.name,propertyName:e.index,undo:function(){n[e.index]=e.oldValue}}:void 0!==n.get?{verify:function(){return n.get(e.key)===e.newValue},objectName:e.name,propertyName:e.key,undo:function(){n.set(e.key,e.oldValue)}}:{verify:function(){return n[e.key]===e.newValue},objectName:e.name,propertyName:e.key,undo:function(){n[e.key]=e.oldValue}};break;case"splice":t={verify:function(){for(var t=0;t<e.addedCount;t++)if(n[e.index+t]!==e.added[t])return!1;return!0},objectName:e.name,propertyName:e.index,undo:function(){n.splice(e.index,e.addedCount);for(var t=0;t<e.removedCount;t++)n.splice(e.index+t,0,e.removed[t])}};break;case"add":t=void 0!==n.get?{verify:function(){return n.get(e.key)===e.newValue},objectName:e.name,propertyName:e.key,undo:function(){n.delete(e.key)}}:{verify:function(){return n[e.key]===e.newValue},objectName:e.name,propertyName:e.key,undo:function(){delete n[e.key]}};break;case"delete":t={verify:function(){return!n.has(e.key)},objectName:e.name,propertyName:e.key,undo:function(){n.set(e.key,e.oldValue)}};break;default:return}c.forEach((function(e){return e.steps.push(t)}))}function s(e,t,n){0===o&&(i=a.spy(u)),o++,c.push({steps:[]});try{var s=t(),l=c[c.length-1],d=!1;l.steps.reverse();var f=r.default("undo-"+e)((function(){if(d)throw"This instance of undo-"+e+" has already been executed";n&&l.steps.forEach((function(e){if(!e.verify())throw'Property "'+e.propertyName+' on store object "'+e.objectName+" changed since action was performed."})),l.steps.forEach((function(e){return e.undo()})),d=!0}));return f.actionReturnValue=s,f}finally{c.pop(),0==--o&&(i(),i=null)}}t.default=function(e,t){return function(n){return s(e,n,!!t)}}},1274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(115);t.initializeTestMode=function(){a.getGlobalContext().legacyTestMode=!0},t.resetTestMode=function(){a.getGlobalContext().legacyTestMode=!1}},19473:function(e,t,n){"use strict";n.r(t);var a=n(2396),r=n(5757),o=n(2581),i=n(1008),c=n(1071),u=n(3134),s=n(3),l=n(950),d=n(274),f=n(246);var b=Object(s.mutatorAction)("Tab_ReloadSecondaryTabAsDeeplink",(e,t)=>{const n=function(e){var t,n;const a=Object(f.a)();for(const r of a.tabs)if(r.type!==d.a.Primary&&r.type!==d.a.SxS&&(null===(n=null===(t=r.data)||void 0===t?void 0:t.id)||void 0===n?void 0:n.Id)==e)return r;return null}(e);if(n){const e=Object(l.a)(n.type);e&&e.reloadAsDeeplink(n,t)}});n.d(t,"activateTab",(function(){return a.a})),n.d(t,"closeTab",(function(){return r.a})),n.d(t,"setTabIsShown",(function(){return o.a})),n.d(t,"setFirstRenderCompleted",(function(){return i.a})),n.d(t,"getTabById",(function(){return c.a})),n.d(t,"addTab",(function(){return u.a})),n.d(t,"reloadSecondaryTabAsDeeplink",(function(){return b}))},2396:function(e,t,n){"use strict";var a=n(274),r=n(949),o=n(2581),i=n(61),c=n(699),u=n(950);t.a=Object(c.action)("activateTab")((function(e,t){const n=new i.b("TabViewActivateTab",{isVerbose:!0});switch(n.addCustomData([e.type,t]),Object(o.a)(e,!0),e.type){case a.a.Primary:case a.a.OverflowMenu:case a.a.SecondaryReadingPane:case a.a.MailCompose:if(2!=e.state){const t=Object(r.a)();if(t){t.state=1;const e=Object(u.a)(t.type);(null==e?void 0:e.onDeactivate)&&e.onDeactivate(t)}if(e){e.state=2,e.blink=!1;const t=Object(u.a)(e.type);(null==t?void 0:t.onActivate)&&t.onActivate(e)}}}n.end()}))},2581:function(e,t,n){"use strict";var a=n(2396),r=n(699),o=n(246);t.a=Object(r.action)("setTabIsShown")((function(e,t){switch(e.state){case 0:t&&(e.state=1,e.blink=!0);break;case 1:case 2:case 3:if(!t){const t=2==e.state&&function(e){const t=Object(o.a)().tabs,n=Math.max(t.indexOf(e),0),a=t.filter(t=>t.id==e.parentTabId&&1==t.state)[0];if(a)return a;for(let e=n;e<t.length;e++)if(1==t[e].state)return t[e];for(let e=n-1;e>=0;e--)if(1==t[e].state)return t[e];return null}(e);t&&Object(a.a)(t),e.state=0}}}))},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));const a=/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/;function r(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function o(){return r()+r()+"-"+r()+"-"+r()+"-"+r()+"-"+r()+r()+r()}function i(e){return a.test(e)}},3134:function(e,t,n){"use strict";var a=n(949),r=n(274),o=n(311),i=n(3),c=n(246),u=n(2396);let s=Object(i.action)("ADD_TAB_VIEW_STATE",(e,t)=>({viewState:e,makeActive:t}));var l=s;Object(i.orchestrator)(s,e=>{const{viewState:t,makeActive:n}=e,a=Object(c.a)();d(t),n&&Object(u.a)(a.tabs[a.tabs.length-1])});const d=Object(i.mutatorAction)("addTabToStore",e=>{Object(c.a)().tabs.push(e)});n.d(t,"a",(function(){return p}));let f=1;const b="SXSID_";function p(e,t,n,i){const c=Object(a.a)(),u={id:r.a[e]+(f++).toString(),state:t?1:0,startTime:(new Date).getTime(),parentTabId:c?c.id:null,blink:t,data:i,sxsId:e===r.a.SxS&&i||b+Object(o.a)(),firstRibbonRenderCompleted:!1};let s=null;switch(e){case r.a.Primary:s=Object.assign(Object.assign({},u),{type:r.a.Primary});break;case r.a.OverflowMenu:s=Object.assign(Object.assign({},u),{type:r.a.OverflowMenu,data:i});break;case r.a.SecondaryReadingPane:s=Object.assign(Object.assign({},u),{type:r.a.SecondaryReadingPane,data:i});break;case r.a.MailCompose:s=Object.assign(Object.assign({},u),{type:r.a.MailCompose,data:i,projectionRPTabId:null});break;case r.a.SxS:s=Object.assign(Object.assign({},u),{type:r.a.SxS});break;case r.a.CalendarCompose:s=Object.assign(Object.assign({},u),{type:r.a.CalendarCompose,data:i});break;case r.a.CalendarReadingPane:s=Object.assign(Object.assign({},u),{type:r.a.CalendarReadingPane,data:i})}return l(s,n),s.id}},5757:function(e,t,n){"use strict";var a={TabViewAddTab:{name:"TabViewAddTab",customData:(e,t,n,a)=>[e,t,n]},TabViewCloseTab:{name:"TabViewCloseTab",customData:(e,t)=>[e.type,1==e.state||2==e.state,2==e.state,t,e.startTime?(new Date).getTime()-e.startTime:0]}},r=n(2581),o=n(61),i=n(3),c=n(950),u=n(246);t.a=Object(o.r)(a.TabViewCloseTab,(async function(e,t){let n=!0;const a=Object(c.a)(e.type);if(!t&&a&&a.canClose&&(n=await a.canClose(e)),n){Object(r.a)(e,!1);const t=Object(u.a)().tabs.indexOf(e);t>=0&&s(t)}}));const s=Object(i.mutatorAction)("spliceTabs",e=>{Object(u.a)().tabs.splice(e,1)})},699:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(951);t.legacyApplyMiddleware=a.default;var r=n(947);t.action=r.default;var o=n(1272);t.select=o.default;var i=n(1273);t.createUndo=i.default;var c=n(799);t.getActionType=c.getActionType;var u=n(1274);t.initializeTestMode=u.initializeTestMode,t.resetTestMode=u.resetTestMode},799:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setOriginalTarget=function(e,t){e.__SATCHELJS_ORIGINAL_TARGET=t},t.getOriginalTarget=function(e){if(void 0!==e.__SATCHELJS_ORIGINAL_TARGET)return e.__SATCHELJS_ORIGINAL_TARGET},t.setActionType=function(e,t){e.__SATCHELJS_ACTION_TYPE=t},t.getActionType=function(e){return e.__SATCHELJS_ACTION_TYPE}},947:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1271),r=n(799);function o(e,t,n){var o=function(){var r,o=this,i=arguments;return a.default((function(){return r=e.apply(o,i)}),t,arguments,n),r};return r.setOriginalTarget(o,e),r.setActionType(o,t),o}function i(e,t,n,a,r){if(!n||"function"!=typeof n.value)throw new Error("The @action decorator can only apply to class methods.");n.value=o(n.value,a,r)}t.default=function(e,t){return function(n,a,r){if(1==arguments.length&&"function"==typeof n)return o(n,e,t);i(n,a,r,e,t)}}},951:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(115);function r(e,t){return e.bind(null,t)}function o(e,t,n,a){return e()}t.default=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=o,i=e.length-1;i>=0;i--)n=r(e[i],n);a.getGlobalContext().legacyDispatchWithMiddleware=n},t.dispatchWithMiddleware=function(e,t,n,r){a.getGlobalContext().legacyDispatchWithMiddleware||(a.getGlobalContext().legacyDispatchWithMiddleware=o),a.getGlobalContext().legacyDispatchWithMiddleware(e,t,n,r)}}}]);
//# sourceMappingURL=owa.923.js.map
self.scriptsLoaded['owa.923.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.923.js'] = (new Date()).getTime();