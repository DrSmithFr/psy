import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {DbService} from '../../services/db.service';
import {Router} from '@angular/router';

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
    this.database.getOverviews().subscribe(list => {
      this.database.removeOverviews(list);
      this.dialogRef.close(true);
      this.router.navigateByUrl('/');
    });
  }
}
