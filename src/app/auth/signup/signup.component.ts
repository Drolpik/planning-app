import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.fb.group({
      userData: this.fb.group({
        email: [null, [Validators.required, Validators.email]],
        password: [null, Validators.required]
      }),
      parameters: this.fb.group({
        age: [null, Validators.required],
        height: [null, Validators.required]
      })
    });
  }
}
