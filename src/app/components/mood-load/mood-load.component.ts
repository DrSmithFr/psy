import {Component, Input, OnInit} from '@angular/core';
import {MoodLoadService} from '../../services/mood-load.service';
import {LoadModel} from '../../../models/load.model';
import {OverviewModel} from '../../../models/overview.model';

@Component(
  {
    selector:    'app-mood-load',
    templateUrl: './mood-load.component.html',
    styleUrls:   ['./mood-load.component.scss']
  }
)
export class MoodLoadComponent implements OnInit {

  @Input() overviews: OverviewModel[];

  public periods: number[];
  public stats: LoadModel[];

  constructor(
    private service: MoodLoadService
  ) {
  }

  ngOnInit() {
    if (!this.overviews.length) {
      // avoid display errors
      return;
    }

    this.periods = this.service.determinePeriods(this.overviews);
    this.stats   = this.service.getMoodLoad(this.overviews);
  }

}
