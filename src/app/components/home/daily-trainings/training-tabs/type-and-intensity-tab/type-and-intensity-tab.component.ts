import { Component, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { TrainingsService } from 'src/app/core/services/trainings/trainings.service';
import { TrainingsData } from 'src/app/shared/interfaces/trainingsData.model';

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
export class TypeAndIntensityTabComponent implements OnDestroy {
  @Input() caloriesToBurn: number;

  typeAndIntensityForm: FormGroup;

  formSubmitted = false;

  resultTrainings: TrainingsData[] = [];

  typeAndIntensitySub: Subscription;

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

  constructor(
    private fb: FormBuilder,
    private trainingService: TrainingsService
  ) {}

  ngOnInit(): void {
    this.typeAndIntensityForm = this.fb.group({
      type: [null, Validators.required],
      intensity: [null, Validators.required]
    });

    this.typeAndIntensitySub =
      this.trainingService.searchTrainingsDataChanged.subscribe(
        (searchTrainings) => {
          this.resultTrainings = searchTrainings;
          console.log(this.resultTrainings);
        }
      );
  }

  ngOnDestroy(): void {
    this.typeAndIntensitySub.unsubscribe();
  }

  searchByTypeAndIntensity(): void {
    if (this.typeAndIntensityForm.valid) {
      this.formSubmitted = true;
      this.resultTrainings = [];

      switch (this.typeAndIntensityForm.value.intensity.value) {
        case 'light':
          this.trainingService.getTrainingByTypeAndLightIntensity(
            this.typeAndIntensityForm.value.type.value
          );
          break;
        case 'moderate':
          this.trainingService.getTrainingByTypeAndModerateIntensity(
            this.typeAndIntensityForm.value.type.value
          );
          break;
        case 'hight':
          this.trainingService.getTrainingByTypeAndHightIntensity(
            this.typeAndIntensityForm.value.type.value
          );
          break;
        default:
          throw new Error('Invalid intensity value');
          break;
      }
    } else {
      this.typeAndIntensityForm.markAllAsTouched();
    }
  }
}
