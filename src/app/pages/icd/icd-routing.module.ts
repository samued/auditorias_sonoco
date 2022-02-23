import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IcdPage } from './icd.page';

const routes: Routes = [
  {
    path: '',
    component: IcdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IcdPageRoutingModule {}
