import {Component, Input, OnInit} from '@angular/core';
import {MedsModel} from '../../../../../models/meds.model';

@Component({
  selector: 'app-med-display',
  templateUrl: './med-display.component.html',
  styleUrls: ['./med-display.component.scss']
})
export class MedDisplayComponent implements OnInit {

  @Input() med: MedsModel;

  constructor() { }

  ngOnInit() {
  }

}
