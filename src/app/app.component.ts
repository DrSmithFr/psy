import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {DbService} from './modules/shared/services/db.service';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations/slideIn.animation';
import {TranslatorService} from './modules/shared/services/translator.service';
import {AuthService} from './modules/shared/services/auth.service';

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
  ) {
    database.connect();
    translator.init();
  }

  ngOnInit(): void {
    // this.state.STYLE.subscribe(style => {
    //   const elem = this.renderer.selectRootElement('html');
    //   this.renderer.addClass(elem, style);
    // });
  }

  close() {
    this.sidenav.close();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
