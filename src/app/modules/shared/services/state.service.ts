import {Injectable} from '@angular/core';
import {BehaviorSubject, merge} from 'rxjs';
import {mapTo, take} from 'rxjs/operators';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class StateService {
    STATE_LOCALE: BehaviorSubject<string>;
    STATE_PGP_PRIVATE: BehaviorSubject<string>;
    STATE_PGP_PUBLIC: BehaviorSubject<string>;

    constructor() {
        this.initState();
        this.listenToStateChangesAndSave();
    }

    initState() {
        this.STATE_LOCALE = new BehaviorSubject<string>(
            this.getItemParsed('STATE_LOCALE') || 'en'
        );

        this.STATE_PGP_PRIVATE = new BehaviorSubject<string>(
            this.getItemParsed('STATE_PGP_PRIVATE') || null
        );

        this.STATE_PGP_PUBLIC = new BehaviorSubject<string>(
            this.getItemParsed('STATE_PGP_PUBLIC') || null
        );
    }

    private listenToStateChangesAndSave() {
        merge(
            this.STATE_LOCALE.pipe(mapTo('STATE_LOCALE')),
            this.STATE_PGP_PRIVATE.pipe(mapTo('STATE_PGP_PRIVATE')),
            this.STATE_PGP_PUBLIC.pipe(mapTo('STATE_PGP_PUBLIC')),
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
