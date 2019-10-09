import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {DbService} from './modules/shared/services/db.service';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations/slideIn.animation';
import {TranslatorService} from './modules/shared/services/translator.service';

declare var device;

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
    ) {
        database.connect();
        translator.init();
    }

    ngOnInit(): void {
        document.addEventListener('deviceready', () => {
            alert(device.platform);
        }, false);
    }

    close() {
        this.sidenav.close();
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
