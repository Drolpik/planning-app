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

  constructor(
    public dialogRef: MatDialogRef<FullMealDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.mealData = this.data.mealData;

    this.ingredients = this.mealData.ingredients;

    this.steps = this.mealData.steps;

    this.macroList = [
      {
        name: 'Protein',
        amount: this.mealData.macrosInGram.protein
      },
      {
        name: 'Fat',
        amount: this.mealData.macrosInGram.fat
      },
      {
        name: 'Carbs',
        amount: this.mealData.macrosInGram.carbs
      }
    ];
  }
}
