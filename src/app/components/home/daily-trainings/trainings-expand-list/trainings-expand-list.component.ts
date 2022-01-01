import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DailyProgressService } from 'src/app/core/services/daily-progress/daily-progress.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { CommonsMethodsService } from 'src/app/shared/services/commons-methods/commons-methods.service';
import { TrainingsData } from 'src/app/shared/interfaces/trainingsData.model';

@Component({
  selector: 'app-trainings-expand-list',
  templateUrl: './trainings-expand-list.component.html',
  styleUrls: ['./trainings-expand-list.component.scss']
})
export class TrainingsExpandListComponent implements OnInit {
  @Input() trainingsData: TrainingsData[];

  @Input() caloriesToBurn: number;

  userWeight = 78;

  panelOpenState = false;

  constructor(
    private commonsMethods: CommonsMethodsService,
    private dailyProgressService: DailyProgressService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userService
      .getUserData(this.authService.currentUserId)
      .subscribe((data: any) => {
        this.userWeight = data.weight;
      });
  }

  calculateWorkoutTime(training: TrainingsData): number {
    return this.commonsMethods.calculateWorkoutTime(
      training,
      this.caloriesToBurn,
      this.userWeight
    );
  }

  selectExercise(selectedTraining: TrainingsData): void {
    this.dailyProgressService.updateBurnedCalories(
      this.authService.currentUserId,
      this.caloriesToBurn
    );
  }
}
