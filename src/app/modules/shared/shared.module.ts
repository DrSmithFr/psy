import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatorPipe} from './pipes/translator.pipe';
import {UnderConstructionComponent} from './components/under-construction/under-construction.component';
import {MatCardModule} from '@angular/material';

@NgModule(
  {
    declarations: [
      TranslatorPipe,
      UnderConstructionComponent,
    ],
    imports:      [
      CommonModule,
      MatCardModule
    ],
    exports:      [
      TranslatorPipe,
      UnderConstructionComponent,
    ]
  }
)
export class SharedModule {
}
