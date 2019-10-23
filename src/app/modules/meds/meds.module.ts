import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedsDashboardComponent} from './pages/meds-dashboard/meds-dashboard.component';
import {MedsListComponent} from './components/meds-list/meds-list.component';
import {MedsCreationComponent} from './pages/meds-creation/meds-creation.component';
import {MedsFormComponent} from './components/meds-form/meds-form.component';
import {MedDisplayComponent} from './components/med-display/med-display.component';
import {MedsEditionComponent} from './pages/meds-edition/meds-edition.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatPaginatorModule, MatSlideToggleModule,
  MatStepperModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule(
  {
    declarations: [
      MedsDashboardComponent,
      MedsListComponent,
      MedsCreationComponent,
      MedsFormComponent,
      MedDisplayComponent,
      MedsEditionComponent,
    ],
    imports: [
      CommonModule,
      SharedModule,
      RouterModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserModule,
      BrowserAnimationsModule,

      MatInputModule,
      MatIconModule,
      MatCardModule,
      MatStepperModule,
      MatFormFieldModule,
      MatExpansionModule,
      MatPaginatorModule,
      MatButtonModule,
      MatSlideToggleModule,
    ]
  }
)
export class MedsModule {
}
