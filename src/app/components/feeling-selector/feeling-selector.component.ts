import {Component, Input, OnInit} from '@angular/core';
import {OverviewModel}            from '../../../models/overview.model';

@Component({
  selector: 'app-feeling-selector',
  templateUrl: './feeling-selector.component.html',
  styleUrls: ['./feeling-selector.component.scss']
})
export class FeelingSelectorComponent implements OnInit {

  @Input() overview: OverviewModel;

  public brown: Array<string> = [
    'speed',
    'distracted',
    'agitated'
  ];

  public green: Array<string> = [
    'active',
    'confident',
    'relaxed'
  ];

  public blue: Array<string> = [
    'tired',
    'slow',
    'guilty'
  ];

  public red: Array<string> = [
    'anxious',
    'afraid',
    'angry'
  ];

  constructor() {}

  ngOnInit() {
  }

  toggle(feel: string): void {
    this.overview.toggleFeeling(feel);
  }

  isActive(feel: string): boolean {
    return this.overview.hasFeeling(feel);
  }
}
