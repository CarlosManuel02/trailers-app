import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
    localStorage.getItem('token') && (this.user = JSON.parse(localStorage.getItem('token')!));
  }

  api = environment.baseUrl;

  private user: any = {
    name: 'asas',
    email: '1234@test.test',
    password: 123456,
    isAdmin: true
  }

  get user$() {
    return this.user;
  }

  login(email: string, password: string) {
    this.http.post(`${this.api}auth/`, {email, password})
      .subscribe(resp => {
          this.user = resp;
          localStorage.setItem('token', JSON.stringify(resp));
        }
      )
    return this.user;

  }

  logout() {
    console.log('logout');
  }

  register(nombre: string, email: string, password: string) {
    const isAdmin = false;
    this.http.post(`${this.api}auth/new`, {nombre, email, password, isAdmin})
      .subscribe(resp => {
          this.user = resp;
          localStorage.setItem('token', JSON.stringify(resp));
        }
      )
    return this.user;
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
