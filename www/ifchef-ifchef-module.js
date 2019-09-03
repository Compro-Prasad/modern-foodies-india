(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ifchef-ifchef-module"],{

/***/ "./src/app/ifchef/ifchef.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ifchef/ifchef.module.ts ***!
  \*****************************************/
/*! exports provided: IfchefPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfchefPageModule", function() { return IfchefPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ifchef_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ifchef.page */ "./src/app/ifchef/ifchef.page.ts");







var routes = [
    {
        path: '',
        component: _ifchef_page__WEBPACK_IMPORTED_MODULE_6__["IfchefPage"]
    }
];
var IfchefPageModule = /** @class */ (function () {
    function IfchefPageModule() {
    }
    IfchefPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ifchef_page__WEBPACK_IMPORTED_MODULE_6__["IfchefPage"]]
        })
    ], IfchefPageModule);
    return IfchefPageModule;
}());



/***/ }),

/***/ "./src/app/ifchef/ifchef.page.html":
/*!*****************************************!*\
  !*** ./src/app/ifchef/ifchef.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card class=\"context\">\n    <ion-card-header class=\"context-header\">\n      <ion-card-title>Foodali</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content class=\"context-body\">\n      \n<ion-button (click)=\"moreInfo()\" color=\"dark\">Do you cook?</ion-button>\n    </ion-card-content>\n  <ion-button (click)=\"Home()\" expand=\"block\">SKIP</ion-button>\n  \n\n  </ion-card>\n  "

/***/ }),

/***/ "./src/app/ifchef/ifchef.page.scss":
/*!*****************************************!*\
  !*** ./src/app/ifchef/ifchef.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lmY2hlZi9pZmNoZWYucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ifchef/ifchef.page.ts":
/*!***************************************!*\
  !*** ./src/app/ifchef/ifchef.page.ts ***!
  \***************************************/
/*! exports provided: IfchefPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IfchefPage", function() { return IfchefPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var IfchefPage = /** @class */ (function () {
    function IfchefPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    IfchefPage.prototype.ngOnInit = function () {
    };
    IfchefPage.prototype.moreInfo = function () {
        this.navCtrl.navigateForward('chefinfo');
    };
    IfchefPage.prototype.Home = function () {
        this.navCtrl.navigateForward('postmyfood');
    };
    IfchefPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ifchef',
            template: __webpack_require__(/*! ./ifchef.page.html */ "./src/app/ifchef/ifchef.page.html"),
            styles: [__webpack_require__(/*! ./ifchef.page.scss */ "./src/app/ifchef/ifchef.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], IfchefPage);
    return IfchefPage;
}());



/***/ })

}]);
//# sourceMappingURL=ifchef-ifchef-module.js.map