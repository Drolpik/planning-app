import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-progress',
  templateUrl: './daily-progress.component.html',
  styleUrls: ['./daily-progress.component.scss']
})
export class DailyProgressComponent implements OnInit {
  currentCalories = 1200;
  caloriesLimit = 2000;
  caloriesProgress: number;

  currentProtein = 40;
  proteinLimit = 120;
  proteinProgress: number;

  currentFat = 30;
  fatLimit = 70;
  fatProgress: number;

  currentCarbs = 90;
  carbsLimit = 150;
  carbsProgress: number;

  progresses: any[] = [];

  ngOnInit() {
    this.caloriesProgress = (this.currentCalories / this.caloriesLimit) * 100;
    this.proteinProgress = (this.currentProtein / this.proteinLimit) * 100;
    this.fatProgress = (this.currentFat / this.fatLimit) * 100;
    this.carbsProgress = (this.currentCarbs / this.carbsLimit) * 100;

    this.progresses = [
      {
        progress: this.caloriesProgress,
        name: 'Calories',
        currentValue: this.currentCalories,
        limit: this.caloriesLimit
      },
      {
        progress: this.proteinProgress,
        name: 'Protein',
        currentValue: this.currentProtein,
        limit: this.proteinLimit
      },
      {
        progress: this.fatProgress,
        name: 'Fat',
        currentValue: this.currentFat,
        limit: this.fatLimit
      },
      {
        progress: this.carbsProgress,
        name: 'Carbs',
        currentValue: this.currentCarbs,
        limit: this.carbsLimit
      }
    ];
  }
}
