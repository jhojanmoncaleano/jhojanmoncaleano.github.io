self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.2021.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[2021],{3210:function(t,e,n){
/*!***************************************************
* external-markjs v9.1.1
* https://markjs.io/
* Copyright (c) 2014–2019, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
t.exports=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var i=function(){function t(n){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;e(this,t),this.ctx=n,this.iframes=r,this.exclude=o,this.iframesTimeout=i}return r(t,[{key:"getContexts",value:function(){var t=[];return(void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach((function(e){var n=t.filter((function(t){return t.contains(e)})).length>0;-1!==t.indexOf(e)||n||t.push(e)})),t}},{key:"getIframeContents",value:function(t,e){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};try{var o=t.contentWindow;if(n=o.document,!o||!n)throw new Error("iframe inaccessible")}catch(t){r()}n&&e(n)}},{key:"isIframeBlank",value:function(t){var e="about:blank",n=t.getAttribute("src").trim();return t.contentWindow.location.href===e&&n!==e&&n}},{key:"observeIframeLoad",value:function(t,e,n){var r=this,o=!1,i=null,a=function a(){if(!o){o=!0,clearTimeout(i);try{r.isIframeBlank(t)||(t.removeEventListener("load",a),r.getIframeContents(t,e,n))}catch(t){n()}}};t.addEventListener("load",a),i=setTimeout(a,this.iframesTimeout)}},{key:"onIframeReady",value:function(t,e,n){try{"complete"===t.contentWindow.document.readyState?this.isIframeBlank(t)?this.observeIframeLoad(t,e,n):this.getIframeContents(t,e,n):this.observeIframeLoad(t,e,n)}catch(t){n()}}},{key:"waitForIframes",value:function(t,e){var n=this,r=0;this.forEachIframe(t,(function(){return!0}),(function(t){r++,n.waitForIframes(t.querySelector("html"),(function(){--r||e()}))}),(function(t){t||e()}))}},{key:"forEachIframe",value:function(e,n,r){var o=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a=e.querySelectorAll("iframe"),s=a.length,c=0;a=Array.prototype.slice.call(a);var u=function(){--s<=0&&i(c)};s||u(),a.forEach((function(e){t.matches(e,o.exclude)?u():o.onIframeReady(e,(function(t){n(e)&&(c++,r(t)),u()}),u)}))}},{key:"createIterator",value:function(t,e,n){return document.createNodeIterator(t,e,n,!1)}},{key:"createInstanceOnIframe",value:function(e){return new t(e.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(t,e,n){if(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING){if(null===e)return!0;if(e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}},{key:"getIteratorNode",value:function(t){var e=t.previousNode();return{prevNode:e,node:null===e?t.nextNode():t.nextNode()&&t.nextNode()}}},{key:"checkIframeFilter",value:function(t,e,n,r){var o=!1,i=!1;return r.forEach((function(t,e){t.val===n&&(o=e,i=t.handled)})),this.compareNodeIframe(t,e,n)?(!1!==o||i?!1===o||i||(r[o].handled=!0):r.push({val:n,handled:!0}),!0):(!1===o&&r.push({val:n,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(t,e,n,r){var o=this;t.forEach((function(t){t.handled||o.getIframeContents(t.val,(function(t){o.createInstanceOnIframe(t).forEachNode(e,n,r)}))}))}},{key:"iterateThroughNodes",value:function(t,e,n,r,o){for(var i,a,s,c=this,u=this.createIterator(e,t,r),l=[],h=[];s=void 0,s=c.getIteratorNode(u),a=s.prevNode,i=s.node;)this.iframes&&this.forEachIframe(e,(function(t){return c.checkIframeFilter(i,a,t,l)}),(function(e){c.createInstanceOnIframe(e).forEachNode(t,(function(t){return h.push(t)}),r)})),h.push(i);h.forEach((function(t){n(t)})),this.iframes&&this.handleOpenIframes(l,t,n,r),o()}},{key:"forEachNode",value:function(t,e,n){var r=this,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=this.getContexts(),a=i.length;a||o(),i.forEach((function(i){var s=function(){r.iterateThroughNodes(t,i,e,n,(function(){--a<=0&&o()}))};r.iframes?r.waitForIframes(i,s):s()}))}}],[{key:"matches",value:function(t,e){var n="string"==typeof e?[e]:e,r=t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector;if(r){var o=!1;return n.every((function(e){return!r.call(t,e)||(o=!0,!1)})),o}return!1}}]),t}(),a=function(){function t(n){e(this,t),this.opt=o({},{diacritics:!0,synonyms:{},accuracy:"partially",caseSensitive:!1,ignoreJoiners:!1,ignorePunctuation:[],wildcards:"disabled"},n)}return r(t,[{key:"create",value:function(t){return"disabled"!==this.opt.wildcards&&(t=this.setupWildcardsRegExp(t)),t=this.escapeStr(t),Object.keys(this.opt.synonyms).length&&(t=this.createSynonymsRegExp(t)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(t=this.setupIgnoreJoinersRegExp(t)),this.opt.diacritics&&(t=this.createDiacriticsRegExp(t)),t=this.createMergedBlanksRegExp(t),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(t=this.createJoinersRegExp(t)),"disabled"!==this.opt.wildcards&&(t=this.createWildcardsRegExp(t)),t=this.createAccuracyRegExp(t),new RegExp(t,"gm".concat(this.opt.caseSensitive?"":"i"))}},{key:"sortByLength",value:function(t){return t.sort((function(t,e){return t.length===e.length?t>e?1:-1:e.length-t.length}))}},{key:"escapeStr",value:function(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createSynonymsRegExp",value:function(t){var e=this,n=this.opt.synonyms,r=this.opt.caseSensitive?"":"i",o=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var i in n)if(n.hasOwnProperty(i)){var a=Array.isArray(n[i])?n[i]:[n[i]];a.unshift(i),(a=this.sortByLength(a).map((function(t){return"disabled"!==e.opt.wildcards&&(t=e.setupWildcardsRegExp(t)),t=e.escapeStr(t)})).filter((function(t){return""!==t}))).length>1&&(t=t.replace(new RegExp("(".concat(a.map((function(t){return e.escapeStr(t)})).join("|"),")"),"gm".concat(r)),o+"(".concat(a.map((function(t){return e.processSynonyms(t)})).join("|"),")")+o))}return t}},{key:"processSynonyms",value:function(t){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(t=this.setupIgnoreJoinersRegExp(t)),t}},{key:"setupWildcardsRegExp",value:function(t){return(t=t.replace(/(?:\\)*\?/g,(function(t){return"\\"===t.charAt(0)?"?":""}))).replace(/(?:\\)*\*/g,(function(t){return"\\"===t.charAt(0)?"*":""}))}},{key:"createWildcardsRegExp",value:function(t){var e="withSpaces"===this.opt.wildcards;return t.replace(/\u0001/g,e?"[\\S\\s]?":"\\S?").replace(/\u0002/g,e?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(t){return t.replace(/[^(|)\\]/g,(function(t,e,n){var r=n.charAt(e+1);return/[(|)\\]/.test(r)||""===r?t:t+"\0"}))}},{key:"createJoinersRegExp",value:function(t){var e=[],n=this.opt.ignorePunctuation;return Array.isArray(n)&&n.length&&e.push(this.escapeStr(n.join(""))),this.opt.ignoreJoiners&&e.push("\\u00ad\\u200b\\u200c\\u200d"),e.length?t.split(/\u0000+/).join("[".concat(e.join(""),"]*")):t}},{key:"createDiacriticsRegExp",value:function(t){var e=this.opt.caseSensitive?"":"i",n=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],r=[];return t.split("").forEach((function(o){n.every((function(n){if(-1!==n.indexOf(o)){if(r.indexOf(n)>-1)return!1;t=t.replace(new RegExp("[".concat(n,"]"),"gm".concat(e)),"[".concat(n,"]")),r.push(n)}return!0}))})),t}},{key:"createMergedBlanksRegExp",value:function(t){return t.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(t){var e=this,n=this.opt.accuracy,r="string"==typeof n?n:n.value,o="string"==typeof n?[]:n.limiters,i="";switch(o.forEach((function(t){i+="|".concat(e.escapeStr(t))})),r){case"partially":default:return"()(".concat(t,")");case"prefix":return"(\\b)(".concat(t,")");case"complementary":return i="\\s"+(i||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")),"()([^".concat(i,"]*").concat(t,"[^").concat(i,"]*)");case"exactly":return"(^|\\s".concat(i,")(").concat(t,")(?=$|\\s").concat(i,")")}}}]),t}(),s=function(){function n(t){e(this,n),this.ctx=t,this.ie=!1;var r=window.navigator.userAgent;(r.indexOf("MSIE")>-1||r.indexOf("Trident")>-1)&&(this.ie=!0)}return r(n,[{key:"log",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",r=this.opt.log;this.opt.debug&&"object"===t(r)&&"function"==typeof r[n]&&r[n]("mark.js: ".concat(e))}},{key:"getSeparatedKeywords",value:function(t){var e=this,n=[];return t.forEach((function(t){e.opt.separateWordSearch?t.split(" ").forEach((function(t){t.trim()&&-1===n.indexOf(t)&&n.push(t)})):t.trim()&&-1===n.indexOf(t)&&n.push(t)})),{keywords:n.sort((function(t,e){return e.length-t.length})),length:n.length}}},{key:"isNumeric",value:function(t){return Number(parseFloat(t))==t}},{key:"checkRanges",value:function(t){var e=this;if(!Array.isArray(t)||"[object Object]"!==Object.prototype.toString.call(t[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(t),[];var n=[],r=0;return t.sort((function(t,e){return t.start-e.start})).forEach((function(t){var o=e.callNoMatchOnInvalidRanges(t,r),i=o.start,a=o.end;o.valid&&(t.start=i,t.length=a-i,n.push(t),r=a)})),n}},{key:"callNoMatchOnInvalidRanges",value:function(t,e){var n,r,o=!1;return t&&void 0!==t.start?(r=(n=parseInt(t.start,10))+parseInt(t.length,10),this.isNumeric(t.start)&&this.isNumeric(t.length)&&r-e>0&&r-n>0?o=!0:(this.log("Ignoring invalid or overlapping range: "+"".concat(JSON.stringify(t))),this.opt.noMatch(t))):(this.log("Ignoring invalid range: ".concat(JSON.stringify(t))),this.opt.noMatch(t)),{start:n,end:r,valid:o}}},{key:"checkWhitespaceRanges",value:function(t,e,n){var r,o=!0,i=n.length,a=e-i,s=parseInt(t.start,10)-a;return(r=(s=s>i?i:s)+parseInt(t.length,10))>i&&(r=i,this.log("End range automatically set to the max value of ".concat(i))),s<0||r-s<0||s>i||r>i?(o=!1,this.log("Invalid range: ".concat(JSON.stringify(t))),this.opt.noMatch(t)):""===n.substring(s,r).replace(/\s+/g,"")&&(o=!1,this.log("Skipping whitespace only range: "+JSON.stringify(t)),this.opt.noMatch(t)),{start:s,end:r,valid:o}}},{key:"getTextNodes",value:function(t){var e=this,n="",r=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,(function(t){r.push({start:n.length,end:(n+=t.textContent).length,node:t})}),(function(t){return e.matchesExclude(t.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),(function(){t({value:n,nodes:r})}))}},{key:"matchesExclude",value:function(t){return i.matches(t,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(t,e,n){var r=this.opt.element?this.opt.element:"mark",o=t.splitText(e),i=o.splitText(n-e),a=document.createElement(r);return a.setAttribute("data-markjs","true"),this.opt.className&&a.setAttribute("class",this.opt.className),a.textContent=o.textContent,o.parentNode.replaceChild(a,o),i}},{key:"wrapRangeInMappedTextNode",value:function(t,e,n,r,o){var i=this;t.nodes.every((function(a,s){var c=t.nodes[s+1];if(void 0===c||c.start>e){if(!r(a.node))return!1;var u=e-a.start,l=(n>a.end?a.end:n)-a.start,h=t.value.substr(0,a.start),f=t.value.substr(l+a.start);if(a.node=i.wrapRangeInTextNode(a.node,u,l),t.value=h+f,t.nodes.forEach((function(e,n){n>=s&&(t.nodes[n].start>0&&n!==s&&(t.nodes[n].start-=l),t.nodes[n].end-=l)})),n-=l,o(a.node.previousSibling,a.start),!(n>a.end))return!1;e=a.end}return!0}))}},{key:"wrapGroups",value:function(t,e,n,r){return r((t=this.wrapRangeInTextNode(t,e,e+n)).previousSibling),t}},{key:"separateGroups",value:function(t,e,n,r,o){for(var i=e.length,a=1;a<i;a++){var s=t.textContent.indexOf(e[a]);e[a]&&s>-1&&r(e[a],t)&&(t=this.wrapGroups(t,s,e[a].length,o))}return t}},{key:"wrapMatches",value:function(t,e,n,r,o){var i=this,a=0===e?0:e+1;this.getTextNodes((function(e){e.nodes.forEach((function(e){var o;for(e=e.node;null!==(o=t.exec(e.textContent))&&""!==o[a];){if(i.opt.separateGroups&&1!==o.length)e=i.separateGroups(e,o,a,n,r);else{if(!n(o[a],e))continue;var s=o.index;if(0!==a)for(var c=1;c<a;c++)s+=o[c].length;e=i.wrapGroups(e,s,o[a].length,r)}t.lastIndex=0}})),o()}))}},{key:"wrapMatchesAcrossElements",value:function(t,e,n,r,o){var i=this,a=0===e?0:e+1;this.getTextNodes((function(e){for(var s;null!==(s=t.exec(e.value))&&""!==s[a];){var c=s.index;if(0!==a)for(var u=1;u<a;u++)c+=s[u].length;var l=c+s[a].length;i.wrapRangeInMappedTextNode(e,c,l,(function(t){return n(s[a],t)}),(function(e,n){t.lastIndex=n,r(e)}))}o()}))}},{key:"wrapRangeFromIndex",value:function(t,e,n,r){var o=this;this.getTextNodes((function(i){var a=i.value.length;t.forEach((function(t,r){var s=o.checkWhitespaceRanges(t,a,i.value),c=s.start,u=s.end;s.valid&&o.wrapRangeInMappedTextNode(i,c,u,(function(n){return e(n,t,i.value.substring(c,u),r)}),(function(e){n(e,t)}))})),r()}))}},{key:"unwrapMatches",value:function(t){for(var e=t.parentNode,n=document.createDocumentFragment();t.firstChild;)n.appendChild(t.removeChild(t.firstChild));e.replaceChild(n,t),this.ie?this.normalizeTextNode(e):e.normalize()}},{key:"normalizeTextNode",value:function(t){if(t){if(3===t.nodeType)for(;t.nextSibling&&3===t.nextSibling.nodeType;)t.nodeValue+=t.nextSibling.nodeValue,t.parentNode.removeChild(t.nextSibling);else this.normalizeTextNode(t.firstChild);this.normalizeTextNode(t.nextSibling)}}},{key:"markRegExp",value:function(t,e){var n=this;this.opt=e,this.log('Searching with expression "'.concat(t,'"'));var r=0,o="wrapMatches";this.opt.acrossElements&&(o="wrapMatchesAcrossElements"),this[o](t,this.opt.ignoreGroups,(function(t,e){return n.opt.filter(e,t,r)}),(function(t){r++,n.opt.each(t)}),(function(){0===r&&n.opt.noMatch(t),n.opt.done(r)}))}},{key:"mark",value:function(t,e){var n=this;this.opt=e;var r=0,o="wrapMatches",i=this.getSeparatedKeywords("string"==typeof t?[t]:t),s=i.keywords,c=i.length;this.opt.acrossElements&&(o="wrapMatchesAcrossElements"),0===c?this.opt.done(r):function t(e){var i=new a(n.opt).create(e),u=0;n.log('Searching with expression "'.concat(i,'"')),n[o](i,1,(function(t,o){return n.opt.filter(o,e,r,u)}),(function(t){u++,r++,n.opt.each(t)}),(function(){0===u&&n.opt.noMatch(e),s[c-1]===e?n.opt.done(r):t(s[s.indexOf(e)+1])}))}(s[0])}},{key:"markRanges",value:function(t,e){var n=this;this.opt=e;var r=0,o=this.checkRanges(t);o&&o.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(o)),this.wrapRangeFromIndex(o,(function(t,e,r,o){return n.opt.filter(t,e,r,o)}),(function(t,e){r++,n.opt.each(t,e)}),(function(){n.opt.done(r)}))):this.opt.done(r)}},{key:"unmark",value:function(t){var e=this;this.opt=t;var n=this.opt.element?this.opt.element:"*";n+="[data-markjs]",this.opt.className&&(n+=".".concat(this.opt.className)),this.log('Removal selector "'.concat(n,'"')),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,(function(t){e.unwrapMatches(t)}),(function(t){var r=i.matches(t,n),o=e.matchesExclude(t);return!r||o?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),this.opt.done)}},{key:"opt",set:function(t){this._opt=o({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,acrossElements:!1,ignoreGroups:0,each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},t)},get:function(){return this._opt}},{key:"iterator",get:function(){return new i(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),n}();return function(t){var e=this,n=new s(t);return this.mark=function(t,r){return n.mark(t,r),e},this.markRegExp=function(t,r){return n.markRegExp(t,r),e},this.markRanges=function(t,r){return n.markRanges(t,r),e},this.unmark=function(t){return n.unmark(t),e},this}}()}}]);
//# sourceMappingURL=owa.2021.js.map
self.scriptsLoaded['owa.2021.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.2021.js'] = (new Date()).getTime();