import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {LoggerService} from './logger.service';

const argon2 = require('argon2-browser');

@Injectable(
  {
    providedIn: 'root'
  }
)
export class Argon2Service {

  constructor(
    private logger: LoggerService
  ) {
  }

  generateSalt(): string {
    return Math
      .random()
      .toString(36)
      .substring(2, 15);
  }

  encodePassword(password: string, passSalt: string): Observable<string> {
    this.logger.debug('encoding "' + password + '" with ' + passSalt);

    return new Observable<string>((obs => {
      argon2
        .hash(
          {
            pass: password,
            salt: passSalt,

            mem:  4092,
            type: argon2.ArgonType.Argon2id
          }
        )
        .then(
          (crypted) => {
            this.logger.debug('encrypted: ' + crypted.encoded);
            obs.next(crypted.encoded);
          },
          () => {
            this.logger.debug('encryption fail');
            obs.next(null);
          }
        );
    }));
  }

  isPasswordCorrect(password: string, encrypted: string): Observable<boolean> {
    this.logger.debug('comparing "' + password + '" with ' + encrypted);

    return new Observable<boolean>((obs) => {
      argon2
        .verify(
          {
            pass:    password,
            encoded: encrypted,

            type: argon2.ArgonType.Argon2id
          }
        )
        .then(
          () => {
            this.logger.debug('password valid');
            obs.next(true);
          },
          () => {
            this.logger.debug('password invalid');
            obs.next(false);
          }
        );
    });
  }
}
