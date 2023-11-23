import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService, EAuthPopUpState, TResetPasswordContinueParams} from "../../../../modules/auth/auth.service";
import {AuthRepository} from "../../../../modules/auth/repository/auth";
import {NotifierService} from "angular-notifier";
import {UserService} from "../../../../modules/user/user.service";
import {catchError, ObservableInput} from "rxjs";
import {IResetPasswordStartResponseDTO} from "../../../../modules/auth/dto/reset-password-start.dto";
import {Router} from "@angular/router";
import * as qs from "qs"

@Component({
  selector: 'app-reset-password-continue-form',
  templateUrl: './reset-password-continue-form.component.html',
  styleUrls: ['./reset-password-continue-form.component.scss']
})
export class ResetPasswordContinueFormComponent {
  public isLoading = false;
  public isSuccess = false;
  public passwordControlType = "password"

  public form = new FormGroup({
    password: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/
      ),
      Validators.minLength(4)
    ]),
  });

  public togglePasswordControlType = () => {
    this.passwordControlType = this.passwordControlType === "password" ? "text" : "password";
  }

  public get passwordControl(): FormControl {
    return this.form.controls.password;
  }

  public get passwordControlHasError() {
    return this.passwordControl.errors && Object.keys(this.passwordControl.errors).length
  }

  constructor(
    public readonly authService: AuthService,
    private readonly _authRepository: AuthRepository,
    private readonly _notifierService: NotifierService,
    private readonly _router: Router,
    private readonly _userService: UserService
  ) {
  }

  public async onSubmit() {
    if (this.isSuccess) {
      this.authService.setAuthPopUpState(EAuthPopUpState.LOGIN);
      return;
    }

    const parsedQuery = qs.parse(this._router.url.split('?')[1]) as TResetPasswordContinueParams;
    this.form.disable();
    this.isLoading = true;

    this._authRepository.resetPasswordContinue({
      code: parsedQuery['reset-id'] as string,
      password: this.passwordControl.value.trim(),
    }).pipe(
      catchError<IResetPasswordStartResponseDTO, ObservableInput<IResetPasswordStartResponseDTO>>((selector) => {
        this.form.enable();
        this.isLoading = false;
        this._notifierService.notify("error", "Не удалось сменить пароль...")

        return selector;
      })
    ).subscribe(async (response) => {
      if (response.success) {
        this.form.enable();
        this.passwordControl.disable();
        this.isSuccess = true;
        this.isLoading = false;
      }
    });
  }
}
