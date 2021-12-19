import { Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DailyMealsService } from 'src/app/core/services/daily-meals/daily-meals.service';
import { DailyProgressService } from 'src/app/core/services/daily-progress/daily-progress.service';
import { MealData } from '../../interfaces/mealsData.mode';
import { DeleteMealDialogComponent } from '../delete-meal-dialog/delete-meal-dialog.component';
import { FullMealDialogComponent } from '../full-meal-dialog/full-meal-dialog.component';

@Component({
  selector: 'app-meal-expand-list',
  templateUrl: './meal-expand-list.component.html',
  styleUrls: ['./meal-expand-list.component.scss']
})
export class MealExpandListComponent {
  @Input() data: MealData[];

  @Input() mode: string;

  panelOpenState = false;

  constructor(
    private dialog: MatDialog,
    private dailyMealsService: DailyMealsService,
    private dailyProgressService: DailyProgressService,
    private authService: AuthService
  ) {}

  openFullMealsDialog(mealData: MealData): void {
    this.dialog.open(FullMealDialogComponent, {
      data: { mealData: mealData, mode: this.mode }
    });
  }

  addMeal(meal: MealData): void {
    this.dailyMealsService.addNewMeal(this.authService.currentUserId, meal);
    this.dailyProgressService.updateCaloriesAndMacros(
      this.authService.currentUserId,
      Math.round(meal.nutrients[0].amount),
      Math.round(meal.nutrients[3].amount),
      Math.round(meal.nutrients[1].amount),
      Math.round(meal.nutrients[2].amount),
      1
    );
  }

  deleteMeal(meal: MealData): void {
    this.dialog.open(DeleteMealDialogComponent, {
      width: '400px',
      data: { mealData: meal }
    });
  }
}
