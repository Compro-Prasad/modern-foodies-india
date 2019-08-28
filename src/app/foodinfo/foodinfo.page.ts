import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../shared/Session/session.service';


import { DishService } from '../../../shared/dish/dish.service';
import { TransService } from '../../../shared/trans/trans.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


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
  dish: Dish;
  userid: string;
  cookid: string;
  chIf:string;
  constructor(public activatedRoute: ActivatedRoute, public dishService: DishService, public transService: TransService, public sessionService: SessionService) { }

  ngOnInit() {
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
    this.transService.DeleteTrans(this.userid, this.cookid,id).subscribe(
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

  checkExist(did){
    this.chIf = null;
    this.transService.GetTrans(this.userid, did, this.cookid).subscribe(
      response => {
        console.log(response);
        this.chIf = JSON.stringify(response);
      },
      err => {
        console.log(err);
      }
    );
    return this.chIf;
  }
  toppings = new FormControl();
  toppingList: string[] = ['American', 'British', 'Caribbean', 'Chinese', 'French', 'Greek', 'Indian', 'Italian', 'Japanese', 'Mediterranean', 'Mexican', 'Moroccan', 'Spanish', 'Thai', 'Turkish', 'Vietnamese'];
}
