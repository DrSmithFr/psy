import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsEditionComponent } from './meds-edition.component';

describe('MedsEditionComponent', () => {
  let component: MedsEditionComponent;
  let fixture: ComponentFixture<MedsEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedsEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedsEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
