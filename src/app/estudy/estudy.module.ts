import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudyPageRoutingModule } from './estudy-routing.module';

import { EstudyPage } from './estudy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstudyPageRoutingModule
  ],
  declarations: [EstudyPage]
})
export class EstudyPageModule {}
