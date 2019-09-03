(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["searchmain-searchmain-module"],{

/***/ "./src/app/searchmain/searchmain.module.ts":
/*!*************************************************!*\
  !*** ./src/app/searchmain/searchmain.module.ts ***!
  \*************************************************/
/*! exports provided: SearchmainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchmainPageModule", function() { return SearchmainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _searchmain_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./searchmain.page */ "./src/app/searchmain/searchmain.page.ts");







var routes = [
    {
        path: '',
        component: _searchmain_page__WEBPACK_IMPORTED_MODULE_6__["SearchmainPage"]
    }
];
var SearchmainPageModule = /** @class */ (function () {
    function SearchmainPageModule() {
    }
    SearchmainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_searchmain_page__WEBPACK_IMPORTED_MODULE_6__["SearchmainPage"]]
        })
    ], SearchmainPageModule);
    return SearchmainPageModule;
}());



/***/ }),

/***/ "./src/app/searchmain/searchmain.page.html":
/*!*************************************************!*\
  !*** ./src/app/searchmain/searchmain.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-title>\n\n      <!-- Searchbar with cancel button shown on focus -->\n<ion-searchbar showCancelButton=\"focus\" placeholder=\"Search for food or chefs nearby\"></ion-searchbar>\n\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<p>\nGoogle Map with nearby chefs to be implemeneted here\n</p>\n<p>\nPop up a modal of nearest cooks\n</p>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-title>\n      <ion-button expand=\"full\" shape=\"round\" fill=\"outline\">Show Nearby Cooks</ion-button>\n     \n    </ion-title>\n \n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/searchmain/searchmain.page.scss":
/*!*************************************************!*\
  !*** ./src/app/searchmain/searchmain.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaG1haW4vc2VhcmNobWFpbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/searchmain/searchmain.page.ts":
/*!***********************************************!*\
  !*** ./src/app/searchmain/searchmain.page.ts ***!
  \***********************************************/
/*! exports provided: SearchmainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchmainPage", function() { return SearchmainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchmainPage = /** @class */ (function () {
    function SearchmainPage() {
    }
    SearchmainPage.prototype.ngOnInit = function () {
    };
    SearchmainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchmain',
            template: __webpack_require__(/*! ./searchmain.page.html */ "./src/app/searchmain/searchmain.page.html"),
            styles: [__webpack_require__(/*! ./searchmain.page.scss */ "./src/app/searchmain/searchmain.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchmainPage);
    return SearchmainPage;
}());



/***/ })

}]);
//# sourceMappingURL=searchmain-searchmain-module.js.map