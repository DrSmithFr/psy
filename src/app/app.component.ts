import {Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {DbService} from './services/db.service';
import {TranslatorService} from './services/translator.service';
import {NotifierService} from './services/notifier.service';
import {RouterOutlet} from '@angular/router';
import {SwPush} from '@angular/service-worker';
import {slideInAnimation} from './animations/slideIn.animation';

@Component(
  {
    selector:    'app-root',
    templateUrl: './app.component.html',
    styleUrls:   ['./app.component.scss'],
    animations:  [
      slideInAnimation
    ]
  }
)
export class AppComponent {
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

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

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
