(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.page.html":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button defaultHref=\"postmyfood\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div style=\"height:200px; background:#333; width:100%; position: relative;\">\n      <ion-icon name=\"contact\" style=\"width:100px; height:100px; position: absolute; bottom: -50px; margin-left: auto;\n      margin-right: auto;\n      left: 0;\n      right: 0; border:solid thick #ccc; background: #fff; border-radius: 100%; padding: 0;\"></ion-icon>\n        <p style=\"position: absolute; bottom: -100px; margin-left: auto;\n        margin-right: auto;\n        left: 0;\n        right: 0;  padding: 0; text-align: center;\">Raj kishor <ion-icon name=\"create\"></ion-icon></p>\n\n<div style=\"position: absolute; bottom: -170px; margin-left: auto;\nmargin-right: auto;\nleft: 0;\nright: 0;  padding: 0; text-align: center;\">\n<div>\n    <ion-icon name=\"star\"></ion-icon> 4.2\n</div>\n\n<!-- \n  <div style=\"position: relative; display:inline-block; width: 20px; cursor: pointer;\">\n      <ion-icon id=\"ro1\"  style=\"position: absolute; top:0; left:0;\" name=\"star-outline\"></ion-icon>\n      <ion-icon id=\"rs1\" style=\"position: absolute; top:0; left:0; display: none;\" name=\"star\"></ion-icon>\n  </div>\n\n  <div style=\"position: relative; display:inline-block; width: 20px; cursor: pointer;\">\n      <ion-icon id=\"ro2\"  style=\"position: absolute; top:0; left:0;\" name=\"star-outline\"></ion-icon>\n      <ion-icon id=\"rs2\" style=\"position: absolute; top:0; left:0; display: none;\" name=\"star\"></ion-icon>\n  </div>\n\n  <div style=\"position: relative; display:inline-block; width: 20px; cursor: pointer;\">\n      <ion-icon id=\"ro3\"  style=\"position: absolute; top:0; left:0;\" name=\"star-outline\"></ion-icon>\n      <ion-icon id=\"rs3\" style=\"position: absolute; top:0; left:0; display: none;\" name=\"star\"></ion-icon>\n  </div>\n\n  <div style=\"position: relative; display:inline-block; width: 20px; cursor: pointer;\">\n      <ion-icon id=\"ro4\"  style=\"position: absolute; top:0; left:0;\" name=\"star-outline\"></ion-icon>\n      <ion-icon id=\"rs4\" style=\"position: absolute; top:0; left:0; display: none;\" name=\"star\"></ion-icon>\n  </div>\n\n  <div style=\"position: relative; display:inline-block; width: 20px; cursor: pointer;\">\n      <ion-icon id=\"ro5\"  style=\"position: absolute; top:0; left:0;\" name=\"star-outline\"></ion-icon>\n      <ion-icon id=\"rs5\" style=\"position: absolute; top:0; left:0; display: none;\" name=\"star\"></ion-icon>\n  </div> -->\n   <div>\n\n      <ion-button  color=\"dark\">Rate Cook</ion-button>\n\n\n   </div>\n\n</div>\n\n\n  </div>  \n\n  <br/><br/><br/><br/><br/><br/><br/><br/><br/>\n  <ion-card>\n     \n    \n      <ion-item href=\"#\">\n        <ion-icon name=\"menu\" slot=\"start\"></ion-icon>\n        <ion-label>Menu</ion-label>\n      </ion-item>\n      <ion-item href=\"#\">\n          <ion-icon name=\"time\" slot=\"start\"></ion-icon>\n          <ion-label>Past Servings</ion-label>\n        </ion-item>\n        <ion-item href=\"#\">\n            <ion-icon name=\"clock\" slot=\"start\"></ion-icon>\n            <ion-label>Past Orders </ion-label>\n          </ion-item>\n          <ion-item href=\"#\">\n              <ion-icon name=\"card\" slot=\"start\"></ion-icon>\n              <ion-label>Payment Options</ion-label>\n            </ion-item>\n            <ion-item href=\"#\">\n                <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n                <ion-label>Saved Address</ion-label>\n              </ion-item>\n              <ion-item href=\"#\" (click)=\"logmeout()\">\n                  <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n                  <ion-label>Sign out</ion-label>\n                </ion-item>\n    \n  \n    </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.logmeout = function () {
        document.cookie = 'foodali_access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'foodali_request_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'foodali_address=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    };
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/app/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map