import {Component} from '@angular/core';
import {Category} from "../../interfaces/category.interface";
import {TraillersService} from "../../services/traillers.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private ts: TraillersService) {
    this.categories = ts.categories;
  }

  categories: Category[] = []


}
