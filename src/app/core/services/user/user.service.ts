import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { UserData } from 'src/app/shared/interfaces/userData.model';
import { ToastService } from 'src/app/shared/services/toasts/toast.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private db: AngularFirestore,
    private toastService: ToastService
  ) {}

  createUser(uid: string | undefined, userData: UserData): void {
    this.db.doc(`userData/${uid}`).set({ ...userData });
  }

  getUserData(uid: string) {
    return this.db.doc(`userData/${uid}`).valueChanges();
  }

  updateUserData(uid: string, data: any) {
    this.db
      .doc(`userData/${uid}`)
      .update(data)
      .then(() => {
        this.toastService.customToast('Saved successfully');
      })
      .catch((error) => {
        this.toastService.customToast(
          'An error occurred while saving user data'
        );
      });
  }
}
