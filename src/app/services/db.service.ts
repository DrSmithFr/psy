import {Injectable} from '@angular/core';
import {OverviewModel} from '../../models/overview.model';
import {openDB} from 'idb';
import {combineLatest, Observable} from 'rxjs';
import {MedsModel} from '../../models/meds.model';
import {AppointmentModel} from '../../models/appointment.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DbService {
  private promise;

  constructor() {
    this.connect();
  }

  connect() {
    this.promise = openDB<any>(
      'app-database-local',
      3,
      {
        upgrade(db) {
          if (!db.objectStoreNames.contains('overview')) {
            db.createObjectStore('overview', {keyPath: 'id', autoIncrement: true});
          }

          if (!db.objectStoreNames.contains('meds')) {
            db.createObjectStore('meds', {keyPath: 'id', autoIncrement: true});
          }

          if (!db.objectStoreNames.contains('appointments')) {
            db.createObjectStore('appointments', {keyPath: 'id', autoIncrement: true});
          }
        }
      }
    );
  }

  add(store: string, value: any): Observable<any> {
    return new Observable(observer => {
      this.promise.then((db: any) => {
        db.put(store, value);
        observer.next();
        observer.complete();
      });
    });
  }

  all(store: string): Observable<any[]> {
    return new Observable(observer => {
      this
        .promise
        .then(
          (db: any) => {
            db
              .getAll(store)
              .then(list => {
                observer.next(list);
                observer.complete();
              });
          }
        );
    });
  }

  remove(store: string, key: any): Observable<void> {
    return new Observable(observer => {
      this
        .promise
        .then(
          (db: any) => {
            db
              .delete(store, key)
              .then(() => {
                observer.next();
                observer.complete();
              });
          }
        );
    });
  }

  removeList(store: string, keys: any[]): Observable<void> {
    return new Observable(observer => {
      const obs = [];

      for (const key of keys) {
        obs.push(this.remove(store, key));
      }

      combineLatest(obs).subscribe(() => {
        observer.next();
        observer.complete();
      });
    });
  }

  getOverviews(): Observable<OverviewModel[]> {
    return this.all('overview');
  }

  addOverview(value: OverviewModel) {
    return this.add('overview', value);
  }

  removeOverviews(list: OverviewModel[]) {
    const keys = [];

    for (const item of list) {
      keys.push(item.id);
    }

    return this.removeList('overview', keys);
  }

  getMeds(): Observable<MedsModel[]> {
    return this.all('meds');
  }


  addMed(value: MedsModel) {
    return this.add('meds', value);
  }

  removeMeds(list: MedsModel[]) {
    const keys = [];

    for (const item of list) {
      keys.push(item.id);
    }

    return this.removeList('meds', keys);
  }

  getAppointments(): Observable<AppointmentModel[]> {
    return this.all('appointments');
  }


  addAppointment(value: AppointmentModel) {
    return this.add('appointments', value);
  }

  removeAppointments(list: AppointmentModel[]) {
    const keys = [];

    for (const item of list) {
      keys.push(item.id);
    }

    return this.removeList('appointments', keys);
  }
}
