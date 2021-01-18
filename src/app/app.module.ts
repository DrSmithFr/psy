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
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from './modules/shared/shared.module';
import {StressModule} from './modules/stress/stress.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
      StressModule,

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

      // snackBar for overall notification system
      MatSnackBarModule,

      // PWA service worker (cache management)
      ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    ],
    bootstrap:    [
      AppComponent
    ],
  }
)
export class AppModule {
}
