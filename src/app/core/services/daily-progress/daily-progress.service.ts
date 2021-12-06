import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { UserData } from 'src/app/shared/interfaces/userData.model';

import { CommonsMethodsService } from 'src/app/shared/services/commons-methods.service';

@Injectable({
  providedIn: 'root'
})
export class DailyProgressService {
  constructor(
    private commonsMethodsService: CommonsMethodsService,
    private db: AngularFirestore
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
      proteinProgress: 0,
      fatLimit: macrosPercentages.fatLimit,
      fatProgress: 0,
      carbsLimit: macrosPercentages.carbsLimit,
      carbsProgress: 0
    });
  }

  updateDailyProgressData(uid: string, userData: UserData) {
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
}
