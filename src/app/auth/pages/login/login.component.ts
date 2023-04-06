import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  });
  constructor(private fb: FormBuilder,
    private authService: AuthService,

    ) { }

  login() {
    const {email, password, remember} = this.loginForm.value;
    this.authService.login(email!, password!);
  }

}
