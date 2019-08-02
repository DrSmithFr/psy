import {BrowserModule} from '@angular/platform-browser';
import {NgModule}      from '@angular/core';

import {AppRoutingModule}                                                                                       from './app-routing.module';
import {AppComponent}                                                                                           from './app.component';
import {BrowserAnimationsModule}                                                                                from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatSliderModule,
  MatStepperModule,
  MatToolbarModule
} from '@angular/material';
import { DashboardComponent }       from './pages/dashboard/dashboard.component';
import { MoodSelectorComponent }    from './components/mood-selector/mood-selector.component';
import { FeelingSelectorComponent } from './components/feeling-selector/feeling-selector.component';
import { MoodOverviewComponent }    from './pages/mood-overview/mood-overview.component';
import {ReactiveFormsModule}        from '@angular/forms';

@NgModule(
  {
    declarations: [
      AppComponent,
      DashboardComponent,
      MoodSelectorComponent,
      FeelingSelectorComponent,
      MoodOverviewComponent
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
      MatSliderModule
    ],
    providers:    [],
    bootstrap:    [AppComponent]
  }
)
export class AppModule {
}
