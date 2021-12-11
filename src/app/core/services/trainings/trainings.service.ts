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

  searchTrainingsDataChanged = new Subject<TrainingsData[]>();

  private trainingsData: TrainingsData[] = [];

  private searchTrainingData: TrainingsData[] = [];

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

  getTrainingByTypeAndLightIntensity(type: string) {
    this.db
      .collection('trainingsData', (ref) =>
        ref.where('type', '==', type).where('met', '<=', 3)
      )
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
      .subscribe((searchTrainings) => {
        this.searchTrainingData = searchTrainings;
        this.searchTrainingsDataChanged.next([...this.searchTrainingData]);
      });
  }

  getTrainingByTypeAndModerateIntensity(type: string) {
    this.db
      .collection('trainingsData', (ref) =>
        ref.where('type', '==', type).where('met', '>', 3).where('met', '<', 6)
      )
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
      .subscribe((searchTrainings) => {
        this.searchTrainingData = searchTrainings;
        this.searchTrainingsDataChanged.next([...this.searchTrainingData]);
      });
  }

  getTrainingByTypeAndHightIntensity(type: string) {
    this.db
      .collection('trainingsData', (ref) =>
        ref.where('type', '==', type).where('met', '>=', 6)
      )
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
      .subscribe((searchTrainings) => {
        this.searchTrainingData = searchTrainings;
        this.searchTrainingsDataChanged.next([...this.searchTrainingData]);
      });
  }
}
