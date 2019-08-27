
import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { UserService } from '../../../shared/user/user.service';
import { SessionService } from '../../../shared/Session/session.service';
import { ToastController } from '@ionic/angular';
import $ from 'jquery';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OtpService } from '../../../shared/Otp/otp.service';
export class Otp {

  id: string;

  userId: string;
  otp: string;



}

export interface Fruit {
  name: string;
}

export interface Data {
  cookName: string;
  isVeg: boolean;
  cuisines: Fruit[];
}

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.page.html',
  styleUrls: ['./afterlogin.page.scss'],
})
export class AfterloginPage implements OnInit {

  cookN: string;
  verf: string;
  userid: string;
otpVal:string;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  data: Data = <Data>{};

  myNo: string;
  value:string;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    // {name: 'Chinese'},
    // {name: 'Indian'}
  ];
  otp: string;
  enterdOtp: string;

  constructor(private http: HttpClient, public toastController: ToastController, private navCtrl: NavController, private _formBuilder: FormBuilder, public userService: UserService, public sessionService: SessionService, public otpService: OtpService) { }
  ionViewWillEnter() {
    // $('#card1').fadeIn(500);
    anime({
      targets: '.ell',
      translateX: 0
    });


  }
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });

    var user = getCookie("foodali_access_token");
    console.log(user + " <<< session access token ");
    if (user != "") {

      this.sessionService.GetSessionAccess(user).subscribe(
        response => {
          this.userid = response[0].userId;
          console.log(response[0].userId)
          this.userService.GetUserById(response[0].userId).subscribe(
            response => {
              console.log(response);
              this.myNo = response.phoneNo;
              
              this.cookN = response.cookName;
              this.verf = response.isVerified;
              console.log("cookN val " + this.cookN);
              console.log("verf val " + this.verf);
              console.log("myno val " + this.myNo);
             
              if (this.verf !=null ) {
                if (this.cookN == null || this.cookN == "") {
                  //user is not a cook 
                  //stay on page ask as default
                  $("#card1").fadeIn(200);
                } else {
                  //user is a cook
                  //ask for two options whether to post food or search food

                  //fadeout current card
                  $("#card1").fadeOut(200);


                  //fadein the option
                  $("#card0").fadeIn(200);

                }
              } else {
                this.otpInit();
                

                $("#cardotp").fadeIn(200);
                $("#card1").fadeOut(200);


                //fadein the option
                $("#card0").fadeOut(200);
              }
            }

          );


        },
        err => console.log(err)
      );
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



  }
  moreinfo() {
    $("#card1").fadeOut(200, function () {
      $('#card2').fadeIn(500);
    });

  }


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  chefpanel() {
    this.navCtrl.navigateForward('foodposter');
  }
  skip() {
    this.navCtrl.navigateForward('postmyfood');
  }
  form1() {
    console.log(this.firstFormGroup.value);
    this.data.cookName = this.firstFormGroup.value.firstCtrl;
  }
  form2() {
    console.log(this.secondFormGroup.value);
    if (this.secondFormGroup.value.secondCtrl == "yes") {
      this.data.isVeg = true;
    } else {
      this.data.isVeg = false;
    }

  }
  form3() {
    console.log(this.fruits);
    var dataConvert = [];
    for (var i = 0; i < this.fruits.length; i++) {
      dataConvert[i] = this.fruits[i].name
    }

    this.data.cuisines = dataConvert;
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your Chef information have been saved.',
      position: 'top',
      duration: 5000
    });
    toast.present();
  }
  submitChefInfo() {
    console.log(this.data);
    //get user id 

    var user = getCookie("foodali_access_token");
    console.log(user + " <<< session access token ");
    if (user != "") {

      this.sessionService.GetSessionAccess(user).subscribe(
        response => {
          console.log("User id is " + response[0].userId)


          //update user object's location with id 
          this.userService.UpdateUserById(response[0].userId, this.data).subscribe(
            response => {
              console.log(response);
            },
            err => console.log(err)
          );
        },
        err => console.log(err)
      );
      this.presentToast();
      this.chefpanel()
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
  otpSubmit(){
    console.log(this.otpVal);
  }
  onSubmit() {
    console.log("Otp thus enterd is "+this.enterdOtp);
  }
  
  onEnter(value: string) { 
    this.value = value; 
    console.log("You have entered the following otp > "+this.value);
    //verify otp in server
    this.otpService.GetOtpById(this.userid).subscribe(response => {
      console.log(response[0].otp);
     
      if (this.value == response[0].otp){
        // update otp pojo 
        let data = {"isVerified":"done"};
        this.userService.UpdateUserVerfById(this.userid, data).subscribe(response =>{
          console.log("Otp update success msg : "+response);
          $("#cardotp").fadeOut(200);
          $("#card1").fadeIn(200);
        },
        err => {console.log(err);
          $("#cardotp").fadeOut(200);
          $("#card1").fadeIn(200);
        }
        );


      }
    },
      err => {console.log(err);     
     
    }
    );


  }

  otpInit() {

    this.SendOTP().subscribe(
      response => {
        console.log("Otp resp " + response)
        var data = { "userId": this.userid, "otp": this.otp };
        this.otpService.CreateOtp(data).subscribe(response => {
          console.log(response);
        },
          err => console.log(err)
        );
      },
      err => console.log(err)
    );


    this.otpService.DeleteOtp(this.userid).subscribe(response => {
      console.log("otp service delete response "+response);

    },
    // Since multiple time the response is redirected to error code, i had to put create query here 
      err => {console.log("del del err "+err);
      var data = {"userId":this.userid,"otp":this.otp};
    this.otpService.CreateOtp(data).subscribe(response => {
      console.log("otp service create response "+response);
    },
      err => console.log("cre cre err "+err)
    );
    }
    );
  }
  // SEND OTP
  SendOTP() {

    this.otp = generateOTP();
    function generateOTP() {

      // Declare a digits variable  
      // which stores all digits 
      var digits = '0123456789';
      let OTP = '';
      for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
    }
    return this.http.get<Otp>('http://nimbusit.co.in/api/swsendSingle.asp?username=t1Foodali&password=26537993&sender=666666&sendto=91'+this.myNo+'&message=Your OTP for FoodAli is ' + this.otp)
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