import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonCardSliderPage } from './ion-card-slider.page';

const routes: Routes = [
  {
    path: '',
    component: IonCardSliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonCardSliderPageRoutingModule {}
