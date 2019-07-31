import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodposterPage } from './foodposter.page';

const routes: Routes = [
  { // follow this https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md#angular-tabs
    path: 'tabs',
    component: FoodposterPage,
    children:[
        { path: 'tab1',
        children: [
                    {
                      path: '',
                      loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    }
                  ]
      },
        // { path: 'tab2', loadChildren: '../tab2/tab2.module#Tab2PageModule' },
    ]
  },
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
    RouterModule.forChild(routes)
  ],
  declarations: [FoodposterPage]
})
export class FoodposterPageModule {}
