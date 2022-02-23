import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelaminacionPageRoutingModule } from './delaminacion-routing.module';

import { DelaminacionPage } from './delaminacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelaminacionPageRoutingModule
  ],
  declarations: [DelaminacionPage]
})
export class DelaminacionPageModule {}
