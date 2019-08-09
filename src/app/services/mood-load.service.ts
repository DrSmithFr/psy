import {Injectable}      from '@angular/core';
import {OverviewModel}   from '../../models/overview.model';
import {OverviewService} from './overview.service';
import {LoadModel} from '../../models/load.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class MoodLoadService {

  constructor(
    private stats: OverviewService
  ) {
  }

  getMoodLoad(list: OverviewModel[]): LoadModel[] {
    const overviews = this.getOverviewForPeriods(list);

    return [
      this.getLoadModel(overviews[0]),
      this.getLoadModel(overviews[1]),
      this.getLoadModel(overviews[2]),
    ];
  }

  getLoadModel(list: OverviewModel[]): LoadModel {
    const load = new LoadModel();

    load.mood = this.stats.getMoodAverage(list);
    load.feeling = this.stats.getFeelings(list);

    return load;
  }

  getOverviewForPeriods(list: OverviewModel[]): Array<OverviewModel>[] {
    const periods = this.getPeriods(list);

    return [
      this.stats.overviewBefore(list, periods[0]),
      this.stats.overviewBefore(list, periods[1]),
      this.stats.overviewBefore(list, periods[2]),
    ];
  }

  getPeriods(list: OverviewModel[]): Date[] {
    const periods = this.determinePeriods(list);

    const today = new Date();

    const result = [
      this.minusDays(today, periods[0]),
      this.minusDays(today, periods[1]),
      this.minusDays(today, periods[2]),
    ];

    return result;
  }

  public determinePeriods(list: OverviewModel[]): number[] {
    const oldest = this.stats.overviewOldest(list);
    const diff = this.daysBetween(oldest.createdAt, new Date());

    if (diff < 7) {
      return [1, 2, 3];
    } else if (diff < 31) {
      return [1, 7, 7 * 2];
    } else if (diff < 31 * 3) {
      return [1, 14, 31];
    }

    return [1, 31, 31 * 3];
  }

  private daysBetween(a: Date, b: Date): number {
    const diff = Math.abs(a.getTime() - b.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  private minusDays(date: Date, days: number): Date {
    return new Date(date.getTime() - 1000 * 3600 * 24 * days);
  }
}
