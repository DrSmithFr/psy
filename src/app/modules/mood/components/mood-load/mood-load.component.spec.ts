import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodLoadComponent } from './mood-load.component';

describe('MoodLoadComponent', () => {
  let component: MoodLoadComponent;
  let fixture: ComponentFixture<MoodLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoodLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoodLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
