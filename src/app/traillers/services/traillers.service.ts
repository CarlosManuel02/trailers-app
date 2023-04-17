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
      Titulo: "Spider-Man: No Way Home",
      Lanzamiento: new Date("2021-12-16"),
      link: "https://www.youtube.com/embed/ZhOHKJUPuFE",
      Director_es: "Jon Watts",
      Actores: ["Tom Holland", "Zendaya", "Jacob Batalon"],
      descripcion: "El regreso de Spider-Man a su universo y sus consecuencias.",
      Categoria: "Acción",
      img: "https://img.youtube.com/vi/ZhOHKJUPuFE/maxresdefault.jpg"
    },
    {
      id: "2",
      Titulo: "The Batman",
      Lanzamiento: new Date("2022-03-04"),
      link: "https://www.youtube.com/embed/Ue4PCI0NamI",
      Director_es: "Matt Reeves",
      Actores: ["Robert Pattinson", "Zoe Kravitz", "Paul Dano"],
      descripcion: "El detective Batman enfrenta al enemigo de Gotham, el Pingüino.",
      Categoria: "Superhéroes",
      img: "https://img.youtube.com/vi/Ue4PCI0NamI/maxresdefault.jpg"
    },
    {
      id: "3",
      Titulo: "Jurassic World: Dominion",
      Lanzamiento: new Date("2022-06-10"),
      link: "https://www.youtube.com/embed/C7kbVvpOGdQ",
      Director_es: "Colin Trevorrow",
      Actores: ["Chris Pratt", "Bryce Dallas Howard", "Jeff Goldblum"],
      descripcion: "Los dinosaurios escapan del parque y ponen en peligro a la humanidad.",
      Categoria: "Ciencia ficción",
      img: "https://img.youtube.com/vi/C7kbVvpOGdQ/maxresdefault.jpg"
    },
    {
      id: "4",
      Titulo: "Sonic The Hedgehog 2",
      Lanzamiento: new Date("2022-04-08"),
      link: "https://www.youtube.com/embed/QAvFV0v6Y-M",
      Director_es: "Jeff Fowler",
      Actores: ["Ben Schwartz", "James Marsden", "Idris Elba"],
      descripcion: "Sonic y Tails se unen para enfrentar al villano Knuckles.",
      Categoria: "Animación",
      img: "https://img.youtube.com/vi/QAvFV0v6Y-M/maxresdefault.jpg"
    },
    {
      id: "5",
      Titulo: "Doctor Strange in the Multiverse of Madness",
      Lanzamiento: new Date("2022-05-06"),
      link: "https://www.youtube.com/embed/8YjFbMbfXaQ",
      Director_es: "Sam Raimi",
      Actores: ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor"],
      descripcion: "Doctor Strange debe luchar contra una amenaza multiversal.",
      Categoria: "Superhéroes",
      img: "https://img.youtube.com/vi/8YjFbMbfXaQ/maxresdefault.jpg"
    },
    {
      id: '6',
      Titulo: 'Avengers: Infinity War',
      Lanzamiento: new Date('2018-04-26'),
      Director_es: 'Anthony Russo, Joe Russo',
      Actores: ['Robert Downey Jr.',
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
      Categoria: 'Acción'
    },
    {
      id: '7',
      Titulo: 'Avengers: Infinity War',
      Lanzamiento: new Date('2018-04-26'),
      Director_es: 'Anthony Russo, Joe Russo',
      Actores: ['Robert Downey Jr.',
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
      Categoria: 'Acción'
    },
    {
      id: '8',
      Titulo: 'Avengers: Infinity War',
      Lanzamiento: new Date('2018-04-26'),
      Director_es: 'Anthony Russo, Joe Russo',
      Actores: ['Robert Downey Jr.',
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
      Categoria: 'Acción'
    },
    {
      id: '9',
      Titulo: 'Avengers: Infinity War',
      Lanzamiento: new Date('2018-04-26'),
      Director_es: 'Anthony Russo, Joe Russo',
      Actores: ['Robert Downey Jr.',
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
      Categoria: 'Acción'
    },
    {
      id: '10',
      Titulo: 'Avengers: Infinity War',
      Lanzamiento: new Date('2018-04-26'),
      Director_es: 'Anthony Russo, Joe Russo',
      Actores: ['Robert Downey Jr.',
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
      Categoria: 'Drama'
    }
  ];


  constructor(private http: HttpClient) {
    this._trailers.forEach(trailer => {
      const category = this.categories.find((item) => item.category === trailer.Categoria);
      if (category) {
        category.trailer.push(trailer);
      } else {
        this.categories.push({
          category: trailer.Categoria,
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
