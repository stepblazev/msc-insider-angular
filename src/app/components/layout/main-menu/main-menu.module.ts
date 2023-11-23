import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { UserBarComponent } from './user-bar/user-bar.component';
import { RouterLink } from '@angular/router';
import { TruncateTextPipe } from '../../../shared/pipes/truncate-text.pipe';
import { PopupComponent } from '../../ui/popup/popup.component';
import { TariffListComponent } from '../../others/tariff-list/tariff-list.component';

@NgModule({
  declarations: [MainMenuComponent, UserBarComponent, TruncateTextPipe],
  exports: [MainMenuComponent],
  imports: [CommonModule, RouterLink, PopupComponent, TariffListComponent],
})
export class MainMenuModule {}
