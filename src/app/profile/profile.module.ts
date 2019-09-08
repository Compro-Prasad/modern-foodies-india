import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../material.module';
import {MatDialogModule} from "@angular/material";
import { ProfilePage } from './profile.page';
import { BarRatingModule } from "ngx-bar-rating";

import { RateDialogComponent } from "../rate-dialog/rate-dialog.component";

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarRatingModule,
    MatDialogModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilePage, RateDialogComponent],
  entryComponents: [RateDialogComponent]
})
export class ProfilePageModule {}
