import {Component, OnInit} from '@angular/core';
import {environment} from '../../../../../environments/environment';
import {StateService} from '../../../shared/services/state.service';
import {AssetService} from '../../../shared/services/asset.service';

@Component(
  {
    selector:    'app-locale-settings',
    templateUrl: './locale-settings.component.html',
    styleUrls:   ['./locale-settings.component.scss']
  }
)
export class LocaleSettingsComponent implements OnInit {

  public currentLocale: string;

  constructor(
    private state: StateService,
    private assets: AssetService,
  ) {
    this.currentLocale = this.state.LOCALE.getValue();

    this.state.LOCALE.subscribe(locale => {
      this.currentLocale = locale;
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
}
