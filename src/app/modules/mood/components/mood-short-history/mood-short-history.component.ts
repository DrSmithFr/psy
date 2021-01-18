import {Component, Input, OnInit} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {OverviewModel} from '../../../../../models/overview.model';

@Component(
  {
    selector:    'app-mood-short-history',
    templateUrl: './mood-short-history.component.html',
    styleUrls:   ['./mood-short-history.component.scss']
  }
)
export class MoodShortHistoryComponent implements OnInit {

  @Input() overviews: OverviewModel[];

  public pageSize              = 5;
  public data: OverviewModel[] = [];
  public list: OverviewModel[] = [];

  ngOnInit() {
    this.data = [...this.overviews].reverse();
    this.reset();

  }

  updateList(e: PageEvent) {
    const start = e.pageIndex * e.pageSize;
    const end   = start + e.pageSize;

    this.list = this.data.slice(start, end);
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
