import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  public getUrl(value: string) {
    if (environment.application) {
      return 'file:///android_asset/www' + value;
    }

    return value;
  }
}
