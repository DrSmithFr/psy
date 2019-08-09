import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ClearDataComponent} from '../../dialogs/clear-data/clear-data.component';

@Component(
  {
    selector:    'app-settings',
    templateUrl: './settings.component.html',
    styleUrls:   ['./settings.component.scss']
  }
)
export class SettingsComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) {
  }

  openDialog(): void {
    this.dialog.open(ClearDataComponent, {
      width: '80%'
    });
  }

  ngOnInit() {
  }
}
