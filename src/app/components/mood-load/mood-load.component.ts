import {Component, Input, OnInit} from '@angular/core';
import {OverviewModel}            from '../../../models/overview.model';

@Component({
  selector: 'app-mood-load',
  templateUrl: './mood-load.component.html',
  styleUrls: ['./mood-load.component.scss']
})
export class MoodLoadComponent implements OnInit {

  @Input() overviews: OverviewModel[];

  constructor() { }

  ngOnInit() {
  }

}
