import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageLoaderPageRoutingModule } from './image-loader-routing.module';

import { ImageLoaderPage } from './image-loader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageLoaderPageRoutingModule
  ],
  declarations: [ImageLoaderPage]
})
export class ImageLoaderPageModule {}
