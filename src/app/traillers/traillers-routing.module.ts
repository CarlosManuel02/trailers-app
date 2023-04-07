import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {ListadoComponent} from "./pages/listado/listado.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'list', component: ListadoComponent},
      {path: '**', redirectTo: 'home'}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraillersRoutingModule { }
