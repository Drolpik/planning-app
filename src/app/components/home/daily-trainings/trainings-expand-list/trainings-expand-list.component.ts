import { Component, Input } from '@angular/core';
import { CommonsMethodsService } from 'src/app/shared/services/commons-methods.service';
import { TrainingsData } from '../trainings-data';

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
}
