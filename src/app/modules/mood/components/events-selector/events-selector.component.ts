import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatListOption, MatSelectionList, MatSelectionListChange} from '@angular/material/list';
import {OverviewModel} from '../../../../../models/overview.model';

@Component(
  {
    selector:    'app-events-selector',
    templateUrl: './events-selector.component.html',
    styleUrls:   ['./events-selector.component.scss']
  }
)
export class EventsSelectorComponent implements OnInit {

  @Input() overview: OverviewModel;
  @ViewChild(MatSelectionList, {static: true}) list: MatSelectionList;

  constructor() {
  }

  ngOnInit() {
  }
}
