import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormacionHumedadPage } from './formacion-humedad.page';

const routes: Routes = [
  {
    path: '',
    component: FormacionHumedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormacionHumedadPageRoutingModule {}
