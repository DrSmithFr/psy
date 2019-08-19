import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MedsDashboardComponent} from './pages/meds-dashboard/meds-dashboard.component';
import {MedsListComponent} from './components/meds-list/meds-list.component';
import {MedsCreationComponent} from './pages/meds-creation/meds-creation.component';
import {MedsFormComponent} from './components/meds-form/meds-form.component';
import {MedDisplayComponent} from './components/med-display/med-display.component';
import {MedsEditionComponent} from './pages/meds-edition/meds-edition.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatPaginatorModule,
  MatStepperModule
} from '@angular/material';
import {RouterModule} from '@angular/router';

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

      MatIconModule,
      MatCardModule,
      MatStepperModule,
      MatFormFieldModule,
      MatExpansionModule,
      MatPaginatorModule,
      MatButtonModule,
    ]
  }
)
export class MedsModule {
}
