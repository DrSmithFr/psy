import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MoodOverviewComponent} from './modules/mood/pages/mood-overview/mood-overview.component';
import {OverviewHistoryComponent} from './modules/mood/pages/overview-history/overview-history.component';
import {MoodDashboardComponent} from './modules/mood/pages/mood-dashboard/mood-dashboard.component';
import {MedsCreationComponent} from './modules/meds/pages/meds-creation/meds-creation.component';
import {MedsEditionComponent} from './modules/meds/pages/meds-edition/meds-edition.component';
import {MedsDashboardComponent} from './modules/meds/pages/meds-dashboard/meds-dashboard.component';
import {DrugsDashboardComponent} from './modules/drugs/drugs-dashboard/drugs-dashboard.component';
import {SleepDashboardComponent} from './modules/sleep/pages/sleep-dashboard/sleep-dashboard.component';
import {EventCreationComponent} from './modules/event/pages/event-creation/event-creation.component';
import {EventDashboardComponent} from './modules/event/pages/event-dashboard/event-dashboard.component';
import {SettingsComponent} from './modules/settings/pages/settings/settings.component';
import {EventReportComponent} from './modules/event/pages/event-report/event-report.component';
import {EventHistoricComponent} from './modules/event/pages/event-historic/event-historic.component';
import {environment} from '../environments/environment';
import {BreathComponent} from './modules/stress/pages/breath/breath.component';

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
    path:      'event',
    children: [
      {
        path:      'create',
        data: {
          img: '/assets/draws/events.svg',
          animation: 'EventCreation'
        },
        component: EventCreationComponent
      },
      {
        path:      'edit/:id',
        data: {
          img: '/assets/draws/events.svg',
          animation: 'EventCreation'
        },
        component: EventCreationComponent
      },
      {
        path:      'report/:id',
        data: {
          img: '/assets/draws/events.svg',
          animation: 'EventReport'
        },
        component: EventReportComponent
      },
      {
        path:      'historic',
        data: {
          img: '/assets/draws/events.svg',
          animation: 'EventHistoric'
        },
        component: EventHistoricComponent
      },
      {
        path:      '',
        data: {
          img: '/assets/draws/events.svg',
          animation: 'EventDashboard'
        },
        component: EventDashboardComponent
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
    path:      'stress',
    children: [
      {
        path:      '',
        data: {
          img: '/assets/draws/events.svg',
          animation: 'EventCreation'
        },
        component: BreathComponent
      }
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
    imports: [RouterModule.forRoot(routes, { useHash: environment.application})],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {
}
