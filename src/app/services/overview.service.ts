import { Injectable }  from '@angular/core';
import {OverviewModel} from '../../models/overview.model';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor() { }

  overviewBefore(list: OverviewModel[], before: Date) {
    return list.filter(model => {
      return model.createdAt > before;
    });
  }

  overviewOldest(list: OverviewModel[]): OverviewModel {
    return list.reduce((previous, current) => {
      return previous.createdAt > current.createdAt ? current : previous;
    });
  }

  getMoodAverage(list: OverviewModel[]): number {
    if (list.length === 0) {
      return 5;
    }

    let moods = 0;

    list.forEach(model => {
      moods += model.mood;
    });

    return Math.round(moods / list.length);
  }
}
