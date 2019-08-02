import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoodOverviewComponent}  from './pages/mood-overview/mood-overview.component';
import {DashboardComponent}     from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: 'overview', component: MoodOverviewComponent},
  {path: '', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
