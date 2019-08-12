import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {DbService} from './services/db.service';
import {TranslatorService} from './services/translator.service';
import {NotifierService} from './services/notifier.service';
import {Router} from '@angular/router';
import {SwPush} from '@angular/service-worker';

@Component(
  {
             selector:    'app-root',
             templateUrl: './app.component.html',
             styleUrls:   ['./app.component.scss']
           }
           )
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private database: DbService,
    private translator: TranslatorService,
    public notifier: NotifierService,
    private swPush: SwPush
  ) {
    database.connect();
    translator.init();
    notifier.requestPermission();

    this.swPush.notificationClicks.subscribe(event => {
      this.notifier.onNotificationClick(event);
      console.log(event);
    });
  }

  close() {
    this.sidenav.close();
  }
}
