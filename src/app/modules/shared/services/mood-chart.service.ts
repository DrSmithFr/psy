import {Injectable} from '@angular/core';
import {OverviewService} from './overview.service';
import {OverviewModel} from '../../../../models/overview.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class MoodChartService {

  constructor(
    private stats: OverviewService
  ) {
  }

  getOverviewOfTheWeek(list: OverviewModel[]): OverviewModel[] {
    const today  = new Date();
    const before = new Date(today.getTime() - 7 * 24 * 3600 * 1000);
    return this.stats.overviewBefore(list, before);
  }

  getOverviewOfTheMonth(list: OverviewModel[]): OverviewModel[] {
    const today  = new Date();
    const before = new Date(today.getTime() - 30 * 24 * 3600 * 1000);
    return this.stats.overviewBefore(list, before);
  }

  getOverviewOfTheYear(list: OverviewModel[]): OverviewModel[] {
    const today  = new Date();
    const before = new Date(today.getTime() - 365 * 24 * 3600 * 1000);
    return this.stats.overviewBefore(list, before);
  }
}
