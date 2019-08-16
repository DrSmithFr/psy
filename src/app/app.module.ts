import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MoodDashboardComponent} from './pages/mood-dashboard/mood-dashboard.component';
import {MoodSelectorComponent} from './components/mood-selector/mood-selector.component';
import {FeelingSelectorComponent} from './components/feeling-selector/feeling-selector.component';
import {MoodOverviewComponent} from './pages/mood-overview/mood-overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MenuComponent} from './components/menu/menu.component';
import {ThoughtNoteComponent} from './components/thought-note/thought-note.component';
import {OverviewDisplayComponent} from './components/overview-display/overview-display.component';
import {MoodLoadComponent} from './components/mood-load/mood-load.component';
import {MoodShortHistoryComponent} from './components/mood-short-history/mood-short-history.component';
import {OverviewHistoryComponent} from './pages/overview-history/overview-history.component';
import {TranslatorPipe} from './pipes/translator.pipe';
import {SettingsComponent} from './pages/settings/settings.component';
import {InstallPwaComponent} from './components/install-pwa/install-pwa.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {EventsSelectorComponent} from './components/events-selector/events-selector.component';
import {FeelingChartComponent} from './components/feeling-chart/feeling-chart.component';
import {ClearDataComponent} from './dialogs/clear-data/clear-data.component';
import { EventHeatMapComponent } from './components/event-heat-map/event-heat-map.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { SleepDashboardComponent } from './pages/sleep-dashboard/sleep-dashboard.component';
import { MedsDashboardComponent } from './pages/meds-dashboard/meds-dashboard.component';
import { ScheduleDashboardComponent } from './pages/schedule-dashboard/schedule-dashboard.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MedsListComponent } from './components/meds-list/meds-list.component';
import { MedsCreationComponent } from './pages/meds-creation/meds-creation.component';
import { MedsFormComponent } from './components/meds-form/meds-form.component';
import { MedDisplayComponent } from './components/med-display/med-display.component';
import { MedsEditionComponent } from './pages/meds-edition/meds-edition.component';
import { DrugsDashboardComponent } from './pages/drugs-dashboard/drugs-dashboard.component';
import { ScheduleCreationComponent } from './pages/schedule-creation/schedule-creation.component';
import { ScheduleFormComponent } from './components/schedule-form/schedule-form.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { ScheduleDisplayComponent } from './components/schedule-display/schedule-display.component';
import { CalendarDayComponent } from './dialogs/calendar-day/calendar-day.component';

@NgModule(
  {
    declarations:    [
      AppComponent,
      MoodDashboardComponent,
      MoodSelectorComponent,
      FeelingSelectorComponent,
      MoodOverviewComponent,
      NavigationComponent,
      MenuComponent,
      ThoughtNoteComponent,
      OverviewDisplayComponent,
      MoodLoadComponent,
      MoodShortHistoryComponent,
      OverviewHistoryComponent,
      TranslatorPipe,
      SettingsComponent,
      InstallPwaComponent,
      EventsSelectorComponent,
      FeelingChartComponent,
      ClearDataComponent,
      EventHeatMapComponent,
      UnderConstructionComponent,
      SleepDashboardComponent,
      MedsDashboardComponent,
      ScheduleDashboardComponent,
      CalendarComponent,
      MedsListComponent,
      MedsCreationComponent,
      MedsFormComponent,
      MedDisplayComponent,
      MedsEditionComponent,
      DrugsDashboardComponent,
      ScheduleCreationComponent,
      ScheduleFormComponent,
      ScheduleDisplayComponent,
      CalendarDayComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule,
      MatIconModule,
      MatButtonToggleModule,
      MatChipsModule,
      MatStepperModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      MatInputModule,
      MatSliderModule,
      MatBadgeModule,
      MatSidenavModule,
      MatDividerModule,
      FormsModule,
      MatExpansionModule,
      MatPaginatorModule,
      MatSelectModule,
      ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
      MatListModule,
      MatDialogModule,
      NgxMaterialTimepickerModule,
      MatDatepickerModule,
      MatNativeDateModule
    ],
    entryComponents: [
      ClearDataComponent,
      CalendarDayComponent
    ],
    providers:       [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap:       [AppComponent]
  }
)
export class AppModule {
}
