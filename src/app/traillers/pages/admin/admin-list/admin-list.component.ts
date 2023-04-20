import { Component } from '@angular/core';
import {TrailerCategory} from "../../../interfaces/trailerCategory.interface";
import {TraillersService} from "../../../services/traillers.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent {

  traillers: TrailerCategory[] = [];
  searchText: string = '';

  constructor(
    private ts: TraillersService,
    private router: Router
  ) {
    this.traillers = this.ts.trailerCategory;
  }

  createTrailers() {
    this.router.navigate(['/traillers/admin/edit-update/0']);
  }

  search(searchText: string) {
    this.searchText = searchText;


  }
}
