import {Injectable} from '@angular/core';
import {Trailer} from "../interfaces/category.interface";
import {HttpClient} from "@angular/common/http";
import {TrailerCategory} from '../interfaces/trailerCategory.interface';
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

function manageLink(link: string) {
  if (link.includes('watch?v=')) {
    const linkArray = link.split('watch?v=');
    return linkArray[0] + 'embed/' + linkArray[1];
  } else {
    return link;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TraillersService {

  trailerCategory: TrailerCategory[] = []
  private _trailers: Trailer[] = [];

  api = environment.baseUrl;

  constructor(private http: HttpClient) {
    this.getAllTrailers()
  }

  get trailers() {
    return [...this._trailers];
  }

  getTrailers(category: string) {
  }

  getAllTrailers() {
    this.http.get<Trailer[]>(`${this.api}peliculas/all`)
      .subscribe(async (data) => {
        this._trailers = data;
        await this.getCategories(this._trailers);
      });
  }


  getTrailerById(id: string) {
    return this.http.get<Trailer>(`${this.api}peliculas/${id}`)

  }

  addTrailer(trailer: Trailer) {

    const newTrailer = {
      Titulo: trailer.Titulo,
      Lanzamiento: trailer.Lanzamiento,
      Director_es: trailer.Director_es,
      Actores: trailer.Actores,
      img: trailer.img,
      descripcion: trailer.descripcion,
      link: manageLink(trailer.link),
      Categoria: trailer.Categoria
    }

    return this.http.post('${this.api}peliculas/add', newTrailer)

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
