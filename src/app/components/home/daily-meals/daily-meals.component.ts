import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullMealDialogComponent } from '../../commons/full-meal-dialog/full-meal-dialog.component';

import { mealsData } from './temp.data';

@Component({
  selector: 'app-daily-meals',
  templateUrl: './daily-meals.component.html',
  styleUrls: ['./daily-meals.component.scss']
})
export class DailyMealsComponent {
  data = mealsData;

  panelOpenState = false;

  constructor(private dialog: MatDialog) {}

  openDialog(mealData: any): void {
    const dialogRef = this.dialog.open(FullMealDialogComponent, {
      data: mealData
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
