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
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '1', category: 'Action'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '2', category: 'Action'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '3', category: 'Action'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '4', category: 'Action'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '5', category: 'Action'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '6', category: 'Action'},]
    },
    {
      category: 'Comedy',
      trailers: [
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '7', category: 'Comedy'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '8', category: 'Comedy'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '9', category: 'Comedy'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '10', category: 'Comedy'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '11', category: 'Comedy'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '12', category: 'Comedy'},]
    },
    {
      category: 'Drama',
      trailers: [
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '13', category: 'Drama'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '14', category: 'Drama'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '15', category: 'Drama'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '16', category: 'Drama'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '17', category: 'Drama'},
        {link: 'https://www.youtube.com/embed/vhumOLNSSJY', title: 'Avengers: Endgame', id: '18', category: 'Drama'},]
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
