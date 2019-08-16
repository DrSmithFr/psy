import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingChartComponent } from './mood-chart.component';

describe('MoodChartComponent', () => {
  let component: FeelingChartComponent;
  let fixture: ComponentFixture<FeelingChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeelingChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
