import {Injectable}                from '@angular/core';
import {moodLoadTranslations}      from '../translations/mood-load';
import {generalTranslations}       from '../translations/general';
import {TranslationModel}          from '../../models/translation.model';
import {Observable, ReplaySubject} from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TranslatorService {

  public local = 'fr';

  private translations: Map<string, TranslationModel>;
  private loaded: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor() {
    this.translations = new Map<string, TranslationModel>();
    this.loaded       = new ReplaySubject<true>();
  }

  trans(value: string): Observable<string> {

    console.log(value);

    return Observable.create((observer) => {

      this.loaded.subscribe(() => {
        const translation = this.translations.get(value);

        if (!translation) {
          throw new Error('cannot found transaltion ' + value);
        }

        observer.next(this.getTranslationAccordingToLocal(translation));
      });
    });
  }

  getTranslationAccordingToLocal(t: TranslationModel): string {
    return t[this.local];
  }

  init() {
    const registered = [
      moodLoadTranslations,
      generalTranslations
    ];

    console.log(registered);

    registered.forEach((list: TranslationModel[]) => {
      list.forEach(trans => {
        this.translations.set(trans.id, trans);
      });
    });

    this.loaded.next(true);
  }
}
