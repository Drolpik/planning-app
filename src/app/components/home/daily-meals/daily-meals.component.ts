import { Component } from '@angular/core';

import { mealsData } from './temp.data';

@Component({
  selector: 'app-daily-meals',
  templateUrl: './daily-meals.component.html',
  styleUrls: ['./daily-meals.component.scss']
})
export class DailyMealsComponent {
  data = mealsData;

  panelOpenState = false;
}
