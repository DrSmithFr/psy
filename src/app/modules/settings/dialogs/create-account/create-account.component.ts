import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Argon2Service} from '../../../shared/services/argon2.service';
import {AuthService} from '../../../shared/services/auth.service';
import {LoggerService} from '../../../shared/services/logger.service';

@Component(
  {
    selector:    'app-create-account',
    templateUrl: './create-account.component.html',
    styleUrls:   ['./create-account.component.scss']
  }
)
export class CreateAccountComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateAccountComponent>,
    private router: Router,
    private crypto: Argon2Service,
    private auth: AuthService,
    private logger: LoggerService
  ) {
  }

  ngOnInit() {

  }

  createAccount() {
    this.logger.debug('creating account');

    this
      .auth
      .register('5646')
      .subscribe(
        () => {
          this.logger.debug('account created');
          this.dialogRef.close();
        },
        error => {
          this.logger.error(error.message);
        }
      );
  }
}
