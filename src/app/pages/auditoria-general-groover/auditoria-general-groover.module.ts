import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuditoriaGeneralGrooverPageRoutingModule } from './auditoria-general-groover-routing.module';

import { AuditoriaGeneralGrooverPage } from './auditoria-general-groover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuditoriaGeneralGrooverPageRoutingModule
  ],
  declarations: [AuditoriaGeneralGrooverPage]
})
export class AuditoriaGeneralGrooverPageModule {}
