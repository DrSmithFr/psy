import {Injectable} from '@angular/core';
import {StateService} from './state.service';
import {ApiService} from './api.service';
import {tap} from 'rxjs/operators';
import {ConnectionModel} from '../../../../models/api/connection.model';
import {RegisterationModel} from '../../../../models/api/registeration.model';
import {Argon2Service} from './argon2.service';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthService {

    constructor(
        private api: ApiService,
        private state: StateService,
        private crypto: Argon2Service
    ) {
    }

    register(password: string): Promise<RegisterationModel> {
        return this
            .api
            .register(password)
            .pipe<RegisterationModel>(
                tap(register => {
                    const salt = this.crypto.generateSalt();

                    this.crypto.encodePassword(password, salt).then(strongPassword => {
                        this.state.USER_UUID.next(register.username);
                        this.state.PASSWORD.next(strongPassword);
                    });
                }),
            )
            .toPromise();
    }

    connect(login: string, password: string): Promise<ConnectionModel> {
        return this
            .api
            .connect(login, password)
            .pipe<ConnectionModel>(
                tap(connection => {
                    // updating session with the new token
                    this.state.TOKEN.next(connection.token);
                }),
            )
            .toPromise();
    }

    getUser(): string {
        return this.state.USER_UUID.getValue();
    }

    hasSession(): boolean {
        return this.state.TOKEN.getValue() !== null;
    }

    clearSession(): void {
        this.state.TOKEN.next(null);
    }
}
