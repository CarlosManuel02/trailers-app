import {Component, OnInit} from '@angular/core';
import {TraillersService} from "../../services/traillers.service";
import {Trailer} from "../../interfaces/category.interface";
import {TrailerCategory} from "../../interfaces/trailerCategory.interface";


@Component({
  selector: 'app-traillers',
  templateUrl: './traillers.component.html',
  styleUrls: ['./traillers.component.css']
})
export class TraillersComponent implements OnInit {
  constructor(private ts: TraillersService) {
    this.categories = ts.trailerCategory;
  }

  categories: TrailerCategory[] = []
  trailer: Trailer[] = []

  ngOnInit(): void {
    // map the trailer to category and trailer
  }
}
