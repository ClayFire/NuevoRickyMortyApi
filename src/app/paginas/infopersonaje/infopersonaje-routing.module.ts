import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfopersonajePage } from './infopersonaje.page';

const routes: Routes = [
  {
    path: '',
    component: InfopersonajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfopersonajePageRoutingModule {}
