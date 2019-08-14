import {Component, Input, OnInit} from '@angular/core';
import {MedsModel} from '../../../models/meds.model';
import {DbService} from '../../services/db.service';
import {Router} from '@angular/router';

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
