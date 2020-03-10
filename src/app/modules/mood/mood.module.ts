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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes = [
  {
    path:      'overview',
    data: {
      img: '/assets/draws/mood.svg',
      animation: 'MoodDashboard'
    },
    component: MoodOverviewComponent
  },
  {
    path:      'history',
    data: {
      img: '/assets/draws/mood.svg',
      animation: 'MoodDashboard'
    },
    component: OverviewHistoryComponent
  },
  {
    path:      '',
    data: {
      img: '/assets/draws/mood.svg',
      animation: 'MoodDashboard'
    },
    component: MoodDashboardComponent
  },
];

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
    imports:      [
      CommonModule,
      SharedModule,
      RouterModule.forChild(routes),
      FormsModule,
      ReactiveFormsModule,

      MatInputModule,
      MatCardModule,
      MatStepperModule,
      MatIconModule,
      MatListModule,
      MatChipsModule,
      MatSliderModule,
      MatExpansionModule,
      MatPaginatorModule,
      MatButtonModule,
    ],
    providers:    [
      {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
    ],
  }
)
export class MoodModule {
}
