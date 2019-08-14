import { Component, OnInit } from '@angular/core';
import {AppointmentModel} from '../../../models/appointment.model';

@Component({
  selector: 'app-schedule-creation',
  templateUrl: './schedule-creation.component.html',
  styleUrls: ['./schedule-creation.component.scss']
})
export class ScheduleCreationComponent implements OnInit {

  public appointment = new AppointmentModel();

  constructor() { }

  ngOnInit() {
  }

}
