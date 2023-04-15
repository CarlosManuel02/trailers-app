import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarOpen: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }


  manageLinks(link:string){
    const currentRoute = this.activeRoute.snapshot.url[0].path;
    console.log('currentRoute', currentRoute)

    if(currentRoute.includes('detail')){
      this.router.navigate([`./traillers/${link}`]);
    }
    else if(currentRoute.includes('list')){
      this.router.navigate([`./traillers/${link}`]);
    }
    else if(currentRoute.includes('home')){
      this.router.navigate([`./traillers/${link}`]);
    }
    else if (currentRoute.includes('traillers')){
      this.router.navigate([`./traillers/${link}`]);
    }
  }
}
