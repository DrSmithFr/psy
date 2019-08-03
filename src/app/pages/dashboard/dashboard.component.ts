import { Component, OnInit } from '@angular/core';
import {DbService}           from '../../services/db.service';
import {OverviewModel}       from '../../../models/overview.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public overviews: OverviewModel[] = [];

  constructor(
    private database: DbService
  ) { }

  ngOnInit() {
    this.database.getOverviews().then(all => {
      this.overviews = all;
    });
  }

}
