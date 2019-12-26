import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatorPipe} from './pipes/translator.pipe';
import {UnderConstructionComponent} from './components/under-construction/under-construction.component';
import {MatCardModule, MatFormFieldModule} from '@angular/material';
import {AssetPipe} from './pipes/asset.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/login/login.component';
import {InterceptorService} from './services/interceptor/interceptor.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule(
  {
    declarations: [
      TranslatorPipe,
      AssetPipe,
      UnderConstructionComponent,
      LoginComponent,
    ],
    imports:      [
      CommonModule,
      HttpClientModule,
      MatCardModule,
      MatFormFieldModule,
      MatSnackBarModule,
    ],
    exports:      [
      TranslatorPipe,
      AssetPipe,
      UnderConstructionComponent,
      LoginComponent
    ],
    providers:    [
      {
        provide:  HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi:    true
      },
    ]
  }
)
export class SharedModule {
}
