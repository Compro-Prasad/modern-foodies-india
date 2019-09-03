(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chef-chef-module"],{

/***/ "./src/app/chef/chef.module.ts":
/*!*************************************!*\
  !*** ./src/app/chef/chef.module.ts ***!
  \*************************************/
/*! exports provided: ChefPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefPageModule", function() { return ChefPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chef_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chef.page */ "./src/app/chef/chef.page.ts");







var routes = [
    {
        path: '',
        component: _chef_page__WEBPACK_IMPORTED_MODULE_6__["ChefPage"]
    }
];
var ChefPageModule = /** @class */ (function () {
    function ChefPageModule() {
    }
    ChefPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chef_page__WEBPACK_IMPORTED_MODULE_6__["ChefPage"]]
        })
    ], ChefPageModule);
    return ChefPageModule;
}());



/***/ }),

/***/ "./src/app/chef/chef.page.html":
/*!*************************************!*\
  !*** ./src/app/chef/chef.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n<!-- Searchbar with cancel button always shown -->\n<ion-searchbar  showCancelButton=\"always\" placeholder=\"Search location\"  style=\"padding: 20px;\"><ion-icon name=\"locate\" style=\"margin: 20px; width: 40px; height: 40px;\"></ion-icon></ion-searchbar>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/chef/chef.page.scss":
/*!*************************************!*\
  !*** ./src/app/chef/chef.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWYvY2hlZi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/chef/chef.page.ts":
/*!***********************************!*\
  !*** ./src/app/chef/chef.page.ts ***!
  \***********************************/
/*! exports provided: ChefPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChefPage", function() { return ChefPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChefPage = /** @class */ (function () {
    function ChefPage() {
    }
    ChefPage.prototype.ngOnInit = function () {
    };
    ChefPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chef',
            template: __webpack_require__(/*! ./chef.page.html */ "./src/app/chef/chef.page.html"),
            styles: [__webpack_require__(/*! ./chef.page.scss */ "./src/app/chef/chef.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChefPage);
    return ChefPage;
}());



/***/ })

}]);
//# sourceMappingURL=chef-chef-module.js.map