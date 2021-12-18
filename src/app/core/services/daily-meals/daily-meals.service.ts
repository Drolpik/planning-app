import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { arrayUnion, arrayRemove } from 'firebase/firestore';
import { MealData } from 'src/app/shared/interfaces/mealsData.mode';
import { ToastService } from 'src/app/shared/services/toasts/toast.service';
import { DailyProgressService } from '../daily-progress/daily-progress.service';

@Injectable({
  providedIn: 'root'
})
export class DailyMealsService {
  constructor(
    private db: AngularFirestore,
    private toastService: ToastService,
    private dailyProgressService: DailyProgressService
  ) {}

  createDailyMealsData(uid: string | undefined): void {
    this.db.doc(`dailyMealsData/${uid}`).set({
      meals: []
    });
  }

  getDailyMealsData(uid: string) {
    return this.db.doc(`dailyMealsData/${uid}`).valueChanges();
  }

  addNewMeal(uid: string, meal: MealData) {
    this.db
      .doc(`dailyMealsData/${uid}`)
      .update({
        meals: arrayUnion(meal)
      })
      .then(() => {
        this.toastService.customToast('Meal added successfully');
      })
      .catch((error) => {
        this.toastService.customToast(
          'An error occurred while adding the meal'
        );
        console.log(error);
      });
  }

  deleteMeal(uid: string, meal: MealData) {
    this.db
      .doc(`dailyMealsData/${uid}`)
      .update({
        meals: arrayRemove(meal)
      })
      .then(() => {
        this.toastService.customToast('Meal deleted successfully');
      })
      .catch((error) => {
        this.toastService.customToast(
          'An error occurred while deleting the meal'
        );
        console.log(error);
      });
  }
}
