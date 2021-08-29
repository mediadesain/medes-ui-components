import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SampleInfiniteLoadPageRoutingModule } from './sample-infinite-load-routing.module';

import { SampleInfiniteLoadPage } from './sample-infinite-load.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SampleInfiniteLoadPageRoutingModule
  ],
  declarations: [SampleInfiniteLoadPage]
})
export class SampleInfiniteLoadPageModule {}
