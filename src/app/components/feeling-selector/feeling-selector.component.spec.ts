import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingSelectorComponent } from './feeling-selector.component';

describe('FeelingSelectorComponent', () => {
  let component: FeelingSelectorComponent;
  let fixture: ComponentFixture<FeelingSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeelingSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
