import { Component, Input } from '@angular/core';

import { TrainingsData } from 'src/app/shared/interfaces/trainingsData.model';

@Component({
  selector: 'app-pick-for-me-tab',
  templateUrl: './pick-for-me-tab.component.html',
  styleUrls: ['./pick-for-me-tab.component.scss']
})
export class PickForMeTabComponent {
  @Input() trainingsData: TrainingsData[];

  @Input() caloriesToBurn: number;

  randomTraining: TrainingsData[] = [];

  buttonClick = false;

  pickRandomWorkout(): void {
    this.randomTraining = [];
    this.randomTraining.push(
      this.trainingsData[Math.floor(Math.random() * this.trainingsData.length)]
    );
  }
}
