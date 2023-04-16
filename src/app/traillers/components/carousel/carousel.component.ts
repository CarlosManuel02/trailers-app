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
  currentPosition = 0;
  @ViewChild('carouselContainer', {read: ElementRef}) carouselContainer!: ElementRef;


  constructor(private sanitizer: DomSanitizer) {

  }


  ngOnInit() {

  }


  next() {
    const container = this.carouselContainer.nativeElement;
    const containerWidth = container.offsetWidth;
    const containerScrollWidth = container.scrollWidth;
    const containerScrollLeft = container.scrollLeft;

    if (containerScrollLeft + containerWidth < containerScrollWidth) {
      this.currentPosition += containerWidth;
      container.scrollTo({left: this.currentPosition, behavior: 'smooth'});
    }
  }

  prev() {
    const container = this.carouselContainer.nativeElement;
    const containerWidth = container.offsetWidth;
    const containerScrollLeft = container.scrollLeft;

    if (containerScrollLeft > 0) {
      this.currentPosition -= containerWidth;
      container.scrollTo({left: this.currentPosition, behavior: 'smooth'});
    }
  }

}
