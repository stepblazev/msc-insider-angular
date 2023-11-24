import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileSubscriptionsComponent } from './profile-subscriptions/profile-subscriptions.component';
import { ProfileTariffsComponent } from './profile-tariffs/profile-tariffs.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthFormModule } from '../../features/auth-form/auth-form.module';
import { TariffListModule } from '../../features/tariff-list/tariff-list.module';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSubscriptionsComponent,
    ProfileTariffsComponent,
    ProfileHomeComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    AuthFormModule,
    TariffListModule,
  ],
})
export class ProfileScreenModule {}
