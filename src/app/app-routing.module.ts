import { NgModule }               from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import {MoodOverviewComponent}    from './pages/mood-overview/mood-overview.component';
import {DashboardComponent}       from './pages/dashboard/dashboard.component';
import {OverviewHistoryComponent} from './pages/overview-history/overview-history.component';
import {SettingsComponent}        from './pages/settings/settings.component';

const routes: Routes = [
  {path: 'overview', component: MoodOverviewComponent},
  {path: 'overview/history', component: OverviewHistoryComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
