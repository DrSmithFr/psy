import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureAreaSettingsComponent } from './secure-area-settings.component';

describe('SecureAreaSettingsComponent', () => {
  let component: SecureAreaSettingsComponent;
  let fixture: ComponentFixture<SecureAreaSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureAreaSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureAreaSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
