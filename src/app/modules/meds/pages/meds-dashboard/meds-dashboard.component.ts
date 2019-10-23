import { Component, OnInit } from '@angular/core';
import {MedsModel} from '../../../../../models/meds.model';
import {DbService} from '../../../shared/services/db.service';
import {MedsService} from '../../../shared/services/meds.service';

@Component({
  selector: 'app-meds-dashboard',
  templateUrl: './meds-dashboard.component.html',
  styleUrls: ['./meds-dashboard.component.scss']
})
export class MedsDashboardComponent implements OnInit {

  public today: Date;
  public timeMap: Map<Date, MedsModel[]> = new Map();
  public list: MedsModel[] = [];

  constructor(
    private database: DbService,
    private service: MedsService
  ) {
  }

  ngOnInit() {
    this.today = new Date();

    this
      .database
      .getMeds()
      .subscribe(list => {
        this.list = list;
        const activeToday = this.service.getActives(list);
        this.timeMap = this.service.getTimeMap(activeToday);
      });
  }

  takeMedication(meds: MedsModel[]) {
    console.log(meds);
  }
}
