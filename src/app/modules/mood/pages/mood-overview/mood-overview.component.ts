import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OverviewModel} from '../../../../../models/overview.model';
import {DbService} from '../../../../services/db.service';

@Component(
  {
    selector:    'app-mood-overview',
    templateUrl: './mood-overview.component.html',
    styleUrls:   ['./mood-overview.component.scss']
  }
)
export class MoodOverviewComponent implements OnInit {

  overview: OverviewModel;

  constructor(
    private database: DbService,
    private router: Router
  ) {
    this.overview = new OverviewModel();
  }

  ngOnInit() {
    // resetting overview
    this.overview = new OverviewModel();
  }

  submit() {
    this.database.addOverview(this.overview).subscribe(() => {
      this.router.navigateByUrl('/');
      this.overview = new OverviewModel();
    });
  }
}
