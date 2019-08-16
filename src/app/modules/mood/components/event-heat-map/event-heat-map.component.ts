import {Component, Input, OnInit} from '@angular/core';
import {OverviewModel} from '../../../../../models/overview.model';

@Component({
  selector: 'app-event-heat-map',
  templateUrl: './event-heat-map.component.html',
  styleUrls: ['./event-heat-map.component.scss']
})
export class EventHeatMapComponent implements OnInit {

  @Input() overviews: OverviewModel[];

  constructor() { }

  ngOnInit() {
  }

}
