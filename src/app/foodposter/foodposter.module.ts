import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodposterPage } from './foodposter.page';

import { MaterialModule } from '../material.module';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';

// import { BrowserModule } from '@angular/platform-browser';


import { FileUploadModule } from 'ng2-file-upload';

const routes: Routes = [
  {
    path: '',
    component: FoodposterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    // BrowserModule,
    FileUploadModule
  ],
  declarations: [FoodposterPage]
})
export class FoodposterPageModule {}
