(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"2OJS":function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",function(){return o});var i=n("P+Ej"),o=function(t){var e,n,o,l,v=10*-f,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,w=function(t){v=Object(i.i)(t),b(t)},E=function(){clearTimeout(l),l=void 0,n&&(O(!1),n=void 0)},h=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,j(a(t),t))},b=function(t){j(void 0,t)},j=function(t,e){if(!t||t!==n){clearTimeout(l),l=void 0;var o=Object(i.j)(e),a=o.x,c=o.y;if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(s)||g(n,a,c),O(!0)}if(t){var u=m.get(t);u&&(clearTimeout(u),m.delete(t));var f=r(t)?0:d;t.classList.remove(s),l=setTimeout(function(){g(t,a,c),l=void 0},f)}n=t}},g=function(t,e,n){p=Date.now(),t.classList.add(s);var i=L&&c(t);i&&i.addRipple&&(o=i.addRipple(e,n))},O=function(t){void 0!==o&&o.then(function(t){return t()});var e=n;if(e){var i=u-Date.now()+p;if(t&&i>0&&!r(e)){var a=setTimeout(function(){e.classList.remove(s),m.delete(e)},u);m.set(e,a)}else e.classList.remove(s)}},S=document;S.addEventListener("ionScrollStart",function(t){e=t.target,E()}),S.addEventListener("ionScrollEnd",function(){e=void 0}),S.addEventListener("ionGestureCaptured",E),S.addEventListener("touchstart",function(t){v=Object(i.i)(t),h(t)},!0),S.addEventListener("touchcancel",w,!0),S.addEventListener("touchend",w,!0),S.addEventListener("mousedown",function(t){var e=Object(i.i)(t)-f;v<e&&h(t)},!0),S.addEventListener("mouseup",function(t){var e=Object(i.i)(t)-f;v<e&&b(t)},!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},r=function(t){return t.classList.contains("ion-activatable-instant")},c=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="activated",d=200,u=200,f=2500}}]);