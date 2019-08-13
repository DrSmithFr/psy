import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedDisplayComponent } from './med-display.component';

describe('MedDisplayComponent', () => {
  let component: MedDisplayComponent;
  let fixture: ComponentFixture<MedDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
