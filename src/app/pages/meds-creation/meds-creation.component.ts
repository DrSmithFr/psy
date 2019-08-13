import { Component, OnInit } from '@angular/core';
import {MedsModel} from '../../../models/meds.model';

@Component({
  selector: 'app-meds-creation',
  templateUrl: './meds-creation.component.html',
  styleUrls: ['./meds-creation.component.scss']
})
export class MedsCreationComponent implements OnInit {

  public med = new MedsModel();

  constructor() { }

  ngOnInit() {
  }

}
