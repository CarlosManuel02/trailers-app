import {Injectable} from '@angular/core';
import {Trailer} from "../interfaces/category.interface";
import {HttpClient} from "@angular/common/http";
import {TrailerCategory} from '../interfaces/trailerCategory.interface';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TraillersService {

  trailerCategory: TrailerCategory[] = []
  private _trailers: Trailer[] = [
    {
      "_id": "643c58ee6e8599bf0b9b37a8",
      "Titulo": "Ant-Man y la Avispa: Quantumanía",
      "Lanzamiento": 2023,
      "Director_es": "Peyton Reed",
      "Actores": [
        "Paul Rudd",
        "Evangeline Lilly",
        "Michael Douglas",
        "Michelle Pfeiffer",
        "Jonathan Majors"
      ],
      "img": "https://www.gstatic.com/tv/thumb/movieposters/23566152/p23566152_p_v8_ac.jpg",
      "descripcion": "En la tercera entrega de la saga de Ant-Man, el equipo se enfrenta a nuevos desafíos mientras exploran el Reino Cuántico.",
      "link": "https://www.youtube.com/watch?v=kk8GJZbwoWs",
      "Categoria": "Ant-Man y la Avispa: Quantumanía"
    }
  ]

  constructor(private http: HttpClient) {
    this.getAllTrailers()
  }

  get trailers() {
    return [...this._trailers];
  }

  getTrailers(category: string) {
  }

  getAllTrailers() {
    this.http.get<Trailer[]>('http://localhost:3000/peliculas/all')
      .subscribe(async (data) => {
        this._trailers = data;
        await this.getCategories(this._trailers);
      });
  }


  getTrailerById(id: string) {
    return this.http.get<Trailer>(`http://localhost:3000/peliculas/${id}`)

  }

  addTrailer(trailer: Trailer) {

    const newTrailer = {
      Titulo: trailer.Titulo,
      Lanzamiento: trailer.Lanzamiento,
      Director_es: trailer.Director_es,
      Actores: trailer.Actores,
      img: trailer.img,
      descripcion: trailer.descripcion,
      link: trailer.link,
      Categoria: trailer.Categoria
    }

    return this.http.post('http://localhost:3000/peliculas/add', newTrailer)

  }

  deleteTrailer(category: string, id: string) {

  }

  updateTrailer(category: string, id: string, trailer: string) {
  }

  private getCategories(_trailers: Trailer[]) {
    _trailers.forEach(trailer => {
      const category = this.trailerCategory.find((item) => item.Categoria === trailer.Categoria);
      if (category) {
        category.trailer.push(trailer);
      } else {
        this.trailerCategory.push({
          Categoria: trailer.Categoria,
          trailer: [trailer]
        });
      }
    });
    console.log(this.trailerCategory)
  }

}
