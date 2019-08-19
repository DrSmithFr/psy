import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThoughtNoteComponent} from './components/thought-note/thought-note.component';
import {OverviewDisplayComponent} from './components/overview-display/overview-display.component';
import {MoodLoadComponent} from './components/mood-load/mood-load.component';
import {MoodShortHistoryComponent} from './components/mood-short-history/mood-short-history.component';
import {OverviewHistoryComponent} from './pages/overview-history/overview-history.component';
import {EventsSelectorComponent} from './components/events-selector/events-selector.component';
import {FeelingChartComponent} from './components/feeling-chart/feeling-chart.component';
import {EventHeatMapComponent} from './components/event-heat-map/event-heat-map.component';
import {MoodDashboardComponent} from './pages/mood-dashboard/mood-dashboard.component';
import {MoodSelectorComponent} from './components/mood-selector/mood-selector.component';
import {FeelingSelectorComponent} from './components/feeling-selector/feeling-selector.component';
import {MoodOverviewComponent} from './pages/mood-overview/mood-overview.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatCardModule,
  MatChipsModule,
  MatExpansionModule, MatFormFieldModule,
  MatIconModule,
  MatListModule, MatPaginatorModule,
  MatSliderModule,
  MatStepperModule
} from '@angular/material';

@NgModule(
  {
    declarations: [
      ThoughtNoteComponent,
      OverviewDisplayComponent,
      MoodLoadComponent,
      MoodShortHistoryComponent,
      OverviewHistoryComponent,
      EventsSelectorComponent,
      FeelingChartComponent,
      EventHeatMapComponent,
      MoodDashboardComponent,
      MoodSelectorComponent,
      FeelingSelectorComponent,
      MoodOverviewComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,

      MatCardModule,
      MatStepperModule,
      MatIconModule,
      MatListModule,
      MatChipsModule,
      MatSliderModule,
      MatExpansionModule,
      MatPaginatorModule,
      MatFormFieldModule,
    ],
    providers:       [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
  }
)
export class MoodModule {
}
