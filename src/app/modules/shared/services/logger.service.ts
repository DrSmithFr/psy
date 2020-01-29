import {Injectable} from '@angular/core';
import {moodLoadTranslations} from '../../../translations/mood-load';
import {generalTranslations} from '../../../translations/general';
import {TranslationModel} from '../../../../models/translation.model';
import {Observable, ReplaySubject} from 'rxjs';
import {StateService} from './state.service';
import {take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../../../environments/environment';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class LoggerService {
  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  debug(message: string): void {
    this.log('Debug: ' + message, 10000);
  }

  log(message: string, duration: number = 2500): void {
    if (environment.developer) {
      this.snackBar.open(message, null, {duration});
    }
  }

  error(message: string): void {
    this.log('Error: ' + message, 10000);
  }
}
