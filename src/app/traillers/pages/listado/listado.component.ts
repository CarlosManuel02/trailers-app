import {Component} from '@angular/core';
import {TraillersService} from "../../services/traillers.service";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  isModalOpen = false;
  searchText: string = '';
  foundTraillers: any[] = [];

  constructor(
    private ts: TraillersService
  ) {
    this.foundTraillers
  }

  get traillers() {
    return this.ts.trailerCategory;
  }

  openModal() {
    this.isModalOpen = true;
  }

  search(searchText: string) {
    this.searchText = searchText;

    this.foundTraillers = this.traillers.map(trailer => {
      trailer.trailer.filter(trailer => {
        return trailer.titulo.toLowerCase().includes(this.searchText.toLowerCase());
      })
    })


  }

}
