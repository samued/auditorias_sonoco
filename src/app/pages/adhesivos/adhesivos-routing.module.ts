import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdhesivosPage } from './adhesivos.page';

const routes: Routes = [
  {
    path: '',
    component: AdhesivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdhesivosPageRoutingModule {}
