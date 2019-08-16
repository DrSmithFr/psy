import {Component, OnInit} from '@angular/core';
import {DbService} from '../../../../services/db.service';
import {OverviewModel} from '../../../../../models/overview.model';

@Component(
  {
    selector:    'app-dashboard',
    templateUrl: './mood-dashboard.component.html',
    styleUrls:   ['./mood-dashboard.component.scss']
  }
)
export class MoodDashboardComponent implements OnInit {

  public list: OverviewModel[] = [];

  constructor(
    private database: DbService
  ) {
  }

  ngOnInit() {
    this
      .database
      .getOverviews()
      .subscribe(list => {
        this.list = list;
      });
  }
}
