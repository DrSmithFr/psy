import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsComponent} from './pages/settings/settings.component';
import {ClearDataComponent} from './dialogs/clear-data/clear-data.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateAccountComponent} from './dialogs/create-account/create-account.component';
import {AccountSettingsComponent} from './components/account-settings/account-settings.component';
import {LocaleSettingsComponent} from './components/locale-settings/locale-settings.component';
import {SecureAreaSettingsComponent} from './components/secure-area-settings/secure-area-settings.component';
import {SecureAreaDevelopperComponent} from './components/secure-area-developper/secure-area-developper.component';

const routes = [
    {
        path:      '',
        data:      {
            img:       '/assets/draws/settings.svg',
            animation: 'Settings'
        },
        component: SettingsComponent
    }
];

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
        imports:         [
            CommonModule,
            SharedModule,
            RouterModule.forChild(routes),
            FormsModule,
            ReactiveFormsModule,

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
