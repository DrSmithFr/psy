import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {StateService} from '../../../shared/services/state.service';
import {ClearDataComponent} from '../../dialogs/clear-data/clear-data.component';
import {AssetService} from '../../../shared/services/asset.service';
import {environment} from '../../../../../environments/environment';
import {CreateAccountComponent} from '../../dialogs/create-account/create-account.component';
import {AuthService} from '../../../shared/services/auth.service';

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
    public auth: AuthService,
    private state: StateService,
    private assets: AssetService,
  ) {
    this.currentLocale = this.state.LOCALE.getValue();

    this.state.LOCALE.subscribe(locale => {
      this.currentLocale = locale;
    });
  }

  openDialog(): void {
    this.dialog.open(ClearDataComponent, {
      width:       '95%',
      hasBackdrop: true
    });
  }

  ngOnInit() {
  }

  onLocaleSelection() {
    this.state.LOCALE.next(this.currentLocale);

    // applying translations
    if (environment.application) {
      window.location.replace(this.assets.getUrl('/index.html'));
    } else {
      window.location.replace('/');
    }
  }

  createAccount() {
    this.dialog.open(CreateAccountComponent, {
      width:       '95%',
      hasBackdrop: true
    });
  }
}
