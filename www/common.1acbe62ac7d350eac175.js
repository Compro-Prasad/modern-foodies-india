(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0N6O":function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return o}),r.d(e,"c",function(){return i}),r.d(e,"d",function(){return u});var n=r("mrSG"),i=function(t,e){return null!==e.closest(t)},a=function(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},o=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},s=/^[a-z][a-z0-9+\-.]*:/,u=function(t,e,r){return n.__awaiter(void 0,void 0,void 0,function(){var i;return n.__generator(this,function(n){switch(n.label){case 0:return null==t||"#"===t[0]||s.test(t)?[3,2]:(i=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2];case 1:return n.sent(),[2,i.push(t,r)];case 2:return[2,!1]}})})}},"0VGe":function(t,e,r){"use strict";r.d(e,"a",function(){return w}),r.d(e,"b",function(){return v}),r.d(e,"c",function(){return _}),r.d(e,"d",function(){return o});var n=r("mrSG"),i=r("XC0x"),a=r("mPux"),o=function(t){return new Promise(function(e,r){Object(i.n)(function(){s(t),u(t).then(function(r){r.animation&&r.animation.destroy(),c(t),e(r)},function(e){c(t),r(e)})})})},s=function(t){var e=t.enteringEl,r=t.leavingEl;S(e,r,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),_(e,!1),r&&_(r,!1)},u=function(t){return n.__awaiter(void 0,void 0,void 0,function(){var e;return n.__generator(this,function(r){switch(r.label){case 0:return[4,l(t)];case 1:return[2,(e=r.sent())?d(e,t):p(t)]}})})},c=function(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=function(t){return n.__awaiter(void 0,void 0,void 0,function(){var e;return n.__generator(this,function(n){switch(n.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,r.e(118).then(r.bind(null,"Vx2R"))]:[2,void 0];case 1:return e=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,r.e(119).then(r.bind(null,"wJHV"))];case 3:e=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,e]}})})},d=function(t,e){return n.__awaiter(void 0,void 0,void 0,function(){var i;return n.__generator(this,function(n){switch(n.label){case 0:return[4,f(e,!0)];case 1:return n.sent(),[4,r.e(5).then(r.bind(null,"jY4/")).then(function(r){return r.create(t,e.baseEl,e)})];case 2:return i=n.sent(),h(e.enteringEl,e.leavingEl),[4,b(i,e)];case 3:return n.sent(),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&g(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})},p=function(t){return n.__awaiter(void 0,void 0,void 0,function(){var e,r;return n.__generator(this,function(n){switch(n.label){case 0:return e=t.enteringEl,r=t.leavingEl,[4,f(t,!1)];case 1:return n.sent(),h(e,r),g(e,r),[2,{hasCompleted:!0}]}})})},f=function(t,e){return n.__awaiter(void 0,void 0,void 0,function(){var r;return n.__generator(this,function(n){switch(n.label){case 0:return r=(void 0!==t.deepWait?t.deepWait:e)?[w(t.enteringEl),w(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)],[4,Promise.all(r)];case 1:return n.sent(),[4,m(t.viewIsReady,t.enteringEl)];case 2:return n.sent(),[2]}})})},m=function(t,e){return n.__awaiter(void 0,void 0,void 0,function(){return n.__generator(this,function(r){switch(r.label){case 0:return t?[4,t(e)]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2]}})})},b=function(t,e){var r=e.progressCallback,n=new Promise(function(e){return t.onFinish(e)});return r?(t.progressStart(),r(t)):t.play(),n},h=function(t,e){v(e,a.c),v(t,a.a)},g=function(t,e){v(t,a.b),v(e,a.d)},v=function(t,e){if(t){var r=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(r)}},y=function(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()},w=function(t){return n.__awaiter(void 0,void 0,void 0,function(){var e;return n.__generator(this,function(r){switch(r.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=r.sent())return[2];r.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(w))];case 3:r.sent(),r.label=4;case 4:return[2]}})})},_=function(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},S=function(t,e,r){void 0!==t&&(t.style.zIndex="back"===r?"99":"101"),void 0!==e&&(e.style.zIndex="100")}},"4fNL":function(t,e,r){"use strict";r.d(e,"a",function(){return u});var n=r("t/Na"),i=r("XlPw"),a=r("9Z1F"),o=r("5tAl"),s=r("CcnG"),u=function(){function t(t){this.http=t,this.baseurl="http://108.179.222.240:8080",this.httpOptions={headers:new n.g({"Content-Type":"application/json"})}}return t.prototype.CreateOtp=function(t){return this.http.post(this.baseurl+"/createOtp",JSON.stringify(t),this.httpOptions).pipe(Object(a.a)(this.errorHandl))},t.prototype.GetOtpById=function(t){return this.http.get(this.baseurl+"/getOtpByUserId?UserId="+t).pipe(Object(o.a)(1),Object(a.a)(this.errorHandl))},t.prototype.GetOtpAccess=function(t){return this.http.get(this.baseurl+"/getOtpByAccessToken?accessToken="+t).pipe(Object(o.a)(1),Object(a.a)(this.errorHandl))},t.prototype.GetIssues=function(){return this.http.get(this.baseurl+"/bugtracking/").pipe(Object(o.a)(1),Object(a.a)(this.errorHandl))},t.prototype.UpdateBug=function(t,e){return this.http.put(this.baseurl+"/bugtracking/"+t,JSON.stringify(e),this.httpOptions).pipe(Object(o.a)(1),Object(a.a)(this.errorHandl))},t.prototype.DeleteOtp=function(t){return this.http.delete(this.baseurl+"/deleteOtpByUserId?userid="+t,this.httpOptions).pipe(Object(o.a)(1),Object(a.a)(this.errorHandl))},t.prototype.errorHandl=function(t){var e;return e=t.error instanceof ErrorEvent?t.error.message:"Error Code: "+t.status+"\nMessage: "+t.message,console.log(e),Object(i.a)(e)},t.ngInjectableDef=s.defineInjectable({factory:function(){return new t(s.inject(n.c))},token:t,providedIn:"root"}),t}()},MBfO:function(t,e,r){"use strict";r.d(e,"a",function(){return a}),r.d(e,"b",function(){return o});var n=r("CcnG"),i=(r("Z+uX"),r("Ip0R")),a=(r("Fzqc"),r("Wf4p"),r("ZYjt"),r("wFw1"),n["\u0275crt"]({encapsulation:2,styles:[".mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}._mat-animation-noopable.mat-progress-bar{transition:none;animation:none}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-background{display:none}}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}@media (-ms-high-contrast:active){.mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:'';display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after{animation:none;transition:none}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}"],data:{}}));function o(t){return n["\u0275vid"](2,[n["\u0275qud"](402653184,1,{_primaryValueBar:0}),(t()(),n["\u0275eld"](1,0,null,null,4,":svg:svg",[["class","mat-progress-bar-background mat-progress-bar-element"],["focusable","false"],["height","4"],["width","100%"]],null,null,null,null,null)),(t()(),n["\u0275eld"](2,0,null,null,2,":svg:defs",[],null,null,null,null,null)),(t()(),n["\u0275eld"](3,0,null,null,1,":svg:pattern",[["height","4"],["patternUnits","userSpaceOnUse"],["width","8"],["x","4"],["y","0"]],[[8,"id",0]],null,null,null,null)),(t()(),n["\u0275eld"](4,0,null,null,0,":svg:circle",[["cx","2"],["cy","2"],["r","2"]],null,null,null,null,null)),(t()(),n["\u0275eld"](5,0,null,null,0,":svg:rect",[["height","100%"],["width","100%"]],[[1,"fill",0]],null,null,null,null)),(t()(),n["\u0275eld"](6,0,null,null,1,"div",[["class","mat-progress-bar-buffer mat-progress-bar-element"]],null,null,null,null,null)),n["\u0275did"](7,278528,null,0,i.NgStyle,[n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),(t()(),n["\u0275eld"](8,0,[[1,0],["primaryValueBar",1]],null,1,"div",[["class","mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null)),n["\u0275did"](9,278528,null,0,i.NgStyle,[n.KeyValueDiffers,n.ElementRef,n.Renderer2],{ngStyle:[0,"ngStyle"]},null),(t()(),n["\u0275eld"](10,0,null,null,0,"div",[["class","mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"]],null,null,null,null,null))],function(t,e){var r=e.component;t(e,7,0,r._bufferTransform()),t(e,9,0,r._primaryTransform())},function(t,e){var r=e.component;t(e,3,0,r.progressbarId),t(e,5,0,r._rectangleFillValue)})}},"P+Ej":function(t,e,r){"use strict";r.d(e,"a",function(){return n}),r.d(e,"b",function(){return u}),r.d(e,"c",function(){return s}),r.d(e,"d",function(){return p}),r.d(e,"e",function(){return f}),r.d(e,"f",function(){return a}),r.d(e,"g",function(){return i}),r.d(e,"h",function(){return d}),r.d(e,"i",function(){return c}),r.d(e,"j",function(){return l}),r.d(e,"k",function(){return o});var n=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},i=function(t){return!!t.shadowRoot&&!!t.attachShadow},a=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},o=function(t,e,r,n,a){if(t||i(e)){var o=e.querySelector("input.aux-input");o||((o=e.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),e.appendChild(o)),o.disabled=a,o.name=r,o.value=n||""}},s=function(t,e,r){return Math.max(t,Math.min(e,r))},u=function(t,e){if(!t){var r="ASSERT: "+e;throw console.error(r),new Error(r)}},c=function(t){return t.timeStamp||Date.now()},l=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var r=e[0];return{x:r.clientX,y:r.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},d=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},p=function(t,e){var r=t._original||t;return{_original:t,emit:f(r.emit.bind(r),e)}},f=function(t,e){var r;return void 0===e&&(e=0),function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];clearTimeout(r),r=setTimeout.apply(void 0,[t,e].concat(n))}}},RkhX:function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return a}),r.d(e,"c",function(){return o}),r.d(e,"d",function(){return n});var n=function(){var t=window.TapticEngine;t&&t.selection()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},a=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},S4J9:function(t,e,r){"use strict";r.d(e,"a",function(){return i}),r.d(e,"b",function(){return a});var n=r("mrSG"),i=function(t,e,r,i,a){return n.__awaiter(void 0,void 0,void 0,function(){var o;return n.__generator(this,function(n){switch(n.label){case 0:if(t)return[2,t.attachViewToDom(e,r,a,i)];if("string"!=typeof r&&!(r instanceof HTMLElement))throw new Error("framework delegate is missing");return o="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach(function(t){return o.classList.add(t)}),a&&Object.assign(o,a),e.appendChild(o),o.componentOnReady?[4,o.componentOnReady()]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2,o]}})})},a=function(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},T2HV:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),r=document.createElement("div");e.appendChild(r),r.innerHTML=t,s.forEach(function(t){for(var r=e.querySelectorAll(t),n=r.length-1;n>=0;n--){var o=r[n];o.parentNode?o.parentNode.removeChild(o):e.removeChild(o);for(var s=a(o),u=0;u<s.length;u++)i(s[u])}});for(var n=a(e),o=0;o<n.length;o++)i(n[o]);var u=document.createElement("div");u.appendChild(e);var c=u.querySelector("div");return null!==c?c.innerHTML:u.innerHTML}catch(l){return console.error(l),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var r=t.attributes[e],n=r.name;if(o.includes(n.toLowerCase())){var s=r.value;null!=s&&s.toLowerCase().includes("javascript:")&&t.removeAttribute(n)}else t.removeAttribute(n)}var u=a(t);for(e=0;e<u.length;e++)i(u[e])}},a=function(t){return null!=t.children?t.children:t.childNodes},o=["class","id","href","src","name","slot"],s=["script","style","iframe","meta","link","object","embed"]},"Z+uX":function(t,e,r){"use strict";r.d(e,"c",function(){return h}),r.d(e,"a",function(){return p}),r.d(e,"b",function(){return m});var n=r("mrSG"),i=r("CcnG"),a=r("pugT"),o=r("bne5"),s=r("VnD/"),u=r("Wf4p"),c=r("Ip0R"),l=function(){return function(t){this._elementRef=t}}(),d=Object(u.C)(l,"primary"),p=new i.InjectionToken("mat-progress-bar-location",{providedIn:"root",factory:function(){var t=Object(i.inject)(c.DOCUMENT),e=t?t.location:null;return{getPathname:function(){return e?e.pathname+e.search:""}}}}),f=0,m=function(t){function e(e,r,n,o){var s=t.call(this,e)||this;s._elementRef=e,s._ngZone=r,s._animationMode=n,s._isNoopAnimation=!1,s._value=0,s._bufferValue=0,s.animationEnd=new i.EventEmitter,s._animationEndSubscription=a.a.EMPTY,s.mode="determinate",s.progressbarId="mat-progress-bar-"+f++;var u=o?o.getPathname().split("#")[0]:"";return s._rectangleFillValue="url('"+u+"#"+s.progressbarId+"')",s._isNoopAnimation="NoopAnimations"===n,s}return Object(n.__extends)(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(t){this._value=b(t||0),this._isNoopAnimation&&this.emitAnimationEnd()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferValue",{get:function(){return this._bufferValue},set:function(t){this._bufferValue=b(t||0)},enumerable:!0,configurable:!0}),e.prototype._primaryTransform=function(){return{transform:"scaleX("+this.value/100+")"}},e.prototype._bufferTransform=function(){if("buffer"===this.mode)return{transform:"scaleX("+this.bufferValue/100+")"}},e.prototype.ngAfterViewInit=function(){var t=this;this._isNoopAnimation||this._ngZone.runOutsideAngular(function(){t._animationEndSubscription=Object(o.a)(t._primaryValueBar.nativeElement,"transitionend").pipe(Object(s.a)(function(e){return e.target===t._primaryValueBar.nativeElement})).subscribe(function(e){return t._ngZone.run(function(){return t.emitAnimationEnd()})})})},e.prototype.ngOnDestroy=function(){this._animationEndSubscription.unsubscribe()},e.prototype.emitAnimationEnd=function(){"determinate"!==this.mode&&"buffer"!==this.mode||this.animationEnd.next({value:this.value})},e}(d);function b(t,e,r){return void 0===e&&(e=0),void 0===r&&(r=100),Math.max(e,Math.min(r,t))}var h=function(){return function(){}}()},ZCL3:function(t,e,r){"use strict";r.r(e),r.d(e,"GESTURE_CONTROLLER",function(){return c}),r.d(e,"createGesture",function(){return f});var n,i=r("XC0x"),a=(r("9yTv"),function(){function t(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new s(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var n=this.requestedStart,i=-1e4;if(n.forEach(function(t){i=Math.max(i,t)}),i===r){this.capturedId=e,n.clear();var a=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(a),!0}return n.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(u)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(u)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}()),o=function(){function t(t,e,r,n,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*n+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),s=function(){function t(t,e,r,n){this.id=e,this.disable=r,this.disableScroll=n,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),u="backdrop-no-scroll",c=new a,l=function(t,e,r,n){var i,a,o=d(t)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;return t.__zone_symbol__addEventListener?(i="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(i="addEventListener",a="removeEventListener"),t[i](e,r,o),function(){t[a](e,r,o)}},d=function(t){if(void 0===n)try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});t.addEventListener("optsTest",function(){},e)}catch(r){n=!1}return!!n},p=function(t){return t instanceof Document?t:t.ownerDocument},f=function(t){var e=!1,r=!1,n=!0,a=!1,o=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),s=o.canStart,u=o.onWillStart,d=o.onStart,f=o.onEnd,g=o.notCaptured,v=o.onMove,y=o.threshold,w={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},_=function(t,e,r){var n=o.maxAngle*(Math.PI/180),i="x"===o.direction,a=Math.cos(n),s=e*e,u=0,c=0,l=!1,d=0;return{start:function(t,e){u=t,c=e,d=0,l=!0},detect:function(t,e){if(!l)return!1;var r=t-u,n=e-c,o=r*r+n*n;if(o<s)return!1;var p=Math.sqrt(o),f=(i?r:n)/p;return d=f>a?1:f<-a?-1:0,l=!1,!0},isGesture:function(){return 0!==d},getDirection:function(){return d}}}(0,o.threshold),S=c.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),O=function(){e&&(a=!1,v&&v(w))},E=function(){return!(S&&!S.capture()||(e=!0,n=!1,w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp,u?u(w).then(k):k(),0))},k=function(){d&&d(w),n=!0},j=function(){e=!1,r=!1,a=!1,n=!0,S.release()},T=function(t){var r=e,i=n;j(),i&&(m(w,t),r?f&&f(w):g&&g(w))},I=function(t,e,r,n,i){var a,o,s,u,c,d,f,m=0,b=function(n){m=Date.now()+2e3,e(n)&&(!o&&r&&(o=l(t,"touchmove",r,i)),s||(s=l(t,"touchend",g,i)),u||(u=l(t,"touchcancel",g,i)))},h=function(n){m>Date.now()||e(n)&&(!d&&r&&(d=l(p(t),"mousemove",r,i)),f||(f=l(p(t),"mouseup",v,i)))},g=function(t){y(),n&&n(t)},v=function(t){w(),n&&n(t)},y=function(){o&&o(),s&&s(),u&&u(),o=s=u=void 0},w=function(){d&&d(),f&&f(),d=f=void 0},_=function(){y(),w()},S=function(e){e?(a&&a(),c&&c(),a=c=void 0,_()):(a||(a=l(t,"touchstart",b,i)),c||(c=l(t,"mousedown",h,i)))};return{setDisabled:S,stop:_,destroy:function(){S(!0),n=r=e=void 0}}}(o.el,function(t){var e=h(t);return!(r||!n)&&(b(t,w),w.startX=w.currentX,w.startY=w.currentY,w.startTimeStamp=w.timeStamp=e,w.velocityX=w.velocityY=w.deltaX=w.deltaY=0,w.event=t,(!s||!1!==s(w))&&(S.release(),!!S.start()&&(r=!0,0===y?E():(_.start(w.startX,w.startY),!0))))},function(t){e?!a&&n&&(a=!0,m(w,t),Object(i.n)(O)):(m(w,t),_.detect(w.currentX,w.currentY)&&(_.isGesture()&&E()||X()))},T,{capture:!1}),X=function(){j(),I.stop(),g&&g(w)};return{setDisabled:function(t){t&&e&&T(void 0),I.setDisabled(t)},destroy:function(){S.destroy(),I.destroy()}}},m=function(t,e){if(e){var r=t.currentX,n=t.currentY,i=t.timeStamp;b(e,t);var a=t.currentX,o=t.currentY,s=(t.timeStamp=h(e))-i;if(s>0&&s<100){var u=(o-n)/s;t.velocityX=(a-r)/s*.7+.3*t.velocityX,t.velocityY=.7*u+.3*t.velocityY}t.deltaX=a-t.startX,t.deltaY=o-t.startY,t.event=e}},b=function(t,e){var r=0,n=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var a=i[0];r=a.clientX,n=a.clientY}else void 0!==t.pageX&&(r=t.pageX,n=t.pageY)}e.currentX=r,e.currentY=n},h=function(t){return t.timeStamp||Date.now()}},oGtE:function(t,e,r){"use strict";r.d(e,"a",function(){return u});var n=r("t/Na"),i=r("XlPw"),a=r("9Z1F"),o=r("5tAl"),s=r("CcnG"),u=function(){function t(t){this.http=t,this.baseurl="http://108.179.222.240:8080",this.httpOptions={headers:new n.g({"Content-Type":"application/json"})}}return t.prototype.CreateTrans=function(t){return this.http.post(this.baseurl+"/createTransaction",JSON.stringify(t),this.httpOptions).pipe(Object(a.a)(this.errorHandl))},t.prototype.GetTrans=function(t,e,r){return this.http.get(this.baseurl+"/getTrans?userId="+t+"&cookId="+e+"&dishId="+r,{responseType:"text"}).pipe(Object(a.a)(this.errorHandl))},t.prototype.GetTransId=function(t){return this.http.get(this.baseurl+"/getTransByPhone?phoneNo="+t).pipe(Object(a.a)(this.errorHandl))},t.prototype.GetTransById=function(t){return this.http.get(this.baseurl+"/getTransById?id="+t).pipe(Object(a.a)(this.errorHandl))},t.prototype.GetIssues=function(){return this.http.get(this.baseurl+"//").pipe(Object(o.a)(1),Object(a.a)(this.errorHandl))},t.prototype.UpdateBug=function(t,e){return this.http.put(this.baseurl+"/bugtracking/"+t,JSON.stringify(e),this.httpOptions).pipe(Object(o.a)(1),Object(a.a)(this.errorHandl))},t.prototype.UpdateTransById=function(t,e){return this.http.put(this.baseurl+"/updateTransChefinfoById?id="+t,JSON.stringify(e),this.httpOptions).pipe(Object(o.a)(1),Object(a.a)(this.errorHandl))},t.prototype.UpdateTransVerfById=function(t,e){return this.http.put(this.baseurl+"/updateTransVerfById?id="+t,JSON.stringify(e),this.httpOptions).pipe(Object(a.a)(this.errorHandl))},t.prototype.DeleteTrans=function(t,e,r){return this.http.delete(this.baseurl+"/deleteTransById?userId="+t+"&cookId="+e+"&dishId="+r,this.httpOptions).pipe(Object(o.a)(1),Object(a.a)(this.errorHandl))},t.prototype.errorHandl=function(t){var e;return e=t.error instanceof ErrorEvent?t.error.message:"Error Code: "+t.status+"\nMessage: "+t.message,console.log(e),Object(i.a)(e)},t.ngInjectableDef=s.defineInjectable({factory:function(){return new t(s.inject(n.c))},token:t,providedIn:"root"}),t}()}}]);