self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.841.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[841],{10115:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var c=o(1945);function n(t,e,o,n){var a;if(!t||!1===o||n)return;const i=Object(c.b)().tableViews.get(t);i&&(null===(a=document.getElementById(i.rowKeys[0]))||void 0===a||a.scrollIntoView())}},19451:function(t,e,o){"use strict";o.r(e);var c=o(1744),n=o(3107),a=o(2110),i=o(2202),r=o(8697),l=o(1760),s=o(1905),d=o(5057),b=o(5810),u=o(5345),m=o(1679),f=o(2560),h=o(1846),p=o(10115),g=o(5359),y=o(3883),j=o(2507),w=o(4298),O=o(958);const k="Keyboard";function x(t){return[{command:Object(n.b)().openMail,handler:()=>(function(t){const e=R(t);f.c.importAndExecute(e,m.Z.expandedConversationViewState.selectedNodeIds,[...e.selectedRowKeys.keys()],l.a.KeyboardEnter)})(t)},{command:Object(n.b)().openMailInPopout,handler:()=>(function(t){const e=R(t);f.c.importAndExecute(e,m.Z.expandedConversationViewState.selectedNodeIds,[...e.selectedRowKeys.keys()],l.a.KeyboardShiftEnter)})(t)},{command:Object(n.b)().home,handler:()=>Object(p.a)(t,l.a.KeyboardHome)},{command:Object(n.b)().end,handler:()=>(function(t){const e=R(t);e.rowKeys.length>0&&Object(h.q)(e,e.rowKeys[e.rowKeys.length-1],!0,l.a.KeyboardEnd)})(t)},{command:Object(n.b)().selectAll,handler:()=>(function(t){const e=R(t);Object(m.w)(e)||Object(h.r)(e)})(t)},{command:Object(n.b)().deselectAll,handler:()=>(function(t){const e=R(t);Object(m.w)(e)?Object(h.r)(e):Object(h.i)(e,l.a.Reset)})(t)},{command:"down",handler:()=>K(t,m.d.Next),options:{stopPropagation:!1}},{command:"up",handler:()=>K(t,m.d.Previous),options:{stopPropagation:!1}},{command:"ctrl+down",handler:()=>(function(t){f.b.importAndExecute(m.d.Next,R(t),l.a.KeyboardUpDown,!1)})(t),options:{stopPropagation:!1}},{command:"ctrl+up",handler:()=>(function(t){f.b.importAndExecute(m.d.Previous,R(t),l.a.KeyboardUpDown,!1)})(t),options:{stopPropagation:!1}},{command:"shift+down",handler:()=>(function(t){E(t,m.d.Next,!1)})(t),options:{stopPropagation:!1}},{command:"shift+ctrl+down",handler:()=>(function(t){E(t,m.d.Next,!0)})(t),options:{stopPropagation:!1}},{command:"shift+up",handler:()=>(function(t){E(t,m.d.Previous,!1)})(t),options:{stopPropagation:!1}},{command:"shift+ctrl+up",handler:()=>(function(t){E(t,m.d.Previous,!0)})(t),options:{stopPropagation:!1}},{command:Object(n.b)().selectUnselectMessage,handler:()=>(function(t){f.a.importAndExecute(R(t),l.a.KeyboardCtrlSpace)})(t)},{command:Object(n.b)().expandCollapseAll,handler:()=>I(t)},{command:Object(n.b)().expandAll,handler:()=>I(t,!0)},{command:Object(n.b)().collapseAll,handler:()=>I(t,!1)},{command:Object(n.b)().deleteMail,handler:()=>(function(t){const e=R(t);Object(w.a)(e)&&Object(u.a)(k,k,!1)})(t)},{command:Object(n.b)().softDeleteMail,handler:()=>(function(t){const e=R(t);Object(w.a)(e)&&Object(u.a)(k,k,!0)})(t)}]}function v(t){return[{command:Object(n.b)().forward,handler:()=>void Object(b.a)(k)},{command:Object(n.b)().replyAll,handler:()=>void Object(b.c)(k)},{command:Object(n.b)().reply,handler:()=>void Object(b.b)(k)},{command:Object(n.b)().toggleFlag,handler:Object(O.a)(()=>(function(t){const e=R(t);if(Object(c.e)(e.tableQuery))return;s.C.importAndExecute(e,m.Z.expandedConversationViewState.selectedNodeIds,[...e.selectedRowKeys.keys()])})(t),300,{leading:!0,trailing:!1})},{command:Object(n.b)().markAsRead,handler:()=>(function(t){M(t,!0)})(t)},{command:Object(n.b)().markAsUnread,handler:()=>(function(t){M(t,!1)})(t)},{command:Object(n.b)().markAsJunk,handler:()=>(function(t){const e=R(t);if(Object(c.e)(e.tableQuery))return;s.B.importAndExecute(e,m.Z.expandedConversationViewState.selectedNodeIds,[...e.selectedRowKeys.keys()])})(t)},{command:Object(n.b)().archiveMail,handler:()=>(function(t){const e=R(t);if(Object(c.e)(e.tableQuery))return;Object(d.a)(k)})(t)},{command:Object(n.b)().moveToFolder,handler:()=>A(t,g.a.MoveTo,28)},{command:Object(n.b)().categorize,handler:()=>A(t,g.a.Categorize,6)},{command:Object(n.b)().snooze,handler:()=>A(t,g.a.Snooze,62)},{command:Object(n.b)().ignore,handler:()=>(async function(t){const e=R(t),o=[...e.selectedRowKeys.keys()],c=Object(j.e)()[19];(await s.M.import())(o,e,c(),k)})(t)}]}function A(t,e,o){if(!(0,Object(j.e)()[o])())return;const c=function(t){const e=[...m.Z.tableViews.get(t).selectedRowKeys.keys()];if(0===e.length)return null;const o=document.getElementById(e[0]),c=null==o?void 0:o.getBoundingClientRect();if((null==c?void 0:c.height)>0)return{x:c.right,y:c.top};const n=document.getElementById("immersiveExitButton"),a=null==n?void 0:n.getBoundingClientRect();if((null==a?void 0:a.height)>0)return{x:a.right,y:a.bottom};return null}(t);c&&Object(y.b)({x:c.x,y:c.y},e)}function I(t,e){const o=R(t),c=[...null==o?void 0:o.selectedRowKeys.keys()];if(Object(m.R)(o)&&1==c.length){const t=c[0],n=null!=e?e:!Object(r.a)(t);i.i.importAndExecute(t,n,!0),n?Object(h.q)(o,t,!0,l.a.MailListItemTwisty):Object(h.b)(t)}}function E(t,e,o){Object(h.c)(R(t),l.a.KeyboardUpDown,e,o)}function K(t,e){f.b.importAndExecute(e,R(t),l.a.KeyboardUpDown,!0)}function M(t,e){const o=R(t),c=o.isInVirtualSelectAllMode,n=c?[]:[...o.selectedRowKeys.keys()],i=c?o.virtualSelectAllExclusionList:[];a.f.importAndExecute(o,m.Z.expandedConversationViewState.selectedNodeIds,c,n,i,e)}function R(t){return m.Z.tableViews.get(t)}var S=o(2750);function N(t){const e=[];return e.push({command:"left",handler:()=>Object(h.b)(t.mailListItemDataProps.rowKey)},{command:"right",handler:()=>(function(t,e,o){if(!t||Object(S.c)(e))return;Object(h.q)(m.Z.tableViews.get(o),e,!0,l.a.MailListItemTwisty)})(t.mailListItemDataProps.shouldShowTwisty,t.mailListItemDataProps.rowKey,t.mailListTableProps.tableViewId)}),e}var V=o(699),T=o(3900);const P=Object(V.action)("updateMailItemHeights")((function(t,e,o){m.Z.offsetHeight=o,m.Z.scrollTop=e,m.Z.doNotVirtualize=!1;for(var c=0;c<t.length;c++){const e=t[c],o=document.getElementById(e);o&&m.Z.rowInfoForVLV.set(e,{rowHeight:o.offsetHeight,rowOffset:o.offsetTop})}})),C=Object(T.a)((t,e,o)=>{P(t,e,o)},200);o.d(e,"setupMailListContentKeys",(function(){return x})),o.d(e,"setupTriageActionKeys",(function(){return v})),o.d(e,"setupMailListItemContainerKeys",(function(){return N})),o.d(e,"updateMailItemHeights",(function(){return P})),o.d(e,"updateMailItemHeightsThrottled",(function(){return C}))},2336:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var c=o(3);let n=Object(c.action)("USERMAIL_INTERACTION",(t,e,o)=>({interactionType:t,instrumentationContexts:e,triageContext:o}))},2560:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r})),o.d(e,"a",(function(){return l}));var c=o(20),n=o(2336);o.d(e,"d",(function(){return n.a}));const a=new c.c(()=>o.e(1253).then(o.bind(null,4641)));let i=new c.a(a,t=>t.onKeyboardUpDown),r=new c.a(a,t=>t.onOpenEmail),l=new c.a(a,t=>t.onKeyboardToggleSelect)},2857:function(t){t.exports=JSON.parse('{"c":"dpa","a":"epa","d":"fpa","e":"gpa","f":"hpa","b":"ipa"}')},2885:function(t,e,o){"use strict";var c=o(5),n=o(2857),a=o(1949),i=o(2),r=o(131);const l="goTo";function s(){const t={gotoMail:d(n.c,"ctrl+shift+1","ctrl+1"),gotoCalendar:d(n.a,"ctrl+shift+2","ctrl+2"),gotoPeople:d(n.d,"ctrl+shift+3","ctrl+3")};return Object(a.d)()!==a.a.None&&(t.gotoToDo=d(Object(a.b)()?n.f:n.e,"ctrl+shift+4","ctrl+4")),!Object(r.a)()||"Dogfood"!=Object(i.D)()&&"Microsoft"!=Object(i.D)()||(t.goToDevTools=d(n.b,"ctrl+shift+d","ctrl+shift+d")),t}function d(t,e,o){return{category:l,description:Object(c.b)(t),hotmail:e,yahoo:e,gmail:e,owa:e,outlook:o}}o.d(e,"b",(function(){return s})),o.d(e,"a",(function(){return l}))},3107:function(t,e,o){"use strict";o.d(e,"a",(function(){return g})),o.d(e,"b",(function(){return y}));var c=o(3405),n=o(3727),a=o(3165),i=o(3246),r=o(3247),l=o(5),s=o(44),d=o(169),b=o(2885);const u="writeEmail",m="emailList",f="readEmail",h="goTo",p="emailActions";function g(){return[{category:u,displayName:Object(l.b)(n.Q)},{category:m,displayName:Object(l.b)(n.i)},{category:f,displayName:Object(l.b)(n.G)},{category:h,displayName:Object(l.b)(n.r)},{category:p,displayName:Object(l.b)(n.h)}]}function y(){const t={};return Object(s.j)("cmp-quickSwitcher")&&(t.goToQuickSwitcher={category:h,description:Object(l.b)(n.t),hotmail:"ctrl+shift+k",yahoo:"ctrl+shift+k",gmail:"ctrl+shift+k",owa:"ctrl+shift+k"}),Object.assign(Object.assign(Object.assign({},Object(b.b)()),{newMail:{category:u,description:Object(l.b)(n.A),hotmail:["n"],yahoo:"n",gmail:"c",owa:["n"],outlook:"ctrl+n"},sendMail:{category:u,description:Object(l.b)(n.L),hotmail:Object(d.j)()?["ctrl+enter"]:["ctrl+enter","alt+s"],yahoo:"alt+s",gmail:"ctrl+enter",owa:Object(d.j)()?["ctrl+enter"]:["ctrl+enter","alt+s"],outlook:Object(d.j)()?["ctrl+enter"]:["ctrl+enter","alt+s"]},reply:{category:u,description:Object(l.b)(n.I),hotmail:"r",yahoo:"r",gmail:"r",owa:["r","ctrl+r"],outlook:"ctrl+r"},replyAll:{category:u,description:Object(l.b)(n.H),hotmail:["a","shift+r"],yahoo:"a",gmail:"a",owa:["shift+r","ctrl+shift+r"],outlook:"ctrl+shift+r"},forward:{category:u,description:Object(l.b)(n.p),hotmail:"shift+f",yahoo:"f",gmail:"f",owa:["shift+f","ctrl+shift+f"],outlook:"ctrl+f"},saveDraft:{category:u,description:Object(l.b)(n.J),hotmail:"ctrl+s",yahoo:"ctrl+s",gmail:"ctrl+s",owa:"ctrl+s",outlook:"ctrl+s"},discardDraft:{category:u,description:Object(l.b)(n.g),hotmail:"esc",owa:"esc",outlook:"esc"},gotoInbox:{category:h,description:Object(l.b)(n.s),hotmail:"g i",yahoo:"m",gmail:"g i",owa:"g i",outlook:"ctrl+shift+i"},gotoDrafts:{category:h,description:Object(l.b)(n.q),hotmail:"g d",gmail:"g d",owa:"g d"},gotoSent:{category:h,description:Object(l.b)(n.u),hotmail:"g s",gmail:"g t",owa:"g s"},gotoSearch:{category:h,description:Object(l.b)(n.K),hotmail:"/",yahoo:"s",gmail:"/",owa:"alt+q",outlook:["ctrl+e","f3"]},undoAction:{category:p,description:Object(l.b)(n.P),hotmail:"ctrl+z",yahoo:"ctrl+z",gmail:"ctrl+z",owa:"ctrl+z",outlook:"ctrl+z"},selectUnselectMessage:{category:m,description:Object(l.b)(n.O),hotmail:"ctrl+space",yahoo:"ctrl+space",gmail:["x","ctrl+x"],owa:"ctrl+space",outlook:"ctrl+space"},selectAll:{category:m,description:Object(l.b)(c.a),hotmail:"ctrl+a",yahoo:"ctrl+a",gmail:"ctrl+a",owa:"ctrl+a",outlook:"ctrl+a"},deselectAll:{category:m,description:Object(l.b)(n.c),hotmail:"esc",yahoo:"esc",gmail:"esc",owa:"esc",outlook:"esc"},home:{category:m,description:Object(l.b)(n.v),hotmail:["home","ctrl+home"],yahoo:["home","ctrl+home"],gmail:["home","ctrl+home"],owa:["home","ctrl+home"],outlook:["home","ctrl+home"]},end:{category:m,description:Object(l.b)(n.j),hotmail:["end","ctrl+end"],yahoo:["end","ctrl+end"],gmail:["end","ctrl+end"],owa:["end","ctrl+end"],outlook:["end","ctrl+end"]},deleteMail:{category:p,description:Object(l.b)(n.f),hotmail:"del",yahoo:"del",gmail:"#",owa:"del",outlook:"del"},openMail:{category:f,description:Object(l.b)(n.C),hotmail:["o","enter"],gmail:["o","enter"],owa:["o","enter"],outlook:"enter"},openMailInPopout:{category:f,description:Object(l.b)(n.D),hotmail:"shift+enter",gmail:"shift+enter",owa:"shift+enter",yahoo:"shift+enter",outlook:"shift+enter"},closeMail:{category:f,description:Object(l.b)(n.d),hotmail:"esc",yahoo:"esc",gmail:"u",owa:"esc",outlook:"esc"},openNextItem:{category:f,description:Object(l.b)(n.E),hotmail:"ctrl+.",yahoo:"ctrl+.",gmail:"j",owa:"ctrl+.",outlook:"ctrl+."},openPrevItem:{category:f,description:Object(l.b)(n.F),hotmail:"ctrl+,",yahoo:"ctrl+,",gmail:"k",owa:"ctrl+,",outlook:"ctrl+,"},focusNextItemPart:{category:f,description:Object(l.b)(n.n),hotmail:".",gmail:"n",owa:"."},focusPrevItemPart:{category:f,description:Object(l.b)(n.o),hotmail:",",gmail:"p",owa:","},expandCollapseAll:{category:f,description:Object(l.b)(n.k),hotmail:"x",owa:"x"},expandAll:{category:f,description:Object(l.b)(n.l),gmail:";",outlook:"right"},collapseAll:{category:f,description:Object(l.b)(n.e),gmail:":",outlook:"left"},softDeleteMail:{category:p,description:Object(l.b)(n.N),hotmail:"shift+del",yahoo:"shift+del",gmail:"shift+del",owa:"shift+del",outlook:"shift+del"},newFolder:{category:p,description:Object(l.b)(n.B),hotmail:"shift+e",yahoo:"ctrl+shift+e",owa:"shift+e",outlook:"ctrl+shift+e"},markAsRead:{category:p,description:Object(l.b)(n.y),hotmail:"q",yahoo:"k",gmail:"shift+i",owa:Object(d.j)()?"q":["q","ctrl+q"],outlook:"ctrl+q"},markAsUnread:{category:p,description:Object(l.b)(n.z),hotmail:"u",yahoo:"shift+k",gmail:"shift+u",owa:["u","ctrl+u"],outlook:"ctrl+u"},markAsReadUnread:{category:"",description:"",hotmail:["q","u"],yahoo:["k","shift+k"],gmail:["shift+i","shift+u"],owa:Object(d.j)()?["q","u"]:["ctrl+q","ctrl+u"],outlook:["ctrl+q","ctrl+u"]},toggleFlag:{category:p,description:Object(l.b)(n.m),hotmail:"ins",yahoo:"l",gmail:"s",owa:"ins",outlook:"ins"},archiveMail:{category:p,description:Object(l.b)(n.a),hotmail:"e",gmail:"e",owa:"e",outlook:"backspace"},markAsJunk:{category:p,description:Object(l.b)(n.x),hotmail:"j",gmail:"shift+1",owa:"j",outlook:"ctrl+j"},moveToFolder:{category:p,description:Object(l.b)(a.a),hotmail:"v",gmail:"v",owa:"v",outlook:"ctrl+shift+v"},categorize:{category:p,description:Object(l.b)(n.b),hotmail:"c",gmail:"l",owa:"c"},ignore:{category:p,description:Object(l.b)(i.a),hotmail:"ctrl+del",owa:"ctrl+del",outlook:"ctrl+del"},snooze:{category:p,description:Object(l.b)(r.a),hotmail:"b",gmail:"b",owa:"b"},insertHyperlink:{category:u,description:Object(l.b)(n.w),hotmail:"ctrl+k",gmail:"ctrl+k",owa:"ctrl+k",outlook:"ctrl+k"},keyboardShortcuts:{category:h,description:Object(l.b)(n.M),hotmail:"?",gmail:"?",owa:"?",yahoo:"?"}}),t)}},3153:function(t,e,o){"use strict";o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return r}));var c=o(20);const n=new c.c(()=>o.e(1294).then(o.bind(null,6113))),a=new c.a(n,t=>t.getAccountInformation),i=new c.b(n,t=>t.getStore),r=new c.b(n,t=>t.tryValidateDumpsterQuota)},3165:function(t){t.exports=JSON.parse('{"a":"qBa"}')},3246:function(t){t.exports=JSON.parse('{"a":"O4b"}')},3247:function(t){t.exports=JSON.parse('{"a":"N4b"}')},3405:function(t){t.exports=JSON.parse('{"a":"nba"}')},3727:function(t){t.exports=JSON.parse('{"Q":"Y3b","i":"Z3b","G":"_3b","r":"$3b","h":"a4b","t":"b4b","A":"c4b","L":"d4b","I":"e4b","H":"f4b","p":"g4b","J":"h4b","g":"i4b","s":"j4b","q":"k4b","u":"l4b","K":"m4b","P":"n4b","c":"o4b","v":"p4b","j":"q4b","f":"r4b","C":"s4b","D":"t4b","d":"u4b","E":"v4b","F":"w4b","n":"x4b","o":"y4b","k":"z4b","l":"A4b","e":"B4b","N":"C4b","B":"D4b","y":"E4b","z":"F4b","m":"G4b","a":"H4b","x":"I4b","b":"J4b","w":"K4b","M":"L4b","O":"M4b"}')},3900:function(t,e,o){"use strict";var c=o(958),n=o(227),a="Expected a function";e.a=function(t,e,o){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError(a);return Object(n.a)(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),Object(c.a)(t,e,{leading:i,maxWait:e,trailing:r})}},5057:function(t,e,o){"use strict";o.d(e,"a",(function(){return d}));var c=o(1679),n=o(1905),a=o(1802),i=o(1685),r=o(2110),l=o(44),s=o(2458);async function d(t){const e=c.Z.selectedTableViewId,o=c.Z.tableViews.get(e),d=[...o.selectedRowKeys.keys()];let b;if(1===o.selectedRowKeys.size){const t=[...o.selectedRowKeys.keys()][0];r.i.importAndExecute(t,o,!0)}if(Object(c.Y)()){const e=await n.w.import();b=()=>{e(c.Z.expandedConversationViewState.selectedNodeIds,Object(i.a)("archive"),o.id,t)}}else b=()=>{n.d.importAndExecute(d,o,t)};Object(l.j)("mon-tri-listViewAnimation")?!s.b.animationAction&&Object(s.c)("Archive",d,b):b(),a.b.importAndExecute()}},5345:function(t,e,o){"use strict";o.d(e,"a",(function(){return l}));var c=o(1802),n=o(1679),a=o(3153),i=o(2110),r=o(1905);async function l(t,e,o){var l;const s=n.Z.selectedTableViewId,d=n.Z.tableViews.get(s),b=[...d.selectedRowKeys.keys()];if(!await(async()=>{return(await a.c.import())(d.tableQuery.folderId)})()){if(1===d.selectedRowKeys.size){const t=[...d.selectedRowKeys.keys()][0];i.i.importAndExecute(t,d,!0)}if(d.isInVirtualSelectAllMode)r.o.importAndExecute(d,null!=o&&o,t,null!==(l=d.virtualSelectAllExclusionList)&&void 0!==l?l:[]);else if(Object(n.Y)()){(await r.k.import())(n.Z.expandedConversationViewState.selectedNodeIds,d.id,e)}else r.l.importAndExecute(b,d.id,null!=o&&o,e);c.b.importAndExecute()}}},5548:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var c=o(1690);function n(t){const e=c.a.conversations.get(t);return null==e?void 0:e.canLoadMore}},5810:function(t,e,o){"use strict";o.d(e,"a",(function(){return l})),o.d(e,"b",(function(){return s})),o.d(e,"c",(function(){return d})),o.d(e,"d",(function(){return u}));var c=o(1679),n=o(2495),a=o(2376),i=o(2202),r=o(1741);function l(t){b(2,t)}function s(t){b(0,t)}function d(t){b(1,t)}function b(t,e){const o=c.Z.selectedTableViewId,i=c.Z.tableViews.get(o),l=[...i.selectedRowKeys.keys()][0],s=c.b.getRowIdToShowInReadingPane(l,i),d=Object(c.db)(i);let b;1==i.tableQuery.type&&(b=Object(n.a)([l],i));const u=1===i.tableQuery.listViewType||Object(r.a)();switch(t){case 2:if(u){a.b.importAndExecute(s,e,b,d);break}a.a.importAndExecute(s,e,b,d);break;case 0:case 1:if(u){a.g.importAndExecute(s,1===t,e,b,d);break}a.f.importAndExecute(s,1===t,e,b,d)}}async function u(t){const e=c.Z.selectedTableViewId,o=c.Z.tableViews.get(e),n=[...o.selectedRowKeys.keys()][0],a=1!==o.tableQuery.listViewType&&!Object(r.a)();let l=c.b.getRowIdToShowInReadingPane(n,o);if(a){const t=await i.j.import();l=await t(l)}l&&i.r.importAndExecute(l.Id,void 0,t)}},8697:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var c=o(1902),n=o(5548);function a(t){const e=Object(c.a)(t);if(!e)return!1;const{itemPartsMap:o}=e;return![...o.values()].some(t=>!t.isExpanded||t.oofRollUpViewState.oofReplyNodeIds.length&&!t.oofRollUpViewState.isOofRollUpExpanded)&&!Object(n.a)(t)}}}]);
//# sourceMappingURL=owa.841.js.map
self.scriptsLoaded['owa.841.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.841.js'] = (new Date()).getTime();