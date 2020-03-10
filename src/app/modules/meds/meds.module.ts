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
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes = [
  {
    path:      'create',
    data:      {
      img:       '/assets/draws/medecine.svg',
      animation: 'MedsDashboard'
    },
    component: MedsCreationComponent
  },
  {
    path:      'edit/:id',
    data:      {
      img:       '/assets/draws/medecine.svg',
      animation: 'MedsDashboard'
    },
    component: MedsEditionComponent
  },
  {
    path:      '',
    data:      {
      img:       '/assets/draws/medecine.svg',
      animation: 'MedsDashboard'
    },
    component: MedsDashboardComponent
  },
];

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
      RouterModule.forChild(routes),

      FormsModule,
      ReactiveFormsModule,

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
