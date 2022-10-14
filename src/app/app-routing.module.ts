import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'personajes',
    pathMatch: 'full'
  },
  {
    path: 'personajes',
    loadChildren: () => import('./paginas/personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'infopersonaje/:id',
    loadChildren: () => import('./paginas/infopersonaje/infopersonaje.module').then( m => m.InfopersonajePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
