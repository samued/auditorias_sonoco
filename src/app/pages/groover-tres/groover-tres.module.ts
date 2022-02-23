import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrooverTresPageRoutingModule } from './groover-tres-routing.module';

import { GrooverTresPage } from './groover-tres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrooverTresPageRoutingModule
  ],
  declarations: [GrooverTresPage]
})
export class GrooverTresPageModule {}
