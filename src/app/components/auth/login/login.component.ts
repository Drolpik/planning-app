import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$')
        ]
      ],
      password: [null, Validators.required]
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.authService.login({
        email: this.loginForm.value.login,
        password: this.loginForm.value.password
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
