import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .containerr {
      padding: 20px;
      border: 1px solid #ccc;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

    }
    .containerr h1 {
      text-align: center;
    }
    .containerr form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .containerr form input {
      margin: 10px;
      width: 300px;
      height: 30px;
      border-radius: 5px;
      border: 1px solid #ccc;
      padding: 10px;
    }

    .containerr form input[type="checkbox"] {
      margin: 10px;
      width: 20px;
      height: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
      padding: 10px;

    }
    .containerr form button {
      margin: 10px;
      width: 300px;
      border-radius: 5px;
      padding: 10px;
      font-weight: bold;
    }

  `]
})
export class LoginComponent {


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  });
  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }

  login() {
    const {email, password, remember} = this.loginForm.value;
    this.authService.login(email!, password!);
    this.router.navigateByUrl('/traillers/home');
  }

}
