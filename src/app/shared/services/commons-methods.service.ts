import { Injectable } from '@angular/core';
import { TrainingsData } from 'src/app/components/home/daily-trainings/trainings-data';

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
