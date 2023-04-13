import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgregarEditarComponent} from "./agregar-editar/agregar-editar.component";
import {ValidarTokenGuard} from "../../../guards/validar-token.guard";
import {DashboardComponent} from "../../../traillers/pages/admin/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {path: 'edit-update:id', component: AgregarEditarComponent},
      {path: 'add', component: AgregarEditarComponent},
      {path: '**', redirectTo: 'add'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
