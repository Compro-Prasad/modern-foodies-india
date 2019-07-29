import { Component } from '@angular/core';

import {NavController} from '@ionic/angular';
//import * as anime from 'animejs';
//import anime from 'animejs/lib/anime.es.js';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  ionViewDidLoad() { 
    anime({
      targets: '#cssSelector .el',
      translateX: 250
  });


}


  // IF LAZY-LOADED
  goAnOtherPage(){
    this.navCtrl.navigateForward('location');
  }
 



}
