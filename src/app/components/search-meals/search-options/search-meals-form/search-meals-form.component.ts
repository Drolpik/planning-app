import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { SearchMealsService } from 'src/app/core/services/search-meals/search-meals.service';

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

  searchResult: any;

  mealType: MealType[] = [
    { value: 'Gluten Free' },
    { value: 'Ketogenic' },
    { value: 'Paleo' },
    { value: 'Vegan' },
    { value: 'Vegetarian' }
  ];

  constructor(
    private fb: FormBuilder,
    private searchMealsService: SearchMealsService
  ) {}

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
      this.searchForm.get('ingredients')?.value.push(value);
    }

    event.chipInput?.clear();
  }

  removIngredient(ingredient: string): void {
    const index = this.searchForm.get('ingredients')?.value.indexOf(ingredient);

    if (index >= 0) {
      this.searchForm.get('ingredients')?.value.splice(index, 1);
    }
  }

  search(): void {
    if (this.searchForm.valid) {
      console.log('Search submitted!');
      this.formSubmitted = true;
      console.log(this.searchForm.value);
      if (this.mode === 'advanced') {
        console.log('Advanced');
        this.searchMealsService
          .getMealsByAdvancedSearch(this.searchForm)
          .subscribe((meals: any) => {
            this.searchResult = meals.results;
            console.log(this.searchResult);
          });
      } else {
        console.log('Basic');
        this.searchMealsService
          .getMealsByBasicSearch(this.searchForm)
          .subscribe((meals: any) => {
            this.searchResult = meals.results;
            console.log(meals.results);
          });
      }
    } else {
      this.searchForm.markAllAsTouched();
    }
  }
}
