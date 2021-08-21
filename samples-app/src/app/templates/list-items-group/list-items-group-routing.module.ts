import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemsGroupPage } from './list-items-group.page';

const routes: Routes = [
  {
    path: '',
    component: ListItemsGroupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListItemsGroupPageRoutingModule {}
