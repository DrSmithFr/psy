import {Injectable} from '@angular/core';
import {StateService} from './state.service';
import {ApiService} from './api.service';
import {tap} from 'rxjs/operators';
import {ConnectionModel} from '../../../../models/api/connection.model';
import {RegisterationModel} from '../../../../models/api/registeration.model';
import {PgpService} from './pgp.service';
import {Observable} from 'rxjs';
import {CryptoService} from './crypto.service';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  constructor(
    private api: ApiService,
    private state: StateService,
    private pgp: PgpService,
    private crypto: CryptoService
  ) {
  }

  addPassword(password: string): Observable<string> {
    return this
      .crypto
      .encodePassword(password)
      .pipe(
        tap(encodedPassword => {
          this.state.PASSWORD.next(encodedPassword);
        })
      );
  }

  register(password: string): Observable<RegisterationModel> {
    return new Observable<RegisterationModel>(obs => {
      // creating account on gateway
      this
        .api
        .register(password)
        .subscribe(
          registration => {
            this.state.USER_UUID.next(registration.username);

            // ensure account creation with connection
            this
              .connect(password)
              .subscribe(
                () => {
                  this
                    .pgp
                    .generate(registration.username, password)
                    .then(keys => {
                      this.state.PGP_PRIVATE.next(keys.private);

                      this
                        .api
                        .secure({key: keys.public})
                        .subscribe(
                          gpg => {
                            // enable back for e2ee
                            // this.state.PGP_PUBLIC.next(gpg.key);
                            obs.next(registration);
                          },
                          error => {
                            obs.error(error);
                          }
                        );
                    });
                },
                error => {
                  obs.error(error);
                }
              );
          },
          error => {
            obs.error(error);
          }
        );
    });
  }

  login(password: string): Observable<boolean> {
    return this
      .crypto
      .authenticate(password)
      .pipe(
        tap(isLogged => {
          if (isLogged === false) {
            return;
          }

          this
            .crypto
            .encodePassword(password + '_locale_encryption')
            .subscribe(encryptionKey => {
              this.state.ENCRYPTION_KEY.next(encryptionKey);
            });
        })
      );
  }

  connect(password: string): Observable<ConnectionModel> {
    return this
      .api
      .connect(
        this.getUser(),
        password
      )
      .pipe<ConnectionModel>(
        tap(connection => {
          // updating session with the new token
          this.state.TOKEN.next(connection.token);
        }),
      );
  }

  getUser(): string | null {
    return this.state.USER_UUID.getValue();
  }

  isConnected(): boolean {
    return this.state.ENCRYPTION_KEY.getValue() !== null;
  }

  isLoggingNeeded(): boolean {
    if (this.state.IS_SECURED.getValue()) {
      return !this.isConnected();
    }

    return false;
  }

  hasSession(): boolean {
    return this.state.TOKEN.getValue() !== null;
  }

  clearSession(): void {
    this.state.TOKEN.next(null);
  }

  logout(): void {
    this.clearSession();
    this.state.ENCRYPTION_KEY.next(null);
  }

  hasPassword() {
    return this.state.PASSWORD.getValue() !== null;
  }

  hasAccount() {
    return this.state.USER_UUID.getValue() !== null;
  }
}
