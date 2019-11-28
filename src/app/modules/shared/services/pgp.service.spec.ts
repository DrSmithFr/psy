import { TestBed } from '@angular/core/testing';

import { PgpService } from './pgp.service';

describe('PgpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PgpService = TestBed.get(PgpService);
    expect(service).toBeTruthy();
  });
});
