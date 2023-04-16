import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  private user = {
    userName: 'asas',
    email: '1234@test.test',
    password: 123456,
    token: '123456789',
    isAdmin: true
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

  validateAdminAndToken() {
    return new Observable<boolean>(observer => {
      if (this.user.isAdmin) {
        console.log("You are an ADMIN")
        observer.next(true);
        observer.complete();
      } else {
        console.log("You are NOT an ADMIN")
        observer.next(false);
        observer.complete();
      }
    })
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
