import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MuroPageRoutingModule } from './muro-routing.module';

import { MuroPage } from './muro.page';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsItemComponent } from './posts-item/posts-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuroPageRoutingModule
  ],
  declarations: [MuroPage, PostsListComponent, PostsItemComponent]
})
export class MuroPageModule {}
