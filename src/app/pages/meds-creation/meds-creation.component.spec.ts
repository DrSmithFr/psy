import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsCreationComponent } from './meds-creation.component';

describe('MedsCreationComponent', () => {
  let component: MedsCreationComponent;
  let fixture: ComponentFixture<MedsCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedsCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
