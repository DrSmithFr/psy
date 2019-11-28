import { TestBed } from '@angular/core/testing';

import { Argon2Service } from './argon2.service';

describe('Argon2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Argon2Service = TestBed.get(Argon2Service);
    expect(service).toBeTruthy();
  });
});
