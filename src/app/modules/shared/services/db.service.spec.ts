import { TestBed } from '@angular/core/testing';

import { DbService } from './db.service';

describe('IdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbService = TestBed.get(DbService);
    expect(service).toBeTruthy();
  });
});
