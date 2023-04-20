import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgregarEditarComponent} from "./agregar-editar/agregar-editar.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AdminListComponent} from "./admin-list/admin-list.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'list', component: AdminListComponent},
      {path: 'edit-update/:id', component: AgregarEditarComponent},
      {path: 'add', component: AgregarEditarComponent},
      {path: '**', redirectTo: 'list'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
