import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { increment } from 'firebase/firestore';
import { Subject } from 'rxjs';

import { UserData } from 'src/app/shared/interfaces/userData.model';
import { CommonsMethodsService } from 'src/app/shared/services/commons-methods/commons-methods.service';
import { ToastService } from 'src/app/shared/services/toasts/toast.service';

@Injectable({
  providedIn: 'root'
})
export class DailyProgressService {
  caloriesExceeded = new Subject<any>();

  constructor(
    private commonsMethodsService: CommonsMethodsService,
    private db: AngularFirestore,
    private toastService: ToastService
  ) {}

  getDailyProgressData(uid: string) {
    return this.db.doc(`dailyProgressData/${uid}`).valueChanges();
  }

  createDailyProgressData(uid: string | undefined, userData: UserData): void {
    const initTEE = this.commonsMethodsService.calculateTEE(userData);
    const macrosPercentages =
      this.commonsMethodsService.calculateMacrosAndFinalTEE(
        initTEE,
        userData.dietGoal
      );

    this.db.doc(`dailyProgressData/${uid}`).set({
      caloriesLimit: macrosPercentages.TEE,
      currentCalories: 0,
      proteinLimit: macrosPercentages.proteinLimit,
      currentProtein: 0,
      fatLimit: macrosPercentages.fatLimit,
      currentFat: 0,
      carbsLimit: macrosPercentages.carbsLimit,
      currentCarbs: 0
    });
  }

  updateDailyProgressData(uid: string, userData: UserData): void {
    const initTEE = this.commonsMethodsService.calculateTEE(userData);
    const macrosPercentages =
      this.commonsMethodsService.calculateMacrosAndFinalTEE(
        initTEE,
        userData.dietGoal
      );

    this.db.doc(`dailyProgressData/${uid}`).update({
      caloriesLimit: macrosPercentages.TEE,
      proteinLimit: macrosPercentages.proteinLimit,
      fatLimit: macrosPercentages.fatLimit,
      carbsLimit: macrosPercentages.carbsLimit
    });
  }

  updateCurrentCalories(uid: string, calories: number): void {
    this.db
      .doc(`dailyProgressData/${uid}`)
      .update({
        currentCalories: calories
      })
      .then(() => {
        this.toastService.customToast('Calories successfully updated');
      })
      .catch((error) => {
        this.toastService.customToast(
          'An error occurred while updating calories'
        );
      });
  }

  updateCaloriesAndMacros(
    uid: string,
    calories: number,
    protein: number,
    fat: number,
    carbs: number,
    incrementOrDecrement: number
  ): void {
    this.db
      .doc(`dailyProgressData/${uid}`)
      .update({
        currentCalories: increment(incrementOrDecrement * calories),
        currentProtein: increment(incrementOrDecrement * protein),
        currentFat: increment(incrementOrDecrement * fat),
        currentCarbs: increment(incrementOrDecrement * carbs)
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
