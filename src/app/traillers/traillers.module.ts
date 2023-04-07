import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import {TraillersRoutingModule} from './traillers-routing.module';
import {SharedModule} from "../shared/shared.module";
import {NgImageSliderModule} from "ng-image-slider";
import {HomeComponent} from "./pages/home/home.component";
import {CarouselComponent} from "./components/carousel/carousel.component";


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
export class TraillersModule {
}
