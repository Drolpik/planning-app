import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { TrainingsService } from 'src/app/core/services/trainings/trainings.service';
import { TrainingsData } from 'src/app/shared/interfaces/trainingsData.model';

@Component({
  selector: 'app-daily-trainings',
  templateUrl: './daily-trainings.component.html',
  styleUrls: ['./daily-trainings.component.scss']
})
export class DailyTrainingsComponent implements OnInit, OnDestroy {
  trainingsStatus = true;

  excessCalories = 500;

  trainingsData: TrainingsData[] = [];

  trainingsDataSubscription: Subscription;

  constructor(private trainingsService: TrainingsService) {}

  ngOnInit(): void {
    this.trainingsDataSubscription =
      this.trainingsService.trainingsDataChanged.subscribe((trainings) => {
        this.trainingsData = trainings;
      });
    this.trainingsService.fetchTrainingsData();
  }

  ngOnDestroy(): void {
    this.trainingsDataSubscription.unsubscribe();
  }
}
