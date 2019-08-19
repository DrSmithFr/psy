import {Pipe, PipeTransform} from '@angular/core';
import {TranslatorService} from '../services/translator.service';
import {Observable} from 'rxjs';

@Pipe({name: 'trans'})
export class TranslatorPipe implements PipeTransform {

  constructor(
    private translator: TranslatorService
  ) {
  }

  transform(value: string): Observable<string> {
    return this.translator.trans(value);
  }
}
