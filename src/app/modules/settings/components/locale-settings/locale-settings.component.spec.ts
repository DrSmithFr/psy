import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleSettingsComponent } from './locale-settings.component';

describe('LocaleSettingsComponent', () => {
  let component: LocaleSettingsComponent;
  let fixture: ComponentFixture<LocaleSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocaleSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocaleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
