import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudyPage } from './estudy.page';

const routes: Routes = [
  {
    path: '',
    component: EstudyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudyPageRoutingModule {}
