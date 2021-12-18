import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
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
    private dailyMealsService: DailyMealsService
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

  signUp(userData: AuthDataSignUp) {
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
        console.log(error);
      });
  }

  login(authData: AuthDataLogin) {
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.afAuth.signOut();
  }

  get isAuth(): boolean {
    return this.authState !== null;
  }

  get currentUserId(): string {
    return this.isAuth ? this.authState.uid : null;
  }
}
