import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {EventModel} from '../../../../../models/event.model';
import {DbService} from '../../../shared/services/db.service';

@Component({
  selector:    'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls:   ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {

  public events: EventModel[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public date: Date,
    private database: DbService,
  ) { }

  ngOnInit() {
    this
      .database
      .getEvents()
      .subscribe(list => {
        this.events = list.filter(event => {
          return event.date.toDateString() === this.date.toDateString();
        });
      });
  }

  isHighlighted(event: EventModel): boolean {
    const today = new Date();

    if (event.date.toDateString() === today.toDateString()) {
      return true;
    }

    return event.date < today;
  }

}
