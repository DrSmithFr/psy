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
  MatSelectModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule(
  {
    declarations:    [
      SettingsComponent,
      ClearDataComponent,
    ],
    entryComponents: [
      ClearDataComponent
    ],
    imports: [
      CommonModule,
      FormsModule,

      MatDialogModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
    ],
    providers:       [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
  }
)
export class SettingsModule {
}
