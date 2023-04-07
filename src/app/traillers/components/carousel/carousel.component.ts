import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Category} from "../../interfaces/category.interface";


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  @Input() category: Category = {trailers: []};

  constructor(private sanitizer: DomSanitizer) {
  }


  ngOnInit() {
    // this.category.trailers.map(trailer => {
    //   const url = trailer.link.split('=');
    //   const id = url[1];
    //   console.log(url)
    //   trailer.link = `https://www.youtube.com/embed/${id}`
    // });
  }


  next() {
  }

  prev() {
  }
}
