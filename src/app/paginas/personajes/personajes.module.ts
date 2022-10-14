import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PersonajesPageRoutingModule } from './personajes-routing.module';

import { PersonajesPage } from './personajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonajesPageRoutingModule,
    RouterModule,
    HttpClientModule

  ],
  declarations: [PersonajesPage]
})
export class PersonajesPageModule {}
