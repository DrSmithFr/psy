import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatorPipe} from './pipes/translator.pipe';
import {UnderConstructionComponent} from './components/under-construction/under-construction.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {AssetPipe} from './pipes/asset.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/login/login.component';
import {InterceptorService} from './services/interceptor/interceptor.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule(
  {
    declarations: [
      TranslatorPipe,
      AssetPipe,
      UnderConstructionComponent,
      LoginComponent,
    ],
    imports: [
      CommonModule,
      HttpClientModule,

      MatInputModule,
      MatCardModule,
      MatFormFieldModule,
      MatSnackBarModule,
      MatFormFieldModule,

      FormsModule,
      ReactiveFormsModule,
      MatButtonModule,
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
