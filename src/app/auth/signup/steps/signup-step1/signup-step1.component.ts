import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-step1',
  templateUrl: './signup-step1.component.html',
  styleUrls: ['./signup-step1.component.scss']
})
export class SignupStep1Component {
  @Input() signUpForm: FormGroup;

  step1Submitted() {
    this.signUpForm.get('userData')?.get('email')?.markAsTouched();
    this.signUpForm.get('userData')?.get('email')?.updateValueAndValidity();
    this.signUpForm.get('userData')?.get('password')?.markAsTouched();
    this.signUpForm.get('userData')?.get('password')?.updateValueAndValidity();
  }
}
