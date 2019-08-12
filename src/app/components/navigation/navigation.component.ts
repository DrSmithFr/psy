import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NotifierService} from '../../services/notifier.service';

@Component(
  {
    selector:    'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls:   ['./navigation.component.scss']
  }
)
export class NavigationComponent implements OnInit {

  @Output() opening = new EventEmitter<true>();

  constructor(
    public notifier: NotifierService
  ) {
  }

  ngOnInit() {
  }

  onMenuClick() {
    this.opening.emit(true);
  }

}
