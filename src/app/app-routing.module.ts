import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ValidarTokenGuard} from "./guards/validar-token.guard";

const routes: Routes = [
  {
    path: 'traillers',
    loadChildren: () => import('./traillers/traillers.module').then(m => m.TraillersModule)
  },
  {
    path: 'auth',

    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
