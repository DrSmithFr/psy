import {Injectable} from '@angular/core';
import {OverviewModel} from '../../models/overview.model';
import {openDB} from 'idb';
import {Subject} from 'rxjs';
import {MedsModel} from '../../models/meds.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DbService {
  private promise;
  private overviews: Subject<OverviewModel[]> = new Subject();
  private meds: Subject<MedsModel[]>          = new Subject();

  constructor() {
    this.connect();
  }

  connect() {
    this.promise = openDB<any>(
      'app-database-local',
      2,
      {
        upgrade(db) {
          if (!db.objectStoreNames.contains('overview')) {
            db.createObjectStore('overview', {keyPath: 'id', autoIncrement: true});
          }

          if (!db.objectStoreNames.contains('meds')) {
            db.createObjectStore('meds', {keyPath: 'id', autoIncrement: true});
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
    console.log(list);
    for (const item of list) {
      console.log(item);
      this.removeOverview(item);
    }
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

  addMeds(value: MedsModel) {
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

  removeMedss(list: MedsModel[]) {
    console.log(list);
    for (const item of list) {
      console.log(item);
      this.removeMed(item);
    }
  }

  removeMed(item: MedsModel) {
    this.promise
        .then(
          (db: any) => {
            db
              .delete('meds', item.id)
              .then(() => {
                this.meds.next([]);
              });
          }
        );
  }
}
