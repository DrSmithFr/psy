import { Component, OnInit } from '@angular/core';
import {OverviewModel} from '../../../models/overview.model';
import {DbService} from '../../services/db.service';
import {MedsModel} from '../../../models/meds.model';

@Component({
  selector: 'app-meds-dashboard',
  templateUrl: './meds-dashboard.component.html',
  styleUrls: ['./meds-dashboard.component.scss']
})
export class MedsDashboardComponent implements OnInit {

  public list: MedsModel[] = [];

  constructor(
    private database: DbService
  ) {
  }

  ngOnInit() {
    this
      .database
      .getMeds()
      .subscribe(list => {
        this.list = list;
      });
  }

}
