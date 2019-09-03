(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["afterlogin-afterlogin-module"],{

/***/ "./src/app/afterlogin/afterlogin.module.ts":
/*!*************************************************!*\
  !*** ./src/app/afterlogin/afterlogin.module.ts ***!
  \*************************************************/
/*! exports provided: AfterloginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterloginPageModule", function() { return AfterloginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _afterlogin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./afterlogin.page */ "./src/app/afterlogin/afterlogin.page.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var routes = [
    {
        path: '',
        component: _afterlogin_page__WEBPACK_IMPORTED_MODULE_6__["AfterloginPage"]
    }
];
var AfterloginPageModule = /** @class */ (function () {
    function AfterloginPageModule() {
    }
    AfterloginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"]
            ],
            declarations: [_afterlogin_page__WEBPACK_IMPORTED_MODULE_6__["AfterloginPage"]]
        })
    ], AfterloginPageModule);
    return AfterloginPageModule;
}());



/***/ }),

/***/ "./src/app/afterlogin/afterlogin.page.html":
/*!*************************************************!*\
  !*** ./src/app/afterlogin/afterlogin.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-dw\">\n  <div\n    style=\"position: absolute; top: 0; left: 0; width: 100% ; height:100%; background:goldenrod; overflow-y: scroll; \">\n    <div class=\"flex-container\">\n      <div style=\"background: goldenrod;\">\n        <img class=\"ell\" style=\"transform: translateX(-200px); height: 100%; \"\n          src=\"http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Chef-Vector-PNG-Transparent-Image-500x736.png\" />\n      </div>\n      <div style=\"background: goldenrod; text-align: center; padding-right:2%; \">\n      \n        <ion-card id=\"cardotp\" style=\"display: none; background: #fff; width: 100%; height: 100%;  \">\n          <ion-card-header>\n            <ion-card-title>FOODALI - OTP Verification is awaiting</ion-card-title>\n            <hr />\n            <ion-card-subtitle><b>Please type the OTP that is sent to your mobile number.</b></ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            \n              <!-- <mat-form-field   class=\"example-full-width\">\n                  <input [(ngModel)]=\"enteredOtp\" matInput placeholder=\"Type 4 digit OTP here\">\n       \n                </mat-form-field>\n                <ion-button (submit)=\"onSubmit()\" color=\"primary\">\n                    Submit OTP\n                  </ion-button> -->\n\n                  <input placeholder=\"Place your OTP here\" #box (keyup.enter)=\"onEnter(box.value)\">\n                  <ion-card-subtitle><b>*Your OTP is valid for 1 minute. For another OTP, refresh the page.</b></ion-card-subtitle>\n    \n          </ion-card-content>\n        </ion-card>\n        <ion-card id=\"card0\" style=\"display: none; background: #fff; width: 100%; height: 100%;  \">\n          <ion-card-header>\n            <ion-card-title>FOODALI CHEF's DASHBOARD</ion-card-title>\n            <hr />\n            <ion-card-subtitle><b>Choose one of the options below?</b></ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-button (click)=\"chefpanel()\" color=\"primary\">\n              Post my food\n            </ion-button>\n            <ion-button color=\"dark\" (click)=\"skip()\">\n              I am hungry\n              <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n        <ion-card id=\"card1\" style=\"background: #fff; width: 100%; height: 100%;  display: none;\">\n          <ion-card-header>\n            <ion-card-title>FOODALI CHEF's DASHBOARD</ion-card-title>\n            <hr />\n            <ion-card-subtitle><b>Do you cook?</b></ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-button (click)=\"moreinfo()\" color=\"primary\">\n              YES\n            </ion-button>\n            <ion-button color=\"dark\" (click)=\"skip()\">\n              SKIP\n              <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n        <ion-card id=\"card2\" style=\"background: #fff; width: 100%; height:100%;  display: none;\">\n          <ion-card-header>\n            <ion-card-title>FOODALI CHEF's DASHBOARD</ion-card-title>\n            <hr />\n          </ion-card-header>\n          <ion-card-content>\n            <ion-card>\n              <ion-card-header>\n                <ion-card-subtitle>Woh! Let's begin</ion-card-subtitle>\n              </ion-card-header>\n\n              <ion-card-content>\n               <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\n                  {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\n                </button>\n                <!-- stepper reference \n                https://stackblitz.com/edit/angular-vufhvk?file=app%2Fstepper-overview-example.html -->\n                <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\n                  <mat-step [stepControl]=\"firstFormGroup\">\n                    <form [formGroup]=\"firstFormGroup\" (ngSubmit)=\"form1()\" #formone=\"ngForm\">\n                      <ng-template matStepLabel>Fill out your name below</ng-template>\n                    \n                        <mat-form-field class=\"example-full-width\">\n                          <input matInput placeholder=\"Your name\" formControlName=\"firstCtrl\" required>\n                        </mat-form-field>\n\n                      <div>\n                        <button mat-button matStepperNext>Next</button>\n                        <!-- <button type=\"submit\" mat-button >submit</button> -->\n                      </div>\n                    </form>\n                  </mat-step>\n                  <mat-step [stepControl]=\"secondFormGroup\">\n                    <form [formGroup]=\"secondFormGroup\" (ngSubmit)=\"form2()\" #formone=\"ngForm\">\n                      <ng-template matStepLabel>Are you a veg?</ng-template><br/>\n                     \n                      <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\" #foo=\"matButtonToggleGroup\" formControlName=\"secondCtrl\" required>\n                        <mat-button-toggle value=\"yes\">Yes</mat-button-toggle>\n                        <mat-button-toggle value=\"no\">No</mat-button-toggle>\n                      </mat-button-toggle-group>\n                     \n                     \n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext [disabled]=\"!foo.value\">Next</button>\n                      </div>\n                    </form>\n                  </mat-step>\n                  <mat-step [stepControl]=\"thirdFormGroup\">\n                    <form [formGroup]=\"thirdFormGroup\" (ngSubmit)=\"form3()\" #formone=\"ngForm\">\n                      <ng-template matStepLabel>Fill out your favourite cusines</ng-template><br/>\n                      <mat-form-field class=\"example-chip-list\">\n                        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                          <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\"\n                            (removed)=\"remove(fruit)\">\n                            {{fruit.name}}\n                            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                          </mat-chip>\n                          <input placeholder=\"fill out your favourite cuisines\" [matChipInputFor]=\"chipList\"\n                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n                            (matChipInputTokenEnd)=\"add($event)\" formControlName=\"thirdCtrl\" required>\n                        </mat-chip-list>\n                      </mat-form-field>\n\n                      <div>\n                        <button mat-button matStepperPrevious>Back</button>\n                        <button mat-button matStepperNext [disabled]=\"fruits.length == 0\">Next</button>\n                      </div>\n                    </form>\n                  </mat-step>\n                  <mat-step>\n                    <ng-template matStepLabel>Done</ng-template>\n                    You are now done.<br />\n                    <button mat-button (click) =\"submitChefInfo()\">Submit</button>\n\n                    <div>\n                      <button mat-button matStepperPrevious>Back</button>\n                      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n                    </div>\n                  </mat-step>\n                </mat-vertical-stepper>\n\n              </ion-card-content>\n            </ion-card>\n\n\n            <ion-button (click)=\"chefpanel()\" color=\"dark\">\n              CHEF PANEL\n\n            </ion-button>\n            <ion-button (click)=\"skip()\" color=\"dark\">\n              SKIP\n              <ion-icon slot=\"end\" name=\"arrow-round-forward\"></ion-icon>\n            </ion-button>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/afterlogin/afterlogin.page.scss":
/*!*************************************************!*\
  !*** ./src/app/afterlogin/afterlogin.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FmdGVybG9naW4vYWZ0ZXJsb2dpbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/afterlogin/afterlogin.page.ts":
/*!***********************************************!*\
  !*** ./src/app/afterlogin/afterlogin.page.ts ***!
  \***********************************************/
