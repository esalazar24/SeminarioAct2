import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarItemsPageRoutingModule } from './agregar-items-routing.module';

import { AgregarItemsPage } from './agregar-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarItemsPageRoutingModule
  ],
  declarations: [AgregarItemsPage]
})
export class AgregarItemsPageModule {}
