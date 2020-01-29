import {Injectable} from '@angular/core';
import {StateService} from './state.service';
import {ApiService} from './api.service';
import {tap} from 'rxjs/operators';
import {ConnectionModel} from '../../../../models/api/connection.model';
import {RegisterationModel} from '../../../../models/api/registeration.model';
import {Argon2Service} from './argon2.service';
import {PgpService} from './pgp.service';
import {Observable} from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthService {

  constructor(
    private api: ApiService,
    private state: StateService,
    private crypto: Argon2Service,
    private pgp: PgpService,
  ) {
  }

  addPassword(password: string): Observable<string> {
    // encode password to local memory
    const salt = this.crypto.generateSalt();

    return this
      .crypto
      .encodePassword(password, salt)
      .pipe(
        tap(strongPassword => {
          this.state.PASSWORD.next(strongPassword);
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
              .subscribe(() => {
                // encode password to local memory
                const salt = this.crypto.generateSalt();

                this
                  .crypto
                  .encodePassword(password, salt)
                  .subscribe(
                    strongPassword => {
                      this.state.PASSWORD.next(strongPassword);
                      this.state.CONNECTED.next(true);

                      // generating GPG keys to secure exchange
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
              });
          },
          error => {
            obs.error(error);
          }
        );
    });
  }

  login(password: string): Observable<boolean> {
    const encoded = this.state.PASSWORD.getValue();

    return this
      .crypto
      .isPasswordCorrect(password, encoded)
      .pipe(
        tap(logged => {
          this.state.CONNECTED.next(logged);
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
    return this.state.CONNECTED.getValue();
  }

  hasSession(): boolean {
    return this.state.TOKEN.getValue() !== null;
  }

  clearSession(): void {
    this.state.TOKEN.next(null);
  }

  logout(): void {
    this.clearSession();
    this.state.CONNECTED.next(false);
  }

  hasPassword() {
    return this.state.PASSWORD.getValue() !== null;
  }

  hasAccount() {
    return this.state.USER_UUID.getValue() !== null;
  }
}
