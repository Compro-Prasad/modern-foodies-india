import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../shared/Session/session.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../../shared/user/user.service';
import { DishService } from '../../../shared/dish/dish.service';
import { TransService } from '../../../shared/trans/trans.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as $ from 'jquery';
import { Router } from '@angular/router';


import { NavController } from '@ionic/angular';

import { VERSION } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'


import { ToastController } from '@ionic/angular';
import anime from "animejs";
import { ActionSheetController } from '@ionic/angular';


export interface Dish {
  id: string;
  uId: string;
  dishName: string;
  dishPrice: string;
  noOfServings: string;
  foodDescription: string;
  publishStatus: boolean;
  isVeg: boolean;
  serialNo: number;
  address: string;
  delivery: string;
  cuisine: string;
  request: boolean;
}
@Component({
  selector: 'app-foodinfo',
  templateUrl: './foodinfo.page.html',
  styleUrls: ['./foodinfo.page.scss'],
})
export class FoodinfoPage implements OnInit {

  isit: number;
  r: boolean;
  dish: Array<Dish>;
  userid: string;
  cookid: string;
  chIf: string;
  count: number;
  k: number;
  loc: string;
  fullloc: string;

  //cook info
  cookPhone: string;
  cookName: string;
  cookCuisine: Array<string>;
  cookVeg: boolean;

  selectedDish: string;
  data: any;
  dataReturned: any;

  dishlen: number;

  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;
  loginStatus: boolean;
  cookState: boolean;
  constructor(
    private navCtrl: NavController,
    public userService: UserService,
    private http: HttpClient,
    public activatedRoute: ActivatedRoute,
    public dishService: DishService,
    public transService: TransService,
    public sessionService: SessionService,
    public toastController: ToastController,
    private router: Router,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController,
  ) { }


