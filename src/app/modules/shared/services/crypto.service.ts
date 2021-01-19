import {Injectable} from '@angular/core';
import {StateService} from './state.service';
import {from, Observable} from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CryptoService {

  constructor(private state: StateService) {
  }

  encodePassword(password: string): Observable<string> {
    return from(this.sha256(password));
  }

  authenticate(plainPassword): Observable<boolean> {
    const encodedPassword = this.state.PASSWORD.getValue();

    return new Observable(subscriber => {
      from(this.sha256(plainPassword)).subscribe(
        value => {
          subscriber.next(value === encodedPassword);
          subscriber.complete();
        },
        error => {
          subscriber.next(false);
          subscriber.complete();
        }
      );
    });
  }

  async sha256(message): Promise<string> {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    return hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  }
}
