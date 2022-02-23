import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatidoresPageRoutingModule } from './batidores-routing.module';

import { BatidoresPage } from './batidores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatidoresPageRoutingModule
  ],
  declarations: [BatidoresPage]
})
export class BatidoresPageModule {}
