import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

interface Category {
  category?: string;
  trailers: any[];
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {


  @Input() category: Category = {trailers: []};
 @ViewChild('ms-4') carousel: ElementRef | undefined;

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
    if (!this.carousel) return;
    const carousel = this.carousel?.nativeElement;
    carousel.scrollLeft += 300;

  }

  prev() {
    if (!this.carousel) return;
    const carousel = this.carousel?.nativeElement;
    carousel.scrollLeft -= 300;
  }
}
