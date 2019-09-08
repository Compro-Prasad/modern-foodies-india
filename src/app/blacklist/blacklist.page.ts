import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../shared/Session/session.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../../shared/user/user.service';
import { DishService } from '../../../shared/dish/dish.service';
import { TransService } from '../../../shared/trans/trans.service';


import { BlistService } from '../../../shared/blist/blist.service';

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

export interface trans{
	id:string;
	
	userId:string;
	cookId:string;
  dishId:string;

  requestTime: string;
  
  bstatus:boolean;
}


@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.page.html',
  styleUrls: ['./blacklist.page.scss'],
})
export class BlacklistPage implements OnInit {



  trans: Array<trans>;
  userid: any;
  loginStatus: boolean;
  constructor(
    private navCtrl: NavController, 
    public userService:UserService, 
    private http: HttpClient,
    public activatedRoute: ActivatedRoute, 
    public dishService: DishService, 
    public transService: TransService, 
    public blistService: BlistService,
    public sessionService: SessionService ,
    public toastController: ToastController, 
    private router: Router, 
    public modalController: ModalController, 
    public actionSheetController: ActionSheetController, 
   ) { }


  ionViewWillEnter() {


    anime({
      targets: '.menu',
      translateX: 0
    });
    anime({
      targets: '.list-x',
      translateY: 0
    });


  }
  ngOnInit() {
   
    var user = getCookie("foodali_access_token");
    console.log(user + " <<< session access token ");
    if (user != "") {

      this.sessionService.GetSessionAccess(user).subscribe(
        response => {
          this.userid = response[0].userId;
          console.log(response[0].userId); 


          this.transService.GetAllTrans().subscribe(response =>{
          
            console.log("trans resp"+ JSON.stringify(response));
            this.trans = response;
            

          }, err => console.log(err));


          if(response != null){
            this.loginStatus = true;
  
            }else{
              this.loginStatus = false;
              //delete cookies in the broweser if session is not found in server for the particular access token 
            document.cookie = 'foodali_access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = 'foodali_request_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          //  document.cookie = 'foodali_address=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }     
        },
        err => console.log(err)
      );
      // this.navCtrl.navigateForward("postmyfood");





    }
    
    // this.currentloc = getCookie("foodali_address");

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
goDish(did){
  this.router.navigate(['/foodinfo',  {did : did}]);
}
goProfile(uid){
  this.router.navigate(['/profile',  {uid : uid}]);
}


block(id) {
 let data = {"bstatus":true}
  this.transService.UpdateTransblistById(id,data).subscribe(

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
unblock(id) {
  let data = {"bstatus":false}
  this.transService.UpdateTransblistById(id,data).subscribe(

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
}
