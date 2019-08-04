import {Component, ViewChild} from '@angular/core';
import {MatSidenav}           from '@angular/material';
import {DbService}            from './services/db.service';
import {TranslatorService}    from './services/translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private database: DbService,
    private translator: TranslatorService
  ) {
    database.connect();
    translator.init();
  }

  close() {
    this.sidenav.close();
  }
}
