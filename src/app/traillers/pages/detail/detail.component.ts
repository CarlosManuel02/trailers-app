import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {TraillersService} from "../../services/traillers.service";
import {Trailer} from "../../interfaces/category.interface";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private ts: TraillersService,
  ) {
  }

  trailer: Trailer | undefined;

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.ts.getTrailerById(params['id'])
          .subscribe((data) => {
            this.trailer = data;
            console.log(this.trailer)
          })
      })
  }


}
