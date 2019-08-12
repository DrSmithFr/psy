import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoodOverviewComponent} from './pages/mood-overview/mood-overview.component';
import {MoodDashboardComponent} from './pages/mood-dashboard/mood-dashboard.component';
import {OverviewHistoryComponent} from './pages/overview-history/overview-history.component';
import {SettingsComponent} from './pages/settings/settings.component';

const routes: Routes = [
  {
    path:      'mood/overview',
    component: MoodOverviewComponent
  },
  {
    path:      'mood/history',
    component: OverviewHistoryComponent
  },
  {
    path:      'mood',
    component: MoodDashboardComponent
  },
  {
    path:      'settings',
    component: SettingsComponent
  },
  {
    path:       '',
    pathMatch:  'full',
    redirectTo: '/mood',
  }
];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {
}
