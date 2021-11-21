import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  userDataForm: FormGroup;

  formSubmitted = false;

  dietGoals: { value: string }[] = [
    { value: 'Lose weight' },
    { value: 'Keep weight' },
    { value: 'Build muscle' }
  ];

  activityLevels: { value: string }[] = [
    { value: 'Lack, sedentary work' },
    { value: 'Low (1-2 workouts, sedentary work)' },
    { value: 'Moderate (3-4 workouts, sedentary work)' },
    { value: 'Active (3-4 workouts, work in motion)' },
    { value: 'Very active (daily training, work in motion)' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userDataForm = this.fb.group({
      height: [
        185,
        [Validators.required, Validators.min(100), Validators.max(250)]
      ],
      weight: [
        78,
        [Validators.required, Validators.min(20), Validators.max(300)]
      ],
      gender: ['Male', Validators.required],
      activityLevel: ['Moderate', Validators.required],
      dietGoal: ['Build muscle', Validators.required]
    });
  }

  save(): void {
    console.log('Form submitted!');
    console.log(this.userDataForm.value);
    this.formSubmitted = true;
  }
}
