import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminadoPageRoutingModule } from './terminado-routing.module';

import { TerminadoPage } from './terminado.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TerminadoPage]
})
export class TerminadoPageModule {}
