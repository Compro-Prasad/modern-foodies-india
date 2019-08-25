
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

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  data: Data = <Data>{};


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    // {name: 'Chinese'},
    // {name: 'Indian'}
  ];


  constructor(public toastController: ToastController,private navCtrl: NavController, private _formBuilder: FormBuilder, public userService: UserService, public sessionService: SessionService) { }
  ionViewWillEnter() {
    $('#card1').fadeIn(500);
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
          console.log(response[0].userId)
          this.userService.GetUserById(response[0].userId).subscribe(
response =>{
  console.log(response);

  this.cookN = response.cookName;
  console.log("cookN val "+ this.cookN);
    if(this.cookN == null || this.cookN == ""){
      //user is not a cook 
      //stay on page ask as default

    }else{
      //user is a cook
      //ask for two options whether to post food or search food

      //fadeout current card
      $("#card1").fadeOut(200);

      
      //fadein the option
      $("#card0").fadeIn(200);

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
    if(this.secondFormGroup.value.secondCtrl == "yes"){
      this.data.isVeg = true;
    }else{
      this.data.isVeg = false;
    }
   
  }
  form3() {
    console.log(this.fruits);
    var dataConvert = [];
    for (var i = 0; i< this.fruits.length; i++ ){
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
          console.log("User id is "+response[0].userId)


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
}