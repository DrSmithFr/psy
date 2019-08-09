import {Injectable} from '@angular/core';
import {OverviewService} from './overview.service';
import {OverviewModel} from '../../models/overview.model';

@Injectable({
              providedIn: 'root'
            })
export class MoodChartService {

  constructor(
    private stats: OverviewService
  ) {
  }

  getOverviewOfTheWeek(list: OverviewModel[]): OverviewModel[] {
    const today     = new Date();
    const lastMonth = new Date(today.getDate() - 7);
    return this.stats.overviewBefore(list, lastMonth);
  }

  convertToSlicedData(list: OverviewModel[]): object[] {
    return list.map(overview => {
      return {
        name: 'mood',
        value: overview.mood
      };
    });
  }
}
