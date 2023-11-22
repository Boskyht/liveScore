import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailtab1Page } from './detailtab1.page';

const routes: Routes = [
  {
    path: '',
    component: Detailtab1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailtab1PageRoutingModule {}
