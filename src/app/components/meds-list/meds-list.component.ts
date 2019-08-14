import {Component, Input, OnInit} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {MedsModel} from '../../../models/meds.model';

@Component(
  {
    selector:    'app-meds-list',
    templateUrl: './meds-list.component.html',
    styleUrls:   ['./meds-list.component.scss']
  }
)
export class MedsListComponent implements OnInit {

  @Input() meds: MedsModel[];

  public pageSize          = 5;
  public list: MedsModel[] = [];

  constructor() {
  }

  ngOnInit() {
    this.reset();
  }

  updateList(e: PageEvent) {
    const start = e.pageIndex * e.pageSize;
    const end   = start + e.pageSize;

    this.list = this.meds.slice(start, end);
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
