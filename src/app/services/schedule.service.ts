import { Injectable } from '@angular/core';
import {AppointmentModel} from '../../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  appointmentAfterDay(list: AppointmentModel[], after: Date) {
    const limit = new Date(after.getFullYear(), after.getMonth(), after.getDate() + 1);

    console.log(limit.toDateString());

    return list.filter(model => {
      return model.date > limit;
    });
  }

  appointmentAt(list: AppointmentModel[], at: Date) {
    return list.filter(model => {
      return model.date.toDateString() === at.toDateString();
    });
  }
}
