import { Component, OnInit } from '@angular/core';
import {ClearDataComponent} from '../../dialogs/clear-data/clear-data.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-secure-area-settings',
  templateUrl: './secure-area-settings.component.html',
  styleUrls: ['./secure-area-settings.component.scss']
})
export class SecureAreaSettingsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(ClearDataComponent, {
      width:       '95%',
      hasBackdrop: true
    });
  }
}
