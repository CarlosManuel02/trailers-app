import {Injectable} from '@angular/core';
import {Trailer} from "../interfaces/category.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TraillersService {

  constructor(private http: HttpClient) {
  }

  private _categories: Trailer[] = [
    {
      titulo: 'Avengers: EndGame',
      año: new Date('2019-04-26'),
      director: 'Anthony Russo, Joe Russo',
      actores: ['Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle', '' +
        'Paul Rudd',
        'Brie Larson',
        'Karen Gillan',
        'Danai Gurira',
        'Benedict Wong',
        'Jon Favreau',
        'Bradley Cooper',
        'Gwyneth Paltrow',
        'Josh Brolin'],
      reseña: 'Después de los eventos devastadores de Avengers: Infinity War (2018), el universo está en ruinas debido a las acciones de Thanos. Con la ayuda de los aliados restantes, los Vengadores deberán reunirse una vez más para intentar deshacer sus acciones y restaurar el orden en el universo de una vez por todas, sin importar las consecuencias.',
      img: 'https://img.youtube.com/vi/TcMBFSGVi1c/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/TcMBFSGVi1c`,
      category: 'Acción'
    },
    {
      titulo: 'Avengers: Infinity War',
      año: new Date('2018-04-26'),
      director: 'Anthony Russo, Joe Russo',
      actores: ['Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle', '' +
        'Paul Rudd',
        'Brie Larson',
        'Karen Gillan',
        'Danai Gurira',
        'Benedict Wong',
        'Jon Favreau',
        'Bradley Cooper',
        'Gwyneth Paltrow',
        'Josh Brolin'],
      reseña: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      titulo: 'Avengers: Infinity War',
      año: new Date('2018-04-26'),
      director: 'Anthony Russo, Joe Russo',
      actores: ['Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle', '' +
        'Paul Rudd',
        'Brie Larson',
        'Karen Gillan',
        'Danai Gurira',
        'Benedict Wong',
        'Jon Favreau',
        'Bradley Cooper',
        'Gwyneth Paltrow',
        'Josh Brolin'],
      reseña: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      titulo: 'Avengers: Infinity War',
      año: new Date('2018-04-26'),
      director: 'Anthony Russo, Joe Russo',
      actores: ['Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle', '' +
        'Paul Rudd',
        'Brie Larson',
        'Karen Gillan',
        'Danai Gurira',
        'Benedict Wong',
        'Jon Favreau',
        'Bradley Cooper',
        'Gwyneth Paltrow',
        'Josh Brolin'],
      reseña: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      titulo: 'Avengers: Infinity War',
      año: new Date('2018-04-26'),
      director: 'Anthony Russo, Joe Russo',
      actores: ['Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle', '' +
        'Paul Rudd',
        'Brie Larson',
        'Karen Gillan',
        'Danai Gurira',
        'Benedict Wong',
        'Jon Favreau',
        'Bradley Cooper',
        'Gwyneth Paltrow',
        'Josh Brolin'],
      reseña: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      titulo: 'Avengers: Infinity War',
      año: new Date('2018-04-26'),
      director: 'Anthony Russo, Joe Russo',
      actores: ['Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle', '' +
        'Paul Rudd',
        'Brie Larson',
        'Karen Gillan',
        'Danai Gurira',
        'Benedict Wong',
        'Jon Favreau',
        'Bradley Cooper',
        'Gwyneth Paltrow',
        'Josh Brolin'],
      reseña: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      titulo: 'Avengers: Infinity War',
      año: new Date('2018-04-26'),
      director: 'Anthony Russo, Joe Russo',
      actores: ['Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle', '' +
        'Paul Rudd',
        'Brie Larson',
        'Karen Gillan',
        'Danai Gurira',
        'Benedict Wong',
        'Jon Favreau',
        'Bradley Cooper',
        'Gwyneth Paltrow',
        'Josh Brolin'],
      reseña: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      titulo: 'Avengers: Infinity War',
      año: new Date('2018-04-26'),
      director: 'Anthony Russo, Joe Russo',
      actores: ['Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle', '' +
        'Paul Rudd',
        'Brie Larson',
        'Karen Gillan',
        'Danai Gurira',
        'Benedict Wong',
        'Jon Favreau',
        'Bradley Cooper',
        'Gwyneth Paltrow',
        'Josh Brolin'],
      reseña: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      titulo: 'Avengers: Infinity War',
      año: new Date('2018-04-26'),
      director: 'Anthony Russo, Joe Russo',
      actores: ['Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle', '' +
        'Paul Rudd',
        'Brie Larson',
        'Karen Gillan',
        'Danai Gurira',
        'Benedict Wong',
        'Jon Favreau',
        'Bradley Cooper',
        'Gwyneth Paltrow',
        'Josh Brolin'],
      reseña: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: '',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      titulo: 'Avengers: Infinity War',
      año: new Date('2018-04-26'),
      director: 'Anthony Russo, Joe Russo',
      actores: ['Robert Downey Jr.',
        'Chris Evans',
        'Mark Ruffalo',
        'Chris Hemsworth',
        'Scarlett Johansson',
        'Jeremy Renner',
        'Don Cheadle', '' +
        'Paul Rudd',
        'Brie Larson',
        'Karen Gillan',
        'Danai Gurira',
        'Benedict Wong',
        'Jon Favreau',
        'Bradley Cooper',
        'Gwyneth Paltrow',
        'Josh Brolin'],
      reseña: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: '',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Drama'
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
