import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHistoricComponent } from './event-historic.component';

describe('EventHistoricComponent', () => {
  let component: EventHistoricComponent;
  let fixture: ComponentFixture<EventHistoricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventHistoricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventHistoricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
