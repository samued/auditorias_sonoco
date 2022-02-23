import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ESietePageRoutingModule } from './e-siete-routing.module';

import { ESietePage } from './e-siete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ESietePageRoutingModule
  ],
  declarations: [ESietePage]
})
export class ESietePageModule {}
