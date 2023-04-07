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
    return this.ts.categories;
  }

  openModal() {
    this.isModalOpen = true;
  }

  search(searchText: string) {
    this.searchText = searchText;

    this.traillers.map((category) => {
      category.trailers?.map((trailer) => {
        if (trailer.category.includes(searchText)) {
          this.foundTraillers.push(trailer)
        } else {
          console.log(false)
        }
      })
    })


  }

}
