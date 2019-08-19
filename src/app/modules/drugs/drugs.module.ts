import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DrugsDashboardComponent} from './drugs-dashboard/drugs-dashboard.component';
import {SharedModule} from '../shared/shared.module';

@NgModule(
  {
    declarations: [
      DrugsDashboardComponent
    ],
    imports: [
      CommonModule,
      SharedModule
    ]
  }
)
export class DrugsModule {
}
