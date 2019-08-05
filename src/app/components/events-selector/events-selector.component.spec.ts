import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSelectorComponent } from './events-selector.component';

describe('EventsSelectorComponent', () => {
  let component: EventsSelectorComponent;
  let fixture: ComponentFixture<EventsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
