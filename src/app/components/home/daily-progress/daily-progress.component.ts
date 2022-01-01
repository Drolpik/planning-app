import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DailyProgressService } from 'src/app/core/services/daily-progress/daily-progress.service';

@Component({
  selector: 'app-daily-progress',
  templateUrl: './daily-progress.component.html',
  styleUrls: ['./daily-progress.component.scss']
})
export class DailyProgressComponent implements OnInit, OnDestroy {
  currentCalories = 0;
  caloriesLimit = 0;
  caloriesProgress: number;

  currentProtein = 0;
  proteinLimit = 0;
  proteinProgress: number;

  currentFat = 0;
  fatLimit = 0;
  fatProgress: number;

  currentCarbs = 0;
  carbsLimit = 0;
  carbsProgress: number;

  progresses: any[] = [];

  dailyProgressDataSub: Subscription;

  burnedCalories = 0;

  constructor(
    private authService: AuthService,
    private dailyProgressService: DailyProgressService
  ) {}

  ngOnInit() {
    this.getDailyProgressData();
  }

  ngOnDestroy(): void {
    if (this.dailyProgressDataSub !== undefined) {
      this.dailyProgressDataSub.unsubscribe();
    }
  }

  getDailyProgressData() {
    this.dailyProgressDataSub = this.dailyProgressService
      .getDailyProgressData(this.authService.currentUserId)
      .subscribe((currentData: any) => {
        this.setDailyVariables(currentData);
        this.setDailyProgress();
        this.setProgressArray();
        this.isTrainingNeeded();
      });
  }

  setDailyVariables(currentData: any): void {
    this.caloriesLimit = currentData.caloriesLimit;
    this.currentCalories = currentData.currentCalories;

    this.proteinLimit = currentData.proteinLimit;
    this.currentProtein = currentData.currentProtein;

    this.fatLimit = currentData.fatLimit;
    this.currentFat = currentData.currentFat;

    this.carbsLimit = currentData.carbsLimit;
    this.currentCarbs = currentData.currentCarbs;

    this.burnedCalories = currentData.burnedCalories;
  }

  setDailyProgress(): void {
    this.caloriesProgress = (this.currentCalories / this.caloriesLimit) * 100;
    this.proteinProgress = (this.currentProtein / this.proteinLimit) * 100;
    this.fatProgress = (this.currentFat / this.fatLimit) * 100;
    this.carbsProgress = (this.currentCarbs / this.carbsLimit) * 100;
  }

  setProgressArray(): void {
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

  isTrainingNeeded(): void {
    if (this.currentCalories - this.burnedCalories > this.caloriesLimit) {
      const caloriesToBurn =
        this.currentCalories - this.burnedCalories - this.caloriesLimit;
      this.dailyProgressService.caloriesExceeded.next({
        caloriesExceededStatus: true,
        caloriesToBurn: caloriesToBurn
      });
    } else {
      this.dailyProgressService.caloriesExceeded.next({
        caloriesExceededStatus: false,
        caloriesToBurn: null
      });
    }
  }
}
