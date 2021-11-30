import { Component, Input } from '@angular/core';

import { TrainingsData } from 'src/app/shared/interfaces/trainingsData.model';
import { CommonsMethodsService } from 'src/app/shared/services/commons-methods.service';

@Component({
  selector: 'app-trainings-expand-list',
  templateUrl: './trainings-expand-list.component.html',
  styleUrls: ['./trainings-expand-list.component.scss']
})
export class TrainingsExpandListComponent {
  @Input() trainingsData: TrainingsData[];

  @Input() caloriesToBurn: number;

  // temp
  tempUserWeight = 78;

  panelOpenState = false;

  constructor(private commonsMethods: CommonsMethodsService) {}

  calculateWorkoutTime(training: TrainingsData): number {
    return this.commonsMethods.calculateWorkoutTime(
      training,
      this.caloriesToBurn,
      this.tempUserWeight
    );
  }

  selectExercise(selectedTraining: TrainingsData): void {
    console.log(selectedTraining);
  }
}
