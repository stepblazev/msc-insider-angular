import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {LoaderIndicatorComponent} from "../../ui/loader-indicator/loader-indicator.component";
import {LoginFormComponent} from "./login-form/login-form.component";
import {RegisterFormComponent} from "./register-form/register-form.component";
import {ResetPasswordFormComponent} from "./reset-password-form/reset-password-form.component";
import {
  ResetPasswordContinueFormComponent
} from './reset-password-continue-form/reset-password-continue-form.component';
import {PasswordEyeComponent} from "../../ui/controls/password-eye/password-eye.component";

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    ResetPasswordFormComponent,
    ResetPasswordContinueFormComponent,
    LoaderIndicatorComponent,
    PasswordEyeComponent
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    ResetPasswordFormComponent,
    ResetPasswordContinueFormComponent,
    LoaderIndicatorComponent,
    PasswordEyeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
})
export class AuthFormModule {
}
