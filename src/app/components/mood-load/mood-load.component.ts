import {Component, OnInit} from '@angular/core';
import {DbService}         from '../../services/db.service';
import {MoodLoadService}   from '../../services/mood-load.service';

@Component(
  {
    selector:    'app-mood-load',
    templateUrl: './mood-load.component.html',
    styleUrls:   ['./mood-load.component.scss']
  }
)
export class MoodLoadComponent implements OnInit {

  public averages: number[];

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
        this.averages = this.service.getMoodLoad(list);
      });
  }

}
