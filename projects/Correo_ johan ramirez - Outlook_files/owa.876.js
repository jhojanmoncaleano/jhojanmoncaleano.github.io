self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.876.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[876,2098],{1:function(t,e,n){"use strict";n.r(e),n.d(e,"__extends",(function(){return o})),n.d(e,"__assign",(function(){return c})),n.d(e,"__rest",(function(){return i})),n.d(e,"__decorate",(function(){return u})),n.d(e,"__param",(function(){return a})),n.d(e,"__metadata",(function(){return f})),n.d(e,"__awaiter",(function(){return s})),n.d(e,"__generator",(function(){return d})),n.d(e,"__createBinding",(function(){return l})),n.d(e,"__exportStar",(function(){return p})),n.d(e,"__values",(function(){return b})),n.d(e,"__read",(function(){return m})),n.d(e,"__spread",(function(){return O})),n.d(e,"__spreadArrays",(function(){return v})),n.d(e,"__spreadArray",(function(){return y})),n.d(e,"__await",(function(){return h})),n.d(e,"__asyncGenerator",(function(){return w})),n.d(e,"__asyncDelegator",(function(){return g})),n.d(e,"__asyncValues",(function(){return j})),n.d(e,"__makeTemplateObject",(function(){return _})),n.d(e,"__importStar",(function(){return A})),n.d(e,"__importDefault",(function(){return P})),n.d(e,"__classPrivateFieldGet",(function(){return x})),n.d(e,"__classPrivateFieldSet",(function(){return E}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var c=function(){return(c=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function i(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function u(t,e,n,r){var o,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var u=t.length-1;u>=0;u--)(o=t[u])&&(i=(c<3?o(i):c>3?o(e,n,i):o(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i}function a(t,e){return function(n,r){e(n,r,t)}}function f(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}function s(t,e,n,r){return new(n||(n=Promise))((function(o,c){function i(t){try{a(r.next(t))}catch(t){c(t)}}function u(t){try{a(r.throw(t))}catch(t){c(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,u)}a((r=r.apply(t,e||[])).next())}))}function d(t,e){var n,r,o,c,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function u(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,r=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){i.label=c[1];break}if(6===c[0]&&i.label<o[1]){i.label=o[1],o=c;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(c);break}o[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(t,i)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}var l=Object.create?function(t,e,n,r){void 0===r&&(r=n),Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[n]}})}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]};function p(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||l(e,t,n)}function b(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,c=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(r=c.next()).done;)i.push(r.value)}catch(t){o={error:t}}finally{try{r&&!r.done&&(n=c.return)&&n.call(c)}finally{if(o)throw o.error}}return i}function O(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(m(arguments[e]));return t}function v(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var c=arguments[e],i=0,u=c.length;i<u;i++,o++)r[o]=c[i];return r}function y(t,e,n){if(n||2===arguments.length)for(var r,o=0,c=e.length;o<c;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function h(t){return this instanceof h?(this.v=t,this):new h(t)}function w(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),c=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){c.push([t,e,n,r])>1||u(t,e)}))})}function u(t,e){try{(n=o[t](e)).value instanceof h?Promise.resolve(n.value.v).then(a,f):s(c[0][2],n)}catch(t){s(c[0][3],t)}var n}function a(t){u("next",t)}function f(t){u("throw",t)}function s(t,e){t(e),c.shift(),c.length&&u(c[0][0],c[0][1])}}function g(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:h(t[r](e)),done:"return"===r}:o?o(e):e}:o}}function j(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=b(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function _(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var S=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function A(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&l(e,t,n);return S(e,t),e}function P(t){return t&&t.__esModule?t:{default:t}}function x(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)}function E(t,e,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(t,n):o?o.value=n:e.set(t,n),n}},142:function(t,e,n){"use strict";function r(t){c!==t&&(c=t)}function o(){return void 0===c&&(c="undefined"!=typeof document&&!!document.documentElement&&"rtl"===document.documentElement.getAttribute("dir")),c}var c;function i(){return{rtl:o()}}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i})),c=o()},160:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(3),o=n(51);const c=Object(r.action)("ADD_LOCSTRINGS",t=>({str:t}));Object(r.mutator)(c,t=>{Object(o.a)().localizedStrings.merge(t.str)})},19313:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(5),c=n(1697),i=n(311),u=n(312),a=n(40),f=n(1759),s=n(1716);var d=n(1851),l=n(3);const p="ows/v1.0/OutlookOptions";var b=null;let m=Object(l.mutatorAction)("setOptionLoadState",(function(t){Object(f.b)().loadState=t}));function O(){switch(Object(f.b)().loadState){case f.a.OptionsLoading:return b;case f.a.OptionsLoaded:return Promise.resolve();case f.a.OptionsNotLoaded:default:return m(f.a.OptionsLoading),b=Object(u.b)(p).then(t=>{!function(t){t?(t.options&&t.options.forEach(t=>{null!=t&&(t.feature==c.c.SurfaceActions&&(t=function(t){return t.readSurfaceActions=t.readSurfaceActions?t.readSurfaceActions:[],t.readSurfaceAddins=t.readSurfaceAddins?t.readSurfaceAddins:[],t.composeSurfaceActions=t.composeSurfaceActions?t.composeSurfaceActions:[],t.composeSurfaceAddins=t.composeSurfaceAddins?t.composeSurfaceAddins:[],t}(t)),Object(c.i)(t.feature,t))}),function(t=Object(s.a)()){Object.keys(Object(c.g)().options).forEach(e=>{if(!Object(c.g)().options[e].lastModifiedDateTime&&t[e]){const n=Number(e);Object(c.e)(n,t[e])}})}(),m(f.a.OptionsLoaded)):(a.h.info("Error loading options"),Object(d.a)(),m(f.a.OptionsNotLoaded))}(t),b=null})}}const v="ows/v1.0/OutlookOptions/{0}";async function y(t,e){let n=Object(o.c)(v,c.c[t]);if(Object(f.b)().loadState!==f.a.OptionsLoaded&&await O(),Object(f.b)().loadState===f.a.OptionsLoaded){if(Object(c.g)().options[t]&&Object(c.g)().options[t].lastModifiedDateTime){if(e&&0!==Object.keys(e).length){let t=e,{"feature@is.Queryable":o,"feature@odata.type":c,createdDateTime:i,lastModifiedDateTime:u}=t;return h(1,n,Object(r.__rest)(t,["feature@is.Queryable","feature@odata.type","createdDateTime","lastModifiedDateTime"]))}return a.h.info("createOrUpdateOptionsForFeature called with no changes to options"),Promise.resolve()}return h(0,n,e)}return Promise.reject(new Error("Options are not loaded. Cannot update options."))}function h(t,e,n){let r={correlationId:Object(i.a)(),options:n};return(1==t?Object(u.d)(e,r,r.correlationId):Object(u.e)(e,r,r.correlationId)).then(t=>{if(!function(t){if((null==t?void 0:t.options)&&1==t.options.length){let e=t.options[0];return Object(c.i)(e.feature,e),!0}return!1}(t)){const t=new Error("Error processing options response");throw t.networkError=!0,t}})}async function w(t){return await O(),Object(c.f)(t)}let g=Object(l.action)("updateAddInArray",(t,e,n)=>({addinsArray:t,productId:e,isPushOperation:n}));Object(l.mutator)(g,t=>{t.isPushOperation?t.addinsArray.push(t.productId):t.addinsArray.splice(t.addinsArray.indexOf(t.productId),1)});var j=g;function _(t,e,n){let r=Object(c.f)(c.c.SurfaceActions),o=Object(c.f)(c.c.CalendarSurfaceAddins),i=!!n.readMode&&S(r.readSurfaceAddins,t,e);i=n.composeMode?i||S(r.composeSurfaceAddins,t,e):i;let u=!!n.calendarMode&&S(o.calendarSurfaceAddins,t,e);i&&y(c.c.SurfaceActions,r),u&&y(c.c.CalendarSurfaceAddins,o)}let S=(t,e,n)=>{let r=!1;return n?-1===t.indexOf(e)&&(j(t,e,!0),r=!0):-1!==t.indexOf(e)&&(j(t,e,!1),r=!0),r};n.d(e,"createOrUpdateOptionsForFeature",(function(){return y})),n.d(e,"loadOptions",(function(){return O})),n.d(e,"getServerOptionsForFeature",(function(){return w})),n.d(e,"updateAddinPinStatus",(function(){return _})),n.d(e,"updateAddInArray",(function(){return j}))},199:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(37);function o(t){var e=null;try{var n=Object(r.a)();e=n?n.sessionStorage.getItem(t):null}catch(t){}return e}function c(t,e){var n;try{null===(n=Object(r.a)())||void 0===n||n.sessionStorage.setItem(t,e)}catch(t){}}},206:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=!1;function o(t){r=t}},215:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return f}));var r=n(51),o=n(216),c=n(3),i=n(160);function u(t,...e){const n=Object(r.a)().localizedStrings.get(t)||"";return e.length?Object(o.a)(n,...e):n}const a={};function f(t){return Object(r.a)().localizedStrings.has(t)?Promise.resolve(Object(r.a)().localizedStrings.get(t)):new Promise(e=>{var n;a[t]=null!==(n=a[t])&&void 0!==n?n:[],a[t].push(e)})}Object(c.orchestrator)(i.a,t=>{for(const e of Object.keys(t.str))if(a[e]){for(const n of a[e])n(t.str[e]);delete a[e]}})},216:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(217);function o(t,...e){return String._toFormattedString(!1,[t,...e])}String._toFormattedString=function(t,e){const n=Object(r.a)()||"en-US";for(var o="",c=e[0],i=0;;){var u=c.indexOf("{",i),a=c.indexOf("}",i);if(u<0&&a<0){o+=c.slice(i);break}if(a>0&&(a<u||u<0))o+=c.slice(i,a+1),i=a+2;else if(o+=c.slice(i,u),i=u+1,"{"!==c.charAt(i)){if(a<0)break;var f=c.substring(i,a),s=f.indexOf(":"),d=parseInt(s<0?f:f.substring(0,s),10)+1,l=s<0?"":f.substring(s+1),p=e[d];null==p&&(p=""),o+=p.toFormattedString?p.toFormattedString(l):t&&p.localeFormat?p.localeFormat(l):p.format?p.format(l):p.toLocaleString(n),i=a+1}else o+="{",i++}return o}},217:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(51);function o(){return Object(r.a)().currentCulture}},229:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return d}));var r,o=n(42),c=n(73),i=n(199),u=n(142),a="isRTL";function f(t){if(void 0===t&&(t={}),void 0!==t.rtl)return t.rtl;if(void 0===r){var e=Object(i.a)(a);null!==e&&s(r="1"===e);var n=Object(c.a)();void 0===r&&n&&(r="rtl"===(n.body&&n.body.getAttribute("dir")||n.documentElement.getAttribute("dir")),Object(u.b)(r))}return!!r}function s(t,e){void 0===e&&(e=!1);var n=Object(c.a)();n&&n.documentElement.setAttribute("dir",t?"rtl":"ltr"),e&&Object(i.b)(a,t?"1":"0"),r=t,Object(u.b)(r)}function d(t,e){return void 0===e&&(e={}),f(e)&&(t===o.a.left?t=o.a.right:t===o.a.right&&(t=o.a.left)),t}},311:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));const r=/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/;function o(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}function c(){return o()+o()+"-"+o()+"-"+o()+"-"+o()+"-"+o()+o()+o()}function i(t){return r.test(t)}},312:function(t,e,n){"use strict";n.d(e,"e",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return s})),n.d(e,"g",(function(){return d}));var r=n(20);const o=new r.c(()=>Promise.all([n.e(0),n.e(597)]).then(n.bind(null,1575))),c=new r.a(o,t=>t.makePostRequest).importAndExecute,i=new r.a(o,t=>t.makePatchRequest).importAndExecute,u=new r.a(o,t=>t.makePutRequest).importAndExecute,a=new r.a(o,t=>t.makeGetRequest).importAndExecute,f=new r.a(o,t=>t.makeDeleteRequest).importAndExecute,s=new r.a(o,t=>t.makeGraphRequest).importAndExecute,d=new r.a(o,t=>t.sendOwsPrimeRequest).importAndExecute},37:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(206),o=void 0;try{o=window}catch(t){}function c(t){if(!r.a&&void 0!==o){var e=t;return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:o}}},42:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,pauseBreak:19,capslock:20,escape:27,space:32,pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,del:46,zero:48,one:49,two:50,three:51,four:52,five:53,six:54,seven:55,eight:56,nine:57,colon:58,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,leftWindow:91,rightWindow:92,select:93,zero_numpad:96,one_numpad:97,two_numpad:98,three_numpad:99,four_numpad:100,five_numpad:101,six_numpad:102,seven_numpad:103,eight_numpad:104,nine_numpad:105,multiply:106,add:107,subtract:109,decimalPoint:110,divide:111,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123,numlock:144,scrollLock:145,semicolon:186,equalSign:187,comma:188,dash:189,period:190,forwardSlash:191,graveAccent:192,openBracket:219,backSlash:220,closeBracket:221,singleQuote:222}},5:function(t,e,n){"use strict";var r=n(215),o=n(3),c=n(51),i=n(84),u=n(160);let a=!0;function f(t,e){Object(i.a)(e);const n=Object(i.c)(e,void 0,a).then(t=>{Object(u.a)(t)});return a=!1,n}var s=n(6),d=n(229);function l(t,e,n){return t=t.toLowerCase(),Object(c.a)().currentLocale===t||(Object(s.b)()||window._locStrings.unregisterHandler(Object(c.a)().currentLocale,t=>f(0,t)),b(t,n),document.dir=e,Object(d.c)("rtl"===e,!0),p(t),Object(s.b)())?Promise.resolve():window._locStrings.registerHandler(t,t=>f(0,t))}const p=Object(o.action)("ON_LOCALE_CHANGED",t=>({locale:t})),b=Object(o.mutatorAction)("MUTATE_LOCSTRING_LOCALE",(t,e)=>{Object(c.a)().currentLocale=t,e&&(Object(c.a)().currentCulture=e)});var m=n(216);function O(t,...e){const n=/\{(\d+)\}/g,r=[];let o,c=0;for(;o=n.exec(t);){const i=o[0],u=e[parseInt(i.replace(/\{|\}+/g,""),10)];o.index>c&&r.push(t.substring(c,o.index)),c=n.lastIndex,r.push(u)}return c!==t.length&&r.push(t.substring(c,t.length)),r}const v=t=>!t||/^\s*$/.test(t);var y=n(217);function h(){return Object(c.a)().currentLocale}function w(){return Object(d.a)()}function g(t){return!w()&&["Hebrew","Arabic","Persian","Urdu"].some(e=>e==t)}n.d(e,"h",(function(){return r.a})),n.d(e,"m",(function(){return l})),n.d(e,"l",(function(){return p})),n.d(e,"c",(function(){return m.a})),n.d(e,"d",(function(){return O})),n.d(e,"k",(function(){return v})),n.d(e,"a",(function(){return u.a})),n.d(e,"e",(function(){return y.a})),n.d(e,"f",(function(){return h})),n.d(e,"i",(function(){return w})),n.d(e,"j",(function(){return g})),n.d(e,"g",(function(){return c.a}));e.b=r.b},51:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(3),o=n(14);const c=Object(r.createStore)("localizedStrings",{currentLocale:"",currentCulture:"",localizedStrings:new o.ObservableMap({})})},73:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(206);function o(t){if(!r.a&&"undefined"!=typeof document){var e=t;return e&&e.ownerDocument?e.ownerDocument:document}}}}]);
//# sourceMappingURL=owa.876.js.map
self.scriptsLoaded['owa.876.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.876.js'] = (new Date()).getTime();