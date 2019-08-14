import {Component, OnInit} from '@angular/core';
import {AppointmentModel} from '../../../models/appointment.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DbService} from '../../services/db.service';
import {MedsModel} from '../../../models/meds.model';

@Component(
  {
    selector:    'app-schedule-creation',
    templateUrl: './schedule-creation.component.html',
    styleUrls:   ['./schedule-creation.component.scss']
  }
)
export class ScheduleCreationComponent implements OnInit {

  public appointment: AppointmentModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private database: DbService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id === null) {
      this.appointment = new AppointmentModel();
    } else {
      this
        .database
        .getAppointments()
        .subscribe((list: Array<AppointmentModel>) => {
          const appointment = list.filter((item: AppointmentModel) => '' + item.id === id);

          if (appointment.length) {
            this.appointment = appointment[0];
          } else {
            this.appointment = new AppointmentModel();
          }
        });
    }
  }

}
