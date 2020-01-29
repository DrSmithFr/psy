import {Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {DbService} from '../../../shared/services/db.service';
import {Router} from '@angular/router';
import {combineLatest} from 'rxjs';
import {environment} from '../../../../../environments/environment';
import {AssetService} from '../../../shared/services/asset.service';
import {LoggerService} from '../../../shared/services/logger.service';

@Component(
  {
    selector:    'app-clear-data',
    templateUrl: './clear-data.component.html',
    styleUrls:   ['./clear-data.component.scss']
  }
)
export class ClearDataComponent implements OnInit {

  constructor(
    private router: Router,
    private database: DbService,
    private assets: AssetService,
    private logger: LoggerService
  ) {
  }

  ngOnInit() {
  }

  clearData() {
    this.logger.debug('removing data');

    combineLatest([
      this.database.getOverviews(),
      this.database.getMeds(),
    ]).subscribe(
      ([
         overviews,
         meds
       ]) => {
        this.logger.debug('data loaded to memory');
        combineLatest([
          this.database.removeOverviews(overviews),
          this.database.removeMeds(meds)
        ]).subscribe(() => {
          this.logger.debug('all data clear');

          if (environment.application) {
            window.location.replace(this.assets.getUrl('/index.html'));
          } else {
            window.location.replace('/');
          }
        });
      });
  }
}
