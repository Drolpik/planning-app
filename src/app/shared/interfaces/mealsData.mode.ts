export interface MealData {
  uuid?: string;
  diets: string[];
  image: string;
  ingredients: MealItem[];
  nutrients: MealItem[];
  readyInMinutes: number;
  steps: StepItem[];
  title: string;
}

export interface MealItem {
  amount: number;
  name: string;
  unit: string;
}

export interface StepItem {
  number: number;
  step: string;
}
