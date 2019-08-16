import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepDashboardComponent } from './sleep-dashboard.component';

describe('SleepDashboardComponent', () => {
  let component: SleepDashboardComponent;
  let fixture: ComponentFixture<SleepDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
