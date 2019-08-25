import { Component, OnInit, VERSION } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'

import { NavController } from '@ionic/angular';

import anime from "animejs";
import { ActionSheetController } from '@ionic/angular';
import { DishService } from '../../../shared/dish/dish.service';
import { Router } from '@angular/router';

import $ from 'jquery';

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
  selector: 'app-postmyfood',
  templateUrl: './postmyfood.page.html',
  styleUrls: ['./postmyfood.page.scss'],
})
export class PostmyfoodPage implements OnInit {
  data: any;
  dataReturned: any;

  selectedDish:string;

  dish: Dish;

  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;

  constructor(private router: Router, public dishService: DishService, public modalController: ModalController, private navCtrl: NavController, public actionSheetController: ActionSheetController) { }


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
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
    this.dishService.GetAllDishes().subscribe(
      response => {
        console.log(response);
        this.dish = response;
      },
      err => console.log(err)
    );
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

  showsearch(){
    $(".search-component").fadeIn(200);
  }
  onCancel(event) {
    console.log('CANCEL', event);
    $(".search-component").fadeOut(200);
  }
  openProfile(){
    this.navCtrl.navigateForward("profile");
  }
}
