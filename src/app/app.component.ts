import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {DbService} from './modules/shared/services/db.service';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './animations/slideIn.animation';
import {TranslatorService} from './modules/shared/services/translator.service';
import {PgpService} from './modules/shared/services/pgp.service';

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
    @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;

    constructor(
        private database: DbService,
        private translator: TranslatorService,
        private gpg: PgpService
    ) {
        database.connect();
        translator.init();

        this.crypto().then(() => {
            console.log('Ending secure chat');
        });
    }

    async crypto() {
        console.log('generating GPG keys for alice and bob');

        const alice = await this.gpg.generate('6dfb23ca-ecf4-4e8b-889f-33e25e9a82dc', '123');
        const bob = await this.gpg.generate('79a959be-8cb0-4945-916f-3e02ca257797', '456');

        console.log('starting secure chat');

        const message = await this.gpg.encrypt('Whats up bob ?', alice, bob);
        console.log(message);

        const messageDecrypted = await this.gpg.decrypt(message, alice, bob);
        console.log(messageDecrypted);

        const answer = await this.gpg.encrypt('just chilling alice !', bob, alice);
        console.log(answer);

        const answerDecrypted = await this.gpg.decrypt(answer, bob, alice);
        console.log(answerDecrypted);
    }

    close() {
        this.sidenav.close();
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }
}
