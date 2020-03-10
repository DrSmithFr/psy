import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {environment} from '../environments/environment';

const routes: Routes = [
    {
        path:         'mood',
        loadChildren: () => import('./modules/mood/mood.module').then(m => m.MoodModule)
    },
    {
        path:         'meds',
        loadChildren: () => import('./modules/meds/meds.module').then(m => m.MedsModule)
    },
    {
        path:         'drugs',
        loadChildren: () => import('./modules/drugs/drugs.module').then(m => m.DrugsModule)
    },
    {
        path:         'sleep',
        loadChildren: () => import('./modules/sleep/sleep.module').then(m => m.SleepModule)
    },
    {
        path:         'event',
        loadChildren: () => import('./modules/event/event.module').then(m => m.EventModule)
    },
    {
        path:         'sleep',
        loadChildren: () => import('./modules/sleep/sleep.module').then(m => m.SleepModule)
    },
    {
        path:         'stress',
        loadChildren: () => import('./modules/stress/stress.module').then(m => m.StressModule)
    },
    {
        path:         'settings',
        loadChildren: () => import('./modules/settings/settings.module').then(m => m.SettingsModule)
    },
    {
        path:       '',
        pathMatch:  'full',
        redirectTo: '/mood',
    }
];

@NgModule(
    {
        imports: [RouterModule.forRoot(routes, {useHash: environment.application})],
        exports: [RouterModule]
    }
)
export class AppRoutingModule {
}
