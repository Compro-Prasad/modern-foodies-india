import { Component, OnInit } from '@angular/core';

import {NavController} from '@ionic/angular';
import { MatDialogRef } from "@angular/material";
@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss'],
})
export class DialogBodyComponent implements OnInit {
  data = "signin-closed"
  constructor(private navCtrl: NavController, public dialogRef: MatDialogRef<DialogBodyComponent>) { }
  selected = 'option1';
  ngOnInit() {}
  getLoc(data)
  {
    this.dialogRef.close({
      message: 'Confirm signin',
      data
   });
  //   this.dialogRef.afterClosed().subscribe(result => {
  //    console.log(`Dialog closed: ${result.message}`, result.data);
  //  });
    //this.navCtrl.navigateForward('postmyfood');
  } 
}
