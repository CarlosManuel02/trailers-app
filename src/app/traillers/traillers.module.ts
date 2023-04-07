import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { TraillersRoutingModule } from './traillers-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {SharedModule} from "../shared/shared.module";
import { CarouselComponent } from './components/carousel/carousel.component';
import {NgImageSliderModule} from "ng-image-slider";


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    TraillersRoutingModule,
    SharedModule,
    NgOptimizedImage,
    NgImageSliderModule
  ]
})
export class TraillersModule { }
