self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.205.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[205],{1728:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(3),r=o(14);const i=Object(n.createStore)("groupsStore",{groups:new r.ObservableMap})},1757:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o(1728);function r(e){const t=Object(n.a)().groups.get(e.toLowerCase());return t?t.groupDetails:null}},1783:function(e,t,o){"use strict";var n;!function(e){e[e.None=0]="None",e[e.Executing=1]="Executing",e[e.Succeed=2]="Succeed",e[e.FailureNotice=3]="FailureNotice",e[e.FailureRetry=4]="FailureRetry"}(n||(n={})),t.a=n},1805:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(3),r=o(14);const i=Object(n.createStore)("getGroupSiteStatusStore",{groupSiteStatus:new r.ObservableMap})},1833:function(e,t,o){"use strict";var n=o(3),r=o(14);Object(n.createStore)("personaPhotoStore",{personaPhotoUrls:new r.ObservableMap})();o(1922),o(1823);var i=o(1728),a=o(1775),s=o(1757);function u(e){const t=Object(i.a)().groups.get(e.toLowerCase());return!!t&&!t.groupDetailsError}var c=o(1852),d=o(1960),p=o(1805);const l=Object(n.mutatorAction)("updateGroupSiteAndDocumentUrl",(function(e,t,o,n){if(2==t){const t=Object(s.a)(e);Object(c.a)(t,"Site")[0].Url=o,Object(c.a)(t,"Files")[0].Url=n}}));var b=o(1951);function f(e){return e=e.toLocaleLowerCase(),Object(p.a)().groupSiteStatus.has(e)?Object(p.a)().groupSiteStatus.get(e):0}const g=e=>{const t="string"==typeof e?Object(s.a)(e):e;return t?t.ExternalDirectoryObjectId:null};o(1783),o(1941),o(1942),o(1952),o(1953);var h=o(2228),m=o(2229),v=o(2246),O=o(2207),S=o(2208),N=o(5);function j(e){const t=e.groupDetails?e.groupDetails.AccessType:e.basicInformation?e.basicInformation.AccessType:null;if(t){if(1===t)return Object(N.b)(O.a);if(3===t)return Object(N.b)(S.a)}return""}function C(e){const t=e.groupDetails?e.groupDetails.AccessType:e.basicInformation?e.basicInformation.AccessType:null;if(t){if(1===t)return Object(N.b)(v.b);if(3===t)return Object(N.b)(v.c)}return""}function w(e){let t=0;return e.members?t=e.members.totalCount:e.groupDetails&&(t=e.groupDetails.MemberCount),t?t>1?Object(N.c)(Object(N.b)(m.a),t.toString()):Object(N.c)(Object(N.b)(h.a),t.toString()):Object(N.b)(v.a)}o.d(t,"j",(function(){return i.a})),o.d(t,"l",(function(){return a.a})),o.d(t,"d",(function(){return s.a})),o.d(t,"m",(function(){return u})),o.d(t,"f",(function(){return c.a})),o.d(t,"g",(function(){return c.b})),o.d(t,"c",(function(){return d.a})),o.d(t,"i",(function(){return p.a})),o.d(t,"o",(function(){return l})),o.d(t,"n",(function(){return b.b})),o.d(t,"h",(function(){return f})),o.d(t,"e",(function(){return g})),o.d(t,"a",(function(){return j})),o.d(t,"b",(function(){return C})),o.d(t,"k",(function(){return w}))},1852:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return i}));var n=o(1757);const r=(e,t)=>{const o="string"==typeof e?Object(n.a)(e):e;if(!o||!o.GroupResources)return null;const r=o.GroupResources.filter(e=>e.Name===t);return!r||r.length<1?null:r},i=(e,t)=>{const o=r(e,t);return o&&0!=o.length?o[0].Url:null}},1941:function(e,t,o){"use strict";var n=o(3),r=o(1990);const i=Object(n.mutatorAction)("setFollowButtonState",(function(e,t){r.a.groupActionState.set(e.toLowerCase(),t)}));t.a=i},1942:function(e,t,o){"use strict";var n=o(3),r=o(1991);const i=Object(n.mutatorAction)("setJoinButtonState",(function(e,t){r.a.groupActionState.set(e.toLowerCase(),t)}));t.a=i},1951:function(e,t,o){"use strict";o.d(t,"b",(function(){return i}));var n=o(3),r=o(1805);const i=Object(n.mutatorAction)("setGroupSiteStatus",(function(e,t){e=e.toLocaleLowerCase(),Object(r.a)().groupSiteStatus.has(e)&&t==Object(r.a)().groupSiteStatus.get(e)||Object(r.a)().groupSiteStatus.set(e,t)}));t.a=i},1952:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(1783),r=o(1990);function i(e){e=e.toLowerCase();const t=r.a.groupActionState;return t.has(e)?t.get(e):n.a.None}},1953:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o(1783),r=o(1991);function i(e){e=e.toLowerCase();const t=r.a.groupActionState;return t.has(e)?t.get(e):n.a.None}},1960:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o(1887);const r=()=>Object(n.a)().smtpAddress},1990:function(e,t,o){"use strict";var n=o(3),r=o(14);t.a=Object(n.createStore)("followButtonStore",{groupActionState:new r.ObservableMap})()},1991:function(e,t,o){"use strict";var n=o(3),r=o(14);t.a=Object(n.createStore)("joinButtonStore",{groupActionState:new r.ObservableMap})()},2207:function(e){e.exports=JSON.parse('{"a":"n0b"}')},2208:function(e){e.exports=JSON.parse('{"a":"j0b"}')},2228:function(e){e.exports=JSON.parse('{"a":"i0b"}')},2229:function(e){e.exports=JSON.parse('{"a":"o0b"}')},2246:function(e){e.exports=JSON.parse('{"b":"k0b","c":"l0b","a":"m0b"}')},2882:function(e,t,o){"use strict";var n=o(1973),r=o(3),i=Object(r.mutatorAction)("toggleIsShowingAllGroups",(function(){Object(n.b)().shouldShowAllGroups=!Object(n.b)().shouldShowAllGroups})),a=o(21),s=o(1743),u=o(707),c=o(61),Droppable=o(1858),d=o(913),p=o(1833),l=o(5),b=o(2289),f=o(0),g=o(3348),h=o(3768),m=o(1),v=o(182),O=o(911),S=o(1745),N=o(1737),j=o(44),C=o(3705),w=o(3721);let D=class extends f.Component{constructor(){super(...arguments),this.onContextMenu=(e,t)=>{const{onContextMenu:o,groupId:n}=this.props;if(o){e.stopPropagation(),e.preventDefault();const t=n.toLowerCase(),r=Object(p.j)().groups;if(r.has(t)){o(e,r.get(t))}}},this.onDrop=e=>{this.props.onListNodeDrop&&this.props.onListNodeDrop(e,this.props.groupId)},this.renderGroupFolderChildren=()=>this.props.renderGroupFolderChildren?this.props.renderGroupFolderChildren(this.props.groupId):null,this.getChevronProps=()=>{if(this.props.groupListNodeChevronProps)return this.props.groupListNodeChevronProps(this.props.groupId)}}shouldComponentUpdate(e,t){return!Object(v.e)(this.props,e)}render(){const e=Object(C.a)(this.props.groupId);return f.createElement(Droppable.b,{dropViewState:e.drop,onDrop:this.onDrop,canDrop:this.props.canDropOnListNode},f.createElement(w.a,{selectGroup:this.props.selectGroup,isSelected:this.props.isSelected,renderRightCharm:this.props.renderRightCharm,renderRightCharmHover:this.props.renderRightCharmHover,chevronProps:Object(j.j)("grp-loadFolders")?this.getChevronProps():null,customIcon:Object(j.j)("grp-groupsIconChange-leftNav")||Object(j.j)("grp-loadFolders")?"Group":null,displayName:this.props.displayName,groupId:this.props.groupId,isDroppedOver:e.drop.isDragOver,onContextMenu:this.onContextMenu,renderCustomTreeNodeDisplay:null,customData:this.props.customData,showHoverStateOnDroppedOver:e.drop.draggableItemType==S.a.MailListRow||e.drop.draggableItemType==S.a.MultiMailListMessageRows,isFavorited:Object(u.b)()&&Object(N.isGroupInFavorites)(this.props.groupId)}),Object(j.j)("grp-loadFolders")&&this.renderGroupFolderChildren())}};D=Object(m.__decorate)([O.observer],D);var k=D;const y=Object(p.j)(),G=Object(n.b)();var A=Object(a.a)((function(e){var t,o,r;const a=f.useRef(!1),p=t=>f.createElement(k,{selectGroup:e.selectGroup,isSelected:e.isSelected,renderRightCharm:e.renderRightCharm,renderRightCharmHover:e.renderRightCharmHover,displayName:t.DisplayName,groupId:t.SmtpAddress,key:t.SmtpAddress,onContextMenu:e.onChildNodeContextMenuOpened,customData:e.customData,onListNodeDrop:e.onListNodeDrop,canDropOnListNode:e.canDropOnListNode,renderGroupFolderChildren:e.renderGroupFolderChildren,groupListNodeChevronProps:e.groupListNodeChevronProps}),m=t=>{t.stopPropagation(),e.toggleGroupTreeExpansion()},v=!Object(u.b)(),O=t=>{const{onRootNodeContextMenuOpened:o}=e;o&&(t.stopPropagation(),t.preventDefault(),o(t))},S=t=>!(G.shouldShowAllGroups||!e.canDropOnListNode)&&e.canDropOnListNode(t),N=e=>{a.current=!0,setTimeout(()=>{a.current&&!Object(n.b)().shouldShowAllGroups&&w()},1e3)},j=()=>{a.current=!1},C=e=>{e.stopPropagation(),w()},w=()=>{const t=G.myOrgGroups.length;Object(c.o)("GroupList_ToggleShouldShowAllGroups",{isShowMore:!G.shouldShowAllGroups,joinedGroupCount:t>=21?"21+":t}),e.onShowMoreEvent&&e.onShowMoreEvent(),i()},D=G.myOrgGroups,A={role:s.a.tree},I=e.isGroupsTreeCollapsed;return f.createElement("div",Object.assign({style:e.style,className:e.className},Object(s.b)(A)),(t=>{const o={isExpanded:!t,onClick:m};return f.createElement(b.a,{chevronProps:o,depth:0,displayName:Object(l.b)(h.a),isRootNode:v,key:"Groups_root",onClick:o.onClick,onContextMenu:O,renderRightCharm:e.renderRootNodeRightCharm,renderRightCharmHover:e.renderRootNodeRightCharmHover,setSize:e.setSize,positionInSet:e.positionInSet})})(I),((e,t)=>{const o=[];if(t)return o;if(G.shouldShowAllGroups){const t=[];e.forEach(e=>{const o=y.groups.get(e);t.push(o)}),t.sort((e,t)=>e.basicInformation.DisplayName.localeCompare(t.basicInformation.DisplayName)).forEach(e=>{o.push(p(e.basicInformation))})}else e.slice(0,g.a).forEach(e=>{const t=y.groups.get(e);o.push(p(t.basicInformation))});return o})(D,I),G.withContextMenuGroup&&(G.withContextMenuGroup.isRootNode?null===(t=e.renderRootNodeContextMenu)||void 0===t?void 0:t.call(e,G.withContextMenuGroup):null===(o=e.renderChildNodeContextMenu)||void 0===o?void 0:o.call(e,G.withContextMenuGroup)),D.length>g.a&&(t=>{if(t)return null;const o=G.shouldShowAllGroups?Object(l.b)(h.b):Object(l.b)(h.c),n=Object(d.a)();return f.createElement(Droppable.b,{dropViewState:n,onDrop:x,canDrop:S,onDragOver:N,onDragLeave:j},f.createElement(b.a,{displayName:o,isCustomActionNode:!0,isRootNode:!1,key:"groupsCollapseExpandNode",onClick:C,onContextMenu:M,onMouseEnter:e.onMouseEnterShowMoreButton}))})(I),null===(r=e.renderGroupListCustomNodes)||void 0===r?void 0:r.call(e))}));function x(){}function M(e){e.stopPropagation(),e.preventDefault()}o.d(t,"c",(function(){return n.a})),o.d(t,"b",(function(){return n.b})),o.d(t,"a",(function(){return A}))},3348:function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r}));const n=5,r=100},3705:function(e,t,o){"use strict";var n=o(1973),r=o(1939),i=o(913),a=o(3),s=Object(a.mutatorAction)("setGroupNodeViewStateMutator",(function(e,t){Object(n.b)().groupNodeViewStates.set(e,t)}));function u(e){return Object(n.b)().groupNodeViewStates.has(e)||s(e,{drag:Object(r.a)(),drop:Object(i.a)(),isDroppingMessage:!1}),Object(n.b)().groupNodeViewStates.get(e)}o.d(t,"a",(function(){return u}))},3768:function(e){e.exports=JSON.parse('{"a":"t1b","b":"u1b","c":"v1b"}')},4217:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return s}));var n=o(20);const r=new n.c(()=>o.e(1339).then(o.bind(null,8847)));let i=new n.b(r,e=>e.addMarkAsReadDiagnostics),a=new n.b(r,e=>e.addUnreadCountNotificationDiagnostics),s=new n.b(r,e=>e.addUnreadCountSubscriptionDiagnostics)},4384:function(e,t,o){"use strict";function n(e){return Object.assign({__type:"SubscriptionParameters:#Exchange"},e)}o.d(t,"a",(function(){return n}))},5766:function(e,t,o){"use strict";var n=o(61),r=o(2),i=o(560),a=o(40);const s=10;function u(e,t,o){let u,c=0;const d={next:e=>{var o;return null===(o=t.next)||void 0===o?void 0:o.call(t,e)},complete:()=>{var e;return null===(e=t.complete)||void 0===e?void 0:e.call(t)},error:p=>{var l;Object(n.o)("GraphqlSubscriptionError",{owa_1:o,owa_2:Object(r.T)(null==p?void 0:p.toString()),owa_3:Object(r.T)(null==p?void 0:p.stack),owa_4:c},{isCore:!0}),Object(i.isApolloError)(p)&&(c++<s?(null==u||u.unsubscribe(),u=e().subscribe(d)):Object(a.d)(`${o}: too many apollo errors`)),null===(l=t.error)||void 0===l||l.call(t,p)}};return u=e().subscribe(d),{closed:!u||u.closed,unsubscribe:()=>null==u?void 0:u.unsubscribe()}}o.d(t,"a",(function(){return u}))},6503:function(e,t,o){"use strict";var n=o(3),r=o(1728);t.a=Object(n.mutatorAction)("UPDATE_GROUP_UNREAD_COUNT",(function(e,t){let o=Object(r.a)().groups.get(e.toLowerCase());o&&(o.unreadMessageCount=t)}))},6732:function(e,t,o){"use strict";var n=o(702);const r={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"subscription",name:{kind:"Name",value:"subscribeToUnreadCountNotifications"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"subscriptionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"mailboxSmtpAddress"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"subscribeToUnreadCountNotifications"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"subscriptionId"},value:{kind:"Variable",name:{kind:"Name",value:"subscriptionId"}}},{kind:"ObjectField",name:{kind:"Name",value:"mailboxSmtpAddress"},value:{kind:"Variable",name:{kind:"Name",value:"mailboxSmtpAddress"}}}]}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"EventType"}},{kind:"Field",name:{kind:"Name",value:"NotificationId"}},{kind:"Field",name:{kind:"Name",value:"UnreadCount"}},{kind:"Field",name:{kind:"Name",value:"BrokerSubscriptionId"}}]}}]}}]};var i=o(6503),a=o(4217);var s=o(40),u=o(1810),c=o(4384),d=o(61),p=o(44),l=o(5766);o.d(t,"a",(function(){return g})),o.d(t,"b",(function(){return h}));const b={},f={};async function g(e){const t=(await u.b.import())(),o=Object(c.a)({NotificationType:"UnreadCountNotification",ChannelId:t,MailboxId:e}),g={subscriptionId:m(e),requiresExplicitSubscribe:!0,subscriptionParameters:o};if(function(e){return!b[e]}(e)){const t=Object(n.a)(),o=()=>t.subscribe({query:r,variables:{subscriptionId:m(e),mailboxSmtpAddress:e}}),u={notificationSubscription:g,firstNotificationReceived:!1,unreadCountDataPoint:new d.b("UnreadCountNotification",{logEvery:Object(p.j)("ring-dogfood")?1:20})};b[e]=u,a.c.import().then(t=>t(e,g,!1));const c=Object(l.a)(o,{next:e=>(function(e,t){if("QueryResultChanged"===e.EventType){const o=e.id.replace("UnreadCountNotification_","");Object(i.a)(o.toLowerCase(),e.UnreadCount),t&&(t.firstNotificationReceived||(t.unreadCountDataPoint.end(),t.unreadCountDataPoint=null,t.firstNotificationReceived=!0)),a.b.import().then(t=>t(o,e))}})(e.data.subscribeToUnreadCountNotifications,b[function(e){return e.replace("UnreadCountNotification_","")}(e.data.subscribeToUnreadCountNotifications.id)]),error:e=>{s.h.info(`unread count notification error ${e}`)}},"GroupUnreadCountNotifications");return f[e]=c,c}return f[e]}function h(e){e=e.toLowerCase();const t=f[e];if(t){const o=b[e];t.unsubscribe(),delete f[e],delete b[e],a.c.import().then(t=>t(e,o.notificationSubscription,!0))}}function m(e){return"UnreadCountNotification_"+e}}}]);
//# sourceMappingURL=owa.205.js.map
self.scriptsLoaded['owa.205.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.205.js'] = (new Date()).getTime();