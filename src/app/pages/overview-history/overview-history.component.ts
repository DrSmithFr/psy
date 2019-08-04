import { Component, OnInit } from '@angular/core';
import {DbService}           from '../../services/db.service';
import {OverviewModel}       from '../../../models/overview.model';

@Component({
  selector: 'app-overview-history',
  templateUrl: './overview-history.component.html',
  styleUrls: ['./overview-history.component.scss']
})
export class OverviewHistoryComponent implements OnInit {

  public overviews: OverviewModel[];

  constructor(
    private database: DbService
  ) { }

  ngOnInit() {
    this
      .database
      .getOverviews()
      .subscribe(list => {
        this.overviews = list;
      });
  }

}
