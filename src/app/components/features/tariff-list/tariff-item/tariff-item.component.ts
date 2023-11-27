import { Component, Input, OnInit } from '@angular/core';
import { ITariff } from 'src/app/modules/subscription/models/tariff';
import { ITariffTheme, TariffThemes } from './tariff-theme';
import { SubscriptionService } from 'src/app/modules/subscription/subscription.service';
import {
  AuthService,
  EAuthPopUpState,
} from 'src/app/modules/auth/auth.service';
import { UserService } from 'src/app/modules/user/user.service';
import { isWithinDays } from 'src/app/shared/utils/within-seven-days';

@Component({
  selector: 'app-tariff-item',
  templateUrl: './tariff-item.component.html',
  styleUrls: ['./tariff-item.component.scss'],
})
export class TariffItemComponent implements OnInit {
  @Input() tariff: ITariff;

  public showHoverDescription: boolean = false;
  public tariffTheme: ITariffTheme;

  constructor(
    private readonly _authService: AuthService,
    private readonly _userService: UserService,
    public readonly _subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.tariffTheme = TariffThemes[this.tariff.id];
  }

  updateTariff(): void {
    if (this._userService.isAuthorized) {
      if (confirm('Изменить тарифный план?')) {
        this._subscriptionService.fetchNewSubscription(this.tariff.id);
      }
    } else {
      if (this._subscriptionService.isTariffPopupOpened) {
        this._subscriptionService.closeTariffPopup();
      }
      this._authService.setAuthPopUpState(EAuthPopUpState.LOGIN);
    }
  }

  isWithinSevenDays(): boolean {
    if (!this._subscriptionService.subscription?.expires_at) {
      return false;
    }
    return isWithinDays(this._subscriptionService.subscription?.expires_at, 7);
  }

  isCurrent(): boolean {
    const isCurrent: boolean =
      this._subscriptionService.subscription?.tariff_id == this.tariff.id;
    return isCurrent;
  }

  getButtonCaption(): string {
    let caption: string = '';

    if (!this._subscriptionService.subscription) {
      caption = 'Повысить тариф';
    } else {
      const subscriptionTariffId =
        this._subscriptionService.subscription.tariff_id;

      caption =
        subscriptionTariffId === this.tariff.id
          ? 'Продлить подписку'
          : subscriptionTariffId > this.tariff.id
          ? 'Перейти'
          : 'Повысить тариф';
    }

    return caption;
  }
}
