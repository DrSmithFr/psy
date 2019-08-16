import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodShortHistoryComponent } from './mood-short-history.component';

describe('MoodShortHistoryComponent', () => {
  let component: MoodShortHistoryComponent;
  let fixture: ComponentFixture<MoodShortHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodShortHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodShortHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
