import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleInfiniteLoadPage } from './sample-infinite-load.page';

const routes: Routes = [
  {
    path: '',
    component: SampleInfiniteLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleInfiniteLoadPageRoutingModule {}
