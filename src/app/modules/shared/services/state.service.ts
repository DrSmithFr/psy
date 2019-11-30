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
  TOKEN: BehaviorSubject<string>;
  USER_UUID: BehaviorSubject<string>;
  PASSWORD: BehaviorSubject<string>;
  CONNECTED: BehaviorSubject<boolean>;
  PGP_PRIVATE: BehaviorSubject<string>;
  PGP_PUBLIC: BehaviorSubject<string>;

  constructor() {
    this.initState();
    this.listenToStateChangesAndSave();
  }

  initState() {
    this.CONNECTED = new BehaviorSubject<boolean>(false);

    this.LOCALE = new BehaviorSubject<string>(
      this.getItemParsed('LOCALE') || 'en'
    );

    this.TOKEN = new BehaviorSubject<string>(
      this.getItemParsed('TOKEN') || null
    );

    this.USER_UUID = new BehaviorSubject<string>(
      this.getItemParsed('USER_UUID') || null
    );

    this.PASSWORD = new BehaviorSubject<string>(
      this.getItemParsed('PASSWORD') || null
    );

    this.PGP_PRIVATE = new BehaviorSubject<string>(
      this.getItemParsed('PGP_PRIVATE') || null
    );

    this.PGP_PUBLIC = new BehaviorSubject<string>(
      this.getItemParsed('PGP_PUBLIC') || null
    );
  }

  private listenToStateChangesAndSave() {
    merge(
      this.LOCALE.pipe(mapTo('LOCALE')),
      this.TOKEN.pipe(mapTo('TOKEN')),
      this.TOKEN.pipe(mapTo('USER_UUID')),
      this.PGP_PRIVATE.pipe(mapTo('PGP_PRIVATE')),
      this.PGP_PUBLIC.pipe(mapTo('PGP_PUBLIC')),
    ).subscribe(val => this.persistanceInLocalDevice(val));
  }

  private getItemParsed(str: string) {
    return JSON.parse(localStorage.getItem(str));
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
