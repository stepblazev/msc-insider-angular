import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService, EAuthPopUpState} from "../../../../modules/auth/auth.service";
import {AuthRepository} from "../../../../modules/auth/repository/auth";
import {NotifierService} from "angular-notifier";
import {UserService} from "../../../../modules/user/user.service";
import {IResetPasswordStartResponseDTO} from "../../../../modules/auth/dto/reset-password-start.dto";
import {catchError, ObservableInput} from "rxjs";

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
})
export class ResetPasswordFormComponent {
  public isLoading = false;
  public isSuccess = false;

  public form = new FormGroup({
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email,
    ]),
  });

  public get emailControl(): FormControl {
    return this.form.controls.email;
  }

  public get emailControlHasError() {
    return this.emailControl.errors && Object.keys(this.emailControl.errors).length
  }

  constructor(
    public readonly authService: AuthService,
    private readonly _authRepository: AuthRepository,
    private readonly _notifierService: NotifierService,
    private readonly _userService: UserService
  ) {
  }

  public async onSubmit() {
    if (this.isSuccess) {
      this.authService.setAuthPopUpState(EAuthPopUpState.CLOSED);
      return;
    }

    this.form.disable();
    this.isLoading = true;

    const success = () => {
      this.form.enable();
      this.emailControl.disable();
      this.isSuccess = true;
      this.isLoading = false;
    }

    this._authRepository.resetPasswordStart({
      email: this.form.get('email')?.value?.trim() as string,
    }).pipe(
      catchError<IResetPasswordStartResponseDTO, ObservableInput<IResetPasswordStartResponseDTO>>((selector, next) => {
        if (selector.status === 200) {
          success()
          return selector;
        }

        this.form.enable();
        this.isLoading = false;
        this._notifierService.notify("error", "Не удалось отправить письмо для восстановления пароля...")

        return selector;
      })
    ).subscribe(async (response) => {
      if (response.success) {
        success()
      }
    });
  }
}
