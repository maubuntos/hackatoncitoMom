import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab5Page } from './tab5.page';

import { HomeResolver } from './tab5.resolver';

const routes: Routes = [
  {
    path: '',
    component: Tab5Page,
    resolve:{
      data: HomeResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab5Page],
  providers: [
    HomeResolver
  ]
})
export class Tab5PageModule {}
