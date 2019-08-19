import { TestBed } from '@angular/core/testing';

import { MoodLoadService } from './mood-load.service';

describe('MoodLoadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoodLoadService = TestBed.get(MoodLoadService);
    expect(service).toBeTruthy();
  });
});
