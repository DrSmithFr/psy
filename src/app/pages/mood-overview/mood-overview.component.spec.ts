import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodOverviewComponent } from './mood-overview.component';

describe('MoodOverviewComponent', () => {
  let component: MoodOverviewComponent;
  let fixture: ComponentFixture<MoodOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
