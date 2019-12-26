import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    this
      .auth
      .addPassword(this.registerForm.get('password').value)
      .then(
        () => {
        },
        error => {
          console.error(error);
        }
      );
  }

  login() {
    this
      .auth
      .login(this.loginForm.get('password').value)
      .then(
        result => {
          console.log(result);
        },
        error => {
          console.error(error);
        }
      );
  }
}
