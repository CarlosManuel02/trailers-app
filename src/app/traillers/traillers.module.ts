import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TraillersRoutingModule} from './traillers-routing.module';
import {SharedModule} from "../shared/shared.module";
import {HomeComponent} from "./pages/home/home.component";
import {CarouselComponent} from "./components/carousel/carousel.component";
import { ListadoComponent } from './pages/listado/listado.component';
import {FormsModule} from "@angular/forms";
import { DetailComponent } from './pages/detail/detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ListadoComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    TraillersRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class TraillersModule {
}
