import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IcdPageRoutingModule } from './icd-routing.module';

import { IcdPage } from './icd.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IcdPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IcdPage]
})
export class IcdPageModule {}
