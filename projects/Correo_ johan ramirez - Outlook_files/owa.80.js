self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.80.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[80],{12819:function(t,e,n){"use strict";var s=n(2613),a=n(2500),i=n(4683);n(1847);function o(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var r=n(0),p=n.n(r),u=n(6927),l=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.remove(s):"string"==typeof n.className?n.className=o(n.className,s):n.setAttribute("class",o(n.className&&n.className.baseVal||"",s)));var n,s}))},c=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var s=e.resolveArguments(t,n),a=s[0],i=s[1];e.removeClasses(a,"exit"),e.addClass(a,i?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var s=e.resolveArguments(t,n),a=s[0],i=s[1]?"appear":"enter";e.addClass(a,i,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var s=e.resolveArguments(t,n),a=s[0],i=s[1]?"appear":"enter";e.removeClasses(a,i),e.addClass(a,i,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,s="string"==typeof n,a=s?""+(s&&n?n+"-":"")+t:n[t];return{baseClassName:a,activeClassName:s?a+"-active":n[t+"Active"],doneClassName:s?a+"-done":n[t+"Done"]}},e}Object(i.a)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var s=this.getClassNames(e)[n+"ClassName"],a=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&a&&(s+=" "+a),"active"===n&&t&&t.scrollTop,s&&(this.appliedClasses[e][n]=s,function(t,e){t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.add(s):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,s)||("string"==typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(t,s))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],s=n.base,a=n.active,i=n.done;this.appliedClasses[e]={},s&&l(t,s),a&&l(t,a),i&&l(t,i)},n.render=function(){var t=this.props,e=(t.classNames,Object(a.a)(t,["classNames"]));return(p.a.createElement(u.d,Object(s.a)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited})))},e}(p.a.Component);c.defaultProps={classNames:""},c.propTypes={};e.a=c},4683:function(t,e,n){"use strict";function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,s(t,e)}n.d(e,"a",(function(){return a}))},5140:function(t,e,n){"use strict";var s=n(0),a=n.n(s);e.a=a.a.createContext(null)},6927:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return E})),n.d(e,"c",(function(){return h}));var s=n(2500),a=n(4683),i=(n(1847),n(0)),o=n.n(i),r=n(149),p=n.n(r),u=n(7662),l=n(5140),c="unmounted",d="exited",f="entering",E="entered",h="exiting",x=function(t){function e(e,n){var s;s=t.call(this,e,n)||this;var a,i=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?i?(a=d,s.appearStatus=f):a=E:a=e.unmountOnExit||e.mountOnEnter?c:d,s.state={status:a},s.nextCallback=null,s}Object(a.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===c?{status:d}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==E&&(e=f):n!==f&&n!==E||(e=h)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!=typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===f?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:c})},n.performEnter=function(t){var e=this,n=this.props.enter,s=this.context?this.context.isMounting:t,a=this.props.nodeRef?[s]:[p.a.findDOMNode(this),s],i=a[0],o=a[1],r=this.getTimeouts(),l=s?r.appear:r.enter;!t&&!n||u.a.disabled?this.safeSetState({status:E},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,o),this.safeSetState({status:f},(function(){e.props.onEntering(i,o),e.onTransitionEnd(l,(function(){e.safeSetState({status:E},(function(){e.props.onEntered(i,o)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:p.a.findDOMNode(this);e&&!u.a.disabled?(this.props.onExit(s),this.safeSetState({status:h},(function(){t.props.onExiting(s),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(s)}))}))}))):this.safeSetState({status:d},(function(){t.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:p.a.findDOMNode(this),s=null==t&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=a[0],o=a[1];this.props.addEndListener(i,o)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===c)return null;var e=this.props,n=e.children,a=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(s.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return(o.a.createElement(l.a.Provider,{value:null},"function"==typeof n?n(t,a):o.a.cloneElement(o.a.Children.only(n),a)))},e}(o.a.Component);function m(){}x.contextType=l.a,x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},x.UNMOUNTED=c,x.EXITED=d,x.ENTERING=f,x.ENTERED=E,x.EXITING=h,e.d=x},7662:function(t,e,n){"use strict";e.a={disabled:!1}}}]);
//# sourceMappingURL=owa.80.js.map
self.scriptsLoaded['owa.80.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.80.js'] = (new Date()).getTime();