self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.693.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[693],{19539:function(t,n,e){"use strict";e.r(n);var r=e(4730),o=e(3),c=e(3615);Object(o.orchestrator)(c.d,t=>{Object(r.b)()});e.d(n,"registerComponent",(function(){return r.a})),e.d(n,"resetFocus",(function(){return r.b})),e.d(n,"setFocusToSynchronous",(function(){return r.c}))},2107:function(t,n,e){"use strict";var r=e(0),o=e(560),c=e(20),u=e(702);function i(t,n,e,i){return Object(c.d)(t,t=>{const e=n(t);return t=>r.createElement(o.ApolloProvider,{client:Object(u.a)()},r.createElement(e,Object.assign({},t)))},e,i)}e.d(n,"a",(function(){return i}))},222:function(t,n,e){"use strict";var r=e(709),o="object"==typeof self&&self&&self.Object===Object&&self,c=r.a||o||Function("return this")();n.a=c},227:function(t,n,e){"use strict";n.a=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},293:function(t,n,e){"use strict";n.a=function(t){return null!=t&&"object"==typeof t}},3126:function(t,n,e){"use strict";var r=e(3);n.a=Object(r.action)("ON_FOLDER_CLICKED_IN_MOVEIN_CONTROL",(t,n)=>({mailboxType:t,folderId:n}))},313:function(t,n,e){"use strict";var r,o=e(549),c=e(222).a["__core-js_shared__"],u=(r=/[^.]+$/.exec(c&&c.keys&&c.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";var i=function(t){return!!u&&u in t},a=e(227),l=e(415),f=/^\[object .+?Constructor\]$/,s=Function.prototype,b=Object.prototype,p=s.toString,v=b.hasOwnProperty,d=RegExp("^"+p.call(v).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var y=function(t){return!(!Object(a.a)(t)||i(t))&&(Object(o.a)(t)?d:f).test(Object(l.a)(t))};var O=function(t,n){return null==t?void 0:t[n]};n.a=function(t,n){var e=O(t,n);return y(e)?e:void 0}},335:function(t,n,e){"use strict";var r=e(354),o=Object.prototype,c=o.hasOwnProperty,u=o.toString,i=r.a?r.a.toStringTag:void 0;var a=function(t){var n=c.call(t,i),e=t[i];try{t[i]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(n?t[i]=e:delete t[i]),o},l=Object.prototype.toString;var f=function(t){return l.call(t)},s="[object Null]",b="[object Undefined]",p=r.a?r.a.toStringTag:void 0;n.a=function(t){return null==t?void 0===t?b:s:p&&p in Object(t)?a(t):f(t)}},354:function(t,n,e){"use strict";var r=e(222).a.Symbol;n.a=r},3615:function(t,n,e){"use strict";var r=e(20),o=e(2107),c=e(3641),u=e(53),i=e(0),a=e(4082),l=e.n(a);function f(t){let n=[];return n.push({key:"MoveToMenuItemDiv",onRender:()=>i.createElement(d,{actionSource:t.actionSource,createNewFolder:t.createNewFolder,dismissMenu:t.dismissMenu,shouldShowSearchBox:t.shouldShowSearchBox,supportedMailboxTypes:t.supportedMailboxTypes,onFolderClick:t.onFolderClick,getMenuItemsToPrepend:t.getMenuItemsToPrepend,getCustomIcon:t.getCustomIcon,getCustomMenuItemsToAppend:t.getCustomMenuItemsToAppend,disableSelectedFolder:t.disableSelectedFolder,selectedFolderId:t.selectedFolderId,viewAllFoldersDisplayText:t.viewAllFoldersDisplayText})}),{className:l.a.moveToMenu,styles:{title:{},container:{},root:{width:t.width?t.width+"px":null},header:{},list:{}},coverTarget:t.coverTarget,directionalHint:t.directionalHint?t.directionalHint:u.a.bottomLeftEdge,directionalHintFixed:t.directionalHintFixed,items:n,onMenuDismissed:s,shouldFocusOnMount:!t.shouldShowSearchBox,useTargetWidth:t.useTargetWidth,focusZoneProps:{shouldInputLoseFocusOnArrowKey:t=>!0},calloutProps:{className:"customScrollBar"}}}function s(){Object(c.a)()}var b=e(3126);e.d(n,"c",(function(){return v})),e.d(n,"a",(function(){return d})),e.d(n,"b",(function(){return f})),e.d(n,"d",(function(){return b.a}));const p=new r.c(()=>Promise.all([e.e(8),e.e(31),e.e(606)]).then(e.bind(null,19283))),v=new r.b(p,t=>t.getFoldersForMoveTo),d=Object(o.a)(p,t=>t.MoveToFolder)},3641:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(3);const o=Object(r.action)("RESET_MOVETO_STORE")},385:function(t,n,e){"use strict";var r=e(549),o=e(554);n.a=function(t){return null!=t&&Object(o.a)(t.length)&&!Object(r.a)(t)}},4082:function(t,n,e){var r=e(4083);"string"==typeof r&&(r=[[t.i,r,""]]);var o={transform:void 0};e(66)(r,o);r.locals&&(t.exports=r.locals)},4083:function(t,n,e){(n=t.exports=e(65)(!1)).push([t.i,"._3mLAEsk2tH9xfApblSZAPM{max-height:544px}",""]),n.locals={moveToMenu:"_3mLAEsk2tH9xfApblSZAPM"}},415:function(t,n,e){"use strict";var r=Function.prototype.toString;n.a=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},4730:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i}));const r=["MailCompose","MailList","ReadingPane"],o={MailCompose:[],MailList:[],ReadingPane:[]};function c(t,n){const e=o[t];return e.push(n),function(){for(let t=0;t<e.length;t++)e[t]===n&&e.splice(t,1)}}function u(){return new Promise(t=>{window.requestAnimationFrame((function(){for(const t of r)if(i(t))break;return t()}))})}function i(t){const n=o[t];for(let t=n.length-1;t>=0;t--){const e=n[t],r=null==e?void 0:e();if(r)return r}return!1}},549:function(t,n,e){"use strict";var r=e(335),o=e(227),c="[object AsyncFunction]",u="[object Function]",i="[object GeneratorFunction]",a="[object Proxy]";n.a=function(t){if(!Object(o.a)(t))return!1;var n=Object(r.a)(t);return n==u||n==i||n==c||n==a}},551:function(t,n,e){"use strict";n.a=function(t){return t}},554:function(t,n,e){"use strict";var r=9007199254740991;n.a=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}},556:function(t,n,e){"use strict";var r=e(313),o=function(){try{var t=Object(r.a)(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();n.a=o},601:function(t,n,e){"use strict";function r(t,n){for(var e,r=/\r\n|[\n\r]/g,o=1,c=n+1;(e=r.exec(t.body))&&e.index<n;)o+=1,c=n+1-(e.index+e[0].length);return{line:o,column:c}}e.d(n,"a",(function(){return r}))},709:function(t,n,e){"use strict";(function(t){var e="object"==typeof t&&t&&t.Object===Object&&t;n.a=e}).call(this,e(137))},711:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"c",(function(){return c}));var r="function"==typeof Symbol&&null!=Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Symbol&&null!=Symbol.asyncIterator?Symbol.asyncIterator:"@@asyncIterator",c="function"==typeof Symbol&&null!=Symbol.toStringTag?Symbol.toStringTag:"@@toStringTag"},714:function(t,n){t.exports=function(t){if(!t.webpackPolyfill){var n=Object.create(t);n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),Object.defineProperty(n,"exports",{enumerable:!0}),n.webpackPolyfill=1}return n}},803:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return c}));var r=e(601);function o(t){return c(t.source,Object(r.a)(t.source,t.start))}function c(t,n){var e=t.locationOffset.column-1,r=i(e)+t.body,o=n.line-1,c=t.locationOffset.line-1,a=n.line+c,l=1===n.line?e:0,f=n.column+l,s="".concat(t.name,":").concat(a,":").concat(f,"\n"),b=r.split(/\r\n|[\n\r]/g),p=b[o];if(p.length>120){for(var v=Math.floor(f/80),d=f%80,y=[],O=0;O<p.length;O+=80)y.push(p.slice(O,O+80));return s+u([["".concat(a),y[0]]].concat(y.slice(1,v+1).map((function(t){return["",t]})),[[" ",i(d-1)+"^"],["",y[v+1]]]))}return s+u([["".concat(a-1),b[o-1]],["".concat(a),p],["",i(f-1)+"^"],["".concat(a+1),b[o+1]]])}function u(t){var n=t.filter((function(t){t[0];return void 0!==t[1]})),e=Math.max.apply(Math,n.map((function(t){return t[0].length})));return n.map((function(t){var n,r=t[0],o=t[1];return i(e-(n=r).length)+n+(o?" | "+o:" |")})).join("\n")}function i(t){return Array(t+1).join(" ")}},920:function(t,n,e){"use strict";var r=e(925),o=e(933);n.a=function(t){return Object(r.a)((function(n,e){var r=-1,c=e.length,u=c>1?e[c-1]:void 0,i=c>2?e[2]:void 0;for(u=t.length>3&&"function"==typeof u?(c--,u):void 0,i&&Object(o.a)(e[0],e[1],i)&&(u=c<3?void 0:u,c=1),n=Object(n);++r<c;){var a=e[r];a&&t(n,a,r,u)}return n}))}},925:function(t,n,e){"use strict";var r=e(551),o=e(935),c=e(934);n.a=function(t,n){return Object(c.a)(Object(o.a)(t,n,r.a),t+"")}},927:function(t,n,e){"use strict";var r=e(385),o=e(293);n.a=function(t){return Object(o.a)(t)&&Object(r.a)(t)}},933:function(t,n,e){"use strict";var r=e(390),o=e(385),c=e(558),u=e(227);n.a=function(t,n,e){if(!Object(u.a)(e))return!1;var i=typeof n;return!!("number"==i?Object(o.a)(e)&&Object(c.a)(n,e.length):"string"==i&&n in e)&&Object(r.a)(e[n],t)}},934:function(t,n,e){"use strict";var r=function(t){return function(){return t}},o=e(556),c=e(551),u=o.a?function(t,n){return Object(o.a)(t,"toString",{configurable:!0,enumerable:!1,value:r(n),writable:!0})}:c.a,i=800,a=16,l=Date.now;var f=function(t){var n=0,e=0;return function(){var r=l(),o=a-(r-e);if(e=r,o>0){if(++n>=i)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}(u);n.a=f},935:function(t,n,e){"use strict";var r=function(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)},o=Math.max;n.a=function(t,n,e){return n=o(void 0===n?t.length-1:n,0),function(){for(var c=arguments,u=-1,i=o(c.length-n,0),a=Array(i);++u<i;)a[u]=c[n+u];u=-1;for(var l=Array(n+1);++u<n;)l[u]=c[u];return l[n]=e(a),r(t,this,l)}}},937:function(t,n,e){"use strict";var r=function(t){return function(n,e,r){for(var o=-1,c=Object(n),u=r(n),i=u.length;i--;){var a=u[t?i:++o];if(!1===e(c[a],a,c))break}return n}}();n.a=r},938:function(t,n,e){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){return"object"==r(t)&&null!==t}e.d(n,"a",(function(){return o}))},942:function(t,n,e){"use strict";var r=e(335),o=e(713),c=e(293),u="[object Object]",i=Function.prototype,a=Object.prototype,l=i.toString,f=a.hasOwnProperty,s=l.call(Object);n.a=function(t){if(!Object(c.a)(t)||Object(r.a)(t)!=u)return!1;var n=Object(o.a)(t);if(null===n)return!0;var e=f.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&l.call(e)==s}},953:function(t,n,e){"use strict";e.d(n,"a",(function(){return y})),e.d(n,"b",(function(){return O}));var r=e(938),o=e(711),c=e(601),u=e(803);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,n){return!n||"object"!==i(n)&&"function"!=typeof n?f(t):n}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t){var n="function"==typeof Map?new Map:void 0;return(s=function(t){if(null===t||(e=t,-1===Function.toString.call(e).indexOf("[native code]")))return t;var e;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return b(t,arguments,d(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),v(r,t)})(t)}function b(t,n,e){return(b=p()?Reflect.construct:function(t,n,e){var r=[null];r.push.apply(r,n);var o=new(Function.bind.apply(t,r));return e&&v(o,e.prototype),o}).apply(null,arguments)}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function v(t,n){return(v=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&v(t,n)}(y,t);var n,e,u,i,s,b=(n=y,e=p(),function(){var t,r=d(n);if(e){var o=d(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return l(this,t)});function y(t,n,e,o,u,i,a){var s,p,v,d,O;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,y),O=b.call(this,t);var j,h=Array.isArray(n)?0!==n.length?n:void 0:n?[n]:void 0,m=e;!m&&h&&(m=null===(j=h[0].loc)||void 0===j?void 0:j.source);var g,S=o;!S&&h&&(S=h.reduce((function(t,n){return n.loc&&t.push(n.loc.start),t}),[])),S&&0===S.length&&(S=void 0),o&&e?g=o.map((function(t){return Object(c.a)(e,t)})):h&&(g=h.reduce((function(t,n){return n.loc&&t.push(Object(c.a)(n.loc.source,n.loc.start)),t}),[]));var w=a;if(null==w&&null!=i){var T=i.extensions;Object(r.a)(T)&&(w=T)}return Object.defineProperties(f(O),{name:{value:"GraphQLError"},message:{value:t,enumerable:!0,writable:!0},locations:{value:null!==(s=g)&&void 0!==s?s:void 0,enumerable:null!=g},path:{value:null!=u?u:void 0,enumerable:null!=u},nodes:{value:null!=h?h:void 0},source:{value:null!==(p=m)&&void 0!==p?p:void 0},positions:{value:null!==(v=S)&&void 0!==v?v:void 0},originalError:{value:i},extensions:{value:null!==(d=w)&&void 0!==d?d:void 0,enumerable:null!=w}}),null!=i&&i.stack?(Object.defineProperty(f(O),"stack",{value:i.stack,writable:!0,configurable:!0}),l(O)):(Error.captureStackTrace?Error.captureStackTrace(f(O),y):Object.defineProperty(f(O),"stack",{value:Error().stack,writable:!0,configurable:!0}),O)}return u=y,(i=[{key:"toString",value:function(){return O(this)}},{key:o.c,get:function(){return"Object"}}])&&a(u.prototype,i),s&&a(u,s),y}(s(Error));function O(t){var n=t.message;if(t.nodes)for(var e=0,r=t.nodes;e<r.length;e++){var o=r[e];o.loc&&(n+="\n\n"+Object(u.a)(o.loc))}else if(t.source&&t.locations)for(var c=0,i=t.locations;c<i.length;c++){var a=i[c];n+="\n\n"+Object(u.b)(t.source,a)}return n}},959:function(t,n,e){"use strict";var r=e(459),o=e(564),c=e(390);var u=function(t,n,e){(void 0===e||Object(c.a)(t[n],e))&&(void 0!==e||n in t)||Object(o.a)(t,n,e)},i=e(937),a=e(966),l=e(967),f=e(965),s=e(968),b=e(505),p=e(247),v=e(927),d=e(502),y=e(549),O=e(227),j=e(942),h=e(557);var m=function(t,n){if(("constructor"!==n||"function"!=typeof t[n])&&"__proto__"!=n)return t[n]},g=e(915),S=e(706);var w=function(t){return Object(g.a)(t,Object(S.a)(t))};var T=function(t,n,e,r,o,c,i){var g=m(t,e),S=m(n,e),T=i.get(S);if(T)u(t,e,T);else{var x=c?c(g,S,e+"",t,n,i):void 0,P=void 0===x;if(P){var F=Object(p.a)(S),M=!F&&Object(d.a)(S),_=!F&&!M&&Object(h.a)(S);x=S,F||M||_?Object(p.a)(g)?x=g:Object(v.a)(g)?x=Object(f.a)(g):M?(P=!1,x=Object(a.a)(S,!0)):_?(P=!1,x=Object(l.a)(S,!0)):x=[]:Object(j.a)(S)||Object(b.a)(S)?(x=g,Object(b.a)(g)?x=w(g):Object(O.a)(g)&&!Object(y.a)(g)||(x=Object(s.a)(S))):P=!1}P&&(i.set(S,x),o(x,S,r,c,i),i.delete(S)),u(t,e,x)}};var x=function t(n,e,o,c,a){n!==e&&Object(i.a)(e,(function(i,l){if(a||(a=new r.a),Object(O.a)(i))T(n,e,l,o,t,c,a);else{var f=c?c(m(n,l),i,l+"",n,e,a):void 0;void 0===f&&(f=i),u(n,l,f)}}),S.a)},P=e(920),F=Object(P.a)((function(t,n,e){x(t,n,e)}));n.a=F},971:function(t,n,e){"use strict";n.a=function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}}}]);
//# sourceMappingURL=owa.693.js.map
self.scriptsLoaded['owa.693.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.693.js'] = (new Date()).getTime();