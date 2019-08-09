import {Injectable} from '@angular/core';
import {OverviewModel} from '../../models/overview.model';
import {DBSchema, openDB} from 'idb';
import {Subject} from 'rxjs';

interface AppDb extends DBSchema {
  'overview': {
    value: {
      mood: string,
      feelings: string[],
      note: string,
      date: Date
    },
    key: number,
    indexes: { 'by-date': number }
  };
}

@Injectable(
  {
    providedIn: 'root'
  }
)
export class DbService {
  private promise;
  private overviews: Subject<OverviewModel[]> = new Subject();

  constructor() {
    this.connect();
  }

  connect() {
    this.promise = openDB<AppDb>(
      'app-database-local',
      1,
      {
        upgrade(db) {
          if (!db.objectStoreNames.contains('overview')) {
            db.createObjectStore('overview', {keyPath: 'id', autoIncrement: true});
          }
        }
      }
    );
  }

  addOverview(value: OverviewModel) {
    this.promise.then((db: any) => {
      db.put('overview', value);
      this.updateOverviews();
    });
  }

  getOverviews() {
    this.updateOverviews();
    return this.overviews.asObservable();
  }

  updateOverviews(): void {
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
}
