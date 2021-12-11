import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { DailyProgressService } from 'src/app/core/services/daily-progress/daily-progress.service';
import { TrainingsService } from 'src/app/core/services/trainings/trainings.service';
import { TrainingsData } from 'src/app/shared/interfaces/trainingsData.model';

@Component({
  selector: 'app-daily-trainings',
  templateUrl: './daily-trainings.component.html',
  styleUrls: ['./daily-trainings.component.scss']
})
export class DailyTrainingsComponent implements OnInit, OnDestroy {
  trainingsStatus = false;

  excessCalories = 0;

  trainingsData: TrainingsData[] = [];

  trainingsDataSubscription: Subscription;

  constructor(
    private trainingsService: TrainingsService,
    private dailyProgressService: DailyProgressService
  ) {}

  ngOnInit(): void {
    this.trainingsDataSubscription =
      this.trainingsService.trainingsDataChanged.subscribe((trainings) => {
        this.trainingsData = trainings;
      });
    this.trainingsService.fetchTrainingsData();

    this.dailyProgressService.caloriesExceeded.subscribe((result) => {
      this.trainingsStatus = result.caloriesExceededStatus;
      this.excessCalories = result.caloriesToBurn;
    });
  }

  ngOnDestroy(): void {
    this.trainingsDataSubscription.unsubscribe();
  }
}
