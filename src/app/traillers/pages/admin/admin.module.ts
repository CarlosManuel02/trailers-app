import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AgregarEditarComponent} from "./agregar-editar/agregar-editar.component";
import {SharedModule} from "../../../shared/shared.module";
import { AdminListComponent } from './admin-list/admin-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AgregarEditarComponent,
    AdminListComponent

  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule
    ]
})
export class AdminModule { }
