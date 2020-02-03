import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './pages/settings/settings.component';
import {ClearDataComponent} from './dialogs/clear-data/clear-data.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule, MatSlideToggleModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateAccountComponent} from './dialogs/create-account/create-account.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { LocaleSettingsComponent } from './components/locale-settings/locale-settings.component';
import { SecureAreaSettingsComponent } from './components/secure-area-settings/secure-area-settings.component';
import { SecureAreaDevelopperComponent } from './components/secure-area-developper/secure-area-developper.component';

@NgModule(
    {
        declarations:    [
            SettingsComponent,
            ClearDataComponent,
            CreateAccountComponent,
            AccountSettingsComponent,
            LocaleSettingsComponent,
            SecureAreaSettingsComponent,
            SecureAreaDevelopperComponent
        ],
        entryComponents: [
            ClearDataComponent,
            CreateAccountComponent
        ],
      imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        BrowserAnimationsModule,

        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSlideToggleModule,
      ],
        providers:       [
            {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
        ],
    }
)
export class SettingsModule {
}
