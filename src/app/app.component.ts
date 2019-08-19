import {Component, ViewChild} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {DbService} from './modules/shared/services/db.service';
import {NotifierService} from './modules/shared/services/notifier.service';
import {RouterOutlet} from '@angular/router';
import {SwPush} from '@angular/service-worker';
import {slideInAnimation} from './animations/slideIn.animation';
import {TranslatorService} from './modules/shared/services/translator.service';

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
