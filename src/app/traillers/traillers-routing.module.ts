import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {ListadoComponent} from "./pages/listado/listado.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {TraillersComponent} from "./pages/traillers/traillers.component";
import {ValidarTokenGuard} from "../guards/validar-token.guard";
import {ValidarAdminGuard} from "../guards/validar-admin.guard";

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'list', component: ListadoComponent},
      {path: 'detail/:id', component: DetailComponent},
      {
        path: 'traillers',
        canLoad: [ValidarTokenGuard],
        canActivate: [ValidarTokenGuard],
        component: TraillersComponent,
      },
      {
        path: 'admin',
        canLoad: [ValidarAdminGuard],
        canActivate: [ValidarAdminGuard],
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
      },
      {path: '**', redirectTo: 'home'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraillersRoutingModule { }
