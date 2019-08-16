import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewDisplayComponent } from './overview-display.component';

describe('OverviewDisplayComponent', () => {
  let component: OverviewDisplayComponent;
  let fixture: ComponentFixture<OverviewDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
