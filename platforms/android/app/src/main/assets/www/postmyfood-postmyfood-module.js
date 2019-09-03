(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postmyfood-postmyfood-module"],{

/***/ "./src/app/postmyfood/postmyfood.module.ts":
/*!*************************************************!*\
  !*** ./src/app/postmyfood/postmyfood.module.ts ***!
  \*************************************************/
/*! exports provided: PostmyfoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostmyfoodPageModule", function() { return PostmyfoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _postmyfood_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postmyfood.page */ "./src/app/postmyfood/postmyfood.page.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");









var routes = [
    {
        path: '',
        component: _postmyfood_page__WEBPACK_IMPORTED_MODULE_6__["PostmyfoodPage"]
    }
];
var PostmyfoodPageModule = /** @class */ (function () {
    function PostmyfoodPageModule() {
    }
    PostmyfoodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"]
            ],
            declarations: [_postmyfood_page__WEBPACK_IMPORTED_MODULE_6__["PostmyfoodPage"]]
        })
    ], PostmyfoodPageModule);
    return PostmyfoodPageModule;
}());



/***/ }),

/***/ "./src/app/postmyfood/postmyfood.page.html":
/*!*************************************************!*\
  !*** ./src/app/postmyfood/postmyfood.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"mobile-tab\">\n\n      <ion-tabs>\n          <ion-tab-bar slot=\"bottom\">\n            <ion-tab-button tab=\"schedule\">\n              <ion-icon name=\"home\"></ion-icon>\n              <ion-label>Home</ion-label>\n              <ion-badge>{{dishlen}}</ion-badge>\n            </ion-tab-button>\n\n            <ion-tab-button *ngIf=\"loginStatus == false\" (click)=\"goHome()\" tab=\"speakers\">\n                <ion-icon name=\"log-in\"></ion-icon>\n                <ion-label>Login</ion-label>\n              </ion-tab-button>\n\n            <ion-tab-button (click)=\"showsearch()\" *ngIf=\"loginStatus == true\" tab=\"speakers\">\n              <ion-icon name=\"search\"></ion-icon>\n              <ion-label>Search</ion-label>\n            </ion-tab-button>\n      \n        \n      \n            <ion-tab-button *ngIf=\"loginStatus == true\" (click)=\"profilePage()\" tab=\"about\">\n              <ion-icon name=\"person\"></ion-icon>\n              <ion-label>Profile</ion-label>\n            </ion-tab-button>\n\n          </ion-tab-bar>\n        </ion-tabs>\n      \n\n  </div>\n<!-- <ion-header class=\"home-mw\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <div style=\"margin: 20px;\" >FoodAli</div>\n\n      </ion-col>\n      <ion-col>\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n          </ion-buttons>\n          <ion-title>\n            <ion-item (click)=\"openModal()\">\n              <ion-label>\n                <ion-icon style=\"width: 30px;\" class=\"icon\" name=\"locate\"></ion-icon>\n                <span style=\"font-size: 10px;\" class=\"address\">Diva Gaon, Airoli </span>\n                <p style=\"font-size: 10px;\" *ngIf=\"dataReturned\">{{dataReturned}}</p>\n              </ion-label>\n            </ion-item>\n          </ion-title>\n        </ion-toolbar>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-header>\n\n<ion-content class=\"home-mw\">\n\n  <ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"schedule\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n        <ion-badge>6</ion-badge>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"speakers\">\n        <ion-icon name=\"search\"></ion-icon>\n        <ion-label>Search</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"map\">\n        <ion-icon name=\"restaurant\"></ion-icon>\n        <ion-label>Chef</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button (click)=\"profilePage()\" tab=\"about\">\n        <ion-icon name=\"person\"></ion-icon>\n        <ion-label>Profile</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n\n\n</ion-content> -->\n\n<div class=\"home-dw\"\n  style=\"position: fixed; z-index: -111000; top:0; left:0; width:100%; height:100%; overflow-y: scroll; overflow-x: hidden; background-image: url('http://www.cleo-uk.org/wp-content/uploads/2016/03/white-curves-on-grey-background-bright-abstract-wallpaper.jpg')\">\n\n  <div class=\"search-component\"\n    style=\" position: fixed; display: none; z-index: 1000001; top:0; left:0; width:100%; height:100%; \">\n    <div style=\"text-align: center; width: 100%; height: 100%; background:rgba(250,250,250,0.9);\">\n\n      <div class=\"main-search\">\n        <!-- Searchbar with a cancel button and custom cancel button text -->\n        <div style=\"width: 100%; margin: 10px;\">\n          <ion-icon style=\"width: 40px; cursor:pointer;\" (click)=\"hideSearch()\" name=\"close-circle-outline\"></ion-icon>\n        </div>\n\n        <div class=\"search-logo\" >FoodAli<span\n            style=\"font-size: 10px;\">search</span></div>\n        <ion-searchbar #q [value]=\"selectedDish\" placeholder=\"Search for food...\" showCancelButton=\"focus\"\n          (ionCancel)=\"onCancel($event)\" cancelButtonText=\"Custom Cancel\" (keyup.enter)=\"search(q.value)\">\n        </ion-searchbar>\n\n      </div>\n    </div>\n  </div>\n\n  <!-- <ion-header>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-text style=\"float: left;\">\n              <h1>Foodali</h1>\n            </ion-text>\n            <ion-toolbar style=\"float: left; width:50%;\">\n  \n  \n  \n              <ion-title>\n                <ion-label>\n                  <span class=\"address\">Diva Gaon, Airoli </span> &nbsp;\n                  <ion-icon class=\"icon\" name=\"locate\"></ion-icon>\n                </ion-label>\n  \n              </ion-title>\n            </ion-toolbar>\n          </ion-col>\n  \n  \n          <ion-col style=\" position: relative;\">\n            <div\n              style=\"width: 100%; padding:0; line-height:0;  position: absolute; top: 50%;  transform: translateY(-50%);\">\n  \n              <ion-searchbar style=\"width: 70%; float:left;\" placeholder=\"Search for cooks or dishes\" animated>\n              </ion-searchbar>\n  \n  \n              <ion-button style=\"float: left;\">\n                <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n                Log in\n  \n              </ion-button>\n  \n              <div style=\"clear: both;\"></div>\n  \n            </div>\n          </ion-col>\n        </ion-row>\n  \n      </ion-grid>\n  \n    </ion-header> -->\n\n  <div class=\"list-x\"\n    style=\"width:100%; height: 90px; position: fixed; top:0; left:0;  z-index: 1000000; transform: translateY(-100px);\">\n    <div class=\"flex-container\" style=\"box-shadow: 0 5px 5px -6px rgba(0,0,0,0.5);\">\n\n      <div class=\"left-flex\">\n        <span [routerLink]=\"['/postmyfood']\" routerDirection=\"forward\"  > Food<span style=\"color: green; \">Ali</span></span>\n        <span style=\"font-size: 15px; cursor: pointer; float:right;\"><u>{{loc}}</u>\n          <ion-icon class=\"locate-icon\" class=\"icon\" (click)=\"getLoc()\" name=\"locate\"></ion-icon></span>\n      </div>\n      <div class=\"right-flex\" style=\"text-align: left; font-size: 25px; position: relative;\">\n        <div\n          style=\"width: 100%; padding:0; line-height:0; padding-right:20px;  position: absolute; top: 50%;  transform: translateY(-50%);\">\n          <div *ngIf=\"loginStatus == false\">\n            <ion-button (click)=\"goHome()\" style=\"float: right;\">\n              <ion-icon slot=\"start\" name=\"log-in\"></ion-icon>\n              Log in\n\n            </ion-button>\n          </div>\n          <div *ngIf=\"loginStatus == true\">\n            <ion-icon (click)=\"openProfile()\" class=\"icon\" style=\"float: right; margin-top:5px; cursor: pointer; \"\n              name=\"contact\"></ion-icon>\n\n            <ion-icon (click)=\"showsearch()\" style=\"float: right; margin-top:5px; cursor: pointer;\" class=\"icon\"\n              name=\"search\"></ion-icon>\n\n            <div style=\"clear: both;\"></div>\n          </div>\n        </div>\n\n\n      </div>\n\n    </div>\n\n\n  </div>\n\n\n\n  <!-- my foating component  -->\n  <div class=\"custom-wrapper\">\n\n    <div class=\"custom-component\" *ngFor=\"let d of dish\">\n      <ion-card style=\"background: #fff; \">\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\n\n        <ion-card-header>\n\n          <img src=\"https://www.mylands.com/media/wysiwyg/Colour_Palettes/Mylands_Grey_Palette_Main_Image_.jpg\" />\n\n          <img class=\"veg\" style=\"width: 20px !important; margin: 10px; float: right; display: none;\"\n            src=\"https://cdn.iconscout.com/icon/premium/png-512-thumb/vegetarian-3-565377.png\" />\n\n          <img class=\"nonveg\" style=\"width: 20px !important; margin: 10px; float: right; display: none;\"\n            src=\"https://www.trzcacak.rs/file/max/53/538140_non-veg-png.png\" />\n\n\n          <!-- <ion-card-subtitle>Cuisine type</ion-card-subtitle> -->\n          <ion-card-subtitle>{{d.cuisine}}</ion-card-subtitle>\n          <ion-card-title>{{d.dishName}}</ion-card-title>\n          <ion-card-subtitle>{{d.foodDescription}}</ion-card-subtitle>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n\n\n          <ion-badge color=\"success\">\n            <ion-icon name=\"star\"></ion-icon> 5.0\n          </ion-badge>\n          <ion-badge style=\"margin-left:10px \" color=\"primary\">\n            <ion-icon name=\"bicycle\"></ion-icon>\n\n            <span *ngIf=\"d.delivery == 0\">\n              <span>Pick-up only</span>\n            </span>\n            <span *ngIf=\"d.delivery == 1\">\n              <span>Delivery</span>\n            </span>\n          </ion-badge><br />\n          <b> {{d.noOfServings}} servings</b>\n          <br />\n          <b>Address</b> : {{d.address}}\n\n        </ion-card-content>\n        <ion-footer>\n          <ion-toolbar>\n\n            <ion-grid>\n              <ion-row>\n\n                <ion-col style=\"text-align: center;\">\n                  <!-- <ion-icon name=\"share\"></ion-icon> -->\n                  <iframe\n                    src=\"https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&appId=484770218980582&width=59&height=20\"\n                    width=\"59\" height=\"20\" style=\"border:none;overflow:hidden\" scrolling=\"no\" frameborder=\"0\"\n                    allowTransparency=\"true\" allow=\"encrypted-media\"></iframe>\n                </ion-col>\n\n                <ion-col (click)=\"goFoodInfo(d.id)\" style=\"text-align: center; cursor: pointer\">\n\n                  <ion-icon name=\"eye\"></ion-icon>\n\n                </ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n\n\n\n          </ion-toolbar>\n        </ion-footer>\n      </ion-card>\n    </div>\n  </div>\n  <br />\n\n  <!-- mat grid responsiveness ref : https://stackoverflow.com/a/48499719 -->\n  <!-- <mat-grid-list style=\"margin: 120px 120px 0px 120px;\" rowHeight=\"1:2\" [cols]=\"breakpoint\"  (window:resize)=\"onResize($event)\">\n\n    <mat-grid-tile *ngFor=\"let d of dish\" >\n\n      <ion-card style=\"background: #fff; \">\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n\n\n        <ion-card-header>\n\n          <img src=\"https://www.mylands.com/media/wysiwyg/Colour_Palettes/Mylands_Grey_Palette_Main_Image_.jpg\" />\n\n          <img class=\"veg\" style=\"width: 20px !important; margin: 10px; float: right; display: none;\"\n            src=\"https://cdn.iconscout.com/icon/premium/png-512-thumb/vegetarian-3-565377.png\" />\n\n          <img class=\"nonveg\" style=\"width: 20px !important; margin: 10px; float: right; display: none;\"\n            src=\"https://www.trzcacak.rs/file/max/53/538140_non-veg-png.png\" />\n\n\n          <ion-card-subtitle>{{d.cuisine}}</ion-card-subtitle>\n          <ion-card-title>{{d.dishName}}</ion-card-title>\n          <ion-card-subtitle>{{d.foodDescription}}</ion-card-subtitle>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n\n\n          <ion-badge color=\"success\">\n            <ion-icon name=\"star\"></ion-icon> 5.0\n          </ion-badge>\n          <ion-badge style=\"margin-left:10px \" color=\"primary\">\n            <ion-icon name=\"bicycle\"></ion-icon>{{d.delivery}}\n          </ion-badge><br />\n          <b> {{d.noOfServings}} number of servings</b>\n          <br />\n          {{d.address}}\n       \n        </ion-card-content>\n        <ion-footer>\n            <ion-toolbar>\n\n              <ion-grid>\n                <ion-row>\n\n                  <ion-col style=\"text-align: center;\">\n                    <ion-icon name=\"share\"></ion-icon>\n                  </ion-col>\n\n                  <ion-col (click)=\"goFoodInfo(d.id)\" style=\"text-align: center; cursor: pointer\">\n\n                    <ion-icon name=\"eye\"></ion-icon>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </ion-grid>\n\n\n\n\n            </ion-toolbar>\n          </ion-footer>\n      </ion-card>\n\n    </mat-grid-tile>\n\n\n    \n  </mat-grid-list> -->\n\n  <div *ngIf=\"dishlen > 9\" style=\"width: 100%; text-align:center; margin: 10px;\">\n    <ion-button color=\"dark\" style=\"display: inline-block\">\n      <ion-icon name=\"refresh\"></ion-icon> &nbsp; Load more\n    </ion-button>\n  </div>\n\n  <!-- <ion-grid>\n\n    <ion-row style=\"margin: 20px;\">\n\n      <ion-col size=\"3\">\n        <div class=\"menu\" style=\"transform: translateX(-100px); position: fixed; top:110px; left:40px; width:300px; height:100%; \">\n          <ion-card>\n            <ion-item color=\"primary\" href=\"#!\" class=\"activated\">\n              <ion-icon name=\"flame\" slot=\"start\"></ion-icon>\n              <ion-label>Popular</ion-label>\n            </ion-item> \n\n\n            <ion-item href=\"#!\">\n              <ion-icon name=\"heart-half\" slot=\"start\"></ion-icon>\n              <ion-label>Your Favorites</ion-label>\n            </ion-item>\n\n            <ion-item href=\"#!\">\n              <ion-icon name=\"pie\" slot=\"start\"></ion-icon>\n              <ion-label>Vegetarian</ion-label>\n            </ion-item>\n\n            <ion-item href=\"#!\" class=\"activated\">\n              <ion-icon name=\"pizza\" slot=\"start\"></ion-icon>\n              <ion-label>Cuisine</ion-label>\n            </ion-item>\n\n            <ion-item href=\"#!\">\n              <ion-icon name=\"more\" slot=\"start\"></ion-icon>\n              <ion-label>More Resturants</ion-label>\n            </ion-item>\n            \n          </ion-card>\n          <ion-card>\n              <ion-item color=\"dark\" href=\"#!\" class=\"activated\"  [routerLink]=\"['/foodposter']\" routerDirection=\"forward\"> \n                <ion-icon name=\"flash\" slot=\"start\"></ion-icon>\n                <ion-label>Post my food</ion-label>\n              </ion-item>\n  \n              \n            </ion-card>\n        </div>\n    \n      </ion-col>\n      <ion-col style=\"margin-top:60px; transform: translateY(100px);\" class=\"list-x\">\n        <ion-card> \n          <ion-header style=\"text-align: center\">\n            <ion-toolbar>\n              <ion-title><b>Popular</b></ion-title>\n            </ion-toolbar>\n\n          </ion-header>\n\n          <ion-card-content>\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col>\n                  <ion-card style=\"background: #fff; \">\n                    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    \n    \n                    <ion-card-header>\n    \n                      <img\n                        src=\"https://www.mylands.com/media/wysiwyg/Colour_Palettes/Mylands_Grey_Palette_Main_Image_.jpg\" />\n    \n                      <img class=\"veg\" style=\"width: 20px !important; margin: 10px; float: right; display: none;\"\n                        src=\"https://cdn.iconscout.com/icon/premium/png-512-thumb/vegetarian-3-565377.png\" />\n    \n                        <img class=\"nonveg\" style=\"width: 20px !important; margin: 10px; float: right; display: none;\"\n                        src=\"https://www.trzcacak.rs/file/max/53/538140_non-veg-png.png\" />\n                        \n    \n                      <ion-card-subtitle>Cuisine type</ion-card-subtitle>\n                      <ion-card-subtitle>Cuisinename</ion-card-subtitle>\n                      <ion-card-title>Foodname</ion-card-title>\n                      <ion-card-subtitle>Fooddesc</ion-card-subtitle>\n    \n                    </ion-card-header>\n    \n                    <ion-card-content>\n    \n    \n    \n                      <ion-badge color=\"success\">\n                        <ion-icon name=\"star\"></ion-icon> 5.0\n                      </ion-badge>\n                      <ion-badge style=\"margin-left:10px \" color=\"primary\">\n                        <ion-icon name=\"bicycle\"></ion-icon> deliverytype\n                      </ion-badge><br />\n                      <b> servings number of servings</b>\n                      <br />\n    wlocation\n    \n                    </ion-card-content>\n                    <ion-footer>\n                      <ion-toolbar>\n    \n                        <ion-grid>\n                          <ion-row>\n    \n                            <ion-col style=\"text-align: center;\">\n                              <ion-icon name=\"share\"></ion-icon>\n                            </ion-col>\n    \n                            <ion-col (click)=\"goFoodInfo()\" style=\"text-align: center; cursor: pointer\">\n    \n                              <ion-icon name=\"eye\"></ion-icon>\n    \n                            </ion-col>\n    \n                          </ion-row>\n    \n                        </ion-grid>\n    \n    \n    \n    \n                      </ion-toolbar>\n                    </ion-footer>\n                  </ion-card>\n    \n                </ion-col>\n         \n                <ion-col>\n                    <ion-card style=\"background: #fff; \">\n                      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n      \n      \n                      <ion-card-header>\n      \n                        <img\n                          src=\"https://www.mylands.com/media/wysiwyg/Colour_Palettes/Mylands_Grey_Palette_Main_Image_.jpg\" />\n      \n                        <img class=\"veg\" style=\"width: 20px !important; margin: 10px; float: right; display: none;\"\n                          src=\"https://cdn.iconscout.com/icon/premium/png-512-thumb/vegetarian-3-565377.png\" />\n      \n                          <img class=\"nonveg\" style=\"width: 20px !important; margin: 10px; float: right; display: none;\"\n                          src=\"https://www.trzcacak.rs/file/max/53/538140_non-veg-png.png\" />\n                          \n      \n                        <ion-card-subtitle>Cuisine type</ion-card-subtitle>\n                        <ion-card-subtitle>Cuisinename</ion-card-subtitle>\n                        <ion-card-title>Foodname</ion-card-title>\n                        <ion-card-subtitle>Fooddesc</ion-card-subtitle>\n      \n                      </ion-card-header>\n      \n                      <ion-card-content>\n      \n      \n      \n                        <ion-badge color=\"success\">\n                          <ion-icon name=\"star\"></ion-icon> 5.0\n                        </ion-badge>\n                        <ion-badge style=\"margin-left:10px \" color=\"primary\">\n                          <ion-icon name=\"bicycle\"></ion-icon> deliverytype\n                        </ion-badge><br />\n                        <b> servings number of servings</b>\n                        <br />\n      wlocation\n      \n                      </ion-card-content>\n                      <ion-footer>\n                        <ion-toolbar>\n      \n                          <ion-grid>\n                            <ion-row>\n      \n                              <ion-col style=\"text-align: center;\">\n                                <ion-icon name=\"share\"></ion-icon>\n                              </ion-col>\n      \n                              <ion-col (click)=\"goFoodInfo()\" style=\"text-align: center; cursor: pointer\">\n      \n                                <ion-icon name=\"eye\"></ion-icon>\n      \n                              </ion-col>\n      \n                            </ion-row>\n      \n                          </ion-grid>\n      \n      \n      \n      \n                        </ion-toolbar>\n                      </ion-footer>\n                    </ion-card>\n      \n                  </ion-col>\n              </ion-row>\n\n            </ion-grid>\n\n\n\n          </ion-card-content>\n        </ion-card>\n     \n      </ion-col>\n\n    </ion-row>\n\n\n  </ion-grid> -->\n\n  <div class=\"footer\" >\n      <div class=\"flex-container\">\n        \n        <div class=\"foo\">\n          <br/>\n           <ion-text class=\"fooh\">\n               <h3>About Foodali</h3>\n             </ion-text>\n             <p class=\"listing-foo\">About us</p>\n             <p class=\"listing-foo\">Team</p>\n             <p class=\"listing-foo\">Careers</p>\n             <p class=\"listing-foo\">Offers</p>\n             <p class=\"listing-foo\">Contact</p>\n        </div>\n        <div  class=\"foo\">\n           <br/>\n           <ion-text class=\"fooh\" >\n               <h3>Get Help</h3>\n             </ion-text>\n             <p class=\"listing-foo\">Help and support</p>\n             <p class=\"listing-foo\">Partner with us</p>\n             <p class=\"listing-foo\">Ride with us</p>\n             <p class=\"listing-foo\">Blog</p>\n        </div>\n        <div class=\"foo\" id=\"footer-end\">\n           <br/>\n           <ion-text class=\"fooh\">\n               <h3>Get FoodAli in your phone</h3>\n             </ion-text>\n             <div class=\"download-wrapper\">\n             <img class=\"download\" style=\"margin-top: 10px; float: left;\" width=\"150px;\" src=\"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp\"/>\n            \n             <img class=\"download\" style=\"margin-top: 10px; float: left;\" width=\"150px;\" src=\"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty\"/>\n    </div>\n        </div>\n\n        </div>\n        </div>\n        <ion-footer style=\" text-align:center\">\n           <ion-toolbar>\n             <ion-title>Copyright 2019, Foodali inc.\n             </ion-title>\n           </ion-toolbar>\n         </ion-footer>\n</div>"

/***/ }),

