import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

const argon2 = require('argon2-browser');

@Injectable(
  {
    providedIn: 'root'
  }
)
export class Argon2Service {

  constructor() {
  }

  generateSalt(): string {
    return Math
             .random()
             .toString(36)
             .substring(2, 15);
  }

  encodePassword(password: string, passSalt: string): Observable<string> {
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
            obs.next(crypted.encoded);
          },
          () => {
            obs.next(null);
          }
        );
    }));
  }

  isPasswordCorrect(password: string, encrypted: string): Observable<boolean> {
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
            obs.next(true);
          },
          () => {
            obs.next(false);
          }
        );
    });
  }
}
