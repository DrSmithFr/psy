import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventModel} from '../../../../../models/event.model';
import {DbService} from '../../../../services/db.service';

@Component(
  {
    selector:    'app-event-creation',
    templateUrl: './event-creation.component.html',
    styleUrls:   ['./event-creation.component.scss']
  }
)
export class EventCreationComponent implements OnInit {

  public event: EventModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private database: DbService
  ) {
  }

  ngOnInit() {
    const id   = this.route.snapshot.paramMap.get('id');
    const date = this.route.snapshot.queryParamMap.get('date');

    if (id === null) {
      this.event = new EventModel();

      if (date) {
        this.event.date = new Date(parseInt(date, 10));
      }
    } else {
      this
        .database
        .getEvents()
        .subscribe((list: Array<EventModel>) => {
          const event = list.filter((item: EventModel) => '' + item.id === id);

          if (event.length) {
            this.event = event[0];
          } else {
            this.event = new EventModel();
          }
        });
    }
  }

}
