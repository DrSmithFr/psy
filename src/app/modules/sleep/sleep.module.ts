import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SleepDashboardComponent} from './pages/sleep-dashboard/sleep-dashboard.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes = [
    {
        path:      '',
        data:      {
            img:       '/assets/draws/sleep.svg',
            animation: 'SleepDashboard'
        },
        component: SleepDashboardComponent
    }
];

@NgModule(
    {
        declarations: [
            SleepDashboardComponent
        ],
        imports:      [
            CommonModule,
            SharedModule,
            RouterModule.forChild(routes),
            FormsModule,
            ReactiveFormsModule,

            MatInputModule,
            MatIconModule,
        ]
    }
)
export class SleepModule {
}
