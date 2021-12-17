import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SearchMealsService {
  private readonly API_KEY = '6444e038abbd468492263d6feddd17bf';

  private ROOT_URL = `https://api.spoonacular.com/recipes/complexSearch?query=&apiKey=${this.API_KEY}`;

  private BASE_QUERY =
    '&instructionsRequired=true&addRecipeNutrition=true&number=4';

  constructor(private http: HttpClient) {}

  getMealsByBasicSearch(searchForm: FormGroup) {
    const caloriesAmount = searchForm.value.caloriesAmount;
    const ingredients = searchForm.value.ingredients.join(',');

    let searchQueries: string;

    if (searchForm.value.ingredients.length === 0) {
      searchQueries = `&maxCalories=${caloriesAmount}`;
    } else {
      searchQueries =
        searchQueries = `&maxCalories=${caloriesAmount}&includeIngredients=${ingredients}`;
    }
    return this.http.get(`${this.ROOT_URL}${this.BASE_QUERY}${searchQueries}`);
  }

  getMealsByAdvancedSearch(searchForm: FormGroup) {
    const SEARCH_QUERIES = this.setSearchQueries(searchForm.value);

    return this.http.get(`${this.ROOT_URL}${this.BASE_QUERY}${SEARCH_QUERIES}`);
  }

  private setSearchQueries(searchValues: any) {
    let queries = '';

    for (const value in searchValues) {
      switch (value) {
        case 'caloriesAmount':
          queries = queries.concat(`&maxCalories=${searchValues[value]}`);
          break;
        case 'ingredients':
          if (Array.isArray(searchValues[value])) {
            const ingredients = searchValues.ingredients.join(',');
            if (searchValues[value].length > 0) {
              queries = queries.concat(`&includeIngredients=${ingredients}`);
            }
          }
          break;
        case 'mealType':
          if (searchValues[value]) {
            queries = queries.concat(`&diet=${searchValues[value]}`);
          }
          break;
        case 'proteinAmount':
          if (searchValues[value]) {
            queries = queries.concat(`&minProtein=${searchValues[value]}`);
          }
          break;
        case 'fatAmount':
          if (searchValues[value]) {
            queries = queries.concat(`&minFat=${searchValues[value]}`);
          }
          break;
        case 'carbsAmount':
          if (searchValues[value]) {
            queries = queries.concat(`&minCarbs=${searchValues[value]}`);
          }
          break;
        default:
          throw new Error('Invalid search property');
      }
    }
    return queries;
  }
}
