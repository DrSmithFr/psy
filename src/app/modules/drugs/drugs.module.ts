import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DrugsDashboardComponent} from './drugs-dashboard/drugs-dashboard.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import {environment} from '../../../environments/environment';

const routes = [
    {
        path:      '',
        data:      {
            img:       '/assets/draws/drugs.svg',
            animation: 'DrugsDashboard'
        },
        component: DrugsDashboardComponent
    }
];

@NgModule(
  {
    declarations: [
      DrugsDashboardComponent
    ],
    imports: [
      CommonModule,
      SharedModule,

      RouterModule.forChild(routes),
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
    ]
  }
)
export class DrugsModule {
}
