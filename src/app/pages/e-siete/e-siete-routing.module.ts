import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ESietePage } from './e-siete.page';

const routes: Routes = [
  {
    path: '',
    component: ESietePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ESietePageRoutingModule {}