/***/ "./src/app/postmyfood/postmyfood.page.scss":
/*!*************************************************!*\
  !*** ./src/app/postmyfood/postmyfood.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-dw {\n  background: #fff; }\n\nmat-grid-list {\n  background: lightblue; }\n\n/* Custom Skeleton Line Height and Margin */\n\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px; }\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px; }\n\n@media only screen and (max-width: 900px) {\n  .mobile-tab {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    height: 60px;\n    width: 100%;\n    background: goldenrod;\n    z-index: 5000000; }\n  .right-flex {\n    display: none; }\n  .left-flex {\n    width: 100%;\n    text-align: left;\n    font-size: 25px;\n    padding: 40px;\n    background: #fff; }\n  .custom-component {\n    display: inline-block;\n    width: 100%;\n    height: 400px;\n    margin: 10px; }\n  .custom-wrapper {\n    margin: 120px 10px 0px 10px;\n    text-align: center; }\n  .f2 {\n    text-align: center; }\n  .fh {\n    text-align: center; }\n  .f {\n    width: 50%;\n    float: left; }\n  .foo {\n    text-align: center; }\n  .fooh {\n    text-align: center; }\n  .footer {\n    width: 100%;\n    padding-bottom: 80px;\n    background: #382809;\n    color: honeydew; }\n  .download {\n    width: 50%; }\n  .download-wrapper {\n    padding: 50px; }\n  .main-search {\n    width: 80%;\n    height: 50%;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    display: inline-block; }\n  .search-logo {\n    font-size: 25px;\n    width: 100%;\n    text-align: center;\n    margin: 10px;\n    color: #000; } }\n\n@media only screen and (min-width: 900px) {\n  .search-logo {\n    font-size: 25px;\n    width: 100%;\n    text-align: center;\n    margin: 10px;\n    color: #fff; }\n  .main-search {\n    width: 50%;\n    position: relative;\n    top: 50%;\n    transform: translateY(-50%);\n    background: goldenrod;\n    border-radius: 10px;\n    display: inline-block; }\n  .mobile-tab {\n    display: none; }\n  .custom-component {\n    display: inline-block;\n    width: 30%;\n    height: 400px;\n    margin: 10px; }\n  .custom-wrapper {\n    margin: 120px 120px 0px 120px;\n    text-align: center; }\n  .left-flex {\n    text-align: left;\n    font-size: 25px;\n    padding: 10px;\n    background: #fff; }\n  .fooh {\n    text-align: left; }\n  .footer {\n    width: 100%;\n    padding-bottom: 40px;\n    background: #382809;\n    color: honeydew; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jhamtpc2hvci9EZXNrdG9wL2Zvb2RhbGkvbW9kZXJuLWZvb2RpZXMtaW5kaWEvc3JjL2FwcC9wb3N0bXlmb29kL3Bvc3RteWZvb2QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UscUJBQXFCLEVBQUE7O0FBU3ZCLDJDQUFBOztBQUNBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0U7SUFDRSxlQUFlO0lBQ2QsU0FBUTtJQUFFLE9BQU07SUFBRSxZQUFXO0lBQzdCLFdBQVc7SUFDWixxQkFBcUI7SUFDckIsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxhQUFhLEVBQUE7RUFFZjtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsYUFBYTtJQUNiLFlBQVksRUFBQTtFQUVkO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQixFQUFBO0VBSXBCO0lBQ0Usa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxrQkFBa0IsRUFBQTtFQUVwQjtJQUNFLFVBQVU7SUFDVixXQUFXLEVBQUE7RUFLYjtJQUNFLGtCQUFrQixFQUFBO0VBRXBCO0lBQ0Usa0JBQWtCLEVBQUE7RUFFcEI7SUFDRSxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLG1CQUEwQjtJQUMxQixlQUFlLEVBQUE7RUFFakI7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLGFBQWEsRUFBQTtFQUVmO0lBQ0UsVUFBUztJQUFFLFdBQVc7SUFBRyxrQkFBa0I7SUFBSSxRQUFRO0lBQThFLDJCQUEyQjtJQUFJLHFCQUFvQixFQUFBO0VBRTFMO0lBQ0UsZUFBZTtJQUFFLFdBQVU7SUFBRSxrQkFBaUI7SUFBRSxZQUFXO0lBQUUsV0FBVyxFQUFBLEVBQ3pFOztBQUVIO0VBQ0U7SUFDRSxlQUFlO0lBQUUsV0FBVTtJQUFFLGtCQUFpQjtJQUFFLFlBQVc7SUFBRSxXQUFXLEVBQUE7RUFFMUU7SUFDRSxVQUFTO0lBQUcsa0JBQWtCO0lBQUksUUFBUTtJQUE4RSwyQkFBMkI7SUFBRSxxQkFBb0I7SUFBRSxtQkFBbUI7SUFBRyxxQkFBb0IsRUFBQTtFQUV2TjtJQUFZLGFBQWEsRUFBQTtFQUN6QjtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsYUFBYTtJQUNiLFlBQVksRUFBQTtFQUVkO0lBQ0UsNkJBQTZCO0lBQzdCLGtCQUFrQixFQUFBO0VBRXBCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCLEVBQUE7RUFFbEI7SUFDRSxnQkFBZ0IsRUFBQTtFQUVsQjtJQUNFLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsbUJBQTBCO0lBQzFCLGVBQWUsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RteWZvb2QvcG9zdG15Zm9vZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1kdyB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbm1hdC1ncmlkLWxpc3Qge1xuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG5cbiAgLy8gIHBhZGRpbmctYm90dG9tOiAgY2FsYygoKDIgKiAoKDQyJSAtIDAuNXB4KSAqIDEpKSArIDBweCkgKyAxcHgpICFpbXBvcnRhbnQ7IC8vZGVmYXVsdCBpcyA1MCUsIDQyJSBpcyBjdXN0b21lZFxufVxuLnNjLWlvbi1jYXJkLW1kLWgge1xuICAvL21ha2UgaW9uLWNhcmQgY29tcGF0aWJsZSB3aXRoaW4gbWF0LWdyaWQtdGlsZVxuICAvLyB3aWR0aDogY2FsYygxMDAlIC0gMTIwcHgpO1xuICAvLyBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwcHgpO1xufVxuLyogQ3VzdG9tIFNrZWxldG9uIExpbmUgSGVpZ2h0IGFuZCBNYXJnaW4gKi9cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQge1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cblxuLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5tb2JpbGUtdGFie1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgYm90dG9tOjA7IGxlZnQ6MDsgaGVpZ2h0OjYwcHg7XG4gICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGdvbGRlbnJvZDtcbiAgICB6LWluZGV4OiA1MDAwMDAwO1xuICB9XG4gIC5yaWdodC1mbGV4IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5sZWZ0LWZsZXgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgfVxuICAuY3VzdG9tLWNvbXBvbmVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIC5jdXN0b20td3JhcHBlciB7XG4gICAgbWFyZ2luOiAxMjBweCAxMHB4IDBweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gXG4gIC5mMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5maCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5mIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgI2Zvb3Rlci1lbmQge1xuICB9XG4gIC5mb28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZm9vaCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYig1NiwgNDAsIDkpO1xuICAgIGNvbG9yOiBob25leWRldztcbiAgfVxuICAuZG93bmxvYWR7XG4gICAgd2lkdGg6IDUwJTtcbiAgfVxuICAuZG93bmxvYWQtd3JhcHBlcntcbiAgICBwYWRkaW5nOiA1MHB4O1xuICB9XG4gIC5tYWluLXNlYXJjaHtcbiAgICB3aWR0aDo4MCU7IGhlaWdodDogNTAlOyAgcG9zaXRpb246IHJlbGF0aXZlOyAgIHRvcDogNTAlOyAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7ICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICB9XG4gIC5zZWFyY2gtbG9nb3tcbiAgICBmb250LXNpemU6IDI1cHg7IHdpZHRoOjEwMCU7IHRleHQtYWxpZ246Y2VudGVyOyBtYXJnaW46MTBweDsgY29sb3I6ICMwMDA7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLnNlYXJjaC1sb2dve1xuICAgIGZvbnQtc2l6ZTogMjVweDsgd2lkdGg6MTAwJTsgdGV4dC1hbGlnbjpjZW50ZXI7IG1hcmdpbjoxMHB4OyBjb2xvcjogI2ZmZjtcbiAgfVxuICAubWFpbi1zZWFyY2h7XG4gICAgd2lkdGg6NTAlOyAgcG9zaXRpb246IHJlbGF0aXZlOyAgIHRvcDogNTAlOyAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7ICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyBiYWNrZ3JvdW5kOmdvbGRlbnJvZDsgYm9yZGVyLXJhZGl1czogMTBweDsgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICB9XG4gIC5tb2JpbGUtdGFie2Rpc3BsYXk6IG5vbmU7fVxuICAuY3VzdG9tLWNvbXBvbmVudCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gIH1cbiAgLmN1c3RvbS13cmFwcGVyIHtcbiAgICBtYXJnaW46IDEyMHB4IDEyMHB4IDBweCAxMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmxlZnQtZmxleCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB9XG4gIC5mb29oIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIC5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYig1NiwgNDAsIDkpO1xuICAgIGNvbG9yOiBob25leWRldztcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/postmyfood/postmyfood.page.ts":
/*!***********************************************!*\
  !*** ./src/app/postmyfood/postmyfood.page.ts ***!
  \***********************************************/
/*! exports provided: PostmyfoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostmyfoodPage", function() { return PostmyfoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.page */ "./src/app/modal/modal.page.ts");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _shared_dish_dish_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/dish/dish.service */ "./shared/dish/dish.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/user/user.service */ "./shared/user/user.service.ts");
/* harmony import */ var _shared_Session_session_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/Session/session.service */ "./shared/Session/session.service.ts");













