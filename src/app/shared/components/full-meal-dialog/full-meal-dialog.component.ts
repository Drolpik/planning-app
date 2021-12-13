import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-full-meal-dialog',
  templateUrl: './full-meal-dialog.component.html',
  styleUrls: ['./full-meal-dialog.component.scss']
})
export class FullMealDialogComponent implements OnInit {
  mealData: any;

  macroList: any[];

  ingredients: any[];

  steps: any[];

  mode: string;

  constructor(
    public dialogRef: MatDialogRef<FullMealDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.mode = this.data.mode;

    this.mealData = this.data.mealData;

    this.ingredients = this.mealData.nutrition.ingredients;

    this.steps = this.mealData.analyzedInstructions[0].steps;

    this.macroList = [
      {
        name: 'Protein',
        amount: Math.round(this.mealData.nutrition.nutrients[8].amount)
      },
      {
        name: 'Fat',
        amount: Math.round(this.mealData.nutrition.nutrients[1].amount)
      },
      {
        name: 'Carbs',
        amount: Math.round(this.mealData.nutrition.nutrients[3].amount)
      }
    ];
  }

  addMeal(): void {
    console.log('Meal added');
    console.log(this.mealData);
  }
}
