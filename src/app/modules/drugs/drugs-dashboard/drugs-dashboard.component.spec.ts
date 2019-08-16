import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsDashboardComponent } from './drugs-dashboard.component';

describe('DrugsDashboardComponent', () => {
  let component: DrugsDashboardComponent;
  let fixture: ComponentFixture<DrugsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
