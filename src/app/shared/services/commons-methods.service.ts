import { Injectable } from '@angular/core';
import { TrainingsData } from '../interfaces/trainingsData.model';

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
}
