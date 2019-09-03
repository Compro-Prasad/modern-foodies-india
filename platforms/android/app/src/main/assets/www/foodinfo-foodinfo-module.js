(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodinfo-foodinfo-module"],{

/***/ "./src/app/foodinfo/foodinfo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/foodinfo/foodinfo.module.ts ***!
  \*********************************************/
/*! exports provided: FoodinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodinfoPageModule", function() { return FoodinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodinfo_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foodinfo.page */ "./src/app/foodinfo/foodinfo.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var routes = [
    {
        path: '',
        component: _foodinfo_page__WEBPACK_IMPORTED_MODULE_5__["FoodinfoPage"]
    }
];
var FoodinfoPageModule = /** @class */ (function () {
    function FoodinfoPageModule() {
    }
    FoodinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            declarations: [_foodinfo_page__WEBPACK_IMPORTED_MODULE_5__["FoodinfoPage"]]
        })
    ], FoodinfoPageModule);
    return FoodinfoPageModule;
}());



/***/ }),

/***/ "./src/app/foodinfo/foodinfo.page.html":
/*!*********************************************!*\
  !*** ./src/app/foodinfo/foodinfo.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header class=\"home-mw\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"postmyfood\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Food Ali</ion-title>\n\n  </ion-toolbar>\n  <ion-icon style=\"float: right;\" name=\"more\"></ion-icon>\n</ion-header>\n\n<ion-content class=\"home-mw\">\n\n  <img width=\"100%\" src=\"https://punampaul.com/wp-content/uploads/2019/02/Gulab-Jamun.jpg\" />\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>by Chef Raj kishor</ion-card-subtitle>\n      <ion-card-title>One Plate Gulab-Jamun</ion-card-title>\n      <h2>Rs. 160</h2>\n    </ion-card-header>\n\n    <ion-card-content>\n      Keep close to Nature's heart... and break clear away, once in awhile,\n      and climb a mountain or spend a week in the woods. Wash your spirit clean.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      <ion-label>Sai Riddhi Apartment, Sector 9, Airoli, Navi Mumbai</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n    </ion-item>\n\n    <ion-card-content>\n      Landmark : Vittal Mandir\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n\n\n    <ion-item href=\"#\">\n      <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n      <ion-label>Cook's Menu</ion-label>\n    </ion-item>\n\n    <ion-item class=\"activated\">\n      <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n      <ion-label>Cook's Profile</ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n      <ion-label>Order Type : <b>Pick-up Only</b></ion-label>\n    </ion-item>\n  </ion-card>\n</ion-content>\n<ion-footer class=\"home-mw\">\n  <ion-toolbar>\n    <ion-title>\n      <ion-button expand=\"full\">Request</ion-button>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n -->\n\n\n\n\n<div class=\"home-dw\"\n  style=\"position: fixed; z-index: -111000; top:0; left:0; width:100%; height:100%; overflow-y: scroll; background: #333;\">\n\n  <div class=\"search-component\" style=\"position: fixed; display: none; z-index: 1000001; top:0; left:0; width:100%; height:100%; \">\n      <div style=\"text-align: center; width: 100%; height: 100%; background:rgba(250,250,250,0.9);\">\n           \n      <div style=\"width:50%;  position: relative;   top: 50%;   -webkit-transform: translateY(-50%);   -ms-transform: translateY(-50%);   transform: translateY(-50%); background:goldenrod; border-radius: 10px;  display:inline-block;\">\n      <!-- Searchbar with a cancel button and custom cancel button text -->\n      \n      <div style=\"font-size: 25px; width:100%; text-align:center; margin:10px; color: #fff;\">FoodAli<span style=\"font-size: 10px;\">search</span></div>\n      <ion-searchbar  #q  [value]=\"selectedDish\" placeholder=\"Search for food...\" showCancelButton=\"focus\" (ionCancel)=\"onCancel($event)\"  cancelButtonText=\"Custom Cancel\"   (keyup.enter)=\"search(q.value)\"></ion-searchbar>\n      \n      </div>\n      </div>\n        </div>\n  <!-- <ion-header>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-text style=\"float: left;\">\n            <h1>Foodali</h1>\n          </ion-text>\n          <ion-toolbar style=\"float: left; width:50%;\">\n            <ion-title>\n              <ion-label>\n                <span class=\"address\">Diva Gaon, Airoli </span> &nbsp;\n                <ion-icon class=\"icon\" name=\"locate\"></ion-icon>\n              </ion-label>\n\n            </ion-title>\n          </ion-toolbar>\n        </ion-col>\n\n\n        <ion-col style=\" position: relative;\">\n          <div\n            style=\"width: 100%; padding:0; line-height:0;  position: absolute; top: 50%;  transform: translateY(-50%);\">\n\n            <ion-searchbar style=\"width: 70%; float:left;\" placeholder=\"Search for cooks or dishes\" animated>\n            </ion-searchbar>\n\n\n            <ion-button style=\"float: left;\">\n              <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n              Log in\n\n            </ion-button>\n\n            <div style=\"clear: both;\"></div>\n\n          </div>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-header> -->\n\n  <div class=\"flex-container\" style=\"box-shadow: 0 5px 5px -6px rgba(0,0,0,0.5);\">\n\n    <div style=\"text-align: left; font-size: 25px; padding: 10px; background: #fff;\">\n      &nbsp; &nbsp; Food<span style=\"color: green; \">Ali</span>\n      &nbsp; &nbsp; &nbsp; &nbsp; <span style=\"font-size: 15px; cursor: pointer;\"><u>{{loc}}</u>&nbsp; &nbsp;\n        <ion-icon class=\"icon\" name=\"locate\"></ion-icon></span>\n    </div>\n    <div style=\"text-align: left; font-size: 25px; position: relative;\">\n      <div\n        style=\"width: 100%; padding:0; line-height:0; padding-right:20px;  position: absolute; top: 50%;  transform: translateY(-50%);\">\n        <!-- \n          <ion-button style=\"float: right;\">\n            <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n            Log in\n\n          </ion-button> -->\n          <ion-icon (click)=\"openProfile()\" class=\"icon\" style=\"float: right; margin-top:5px; cursor: pointer; \" name=\"contact\"></ion-icon>\n\n          <ion-icon (click)=\"showsearch()\" style=\"float: right; margin-top:5px; cursor: pointer;\" class=\"icon\" name=\"search\"></ion-icon>\n     \n        <div style=\"clear: both;\"></div>\n      </div>\n\n\n    </div>\n\n  </div>\n\n  <ion-row style=\"margin: 100px;\">\n    <ion-col size=\"3\">\n      <ion-card style=\"background: #fff\">\n        <ion-card-header>\n          <!-- <img src=\"https://thetoptenchefs.com/wp/wp-content/uploads/2016/03/Sanjeev-Kapoor-226x300.jpg\"/>\n              -->\n          <img\n            src=\"https://media.gowallpaper.co.uk/media/catalog/product/r/a/rasch_geo_square_grey_silver_metallic_glitter_wallpaper_-_310238.jpg\" />\n          <ion-card-title>{{cookName}}</ion-card-title>\n          <ion-card-subtitle>Cuisine type : {{cookCuisine}}</ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content>\n\n\n          <ion-icon name=\"star\"></ion-icon> --\n          &nbsp;\n\n          <ion-icon name=\"time\"></ion-icon> --\n\n          <br />\n          <b>\n            <div *ngIf=\"cookVeg==false\">\n                Cook is a <span style=\"color:tomato;  \">*Non-Veg</span>\n            </div>\n            <div *ngIf=\"cookVeg==true\">\n                Cook is a <span style=\"color:green\">*Veg</span>\n                            </div>\n  \n\n          </b> \n\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col>\n      <ion-card style=\"background: #fff\">\n        <ion-header>\n          <ion-toolbar>\n            <ion-buttons slot=\"secondary\">\n\n              <mat-form-field>\n                <mat-label>Cuisines</mat-label>\n                <mat-select [formControl]=\"toppings\" multiple>\n                  <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n                </mat-select>\n              </mat-form-field>\n\n\n\n            </ion-buttons>\n            <ion-title>Menu card</ion-title>\n\n            <ion-buttons slot=\"primary\">\n              &nbsp;\n              &nbsp;\n              <b>Veg</b>\n              <ion-toggle color=\"dark\"></ion-toggle>\n            </ion-buttons>\n\n\n\n\n          </ion-toolbar>\n        </ion-header>\n\n        <ion-card-content>\n\n          <ion-list>\n\n            <ion-item-sliding *ngFor=\"let d of dish\">\n    \n              <div *ngIf=\"d.publishStatus == true\">\n              <ion-item>\n                <ion-thumbnail slot=\"start\">\n                  <img style=\"width: 200px;\"\n                    src=\"https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/huevos-rancheros.jpg\" />\n                </ion-thumbnail>\n                \n                <ion-label>{{d.dishName}}</ion-label><br />\n\n              </ion-item>\n              <div style=\"margin: 10px 90px 10px 90px\">\n                <ion-badge color=\"primary\">{{d.cuisine}}</ion-badge> <br />\n                <ion-icon name=\"star\"></ion-icon> 5.0\n                &nbsp; <br />\n\n\n                <b>{{d.noOfServings}} servings </b> &nbsp; <br />\n                {{d.foodDescription}}\n                <hr/>\n                {{d.address}}\n              </div>\n              <ion-item side=\"end\">\n         <iframe src=\"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&appId=484770218980582&width=59&height=20\" width=\"59\" height=\"20\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\" allowTransparency=\"true\" allow=\"encrypted-media\"></iframe> \n         \n                <ion-item slot=\"end\">\n                 \n                  <div *ngIf=\"d.request == true\">\n                    <ion-button id=\"u{{d.id}}\" color=\"dark\" (click)=\"cancle(d.id)\">\n                      CANCEL REQUEST</ion-button>\n                    <ion-button id=\"p{{d.id}}\"  color=\"dark\" (click)=\"request(d.id)\" style=\"display: none\">REQUEST\n                    </ion-button>\n                  </div>\n                  <div *ngIf=\"d.request == false\">\n                    <ion-button  id=\"u{{d.id}}\" color=\"dark\" (click)=\"cancle(d.id)\"\n                      style=\"display: none\">CANCLE REQUEST</ion-button>\n\n                    <ion-button id=\"p{{d.id}}\" color=\"dark\" (click)=\"request(d.id)\">REQUEST</ion-button>\n                  </div> \n\n\n                </ion-item>\n              </ion-item>\n              </div>\n            </ion-item-sliding>\n\n\n\n          </ion-list>\n\n\n        </ion-card-content>\n        <ion-footer>\n          <ion-toolbar>\n            <ion-title style=\"cursor: pointer\" slot=\"end\">\n              <img src=\"http://business-review.eu/wp-content/uploads/2018/02/250px-GoogleMaps.svg_.png\"\n                style=\"width: 40px; float: right;\" />\n\n            </ion-title>\n            <div style=\"margin: 30px;\">\n              <p>\n                <b>Current Address:</b><br /> {{fullloc}}\n              </p>\n              <p>\n                <b>Phone:</b><br />+91 + {{cookPhone}}\n              </p>\n            </div>\n\n\n          </ion-toolbar>\n        </ion-footer>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n\n  <div style=\"width: 100%; height:450px; background: rgb(56, 40, 9); color: honeydew\">\n    <div class=\"flex-container\">\n\n      <div class=\"foo\">\n        <br />\n        <ion-text style=\"text-align: left\">\n          <h3>About Foodali</h3>\n        </ion-text>\n        <p class=\"listing-foo\">About us</p>\n        <p class=\"listing-foo\">Team</p>\n        <p class=\"listing-foo\">Careers</p>\n        <p class=\"listing-foo\">Offers</p>\n        <p class=\"listing-foo\">Contact</p>\n      </div>\n      <div class=\"foo\">\n        <br />\n        <ion-text style=\"text-align: left\">\n          <h3>Get Help</h3>\n        </ion-text>\n        <p class=\"listing-foo\">Help and support</p>\n        <p class=\"listing-foo\">Partner with us</p>\n        <p class=\"listing-foo\">Ride with us</p>\n        <p class=\"listing-foo\">Blog</p>\n      </div>\n      <div class=\"foo\">\n        <br />\n        <ion-text style=\"text-align: left\">\n          <h3>Get FoodAli in your phone</h3>\n        </ion-text>\n        <img style=\"margin-top: 10px; float:left; margin-right: 10px;\" width=\"150px;\"\n          src=\"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp\" />\n\n        <img style=\"margin-top: 10px; float:left; \" width=\"150px;\"\n          src=\"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty\" />\n\n      </div>\n\n    </div>\n  </div>\n  <ion-footer style=\"background: rgb(20, 20, 20); text-align:center\">\n    <ion-toolbar>\n      <ion-title>Copyright 2019, Foodali inc.\n      </ion-title>\n    </ion-toolbar>\n  </ion-footer>\n\n</div>"

/***/ }),

/***/ "./src/app/foodinfo/foodinfo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/foodinfo/foodinfo.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RpbmZvL2Zvb2RpbmZvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/foodinfo/foodinfo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/foodinfo/foodinfo.page.ts ***!
  \*******************************************/
/*! exports provided: FoodinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodinfoPage", function() { return FoodinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_Session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/Session/session.service */ "./shared/Session/session.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/user/user.service */ "./shared/user/user.service.ts");
/* harmony import */ var _shared_dish_dish_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/dish/dish.service */ "./shared/dish/dish.service.ts");
/* harmony import */ var _shared_trans_trans_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/trans/trans.service */ "./shared/trans/trans.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");














var FoodinfoPage = /** @class */ (function () {
    function FoodinfoPage(router, navCtrl, userService, http, activatedRoute, dishService, transService, sessionService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.dishService = dishService;
        this.transService = transService;
        this.sessionService = sessionService;
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.toppingList = ['American', 'British', 'Caribbean', 'Chinese', 'French', 'Greek', 'Indian', 'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Moroccan', 'Spanish', 'Thai', 'Turkish', 'Vietnamese'];
    }
    FoodinfoPage.prototype.ngOnInit = function () {
        var _this = this;
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
    };
    FoodinfoPage.prototype.search = function (q) {
        console.log("searched value is " + q);
        this.router.navigate(['/search', { svalue: q }]);
    };
    FoodinfoPage.prototype.request = function (id) {
        var _this = this;
        var data = { "cookId": this.cookid, "dishId": id, "userId": this.userid };
        this.transService.CreateTrans(data).subscribe(function (response) {
            console.log(response);
            jquery__WEBPACK_IMPORTED_MODULE_11__("#p" + id).fadeOut(1);
            jquery__WEBPACK_IMPORTED_MODULE_11__("#u" + id).fadeIn(1);
        }, function (err) {
            console.log(err);
            jquery__WEBPACK_IMPORTED_MODULE_11__("#p" + id).fadeOut(1);
            jquery__WEBPACK_IMPORTED_MODULE_11__("#u" + id).fadeIn(1);
        });
        this.userService.GetUserById(this.cookid).subscribe(function (response) {
            console.log(response);
            var cookNo = response.phoneNo;
            // console.log("Cook no"+ cookNo);
            _this.sendUserMsg("Hi, Someone has requested you to prepare food. Please visit Foodali to prceed the order. Dish link : http:108.179.222.240:8100/foodinfo;did=" + id, cookNo);
        }, function (err) {
            console.log(err);
        });
        this.userService.GetUserById(this.userid).subscribe(function (response) {
            console.log(response);
            var userNo = response.phoneNo;
            // console.log("User no"+ userNo);
            _this.sendUserMsg("Hi, You request has been successfully sent to the Cook. The cook will be in contact with you soon. Dish link : http:108.179.222.240:8100/foodinfo;did=" + id, userNo);
        }, function (err) {
            console.log(err);
        });
    };
    FoodinfoPage.prototype.cancle = function (id) {
        var data = { "cookId": this.cookid, "dishId": id, "userId": this.userid };
        this.transService.DeleteTrans(this.userid, this.cookid, id).subscribe(function (response) {
            console.log(response);
            jquery__WEBPACK_IMPORTED_MODULE_11__("#p" + id).fadeIn(1);
            jquery__WEBPACK_IMPORTED_MODULE_11__("#u" + id).fadeOut(1);
        }, function (err) {
            console.log(err);
            jquery__WEBPACK_IMPORTED_MODULE_11__("#p" + id).fadeIn(1);
            jquery__WEBPACK_IMPORTED_MODULE_11__("#u" + id).fadeOut(1);
        });
    };
    FoodinfoPage.prototype.checkExist = function (did) {
        var _this = this;
        if (this.isit == 0) {
            this.count = this.count + 1;
            console.log("check Exist call : " + this.count);
            console.log("uid " + this.userid + "\n did " + did + "\n cid " + this.cookid);
            this.transService.GetTrans(this.userid, did, this.cookid).subscribe(function (response) {
                _this.chIf = response;
                console.log("chIf = " + _this.chIf);
            }, function (err) {
                console.log(err);
            });
            this.isit += 1;
        }
        return this.chIf;
    };
    FoodinfoPage.prototype.sendCookMsg = function (cook_msg, cook_no) {
        this.cookAPI(cook_msg, cook_no).subscribe(function (response) {
            console.log(response);
        }, function (err) { return console.log(err); });
    };
    FoodinfoPage.prototype.sendUserMsg = function (user_msg, user_no) {
        this.userAPI(user_msg, user_no).subscribe(function (response) {
            console.log(response);
        }, function (err) { return console.log(err); });
    };
    // SEND OTP
    FoodinfoPage.prototype.userAPI = function (user_msg, user_no) {
        return this.http.get('http://nimbusit.co.in/api/swsendSingle.asp?username=t1Foodali&password=26537993&sender=666666&sendto=91' + user_no + '&message=' + user_msg)
            .pipe(
        // retry(1),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(this.errorHandl));
    };
    FoodinfoPage.prototype.cookAPI = function (cook_msg, cook_no) {
        return this.http.get('http://nimbusit.co.in/api/swsendSingle.asp?username=t1Foodali&password=26537993&sender=666666&sendto=91' + cook_no + '&message=' + cook_msg)
            .pipe(
        // retry(1),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(this.errorHandl));
    };
    // Error handling
    FoodinfoPage.prototype.errorHandl = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(errorMessage);
    };
    FoodinfoPage.prototype.showsearch = function () {
        jquery__WEBPACK_IMPORTED_MODULE_11__(".search-component").fadeIn(200);
    };
    FoodinfoPage.prototype.onCancel = function (event) {
        console.log('CANCEL', event);
        jquery__WEBPACK_IMPORTED_MODULE_11__(".search-component").fadeOut(200);
    };
    FoodinfoPage.prototype.openProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    FoodinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foodinfo',
            template: __webpack_require__(/*! ./foodinfo.page.html */ "./src/app/foodinfo/foodinfo.page.html"),
            styles: [__webpack_require__(/*! ./foodinfo.page.scss */ "./src/app/foodinfo/foodinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["NavController"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_dish_dish_service__WEBPACK_IMPORTED_MODULE_7__["DishService"], _shared_trans_trans_service__WEBPACK_IMPORTED_MODULE_8__["TransService"], _shared_Session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
    ], FoodinfoPage);
    return FoodinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=foodinfo-foodinfo-module.js.map