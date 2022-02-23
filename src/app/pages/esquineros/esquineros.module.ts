import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquinerosPageRoutingModule } from './esquineros-routing.module';

import { EsquinerosPage } from './esquineros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquinerosPageRoutingModule
  ],
  declarations: [EsquinerosPage]
})
export class EsquinerosPageModule {}
