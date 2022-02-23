import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbalajePageRoutingModule } from './embalaje-routing.module';

import { EmbalajePage } from './embalaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmbalajePageRoutingModule
  ],
  declarations: [EmbalajePage]
})
export class EmbalajePageModule {}
