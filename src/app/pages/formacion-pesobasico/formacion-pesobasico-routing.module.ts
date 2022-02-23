import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormacionPesobasicoPage } from './formacion-pesobasico.page';

const routes: Routes = [
  {
    path: '',
    component: FormacionPesobasicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormacionPesobasicoPageRoutingModule {}
