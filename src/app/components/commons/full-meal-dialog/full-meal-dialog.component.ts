import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-full-meal-dialog',
  templateUrl: './full-meal-dialog.component.html',
  styleUrls: ['./full-meal-dialog.component.scss']
})
export class FullMealDialogComponent implements OnInit {
  macroList: any[];

  ingredients: any[];

  steps: any[];

  constructor(
    public dialogRef: MatDialogRef<FullMealDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.ingredients = this.data.ingredients;

    this.steps = this.data.steps;

    this.macroList = [
      {
        name: 'Protein',
        amount: this.data.macrosInGram.protein
      },
      {
        name: 'Fat',
        amount: this.data.macrosInGram.fat
      },
      {
        name: 'Carbs',
        amount: this.data.macrosInGram.carbs
      }
    ];
  }
}
