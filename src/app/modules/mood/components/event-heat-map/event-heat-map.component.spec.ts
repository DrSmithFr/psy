import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHeatMapComponent } from './event-heat-map.component';

describe('EventHeatMapComponent', () => {
  let component: EventHeatMapComponent;
  let fixture: ComponentFixture<EventHeatMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHeatMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
