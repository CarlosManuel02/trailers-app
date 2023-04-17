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
  private _trailers: Trailer[] = []

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
    return this._trailers.find(trailer => trailer._id === id)
  }

  addTrailer(category: string, trailer: string) {
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
