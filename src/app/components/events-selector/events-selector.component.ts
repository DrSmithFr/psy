import {Component, Input, OnInit, ViewChild}                     from '@angular/core';
import {OverviewModel}                                           from '../../../models/overview.model';
import {MatListOption, MatSelectionList, MatSelectionListChange} from '@angular/material';

@Component({
             selector:    'app-events-selector',
             templateUrl: './events-selector.component.html',
             styleUrls:   ['./events-selector.component.scss']
           })
export class EventsSelectorComponent implements OnInit {

  @Input() overview: OverviewModel;
  @ViewChild(MatSelectionList) list: MatSelectionList;

  public events = [
    'boby'
  ];

  constructor() {
  }

  ngOnInit() {
  }

  updateModel(e: MatSelectionListChange) {
    const selection = this.list.selectedOptions.selected.map((opt: MatListOption) => {
      return opt.value;
    });

    //todo update model
    console.log(selection);
  }
}
