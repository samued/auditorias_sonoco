import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrooverTresPage } from './groover-tres.page';

const routes: Routes = [
  {
    path: '',
    component: GrooverTresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrooverTresPageRoutingModule {}
