import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatidoresPage } from './batidores.page';

const routes: Routes = [
  {
    path: '',
    component: BatidoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatidoresPageRoutingModule {}
