self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.231.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[231],{10140:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var r=o(1752),n=o(705);function a(t){return Object(r.a)(t.ItemId.Id,Object(n.a)({BaseShape:"IdOnly"}),"MessageDetails","V2016_06_24",t.MailboxInfo).then(t=>t&&!(t instanceof Error)&&null!=t.ExtendedProperty&&t.ExtendedProperty.length>=1?t.ExtendedProperty[0].Value:null)}},1572:function(t,e,o){"use strict";var r=o(567),n=o(1),a=o(0),s=o(511),i=o(220),l=o(498),c=o(1664),d=o(379),u=o(325),g=o(305),p=o(208),m=o(1269),b=o(932),h=Object(s.a)(),x=a.createElement(b.a,null).type,C="DialogContent",f=function(t){function e(e){var o=t.call(this,e)||this;return Object(u.a)(o),Object(g.a)(C,e,{titleId:"titleProps.id"}),o}return Object(n.__extends)(e,t),e.prototype.render=function(){var t,e=this.props,o=e.showCloseButton,r=e.className,s=e.closeButtonAriaLabel,i=e.onDismiss,c=e.subTextId,d=e.subText,u=e.titleProps,g=void 0===u?{}:u,b=e.titleId,x=e.title,C=e.type,f=e.styles,B=e.theme,v=e.draggableHeaderClassName,y=h(f,{theme:B,className:r,isLargeHeader:C===l.a.largeHeader,isClose:C===l.a.close,draggableHeaderClassName:v}),k=this._groupChildren();return d&&(t=a.createElement("p",{className:y.subText,id:c},d)),a.createElement("div",{className:y.content},a.createElement("div",{className:y.header},a.createElement("div",Object(n.__assign)({id:b,role:"heading","aria-level":1},g,{className:Object(p.a)(y.title,g.className)}),x),a.createElement("div",{className:y.topButton},this.props.topButtonsProps.map((function(t,e){return a.createElement(m.a,Object(n.__assign)({key:t.uniqueId||e},t))})),(C===l.a.close||o&&C!==l.a.largeHeader)&&a.createElement(m.a,{className:y.button,iconProps:{iconName:"Cancel"},ariaLabel:s,onClick:i,title:s}))),a.createElement("div",{className:y.inner},a.createElement("div",{className:y.innerContent},t,k.contents),k.footers))},e.prototype._groupChildren=function(){var t={footers:[],contents:[]};return a.Children.map(this.props.children,(function(e){"object"==typeof e&&null!==e&&e.type===x?t.footers.push(e):t.contents.push(e)})),t},e.defaultProps={showCloseButton:!1,className:"",topButtonsProps:[],closeButtonAriaLabel:"Close"},e=Object(n.__decorate)([d.d],e)}(a.Component),B=o(9),v={contentLgHeader:"ms-Dialog-lgHeader",close:"ms-Dialog--close",subText:"ms-Dialog-subText",header:"ms-Dialog-header",headerLg:"ms-Dialog--lgHeader",button:"ms-Dialog-button ms-Dialog-button--close",inner:"ms-Dialog-inner",content:"ms-Dialog-content",title:"ms-Dialog-title"},y=Object(r.a)(f,(function(t){var e,o,r,n=t.className,a=t.theme,s=t.isLargeHeader,i=t.isClose,l=t.hidden,c=t.isMultiline,d=t.draggableHeaderClassName,u=a.palette,g=a.fonts,p=a.effects,m=a.semanticColors,b=Object(B.getGlobalClassNames)(v,a);return{content:[s&&[b.contentLgHeader,{borderTop:"4px solid "+u.themePrimary}],i&&b.close,{flexGrow:1,overflowY:"hidden"},n],subText:[b.subText,g.medium,{margin:"0 0 24px 0",color:m.bodySubtext,lineHeight:"1.5",wordWrap:"break-word",fontWeight:B.FontWeights.regular}],header:[b.header,{position:"relative",width:"100%",boxSizing:"border-box"},i&&b.close,d&&[d,{cursor:"move"}]],button:[b.button,l&&{selectors:{".ms-Icon.ms-Icon--Cancel":{color:m.buttonText,fontSize:B.IconFontSizes.medium}}}],inner:[b.inner,{padding:"0 24px 24px",selectors:(e={},e["@media (min-width: "+B.ScreenWidthMinSmall+"px) and (max-width: "+B.ScreenWidthMaxSmall+"px)"]={padding:"0 16px 16px"},e)}],innerContent:[b.content,{position:"relative",width:"100%"}],title:[b.title,g.xLarge,{color:m.bodyText,margin:"0",minHeight:g.xLarge.fontSize,padding:"16px 46px 20px 24px",lineHeight:"normal",selectors:(o={},o["@media (min-width: "+B.ScreenWidthMinSmall+"px) and (max-width: "+B.ScreenWidthMaxSmall+"px)"]={padding:"16px 46px 16px 16px"},o)},s&&{color:m.menuHeader},c&&{fontSize:g.xxLarge.fontSize}],topButton:[{display:"flex",flexDirection:"row",flexWrap:"nowrap",position:"absolute",top:"0",right:"0",padding:"15px 15px 0 0",selectors:(r={"> *":{flex:"0 0 auto"},".ms-Dialog-button":{color:m.buttonText},".ms-Dialog-button:hover":{color:m.buttonTextHovered,borderRadius:p.roundedCorner2}},r["@media (min-width: "+B.ScreenWidthMinSmall+"px) and (max-width: "+B.ScreenWidthMaxSmall+"px)"]={padding:"15px 8px 0 0"},r)}]}}),void 0,{scope:"DialogContent"}),k=Object(s.a)(),_={isDarkOverlay:!1,isBlocking:!1,className:"",containerClassName:"",topOffsetFixed:!1},O={type:l.a.normal,className:"",topButtonsProps:[]},T=function(t){function e(e){var o=t.call(this,e)||this;return o._getSubTextId=function(){var t=o.props,e=t.ariaDescribedById,r=t.modalProps,n=t.dialogContentProps,a=t.subText,s=r&&r.subtitleAriaId||e;return s||(s=(n&&n.subText||a)&&o._defaultSubTextId),s},o._getTitleTextId=function(){var t=o.props,e=t.ariaLabelledById,r=t.modalProps,n=t.dialogContentProps,a=t.title,s=r&&r.titleAriaId||e;return s||(s=(n&&n.title||a)&&o._defaultTitleTextId),s},o._id=Object(i.a)("Dialog"),o._defaultTitleTextId=o._id+"-title",o._defaultSubTextId=o._id+"-subText",o}return Object(n.__extends)(e,t),e.prototype.render=function(){var t,e,o,r,s=this.props,i=s.className,l=s.containerClassName,d=s.contentClassName,u=s.elementToFocusOnDismiss,g=s.firstFocusableSelector,p=s.forceFocusInsideTrap,m=s.styles,b=s.hidden,h=s.ignoreExternalFocusing,x=s.isBlocking,C=s.isClickableOutsideFocusTrap,f=s.isDarkOverlay,B=s.isOpen,v=s.onDismiss,T=s.onDismissed,D=s.onLayerDidMount,j=s.responsiveMode,H=s.subText,N=s.theme,S=s.title,P=s.topButtonsProps,w=s.type,I=s.minWidth,W=s.maxWidth,M=s.modalProps,E=Object(n.__assign)({},M?M.layerProps:{onLayerDidMount:D});D&&!E.onLayerDidMount&&(E.onLayerDidMount=D),M&&M.dragOptions&&!M.dragOptions.dragHandleSelector?(o="ms-Dialog-draggable-header",r=Object(n.__assign)(Object(n.__assign)({},M.dragOptions),{dragHandleSelector:"."+o})):r=M&&M.dragOptions;var A=Object(n.__assign)(Object(n.__assign)(Object(n.__assign)(Object(n.__assign)({},_),{className:i,containerClassName:l,isBlocking:x,isDarkOverlay:f,onDismissed:T}),M),{layerProps:E,dragOptions:r}),L=Object(n.__assign)(Object(n.__assign)(Object(n.__assign)({className:d,subText:H,title:S,topButtonsProps:P,type:w},O),this.props.dialogContentProps),{draggableHeaderClassName:o,titleProps:Object(n.__assign)({id:(null===(t=this.props.dialogContentProps)||void 0===t?void 0:t.titleId)||this._defaultTitleTextId},null===(e=this.props.dialogContentProps)||void 0===e?void 0:e.titleProps)}),F=k(m,{theme:N,className:A.className,containerClassName:A.containerClassName,hidden:b,dialogDefaultMinWidth:I,dialogDefaultMaxWidth:W});return a.createElement(c.a,Object(n.__assign)({elementToFocusOnDismiss:u,firstFocusableSelector:g,forceFocusInsideTrap:p,ignoreExternalFocusing:h,isClickableOutsideFocusTrap:C,onDismissed:A.onDismissed,responsiveMode:j},A,{isDarkOverlay:A.isDarkOverlay,isBlocking:A.isBlocking,isOpen:void 0!==B?B:!b,className:F.root,containerClassName:F.main,onDismiss:v||A.onDismiss,subtitleAriaId:this._getSubTextId(),titleAriaId:this._getTitleTextId()}),a.createElement(y,Object(n.__assign)({subTextId:this._defaultSubTextId,title:L.title,subText:L.subText,showCloseButton:A.isBlocking,topButtonsProps:L.topButtonsProps,type:L.type,onDismiss:v||L.onDismiss,className:L.className},L),this.props.children))},e.defaultProps={hidden:!0},e=Object(n.__decorate)([d.d],e)}(a.Component),D={root:"ms-Dialog"};o.d(e,"a",(function(){return j}));var j=Object(r.a)(T,(function(t){var e,o=t.className,r=t.containerClassName,n=t.dialogDefaultMinWidth,a=void 0===n?"288px":n,s=t.dialogDefaultMaxWidth,i=void 0===s?"340px":s,l=t.hidden,c=t.theme;return{root:[Object(B.getGlobalClassNames)(D,c).root,c.fonts.medium,o],main:[{width:a,outline:"3px solid transparent",selectors:(e={},e["@media (min-width: "+B.ScreenWidthMinMedium+"px)"]={width:"auto",maxWidth:i,minWidth:a},e)},!l&&{display:"flex"},r]}}),void 0,{scope:"Dialog"});j.displayName="Dialog"},496:function(t,e,o){"use strict";o.d(e,"b",(function(){return i})),o.d(e,"a",(function(){return l}));var r=o(1),n=o(9),a=o(161),s=function(){return{position:"absolute",width:1,right:31,top:8,bottom:8}};function i(t){var e,o,a,i,l,c=t.semanticColors,d=t.palette,u=c.buttonBackground,g=c.buttonBackgroundPressed,p=c.buttonBackgroundHovered,m=c.buttonBackgroundDisabled,b=c.buttonText,h=c.buttonTextHovered,x=c.buttonTextDisabled,C=c.buttonTextChecked,f=c.buttonTextCheckedHovered;return{root:{backgroundColor:u,color:b},rootHovered:{backgroundColor:p,color:h,selectors:(e={},e[n.HighContrastSelector]={borderColor:"Highlight",color:"Highlight"},e)},rootPressed:{backgroundColor:g,color:C},rootExpanded:{backgroundColor:g,color:C},rootChecked:{backgroundColor:g,color:C},rootCheckedHovered:{backgroundColor:g,color:f},rootDisabled:{color:x,backgroundColor:m,selectors:(o={},o[n.HighContrastSelector]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},o)},splitButtonContainer:{selectors:(a={},a[n.HighContrastSelector]={border:"none"},a)},splitButtonMenuButton:{color:d.white,backgroundColor:"transparent",selectors:{":hover":{backgroundColor:d.neutralLight,selectors:(i={},i[n.HighContrastSelector]={color:"Highlight"},i)}}},splitButtonMenuButtonDisabled:{backgroundColor:c.buttonBackgroundDisabled,selectors:{":hover":{backgroundColor:c.buttonBackgroundDisabled}}},splitButtonDivider:Object(r.__assign)(Object(r.__assign)({},s()),{backgroundColor:d.neutralTertiaryAlt,selectors:(l={},l[n.HighContrastSelector]={backgroundColor:"WindowText"},l)}),splitButtonDividerDisabled:{backgroundColor:t.palette.neutralTertiaryAlt},splitButtonMenuButtonChecked:{backgroundColor:d.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:d.neutralQuaternaryAlt}}},splitButtonMenuButtonExpanded:{backgroundColor:d.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:d.neutralQuaternaryAlt}}},splitButtonMenuIcon:{color:c.buttonText},splitButtonMenuIconDisabled:{color:c.buttonTextDisabled}}}function l(t){var e,o,i,l,c,d,u,g,p,m=t.palette,b=t.semanticColors;return{root:{backgroundColor:b.primaryButtonBackground,border:"1px solid "+b.primaryButtonBackground,color:b.primaryButtonText,selectors:(e={},e[n.HighContrastSelector]=Object(r.__assign)({color:"Window",backgroundColor:"WindowText",borderColor:"WindowText"},Object(n.getHighContrastNoAdjustStyle)()),e["."+a.a+" &:focus"]={selectors:{":after":{border:"none",outlineColor:m.white}}},e)},rootHovered:{backgroundColor:b.primaryButtonBackgroundHovered,border:"1px solid "+b.primaryButtonBackgroundHovered,color:b.primaryButtonTextHovered,selectors:(o={},o[n.HighContrastSelector]={color:"Window",backgroundColor:"Highlight",borderColor:"Highlight"},o)},rootPressed:{backgroundColor:b.primaryButtonBackgroundPressed,border:"1px solid "+b.primaryButtonBackgroundPressed,color:b.primaryButtonTextPressed,selectors:(i={},i[n.HighContrastSelector]=Object(r.__assign)({color:"Window",backgroundColor:"WindowText",borderColor:"WindowText"},Object(n.getHighContrastNoAdjustStyle)()),i)},rootExpanded:{backgroundColor:b.primaryButtonBackgroundPressed,color:b.primaryButtonTextPressed},rootChecked:{backgroundColor:b.primaryButtonBackgroundPressed,color:b.primaryButtonTextPressed},rootCheckedHovered:{backgroundColor:b.primaryButtonBackgroundPressed,color:b.primaryButtonTextPressed},rootDisabled:{color:b.primaryButtonTextDisabled,backgroundColor:b.primaryButtonBackgroundDisabled,selectors:(l={},l[n.HighContrastSelector]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},l)},splitButtonContainer:{selectors:(c={},c[n.HighContrastSelector]={border:"none"},c)},splitButtonDivider:Object(r.__assign)(Object(r.__assign)({},s()),{backgroundColor:m.white,selectors:(d={},d[n.HighContrastSelector]={backgroundColor:"Window"},d)}),splitButtonMenuButton:{backgroundColor:b.primaryButtonBackground,color:b.primaryButtonText,selectors:(u={},u[n.HighContrastSelector]={backgroundColor:"WindowText"},u[":hover"]={backgroundColor:b.primaryButtonBackgroundHovered,selectors:(g={},g[n.HighContrastSelector]={color:"Highlight"},g)},u)},splitButtonMenuButtonDisabled:{backgroundColor:b.primaryButtonBackgroundDisabled,selectors:{":hover":{backgroundColor:b.primaryButtonBackgroundDisabled}}},splitButtonMenuButtonChecked:{backgroundColor:b.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:b.primaryButtonBackgroundPressed}}},splitButtonMenuButtonExpanded:{backgroundColor:b.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:b.primaryButtonBackgroundPressed}}},splitButtonMenuIcon:{color:b.primaryButtonText},splitButtonMenuIconDisabled:{color:m.neutralTertiary,selectors:(p={},p[n.HighContrastSelector]={color:"GrayText"},p)}}}},498:function(t,e,o){"use strict";var r;o.d(e,"a",(function(){return r})),function(t){t[t.normal=0]="normal",t[t.largeHeader=1]="largeHeader",t[t.close=2]="close"}(r||(r={}))},599:function(t,e,o){"use strict";var r=o(1),n=o(0),a=o(285),s=o(381),i=o(487),l=o(9),c=o(111),d=o(284),u=o(353),g=o(496),p=Object(c.c)((function(t,e,o){var r=Object(d.a)(t),n=Object(u.a)(t),a={root:{minWidth:"80px",height:"32px"},label:{fontWeight:l.FontWeights.semibold}};return Object(l.concatStyleSets)(r,a,o?Object(g.a)(t):Object(g.b)(t),n,e)}));o.d(e,"a",(function(){return m}));var m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(r.__extends)(e,t),e.prototype.render=function(){var t=this.props,e=t.primary,o=void 0!==e&&e,i=t.styles,l=t.theme;return n.createElement(a.a,Object(r.__assign)({},this.props,{variantClassName:o?"ms-Button--primary":"ms-Button--default",styles:p(l,i,o),onRenderDescription:s.b}))},e=Object(r.__decorate)([Object(i.a)("DefaultButton",["theme","styles"],!0)],e)}(n.Component)},932:function(t,e,o){"use strict";var r=o(567),n=o(1),a=o(0),s=o(511),i=o(325),l=Object(s.a)(),c=function(t){function e(e){var o=t.call(this,e)||this;return Object(i.a)(o),o}return Object(n.__extends)(e,t),e.prototype.render=function(){var t=this.props,e=t.className,o=t.styles,r=t.theme;return this._classNames=l(o,{theme:r,className:e}),a.createElement("div",{className:this._classNames.actions},a.createElement("div",{className:this._classNames.actionsRight},this._renderChildrenAsActions()))},e.prototype._renderChildrenAsActions=function(){var t=this;return a.Children.map(this.props.children,(function(e){return e?a.createElement("span",{className:t._classNames.action},e):null}))},e}(a.Component),d=o(9),u={actions:"ms-Dialog-actions",action:"ms-Dialog-action",actionsRight:"ms-Dialog-actionsRight"};o.d(e,"a",(function(){return g}));var g=Object(r.a)(c,(function(t){var e=t.className,o=t.theme,r=Object(d.getGlobalClassNames)(u,o);return{actions:[r.actions,{position:"relative",width:"100%",minHeight:"24px",lineHeight:"24px",margin:"16px 0 0",fontSize:"0",selectors:{".ms-Button":{lineHeight:"normal"}}},e],action:[r.action,{margin:"0 4px"}],actionsRight:[r.actionsRight,{textAlign:"right",marginRight:"-4px",fontSize:"0"}]}}),void 0,{scope:"DialogFooter"})},960:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var r=o(0),n=o(163);function a(t){var e=r.useState(t),o=e[0],a=e[1];return[o,{setTrue:Object(n.a)((function(){return function(){a(!0)}})),setFalse:Object(n.a)((function(){return function(){a(!1)}})),toggle:Object(n.a)((function(){return function(){a((function(t){return!t}))}}))}]}},963:function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var r=o(0),n=o(163),a=function(){var t=Object(n.a)({});return r.useEffect((function(){return function(){for(var e=0,o=Object.keys(t);e<o.length;e++){var r=o[e];clearTimeout(r)}}}),[t]),Object(n.a)({setTimeout:function(e,o){var r=setTimeout(e,o);return t[r]=1,r},clearTimeout:function(e){delete t[e],clearTimeout(e)}})}}}]);
//# sourceMappingURL=owa.231.js.map
self.scriptsLoaded['owa.231.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.231.js'] = (new Date()).getTime();