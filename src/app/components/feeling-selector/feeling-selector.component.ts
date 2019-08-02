import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeling-selector',
  templateUrl: './feeling-selector.component.html',
  styleUrls: ['./feeling-selector.component.scss']
})
export class FeelingSelectorComponent implements OnInit {

  public brown: Array<string> = [
    'speed',
    'distracted'
  ];

  public green: Array<string> = [
    'active',
    'confident',
    'relax'
  ];

  public blue: Array<string> = [
    'tired',
    'slow'
  ];

  public red: Array<string> = [
    'anxious',
    'afraid',
    'guilty'
  ];

  private active: Array<string> = [];

  constructor() {}

  ngOnInit() {
  }

  toggle(feel: string): void {
    if (this.active.indexOf(feel) === -1) {
      this.active.push(feel);
    } else {
      this.active = this.active.filter(s => s !== feel);
    }
  }

  isActive(feel: string): boolean {
    return this.active.indexOf(feel) !== -1;
  }
}
