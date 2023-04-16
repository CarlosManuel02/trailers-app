import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ListadoComponent} from "./pages/listado/listado.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {TraillersComponent} from "./pages/traillers/traillers.component";
import {ValidarTokenGuard} from "../guards/validar-token.guard";
import {ValidarAdminGuard} from "../guards/validar-admin.guard";
import {AccountComponent} from "./pages/account/account.component";

const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {
        path: '',
        canLoad: [ValidarTokenGuard],
        canActivate: [ValidarTokenGuard],
        children: [
          {path: 'detail/:id', component: DetailComponent},
          {path: 'account', component: AccountComponent},
          {path: 'traillers', component: TraillersComponent,},
          {path: 'list', component: ListadoComponent},
        ]
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
export class TraillersRoutingModule {
}
