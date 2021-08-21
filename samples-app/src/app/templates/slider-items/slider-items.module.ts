import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderItemsPageRoutingModule } from './slider-items-routing.module';

import { SliderItemsPage } from './slider-items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderItemsPageRoutingModule
  ],
  declarations: [SliderItemsPage]
})
export class SliderItemsPageModule {}
