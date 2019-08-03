import {Injectable}              from '@angular/core';
import {OverviewModel}           from '../../models/overview.model';
import {DBSchema, openDB}        from 'idb';

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
    console.log('bam');
    this.promise.then((db: any) => {
      db.put('overview', value);
    });
  }

  getOverviews() {
    return this.promise.then((db: any) => {
      return db.getAll('overview');
    });
  }
}
