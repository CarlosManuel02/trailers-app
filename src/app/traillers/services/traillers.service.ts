import {Injectable} from '@angular/core';
import {Trailer} from "../interfaces/category.interface";
import {HttpClient} from "@angular/common/http";
import {TrailerCategory} from '../interfaces/trailerCategory.interface';


@Injectable({
  providedIn: 'root'
})
export class TraillersService {

  private categories: TrailerCategory[] = []
  private _trailers: Trailer[] = [
    {
      id: "1",
      titulo: "Spider-Man: No Way Home",
      year: new Date("2021-12-16"),
      link: "https://www.youtube.com/embed/ZhOHKJUPuFE",
      director: "Jon Watts",
      actores: ["Tom Holland", "Zendaya", "Jacob Batalon"],
      descripcion: "El regreso de Spider-Man a su universo y sus consecuencias.",
      category: "Acción",
      img: "https://img.youtube.com/vi/ZhOHKJUPuFE/maxresdefault.jpg"
    },
    {
      id: "2",
      titulo: "The Batman",
      year: new Date("2022-03-04"),
      link: "https://www.youtube.com/embed/Ue4PCI0NamI",
      director: "Matt Reeves",
      actores: ["Robert Pattinson", "Zoe Kravitz", "Paul Dano"],
      descripcion: "El detective Batman enfrenta al enemigo de Gotham, el Pingüino.",
      category: "Superhéroes",
      img: "https://img.youtube.com/vi/Ue4PCI0NamI/maxresdefault.jpg"
    },
    {
      id: "3",
      titulo: "Jurassic World: Dominion",
      year: new Date("2022-06-10"),
      link: "https://www.youtube.com/embed/C7kbVvpOGdQ",
      director: "Colin Trevorrow",
      actores: ["Chris Pratt", "Bryce Dallas Howard", "Jeff Goldblum"],
      descripcion: "Los dinosaurios escapan del parque y ponen en peligro a la humanidad.",
      category: "Ciencia ficción",
      img: "https://img.youtube.com/vi/C7kbVvpOGdQ/maxresdefault.jpg"
    },
    {
      id: "4",
      titulo: "Sonic The Hedgehog 2",
      year: new Date("2022-04-08"),
      link: "https://www.youtube.com/embed/QAvFV0v6Y-M",
      director: "Jeff Fowler",
      actores: ["Ben Schwartz", "James Marsden", "Idris Elba"],
      descripcion: "Sonic y Tails se unen para enfrentar al villano Knuckles.",
      category: "Animación",
      img: "https://img.youtube.com/vi/QAvFV0v6Y-M/maxresdefault.jpg"
    },
    {
      id: "5",
      titulo: "Doctor Strange in the Multiverse of Madness",
      year: new Date("2022-05-06"),
      link: "https://www.youtube.com/embed/8YjFbMbfXaQ",
      director: "Sam Raimi",
      actores: ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor"],
      descripcion: "Doctor Strange debe luchar contra una amenaza multiversal.",
      category: "Superhéroes",
      img: "https://img.youtube.com/vi/8YjFbMbfXaQ/maxresdefault.jpg"
    },
    {
      id: '6',
      titulo: 'Avengers: Infinity War',
      year: new Date('2018-04-26'),
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
      descripcion: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      id: '7',
      titulo: 'Avengers: Infinity War',
      year: new Date('2018-04-26'),
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
      descripcion: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      id: '8',
      titulo: 'Avengers: Infinity War',
      year: new Date('2018-04-26'),
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
      descripcion: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      id: '9',
      titulo: 'Avengers: Infinity War',
      year: new Date('2018-04-26'),
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
      descripcion: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Acción'
    },
    {
      id: '10',
      titulo: 'Avengers: Infinity War',
      year: new Date('2018-04-26'),
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
      descripcion: 'Los Vengadores y sus aliados deben estar dispuestos a sacrificarlo todo en un intento por derrotar al poderoso Thanos antes de que su incursión en el espacio y el tiempo ponga fin a la existencia del universo.',
      img: 'https://img.youtube.com/vi/6ZfuNTqbHE8/maxresdefault.jpg',
      link: `https://www.youtube.com/embed/6ZfuNTqbHE8`,
      category: 'Drama'
    }
  ];


  constructor(private http: HttpClient) {
    this._trailers.forEach(trailer => {
      const category = this.categories.find((item) => item.category === trailer.category);
      if (category) {
        category.trailer.push(trailer);
      } else {
        this.categories.push({
          category: trailer.category,
          trailer: [trailer]
        });
      }
    });
  }

  get trailers() {
    return [...this._trailers];
  }

  get trailerCategory() {
    return [...this.categories];
  }

  getTrailers(category: string) {
  }

  getAllTrailers() {

  }

  getTrailerById(id: string) {
    return this._trailers.find(trailer => trailer.id === id)
  }

  addTrailer(category: string, trailer: string) {
  }

  deleteTrailer(category: string, id: string) {

  }

  updateTrailer(category: string, id: string, trailer: string) {

  }


}
