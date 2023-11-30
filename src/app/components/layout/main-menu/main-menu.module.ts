import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { UserBarComponent } from './user-bar/user-bar.component';
import { RouterLink } from '@angular/router';
import { TruncateTextPipe } from '../../../shared/pipes/truncate-text.pipe';
import { PopupComponent } from '../../ui/popup/popup.component';
import { SubscriptionModule } from 'src/app/modules/subscription/subscription.module';

@NgModule({
  declarations: [MainMenuComponent, UserBarComponent, TruncateTextPipe],
  imports: [CommonModule, RouterLink, PopupComponent, SubscriptionModule],
  exports: [MainMenuComponent],
})
export class MainMenuModule {}
