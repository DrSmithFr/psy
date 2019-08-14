import {Component, Input, OnInit} from '@angular/core';
import {AppointmentModel} from '../../../models/appointment.model';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent implements OnInit {

  @Input() appointment: AppointmentModel;

  constructor() {

  }

  ngOnInit() {
  }

  submit() {

  }
}
