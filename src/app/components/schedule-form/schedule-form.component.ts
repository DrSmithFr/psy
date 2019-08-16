import {Component, Input, OnInit} from '@angular/core';
import {AppointmentModel} from '../../../models/appointment.model';
import {FormBuilder, Validators} from '@angular/forms';
import {DbService} from '../../services/db.service';
import {Router} from '@angular/router';

@Component(
  {
    selector:    'app-schedule-form',
    templateUrl: './schedule-form.component.html',
    styleUrls:   ['./schedule-form.component.scss']
  }
)
export class ScheduleFormComponent implements OnInit {

  @Input() appointment: AppointmentModel;

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
    if (this.appointment.date) {
      const time = this.appointment.date.getHours() + ':' + this.appointment.date.getMinutes();

      this.when.patchValue(
        {
          date: this.appointment.date,
          time: time !== '0:0' ? time : null
        }
      );
    }

    this.what.patchValue(
      {
        title:       this.appointment.title,
        description: this.appointment.description
      }
    );

    this.where.patchValue(
      {
        city:   this.appointment.city,
        street: this.appointment.address
      }
    );
  }

  submit() {
    const date = this.when.get('date').value;
    const time = this.when.get('time').value.split(':');

    this.appointment.date        = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time[0], time[1]);
    this.appointment.title       = this.what.get('title').value;
    this.appointment.description = this.what.get('description').value;
    this.appointment.city        = this.where.get('city').value;
    this.appointment.address     = this.where.get('street').value;

    this
      .database
      .addAppointment(this.appointment)
      .subscribe(() => {
        this.router.navigateByUrl('/schedule');
      });
  }
}
