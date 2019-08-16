import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodDashboardComponent } from './mood-dashboard.component';

describe('DashboardComponent', () => {
  let component: MoodDashboardComponent;
  let fixture: ComponentFixture<MoodDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoodDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
