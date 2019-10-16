import {Pipe, PipeTransform} from '@angular/core';
import {AssetService} from '../services/asset.service';

@Pipe({name: 'asset'})
export class AssetPipe implements PipeTransform {

  constructor(
    private assetService: AssetService
  ) {
  }

  transform(value: string): string {
    return this.assetService.getUrl(value);
  }
}
