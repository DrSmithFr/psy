import { Injectable } from '@angular/core';
import {EventModel} from '../../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  eventAfterDay(list: EventModel[], after: Date) {
    const limit = new Date(after.getFullYear(), after.getMonth(), after.getDate() + 1);

    return list.filter(model => {
      return model.date > limit;
    });
  }

  eventAt(list: EventModel[], at: Date) {
    return list.filter(model => {
      return model.date.toDateString() === at.toDateString();
    });
  }
}
