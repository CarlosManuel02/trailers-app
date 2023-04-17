import {Component} from '@angular/core';
import {TraillersService} from "../../services/traillers.service";
import {Trailer} from "../../interfaces/category.interface";
import {TrailerCategory} from "../../interfaces/trailerCategory.interface";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  isModalOpen = false;
  searchText: string = '';
  foundTraillers: TrailerCategory[] = [];
  traillers: TrailerCategory[] = [];

  constructor(
    private ts: TraillersService
  ) {
    this.traillers = this.ts.trailerCategory;
  }


  openModal() {
    this.isModalOpen = true;
  }

  noResults: boolean = false;

  buscarTrailers() {
    if (this.searchText === '') {
      this.foundTraillers = this.traillers;
    } else {
      this.foundTraillers = [];
      for (const trailerCategory of this.traillers) {
        const trailers = trailerCategory.trailer.filter(trailer =>
          trailer.Titulo.toLowerCase().includes(this.searchText.toLowerCase()) ||
          trailer.Lanzamiento.toString().includes(this.searchText)
        );
        if (trailers.length > 0) {
          this.foundTraillers.push({
            Categoria: trailerCategory.Categoria,
            trailer: trailers
          });
        }
      }
      this.noResults = this.foundTraillers.length === 0;
    }
  }


}
