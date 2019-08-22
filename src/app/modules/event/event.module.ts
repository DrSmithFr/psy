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
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule,
  MatStepperModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventHistoricComponent} from './pages/event-historic/event-historic.component';

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
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserModule,
      BrowserAnimationsModule,

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

      NgxMaterialTimepickerModule,
    ]
  }
)
export class EventModule {
}
