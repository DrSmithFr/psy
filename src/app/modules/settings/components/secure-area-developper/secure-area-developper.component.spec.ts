import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureAreaDevelopperComponent } from './secure-area-developper.component';

describe('SecureAreaDevelopperComponent', () => {
  let component: SecureAreaDevelopperComponent;
  let fixture: ComponentFixture<SecureAreaDevelopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureAreaDevelopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureAreaDevelopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
