import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MdsUiComponentsPage } from './mds-ui-components.page';

const routes: Routes = [
  {
    path: '',
    component: MdsUiComponentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdsUiComponentsPageRoutingModule {}
