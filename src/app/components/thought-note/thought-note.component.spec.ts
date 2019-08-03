import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtNoteComponent } from './thought-note.component';

describe('ThoughtNoteComponent', () => {
  let component: ThoughtNoteComponent;
  let fixture: ComponentFixture<ThoughtNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
