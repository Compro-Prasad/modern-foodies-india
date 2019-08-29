import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../shared/Session/session.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { DishService } from '../../../shared/dish/dish.service';
import { TransService } from '../../../shared/trans/trans.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import * as $ from 'jquery';
export interface Dish {
  id: string;
  userID: string;
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
}
@Component({
  selector: 'app-foodinfo',
  templateUrl: './foodinfo.page.html',
  styleUrls: ['./foodinfo.page.scss'],
})
export class FoodinfoPage implements OnInit {

  isit: number;

  dish: Dish;
  userid: string;
  cookid: string;
  chIf: string;
  constructor(private http: HttpClient,public activatedRoute: ActivatedRoute, public dishService: DishService, public transService: TransService, public sessionService: SessionService) { }

  ngOnInit() {
    this.isit = 0;
    let val = this.activatedRoute.snapshot.paramMap.get('uid');
    console.log("User id from link is " + val);
    this.cookid = val;

    var user = getCookie("foodali_access_token");
    console.log(user + " <<< session access token ");
    if (user != "") {

      this.sessionService.GetSessionAccess(user).subscribe(
        response => {
          this.userid = response[0].userId;
          console.log(response[0].userId);
          this.dishService.GetAllDishesId(response[0].userId).subscribe(
            response => {
              this.dish = response;
              console.log(response);
            }
          );
        },
        err => console.log(err)
      );
      // this.navCtrl.navigateForward("postmyfood");
      console.log("use id is " + this.userid);





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
      
      this.transService.GetTrans(this.userid, did, this.cookid).subscribe(
        response => {          
          this.chIf = response;
          console.log("chIf : "+this.chIf)
          //this.sendCookMsg("Hi, Rajkishor requested you for a dish at Foodali. Please go to the link to see more https://foodali.com/adflaskdjflakj", "7683922389");
          //this.sendUserMsg("Hi, You request has been successfully sent to the Cook. The cook will be in connect with you after some time. refenece link : https://foodali.com/aslkdfjklasfj", "8260620589");
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


  sendCookMsg(cook_msg:string, cook_no:string) {
    this.cookAPI(cook_msg,cook_no).subscribe(
      response => {
      console.log(response);
      },
      err => console.log(err)
    );
  }

  sendUserMsg( user_msg:string, user_no:string) {
    this.userAPI(user_msg,user_no).subscribe(
      response => {
      console.log(response);
      },
      err => console.log(err)
    );
  }

  // SEND OTP
  userAPI(user_msg,user_no) {
    return this.http.get<string>('http://nimbusit.co.in/api/swsendSingle.asp?username=t1Foodali&password=26537993&sender=666666&sendto=91'+user_no+'&message=' + user_msg)
      .pipe(
        // retry(1),
        catchError(this.errorHandl)
      ) 
  }

  cookAPI(cook_msg,cook_no) {
    return this.http.get<string>('http://nimbusit.co.in/api/swsendSingle.asp?username=t1Foodali&password=26537993&sender=666666&sendto=91'+cook_no+'&message=' + cook_msg)
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



}
