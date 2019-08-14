import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoodOverviewComponent} from './pages/mood-overview/mood-overview.component';
import {MoodDashboardComponent} from './pages/mood-dashboard/mood-dashboard.component';
import {OverviewHistoryComponent} from './pages/overview-history/overview-history.component';
import {SettingsComponent} from './pages/settings/settings.component';
import {MedsDashboardComponent} from './pages/meds-dashboard/meds-dashboard.component';
import {SleepDashboardComponent} from './pages/sleep-dashboard/sleep-dashboard.component';
import {ScheduleDashboardComponent} from './pages/schedule-dashboard/schedule-dashboard.component';
import {MedsCreationComponent} from './pages/meds-creation/meds-creation.component';
import {MedsEditionComponent} from './pages/meds-edition/meds-edition.component';
import {DrugsDashboardComponent} from './pages/drugs-dashboard/drugs-dashboard.component';
import {ScheduleCreationComponent} from './pages/schedule-creation/schedule-creation.component';

const routes: Routes = [
  {
    path: 'mood',
    children: [
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
    ]
  },
  {
    path:      'meds',
    children: [
      {
        path:      'create',
        data: {
          img: '/assets/draws/medecine.svg',
          animation: 'MedsDashboard'
        },
        component: MedsCreationComponent
      },
      {
        path:      'edit/:id',
        data: {
          img: '/assets/draws/medecine.svg',
          animation: 'MedsDashboard'
        },
        component: MedsEditionComponent
      },
      {
        path:      '',
        data: {
          img: '/assets/draws/medecine.svg',
          animation: 'MedsDashboard'
        },
        component: MedsDashboardComponent
      },
    ]
  },
  {
    path:      'drugs',
    children: [
      {
        path:      '',
        data: {
          img: '/assets/draws/drugs.svg',
          animation: 'DrugsDashboard'
        },
        component: DrugsDashboardComponent
      },
    ]
  },
  {
    path:      'sleep',
    data: {
      img: '/assets/draws/sleep.svg',
      animation: 'SleepDashboard'
    },
    component: SleepDashboardComponent
  },
  {
    path:      'schedule',
    children: [
      {
        path:      'create',
        data: {
          img: '/assets/draws/events.svg',
          animation: 'ScheduleCreation'
        },
        component: ScheduleCreationComponent
      },
      {
        path:      '',
        data: {
          img: '/assets/draws/events.svg',
          animation: 'ScheduleDashboard'
        },
        component: ScheduleDashboardComponent
      },
    ]
  },
  {
    path:      'settings',
    data: {
      img: '/assets/draws/settings.svg',
      animation: 'Settings'
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
