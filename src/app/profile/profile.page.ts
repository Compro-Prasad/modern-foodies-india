import { Component, OnInit } from '@angular/core';

import $ from 'jquery';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../../shared/Session/session.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../../../shared/user/user.service';
import { DishService } from '../../../shared/dish/dish.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RateDialogComponent } from "../rate-dialog/rate-dialog.component";

import { TransService } from '../../../shared/trans/trans.service';


import { BlistService } from '../../../shared/blist/blist.service';

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
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
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  
  trans: Array<trans>;
  userid: any;
  loginStatus: boolean;
  uid: string;
  userName: string;
  isCook: boolean;
  constructor(
    public dialog2: MatDialog,
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
    private route: ActivatedRoute,
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

            this.route.params.subscribe(params => {
              this.uid = params['uid']; 
 if(this.uid != undefined){
              this.userService.GetUserById(this.uid).subscribe(response => {
                if (response.cookName == null){
                  this.isCook = false;
                this.userName = response.phoneNo;
                }else{
                  this.isCook = true;
                  this.userName = response.cookName;
                }
              }, err => console.log(err));
 }else{
// 

  this.userService.GetUserById(this.userid).subscribe(response => {
    if (response.cookName == null){
      this.isCook = false;
    this.userName = response.phoneNo;
    }else{
      this.isCook = true;
      this.userName = response.cookName;
    }
  }, err => console.log(err));
 }
            });

  
            }else{
              this.loginStatus = false;
              //delete cookies in the broweser if session is not found in server for the particular access token 
            document.cookie = 'foodali_access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = 'foodali_request_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            this.navCtrl.navigateForward("/home");
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
 
  logmeout(){
  
    document.cookie = 'foodali_access_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'foodali_request_token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'foodali_address=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
 }

 showMyCard(){
  this.router.navigate(['/foodinfo', {cookid:this.userid}]);
 }

 rateCook(cookId) {

  const dialogConfig = new MatDialogConfig();
  const dialogRef = this.dialog2.open(RateDialogComponent, dialogConfig);

  console.log("Cook id in dialog",cookId);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog data found at home page with cookID : ${result.message}`);
  });
}

}
