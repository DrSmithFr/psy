import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Output() opening = new EventEmitter<true>();

  constructor() { }

  ngOnInit() {
  }

  onMenuClick() {
    this.opening.emit(true);
  }

}
