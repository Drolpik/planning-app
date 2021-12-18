import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { SearchMealsService } from 'src/app/core/services/search-meals/search-meals.service';
import {
  MealData,
  MealItem,
  StepItem
} from 'src/app/shared/interfaces/mealsData.mode';

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

  searchResult: MealData[] = [];

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
    this.searchResult = [];

    if (this.searchForm.valid) {
      this.formSubmitted = true;
      if (this.mode === 'advanced') {
        this.searchMealsService
          .getMealsByAdvancedSearch(this.searchForm)
          .subscribe((meals: any) => {
            this.filterSearchData(meals.results);
          });
      } else {
        this.searchMealsService
          .getMealsByBasicSearch(this.searchForm)
          .subscribe((meals: any) => {
            this.filterSearchData(meals.results);
          });
      }
    } else {
      this.searchForm.markAllAsTouched();
    }
  }

  filterSearchData(meals: any): void {
    for (const meal of meals) {
      const nutrients: any[] = [
        meal.nutrition.nutrients[0],
        meal.nutrition.nutrients[1],
        meal.nutrition.nutrients[3],
        meal.nutrition.nutrients[8]
      ];

      const filteredIngredients: MealItem[] = [];
      const filteredNutrients: MealItem[] = [];
      const filterSteps: StepItem[] = [];

      meal.nutrition.ingredients.map((item: any) => {
        delete item.id;
        delete item.nutrients;
        filteredIngredients.push(item);
      });

      nutrients.map((item: any) => {
        delete item.percentOfDailyNeeds;
        delete item.title;
        filteredNutrients.push(item);
      });

      meal.analyzedInstructions[0].steps.map((item: any) => {
        delete item.equipment;
        delete item.ingredients;
        filterSteps.push(item);
      });

      const filteredMeal = {
        title: meal.title,
        image: meal.image,
        readyInMinutes: meal.readyInMinutes,
        nutrients: filteredNutrients,
        diets: meal.diets,
        ingredients: filteredIngredients,
        steps: filterSteps
      };

      this.searchResult.push(filteredMeal);
    }
  }
}
