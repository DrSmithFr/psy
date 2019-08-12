import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoodOverviewComponent} from './pages/mood-overview/mood-overview.component';
import {MoodDashboardComponent} from './pages/mood-dashboard/mood-dashboard.component';
import {OverviewHistoryComponent} from './pages/overview-history/overview-history.component';
import {SettingsComponent} from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: 'mood',
    data: {
      image: '/assets/draws/feeling.png'
    },
    children: [
      {
        path:      'overview',
        component: MoodOverviewComponent
      },
      {
        path:      'history',
        component: OverviewHistoryComponent
      },
      {
        path:      '',
        component: MoodDashboardComponent
      },
    ]
  },
  {
    path:      'settings',
    data: {
      image: '/assets/draws/settings.png'
    },
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
