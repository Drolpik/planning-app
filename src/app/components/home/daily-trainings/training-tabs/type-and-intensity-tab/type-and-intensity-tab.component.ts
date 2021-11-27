import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface WorkoutTypes {
  id: number;
  value: string;
}

interface IntensityLevels {
  id: number;
  value: string;
}

@Component({
  selector: 'app-type-and-intensity-tab',
  templateUrl: './type-and-intensity-tab.component.html',
  styleUrls: ['./type-and-intensity-tab.component.scss']
})
export class TypeAndIntensityTabComponent {
  typeAndIntensityForm: FormGroup;

  workoutTypes: WorkoutTypes[] = [
    { id: 1, value: 'running' },
    { id: 2, value: 'walking' },
    { id: 3, value: 'bicycling' },
    { id: 4, value: 'conditioning exercise' },
    { id: 5, value: 'dancing' },
    { id: 6, value: 'home activities' },
    { id: 7, value: 'sports' },
    { id: 8, value: 'water activities' }
  ];

  intensityLevels: IntensityLevels[] = [
    { id: 1, value: 'light' },
    { id: 2, value: 'moderate' },
    { id: 3, value: 'hight' }
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
