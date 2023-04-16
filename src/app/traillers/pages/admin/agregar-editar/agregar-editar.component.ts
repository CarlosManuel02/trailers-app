import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TraillersService} from "../../../services/traillers.service";
import {Trailer} from "../../../interfaces/category.interface";

@Component({
  selector: 'app-agregar-editar',
  templateUrl: './agregar-editar.component.html',
  styleUrls: ['./agregar-editar.component.css']
})
export class AgregarEditarComponent {


  constructor(private activatedRoute: ActivatedRoute,
              private ts: TraillersService,
  ) {
  }
  trailer: Trailer | undefined;

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.trailer = this.ts.getTrailerById(params['id'])

      })
  }
}
