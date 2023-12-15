import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedireccionPageRoutingModule } from './redireccion-routing.module';

import { RedireccionPage } from './redireccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedireccionPageRoutingModule
  ],
  declarations: [RedireccionPage]
})
export class RedireccionPageModule {}
