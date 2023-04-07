import {Component} from '@angular/core';

interface Category {
  category?: string;
  trailers: any[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categories: Category[] = [
    {
      category: 'Action',
      trailers: [
        {
          link: 'https://www.youtube.com/embed/vhumOLNSSJY' // Youtube url
        },
        {
          link: 'https://www.youtube.com/embed/vhumOLNSSJY' // Youtube url
        }
      ]
    },
  ];


}
