import { Component, OnInit } from '@angular/core';
import {EventModel} from '../../../../../models/event.model';
import {MatDialog} from '@angular/material';
import {DbService} from '../../../shared/services/db.service';
import {EventService} from '../../../shared/services/event.service';

@Component({
  selector: 'app-event-historic',
  templateUrl: './event-historic.component.html',
  styleUrls: ['./event-historic.component.scss']
})
export class EventHistoricComponent implements OnInit {

  public events: EventModel[];

  constructor(
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
        this.events = list.filter(event => event.date < today);
      });
  }
}
