import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DailyMealsService } from 'src/app/core/services/daily-meals/daily-meals.service';
import { DailyProgressService } from 'src/app/core/services/daily-progress/daily-progress.service';
import { MealData } from '../../interfaces/mealsData.mode';

@Component({
  selector: 'app-delete-meal-dialog',
  templateUrl: './delete-meal-dialog.component.html',
  styleUrls: ['./delete-meal-dialog.component.scss']
})
export class DeleteMealDialogComponent implements OnInit {
  meal: MealData;

  constructor(
    private dialogRef: MatDialogRef<DeleteMealDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dailyMealsService: DailyMealsService,
    private dailyProgressService: DailyProgressService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.meal = this.data.mealData;
  }

  deleteMeal(): void {
    this.dailyMealsService.deleteMeal(
      this.authService.currentUserId,
      this.meal
    );
    this.dailyProgressService.updateCaloriesAndMacros(
      this.authService.currentUserId,
      Math.round(this.meal.nutrients[0].amount),
      Math.round(this.meal.nutrients[3].amount),
      Math.round(this.meal.nutrients[1].amount),
      Math.round(this.meal.nutrients[2].amount),
      -1
    );
    this.dialogRef.close();
  }
}
