self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.347.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[347],{11610:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(3);let r=Object(n.createStore)("ucwaStore",{unreadCount:0});r()},168:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return o}));var n=a(9),r=Object(n.mergeStyleSets)({root:{display:"inline-block"},placeholder:["ms-Icon-placeHolder",{width:"1em"}],image:["ms-Icon-imageContainer",{overflow:"hidden"}]}),i="ms-Icon",o=function(e){var t=e.className,a=e.iconClassName,n=e.isPlaceholder,i=e.isImage,o=e.styles;return{root:[n&&r.placeholder,r.root,i&&r.image,a,t,o&&o.root,o&&o.imageContainer]}}},319:function(e,t,a){"use strict";var n=a(567),r=a(1),i=a(0),o=a(511),c=a(45),s=a(47),l=a(439),u=Object(o.a)(),d=/\.svg$/i;var m=i.forwardRef((function(e,t){var a=i.useRef(),n=i.useRef(),o=function(e,t){var a=e.onLoadingStateChange,n=e.onLoad,r=e.onError,o=e.src,c=i.useState(s.c.notLoaded),l=c[0],u=c[1];i.useLayoutEffect((function(){u(s.c.notLoaded)}),[o]),i.useEffect((function(){l===s.c.notLoaded&&(!!t.current&&(o&&t.current.naturalWidth>0&&t.current.naturalHeight>0||t.current.complete&&d.test(o))&&u(s.c.loaded))})),i.useEffect((function(){null==a||a(l)}),[l]);var m=i.useCallback((function(e){null==n||n(e),o&&u(s.c.loaded)}),[o,n]),g=i.useCallback((function(e){null==r||r(e),u(s.c.error)}),[r]);return[l,m,g]}(e,n),m=o[0],g=o[1],f=o[2],h=Object(c.j)(e,c.n,["width","height"]),p=e.src,b=e.alt,v=e.width,C=e.height,y=e.shouldFadeIn,_=void 0===y||y,j=e.shouldStartVisible,I=e.className,O=e.imageFit,N=e.role,w=e.maximizeFrame,S=e.styles,L=e.theme,F=e.loading,E=function(e,t,a,n){var r=i.useRef(t),o=i.useRef();(void 0===o||r.current===s.c.notLoaded&&t===s.c.loaded)&&(o.current=function(e,t,a,n){var r=e.imageFit,i=e.width,o=e.height;if(void 0!==e.coverStyle)return e.coverStyle;if(t===s.c.loaded&&(r===s.b.cover||r===s.b.contain||r===s.b.centerContain||r===s.b.centerCover)&&a.current&&n.current){var c=void 0;if(c="number"==typeof i&&"number"==typeof o&&r!==s.b.centerContain&&r!==s.b.centerCover?i/o:n.current.clientWidth/n.current.clientHeight,a.current.naturalWidth/a.current.naturalHeight>c)return s.a.landscape}return s.a.portrait}(e,t,a,n));return r.current=t,o.current}(e,m,n,a),P=u(S,{theme:L,className:I,width:v,height:C,maximizeFrame:w,shouldFadeIn:_,shouldStartVisible:j,isLoaded:m===s.c.loaded||m===s.c.notLoaded&&e.shouldStartVisible,isLandscape:E===s.a.landscape,isCenter:O===s.b.center,isCenterContain:O===s.b.centerContain,isCenterCover:O===s.b.centerCover,isContain:O===s.b.contain,isCover:O===s.b.cover,isNone:O===s.b.none,isError:m===s.c.error,isNotImageFit:void 0===O});return i.createElement("div",{className:P.root,style:{width:v,height:C},ref:a},i.createElement("img",Object(r.__assign)({},h,{onLoad:g,onError:f,key:"fabricImage"+e.src||"",className:P.image,ref:Object(l.a)(n,t),src:p,alt:b,role:N,loading:F})))}));m.displayName="ImageBase";var g=a(9),f=a(37),h={root:"ms-Image",rootMaximizeFrame:"ms-Image--maximizeFrame",image:"ms-Image-image",imageCenter:"ms-Image-image--center",imageContain:"ms-Image-image--contain",imageCover:"ms-Image-image--cover",imageCenterContain:"ms-Image-image--centerContain",imageCenterCover:"ms-Image-image--centerCover",imageNone:"ms-Image-image--none",imageLandscape:"ms-Image-image--landscape",imagePortrait:"ms-Image-image--portrait"};a.d(t,"a",(function(){return p}));var p=Object(n.a)(m,(function(e){var t=e.className,a=e.width,n=e.height,r=e.maximizeFrame,i=e.isLoaded,o=e.shouldFadeIn,c=e.shouldStartVisible,s=e.isLandscape,l=e.isCenter,u=e.isContain,d=e.isCover,m=e.isCenterContain,p=e.isCenterCover,b=e.isNone,v=e.isError,C=e.isNotImageFit,y=e.theme,_=Object(g.getGlobalClassNames)(h,y),j={position:"absolute",left:"50% /* @noflip */",top:"50%",transform:"translate(-50%,-50%)"},I=Object(f.a)(),O=void 0!==I&&void 0===I.navigator.msMaxTouchPoints,N=u&&s||d&&!s?{width:"100%",height:"auto"}:{width:"auto",height:"100%"};return{root:[_.root,y.fonts.medium,{overflow:"hidden"},r&&[_.rootMaximizeFrame,{height:"100%",width:"100%"}],i&&o&&!c&&g.AnimationClassNames.fadeIn400,(l||u||d||m||p)&&{position:"relative"},t],image:[_.image,{display:"block",opacity:0},i&&["is-loaded",{opacity:1}],l&&[_.imageCenter,j],u&&[_.imageContain,O&&{width:"100%",height:"100%",objectFit:"contain"},!O&&N,!O&&j],d&&[_.imageCover,O&&{width:"100%",height:"100%",objectFit:"cover"},!O&&N,!O&&j],m&&[_.imageCenterContain,s&&{maxWidth:"100%"},!s&&{maxHeight:"100%"},j],p&&[_.imageCenterCover,s&&{maxHeight:"100%"},!s&&{maxWidth:"100%"},j],b&&[_.imageNone,{width:"auto",height:"auto"}],C&&[!!a&&!n&&{height:"auto",width:"100%"},!a&&!!n&&{height:"100%",width:"auto"},!!a&&!!n&&{height:"100%",width:"100%"}],s&&_.imageLandscape,!s&&_.imagePortrait,!i&&"is-notLoaded",o&&"is-fadeIn",v&&"is-error"]}}),void 0,{scope:"Image"},!0);p.displayName="Image"},320:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return d}));var n=a(1),r=a(0),i=a(168),o=a(111),c=a(45),s=a(208),l=a(9),u=Object(o.c)((function(e){var t=Object(l.getIcon)(e)||{subset:{},code:void 0},a=t.code,n=t.subset;return a?{children:a,iconClassName:n.className,fontFamily:n.fontFace&&n.fontFace.fontFamily,mergeImageProps:n.mergeImageProps}:null}),void 0,!0),d=function(e){var t=e.iconName,a=e.className,o=e.style,l=void 0===o?{}:o,d=u(t)||{},m=d.iconClassName,g=d.children,f=d.fontFamily,h=d.mergeImageProps,p=Object(c.j)(e,c.k),b=e["aria-label"]||e.title,v=e["aria-label"]||e["aria-labelledby"]||e.title?{role:h?void 0:"img"}:{"aria-hidden":!0},C=g;return h&&"object"==typeof g&&"object"==typeof g.props&&b&&(C=r.cloneElement(g,{alt:b})),r.createElement("i",Object(n.__assign)({"data-icon-name":t},v,p,h?{title:void 0,"aria-label":void 0}:{},{className:Object(s.a)(i.a,i.b.root,m,!t&&i.b.placeholder,a),style:Object(n.__assign)({fontFamily:f},l)}),C)};Object(o.c)((function(e,t,a){return d({iconName:e,className:t,"aria-label":a})}))},321:function(e,t,a){"use strict";var n=a(567),r=a(1),i=a(0),o=a(366),c=a(319),s=a(47),l=a(511),u=a(45),d=a(320),m=Object(l.a)({cacheSize:100}),g=function(e){function t(t){var a=e.call(this,t)||this;return a._onImageLoadingStateChange=function(e){a.props.imageProps&&a.props.imageProps.onLoadingStateChange&&a.props.imageProps.onLoadingStateChange(e),e===s.c.error&&a.setState({imageLoadError:!0})},a.state={imageLoadError:!1},a}return Object(r.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.styles,s=e.iconName,l=e.imageErrorAs,g=e.theme,f="string"==typeof s&&0===s.length,h=!!this.props.imageProps||this.props.iconType===o.a.image||this.props.iconType===o.a.Image,p=Object(d.b)(s)||{},b=p.iconClassName,v=p.children,C=p.mergeImageProps,y=m(n,{theme:g,className:a,iconClassName:b,isImage:h,isPlaceholder:f}),_=h?"span":"i",j=Object(u.j)(this.props,u.k,["aria-label"]),I=this.state.imageLoadError,O=Object(r.__assign)(Object(r.__assign)({},this.props.imageProps),{onLoadingStateChange:this._onImageLoadingStateChange}),N=I&&l||c.a,w=this.props["aria-label"]||this.props.ariaLabel,S=O.alt||w||this.props.title,L=!!(S||this.props["aria-labelledby"]||O["aria-label"]||O["aria-labelledby"])?{role:h||C?void 0:"img","aria-label":h||C?void 0:S}:{"aria-hidden":!0},F=v;return C&&v&&"object"==typeof v&&S&&(F=i.cloneElement(v,{alt:S})),i.createElement(_,Object(r.__assign)({"data-icon-name":s},L,j,C?{title:void 0,"aria-label":void 0}:{},{className:y.root}),h?i.createElement(N,Object(r.__assign)({},O)):t||F)},t}(i.Component),f=a(168);a.d(t,"a",(function(){return h}));var h=Object(n.a)(g,f.c,void 0,{scope:"Icon"},!0);h.displayName="Icon"},366:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e[e.default=0]="default",e[e.image=1]="image",e[e.Default=1e5]="Default",e[e.Image=100001]="Image"}(n||(n={}))},47:function(e,t,a){"use strict";var n,r,i;a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return i})),function(e){e[e.center=0]="center",e[e.contain=1]="contain",e[e.cover=2]="cover",e[e.none=3]="none",e[e.centerCover=4]="centerCover",e[e.centerContain=5]="centerContain"}(n||(n={})),function(e){e[e.landscape=0]="landscape",e[e.portrait=1]="portrait"}(r||(r={})),function(e){e[e.notLoaded=0]="notLoaded",e[e.loaded=1]="loaded",e[e.error=2]="error",e[e.errorLoaded=3]="errorLoaded"}(i||(i={}))},511:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(104),r=a(512),i=a(229),o=a(37),c=50,s=5,l=0,u=n.b.getInstance();u&&u.onReset&&u.onReset((function(){return l++}));var d="__retval__";function m(e){void 0===e&&(e={});var t=new Map,a=0,n=l;return function(u,m){var g;if(void 0===m&&(m={}),e.useStaticStyles&&"function"==typeof u&&u.__noStyleOverride__)return u(m);0;var h=t,p=m.theme,b=p&&void 0!==p.rtl?p.rtl:Object(i.a)(),v=e.disableCaching;if(n!==l&&(n=l,t=new Map,a=0),e.disableCaching||(h=f(t,u),h=f(h,m)),!v&&h[d]||(h[d]=void 0===u?{}:Object(r.a)(["function"==typeof u?u(m):u],{rtl:!!b,specificityMultiplier:e.useStaticStyles?s:void 0}),v||a++),a>(e.cacheSize||c)){var C=Object(o.a)();null===(g=null==C?void 0:C.FabricConfig)||void 0===g||g.enableClassNameCacheFullWarning,t.clear(),a=0,e.disableCaching=!0}return h[d]}}function g(e,t){return t=function(e){switch(e){case void 0:return"__undefined__";case null:return"__null__";default:return e}}(t),e.has(t)||e.set(t,new Map),e.get(t)}function f(e,t){if("function"==typeof t)if(t.__cachedInputs__)for(var a=0,n=t.__cachedInputs__;a<n.length;a++){e=g(e,n[a])}else e=g(e,t);else if("object"==typeof t)for(var r in t)t.hasOwnProperty(r)&&(e=g(e,t[r]));return e}},567:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(1),r=a(0),i=a(515),o=a(358),c=["theme","styles"];function s(e,t,a,s,l){var u=(s=s||{scope:"",fields:void 0}).scope,d=s.fields,m=void 0===d?c:d,g=r.forwardRef((function(c,s){var l=r.useRef(),d=Object(o.a)(m,u),g=d.styles,f=(d.dir,Object(n.__rest)(d,["styles","dir"])),h=a?a(c):void 0,p=l.current&&l.current.__cachedInputs__||[];if(!l.current||g!==p[1]||c.styles!==p[2]){var b=function(e){return Object(i.a)(e,t,g,c.styles)};b.__cachedInputs__=[t,g,c.styles],b.__noStyleOverride__=!g&&!c.styles,l.current=b}return r.createElement(e,Object(n.__assign)({ref:s},f,h,c,{styles:l.current}))}));g.displayName="Styled"+(e.displayName||e.name);var f=l?r.memo(g):g;return g.displayName&&(f.displayName=g.displayName),f}},5922:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(3);const r={chats:[],isMoreChatMenuShown:!1,participantCache:new(a(14).ObservableMap)};let i=Object(n.createStore)("ucmaStore",r);i()},6412:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return s}));var n=a(5922);function r(){return Object(n.a)().chats.filter(e=>1==e.state||2==e.state)}function i(){return Object(n.a)().chats.filter(e=>0==e.state)}function o(){const{chats:e}=Object(n.a)();return e.filter(e=>0==e.state||c(e)>0).length}function c(e){return e.lastMessageSequence-e.lastReadMessageSequence}function s(){return Object(n.a)().chats.filter(e=>4==e.state)}}}]);
//# sourceMappingURL=owa.347.js.map
self.scriptsLoaded['owa.347.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.347.js'] = (new Date()).getTime();