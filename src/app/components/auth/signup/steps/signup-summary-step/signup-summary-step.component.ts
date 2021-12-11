import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AuthService } from '../../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-signup-summary-step',
  templateUrl: './signup-summary-step.component.html',
  styleUrls: ['./signup-summary-step.component.scss']
})
export class SignupSummaryStepComponent {
  @Input() signUpForm: FormGroup;

  constructor(private authService: AuthService) {}

  submit() {
    if (this.signUpForm.valid) {
      this.authService.signUp(this.signUpForm.value);
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
}
