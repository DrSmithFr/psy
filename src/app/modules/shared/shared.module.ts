import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslatorPipe} from './pipes/translator.pipe';
import {UnderConstructionComponent} from './components/under-construction/under-construction.component';
import {MatCardModule} from '@angular/material';
import {AssetPipe} from './pipes/asset.pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './services/interceptor/interceptor.service';

@NgModule(
    {
        declarations: [
            TranslatorPipe,
            AssetPipe,
            UnderConstructionComponent,
        ],
        imports:      [
            CommonModule,
            HttpClientModule,
            MatCardModule
        ],
        exports:      [
            TranslatorPipe,
            AssetPipe,
            UnderConstructionComponent,
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
