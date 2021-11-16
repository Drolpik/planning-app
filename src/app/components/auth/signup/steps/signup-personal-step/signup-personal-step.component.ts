import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-personal-step',
  templateUrl: './signup-personal-step.component.html',
  styleUrls: ['./signup-personal-step.component.scss']
})
export class SignupPersonalStepComponent {
  @Input() signUpForm: FormGroup;
}
