import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DrugsDashboardComponent} from './drugs-dashboard/drugs-dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';

@NgModule(
  {
    declarations: [
      DrugsDashboardComponent
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
    ]
  }
)
export class DrugsModule {
}
