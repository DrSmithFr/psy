import {Component, OnInit} from '@angular/core';
import {DbService} from '../../../shared/services/db.service';
import * as Faker from 'faker';
import {OverviewModel} from '../../../../../models/overview.model';
import {forkJoin, Observable} from 'rxjs';
import {LoggerService} from '../../../shared/services/logger.service';

@Component(
  {
    selector:    'app-secure-area-developper',
    templateUrl: './secure-area-developper.component.html',
    styleUrls:   ['./secure-area-developper.component.scss']
  }
)
export class SecureAreaDevelopperComponent implements OnInit {

  constructor(
    private db: DbService,
    private logger: LoggerService
  ) {
  }

  ngOnInit() {
  }

  generateData() {
    this.logger.debug('generating data');

    const today = new Date();
    const limit = new Date();

    limit.setDate(limit.getDate() - 120);

    const observabes = [];

    while (limit <= today) {
      const morning  = new Date(limit);
      const midday   = new Date(limit);
      const midnight = new Date(limit);

      morning.setHours(8);
      midday.setHours(12);
      midnight.setHours(20);

      observabes.push(this.generateDataAt(morning));
      observabes.push(this.generateDataAt(midday));
      observabes.push(this.generateDataAt(midnight));

      limit.setDate(limit.getDate() + 1);
    }

    forkJoin(...observabes)
      .subscribe(result => {
        console.log(result);
        this.logger.debug('data generated');
      });
  }

  private generateDataAt(limit: Date): Observable<OverviewModel> {
    const overview = new OverviewModel();

    const feelings: string[] = [];

    for (let index = 0; index < 3; index++) {
      overview.addFeeling(Faker.random.arrayElement(['speed', 'distracted', 'agitated']));
    }

    const events: string[] = [];
    for (let index = 0; index < 10; index++) {
      overview.addEvent(Faker.random.arrayElement(['speed', 'distracted', 'agitated']));
    }

    overview.mood      = Faker.random.number(10);
    overview.note      = Faker.lorem.lines(Faker.random.number(3));
    overview.createdAt = limit;

    return this.db.addOverview(overview);
  }
}
