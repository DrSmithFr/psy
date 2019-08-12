import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {ClearDataComponent} from '../../dialogs/clear-data/clear-data.component';
import {StateService} from '../../services/state.service';

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
      width: '80%'
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
