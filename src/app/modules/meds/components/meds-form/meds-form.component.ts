import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MedsModel} from '../../../../../models/meds.model';
import {DbService} from '../../../shared/services/db.service';

@Component({
  selector: 'app-meds-form',
  templateUrl: './meds-form.component.html',
  styleUrls: ['./meds-form.component.scss']
})
export class MedsFormComponent implements OnInit {

  @Input() med: MedsModel;

  constructor(
    private database: DbService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    this.database.addMed(this.med).subscribe(() => {
      this.router.navigateByUrl('/meds');
    });
  }
}
