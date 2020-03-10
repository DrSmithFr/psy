import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventCreationComponent} from './pages/event-creation/event-creation.component';
import {EventFormComponent} from './components/event-form/event-form.component';
import {EventDisplayComponent} from './components/event-display/event-display.component';
import {CalendarDayComponent} from './dialogs/calendar-day/calendar-day.component';
import {EventReportComponent} from './pages/event-report/event-report.component';
import {EventDashboardComponent} from './pages/event-dashboard/event-dashboard.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventHistoricComponent} from './pages/event-historic/event-historic.component';

const routes = [
    {
        path:      'create',
        data:      {
            img:       '/assets/draws/events.svg',
            animation: 'EventCreation'
        },
        component: EventCreationComponent
    },
    {
        path:      'edit/:id',
        data:      {
            img:       '/assets/draws/events.svg',
            animation: 'EventCreation'
        },
        component: EventCreationComponent
    },
    {
        path:      'report/:id',
        data:      {
            img:       '/assets/draws/events.svg',
            animation: 'EventReport'
        },
        component: EventReportComponent
    },
    {
        path:      'historic',
        data:      {
            img:       '/assets/draws/events.svg',
            animation: 'EventHistoric'
        },
        component: EventHistoricComponent
    },
    {
        path:      '',
        data:      {
            img:       '/assets/draws/events.svg',
            animation: 'EventDashboard'
        },
        component: EventDashboardComponent
    },
];

@NgModule(
    {
        declarations:    [
            EventCreationComponent,
            EventFormComponent,
            EventDisplayComponent,
            CalendarDayComponent,
            EventReportComponent,
            EventDashboardComponent,
            CalendarComponent,
            EventHistoricComponent,
        ],
        entryComponents: [
            CalendarDayComponent
        ],
        imports:         [
            CommonModule,
            SharedModule,
            RouterModule.forChild(routes),
            FormsModule,
            ReactiveFormsModule,

            MatInputModule,
            MatButtonModule,
            MatExpansionModule,
            MatDialogModule,
            MatCardModule,
            MatStepperModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatIconModule,
        ]
    }
)
export class EventModule {
}
