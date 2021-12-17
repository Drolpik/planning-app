import { Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DailyMealsService } from 'src/app/core/services/daily-meals/daily-meals.service';
import { MealData } from '../../interfaces/mealsData.mode';
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
    private authService: AuthService
  ) {}

  openDialog(mealData: MealData): void {
    const dialogRef = this.dialog.open(FullMealDialogComponent, {
      data: { mealData: mealData, mode: this.mode }
    });

    // dialogRef.afterClosed().subscribe((result: any) => {});
  }

  addMeal(meal: MealData): void {
    this.dailyMealsService.addNewMeal(this.authService.currentUserId, meal);
  }

  deleteMeal(meal: MealData): void {
    this.dailyMealsService.deleteMeal(this.authService.currentUserId, meal);
  }
}
