import {Component, Inject} from '@angular/core';

import {NavController} from '@ionic/angular';
import anime from 'animejs';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion'; 
}
//import anime from 'animejs/lib/anime.es.js';
//import anime from 'animejs/lib/anime.es.js';
//const anime = require('animejs/lib/anime.es.js');
// export interface DialogData {
//   animal: 'panda' | 'unicorn' | 'lion';
// }
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loc: string;

  constructor(private navCtrl: NavController, public dialog: MatDialog) {}

  // constructor(private navCtrl: NavController, public dialog: MatDialog) {}

  // Ionic life cycles : https://ionicframework.com/blog/navigating-lifecycle-events/

  ionViewWillEnter() { 
    anime({
      targets: '.el',
      translateX:  0
  });


}


  // IF LAZY-LOADED
  goAnOtherPage(){
    this.navCtrl.navigateForward('location');
  }
 getLoc()
{
  this.loc = "Airoli, Sector 9";
  this.navCtrl.navigateForward('postmyfood');
} 

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
      }
    });
  }

}


@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
