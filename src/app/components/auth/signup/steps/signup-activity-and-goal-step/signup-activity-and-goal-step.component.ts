import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface DietGoals {
  value: string;
}

interface ActivityLevels {
  value: string;
}

@Component({
  selector: 'app-signup-activity-and-goal-step',
  templateUrl: './signup-activity-and-goal-step.component.html',
  styleUrls: ['./signup-activity-and-goal-step.component.scss']
})
export class SignupActivityAndGoalStepComponent {
  @Input() signUpForm: FormGroup;

  dietGoals: DietGoals[] = [
    { value: 'Lose weight' },
    { value: 'Keep weight' },
    { value: 'Build muscle' }
  ];

  activityLevels: ActivityLevels[] = [
    { value: 'Lack, sedentary work' },
    { value: 'Low (1-2 workouts, sedentary work)' },
    { value: 'Moderate (3-4 workouts, sedentary work)' },
    { value: 'Active (3-4 workouts, work in motion)' },
    { value: 'Very active (daily training, work in motion)' }
  ];
}
