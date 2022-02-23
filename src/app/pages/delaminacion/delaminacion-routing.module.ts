import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelaminacionPage } from './delaminacion.page';

const routes: Routes = [
  {
    path: '',
    component: DelaminacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelaminacionPageRoutingModule {}
