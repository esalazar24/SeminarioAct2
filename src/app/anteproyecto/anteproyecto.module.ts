import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { IonicModule } from '@ionic/angular';

import { AnteproyectoPageRoutingModule } from '../anteproyecto/anteproyecto-routing.module';

import { AnteproyectoPage } from '../anteproyecto/anteproyecto.page';
import { AgregarItemsPageRoutingModule } from './agregar-items/agregar-items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnteproyectoPageRoutingModule,
    ReactiveFormsModule,
    AgregarItemsPageRoutingModule
  ],
  declarations: [AnteproyectoPage]
})
export class AnteproyectoPageModule {}
