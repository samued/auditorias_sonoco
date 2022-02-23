import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrooverDosPage } from './groover-dos.page';

const routes: Routes = [
  {
    path: '',
    component: GrooverDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrooverDosPageRoutingModule {}
