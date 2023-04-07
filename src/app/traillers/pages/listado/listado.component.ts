import { Component } from '@angular/core';
import {TraillersService} from "../../services/traillers.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  constructor(
    private ts: TraillersService
  ) {
  }

  get traillers() {
    return this.ts.categories;
  }

}
