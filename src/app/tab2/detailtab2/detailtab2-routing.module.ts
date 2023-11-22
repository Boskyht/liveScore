import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailtab2Page } from './detailtab2.page';

const routes: Routes = [
  {
    path: '',
    component: Detailtab2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailtab2PageRoutingModule {}
