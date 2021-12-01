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
      })
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
}
