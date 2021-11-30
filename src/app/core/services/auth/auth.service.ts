import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import {
  AuthDataSignUp,
  AuthDataLogin
} from '../../../shared/interfaces/auth.model';
import { TrainingsService } from '../trainings/trainings.service';

@Injectable()
export class AuthService {
  authStatus = new Subject<boolean>();

  authState: any = null;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingsService: TrainingsService
  ) {
    this.afAuth.authState.subscribe((authState) => {
      this.authState = authState;
    });
  }

  get isAuth(): boolean {
    return this.authState !== null;
  }

  signUp(authData: AuthDataSignUp) {
    // this.user = {
    //   email: authData.userAccount.email,
    //   userId: Math.round(Math.random() * 10000).toString(),
    //   userPersonal: authData.userPersonal,
    //   activityAndGoal: authData.activityAndGoal
    // };
    this.afAuth
      .createUserWithEmailAndPassword(
        authData.userAccount.email,
        authData.userAccount.password
      )
      .then((result) => {
        console.log(result);
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  login(authData: AuthDataLogin) {
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        console.log(result);
        this.authChangeStatusAndNavigateTo(true, '');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.afAuth.signOut();
    this.authStatus.next(false);
    this.authChangeStatusAndNavigateTo(false, 'login');
  }

  private authChangeStatusAndNavigateTo(status: boolean, navTo: string) {
    this.authStatus.next(status);
    this.router.navigate([`/${navTo}`]);
  }
}
