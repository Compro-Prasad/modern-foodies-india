import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page'
 
import {NavController} from '@ionic/angular';

import anime from "animejs";


@Component({
  selector: 'app-postmyfood',
  templateUrl: './postmyfood.page.html',
  styleUrls: ['./postmyfood.page.scss'],
})
export class PostmyfoodPage implements OnInit {

  dataReturned:any;
  constructor(  public modalController: ModalController, private navCtrl: NavController) { }


  ionViewWillEnter() { 
    anime({
      targets: '.menu',
      translateX:  0
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
  }
  profilePage(){
    this.navCtrl.navigateForward('profile');
}
cookPage(){
  this.navCtrl.navigateForward('foodinfo');
}
}
