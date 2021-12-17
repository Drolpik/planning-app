import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DailyMealsService } from 'src/app/core/services/daily-meals/daily-meals.service';
import { MealData } from 'src/app/shared/interfaces/mealsData.mode';

@Component({
  selector: 'app-daily-meals',
  templateUrl: './daily-meals.component.html',
  styleUrls: ['./daily-meals.component.scss']
})
export class DailyMealsComponent implements OnInit, OnDestroy {
  mealsData: MealData[];

  mealsDataSubscription: Subscription;

  constructor(
    private dailyMealsService: DailyMealsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.mealsDataSubscription = this.dailyMealsService
      .getDailyMealsData(this.authService.currentUserId)
      .subscribe((data: any) => {
        this.mealsData = data.meals;
      });
  }

  ngOnDestroy(): void {
    this.mealsDataSubscription.unsubscribe();
  }
}
