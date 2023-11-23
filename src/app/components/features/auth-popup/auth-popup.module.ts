import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthModule } from '../../../modules/auth/auth.module';
import { AuthPopupComponent } from './auth-popup.component';
import { AuthFormModule } from '../auth-form/auth-form.module';
import { UserModule } from '../../../modules/user/user.module';

@NgModule({
  declarations: [AuthPopupComponent],
  exports: [AuthPopupComponent],
  imports: [UserModule, AuthModule, CommonModule, AuthFormModule, RouterLink],
})
export class AuthPopupModule {}
