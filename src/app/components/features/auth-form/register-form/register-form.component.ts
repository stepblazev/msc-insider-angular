import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService, EAuthPopUpState} from "../../../../modules/auth/auth.service";
import {AuthRepository} from "../../../../modules/auth/repository/auth";
import {catchError, ObservableInput} from "rxjs";
import {NotifierService} from "angular-notifier";
import {IRegisterResponseDTO} from "../../../../modules/auth/dto/register.dto";
import {UserService} from "../../../../modules/user/user.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent implements OnInit{
  public isLoading = false;
  public passwordControlType = "password"

  public form = new FormGroup({
    fio: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/
      ),
      Validators.minLength(4)
    ]),
  });

  constructor(
    public readonly authService: AuthService,
    private readonly _authRepository: AuthRepository,
    private readonly _notifierService: NotifierService,
    private readonly _userService: UserService
  ) {
  }

  ngOnInit() {
    Object.values(this.form.controls).map(item => {
      item.valueChanges.subscribe(() => {
        this.authService.isOneOfAuthFormIsInvalid = item.invalid && item.touched;
      });
    });
  }

  public togglePasswordControlType = () => {
    this.passwordControlType = this.passwordControlType === "password" ? "text" : "password";
  }

  public get fioControl(): FormControl {
    return this.form.controls.fio;
  }

  public get emailControl(): FormControl {
    return this.form.controls.email;
  }

  public get passwordControl(): FormControl {
    return this.form.controls.password;
  }

  public get fioControlHasError() {
    return this.fioControl.errors && Object.keys(this.fioControl.errors).length
  }

  public get emailControlHasError() {
    return this.emailControl.errors && Object.keys(this.emailControl.errors).length
  }

  public get passwordControlHasError() {
    return this.passwordControl.errors && Object.keys(this.passwordControl.errors).length
  }

  public async onSubmit() {
    this.form.disable();
    this.isLoading = true;

    this._authRepository.register({
      fio: this.form.get('fio')?.value?.trim() as string,
      email: this.form.get('email')?.value?.trim() as string,
      password: this.form.get('password')?.value?.trim() as string,
    }).pipe(
      catchError<IRegisterResponseDTO, ObservableInput<IRegisterResponseDTO>>((selector) => {
        this.form.enable();
        this.isLoading = false;
        this._notifierService.notify("error", "Не удалось выполнить регистрацию...")

        return selector;
      })
    ).subscribe(async (response) => {
      if (response.success) {
        await this._userService.authorize(response.data);
        this.form.disable();
        this.isLoading = false;
        this.authService.setAuthPopUpState(EAuthPopUpState.HELLO);
      }
    });
  }
}
