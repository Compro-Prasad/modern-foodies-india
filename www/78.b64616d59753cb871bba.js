(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{sasV:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_menu",function(){return c}),n.d(e,"ion_menu_button",function(){return v}),n.d(e,"ion_menu_controller",function(){return O}),n.d(e,"ion_menu_toggle",function(){return k});var i=n("mrSG"),r=n("XC0x"),o=n("9yTv"),s=n("0N6O"),a=n("ZCL3"),u=n("P+Ej"),c=function(){function t(t){Object(r.m)(this,t),this.lastOnEnd=0,this.blocker=a.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(r.d)(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(r.e)(this,"ionWillOpen",7),this.ionWillClose=Object(r.e)(this,"ionWillClose",7),this.ionDidOpen=Object(r.e)(this,"ionDidOpen",7),this.ionDidClose=Object(r.e)(this,"ionDidClose",7),this.ionMenuChange=Object(r.e)(this,"ionMenuChange",7),this.lazyMenuCtrl=Object(r.l)(this,"ion-menu-controller")}return t.prototype.typeChanged=function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=Object(u.h)(this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.componentWillLoad=function(){return i.__awaiter(this,void 0,void 0,function(){var t,e,r,s,a,u=this;return i.__generator(this,function(i){switch(i.label){case 0:return void 0===this.type&&(this.type=o.b.get("menuType","ios"===this.mode?"reveal":"overlay")),e=this,[4,this.lazyMenuCtrl.componentOnReady().then(function(t){return t._getInstance()})];case 1:return t=e.menuCtrl=i.sent(),r=this.el.parentNode,(s=void 0!==this.contentId?document.getElementById(this.contentId):r&&r.querySelector&&r.querySelector("[main]"))&&s.tagName?(this.contentEl=s,s.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),t._register(this),a=this,[4,Promise.resolve().then(n.bind(null,"ZCL3"))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 2:return a.gesture=i.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return u.canStart(t)},onWillStart:function(){return u.onWillStart()},onStart:function(){return u.onStart()},onMove:function(t){return u.onMove(t)},onEnd:function(t){return u.onEnd(t)}}),this.updateState(),[2]}})})},t.prototype.componentDidLoad=function(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.componentDidUnload=function(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),this.menuCtrl._setOpen(this,t,e)},t.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,!1]:(this.beforeAnimation(t),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(t,e)];case 2:return n.sent(),this.afterAnimation(t),[2,!0]}})})},t.prototype.loadAnimation=function(){return i.__awaiter(this,void 0,void 0,function(){var t,e;return i.__generator(this,function(n){switch(n.label){case 0:return(t=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,this.menuCtrl._createAnimation(this.type,this)]);case 1:return e.animation=n.sent(),[2]}})})},t.prototype.startAnimation=function(t,e){return i.__awaiter(this,void 0,void 0,function(){var n;return i.__generator(this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!t),e?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&d(window,t.currentX,this.isEndSide,this.maxEdgeStart))},t.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():Object(u.b)(!1,"isAnimating has to be true")},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var e=h(t.deltaX,this._isOpen,this.isEndSide);this.animation.progressStep(e/this.width)}else Object(u.b)(!1,"isAnimating has to be true")},t.prototype.onEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,r=h(t.deltaX,n,i),o=this.width,s=r/o,a=t.velocityX,c=o/2,d=a>=0&&(a>.2||t.deltaX>c),l=a<=0&&(a<-.2||t.deltaX<-c),p=n?i?d:l:i?l:d,m=!n&&p;n&&!p&&(m=!0);var f=(p?1-s:s)*o,b=0;if(f>5){var g=f/Math.abs(a);b=Math.min(g,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(function(){return e.afterAnimation(m)},{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(p,s,b)}else Object(u.b)(!1,"isAnimating has to be true")},t.prototype.beforeAnimation=function(t){Object(u.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(l),this.backdropEl&&this.backdropEl.classList.add(p),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()},t.prototype.afterAnimation=function(t){Object(u.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(m),this.ionDidOpen.emit()):(this.el.classList.remove(l),this.contentEl&&this.contentEl.classList.remove(m),this.backdropEl&&this.backdropEl.classList.remove(p),this.ionDidClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),Object(u.b)(!this.isAnimating,"can not be animating")},t.prototype.forceClosing=function(){Object(u.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.reverse(!0).playSync(),this.afterAnimation(!1)},t.prototype.hostData=function(){var t,e=this.isEndSide,n=this.type,i=this.disabled,r=this.isPaneVisible;return{role:"navigation",class:(t={},t[""+this.mode]=!0,t["menu-type-"+n]=!0,t["menu-enabled"]=!i,t["menu-side-end"]=e,t["menu-side-start"]=!e,t["menu-pane-visible"]=r,t)}},t.prototype.__stencil_render=function(){var t=this;return[Object(r.i)("div",{class:"menu-inner",ref:function(e){return t.menuInnerEl=e}},Object(r.i)("slot",null)),Object(r.i)("ion-backdrop",{ref:function(e){return t.backdropEl=e},class:"menu-backdrop",tappable:!1,stopPropagation:!1})]},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(r.i)(r.a,this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}"},enumerable:!0,configurable:!0}),t}(),h=function(t,e,n){return Math.max(0,e!==n?-t:t)},d=function(t,e,n,i){return n?e>=t.innerWidth-i:e<=i},l="show-menu",p="show-backdrop",m="menu-content-open",f=function(t){var e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)},b=function(t){return i.__awaiter(void 0,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return[4,f(document)];case 1:return(e=n.sent())?[4,e.get(t)]:[3,3];case 2:n.sent()&&e.toggle(t),n.label=3;case 3:return[2]}})})},g=function(t){return i.__awaiter(void 0,void 0,void 0,function(){var e,n,r;return i.__generator(this,function(i){switch(i.label){case 0:return[4,f(document)];case 1:return(e=i.sent())?[4,e.get(t)]:[3,5];case 2:return n=i.sent(),(r=n)?[4,n.isActive()]:[3,4];case 3:r=i.sent(),i.label=4;case 4:if(r)return[2,!0];i.label=5;case 5:return[2,!1]}})})},v=function(){function t(t){var e=this;Object(r.m)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.setVisibility=function(){return i.__awaiter(e,void 0,void 0,function(){var t;return i.__generator(this,function(e){switch(e.label){case 0:return t=this,[4,g(this.menu)];case 1:return t.visible=e.sent(),[2]}})})},this.onClick=function(){return i.__awaiter(e,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,b(this.menu)];case 1:return t.sent(),[2]}})})}}return t.prototype.componentDidLoad=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.setVisibility()];case 1:return t.sent(),[2]}})})},t.prototype.visibilityChanged=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.setVisibility()];case 1:return t.sent(),[2]}})})},t.prototype.render=function(){var t,e=this.color,n=this.disabled,i=Object(r.d)(this),a=o.b.get("menuIcon","menu"),u=this.autoHide&&!this.visible,c={type:this.type};return Object(r.i)(r.a,{onClick:this.onClick,"aria-disabled":n?"true":null,"aria-hidden":u?"true":null,class:Object.assign((t={},t[i]=!0,t),Object(s.a)(e),{button:!0,"menu-button-hidden":u,"menu-button-disabled":n,"ion-activatable":!0,"ion-focusable":!0})},Object(r.i)("button",Object.assign({},c,{disabled:this.disabled,class:"button-native"}),Object(r.i)("slot",null,Object(r.i)("ion-icon",{icon:a,mode:i,lazy:!1})),"md"===i&&Object(r.i)("ion-ripple-effect",{type:"unbounded"})))},Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.activated){opacity:.4}@media (any-hover:hover){:host(:hover){opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"},enumerable:!0,configurable:!0}),t}(),y=function(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))},_=function(t,e,n){var i,r,o=n.width+8;n.isEndSide?(i=o+"px",r="0px"):(i=-o+"px",r="0px");var s=(new t).addElement(n.menuInnerEl).fromTo("translateX",i,r),a=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return y(t).then(function(t){return t.add(s).add(a)})},w=function(t,e,n){var i,r,o=n.width;n.isEndSide?(i=-o+"px",r=o+"px"):(i=o+"px",r=-o+"px");var s=(new t).addElement(n.menuInnerEl).fromTo("translateX",r,"0px"),a=(new t).addElement(n.contentEl).fromTo("translateX","0px",i),u=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.32);return y(t).then(function(t){return t.add(s).add(u).add(a)})},x=function(t,e,n){var i=n.width*(n.isEndSide?-1:1)+"px",r=(new t).addElement(n.contentEl).fromTo("translateX","0px",i);return y(t).then(function(t){return t.add(r)})},O=function(){function t(t){Object(r.m)(this,t),this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",x),this.registerAnimation("push",w),this.registerAnimation("overlay",_)}return t.prototype.open=function(t){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,e.open()]:[2,!1]}})})},t.prototype.close=function(t){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return[4,void 0!==t?this.get(t):this.getOpen()];case 1:return void 0!==(e=n.sent())?[2,e.close()]:[2,!1]}})})},t.prototype.toggle=function(t){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,e.toggle()]:[2,!1]}})})},t.prototype.enable=function(t,e){return i.__awaiter(this,void 0,void 0,function(){var n;return i.__generator(this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:return(n=i.sent())&&(n.disabled=!t),[2,n]}})})},t.prototype.swipeGesture=function(t,e){return i.__awaiter(this,void 0,void 0,function(){var n;return i.__generator(this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:return(n=i.sent())&&(n.swipeGesture=t),[2,n]}})})},t.prototype.isOpen=function(t){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return null==t?[3,2]:[4,this.get(t)];case 1:return[2,void 0!==(e=n.sent())&&e.isOpen()];case 2:return[4,this.getOpen()];case 3:return[2,void 0!==(e=n.sent())]}})})},t.prototype.isEnabled=function(t){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return(e=n.sent())?[2,!e.disabled]:[2,!1]}})})},t.prototype.get=function(t){return i.__awaiter(this,void 0,void 0,function(){var e,n;return i.__generator(this,function(i){switch(i.label){case 0:return[4,this.waitUntilReady()];case 1:return i.sent(),"start"===t||"end"===t?(e=this.find(function(e){return e.side===t&&!e.disabled}))?[2,e]:[2,this.find(function(e){return e.side===t})]:null!=t?[2,this.find(function(e){return e.menuId===t})]:(n=this.find(function(t){return!t.disabled}))?[2,n]:[2,this.menus.length>0?this.menus[0].el:void 0]}})})},t.prototype.getOpen=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.getOpenSync()]}})})},t.prototype.getMenus=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.getMenusSync()]}})})},t.prototype.isAnimating=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.waitUntilReady()];case 1:return t.sent(),[2,this.isAnimatingSync()]}})})},t.prototype.registerAnimation=function(t,e){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(n){return this.menuAnimations.set(t,e),[2]})})},t.prototype._getInstance=function(){return Promise.resolve(this)},t.prototype._register=function(t){var e=this.menus;e.indexOf(t)<0&&(t.disabled||this._setActiveMenu(t),e.push(t))},t.prototype._unregister=function(t){var e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)},t.prototype._setActiveMenu=function(t){var e=t.side;this.menus.filter(function(n){return n.side===e&&n!==t}).forEach(function(t){return t.disabled=!0})},t.prototype._setOpen=function(t,e,n){return i.__awaiter(this,void 0,void 0,function(){var r;return i.__generator(this,function(i){switch(i.label){case 0:return this.isAnimatingSync()?[2,!1]:e?[4,this.getOpen()]:[3,3];case 1:return(r=i.sent())&&t.el!==r?[4,r.setOpen(!1,!1)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,t._setOpen(e,n)]}})})},t.prototype._createAnimation=function(t,e){return i.__awaiter(this,void 0,void 0,function(){var r,s;return i.__generator(this,function(i){switch(i.label){case 0:if(!(r=this.menuAnimations.get(t)))throw new Error("animation not registered");return[4,n.e(6).then(n.bind(null,"jY4/")).then(function(t){return t.create(r,null,e)})];case 1:return s=i.sent(),o.b.getBoolean("animated",!0)||s.duration(0),[2,s]}})})},t.prototype.getOpenSync=function(){return this.find(function(t){return t._isOpen})},t.prototype.getMenusSync=function(){return this.menus.map(function(t){return t.el})},t.prototype.isAnimatingSync=function(){return this.menus.some(function(t){return t.isAnimating})},t.prototype.find=function(t){var e=this.menus.find(t);if(void 0!==e)return e.el},t.prototype.waitUntilReady=function(){return Promise.all(Array.from(document.querySelectorAll("ion-menu")).map(function(t){return t.componentOnReady()}))},Object.defineProperty(t,"style",{get:function(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}(),k=function(){function t(t){var e=this;Object(r.m)(this,t),this.visible=!1,this.autoHide=!0,this.setVisibility=function(){return i.__awaiter(e,void 0,void 0,function(){var t;return i.__generator(this,function(e){switch(e.label){case 0:return t=this,[4,g(this.menu)];case 1:return t.visible=e.sent(),[2]}})})},this.onClick=function(){return i.__awaiter(e,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,b(this.menu)];case 1:return t.sent(),[2]}})})}}return t.prototype.componentDidLoad=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.setVisibility()];case 1:return t.sent(),[2]}})})},t.prototype.visibilityChanged=function(){return i.__awaiter(this,void 0,void 0,function(){return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.setVisibility()];case 1:return t.sent(),[2]}})})},t.prototype.render=function(){var t,e=Object(r.d)(this),n=this.autoHide&&!this.visible;return Object(r.i)(r.a,{onClick:this.onClick,"aria-hidden":n?"true":null,class:(t={},t[e]=!0,t["menu-toggle-hidden"]=n,t)},Object(r.i)("slot",null))},Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:!0,configurable:!0}),t}()}}]);