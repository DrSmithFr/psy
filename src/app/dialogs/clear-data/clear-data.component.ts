import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {DbService} from '../../services/db.service';
import {Router} from '@angular/router';
import {combineLatest} from 'rxjs';

@Component(
  {
    selector:    'app-clear-data',
    templateUrl: './clear-data.component.html',
    styleUrls:   ['./clear-data.component.scss']
  }
)
export class ClearDataComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ClearDataComponent>,
    private router: Router,
    private database: DbService
  ) {
  }

  ngOnInit() {
  }

  clearData() {
    combineLatest(
      this.database.getOverviews(),
      this.database.getMeds(),
    ).subscribe(
      ([
         overviews,
         meds
       ]) => {
        combineLatest(
          this.database.removeOverviews(overviews),
          this.database.removeMeds(meds)
        ).subscribe(() => {
          window.location.replace('/');
        });
      });
  }
}
