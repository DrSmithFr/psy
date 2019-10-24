import {Component, Input, OnInit} from '@angular/core';
import {EventModel} from '../../../../../models/event.model';

@Component(
  {
    selector:    'app-event-display',
    templateUrl: './event-display.component.html',
    styleUrls:   ['./event-display.component.scss']
  }
)
export class EventDisplayComponent implements OnInit {

  @Input() event: EventModel;
  @Input() highlighted = false;
  @Input() expanded    = false;

  constructor() {
  }

  ngOnInit() {
  }

  isToday(): boolean {
    const today = new Date();
    return this.event.date.toDateString() === today.toDateString();
  }

}
