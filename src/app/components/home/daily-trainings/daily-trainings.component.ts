import { Component } from '@angular/core';

import { traininsData } from './trainings-data';

@Component({
  selector: 'app-daily-trainings',
  templateUrl: './daily-trainings.component.html',
  styleUrls: ['./daily-trainings.component.scss']
})
export class DailyTrainingsComponent {
  trainingsStatus = true;

  excessCalories = 500;

  trainingsData = traininsData;
}
