import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MenuComponent} from './components/menu/menu.component';
import {MoodModule} from './modules/mood/mood.module';
import {EventModule} from './modules/event/event.module';
import {MedsModule} from './modules/meds/meds.module';
import {DrugsModule} from './modules/drugs/drugs.module';
import {SleepModule} from './modules/sleep/sleep.module';
import {SettingsModule} from './modules/settings/settings.module';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {SharedModule} from './modules/shared/shared.module';

@NgModule(
  {
    declarations: [
      AppComponent,

      NavigationComponent,
      MenuComponent,
    ],
    imports:      [
      AppRoutingModule,

      MoodModule,
      EventModule,
      MedsModule,
      DrugsModule,
      SleepModule,
      SettingsModule,

      FormsModule,
      ReactiveFormsModule,

      BrowserModule,
      BrowserAnimationsModule,

      MatFormFieldModule,
      MatSidenavModule,
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      SharedModule,
    ],
    bootstrap:    [
      AppComponent
    ]
  }
)
export class AppModule {
}
