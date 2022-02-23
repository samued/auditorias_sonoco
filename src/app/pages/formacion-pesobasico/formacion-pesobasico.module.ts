import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormacionPesobasicoPageRoutingModule } from './formacion-pesobasico-routing.module';

import { FormacionPesobasicoPage } from './formacion-pesobasico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormacionPesobasicoPageRoutingModule
  ],
  declarations: [FormacionPesobasicoPage]
})
export class FormacionPesobasicoPageModule {}
