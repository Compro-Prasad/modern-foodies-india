(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{tFU6:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),u=e("mrSG"),o=e("ZZ/e"),i=e("Af+r"),a=e("EgnG"),r=e("2twz"),c=e("EVdn"),d=e.n(c),s=e("br3j"),f=e("7lOA"),g=function(){function l(l,n,e,u,o,i,a,r){this.toastController=l,this.router=n,this.dishService=e,this.modalController=u,this.navCtrl=o,this.actionSheetController=i,this.userService=a,this.sessionService=r,this.ngVersion=t.VERSION.full,this.matVersion="5.1.0"}return l.prototype.ionViewWillEnter=function(){var l=this;setTimeout(function(){l.data={heading:"Normal text",para1:"Lorem ipsum dolor sit amet, consectetur",para2:"adipiscing elit."}},5e3),Object(a.a)({targets:".menu",translateX:0}),Object(a.a)({targets:".list-x",translateY:0})},l.prototype.presentToast=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:"You current location is updating...",duration:2e3})];case 1:return l.sent().present(),[2]}})})},l.prototype.openModal=function(){return u.__awaiter(this,void 0,void 0,function(){var l,n=this;return u.__generator(this,function(e){switch(e.label){case 0:return[4,this.modalController.create({component:i.a,componentProps:{paramID:5050,paramTitle:"Update Location"}})];case 1:return(l=e.sent()).onDidDismiss().then(function(l){null!==l&&(n.dataReturned=l.data)}),[4,l.present()];case 2:return[2,e.sent()]}})})},l.prototype.ngOnInit=function(){var l=this;this.loginStatus=!1,this.breakpoint=window.innerWidth<=800?1:2,this.dishService.GetAllDishes().subscribe(function(n){console.log(n),l.dish=n,l.dishlen=l.dish.length},function(l){return console.log(l)});var n=e("foodali_address");function e(l){for(var n=l+"=",e=decodeURIComponent(document.cookie).split(";"),t=0;t<e.length;t++){for(var u=e[t];" "==u.charAt(0);)u=u.substring(1);if(0==u.indexOf(n))return u.substring(n.length,u.length)}return""}console.log("Session location is "+n),null!=n?this.loc=n.substring(0,20)+"...":console.log("Session location is not found");var t=e("foodali_access_token");console.log(t+" <<< session access token "),""!=t&&this.sessionService.GetSessionAccess(t).subscribe(function(n){console.log("session response from server : "+n),null!=n?l.loginStatus=!0:(l.loginStatus=!1,document.cookie="foodali_access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",document.cookie="foodali_request_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")},function(l){return console.log(l)})},l.prototype.onResize=function(l){this.breakpoint=l.target.innerWidth<=800?1:2},l.prototype.profilePage=function(){this.navCtrl.navigateForward("profile")},l.prototype.cookPage=function(){this.navCtrl.navigateForward("foodinfo")},l.prototype.search=function(l){console.log("searched value is "+l),this.router.navigate(["/search",{svalue:l}])},l.prototype.getLoc=function(){var l=this;navigator.geolocation.getCurrentPosition(function(n){l.userService.GetMapData(n.coords.latitude,n.coords.longitude).subscribe(function(n){var e,t,u=JSON.stringify(n),o=JSON.parse(u).results[0].formatted_address;console.log(o),e=o,(t=new Date).setTime(t.getTime()+864e5),document.cookie="foodali_address="+e+";expires="+t.toUTCString+";path=/",l.loc=o.substring(0,20)+"...",l.presentToast()},function(l){return console.log(l)}),console.log("this loc :"+l.loc),new Date})},l.prototype.presentActionSheet=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(l){switch(l.label){case 0:return[4,this.actionSheetController.create({header:"Filter Options",buttons:[{text:"Popular",role:"destructive",icon:"trash",handler:function(){console.log("Delete clicked")}},{text:"Your favourites",icon:"share",handler:function(){console.log("Share clicked")}},{text:"Vegetarian cooks",icon:"arrow-dropright-circle",handler:function(){console.log("Play clicked")}},{text:"Cuisines",icon:"heart",handler:function(){console.log("Favorite clicked")}},{text:"All cooks near me",icon:"heart",handler:function(){console.log("Favorite clicked")}},{text:"Cancel",icon:"close",role:"cancel",handler:function(){console.log("Cancel clicked")}}]})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})},l.prototype.doRefresh=function(l){console.log("Begin async operation"),setTimeout(function(){console.log("Async operation has ended"),l.target.complete()},2e3)},l.prototype.goFoodInfo=function(l){console.log(l),this.router.navigate(["/foodinfo",{did:l}])},l.prototype.showsearch=function(){d()(".search-component").fadeIn(500)},l.prototype.hideSearch=function(){d()(".search-component").fadeOut(500)},l.prototype.onCancel=function(l){console.log("CANCEL",l),d()(".search-component").fadeOut(200)},l.prototype.openProfile=function(){this.navCtrl.navigateForward("profile")},l.prototype.goHome=function(){this.navCtrl.navigateForward("home")},l}(),p=function(){return function(){}}(),m=e("pMnS"),h=e("oBZk"),b=e("MBfO"),C=e("Z+uX"),v=e("wFw1"),R=e("Ip0R"),x=e("gIcY"),w=e("ZYCi"),y=t["\u0275crt"]({encapsulation:0,styles:[[".home-dw[_ngcontent-%COMP%]{background:#fff}mat-grid-list[_ngcontent-%COMP%]{background:#add8e6}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]{line-height:13px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]:last-child{margin-bottom:5px}@media only screen and (max-width:900px){.mobile-tab[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;height:60px;width:100%;background:#daa520;z-index:5000000}.right-flex[_ngcontent-%COMP%]{display:none}.left-flex[_ngcontent-%COMP%]{width:100%;text-align:left;font-size:25px;padding:40px;background:#fff}.custom-component[_ngcontent-%COMP%]{display:inline-block;width:100%;height:400px;margin:10px}.custom-wrapper[_ngcontent-%COMP%]{margin:120px 10px 0;text-align:center}.f2[_ngcontent-%COMP%], .fh[_ngcontent-%COMP%]{text-align:center}.f[_ngcontent-%COMP%]{width:50%;float:left}.foo[_ngcontent-%COMP%], .fooh[_ngcontent-%COMP%]{text-align:center}.footer[_ngcontent-%COMP%]{width:100%;padding-bottom:80px;background:#382809;color:#f0fff0}.download[_ngcontent-%COMP%]{width:50%}.download-wrapper[_ngcontent-%COMP%]{padding:50px}.main-search[_ngcontent-%COMP%]{width:80%;height:50%;position:relative;top:50%;transform:translateY(-50%);display:inline-block}.search-logo[_ngcontent-%COMP%]{font-size:25px;width:100%;text-align:center;margin:10px;color:#000}}@media only screen and (min-width:900px){.search-logo[_ngcontent-%COMP%]{font-size:25px;width:100%;text-align:center;margin:10px;color:#fff}.main-search[_ngcontent-%COMP%]{width:50%;position:relative;top:50%;transform:translateY(-50%);display:inline-block}.mobile-tab[_ngcontent-%COMP%]{display:none}.custom-component[_ngcontent-%COMP%]{display:inline-block;width:30%;height:400px;margin:10px}.custom-wrapper[_ngcontent-%COMP%]{margin:120px 120px 0;text-align:center}.left-flex[_ngcontent-%COMP%]{text-align:left;font-size:25px;padding:10px;background:#fff}.fooh[_ngcontent-%COMP%]{text-align:left}.footer[_ngcontent-%COMP%]{width:100%;padding-bottom:40px;background:#382809;color:#f0fff0}}"]],data:{}});function k(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"ion-tab-button",[["tab","speakers"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.goHome()&&t),t},h.qb,h.E)),t["\u0275did"](1,49152,null,0,o.ub,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","log-in"]],null,null,null,h.db,h.r)),t["\u0275did"](3,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](4,0,null,0,2,"ion-label",[],null,null,null,h.hb,h.v)),t["\u0275did"](5,49152,null,0,o.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Login"]))],function(l,n){l(n,1,0,"speakers"),l(n,3,0,"log-in")},null)}function N(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"ion-tab-button",[["tab","speakers"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.showsearch()&&t),t},h.qb,h.E)),t["\u0275did"](1,49152,null,0,o.ub,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","search"]],null,null,null,h.db,h.r)),t["\u0275did"](3,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](4,0,null,0,2,"ion-label",[],null,null,null,h.hb,h.v)),t["\u0275did"](5,49152,null,0,o.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Search"]))],function(l,n){l(n,1,0,"speakers"),l(n,3,0,"search")},null)}function _(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,6,"ion-tab-button",[["tab","about"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.profilePage()&&t),t},h.qb,h.E)),t["\u0275did"](1,49152,null,0,o.ub,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](2,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,h.db,h.r)),t["\u0275did"](3,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](4,0,null,0,2,"ion-label",[],null,null,null,h.hb,h.v)),t["\u0275did"](5,49152,null,0,o.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Profile"]))],function(l,n){l(n,1,0,"about"),l(n,3,0,"person")},null)}function D(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"ion-button",[["style","float: right;"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.goHome()&&t),t},h.Q,h.e)),t["\u0275did"](2,49152,null,0,o.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,1,"ion-icon",[["name","log-in"],["slot","start"]],null,null,null,h.db,h.r)),t["\u0275did"](4,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275ted"](-1,0,[" Log in "]))],function(l,n){l(n,4,0,"log-in")},null)}function E(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"ion-icon",[["class","icon"],["name","contact"],["style","float: right; margin-top:5px; cursor: pointer; "]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.openProfile()&&t),t},h.db,h.r)),t["\u0275did"](2,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](3,0,null,null,1,"ion-icon",[["class","icon"],["name","search"],["style","float: right; margin-top:5px; cursor: pointer;"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.showsearch()&&t),t},h.db,h.r)),t["\u0275did"](4,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](5,0,null,null,0,"div",[["style","clear: both;"]],null,null,null,null,null))],function(l,n){l(n,2,0,"contact"),l(n,4,0,"search")},null)}function Z(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Pick-up only"]))],null,null)}function O(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"span",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Delivery"]))],null,null)}function P(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,55,"div",[],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,54,"ion-card",[["style","background: #fff; "]],null,null,null,h.W,h.g)),t["\u0275did"](2,49152,null,0,o.m,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](3,0,null,0,1,"mat-progress-bar",[["aria-valuemax","100"],["aria-valuemin","0"],["class","mat-progress-bar"],["mode","indeterminate"],["role","progressbar"]],[[1,"aria-valuenow",0],[1,"mode",0],[2,"_mat-animation-noopable",null]],null,null,b.b,b.a)),t["\u0275did"](4,4374528,null,0,C.b,[t.ElementRef,t.NgZone,[2,v.a],[2,C.a]],{mode:[0,"mode"]},null),(l()(),t["\u0275eld"](5,0,null,0,13,"ion-card-header",[],null,null,null,h.T,h.i)),t["\u0275did"](6,49152,null,0,o.o,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](7,0,null,0,0,"img",[["height","200px;"],["width","200px;"]],[[8,"src",4]],null,null,null,null)),(l()(),t["\u0275eld"](8,0,null,0,0,"img",[["class","veg"],["src","https://cdn.iconscout.com/icon/premium/png-512-thumb/vegetarian-3-565377.png"],["style","width: 20px !important; margin: 10px; float: right; display: none;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](9,0,null,0,0,"img",[["class","nonveg"],["src","https://www.trzcacak.rs/file/max/53/538140_non-veg-png.png"],["style","width: 20px !important; margin: 10px; float: right; display: none;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](10,0,null,0,2,"ion-card-subtitle",[],null,null,null,h.U,h.j)),t["\u0275did"](11,49152,null,0,o.p,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](12,0,["",""])),(l()(),t["\u0275eld"](13,0,null,0,2,"ion-card-title",[],null,null,null,h.V,h.k)),t["\u0275did"](14,49152,null,0,o.q,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](15,0,["",""])),(l()(),t["\u0275eld"](16,0,null,0,2,"ion-card-subtitle",[],null,null,null,h.U,h.j)),t["\u0275did"](17,49152,null,0,o.p,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](18,0,["",""])),(l()(),t["\u0275eld"](19,0,null,0,21,"ion-card-content",[],null,null,null,h.S,h.h)),t["\u0275did"](20,49152,null,0,o.n,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](21,0,null,0,4,"ion-badge",[["color","success"]],null,null,null,h.P,h.d)),t["\u0275did"](22,49152,null,0,o.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](23,0,null,0,1,"ion-icon",[["name","star"]],null,null,null,h.db,h.r)),t["\u0275did"](24,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275ted"](-1,0,[" 5.0 "])),(l()(),t["\u0275eld"](26,0,null,0,7,"ion-badge",[["color","primary"],["style","margin-left:10px "]],null,null,null,h.P,h.d)),t["\u0275did"](27,49152,null,0,o.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](28,0,null,0,1,"ion-icon",[["name","bicycle"]],null,null,null,h.db,h.r)),t["\u0275did"](29,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,Z)),t["\u0275did"](31,16384,null,0,R.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,O)),t["\u0275did"](33,16384,null,0,R.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](34,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](35,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](36,null,[" "," servings"])),(l()(),t["\u0275eld"](37,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](38,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Address"])),(l()(),t["\u0275ted"](40,0,[" : "," "])),(l()(),t["\u0275eld"](41,0,null,0,14,"ion-footer",[],null,null,null,h.ab,h.o)),t["\u0275did"](42,49152,null,0,o.z,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](43,0,null,0,12,"ion-toolbar",[],null,null,null,h.xb,h.L)),t["\u0275did"](44,49152,null,0,o.Bb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](45,0,null,0,10,"ion-grid",[],null,null,null,h.bb,h.p)),t["\u0275did"](46,49152,null,0,o.A,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](47,0,null,0,8,"ion-row",[],null,null,null,h.jb,h.x)),t["\u0275did"](48,49152,null,0,o.ib,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](49,0,null,0,2,"ion-col",[["style","text-align: center;"]],null,null,null,h.Y,h.m)),t["\u0275did"](50,49152,null,0,o.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](51,0,null,0,0,"iframe",[["allow","encrypted-media"],["allowTransparency","true"],["frameborder","0"],["height","20"],["scrolling","no"],["src","https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&appId=484770218980582&width=59&height=20"],["style","border:none;overflow:hidden"],["width","59"]],null,null,null,null,null)),(l()(),t["\u0275eld"](52,0,null,0,3,"ion-col",[["style","text-align: center; cursor: pointer"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.goFoodInfo(l.parent.context.$implicit.id)&&t),t},h.Y,h.m)),t["\u0275did"](53,49152,null,0,o.t,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](54,0,null,0,1,"ion-icon",[["name","eye"]],null,null,null,h.db,h.r)),t["\u0275did"](55,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null)],function(l,n){l(n,4,0,"indeterminate"),l(n,22,0,"success"),l(n,24,0,"star"),l(n,27,0,"primary"),l(n,29,0,"bicycle"),l(n,31,0,0==n.parent.context.$implicit.delivery),l(n,33,0,1==n.parent.context.$implicit.delivery),l(n,55,0,"eye")},function(l,n){l(n,3,0,t["\u0275nov"](n,4).value,t["\u0275nov"](n,4).mode,t["\u0275nov"](n,4)._isNoopAnimation),l(n,7,0,t["\u0275inlineInterpolate"](1,"../../assets/images/",n.parent.context.$implicit.id,"")),l(n,12,0,n.parent.context.$implicit.cuisine),l(n,15,0,n.parent.context.$implicit.dishName),l(n,18,0,n.parent.context.$implicit.foodDescription),l(n,36,0,n.parent.context.$implicit.noOfServings),l(n,40,0,n.parent.context.$implicit.address)})}function I(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","custom-component"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,P)),t["\u0275did"](2,16384,null,0,R.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,1==n.context.$implicit.publishStatus)},null)}function M(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,5,"div",[["style","width: 100%; text-align:center; margin: 10px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,4,"ion-button",[["color","dark"],["style","display: inline-block"]],null,null,null,h.Q,h.e)),t["\u0275did"](2,49152,null,0,o.k,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{color:[0,"color"]},null),(l()(),t["\u0275eld"](3,0,null,0,1,"ion-icon",[["name","refresh"]],null,null,null,h.db,h.r)),t["\u0275did"](4,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275ted"](-1,0,[" \xa0 Load more "]))],function(l,n){l(n,2,0,"dark"),l(n,4,0,"refresh")},null)}function S(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,21,"div",[["class","mobile-tab"]],null,null,null,null,null)),(l()(),t["\u0275eld"](1,0,null,null,20,"ion-tabs",[],null,[[null,"ionTabButtonClick"]],function(l,n,e){var u=!0;return"ionTabButtonClick"===n&&(u=!1!==t["\u0275nov"](l,2).select(e.detail.tab)&&u),u},h.rb,h.F)),t["\u0275did"](2,49152,null,1,o.vb,[o.Gb],null,null),t["\u0275qud"](335544320,1,{tabBar:0}),(l()(),t["\u0275eld"](4,0,null,1,17,"ion-tab-bar",[["slot","bottom"]],null,null,null,h.pb,h.D)),t["\u0275did"](5,49152,[[1,4]],0,o.tb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](6,0,null,0,9,"ion-tab-button",[["tab","schedule"]],null,null,null,h.qb,h.E)),t["\u0275did"](7,49152,null,0,o.ub,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{tab:[0,"tab"]},null),(l()(),t["\u0275eld"](8,0,null,0,1,"ion-icon",[["name","home"]],null,null,null,h.db,h.r)),t["\u0275did"](9,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](10,0,null,0,2,"ion-label",[],null,null,null,h.hb,h.v)),t["\u0275did"](11,49152,null,0,o.N,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Home"])),(l()(),t["\u0275eld"](13,0,null,0,2,"ion-badge",[],null,null,null,h.P,h.d)),t["\u0275did"](14,49152,null,0,o.j,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](15,0,["",""])),(l()(),t["\u0275and"](16777216,null,0,1,null,k)),t["\u0275did"](17,16384,null,0,R.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,N)),t["\u0275did"](19,16384,null,0,R.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,0,1,null,_)),t["\u0275did"](21,16384,null,0,R.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](22,0,null,null,91,"div",[["class","home-dw"],["style","position: fixed; z-index: -111000; top:0; left:0; width:100%; height:100%; overflow-y: scroll; overflow-x: hidden; background: #fff;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](23,0,null,null,15,"div",[["class","search-component"],["style"," position: fixed; display: none; z-index: 1000001; top:0; left:0; width:100%; height:100%; "]],null,null,null,null,null)),(l()(),t["\u0275eld"](24,0,null,null,14,"div",[["style","text-align: center; width: 100%; height: 100%; background:rgb(219, 153, 0.9);"]],null,null,null,null,null)),(l()(),t["\u0275eld"](25,0,null,null,13,"div",[["class","main-search"]],null,null,null,null,null)),(l()(),t["\u0275eld"](26,0,null,null,2,"div",[["style","width: 100%; margin: 10px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](27,0,null,null,1,"ion-icon",[["name","close-circle-outline"],["style","zoom:2.0; width: 40px; cursor:pointer;"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.hideSearch()&&t),t},h.db,h.r)),t["\u0275did"](28,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](29,0,null,null,5,"div",[["class","search-logo"],["style","font-size: 30px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](30,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["FoodAli"])),(l()(),t["\u0275eld"](32,0,null,null,2,"span",[["style","font-size: 20px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](33,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["search"])),(l()(),t["\u0275eld"](35,0,null,null,3,"ion-searchbar",[["cancelButtonText","Custom Cancel"],["placeholder","Search for food nearby..."],["showCancelButton","focus"]],null,[[null,"ionCancel"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t["\u0275nov"](l,38)._handleBlurEvent()&&u),"ionChange"===n&&(u=!1!==t["\u0275nov"](l,38)._handleInputEvent(e.target.value)&&u),"ionCancel"===n&&(u=!1!==o.onCancel(e)&&u),"keyup.enter"===n&&(u=!1!==o.search(t["\u0275nov"](l,37).value)&&u),u},h.kb,h.y)),t["\u0275prd"](5120,null,x.k,function(l){return[l]},[o.Nb]),t["\u0275did"](37,49152,[["q",4]],0,o.jb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{cancelButtonText:[0,"cancelButtonText"],placeholder:[1,"placeholder"],showCancelButton:[2,"showCancelButton"],value:[3,"value"]},null),t["\u0275did"](38,16384,null,0,o.Nb,[t.ElementRef],null,null),(l()(),t["\u0275eld"](39,0,null,null,20,"div",[["class","list-x"],["style","width:100%; height: 90px; position: fixed; top:0; left:0;  z-index: 1000000; transform: translateY(-100px);"]],null,null,null,null,null)),(l()(),t["\u0275eld"](40,0,null,null,19,"div",[["class","flex-container"],["style","box-shadow: 0 5px 5px -6px rgba(0,0,0,0.5);"]],null,null,null,null,null)),(l()(),t["\u0275eld"](41,0,null,null,12,"div",[["class","left-flex"]],null,null,null,null,null)),(l()(),t["\u0275eld"](42,0,null,null,6,"span",[["routerDirection","forward"]],null,[[null,"click"]],function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](l,43).onClick()&&u),"click"===n&&(u=!1!==t["\u0275nov"](l,45).onClick(e)&&u),u},null,null)),t["\u0275did"](43,16384,null,0,w.n,[w.m,w.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](44,1),t["\u0275did"](45,737280,null,0,o.Lb,[R.LocationStrategy,o.Gb,t.ElementRef,w.m,[2,w.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),t["\u0275ted"](-1,null,[" Food"])),(l()(),t["\u0275eld"](47,0,null,null,1,"span",[["style","color: green; "]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Ali"])),(l()(),t["\u0275eld"](49,0,null,null,4,"span",[["style","font-size: 15px; cursor: pointer; float:right;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](50,0,null,null,1,"u",[],null,null,null,null,null)),(l()(),t["\u0275ted"](51,null,["",""])),(l()(),t["\u0275eld"](52,0,null,null,1,"ion-icon",[["class","icon"],["name","locate"]],null,[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.getLoc()&&t),t},h.db,h.r)),t["\u0275did"](53,49152,null,0,o.C,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],{name:[0,"name"]},null),(l()(),t["\u0275eld"](54,0,null,null,5,"div",[["class","right-flex"],["style","text-align: left; font-size: 25px; position: relative;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](55,0,null,null,4,"div",[["style","width: 100%; padding:0; line-height:0; padding-right:20px;  position: absolute; top: 50%;  transform: translateY(-50%);"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,D)),t["\u0275did"](57,16384,null,0,R.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275and"](16777216,null,null,1,null,E)),t["\u0275did"](59,16384,null,0,R.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](60,0,null,null,2,"div",[["class","custom-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](62,278528,null,0,R.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),t["\u0275eld"](63,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275and"](16777216,null,null,1,null,M)),t["\u0275did"](65,16384,null,0,R.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),t["\u0275eld"](66,0,null,null,40,"div",[["class","footer"]],null,null,null,null,null)),(l()(),t["\u0275eld"](67,0,null,null,39,"div",[["class","flex-container"]],null,null,null,null,null)),(l()(),t["\u0275eld"](68,0,null,null,15,"div",[["class","foo"]],null,null,null,null,null)),(l()(),t["\u0275eld"](69,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](70,0,null,null,3,"ion-text",[["class","fooh"]],null,null,null,h.sb,h.G)),t["\u0275did"](71,49152,null,0,o.wb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](72,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["About Foodali"])),(l()(),t["\u0275eld"](74,0,null,null,1,"p",[["class","listing-foo"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["About us"])),(l()(),t["\u0275eld"](76,0,null,null,1,"p",[["class","listing-foo"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Team"])),(l()(),t["\u0275eld"](78,0,null,null,1,"p",[["class","listing-foo"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Careers"])),(l()(),t["\u0275eld"](80,0,null,null,1,"p",[["class","listing-foo"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Offers"])),(l()(),t["\u0275eld"](82,0,null,null,1,"p",[["class","listing-foo"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Contact"])),(l()(),t["\u0275eld"](84,0,null,null,13,"div",[["class","foo"]],null,null,null,null,null)),(l()(),t["\u0275eld"](85,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](86,0,null,null,3,"ion-text",[["class","fooh"]],null,null,null,h.sb,h.G)),t["\u0275did"](87,49152,null,0,o.wb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](88,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Get Help"])),(l()(),t["\u0275eld"](90,0,null,null,1,"p",[["class","listing-foo"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Help and support"])),(l()(),t["\u0275eld"](92,0,null,null,1,"p",[["class","listing-foo"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Partner with us"])),(l()(),t["\u0275eld"](94,0,null,null,1,"p",[["class","listing-foo"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Ride with us"])),(l()(),t["\u0275eld"](96,0,null,null,1,"p",[["class","listing-foo"]],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Blog"])),(l()(),t["\u0275eld"](98,0,null,null,8,"div",[["class","foo"],["id","footer-end"]],null,null,null,null,null)),(l()(),t["\u0275eld"](99,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t["\u0275eld"](100,0,null,null,3,"ion-text",[["class","fooh"]],null,null,null,h.sb,h.G)),t["\u0275did"](101,49152,null,0,o.wb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](102,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),t["\u0275ted"](-1,null,["Get FoodAli in your phone"])),(l()(),t["\u0275eld"](104,0,null,null,2,"div",[["class","download-wrapper"]],null,null,null,null,null)),(l()(),t["\u0275eld"](105,0,null,null,0,"img",[["class","download"],["src","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"],["style","margin-top: 10px; float: left;"],["width","150px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](106,0,null,null,0,"img",[["class","download"],["src","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"],["style","margin-top: 10px; float: left;"],["width","150px;"]],null,null,null,null,null)),(l()(),t["\u0275eld"](107,0,null,null,6,"ion-footer",[["style"," text-align:center"]],null,null,null,h.ab,h.o)),t["\u0275did"](108,49152,null,0,o.z,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](109,0,null,0,4,"ion-toolbar",[],null,null,null,h.xb,h.L)),t["\u0275did"](110,49152,null,0,o.Bb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275eld"](111,0,null,0,2,"ion-title",[],null,null,null,h.vb,h.J)),t["\u0275did"](112,49152,null,0,o.zb,[t.ChangeDetectorRef,t.ElementRef,t.NgZone],null,null),(l()(),t["\u0275ted"](-1,0,["Copyright 2019, Foodali inc. "]))],function(l,n){var e=n.component;l(n,7,0,"schedule"),l(n,9,0,"home"),l(n,17,0,0==e.loginStatus),l(n,19,0,1==e.loginStatus),l(n,21,0,1==e.loginStatus),l(n,28,0,"close-circle-outline"),l(n,37,0,"Custom Cancel","Search for food nearby...","focus",e.selectedDish);var t=l(n,44,0,"/postmyfood");l(n,43,0,t),l(n,45,0,"forward"),l(n,53,0,"locate"),l(n,57,0,0==e.loginStatus),l(n,59,0,1==e.loginStatus),l(n,62,0,e.dish),l(n,65,0,e.dishlen>9)},function(l,n){var e=n.component;l(n,15,0,e.dishlen),l(n,51,0,e.loc)})}function F(l){return t["\u0275vid"](0,[(l()(),t["\u0275eld"](0,0,null,null,1,"app-postmyfood",[],null,null,null,S,y)),t["\u0275did"](1,114688,null,0,g,[o.Ob,w.m,r.a,o.Fb,o.Gb,o.a,s.a,f.a],null,null)],function(l,n){l(n,1,0)},null)}var T=t["\u0275ccf"]("app-postmyfood",g,F,{},{},[]),z=e("Fzqc"),A=e("Wf4p"),L=e("ZYjt"),B=e("r43C");e.d(n,"PostmyfoodPageModuleNgFactory",function(){return V});var V=t["\u0275cmf"](p,[],function(l){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[m.a,T]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,R.NgLocalization,R.NgLocaleLocalization,[t.LOCALE_ID,[2,R["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,x.v,x.v,[]),t["\u0275mpd"](4608,o.b,o.b,[t.NgZone,t.ApplicationRef]),t["\u0275mpd"](4608,o.Fb,o.Fb,[o.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](4608,o.Kb,o.Kb,[o.b,t.ComponentFactoryResolver,t.Injector]),t["\u0275mpd"](1073742336,R.CommonModule,R.CommonModule,[]),t["\u0275mpd"](1073742336,x.s,x.s,[]),t["\u0275mpd"](1073742336,x.i,x.i,[]),t["\u0275mpd"](1073742336,o.Db,o.Db,[]),t["\u0275mpd"](1073742336,w.o,w.o,[[2,w.u],[2,w.m]]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,A.n,A.n,[[2,A.f],[2,L.g]]),t["\u0275mpd"](1073742336,C.c,C.c,[]),t["\u0275mpd"](1073742336,A.o,A.o,[]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,p,p,[]),t["\u0275mpd"](1024,w.k,function(){return[[{path:"",component:g}]]},[])])})}}]);