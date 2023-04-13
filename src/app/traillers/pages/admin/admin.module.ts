import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AgregarEditarComponent} from "./agregar-editar/agregar-editar.component";


@NgModule({
  declarations: [
    DashboardComponent,
    AgregarEditarComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
