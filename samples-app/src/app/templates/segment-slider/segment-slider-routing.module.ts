import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SegmentSliderPage } from './segment-slider.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentSliderPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SegmentSliderPageRoutingModule {}
