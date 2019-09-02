import { Component, OnInit, VERSION } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'

import { NavController } from '@ionic/angular';

import anime from "animejs";
import { ActionSheetController } from '@ionic/angular';
import { DishService } from '../../../shared/dish/dish.service';
import { Router } from '@angular/router';
import $ from 'jquery';


import { UserService } from '../../../shared/user/user.service';
import { SessionService } from '../../../shared/Session/session.service';


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
}
@Component({
  selector: 'app-postmyfood',
  templateUrl: './postmyfood.page.html',
  styleUrls: ['./postmyfood.page.scss'],
})
export class PostmyfoodPage implements OnInit {
  data: any;
  dataReturned: any;

  selectedDish:string;
  loc:string;

  dish: Array<Dish>;
  dishlen:number;

  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;
  loginStatus: boolean;

  constructor(private router: Router, public dishService: DishService, public modalController: ModalController, private navCtrl: NavController, public actionSheetController: ActionSheetController, public userService: UserService, public sessionService:SessionService) { }


  ionViewWillEnter() {
    setTimeout(() => {
      this.data = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5000);

    anime({
      targets: '.menu',
      translateX: 0
    });
    anime({
      targets: '.list-x',
      translateY: 0
    });


  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        "paramID": 5050,
        "paramTitle": "Update Location"
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });

    return await modal.present();
  }
  ngOnInit() {

    this.loginStatus = false;
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
    this.dishService.GetAllDishes().subscribe(
      response => {
        console.log(response);
        this.dish = response;
        this.dishlen = this.dish.length;

      },
      err => console.log(err)
    );

     //set user session location in the search field on the load of app 
     var ses_lc = getCookie("foodali_address");
     console.log("Session location is " + ses_lc);
     if (ses_lc != null) {
       let str = ses_lc;
       this.loc  =  str.substring(0, 20)+"...";
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

    var user = getCookie("foodali_access_token");
    console.log(user + " <<< session access token ");
    if (user != "") {
      this.sessionService.GetSessionAccess(user).subscribe(
        response => {
          console.log("session response from server : "+response);
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







  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }
  profilePage() {
    this.navCtrl.navigateForward('profile');
  }
  cookPage() {
    this.navCtrl.navigateForward('foodinfo');
  }
  search(q: string) { 
    console.log("searched value is "+q); 
    this.router.navigate(['/search', { svalue: q }]);
}


getLoc() {
  navigator.geolocation.getCurrentPosition((loc) => {
    this.userService.GetMapData(loc.coords.latitude, loc.coords.longitude).subscribe(response => {
      var txt = JSON.stringify(response);
      var obj = JSON.parse(txt);
      var formatted_address = obj.results[0].formatted_address;
      console.log(formatted_address);
      setCookie("foodali_address", formatted_address, "1"); // expires in 1 day
      this.loc = formatted_address.substring(0, 20)+"...";;
    },
      err => console.log(err)
    );
    console.log("this loc :" + this.loc);
    var d = new Date();
  })
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
}

 
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Filter Options',
      buttons: [{
        text: 'Popular',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Your favourites',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Vegetarian cooks',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Cuisines',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'All cooks near me',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  goFoodInfo( id:string){
    console.log(id);
    this.router.navigate(['/foodinfo', {did : id}]);
  }

  showsearch(){
    $(".search-component").fadeIn(200);
  }

  hideSearch(){
    $(".search-component").fadeOut(200);
  }
  onCancel(event) {
    console.log('CANCEL', event);
    $(".search-component").fadeOut(200);
  }
  openProfile(){
    this.navCtrl.navigateForward("profile");
  }
  goHome(){
    this.navCtrl.navigateForward("home");
  }
}
