import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwipersPage } from './swipers.page';

const routes: Routes = [
  {
    path: '',
    component: SwipersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwipersPageRoutingModule {}
