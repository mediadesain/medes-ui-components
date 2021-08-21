import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageLoaderPage } from './image-loader.page';

const routes: Routes = [
  {
    path: '',
    component: ImageLoaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageLoaderPageRoutingModule {}
