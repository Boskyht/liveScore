import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailtab2PageRoutingModule } from './detailtab2-routing.module';

import { Detailtab2Page } from './detailtab2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailtab2PageRoutingModule
  ],
  declarations: [Detailtab2Page]
})
export class Detailtab2PageModule {}
