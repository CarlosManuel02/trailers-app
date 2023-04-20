import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AgregarEditarComponent} from "./agregar-editar/agregar-editar.component";
import {SharedModule} from "../../../shared/shared.module";
import { AdminListComponent } from './admin-list/admin-list.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardComponent,
    AgregarEditarComponent,
    AdminListComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AdminModule { }
