(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["options-options-module"],{

/***/ "./src/app/options/options.module.ts":
/*!*******************************************!*\
  !*** ./src/app/options/options.module.ts ***!
  \*******************************************/
/*! exports provided: OptionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPageModule", function() { return OptionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _options_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./options.page */ "./src/app/options/options.page.ts");







var routes = [
    {
        path: '',
        component: _options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]
    }
];
var OptionsPageModule = /** @class */ (function () {
    function OptionsPageModule() {
    }
    OptionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_options_page__WEBPACK_IMPORTED_MODULE_6__["OptionsPage"]]
        })
    ], OptionsPageModule);
    return OptionsPageModule;
}());



/***/ }),

/***/ "./src/app/options/options.page.html":
/*!*******************************************!*\
  !*** ./src/app/options/options.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>postmyfood</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n  \n  </ion-content>\n  <ion-card class=\"context\">\n   \n    \n      <ion-card-content class=\"context-body\">\n       \n    <ion-button expand=\"block\">POST MY FOOD</ion-button>\n    <br/>\n    <ion-button expand=\"block\">I AM HUNGRY</ion-button>\n      </ion-card-content>\n    \n  \n    </ion-card>\n    "

/***/ }),

/***/ "./src/app/options/options.page.scss":
/*!*******************************************!*\
  !*** ./src/app/options/options.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/options/options.page.ts":
/*!*****************************************!*\
  !*** ./src/app/options/options.page.ts ***!
  \*****************************************/
/*! exports provided: OptionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsPage", function() { return OptionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionsPage = /** @class */ (function () {
    function OptionsPage() {
    }
    OptionsPage.prototype.ngOnInit = function () {
    };
    OptionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! ./options.page.html */ "./src/app/options/options.page.html"),
            styles: [__webpack_require__(/*! ./options.page.scss */ "./src/app/options/options.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptionsPage);
    return OptionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=options-options-module.js.map