import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component(
  {
    selector:    'app-breath',
    templateUrl: './breath.component.html',
    styleUrls:   ['./breath.component.scss']
  }
)
export class BreathComponent implements OnInit {

  @ViewChild('canvas', {static: true}) canvas: ElementRef<HTMLCanvasElement>;

  constructor() {
  }

  ngOnInit() {

  }

}
