self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.19.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[19],{11359:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1845);function o(e,t){return Object(r.a)().has(e.id)?Object(r.a)().get(e.id):Object.assign({childFolderIds:[],principalSMTPAddress:t},e)}},11360:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(15),o=n(4259),i=n(1860);function d(e,t){var n,d,a,l;let u=null==e?void 0:e.folderHierarchy,c="s";if(!u){const s=null===(l=null===(a=null===(d=null===(n=null==e?void 0:e.findFolders)||void 0===n?void 0:n.Body)||void 0===d?void 0:d.ResponseMessages)||void 0===a?void 0:a.Items)||void 0===l?void 0:l[0];if(s)if("Error"==s.ResponseClass)c="e",Object(r.b)("ffr_c",s.ResponseCode||"un");else try{u=Object(o.b)(s,t,Object(i.b)("junkemail"),Object(i.b)("notes"))}catch(e){c="m",Object(r.b)("ffr_c",e.message)}else c="nrm"}return Object(r.b)("ffr",c),u}},12881:function(e,t,n){"use strict";var r=n(9209),o=n(3),i=n(1845);const d=Object(o.mutatorAction)("updateFolder",(e,t,n,r)=>{t&&(e.displayName=t),r.forEach(e=>{const t=n[e],r=n[t.parentFolderId]||Object(i.a)().get(t.parentFolderId);r&&-1==r.childFolderIds.indexOf(e)&&r.childFolderIds.push(e)})});var a=n(1860);function l(e,t,n,o){const i={},l=i[t.id]=o(t),u=[];for(let e=0;e<n.length;e++){const t=n[e],r=t.id,d=t.distinguishedFolderType;Object(a.b)(d)&&(i[r]=o(t),u.push(r))}d(l,e,i,u),Object(r.a)(i)}n.d(t,"a",(function(){return l}))},1683:function(e,t,n){"use strict";var r=n(20),o=n(1727),i=n(3),d=n(7344),a=n(1857),l=(Object(i.mutator)(d.a,e=>{const{folderTreeId:t,userIdentity:n}=e,r=e.loadingState;Object(a.a)(n).get(t).loadingState=r}),Object(i.action)("PERSONA_SEARCH_FOLDERS_LOADED",(e,t)=>({existingFolders:e,personaOrPdlFavorites:t}))),u=n(1845),c=n(4259),s=n(209),f=(Object(i.mutator)(l,e=>{e.existingFolders.forEach(t=>{if(t){const n=t.FolderId.Id,r=e.personaOrPdlFavorites.filter(e=>e.searchFolderId===n);if(1===r.length){const e=r[0].displayName,n=Object.assign(Object.assign({},Object(c.c)(t,Object(s.d)())),{DisplayName:e});Object(u.a)().set(t.FolderId.Id,n)}}})}),n(40)),b=n(707),I=n(1688),O=n(699),F=n(1889);const g=Object(O.action)("removeFolderFromParentFolder")((function(e,t){const n=(null==t?void 0:t.folderTable)||Object(u.a)();e.forEach(e=>{n.delete(e)})}));let p=Object(O.action)("removeFolderFromParentFolder")((function(e,t){const n=(null==t?void 0:t.folderTable)||Object(u.a)();if(!(null==e?void 0:e.parentFolderId))return;let r=n.get(e.parentFolderId);Object(b.b)()&&r.distinguishedFolderType===I.k&&(r=Object(F.a)(e.mailboxInfo.mailboxSmtpAddress));let o=r.childFolderIds;const i=o.indexOf(e.id);i>-1&&o.splice(i,1)}));function j(e,t,n){let r=t.folderTable.get(n);Object(b.b)()&&r.distinguishedFolderType===I.k&&(r=Object(F.a)(e.mailboxInfo.mailboxSmtpAddress));let o=r.childFolderIds,i=!1,d=B(e).toLowerCase();if(-1==o.indexOf(e.id)){for(let n=0;n<o.length&&!i;n++){B(t.folderTable.get(o[n])).toLowerCase()>d&&(o.splice(n,0,e.id),i=!0)}i||o.push(e.id)}}let m=Object(O.action)("moveFolderToParentFolder")((function(e,t,n,r){const i=((null==r?void 0:r.folderTable)||Object(u.a)()).get(e);p(i,r),j(i,r||o.b,t),i.parentFolderId=t,i.mailboxInfo=n}));var h=n(8366),v=n(3305);Object(i.mutator)(v.a,e=>{!function(e,t,n,r,o){const i=Object(h.a)(n),d=Object(u.a)().get(n);d||f.h.warn("addFolderToStore: parent folder was not found");const a=Object.assign(Object.assign({},Object(c.c)(t,o||d.mailboxInfo)),{displayName:r,childFolderIds:[]});e.folderTable.set(t.FolderId.Id,a),j(a,e,i)}(e.folderStore,e.folder,e.parentFolderId,e.displayName,e.mailboxInfo)});var E=n(9209),T=n(49);const S=Object(i.action)("REMOVE_FOLDERTREE_DATA",(e,t)=>({folderTreeId:e,userIdentity:t}));var y=n(5339);const _=Object(i.mutatorAction)("setFolderTreeData",(e,t,n,r=!1,o=0,i)=>{const d={id:e,rootFolder:t,loadingState:n,hasMoreData:r,currentLoadedIndex:o};Object(a.a)(i).set(e,d)});Object(i.orchestrator)(v.f,()=>{const e={distinguishedFolderType:I.d,displayName:Object(T.g)().SessionSettings.ArchiveDisplayName,mailboxInfo:{type:"ArchiveMailbox",mailboxSmtpAddress:Object(T.g)().SessionSettings.ArchiveMailboxGuid,userIdentity:Object(s.d)().userIdentity}};_(I.d,e,y.a.Uninitialized)}),Object(i.mutator)(S,e=>{Object(a.a)(e.userIdentity).delete(e.folderTreeId)});var D=n(7345),x=n(5),R=n(11359),A=n(12881);Object(i.orchestrator)(D.a,e=>{const{displayName:t,folders:n,folderTreeIdentifier:r,includesLastItemInRange:o,offset:i,principalSMTPAddress:d,rootFolder:a,userIdentity:l}=e;Object(A.a)(t,a,n,e=>Object(R.a)(e,d)),_(r,Object(u.a)().get(a.id),y.a.Loaded,!o,i,l);const c=a.mailboxInfo.type,s=a.id;if("UserMailbox"===c||"ArchiveMailbox"===c){for(let e=0;e<n.length;e++){const t=n[e],r=t.id,o=t.distinguishedFolderType;("UserMailbox"===c||t.parentFolderId==s)&&!Object(x.k)(o)&&Object(T.a)(o,r)}Object(T.a)(a.distinguishedFolderType,s)}});var P=n(1685);function L(e){const t=Object(u.a)().get(e);return!!t.childFolderIds&&t.childFolderIds.map(e=>{return!!Object(u.a)().get(e)}).length>0}function M(e,t){return function e(t,n,r){const o=[];if(0===n){const i=e(t,n+1,r);o.push(...i)}else t.forEach(t=>{const i=Object(u.a)().get(t);if(i&&(o.push(Object.assign(Object.assign({},i),{depth:n})),L(t)&&r(t))){const t=e(i.childFolderIds,n+1,r);o.push(...t)}});return o}(e,0,t)}var N=n(14);let w,C={folderTable:new N.ObservableMap,mailboxFolderTreeData:new N.ObservableMap};let U=function(e,t){C.folderTable.set(e.id,e),e.parentFolderId&&C.folderTable.get(e.parentFolderId).childFolderIds.push(e.id),e.distinguishedFolderType&&(w[e.distinguishedFolderType]=e.id)};U=Object(O.action)("addFolderToStore-TestMethod")(U);const k=Object(i.action)("INITIALIZE_SHARED_FOLDERS");var G=n(1890),H=n(8367);function V(e){const t=Object(a.a)(),n=t&&t.get(e);return null==n?void 0:n.hasMoreData}var z=n(8368),Y=n(1896),K=n(29);function B(e){var t;return e?Object(K.a)().SessionSettings.IsShadowMailbox&&(null===(t=e.remoteFolderInfo)||void 0===t?void 0:t.remoteFolderDisplayName)?e.remoteFolderInfo.remoteFolderDisplayName:e.displayName:""}const W=Object(i.mutatorAction)("setMailboxFolderTreeData",(e,t)=>{Object(o.a)().mailboxFolderTreeData.set(e,t)});function q(e){Object(a.b)(e)||W(e,function(e){return{folderTreeTable:new N.ObservableMap({[I.k]:{id:I.k,rootFolder:{distinguishedFolderType:I.k,displayName:I.k,mailboxInfo:Object(s.d)(e)},loadingState:y.a.Uninitialized}}),sharedFolderUserEmails:[]}}(e))}var J=n(61);const Q=new r.b(new r.c(()=>Promise.all([n.e(9),n.e(10),n.e(12),n.e(13),n.e(281)]).then(n.bind(null,19214))),e=>e.fetchPrimaryMailFolders);var Z=n(44),$=n(11360);async function X(e,t,n){const r=Object(s.d)(t);t||(t=r.userIdentity),q(t);const o=Object(H.a)(I.k,t);if(o==y.a.Loading||o==y.a.Loaded&&!e)return;Object(d.a)(I.k,y.a.Loading,t);let i=!Object(Z.j)("tri-disableSDFolders")&&Object($.a)(n,r);try{if(!i){const e=await Q.import();i=await e(r)}}catch(e){return void Object(d.a)(I.k,y.a.ErrorLoading,t)}if(!i)return void Object(d.a)(I.k,y.a.ErrorLoading,t);const a=Object(K.a)().SessionSettings.UserEmailAddress===t?Object(K.a)().SessionSettings.UserDisplayName:t;Object(D.a)(i.RootFolder,i.Folders,I.k,t,a,I.k,t,i.IncludesLastItemInRange,i.offset),function(){var e,t;const n=null===(e=Object(u.a)().get(Object(P.a)("inbox")))||void 0===e?void 0:e.childFolderIds.length,r=null===(t=Object(u.a)().get(Object(P.a)("msgfolderroot")))||void 0===t?void 0:t.totalMessageCount;Object(J.o)("TnS_LoadFolders",[n,r])}()}var ee=n(7346);function te(e,t={folderTable:o.b.folderTable}){return Object(ee.c)(e,"msgfolderroot",t)}function ne(e){return Object(ee.a)(o.b.folderTable.get(e),"msgfolderroot")}var re=n(1965),oe=n(6801),ie=n(9210),de=n(8369);n.d(t,"J",(function(){return le})),n.d(t,"K",(function(){return ue})),n.d(t,"N",(function(){return ce})),n.d(t,"O",(function(){return se})),n.d(t,"I",(function(){return fe})),n.d(t,"L",(function(){return be})),n.d(t,"M",(function(){return Ie})),n.d(t,"x",(function(){return o.a})),n.d(t,"b",(function(){return E.a})),n.d(t,"i",(function(){return M})),n.d(t,"y",(function(){return L})),n.d(t,"a",(function(){return y.a})),n.d(t,"q",(function(){return h.a})),n.d(t,"S",(function(){return l})),n.d(t,"e",(function(){return g})),n.d(t,"T",(function(){return p})),n.d(t,"P",(function(){return m})),n.d(t,"c",(function(){return v.a})),n.d(t,"z",(function(){return v.f})),n.d(t,"l",(function(){return v.e})),n.d(t,"k",(function(){return v.d})),n.d(t,"Y",(function(){return v.k})),n.d(t,"X",(function(){return v.i})),n.d(t,"Q",(function(){return v.g})),n.d(t,"B",(function(){return k})),n.d(t,"U",(function(){return S})),n.d(t,"R",(function(){return D.a})),n.d(t,"W",(function(){return d.a})),n.d(t,"g",(function(){return G.a})),n.d(t,"u",(function(){return F.a})),n.d(t,"m",(function(){return u.a})),n.d(t,"p",(function(){return H.a})),n.d(t,"o",(function(){return V})),n.d(t,"n",(function(){return z.a})),n.d(t,"w",(function(){return Y.a})),n.d(t,"h",(function(){return B})),n.d(t,"V",(function(){return _})),n.d(t,"A",(function(){return q})),n.d(t,"v",(function(){return X})),n.d(t,"F",(function(){return te})),n.d(t,"E",(function(){return ne})),n.d(t,"H",(function(){return ee.c})),n.d(t,"D",(function(){return ee.a})),n.d(t,"j",(function(){return re.a})),n.d(t,"r",(function(){return re.b})),n.d(t,"C",(function(){return re.c})),n.d(t,"t",(function(){return oe.a})),n.d(t,"G",(function(){return ie.b})),n.d(t,"s",(function(){return a.b})),n.d(t,"f",(function(){return de.a}));t.d=o.b;const ae=new r.c(()=>Promise.all([n.e(9),n.e(10),n.e(12),n.e(13),n.e(281)]).then(n.bind(null,19214))),le=new r.b(ae,e=>e.getArchiveFolders),ue=new r.b(ae,e=>e.getFolderPermissions),ce=new r.b(ae,e=>e.updateFolderPermissions),se=new r.b(ae,e=>e.updateFolderPermissionsInStore),fe=new r.b(ae,e=>e.arePermissionArraysEqual),be=(new r.b(ae,e=>e.arePermissionsEqual),new r.b(ae,e=>e.getSharedFolders)),Ie=new r.a(ae,e=>e.updateFolder)},3305:function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"h",(function(){return c})),n.d(t,"j",(function(){return s})),n.d(t,"k",(function(){return f})),n.d(t,"i",(function(){return b})),n.d(t,"a",(function(){return I}));var r=n(3);const o=Object(r.action)("ON_FIND_DUMPSTER_FOLDER_SUCCESS",(e,t)=>({rootFolder:e,folders:t})),i=Object(r.action)("GET_ARCHIVE_FOLDERS",(e,t)=>({source:e,isLoadingMore:t})),d=Object(r.action)("INITIALIZE_ARCHIVE_FOLDER_TREE_FROM_SESSIONDATA"),a=Object(r.action)("GET_FOLDER_PERMISSIONS",e=>({folderId:e})),l=Object(r.action)("GET_FOLDER_PERMISSIONS_SUCCESS"),u=Object(r.action)("GET_FOLDER_PERMISSIONS_FAILED"),c=Object(r.action)("UPDATE_FOLDER_PERMISSIONS",(e,t,n)=>({folderId:e,permissions:t,mailboxInfo:n})),s=Object(r.action)("UPDATE_FOLDER_PERMISSIONS_IN_STORE",(e,t)=>({folderId:e,permissions:t})),f=Object(r.action)("UPDATE_FOLDER_PERMISSIONS_SUCCESS"),b=Object(r.action)("UPDATE_FOLDER_PERMISSIONS_FAILED"),I=Object(r.action)("ADD_NEW_FOLDER_TO_STORE",(e,t,n,r,o)=>({folderStore:e,folder:t,parentFolderId:n,displayName:r,mailboxInfo:o}))},4259:function(e,t,n){"use strict";var r=function(e,t){var n,r;if(e.ExtendedProperty)for(let o=0;o<e.ExtendedProperty.length;o++){let i=e.ExtendedProperty[o];if((null===(n=null==i?void 0:i.ExtendedFieldURI)||void 0===n?void 0:n.PropertyTag)===t||(null===(r=null==i?void 0:i.ExtendedFieldURI)||void 0===r?void 0:r.PropertyName)===t)return i.Value}};var o=e=>{const t=r(e,"SourceWellKnownFolderType");switch(t&&parseInt(t,10)||-1){case 86:return"REMOTE_DISTINGUISHED_FOLDER_TYPE_ARCHIVE";case 87:return"REMOTE_DISTINGUISHED_FOLDER_TYPE_IMPORTANT";case 88:return"REMOTE_DISTINGUISHED_FOLDER_TYPE_STARRED";default:return"REMOTE_DISTINGUISHED_FOLDER_TYPE_UNSPECIFIED"}};var i=e=>r(e,"0x7018")||null;var d=e=>"false"!==r(e,"0x10f4"),a=n(5808);var l=n(1688),u=n(40);function c(e,t,n,r){var o;const i=e.RootFolder;if(!i||!i.Folders||!i.ParentFolder)throw new Error("folderHierarchyWeb: failed to get folders");let a=[];null==i||i.Folders.forEach(e=>{if(e&&function(e,t,n){if(r=null==e?void 0:e.__type,"Folder:#Exchange"!=r)return!1;var r;if((null==e?void 0:e.DistinguishedFolderId)&&l.f.indexOf(e.DistinguishedFolderId)>=0)return!1;if(d(e))return!1;if("clutter"===e.DistinguishedFolderId&&0===e.TotalCount)return!1;if("junkemail"===e.DistinguishedFolderId)return!!t;if("notes"===e.DistinguishedFolderId)return!!n;return!0}(e,n,r)){const n=s(e,t);n&&a.push(n)}});const u=function(e,t){return"SharedMailbox"===t?void 0:e}((null===(o=null==i?void 0:i.ParentFolder)||void 0===o?void 0:o.DistinguishedFolderId)||"none",t.type);i.ParentFolder.DistinguishedFolderId=u;let c=s(i.ParentFolder,t);return{__typename:"FolderHierarchyResult",Folders:a,RootFolder:c,offset:i.IndexedPagingOffset,TotalItemsInView:i.TotalItemsInView,IncludesLastItemInRange:i.IncludesLastItemInRange}}function s(e,t){const n=e,{FolderId:d,ParentFolderId:l,DisplayName:c,ArchiveTag:s,PolicyTag:O,ChildFolderCount:F,UnreadCount:g,TotalCount:p,FolderClass:j,DistinguishedFolderId:m}=n;if(!d||!l)return u.h.warn("mapOWSFolderToGql: ignoring folder with missing folderId or missing parentFolderId"),null;const h=F||0,v=b(d),E=function(e){const t=r(e,a.a);if(t){const e=atob(t);return[e.substr(0,e.length-1)]}return null}(n);return{id:v.Id,changeKey:v.ChangeKey,__typename:"MailFolder",type:n.__type,parentFolderId:b(l).Id,displayName:c||"",distinguishedFolderType:m||null,FolderClass:j||"IPF.Note",UnreadCount:g||0,totalMessageCount:p||0,ArchiveTag:s?I(s):null,PolicyTag:O?I(O):null,childFolderCount:h,remoteFolderInfo:{remoteFolderDisplayName:i(n),remoteDistinguishedFolderType:o(n)},replicaList:E,PermissionSet:n.PermissionSet,messageSizeInBytes:f(n),pausedTotalCount:null,principalSMTPAddress:null,mailboxInfo:{type:t.type,userIdentity:t.userIdentity,mailboxSmtpAddress:t.mailboxSmtpAddress,auxiliaryMailboxGuid:null==E?void 0:E[0]}}}function f(e){var t,n;return null===(n=null===(t=e.ExtendedProperty)||void 0===t?void 0:t[0])||void 0===n?void 0:n.Value}function b(e){return{__typename:"FolderId",Id:e.Id,ChangeKey:e.ChangeKey}}function I(e){return{__typename:"RetentionTagType",IsExplicit:!!e.IsExplicit,Value:e.Value}}n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s}))},5339:function(e,t,n){"use strict";var r;!function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Loading=1]="Loading",e[e.Loaded=2]="Loaded",e[e.ErrorLoading=3]="ErrorLoading"}(r||(r={})),t.a=r},5808:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r="0x6698"},6801:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(209),o=n(1845),i=n(1688),d=n(29),a=n(8369);function l(e,t){var n;const l=Object(o.a)(),u=null==l?void 0:l.get(e),c=Object(d.a)().SessionSettings;let s,f,b,I;const O=Object(r.d)();return"SharedMailbox"===(null==u?void 0:u.mailboxInfo.type)?(s=u.mailboxInfo.mailboxSmtpAddress,I="SharedMailbox"):e==i.d||e==i.b||"ArchiveMailbox"==(null==u?void 0:u.mailboxInfo.type)?(b=null===(n=null==u?void 0:u.replicaList)||void 0===n?void 0:n[0],b&&t?f=b:(f=c.ArchiveMailboxGuid,b=void 0),I="ArchiveMailbox",s=Object(a.a)(f,c.OrganizationDomain)):(s=O.mailboxSmtpAddress,I="UserMailbox"),{type:I,userIdentity:O.userIdentity,mailboxSmtpAddress:s,auxiliaryMailboxGuid:b}}},7344:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3);const o=Object(r.action)("SET_LOADING_STATE_FOR_FOLDER_TREE",(e,t,n)=>({folderTreeId:e,loadingState:t,userIdentity:n}))},7345:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(3);const o=Object(r.action)("ON_QUERY_FOLDERHIERARCHY",(e,t,n,r,o,i,d,a,l)=>({rootFolder:e,folders:t,distinguishedFolderId:n,principalSMTPAddress:r,displayName:o,folderTreeIdentifier:i,userIdentity:d,includesLastItemInRange:a,offset:l}))},7346:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return d}));var r=n(1727);function o(e){return"msgfolderroot"===e.distinguishedFolderType}let i=function(e,t,n={folderTable:r.b.folderTable}){const o=!!e&&e.parentFolderId;if(!o)return!1;let i=n.folderTable.get(o);for(;i;){if(i.distinguishedFolderType==t)return!0;if(!i.parentFolderId)return!1;i=n.folderTable.get(i.parentFolderId)}return!1};function d(e,t,n={folderTable:r.b.folderTable}){return function(e,t){return!!e&&e.distinguishedFolderType==t}(e,t)||i(e,t,n)}},8366:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(1685),o=n(1727),i=n(598);function d(e){let t=Object(r.a)(e);if(t||(t=e),Object(o.a)().folderTable.get(t))return Object(o.a)().folderTable.get(t).id;return Object(i.a)({Id:t,__type:"FolderId:#Exchange"}).Id}},8367:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(5339),o=n(1857);function i(e,t){const n=Object(o.a)(t),i=n&&n.get(e);return(null==i?void 0:i.loadingState)||r.a.Uninitialized}},8368:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1857);function o(e,t){const n=Object(r.a)(t),o=n&&n.get(e);return(null==o?void 0:o.currentLoadedIndex)||0}},8369:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return a}));var r=n(5),o=n(9210),i=n(40);function d(e){try{if(!e)return null;const t=atob(e),n=t.length,r=new Uint8Array(new ArrayBuffer(n));for(let e=0;e<n;e++)r[e]=t.charCodeAt(e);return Object(o.a)(r)}catch(t){return i.d("getMailboxGuidFromEwsId : conversion failed for id "+e+" with error "+t),null}}function a(e,t){if(!e||!t)return null;return r.c("{0}@{1}",e,t)}},9209:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(14),o=n(3),i=n(1727),d=n(1845);const a=Object(o.mutatorAction)("addFoldersToFolderTableMutator",e=>{0==Object(d.a)().size&&(Object(i.a)().folderTable=new r.ObservableMap),Object.keys(e).forEach(t=>{const n=JSON.parse(JSON.stringify(e[t]));Object(d.a)().set(t,n)})})},9210:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(40);function o(e){if(!e)return null;let t=e,n=0;if(1==t[0]){if(t=d(t),!t)return null}else n=1;n++;const o=t[n]+(t[n+1]>>8);return n+=2,function(e,t,n){if(t+n>e.length)return r.d("ConvertByteArrayToString: offset + count must not exceed byte array length."),null;let o="";for(let r=t;r<t+n;r++)o+=String.fromCharCode(e[r]);return o}(t,n,o)}function i(e){if(!e)return!1;try{let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);let r=0;return 1===n[0]?n=d(n):r=1,n&&1===n[r]}catch(e){return!1}}function d(e){const t=a(e,null);if(0==t)return r.d("rleDecompress : Invalid id"),null;let n=new Uint8Array(t);return a(e,n),n}function a(e,t){let n=0;for(let o=1;o<e.length;++o)if(o==e.length-1||e[o]!=e[o+1])null!=t&&(t[n]=e[o]),n++;else{if(o==e.length-2)return r.d("decompressEx : Invalid id"),null;let i=e[o+2];for(let r=0;r<i+2;r++)null!=t&&(t[n]=e[o]),n++;o+=2}return n}}}]);
//# sourceMappingURL=owa.19.js.map
self.scriptsLoaded['owa.19.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.19.js'] = (new Date()).getTime();