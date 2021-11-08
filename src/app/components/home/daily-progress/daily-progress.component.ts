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

  ngOnInit() {
    this.caloriesProgress = (this.currentCalories / this.caloriesLimit) * 100;
    this.proteinProgress = (this.currentProtein / this.proteinLimit) * 100;
    this.fatProgress = (this.currentFat / this.fatLimit) * 100;
    this.carbsProgress = (this.currentCarbs / this.carbsLimit) * 100;
  }
}
