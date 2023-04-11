import {Component, OnInit} from '@angular/core';
import {Trailer} from "../../interfaces/category.interface";
import {TraillersService} from "../../services/traillers.service";

interface TrailerCategory {
  category: string;
  trailer: Trailer[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private ts: TraillersService) {
    this.trailer = ts.categories;
  }

  categories: TrailerCategory[] = []
  trailer: Trailer[] = []

  ngOnInit(): void {
    // map the trailer to category and trailer
    this.trailer.forEach(trailer => {
      const category = this.categories.find(cat => cat.category === trailer.category); // find the category
      if (category) {
        category.trailer.push(trailer);
      } else {
        this.categories.push({category: trailer.category, trailer: [trailer]});
      }
    });
    console.log(this.categories);
  }



}
