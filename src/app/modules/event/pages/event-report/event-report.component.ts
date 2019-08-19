import {Component, OnInit} from '@angular/core';
import {DbService} from '../../../shared/services/db.service';
import {EventModel} from '../../../../../models/event.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component(
  {
    selector:    'app-event-report',
    templateUrl: './event-report.component.html',
    styleUrls:   ['./event-report.component.scss']
  }
)
export class EventReportComponent implements OnInit {

  public event: EventModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private database: DbService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this
      .database
      .getEvents()
      .subscribe((list: Array<EventModel>) => {
        const event = list.filter((item: EventModel) => '' + item.id === id);

        if (event.length) {
          this.event = event[0];
        }
      });
  }

  submit() {
    this
      .database
      .addEvent(this.event)
      .subscribe(() => {
        this.router.navigateByUrl('/event');
      });
  }
}
