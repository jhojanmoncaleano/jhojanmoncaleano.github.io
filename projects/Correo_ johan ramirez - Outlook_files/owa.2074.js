self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.2074.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[2074],{18951:function(e,t,n){"use strict";n.r(t),
/*!
 * ASP.NET SignalR JavaScript Library v2.2.1
 * http://signalr.net/
 *
 * Copyright (c) .NET Foundation. All rights reserved.
 * Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
 *
 */
function(e,t,n){var o={nojQuery:"jQuery was not found. Please ensure jQuery is referenced before the SignalR client JavaScript file.",noTransportOnInit:"No transport could be initialized successfully. Try specifying a different transport or none at all for auto initialization.",errorOnNegotiate:"Error during negotiation request.",stoppedWhileLoading:"The connection was stopped during page load.",stoppedWhileNegotiating:"The connection was stopped during the negotiate request.",errorParsingNegotiateResponse:"Error parsing negotiate response.",errorDuringStartRequest:"Error during start request. Stopping the connection.",stoppedDuringStartRequest:"The connection was stopped during the start request.",errorParsingStartResponse:"Error parsing start response: '{0}'. Stopping the connection.",invalidStartResponse:"Invalid start response: '{0}'. Stopping the connection.",protocolIncompatible:"You are using a version of the client that isn't compatible with the server. Client version {0}, server version {1}.",sendFailed:"Send failed.",parseFailed:"Failed at parsing response: {0}",longPollFailed:"Long polling request failed.",eventSourceFailedToConnect:"EventSource failed to connect.",eventSourceError:"Error raised by EventSource",webSocketClosed:"WebSocket closed.",pingServerFailedInvalidResponse:"Invalid ping response when pinging server: '{0}'.",pingServerFailed:"Failed to ping server.",pingServerFailedStatusCode:"Failed to ping server.  Server responded with status code {0}, stopping the connection.",pingServerFailedParse:"Failed to parse ping server response, stopping the connection.",noConnectionTransport:"Connection is in an invalid state, there is no transport active.",webSocketsInvalidState:"The Web Socket transport is in an invalid state, transitioning into reconnecting.",reconnectTimeout:"Couldn't reconnect within the configured timeout of {0} ms, disconnecting.",reconnectWindowTimeout:"The client has been inactive since {0} and it has exceeded the inactivity timeout of {1} ms. Stopping the connection."};if("function"!=typeof e)throw new Error(o.nojQuery);var r,i,a,s,c="complete"===t.document.readyState,l=e(t),u={onStart:"onStart",onStarting:"onStarting",onReceived:"onReceived",onError:"onError",onConnectionSlow:"onConnectionSlow",onReconnecting:"onReconnecting",onReconnect:"onReconnect",onStateChanged:"onStateChanged",onDisconnect:"onDisconnect"},d=function(t,n,o){return n===t.state&&(t.state=o,e(t).triggerHandler(u.onStateChanged,[{oldState:n,newState:o}]),!0)},g=function(e){return e._.keepAliveData.activated&&e.transport.supportsKeepAlive(e)};function p(e,t){return t.match(/:\d+$/)?t:t+":"+function(e){return"http:"===e?80:"https:"===e?443:void 0}(e)}function f(t,n){var o=[];this.tryBuffer=function(n){return t.state===e.signalR.connectionState.connecting&&(o.push(n),!0)},this.drain=function(){if(t.state===e.signalR.connectionState.connected)for(;o.length>0;)n(o.shift())},this.clear=function(){o=[]}}(r=function(e,t,n){return new r.fn.init(e,t,n)})._={defaultContentType:"application/x-www-form-urlencoded; charset=UTF-8",ieVersion:("Microsoft Internet Explorer"===t.navigator.appName&&(s=/MSIE ([0-9]+\.[0-9]+)/.exec(t.navigator.userAgent))&&(a=t.parseFloat(s[1])),a),error:function(e,t,n){var o=new Error(e);return o.source=t,void 0!==n&&(o.context=n),o},transportError:function(e,t,n,o){var r=this.error(e,n,o);return r.transport=t?t.name:void 0,r},format:function(){for(var e=arguments[0],t=0;t<arguments.length-1;t++)e=e.replace("{"+t+"}",arguments[t+1]);return e},firefoxMajorVersion:function(e){var t=e.match(/Firefox\/(\d+)/);return!t||!t.length||t.length<2?0:parseInt(t[1],10)},configurePingInterval:function(n){var o=n._.config,i=function(t){e(n).triggerHandler(u.onError,[t])};o&&!n._.pingIntervalId&&o.pingInterval&&(n._.pingIntervalId=t.setInterval((function(){r.transports._logic.pingServer(n).fail(i)}),o.pingInterval))}},r.events=u,r.resources=o,r.ajaxDefaults={processData:!0,timeout:null,async:!0,global:!1,cache:!1},r.changeState=d,r.isDisconnecting=function(e){return e.state===r.connectionState.disconnected},r.connectionState={connecting:0,connected:1,reconnecting:2,disconnected:4},r.hub={start:function(){throw new Error("SignalR: Error loading hubs. Ensure your hubs reference is correct, e.g. <script src='/signalr/js'><\/script>.")}},"function"==typeof l.on?l.on("load",(function(){c=!0})):l.load((function(){c=!0})),r.fn=r.prototype={init:function(t,n,o){var r=e(this);this.url=t,this.qs=n,this.lastError=null,this._={keepAliveData:{},connectingMessageBuffer:new f(this,(function(e){r.triggerHandler(u.onReceived,[e])})),lastMessageAt:(new Date).getTime(),lastActiveAt:(new Date).getTime(),beatInterval:5e3,beatHandle:null,totalTransportConnectTimeout:0,lastNegotiateAFDRef:null,lastNegotiateBEServer:null,lastNegotiateTime:null,lastNegotiateRequestId:null,initFailureTimes:0,reportedInitFailureTimes:0},"boolean"==typeof o&&(this.logging=o)},_parseResponse:function(e){return e&&"string"==typeof e?this.json.parse(e):e},_originalJson:t.JSON,json:t.JSON,isCrossDomain:function(n,o){var r;return n=e.trim(n),o=o||t.location,0===n.indexOf("http")&&((r=t.document.createElement("a")).href=n,r.protocol+p(r.protocol,r.host)!==o.protocol+p(o.protocol,o.host))},ajaxDataType:"text",contentType:"application/json; charset=UTF-8",logging:!1,state:r.connectionState.disconnected,clientProtocol:"1.5",reconnectDelay:2e3,transportConnectTimeout:0,disconnectTimeout:3e4,reconnectWindow:3e4,keepAliveWarnAt:2/3,start:function(n,i){var a,s=this,p={pingInterval:3e5,waitForPageLoad:!0,transport:"auto",jsonp:!1},f=s._deferral||e.Deferred(),v=t.document.createElement("a");if(s.lastError=null,s._deferral=f,!s.json)throw new Error("SignalR: No JSON parser found. Please ensure json2.js is referenced before the SignalR.js file if you need to support clients without native JSON parsing support, e.g. IE<8.");if("function"===e.type(n)?i=n:"object"===e.type(n)&&(e.extend(p,n),"function"===e.type(p.callback)&&(i=p.callback)),p.transport=function(t,n){if(e.isArray(t)){for(var o=t.length-1;o>=0;o--){var i=t[o];"string"===e.type(i)&&r.transports[i]||(n.log("Invalid transport: "+i+", removing it from the transports list."),t.splice(o,1))}0===t.length&&(n.log("No transports remain within the specified transport array."),t=null)}else if(r.transports[t]||"auto"===t){if("auto"===t&&r._.ieVersion<=8)return["longPolling"]}else n.log("Invalid transport: "+t.toString()+"."),t=null;return t}(p.transport,s),!p.transport)throw new Error("SignalR: Invalid transport(s) specified, aborting start.");if(s._.config=p,!c&&!0===p.waitForPageLoad)return s._.deferredStartHandler=function(){s.start(n,i)},l.bind("load",s._.deferredStartHandler),f.promise();if(s.state===r.connectionState.connecting)return f.promise();if(!1===d(s,r.connectionState.disconnected,r.connectionState.connecting))return f.resolve(s),f.promise();!function(n){var o,i;n._.configuredStopReconnectingTimeout||(i=function(t){var n=r._.format(r.resources.reconnectTimeout,t.disconnectTimeout);t.log(n),e(t).triggerHandler(u.onError,[r._.error(n,"TimeoutException")]),t.stop(!1,!1)},n.reconnecting((function(){var e=this;e.state===r.connectionState.reconnecting&&(o=t.setTimeout((function(){i(e)}),e.disconnectTimeout))})),n.stateChanged((function(e){e.oldState===r.connectionState.reconnecting&&t.clearTimeout(o)})),n._.configuredStopReconnectingTimeout=!0)}(s),v.href=s.url,v.protocol&&":"!==v.protocol?(s.protocol=v.protocol,s.host=v.host):(s.protocol=t.document.location.protocol,s.host=v.host||t.document.location.host),s.baseUrl=s.protocol+"//"+s.host,s.wsProtocol="https:"===s.protocol?"wss://":"ws://","auto"===p.transport&&!0===p.jsonp&&(p.transport="longPolling"),0===s.url.indexOf("//")&&(s.url=t.location.protocol+s.url,s.log("Protocol relative URL detected, normalizing it to '"+s.url+"'.")),this.isCrossDomain(s.url)&&(s.log("Auto detected cross domain url."),"auto"===p.transport&&(p.transport=["webSockets","serverSentEvents","longPolling"]),void 0===p.withCredentials&&(p.withCredentials=!0),p.jsonp||(p.jsonp=!e.support.cors,p.jsonp&&s.log("Using jsonp because this browser doesn't support CORS.")),s.contentType=r._.defaultContentType),s.withCredentials=p.withCredentials,s.ajaxDataType=p.jsonp?"jsonp":"text",e(s).bind(u.onStart,(function(t,n){"function"===e.type(i)&&i.call(s),f.resolve(s)})),s._.initHandler=r.transports._logic.initHandler(s),a=function(n,i){var c=r._.error(o.noTransportOnInit);if((i=i||0)>=n.length)return 0===i?s.log("No transports supported by the server were selected."):1===i?s.log("No fallback transports were selected."):s.log("Fallback transports exhausted."),e(s).triggerHandler(u.onError,[c]),f.reject(c),void s.stop();if(s.state!==r.connectionState.disconnected){var p=n[i],v=r.transports[p],h=function(){a(n,i+1)};s.transport=v;try{s._.initHandler.start(v,(function(){var n=r._.firefoxMajorVersion(t.navigator.userAgent)>=11,o=!!s.withCredentials&&n;s.log("The start request succeeded. Transitioning to the connected state."),g(s)&&r.transports._logic.monitorKeepAlive(s),r.transports._logic.startHeartbeat(s),r._.configurePingInterval(s),d(s,r.connectionState.connecting,r.connectionState.connected)||s.log("WARNING! The connection was not in the connecting state."),s._.connectingMessageBuffer.drain(),e(s).triggerHandler(u.onStart),l.bind("unload",(function(){s.log("Window unloading, stopping the connection."),s.stop(o)})),n&&l.bind("beforeunload",(function(){t.setTimeout((function(){s.stop(o)}),0)}))}),h)}catch(e){s.log(v.name+" transport threw '"+e.message+"' when attempting to start."),h()}}};var h=s.url+"/negotiate",m=function(t,n){var i=r._.error(o.errorOnNegotiate,t,n._.negotiateRequest);e(n).triggerHandler(u.onError,i),f.reject(i),n.stop()};return e(s).triggerHandler(u.onStarting),h=r.transports._logic.prepareQueryString(s,h),s.log("Negotiating with '"+h+"'."),s._.negotiateRequest=r.transports._logic.ajax(s,{url:h,error:function(e,t){"__Negotiate Aborted__"!==t?m(e,s):f.reject(r._.error(o.stoppedWhileNegotiating,null,s._.negotiateRequest))},success:function(t,n,i){var c,l,d,g=[],v=[];try{c=s._parseResponse(t)}catch(e){return void m(r._.error(o.errorParsingNegotiateResponse,e),s)}if(s._.lastNegotiateAFDRef=i.getResponseHeader("X-MSEdge-Ref")||"NONE",s._.lastNegotiateBEServer=i.getResponseHeader("x-beserver"),s._.lastNegotiateTime=i.getResponseHeader("x-backend-begin"),s._.lastNegotiateRequestId=i.getResponseHeader("request-id"),l=s._.keepAliveData,s.appRelativeUrl=c.Url,s.id=c.ConnectionId,s.token=c.ConnectionToken,s.webSocketServerUrl=c.WebSocketServerUrl,s._.pollTimeout=1e3*c.ConnectionTimeout+1e4,s.disconnectTimeout=1e3*c.DisconnectTimeout,s._.totalTransportConnectTimeout=s.transportConnectTimeout+1e3*c.TransportConnectTimeout,c.KeepAliveTimeout?(l.activated=!0,l.timeout=1e3*c.KeepAliveTimeout,l.timeoutWarning=l.timeout*s.keepAliveWarnAt,s._.beatInterval=(l.timeout-l.timeoutWarning)/3):l.activated=!1,s.reconnectWindow=s.disconnectTimeout+(l.timeout||0),!c.ProtocolVersion||c.ProtocolVersion!==s.clientProtocol)return d=r._.error(r._.format(o.protocolIncompatible,s.clientProtocol,c.ProtocolVersion)),e(s).triggerHandler(u.onError,[d]),void f.reject(d);e.each(r.transports,(function(e){if(0===e.indexOf("_")||"webSockets"===e&&!c.TryWebSockets)return!0;v.push(e)})),e.isArray(p.transport)?e.each(p.transport,(function(t,n){e.inArray(n,v)>=0&&g.push(n)})):"auto"===p.transport?g=v:e.inArray(p.transport,v)>=0&&g.push(p.transport),a(g)}}),f.promise()},starting:function(t){var n=this;return e(n).bind(u.onStarting,(function(e,o){t.call(n)})),n},send:function(e){if(this.state===r.connectionState.disconnected)throw new Error("SignalR: Connection must be started before data can be sent. Call .start() before .send()");if(this.state===r.connectionState.connecting)throw new Error("SignalR: Connection has not been fully initialized. Use .start().done() or .start().fail() to run logic after the connection has started.");return this.transport.send(this,e),this},received:function(t){var n=this;return e(n).bind(u.onReceived,(function(e,o){t.call(n,o)})),n},stateChanged:function(t){var n=this;return e(n).bind(u.onStateChanged,(function(e,o){t.call(n,o)})),n},error:function(t){var n=this;return e(n).bind(u.onError,(function(e,o,r){n.lastError=o,t.call(n,o,r)})),n},disconnected:function(t){var n=this;return e(n).bind(u.onDisconnect,(function(e,o){t.call(n)})),n},connectionSlow:function(t){var n=this;return e(n).bind(u.onConnectionSlow,(function(e,o){t.call(n)})),n},reconnecting:function(t){var n=this;return e(n).bind(u.onReconnecting,(function(e,o){t.call(n)})),n},reconnected:function(t){var n=this;return e(n).bind(u.onReconnect,(function(e,o){t.call(n)})),n},stop:function(n,i){var a=this._deferral;return this._.deferredStartHandler&&l.unbind("load",this._.deferredStartHandler),delete this._.config,delete this._.deferredStartHandler,c||this._.config&&!0!==this._.config.waitForPageLoad?this.state!==r.connectionState.disconnected?(this.log("Stopping connection."),t.clearTimeout(this._.beatHandle),t.clearInterval(this._.pingIntervalId),this.transport&&(this.transport.stop(this),!1!==i&&this.transport.abort(this,n),g(this)&&r.transports._logic.stopMonitoringKeepAlive(this),this.transport=null),this._.negotiateRequest&&(this._.negotiateRequest.abort("__Negotiate Aborted__"),delete this._.negotiateRequest),this._.initHandler&&this._.initHandler.stop(),delete this._deferral,delete this.messageId,delete this.groupsToken,delete this.id,delete this._.pingIntervalId,delete this._.lastMessageAt,delete this._.lastActiveAt,this._.connectingMessageBuffer.clear(),d(this,this.state,r.connectionState.disconnected),e(this).triggerHandler(u.onDisconnect),this):void 0:(this.log("Stopping connection prior to negotiate."),void(a&&a.reject(r._.error(o.stoppedWhileLoading))))},log:function(e){!function(e,n){var o;!1!==n&&(void 0!==t.console&&(o="["+(new Date).toTimeString()+"] SignalR: "+e,t.console.debug?t.console.debug(o):t.console.log&&t.console.log(o)))}(e,this.logging)}},r.fn.init.prototype=r.fn,r.noConflict=function(){return e.connection===r&&(e.connection=i),r},e.connection&&(i=e.connection),e.connection=e.signalR=r}(window.jQuery,window),function(e,t,n){var o,r=e.signalR,i=e.signalR.events,a=e.signalR.changeState;function s(n){n._.keepAliveData.monitoring&&function(t){var n,o=t._.keepAliveData;t.state===r.connectionState.connected&&((n=(new Date).getTime()-t._.lastMessageAt)>=o.timeout?(t.log("Keep alive timed out.  Notifying transport that connection has been lost."),t.transport.lostConnection(t)):n>=o.timeoutWarning?o.userNotified||(t.log("Keep alive has been missed, connection may be dead/slow."),e(t).triggerHandler(i.onConnectionSlow),o.userNotified=!0):o.userNotified=!1)}(n),o.markActive(n)&&(n._.beatHandle=t.setTimeout((function(){s(n)}),n._.beatInterval))}function c(e,t){var n=e.url+t;return e.transport&&(n+="?transport="+e.transport.name),o.prepareQueryString(e,n)}function l(e){this.connection=e,this.startRequested=!1,this.startCompleted=!1,this.connectionStopped=!1}r.transports={},l.prototype={start:function(e,n,o){var r=this,i=r.connection,a=!1;r.startRequested||r.connectionStopped?i.log("WARNING! "+e.name+" transport cannot be started. Initialization ongoing or completed."):(i.log(e.name+" transport starting."),e.start(i,(function(){a||r.initReceived(e,n)}),(function(t){return a||(a=!0,r.transportFailed(e,t,o)),!r.startCompleted||r.connectionStopped})),r.transportTimeoutHandle=t.setTimeout((function(){a||(a=!0,i.log(e.name+" transport timed out when trying to connect."),i._.initFailureTimes+=1,t.owaLogSignalRError&&i._.initFailureTimes>2&&i._.reportedInitFailureTimes<1&&(t.owaLogSignalRError("connection init timed out",{negotiateAfdRef:i._.lastNegotiateAFDRef,beServer:i._.lastNegotiateBEServer,beTime:i._.lastNegotiateTime,negotiateReqId:i._.lastNegotiateRequestId,domain:t.location.hostname}),i._.reportedInitFailureTimes+=1),r.transportFailed(e,void 0,o))}),i._.totalTransportConnectTimeout))},stop:function(){this.connectionStopped=!0,t.clearTimeout(this.transportTimeoutHandle),r.transports._logic.tryAbortStartRequest(this.connection)},initReceived:function(e,n){var o=this,i=o.connection;o.startRequested?i.log("WARNING! The client received multiple init messages."):o.connectionStopped||(o.startRequested=!0,t.clearTimeout(o.transportTimeoutHandle),i.log(e.name+" transport connected. Initiating start request."),r.transports._logic.ajaxStart(i,(function(){o.startCompleted=!0,n()})))},transportFailed:function(n,o,a){var s,c=this.connection,l=c._deferral;this.connectionStopped||(t.clearTimeout(this.transportTimeoutHandle),this.startRequested?this.startCompleted||(s=r._.error(r.resources.errorDuringStartRequest,o),c.log(n.name+" transport failed during the start request. Stopping the connection."),e(c).triggerHandler(i.onError,[s]),l&&l.reject(s),c.stop()):(n.stop(c),c.log(n.name+" transport failed to connect. Attempting to fall back."),a()))}},o=r.transports._logic={ajax:function(t,n){return e.ajax(e.extend(!0,{},e.signalR.ajaxDefaults,{type:"GET",data:{},xhrFields:{withCredentials:t.withCredentials},contentType:t.contentType,dataType:t.ajaxDataType},n))},pingServer:function(t){var n,i,a=e.Deferred();return t.transport?(n=t.url+"/ping",n=o.addQs(n,t.qs),i=o.ajax(t,{url:n,success:function(e){var n;try{n=t._parseResponse(e)}catch(e){return a.reject(r._.transportError(r.resources.pingServerFailedParse,t.transport,e,i)),void t.stop()}"pong"===n.Response?a.resolve():a.reject(r._.transportError(r._.format(r.resources.pingServerFailedInvalidResponse,e),t.transport,null,i))},error:function(e){401===e.status||403===e.status?(a.reject(r._.transportError(r._.format(r.resources.pingServerFailedStatusCode,e.status),t.transport,e,i)),t.stop()):a.reject(r._.transportError(r.resources.pingServerFailed,t.transport,e,i))}})):a.reject(r._.transportError(r.resources.noConnectionTransport,t.transport)),a.promise()},prepareQueryString:function(e,n){var r;return r=o.addQs(n,"clientProtocol="+e.clientProtocol),r=o.addQs(r,e.qs),e.token&&(r+="&connectionToken="+t.encodeURIComponent(e.token)),e.data&&(r+="&connectionData="+t.encodeURIComponent(e.data)),r},addQs:function(t,n){var o,r=-1!==t.indexOf("?")?"&":"?";if(!n)return t;if("object"==typeof n)return t+r+e.param(n);if("string"==typeof n)return"?"!==(o=n.charAt(0))&&"&"!==o||(r=""),t+r+n;throw new Error("Query string property must be either a string or object.")},getUrl:function(e,n,r,i,a){var s=("webSockets"===n?"":e.baseUrl)+e.appRelativeUrl,c="transport="+n;return!a&&e.groupsToken&&(c+="&groupsToken="+t.encodeURIComponent(e.groupsToken)),r?(s+=i?"/poll":"/reconnect",!a&&e.messageId&&(c+="&messageId="+t.encodeURIComponent(e.messageId))):s+="/connect",s+="?"+c,s=o.prepareQueryString(e,s),a||(s+="&tid="+Math.floor(11*Math.random())),s},maximizePersistentResponse:function(e){return{MessageId:e.C,Messages:e.M,Initialized:void 0!==e.S,ShouldReconnect:void 0!==e.T,LongPollDelay:e.L,GroupsToken:e.G}},updateGroups:function(e,t){t&&(e.groupsToken=t)},stringifySend:function(e,t){return"string"==typeof t||null==t?t:e.json.stringify(t)},ajaxSend:function(t,n){var a,s=o.stringifySend(t,n),l=c(t,"/send"),u=function(t,o){e(o).triggerHandler(i.onError,[r._.transportError(r.resources.sendFailed,o.transport,t,a),n])};return a=o.ajax(t,{url:l,type:"jsonp"===t.ajaxDataType?"GET":"POST",contentType:r._.defaultContentType,data:{data:s},success:function(e){var n;if(e){try{n=t._parseResponse(e)}catch(e){return u(e,t),void t.stop()}o.triggerReceived(t,n)}},error:function(e,n){"abort"!==n&&"parsererror"!==n&&u(e,t)}})},ajaxAbort:function(e,t){if(void 0!==e.transport){t=void 0===t||t;var n=c(e,"/abort");o.ajax(e,{url:n,async:t,timeout:1e3,type:"POST"}),e.log("Fired ajax abort async = "+t+".")}},ajaxStart:function(t,n){var a=function(e){var n=t._deferral;n&&n.reject(e)},s=function(n){t.log("The start request failed. Stopping the connection."),e(t).triggerHandler(i.onError,[n]),a(n),t.stop()};t._.startRequest=o.ajax(t,{url:c(t,"/start"),success:function(e,o,i){var a;try{a=t._parseResponse(e)}catch(t){return void s(r._.error(r._.format(r.resources.errorParsingStartResponse,e),t,i))}"started"===a.Response?n():s(r._.error(r._.format(r.resources.invalidStartResponse,e),null,i))},error:function(e,n,o){"__Start Aborted__"!==n?s(r._.error(r.resources.errorDuringStartRequest,o,e)):(t.log("The start request aborted because connection.stop() was called."),a(r._.error(r.resources.stoppedDuringStartRequest,null,e)))}})},tryAbortStartRequest:function(e){e._.startRequest&&(e._.startRequest.abort("__Start Aborted__"),delete e._.startRequest)},tryInitialize:function(e,t,n){t.Initialized&&n?n():t.Initialized&&e.log("WARNING! The client received an init message after reconnecting.")},triggerReceived:function(t,n){t._.connectingMessageBuffer.tryBuffer(n)||e(t).triggerHandler(i.onReceived,[n])},processMessages:function(t,n,r){var i;o.markLastMessage(t),n&&(i=o.maximizePersistentResponse(n),o.updateGroups(t,i.GroupsToken),i.MessageId&&(t.messageId=i.MessageId),i.Messages&&(e.each(i.Messages,(function(e,n){o.triggerReceived(t,n)})),o.tryInitialize(t,i,r)))},monitorKeepAlive:function(t){var n=t._.keepAliveData;n.monitoring?t.log("Tried to monitor keep alive but it's already being monitored."):(n.monitoring=!0,o.markLastMessage(t),t._.keepAliveData.reconnectKeepAliveUpdate=function(){o.markLastMessage(t)},e(t).bind(i.onReconnect,t._.keepAliveData.reconnectKeepAliveUpdate),t.log("Now monitoring keep alive with a warning timeout of "+n.timeoutWarning+", keep alive timeout of "+n.timeout+" and disconnecting timeout of "+t.disconnectTimeout))},stopMonitoringKeepAlive:function(t){var n=t._.keepAliveData;n.monitoring&&(n.monitoring=!1,e(t).unbind(i.onReconnect,t._.keepAliveData.reconnectKeepAliveUpdate),t._.keepAliveData={},t.log("Stopping the monitoring of the keep alive."))},startHeartbeat:function(e){e._.lastActiveAt=(new Date).getTime(),s(e)},markLastMessage:function(e){e._.lastMessageAt=(new Date).getTime()},markActive:function(e){return!!o.verifyLastActive(e)&&(e._.lastActiveAt=(new Date).getTime(),!0)},isConnectedOrReconnecting:function(e){return e.state===r.connectionState.connected||e.state===r.connectionState.reconnecting},ensureReconnectingState:function(t){return!0===a(t,r.connectionState.connected,r.connectionState.reconnecting)&&e(t).triggerHandler(i.onReconnecting),t.state===r.connectionState.reconnecting},clearReconnectTimeout:function(e){e&&e._.reconnectTimeout&&(t.clearTimeout(e._.reconnectTimeout),delete e._.reconnectTimeout)},verifyLastActive:function(t){if((new Date).getTime()-t._.lastActiveAt>=t.reconnectWindow){var n=r._.format(r.resources.reconnectWindowTimeout,new Date(t._.lastActiveAt),t.reconnectWindow);return t.log(n),e(t).triggerHandler(i.onError,[r._.error(n,"TimeoutException")]),t.stop(!1,!1),!1}return!0},reconnect:function(e,n){var i=r.transports[n];if(o.isConnectedOrReconnecting(e)&&!e._.reconnectTimeout){if(!o.verifyLastActive(e))return;e._.reconnectTimeout=t.setTimeout((function(){o.verifyLastActive(e)&&(i.stop(e),o.ensureReconnectingState(e)&&(e.log(n+" reconnecting."),i.start(e)))}),e.reconnectDelay)}},handleParseFailure:function(t,n,o,a,s){var c=r._.transportError(r._.format(r.resources.parseFailed,n),t.transport,o,s);a&&a(c)?t.log("Failed to parse server response while attempting to connect."):(e(t).triggerHandler(i.onError,[c]),t.stop())},initHandler:function(e){return new l(e)},foreverFrame:{count:0,connections:{}}}}(window.jQuery,window),function(e,t,n){var o=e.signalR,r=e.signalR.events,i=e.signalR.changeState,a=o.transports._logic;o.transports.webSockets={name:"webSockets",supportsKeepAlive:function(){return!0},send:function(t,n){var i=a.stringifySend(t,n);try{t.socket.send(i)}catch(i){e(t).triggerHandler(r.onError,[o._.transportError(o.resources.webSocketsInvalidState,t.transport,i,t.socket),n])}},start:function(n,s,c){var l,u=!1,d=this,g=!s,p=e(n);t.WebSocket?n.socket||(l=n.webSocketServerUrl?n.webSocketServerUrl:n.wsProtocol+n.host,l+=a.getUrl(n,this.name,g),n.log("Connecting to websocket endpoint '"+l+"'."),n.socket=new t.WebSocket(l),n.socket.onopen=function(){u=!0,n.log("Websocket opened."),a.clearReconnectTimeout(n),!0===i(n,o.connectionState.reconnecting,o.connectionState.connected)&&p.triggerHandler(r.onReconnect)},n.socket.onclose=function(t){var i;this===n.socket&&(u&&void 0!==t.wasClean&&!1===t.wasClean?(i=o._.transportError(o.resources.webSocketClosed,n.transport,t),n.log("Unclean disconnect from websocket: "+(t.reason||"[no reason given]."))):n.log("Websocket closed."),c&&c(i)||(i&&e(n).triggerHandler(r.onError,[i]),d.reconnect(n)))},n.socket.onmessage=function(t){var o;try{o=n._parseResponse(t.data)}catch(e){return void a.handleParseFailure(n,t.data,e,c,t)}o&&(e.isEmptyObject(o)||o.M?a.processMessages(n,o,s):a.triggerReceived(n,o))}):c()},reconnect:function(e){a.reconnect(e,this.name)},lostConnection:function(e){this.reconnect(e)},stop:function(e){a.clearReconnectTimeout(e),e.socket&&(e.log("Closing the Websocket."),e.socket.close(),e.socket=null)},abort:function(e,t){a.ajaxAbort(e,t)}}}(window.jQuery,window),function(e,t,n){var o=e.signalR,r=e.signalR.events,i=e.signalR.changeState,a=o.transports._logic,s=function(e){t.clearTimeout(e._.reconnectAttemptTimeoutHandle),delete e._.reconnectAttemptTimeoutHandle};o.transports.serverSentEvents={name:"serverSentEvents",supportsKeepAlive:function(){return!0},timeOut:3e3,start:function(n,c,l){var u,d=this,g=!1,p=e(n),f=!c;if(n.eventSource&&(n.log("The connection already has an event source. Stopping it."),n.stop()),t.EventSource){u=a.getUrl(n,this.name,f);try{n.log("Attempting to connect to SSE endpoint '"+u+"'."),n.eventSource=new t.EventSource(u,{withCredentials:n.withCredentials})}catch(e){return n.log("EventSource failed trying to connect with error "+e.Message+"."),void(l?l():(p.triggerHandler(r.onError,[o._.transportError(o.resources.eventSourceFailedToConnect,n.transport,e)]),f&&d.reconnect(n)))}f&&(n._.reconnectAttemptTimeoutHandle=t.setTimeout((function(){!1===g&&n.eventSource.readyState!==t.EventSource.OPEN&&d.reconnect(n)}),d.timeOut)),n.eventSource.addEventListener("open",(function(e){n.log("EventSource connected."),s(n),a.clearReconnectTimeout(n),!1===g&&(g=!0,!0===i(n,o.connectionState.reconnecting,o.connectionState.connected)&&p.triggerHandler(r.onReconnect))}),!1),n.eventSource.addEventListener("message",(function(e){var t;if("initialized"!==e.data){try{t=n._parseResponse(e.data)}catch(t){return void a.handleParseFailure(n,e.data,t,l,e)}a.processMessages(n,t,c)}}),!1),n.eventSource.addEventListener("error",(function(e){var i=o._.transportError(o.resources.eventSourceError,n.transport,e);this===n.eventSource&&(l&&l(i)||(n.log("EventSource readyState: "+n.eventSource.readyState+"."),e.eventPhase===t.EventSource.CLOSED?(n.log("EventSource reconnecting due to the server connection ending."),d.reconnect(n)):(n.log("EventSource error."),p.triggerHandler(r.onError,[i]))))}),!1)}else l&&(n.log("This browser doesn't support SSE."),l())},reconnect:function(e){a.reconnect(e,this.name)},lostConnection:function(e){this.reconnect(e)},send:function(e,t){a.ajaxSend(e,t)},stop:function(e){s(e),a.clearReconnectTimeout(e),e&&e.eventSource&&(e.log("EventSource calling close()."),e.eventSource.close(),e.eventSource=null,delete e.eventSource)},abort:function(e,t){a.ajaxAbort(e,t)}}}(window.jQuery,window),function(e,t,n){var o,r,i=e.signalR,a=e.signalR.events,s=e.signalR.changeState,c=i.transports._logic,l=function(){var e=t.document.createElement("iframe");return e.setAttribute("style","position:absolute;top:0;left:0;width:0;height:0;visibility:hidden;"),e},u=(o=null,r=0,{prevent:function(){i._.ieVersion<=8&&(0===r&&(o=t.setInterval((function(){var e=l();t.document.body.appendChild(e),t.document.body.removeChild(e),e=null}),1e3)),r++)},cancel:function(){1===r&&t.clearInterval(o),r>0&&r--}});i.transports.foreverFrame={name:"foreverFrame",supportsKeepAlive:function(){return!0},iframeClearThreshold:50,start:function(e,n,o){var r,i=this,a=c.foreverFrame.count+=1,s=l(),d=function(){e.log("Forever frame iframe finished loading and is no longer receiving messages."),o&&o()||i.reconnect(e)};t.EventSource?o&&(e.log("Forever Frame is not supported by SignalR on browsers with SSE support."),o()):(s.setAttribute("data-signalr-connection-id",e.id),u.prevent(),r=c.getUrl(e,this.name),r+="&frameId="+a,t.document.documentElement.appendChild(s),e.log("Binding to iframe's load event."),s.addEventListener?s.addEventListener("load",d,!1):s.attachEvent&&s.attachEvent("onload",d),s.src=r,c.foreverFrame.connections[a]=e,e.frame=s,e.frameId=a,n&&(e.onSuccess=function(){e.log("Iframe transport started."),n()}))},reconnect:function(e){var n=this;c.isConnectedOrReconnecting(e)&&c.verifyLastActive(e)&&t.setTimeout((function(){if(c.verifyLastActive(e)&&e.frame&&c.ensureReconnectingState(e)){var t=e.frame,o=c.getUrl(e,n.name,!0)+"&frameId="+e.frameId;e.log("Updating iframe src to '"+o+"'."),t.src=o}}),e.reconnectDelay)},lostConnection:function(e){this.reconnect(e)},send:function(e,t){c.ajaxSend(e,t)},receive:function(t,n){var o,r,a;if(t.json!==t._originalJson&&(n=t._originalJson.stringify(n)),a=t._parseResponse(n),c.processMessages(t,a,t.onSuccess),t.state===e.signalR.connectionState.connected&&(t.frameMessageCount=(t.frameMessageCount||0)+1,t.frameMessageCount>i.transports.foreverFrame.iframeClearThreshold&&(t.frameMessageCount=0,(o=t.frame.contentWindow||t.frame.contentDocument)&&o.document&&o.document.body)))for(r=o.document.body;r.firstChild;)r.removeChild(r.firstChild)},stop:function(e){var n=null;if(u.cancel(),e.frame){if(e.frame.stop)e.frame.stop();else try{(n=e.frame.contentWindow||e.frame.contentDocument).document&&n.document.execCommand&&n.document.execCommand("Stop")}catch(t){e.log("Error occurred when stopping foreverFrame transport. Message = "+t.message+".")}e.frame.parentNode===t.document.body&&t.document.body.removeChild(e.frame),delete c.foreverFrame.connections[e.frameId],e.frame=null,e.frameId=null,delete e.frame,delete e.frameId,delete e.onSuccess,delete e.frameMessageCount,e.log("Stopping forever frame.")}},abort:function(e,t){c.ajaxAbort(e,t)},getConnection:function(e){return c.foreverFrame.connections[e]},started:function(t){!0===s(t,i.connectionState.reconnecting,i.connectionState.connected)&&e(t).triggerHandler(a.onReconnect)}}}(window.jQuery,window),function(e,t,n){var o=e.signalR,r=e.signalR.events,i=e.signalR.changeState,a=e.signalR.isDisconnecting,s=o.transports._logic;o.transports.longPolling={name:"longPolling",supportsKeepAlive:function(){return!1},reconnectDelay:3e3,start:function(n,c,l){var u=this,d=function(){d=e.noop,n.log("LongPolling connected."),c?c():n.log("WARNING! The client received an init message after reconnecting.")},g=function(e){return!!l(e)&&(n.log("LongPolling failed to connect."),!0)},p=n._,f=0,v=function(n){t.clearTimeout(p.reconnectTimeoutId),p.reconnectTimeoutId=null,!0===i(n,o.connectionState.reconnecting,o.connectionState.connected)&&(n.log("Raising the reconnect event"),e(n).triggerHandler(r.onReconnect))};n.pollXhr&&(n.log("Polling xhr requests already exists, aborting."),n.stop()),n.messageId=null,p.reconnectTimeoutId=null,p.pollTimeoutId=t.setTimeout((function(){!function i(c,l){var h=!(null===c.messageId),m=!l,S=s.getUrl(c,u.name,h,m,!0),b={};c.messageId&&(b.messageId=c.messageId),c.groupsToken&&(b.groupsToken=c.groupsToken),!0!==a(c)&&(n.log("Opening long polling request to '"+S+"'."),c.pollXhr=s.ajax(n,{xhrFields:{onprogress:function(){s.markLastMessage(n)}},url:S,type:"POST",contentType:o._.defaultContentType,data:b,timeout:n._.pollTimeout,success:function(o){var r,l,u,h=0;n.log("Long poll complete."),f=0;try{r=n._parseResponse(o)}catch(e){return void s.handleParseFailure(c,o,e,g,c.pollXhr)}null!==p.reconnectTimeoutId&&v(c),r&&(l=s.maximizePersistentResponse(r)),s.processMessages(c,r,d),l&&"number"===e.type(l.LongPollDelay)&&(h=l.LongPollDelay),!0!==a(c)&&((u=l&&l.ShouldReconnect)&&!s.ensureReconnectingState(c)||(h>0?p.pollTimeoutId=t.setTimeout((function(){i(c,u)}),h):i(c,u)))},error:function(a,l){var d=o._.transportError(o.resources.longPollFailed,n.transport,a,c.pollXhr);if(t.clearTimeout(p.reconnectTimeoutId),p.reconnectTimeoutId=null,"abort"!==l){if(!g(d)){if(f++,n.state!==o.connectionState.reconnecting&&(n.log("An error occurred using longPolling. Status = "+l+".  Response = "+a.responseText+"."),e(c).triggerHandler(r.onError,[d])),(n.state===o.connectionState.connected||n.state===o.connectionState.reconnecting)&&!s.verifyLastActive(n))return;if(!s.ensureReconnectingState(c))return;p.pollTimeoutId=t.setTimeout((function(){i(c,!0)}),u.reconnectDelay)}}else n.log("Aborted xhr request.")}}),h&&!0===l&&(p.reconnectTimeoutId=t.setTimeout((function(){v(c)}),Math.min(1e3*(Math.pow(2,f)-1),36e5))))}(n)}),250)},lostConnection:function(e){e.pollXhr&&e.pollXhr.abort("lostConnection")},send:function(e,t){s.ajaxSend(e,t)},stop:function(e){t.clearTimeout(e._.pollTimeoutId),t.clearTimeout(e._.reconnectTimeoutId),delete e._.pollTimeoutId,delete e._.reconnectTimeoutId,e.pollXhr&&(e.pollXhr.abort(),e.pollXhr=null,delete e.pollXhr)},abort:function(e,t){s.ajaxAbort(e,t)}}}(window.jQuery,window),function(e,t,n){var o=".hubProxy",r=e.signalR;function i(e){return e+o}function a(e,t,n){var o,r=e.length,i=[];for(o=0;o<r;o+=1)e.hasOwnProperty(o)&&(i[o]=t.call(n,e[o],o,e));return i}function s(t){return e.isFunction(t)?null:"undefined"===e.type(t)?null:t}function c(e){for(var t in e)if(e.hasOwnProperty(t))return!0;return!1}function l(e,t){var n,o=e._.invocationCallbacks;for(var r in c(o)&&e.log("Clearing hub invocation callbacks with error: "+t+"."),e._.invocationCallbackId=0,delete e._.invocationCallbacks,e._.invocationCallbacks={},o)(n=o[r]).method.call(n.scope,{E:t})}function u(e,t){return new u.fn.init(e,t)}function d(t,n){var o={qs:null,logging:!1,useDefaultPath:!0};return e.extend(o,n),t&&!o.useDefaultPath||(t=(t||"")+"/signalr"),new d.fn.init(t,o)}u.fn=u.prototype={init:function(e,t){this.state={},this.connection=e,this.hubName=t,this._={callbackMap:{}}},constructor:u,hasSubscriptions:function(){return c(this._.callbackMap)},on:function(t,n){var o=this,r=o._.callbackMap;return r[t=t.toLowerCase()]||(r[t]={}),r[t][n]=function(e,t){n.apply(o,t)},e(o).bind(i(t),r[t][n]),o},off:function(t,n){var o,r=this._.callbackMap;return(o=r[t=t.toLowerCase()])&&(o[n]?(e(this).unbind(i(t),o[n]),delete o[n],c(o)||delete r[t]):n||(e(this).unbind(i(t)),delete r[t])),this},invoke:function(t){var n=this,o=n.connection,i=e.makeArray(arguments).slice(1),c=a(i,s),l={H:n.hubName,M:t,A:c,I:o._.invocationCallbackId},u=e.Deferred(),d=function(i){var a,s,c=n._maximizeHubResponse(i);e.extend(n.state,c.State),c.Progress?u.notifyWith?u.notifyWith(n,[c.Progress.Data]):o._.progressjQueryVersionLogged||(o.log("A hub method invocation progress update was received but the version of jQuery in use ("+e.prototype.jquery+") does not support progress updates. Upgrade to jQuery 1.7+ to receive progress notifications."),o._.progressjQueryVersionLogged=!0):c.Error?(c.StackTrace&&o.log(c.Error+"\n"+c.StackTrace+"."),a=c.IsHubException?"HubException":"Exception",(s=r._.error(c.Error,a)).data=c.ErrorData,o.log(n.hubName+"."+t+" failed to execute. Error: "+s.message),u.rejectWith(n,[s])):(o.log("Invoked "+n.hubName+"."+t),u.resolveWith(n,[c.Result]))};return o._.invocationCallbacks[o._.invocationCallbackId.toString()]={scope:n,method:d},o._.invocationCallbackId+=1,e.isEmptyObject(n.state)||(l.S=n.state),o.log("Invoking "+n.hubName+"."+t),o.send(l),u.promise()},_maximizeHubResponse:function(e){return{State:e.S,Result:e.R,Progress:e.P?{Id:e.P.I,Data:e.P.D}:null,Id:e.I,IsHubException:e.H,Error:e.E,StackTrace:e.T,ErrorData:e.D}}},u.fn.init.prototype=u.fn,d.fn=d.prototype=e.connection(),d.fn.init=function(t,n){var o={qs:null,logging:!1,useDefaultPath:!0},r=this;e.extend(o,n),e.signalR.fn.init.call(r,t,o.qs,o.logging),r.proxies={},r._.invocationCallbackId=0,r._.invocationCallbacks={},r.received((function(t){var n,o,a,s,c,l;t&&(void 0!==t.P?(a=t.P.I.toString(),(s=r._.invocationCallbacks[a])&&s.method.call(s.scope,t)):void 0!==t.I?(a=t.I.toString(),(s=r._.invocationCallbacks[a])&&(r._.invocationCallbacks[a]=null,delete r._.invocationCallbacks[a],s.method.call(s.scope,t))):(n=this._maximizeClientHubInvocation(t),r.log("Triggering client hub event '"+n.Method+"' on hub '"+n.Hub+"'."),c=n.Hub.toLowerCase(),l=n.Method.toLowerCase(),o=this.proxies[c],e.extend(o.state,n.State),e(o).triggerHandler(i(l),[n.Args])))})),r.error((function(e,t){var n,o;t&&(n=t.I,(o=r._.invocationCallbacks[n])&&(r._.invocationCallbacks[n]=null,delete r._.invocationCallbacks[n],o.method.call(o.scope,{E:e})))})),r.reconnecting((function(){r.transport&&"webSockets"===r.transport.name&&l(r,"Connection started reconnecting before invocation result was received.")})),r.disconnected((function(){l(r,"Connection was disconnected before invocation result was received.")}))},d.fn._maximizeClientHubInvocation=function(e){return{Hub:e.H,Method:e.M,Args:e.A,State:e.S}},d.fn._registerSubscribedHubs=function(){var t=this;t._subscribedToHubs||(t._subscribedToHubs=!0,t.starting((function(){var n=[];e.each(t.proxies,(function(e){this.hasSubscriptions()&&(n.push({name:e}),t.log("Client subscribed to hub '"+e+"'."))})),0===n.length&&t.log("No hubs have been subscribed to.  The client will not receive data from hubs.  To fix, declare at least one client side function prior to connection start for each hub you wish to subscribe to."),t.data=t.json.stringify(n)})))},d.fn.createHubProxy=function(e){e=e.toLowerCase();var t=this.proxies[e];return t||(t=u(this,e),this.proxies[e]=t),this._registerSubscribedHubs(),t},d.fn.init.prototype=d.fn,e.hubConnection=d}(window.jQuery,window),window.jQuery.signalR.version="2.2.1"}}]);
//# sourceMappingURL=owa.2074.js.map
self.scriptsLoaded['owa.2074.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.2074.js'] = (new Date()).getTime();