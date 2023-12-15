import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedireccionPage } from './redireccion.page';

const routes: Routes = [
  {
    path: '',
    component: RedireccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedireccionPageRoutingModule {}
