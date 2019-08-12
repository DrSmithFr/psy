import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoodOverviewComponent} from './pages/mood-overview/mood-overview.component';
import {MoodDashboardComponent} from './pages/mood-dashboard/mood-dashboard.component';
import {OverviewHistoryComponent} from './pages/overview-history/overview-history.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {UnderConstructionComponent} from './components/under-construction/under-construction.component';

const routes: Routes = [
  {
    path: 'mood',
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
        data: {
          img: '/assets/draws/feeling.png'
        },
        component: MoodDashboardComponent
      },
    ]
  },
  {
    path:      'meds',
    data: {
      img: '/assets/draws/medecine.svg'
    },
    component: UnderConstructionComponent
  },
  {
    path:      'sleep',
    data: {
      img: '/assets/draws/sleep.svg'
    },
    component: UnderConstructionComponent
  },
  {
    path:      'schedule',
    data: {
      img: '/assets/draws/schedule.svg'
    },
    component: UnderConstructionComponent
  },
  {
    path:      'settings',
    data: {
      img: '/assets/draws/settings.png'
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
