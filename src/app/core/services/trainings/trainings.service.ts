import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { TrainingsData } from 'src/app/shared/interfaces/trainingsData.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {
  trainingsDataChanged = new Subject<TrainingsData[]>();

  private trainingsData: TrainingsData[] = [];

  constructor(private db: AngularFirestore) {}

  fetchTrainingsData() {
    this.db
      .collection('trainingsData')
      .snapshotChanges()
      .pipe(
        map((docArray) => {
          return docArray.map((doc) => {
            const data = doc.payload.doc.data() as TrainingsData;
            return {
              id: doc.payload.doc.id,
              exercise: data.exercise,
              met: data.met,
              type: data.type
            };
          });
        })
      )
      .subscribe((trainings: TrainingsData[]) => {
        this.trainingsData = trainings;
        this.trainingsDataChanged.next([...this.trainingsData]);
      });
  }
}
