import {Injectable} from '@angular/core';
import {MedsModel} from '../../../../models/meds.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class MedsService {

  constructor() {
  }

  getActives(list: MedsModel[]): MedsModel[] {
    const today = new Date();

    return list.filter(med => {
      switch (today.getUTCDay()) {
        case 1:
          return med.monday;
        case 2:
          return med.tuesday;
        case 3:
          return med.wednesday;
        case 4:
          return med.thursday;
        case 5:
          return med.friday;
        case 6:
          return med.saturday;
        case 7:
          return med.sunday;
      }
    });
  }

  getTimeMap(list: MedsModel[]): Map<Date, MedsModel[]> {
    const today = new Date();

    return list.reduce((map: Map<Date, MedsModel[]>, med) => {
      const key = new Date(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        med.hour,
        med.minute
      );

      if (!map.has(key)) {
        map.set(key, []);
      }

      map.get(key).push(med);

      return map;
    }, new Map());
  }

}
