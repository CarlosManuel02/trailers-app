import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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


}
