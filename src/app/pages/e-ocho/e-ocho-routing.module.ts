import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EOchoPage } from './e-ocho.page';

const routes: Routes = [
  {
    path: '',
    component: EOchoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EOchoPageRoutingModule {}
