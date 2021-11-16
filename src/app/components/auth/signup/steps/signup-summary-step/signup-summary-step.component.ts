import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-summary-step',
  templateUrl: './signup-summary-step.component.html',
  styleUrls: ['./signup-summary-step.component.scss']
})
export class SignupSummaryStepComponent {
  @Input() signUpForm: FormGroup;

  formSubmitted = false;

  submit() {
    console.log('Form submitted!');
    console.log(this.signUpForm.value);
    this.formSubmitted = true;
  }
}
