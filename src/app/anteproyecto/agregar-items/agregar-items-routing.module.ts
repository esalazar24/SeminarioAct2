import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarItemsPage } from './agregar-items.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarItemsPageRoutingModule {}
