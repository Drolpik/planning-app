import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { traininsData } from './trainings-data';

interface WorkoutTypes {
  value: string;
}

interface IntensityLevels {
  value: string;
}

export interface TrainingsData {
  id: number;
  exercise: string;
  met: number;
}

export function forbiddenObjectValidator(control: AbstractControl) {
  return typeof control.value !== 'object' || control.value === null
    ? { forbiddenObject: true }
    : null;
}

@Component({
  selector: 'app-daily-trainings',
  templateUrl: './daily-trainings.component.html',
  styleUrls: ['./daily-trainings.component.scss']
})
export class DailyTrainingsComponent implements OnInit {
  trainingsStatus = true;

  excessCalories = 500;

  workoutTypes: WorkoutTypes[] = [{ value: 'Outdoor' }, { value: 'Home' }];

  intensityLevels: IntensityLevels[] = [
    { value: 'Light' },
    { value: 'Average' },
    { value: 'Hight' }
  ];

  traininsData = traininsData;

  filteredOptions: Observable<TrainingsData[]>;

  chooseFromTheListForm: FormGroup;

  typeAndIntensityForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.typeAndIntensityForm = this.fb.group({
      type: [null, Validators.required],
      intensity: [null, Validators.required]
    });

    this.chooseFromTheListForm = this.fb.group({
      activity: [null, [Validators.required, forbiddenObjectValidator]]
    });

    this.filteredOptions =
      this.chooseFromTheListForm.controls.activity.valueChanges.pipe(
        startWith(''),
        map((value) => (typeof value === 'string' ? value : value.exercise)),
        map((exercise) =>
          exercise ? this.filterOptions(exercise) : this.traininsData.slice()
        )
      );
  }

  searchByTypeAndIntensity(): void {
    if (this.typeAndIntensityForm.valid) {
      console.log('Form submitted! -> type and intensity:');
      console.log(this.typeAndIntensityForm.value);
    } else {
      this.typeAndIntensityForm.markAllAsTouched();
    }
  }

  submitActivity(): void {
    if (this.chooseFromTheListForm.valid) {
      console.log('Form submitted! -> choose from the list');
      console.log(this.chooseFromTheListForm.value);
    } else {
      this.chooseFromTheListForm.markAllAsTouched();
    }
  }

  pickRandomWorkout(): void {
    console.log('Pick for me -> random workout');
    console.log(
      this.traininsData[Math.floor(Math.random() * this.traininsData.length)]
    );
  }

  displayFn(activity: TrainingsData): string {
    return activity && activity.exercise ? activity.exercise : '';
  }

  private filterOptions(exercise: string): TrainingsData[] {
    const filterValue = exercise.toLowerCase();

    return this.traininsData.filter((option) =>
      option.exercise.toLowerCase().includes(filterValue)
    );
  }
}
