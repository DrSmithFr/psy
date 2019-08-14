import {Component, OnInit} from '@angular/core';
import {AppointmentModel} from '../../../models/appointment.model';
import {DbService} from '../../services/db.service';
import {ScheduleService} from '../../services/schedule.service';

@Component({
             selector:    'app-schedule-dashboard',
             templateUrl: './schedule-dashboard.component.html',
             styleUrls:   ['./schedule-dashboard.component.scss']
           })
export class ScheduleDashboardComponent implements OnInit {

  public today: AppointmentModel[]   = [];
  public comming: AppointmentModel[] = [];

  constructor(
    private database: DbService,
    private service: ScheduleService
  ) {
  }

  ngOnInit() {
    this
      .database
      .getAppointments()
      .subscribe(list => {
        const today  = new Date();
        this.today   = this.service.appointmentAt(list, today);
        this.comming = this.service.appointmentAfterDay(list, today);
      });
  }
}
