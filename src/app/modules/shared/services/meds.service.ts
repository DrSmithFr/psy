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

    const keyHasString = list.reduce((map: Map<string, MedsModel[]>, med) => {
      const date = new Date(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        med.hour,
        med.minute
      );

      // use a string key to avoid duplicate
      const key = date.getHours() + ':' + date.getMinutes();

      if (!map.has(key)) {
        map.set(key, []);
      }

      map.get(key).push(med);

      return map;
    }, new Map());

    const timeMap = new Map();

    keyHasString.forEach((meds, key) => {
      const [hour, minute] = key.split(':');

      // reconstruct key as Date
      const date = new Date(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        hour,
        minute
      );

      timeMap.set(date, meds);
    });

    return timeMap;
  }

}
