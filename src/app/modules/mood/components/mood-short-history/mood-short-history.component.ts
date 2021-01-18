import {AfterContentInit, Component, Input} from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {OverviewModel} from '../../../../../models/overview.model';

@Component(
  {
    selector:    'app-mood-short-history',
    templateUrl: './mood-short-history.component.html',
    styleUrls:   ['./mood-short-history.component.scss']
  }
)
export class MoodShortHistoryComponent implements AfterContentInit {

  @Input() overviews: OverviewModel[];

  public pageSize              = 3;
  public data: OverviewModel[] = [];
  public list: OverviewModel[] = [];

  ngAfterContentInit() {
    this.data = [...this.overviews].reverse();
    this.reset();
  }

  updateList(e: PageEvent) {
    const start = e.pageIndex * e.pageSize;
    const end   = start + e.pageSize;

    this.list = this.data.slice(start, end).reverse();
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
