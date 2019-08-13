import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {filter, switchMap} from 'rxjs/operators';
import {DbService} from '../../services/db.service';
import {MedsModel} from '../../../models/meds.model';

@Component(
  {
    selector:    'app-meds-edition',
    templateUrl: './meds-edition.component.html',
    styleUrls:   ['./meds-edition.component.scss']
  }
)
export class MedsEditionComponent implements OnInit {

  public med: MedsModel | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private database: DbService
  ) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this
      .database
      .getMeds()
      .subscribe((list: Array<MedsModel>) => {
        const med = list.filter((item: MedsModel) => '' + item.id === id);

        if (med.length) {
          this.med = med[0];
        }
      });
  }

}
