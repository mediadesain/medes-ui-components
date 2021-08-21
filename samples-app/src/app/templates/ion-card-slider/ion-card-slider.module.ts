import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonCardSliderPageRoutingModule } from './ion-card-slider-routing.module';

import { IonCardSliderPage } from './ion-card-slider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonCardSliderPageRoutingModule
  ],
  declarations: [IonCardSliderPage]
})
export class IonCardSliderPageModule {}
