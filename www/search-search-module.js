(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_5__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.html":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <div style=\"font-size: 25px; width:100%; text-align:center; margin:10px;\">FoodAli<span style=\"font-size: 10px;\">search</span></div>\n      <!-- Searchbar with a cancel button and custom cancel button text -->\n      <ion-searchbar  #q value=\"{{searchedFor}}\" placeholder=\"Search for food\" (ionCancel)=\"onCancel($event)\" showCancelButton=\"focus\" cancelButtonText=\"Custom Cancel\" (keyup.enter)=\"search(q.value)\"></ion-searchbar>\n<!--   \n      <ion-searchbar   [value]=\"selectedDish\" placeholder=\"Search for food...\" showCancelButton=\"focus\" (ionCancel)=\"onCancel($event)\"  cancelButtonText=\"Custom Cancel\"   \"></ion-searchbar> -->\n\n      <br/>  \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row style=\"margin: 0px 100px 100px 100px\">\n        <ion-col size=\"3\">\n            <ion-card style=\"background: #fff\">\n \n  <ion-col size=\"3\">\n      <div class=\"menu\" >\n       \n          <ion-item color=\"primary\" href=\"#!\" class=\"activated\">\n            <ion-icon name=\"flame\" slot=\"start\"></ion-icon>\n            <ion-label>Popular</ion-label>\n          </ion-item> \n\n\n          <ion-item href=\"#!\">\n            <ion-icon name=\"heart-half\" slot=\"start\"></ion-icon>\n            <ion-label>Your Favorites</ion-label>\n          </ion-item>\n\n          <ion-item href=\"#!\">\n            <ion-icon name=\"pie\" slot=\"start\"></ion-icon>\n            <ion-label>Vegetarian</ion-label>\n          </ion-item>\n\n          <ion-item href=\"#!\" class=\"activated\">\n              <ion-icon name=\"restaurant\" slot=\"start\"></ion-icon>\n            <ion-label>Cuisine</ion-label>\n          </ion-item>\n\n          <ion-item href=\"#!\">\n            <ion-icon name=\"more\" slot=\"start\"></ion-icon>\n            <ion-label>More Options</ion-label>\n          </ion-item>\n          \n\n      </div>\n  \n    </ion-col>\n              </ion-card>\n        </ion-col>\n        <ion-col>\n            <ion-card style=\"background: #fff\">\n     \n              \n                <ion-card-content>\n              \n                    <ion-list>\n         \n                        <ion-item-sliding *ngFor=\"let d of dish\">\n    \n                            <div *ngIf=\"d.publishStatus == true\">\n                            <ion-item>\n                              <ion-thumbnail slot=\"start\">\n                                <img style=\"width: 200px;\"\n                                  src=\"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/huevos-rancheros.jpg\" />\n                              </ion-thumbnail>\n                              \n                              <ion-label>{{d.dishName}}</ion-label><br />\n              \n                            </ion-item>\n                            <div style=\"margin: 10px 90px 10px 90px\">\n                              <ion-badge color=\"primary\">{{d.cuisine}}</ion-badge> <br />\n                              <ion-icon name=\"star\"></ion-icon> 5.0\n                              &nbsp; <br />\n              \n              \n                              <b>{{d.noOfServings}} servings </b> &nbsp; <br />\n                              {{d.foodDescription}}\n                              <hr/>\n                              <b>Address : </b>\n                              {{d.address}}\n                            </div>\n                            <ion-item side=\"end\">\n                              <ion-item slot=\"end\">\n                        \n                                  <ion-button color=\"dark\" (click)=\"goFoodInfo(d.id)\">View</ion-button>\n                            \n              \n              \n                              </ion-item>\n                            </ion-item>\n                            </div>\n                          </ion-item-sliding>\n              \n        \n                      </ion-list>\n                 \n                  \n                </ion-card-content>\n              </ion-card>\n        </ion-col>\n      </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/user/user.service */ "./shared/user/user.service.ts");
/* harmony import */ var _shared_dish_dish_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/dish/dish.service */ "./shared/dish/dish.service.ts");
/* harmony import */ var _shared_trans_trans_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/trans/trans.service */ "./shared/trans/trans.service.ts");
/* harmony import */ var _shared_Session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/Session/session.service */ "./shared/Session/session.service.ts");








var SearchPage = /** @class */ (function () {
    function SearchPage(router, dishService, activatedRoute, userService, transService, sessionService) {
        this.router = router;
        this.dishService = dishService;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.transService = transService;
        this.sessionService = sessionService;
    }
    SearchPage.prototype.ngOnInit = function () {
        var _this = this;
        var val = this.activatedRoute.snapshot.paramMap.get('svalue');
        console.log("Searched for " + val);
        this.searchedFor = val;
        this.isit = 0;
        this.count = 0;
        this.k = -1;
        var user = getCookie("foodali_access_token");
        console.log(user + " <<< session access token ");
        if (user != "") {
            this.sessionService.GetSessionAccess(user).subscribe(function (response) {
                _this.userid = response[0].userId;
                console.log("Session id : customer " + response[0].userId);
                _this.dishService.GetDishId(_this.activatedRoute.snapshot.paramMap.get('did')).subscribe(function (response) {
                    //this.dish = response;
                    console.log("Dishes info below");
                    console.log(response.uId);
                    _this.cookid = response.uId;
                    _this.userService.GetUserById(_this.cookid).subscribe(function (response) {
                        console.log(response);
                        _this.cookPhone = response.phoneNo;
                        _this.cookName = response.cookName;
                        _this.cookCuisine = response.cuisines;
                        _this.cookVeg = response.isVeg;
                    }, function (err) {
                        console.log(err);
                    });
                    _this.dishService.GetAllDishesId(response.uId).subscribe(function (response) {
                        _this.dish = response;
                        console.log(response);
                        console.log("dishes  " + _this.dish.length);
                        for (var i = 0; i < _this.dish.length; i++) {
                            console.log("----------------------------");
                            console.log("dish id > " + _this.dish[i].id);
                            console.log("cook id > " + _this.cookid);
                            console.log("user id > " + _this.userid);
                            _this.transService.GetTrans(_this.userid, _this.cookid, _this.dish[i].id).subscribe(function (response) {
                                _this.k += 1;
                                console.log("transaction call " + _this.k + " -> " + response);
                                if (response == "null") {
                                    _this.r = false;
                                }
                                else {
                                    _this.r = true;
                                }
                                _this.dish[_this.k].request = _this.r;
                                //for (var j = 0; j < this.dish.length; j++){
                                console.log("this.dish[" + _this.k + "].request  " + _this.dish[_this.k].request);
                                _this.r = false;
                                //}
                            }, function (err) {
                                console.log(err);
                            });
                        }
                        _this.k = -1;
                    });
                });
            }, function (err) { return console.log(err); });
            // this.navCtrl.navigateForward("postmyfood");
            console.log("use id is " + this.userid);
        }
        //set user session location in the search field on the load of app 
        var ses_lc = getCookie("foodali_address");
        console.log("Session location is " + ses_lc);
        if (ses_lc != null) {
            var str = ses_lc;
            this.loc = str.substring(0, 20) + "...";
            this.fullloc = str;
        }
        else {
            console.log("Session location is not found");
        }
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        this.dishService.GetAllDishesBySearch(this.searchedFor).subscribe(function (response) {
            console.log(response);
            _this.dish = response;
        }, function (err) { return console.log(err); });
    };
    SearchPage.prototype.goFoodInfo = function (id) {
        console.log(id);
        this.router.navigate(['/foodinfo', { did: id }]);
    };
    SearchPage.prototype.onCancel = function (event) {
        this.router.navigate(["/postmyfood"]);
    };
    SearchPage.prototype.search = function (q) {
        console.log("searched value is " + q);
        this.router.navigate(['/search', { svalue: q }]);
    };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.page.html */ "./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_dish_dish_service__WEBPACK_IMPORTED_MODULE_4__["DishService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _shared_trans_trans_service__WEBPACK_IMPORTED_MODULE_5__["TransService"], _shared_Session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module.js.map