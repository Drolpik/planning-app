import { Component, Input } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { MatChipInputEvent } from '@angular/material/chips';

interface Ingredient {
  name: string;
}

@Component({
  selector: 'app-search-meals-form',
  templateUrl: './search-meals-form.component.html',
  styleUrls: ['./search-meals-form.component.scss']
})
export class SearchMealsFormComponent {
  @Input() mode: string;

  selectable = true;

  removable = true;

  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  ingredients: Ingredient[] = [];

  addIngredient(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.ingredients.push({ name: value });
    }

    event.chipInput?.clear();
  }

  removIngredient(ingredient: Ingredient): void {
    const index = this.ingredients.indexOf(ingredient);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  search(): void {}
}
