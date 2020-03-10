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

    getOverviewOfTheMonth(list: OverviewModel[]): OverviewModel[] {
        const today  = new Date();
        const before = new Date(today.getTime() - 30 * 24 * 3600 * 1000);
        return this.stats.overviewBefore(list, before);
    }

    convertToSlicedData(list: OverviewModel[]): object[] {
        return list.map(overview => {
            return {
                name:  'mood',
                value: overview.mood
            };
        });
    }
}
