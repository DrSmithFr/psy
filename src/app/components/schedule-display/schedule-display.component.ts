import {Component, Input, OnInit} from '@angular/core';
import {AppointmentModel} from '../../../models/appointment.model';

@Component({
  selector: 'app-schedule-display',
  templateUrl: './schedule-display.component.html',
  styleUrls: ['./schedule-display.component.scss']
})
export class ScheduleDisplayComponent implements OnInit {

  @Input() appointment: AppointmentModel;
  @Input() highlighted = false;

  constructor() { }

  ngOnInit() {
  }

}
