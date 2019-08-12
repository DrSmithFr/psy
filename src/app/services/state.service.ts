import {Injectable} from '@angular/core';
import {BehaviorSubject, merge} from 'rxjs';
import {take, mapTo} from 'rxjs/operators';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class StateService {
  STATE_LOCALE: BehaviorSubject<string>;

  constructor() {
    this.initState();
    this.listenToStateChangesAndSave();
  }

  initState() {
    this.STATE_LOCALE = new BehaviorSubject<string>(
      this.getItemParsed('STATE_LOCALE') || 'en'
    );
  }

  private listenToStateChangesAndSave() {
    merge(
      this.STATE_LOCALE.pipe(mapTo('STATE_LOCALE')),
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
