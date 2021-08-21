import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListItemsGroupPageRoutingModule } from './list-items-group-routing.module';

import { ListItemsGroupPage } from './list-items-group.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListItemsGroupPageRoutingModule
  ],
  declarations: [ListItemsGroupPage]
})
export class ListItemsGroupPageModule {}
