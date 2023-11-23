import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../modules/user/user.service";
import {catchError, ObservableInput} from "rxjs";
import {UserRepository} from "../../../../modules/user/repositories/user";
import {IProfileEditResponseDTO} from "../../../../modules/user/dto/profile-edit.dto";
import {NotifierService} from "angular-notifier";
import {IChangePhotoResponseDTO} from "../../../../modules/auth/dto/change-photo.dto";

const NEW_PASSWORD_TEXT = "Новый пароль";

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent {
  public isLoading = false;
  public formBlocked = true;
  public passwordControlType = "password"
  public isPasswordEdited = false;

  private _passwordValidatorValue = Validators.pattern(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/
  );
  private _defaultPasswordValidators = [
    Validators.required,
    Validators.minLength(4)
  ]

  public form = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl<string>('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl<string>('', this._defaultPasswordValidators),
  });

  constructor(
    public userService: UserService,
    private _userRepository: UserRepository,
    private _notifierService: NotifierService,
  ) {
    this.form.setValue({
      name: this.userService.currentUser?.name || "Не заполнено" as string,
      email: this.userService.currentUser?.email || "Не заполнено" as string,
      password: NEW_PASSWORD_TEXT
    })

    this.form.disable();
  }

  public lockForm(brakeUserData?: boolean) {
    this.formBlocked = true;
    this.form.disable();

    this.isPasswordEdited = false;
    this.passwordControlType = "password";
    this.passwordControl.setValue(NEW_PASSWORD_TEXT);
    this.passwordControl.clearValidators();
    this.passwordControl.setValidators(this._defaultPasswordValidators);

    if (brakeUserData) {
      this.nameControl.setValue(this.userService.currentUser?.name || "Не заполнено");
      this.emailControl.setValue(this.userService.currentUser?.email || "Не заполнено");
    }
  }

  public unblockForm() {
    this.formBlocked = false;
    this.form.enable();

    const subs = this.passwordControl.valueChanges.subscribe(() => {
      if (this.isLoading) {
        return;
      }

      this.isPasswordEdited = true;
      if (this.isPasswordEdited) {
        subs.unsubscribe();
        this.passwordControl.setValidators(this._passwordValidatorValue);
        this.passwordControl.updateValueAndValidity();
        this.passwordControl.markAsTouched();
      }
    })
  }

  public get hasUserPhoto() {
    return !!this.userService.currentUser?.photo;
  }

  public get nameControl(): FormControl {
    return this.form.controls.name;
  }

  public get emailControl(): FormControl {
    return this.form.controls.email;
  }

  public get nameControlHasError() {
    return this.nameControl.errors && Object.keys(this.nameControl.errors).length
  }

  public get emailControlHasError() {
    return this.emailControl.errors && Object.keys(this.emailControl.errors).length
  }

  public get passwordControl(): FormControl {
    return this.form.controls.password;
  }

  public get passwordControlHasError() {
    return this.passwordControl.errors && Object.keys(this.passwordControl.errors).length
  }

  public togglePasswordControlType = () => {
    this.passwordControlType = this.passwordControlType === "password" ? "text" : "password";
  }

  public async onAvatarRemove() {
    this._userRepository.removeProfilePhoto()
      .pipe(
        catchError((selector) => {
          this._notifierService.notify("error", "Не удалось удалить фото...")
          return selector;
        })
      )
      .subscribe(() => {
        this._notifierService.notify("success", "Фото удалено!")
        this.userService.updateUserData({
          photo: null,
        });
      });
  }

  public async onAvatarChange($event: Event) {
    const target = $event.target as HTMLInputElement;
    const files = target.files;
    if (!files || !files.length) {
      return;
    }

    const photo = files[0];
    const formData = new FormData();
    formData.append("photo", photo, photo.name);

    ($event.target as HTMLInputElement).value = '';

    this._userRepository.changeProfilePhoto(formData)
      .pipe(
        catchError<IChangePhotoResponseDTO, ObservableInput<IChangePhotoResponseDTO>>((selector) => {
          this._notifierService.notify("error", "Не удалось обновить фото...")
          return selector;
        })
      )
      .subscribe((response) => {
        this._notifierService.notify("success", "Фото успешно добавлено!")
        this.userService.updateUserData({
          photo: response.data,
        });
      });
  }

  public async onProfileEdiSubmit() {
    this.isLoading = true;
    this.form.disable();

    this._userRepository.changeProfile({
      name: this.form.get('name')?.value?.trim() as string,
      email: this.form.get('email')?.value?.trim() as string,
      ...(this.isPasswordEdited ? {
        password: this.passwordControl.value
      } : {})
    }).pipe(
      catchError<IProfileEditResponseDTO, ObservableInput<IProfileEditResponseDTO>>((selector) => {
        this.form.enable();
        this.isLoading = false;
        this._notifierService.notify("error", "Не удалось обновить данные профиля...")

        return selector;
      })
    ).subscribe(async (response) => {
      this.isLoading = false;
      this.userService.updateUserData({
        name: this.nameControl.value,
        email: this.emailControl.value,
      });
      this.lockForm();
    });
  }
}
