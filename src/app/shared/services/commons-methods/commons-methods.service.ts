import { L } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { TrainingsData } from '../../interfaces/trainingsData.model';

@Injectable({
  providedIn: 'root'
})
export class CommonsMethodsService {
  calculateWorkoutTime(
    training: TrainingsData,
    caloriesToBurn: number,
    userWeight: number
  ): number {
    return Math.round(
      (caloriesToBurn * 200) / (training.met * 3.5 * userWeight)
    );
  }

  calculateTEE(userPersonal: any): number {
    const activityMultipler = this.getActivityMultipler(
      userPersonal.activityLevel
    );
    const bmr = this.calculateBMR(userPersonal);

    return bmr * activityMultipler;
  }

  calculateMacrosAndFinalTEE(initTEE: number, dietGoal: string) {
    const macrosPercentages = this.getDietMacros(dietGoal);
    const protein = Math.round((initTEE * macrosPercentages.protein) / 4);
    const fats = Math.round((initTEE * macrosPercentages.fats) / 9);
    const carbs = Math.round((initTEE * macrosPercentages.carbs) / 4);
    const finalTEE = protein * 4 + fats * 9 + carbs * 4;

    return {
      proteinLimit: protein,
      fatLimit: fats,
      carbsLimit: carbs,
      TEE: finalTEE
    };
  }

  private getDietMacros(dietGoal: string) {
    let dietMacros;

    switch (dietGoal) {
      case 'Lose weight':
        dietMacros = { protein: 0.4, fats: 0.3, carbs: 0.3 };
        break;
      case 'Keep weight':
        dietMacros = { protein: 0.3, fats: 0.3, carbs: 0.4 };
        break;
      case 'Build muscle':
        dietMacros = { protein: 0.3, fats: 0.25, carbs: 0.45 };
        break;
      default:
        dietMacros = {};
        throw new Error('Invalid activity level');
    }

    return dietMacros;
  }

  private getActivityMultipler(activityLevel: string) {
    let activityMultipler: number;

    switch (activityLevel) {
      case 'Lack':
        activityMultipler = 1.2;
        break;
      case 'Low':
        activityMultipler = 1.3;
        break;
      case 'Moderate':
        activityMultipler = 1.5;
        break;
      case 'Active':
        activityMultipler = 1.7;
        break;
      case 'Very active':
        activityMultipler = 2.0;
        break;
      default:
        activityMultipler = 0;
        throw new Error('Invalid activity level');
    }

    return activityMultipler;
  }

  private calculateBMR(userPersonal: any): number {
    const weight = userPersonal.weight;
    const height = userPersonal.height;
    const age = this.getCurrentAge(
      userPersonal.dateOfBirth instanceof Date
        ? userPersonal.dateOfBirth
        : userPersonal.dateOfBirth.toDate()
    );

    if (userPersonal.gender === 'Male') {
      return Math.round(66.47 + 13.7 * weight + 5.0 * height - 6.76 * age);
    } else if (userPersonal.gender === 'Female') {
      return Math.round(655.1 + 9.567 * weight + 1.85 * height - 4.68 * age);
    } else {
      return 0;
    }
  }

  private getCurrentAge(birthDate: Date) {
    const diff = Date.now() - birthDate.getTime();
    const age = new Date(diff);

    return Math.abs(age.getUTCFullYear() - 1970);
  }
}
