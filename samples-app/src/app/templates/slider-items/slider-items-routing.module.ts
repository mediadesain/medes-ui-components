import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderItemsPage } from './slider-items.page';

const routes: Routes = [
  {
    path: '',
    component: SliderItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderItemsPageRoutingModule {}
