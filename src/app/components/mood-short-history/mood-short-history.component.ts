import {Component, Input, OnInit} from '@angular/core';
import {OverviewModel}            from '../../../models/overview.model';
import {PageEvent}                from '@angular/material';
import {DbService}                from '../../services/db.service';

@Component(
  {
    selector:    'app-mood-short-history',
    templateUrl: './mood-short-history.component.html',
    styleUrls:   ['./mood-short-history.component.scss']
  }
)
export class MoodShortHistoryComponent implements OnInit {

  public overviews: OverviewModel[] = [];

  public pageSize              = 3;
  public list: OverviewModel[] = [];

  constructor(
    private database: DbService
  ) {
  }

  ngOnInit() {
    this
      .database
      .getOverviews()
      .subscribe(all => {
        this.overviews = all;
        this.reset();
      });
  }

  updateList(e: PageEvent) {
    const start = e.pageIndex * e.pageSize;
    const end   = start + e.pageSize;

    this.list = this.overviews.slice(start, end);
  }

  reset() {
    this.updateList(
      {
        pageSize:          this.pageSize,
        pageIndex:         0,
        length:            0,
        previousPageIndex: 1
      }
    );
  }

}
