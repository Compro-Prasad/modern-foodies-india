import {Component, Inject} from '@angular/core';

import {NavController} from '@ionic/angular';
import anime from 'animejs';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogBodyComponent } from "../dialog-body/dialog-body.component";

// best dialog
// https://www.techiediaries.com/angular-material-dialogs/


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
 
  title = "Example Angular Material Dialog";
  constructor(private navCtrl: NavController, private dialog2: MatDialog) {}
  selected = 'option1';
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
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.dialog2.open(DialogBodyComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog data found at home page : ${result.message}`);
      if (result.message == "d-cls"){
        alert("inverse");
      }
    });
  }

}


