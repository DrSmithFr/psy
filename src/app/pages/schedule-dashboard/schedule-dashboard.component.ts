import {Component, OnInit} from '@angular/core';
import {AppointmentModel} from '../../../models/appointment.model';
import {DbService} from '../../services/db.service';
import {ScheduleService} from '../../services/schedule.service';
import * as _ from 'lodash';
import {ClearDataComponent} from '../../dialogs/clear-data/clear-data.component';
import {MatDialog} from '@angular/material';
import {CalendarDayComponent} from '../../dialogs/calendar-day/calendar-day.component';

@Component(
  {
    selector:    'app-schedule-dashboard',
    templateUrl: './schedule-dashboard.component.html',
    styleUrls:   ['./schedule-dashboard.component.scss']
  }
)
export class ScheduleDashboardComponent implements OnInit {

  public events: AppointmentModel[];
  public today: AppointmentModel[];
  public comming: AppointmentModel[];

  constructor(
    public dialog: MatDialog,
    private database: DbService,
    private service: ScheduleService
  ) {
  }

  ngOnInit() {
    this
      .database
      .getAppointments()
      .subscribe(list => {
        const today = new Date();

        this.events  = list;
        this.today   = this.service.appointmentAt(list, today);
        this.comming = this.service.appointmentAfterDay(list, today);
      });
  }

  getEventDates(): string[] {
    const dates = [];

    for (const event of this.events) {
      dates.push(event.date.toDateString());
    }

    return _.uniq(dates);
  }

  displayRecap(date: Date) {
    this.dialog.open(CalendarDayComponent, {
      width: '95%',
      data: date,
      hasBackdrop: true
    });
  }
}
