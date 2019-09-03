(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chefinfo-chefinfo-module"],{

/***/ "./src/app/chefinfo/chefinfo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chefinfo/chefinfo.module.ts ***!
  \*********************************************/
/*! exports provided: ChefinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefinfoPageModule", function() { return ChefinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chefinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chefinfo.page */ "./src/app/chefinfo/chefinfo.page.ts");







var routes = [
    {
        path: '',
        component: _chefinfo_page__WEBPACK_IMPORTED_MODULE_6__["ChefinfoPage"]
    }
];
var ChefinfoPageModule = /** @class */ (function () {
    function ChefinfoPageModule() {
    }
    ChefinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chefinfo_page__WEBPACK_IMPORTED_MODULE_6__["ChefinfoPage"]]
        })
    ], ChefinfoPageModule);
    return ChefinfoPageModule;
}());



/***/ }),

/***/ "./src/app/chefinfo/chefinfo.page.html":
/*!*********************************************!*\
  !*** ./src/app/chefinfo/chefinfo.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <ion-card>\n        <ion-card-header>\n            <ion-item>\n                <ion-label>Are you a professional cook?</ion-label>\n                <ion-select placeholder=\"Select One\">\n                  <ion-select-option value=\"f\">Yes</ion-select-option>\n                  <ion-select-option value=\"m\">No</ion-select-option>\n                </ion-select>\n              </ion-item>\n        </ion-card-header>\n      \n   \n      </ion-card>\n      <ion-card>\n          <ion-card-header>\n                  <ion-item>\n                      <ion-label>Are you a veg or non-veg?</ion-label>\n                      <ion-select placeholder=\"Select One\">\n                        <ion-select-option value=\"f\">Veg</ion-select-option>\n                        <ion-select-option value=\"m\">Non-veg</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n          </ion-card-header>\n        \n        </ion-card>\n        <ion-card>\n            <ion-card-header>\n              <ion-card-title>Your favourite cuisine</ion-card-title>\n            </ion-card-header>\n            <ion-input placeholder=\"Search cuisine\"></ion-input>\n            <ion-card-content>\n           \n                  \n                  <ion-chip>\n                    <ion-avatar>\n                      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n                    </ion-avatar>\n                    <ion-label>Chinese</ion-label>\n                    <ion-icon name=\"close-circle\"></ion-icon>\n                  </ion-chip>\n                           \n                  <ion-chip>\n                      <ion-avatar>\n                        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n                      </ion-avatar>\n                      <ion-label>Italian</ion-label>\n                      <ion-icon name=\"close-circle\"></ion-icon>\n                    </ion-chip>\n                             \n                  <ion-chip>\n                      <ion-avatar>\n                        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n                      </ion-avatar>\n                      <ion-label>Indian</ion-label>\n                      <ion-icon name=\"close-circle\"></ion-icon>\n                    </ion-chip>\n                             \n                  <ion-chip>\n                      <ion-avatar>\n                        <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n                      </ion-avatar>\n                      <ion-label>Mexican</ion-label>\n                      <ion-icon name=\"close-circle\"></ion-icon>\n                    </ion-chip>\n            </ion-card-content>\n          </ion-card>\n\n\n</ion-content>\n<ion-footer>\n    <ion-toolbar>\n        <ion-title>\n        <ion-grid>\n            <ion-row>\n              <ion-col>\n              \n        <ion-button (click)=\"Skip()\" expand=\"block\">Skip</ion-button>\n              </ion-col>\n              <ion-col>\n               \n\n  <ion-button (click)=\"Next()\" expand=\"block\">Next</ion-button>\n              </ion-col>\n            </ion-row>\n</ion-grid></ion-title>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/chefinfo/chefinfo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/chefinfo/chefinfo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWZpbmZvL2NoZWZpbmZvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chefinfo/chefinfo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/chefinfo/chefinfo.page.ts ***!
  \*******************************************/
/*! exports provided: ChefinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefinfoPage", function() { return ChefinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ChefinfoPage = /** @class */ (function () {
    function ChefinfoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChefinfoPage.prototype.ngOnInit = function () {
    };
    ChefinfoPage.prototype.Skip = function () {
        this.navCtrl.navigateForward('postmyfood');
    };
    ChefinfoPage.prototype.Next = function () {
        this.navCtrl.navigateForward('postmyfood');
    };
    ChefinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chefinfo',
            template: __webpack_require__(/*! ./chefinfo.page.html */ "./src/app/chefinfo/chefinfo.page.html"),
            styles: [__webpack_require__(/*! ./chefinfo.page.scss */ "./src/app/chefinfo/chefinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], ChefinfoPage);
    return ChefinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=chefinfo-chefinfo-module.js.map