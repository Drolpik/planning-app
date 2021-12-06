import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { UserData } from 'src/app/shared/interfaces/userData.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private db: AngularFirestore) {}

  createUser(uid: string | undefined, userData: UserData): void {
    this.db.doc(`userData/${uid}`).set({ ...userData });
  }

  getUserData(uid: string) {
    return this.db.doc(`userData/${uid}`).valueChanges();
  }

  updateUserData(uid: string, data: any) {
    this.db.doc(`userData/${uid}`).update(data);
  }
}
