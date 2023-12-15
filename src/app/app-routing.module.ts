import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EditarPage } from './anteproyecto/editar/editar.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./home/login/login.component').then( m => m.LoginComponent)
  },
  {
    path: 'muro',
    loadChildren: () => import('./muro/muro.module').then( m => m.MuroPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'redireccion',
    loadChildren: () => import('./redireccion/redireccion.module').then( m => m.RedireccionPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./estudy/estudy.module').then( m => m.EstudyPageModule)
  },
  {
    path: 'anteproyecto',
    loadChildren: () => import('./anteproyecto/anteproyecto.module').then( m => m.AnteproyectoPageModule)
  },
  {
    path: 'editar-anteproyecto/:id',
    component: EditarPage // Aquí debe estar el componente para editar anteproyectos
  },
  {
    path: 'agregar-items',
    loadChildren: () => import('./anteproyecto/agregar-items/agregar-items.module').then(m => m.AgregarItemsPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
