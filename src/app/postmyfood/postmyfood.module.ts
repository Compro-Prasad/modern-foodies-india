import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PostmyfoodPage } from './postmyfood.page';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
const routes: Routes = [
  {
    path: '',
    component: PostmyfoodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    MatProgressBarModule,
    MatGridListModule
  ],
  declarations: [PostmyfoodPage]
})
export class PostmyfoodPageModule {}
