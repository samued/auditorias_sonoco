import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrooverDosPageRoutingModule } from './groover-dos-routing.module';

import { GrooverDosPage } from './groover-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrooverDosPageRoutingModule
  ],
  declarations: [GrooverDosPage]
})
export class GrooverDosPageModule {}