/*! exports provided: Otp, AfterloginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Otp", function() { return Otp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterloginPage", function() { return AfterloginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _shared_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/user/user.service */ "./shared/user/user.service.ts");
/* harmony import */ var _shared_Session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/Session/session.service */ "./shared/Session/session.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_Otp_otp_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/Otp/otp.service */ "./shared/Otp/otp.service.ts");














var Otp = /** @class */ (function () {
    function Otp() {
    }
    return Otp;
}());

var AfterloginPage = /** @class */ (function () {
    function AfterloginPage(http, toastController, navCtrl, _formBuilder, userService, sessionService, otpService) {
        this.http = http;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this._formBuilder = _formBuilder;
        this.userService = userService;
        this.sessionService = sessionService;
        this.otpService = otpService;
        this.data = {};
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.fruits = [
        // {name: 'Chinese'},
        // {name: 'Indian'}
        ];
    }
    AfterloginPage.prototype.ionViewWillEnter = function () {
        // $('#card1').fadeIn(500);
        Object(animejs__WEBPACK_IMPORTED_MODULE_2__["default"])({
            targets: '.ell',
            translateX: 0
        });
    };
    AfterloginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        var user = getCookie("foodali_access_token");
        console.log(user + " <<< session access token ");
        if (user != "") {
            this.sessionService.GetSessionAccess(user).subscribe(function (response) {
                _this.userid = response[0].userId;
                console.log(response[0].userId);
                _this.userService.GetUserById(response[0].userId).subscribe(function (response) {
                    console.log(response);
                    _this.myNo = response.phoneNo;
                    _this.cookN = response.cookName;
                    _this.verf = response.isVerified;
                    console.log("cookN val " + _this.cookN);
                    console.log("verf val " + _this.verf);
                    console.log("myno val " + _this.myNo);
                    if (_this.verf != null) {
                        if (_this.cookN == null || _this.cookN == "") {
                            //user is not a cook 
                            //stay on page ask as default
                            jquery__WEBPACK_IMPORTED_MODULE_8___default()("#card1").fadeIn(200);
                        }
                        else {
                            //user is a cook
                            //ask for two options whether to post food or search food
                            //fadeout current card
                            jquery__WEBPACK_IMPORTED_MODULE_8___default()("#card1").fadeOut(200);
                            //fadein the option
                            jquery__WEBPACK_IMPORTED_MODULE_8___default()("#card0").fadeIn(200);
                        }
                    }
                    else {
                        _this.otpInit();
                        jquery__WEBPACK_IMPORTED_MODULE_8___default()("#cardotp").fadeIn(200);
                        jquery__WEBPACK_IMPORTED_MODULE_8___default()("#card1").fadeOut(200);
                        //fadein the option
                        jquery__WEBPACK_IMPORTED_MODULE_8___default()("#card0").fadeOut(200);
                    }
                });
            }, function (err) { return console.log(err); });
            // this.navCtrl.navigateForward("postmyfood");
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
    AfterloginPage.prototype.moreinfo = function () {
        jquery__WEBPACK_IMPORTED_MODULE_8___default()("#card1").fadeOut(200, function () {
            jquery__WEBPACK_IMPORTED_MODULE_8___default()('#card2').fadeIn(500);
        });
    };
    AfterloginPage.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    AfterloginPage.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    AfterloginPage.prototype.chefpanel = function () {
        this.navCtrl.navigateForward('foodposter');
    };
    AfterloginPage.prototype.skip = function () {
        this.navCtrl.navigateForward('postmyfood');
    };
    AfterloginPage.prototype.form1 = function () {
        console.log(this.firstFormGroup.value);
        this.data.cookName = this.firstFormGroup.value.firstCtrl;
    };
    AfterloginPage.prototype.form2 = function () {
        console.log(this.secondFormGroup.value);
        if (this.secondFormGroup.value.secondCtrl == "yes") {
            this.data.isVeg = true;
        }
        else {
            this.data.isVeg = false;
        }
    };
    AfterloginPage.prototype.form3 = function () {
        console.log(this.fruits);
        var dataConvert = [];
        for (var i = 0; i < this.fruits.length; i++) {
            dataConvert[i] = this.fruits[i].name;
        }
        this.data.cuisines = dataConvert;
    };
    AfterloginPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Your Chef information have been saved.',
                            position: 'top',
                            duration: 5000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    AfterloginPage.prototype.submitChefInfo = function () {
        var _this = this;
        console.log(this.data);
        //get user id 
        var user = getCookie("foodali_access_token");
        console.log(user + " <<< session access token ");
        if (user != "") {
            this.sessionService.GetSessionAccess(user).subscribe(function (response) {
                console.log("User id is " + response[0].userId);
                //update user object's location with id 
                _this.userService.UpdateUserById(response[0].userId, _this.data).subscribe(function (response) {
                    console.log(response);
                }, function (err) { return console.log(err); });
            }, function (err) { return console.log(err); });
            this.presentToast();
            this.chefpanel();
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
    AfterloginPage.prototype.otpSubmit = function () {
        console.log(this.otpVal);
    };
    AfterloginPage.prototype.onSubmit = function () {
        console.log("Otp thus enterd is " + this.enterdOtp);
    };
    AfterloginPage.prototype.onEnter = function (value) {
        var _this = this;
        this.value = value;
        console.log("You have entered the following otp > " + this.value);
        //verify otp in server
        this.otpService.GetOtpById(this.userid).subscribe(function (response) {
            console.log(response[0].otp);
            if (_this.value == response[0].otp) {
                // update otp pojo 
                var data = { "isVerified": "done" };
                _this.userService.UpdateUserVerfById(_this.userid, data).subscribe(function (response) {
                    console.log("Otp update success msg : " + response);
                    jquery__WEBPACK_IMPORTED_MODULE_8___default()("#cardotp").fadeOut(200);
                    jquery__WEBPACK_IMPORTED_MODULE_8___default()("#card1").fadeIn(200);
                }, function (err) {
                    console.log(err);
                    jquery__WEBPACK_IMPORTED_MODULE_8___default()("#cardotp").fadeOut(200);
                    jquery__WEBPACK_IMPORTED_MODULE_8___default()("#card1").fadeIn(200);
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    AfterloginPage.prototype.otpInit = function () {
        var _this = this;
        this.SendOTP().subscribe(function (response) {
            console.log("Otp resp " + response);
            var data = { "userId": _this.userid, "otp": _this.otp };
            _this.otpService.CreateOtp(data).subscribe(function (response) {
                console.log(response);
            }, function (err) { return console.log(err); });
        }, function (err) { return console.log(err); });
        this.otpService.DeleteOtp(this.userid).subscribe(function (response) {
            console.log("otp service delete response " + response);
        }, 
        // Since multiple time the response is redirected to error code, i had to put create query here 
        function (err) {
            console.log("del del err " + err);
            var data = { "userId": _this.userid, "otp": _this.otp };
            _this.otpService.CreateOtp(data).subscribe(function (response) {
                console.log("otp service create response " + response);
            }, function (err) { return console.log("cre cre err " + err); });
        });
    };
    // SEND OTP
    AfterloginPage.prototype.SendOTP = function () {
        this.otp = generateOTP();
        function generateOTP() {
            // Declare a digits variable  
            // which stores all digits 
            var digits = '0123456789';
            var OTP = '';
            for (var i = 0; i < 4; i++) {
                OTP += digits[Math.floor(Math.random() * 10)];
            }
            return OTP;
        }
        return this.http.get('http://nimbusit.co.in/api/swsendSingle.asp?username=t1Foodali&password=26537993&sender=666666&sendto=91' + this.myNo + '&message=Your OTP for FoodAli is ' + this.otp)
            .pipe(
        // retry(1),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["catchError"])(this.errorHandl));
    };
    // Error handling
    AfterloginPage.prototype.errorHandl = function (error) {
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
    AfterloginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-afterlogin',
            template: __webpack_require__(/*! ./afterlogin.page.html */ "./src/app/afterlogin/afterlogin.page.html"),
            styles: [__webpack_require__(/*! ./afterlogin.page.scss */ "./src/app/afterlogin/afterlogin.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _shared_Session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], _shared_Otp_otp_service__WEBPACK_IMPORTED_MODULE_12__["OtpService"]])
    ], AfterloginPage);
    return AfterloginPage;
}());



/***/ })

}]);
//# sourceMappingURL=afterlogin-afterlogin-module.js.map