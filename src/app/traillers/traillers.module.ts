import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraillersRoutingModule } from './traillers-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        TraillersRoutingModule,
        SharedModule
    ]
})
export class TraillersModule { }
