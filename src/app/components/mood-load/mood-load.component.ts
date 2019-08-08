import {Component, OnInit} from '@angular/core';
import {DbService} from '../../services/db.service';
import {MoodLoadService} from '../../services/mood-load.service';
import {LoadModel} from '../../../models/load.model';

@Component(
  {
    selector:    'app-mood-load',
    templateUrl: './mood-load.component.html',
    styleUrls:   ['./mood-load.component.scss']
  }
)
export class MoodLoadComponent implements OnInit {

  public periods: number[];
  public stats: LoadModel[];

  constructor(
    private database: DbService,
    private service: MoodLoadService
  ) {
  }

  ngOnInit() {
    this
      .database
      .getOverviews()
      .subscribe(list => {
        this.periods = this.service.determinePeriods(list);
        this.stats   = this.service.getMoodLoad(list);
      });
  }

}
