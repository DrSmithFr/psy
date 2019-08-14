import {Injectable} from '@angular/core';
import {OverviewModel} from '../../models/overview.model';
import {openDB} from 'idb';
import {combineLatest, Observable, of, Subject} from 'rxjs';
import {MedsModel} from '../../models/meds.model';
import {AppointmentModel} from '../../models/appointment.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DbService {
  private promise;
  private overviews: Subject<OverviewModel[]>       = new Subject();
  private meds: Subject<MedsModel[]>                = new Subject();
  private appointments: Subject<AppointmentModel[]> = new Subject();

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

  addOverview(value: OverviewModel) {
    this.promise.then((db: any) => {
      db.put('overview', value);
      this.loadOverviews();
    });
  }

  getOverviews() {
    this.loadOverviews();
    return this.overviews.asObservable();
  }

  loadOverviews(): void {
    this.promise
        .then(
          (db: any) => {
            db
              .getAll('overview')
              .then(list => {
                this.overviews.next(list.reverse());
              });
          }
        );
  }

  removeOverviews(list: OverviewModel[]) {
    const obs = [];

    for (const item of list) {
      obs.push(this.removeOverview(item));
    }

    obs.push(of(true));

    return combineLatest(obs);
  }

  removeOverview(item: OverviewModel) {
    this.promise
        .then(
          (db: any) => {
            db
              .delete('overview', item.id)
              .then(() => {
                this.overviews.next([]);
              });
          }
        );
  }

  addMed(value: MedsModel) {
    this.promise.then((db: any) => {
      db.put('meds', value);
      this.loadMeds();
    });
  }

  getMeds() {
    this.loadMeds();
    return this.meds.asObservable();
  }

  loadMeds(): void {
    this.promise
        .then(
          (db: any) => {
            db
              .getAll('meds')
              .then(list => {
                this.meds.next(list.reverse());
              });
          }
        );
  }

  removeMeds(list: MedsModel[]) {
    const obs = [];

    for (const item of list) {
      obs.push(this.removeMed(item));
    }
    obs.push(of(true));
    return combineLatest(obs);
  }

  removeMed(item: MedsModel) {
    return this
      .promise
      .then(
        (db: any) => {
          return db
            .delete('meds', item.id)
            .then(() => {
              this.meds.next([]);
            });
        }
      );
  }

  addAppointment(value: AppointmentModel): Observable<void> {
    return new Observable((obs) => {
      this.promise.then((db: any) => {
        db.put('appointments', value);
        this.loadAppointments();
        obs.next();
        obs.complete();
      });
    });
  }

  getAppointments() {
    this.loadAppointments();
    return this.appointments.asObservable();
  }

  loadAppointments() {
    this
      .promise
      .then(
        (db: any) => {
          db
            .getAll('appointments')
            .then(list => {
              list.sort((a, b) =>  {
                return b.date - a.date;
              });

              this.appointments.next(list.reverse());
            });
        }
      );

  }

  removeAppointments(list: AppointmentModel[]) {
    const obs = [];

    for (const item of list) {
      obs.push(this.removeAppointment(item));
    }
    obs.push(of(true));
    return combineLatest(obs);
  }

  removeAppointment(item: AppointmentModel) {
    return this
      .promise
      .then(
        (db: any) => {
          return db
            .delete('appointments', item.id)
            .then(() => {
              this.appointments.next([]);
            });
        }
      );
  }
}
