import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MdsUiComponentsPageRoutingModule } from './mds-ui-components-routing.module';

import { MdsUiComponentsPage } from './mds-ui-components.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MdsUiComponentsPageRoutingModule
  ],
  declarations: [MdsUiComponentsPage]
})
export class MdsUiComponentsPageModule {}
