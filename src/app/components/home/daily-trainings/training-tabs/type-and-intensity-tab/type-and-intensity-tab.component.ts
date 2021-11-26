import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface WorkoutTypes {
  value: string;
}

interface IntensityLevels {
  value: string;
}

@Component({
  selector: 'app-type-and-intensity-tab',
  templateUrl: './type-and-intensity-tab.component.html',
  styleUrls: ['./type-and-intensity-tab.component.scss']
})
export class TypeAndIntensityTabComponent {
  typeAndIntensityForm: FormGroup;

  workoutTypes: WorkoutTypes[] = [{ value: 'Outdoor' }, { value: 'Home' }];

  intensityLevels: IntensityLevels[] = [
    { value: 'Light' },
    { value: 'Average' },
    { value: 'Hight' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.typeAndIntensityForm = this.fb.group({
      type: [null, Validators.required],
      intensity: [null, Validators.required]
    });
  }

  searchByTypeAndIntensity(): void {
    if (this.typeAndIntensityForm.valid) {
      console.log('Form submitted! -> type and intensity:');
      console.log(this.typeAndIntensityForm.value);
    } else {
      this.typeAndIntensityForm.markAllAsTouched();
    }
  }
}
