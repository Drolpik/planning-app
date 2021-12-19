import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { ToastService } from 'src/app/shared/services/toasts/toast.service';
import {
  AuthDataLogin,
  AuthDataSignUp
} from '../../../shared/interfaces/auth.model';
import { DailyMealsService } from '../daily-meals/daily-meals.service';
import { DailyProgressService } from '../daily-progress/daily-progress.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  authStatus = new Subject<boolean>();

  authState: any = null;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private userService: UserService,
    private dailyProgressService: DailyProgressService,
    private dailyMealsService: DailyMealsService,
    private toastService: ToastService
  ) {
    this.afAuth.authState.subscribe((authState) => {
      this.authState = authState;
    });
  }

  initAuthListener(): void {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.authStatus.next(true);
        this.router.navigate(['']);
      } else {
        this.authStatus.next(false);
        this.router.navigate(['/login']);
      }
    });
  }

  signUp(userData: AuthDataSignUp): void {
    this.afAuth
      .createUserWithEmailAndPassword(
        userData.userAccount.email,
        userData.userAccount.password
      )
      .then((userCredential) => {
        const uid = userCredential.user?.uid;
        this.userService.createUser(uid, {
          ...userData.userPersonal,
          ...userData.activityAndGoal
        });
        this.dailyProgressService.createDailyProgressData(uid, {
          ...userData.userPersonal,
          ...userData.activityAndGoal
        });
        this.dailyMealsService.createDailyMealsData(uid);
      })
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          this.toastService.customToast(
            'Email is already used by another account',
            3000
          );
        } else {
          this.toastService.customToast(
            'An error occurred while registering',
            3000
          );
        }
      });
  }

  login(authData: AuthDataLogin): void {
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result: any) => {})
      .catch((error) => {
        if (error.code === 'auth/wrong-password') {
          this.toastService.customToast('Invalid email or password', 3000);
        }
        if (error.code === 'auth/user-not-found') {
          this.toastService.customToast('User not found', 3000);
        }
      });
  }

  logout(): void {
    this.afAuth.signOut();
  }

  get isAuth(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string {
    return this.isAuth ? this.authState.uid : null;
  }
}
