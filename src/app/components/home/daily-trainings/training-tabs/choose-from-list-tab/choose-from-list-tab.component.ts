import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { TrainingsData } from '../../trainings-data';

export function forbiddenObjectValidator(control: AbstractControl) {
  return typeof control.value !== 'object' || control.value === null
    ? { forbiddenObject: true }
    : null;
}

@Component({
  selector: 'app-choose-from-list-tab',
  templateUrl: './choose-from-list-tab.component.html',
  styleUrls: ['./choose-from-list-tab.component.scss']
})
export class ChooseFromListTabComponent {
  @Input() trainingsData: TrainingsData[];

  chooseFromTheListForm: FormGroup;

  filteredOptions: Observable<TrainingsData[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.chooseFromTheListForm = this.fb.group({
      activity: [null, [Validators.required, forbiddenObjectValidator]]
    });

    this.filteredOptions =
      this.chooseFromTheListForm.controls.activity.valueChanges.pipe(
        startWith(''),
        map((value) => (typeof value === 'string' ? value : value.exercise)),
        map((exercise) =>
          exercise ? this.filterOptions(exercise) : this.trainingsData.slice()
        )
      );
  }

  submitActivity(): void {
    if (this.chooseFromTheListForm.valid) {
      console.log('Form submitted! -> choose from the list');
      console.log(this.chooseFromTheListForm.value.activity);
    } else {
      this.chooseFromTheListForm.markAllAsTouched();
    }
  }

  displayFn(activity: TrainingsData): string {
    return activity && activity.exercise ? activity.exercise : '';
  }

  private filterOptions(exercise: string): TrainingsData[] {
    const filterValue = exercise.toLowerCase();

    return this.trainingsData.filter((option) =>
      option.exercise.toLowerCase().includes(filterValue)
    );
  }
}
