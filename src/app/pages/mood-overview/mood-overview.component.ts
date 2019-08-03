import {Component, OnInit} from '@angular/core';
import {OverviewModel}     from '../../../models/overview.model';
import {DbService}         from '../../services/db.service';

@Component(
  {
    selector:    'app-mood-overview',
    templateUrl: './mood-overview.component.html',
    styleUrls:   ['./mood-overview.component.scss']
  }
)
export class MoodOverviewComponent implements OnInit {

  overview: OverviewModel;

  constructor(
    private database: DbService
  ) {
    this.overview = new OverviewModel();
  }

  ngOnInit() {
    // resetting overview
    this.overview = new OverviewModel();
  }

  submitOverview() {
    console.log('boom');
    this.database.addOverview(this.overview);
    this.overview = new OverviewModel();
  }
}
