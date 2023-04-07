import {Injectable} from '@angular/core';
import {Category} from "../interfaces/category.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TraillersService {

  constructor(private http: HttpClient) {
  }

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
    {
      category: 'Comedy',
      trailers: [
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'}
      ]
    },
    {
      category: 'Drama',
      trailers: [
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY'}
      ]
    }
  ];

  get categories() {
    return [...this._categories];
  }

  getTrailers(category: string) {
  }

  getAllTrailers() {

  }

  getTrailerById(category: string, id: string) {
  }

  addTrailer(category: string, trailer: string) {
  }

  deleteTrailer(category: string, id: string) {

  }

  updateTrailer(category: string, id: string, trailer: string) {

  }

  getCategories() {

  }

  addCategory(category: string) {

  }

  deleteCategory(category: string) {

  }

  updateCategory(category: string, newCategory: string) {

  }


}
