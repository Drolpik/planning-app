import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DailyProgressService } from 'src/app/core/services/daily-progress/daily-progress.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { UserData } from 'src/app/shared/interfaces/userData.model';
import { ToastService } from 'src/app/shared/services/toasts/toast.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit, OnDestroy {
  userDataForm: FormGroup;

  userPersonal: any;

  saveSub: Subscription;

  formSub: Subscription;

  dietGoals: { value: string }[] = [
    { value: 'Lose weight' },
    { value: 'Keep weight' },
    { value: 'Build muscle' }
  ];

  activityLevels: { code: string; value: string }[] = [
    { code: 'Lack', value: 'Lack, sedentary work' },
    { code: 'Low', value: 'Low (1-2 workouts, sedentary work)' },
    { code: 'Moderate', value: 'Moderate (3-4 workouts, sedentary work)' },
    { code: 'Active', value: 'Active (3-4 workouts, work in motion)' },
    {
      code: 'Very active',
      value: 'Very active (daily training, work in motion)'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private dailyProgressService: DailyProgressService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.prepareForm();
  }

  ngOnDestroy(): void {
    if (this.saveSub != undefined) {
      this.saveSub.unsubscribe();
    }
    if (this.formSub != undefined) {
      this.formSub.unsubscribe();
    }
  }

  async save(): Promise<void> {
    if (this.userDataForm.valid) {
      const data = await this.userDataForm.value;
      this.userService.updateUserData(this.authService.currentUserId, data);

      this.saveSub = this.userService
        .getUserData(this.authService.currentUserId)
        .subscribe((currentData) => {
          this.dailyProgressService.updateDailyProgressData(
            this.authService.currentUserId,
            currentData as UserData
          );
        });
    } else {
      this.userDataForm.markAllAsTouched();
      this.toastService.customToast('Incorrect data');
    }
  }

  private prepareForm(): void {
    this.userDataForm = this.fb.group({
      height: [
        null,
        [Validators.required, Validators.min(100), Validators.max(250)]
      ],
      weight: [
        null,
        [Validators.required, Validators.min(20), Validators.max(300)]
      ],
      activityLevel: [null, Validators.required],
      dietGoal: [null, Validators.required]
    });

    this.formSub = this.userService
      .getUserData(this.authService.currentUserId)
      .subscribe((currentData: any) => {
        this.userDataForm.patchValue(currentData);
      });
  }
}
