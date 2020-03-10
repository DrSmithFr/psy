import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreathComponent} from './pages/breath/breath.component';
import {RouterModule} from '@angular/router';

const routes = [
    {
        path:      '',
        data:      {
            img:       '/assets/draws/yoga.svg',
            animation: 'EventCreation'
        },
        component: BreathComponent
    }
];

@NgModule(
    {
        declarations: [
            BreathComponent
        ],
        imports:      [
            CommonModule,
            RouterModule.forChild(routes),
        ]
    }
)
export class StressModule {
}
