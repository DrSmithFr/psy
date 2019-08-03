import {Component, Input, OnInit} from '@angular/core';
import {OverviewModel}            from '../../../models/overview.model';

@Component({
  selector: 'app-thought-note',
  templateUrl: './thought-note.component.html',
  styleUrls: ['./thought-note.component.scss']
})
export class ThoughtNoteComponent implements OnInit {

  @Input() overview: OverviewModel;

  constructor() { }

  ngOnInit() {
  }

}
