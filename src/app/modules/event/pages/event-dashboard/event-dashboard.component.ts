import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {MatDialog} from '@angular/material';
import {EventModel} from '../../../../../models/event.model';
import {DbService} from '../../../shared/services/db.service';
import {EventService} from '../../../shared/services/event.service';
import {CalendarDayComponent} from '../../dialogs/calendar-day/calendar-day.component';

@Component(
  {
    selector:    'app-event-dashboard',
    templateUrl: './event-dashboard.component.html',
    styleUrls:   ['./event-dashboard.component.scss']
  }
)
export class EventDashboardComponent implements OnInit {

  public events: EventModel[];
  public today: EventModel[];
  public comming: EventModel[];

  constructor(
    public dialog: MatDialog,
    private database: DbService,
    private service: EventService
  ) {
  }

  ngOnInit() {
    this
      .database
      .getEvents()
      .subscribe(list => {
        const today = new Date();

        this.events  = list;
        this.today   = this.service.eventAt(list, today);
        this.comming = this.service.eventAfterDay(list, today);
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
