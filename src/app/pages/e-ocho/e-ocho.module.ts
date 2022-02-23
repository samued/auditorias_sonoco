import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EOchoPageRoutingModule } from './e-ocho-routing.module';

import { EOchoPage } from './e-ocho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EOchoPageRoutingModule
  ],
  declarations: [EOchoPage]
})
export class EOchoPageModule {}
