import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AuthService,
  EAuthPopUpState,
} from '../../../../modules/auth/auth.service';
import { catchError, ObservableInput } from 'rxjs';
import { UserService } from '../../../../modules/user/user.service';
import { AuthRepository } from '../../../../modules/auth/repository/auth';
import { NotifierService } from 'angular-notifier';
import { ILoginResponseDTO } from '../../../../modules/auth/dto/login.dto';
import { SubscriptionService } from 'src/app/modules/subscription/subscription.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent implements OnInit {
  public isLoading = false;
  public passwordControlType = 'password';

  public form = new FormGroup({
    login: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  constructor(
    public readonly authService: AuthService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _authRepository: AuthRepository,
    private readonly _userService: UserService,
    private readonly _notifierService: NotifierService,
    private readonly _subscriptionService: SubscriptionService
  ) {}

  ngOnInit() {
    Object.values(this.form.controls).map((item) => {
      item.valueChanges.subscribe(() => {
        this.authService.isOneOfAuthFormIsInvalid =
          item.invalid && item.touched;
      });
    });
  }

  public get loginControl(): FormControl {
    return this.form.controls.login;
  }

  public get passwordControl(): FormControl {
    return this.form.controls.password;
  }

  public togglePasswordControlType = () => {
    this.passwordControlType =
      this.passwordControlType === 'password' ? 'text' : 'password';
  };

  public get loginControlHasError() {
    return (
      this.loginControl.errors && Object.keys(this.loginControl.errors).length
    );
  }

  public get passwordControlHasError() {
    return (
      this.passwordControl.errors &&
      Object.keys(this.passwordControl.errors).length
    );
  }

  public goToResetPasswordStart() {
    this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: {
        auth: EAuthPopUpState.RESET_PASSWORD_START,
      },
      queryParamsHandling: 'merge',
    });
  }

  public async onSubmit() {
    this.form.disable();
    this.isLoading = true;

    this._authRepository
      .login({
        login: this.form.get('login')?.value?.trim() as string,
        password: this.form.get('password')?.value?.trim() as string,
      })
      .pipe(
        catchError<ILoginResponseDTO, ObservableInput<ILoginResponseDTO>>(
          (selector) => {
            this.form.enable();
            this.isLoading = false;
            this._notifierService.notify(
              'error',
              'Не удалось выполнить вход...'
            );
            return selector;
          }
        )
      )
      .subscribe(async (response) => {
        if (response.success) {
          await this._userService.authorize(response.data);
          this.form.disable();
          this.isLoading = false;
          this.authService.setAuthPopUpState(EAuthPopUpState.HELLO);
          this._subscriptionService.fetchCurrentSubscription();
        }
      });
  }
}
