import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbalajePage } from './embalaje.page';

const routes: Routes = [
  {
    path: '',
    component: EmbalajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbalajePageRoutingModule {}
