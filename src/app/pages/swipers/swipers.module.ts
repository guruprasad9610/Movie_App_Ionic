import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SwipersPageRoutingModule } from './swipers-routing.module';

import { SwipersPage } from './swipers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwipersPageRoutingModule
  ],
  declarations: [SwipersPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwipersPageModule {}
