import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Trailer} from "../../interfaces/category.interface";


interface TrailerCategory {
  category: string;
  trailer: Trailer[];
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  @Input() trailer!: TrailerCategory;
  @ViewChild('scrollDiv', { read: ElementRef }) public scrollDiv!: ElementRef<HTMLElement>;


  constructor(private sanitizer: DomSanitizer) {

  }


  ngOnInit() {

  }


  next() {
  }

  prev() {
  }
}
