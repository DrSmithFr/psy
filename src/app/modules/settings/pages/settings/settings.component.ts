import {Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {StateService} from '../../../shared/services/state.service';
import {ClearDataComponent} from '../../dialogs/clear-data/clear-data.component';

@Component(
  {
    selector:    'app-settings',
    templateUrl: './settings.component.html',
    styleUrls:   ['./settings.component.scss']
  }
)
export class SettingsComponent implements OnInit {

  public currentLocale;

  constructor(
    public dialog: MatDialog,
    private state: StateService
  ) {
    this.currentLocale = this.state.STATE_LOCALE.getValue();

    this.state.STATE_LOCALE.subscribe(locale => {
      this.currentLocale = locale;
    });
  }

  openDialog(): void {
    this.dialog.open(ClearDataComponent, {
      width: '95%',
      hasBackdrop: true
    });
  }

  ngOnInit() {
  }

  onLocaleSelection() {
    this.state.STATE_LOCALE.next(this.currentLocale);

    // applying translations
    window.location.replace('/');
  }
}
