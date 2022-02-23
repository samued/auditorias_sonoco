import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdhesivosPageRoutingModule } from './adhesivos-routing.module';

import { AdhesivosPage } from './adhesivos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdhesivosPageRoutingModule
  ],
  declarations: [AdhesivosPage]
})
export class AdhesivosPageModule {}
