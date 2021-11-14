import { Component, Input, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Ingredient {
  name: string;
}

interface MealType {
  value: string;
}

@Component({
  selector: 'app-search-meals-form',
  templateUrl: './search-meals-form.component.html',
  styleUrls: ['./search-meals-form.component.scss']
})
export class SearchMealsFormComponent implements OnInit {
  @Input() mode: string;

  selectable = true;

  removable = true;

  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  searchForm: FormGroup;

  formSubmitted = false;

  mealType: MealType[] = [
    { value: 'Vegan' },
    { value: 'Vegetarian' },
    { value: 'Paleo' },
    { value: 'Ketogenic' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      caloriesAmount: [null, Validators.required],
      ingredients: [[]],
      mealType: [null],
      proteinAmount: [null],
      fatAmount: [null],
      carbsAmount: [null]
    });
  }

  addIngredient(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.searchForm.get('ingredients')?.value.push({ name: value });
    }

    event.chipInput?.clear();
  }

  removIngredient(ingredient: Ingredient): void {
    const index = this.searchForm.get('ingredients')?.value.indexOf(ingredient);

    if (index >= 0) {
      this.searchForm.get('ingredients')?.value.splice(index, 1);
    }
  }

  search(): void {
    console.log('Search submitted!');
    console.log(this.searchForm.value);
    this.formSubmitted = true;
  }
}
