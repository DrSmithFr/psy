import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {AppointmentModel} from '../../../models/appointment.model';
import {DbService} from '../../services/db.service';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {

  public events: AppointmentModel[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public date: Date,
    private database: DbService,
  ) { }

  ngOnInit() {
    this
      .database
      .getAppointments()
      .subscribe(list => {
        this.events = list.filter(event => {
          return event.date.toDateString() === this.date.toDateString();
        });
      });
  }

  isHighlighted(event: AppointmentModel): boolean {
    const today = new Date();

    if (event.date.toDateString() === today.toDateString()) {
      return true;
    }

    return event.date < today;
  }

}
