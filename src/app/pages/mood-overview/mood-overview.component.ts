import {Component, OnInit} from '@angular/core';
import {OverviewModel}     from '../../../models/overview.model';

@Component(
  {
    selector:    'app-mood-overview',
    templateUrl: './mood-overview.component.html',
    styleUrls:   ['./mood-overview.component.scss']
  }
)
export class MoodOverviewComponent implements OnInit {

  overview: OverviewModel;

  constructor() {
    this.overview = new OverviewModel();
  }

  ngOnInit() {
    // resetting overview
    this.overview = new OverviewModel();
  }

  submitOverview() {
    console.log(this.overview);
  }
}
