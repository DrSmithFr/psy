import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsDashboardComponent } from './meds-dashboard.component';

describe('MedsDashboardComponent', () => {
  let component: MedsDashboardComponent;
  let fixture: ComponentFixture<MedsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
