import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthDataSignUp, AuthDataLogin } from './auth-data.model';
import { User } from './user.model';

@Injectable()
export class AuthService {
  authStatus = new EventEmitter<boolean>();

  private user: User;

  constructor(private router: Router) {}

  signUp(authData: AuthDataSignUp) {
    this.user = {
      email: authData.userAccount.email,
      userId: Math.round(Math.random() * 10000).toString(),
      userPersonal: authData.userPersonal,
      activityAndGoal: authData.activityAndGoal
    };

    this.router.navigate(['/login']);
  }

  login(authData: AuthDataLogin) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };

    this.authChangeStatusAndNavigateTo(true, '');
  }

  logout() {
    this.user = null as any;

    this.authChangeStatusAndNavigateTo(false, 'login');
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  private authChangeStatusAndNavigateTo(status: boolean, navTo: string) {
    this.authStatus.emit(status);
    this.router.navigate([`/${navTo}`]);
  }
}
