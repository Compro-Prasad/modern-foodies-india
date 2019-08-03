import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import {MatDialogModule} from "@angular/material";

import { MaterialModule } from '../material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    MatDialogModule,
    ReactiveFormsModule ,
    MaterialModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
