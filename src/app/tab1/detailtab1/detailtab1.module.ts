import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailtab1PageRoutingModule } from './detailtab1-routing.module';

import { Detailtab1Page } from './detailtab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailtab1PageRoutingModule
  ],
  declarations: [Detailtab1Page]
})
export class Detailtab1PageModule {}
