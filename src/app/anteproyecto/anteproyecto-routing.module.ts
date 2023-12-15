import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnteproyectoPage } from './anteproyecto.page';

const routes: Routes = [
  {
    path: '',
    component: AnteproyectoPage
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  },
  {
    path: 'agregar-items',
    loadChildren: () => import('./agregar-items/agregar-items.module').then( m => m.AgregarItemsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnteproyectoPageRoutingModule {}
