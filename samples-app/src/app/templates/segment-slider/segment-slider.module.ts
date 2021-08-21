import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SegmentSliderPage } from './segment-slider.page';
import { SegmentSliderPageRoutingModule } from './segment-slider-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SegmentSliderPage }]),
    SegmentSliderPageRoutingModule,
  ],
  declarations: [SegmentSliderPage]
})
export class SegmentSliderPageModule {}
