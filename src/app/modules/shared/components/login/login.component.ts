import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoggerService} from '../../services/logger.service';

@Component(
  {
    selector:    'app-login',
    templateUrl: './login.component.html',
    styleUrls:   ['./login.component.scss']
  }
)
export class LoginComponent implements OnInit {

  loginForm = this.fb.group(
    {
      password: ['', Validators.required],
    }
  );

  registerForm = this.fb.group(
    {
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {validators: LoginComponent.validatePasswordRepetition}
  );

  constructor(
    private fb: FormBuilder,
    private logger: LoggerService,
    public auth: AuthService
  ) {
  }

  static validatePasswordRepetition(group: FormGroup) {
    const password = group.controls.password.value;
    const confirmPassword = group.controls.confirmPassword.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  ngOnInit() {
  }

  encodePassword() {
    this.logger.debug('start encode password');
    this
      .auth
      .addPassword(this.registerForm.get('password').value)
      .subscribe(
        encoded => {
          this.logger.debug('password encoded: ' + encoded);
        },
        error => {
          this.logger.error(error.message);
        }
      );
  }

  login() {
    this.logger.debug('logging');
    this
      .auth
      .login(this.loginForm.get('password').value)
      .subscribe(
        result => {
          this.logger.debug(result ? 'logged' : 'cannot login');
        },
        error => {
          this.logger.error(error.message);
        }
      );
  }
}
