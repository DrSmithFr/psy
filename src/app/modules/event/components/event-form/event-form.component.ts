import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EventModel} from '../../../../../models/event.model';
import {DbService} from '../../../shared/services/db.service';

@Component(
  {
    selector:    'app-event-form',
    templateUrl: './event-form.component.html',
    styleUrls:   ['./event-form.component.scss']
  }
)
export class EventFormComponent implements OnInit {

  @Input() event: EventModel;

  constructor(
    private fb: FormBuilder,
    private database: DbService,
    private router: Router
  ) {
  }

  public when = this.fb.group(
    {
      date: ['', Validators.required],
      time: ['', Validators.required],
    }
  );

  public what = this.fb.group(
    {
      title:       ['', Validators.required],
      description: [''],
    }
  );

  public where = this.fb.group(
    {
      city:   [''],
      street: [''],
    }
  );

  ngOnInit() {
    if (this.event.date) {
      const time = this.event.date.getHours() + ':' + this.event.date.getMinutes();

      this.when.patchValue(
        {
          date: this.event.date,
          time: time !== '0:0' ? time : null
        }
      );
    }

    this.what.patchValue(
      {
        title:       this.event.title,
        description: this.event.description
      }
    );

    this.where.patchValue(
      {
        city:   this.event.city,
        street: this.event.address
      }
    );
  }

  submit() {
    const date = this.when.get('date').value;
    const time = this.when.get('time').value.split(':');

    this.event.date        = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time[0], time[1]);
    this.event.title       = this.what.get('title').value;
    this.event.description = this.what.get('description').value;
    this.event.city        = this.where.get('city').value;
    this.event.address     = this.where.get('street').value;

    this
      .database
      .addEvent(this.event)
      .subscribe(() => {
        this.router.navigateByUrl('/event');
      });
  }
}
