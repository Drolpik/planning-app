import { Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { FullMealDialogComponent } from '../full-meal-dialog/full-meal-dialog.component';

@Component({
  selector: 'app-meal-expand-list',
  templateUrl: './meal-expand-list.component.html',
  styleUrls: ['./meal-expand-list.component.scss']
})
export class MealExpandListComponent {
  @Input() data: any;

  @Input() mode: string;

  panelOpenState = false;

  constructor(private dialog: MatDialog) {}

  openDialog(mealData: any): void {
    const dialogRef = this.dialog.open(FullMealDialogComponent, {
      data: { mealData: mealData, mode: this.mode }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  addMeal(meal: any): void {
    console.log('Meal added');
    console.log(meal);
  }
}
