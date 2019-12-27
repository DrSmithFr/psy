import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {CreateAccountComponent} from '../../dialogs/create-account/create-account.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  createAccount() {
    this.dialog.open(CreateAccountComponent, {
      width:       '95%',
      hasBackdrop: true
    });
  }
}
