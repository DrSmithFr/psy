import {Component, Input, OnInit} from '@angular/core';
import {OverviewModel}            from '../../../models/overview.model';

@Component({
  selector: 'app-overview-display',
  templateUrl: './overview-display.component.html',
  styleUrls: ['./overview-display.component.scss']
})
export class OverviewDisplayComponent implements OnInit {

  @Input() overview: OverviewModel;

  constructor() { }

  ngOnInit() {
  }

}
