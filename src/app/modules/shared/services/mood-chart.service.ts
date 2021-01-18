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
    const today                          = new Date();
    const before                         = new Date(today.getTime() - 30 * 24 * 3600 * 1000);
    const elements: Array<OverviewModel> = this.stats.overviewBefore(list, before);

    const daysMatrices = elements
      .reduce(
        (carry, current) => {
          const key = current.createdAt.toDateString();

          if (!carry.has(key)) {
            carry.set(key, []);
          }

          carry.get(key).push(current);

          return carry;
        },
        new Map<string, OverviewModel[]>()
      );

    const daysAverages: Array<OverviewModel> = [];

    daysMatrices.forEach((values, key) => {
      const sum      = values.reduce((sum, current) => sum + current.mood, 0);
      const average  = sum / values.length;
      const overview = new OverviewModel();

      overview.id        = daysAverages.length;
      overview.mood      = average;
      overview.createdAt = new Date(key);

      daysAverages.push(overview);
    });

    return daysAverages;
  }

  getOverviewOfTheYear(list: OverviewModel[]): OverviewModel[] {
    const today  = new Date();
    const before = new Date(today.getTime() - 365 * 24 * 3600 * 1000);

    const elements: Array<OverviewModel> = this.stats.overviewBefore(list, before);

    const daysMatrices = elements
      .reduce(
        (carry, current) => {
          const key = current.createdAt.toDateString();

          if (!carry.has(key)) {
            carry.set(key, []);
          }

          carry.get(key).push(current);

          return carry;
        },
        new Map<string, OverviewModel[]>()
      );

    const daysAverages: Array<OverviewModel> = [];

    daysMatrices.forEach((values, key) => {
      const sum      = values.reduce((sum, current) => sum + current.mood, 0);
      const average  = sum / values.length;
      const overview = new OverviewModel();

      overview.id        = daysAverages.length;
      overview.mood      = average;
      overview.createdAt = new Date(key);

      daysAverages.push(overview);
    });

    const monthsMatrices = elements
      .reduce(
        (carry, current) => {
          const key = current.createdAt.getFullYear() + '-' + Number(current.createdAt.getMonth() + 1);

          if (!carry.has(key)) {
            carry.set(key, []);
          }

          carry.get(key).push(current);

          return carry;
        },
        new Map<string, OverviewModel[]>()
      );

    const monthsAverage: Array<OverviewModel> = [];

    monthsMatrices.forEach((values, key) => {
      const sum      = values.reduce((sum, current) => sum + current.mood, 0);
      const average  = sum / values.length;
      const overview = new OverviewModel();

      overview.id        = monthsAverage.length;
      overview.mood      = average;

      const year = Number(key.split('-')[0]);
      const month = Number(key.split('-')[1]);

      overview.createdAt = new Date(Date.UTC(year, month, 1));

      monthsAverage.push(overview);
    });

    return monthsAverage;
  }
}
