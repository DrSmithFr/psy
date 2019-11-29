import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Argon2Service} from '../../../shared/services/argon2.service';
import {PgpService} from '../../../shared/services/pgp.service';
import {AuthService} from '../../../shared/services/auth.service';
import {StateService} from '../../../shared/services/state.service';

@Component(
    {
        selector:    'app-create-account',
        templateUrl: './create-account.component.html',
        styleUrls:   ['./create-account.component.scss']
    }
)
export class CreateAccountComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<CreateAccountComponent>,
        private router: Router,
        private crypto: Argon2Service,
        private pgp: PgpService,
        private auth: AuthService,
        private state: StateService
    ) {
    }

    ngOnInit() {
    }

    async createAccount(password: string) {
        const registration = await this.auth.register(password);
        const keys         = await this.pgp.generate(registration.username, password);

        this.state.PGP_PRIVATE.next(keys.private);
        this.state.PGP_PUBLIC.next(keys.public);
    }
}
