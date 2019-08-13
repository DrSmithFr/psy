import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
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
import {PushNotificationsModule} from 'ng-push';
import { EventHeatMapComponent } from './components/event-heat-map/event-heat-map.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';
import { SleepDashboardComponent } from './pages/sleep-dashboard/sleep-dashboard.component';
import { MedsDashboardComponent } from './pages/meds-dashboard/meds-dashboard.component';
import { ScheduleDashboardComponent } from './pages/schedule-dashboard/schedule-dashboard.component';

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
      ScheduleDashboardComponent
    ],
    imports:         [
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
      PushNotificationsModule
    ],
    entryComponents: [
      ClearDataComponent
    ],
    providers:       [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
    bootstrap:       [AppComponent]
  }
)
export class AppModule {
}
