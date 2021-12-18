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
      userAccount: this.fb.group({
        email: [
          null,
          [
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$')
          ]
        ],
        password: [null, [Validators.required, Validators.minLength(6)]]
      }),
      userPersonal: this.fb.group({
        dateOfBirth: [null, Validators.required],
        height: [
          null,
          [Validators.required, Validators.min(100), Validators.max(250)]
        ],
        weight: [
          null,
          [Validators.required, Validators.min(20), Validators.max(300)]
        ],
        gender: [null, Validators.required]
      }),
      activityAndGoal: this.fb.group({
        activityLevel: [null, Validators.required],
        dietGoal: [null, Validators.required]
      })
    });
  }
}