  ngOnInit() {
    this.isit = 0;
    this.count = 0;
    this.k = -1;

    var user = getCookie("foodali_access_token");
    console.log(user + " <<< session access token ");
    if (user != "") {

      this.sessionService.GetSessionAccess(user).subscribe(
        response => {
          this.userid = response[0].userId;
          console.log("Session id : customer " + response[0].userId);
          console.log("cookid fromm link " + this.activatedRoute.snapshot.paramMap.get('cookid'))
          if (this.activatedRoute.snapshot.paramMap.get('cookid') == null) {
            if (this.activatedRoute.snapshot.paramMap.get('did') != null) {
              
         

            this.dishService.GetDishId(this.activatedRoute.snapshot.paramMap.get('did')).subscribe(
              response => {
                //this.dish = response;
                console.log("Dishes info below");
                console.log(response.uId);
                this.cookid = response.uId;

                if(this.cookid == this.userid){ 
                  this.cookState = true;// cook is looking at from his login, so dont show request option
                }else{
                   this.cookState = false;
                }

                this.userService.GetUserById(this.cookid).subscribe(
                  response => {
                    console.log(response);
                    this.cookPhone = response.phoneNo;
                    this.cookName = response.cookName;
                    this.cookCuisine = response.cuisines;
                    this.cookVeg = response.isVeg;
                  },
                  err => {
                    console.log(err);
                  }
                );
                this.dishService.GetAllDishesId(response.uId).subscribe(
                  response => {
                    this.dish = response;
                    console.log(response);
                    console.log("dishes  " + this.dish.length);
                    for (var i = 0; i < this.dish.length; i++) {
                      console.log("----------------------------");
                      console.log("dish id > " + this.dish[i].id);
                      console.log("cook id > " + this.cookid);
                      console.log("user id > " + this.userid);
                      this.transService.GetTrans(this.userid, this.cookid, this.dish[i].id).subscribe(
                        response => {
                          this.k += 1;
                          console.log("transaction call " + this.k + " -> " + response)
                          if (response == "null") {
                            this.r = false;
                          } else {
                            this.r = true;
                          }
                          this.dish[this.k].request = this.r;
                          //for (var j = 0; j < this.dish.length; j++){
                          console.log("this.dish[" + this.k + "].request  " + this.dish[this.k].request);
                          this.r = false;
                          //}
                        },
                        err => {
                          console.log(err);
                        }
                      );
                    }
                    this.k = -1;
                  }
                );
              }
            );
            }else{
              this.navCtrl.navigateForward("postmyfood");
            }

          } else {

      
                this.cookid = this.activatedRoute.snapshot.paramMap.get('cookid') ;
                if(this.cookid == this.userid){ // cook is looking at from his login
                  this.cookState = true;
                }else{
                   this.cookState = false;
                }
                this.userService.GetUserById(this.cookid).subscribe(
                  response => {
                    console.log(response);
                    this.cookPhone = response.phoneNo;
                    this.cookName = response.cookName;
                    this.cookCuisine = response.cuisines;
                    this.cookVeg = response.isVeg;
                  },
                  err => {
                    console.log(err);
                  }
                );
                this.dishService.GetAllDishesId(this.cookid).subscribe(
                  response => {
                    this.dish = response;
                    console.log(response);
                    console.log("dishes  " + this.dish.length);
                    for (var i = 0; i < this.dish.length; i++) {
                      console.log("----------------------------");
                      console.log("dish id > " + this.dish[i].id);
                      console.log("cook id > " + this.cookid);
                      console.log("user id > " + this.userid);
                      this.transService.GetTrans(this.userid, this.cookid, this.dish[i].id).subscribe(
                        response => {
                          this.k += 1;
                          console.log("transaction call " + this.k + " -> " + response)
                          if (response == "null") {
                            this.r = false;
                          } else {
                            this.r = true;
                          }
                          this.dish[this.k].request = this.r;
                          //for (var j = 0; j < this.dish.length; j++){
                          console.log("this.dish[" + this.k + "].request  " + this.dish[this.k].request);
                          this.r = false;
                          //}
                        },
                        err => {
                          console.log(err);
                        }
                      );
                    }
                    this.k = -1;
                  }
                );
         

          };

        },
        err => console.log(err)
      );

      // this.navCtrl.navigateForward("postmyfood");
      console.log("use id is " + this.userid);
    }
    //set user session location in the search field on the load of app 
    var ses_lc = getCookie("foodali_address");
    console.log("Session location is " + ses_lc);
    if (ses_lc != null) {
      let str = ses_lc;
      this.loc = str.substring(0, 20) + "...";
      this.fullloc = str;
    } else {
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


  }

  search(q: string) {
    console.log("searched value is " + q);
    this.router.navigate(['/search', { svalue: q }]);
  }
  request(id) {
    let data = { "cookId": this.cookid, "dishId": id, "userId": this.userid };
    this.transService.CreateTrans(data).subscribe(

      response => {
        console.log(response);
        $("#p" + id).fadeOut(1);
        $("#u" + id).fadeIn(1);
      },
      err => {
        console.log(err);
        $("#p" + id).fadeOut(1);
        $("#u" + id).fadeIn(1);
      }
    );

    this.userService.GetUserById(this.cookid).subscribe(
      response => {
        console.log(response);
        let cookNo = response.phoneNo;
        // console.log("Cook no"+ cookNo);
        this.sendUserMsg("Hi, Someone has requested you to prepare food. Please visit Foodali to prceed the order. Dish link : http:108.179.222.240:8100/foodinfo;did=" + id, cookNo);
      },
      err => {
        console.log(err);
      }
    );

    this.userService.GetUserById(this.userid).subscribe(
      response => {
        console.log(response);
        let userNo = response.phoneNo;
        // console.log("User no"+ userNo);
        this.sendUserMsg("Hi, You request has been successfully sent to the Cook. The cook will be in contact with you soon. Dish link : http:108.179.222.240:8100/foodinfo;did=" + id, userNo);
      },
      err => {
        console.log(err);
      }
    );


  }
  cancle(id) {
    let data = { "cookId": this.cookid, "dishId": id, "userId": this.userid };
    this.transService.DeleteTrans(this.userid, this.cookid, id).subscribe(
      response => {
        console.log(response);

        $("#p" + id).fadeIn(1);
        $("#u" + id).fadeOut(1);
      },
      err => {
        console.log(err);

        $("#p" + id).fadeIn(1);
        $("#u" + id).fadeOut(1);
      }
    );

  }


  checkExist(did) {
    if (this.isit == 0) {
      this.count = this.count + 1;
      console.log("check Exist call : " + this.count);
      console.log("uid " + this.userid + "\n did " + did + "\n cid " + this.cookid);
      this.transService.GetTrans(this.userid, did, this.cookid).subscribe(
        response => {
          this.chIf = response;
          console.log("chIf = " + this.chIf)
        },
        err => {
          console.log(err);
        }
      );

      this.isit += 1;

    }

    return this.chIf;
  }

  toppings = new FormControl();
  toppingList: string[] = ['American', 'British', 'Caribbean', 'Chinese', 'French', 'Greek', 'Indian', 'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Moroccan', 'Spanish', 'Thai', 'Turkish', 'Vietnamese'];


  sendCookMsg(cook_msg: string, cook_no: string) {
    this.cookAPI(cook_msg, cook_no).subscribe(
      response => {
        console.log(response);
      },
      err => console.log(err)
    );
  }

  sendUserMsg(user_msg: string, user_no: string) {
    this.userAPI(user_msg, user_no).subscribe(
      response => {
        console.log(response);
      },
      err => console.log(err)
    );
  }

  // SEND OTP
  userAPI(user_msg, user_no) {
    return this.http.get<string>('http://nimbusit.co.in/api/swsendSingle.asp?username=t1Foodali&password=26537993&sender=666666&sendto=91' + user_no + '&message=' + user_msg)
      .pipe(
        // retry(1),
        catchError(this.errorHandl)
      )
  }

  cookAPI(cook_msg, cook_no) {
    return this.http.get<string>('http://nimbusit.co.in/api/swsendSingle.asp?username=t1Foodali&password=26537993&sender=666666&sendto=91' + cook_no + '&message=' + cook_msg)
      .pipe(
        // retry(1),
        catchError(this.errorHandl)
      )


  }
  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  showsearch() {
    $(".search-component").fadeIn(200);
  }
  onCancel(event) {
    console.log('CANCEL', event);
    $(".search-component").fadeOut(200);
  }
  openProfile() {
    this.navCtrl.navigateForward("profile");
  }

}
