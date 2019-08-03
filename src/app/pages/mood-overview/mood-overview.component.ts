import {Component, OnInit}      from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
             selector:    'app-mood-overview',
             templateUrl: './mood-overview.component.html',
             styleUrls:   ['./mood-overview.component.scss']
           })
export class MoodOverviewComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.firstFormGroup  = this.formBuilder.group(
      {
        firstCtrl: ['']
      }
    );
    this.secondFormGroup = this.formBuilder.group(
      {
        secondCtrl: ['']
      }
    );
  }

}