var PostmyfoodPage = /** @class */ (function () {
    function PostmyfoodPage(toastController, router, dishService, modalController, navCtrl, actionSheetController, userService, sessionService) {
        this.toastController = toastController;
        this.router = router;
        this.dishService = dishService;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.userService = userService;
        this.sessionService = sessionService;
        this.ngVersion = _angular_core__WEBPACK_IMPORTED_MODULE_1__["VERSION"].full;
        this.matVersion = '5.1.0';
    }
    PostmyfoodPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.data = {
                'heading': 'Normal text',
                'para1': 'Lorem ipsum dolor sit amet, consectetur',
                'para2': 'adipiscing elit.'
            };
        }, 5000);
        Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
            targets: '.menu',
            translateX: 0
        });
        Object(animejs__WEBPACK_IMPORTED_MODULE_4__["default"])({
            targets: '.list-x',
            translateY: 0
        });
    };
    PostmyfoodPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'You current location is updating...',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostmyfoodPage.prototype.openModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _modal_modal_page__WEBPACK_IMPORTED_MODULE_3__["ModalPage"],
                            componentProps: {
                                "paramID": 5050,
                                "paramTitle": "Update Location"
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (dataReturned) {
                            if (dataReturned !== null) {
                                _this.dataReturned = dataReturned.data;
                                //alert('Modal Sent Data :'+ dataReturned);
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PostmyfoodPage.prototype.ngOnInit = function () {
        var _this = this;
        this.loginStatus = false;
        this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
        this.dishService.GetAllDishes().subscribe(function (response) {
            console.log(response);
            _this.dish = response;
            _this.dishlen = _this.dish.length;
        }, function (err) { return console.log(err); });
        //set user session location in the search field on the load of app 
        var ses_lc = getCookie("foodali_address");
        console.log("Session location is " + ses_lc);
        if (ses_lc != null) {
            var str = ses_lc;
            this.loc = str.substring(0, 20) + "...";
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
        var user = getCookie("foodali_access_token");
        console.log(user + " <<< session access token ");
        if (user != "") {
            this.sessionService.GetSessionAccess(user).subscribe(function (response) {
                console.log("session response from server : " + response);
                if (response != null) {
                    _this.loginStatus = true;
                }
                else {
                    _this.loginStatus = false;
                    //delete cookies in the broweser if session is not found in server for the particular access token 
                    document.cookie = 'foodali_access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    document.cookie = 'foodali_request_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                    //  document.cookie = 'foodali_address=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                }
            }, function (err) { return console.log(err); });
            // this.navCtrl.navigateForward("postmyfood");
        }
    };
    PostmyfoodPage.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
    };
    PostmyfoodPage.prototype.profilePage = function () {
        this.navCtrl.navigateForward('profile');
    };
    PostmyfoodPage.prototype.cookPage = function () {
        this.navCtrl.navigateForward('foodinfo');
    };
    PostmyfoodPage.prototype.search = function (q) {
        console.log("searched value is " + q);
        this.router.navigate(['/search', { svalue: q }]);
    };
    PostmyfoodPage.prototype.getLoc = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (loc) {
            _this.userService.GetMapData(loc.coords.latitude, loc.coords.longitude).subscribe(function (response) {
                var txt = JSON.stringify(response);
                var obj = JSON.parse(txt);
                var formatted_address = obj.results[0].formatted_address;
                console.log(formatted_address);
                setCookie("foodali_address", formatted_address, "1"); // expires in 1 day
                _this.loc = formatted_address.substring(0, 20) + "...";
                _this.presentToast();
            }, function (err) { return console.log(err); });
            console.log("this loc :" + _this.loc);
            var d = new Date();
        });
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString;
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
    };
    PostmyfoodPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Filter Options',
                            buttons: [{
                                    text: 'Popular',
                                    role: 'destructive',
                                    icon: 'trash',
                                    handler: function () {
                                        console.log('Delete clicked');
                                    }
                                }, {
                                    text: 'Your favourites',
                                    icon: 'share',
                                    handler: function () {
                                        console.log('Share clicked');
                                    }
                                }, {
                                    text: 'Vegetarian cooks',
                                    icon: 'arrow-dropright-circle',
                                    handler: function () {
                                        console.log('Play clicked');
                                    }
                                }, {
                                    text: 'Cuisines',
                                    icon: 'heart',
                                    handler: function () {
                                        console.log('Favorite clicked');
                                    }
                                }, {
                                    text: 'All cooks near me',
                                    icon: 'heart',
                                    handler: function () {
                                        console.log('Favorite clicked');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PostmyfoodPage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    PostmyfoodPage.prototype.goFoodInfo = function (id) {
        console.log(id);
        this.router.navigate(['/foodinfo', { did: id }]);
    };
    PostmyfoodPage.prototype.showsearch = function () {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()(".search-component").fadeIn(200);
    };
    PostmyfoodPage.prototype.hideSearch = function () {
        jquery__WEBPACK_IMPORTED_MODULE_7___default()(".search-component").fadeOut(200);
    };
    PostmyfoodPage.prototype.onCancel = function (event) {
        console.log('CANCEL', event);
        jquery__WEBPACK_IMPORTED_MODULE_7___default()(".search-component").fadeOut(200);
    };
    PostmyfoodPage.prototype.openProfile = function () {
        this.navCtrl.navigateForward("profile");
    };
    PostmyfoodPage.prototype.goHome = function () {
        this.navCtrl.navigateForward("home");
    };
    PostmyfoodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postmyfood',
            template: __webpack_require__(/*! ./postmyfood.page.html */ "./src/app/postmyfood/postmyfood.page.html"),
            styles: [__webpack_require__(/*! ./postmyfood.page.scss */ "./src/app/postmyfood/postmyfood.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _shared_dish_dish_service__WEBPACK_IMPORTED_MODULE_5__["DishService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _shared_Session_session_service__WEBPACK_IMPORTED_MODULE_9__["SessionService"]])
    ], PostmyfoodPage);
    return PostmyfoodPage;
}());



/***/ })

}]);
//# sourceMappingURL=postmyfood-postmyfood-module.js.map