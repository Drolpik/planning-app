import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DailyMealsService } from 'src/app/core/services/daily-meals/daily-meals.service';
import { DailyProgressService } from 'src/app/core/services/daily-progress/daily-progress.service';
import { MealData, MealItem, StepItem } from '../../interfaces/mealsData.mode';
import { DeleteMealDialogComponent } from '../delete-meal-dialog/delete-meal-dialog.component';

@Component({
  selector: 'app-full-meal-dialog',
  templateUrl: './full-meal-dialog.component.html',
  styleUrls: ['./full-meal-dialog.component.scss']
})
export class FullMealDialogComponent implements OnInit, OnDestroy {
  mealData: MealData;

  macroList: { name: string; amount: number }[];

  ingredients: MealItem[];

  steps: StepItem[];

  mode: string;

  dialogRefSub: Subscription;

  constructor(
    public fullMealDialogRef: MatDialogRef<FullMealDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private dailyMealsService: DailyMealsService,
    private dailyProgressService: DailyProgressService,
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

  ngOnDestroy(): void {
    this.dialogRefSub.unsubscribe();
  }

  addMeal(): void {
    this.dailyMealsService.addNewMeal(
      this.authService.currentUserId,
      this.mealData
    );
    this.dailyProgressService.updateCaloriesAndMacros(
      this.authService.currentUserId,
      Math.round(this.mealData.nutrients[0].amount),
      Math.round(this.mealData.nutrients[3].amount),
      Math.round(this.mealData.nutrients[1].amount),
      Math.round(this.mealData.nutrients[2].amount),
      1
    );
    this.fullMealDialogRef.close();
  }

  deleteMeal(): void {
    const deleteMealDialogRef = this.dialog.open(DeleteMealDialogComponent, {
      width: '400px',
      data: { mealData: this.mealData }
    });

    this.dialogRefSub = deleteMealDialogRef.afterClosed().subscribe(() => {
      this.fullMealDialogRef.close();
    });
  }
}
