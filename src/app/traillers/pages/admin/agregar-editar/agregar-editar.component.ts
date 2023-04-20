import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TraillersService} from "../../../services/traillers.service";
import {Trailer} from "../../../interfaces/category.interface";

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.css']
})
export class AgregarEditarComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,
              private ts: TraillersService,
              private router: Router
  ) {
  }

  trailer: Trailer = {
    _id: '',
    Titulo: '',
    img: '',
    Categoria: '',
    link: '',
    descripcion: '',
    Actores: [],
    Director_es: '',
    Lanzamiento: 0
  }


  ngOnInit() {
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .subscribe(params => {

        this.ts.getTrailerById(params['id'])
          .subscribe((data) => {
            this.trailer = data;
            // console.log(this.trailer)
          })
      })
  }
}
