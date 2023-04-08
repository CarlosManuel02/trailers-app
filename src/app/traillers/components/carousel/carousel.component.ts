import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Trailer} from "../../interfaces/category.interface";


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  category: string = 'trailers';
  @Input() trailer: Trailer[] = [];
  @ViewChild('scrollDiv', { read: ElementRef }) public scrollDiv!: ElementRef<HTMLElement>;


  constructor(private sanitizer: DomSanitizer) {

  }


  ngOnInit() {
    this.trailer.map(trailer => {
      this.category = trailer.category;
    })
  }


  next() {
  }

  prev() {
  }
}
