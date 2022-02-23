import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormacionHumedadPageRoutingModule } from './formacion-humedad-routing.module';

import { FormacionHumedadPage } from './formacion-humedad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormacionHumedadPageRoutingModule
  ],
  declarations: [FormacionHumedadPage]
})
export class FormacionHumedadPageModule {}
