import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MolinoPageRoutingModule } from './molino-routing.module';

import { MolinoPage } from './molino.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MolinoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MolinoPage]
})
export class MolinoPageModule {}
