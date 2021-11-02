import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-step3',
  templateUrl: './signup-step3.component.html',
  styleUrls: ['./signup-step3.component.scss']
})
export class SignupStep3Component {
  @Input() signUpForm: FormGroup;

  formSubmitted = false;

  submit() {
    console.log('Form submitted!');
    console.log(this.signUpForm.value);
    this.formSubmitted = true;
  }
}
