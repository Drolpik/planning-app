import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  formSubmitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  submit() {
    console.log('Form submitted!');
    console.log(this.loginForm.value);
    this.formSubmitted = true;
  }
}
