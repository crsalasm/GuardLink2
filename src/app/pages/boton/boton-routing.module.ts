import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonPage } from './boton.page';

const routes: Routes = [
  {
    path: '',
    component: BotonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BotonPageRoutingModule {}
