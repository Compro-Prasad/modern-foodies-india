(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blacklist-blacklist-module"],{

/***/ "./src/app/blacklist/blacklist.module.ts":
/*!***********************************************!*\
  !*** ./src/app/blacklist/blacklist.module.ts ***!
  \***********************************************/
/*! exports provided: BlacklistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlacklistPageModule", function() { return BlacklistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _blacklist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blacklist.page */ "./src/app/blacklist/blacklist.page.ts");







var routes = [
    {
        path: '',
        component: _blacklist_page__WEBPACK_IMPORTED_MODULE_6__["BlacklistPage"]
    }
];
var BlacklistPageModule = /** @class */ (function () {
    function BlacklistPageModule() {
    }
    BlacklistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_blacklist_page__WEBPACK_IMPORTED_MODULE_6__["BlacklistPage"]]
        })
    ], BlacklistPageModule);
    return BlacklistPageModule;
}());



/***/ }),

/***/ "./src/app/blacklist/blacklist.page.html":
/*!***********************************************!*\
  !*** ./src/app/blacklist/blacklist.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"home-mw\">\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"postmyfood\"></ion-back-button>\n        </ion-buttons>  \n    <ion-title>Food Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<!-- Textarea in an item with a floating label -->\n<ion-item class=\"home-mw\">\n    <ion-label position=\"floating\">Food Title</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n<ion-item class=\"home-mw\">>\n  <ion-label position=\"floating\">Description</ion-label>\n  <ion-textarea></ion-textarea>\n</ion-item>\n\n\n<ion-grid class=\"home-mw\">\n    <ion-row>\n      <ion-col>\n          <ion-card>\n              <ion-card-header>\n                <ion-card-title>Upload Food Picture</ion-card-title>\n              </ion-card-header>\n            \n              <ion-card-content>\n          \n                  <img style=\"width: 50px;\" src=\"/assets/icon/_ionicons_svg_md-cloud-upload.svg\">\n              </ion-card-content>\n            </ion-card>\n      </ion-col>\n      \n      \n      <ion-col>\n        \n  <ion-card class=\"home-mw\">\n      <ion-card-header>\n        <ion-card-title>Number of Servings</ion-card-title>\n      </ion-card-header>\n    \n      <ion-card-content>\n          <ion-input type=\"number\" value=\"5\"></ion-input>\n      </ion-card-content>\n    </ion-card>\n      </ion-col>\n\n\n\n    </ion-row>\n    </ion-grid>\n\n<!-- Default Segment -->\n<ion-segment class=\"home-mw\">\n    <ion-segment-button value=\"friends\">\n      <ion-label>Pick-up only</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"enemies\">\n      <ion-label>Deliver</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  \n</ion-content>\n\n<ion-footer class=\"home-mw\">\n\n    <ion-toolbar>\n      <ion-title>\n\n\n<ion-button expand=\"full\" >Publish</ion-button>\n\n      </ion-title>\n    </ion-toolbar>\n  </ion-footer>\n\n\n\n  <div class=\"home-dw\"\n  style=\"position: fixed; z-index:  111000; top:0; left:0; width:100%; height:100%; overflow-y: scroll; background: #333;\">\n  \n\n  <div style=\"width:100%; height: 90px; position: absolute; top:0; left:0;  z-index: 1000000;\">\n      <div class=\"flex-container\">\n  \n        <div  [routerLink]=\"['/postmyfood']\" routerDirection=\"forward\" style=\"cursor: pointer;  text-align: left; font-size: 25px; padding: 10px; background: #fff;\">\n          &nbsp; &nbsp; Food<span style=\"color: darkgreen; \">Ali</span>\n        </div>\n        <div [routerLink]=\"['/profile']\" style=\" cursor: pointer; text-align: left; font-size: 25px; position: relative;\">\n          <div \n            style=\"width: 100%; padding:0; line-height:0; padding-right:20px;  position: absolute; top: 50%;  transform: translateY(-50%);\">\n  \n            <ion-icon  class=\"icon\" style=\"float: right; margin-top:5px; \" name=\"contact\"></ion-icon>\n  \n            <div style=\"clear: both;\"></div>\n          </div>\n  \n  \n        </div>\n  \n      </div>\n  \n  \n    </div>\n    <br/><br/><br/><br/>\n    <ion-card style=\"background: #fff; margin: 120px;\"> \n        <ion-card-header style=\"height: 100px;\" >\n            <ion-tabs>\n              \n                <ion-tab-bar slot=\"top\">\n           \n              \n                  <ion-tab-button tab=\"tab1\" [routerLink]=\"['/foodposter']\" routerDirection=\"forward\">\n                    <ion-icon name=\"jet\"></ion-icon>\n                    <ion-label>Poster</ion-label>\n                  </ion-tab-button>\n              \n                  <ion-tab-button tab=\"tab2\" [routerLink]=\"['/manage']\" routerDirection=\"forward\">\n                    <ion-icon name=\"menu\"></ion-icon>\n                    <ion-label>Manage</ion-label>\n                  </ion-tab-button>\n              \n                  <ion-tab-button tab=\"tab2\" style=\"background:goldenrod !important;   color: white !important;\">\n                    <ion-icon name=\"hand\"></ion-icon>\n                    <ion-label>Blacklist</ion-label>\n                  </ion-tab-button>\n                </ion-tab-bar>\n              </ion-tabs>\n\n              \n        </ion-card-header>\n      \n        <ion-card-content>\n            <!--\n              stepper ref : \n              https://devdactic.com/angular-material-ionic-4/ -->\n       \n          \n                \n                <ion-item>\n                  <ion-avatar slot=\"start\">\n                    <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n                  </ion-avatar>\n                  <ion-label>Vijay Mallya\n                  </ion-label>\n                  <ion-button color=\"danger\">Unblock</ion-button>\n                </ion-item>\n\n                <ion-item>\n                    <ion-avatar slot=\"start\">\n                      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n                    </ion-avatar>\n                    <ion-label>Nirav Modi\n                    </ion-label>\n                    <ion-button color=\"danger\">Unblock</ion-button>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-avatar slot=\"start\">\n                        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n                      </ion-avatar>\n                      <ion-label>Rahul Gandhi\n                      </ion-label>\n                      <ion-button color=\"danger\">Unblock</ion-button>\n                    </ion-item>\n\n        </ion-card-content>\n\n\n      </ion-card>\n      <div style=\"width: 100%; height:450px; background: rgb(56, 40, 9); color: honeydew\">\n        <div class=\"flex-container\">\n          \n          <div class=\"foo\">\n            <br/>\n             <ion-text style=\"text-align: left\">\n                 <h3>About Foodali</h3>\n               </ion-text>\n               <p class=\"listing-foo\">About us</p>\n               <p class=\"listing-foo\">Team</p>\n               <p class=\"listing-foo\">Careers</p>\n               <p class=\"listing-foo\">Offers</p>\n               <p class=\"listing-foo\">Contact</p>\n          </div>\n          <div  class=\"foo\">\n             <br/>\n             <ion-text style=\"text-align: left\">\n                 <h3>Get Help</h3>\n               </ion-text>\n               <p class=\"listing-foo\">Help and support</p>\n               <p class=\"listing-foo\">Partner with us</p>\n               <p class=\"listing-foo\">Ride with us</p>\n               <p class=\"listing-foo\">Blog</p>\n          </div>\n          <div class=\"foo\">\n             <br/>\n             <ion-text style=\"text-align: left\">\n                 <h3>Get FoodAli in your phone</h3>\n               </ion-text>\n               <img style=\"margin-top: 10px; float:left; margin-right: 10px;\" width=\"150px;\" src=\"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp\"/>\n              \n               <img style=\"margin-top: 10px; float:left; \" width=\"150px;\" src=\"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty\"/>\n      \n          </div>\n \n          </div>\n          </div>\n          <ion-footer style=\"background: rgb(20, 20, 20); text-align:center\">\n             <ion-toolbar>\n               <ion-title>Copyright 2019, Foodali inc.\n               </ion-title>\n             </ion-toolbar>\n           </ion-footer>\n   \n\n    </div>\n"

/***/ }),

/***/ "./src/app/blacklist/blacklist.page.scss":
/*!***********************************************!*\
  !*** ./src/app/blacklist/blacklist.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JsYWNrbGlzdC9ibGFja2xpc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/blacklist/blacklist.page.ts":
/*!*********************************************!*\
  !*** ./src/app/blacklist/blacklist.page.ts ***!
  \*********************************************/
/*! exports provided: BlacklistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlacklistPage", function() { return BlacklistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlacklistPage = /** @class */ (function () {
    function BlacklistPage() {
    }
    BlacklistPage.prototype.ngOnInit = function () {
    };
    BlacklistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blacklist',
            template: __webpack_require__(/*! ./blacklist.page.html */ "./src/app/blacklist/blacklist.page.html"),
            styles: [__webpack_require__(/*! ./blacklist.page.scss */ "./src/app/blacklist/blacklist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlacklistPage);
    return BlacklistPage;
}());



/***/ })

}]);
//# sourceMappingURL=blacklist-blacklist-module.js.map