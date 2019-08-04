import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {AppRoutingModule}                 from './app-routing.module';
import {AppComponent}                     from './app.component';
import {BrowserAnimationsModule}          from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule, MatDividerModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import {DashboardComponent}               from './pages/dashboard/dashboard.component';
import {MoodSelectorComponent}            from './components/mood-selector/mood-selector.component';
import {FeelingSelectorComponent}         from './components/feeling-selector/feeling-selector.component';
import {MoodOverviewComponent}            from './pages/mood-overview/mood-overview.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationComponent}              from './components/navigation/navigation.component';
import {MenuComponent}                    from './components/menu/menu.component';
import {ThoughtNoteComponent}             from './components/thought-note/thought-note.component';
import {OverviewDisplayComponent}         from './components/overview-display/overview-display.component';
import {MoodLoadComponent}                from './components/mood-load/mood-load.component';
import {MoodShortHistoryComponent}        from './components/mood-short-history/mood-short-history.component';
import {OverviewHistoryComponent}         from './pages/overview-history/overview-history.component';
import {TranslatorPipe}                   from './pipes/translator.pipe';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule(
  {
    declarations: [
      AppComponent,
      DashboardComponent,
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
      SettingsComponent
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
      MatSelectModule
    ],
    providers:    [],
    bootstrap:    [AppComponent]
  }
)
export class AppModule {
}
