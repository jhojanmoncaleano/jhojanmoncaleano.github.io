self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.852.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[852],{17635:function(e,t,r){var o=r(17636);"string"==typeof o&&(o=[[e.i,o,""]]);var n={transform:void 0};r(66)(o,n);o.locals&&(e.exports=o.locals)},17636:function(e,t,r){(t=e.exports=r(65)(!1)).push([e.i,".cK3sUTyIs2SfGx40KOZ7l{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:300px}html[dir] .cK3sUTyIs2SfGx40KOZ7l{border:1px solid var(--readingPaneCardBorder);border-radius:2px;padding:16px 12px;background-color:var(--white)}html[dir=ltr] .cK3sUTyIs2SfGx40KOZ7l{margin:0 20px 0 8px}html[dir=rtl] .cK3sUTyIs2SfGx40KOZ7l{margin:0 8px 0 20px}html[dir] .cK3sUTyIs2SfGx40KOZ7l._2AeOvIps7OAK7JPFXci9eN{border:1px solid var(--readingPaneCardFocusBorder)}html[dir] .cK3sUTyIs2SfGx40KOZ7l._2hhQX-ieB7Ufxy7youfP_5{border-color:var(--themePrimary)}._3bnUBUex41NGaVbebC7x3n{height:40px}._3bnUBUex41NGaVbebC7x3n,.CX3e7NjNiBfv9gtJ8Z-lO{display:-webkit-box;display:-ms-flexbox;display:flex}.CX3e7NjNiBfv9gtJ8Z-lO{width:6%;min-width:48px}html[dir=ltr] ._3sp0bsSWMHCzC6QpV1A7o5{padding-left:max(6%,48px)}html[dir=rtl] ._3sp0bsSWMHCzC6QpV1A7o5{padding-right:max(6%,48px)}",""]),t.locals={shimmerContainer:"cK3sUTyIs2SfGx40KOZ7l",isFocused:"_2AeOvIps7OAK7JPFXci9eN",undoDarkModeFocusedBorder:"_2hhQX-ieB7Ufxy7youfP_5",header:"_3bnUBUex41NGaVbebC7x3n",personaCircle:"CX3e7NjNiBfv9gtJ8Z-lO",messageContent:"_3sp0bsSWMHCzC6QpV1A7o5"}},19607:function(e,t,r){"use strict";r.r(t);var o=r(21),n=r(0),i=r(4127),a=r(4075),s=r(5282),c=r(17635),l=r.n(c);var m=Object(o.a)((function(){const e=(e,t)=>n.createElement(s.a,{styles:{root:{paddingTop:e}},width:t});return n.createElement("div",{className:l.a.shimmerContainer},n.createElement(s.a,{customElementsGroup:(()=>n.createElement("div",{className:l.a.header},n.createElement("div",{className:l.a.personaCircle},n.createElement(i.a,{width:"100%",shimmerElements:[{type:a.a.gap,width:"16px",height:20},{type:a.a.circle,height:40},{type:a.a.gap,width:"100%",height:20}]})),n.createElement(i.a,{width:"78%",flexWrap:!0,shimmerElements:[{type:a.a.line,width:"10%"},{type:a.a.gap,width:"90%",height:20},{type:a.a.line,width:"16%"},{type:a.a.gap,width:"84%",height:20}]}),n.createElement(i.a,{width:"16%",flexWrap:!0,shimmerElements:[{type:a.a.line,width:"100%",height:32},{type:a.a.gap,width:"100%"}]})))()}),n.createElement("div",{className:l.a.messageContent},e("16px","30%"),e("8px","95%"),e("8px","95%"),e("16px","95%"),e("8px","95%"),e("8px","60%"),n.createElement(s.a,{styles:{root:{paddingTop:"40px"}},shimmerElements:[{type:a.a.line,width:"16%",height:32},{type:a.a.gap,width:"84%",height:32}]})))}));r.d(t,"LoadingShimmer",(function(){return m}))},4026:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(4794);function n(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=Object(o.a)(e,e[r],t[r]))}},4028:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r(2691),n=r(0),i=function(e){function t(t){var r=e.call(this,t)||this;return r.state={isRendered:!1},r}return Object(o.b)(t,e),t.prototype.componentDidMount=function(){var e=this,t=this.props.delay;this._timeoutId=window.setTimeout((function(){e.setState({isRendered:!0})}),t)},t.prototype.componentWillUnmount=function(){this._timeoutId&&clearTimeout(this._timeoutId)},t.prototype.render=function(){return this.state.isRendered?n.Children.only(this.props.children):null},t.defaultProps={delay:0},t}(n.Component)},4073:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var o=r(1680),n=r(0),i=r(6348),a=r(5900),s=r(3746),c=r(5102),l=r(4028),m=r(4127),d=Object(i.a)(),h=function(e){function t(t){var r=e.call(this,t)||this;return Object(a.a)(r),r.state={contentLoaded:t.isDataLoaded},r._async=new s.a(r),r}return Object(o.c)(t,e),t.prototype.componentDidUpdate=function(e){var t=this,r=this.props.isDataLoaded;r!==e.isDataLoaded&&(this._async.clearTimeout(this._lastTimeoutId),r?this._lastTimeoutId=this._async.setTimeout((function(){t.setState({contentLoaded:r})}),200):this.setState({contentLoaded:r}))},t.prototype.componentWillUnmount=function(){this._async.dispose()},t.prototype.render=function(){var e=this.props,t=e.styles,r=e.shimmerElements,i=e.children,a=e.isDataLoaded,s=e.width,h=e.className,p=e.customElementsGroup,u=e.theme,b=e.ariaLabel,f=e.shimmerColors,g=this.state.contentLoaded;this._classNames=d(t,{theme:u,isDataLoaded:a,className:h,transitionAnimationInterval:200,shimmerColor:f&&f.shimmer,shimmerWaveColor:f&&f.shimmerWave});var v=Object(c.j)(this.props,c.h);return n.createElement("div",Object(o.a)({},v,{className:this._classNames.root}),!g&&n.createElement("div",{style:{width:s||"100%"},className:this._classNames.shimmerWrapper},n.createElement("div",{className:this._classNames.shimmerGradient}),p||n.createElement(m.a,{shimmerElements:r,backgroundColor:f&&f.background})),i&&n.createElement("div",{className:this._classNames.dataWrapper},i),b&&!a&&n.createElement("div",{role:"status","aria-live":"polite"},n.createElement(l.a,null,n.createElement("div",{className:this._classNames.screenReaderText},b))))},t.defaultProps={isDataLoaded:!1},t}(n.Component)},4074:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var o=r(1680),n=r(0),i=r(6348),a=r(4337),s=r(4075),c=r(4130),l=r(4129),m=r(4128),d=Object(i.a)(),h=function(e){var t=e.styles,r=e.width,i=void 0===r?"auto":r,a=e.shimmerElements,h=e.rowHeight,u=void 0===h?function(e){return e.map((function(e){switch(e.type){case s.a.circle:e.height||(e.height=s.b.circle);break;case s.a.line:e.height||(e.height=s.b.line);break;case s.a.gap:e.height||(e.height=s.b.gap)}return e})).reduce((function(e,t){return t.height&&t.height>e?t.height:e}),0)}(a||[]):h,b=e.flexWrap,f=void 0!==b&&b,g=e.theme,v=e.backgroundColor,y=d(t,{theme:g,flexWrap:f});return n.createElement("div",{style:{width:i},className:y.root},function(e,t,r){return e?e.map((function(e,i){var a=e.type,d=Object(o.d)(e,["type"]),h=d.verticalAlign,u=d.height,b=p(h,a,u,t,r);switch(e.type){case s.a.circle:return n.createElement(m.a,Object(o.a)({key:i},d,{styles:b}));case s.a.gap:return n.createElement(l.a,Object(o.a)({key:i},d,{styles:b}));case s.a.line:return n.createElement(c.a,Object(o.a)({key:i},d,{styles:b}))}})):n.createElement(c.a,{height:s.b.line})}(a,v,u))};var p=Object(a.c)((function(e,t,r,n,i){var a,c=i&&r?i-r:0;if(e&&"center"!==e?e&&"top"===e?a={borderBottomWidth:c+"px",borderTopWidth:"0px"}:e&&"bottom"===e&&(a={borderBottomWidth:"0px",borderTopWidth:c+"px"}):a={borderBottomWidth:(c?Math.floor(c/2):0)+"px",borderTopWidth:(c?Math.ceil(c/2):0)+"px"},n)switch(t){case s.a.circle:return{root:Object(o.a)(Object(o.a)({},a),{borderColor:n}),svg:{fill:n}};case s.a.gap:return{root:Object(o.a)(Object(o.a)({},a),{borderColor:n,backgroundColor:n})};case s.a.line:return{root:Object(o.a)(Object(o.a)({},a),{borderColor:n}),topLeftCorner:{fill:n},topRightCorner:{fill:n},bottomLeftCorner:{fill:n},bottomRightCorner:{fill:n}}}return{root:a}}))},4075:function(e,t,r){"use strict";var o,n;r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),function(e){e[e.line=1]="line",e[e.circle=2]="circle",e[e.gap=3]="gap"}(o||(o={})),function(e){e[e.line=16]="line",e[e.gap=16]="gap",e[e.circle=24]="circle"}(n||(n={}))},4076:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(0),n=r(6348),i=Object(n.a)(),a=function(e){var t=e.height,r=e.styles,n=e.borderStyle,a=e.theme,s=i(r,{theme:a,height:t,borderStyle:n});return o.createElement("div",{className:s.root},o.createElement("svg",{viewBox:"0 0 10 10",width:t,height:t,className:s.svg},o.createElement("path",{d:"M0,0 L10,0 L10,10 L0,10 L0,0 Z M0,5 C0,7.76142375 2.23857625,10 5,10 C7.76142375,10 10,7.76142375 10,5 C10,2.23857625 7.76142375,2.22044605e-16 5,0 C2.23857625,-2.22044605e-16 0,2.23857625 0,5 L0,5 Z"})))}},4077:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(0),n=r(6348),i=Object(n.a)(),a=function(e){var t=e.height,r=e.styles,n=e.width,a=void 0===n?"10px":n,s=e.borderStyle,c=e.theme,l=i(r,{theme:c,height:t,borderStyle:s});return o.createElement("div",{style:{width:a,minWidth:"number"==typeof a?a+"px":"auto"},className:l.root})}},4078:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r(0),n=r(6348),i=Object(n.a)(),a=function(e){var t=e.height,r=e.styles,n=e.width,a=void 0===n?"100%":n,s=e.borderStyle,c=e.theme,l=i(r,{theme:c,height:t,borderStyle:s});return o.createElement("div",{style:{width:a,minWidth:"number"==typeof a?a+"px":"auto"},className:l.root},o.createElement("svg",{width:"2",height:"2",className:l.topLeftCorner},o.createElement("path",{d:"M0 2 A 2 2, 0, 0, 1, 2 0 L 0 0 Z"})),o.createElement("svg",{width:"2",height:"2",className:l.topRightCorner},o.createElement("path",{d:"M0 0 A 2 2, 0, 0, 1, 2 2 L 2 0 Z"})),o.createElement("svg",{width:"2",height:"2",className:l.bottomRightCorner},o.createElement("path",{d:"M2 0 A 2 2, 0, 0, 1, 0 2 L 2 2 Z"})),o.createElement("svg",{width:"2",height:"2",className:l.bottomLeftCorner},o.createElement("path",{d:"M2 2 A 2 2, 0, 0, 1, 0 0 L 0 2 Z"})))}},4127:function(e,t,r){"use strict";var o=r(6347),n=r(4074),i=r(2010),a={root:"ms-ShimmerElementsGroup-root"};r.d(t,"a",(function(){return s}));var s=Object(o.a)(n.a,(function(e){var t=e.flexWrap,r=e.theme;return{root:[Object(i.R)(a,r).root,r.fonts.medium,{display:"flex",alignItems:"center",flexWrap:t?"wrap":"nowrap",position:"relative"}]}}),void 0,{scope:"ShimmerElementsGroup"})},4128:function(e,t,r){"use strict";var o=r(6347),n=r(2010),i={root:"ms-ShimmerCircle-root",svg:"ms-ShimmerCircle-svg"};var a=r(4076);r.d(t,"a",(function(){return s}));var s=Object(o.a)(a.a,(function(e){var t,r,o=e.height,a=e.borderStyle,s=e.theme,c=s.semanticColors,l=Object(n.R)(i,s),m=a||{};return{root:[l.root,s.fonts.medium,{width:o+"px",height:o+"px",minWidth:o+"px",boxSizing:"content-box",borderTopStyle:"solid",borderBottomStyle:"solid",borderColor:c.bodyBackground,selectors:(t={},t[n.l]={borderColor:"Window"},t)},m],svg:[l.svg,{display:"block",fill:c.bodyBackground,selectors:(r={},r[n.l]={fill:"Window"},r)}]}}),void 0,{scope:"ShimmerCircle"})},4129:function(e,t,r){"use strict";var o=r(6347),n=r(4077),i=r(2010),a={root:"ms-ShimmerGap-root"};r.d(t,"a",(function(){return s}));var s=Object(o.a)(n.a,(function(e){var t,r=e.height,o=e.borderStyle,n=e.theme,s=n.semanticColors,c=o||{};return{root:[Object(i.R)(a,n).root,n.fonts.medium,{backgroundColor:s.bodyBackground,height:r+"px",boxSizing:"content-box",borderTopStyle:"solid",borderBottomStyle:"solid",borderColor:s.bodyBackground,selectors:(t={},t[i.l]={backgroundColor:"Window",borderColor:"Window"},t)},c]}}),void 0,{scope:"ShimmerGap"})},4130:function(e,t,r){"use strict";var o=r(6347),n=r(4078),i=r(2010),a={root:"ms-ShimmerLine-root",topLeftCorner:"ms-ShimmerLine-topLeftCorner",topRightCorner:"ms-ShimmerLine-topRightCorner",bottomLeftCorner:"ms-ShimmerLine-bottomLeftCorner",bottomRightCorner:"ms-ShimmerLine-bottomRightCorner"};r.d(t,"a",(function(){return s}));var s=Object(o.a)(n.a,(function(e){var t,r=e.height,o=e.borderStyle,n=e.theme,s=n.semanticColors,c=Object(i.R)(a,n),l=o||{},m={position:"absolute",fill:s.bodyBackground};return{root:[c.root,n.fonts.medium,{height:r+"px",boxSizing:"content-box",position:"relative",borderTopStyle:"solid",borderBottomStyle:"solid",borderColor:s.bodyBackground,borderWidth:0,selectors:(t={},t[i.l]={borderColor:"Window",selectors:{"> *":{fill:"Window"}}},t)},l],topLeftCorner:[c.topLeftCorner,{top:"0",left:"0"},m],topRightCorner:[c.topRightCorner,{top:"0",right:"0"},m],bottomRightCorner:[c.bottomRightCorner,{bottom:"0",right:"0"},m],bottomLeftCorner:[c.bottomLeftCorner,{bottom:"0",left:"0"},m]}}),void 0,{scope:"ShimmerLine"})},4794:function(e,t,r){"use strict";function o(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.length<2?t[0]:function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];t.forEach((function(t){return t&&t.apply(e,r)}))}}r.d(t,"a",(function(){return o}))},5282:function(e,t,r){"use strict";var o=r(6347),n=r(1680),i=r(2010),a=r(4337),s=r(5422),c={root:"ms-Shimmer-container",shimmerWrapper:"ms-Shimmer-shimmerWrapper",shimmerGradient:"ms-Shimmer-shimmerGradient",dataWrapper:"ms-Shimmer-dataWrapper"},l="100%",m=Object(a.c)((function(){return Object(i.bb)({"0%":{transform:"translateX(-"+l+")"},"100%":{transform:"translateX("+l+")"}})})),d=Object(a.c)((function(){return Object(i.bb)({"100%":{transform:"translateX(-"+l+")"},"0%":{transform:"translateX("+l+")"}})}));var h=r(4073);r.d(t,"a",(function(){return p}));var p=Object(o.a)(h.a,(function(e){var t,r=e.isDataLoaded,o=e.className,a=e.theme,h=e.transitionAnimationInterval,p=e.shimmerColor,u=e.shimmerWaveColor,b=a.semanticColors,f=Object(i.R)(c,a),g=Object(s.a)(a);return{root:[f.root,a.fonts.medium,{position:"relative",height:"auto"},o],shimmerWrapper:[f.shimmerWrapper,{position:"relative",overflow:"hidden",transform:"translateZ(0)",backgroundColor:p||b.disabledBackground,transition:"opacity "+h+"ms",selectors:(t={"> *":{transform:"translateZ(0)"}},t[i.l]=Object(n.a)({background:"WindowText\n                        linear-gradient(\n                          to right,\n                          transparent 0%,\n                          Window 50%,\n                          transparent 100%)\n                        0 0 / 90% 100%\n                        no-repeat"},Object(i.S)()),t)},r&&{opacity:"0",position:"absolute",top:"0",bottom:"0",left:"0",right:"0"}],shimmerGradient:[f.shimmerGradient,{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:(p||b.disabledBackground)+"\n                      linear-gradient(\n                        to right,\n                        "+(p||b.disabledBackground)+" 0%,\n                        "+(u||b.bodyDivider)+" 50%,\n                        "+(p||b.disabledBackground)+" 100%)\n                      0 0 / 90% 100%\n                      no-repeat",transform:"translateX(-"+l+")",animationDuration:"2s",animationTimingFunction:"ease-in-out",animationDirection:"normal",animationIterationCount:"infinite",animationName:g?d():m()}],dataWrapper:[f.dataWrapper,{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",opacity:"0",background:"none",backgroundColor:"transparent",border:"none",transition:"opacity "+h+"ms"},r&&{opacity:"1",position:"static"}],screenReaderText:i.ab}}),void 0,{scope:"Shimmer"})},5900:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var o=r(4026);function n(e){Object(o.a)(e,{componentDidMount:i,componentDidUpdate:a,componentWillUnmount:s})}function i(){c(this.props.componentRef,this)}function a(e){e.componentRef!==this.props.componentRef&&(c(e.componentRef,null),c(this.props.componentRef,this))}function s(){c(this.props.componentRef,null)}function c(e,t){e&&("object"==typeof e?e.current=t:"function"==typeof e&&e(t))}}}]);
//# sourceMappingURL=owa.852.js.map
self.scriptsLoaded['owa.852.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.852.js'] = (new Date()).getTime();