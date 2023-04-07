import { Injectable } from '@angular/core';
import {Category} from "../interfaces/category.interface";

@Injectable({
  providedIn: 'root'
})
export class TraillersService {

  constructor() { }

  private _categories: Category[] = [
    {
      category: 'Action',
      trailers: [
        {
          link: 'https://www.youtube.com/embed/vhumOLNSSJY' // Youtube url
        },
        {
          link: 'https://www.youtube.com/embed/vhumOLNSSJY' // Youtube url
        },
        {
          link: 'https://www.youtube.com/embed/vhumOLNSSJY' // Youtube url
        },
        {
          link: 'https://www.youtube.com/embed/vhumOLNSSJY' // Youtube url
        },
        {
          link: 'https://www.youtube.com/embed/vhumOLNSSJY' // Youtube url
        },
        {
          link: 'https://www.youtube.com/embed/vhumOLNSSJY' // Youtube url
        }
      ]
    },
  ];

  get categories() {
    return [...this._categories];
  }
}
