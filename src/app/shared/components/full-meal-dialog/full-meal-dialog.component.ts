import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DailyMealsService } from 'src/app/core/services/daily-meals/daily-meals.service';
import { MealData, MealItem, StepItem } from '../../interfaces/mealsData.mode';

@Component({
  selector: 'app-full-meal-dialog',
  templateUrl: './full-meal-dialog.component.html',
  styleUrls: ['./full-meal-dialog.component.scss']
})
export class FullMealDialogComponent implements OnInit {
  mealData: MealData;

  macroList: { name: string; amount: number }[];

  ingredients: MealItem[];

  steps: StepItem[];

  mode: string;

  constructor(
    public dialogRef: MatDialogRef<FullMealDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dailyMealsService: DailyMealsService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.mode = this.data.mode;

    this.mealData = this.data.mealData;

    this.ingredients = this.mealData.ingredients;

    this.steps = this.mealData.steps;

    this.macroList = [
      {
        name: 'Protein',
        amount: Math.round(this.mealData.nutrients[3].amount)
      },
      {
        name: 'Fat',
        amount: Math.round(this.mealData.nutrients[1].amount)
      },
      {
        name: 'Carbs',
        amount: Math.round(this.mealData.nutrients[2].amount)
      }
    ];
  }

  addMeal(): void {
    this.dailyMealsService.addNewMeal(
      this.authService.currentUserId,
      this.mealData
    );
    this.dialogRef.close();
  }
}
