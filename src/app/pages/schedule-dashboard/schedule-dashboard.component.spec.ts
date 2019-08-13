import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDashboardComponent } from './schedule-dashboard.component';

describe('ScheduleDashboardComponent', () => {
  let component: ScheduleDashboardComponent;
  let fixture: ComponentFixture<ScheduleDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
