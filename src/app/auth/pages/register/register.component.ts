import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent {

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    checkPassword: ['', [Validators.required, Validators.minLength(6)]],
    terms: [false, [Validators.requiredTrue]]
  });


  constructor(private fb: FormBuilder,
    private authService: AuthService,
    ) { }
  
  register() {
    const {name, email, password} = this.registerForm.value;
    
    this.authService.register(name!, email!, password!);
  }



}
