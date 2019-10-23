import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatorPipe} from './pipes/translator.pipe';
import {UnderConstructionComponent} from './components/under-construction/under-construction.component';
import {MatCardModule} from '@angular/material';
import {AssetPipe} from './pipes/asset.pipe';

@NgModule(
  {
    declarations: [
      TranslatorPipe,
      AssetPipe,
      UnderConstructionComponent,
    ],
    imports:      [
      CommonModule,
      MatCardModule
    ],
    exports:      [
      TranslatorPipe,
      AssetPipe,
      UnderConstructionComponent,
    ]
  }
)
export class SharedModule {
}
