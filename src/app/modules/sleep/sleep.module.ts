import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SleepDashboardComponent} from './pages/sleep-dashboard/sleep-dashboard.component';
import {MatIconModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';

@NgModule(
  {
    declarations: [
      SleepDashboardComponent
    ],
    imports: [
      CommonModule,
      MatIconModule,
      SharedModule,
    ]
  }
)
export class SleepModule {
}
