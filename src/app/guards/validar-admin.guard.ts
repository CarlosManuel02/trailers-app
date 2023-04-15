import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router';
import {Observable, tap} from 'rxjs';
import {AuthService} from "../auth/services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ValidarAdminGuard implements CanActivate, CanLoad {

  constructor(private authS: AuthService, private router: Router) {
  }

  canActivate(): Observable<boolean> | boolean {

    return this.authS.validateAdminAndToken()
      .pipe(
        tap(valid => {
          if (!valid) {
            this.router.navigate(['/auth']);
          }
        })
      )

  }

  canLoad(): Observable<boolean> | boolean {

    return this.authS.validateAdminAndToken()
      .pipe(
        tap(valid => {
          if (!valid) {
            this.router.navigate(['/auth']);
          }
        })
      )
  }
}
