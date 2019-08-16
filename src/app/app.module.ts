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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MenuComponent} from './components/menu/menu.component';
import {TranslatorPipe} from './pipes/translator.pipe';
import {InstallPwaComponent} from './components/install-pwa/install-pwa.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ClearDataComponent} from './dialogs/clear-data/clear-data.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { CalendarDayComponent } from './dialogs/calendar-day/calendar-day.component';
import {ThoughtNoteComponent} from './modules/mood/components/thought-note/thought-note.component';
import {MoodLoadComponent} from './modules/mood/components/mood-load/mood-load.component';
import {MoodShortHistoryComponent} from './modules/mood/components/mood-short-history/mood-short-history.component';
import {OverviewHistoryComponent} from './modules/mood/pages/overview-history/overview-history.component';
import {SettingsComponent} from './modules/settings/pages/settings/settings.component';
import {EventsSelectorComponent} from './modules/mood/components/events-selector/events-selector.component';
import {FeelingChartComponent} from './modules/mood/components/feeling-chart/feeling-chart.component';
import {EventHeatMapComponent} from './modules/mood/components/event-heat-map/event-heat-map.component';
import {MoodDashboardComponent} from './modules/mood/pages/mood-dashboard/mood-dashboard.component';
import {MoodSelectorComponent} from './modules/mood/components/mood-selector/mood-selector.component';
import {FeelingSelectorComponent} from './modules/mood/components/feeling-selector/feeling-selector.component';
import {MoodOverviewComponent} from './modules/mood/pages/mood-overview/mood-overview.component';
import {SleepDashboardComponent} from './modules/sleep/pages/sleep-dashboard/sleep-dashboard.component';
import {MedsDashboardComponent} from './modules/meds/pages/meds-dashboard/meds-dashboard.component';
import {EventDashboardComponent} from './modules/event/pages/event-dashboard/event-dashboard.component';
import {CalendarComponent} from './modules/event/components/calendar/calendar.component';
import {MedsListComponent} from './modules/meds/components/meds-list/meds-list.component';
import {MedsCreationComponent} from './modules/meds/pages/meds-creation/meds-creation.component';
import {MedsFormComponent} from './modules/meds/components/meds-form/meds-form.component';
import {MedDisplayComponent} from './modules/meds/components/med-display/med-display.component';
import {MedsEditionComponent} from './modules/meds/pages/meds-edition/meds-edition.component';
import {DrugsDashboardComponent} from './modules/drugs/drugs-dashboard/drugs-dashboard.component';
import {EventCreationComponent} from './modules/event/pages/event-creation/event-creation.component';
import {EventFormComponent} from './modules/event/components/event-form/event-form.component';
import {EventDisplayComponent} from './modules/event/components/event-display/event-display.component';
import {OverviewDisplayComponent} from './modules/mood/components/overview-display/overview-display.component';
import { EventReportComponent } from './modules/event/pages/event-report/event-report.component';

@NgModule(
  {
    declarations:    [
      AppComponent,
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
      UnderConstructionComponent,
      EventHeatMapComponent,
      MoodDashboardComponent,
      MoodSelectorComponent,
      FeelingSelectorComponent,
      MoodOverviewComponent,
      SleepDashboardComponent,
      MedsDashboardComponent,
      EventDashboardComponent,
      CalendarComponent,
      MedsListComponent,
      MedsCreationComponent,
      MedsFormComponent,
      MedDisplayComponent,
      MedsEditionComponent,
      DrugsDashboardComponent,
      EventCreationComponent,
      EventFormComponent,
      EventDisplayComponent,
      CalendarDayComponent,
      EventReportComponent,
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
      MatNativeDateModule,
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
