import {Injectable} from '@angular/core';
import {BehaviorSubject, merge} from 'rxjs';
import {mapTo, take} from 'rxjs/operators';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class StateService {
  LOCALE: BehaviorSubject<string>;
  STYLE: BehaviorSubject<string>;

  IS_SECURED: BehaviorSubject<boolean>;
  PASSWORD: BehaviorSubject<string>;
  ENCRYPTION_KEY: BehaviorSubject<string>;

  USER_UUID: BehaviorSubject<string>;
  PGP_PRIVATE: BehaviorSubject<string>;
  PGP_PUBLIC: BehaviorSubject<string>;

  TOKEN: BehaviorSubject<string>;

  constructor() {
    this.initState();
    this.listenToStateChangesAndSave();
  }

  private static getItemParsed(str: string) {
    return JSON.parse(localStorage.getItem(str));
  }

  initState() {
    this.LOCALE = new BehaviorSubject<string>(
      StateService.getItemParsed('LOCALE') || 'en'
    );

    this.STYLE = new BehaviorSubject<string>(
      StateService.getItemParsed('STYLE') || 'day'
    );

    // password management
    this.PASSWORD = new BehaviorSubject<string>(
      StateService.getItemParsed('PASSWORD') || null
    );

    const isSecured = StateService.getItemParsed('IS_SECURED');

    this.IS_SECURED = new BehaviorSubject<boolean>(
      isSecured === null ? true : isSecured
    );

    // locale encryption and connection requirement
    this.ENCRYPTION_KEY = new BehaviorSubject<string>(null);

    // account management
    this.USER_UUID = new BehaviorSubject<string>(
      StateService.getItemParsed('USER_UUID') || null
    );

    this.PGP_PRIVATE = new BehaviorSubject<string>(
      StateService.getItemParsed('PGP_PRIVATE') || null
    );

    this.PGP_PUBLIC = new BehaviorSubject<string>(
      StateService.getItemParsed('PGP_PUBLIC') || null
    );

    // session management
    this.TOKEN = new BehaviorSubject<string>(
      StateService.getItemParsed('TOKEN') || null
    );
  }

  private listenToStateChangesAndSave() {
    merge(
      this.LOCALE.pipe(mapTo('LOCALE')),
      this.STYLE.pipe(mapTo('STYLE')),
      this.TOKEN.pipe(mapTo('TOKEN')),
      this.TOKEN.pipe(mapTo('USER_UUID')),
      this.PASSWORD.pipe(mapTo('PASSWORD')),
      this.PGP_PRIVATE.pipe(mapTo('PGP_PRIVATE')),
      this.PGP_PUBLIC.pipe(mapTo('PGP_PUBLIC')),
      this.IS_SECURED.pipe(mapTo('IS_SECURED')),
    ).subscribe(val => this.persistanceInLocalDevice(val));
  }

  private async persistanceInLocalDevice(obsrvblName = null) {
    localStorage.setItem(
      obsrvblName,
      JSON.stringify(
        await this[obsrvblName].pipe(take(1)).toPromise()
      )
    );
  }
}
