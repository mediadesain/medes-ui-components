import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplatesPage } from './templates.page';

const routes: Routes = [
  {
    path: '',
    component: TemplatesPage
  },
  {
    path: 'segment-slider',
    loadChildren: () => import('./segment-slider/segment-slider.module').then( m => m.SegmentSliderPageModule)
  },
  {
    path: 'mds-ui-components',
    loadChildren: () => import('./mds-ui-components/mds-ui-components.module').then( m => m.MdsUiComponentsPageModule)
  },
  {
    path: 'image-loader',
    loadChildren: () => import('./image-loader/image-loader.module').then( m => m.ImageLoaderPageModule)
  },
  {
    path: 'slider-items',
    loadChildren: () => import('./slider-items/slider-items.module').then( m => m.SliderItemsPageModule)
  },
  {
    path: 'list-items',
    loadChildren: () => import('./list-items/list-items.module').then( m => m.ListItemsPageModule)
  },
  {
    path: 'list-items-group',
    loadChildren: () => import('./list-items-group/list-items-group.module').then( m => m.ListItemsGroupPageModule)
  },
  {
    path: 'ion-card-slider',
    loadChildren: () => import('./ion-card-slider/ion-card-slider.module').then( m => m.IonCardSliderPageModule)
  },
  {
    path: 'tabs-app',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'demo-app',
    loadChildren: () => import('./app-demo/tabs.module').then( m => m.TabsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemplatesPageRoutingModule {}
