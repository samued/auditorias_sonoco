import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquinerosPage } from './esquineros.page';

const routes: Routes = [
  {
    path: '',
    component: EsquinerosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquinerosPageRoutingModule {}
