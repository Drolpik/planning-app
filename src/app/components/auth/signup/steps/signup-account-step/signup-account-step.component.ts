import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-account-step',
  templateUrl: './signup-account-step.component.html',
  styleUrls: ['./signup-account-step.component.scss']
})
export class SignupAccountStepComponent {
  @Input() signUpForm: FormGroup;
}
