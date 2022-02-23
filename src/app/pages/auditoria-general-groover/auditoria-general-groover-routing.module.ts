import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditoriaGeneralGrooverPage } from './auditoria-general-groover.page';

const routes: Routes = [
  {
    path: '',
    component: AuditoriaGeneralGrooverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuditoriaGeneralGrooverPageRoutingModule {}
