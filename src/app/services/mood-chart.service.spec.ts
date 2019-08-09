import { TestBed } from '@angular/core/testing';

import { MoodChartService } from './mood-chart.service';

describe('MoodChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoodChartService = TestBed.get(MoodChartService);
    expect(service).toBeTruthy();
  });
});
