import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  login(email: string, password: string) {
    console.log('login');
  }

  logout() {
    console.log('logout');
  }

  register(name: string, email: string, password: string) {
    console.log('register');
  }

  validateToken() {
    console.log('validateToken');
  }


  validateJWT() {
    return new Observable<boolean>(observer => {
      setTimeout(() => {
        observer.next(true);
        observer.complete();
      }, 1500);
    });
  }

}
