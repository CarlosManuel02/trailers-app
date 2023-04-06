import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraillersRoutingModule } from './traillers-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TraillersRoutingModule
  ]
})
export class TraillersModule { }
