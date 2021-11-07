self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.6.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[6],{1669:function(e,t,i){"use strict";var n,o=i(567),s=i(1),a=i(0),r=i(1269),l=i(1172),d=i(1569),c=i(1163),m=i(511),p=i(277),u=i(208),h=i(252),g=i(106),v=i(325),_=i(305),b=i(220),f=i(229),O=i(45),C=i(297),y=i(1568),x=i(271),N=Object(m.a)(),F="Panel";!function(e){e[e.closed=0]="closed",e[e.animatingOpen=1]="animatingOpen",e[e.open=2]="open",e[e.animatingClosed=3]="animatingClosed"}(n||(n={}));var w,P,k,T,S,B=function(e){function t(t){var i=e.call(this,t)||this;i._panel=a.createRef(),i._animationCallback=null,i._hasCustomNavigation=!(!i.props.onRenderNavigation&&!i.props.onRenderNavigationContent),i.dismiss=function(e){i.props.onDismiss&&i.isActive&&i.props.onDismiss(e),(!e||e&&!e.defaultPrevented)&&i.close()},i._allowScrollOnPanel=function(e){e?i._allowTouchBodyScroll?Object(p.b)(e,i._events):Object(p.c)(e,i._events):i._events.off(i._scrollableContent),i._scrollableContent=e},i._onRenderNavigation=function(e){if(!i.props.onRenderNavigationContent&&!i.props.onRenderNavigation&&!i.props.hasCloseButton)return null;var t=i.props.onRenderNavigationContent,n=void 0===t?i._onRenderNavigationContent:t;return a.createElement("div",{className:i._classNames.navigation},n(e,i._onRenderNavigationContent))},i._onRenderNavigationContent=function(e){var t,n=e.closeButtonAriaLabel,o=e.hasCloseButton,s=e.onRenderHeader,l=void 0===s?i._onRenderHeader:s;if(o){var d=null===(t=i._classNames.subComponentStyles)||void 0===t?void 0:t.closeButton();return a.createElement(a.Fragment,null,!i._hasCustomNavigation&&l(i.props,i._onRenderHeader,i._headerTextId),a.createElement(r.a,{styles:d,className:i._classNames.closeButton,onClick:i._onPanelClick,ariaLabel:n,title:n,"data-is-visible":!0,iconProps:{iconName:"Cancel"}}))}return null},i._onRenderHeader=function(e,t,n){var o=e.headerText,r=e.headerTextProps,l=void 0===r?{}:r;return o?a.createElement("div",{className:i._classNames.header},a.createElement("div",Object(s.__assign)({id:n,role:"heading","aria-level":1},l,{className:Object(u.a)(i._classNames.headerText,l.className)}),o)):null},i._onRenderBody=function(e){return a.createElement("div",{className:i._classNames.content},e.children)},i._onRenderFooter=function(e){var t=i.props.onRenderFooterContent,n=void 0===t?null:t;return n?a.createElement("div",{className:i._classNames.footer},a.createElement("div",{className:i._classNames.footerInner},n())):null},i._animateTo=function(e){e===n.open&&i.props.onOpen&&i.props.onOpen(),i._animationCallback=i._async.setTimeout((function(){i.setState({visibility:e}),i._onTransitionComplete()}),200)},i._clearExistingAnimationTimer=function(){null!==i._animationCallback&&i._async.clearTimeout(i._animationCallback)},i._onPanelClick=function(e){i.dismiss(e)},i._onTransitionComplete=function(){i._updateFooterPosition(),i.state.visibility===n.open&&i.props.onOpened&&i.props.onOpened(),i.state.visibility===n.closed&&i.props.onDismissed&&i.props.onDismissed()};var o=i.props.allowTouchBodyScroll,l=void 0!==o&&o;return i._allowTouchBodyScroll=l,i._async=new h.a(i),i._events=new g.a(i),Object(v.a)(i),Object(_.a)(F,t,{ignoreExternalFocusing:"focusTrapZoneProps",forceFocusInsideTrap:"focusTrapZoneProps",firstFocusableSelector:"focusTrapZoneProps"}),i.state={isFooterSticky:!1,visibility:n.closed,id:Object(b.a)("Panel")},i}return Object(s.__extends)(t,e),t.getDerivedStateFromProps=function(e,t){return void 0===e.isOpen?null:!e.isOpen||t.visibility!==n.closed&&t.visibility!==n.animatingClosed?e.isOpen||t.visibility!==n.open&&t.visibility!==n.animatingOpen?null:{visibility:n.animatingClosed}:{visibility:n.animatingOpen}},t.prototype.componentDidMount=function(){this._events.on(window,"resize",this._updateFooterPosition),this._shouldListenForOuterClick(this.props)&&this._events.on(document.body,"mousedown",this._dismissOnOuterClick,!0),this.props.isOpen&&this.setState({visibility:n.animatingOpen})},t.prototype.componentDidUpdate=function(e,t){var i=this._shouldListenForOuterClick(this.props),o=this._shouldListenForOuterClick(e);this.state.visibility!==t.visibility&&(this._clearExistingAnimationTimer(),this.state.visibility===n.animatingOpen?this._animateTo(n.open):this.state.visibility===n.animatingClosed&&this._animateTo(n.closed)),i&&!o?this._events.on(document.body,"mousedown",this._dismissOnOuterClick,!0):!i&&o&&this._events.off(document.body,"mousedown",this._dismissOnOuterClick,!0)},t.prototype.componentWillUnmount=function(){this._async.dispose(),this._events.dispose()},t.prototype.render=function(){var e=this.props,t=e.className,i=void 0===t?"":t,o=e.elementToFocusOnDismiss,r=e.firstFocusableSelector,m=e.focusTrapZoneProps,p=e.forceFocusInsideTrap,u=e.hasCloseButton,h=e.headerText,g=e.headerClassName,v=void 0===g?"":g,_=e.ignoreExternalFocusing,b=e.isBlocking,C=e.isFooterAtBottom,F=e.isLightDismiss,w=e.isHiddenOnDismiss,P=e.layerProps,k=e.overlayProps,T=e.popupProps,S=e.type,B=e.styles,j=e.theme,R=e.customWidth,L=e.onLightDismissClick,E=void 0===L?this._onPanelClick:L,A=e.onRenderNavigation,I=void 0===A?this._onRenderNavigation:A,D=e.onRenderHeader,H=void 0===D?this._onRenderHeader:D,M=e.onRenderBody,W=void 0===M?this._onRenderBody:M,X=e.onRenderFooter,Z=void 0===X?this._onRenderFooter:X,G=this.state,z=G.isFooterSticky,U=G.visibility,V=G.id,Y=S===x.a.smallFixedNear||S===x.a.customNear,$=Object(f.a)(j)?Y:!Y,q=S===x.a.custom||S===x.a.customNear?{width:R}:{},J=Object(O.j)(this.props,O.h),K=this.isActive,Q=U===n.animatingClosed||U===n.animatingOpen;if(this._headerTextId=h&&V+"-headerText",!K&&!Q&&!w)return null;this._classNames=N(B,{theme:j,className:i,focusTrapZoneClassName:m?m.className:void 0,hasCloseButton:u,headerClassName:v,isAnimating:Q,isFooterSticky:z,isFooterAtBottom:C,isOnRightSide:$,isOpen:K,isHiddenOnDismiss:w,type:S,hasCustomNavigation:this._hasCustomNavigation});var ee,te=this._classNames,ie=this._allowTouchBodyScroll;return b&&K&&(ee=a.createElement(d.a,Object(s.__assign)({className:te.overlay,isDarkThemed:!1,onClick:F?E:void 0,allowTouchBodyScroll:ie},k))),a.createElement(l.a,Object(s.__assign)({},P),a.createElement(c.a,Object(s.__assign)({role:"dialog","aria-modal":b?"true":void 0,ariaLabelledBy:this._headerTextId?this._headerTextId:void 0,onDismiss:this.dismiss,className:te.hiddenPanel},T),a.createElement("div",Object(s.__assign)({"aria-hidden":!K&&Q},J,{ref:this._panel,className:te.root}),ee,a.createElement(y.a,Object(s.__assign)({ignoreExternalFocusing:_,forceFocusInsideTrap:!(!b||w&&!K)&&p,firstFocusableSelector:r,isClickableOutsideFocusTrap:!0},m,{className:te.main,style:q,elementToFocusOnDismiss:o}),a.createElement("div",{className:te.contentInner},a.createElement("div",{ref:this._allowScrollOnPanel,className:te.scrollableContent,"data-is-scrollable":!0},a.createElement("div",{className:te.commands,"data-is-visible":!0},I(this.props,this._onRenderNavigation)),(this._hasCustomNavigation||!u)&&H(this.props,this._onRenderHeader,this._headerTextId),W(this.props,this._onRenderBody),Z(this.props,this._onRenderFooter)))))))},t.prototype.open=function(){void 0===this.props.isOpen&&(this.isActive||this.setState({visibility:n.animatingOpen}))},t.prototype.close=function(){void 0===this.props.isOpen&&this.isActive&&this.setState({visibility:n.animatingClosed})},Object.defineProperty(t.prototype,"isActive",{get:function(){return this.state.visibility===n.open||this.state.visibility===n.animatingOpen},enumerable:!1,configurable:!0}),t.prototype._shouldListenForOuterClick=function(e){return!!e.isBlocking&&!!e.isOpen},t.prototype._updateFooterPosition=function(){var e=this._scrollableContent;if(e){var t=e.clientHeight,i=e.scrollHeight;this.setState({isFooterSticky:t<i})}},t.prototype._dismissOnOuterClick=function(e){var t=this._panel.current;this.isActive&&t&&!e.defaultPrevented&&(Object(C.a)(t,e.target)||(this.props.onOuterClick?this.props.onOuterClick(e):this.dismiss(e)))},t.defaultProps={isHiddenOnDismiss:!1,isOpen:void 0,isBlocking:!0,hasCloseButton:!0,type:x.a.smallFixedFar},t}(a.Component),j=i(9),R={root:"ms-Panel",main:"ms-Panel-main",commands:"ms-Panel-commands",contentInner:"ms-Panel-contentInner",scrollableContent:"ms-Panel-scrollableContent",navigation:"ms-Panel-navigation",closeButton:"ms-Panel-closeButton ms-PanelAction-close",header:"ms-Panel-header",headerText:"ms-Panel-headerText",content:"ms-Panel-content",footer:"ms-Panel-footer",footerInner:"ms-Panel-footerInner",isOpen:"is-open",hasCloseButton:"ms-Panel--hasCloseButton",smallFluid:"ms-Panel--smFluid",smallFixedNear:"ms-Panel--smLeft",smallFixedFar:"ms-Panel--sm",medium:"ms-Panel--md",large:"ms-Panel--lg",largeFixed:"ms-Panel--fixed",extraLarge:"ms-Panel--xl",custom:"ms-Panel--custom",customNear:"ms-Panel--customLeft"},L="100%",E="auto",A=272,I=340,D=592,H=644,M=940,W="auto",X=0,Z=48,G=428,z=176,U=((w={})["@media (min-width: "+j.ScreenWidthMinMedium+"px)"]={width:I},w),V=((P={})["@media (min-width: "+j.ScreenWidthMinLarge+"px)"]={width:D},P["@media (min-width: "+j.ScreenWidthMinXLarge+"px)"]={width:H},P),Y=((k={})["@media (min-width: "+j.ScreenWidthMinUhfMobile+"px)"]={left:Z,width:E},k["@media (min-width: "+j.ScreenWidthMinXXLarge+"px)"]={left:G},k),$=((T={})["@media (min-width: "+j.ScreenWidthMinXXLarge+"px)"]={left:W,width:M},T),q=((S={})["@media (min-width: "+j.ScreenWidthMinXXLarge+"px)"]={left:z},S),J=function(e){var t;switch(e){case x.a.smallFixedFar:t=Object(s.__assign)({},U);break;case x.a.medium:t=Object(s.__assign)(Object(s.__assign)({},U),V);break;case x.a.large:t=Object(s.__assign)(Object(s.__assign)(Object(s.__assign)({},U),V),Y);break;case x.a.largeFixed:t=Object(s.__assign)(Object(s.__assign)(Object(s.__assign)(Object(s.__assign)({},U),V),Y),$);break;case x.a.extraLarge:t=Object(s.__assign)(Object(s.__assign)(Object(s.__assign)(Object(s.__assign)({},U),V),Y),q)}return t},K={paddingLeft:"24px",paddingRight:"24px"};i.d(t,"a",(function(){return Q}));var Q=Object(o.a)(B,(function(e){var t,i,n,o,a=e.className,r=e.focusTrapZoneClassName,l=e.hasCloseButton,d=e.headerClassName,c=e.isAnimating,m=e.isFooterSticky,p=e.isFooterAtBottom,u=e.isOnRightSide,h=e.isOpen,g=e.isHiddenOnDismiss,v=e.hasCustomNavigation,_=e.theme,b=e.type,f=void 0===b?x.a.smallFixedFar:b,O=_.effects,C=_.fonts,y=_.semanticColors,N=Object(j.getGlobalClassNames)(R,_),F=f===x.a.custom||f===x.a.customNear;return{root:[N.root,_.fonts.medium,h&&N.isOpen,l&&N.hasCloseButton,{pointerEvents:"none",position:"absolute",top:0,left:0,right:0,bottom:0},F&&u&&N.custom,F&&!u&&N.customNear,a],overlay:[{pointerEvents:"auto",cursor:"pointer"},h&&c&&j.AnimationClassNames.fadeIn100,!h&&c&&j.AnimationClassNames.fadeOut100],hiddenPanel:[!h&&!c&&g&&{visibility:"hidden"}],main:[N.main,{backgroundColor:y.bodyBackground,boxShadow:O.elevation64,pointerEvents:"auto",position:"absolute",display:"flex",flexDirection:"column",overflowX:"hidden",overflowY:"auto",WebkitOverflowScrolling:"touch",bottom:0,top:0,left:W,right:X,width:L,selectors:Object(s.__assign)((t={},t[j.HighContrastSelector]={borderLeft:"3px solid "+y.variantBorder,borderRight:"3px solid "+y.variantBorder},t),J(f))},f===x.a.smallFluid&&{left:X},f===x.a.smallFixedNear&&{left:X,right:W,width:A},f===x.a.customNear&&{right:"auto",left:0},F&&{maxWidth:"100vw"},h&&c&&!u&&j.AnimationClassNames.slideRightIn40,h&&c&&u&&j.AnimationClassNames.slideLeftIn40,!h&&c&&!u&&j.AnimationClassNames.slideLeftOut40,!h&&c&&u&&j.AnimationClassNames.slideRightOut40,r],commands:[N.commands,{paddingTop:18,selectors:(i={},i["@media (min-height: "+j.ScreenWidthMinMedium+"px)"]={backgroundColor:y.bodyBackground,position:"sticky",top:0},i)},v&&{marginTop:"inherit"}],navigation:[N.navigation,{display:"flex",justifyContent:"flex-end"},v&&{height:"44px"}],contentInner:[N.contentInner,{display:"flex",flexDirection:"column",flexGrow:1,overflowY:"hidden"}],header:[N.header,K,{alignSelf:"flex-start"},l&&!v&&{flexGrow:1},v&&{flexShrink:0}],headerText:[N.headerText,C.xLarge,{color:y.bodyText,lineHeight:"27px",overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",hyphens:"auto"},d],scrollableContent:[N.scrollableContent,{overflowY:"auto"},p&&{flexGrow:1}],content:[N.content,K,{paddingBottom:20},p&&{selectors:(n={},n["@media (min-height: "+j.ScreenWidthMinMedium+"px)"]={height:"100%"},n)}],footer:[N.footer,{flexShrink:0,borderTop:"1px solid transparent",transition:"opacity "+j.AnimationVariables.durationValue3+" "+j.AnimationVariables.easeFunction2,selectors:(o={},o["@media (min-height: "+j.ScreenWidthMinMedium+"px)"]={position:"sticky",bottom:0},o)},m&&{background:y.bodyBackground,borderTopColor:y.variantBorder}],footerInner:[N.footerInner,K,{paddingBottom:16,paddingTop:16}],subComponentStyles:{closeButton:{root:[N.closeButton,{marginRight:14,color:_.palette.neutralSecondary,fontSize:j.IconFontSizes.large},v&&{marginRight:0,height:"auto",width:"44px"}],rootHovered:{color:_.palette.neutralPrimary}}}}}),void 0,{scope:"Panel"})},271:function(e,t,i){"use strict";var n;i.d(t,"a",(function(){return n})),function(e){e[e.smallFluid=0]="smallFluid",e[e.smallFixedFar=1]="smallFixedFar",e[e.smallFixedNear=2]="smallFixedNear",e[e.medium=3]="medium",e[e.large=4]="large",e[e.largeFixed=5]="largeFixed",e[e.extraLarge=6]="extraLarge",e[e.custom=7]="custom",e[e.customNear=8]="customNear"}(n||(n={}))}}]);
//# sourceMappingURL=owa.6.js.map
self.scriptsLoaded['owa.6.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.6.js'] = (new Date()).getTime();