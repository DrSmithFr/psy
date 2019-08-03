import {Component, Input, OnInit} from '@angular/core';
import {OverviewModel}            from '../../../models/overview.model';

@Component({
  selector: 'app-mood-selector',
  templateUrl: './mood-selector.component.html',
  styleUrls: ['./mood-selector.component.scss']
})
export class MoodSelectorComponent implements OnInit {

  @Input() overview: OverviewModel;

  constructor() { }

  ngOnInit() {
  }

}
