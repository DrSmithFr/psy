import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SleepDashboardComponent} from './pages/sleep-dashboard/sleep-dashboard.component';
import {MatIconModule, MatInputModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule(
  {
    declarations: [
      SleepDashboardComponent
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
      MatIconModule,
    ]
  }
)
export class SleepModule {
}
