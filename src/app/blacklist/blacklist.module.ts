import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BlacklistPage } from './blacklist.page';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  {
    path: '',
    component: BlacklistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlacklistPage]
})
export class BlacklistPageModule {}
