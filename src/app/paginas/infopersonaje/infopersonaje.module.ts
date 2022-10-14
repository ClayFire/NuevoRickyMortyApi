import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfopersonajePageRoutingModule } from './infopersonaje-routing.module';

import { InfopersonajePage } from './infopersonaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfopersonajePageRoutingModule
  ],
  declarations: [InfopersonajePage]
})
export class InfopersonajePageModule {}
