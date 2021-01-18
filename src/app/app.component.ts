import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {DbService} from './modules/shared/services/db.service';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations/slideIn.animation';
import {TranslatorService} from './modules/shared/services/translator.service';
import {AuthService} from './modules/shared/services/auth.service';
import {SwPush, SwUpdate} from '@angular/service-worker';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../environments/environment';

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
export class AppComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

  constructor(
    private database: DbService,
    private translator: TranslatorService,
    public auth: AuthService,
    private swPush: SwPush,
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar
  ) {
    database.connect();
    translator.init();
  }

  ngOnInit(): void {
    // this.state.STYLE.subscribe(style => {
    //   const elem = this.renderer.selectRootElement('html');
    //   this.renderer.addClass(elem, style);
    // });
    if (environment.production) {
      // PWA notification clicked
      this
        .swPush
        .notificationClicks
        .subscribe(event => {
          this.showUpdateBanner();
        });

      // PWA look for update
      this
        .swUpdate
        .checkForUpdate()
        .then(() => {
          console.log('checking for update');
        });

      // PWA on update available
      this
        .swUpdate
        .available
        .subscribe(() => {
          this.showUpdateBanner();
        });
    }
  }

  showUpdateBanner() {
    this
      .snackBar
      .open(
        'Update available !',
        'Apply',
      )
      .onAction()
      .subscribe(() => {
        this
          .swUpdate
          .activateUpdate()
          .then(() => {
            document.location.reload();
          });
      });
  }

  close() {
    this.sidenav.close();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
