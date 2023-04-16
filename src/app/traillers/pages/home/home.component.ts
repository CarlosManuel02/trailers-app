import {Component, OnInit} from '@angular/core';
import {Trailer} from "../../interfaces/category.interface";
import {TraillersService} from "../../services/traillers.service";
import {TrailerCategory} from "../../interfaces/trailerCategory.interface";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ts: TraillersService) {
    this.categories = ts.trailerCategory;
  }

  categories: TrailerCategory[] = []
  trailer: Trailer[] = []

  ngOnInit(): void {
    // map the trailer to category and trailer
    // console.log(this.categories)
  }

}
